import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-consultar-documentacion',
  templateUrl: './consultar-documentacion.page.html',
  styleUrls: ['./consultar-documentacion.page.scss'],
})
export class ConsultarDocumentacionPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  casos: any = [];
  documentos: any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) { 

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {

    // Variables iniciales
    var _this = this;

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DE LA PÁGINA
  /**************************************************************************** */

  getInfoPage(){

    //  Variables iniciales
    var _this = this;

    //  Consultar información inicial
    
    let apiAboglineConsultarDocumentacionGetInfo = new FormData();

    apiAboglineConsultarDocumentacionGetInfo.append("usuario",sessionStorage.getItem("usuario"));
    apiAboglineConsultarDocumentacionGetInfo.append("perfil",sessionStorage.getItem("perfil"));

    _this.postModel("apiAboglineConsultarDocumentacionGetInfo",apiAboglineConsultarDocumentacionGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.casos = result[0].casos;

        //  Datatable
       $('#documentacion').DataTable();

      }

    });

  }

  /**************************************************************************** */
  //  CONSULTAR DOCUMENTACIÓN
  /**************************************************************************** */

  consultar(){

    var _this = this;
    var error = 0;
    var msg = "";

    //  Validar campos obligatorios

    if(!$("#idCaso").val()){

      error = 1;
      msg = "Es obligatorio seleccionar el caso";

    }

    //  Mostrar errores

    if(error == 1){

      $("#mensaje").html(msg);

    }

    //  Consultar información inicial

    if(error == 0){

      let apiAboglineConsultarDocumentacionGetDocumentos = new FormData();

      apiAboglineConsultarDocumentacionGetDocumentos.append("idCaso",$("#idCaso").val());

      _this.postModel("apiAboglineConsultarDocumentacionGetDocumentos",apiAboglineConsultarDocumentacionGetDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          _this.documentos = result[0].documentos;

          //  Datatable
          $('#documentacion').DataTable();

        }

      });

    }

  }

}
