import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-register-caso',
  templateUrl: './register-caso.page.html',
  styleUrls: ['./register-caso.page.scss'],
})
export class RegisterCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  listas:any = [];

  campo1Show:any = true;
  campo2Show:any = true;
  campo3Show:any = false;
  campo4Show:any = false;
  campo5Show:any = false;
  campo6Show:any = true;
  campo7Show:any = true;

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

    //  Variables iniciales
    var _this = this;

    //  Consultar información inicial

    let apiAboglineRegisterCasoGetInfo = new FormData();

    apiAboglineRegisterCasoGetInfo.append("idCaso",sessionStorage.getItem("idCaso"));

    _this.postModel("apiAboglineRegisterCasoGetInfo",apiAboglineRegisterCasoGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        // Guadar listas
        _this.listas = result[0].listas;

        //  Si es edición cargar valores

        if(result[0].caso.length > 0){

          setTimeout(function(){

            $("#campo1 select").val(result[0].caso[0].campo1);
            _this.changeField("campo1");

            setTimeout(function(){

              $("#campo2 select").val(result[0].caso[0].campo2);
              _this.changeField("campo2");

              setTimeout(function(){

                $("#campo3").val(result[0].caso[0].campo3);
                $("#campo4 select").val(result[0].caso[0].campo4);
                _this.changeField("campo4");

                setTimeout(function(){

                  $("#campo5").val(result[0].caso[0].campo5);
                  $("#campo6 textarea").val(result[0].caso[0].campo6);
                  $("#campo7 select").val(result[0].caso[0].campo7);

                },500);

              },500);

            },500);

          },500);

        }

      }

    });

  }

  /**************************************************************************** */
  //  CHANGE DE UN FIELD
  /**************************************************************************** */

  changeField(id){

    // Variables iniciales
    var _this = this;

    //  Switch id

    switch(id){

      //  Campo 1

      case "campo1":

        var campo1 = $("#campo1 select").val();

        // Vaciar campos
        $("#campo2 select").val("");

        // Ocultar campos

        _this.campo3Show = false;
        _this.campo4Show = false;

        setTimeout(function(){

          //  Switch campo1

          switch(campo1){

            case "1":

              // Mostrar opciones campo2

              $("#campo2 select option[value=3]").show();
              $("#campo2 select option[value=7]").show();
              $("#campo2 select option[value=11]").show();
              $("#campo2 select option[value=12]").show();
              $("#campo2 select option[value=14]").show();

              // Ocultar opciones campo2

              $("#campo2 select option[value=4]").hide();
              $("#campo2 select option[value=5]").hide();
              $("#campo2 select option[value=6]").hide();
              $("#campo2 select option[value=8]").hide();
              $("#campo2 select option[value=9]").hide();
              $("#campo2 select option[value=10]").hide();
              $("#campo2 select option[value=13]").hide();

            break;

            case "2":

              // Mostrar opciones campo2

              $("#campo2 select option[value=4]").show();
              $("#campo2 select option[value=5]").show();
              $("#campo2 select option[value=6]").show();
              $("#campo2 select option[value=8]").show();
              $("#campo2 select option[value=9]").show();
              $("#campo2 select option[value=10]").show();
              $("#campo2 select option[value=13]").show();
              $("#campo2 select option[value=14]").show();

              // Ocultar opciones campo2

              $("#campo2 select option[value=3]").hide();
              $("#campo2 select option[value=7]").hide();
              $("#campo2 select option[value=11]").hide();
              $("#campo2 select option[value=12]").hide();

            break;

          }

        },500);

      break;

      //  Campo 2

      case "campo2":

        var campo2 = $("#campo2 select").val();

        // Vaciar campos
        
        $("#campo3 select").val("");
        $("#campo4 select").val("");

        //  Switch campo2

        switch(campo2){

          case "4":

            // Mostrar campos
            _this.campo4Show = true;

            //  Ocultar campos
            _this.campo5Show = false;

            setTimeout(function(){

              // Mostrar opciones campo4

              $("#campo4 select option[value=20]").show();
              $("#campo4 select option[value=31]").show();
              $("#campo4 select option[value=36]").show();

              //  Ocultar opciones campo4

              $("#campo4 select option[value=15]").hide();
              $("#campo4 select option[value=16]").hide();
              $("#campo4 select option[value=17]").hide();
              $("#campo4 select option[value=18]").hide();
              $("#campo4 select option[value=19]").hide();
              $("#campo4 select option[value=21]").hide();
              $("#campo4 select option[value=22]").hide();
              $("#campo4 select option[value=23]").hide();
              $("#campo4 select option[value=24]").hide();
              $("#campo4 select option[value=25]").hide();
              $("#campo4 select option[value=26]").hide();
              $("#campo4 select option[value=27]").hide();
              $("#campo4 select option[value=28]").hide();
              $("#campo4 select option[value=29]").hide();
              $("#campo4 select option[value=30]").hide();
              $("#campo4 select option[value=32]").hide();
              $("#campo4 select option[value=33]").hide();
              $("#campo4 select option[value=34]").hide();
              $("#campo4 select option[value=35]").hide();

            },500);

          break;

          case "6":

            // Mostrar campos
            _this.campo4Show = true;

            //  Ocultar campos
            _this.campo5Show = false;

            setTimeout(function(){

              // Mostrar opciones campo4

              $("#campo4 select option[value=19]").show();
              $("#campo4 select option[value=23]").show();
              $("#campo4 select option[value=34]").show();
              $("#campo4 select option[value=36]").show();

              //  Ocultar opciones campo4

              $("#campo4 select option[value=15]").hide();
              $("#campo4 select option[value=16]").hide();
              $("#campo4 select option[value=17]").hide();
              $("#campo4 select option[value=18]").hide();
              $("#campo4 select option[value=20]").hide();
              $("#campo4 select option[value=21]").hide();
              $("#campo4 select option[value=22]").hide();
              $("#campo4 select option[value=24]").hide();
              $("#campo4 select option[value=25]").hide();
              $("#campo4 select option[value=26]").hide();
              $("#campo4 select option[value=27]").hide();
              $("#campo4 select option[value=28]").hide();
              $("#campo4 select option[value=29]").hide();
              $("#campo4 select option[value=30]").hide();
              $("#campo4 select option[value=31]").hide();
              $("#campo4 select option[value=32]").hide();
              $("#campo4 select option[value=33]").hide();
              $("#campo4 select option[value=35]").hide();

            },500);

          break;

          case "8":

            // Mostrar campos
            _this.campo4Show = true;

            //  Ocultar campos
            _this.campo5Show = false;

            setTimeout(function(){

              // Mostrar opciones campo4

              $("#campo4 select option[value=16]").show();
              $("#campo4 select option[value=17]").show();
              $("#campo4 select option[value=24]").show();
              $("#campo4 select option[value=25]").show();
              $("#campo4 select option[value=26]").show();
              $("#campo4 select option[value=27]").show();
              $("#campo4 select option[value=28]").show();
              $("#campo4 select option[value=33]").show();
              $("#campo4 select option[value=35]").show();
              $("#campo4 select option[value=36]").show();

              //  Ocultar opciones campo4

              $("#campo4 select option[value=15]").hide();
              $("#campo4 select option[value=18]").hide();
              $("#campo4 select option[value=19]").hide();
              $("#campo4 select option[value=20]").hide();
              $("#campo4 select option[value=21]").hide();
              $("#campo4 select option[value=22]").hide();
              $("#campo4 select option[value=23]").hide();
              $("#campo4 select option[value=29]").hide();
              $("#campo4 select option[value=30]").hide();
              $("#campo4 select option[value=31]").hide();
              $("#campo4 select option[value=32]").hide();
              $("#campo4 select option[value=34]").hide();

            },500);

          break;

          case "9":

            // Mostrar campos
            _this.campo4Show = true;

            //  Ocultar campos
            _this.campo5Show = false;

            setTimeout(function(){

              // Mostrar opciones campo4

              $("#campo4 select option[value=15]").show();
              $("#campo4 select option[value=22]").show();
              $("#campo4 select option[value=30]").show();
              $("#campo4 select option[value=32]").show();
              $("#campo4 select option[value=36]").show();

              //  Ocultar opciones campo4

              $("#campo4 select option[value=16]").hide();
              $("#campo4 select option[value=17]").hide();
              $("#campo4 select option[value=18]").hide();
              $("#campo4 select option[value=19]").hide();
              $("#campo4 select option[value=20]").hide();
              $("#campo4 select option[value=21]").hide();
              $("#campo4 select option[value=23]").hide();
              $("#campo4 select option[value=24]").hide();
              $("#campo4 select option[value=25]").hide();
              $("#campo4 select option[value=26]").hide();
              $("#campo4 select option[value=27]").hide();
              $("#campo4 select option[value=28]").hide();
              $("#campo4 select option[value=29]").hide();
              $("#campo4 select option[value=31]").hide();
              $("#campo4 select option[value=33]").hide();
              $("#campo4 select option[value=34]").hide();
              $("#campo4 select option[value=35]").hide();

            },500);

          break;

          case "10":

            // Mostrar campos
            _this.campo4Show = true;

            //  Ocultar campos
            _this.campo5Show = false;

            setTimeout(function(){

              // Mostrar opciones campo4

              $("#campo4 select option[value=18]").show();
              $("#campo4 select option[value=21]").show();
              $("#campo4 select option[value=29]").show();
              $("#campo4 select option[value=36]").hide();

              //  Ocultar opciones campo4

              $("#campo4 select option[value=15]").hide();
              $("#campo4 select option[value=16]").hide();
              $("#campo4 select option[value=17]").hide();
              $("#campo4 select option[value=19]").hide();
              $("#campo4 select option[value=20]").hide();
              $("#campo4 select option[value=22]").hide();
              $("#campo4 select option[value=23]").hide();
              $("#campo4 select option[value=24]").hide();
              $("#campo4 select option[value=25]").hide();
              $("#campo4 select option[value=26]").hide();
              $("#campo4 select option[value=27]").hide();
              $("#campo4 select option[value=28]").hide();
              $("#campo4 select option[value=30]").hide();
              $("#campo4 select option[value=31]").hide();
              $("#campo4 select option[value=32]").hide();
              $("#campo4 select option[value=33]").hide();
              $("#campo4 select option[value=34]").hide();
              $("#campo4 select option[value=35]").hide();

            },500);

          break;

          case "14":

            // Mostrar campos
            _this.campo3Show = true;

            //  Ocultar campos

            _this.campo4Show = false;
            _this.campo5Show = false;

          break;

          default:

            // Ocultar campos

            _this.campo3Show = false;
            _this.campo4Show = false;
            _this.campo5Show = false;

          break;

        }

      break;

      //  Campo 4

      case "campo4":

        var campo4 = $("#campo4 select").val();

        // Vaciar campos
        $("#campo5").val("");

        //  Switch campo4

        switch(campo4){

          case "36":

            //  Mostrar campos
            _this.campo5Show = true;

          break;

          default:

            // Ocultar campos
            _this.campo5Show = false;

          break;

        }

        

      break;

    }

  }

  /**************************************************************************** */
  //  REGISTRAR CASO
  /**************************************************************************** */

  registrarCaso(){

    // Variables iniciales
    var _this = this;

    // Registrar caso

    let apiAboglineRegisterCaso = new FormData();

    apiAboglineRegisterCaso.append("idCaso",sessionStorage.getItem("idCaso"));
    apiAboglineRegisterCaso.append("usuario",sessionStorage.getItem("usuario"));
    apiAboglineRegisterCaso.append("campo1",$("#campo1 select").val());
    apiAboglineRegisterCaso.append("campo2",$("#campo2 select").val());
    apiAboglineRegisterCaso.append("campo3",$("#campo3 input").val());
    apiAboglineRegisterCaso.append("campo4",$("#campo4 select").val());
    apiAboglineRegisterCaso.append("campo5",$("#campo5 input").val());
    apiAboglineRegisterCaso.append("campo6",$("#campo6 textarea").val());
    apiAboglineRegisterCaso.append("campo7",$("#campo7 select").val());

    _this.postModel("apiAboglineRegisterCaso",apiAboglineRegisterCaso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = "/home";

    });

  }

}
