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
  selector: 'app-admin-titulos-hv',
  templateUrl: './admin-titulos-hv.page.html',
  styleUrls: ['./admin-titulos-hv.page.scss'],
})
export class AdminTitulosHvPage implements OnInit {

  @ViewChild("modalRegister", {static: false}) modalRegister: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  titulos:any = [];

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) { 

    //  Obtener titulos
    this.getTitulos();

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

  addTitulo(){

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

    var titulo = $("#titulo").val();

    //  Spinner
    _this.spinner.show();

    //  Validar campos obligatorios

    if(!titulo){

      error = 1;
      msgError = "El campo titulo es obligatorio.";

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

    //  Registrar titulo

    if(error == 0){

      let apiAdminTituloRegister = new FormData();

      apiAdminTituloRegister.append("titulo",titulo);

      _this.postModel("apiAdminTituloRegister",apiAdminTituloRegister).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner
        _this.spinner.hide();

        $(".msg").css("color","green");
        $(".msg").html("Se registro el titulo correctamente.");
        $(".msg").show();

        setTimeout(function(){

          $(".msg").hide();
          _this.modal.close();

          //  Limpiar campos

          $(".titulo").val("");

          //  Consultar titulos
          _this.getTitulos();

        },3000);

      });

    }

  }

  /************************************************************************************* */
  //  Consultar titulos
  /************************************************************************************* */

  getTitulos(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar titulos

    let apiAdminTituloGet = new FormData();

    _this.postModel("apiAdminTituloGet",apiAdminTituloGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      _this.titulos = result;

      setTimeout(function(){
        $('#tableDT').DataTable();
      });

    });

  }

  /************************************************************************************* */
  //  Eliminar titulo
  /************************************************************************************* */

  deleteTitulo(titulo){

    //  Variables iniciales

    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar titulos

    let apiAdminTituloDelete = new FormData();

    apiAdminTituloDelete.append("titulo",titulo);

    _this.postModel("apiAdminTituloDelete",apiAdminTituloDelete).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      //  Consultar generos
      _this.getTitulos();

    });

  }

}