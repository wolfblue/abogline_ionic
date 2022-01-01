import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-mis-casos',
  templateUrl: './mis-casos.page.html',
  styleUrls: ['./mis-casos.page.scss'],
})
export class MisCasosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  usuario = sessionStorage.getItem("usuario");
  cualProblema = "";
  casos = [];
  categoria = "";
  subcategoria = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Consultar mis casos
    this.consultarCasos();

  }

  ngOnInit() {

    $(".misCasos").css("color","#3B9CB2");

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

  /****************** */
  //  Consultar casos
  /****************** */

  consultarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar casos

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario",_this.usuario);
    apiConsultarCasos.append("trataCaso",_this.categoria);
    apiConsultarCasos.append("cualProblema",_this.subcategoria);
    apiConsultarCasos.append("id","");

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.casos = result;

      if(result.length > 0){

        $("#trataCaso option").hide();
        $("#subcategoria option").hide();

        for(var i = 0; i < result.length; i++){

          $("#trataCaso option[value=" + result[i].trata_caso + "]").show();
          $("#subcategoria option[value='" + result[i].cual_problema + "']").show();

        }

      }

    });

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

  /**************** */
  //  Eliminar caso
  /**************** */

  eliminarCaso(id){

    //  Variables iniciales
    var _this = this;

    //  Eliminar caso

    $.confirm({
      title: 'Eliminar caso!',
      content: 'Esta seguro de eliminar el caso ?',
      buttons: {
          confirmar: function () {

            let apiEliminarCaso = new FormData();

            apiEliminarCaso.append("id",id);

            _this.postModel("apiEliminarCaso",apiEliminarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

            $.alert('Se eliminó el caso correctamente');
            _this.consultarCasos();

          },
          cancelar: function () {}
      }
    });

  }

  /************** */
  //  Editar caso
  /************** */

  editarCaso(id){

    //  Variables iniciales
    var _this = this;

    //  Actualizar variables de sesión
    sessionStorage.setItem("editarCaso",id);

    //  Redireccionar
    _this.location("registrar-caso");

  }

}
