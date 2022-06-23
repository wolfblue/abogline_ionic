import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  notificaciones = [];
  totalNotificaciones = 0;
  mostrandoNotificaciones = 0;
  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");

  constructor(
    private http:HttpClient
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
      title: 'Confirmar asesoría',
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

  aprobarNotificacion(idNotificacion,tipoNotificacion,idCaso){

    //  Variables iniciales
    var _this = this;

    //  Aprobar notificación

    let apiNotificacionesAprobar = new FormData();

    apiNotificacionesAprobar.append("idNotificacion",idNotificacion);
    apiNotificacionesAprobar.append("tipoNotificacion",tipoNotificacion);
    apiNotificacionesAprobar.append("idCaso",idCaso);
    apiNotificacionesAprobar.append("abogado",_this.usuario);

    _this.postModel("apiNotificacionesAprobar",apiNotificacionesAprobar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $.alert('Se aprobó la notificación correctamente');

      setTimeout(function(){

        _this.location("/notificaciones");

      },3000);

    });

  }

}
