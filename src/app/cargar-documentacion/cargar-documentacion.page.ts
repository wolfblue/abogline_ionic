import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $; 

@Component({
  selector: 'app-cargar-documentacion',
  templateUrl: './cargar-documentacion.page.html',
  styleUrls: ['./cargar-documentacion.page.scss'],
})
export class CargarDocumentacionPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  casos:any = [];
  pagosPendientes: any = [];
  peticiones: any = [];
  tmpFile:any = [];
  extensiones:any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) {

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {

    //  Bloquear días anteriores a la fecha actual
    $( "#fechaAgendar" ).prop("min",new Date().toISOString().split('T')[0]+"T00:00:00");

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
    
    let apiAboglineCargarDocumentacionGetInfo = new FormData();

    apiAboglineCargarDocumentacionGetInfo.append("usuario",sessionStorage.getItem("usuario"));
    apiAboglineCargarDocumentacionGetInfo.append("perfil",sessionStorage.getItem("perfil"));

    _this.postModel("apiAboglineCargarDocumentacionGetInfo",apiAboglineCargarDocumentacionGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.casos = result[0].casos;

      }

      //  Datatable
      $('#peticionesDT').DataTable();

    });

  }

  /**************************************************************************** */
  //  CARGAR PETICIONES
  /**************************************************************************** */

  cargarPeticiones(){

    //  Variables iniciales
    var _this = this;

    //  Consultar peticiones del abogado

    let apiAboglineCargarDocumentacionPeticiones = new FormData();

    apiAboglineCargarDocumentacionPeticiones.append("idCaso",$("#idCaso").val());

    _this.postModel("apiAboglineCargarDocumentacionPeticiones",apiAboglineCargarDocumentacionPeticiones).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.peticiones = result[0].peticiones;

        setTimeout(function(){

          $(".anexo").change(function(event){

            var idAnexo = $(this).prop("id");
            var nameFile = $(this).prop("files")[0].name;
            var nameFileSplit = nameFile.toString().split(".");

            _this.extensiones[idAnexo] = nameFileSplit[1];

            let reader = new FileReader();

            if(event.target.files && event.target.files.length) {

              const [file] = event.target.files;

              reader.readAsDataURL(file);

              reader.onloadend = function () {

                _this.tmpFile[idAnexo] = reader.result;

              }


            }

          });

        },1000);

      }

    });

  }

  /**************************************************************************** */
  //  CARGAR PETICIONES
  /**************************************************************************** */

  enviarRespuesta(id,tipo,peticion){

    //  Variables iniciales

    var _this = this;
    var respuesta = "";
    var extension = "";

    //  Obtener respuesta

    switch(tipo){

      case "Documento":

        respuesta = _this.tmpFile[id];
        extension = _this.extensiones[id];

      break;

      case "Informacion general":

        respuesta = $(".respuesta"+id).val();
        
      break;

    }

    //  Enviar respuesta

    if(respuesta){

      let apiAboglineCargarDocumentacionRespuesta = new FormData();

      apiAboglineCargarDocumentacionRespuesta.append("idDocumento",id);
      apiAboglineCargarDocumentacionRespuesta.append("respuesta",respuesta);
      apiAboglineCargarDocumentacionRespuesta.append("extension",extension);
      apiAboglineCargarDocumentacionRespuesta.append("peticion",peticion);

      _this.postModel("apiAboglineCargarDocumentacionRespuesta",apiAboglineCargarDocumentacionRespuesta).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        window.location.href = "/cargar-documentacion";

      });

    }

  }

}
