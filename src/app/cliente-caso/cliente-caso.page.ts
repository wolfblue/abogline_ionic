import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import { NgxSpinnerService  } from "ngx-spinner";

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

  idCaso:any = "0";

  constructor(

    private http:HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService

  ) { 

  }

  ngOnInit() {

    //  Ocultar campos con clase 'otro'
    $(".otro").hide();

    //  Cargar datos cuando es edición
    this.loadDataCasoEdit();

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
      _this.confirmarRegistro();
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

        //  Activar o desactivar campo cual es tu problema

        if($("#"+field).val() == 1)
          $(".casoField4").hide();
        else
          $(".casoField4").show(); 



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

        //  Actualizar selectpicker

        $('#casoField4').hide();
        $('#casoField4').selectpicker("destroy");

        setTimeout(function(){

          $('#casoField4').selectpicker();
          $('#casoField4').show();

        },1000);

        //  Activar o desactivar campo cual es tu problema

        if($("#"+field).val() == 3 || $("#"+field).val() == 11)
          $(".casoField4").hide();
        else{

          if($("#casoField1").val() != 1)
            $(".casoField4").show(); 

        }

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

    //  Variables iniciales

    var _this = this;
    this.error = 0;
    this.spinner.show();

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    //  Validar campos obligatorios

    if(!$("#casoField1").val() || !$("#casoField2").val() || $("#casoField6").val().length == 0 || !$("#casoField7").val()){

      this.error = 1;
      this.msg = "Faltan campos que son obligatorios por diligenciar";

    }

    //  Registrar caso

    if(this.error == 0){ //  Sin errores

      _this.spinner.hide();
      _this.modalConfirmar('Registrar caso','¿ Esta seguro de continuar con la información diligenciada ?');

    }

    //  Mostrar errores

    if(this.error == 1){

      $(".error").show();
      this.spinner.hide();

    }

  }

  /*********************************************************************************** */

  /**
   * Cargar datos del caso cuando es edición
   */

  loadDataCasoEdit(){

    //  Variables iniciales

    var _this = this;
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    //  Obtener el id del caso
    this.idCaso = caso.id;

    //  Asignar los valores a los campos del formulario

    $("#casoField1").val(caso.field1);
    this.changeField("casoField1");

    setTimeout(function(){

      $("#casoField2").val(caso.field2);
      _this.changeField("casoField2");

      setTimeout(function(){

        $("#casoField3").val(caso.field3);

        //  Aplicar select multiple field4

        if(caso.field4){  //  Tiene valor asignado el field4

          var casoField4Data = caso.field4.split(",");

          for(var i = 0; i<casoField4Data.length; i++){

            casoField4Data[i] = parseInt(casoField4Data[i]);

          }

          $("#casoField4").selectpicker();
          $("#casoField4").selectpicker('val', casoField4Data);
          $("#casoField4").selectpicker('refresh');

          _this.changeField("casoField4");

          setTimeout(function(){

            $("#casoField5").val(caso.field5);

          },800);

        }  

      },800);

    },800);

    $("#casoField6").html(caso.field6);
    $("#casoField7").val(caso.field7);

  }

  /*********************************************************************************** */

  /**
   * Confirmar registro del caso
   */

  confirmarRegistro(){

    this.spinner.show();

    //  Variables iniciales
    var _this = this;

    //  Registrar caso

    let casosUpdate = new FormData();

      casosUpdate.append("id", this.idCaso);
      casosUpdate.append("email", sessionStorage.getItem('email'));
      casosUpdate.append("field1", $("#casoField1").val());
      casosUpdate.append("field2", $("#casoField2").val());
      casosUpdate.append("field3", $("#casoField3").val());
      casosUpdate.append("field4", $("#casoField4").val().toString());
      casosUpdate.append("field5", $("#casoField5").val());
      casosUpdate.append("field6", $("#casoField6").val());
      casosUpdate.append("field7", $("#casoField7").val());

      this.postModel("casosUpdate",casosUpdate).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        this.spinner.hide();

        this.msg = "Se registró el caso correctamente";
        $(".success").show();

        setTimeout(function(){

          $(".success").hide();

          _this.location('home'); 

        },3000);

      });

  }

}
