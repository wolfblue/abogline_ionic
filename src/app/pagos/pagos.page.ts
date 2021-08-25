import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $; 

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  pagos: any = [];

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

    setTimeout(() => {

      //  Botón de pagos

      $("#imagen").click(function(){

        console.log("ingreso");
        _this.pagar();

      });

    },1000);

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

    let apiAboglinePagosGetInfo = new FormData();

    apiAboglinePagosGetInfo.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiAboglinePagosGetInfo",apiAboglinePagosGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.pagos = result[0].pagos;

      //  Datatable
      $('#pagos').DataTable();

    });

  }

  /**************************************************************************** */
  //  PAGAR
  /**************************************************************************** */

  pagar(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal de pagos
    $("#frm_ePaycoCheckoutOpen").submit();

  }

}
