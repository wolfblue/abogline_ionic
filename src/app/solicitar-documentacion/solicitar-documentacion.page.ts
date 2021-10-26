import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $; 

@Component({
  selector: 'app-solicitar-documentacion',
  templateUrl: './solicitar-documentacion.page.html',
  styleUrls: ['./solicitar-documentacion.page.scss'],
})
export class SolicitarDocumentacionPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  casos:any = [];
  pagosPendientes: any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) {

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {

    //  Bloquear días anteriores a la fecha actual
    $( "#fechaAgendar" ).prop("min",new Date().toISOString().split('T')[0]+"T00:00:00");

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DE LA PÁGINA
  /**************************************************************************** */

  getInfoPage(){

    //  Variables iniciales
    var _this = this;

    //  Consultar información inicial
    
    let apiAboglineAgendarGetInfo = new FormData();

    apiAboglineAgendarGetInfo.append("usuario",sessionStorage.getItem("usuario"));
    apiAboglineAgendarGetInfo.append("perfil",sessionStorage.getItem("perfil"));

    _this.postModel("apiAboglineAgendarGetInfo",apiAboglineAgendarGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.casos = result[0].casos;
        _this.pagosPendientes = result[0].pagosPendientes;

      }

    });

  }

  /**************************************************************************** */
  //  Solicitar
  /**************************************************************************** */

  solicitar(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";

    //  Validar campos obligatorios

    if(!$("#idCaso").val()){

      error = 1;
      msg = "Es obligatorio seleccionar el caso";

    }

    if(!$("#tipoInformacion").val()){

      error = 1;
      msg = "Es obligatorio seleccionar el tipo de información";
    }

    if(!$("#observacion").val()){

      error = 1;
      msg = "Es obligatorio digitar la observación";
    }

    //  Validar que el caso no tenga ningún pago pendiente

    for(var i=0; i<_this.pagosPendientes.length; i++){

      if(_this.pagosPendientes[i].id_caso == $("#idCaso").val()){

        error = 1;
        msg = "El caso tiene un pago pendiente por lo tanto no se puede aún realizar agendamientos";

      }

    }

    //  Solicitar

    if(error == 0){

      let apiAboglineSolicitarDocumentacion = new FormData();

      apiAboglineSolicitarDocumentacion.append("idCaso",$("#idCaso").val());
      apiAboglineSolicitarDocumentacion.append("tipoInformacion",$("#tipoInformacion").val());
      apiAboglineSolicitarDocumentacion.append("observacion",$("#observacion").val());
      apiAboglineSolicitarDocumentacion.append("usuario",sessionStorage.getItem("usuario"));
  
      _this.postModel("apiAboglineSolicitarDocumentacion",apiAboglineSolicitarDocumentacion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
        window.location.href = "/home";
  
      }); 

    }

    //  Mostrar errores

    if(error == 1){

      $("#mensaje").html(msg);

    }

  }

}
