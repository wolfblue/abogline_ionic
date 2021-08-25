import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  usuario = sessionStorage.getItem("usuario");
  perfil = sessionStorage.getItem("perfil");

  solicitudes:any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) { 

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {}

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

    //  Consultar información de la página

    let apiAboglineSolicitudesGetInfo = new FormData();

    apiAboglineSolicitudesGetInfo.append("usuario",_this.usuario);

    _this.postModel("apiAboglineSolicitudesGetInfo",apiAboglineSolicitudesGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.solicitudes = result[0].solicitudes;

      //  Datatable
      $('#solicitudes').DataTable();

    });

  }

  /**************************************************************************** */
  //  ACEPTAR SOLICITUD
  /**************************************************************************** */

  aceptarSolicitud(idSolicitud){

    //  Variables iniciales
    var _this = this;

    //  Aprobar solicitud

    let apiAboglineSolicitudesAprobar = new FormData();

    apiAboglineSolicitudesAprobar.append("idSolicitud",idSolicitud);

    _this.postModel("apiAboglineSolicitudesAprobar",apiAboglineSolicitudesAprobar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = '/solicitudes';

    });

  }

  /**************************************************************************** */
  //  RECHAZAR SOLICITUD
  /**************************************************************************** */

  rechazarSolicitud(idSolicitud){

    //  Variables iniciales
    var _this = this;

    //  Aprobar solicitud

    let apiAboglineSolicitudesRechazar = new FormData();

    apiAboglineSolicitudesRechazar.append("idSolicitud",idSolicitud);

    _this.postModel("apiAboglineSolicitudesRechazar",apiAboglineSolicitudesRechazar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = '/solicitudes';

    });

  }

}
