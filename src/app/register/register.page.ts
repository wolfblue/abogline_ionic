import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService  } from "ngx-spinner";
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

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
  proceso = false;

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private appComponent: AppComponent,
    private router: Router
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
      _this.confirmarRegistro();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */

  /**
   * Registar usuario
   */

  registerUser(){ 

    var _this = this;

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

    //  Verificar si el correo electrónico es válido

    var emailData = $("#email").val().split("@");

    if(this.error == 0 && emailData.length == 1){

      this.error = 1;
      this.msg = "El correo electrónico no es válido";

    }

    //  Verificar si el usuario existe

    if(this.error == 0){

      let getUser = new FormData();

      getUser.append("user", $("#user").val());
      getUser.append("email", $("#email").val());
      getUser.append("password", "");
      getUser.append("login", "0");

      this.postModel("getUser",getUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){  //  El usuario no existe

          this.spinner.hide();

          $("input").val("");
            this.msg = "El usuario ya se encuentra registrado";
            $(".warning").show();

        }else{  //  El usuario existe

          this.spinner.hide();

          //  Confirmar con el usuario el registro
          this.modalConfirmar('Registrar usuario','¿ Esta seguro de continuar con la información diligenciada ?');

        }

      });

    }

    //  Mostrar errores

    if(this.error == 1){

      $(".error").show();
      this.spinner.hide();

    }

  }

  /************************************************************************************** */

  /**
   *  Confirmar registro
   */

  confirmarRegistro(){

    //  Variables iniciales
    var _this = this;

    //  Registrar usuario

    if(_this.proceso == false){ //  Verificar que no halla otro proceso ejecutandose

      _this.spinner.show();

      _this.proceso = true;

      let createUser = new FormData();

      createUser.append("active", "1");
      createUser.append("user", $("#user").val());
      createUser.append("email", $("#email").val());
      createUser.append("password", $("#password").val());
      createUser.append("profile", $("#perfil").val());

      this.postModel("createUser",createUser).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        this.msg = "Se registro el usuario correctamente";
        $(".success").show();

        sessionStorage.setItem("email", $("#email").val());
        sessionStorage.setItem("user", $("#user").val());
        sessionStorage.setItem("profile", $("#perfil").val());

        setTimeout(function(){

          _this.spinner.hide();

          $(".modalConfirm").modal("hide");
          $(".success").hide();
          $("input").val("");

          _this.appComponent.validateAuth();
          _this.router.navigateByUrl('home');

        },2000);

      });

    }

  }

}
