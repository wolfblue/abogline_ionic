import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-buscar-casos',
  templateUrl: './buscar-casos.page.html',
  styleUrls: ['./buscar-casos.page.scss'],
})
export class BuscarCasosPage implements OnInit {

  @ViewChild("modalEligeme", {static: false}) modalEligeme: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  casos = [];
  ciudadProblema = "";
  categoria = "";
  subcategoria = "";
  cualProblema = "";
  anterior = false;
  siguiente = false;
  points = 1;
  modalImage = "";
  modalTitle = "";
  modalSubtitle = "";
  modalDescription = "";
  modalProceso = "";
  idCaso = "";
  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");
  abogado = [];

  constructor(
    private http:HttpClient,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Consultar casos
    this.consultarCasos();

    //  Consultar abogado
    this.consultarAbogado();

  }

  ngOnInit() {
    $(".buscaTuCaso").css("color","#3B9CB2");
  }

  //  CONSUMIR SERVICIO

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  REDIRECCIONAR

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  //  CONSULTAR CASOS

  consultarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar casos

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario", "");
    apiConsultarCasos.append("trataCaso",_this.categoria);
    apiConsultarCasos.append("cualProblema",_this.subcategoria);
    apiConsultarCasos.append("id","");
    apiConsultarCasos.append("perfil","");
    apiConsultarCasos.append("ciudadProblema",_this.ciudadProblema);

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.casos = result;

      if(result.length > 0){

        $("#trataCaso option").hide();
        $("#subcategoria option").hide();
        $("#ciudadProblema option").hide();

        $("#trataCaso option[value='']").show();
        $("#subcategoria option[value='']").show();
        $("#ciudadProblema option[value='']").show();

        for(var i = 0; i < result.length; i++){

          $("#ciudadProblema option[value=" + result[i].ciudad_problema + "]").show();
          $("#trataCaso option[value=" + result[i].trata_caso + "]").show();
          $("#subcategoria option[value='" + result[i].cual_problema + "']").show();

        }

      }

    });

  }

  //  CAMBIO DE CAMPO TRATA CASO

  trataCaso(){

    //  Variables iniciales

    var _this = this;
    var trataCaso = $("#trataCaso").val();

    //  Actualizar variable global
    _this.cualProblema = trataCaso

    //  Consultar casos
    _this.consultarCasos();

  }

  //  BUSCAR CASOS

  buscarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Actualizar variables globales

    _this.categoria = $("#trataCaso").val();
    _this.subcategoria = $("#subcategoria").val();

    //  Consultar casos

    _this.consultarCasos();

  }

  //  ABRIR MODAL

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  //  ELIGEME

  eligeme(modalImage,modalTitle,modalSubtitle,modalDescription,modalProceso,idCaso){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalEligeme);

    //  Estilos modal

    $(".modal-content").css("background","transparent");
    $(".modal-content").css("border","0px solid");

    _this.modalImage = modalImage;
    _this.modalTitle = modalTitle;
    _this.modalSubtitle = modalSubtitle;
    _this.modalDescription = modalDescription;
    _this.modalProceso = modalProceso;
    _this.idCaso = idCaso;

  }

  //  CERRAR MODAL/

  closeModal(){

    //  Cariables iniciales
    var _this = this;

    //  Cerrar modal
    _this.modal.close();

  }

  //  ESCOGER

  escoger(idCaso){

    //  Variables iniciales
    var _this = this;

    if(!idCaso)
      idCaso = this.idCaso;

    //  Sin autenticación

    if(!_this.usuario){

      sessionStorage.setItem("registro","true");
      _this.location("home");

    }else{

      if(_this.abogado[0].estado == 2){

        //  Spinner show
        _this.spinner.show();

        //  Enviar notificación al abogado

        let apiCasosUsuarioAsociarAbogado = new FormData();

        apiCasosUsuarioAsociarAbogado.append("idCaso",idCaso);
        apiCasosUsuarioAsociarAbogado.append("abogado",_this.usuario);
        apiCasosUsuarioAsociarAbogado.append("estadoUsuario","pendiente");
        apiCasosUsuarioAsociarAbogado.append("estadoAbogado","aceptado");

        _this.postModel("apiCasosUsuarioAsociarAbogado",apiCasosUsuarioAsociarAbogado).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          //  Spinner hide
          _this.spinner.hide();

          $.alert('Se ha enviado la solicitud al usuario para continuar con el caso.');

          setTimeout(function(){
            _this.location("/buscar-casos");
          },3000);

        });

      }else{

        $.alert('Aún esta pendiente de aprobación por parte de Abogline.');

      }

    }

  }

  //  CAMBIO DE CAMPO CIUDAD PROBLEMA

  ciudadProblemaChange(){

    //  Variables iniciales

    var _this = this;
    var ciudadProblema = $("#ciudadProblema").val();

    //  Actualizar variable global
    _this.ciudadProblema = ciudadProblema;

    //  Consultar casos
    _this.consultarCasos();

  }

  //  CONSULTAR ABOGADO

  consultarAbogado(){

    var _this = this;

    let apiUsuariosGetUser = new FormData();

    apiUsuariosGetUser.append("usuario",_this.usuario);

    _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.abogado = result;

    });

  }

}
