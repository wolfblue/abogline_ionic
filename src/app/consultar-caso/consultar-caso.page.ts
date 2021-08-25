import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-consultar-caso',
  templateUrl: './consultar-caso.page.html',
  styleUrls: ['./consultar-caso.page.scss'],
})
export class ConsultarCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  usuario = sessionStorage.getItem("usuario");
  perfil = sessionStorage.getItem("perfil");

  casos:any = [];

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) {

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DE LA PÁGINA
  /**************************************************************************** */

  getInfoPage(){

    var _this = this;

    let apiAboglineConsultarCasoGetInfo = new FormData();

    apiAboglineConsultarCasoGetInfo.append("usuario",_this.usuario);
    apiAboglineConsultarCasoGetInfo.append("perfil",_this.perfil);

    _this.postModel("apiAboglineConsultarCasoGetInfo",apiAboglineConsultarCasoGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.casos = result[0].casos;

      //  Datatable
      $('#casos').DataTable();

    });

  }

  /**************************************************************************** */
  //  EDITAR CASO
  /**************************************************************************** */

  editarCaso(id){

    //  Actualizar variable de sesión id del caso
    sessionStorage.setItem("idCaso",id);

    // Redirigir al registro del caso para la edición
    window.location.href = "/register-caso";

  }

  /**************************************************************************** */
  //  APLICAR CASO
  /**************************************************************************** */

  aplicarCaso(idCaso,usuarioAprueba){

    //  Variables iniciales
    var _this = this;

    //  Aplicar caso

    let apiAboglineConsultarCasoAplicarCaso = new FormData();

    apiAboglineConsultarCasoAplicarCaso.append("idCaso",idCaso);
    apiAboglineConsultarCasoAplicarCaso.append("usuarioSolicita",_this.usuario);
    apiAboglineConsultarCasoAplicarCaso.append("usuarioAprueba",usuarioAprueba);
    apiAboglineConsultarCasoAplicarCaso.append("perfil",sessionStorage.getItem("perfil"));

    _this.postModel("apiAboglineConsultarCasoAplicarCaso",apiAboglineConsultarCasoAplicarCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = "/consultar-caso";

    });

  }

} 
