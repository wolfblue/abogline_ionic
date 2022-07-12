import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-respuesta-pagos',
  templateUrl: './respuesta-pagos.page.html',
  styleUrls: ['./respuesta-pagos.page.scss'],
})
export class RespuestaPagosPage implements OnInit {

  iconoRespuesta = (sessionStorage.getItem("iconoRespuesta") ? sessionStorage.getItem("iconoRespuesta") : "");
  respuestaPagos = (sessionStorage.getItem("respuestaPagos") ? sessionStorage.getItem("respuestaPagos") : "");
  idCaso = (sessionStorage.getItem("idCaso") ? sessionStorage.getItem("idCaso") : "");
  valor = (sessionStorage.getItem("valorPago") ? sessionStorage.getItem("valorPago") : "");
  estadoPago = (sessionStorage.getItem("estadoPago") ? sessionStorage.getItem("estadoPago") : "");

  constructor() { }

  ngOnInit() {

    //  Ocultar secciones
    $("ion-header").hide();

  }

  //  CERRAR

  cerrar(){

    window.location.href = "/core"

  }

}
