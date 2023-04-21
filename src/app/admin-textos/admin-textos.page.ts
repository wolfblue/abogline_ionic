import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

declare var $;


@Component({
  selector: 'app-admin-textos',
  templateUrl: './admin-textos.page.html',
  styleUrls: ['./admin-textos.page.scss'],
})
export class AdminTextosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  textos: any = [];

  constructor(private http:HttpClient) { 

    //  Obtener textos
    this.obtenerTextos();

  }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {

    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);

  }

  //  OBTENER TEXTOS

  obtenerTextos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar datos

    let apiAdminObtenerTextos = new FormData();

    _this.postModel("apiAdminObtenerTextos",apiAdminObtenerTextos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.textos = result;

    });

  }

  //  ACTUALIZAR TEXTOS

  actualizar(atributo){

    //  Variables iniciales

    var _this = this;
    var valor = $("."+atributo).val();

    //  Actualizar atributo

    let actualizarAtributoTextos = new FormData();

    actualizarAtributoTextos.append("atributo",atributo);
    actualizarAtributoTextos.append("valor",valor);

    _this.postModel("actualizarAtributoTextos",actualizarAtributoTextos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
      window.location.href = "/admin-textos";
    });

  }

}
