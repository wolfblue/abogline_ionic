import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-admin-personalizar',
  templateUrl: './admin-personalizar.page.html',
  styleUrls: ['./admin-personalizar.page.scss'],
})
export class AdminPersonalizarPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  personalizacion: any = [];

  constructor(private http:HttpClient) { 

    //  Obtener personalización
    this.obtenerPersonalizacion();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  OBTENER PERSONALIZACIÓN

  obtenerPersonalizacion(){

    //  Variables iniciales
    var _this = this;

    //  Consultar datos

    let apiAdminObtenerPersonalizar = new FormData();

    _this.postModel("apiAdminObtenerPersonalizar",apiAdminObtenerPersonalizar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.personalizacion = result;

    });

  }

  //  ACTUALIZAR ATRIBUTO

  actualizar(atributo){

    //  Variables iniciales

    var _this = this;
    var valor = $("."+atributo).val();

    //  Actualizar atributo

    let actualizarAtributoPersonalizar = new FormData();

    actualizarAtributoPersonalizar.append("atributo",atributo);
    actualizarAtributoPersonalizar.append("valor",valor);

    _this.postModel("actualizarAtributoPersonalizar",actualizarAtributoPersonalizar).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
      window.location.href = "/admin-personalizar";
    });

  }

}
