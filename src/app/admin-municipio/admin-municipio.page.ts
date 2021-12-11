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
  selector: 'app-admin-municipio',
  templateUrl: './admin-municipio.page.html',
  styleUrls: ['./admin-municipio.page.scss'],
})
export class AdminMunicipioPage implements OnInit {

    @ViewChild("modalRegister", {static: false}) modalRegister: TemplateRef<any>;
  
    private unsubscribe$ = new Subject<void>();
  
    modal : NgbModalRef;
  
    municipios:any = [];
  
    constructor(
      private http:HttpClient,
      private router: Router,
      private modalService: NgbModal,
      private spinner: NgxSpinnerService
    ) {
  
      //  Obtener municipios
      this.getMunicipios();
  
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
  
    addMunicipio(){
  
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
  
      var municipio = $("#municipio").val();
  
      //  Spinner
      _this.spinner.show();
  
      //  Validar campos obligatorios
  
      if(!municipio){
  
        error = 1;
        msgError = "El campo municipio es obligatorio.";
  
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
  
      //  Registrar municipio
  
      if(error == 0){
  
        let apiAdminMunicipioRegister = new FormData();
  
        apiAdminMunicipioRegister.append("municipio",municipio);
  
        _this.postModel("apiAdminMunicipioRegister",apiAdminMunicipioRegister).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
          //  Spinner
          _this.spinner.hide();
  
          $(".msg").css("color","green");
          $(".msg").html("Se registro el municipio correctamente.");
          $(".msg").show();
  
          setTimeout(function(){
  
            $(".msg").hide();
            _this.modal.close();
  
            //  Limpiar campos
  
            $(".municipio").val("");
  
            //  Consultar municipios
            _this.getMunicipios();
  
          },3000);
  
        });
  
      }
  
    }
  
    /************************************************************************************* */
    //  Consultar municipios
    /************************************************************************************* */
  
    getMunicipios(){
  
      //  Variables iniciales
      var _this = this;
  
      //  Spinner
      _this.spinner.show();
  
      //  Consultar municipios
  
      let apiAdminMunicipioGet = new FormData();
  
      _this.postModel("apiAdminMunicipioGet",apiAdminMunicipioGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
        //  Spinner
        _this.spinner.hide();
  
        _this.municipios = result;
  
        setTimeout(function(){
          $('#tableDT').DataTable();
        });
  
      });
  
    }
  
    /************************************************************************************* */
    //  Eliminar municipio
    /************************************************************************************* */
  
    deleteMunicipio(municipio){
  
      //  Variables iniciales
  
      var _this = this;
  
      //  Spinner
      _this.spinner.show();
  
      //  Consultar municipios
  
      let apiAdminMunicipioDelete = new FormData();
  
      apiAdminMunicipioDelete.append("municipio",municipio);
  
      _this.postModel("apiAdminMunicipioDelete",apiAdminMunicipioDelete).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
        //  Spinner
        _this.spinner.hide();
  
        //  Consultar municipios
        _this.getMunicipios();
  
      });
  
    }
  
  }
  