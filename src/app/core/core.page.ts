import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-core',
  templateUrl: './core.page.html',
  styleUrls: ['./core.page.scss'],
})
export class CorePage implements OnInit {

  @ViewChild("modalGeneral", {static: false}) modalGeneral: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;
  htmlModal = "";
  chat = [];
  casos = [];
  trataCaso = "";
  cualProblema = "";
  paso1_pago_asesoria = "";
  paso2_asesoria = "";
  paso3_decision_continuidad = "";
  paso4_generar_cita = "";
  paso5_contratacion = "";
  paso6_firmar_contrato = "";
  paso7_finalizar_contrato = "";
  paso8_pagos = "";
  paso9_reunion_virtual = "";
  paso10_documentacion = "";
  paso11_reunion_presencial = "";
  paso12_informacion = "";
  usuarioCaso = "";
  abogadoCaso = "";

  constructor(
    private http:HttpClient,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    var _this = this;

    //  Consultar información del caso
    _this.consultarCaso();

    //  Consultar chat interval

    setInterval(function(){
      _this.consultarChat();
    },5000);

    //  Consultar abogado del caso
    _this.consultarAbogado();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  /************************************ */

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  /************************************ */

  //  Solicitar

  solicitar(){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalGeneral);
    
    $(".modal-content").css("opacity","0.8");
    $(".btnContinuar").prop("src","/assets/images/btn_continuar.png");
    $(".btnContinuar").css("bottom","-14.1%");

  }

  /************************************ */

  //  Solicitar

  asesoria(){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalGeneral);

    $(".modal-content").css("opacity","0.8");
    $(".btnAceptar").css("bottom","-14.1%");
    $(".btnContinuar").hide();
    $(".btnAceptar").show();
    $(".modalTipo1").hide();
    $(".modalTipo4").show();

  }

  /************************************** */

  //  Continuidad SI

  continuidadSi(){

    //  Variables iniciales
    var _this = this;

    $(".modalTipo1").hide();
    $(".modalTipo2").show();

  }

  /*************************************** */

  //  Cerrar modal

  closeModal(){

    //  Variables iniciales
    var _this = this;

    //  Cerrar modal
    _this.modal.close();

  }

  /**************************************** */

  //  Modal tipo 3

  modalTipo3(){

    //  Variables iniciales
    var _this = this;

    $(".modalTipo2").hide();
    $(".modalTipo3").show();
    $(".btnContinuar").prop("src","/assets/images/btn_enviar_text.png");
    $(".btnContinuar").css("bottom","-14.4%");

  }

  /******************************************* */

  //  Enviar chat

  enviarChat(){

    //  Variables iniciales

    var _this = this;
    var mensaje = $("#chatMensaje").val();

    //  Spinner show
    _this.spinner.show();

    if(mensaje)
      this.chat.push(mensaje);

      $("#chatMensaje").val("");

    //  Registrar mensaje

    let apiCoreChatSave = new FormData();

    apiCoreChatSave.append("idCaso", sessionStorage.getItem("idCaso"));
    apiCoreChatSave.append("usuario", sessionStorage.getItem("usuario"));
    apiCoreChatSave.append("mensaje", mensaje);

    _this.postModel("apiCoreChatSave",apiCoreChatSave).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      _this.consultarChat();

    });

  }

  /********************************************** */
  //  Consultar caso
  /********************************************** */

  consultarCaso(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    //  Consultar información del caso

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario", "");
    apiConsultarCasos.append("trataCaso","");
    apiConsultarCasos.append("cualProblema","");
    apiConsultarCasos.append("id",sessionStorage.getItem("idCaso"));

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner hide
      _this.spinner.hide();

      if(result.length > 0){

        _this.trataCaso = result[0].trata_caso;
        _this.cualProblema = result[0].cual_problema;
        _this.paso1_pago_asesoria = result[0].paso1_pago_asesoria;
        _this.paso2_asesoria = result[0].paso2_asesoria;
        _this.paso3_decision_continuidad = result[0].paso3_decision_continuidad;
        _this.paso4_generar_cita = result[0].paso4_generar_cita;
        _this.paso5_contratacion = result[0].paso5_contratacion;
        _this.paso6_firmar_contrato = result[0].paso6_firmar_contrato;
        _this.paso7_finalizar_contrato = result[0].paso7_finalizar_contrato;
        _this.paso8_pagos = result[0].paso8_pagos;
        _this.paso9_reunion_virtual = result[0].paso9_reunion_virtual;
        _this.paso10_documentacion = result[0].paso10_documentacion;
        _this.paso11_reunion_presencial = result[0].paso11_reunion_presencial;
        _this.paso12_informacion = result[0].paso12_informacion;
        _this.usuarioCaso = result[0].usuario;

        _this.casos = result;

      }

    });

  }

  /**************************************************************************/
  //  Consultar chat
  /**************************************************************************/

  consultarChat(){

    //  Variables iniciales
    var _this = this;

    //  Consultar información del caso

    let apiCoreChatGet = new FormData();
    
    apiCoreChatGet.append("idCaso", sessionStorage.getItem("idCaso"));

    _this.postModel("apiCoreChatGet",apiCoreChatGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.chat = result;

        setTimeout(function(){

          var d = $('.chat');
          d.scrollTop(d.prop("scrollHeight"));

        },1000);

      }

    });

  }

  /********************************************************************** */
  //  Consultar abogado
  /********************************************************************** */

  consultarAbogado(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    //  Consultar información del caso

    let apiCoreChatGet = new FormData();
    
    apiCoreChatGet.append("idCaso", sessionStorage.getItem("idCaso"));

    _this.postModel("apiCoreAbogadoGet",apiCoreChatGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner hide
      _this.spinner.hide();

      if(result.length > 0){

        _this.abogadoCaso = result[0].abogado;

      }

    });

  }

  /********************************************************************* */
  //  Aceptar asesoría
  /********************************************************************* */
  
  asesoriaAceptar(){

    //  Variables iniciales
    
    var _this = this;
    var dateDesde = $("#dateDesde").val();
    var dateHasta = $("#dateHasta").val();
    var msg = "";
    var error = 0;

    //  Validar campos obligatorios

    if(!dateDesde){

      error = 1;
      msg = "Debe seleccionar una fecha desde.";

    }

    if(!dateHasta){

      error = 1;
      msg = "Debe seleccionar una fecha hasta.";

    }

    //  Validar diferencia de días

    var fechaInicio = new Date(dateDesde).getTime();
    var fechaFin    = new Date(dateHasta).getTime();
    var diff = fechaFin - fechaInicio;

    if(diff/(1000*60*60*24) < 0){

      error = 1;
      msg = "La fecha hasta debe ser igual o superior a la fecha desde.";

    }

    //  Mostrar errores

    if(error == 1){

      $.alert(msg);      

    }

    //  Registrar asesoria

    if(error == 0){

      //  Spinner show
      _this.spinner.show();

      let apiCoreCalendarioSave = new FormData();
    
      apiCoreCalendarioSave.append("idCaso", sessionStorage.getItem("idCaso"));
      apiCoreCalendarioSave.append("fechaDesde", dateDesde);
      apiCoreCalendarioSave.append("fechaHasta", dateHasta);

      _this.postModel("apiCoreCalendarioSave",apiCoreCalendarioSave).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner hide
        _this.spinner.hide();

        //  Mostrar mensaje
        $.alert("Se registro el evento de la asesoría correctamente");

        //  Cerrar modal
        _this.modal.close();

      });

    }

  }

}
