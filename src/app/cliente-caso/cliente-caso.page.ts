import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-cliente-caso',
  templateUrl: './cliente-caso.page.html',
  styleUrls: ['./cliente-caso.page.scss'],
})
export class ClienteCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;

  casoField2Vali1 = 0;
  casoField2Vali2 = 0;
  casoField4Vali1 = 0;
  casoField4Vali2 = 0;

  constructor(

    private http:HttpClient,
    private router: Router

  ) { }

  ngOnInit() {

    //  Ocultar campos con clase 'otro'
    $(".otro").hide();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */

  location(ruta){

    //  Limpiar variables de sesión
    sessionStorage.setItem('caso','0');

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
    $(".modalContinuar").unbind();

    $(".modal-continuar").click(function(){
      _this.casoRegister();
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************************** */

  /**
   * Change en los campos
   */

  changeField(field){

    this.error = 0;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    switch(field){

      /*----------------------------------------------------------------*/

      case "casoField1":

        //  Activar o desactivar campos dependientes

        if($("#"+field).val())
          this.casoField2Vali1 = 1;
        else
          this.casoField2Vali1 = 0;

        //  Activar o desactivar opciones campo 2

        if($("#"+field).val() == 0)
          this.casoField2Vali2 = 0;

        if($("#"+field).val() == 1)
          this.casoField2Vali2 = 1;

        if($("#"+field).val() == 2)
          this.casoField2Vali2 = 2;

      break;

      /*----------------------------------------------------------------*/

      case "casoField2":

        this.casoField4Vali1 = 0;
        this.casoField4Vali2 = 0;


        //  Activar o desactivar el campo 3

        if($("#"+field).val() == 12){

          $(".casoField3").show();
          $("#casoField3").prop("disabled",false);

        }else{

          $(".casoField3").hide();
          $("#casoField3").val("");
          $("#casoField3").prop("disabled",true);

        }

        //  Activar o desactivar campos dependientes

        if($("#"+field).val())
          this.casoField4Vali1 = 1;
        else
          this.casoField4Vali1 = 0;

        //  Activar o desactivar opciones campo 4

        if($("#"+field).val() == 6)
          this.casoField4Vali2 = 1;

        if($("#"+field).val() == 7)
          this.casoField4Vali2 = 2;

        if($("#"+field).val() == 4)
          this.casoField4Vali2 = 3;

        if($("#"+field).val() == 2)
          this.casoField4Vali2 = 4;

        if($("#"+field).val() == 8)
          this.casoField4Vali2 = 5;

      break;

      /*----------------------------------------------------------------*/

      case "casoField4":

        //  Activar o desactivar el campo 5

        if($("#"+field).val() == 22){

          $(".casoField5").show();
          $("#casoField5").prop("disabled",false);

        }else{

          $(".casoField5").hide();
          $("#casoField5").val("");
          $("#casoField5").prop("disabled",true);

        }

        //  Solo permitir dos opciones

        if($("#casoField4 option:selected").length > 2)
          $("#casoField4").val("");

      break;

    }

  }

  /************************************************************************************* */

  /**
   *  Registrar caso
   */

  casoRegister(){

    console.log(1);

    var _this = this;

    this.error = 0;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    //  Calidar campos obligatorios

    if(!$("#casoField1").val() || !$("#casoField2").val() || $("#casoField4").val().length == 0 || $("#casoField6").val().length == 0 || !$("#casoField7").val()){

      this.error = 1;
      this.msg = "Faltan campos que son obligatorios por diligenciar";

    }

    //  Registrar caso

    if(this.error == 0){

      let casosUpdate = new FormData();

      casosUpdate.append("id", "0");
      casosUpdate.append("email", sessionStorage.getItem('email'));
      casosUpdate.append("field1", $("#casoField1").val());
      casosUpdate.append("field2", $("#casoField2").val());
      casosUpdate.append("field3", $("#casoField3").val());
      casosUpdate.append("field4", $("#casoField4").val().toString());
      casosUpdate.append("field5", $("#casoField5").val());
      casosUpdate.append("field6", $("#casoField6").val());
      casosUpdate.append("field7", $("#casoField7").val());

      this.postModel("casosUpdate",casosUpdate).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        this.msg = "Se registró el caso correctamente";
        $(".success").show();

        setTimeout(function(){

          $(".success").hide();

          _this.location('home'); 

        },3000);

      });

    }

    //  Mostrar errores

    if(this.error == 1)
      $(".error").show();

  }

}
