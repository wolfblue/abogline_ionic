import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

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

  //  REDIRECCIONAR

  location(ruta){
    window.location.href = ruta;
  }

  //  REDIRECCIONAR NUEVA VENTANA

  locationWindows(ruta){
    window.open(ruta);
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

      _this.spinner.show();

      let apiContactenosEnviarFormulario = new FormData();

      apiContactenosEnviarFormulario.append("nombres",nombres);
      apiContactenosEnviarFormulario.append("apellidos",apellidos);
      apiContactenosEnviarFormulario.append("telefono",telefonoContacto);
      apiContactenosEnviarFormulario.append("email",correo);
      apiContactenosEnviarFormulario.append("asunto",asunto);

      _this.postModel("apiContactenosEnviarFormulario",apiContactenosEnviarFormulario).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        _this.spinner.hide();

        $.alert('Se ha enviado la solicitud a Abogline correctamente, pronto te daremos una respuesta.');
  
        setTimeout(function(){
  
          _this.location("home");
  
        },3000);

      });

    }

  }

}
