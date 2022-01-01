import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-consultar-abogados',
  templateUrl: './consultar-abogados.page.html',
  styleUrls: ['./consultar-abogados.page.scss'],
})
export class ConsultarAbogadosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  usuario = (sessionStorage.getItem("usuario") ? sessionStorage.getItem("usuario") : "");

  casos = [];

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService
  ) { 

    //  Consultar casos registrados
    this.consultarCasos();

  }

  ngOnInit() {
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

  /********** */
  //  Eligeme
  /********** */

  eligeme(){

    //  Variables iniciales
    var _this = this;

    //  Sin autenticación

    if(!_this.usuario){

      sessionStorage.setItem("registro","true");
      _this.location("home");

    }

  }

  /****************** */
  //  Consultar casos
  /****************** */

  consultarCasos(){

    //  Variables iniciales
    var _this = this;

    //  Spinner show
    _this.spinner.show();

    //  Consultar casos

    let apiConsultarCasos = new FormData();

    apiConsultarCasos.append("usuario",_this.usuario);
    apiConsultarCasos.append("trataCaso","");
    apiConsultarCasos.append("cualProblema","");
    apiConsultarCasos.append("id","");

    _this.postModel("apiConsultarCasos",apiConsultarCasos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      //  Spinner hide
      _this.spinner.hide();

      _this.casos = result;

      if(result.length > 0){

        setTimeout(function(){
          $("#seleccionarCaso").val(result[0].id);
        },1000);

      }

    });

  }

}
