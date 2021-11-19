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
  selector: 'app-admin-tipo-documento',
  templateUrl: './admin-tipo-documento.page.html',
  styleUrls: ['./admin-tipo-documento.page.scss'],
})
export class AdminTipoDocumentoPage implements OnInit {

  @ViewChild("modalRegister", {static: false}) modalRegister: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  tiposDocumentos:any = [];

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {

    //  Obtener tipos de documentos
    this.getTiposDocumentos();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
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
  //  Actualizar
  /************************************************************************************* */

  addTipoDocumento(){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalRegister);

  }

  /************************************************************************************* */
  //  Form register
  /************************************************************************************* */

  formRegister(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msgError = "";

    var tipoDocumento = $("#tipoDocumento").val();

    //  Spinner
    _this.spinner.show();

    //  Validar campos obligatorios

    if(!tipoDocumento){

      error = 1;
      msgError = "El campo tipo de documento es obligatorio.";

    }

    //  Mostrar errores

    if(error == 1){

      $(".msg").css("color","red");
      $(".msg").html(msgError);
      $(".msg").show();

      setTimeout(function(){
        $(".msg").hide();
      },3000);
      

    }

    //  Registrar tipo de documento

    if(error == 0){

      let apiAdminTipoDocumentoRegister = new FormData();

      apiAdminTipoDocumentoRegister.append("tipoDocumento",tipoDocumento);

      _this.postModel("apiAdminTipoDocumentoRegister",apiAdminTipoDocumentoRegister).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner
        _this.spinner.hide();

        $(".msg").css("color","green");
        $(".msg").html("Se registro el tipo de documento correctamente.");
        $(".msg").show();

        setTimeout(function(){

          $(".msg").hide();
          _this.modal.close();

          //  Limpiar campos

          $(".tipoDocumento").val("");

          //  Consultar tipos de documentos
          _this.getTiposDocumentos();

        },3000);

      });

    }

  }

  /************************************************************************************* */
  //  Consultar tipos de documentos
  /************************************************************************************* */

  getTiposDocumentos(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar tipos documentos

    let apiAdminTipoDocumentoGet = new FormData();

    _this.postModel("apiAdminTipoDocumentoGet",apiAdminTipoDocumentoGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      _this.tiposDocumentos = result;

      setTimeout(function(){
        $('#tableDT').DataTable();
      });

    });

  }

  /************************************************************************************* */
  //  Eliminar tipo de documento
  /************************************************************************************* */

  deleteTipoDocumento(tipoDocumento){

    //  Variables iniciales

    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar tipos de documentos

    let apiAdminTipoDocumentoDelete = new FormData();

    apiAdminTipoDocumentoDelete.append("tipoDocumento",tipoDocumento);

    _this.postModel("apiAdminTipoDocumentoDelete",apiAdminTipoDocumentoDelete).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      //  Consultar tipos de documentos
      _this.getTiposDocumentos();

    });

  }

}
