import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-cliente-detalle-caso',
  templateUrl: './cliente-detalle-caso.page.html',
  styleUrls: ['./cliente-detalle-caso.page.scss'],
})
export class ClienteDetalleCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(

    private http:HttpClient,
    private router: Router

  ) { }

  ngOnInit() {

    //  Obtener detalle del caso
    this.getDataCaso();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    this.router.navigateByUrl(ruta); 

  }

  /************************************************************************* */

  /**
   * Obtener detalle del caso
   */

  getDataCaso(){

    var caso = JSON.parse(sessionStorage.getItem('caso'));

    $("#field1").html(caso.field1Desc);
    $("#field2").html(caso.field2Desc + " " + caso.field3);
    $("#field4").html(caso.field4Desc + " " + caso.field5);
    $("#field6").html(caso.field6);
    $("#field7").html(caso.field7Desc);

  }

}
