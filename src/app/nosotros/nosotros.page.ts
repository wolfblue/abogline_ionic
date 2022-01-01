import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  nosotros: any = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Obtener nosotros
    this.getNosotros();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Consultar nosotros
  /************************************************************************************* */

  getNosotros(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contenido

    let apiAdminGetContenido = new FormData();

    apiAdminGetContenido.append("tipo","nosotros");

    _this.postModel("apiAdminGetContenido",apiAdminGetContenido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.nosotros = result[0].contenido;

    });

  }

}
