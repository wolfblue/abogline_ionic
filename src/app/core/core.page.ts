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

  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");
  idCaso = (sessionStorage.getItem("idCaso") ? sessionStorage.getItem("idCaso") : "");
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
  perfil = sessionStorage.getItem("perfil");
  consulta = "";
  pagoAsesoria = "";
  asesoriaDesc = "";
  desicionContinuidad = "";
  generarCita = "";
  contratacion = "";
  firmarContrato = "";
  finalizarContrato = "";
  pagos = "";
  reunionVirtual = "";
  documentacion = "";
  reunionPresencial = "";
  informacion = "";
  abogadoData = [];
  ciudades:any = [];
  rutaBackend = `${environment.backend}`;
  actividades = [];


  constructor(
    private http:HttpClient,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    var _this = this;

    //  Consultar ciudades
    _this.consultarCiudades();

    //  Consultar información del caso
    _this.consultarCaso();

    //  Consultar admin
    _this.consultarAdmin();

    //  Consultar actividades
    _this.consultarActividades();

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
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo5").hide();
    $(".modalTipo4").show();

  }

  /************************************** */

  //  Continuidad SI

  continuidadSi(){

    //  Variables iniciales
    var _this = this;

    $(".modalTipo1").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
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
        _this.consulta = result[0].consulta;
        _this.abogadoData = result[0];

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
      apiCoreCalendarioSave.append("usuario", sessionStorage.getItem('usuario'));
      apiCoreCalendarioSave.append("abogado", _this.abogadoCaso);

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

  /************************************************************************* */
  //  Crear actividad
  /**************************************************************************** */

  crearActividad(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal

    _this.open(_this.modalGeneral);

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").show();

    $(".btnContinuar").hide();
  }

  /************************************************************************* */
  //  Crear actividad acción
  /**************************************************************************** */

  crearActividadAccion(proceso,aprobacion,actividad){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Crear Actividad!',
      content: 'Esta seguro de crear la actividad ?',
      buttons: {
          confirmar: function () {

            //  Activar actividad caso

            let apiCoreCrearActividad = new FormData();
            
            apiCoreCrearActividad.append("idCaso", sessionStorage.getItem("idCaso"));
            apiCoreCrearActividad.append("actividad", proceso);
            apiCoreCrearActividad.append("aprobacion", aprobacion);
            apiCoreCrearActividad.append("usuario", sessionStorage.getItem("usuario"));
            apiCoreCrearActividad.append("actividadDesc", actividad);

            _this.postModel("apiCoreCrearActividad",apiCoreCrearActividad).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              if(aprobacion == "0")
                $.alert('Se creo la actividad correctamente.');
              else
                $.alert('Se ha enviado la solicitud Abogline para crear actividad.');

              setTimeout(function(){

                _this.location("/core");

              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  CONSULTAR ADMIN

  consultarAdmin(){

    //  Variables iniciales
    var _this = this;

    //  Consultar admin

    let apiAdminConsulta = new FormData();

    _this.postModel("apiAdminConsulta",apiAdminConsulta).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        for(var i = 0; i < result.length; i++){

          switch(result[i].tipo){

            case "pago-asesoria":
              _this.pagoAsesoria = result[i].contenido;
            break;

            case "asesoria":
              _this.asesoriaDesc = result[i].contenido;
            break;

            case "decision-continuidad":
              _this.desicionContinuidad = result[i].contenido;
            break;

            case "generar-cita":
              _this.generarCita = result[i].contenido;
            break;

            case "contratacion":
              _this.contratacion = result[i].contenido;
            break;

            case "firmar-contrato":
              _this.firmarContrato = result[i].contenido;
            break;

            case "finalizar-contrato":
              _this.finalizarContrato = result[i].contenido;
            break;

            case "pagos":
              _this.pagos = result[i].contenido;
            break;

            case "reunion-virtual":
              _this.reunionVirtual = result[i].contenido;
            break;

            case "documentacion":
              _this.documentacion = result[i].contenido;
            break;

            case "reunion-presencial":
              _this.reunionPresencial = result[i].contenido;
            break;

            case "informacion":
              _this.informacion = result[i].contenido;
            break;

          }

        }

      }

    });

  }

  //  CONTRATACIÓN

  actividadContratacion(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.openModal("modalTipo6");

    console.log(_this.abogadoData);

    $("#contratacionNombres").val(_this.abogadoData['nombres']);
    $("#contratacionApellidos").val(_this.abogadoData['apellidos']);
    $("#contratacionIdentificacion").val(_this.abogadoData['identificacion']);
    $("#contratacionTp").val(_this.abogadoData['tipo_tp']);
    $("#contratacionTarjeta").val(_this.abogadoData['tarjeta_licencia']);
    $("#contratacionDireccion").val(_this.abogadoData['direccion']);


  }

  //  ABRIR MODAL

  openModal(clase){

    //  Variables iniciales
    var _this = this;

    _this.open(_this.modalGeneral);

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".btnContinuar").hide();

    $("."+clase).show();

  }

  //  CONSULTAR CIUDADES

  consultarCiudades(){

    //  Variables iniciales
    var _this = this;

    //  Obtener ciudades

    let apiAdminCiudadGet = new FormData();
    _this.postModel("apiAdminCiudadGet",apiAdminCiudadGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.ciudades = result;});

  }

  //  CONSULTAR ACTIVIDADES

  consultarActividades(){

    //  Variables iniciales
    var _this = this;

    //  Consultar actividades del usuario

    let apiCoreConsultarActividades = new FormData();
          
    apiCoreConsultarActividades.append("usuario", _this.usuario);
    apiCoreConsultarActividades.append("idCaso", _this.idCaso);

    _this.postModel("apiCoreConsultarActividades",apiCoreConsultarActividades).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.actividades = result;

    });    

  }

}
