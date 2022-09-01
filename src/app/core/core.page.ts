import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { Alert } from 'selenium-webdriver';

declare var $;
declare var ClassicEditor;

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
  estadoCaso = "0";
  validarChat = "0";
  desicionSelect1 = "1";
  desicionSelect2 = "1";
  desicionSelect3 = "1";
  desicionSelect4 = "1";
  contratoCaso = [];
  contratoMetodopago = "";
  contratoRealizado = 1;
  titleReunion = "";
  pdfView = "";
  clienteData = [];
  clausulasAdicionales : any = "";
  clausulaAdicional = "";
  mostrarActividades = false;
  cantidadDocumentosSolicitar = 0;
  solicitudDocumentosTotal = 0;
  solicitudDocumentosData = [];
  solicitudDocumentosEstado = 0;
  motivoFinalizaContrato = "";
  motivoPago = "";

  constructor(
    private http:HttpClient,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    var _this = this;

    //  Consultar actividades
    _this.consultarActividades();

    //  Consultar ciudades
    _this.consultarCiudades();

    //  Consultar información del caso
    _this.consultarCaso();

    //  Consultar admin
    _this.consultarAdmin();

    //  Consultar chat interval

    setInterval(function(){
      _this.consultarChat();
    },5000);

    //  Consultar abogado del caso
    _this.consultarAbogado();

    //  Consultar contrato del caso
    _this.consultarContratoCaso();

    //  Consultar cliente del caso
    _this.consultarCliente();

    //  Ir al final del carrousel de actividades
    this.irFinalActividades();

    //  Consultar documentos solicitados
    this.solicitudDocumentos();

  }

  ngOnInit() {

    //  Variables iniciales
    var _this = this;

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  REDIRECCIONAR

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  //  ABRIR MODAL

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  //  DESICIÓN DE CONTINUIDAD

  continuidad(){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalGeneral);

    //  Configuración de modales
    
    $(".modalTipo1").show();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();
    
    $(".modal-content").css("opacity","0.8");
    $(".btnContinuar").prop("src","/assets/images/btn_continuar.png");
    $(".btnContinuar").css("bottom","-14.1%");

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").hide();

  }

  //  SOLICITAR REUNIÓN

  reunion(title){

    //  Variables iniciales
    var _this = this;

    //  Capturar titulo modal
    _this.titleReunion = title;

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
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();
    $(".modalTipo4").show();

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").hide();

  }

  //  CERRAR MODAL

  closeModal(){

    //  Variables iniciales
    var _this = this;

    //  Cerrar modal
    _this.modal.close();

  }

  //  MODAL TIPO 3

  modalTipo3(){

    //  Variables iniciales
    var _this = this;

    $(".modalTipo2").hide();
    $(".modalTipo3").show();
    $(".btnContinuar").prop("src","/assets/images/btn_enviar_text.png");
    $(".btnContinuar").css("bottom","-14.4%");

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").show();

  }

  //  ENVIAR CHAT

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

  //  CONSULTAR CASO

  consultarCaso(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    //  Actualizar ruta contrato

    _this.pdfView = _this.rutaBackend + "contratos/" + sessionStorage.getItem("idCaso") + ".pdf";

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
        _this.estadoCaso = result[0].estado;

        _this.casos = result;

      }

    });

  }

  //  CONSULTAR CHAT

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

  //  CONSULTAR ABOGADO

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

  //  ACEPTAR ASESORÍA
  
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
      apiCoreCalendarioSave.append("titleReunion", _this.titleReunion);

      _this.postModel("apiCoreCalendarioSave",apiCoreCalendarioSave).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner hide
        _this.spinner.hide();

        //  Mostrar mensaje
        $.alert("Se ha enviado la solicitud de " + _this.titleReunion + " correctamente");

        //  Cerrar modal
        _this.modal.close();

      });

    }

  }

  //  CREAR ACTIVIDAD

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
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();
    $(".btnContinuar").hide();

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").hide();

  }

  //  CREAR ACTIVIDAD ACCIÓN

  crearActividadAccion(proceso,aprobacion,actividad){

    //  Variables iniciales

    var _this = this;

    //  Validar actividad a crear

    switch(proceso){

      case "paso7_finalizar_contrato":

        //  Modal finalizar contrato

        _this.open(_this.modalGeneral);

        $(".modalTipo1").hide();
        $(".modalTipo2").hide();
        $(".modalTipo3").hide();
        $(".modalTipo4").hide();
        $(".modalTipo5").hide();
        $(".modalTipo6").hide();
        $(".modalTipo7").hide();
        $(".modalTipo8").hide();
        $(".modalTipo9").hide();
        $(".modalTipo10").hide();
        $(".modalTipo11").hide();
        $(".modalTipo12").show();
        $(".modalTipo13").hide();

      break;

      case "paso8_pagos":

        //  Modal finalizar contrato

        _this.open(_this.modalGeneral);

        $(".modalTipo1").hide();
        $(".modalTipo2").hide();
        $(".modalTipo3").hide();
        $(".modalTipo4").hide();
        $(".modalTipo5").hide();
        $(".modalTipo6").hide();
        $(".modalTipo7").hide();
        $(".modalTipo8").hide();
        $(".modalTipo9").hide();
        $(".modalTipo10").hide();
        $(".modalTipo11").hide();
        $(".modalTipo12").hide();
        $(".modalTipo13").show();

      break;

      case "paso7_finalizar_contrato_2":

        //  Finalizar contrato

        $.confirm({
          title: 'Crear Actividad ' + actividad + '!',
          content: 'Esta seguro de crear la actividad ' + actividad +'?',
          buttons: {
              confirmar: function () {

                //  Activar actividad caso

                let apiCoreCrearActividad = new FormData();
                
                apiCoreCrearActividad.append("idCaso", sessionStorage.getItem("idCaso"));
                apiCoreCrearActividad.append("actividad", proceso);
                apiCoreCrearActividad.append("aprobacion", aprobacion);
                apiCoreCrearActividad.append("usuario", sessionStorage.getItem("usuario"));
                apiCoreCrearActividad.append("actividadDesc", actividad);
                apiCoreCrearActividad.append("motivo", _this.motivoFinalizaContrato);

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

      break;

      case "paso8_pagos_2":

        //  Finalizar contrato

        $.confirm({
          title: 'Crear Actividad ' + actividad + '!',
          content: 'Esta seguro de crear la actividad ' + actividad +'?',
          buttons: {
              confirmar: function () {

                //  Activar actividad caso

                let apiCoreCrearActividad = new FormData();
                
                apiCoreCrearActividad.append("idCaso", sessionStorage.getItem("idCaso"));
                apiCoreCrearActividad.append("actividad", proceso);
                apiCoreCrearActividad.append("aprobacion", aprobacion);
                apiCoreCrearActividad.append("usuario", sessionStorage.getItem("usuario"));
                apiCoreCrearActividad.append("actividadDesc", actividad);
                apiCoreCrearActividad.append("motivo", _this.motivoPago);

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

      break;

      default:

        //  Confirmar aprobación

        $.confirm({
          title: 'Crear Actividad ' + actividad + '!',
          content: 'Esta seguro de crear la actividad ' + actividad +'?',
          buttons: {
              confirmar: function () {

                //  Activar actividad caso

                let apiCoreCrearActividad = new FormData();
                
                apiCoreCrearActividad.append("idCaso", sessionStorage.getItem("idCaso"));
                apiCoreCrearActividad.append("actividad", proceso);
                apiCoreCrearActividad.append("aprobacion", aprobacion);
                apiCoreCrearActividad.append("usuario", sessionStorage.getItem("usuario"));
                apiCoreCrearActividad.append("actividadDesc", actividad);
                apiCoreCrearActividad.append("motivo", "");

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

      break;

    }

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

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").hide();

    switch(_this.perfil){

      case "cliente":

        $("#contratacionNombres").val(_this.clienteData['nombres']);
        $("#contratacionApellidos").val(_this.clienteData['apellidos']);
        $("#contratacionIdentificacion").val(_this.clienteData['identificacion']);
        $("#contratacionDireccion").val("");

        setTimeout(function(){

          $("#contratacionLugar").val(_this.abogadoData['ciudad']);

        },1000); 

      break;

      case "abogado":

        setTimeout(function(){

          $("#contratacionNombres").val(_this.abogadoData['nombres']);
          $("#contratacionApellidos").val(_this.abogadoData['apellidos']);
          $("#contratacionIdentificacion").val(_this.abogadoData['identificacion']);
          $("#contratacionTp").val(_this.abogadoData['tipo_tp']);
          $("#contratacionTarjeta").val(_this.abogadoData['tarjeta_licencia']);
          $("#contratacionDireccion").val(_this.abogadoData['direccion']);
          $("#contratacionLugar").val(_this.abogadoData['ciudad']);

        },1000); 

      break;

    }

    $("input").css("background","#ffffff");

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
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();
    $(".btnContinuar").hide();

    $("."+clase).show();

    //  Validar botones

    $(".btnContinuarDesicion").hide();
    $(".btnContinuarDesicion2").hide();

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

      if(result.length > 0){

        _this.mostrarActividades = true;

        for(var i = 0; i < result.length; i++){

          switch(result[i].tipo){

            case 1:

              if(result[i].estado == '2')
                _this.validarChat = '1';

            break;

          }

        }

      }

    });    

  }

  //  PAGO DE ASESORÍA

  pagoAsesoriaAction(idActividad,pagoValor,tipo){

    //  Variables iniciales

    var _this = this;
    var pagoValorOriginal = pagoValor;
    var linkPagos = "";

    //  Formatear valor
    pagoValor = pagoValor.replace(",","");

    //  Generar token E-Pay

    _this.spinner.show();

    let apiCoreGenerarTokenPagos = new FormData();

    apiCoreGenerarTokenPagos.append("title","Pago para realizar consulta con el abogado del caso número " + _this.idCaso);
    apiCoreGenerarTokenPagos.append("description","Caso " + _this.idCaso + ", " + _this.trataCaso + ": " + _this.cualProblema);
    apiCoreGenerarTokenPagos.append("value",pagoValor);
    apiCoreGenerarTokenPagos.append("usuario",_this.usuarioCaso);

    _this.postModel("apiCoreGenerarTokenPagos",apiCoreGenerarTokenPagos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      sessionStorage.setItem("iconoRespuesta","btn_si");
      sessionStorage.setItem("respuestaPagos","Pago realizado con exito !");
      sessionStorage.setItem("valorPago",pagoValorOriginal);
      sessionStorage.setItem("estadoPago","aprobado");

      let apiCoreFinalizarActividad = new FormData();

      apiCoreFinalizarActividad.append("idActividad",idActividad);
      apiCoreFinalizarActividad.append("idActividadCrear","2");
      apiCoreFinalizarActividad.append("cliente",_this.usuarioCaso);
      apiCoreFinalizarActividad.append("abogado",_this.abogadoCaso);
      apiCoreFinalizarActividad.append("idCaso",_this.idCaso);
      apiCoreFinalizarActividad.append("tipo",tipo);

      linkPagos = result.toString();

      _this.postModel("apiCoreFinalizarActividad",apiCoreFinalizarActividad).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        sessionStorage.setItem("iconoRespuesta","btn_si");
        sessionStorage.setItem("respuestaPagos","Pago realizado con exito !");
        sessionStorage.setItem("valorPago",pagoValorOriginal);
        sessionStorage.setItem("estadoPago","aprobado");

        window.location.href = linkPagos;

      });

    });

  }

  //  NO CONTINUAR CON EL CASO PANTALLA 1

  continuidadNo1(){

    //  Variables iniciales
    var _this = this;

    //  Validar modales

    $(".modalTipo1").hide();
    $(".modalTipo2").show();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();

    //  Validar botones

    $(".btnContinuarDesicion").show();
    $(".btnContinuarDesicion2").hide();

  }

  //  NO CONTINUAR CON EL CASO PANTALLA 3

  continuidadNo3(){

    //  Variables iniciales
    var _this = this;

    //  Confirmar no continuar con el caso

    $.confirm({
      title: 'Finalizar caso!',
      content: 'Esta seguro de finalizar el caso ?',
      buttons: {
          confirmar: function () {

            let apiCoreFinalizarCaso = new FormData();

            apiCoreFinalizarCaso.append("idCaso",_this.idCaso);

            _this.postModel("apiCoreFinalizarCaso",apiCoreFinalizarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert("El caso ha sido finalizado correctamente, gracias por usar nuestros servicios.");

              setTimeout(function(){

                _this.location("/home");

              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  DESICIÓN DE CONTINUIDAD SI

  continuidadSi(){

    //  Variables iniciales
    var _this = this;

    //  Confirmar desición de continuidad

    $.confirm({
      title: 'Continuar con el caso!',
      content: 'Esta seguro de continuar con el caso e iniciar con el proceso de generar cita para la contratación?',
      buttons: {
          confirmar: function () {

            let apiCoreContinuarCaso = new FormData();

            apiCoreContinuarCaso.append("idCaso",_this.idCaso);
            apiCoreContinuarCaso.append("cliente",_this.usuarioCaso);
            apiCoreContinuarCaso.append("abogado",_this.abogadoCaso);

            _this.postModel("apiCoreContinuarCaso",apiCoreContinuarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert("Gracias por escoger Abogline, ahora puede continuar con el caso.");

              setTimeout(function(){

                _this.location("/core");

              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  POR QUE NO CONTINUAR

  porQueNoContinuar(opcion,valor){

    //  Variables iniciales
    var _this = this;

    //  Validar opción

    switch(opcion){

      case "1":

        _this.desicionSelect1 = valor;

      break;

      case "2":

        _this.desicionSelect2 = valor;
      
      break;

      case "3":

        _this.desicionSelect3 = valor;

      break;

      case "4":

        _this.desicionSelect4 = valor;

      break;

    }

  }

  //  DESICIÓN DE CONTINUIDAD ENVIAR

  desicionContinuidadAccion(){

    //  Variables iniciales

    var _this = this;
    var comentario = $(".comentario").val();

    //  Enviar comentario y cerrar caso

    _this.spinner.show();

    let apiCoreCerrarCaso = new FormData();

    apiCoreCerrarCaso.append("idCaso",_this.idCaso);
    apiCoreCerrarCaso.append("observacion1",_this.desicionSelect1);
    apiCoreCerrarCaso.append("observacion2",_this.desicionSelect2);
    apiCoreCerrarCaso.append("observacion3",_this.desicionSelect3);
    apiCoreCerrarCaso.append("observacion4",_this.desicionSelect4);
    apiCoreCerrarCaso.append("comentario",comentario);
    apiCoreCerrarCaso.append("cliente",_this.usuarioCaso)
    apiCoreCerrarCaso.append("abogado",_this.abogadoCaso);

    _this.postModel("apiCoreCerrarCaso",apiCoreCerrarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $.alert("El caso ha sido cerrado correctamente, gracias por compartir tu exepriencia y usar nuestros servicios de Abogline");

      setTimeout(function(){

        _this.location("/core");

      },3000);

    });

  }

  //  VER CONTRATO

  diligenciarContrato(corregir){

    //  Variables iniciales
    var _this = this;

    //  Validar modales

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").show();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();

    //  Clausulas adicionales

    if(_this.perfil == "abogado"){

      if(corregir == "0"){

        ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {

          editor.setData(_this.clausulaAdicional);

          _this.clausulasAdicionales = editor.getData();

          editor.model.document.on('change:data', () => {
            _this.clausulasAdicionales = editor.getData();
          });

        } )
        .catch( error => {
            console.error( error );
        } );

      }

    }

    if(_this.perfil == "cliente")
      $("#clausulaAdicional").html(_this.clausulaAdicional);

    //  Validar campos por perfil

    switch(_this.perfil){

      case "cliente":

        $("#objetoContrato").prop("disabled",true);
        $("#contratoPrecio").prop("disabled",true);
        $("#contratoMetodoPago").prop("disabled",true);
        $("#contratoMetodoPago2").prop("disabled",true);
        $("#contratoPorcentaje").prop("disabled",true);

        setTimeout(function(){

          $("#contratoNombreCliente").val($("#contratacionNombres").val() + " " + $("#contratacionApellidos").val());
          $("#contratoIdentificacionCliente").val($("#contratacionIdentificacion").val());
          $("#contratoLugarCliente").val($("#contratacionLugar").val());
          $("#contratoDireccionCliente").val($("#contratacionDireccion").val());
        
        },1000);

      break;

      case "abogado":

        setTimeout(function(){

          $("#contratoNombreAbogado").val($("#contratacionNombres").val() + " " + $("#contratacionApellidos").val());
          $("#contratoIdentificacionAbogado").val($("#contratacionIdentificacion").val());
          $("#contratoLugarAbogado").val($("#contratacionLugar").val());
          $("#contratoDireccionAbogado").val($("#contratacionDireccion").val());
          $("#contratoLicenciaAbogado").val($("#contratacionTarjeta").val());
        
        },1000);

      break;

    }

    //  Cargar listas

    if(_this.contratoMetodopago){

      $("#contratoMetodoPago").val(_this.contratoMetodopago);

      _this.metodoPago();

    }

  }

  //  METODO DE PAGO

  metodoPago(){

    //  Variables iniciales
    var _this = this;

    //  Validar metodo de pago

    switch($("#contratoMetodoPago").val()){

      case "Cuota litis":
        $("#contratoMetodoPago2").hide();
        $(".contratoPorcentaje").hide();
      break;

      case "Honorarios":
        $("#contratoMetodoPago2").show();
        $(".contratoPorcentaje").hide();
      break;

      case "Mixto":
        $("#contratoMetodoPago2").show();
        $(".contratoPorcentaje").show();
      break;

      default:
        $("#contratoMetodoPago2").hide();
        $(".contratoPorcentaje").hide();
      break;

    }

  }

  //  GUARDAR BORRADOR

  guardarBorrador(borrador){

    //  Variables iniciales
    var _this = this;

    //  Capturar información

    var contratoNombreCliente = $("#contratoNombreCliente").val();
    var contratoIdentificacionCliente = $("#contratoIdentificacionCliente").val();
    var contratoLugarCliente = $("#contratoLugarCliente").val();
    var contratoDireccionCliente = $("#contratoDireccionCliente").val();
    var contratoNombreAbogado = $("#contratoNombreAbogado").val();
    var contratoIdentificacionAbogado = $("#contratoIdentificacionAbogado").val();
    var contratoLugarAbogado = $("#contratoLugarAbogado").val();
    var contratoDireccionAbogado = $("#contratoDireccionAbogado").val();
    var objetoContrato = $("#objetoContrato").val();
    var contratoPrecio = $("#contratoPrecio").val();
    var contratoMetodoPago = $("#contratoMetodoPago").val();
    var contratoMetodoPago2 = $("#contratoMetodoPago2").val();
    var contratoPorcentaje = $("#contratoPorcentaje").val();
    var contratoLicenciaAbogado = $("#contratoLicenciaAbogado").val();
    var clausulaAdicional = "";

    if(_this.perfil == "abogado")
      clausulaAdicional = _this.clausulasAdicionales;
    else
      clausulaAdicional = _this.clausulaAdicional;

    //  Guardar información del contrato

    _this.spinner.show();

    let apiCoreSaveContrato = new FormData();

    apiCoreSaveContrato.append("idCaso",_this.idCaso);
    apiCoreSaveContrato.append("contratoNombreCliente",contratoNombreCliente);
    apiCoreSaveContrato.append("contratoIdentificacionCliente",contratoIdentificacionCliente);
    apiCoreSaveContrato.append("contratoLugarCliente",contratoLugarCliente);
    apiCoreSaveContrato.append("contratoDireccionCliente",contratoDireccionCliente);
    apiCoreSaveContrato.append("contratoNombreAbogado",contratoNombreAbogado);
    apiCoreSaveContrato.append("contratoIdentificacionAbogado",contratoIdentificacionAbogado);
    apiCoreSaveContrato.append("contratoLugarAbogado",contratoLugarAbogado);
    apiCoreSaveContrato.append("contratoDireccionAbogado",contratoDireccionAbogado);
    apiCoreSaveContrato.append("objetoContrato",objetoContrato);
    apiCoreSaveContrato.append("contratoPrecio",contratoPrecio);
    apiCoreSaveContrato.append("contratoMetodoPago",contratoMetodoPago);
    apiCoreSaveContrato.append("contratoMetodoPago2",contratoMetodoPago2);
    apiCoreSaveContrato.append("contratoPorcentaje",contratoPorcentaje);
    apiCoreSaveContrato.append("clausulaAdicional",clausulaAdicional);
    apiCoreSaveContrato.append("contratoLicenciaAbogado",contratoLicenciaAbogado);
    apiCoreSaveContrato.append("perfil",_this.perfil);
    apiCoreSaveContrato.append("borrador",borrador);

    _this.postModel("apiCoreSaveContrato",apiCoreSaveContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $.alert('Se ha guardado un borrador del contrato correctamente.');

      setTimeout(function(){

        _this.location("/core");

      },3000);

    });

  }

  //  CONSULTAR CONTRATO DEL CASO

  consultarContratoCaso(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contrato

    let apiCoreGetContrato = new FormData();

    apiCoreGetContrato.append("idCaso",_this.idCaso);

    _this.postModel("apiCoreGetContrato",apiCoreGetContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.contratoCaso = result[0];
        _this.contratoMetodopago = result[0].contrato_metodo_pago;
        _this.contratoRealizado = result[0].estado;
        _this.clausulaAdicional = result[0].clausula_adicional;

      }

    });

  }

  //  VISUALIZAR CONTRATO

  visualizarContrato(){

    //  Varibles iniciales
    var _this = this;

    //  Capturar información

    var contratoNombreCliente = $("#contratoNombreCliente").val();
    var contratoIdentificacionCliente = $("#contratoIdentificacionCliente").val();
    var contratoLugarCliente = $("#contratoLugarCliente").val();
    var contratoDireccionCliente = $("#contratoDireccionCliente").val();
    var contratoNombreAbogado = $("#contratoNombreAbogado").val();
    var contratoIdentificacionAbogado = $("#contratoIdentificacionAbogado").val();
    var contratoLugarAbogado = $("#contratoLugarAbogado").val();
    var contratoDireccionAbogado = $("#contratoDireccionAbogado").val();
    var objetoContrato = $("#objetoContrato").val();
    var contratoPrecio = $("#contratoPrecio").val();
    var contratoMetodoPago = $("#contratoMetodoPago").val();
    var contratoMetodoPago2 = $("#contratoMetodoPago2").val();
    var contratoPorcentaje = $("#contratoPorcentaje").val();
    var contratoLicenciaAbogado = $("#contratoLicenciaAbogado").val();

    var clausulaAdicional = "";

    if(_this.perfil == "abogado")
      clausulaAdicional = _this.clausulasAdicionales;
    else
      clausulaAdicional = _this.clausulaAdicional;

    //  Guardar información del contrato

    _this.spinner.show();

    let apiCoreSaveContrato = new FormData();

    apiCoreSaveContrato.append("idCaso",_this.idCaso);
    apiCoreSaveContrato.append("contratoNombreCliente",contratoNombreCliente);
    apiCoreSaveContrato.append("contratoIdentificacionCliente",contratoIdentificacionCliente);
    apiCoreSaveContrato.append("contratoLugarCliente",contratoLugarCliente);
    apiCoreSaveContrato.append("contratoDireccionCliente",contratoDireccionCliente);
    apiCoreSaveContrato.append("contratoNombreAbogado",contratoNombreAbogado);
    apiCoreSaveContrato.append("contratoIdentificacionAbogado",contratoIdentificacionAbogado);
    apiCoreSaveContrato.append("contratoLugarAbogado",contratoLugarAbogado);
    apiCoreSaveContrato.append("contratoDireccionAbogado",contratoDireccionAbogado);
    apiCoreSaveContrato.append("objetoContrato",objetoContrato);
    apiCoreSaveContrato.append("contratoPrecio",contratoPrecio);
    apiCoreSaveContrato.append("contratoMetodoPago",contratoMetodoPago);
    apiCoreSaveContrato.append("contratoMetodoPago2",contratoMetodoPago2);
    apiCoreSaveContrato.append("contratoPorcentaje",contratoPorcentaje);
    apiCoreSaveContrato.append("clausulaAdicional",clausulaAdicional);
    apiCoreSaveContrato.append("contratoLicenciaAbogado",contratoLicenciaAbogado);
    apiCoreSaveContrato.append("perfil",_this.perfil);
    apiCoreSaveContrato.append("borrador","1");

    _this.postModel("apiCoreSaveContrato",apiCoreSaveContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Generar contrato

      let apiCoreGenerarContrato = new FormData();

      apiCoreGenerarContrato.append("idCaso",_this.idCaso);

      _this.postModel("apiCoreGenerarContrato",apiCoreGenerarContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        _this.spinner.hide();

        //  Validar modales

        $(".modalTipo1").hide();
        $(".modalTipo2").hide();
        $(".modalTipo3").hide();
        $(".modalTipo4").hide();
        $(".modalTipo5").hide();
        $(".modalTipo6").hide();
        $(".modalTipo7").hide();
        $(".modalTipo8").show();
        $(".modalTipo9").hide();
        $(".modalTipo10").hide();
        $(".modalTipo11").hide();
        $(".modalTipo12").hide();
        $(".modalTipo13").hide();

      });

    });

  }

  //  ENVIAR CONTRATO

  enviarContrato(){

    //  Variables iniciales
    var _this = this;

    //  Capturar información

    var contratoNombreCliente = $("#contratoNombreCliente").val();
    var contratoIdentificacionCliente = $("#contratoIdentificacionCliente").val();
    var contratoLugarCliente = $("#contratoLugarCliente").val();
    var contratoDireccionCliente = $("#contratoDireccionCliente").val();
    var contratoNombreAbogado = $("#contratoNombreAbogado").val();
    var contratoIdentificacionAbogado = $("#contratoIdentificacionAbogado").val();
    var contratoLugarAbogado = $("#contratoLugarAbogado").val();
    var contratoDireccionAbogado = $("#contratoDireccionAbogado").val();
    var objetoContrato = $("#objetoContrato").val();
    var contratoPrecio = $("#contratoPrecio").val();
    var contratoMetodoPago = $("#contratoMetodoPago").val();
    var contratoMetodoPago2 = $("#contratoMetodoPago2").val();
    var contratoPorcentaje = $("#contratoPorcentaje").val();
    var contratoLicenciaAbogado = $("#contratoLicenciaAbogado").val();

    var clausulaAdicional = "";

    if(_this.perfil == "abogado")
      clausulaAdicional = _this.clausulasAdicionales;
    else
      clausulaAdicional = _this.clausulaAdicional;

    //  Guardar información del contrato

    _this.spinner.show();

    let apiCoreSaveContrato = new FormData();

    apiCoreSaveContrato.append("idCaso",_this.idCaso);
    apiCoreSaveContrato.append("contratoNombreCliente",contratoNombreCliente);
    apiCoreSaveContrato.append("contratoIdentificacionCliente",contratoIdentificacionCliente);
    apiCoreSaveContrato.append("contratoLugarCliente",contratoLugarCliente);
    apiCoreSaveContrato.append("contratoDireccionCliente",contratoDireccionCliente);
    apiCoreSaveContrato.append("contratoNombreAbogado",contratoNombreAbogado);
    apiCoreSaveContrato.append("contratoIdentificacionAbogado",contratoIdentificacionAbogado);
    apiCoreSaveContrato.append("contratoLugarAbogado",contratoLugarAbogado);
    apiCoreSaveContrato.append("contratoDireccionAbogado",contratoDireccionAbogado);
    apiCoreSaveContrato.append("objetoContrato",objetoContrato);
    apiCoreSaveContrato.append("contratoPrecio",contratoPrecio);
    apiCoreSaveContrato.append("contratoMetodoPago",contratoMetodoPago);
    apiCoreSaveContrato.append("contratoMetodoPago2",contratoMetodoPago2);
    apiCoreSaveContrato.append("contratoPorcentaje",contratoPorcentaje);
    apiCoreSaveContrato.append("clausulaAdicional",clausulaAdicional);
    apiCoreSaveContrato.append("contratoLicenciaAbogado",contratoLicenciaAbogado);
    apiCoreSaveContrato.append("perfil",_this.perfil);
    apiCoreSaveContrato.append("borrador","0");

    _this.postModel("apiCoreSaveContrato",apiCoreSaveContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $.alert('Se ha enviado el contrato a revisión al administrador.');

      setTimeout(function(){

        _this.location("/core");

      },3000);

    });

  }

  //  CONSULTAR CLIENTE

  consultarCliente(){

    //  Variables iniciales
    var _this = this;

    //  Consultar cliente

    let apiCoreConsultarCliente = new FormData();

    apiCoreConsultarCliente.append("idCaso",_this.idCaso);

    _this.postModel("apiCoreConsultarCliente",apiCoreConsultarCliente).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.clienteData = result[0];

      }

    });

  }

  //  IR AL FINAL DE LAS ACTIVIDADES

  irFinalActividades(){

    //  Variables iniciales
    var _this = this;

    //  Ir al final
    
    setTimeout(function(){

      if(_this.actividades.length > 6)
        $(".carousel-container div").first().css("transform","translateX(-1100px)");

    },4000);

  }

  //  DOCUMENTACIÓN ABOGADO

  documentacionAbogado(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.open(_this.modalGeneral);

    //  Validar contenido a mostrar

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").show();
    $(".modalTipo10").hide();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();

  }

  //  DOCUMENTACIÓN CLIENTE

  documentacionCliente(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.open(_this.modalGeneral);

    //  Validar contenido a mostrar

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").show();
    $(".modalTipo11").hide();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();

    //  Asignar eventos para los anexos a cargar

    setTimeout(function(){

      for(var i = 0; i < _this.solicitudDocumentosTotal; i++){

        $("#documento"+i.toString()).change(function(event){

          var idDocumentoData = $(this).prop("class").split("documento");
          var idDocumento = idDocumentoData[1];
    
          let reader = new FileReader();
                  
          if(event.target.files && event.target.files.length) {
    
            const [file] = event.target.files;
            reader.readAsDataURL(file);
    
            reader.onloadend = function () {
  
              //  Actualizar base64 del documento solicitado

              let apiCoreUpdateDocumentoSolicitado = new FormData();

              apiCoreUpdateDocumentoSolicitado.append("idDocumento",idDocumento);
              apiCoreUpdateDocumentoSolicitado.append("base64",reader.result.toString());

              _this.postModel("apiCoreUpdateDocumentoSolicitado",apiCoreUpdateDocumentoSolicitado).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});
    
            }
    
          }
    
        });
  
      }

    },1000);

  }

  //  SOLICITAR DOCUMENTOS

  solicitarDocumentos(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";
    var documentos = "";

    //  Validar descripción de los documentos

    for(var i = 0; i < _this.cantidadDocumentosSolicitar; i++){

      //  Validar si se diligencio documento

      if(!$("#documento"+i).val()){
        
        error = 1;
        msg = "Debe digitar la descripción del documento " + (i+1);

      }

      //  Almacenar documento

      if(!documentos)
        documentos = $("#documento"+i).val();
      else
        documentos += "|" + $("#documento"+i).val();

    }

    //  Validar motivo de los documentos

    if(!$("#motivoDocumentos").val()){
        
      error = 1;
      msg = "Debe digitar el motivo por el cual esta solicitando los documentos";

    }

    //  Mostrar errores

    if(error == 1)
      $.alert(msg);

    //  Registrar solicitud

    if(error == 0){

      let apiCoreSolicitarDocumentos = new FormData();

      apiCoreSolicitarDocumentos.append("idCaso",_this.idCaso);
      apiCoreSolicitarDocumentos.append("cliente",_this.usuarioCaso);
      apiCoreSolicitarDocumentos.append("abogado",_this.abogadoCaso);
      apiCoreSolicitarDocumentos.append("estado","1");
      apiCoreSolicitarDocumentos.append("documentos",documentos);
      apiCoreSolicitarDocumentos.append("motivo",$("#motivoDocumentos").val());

      _this.postModel("apiCoreSolicitarDocumentos",apiCoreSolicitarDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        $.alert("Se registro la solicitud correctamente, pendiente aprobación por parte de Abogline");

        setTimeout(function(){
          _this.location("/core");
        },3000);

      });

    }

  }

  //  CANTIDAD DE DOCUMENTOS

  cantidadDocumentos(){

    //  Variables iniciales
    var _this = this;

    //  Actualizar cantidad de documentos a solicitar
    _this.cantidadDocumentosSolicitar = parseInt($("#cantidadDocumentos").val());

  }

  //  SOLICITUD DOCUMENTOS

  solicitudDocumentos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar documentos solicitados

    let apiCoreGetSolicitudDocumentos = new FormData();

    apiCoreGetSolicitudDocumentos.append("idCaso",_this.idCaso);

    _this.postModel("apiCoreGetSolicitudDocumentos",apiCoreGetSolicitudDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.solicitudDocumentosTotal = result.length;

      if(result.length > 0){
        
        _this.solicitudDocumentosData = result;

        //  Validar estado de la solicitud de documentos

        for(var i = 0; i < result.length; i++){

          if(result[i].estado == "1")
            _this.solicitudDocumentosEstado = 1;
          
          if(result[i].estado == "2")
            _this.solicitudDocumentosEstado = 2;
          
          if(result[i].estado == "3")
            _this.solicitudDocumentosEstado = 3;

        }

      }

    });

  }

  //  CARGAR DOCUMENTOS

  cargarDocumentos(){

    //  Variables iniciales
    
    var _this = this;
    var error = 0;
    var msg = "";

    //  Validar carga de documentos

    for(var i = 0; i < this.solicitudDocumentosTotal; i++){

      if(!$("#documento"+i).val()){

        error = 1;
        msg = "Debe cargar el documento para continuar";

      }

    }

    //  Mostrar errores

    if(error == 1)
      $.alert(msg);

    //  Confirmar carga de documentos

    if(error == 0){

      let apiCoreConfirmarCargaDocumentos = new FormData();

      apiCoreConfirmarCargaDocumentos.append("idCaso",_this.idCaso);
  
      _this.postModel("apiCoreConfirmarCargaDocumentos",apiCoreConfirmarCargaDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
        $.alert("Se enviaron los documentos al abogado correctamente");
  
        setTimeout(function(){
          _this.location("/core");
        },3000);
  
      });

    }

  }

  //  VISUALIZAR DOCUMENTOS

  visualizarDocumentos(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.open(_this.modalGeneral);

    //  Validar contenido a mostrar

    $(".modalTipo1").hide();
    $(".modalTipo2").hide();
    $(".modalTipo3").hide();
    $(".modalTipo4").hide();
    $(".modalTipo5").hide();
    $(".modalTipo6").hide();
    $(".modalTipo7").hide();
    $(".modalTipo8").hide();
    $(".modalTipo9").hide();
    $(".modalTipo10").hide();
    $(".modalTipo11").show();
    $(".modalTipo12").hide();
    $(".modalTipo13").hide();

  }

  //  ABRIR DOCUMENTO

  abrirDocumento(documento){

    var a = document.createElement("a");
    var extension = documento.split(';')[0].split('/')[1];

    a.href = documento;
    a.download = "documento." + extension;
    a.click();

  }

  //  CHANGE MOTIVO FINALIZA CONTRATO

  changeFinalizaContrato(valor){

    //  Variables iniciales
    var _this = this;

    //  Actualizar valor motivo
    _this.motivoFinalizaContrato = valor;

  }

  //  CHANGE MOTIVO PAGO

  changeMotivoPago(valor){

    //  Variables iniciales
    var _this = this;

    //  Actualizar valor motivo
    _this.motivoPago = valor;

  }

}