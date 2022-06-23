import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  parametro2 : any = "";

  constructor(
    private router: Router,
    private http:HttpClient
  ) {

    //  Validar link
    this.validarLink();

  }

  ngOnInit() {

    //  Ocultar header
    $("ion-header").hide();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  CONTINUAR

  continuar(){

    window.location.href = "/home";

  }

  //  VALIDAR LINK

  validarLink(){

    //  Variables iniciales

    var _this = this;
    var href = this.router.url;
    var dataLink = href.split("?");
    var params = dataLink[1].split("&");
    var parametro1Data = params[0].split("=");
    var parametro2Data = params[1].split("=");
    var parametro1 = parametro1Data[1];
    var parametro2 = parametro2Data[1];

    _this.parametro2 = parametro2;

    switch(parametro1){

      //  Aprobación de usuario

      case "aprobacion":

        //  Consultar y actualizar usuario pendiente de confirmación

        let apiLinksAprobarUsuario = new FormData();

        apiLinksAprobarUsuario.append("md5",parametro2);
  
        _this.postModel("apiLinksAprobarUsuario",apiLinksAprobarUsuario).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          if(result > 0){

            $(".content1").show();

          }else{

            $(".content2").show();

          }

        });

      break;

      case "password":

        setTimeout(function(){
          $(".content3").show();
        },1000);

      break;

    }

  }

  //  RESTABLECER CONTRASEÑA

  restablecer(){

    //  Variables iniciales

    var _this = this;
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();
    var error = 0;
    var msg = "";

    //  Validar campos obligatorios

    if(!password){

      error = 1;
      msg = "Debe digitar la contraseña";

    }

    if(!passwordConfirm && error == 0){

      error = 1;
      msg = "Debe confirmar la contraseña";

    }

    //  Validar que coincidan las contraseñas

    if(passwordConfirm != password  && error == 0){

      error = 1;
      msg = "Las contraseñas no coinciden";

    }

    //  Mostrar errores

    if(error == 1)
      $.alert(msg);

    //  Restablecer contraseña

    if(error == 0){

      let apiLinksRestablecerPassword = new FormData();

      apiLinksRestablecerPassword.append("md5",this.parametro2);
      apiLinksRestablecerPassword.append("password",password);

      _this.postModel("apiLinksRestablecerPassword",apiLinksRestablecerPassword).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        $.alert("Se restableció su contraseña correctamente");

        setTimeout(function(){
          window.location.href = "/home";
        },3000);
        
      });

    }

  }

}
