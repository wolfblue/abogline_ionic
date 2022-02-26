import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /****************************************** */

  //  Redireccionar

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  /****************************************** */

  //  Enviar formulario

  enviar(){

    //  Variables iniciales

    var _this = this;
    var nombres = $("#nombres").val();
    var apellidos = $("#apellidos").val();
    var telefonoContacto = $("#telefonoContacto").val();
    var correo = $("#correo").val();
    var asunto = $("#asunto").val();
    var error = 0;
    var msg = "";

    //  Validar campos obligatorios

    if(!nombres){

      error = 1;
      msg = "El campo nombres es obligatorio";

    }

    if(!apellidos){

      error = 1;
      msg = "El campo apellidos es obligatorio";

    }

    if(!telefonoContacto){

      error = 1;
      msg = "El campo telefono de contacto es obligatorio";

    }

    if(!correo){

      error = 1;
      msg = "El campo correo es obligatorio";

    }

    if(!asunto){

      error = 1;
      msg = "El campo asunto es obligatorio";

    }

    //  Mostrar errores

    if(error == 1){

      $(".msg").html(msg);
      $(".msg").css("color","red");

    }

    //  Enviar formulario

    if(error == 0){

      $(".msg").html("Se envio el formulario correctamente.");
      $(".msg").css("color","green");

      setTimeout(function(){

        _this.location("home");

      },3000);

    }

  }

}
