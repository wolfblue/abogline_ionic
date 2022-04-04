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

  constructor(
    private http:HttpClient
  ) { 

    this.consultarNotificaciones();

    const Meeting = require('google-meet-api').meet;

    Meeting({
    clientId : 'XXXXdds420ghq7195tfsbi04i7rduaans.apps.googleusercontent.com',
    clientSecret : 'XXXXxxeh2mrCZ',
    refreshToken : 'XXXXXXXXXCNfW2MMGvJUSk4V7LplXAXXXX',
    date : "2020-12-01",
    time : "10:59",
    summary : 'summary',
    location : 'location',
    description : 'description'
    }).then(function(result){
    console.log(result);//result it the final link
    })

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
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

    });

  }

  //  CONFIRMAR REUNION

  confirmarReunion(idNotificacion){

    

    //  Variables iniciales

    var _this = this;

    //  Confirmar reunion

    let apiAprobarNotificacionReunion = new FormData();

    apiAprobarNotificacionReunion.append("idNotificacion",idNotificacion);

    _this.postModel("apiAprobarNotificacionReunion",apiAprobarNotificacionReunion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.notificaciones = result;

    });

  }

}
