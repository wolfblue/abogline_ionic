import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-abogado-detalle-caso',
  templateUrl: './abogado-detalle-caso.page.html',
  styleUrls: ['./abogado-detalle-caso.page.scss'],
})
export class AbogadoDetalleCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  constructor(

    private http:HttpClient,
    private router: Router

  ) {}

  ngOnInit() {

    //  Obtener detalle del caso
    this.getDataCaso();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    window.location = ruta;

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
      _this.aplicarCaso();
      $(".modalConfirm").modal("toggle");
    });

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

  /***************************************************************************** */

  /**
   * Aplicar al caso
   */

  aplicarCaso(){

    //  Variables iniciales

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    //  Validar si el usuario ya aplicó a un caso

    let getProceso = new FormData();

    getProceso.append("email", sessionStorage.getItem("email"));
    getProceso.append("idCaso", caso.id);
    
    this.postModel("getProceso",getProceso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        this.msg = "Usted ya aplicó al proceso anteriormente";

        $(".warning").show();

        setTimeout(function(){

          $(".warning").hide();

        },3000);

      }else{

        //  Registrar el proceso

        let createProceso = new FormData();

        createProceso.append("email", sessionStorage.getItem("email"));
        createProceso.append("idCaso", caso.id);
        
        this.postModel("createProceso",createProceso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

          this.msg = "Aplicó al caso correctamente";
          
          $(".success").show();

          //  Volver a la busqueda de casos

          setTimeout(function(){

            _this.location("abogado-buscar-caso");
            $(".success").hide();

          },3000);

        }); 

      }

    });

  }

}
