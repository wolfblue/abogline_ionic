import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-cliente-abogado',
  templateUrl: './cliente-abogado.page.html',
  styleUrls: ['./cliente-abogado.page.scss'],
})
export class ClienteAbogadoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  photo:any = "";

  constructor(

    private http:HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit() {

    //  Obtener detalle del caso
    this.getDataAbogado();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){
    window.location = ruta; 
  }

  /************************************************************************* */

  /**
   * Obtener detalle del caso
   */

   getDataAbogado(){

    var abogado = JSON.parse(sessionStorage.getItem('abogado'));

    $("#fullname").html(abogado.fullname);
    $("#document1").html(abogado.document1);
    $("#university").html(abogado.university);
    $("#years").html(abogado.years);
    $("#price").html("$" + parseInt(abogado.price).toLocaleString());
    this.photo = `${environment.backend}`+abogado.photo;

  }

  
  /************************************************************************************* */

  /**
   * Modal confirmar
   */

   modalConfirmar(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirm").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      _this.solicitarConsulta();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************* */

  /**
   * Solicitar consulta
   */

  solicitarConsulta(){

    //  Variables iniciales

    var abogado = JSON.parse(sessionStorage.getItem('abogado'));
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    this.spinner.show();

    //  Realizar solicitud

    let solicitarConsulta = new FormData();

    solicitarConsulta.append("idCaso",caso.id);
    solicitarConsulta.append("emailCliente",sessionStorage.getItem("email"));
    solicitarConsulta.append("emailAbogado",abogado.email);
    solicitarConsulta.append("emailOrigen",sessionStorage.getItem("email"));

    this.postModel("solicitarConsulta",solicitarConsulta).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.location("/");

    });

  }

}
