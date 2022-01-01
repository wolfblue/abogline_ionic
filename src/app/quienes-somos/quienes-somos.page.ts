import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.page.html',
  styleUrls: ['./quienes-somos.page.scss'],
})
export class QuienesSomosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  quienesSomos: any = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Obtener quienes somos
    this.getQuienesSomos();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Consultar quienes somos
  /************************************************************************************* */

  getQuienesSomos(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contenido

    let apiAdminGetContenido = new FormData();

    apiAdminGetContenido.append("tipo","quienes-somos");

    _this.postModel("apiAdminGetContenido",apiAdminGetContenido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.quienesSomos = result[0].contenido;

    });

  }

}
