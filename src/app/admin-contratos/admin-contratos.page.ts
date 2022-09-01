import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

declare var ClassicEditor;
declare var $;

@Component({
  selector: 'app-admin-contratos',
  templateUrl: './admin-contratos.page.html',
  styleUrls: ['./admin-contratos.page.scss'],
})
export class AdminContratosPage implements OnInit {

  @ViewChild("modalRechazar", {static: false}) modalRechazar: TemplateRef<any>;
  @ViewChild("modalRechazarCliente", {static: false}) modalRechazarCliente: TemplateRef<any>;
  @ViewChild("modalContrato", {static: false}) modalContrato: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  contratos = [];
  rutaBackend = `${environment.backend}`;
  modal : NgbModalRef;
  idCaso = "";
  clausulasAdicionales = "";

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Variables iniciales
    var _this = this;

    //  Consultar contratos
    _this.consultarContratos();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {});        
  }

  //  CONSULTAR CONTRATOS

  consultarContratos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contratos

    let apiAdminConsultarContratos = new FormData();

    _this.postModel("apiAdminConsultarContratos",apiAdminConsultarContratos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.contratos = result;

    });

  }

  //  VER CONTRATO

  verContrato(i){

    //  Variables iniciales
    var _this = this;

    //  Actualizar contrato
    _this.idCaso = _this.contratos[i].id_caso;

    //  Abrir modal contrato
    _this.open(_this.modalContrato);

    //  Agregar valores al contrato modal

    $("#contratoNombreCliente").val(_this.contratos[i].contrato_nombre_cliente);
    $("#contratoIdentificacionCliente").val(_this.contratos[i].contrato_identificacion_cliente);
    $("#contratoLugarCliente").val(_this.contratos[i].contrato_lugar_cliente);
    $("#contratoDireccionCliente").val(_this.contratos[i].contrato_direccion_cliente);

    $("#contratoNombreAbogado").val(_this.contratos[i].contrato_nombre_abogado);
    $("#contratoIdentificacionAbogado").val(_this.contratos[i].contrato_identificacion_abogado);
    $("#contratoLugarAbogado").val(_this.contratos[i].contrato_lugar_abogado);
    $("#contratoDireccionAbogado").val(_this.contratos[i].contrato_direccion_abogado);
    $("#contratoLicenciaAbogado").val(_this.contratos[i].contrato_licencia_abogado);

    $("#objetoContrato").val(_this.contratos[i].objeto_contrato);

    $("#contratoPrecio").val(_this.contratos[i].contrato_precio);

    $("#contratoMetodoPago").val(_this.contratos[i].contrato_metodo_pago);

    _this.metodoPago();

    $("#contratoMetodoPago2").val(_this.contratos[i].contrato_metodo_pago2);

    $("#contratoPorcentaje").val(_this.contratos[i].contrato_porcentaje);

    ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {

          editor.setData(_this.contratos[i].clausula_adicional);

          _this.clausulasAdicionales = editor.getData();

          editor.model.document.on('change:data', () => {
            _this.clausulasAdicionales = editor.getData();
          });

        } )
        .catch( error => {
            console.error( error );
        } );

    //  Abrir documento
    //window.open(_this.rutaBackend+"contratos/"+_this.contratos[i].id_caso+".pdf");

  }

  //  APROBAR CONTRATO AL ABOGADO

  aprobarContratoAbogado(idCaso){

    //  Variables iniciales
    var _this = this;

    //  Aprobar contrato al abogado

    $.confirm({

      title: 'Aprobar contrato al abogado!',
      content: 'Esta seguro de aprobar el contrato al abogado ?',
      buttons: {

        confirmar: function () {

          let apiAdminAprobarContrato = new FormData();

          apiAdminAprobarContrato.append("idCaso",idCaso);

          _this.postModel("apiAdminAprobarContrato",apiAdminAprobarContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

            $.alert('Se aprobó el contrato al abogado correctamente.');

            setTimeout(function(){

              window.location.href="/admin-contratos";

            },3000);

          });

        },
        cancelar: function () {}

      }

    });

  }

  //  RECHAZAR CONTRATO AL ABOGADO

  rechazarContratoAbogado(paso,idCaso){

    //  Variables iniciales
    var _this = this;

    switch(paso){

      case "1":

        //  Actualizar caso
        _this.idCaso = idCaso;

        //  Abrir modal para agregar observacion
        _this.open(_this.modalRechazar);

      break;

      case "2":

        //  Rechazar contrato

        let apiAdminRechazarContrato = new FormData();

        apiAdminRechazarContrato.append("idCaso",_this.idCaso);
        apiAdminRechazarContrato.append("observacion",$("#observacionRechazo").val());

        _this.postModel("apiAdminRechazarContrato",apiAdminRechazarContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          $.alert('Se envio la observación al abogado para corregir el contrato.');

          setTimeout(function(){

            window.location.href="/admin-contratos";

          },3000);

        });

      break;

    }

  }

  //  RECHAZAR CONTRATO AL CLIENTE

  rechazarContratoCliente(paso,idCaso){

    //  Variables iniciales
    var _this = this;

    switch(paso){

      case "1":

        //  Actualizar caso
        _this.idCaso = idCaso;

        //  Abrir modal para agregar observacion
        _this.open(_this.modalRechazarCliente);

      break;

      case "2":

        //  Rechazar contrato

        let apiAdminRechazarContratoCliente = new FormData();

        apiAdminRechazarContratoCliente.append("idCaso",_this.idCaso);
        apiAdminRechazarContratoCliente.append("observacion",$("#observacionRechazoCliente").val());

        _this.postModel("apiAdminRechazarContratoCliente",apiAdminRechazarContratoCliente).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          $.alert('Se envio la observación al cliente para corregir el contrato.');

          setTimeout(function(){

            window.location.href="/admin-contratos";

          },3000);

        });

      break;

    }

  }

  //  APROBAR CONTRATO AL CLIENTE

  aprobarContratoCliente(idCaso){

    //  Variables iniciales
    var _this = this;

    //  Aprobar contrato al cliente

    $.confirm({

      title: 'Aprobar contrato al cliente!',
      content: 'Esta seguro de aprobar el contrato al cliente ?',
      buttons: {

        confirmar: function () {

          let apiAdminAprobarContratoCliente = new FormData();

          apiAdminAprobarContratoCliente.append("idCaso",idCaso);

          _this.postModel("apiAdminAprobarContratoCliente",apiAdminAprobarContratoCliente).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

            $.alert('Se aprobó el contrato al cliente correctamente.');

            setTimeout(function(){

              window.location.href="/admin-contratos";

            },3000);

          });

        },
        cancelar: function () {}

      }

    });

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

  guardarBorrador(){

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
    var clausulaAdicional = _this.clausulasAdicionales;

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
    apiCoreSaveContrato.append("perfil", "administrador");
    apiCoreSaveContrato.append("borrador", "0");

    _this.postModel("apiCoreSaveContrato",apiCoreSaveContrato).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $.alert('Se actualizó el contrato correctamente.');

      setTimeout(function(){

        window.location.href = "/admin-contratos";

      },3000);

    });

  }  

}
