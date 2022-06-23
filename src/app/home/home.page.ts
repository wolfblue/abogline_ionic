import { Component,ViewChild, TemplateRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxTweetModule } from "ngx-tweet";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private unsubscribe$ = new Subject<void>();

  @ViewChild("modalRegistoMain", {static: false}) modalRegistoMain: TemplateRef<any>;

  closeResult = '';
  perfil = "";
  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");

  constructor(
    private modalService: NgbModal,
    private http:HttpClient
  ) {

    //  Variables de sesión
    this.variablesSesion();

    

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  REDIRECCIONAR NUEVA VENTANA

  locationWindows(ruta){
    window.open(ruta);
  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    console.log(ruta);

    //  Redireccionar
    window.location.href = ruta;

  }

  //  VARIABLES DE SESIÓN

  variablesSesion(){

    //  Variables iniciales
    var _this = this;

    //  Obtener variables de sesión

    if(sessionStorage.getItem("perfil"))
      _this.perfil = sessionStorage.getItem("perfil");

  }

  //  ENVIAR CONTACTO FOOTER

  enviarContacto(){

    //  Variables iniciales

    var _this = this;
    var emailContacto = $("#emailContacto").val();

    //  Validar campo obligatorio

    if(!emailContacto)
      $.alert('Correo electronico obligatorio.');

    //  Enviar correo electronico

    if(emailContacto){

      let apiHomeEnviarContacto = new FormData();

      apiHomeEnviarContacto.append("email",emailContacto);

      _this.postModel("apiHomeEnviarContacto",apiHomeEnviarContacto).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        $.alert('Se ha enviado el email correctamente, pronto estaremos en contacto.');

        $("#emailContacto").val("");

      });

    }

  }

  //  CORREO DIRECTO

  correoDirecto(){

    $("#emailContacto").focus();

  }

}