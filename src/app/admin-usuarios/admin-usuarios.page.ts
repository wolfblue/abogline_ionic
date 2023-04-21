import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { count } from 'console';

declare var $;

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.page.html',
  styleUrls: ['./admin-usuarios.page.scss'],
})
export class AdminUsuariosPage implements OnInit {

  @ViewChild("modalDocumentos", {static: false}) modalDocumentos: TemplateRef<any>;
  @ViewChild("modalUsuario", {static: false}) modalUsuario: TemplateRef<any>;
  @ViewChild("modalRoles", {static: false}) modalRoles: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  usuarios: any = [];
  documentos: any = [];
  usuarioData: any = [];
  rutaBackend = `${environment.backend}`;
  modal : NgbModalRef;
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  usuarioDocumentos = [];
  cedula = "";
  diploma = "";
  reciboServicioPublico = "";
  especializacion = "";
  tp = "";
  maestria = "";
  pdfView = "";
  usuario = (sessionStorage.getItem("usuario")?sessionStorage.getItem("usuario"):"");
  usuarioModalRoles = "";

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Obtener usuarios
    this.getUsuarios();

  }

  ngOnInit() {
    $(".administrarUsuarios").css("color","#3B9CB2");
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

  /************************************************************************************* */
  //  Consultar usuarios
  /************************************************************************************* */

  getUsuarios(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar ciudades

    let apiAdminGetUsuarios = new FormData();

    _this.postModel("apiAdminGetUsuarios",apiAdminGetUsuarios).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      _this.usuarios = result;

      setTimeout(function(){
        $('#tableDT').DataTable();
      });

    });

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

  /************************************************************************************* */
  //  Obtener documentos del usuario
  /************************************************************************************* */

  getDocumentosUser(usuario){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar documentos

    let apiAdminGetDocumentosUser = new FormData();

    apiAdminGetDocumentosUser.append("usuario",usuario);

    _this.postModel("apiAdminGetDocumentosUser",apiAdminGetDocumentosUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Guardar documentos del usuario
      _this.usuarioDocumentos = result;

      for(var i = 0; i < result.length; i++){

        switch(result[i].tipo){

          case "cargaCedula":
            _this.cedula = result[i].file;
          break;

          case "cargaDiploma":
            _this.diploma = result[i].file;
          break;

          case "cargaReciboServicioPublico":
            _this.reciboServicioPublico = result[i].file;
          break;

          case "cargaEspecializacion":
            _this.especializacion = result[i].file;
          break;

          case "cargaTp":
            _this.tp = result[i].file;
          break;

          case "cargaMaestria":
            _this.maestria = result[i].file;
          break;

        }

      }

      //  Spinner
      _this.spinner.hide();

    });

  }

  downloadFile(linkSource){
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "abogline_documento";
    downloadLink.click();
}

  /************************************************************************************* */
  //  Visualizar documento
  /************************************************************************************* */

  openFile(base64){

    console.log(base64);

    //  Visualizar documento
    this.downloadFile(base64);

  }

  /************************************************************************************* */
  //  Confirmar abogado
  /************************************************************************************* */

  confirmarAbogado(usuario){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Aprobar abogado!',
      content: 'Esta seguro de aprobar al abogado ?',
      buttons: {
          confirmar: function () {

            //  Actualizar estado del abogado aprobado

            let apiAdminAprobarAbogado = new FormData();

            apiAdminAprobarAbogado.append("usuario",usuario);

            _this.postModel("apiAdminAprobarAbogado",apiAdminAprobarAbogado).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

            $.alert('Se aprobó el abogado correctamente');

            setTimeout(function(){

              _this.location("/admin-usuarios");

            },3000);

          },
          cancelar: function () {}
      }
    });

  }

  /************************************************************************************* */
  //  Rechazar abogado
  /************************************************************************************* */

  rechazarAbogado(usuario){

    //  Variables iniciales
    var _this = this;

    //  Confirmar aprobación

    $.confirm({
      title: 'Rechazar abogado!',
      content: 'Indique a continuación el motivo del rechazo: <br><br><textarea id="rechazo" cols="40" rows="10"></textarea>',
      buttons: {
          confirmar: function () {

            //  Actualizar estado del abogado rechazado

            let apiAdminRechazarAbogado = new FormData();

            apiAdminRechazarAbogado.append("usuario",usuario);
            apiAdminRechazarAbogado.append("motivo",$("#rechazo").val());

            _this.postModel("apiAdminRechazarAbogado",apiAdminRechazarAbogado).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

            $.alert('Se rechazó el abogado correctamente');

            setTimeout(function(){

              _this.location("/admin-usuarios");

            },3000);

          },
          cancelar: function () {}
      }
    });

  }

  /************************************************************************************* */
  //  Bloquear abogado
  /************************************************************************************* */

  bloquearUsuario(usuario){

    //  Variables iniciales
    var _this = this;

    //  Confirmar bloqueo

    $.confirm({
      title: 'Bloquear usuario!',
      content: 'Esta seguro de bloquear al usuario ?',
      buttons: {
          confirmar: function () {

            //  Actualizar estado del usuario bloqueado

            let apiAdminBloquearUsuario = new FormData();

            apiAdminBloquearUsuario.append("usuario",usuario);

            _this.postModel("apiAdminBloquearUsuario",apiAdminBloquearUsuario).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

            $.alert('Se bloqueo el usuario correctamente');

            setTimeout(function(){

              _this.location("/admin-usuarios");

            },3000);

          },
          cancelar: function () {}
      }
    });

  }

  //  Ver perfil completo del usuario

  viewProfile(i){

    //  Variables iniciales
    var _this = this;

    //  Actualizar usuario seleccionado
    _this.usuarioData = _this.usuarios[i];

    //  Consultar información
    _this.open(_this.modalUsuario);

    //  Consultar documentos
    _this.getDocumentosUser(_this.usuarios[i].usuario);

  }

  //  Visualizar pdf

  getPdf(doc){

    //  Variables iniciales
    var _this = this;

    //  Actualizar vista pdf

    switch(doc){

      case "cedula":
        _this.pdfView = _this.cedula;
      break;

      case "diploma":
        _this.pdfView = _this.diploma;
      break;

      case "reciboServicioPublico":
        _this.pdfView = _this.reciboServicioPublico;
      break;

      case "especializacion":
        _this.pdfView = _this.especializacion;
      break;

      case "tp":
        _this.pdfView = _this.tp;
      break;

      case "maestria":
        _this.pdfView = _this.maestria;
      break;

    }

  }

  //  ABRIR MODAL ROLES

  openModalRoles(usuario){

    //  Variables iniciales
    var _this = this;

    //  Capturar usuario
    _this.usuarioModalRoles = usuario;

    //  Abrir modal
    _this.open(_this.modalRoles);

    //  Obtener roles del usuario

    let apiAdminObtenerRoles = new FormData();

    apiAdminObtenerRoles.append("usuario",this.usuarioModalRoles);

    _this.postModel("apiAdminObtenerRoles",apiAdminObtenerRoles).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        for(var i = 0; i < result.length; i++)
          $("."+result[i].rol).prop("checked",true);

      }

    });

  }

  //  ACTUALIZAR ROLES DEL USUARIO

  actualizarRolesUsuario(){

    //  Variables iniciales

    var _this = this;
    var rolesActivos = "";

    //  Capturar valores

    $(".rolesUsuario input").each(function(){

      if($(this).prop("checked") == true){

        if(!rolesActivos)
          rolesActivos = $(this).prop("class");
        else
          rolesActivos += "|" + $(this).prop("class");

      }

    });

    //  Actualizar roles

    let apiAdminActualizarRoles = new FormData();

    apiAdminActualizarRoles.append("usuario",this.usuarioModalRoles);
    apiAdminActualizarRoles.append("roles",rolesActivos);

    _this.postModel("apiAdminActualizarRoles",apiAdminActualizarRoles).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $.alert('Se actualizaron los roles del usuario correctamente');

      setTimeout(function(){

        _this.location("/admin-usuarios");

      },3000);

    });

  }

}
