import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

declare var $;

@Component({
  selector: 'app-consultar-abogados',
  templateUrl: './consultar-abogados.page.html',
  styleUrls: ['./consultar-abogados.page.scss'],
})
export class ConsultarAbogadosPage implements OnInit {

  @ViewChild("modalVerMas", {static: false}) modalVerMas: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");

  casos = [];
  abogados = [];
  modalUsuario = "";
  modalNombre = "";
  modalConsulta = "";
  modalTitulo = "";
  modalVotos = "0";
  modalPerfiles = [];
  modalLicencia = "";
  modalExperiencia = "";
  modalCantidad = 0;
  modalPresentacion = "";
  modalEducacion = [];
  filtroPrecio = [];
  filtroEspecialidad = [];
  filtroTiempo = [];
  rutaBackend = `${environment.backend}`;
  totalAbogados = 0;

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { 

    //  Consultar casos registrados
    this.consultarCasos();

    //  Consultar abogados
    this.consultarAbogados();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  /**************************************************************************** */
  //  MODAL
  /**************************************************************************** */

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  /************************************************* */
  //  Eligeme
  /************************************************* */

  eligeme(abogado){

    //  Variables iniciales
    var _this = this;

    //  Validar autenticación

    if(sessionStorage.getItem("usuario")){

      //  Validar selección del caso

      if($("#seleccionarCaso").val()){

        //  Enviar notificación al abogado

        //  Spinner show
        _this.spinner.show();

        let apiCasosUsuarioAsociarAbogado = new FormData();

        apiCasosUsuarioAsociarAbogado.append("idCaso",$("#seleccionarCaso").val());
        apiCasosUsuarioAsociarAbogado.append("abogado",abogado);
        apiCasosUsuarioAsociarAbogado.append("estadoUsuario","aceptado");
        apiCasosUsuarioAsociarAbogado.append("estadoAbogado","pendiente");

        _this.postModel("apiCasosUsuarioAsociarAbogado",apiCasosUsuarioAsociarAbogado).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          //  Spinner hide
          _this.spinner.hide();

          $.alert('Se ha enviado la solicitud al abogado para continuar con el caso.');

          setTimeout(function(){
            _this.location("/consultar-abogados");
          },3000);

        });

      }else{

        $.alert('Debe seleccionar un caso a relacionar.');

      }

    }else{

      $(".iniciarSesion button").click();

    }

  }

  /****************** */
  //  Consultar casos
  /****************** */

  consultarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    //  Consultar casos

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario",_this.usuario);
    apiConsultarCasos.append("trataCaso","");
    apiConsultarCasos.append("cualProblema","");
    apiConsultarCasos.append("id","");

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner hide
      _this.spinner.hide();

      _this.casos = result;

      if(result.length > 0){

        setTimeout(function(){
          $("#seleccionarCaso").val(result[0].id);
        },1000);

      }

    });

  }

  /********************************************************* */
  //  Consultar abogados
  /********************************************************* */

  consultarAbogados(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    let apiUsuariosGetAbogados = new FormData();

    apiUsuariosGetAbogados.append("usuario",_this.usuario);

    _this.postModel("apiUsuariosGetAbogados",apiUsuariosGetAbogados).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner hide
      _this.spinner.hide();

      _this.abogados = result;

      if(result.length > 0){

        _this.totalAbogados = result.length;

        for(var i = 0; i < result.length; i++){

          _this.filtroPrecio.push(result[i].consulta_format);
          _this.filtroEspecialidad.push(result[i].ramas);
          _this.filtroTiempo.push(result[i].experiencia_tiempo);

        }

      }

    });

  }

  /*************************************************************** */
  //  Ver más del abogado
  /*************************************************************** */

  verMas(i){

    //  Variables iniciales
    var _this = this;

    //  Actualizar valores

    console.log(_this.abogados);
    
    _this.modalUsuario = _this.abogados[i].usuario;
    _this.modalNombre = _this.abogados[i].nombres + " " + _this.abogados[i].apellidos;
    _this.modalConsulta = _this.abogados[i].consulta_format;
    _this.modalTitulo = _this.abogados[i].titulo_profesional;
    _this.modalLicencia = _this.abogados[i].tipo_tp;
    _this.modalExperiencia = _this.abogados[i].experiencia_tiempo;
    _this.modalPresentacion = _this.abogados[i].presentacion;

    var ramas = _this.abogados[i].ramas;
    var ramasData = ramas.split(",");

    _this.modalPerfiles = [];

    for(var c = 0; c < ramasData.length; c++)
      _this.modalPerfiles.push(ramasData[c]);

    //  Consultar titulos de un usuario

    let apiUsuariosGetTitulos = new FormData();

    apiUsuariosGetTitulos.append("usuario",_this.abogados[i].usuario);

    _this.postModel("apiUsuariosGetTitulos",apiUsuariosGetTitulos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.modalEducacion = [];

      if(result.length > 0){

        for(var c2 = 0; c2 < result.length; c2++){
          
          _this.modalEducacion.push({
            'universidad' : result[c2].descripcion1,
            'titulo' : result[c2].descripcion2 + " - " + result[c2].titulo
          });

        }

        console.log(_this.modalEducacion);

      }

    });


    // Abrir modal
    _this.open(_this.modalVerMas);

    $(".modal-content").css("background-color","#274659");
    $(".modal-body").css("padding","4%");
    $(".modal-dialog").css("max-width","600px");
    $(".modal-content").css("border-radius","14px");

    setTimeout(function(){
      $(".escoger").show();
    },1000);

  }

  /**************************************************************************** */
  //  CERRAR MODAL
  /**************************************************************************** */

  closeModal(){

    //  Cariables iniciales
    var _this = this;

    //  Cerrar modal
    _this.modal.close();

  }

}
