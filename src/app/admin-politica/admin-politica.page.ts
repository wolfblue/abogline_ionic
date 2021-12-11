import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-admin-politica',
  templateUrl: './admin-politica.page.html',
  styleUrls: ['./admin-politica.page.scss'],
})
export class AdminPoliticaPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  contenido: any = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Consultar contenido
    this.consultar();

  }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Consultar contenido
  /************************************************************************************* */

  consultar(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contenido

    let apiAdminGetContenido = new FormData();

    apiAdminGetContenido.append("tipo","politica");

    _this.postModel("apiAdminGetContenido",apiAdminGetContenido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.contenido = result[0].contenido;

    });

  }

  /************************************************************************************* */
  //  Actualizar contenido
  /************************************************************************************* */

  actualizar(){

    //  Variables iniciales
    var _this = this;

    //  Actualizar contenido

    let apiAdminUpdate = new FormData();

    apiAdminUpdate.append("tipo","politica");
    apiAdminUpdate.append("contenido",$("#contenido").val());

    _this.postModel("apiAdminUpdate",apiAdminUpdate).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $(".msg").css("color","green");
      $(".msg").html("Se actualizó el contenido correctamente.");
      $(".msg").show();

      setTimeout(function(){

        $(".msg").hide();

      },3000);

    });

  }

}