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

  private unsubscribe$ = new Subject<void>();

  solicitudes = [];

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

}
