import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-buscar-casos',
  templateUrl: './buscar-casos.page.html',
  styleUrls: ['./buscar-casos.page.scss'],
})
export class BuscarCasosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  casos = [];
  categoria = "";
  subcategoria = "";
  cualProblema = "";
  anterior = false;
  siguiente = false;
  points = 1;

  constructor(
    private http:HttpClient
  ) { 

    //  Consultar casos
    this.consultarCasos();

  }

  ngOnInit() {
    $(".buscaTuCaso").css("color","#3B9CB2");
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

  /****************** */
  //  Consultar casos
  /****************** */

  consultarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar casos

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario", "");
    apiConsultarCasos.append("trataCaso",_this.categoria);
    apiConsultarCasos.append("cualProblema",_this.subcategoria);
    apiConsultarCasos.append("id","");

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.casos = result;

      if(result.length > 0){

        $("#trataCaso option").hide();
        $("#subcategoria option").hide();

        $("#trataCaso option[value='']").show();
        $("#subcategoria option[value='']").show();

        for(var i = 0; i < result.length; i++){

          $("#trataCaso option[value=" + result[i].trata_caso + "]").show();
          $("#subcategoria option[value='" + result[i].cual_problema + "']").show();

        }

      }

    });

  }

  /***************************** */
  //  Cambio de campo trata caso
  /***************************** */

  trataCaso(){

    //  Variables iniciales

    var _this = this;
    var trataCaso = $("#trataCaso").val();

    //  Actualizar variable global
    _this.cualProblema = trataCaso

    //  Consultar casos
    _this.consultarCasos();

  }

  /*************** */
  //  Buscar casos
  /*************** */

  buscarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Actualizar variables globales

    _this.categoria = $("#trataCaso").val();
    _this.subcategoria = $("#subcategoria").val();

    //  Consultar casos

    _this.consultarCasos();

  }

}
