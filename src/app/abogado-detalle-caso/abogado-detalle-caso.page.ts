import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-abogado-detalle-caso',
  templateUrl: './abogado-detalle-caso.page.html',
  styleUrls: ['./abogado-detalle-caso.page.scss'],
})
export class AbogadoDetalleCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  fechaReunion:any = "";

  constructor(

    private http:HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService

  ) {}

  ngOnInit() {

    $(".btnReunion").hide();

    this.spinner.show();
    $("form").hide();

    //  Obtener detalle del caso
    this.getDataCaso();

    //  Obtener si ya se hizo merge
    this.getMergeCaso();

    //  Consultar si tiene reuniones pendientes por aprobar
    this.getReunionesPendientes();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    window.location = ruta;

  }

  /************************************************************************* */

  /**
   * Obtener detalle del caso
   */

  getDataCaso(){

    var caso = JSON.parse(sessionStorage.getItem('caso'));

    $("#field1").html(caso.field1Desc);
    $("#field2").html(caso.field2Desc + " " + caso.field3);
    $("#field4").html(caso.field4Desc + " " + caso.field5);
    $("#field6").html(caso.field6);
    $("#field7").html(caso.field7Desc);

    //  Validar si esta pendiente de aprobar o rechazar
    this.aprobarRechazarCaso(caso.hasProceso,caso.emailOrigen);

  }

  /***************************************************************************** */

  /**
   * Aplicar al caso
   */

  aplicarCaso(){

    //  Variables iniciales

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    //  Validar si el usuario ya aplicó a un caso

    let getProceso = new FormData();

    getProceso.append("email", sessionStorage.getItem("email"));
    getProceso.append("idCaso", caso.id);
    
    this.postModel("getProceso",getProceso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        this.msg = "Usted ya aplicó al proceso anteriormente";

        $(".warning").show();

        setTimeout(function(){

          $(".warning").hide();

        },3000);

      }else{

        //  Registrar el proceso

        let createProceso = new FormData();

        createProceso.append("email", sessionStorage.getItem("email"));
        createProceso.append("idCaso", caso.id);
        
        this.postModel("createProceso",createProceso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

          this.msg = "Aplicó al caso correctamente";
          
          $(".success").show();

          //  Volver a la busqueda de casos

          setTimeout(function(){

            _this.location("abogado-buscar-caso");
            $(".success").hide();

          },3000);

        }); 

      }

    });

  }

  /************************************************************************************* */

  /**
   * Modal confirmar
   */

   modalConfirmar(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirm").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      _this.solicitarConsulta();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */
  //  MODAL RECHAZAR
  /************************************************************************************* */

   modalRechazar(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirm").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      _this.rechazarSolicitud();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */

  /**
   * Solicitar consulta
   */

  solicitarConsulta(){

    //  Variables iniciales

    var abogado = JSON.parse(sessionStorage.getItem('abogado'));
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    this.spinner.show();

    //  Realizar solicitud

    let solicitarConsulta = new FormData();

    solicitarConsulta.append("idCaso",caso.id);
    solicitarConsulta.append("emailCliente",caso.email);
    solicitarConsulta.append("emailAbogado",sessionStorage.getItem("email"));
    solicitarConsulta.append("emailOrigen",sessionStorage.getItem("email"));

    this.postModel("solicitarConsulta",solicitarConsulta).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.location("/");

    });

  }

  /*********************************************************************************************** */
  //  APROBAR O RECHAZAR SOLICITUD
  /*********************************************************************************************** */

  aprobarRechazarCaso(hasProceso,emailOrigen){

    if(hasProceso == "S"){

      $(".btnSolicitud").html("Aprobar solicitud");

      if(emailOrigen == sessionStorage.getItem("email")){

        $(".btnRechazar").hide();
        $(".btnSolicitud").hide();

      }

    }else{

      $(".btnRechazar").hide();

      //  Ocultar botón solicitar consulta cuando viene de notificación

      if(sessionStorage.getItem("notificacion") == "true")
        $(".btnSolicitud").hide();
      
    }

  }

  /*********************************************************************************************** */
  //  RECHAZAR SOLICITUD
  /*********************************************************************************************** */

  rechazarSolicitud(){

    //  Variables iniciales
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    this.spinner.show();

    //  Realizar solicitud

    let rechazarSolicitud = new FormData();

    rechazarSolicitud.append("idCaso",caso.id);
    rechazarSolicitud.append("emailCliente",caso.email);
    rechazarSolicitud.append("emailAbogado",sessionStorage.getItem("email"));

    this.postModel("rechazarSolicitud",rechazarSolicitud).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.location("/");

    });

  }

  /***************************************************************************************** */
  //  OBTENER SI YA UN CASO TIENE MERGE
  /***************************************************************************************** */

  getMergeCaso(){

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    let getMergeCaso = new FormData();

    getMergeCaso.append("idCaso",caso.id);

    _this.postModel("getMergeCaso",getMergeCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        $(".btnRechazar").hide();
        $(".btnSolicitud").hide();

      }

    });

  }

  /************************************************************************************* */
  //  MODAL CONFIRMAR REUNION
  /************************************************************************************* */

  modalConfirmarReunion(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirm").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      _this.aprobarReunion();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */
  //  APROBAR REUNION
  /************************************************************************************* */

  aprobarReunion(){

    this.spinner.show();

    var _this = this;

    let aprobarReunion = new FormData();

    aprobarReunion.append("idReunion",sessionStorage.getItem("idReunion"));

    _this.postModel("aprobarReunion",aprobarReunion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.location("/");

    });

  }

  /************************************************************************************* */
  //  CONSULTAR REUNIONES PENDIENTES
  /************************************************************************************* */

  getReunionesPendientes(){

    var _this = this;

    let getReunionesPendientes = new FormData();

    getReunionesPendientes.append("idReunion",sessionStorage.getItem("idReunion"));
    getReunionesPendientes.append("email",sessionStorage.getItem("email"));

    _this.postModel("getReunionesPendientes",getReunionesPendientes).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();
      $("form").show();

      if(result.length > 0){

        $(".btnReunion").show();
        _this.fechaReunion = result[0].date_meeting;

      }

    });

  }

}
