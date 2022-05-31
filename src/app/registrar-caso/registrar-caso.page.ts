import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-registrar-caso',
  templateUrl: './registrar-caso.page.html',
  styleUrls: ['./registrar-caso.page.scss'],
})
export class RegistrarCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  estadoImg = 0;
  particularImg = 0;
  cualProblema = "amigo";
  editarCaso = (sessionStorage.getItem("editarCaso") ? sessionStorage.getItem("editarCaso") : "");
  subcategoria = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Actualizar página en la sesión
    sessionStorage.setItem("page","registrar-caso");

    //  Editar caso
    if(this.editarCaso)
      this.getEditarCaso();

  }

  ngOnInit() {

    $(".registrarCaso").css("color","#3B9CB2");

    //  Cambio de estado problemas
    this.changeProblemas();

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
  //  Cambio de estado problemas
  /***************************** */

  changeProblemas(){

    //  Variables iniciales
    var _this = this;

    //  El estado

    $(".estado").click(function(){

        if(_this.estadoImg == 0){

          _this.estadoImg = 1;
          _this.particularImg = 0;

          $(".estado").css("background-image","url(\"/assets/images/estado_azul.png\")");
          $(".particular").css("background-image","url(\"/assets/images/particular_gris.png\")");

        }else{

          _this.estadoImg = 0;

          $(".estado").css("background-image","url(\"/assets/images/estado_gris.png\")");

        }

    });

    //  Un particular

    $(".particular").click(function(){

      if(_this.particularImg == 0){

        _this.particularImg = 1;
        _this.estadoImg = 0;

        $(".particular").css("background-image","url(\"/assets/images/particular_azul.png\")");
        $(".estado").css("background-image","url(\"/assets/images/estado_gris.png\")");

      }else{

        _this.particularImg = 0;

        $(".particular").css("background-image","url(\"/assets/images/particular_gris.png\")");

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
    _this.subcategoria = "";

    //  Actualizar icono

    switch(trataCaso){

      case "amigo":

        $(".iconSelect").prop("src","/assets/images/icon_amigo.png");

      break;

      case "impuestos":

        $(".iconSelect").prop("src","/assets/images/icon_impuestos.png");

      break;

      case "jefe":

        $(".iconSelect").prop("src","/assets/images/icon_jefe.png");

      break;

      case "familia":

        $(".iconSelect").prop("src","/assets/images/icon_familia.png");

      break;

      case "negocio":

        $(".iconSelect").prop("src","/assets/images/icon_negocio.png");

      break;

      case "delito":

        $(".iconSelect").prop("src","/assets/images/icon_delito.png");

      break;

      case "vulnerabilidad":

        $(".iconSelect").prop("src","/assets/images/icon_vulnerabilidad.png");

      break;

    }

  }

  /***************** */
  //  Registrar caso
  /***************** */

  registrarCaso(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var cuentanos = $("#cuentanos").val();
    var problemas = (_this.particularImg == 1 ? "particular" : "estado");
    var trataCaso = $("#trataCaso").val();
    var cualProblema = $("#tuProblema").val();
    var proceso = $("#proceso").val();
    var cuentanos = $("#cuentanos").val();
    var ciudadProblema = $("#ciudadProblema").val();

    //  Validar campos obligatorios

    if(_this.estadoImg == 0 && _this.particularImg == 0)
      error = 1;

    if(!cuentanos)
      error = 1;

    //  Validar autenticación

    if(sessionStorage.getItem("usuario")){

      //  Registrar

      if(error == 0){

        let apiRegistrarCaso = new FormData();

        apiRegistrarCaso.append("problemas",problemas);
        apiRegistrarCaso.append("trataCaso",trataCaso);
        apiRegistrarCaso.append("cualProblema",cualProblema);
        apiRegistrarCaso.append("proceso",proceso);
        apiRegistrarCaso.append("cuentanos",cuentanos);
        apiRegistrarCaso.append("usuario",sessionStorage.getItem("usuario"));
        apiRegistrarCaso.append("id",_this.editarCaso);
        apiRegistrarCaso.append("ciudadProblema",ciudadProblema);

        _this.postModel("apiRegistrarCaso",apiRegistrarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
          
          $.alert('Se actualizó el caso correctamente');

          setTimeout(function(){

            _this.location("consultar-abogados");
    
          },3000);

        });

      }else{

        $.alert('Faltan campos por diligenciar');
        
      }

    }else{

      $(".iniciarSesion button").click();

    }

  }

  /************** */
  //  Editar caso
  /************** */

  getEditarCaso(){

    //  Variables iniciales
    var _this = this;

    //  Consultar caso

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario","");
    apiConsultarCasos.append("trataCaso","");
    apiConsultarCasos.append("cualProblema","");
    apiConsultarCasos.append("id",_this.editarCaso);

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result[0].problemas == "particular")
        $(".particular").click();
      else
        $(".estado").click();

      $("#trataCaso").val(result[0].trata_caso);

      _this.trataCaso();

      $("#tuProblema").val(result[0].cual_problema);
      $("#proceso").val(result[0].proceso);
      $("#cuentanos").val(result[0].cuentanos);
      $("#ciudad_problema").val(result[0].ciudad_problema);

    });

  }

  /************************************** */
  //  Cambio de campo cual es tu problema
  /************************************** */

  cualProblemaChange(){

    //  Variables iniciales

    var _this = this;
    var subcategoria = $("#tuProblema").val();

    //  Actualizar variable global
    _this.subcategoria = subcategoria

  }

}