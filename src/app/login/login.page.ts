import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(
    private http:HttpClient,
    private router: Router,
    private appComponent: AppComponent,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /******************************************************************************* */

  /**
   * Autenticar
   */

  login(){

    var _this = this;
    this.error = 0;
    this.spinner.show();

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();
   
    //  Validar campos obligatorios

    if(!$("#emailLogin").val() || !$("#passwordLogin").val()){

      this.error = 1;
      this.msg = "Faltan campos por diligenciar";

    }

    //  Verificar que el usuario se encuentre registrado y activo

    if(this.error == 0){

      let getUser = new FormData();

      getUser.append("email", $("#emailLogin").val());
      getUser.append("password", $("#passwordLogin").val());
      getUser.append("login", "1");

      this.postModel("getUser",getUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          this.msg = "Autenticado correctamente";
          $(".success").show();
          this.spinner.hide();

          setTimeout(function(){

            $(".success").hide();

            sessionStorage.setItem("email", result[0].email);
            sessionStorage.setItem("user", result[0].user);
            sessionStorage.setItem("profile",result[0].profile);
            $("input").val("");

            _this.appComponent.validateAuth();
            _this.router.navigateByUrl('home');

          },1000);

        }else{

          $("input").val("");
          this.msg = "Los datos ingresados no son válidos";
          $(".warning").show();
          _this.spinner.hide();

        }

      });

    }

    //  Mostrar errores

    if(this.error == 1){

      $(".error").show();
      _this.spinner.hide();
      
    }

  }

  /******************************************************************************* */

  /**
   * Recuperar contraseña
   */

  recoveryPassword(){

    this.router.navigateByUrl('recovery');

  }

}
