import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $; 

@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.page.html',
  styleUrls: ['./abogados.page.scss'],
})
export class AbogadosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  abogados: any = [];
  casos: any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) { 

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {
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

    //  Consultar información de la página

    let apiAboglineAbogadosGetInfo = new FormData();

    apiAboglineAbogadosGetInfo.append("usuario",sessionStorage.getItem("usuario"));
    apiAboglineAbogadosGetInfo.append("perfil",sessionStorage.getItem("perfil"));

    _this.postModel("apiAboglineAbogadosGetInfo",apiAboglineAbogadosGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        _this.abogados = result[0].abogados;
        _this.casos = result[0].casos;

      }

      //  Datatable
      $('#abogados').DataTable();

    });

  }

  /**************************************************************************** */
  //  APLICAR AL ABOGADO
  /**************************************************************************** */

  aplicarAbogado(abogado){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";

    //  Validar campos obligatorios

    if(!$("#idCaso").val()){

      error = 1;
      msg = "Es obligatorio seleccionar el caso";

    }

    //  Aplicar abogado

    if(error == 0){

      let apiAboglineAbogadosAplicar = new FormData();

      apiAboglineAbogadosAplicar.append("usuario",sessionStorage.getItem("usuario"));
      apiAboglineAbogadosAplicar.append("idCaso",$("#idCaso").val());
      apiAboglineAbogadosAplicar.append("abogado",abogado);
  
      _this.postModel("apiAboglineAbogadosAplicar",apiAboglineAbogadosAplicar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
  
        window.location.href = "/home";
  
      });

    }

    //  Mostrar errores

    if(error == 1){

      $("#mensaje").html(msg);

    }

    console.log(abogado);

  }

}
