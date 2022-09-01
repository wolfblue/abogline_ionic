import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.page.html',
  styleUrls: ['./admin-solicitudes.page.scss'],
})
export class AdminSolicitudesPage implements OnInit {

  @ViewChild("modalLink", {static: false}) modalLink: TemplateRef<any>;
  @ViewChild("modalRechazarDocumentos", {static: false}) modalRechazarDocumentos: TemplateRef<any>;

  modal : NgbModalRef;

  private unsubscribe$ = new Subject<void>();

  solicitudes = [];
  idSolicitud = "0";
  idCalendario = "0";
  idCasoRechazo = "0";
  idSolicitudRechazo = "0";

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Consultar solicitudes
    this.consultarSolicitudes();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){
    window.location.href = ruta;
  }

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  //  CONSULTAR SOLICITUDES

  consultarSolicitudes(){

    this.spinner.show();

    //  Variables iniciales
    var _this = this;

    //  Consultar solicitudes

    let apiConsultarSolicitudes = new FormData();

    _this.postModel("apiConsultarSolicitudes",apiConsultarSolicitudes).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      _this.solicitudes = result;

    });

  }

  //  APROBAR SOLICITUD

  aprobarSolicitud(id){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Aprobar solicitud!',
      content: 'Esta seguro de aprobar la solicitud ?',
      buttons: {

          confirmar: function () {

            //  Aprobar solicitud

            let apiAprobarSolicitud = new FormData();

            apiAprobarSolicitud.append("id", id);

            _this.postModel("apiAprobarSolicitud",apiAprobarSolicitud).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert('Se aprobó la solicitud correctamente');

              setTimeout(function(){
  
                _this.location("/admin-solicitudes");
  
              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  RECHAZAR SOLICITUD

  rechazarSolicitud(id){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Rechazar solicitud!',
      content: 'Esta seguro de rechazar la solicitud ?',
      buttons: {

          confirmar: function () {

            //  Rechazar solicitud

            let apiRechazarSolicitud = new FormData();

            apiRechazarSolicitud.append("id", id);

            _this.postModel("apiRechazarSolicitud",apiRechazarSolicitud).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert('Se rechazó la solicitud correctamente');

              setTimeout(function(){
  
                _this.location("/admin-solicitudes");
  
              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  ASIGNAR LINK

  asignarLink(idSolicitud,idCalendario){

    //  Variables iniciales
    
    var _this = this;
    
    //  Asignar id solicitud
    _this.idSolicitud = idSolicitud;

    //  Asignar id calendario
    _this.idCalendario = idCalendario;

    // Abrir modal
    _this.open(_this.modalLink);

    $("input").css("background","#ffffff");

  }

  //  GENERAR LINK

  generarLink(){
    window.open('http://meet.google.com/new');
  }

  //  AsignarLinkReunion

  asignarLinkReunion(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";

    //  Validar link obligatorio

    if(!$("#link").val()){

      error = 1;
      msg = "Debe asignar link para la reunión.";

    }

    //  Mostrar errores

    if(error == 1){

      $.alert(msg);


    }else{

      //  Asignar link de reunión

      let apiAsignarLinkReunion = new FormData();

      apiAsignarLinkReunion.append("idSolicitud",_this.idSolicitud);
      apiAsignarLinkReunion.append("idCalendario",_this.idCalendario);
      apiAsignarLinkReunion.append("link",$("#link").val());

      _this.postModel("apiAsignarLinkReunion",apiAsignarLinkReunion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        $.alert('Se asignó el link de la reunión correctamente.');

        setTimeout(function(){

          _this.location("/admin-solicitudes");

        },3000);

      });

    }

  }

  //  APROBAR SOLICITUD DOCUMENTOS

  aprobarSolicitudDocumentos(idSolicitud,idCaso){

    //  Variables iniciales
    var _this = this;

    //  Aprobar solicitud

    let apiAdminAprobarSolicitudDocumentos = new FormData();

    apiAdminAprobarSolicitudDocumentos.append("idSolicitud",idSolicitud);
    apiAdminAprobarSolicitudDocumentos.append("idCaso",idCaso);

    _this.postModel("apiAdminAprobarSolicitudDocumentos",apiAdminAprobarSolicitudDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $.alert("Se aprobó correctamente la solicitud de documentos para el caso #"+idCaso);

      setTimeout(function(){
        _this.location("/admin-solicitudes");
      },3000);

    });

  }

  //  ABRIR MODAL RECAHZAR DOCUMENTOS
  abrirModalRechazarDocumentos(idCaso,idSolicitud){

    //  Variables iniciales
    var _this = this;

    //  Actualizar variables de rechazo

    _this.idCasoRechazo = idCaso;
    _this.idSolicitudRechazo = idSolicitud;

    //  Abrir modal
    _this.open(_this.modalRechazarDocumentos);

  }

  //  RECHAZAR SOLICITUD DE DOCUMENTOS

  rechazarSolicitudDocumentos(){

    //  Variables iniciales
    var _this = this;

    //  Rechazar solicitud

    let apiAdminRechazarSolicitudDocumentos = new FormData();

    apiAdminRechazarSolicitudDocumentos.append("idCaso",_this.idCasoRechazo);
    apiAdminRechazarSolicitudDocumentos.append("motivo",$("#motivoRechazoSolicitudDocumentos").val());
    apiAdminRechazarSolicitudDocumentos.append("idSolicitud",_this.idSolicitudRechazo);

    _this.postModel("apiAdminRechazarSolicitudDocumentos",apiAdminRechazarSolicitudDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $.alert("Se rechazo la solicitud de documentos correctamente");

      _this.location("/admin-solicitudes");

    });

  }

}
