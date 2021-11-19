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
  selector: 'app-admin-genero',
  templateUrl: './admin-genero.page.html',
  styleUrls: ['./admin-genero.page.scss'],
})
export class AdminGeneroPage implements OnInit {

  @ViewChild("modalRegister", {static: false}) modalRegister: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  generos:any = [];

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Obtener generos
    this.getGeneros();

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

  addGenero(){

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

    var genero = $("#genero").val();

    //  Spinner
    _this.spinner.show();

    //  Validar campos obligatorios

    if(!genero){

      error = 1;
      msgError = "El campo genero es obligatorio.";

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

    //  Registrar genero

    if(error == 0){

      let apiAdminGeneroRegister = new FormData();

      apiAdminGeneroRegister.append("genero",genero);

      _this.postModel("apiAdminGeneroRegister",apiAdminGeneroRegister).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner
        _this.spinner.hide();

        $(".msg").css("color","green");
        $(".msg").html("Se registro el genero correctamente.");
        $(".msg").show();

        setTimeout(function(){

          $(".msg").hide();
          _this.modal.close();

          //  Limpiar campos

          $(".genero").val("");

          //  Consultar generos
          _this.getGeneros();

        },3000);

      });

    }

  }

  /************************************************************************************* */
  //  Consultar generos
  /************************************************************************************* */

  getGeneros(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar generos

    let apiAdminGeneroGet = new FormData();

    _this.postModel("apiAdminGeneroGet",apiAdminGeneroGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      _this.generos = result;

      setTimeout(function(){
        $('#tableDT').DataTable();
      });

    });

  }

  /************************************************************************************* */
  //  Eliminar genero
  /************************************************************************************* */

  deleteGenero(genero){

    //  Variables iniciales

    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar generos

    let apiAdminGeneroDelete = new FormData();

    apiAdminGeneroDelete.append("genero",genero);

    _this.postModel("apiAdminGeneroDelete",apiAdminGeneroDelete).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      //  Consultar generos
      _this.getGeneros();

    });

  }

}
