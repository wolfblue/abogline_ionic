import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-abogado-profile',
  templateUrl: './abogado-profile.page.html',
  styleUrls: ['./abogado-profile.page.scss'],
})
export class AbogadoProfilePage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  
  tmpFile:any = "";
  tmpFilePhoto:any = "";
  tmpFormat:any = "";
  tmpFormatPhoto:any = "";
  pathFile:any = "";
  pathPhoto:any = "";

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService
  ) {

    if(sessionStorage.getItem("email"))
      this.getDataAbogado();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /**
   * Change de los campos
   */

  changeField(field, event){

    var _this = this;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    switch(field){

      case "photo":

        var ext = $("#photo").val().split('.').pop().toLowerCase();

        this.tmpFormatPhoto = ext;

        console.log(ext);
  
        if($.inArray(ext, ['png']) == -1) {
          
          this.msg = "Solo se permiten cargar formatos (.png)";
          $(".error").show();
  
        }else{
  
          let reader = new FileReader();
  
          if(event.target.files && event.target.files.length) {
  
            const [file] = event.target.files;
            reader.readAsDataURL(file);
  
            reader.onloadend = function () {
              
              _this.tmpFilePhoto = reader.result;

              _this.pathPhoto = "";
  
              if(confirm("Desea visualizar la foto de perfil"))
                window.open(URL.createObjectURL(event.target.files[0]));
  
            }
  
          }
  
        }

      break;

      case "cv":

        var ext = $("#cv").val().split('.').pop().toLowerCase();

        this.tmpFormat = ext;

        console.log(ext);
  
        if($.inArray(ext, ['pdf']) == -1) {
          
          this.msg = "Solo se permiten cargar formatos (.pdf)";
          $(".error").show();
  
        }else{
  
          let reader = new FileReader();
  
          if(event.target.files && event.target.files.length) {
  
            const [file] = event.target.files;
            reader.readAsDataURL(file);
  
            reader.onloadend = function () {
              
              _this.tmpFile = reader.result;

              _this.pathFile = "";
  
              if(confirm("Desea visualizar la hoja de vida"))
                window.open(URL.createObjectURL(event.target.files[0]));
  
            }
  
          }
  
        }

      break;

      case "experience":

        if($("#experience").val() == "2")
          $("#years").prop("disabled",false);
        else{
          $("#years").prop("disabled",true);
          $("#years").val("");
        }

      break;

      case "pleasures":

        if($("#pleasures").val().includes("9"))
          $(".pleasures_other").show();
        else{
          $(".pleasures_other").hide();
          $("#pleasures_other").val("");
        }

      break;

    }

    console.log("ingreso");

    //  Actualizar estado
    this.porcentajeEstado();

  }

  /**
   * Registrar
   */

   register(){

    this.spinner.show();

    this.error = 0;

    $(".error").hide();
    $(".success").hide();
    $(".warning").hide();

    //  Validar campos obligatorios

    if(
      !$("#fullname").val() ||
      !$("#gender").val() ||
      !$("#identification").val() ||
      !$("#address").val() ||
      !$("#document1").val() ||
      !$("#license").val() ||
      !$("#experience").val() ||
      !$("#investigate").val() ||
      !$("#pleasures").val() ||
      !$("#price").val()
    ){

      $("input").each(function(){

        if(!$(this).val())
          console.log($(this).prop("id")+": Sin valor");

      });

      $("select").each(function(){

        if(!$(this).val())
          console.log($(this).prop("id")+": Sin valor");

      });

      this.error = 1;
      this.msg = "Faltan campos por diligenciar";

    }

    //  Proceder con el registro

    if(this.error == 0){

      let abogadosUpdate = new FormData();

      abogadosUpdate.append("email", sessionStorage.getItem('email'));
      abogadosUpdate.append("fullname", $("#fullname").val());
      abogadosUpdate.append("gender", $("#gender").val());
      abogadosUpdate.append("identification", $("#identification").val());
      abogadosUpdate.append("address", $("#address").val());
      abogadosUpdate.append("document1", $("#document1").val());
      abogadosUpdate.append("university", $("#university").val());
      abogadosUpdate.append("license", $("#license").val());
      abogadosUpdate.append("experience", $("#experience").val());
      abogadosUpdate.append("years", $("#years").val());
      abogadosUpdate.append("investigate", $("#investigate").val());
      abogadosUpdate.append("pleasures", $("#pleasures").val());
      abogadosUpdate.append("pleasures_other", $("#pleasures_other").val());
      abogadosUpdate.append("price", $("#price").val());
      abogadosUpdate.append("cv", this.tmpFile);
      abogadosUpdate.append("format", this.tmpFormat);
      abogadosUpdate.append("photo", this.tmpFilePhoto);
      abogadosUpdate.append("formatPhoto", this.tmpFormatPhoto);

      this.postModel("abogadosUpdate",abogadosUpdate).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

        this.spinner.hide();

        this.msg = "Se actualizó la información correctamente";
        $(".success").show();

      });

    }

    //  Mostrar errores

    if(this.error == 1){

      this.spinner.hide();
      $(".error").show();

    }

   }

   /**
    * Obtener los datos del abogado
    */

    getDataAbogado(){

      this.spinner.show();

      var _this = this;

      setTimeout(function(){

        $('.progress-bar').css('width', '0%');
        $('.progress-bar').attr('aria-valuenow', 0);
        $('.progress-bar').text('0%');

        //  Ocultar campos

        $(".pleasures_other").hide();
        $("#years").prop("disabled",true);

        let getDataAbogados = new FormData();

        getDataAbogados.append("email", sessionStorage.getItem("email"));
        
        _this.postModel("getDataAbogados",getDataAbogados).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

          //console.log(result);

          if(result.length > 0){

            //  Asignar valores

            $("#fullname").val(result[0].fullname);
            $("#gender").val(result[0].gender);
            $("#identification").val(result[0].identification);
            $("#address").val(result[0].address);
            $("#document1").val(result[0].document1);
            $("#university").val(result[0].university);
            $("#license").val(result[0].license);
            $("#experience").val(result[0].experience);
            $("#years").val(result[0].years);
            $("#investigate").val(result[0].investigate);
            $("#pleasures_other").val(result[0].pleasures_other);
            $("#price").val(result[0].price);
            
            _this.pathFile = `${environment.backend}`+result[0].cv;
            _this.pathPhoto = `${environment.backend}`+result[0].photo;

            //  Desbloquear campos

            if(result[0].experience == "2")
              $("#years").prop("disabled",false);

            if(result[0].pleasures == "9")
              $("#pleasures_other").prop("disabled",false);

            //  Aplicar select multiple

            var pleasuresData = result[0].pleasures.split(",");

            for(var i = 0; i<pleasuresData.length; i++){

              pleasuresData[i] = parseInt(pleasuresData[i]);

            }

            setTimeout(function(){

              $("#pleasures").selectpicker();
              $("#pleasures").selectpicker('val', pleasuresData);
              $("#pleasures").selectpicker('refresh');

            },1000);

            _this.spinner.hide();

            _this.porcentajeEstado();

          }else{

            setTimeout(function(){

              $("#pleasures").selectpicker();

            },1000);

            _this.spinner.hide();

          }

        });

      },500);

    }

    /********************************************************************** */

    /**
     * Porcentaje de registro
     */

    porcentajeEstado(){

      var _this = this;

      //  Porcentaje de registro

      var contInput = 0;
      var contInputEnter = 0;

      $("#formAbogado input").each(function(){

        contInput +=1;

        if($(this).val())
          contInputEnter +=1;

      });

      $("#formAbogado select").each(function(){

        contInput +=1;

        if($(this).val())
          contInputEnter +=1;

      });

      if(_this.pathPhoto)
        contInputEnter +=1;

      //  Cuantos años
      contInputEnter  +=1;

      //  Otra rama
      contInputEnter  +=1;

      var percent = (100/contInput*contInputEnter).toFixed(0);

      $('.progress-bar').css('width', percent+'%');
      $('.progress-bar').attr('aria-valuenow', percent);
      $('.progress-bar').text(percent+'%');

    }

}
