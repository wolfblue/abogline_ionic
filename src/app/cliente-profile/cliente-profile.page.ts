import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-cliente-profile',
  templateUrl: './cliente-profile.page.html',
  styleUrls: ['./cliente-profile.page.scss'],
})
export class ClienteProfilePage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  tmpFile:any = "";
  tmpFormat:any = "";
  pathFile:any = "";

  constructor(
    private http:HttpClient
  ) { 

    //  Obtener los datos del abogado
    this.getDataCliente();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /*********************************************************************************** */

  /**
    * Obtener los datos del abogado
    */

   getDataCliente(){

    var _this = this;

    setTimeout(function(){

      //  Porcentaje de registro

      $('.progress-bar').css('width', '0%');
      $('.progress-bar').attr('aria-valuenow', 0);
      $('.progress-bar').text('0%');

      $("#userCliente").val(sessionStorage.getItem("user"));
      $("#emailCliente").val(sessionStorage.getItem("email"));

      let getDataClientes = new FormData();

      getDataClientes.append("email", sessionStorage.getItem("email"));
      
      _this.postModel("getDataClientes",getDataClientes).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          //  Asignar valores

          $("#nameCliente").val(result[0].name);
          $("#lastnameCliente").val(result[0].lastname);
          $("#idTypeCliente").val(result[0].idType);
          $("#identificationCliente").val(result[0].identification);
          $("#emailCliente").val(result[0].email2);
          $("#phone").val(result[0].phone);

        }

      });

      setTimeout(function(){

        var contInput = 0;
        var contInputEnter = 1;

        $("#formCliente input").each(function(){
          contInput +=1;

          if($(this).val())
            contInputEnter +=1;

        });

        $("#formCliente select").each(function(){
          contInput +=1;

          if($(this).val())
            contInputEnter +=1;

        });

        var percent = (100/contInput*contInputEnter).toFixed(0);

        $('.progress-bar').css('width', percent+'%');
        $('.progress-bar').attr('aria-valuenow', percent);
        $('.progress-bar').text(percent+'%');

      },2000);

    },500);

  }

  /****************************************************************************************** */

  /**
   * Registrar
   */

  register(){

    this.error = 0;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    //  Validar campos obligatorios

    if(
      !$("#nameCliente").val() ||
      !$("#lastnameCliente").val() ||
      !$("#idTypeCliente").val() ||
      !$("#identificationCliente").val() ||
      !$("#emailCliente").val() ||
      !$("#phone").val()
    ){

      this.error = 1;
      this.msg = "Faltan campos por diligenciar";

    }

    //  Proceder con el registro

    if(this.error == 0){

      let clientesUpdate = new FormData();

      clientesUpdate.append("email", sessionStorage.getItem('email'));
      clientesUpdate.append("name", $("#nameCliente").val());
      clientesUpdate.append("lastname", $("#lastnameCliente").val());
      clientesUpdate.append("idType", $("#idTypeCliente").val());
      clientesUpdate.append("identification", $("#identificationCliente").val());
      clientesUpdate.append("email2", $("#emailCliente").val());
      clientesUpdate.append("password", $("#passwordCliente").val());
      clientesUpdate.append("phone", $("#phone").val());

      this.postModel("clientesUpdate",clientesUpdate).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        this.msg = "Se actualizó la información correctamente";
        $(".success").show();

        setTimeout(function(){
          $(".success").hide();
        },3000);

      });

    }

    //  Mostrar errores

    if(this.error == 1)
      $(".error").show();

   }

}
