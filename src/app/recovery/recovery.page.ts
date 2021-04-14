import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

declare var $;

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(
    private http:HttpClient,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /*********************************************************************** */

  /**
   * Recuperar contraseña
   */

  recoveryPassword(){

    var _this = this;
    this.error = 0;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();
   
    //  Validar campos obligatorios

    if(!$("#emailRecovery").val()){

      this.error = 1;
      this.msg = "Faltan campos por diligenciar";

    }

    //  Verificar que el usuario se encuentre registrado y activo

    if(this.error == 0){

      let getUser = new FormData();

      getUser.append("email", $("#emailRecovery").val());
      getUser.append("password", '');

      this.postModel("getUser",getUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          $("input").val("");
          this.msg = "Se ha enviado un correo electrónico para recuperar su contraseña, por favor verificar";
          $(".success").show();

        }else{

          $("input").val("");
          this.msg = "El correo electrónico no se encuentra registrado";
          $(".warning").show();

        }

      });

    }
    
    //  Mostrar errores

    if(this.error == 1)
      $(".error").show();

  }

}
