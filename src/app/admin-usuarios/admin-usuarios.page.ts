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
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.page.html',
  styleUrls: ['./admin-usuarios.page.scss'],
})
export class AdminUsuariosPage implements OnInit {

  @ViewChild("modalDocumentos", {static: false}) modalDocumentos: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  usuarios: any = [];
  documentos: any = [];

  modal : NgbModalRef;

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
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
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

    // Abrir modal
    _this.open(_this.modalDocumentos);

    //  Consultar documentos

    let apiAdminGetDocumentosUser = new FormData();

    apiAdminGetDocumentosUser.append("usuario",usuario);

    _this.postModel("apiAdminGetDocumentosUser",apiAdminGetDocumentosUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Guardar documentos
      _this.documentos = result;

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
      content: 'Esta seguro de rechazar al abogado ?',
      buttons: {
          confirmar: function () {

            //  Actualizar estado del abogado rechazado

            let apiAdminRechazarAbogado = new FormData();

            apiAdminRechazarAbogado.append("usuario",usuario);

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

}
