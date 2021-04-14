import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-cliente-detalle-abogado',
  templateUrl: './cliente-detalle-abogado.page.html',
  styleUrls: ['./cliente-detalle-abogado.page.scss'],
})
export class ClienteDetalleAbogadoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(

    private http:HttpClient,
    private router: Router

  ) { }

  ngOnInit() {

    //  Obtener detalle del abogado
    this.getDataAbogado();

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
   * Obtener detalle del abogado
   */

   getDataAbogado(){

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    let getDataAbogados = new FormData();

    getDataAbogados.append("email", caso.abogado);
    
    _this.postModel("getDataAbogados",getDataAbogados).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      $("#field1").html(result[0].fullname);
      $("#field2").html(result[0].genderDesc);
      $("#field3").html(result[0].identification);
      $("#field4").html(result[0].address);
      $("#field5").html(result[0].document1Desc);
      $("#field6").html(result[0].university);
      $("#field7").html(result[0].license);
      $("#field8").html(result[0].experienceDesc);
      $("#field9").html(result[0].years);
      $("#field10").html(result[0].investigateDesc);

    });

  }

  /************************************************************************* */

  /**
   * Aceptar abogado
   */

   aceptarAbogado(){

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    let procesosUpdate = new FormData();

    procesosUpdate.append("email", caso.abogado);
    procesosUpdate.append("idCaso", caso.id);
    procesosUpdate.append("active", "3");
    
    _this.postModel("procesosUpdate",procesosUpdate).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      this.msg = "Se ha notificado al abogado la continuación del proceso";
          
      $(".success").show();

      //  Volver a la consulta de casos

      setTimeout(function(){

        _this.location("cliente-buscar-caso");
        $(".success").hide();

      },3000);

    });

   }

}
