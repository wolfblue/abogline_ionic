import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */

  /**
   * Modal confirmar
   */

   modalConfirmar(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirm").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      _this.registerUser();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */

  /**
   * Registar usuario
   */

  registerUser(){

    //  Variables iniciales

    this.error = 0;
    this.spinner.show();

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    //  Verificar campos obligatorios

    if(!$("#user").val() || !$("#email").val() || !$("#password").val() || !$("#passwordConfirm").val() || $("#termsCliente").prop("checked") == false){

      this.error = 1;
      this.msg = "Faltan campos por diligenciar";

    }

    //  Verificar si las contraseñas coinciden

    if(this.error == 0 && $("#password").val() != $("#passwordConfirm").val()){

      this.error = 1;
      this.msg = "Las contraseñas no coinciden";

    }

    //  Verificar si el usuario existe

    if(this.error == 0){

      let getUser = new FormData();

      getUser.append("user", $("#user").val());
      getUser.append("email", $("#email").val());
      getUser.append("password", "");

      this.postModel("getUser",getUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          this.spinner.hide();

          $("input").val("");
            this.msg = "El usuario ya se encuentra registrado";
            $(".warning").show();

        }else{

          let createUser = new FormData();

          createUser.append("active", "1");
          createUser.append("user", $("#user").val());
          createUser.append("email", $("#email").val());
          createUser.append("password", $("#password").val());
          createUser.append("profile", $("#perfil").val());

          this.postModel("createUser",createUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

            this.spinner.hide();

            $("input").val("");
            this.msg = "Se registro el usuario correctamente";
            $(".success").show();

          });

        }

      });

    }

    //  Mostrar errores

    if(this.error == 1)
      $(".error").show();

  } 

}
