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
  selector: 'app-admin-city',
  templateUrl: './admin-city.page.html',
  styleUrls: ['./admin-city.page.scss'],
})
export class AdminCityPage implements OnInit {

  @ViewChild("modalRegister", {static: false}) modalRegister: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  modal : NgbModalRef;

  ciudades:any = [];

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {

    //  Obtener ciudades
    this.getCiudades();

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

  addCiudad(){

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

    var ciudad = $("#ciudad").val();

    //  Spinner
    _this.spinner.show();

    //  Validar campos obligatorios

    if(!ciudad){

      error = 1;
      msgError = "El campo ciudad es obligatorio.";

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

    //  Registrar ciudad

    if(error == 0){

      let apiAdminCiudadRegister = new FormData();

      apiAdminCiudadRegister.append("ciudad",ciudad);

      _this.postModel("apiAdminCiudadRegister",apiAdminCiudadRegister).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        //  Spinner
        _this.spinner.hide();

        $(".msg").css("color","green");
        $(".msg").html("Se registro la ciudad correctamente.");
        $(".msg").show();

        setTimeout(function(){

          $(".msg").hide();
          _this.modal.close();

          //  Limpiar campos

          $(".ciudad").val("");

          //  Consultar ciudades
          _this.getCiudades();

        },3000);

      });

    }

  }

  /************************************************************************************* */
  //  Consultar ciudades
  /************************************************************************************* */

  getCiudades(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar ciudades

    let apiAdminCiudadGet = new FormData();

    _this.postModel("apiAdminCiudadGet",apiAdminCiudadGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      _this.ciudades = result;

      setTimeout(function(){
        $('#tableDT').DataTable();
      });

    });

  }

  /************************************************************************************* */
  //  Eliminar ciudad
  /************************************************************************************* */

  deleteCiudad(ciudad){

    //  Variables iniciales

    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Consultar ciudades

    let apiAdminCiudadDelete = new FormData();

    apiAdminCiudadDelete.append("ciudad",ciudad);

    _this.postModel("apiAdminCiudadDelete",apiAdminCiudadDelete).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner
      _this.spinner.hide();

      //  Consultar ciudades
      _this.getCiudades();

    });

  }

}
