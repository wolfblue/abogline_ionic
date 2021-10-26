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

      let apiAboglineLoginConsultarUsuarioActivo = new FormData();

      apiAboglineLoginConsultarUsuarioActivo.append("usuarioEmail", $("#emailLogin").val());
      apiAboglineLoginConsultarUsuarioActivo.append("password", $("#passwordLogin").val());

      this.postModel("apiAboglineLoginConsultarUsuarioActivo",apiAboglineLoginConsultarUsuarioActivo).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        //  Loading hide
        this.spinner.hide();

        //  Validar si es admin y no esta por la url correcta

        var url = this.router.url;

        if(url.split("login").length > 1 && result[0].usuario == "admin")
          result = [];

        if(result.length > 0){  // Existe el usuario

          //  Actualizar datos de sesión

          sessionStorage.setItem("usuario", result[0].usuario);
          sessionStorage.setItem("email", result[0].email);
          sessionStorage.setItem("perfil",result[0].perfil);
          
          //  Limpiar campos del formulario
          $("input").val("");

          //  Ir al home
          window.location.href = 'home';

        }else{  //  El usuario no existe

          //  Limpiar campos del formulario
          $("input").val("");

          //  Mostrar mensaje de error de autenticación

          this.msg = "Los datos ingresados no son válidos";
          $(".warning").show();

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
