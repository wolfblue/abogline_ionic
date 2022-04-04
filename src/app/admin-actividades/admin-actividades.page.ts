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
  selector: 'app-admin-actividades',
  templateUrl: './admin-actividades.page.html',
  styleUrls: ['./admin-actividades.page.scss'],
})
export class AdminActividadesPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  pagoAsesoriaDesc = "";
  asesoriaDesc = "";
  desicionContinuidadDesc = "";
  generarCitaDesc = "";
  contratacionDesc = "";
  firmarContratoDesc = "";
  finalizarContratoDesc = "";
  pagosDesc = "";
  reunionVirtualDesc = "";
  documentacionDesc = "";
  reunionPresencialDesc = "";
  informacionDesc = "";

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Consultar admin
    this.consultarAdmin();

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

  //  ACTUALIZAR ACTIVIDAD

  updateActividad(actividad,valor){

    //  Variables iniciales
    var _this = this;

    //  Actualizar actividad

    let apiAdminUpdate = new FormData();

    apiAdminUpdate.append("tipo",actividad);
    apiAdminUpdate.append("contenido",valor);

    _this.postModel("apiAdminUpdate",apiAdminUpdate).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

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
              _this.pagoAsesoriaDesc = result[i].contenido;
            break;

            case "asesoria":
              _this.asesoriaDesc = result[i].contenido;
            break;

            case "decision-continuidad":
              _this.desicionContinuidadDesc = result[i].contenido;
            break;

            case "generar-cita":
              _this.generarCitaDesc = result[i].contenido;
            break;

            case "contratacion":
              _this.contratacionDesc = result[i].contenido;
            break;

            case "firmar-contrato":
              _this.firmarContratoDesc = result[i].contenido;
            break;

            case "finalizar-contrato":
              _this.finalizarContratoDesc = result[i].contenido;
            break;

            case "pagos":
              _this.pagosDesc = result[i].contenido;
            break;

            case "reunion-virtual":
              _this.reunionVirtualDesc = result[i].contenido;
            break;

            case "documentacion":
              _this.documentacionDesc = result[i].contenido;
            break;

            case "reunion-presencial":
              _this.reunionPresencialDesc = result[i].contenido;
            break;

            case "informacion":
              _this.informacionDesc = result[i].contenido;
            break;

          }

        }

      }

    });

  }

}

