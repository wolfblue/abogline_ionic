import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

declare var $;

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  @ViewChild("modalCaso", {static: false}) modalCaso: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  notificaciones = [];
  totalNotificaciones = 0;
  mostrandoNotificaciones = 0;
  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");
  modal : NgbModalRef;
  casoCiudadProblema : any = "";
  casoCualProblema : any = "";
  casoCuentanos : any = "";
  casoFechaRegistro : any = "";
  casoProblemas : any = "";
  casoProceso : any = "";
  casoTrataCaso : any = "";
  idCaso : any;

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { 

    this.consultarNotificaciones();



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

  /**************************************************************************** */
  //  MODAL
  /**************************************************************************** */

  open(content) {
    this.modal = this.modalService.open(content, { size: 'lg', centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  //  CONSULTAR NOTIFICACIONES

  consultarNotificaciones(){

    //  Variables iniciales

    var _this = this;

    //  Consultar notificaciones

    let apiConsultarNotificaciones = new FormData();

    apiConsultarNotificaciones.append("usuario",sessionStorage.getItem('usuario'));

    _this.postModel("apiConsultarNotificaciones",apiConsultarNotificaciones).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.notificaciones = result;
      _this.totalNotificaciones = result.length;
      _this.mostrandoNotificaciones = result.length;

    });

  }

  //  CONFIRMAR REUNION

  confirmarReunion(idCalendario,idNotificacion){

    //  Variables iniciales

    var _this = this;

    //  Confirmar reunion

    $.confirm({
      title: 'Confirmar reunión',
      content: 'Esta seguro de confirmar la reunión ?',
      buttons: {

          confirmar: function () {

            let apiAprobarNotificacionReunion = new FormData();

            apiAprobarNotificacionReunion.append("idNotificacion",idNotificacion);
            apiAprobarNotificacionReunion.append("idCalendario",idCalendario);
        
            _this.postModel("apiAprobarNotificacionReunion",apiAprobarNotificacionReunion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert('Se confirmó la reunión correctamente');

              setTimeout(function(){
  
                _this.location("/notificaciones");
  
              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  RECHAZAR REUNION

  rechazarReunion(idCalendario,idNotificacion){

    //  Variables iniciales

    var _this = this;

    //  Rechazar reunion

    $.confirm({
      title: 'Rechazar asesoría',
      content: 'Esta seguro de rechazar la reunión ?',
      buttons: {

          confirmar: function () {

            let apiRechazarNotificacionReunion = new FormData();

            apiRechazarNotificacionReunion.append("idNotificacion",idNotificacion);
            apiRechazarNotificacionReunion.append("idCalendario",idCalendario);
        
            _this.postModel("apiRechazarNotificacionReunion",apiRechazarNotificacionReunion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert('Se rechazó la reunión correctamente');

              setTimeout(function(){
  
                _this.location("/notificaciones");
  
              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  ELIMINAR NOTIFICACIÓN

  eliminarNotificacion(id){

    //  Variables iniciales
    var _this = this;

    //  Confirmar la eliminación de la notificación

    $.confirm({
      title: 'Eliminar notificación',
      content: 'Esta seguro de eliminar la notificación ?',
      buttons: {

          confirmar: function () {

            //  Eliminar notificación

            let apiEliminarNotificacion = new FormData();

            apiEliminarNotificacion.append("id",id);
        
            _this.postModel("apiEliminarNotificacion",apiEliminarNotificacion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              $.alert('Se eliminó la notificación correctamente');

              setTimeout(function(){
  
                _this.location("/notificaciones");
  
              },3000);

            });

          },
          cancelar: function () {}
          
        }
      });

  }

  //  APROBAR NOTIFICACIÓN

  aprobarNotificacion(idNotificacion,tipoNotificacion,idCaso,idCalendario){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Confirmar aprobación',
      content: 'Esta seguro de confirmar la notificación ?',
      buttons: {

          confirmar: function () {

            _this.spinner.show();

            let apiNotificacionesAprobar = new FormData();

            apiNotificacionesAprobar.append("idNotificacion",idNotificacion);
            apiNotificacionesAprobar.append("tipoNotificacion",tipoNotificacion);
            apiNotificacionesAprobar.append("idCaso",idCaso);
            apiNotificacionesAprobar.append("usuario",_this.usuario);
            apiNotificacionesAprobar.append("idCalendario",idCalendario);

            _this.postModel("apiNotificacionesAprobar",apiNotificacionesAprobar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              _this.spinner.hide();

              $.alert('Se aprobó la notificación correctamente');

              setTimeout(function(){

                _this.location("/notificaciones");

              },3000);

            });

          },
          cancelar: function () {}
      }
    });

  }

  //  IR AL CASO

  irCaso(idCaso){

    sessionStorage.setItem("idCaso",idCaso);
    window.location.href = "/core";

  }

  //  Ver caso

  verCaso(idCaso){

    this.idCaso = idCaso;

    let apiNotificacionesGetCaso = new FormData();

    apiNotificacionesGetCaso.append("idCaso",idCaso);

    this.postModel("apiNotificacionesGetCaso",apiNotificacionesGetCaso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.casoCiudadProblema = result[0].ciudad_problema;
      this.casoCualProblema = result[0].cual_problema;
      this.casoCuentanos = result[0].cuentanos;
      this.casoFechaRegistro = result[0].fecha_registro;
      this.casoProblemas = result[0].problemas;
      this.casoProceso = result[0].proceso;
      this.casoTrataCaso = result[0].trata_caso;

      this.open(this.modalCaso);

    });

  }

  /**
    * Seguimiento 
  */

  seguimiento() {

    sessionStorage.setItem('idCaso', this.idCaso)
    this.location('/core');

  }

}
