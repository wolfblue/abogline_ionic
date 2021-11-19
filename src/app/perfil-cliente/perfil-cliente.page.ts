import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { $$ } from 'protractor';

declare var $;

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  nombres:any = "";
  apellidos:any = "";
  usuario:any = "";
  email:any = "";
  tipoIdentificacion:any = "";
  identificacion:any = "";
  genero:any = "";
  telefonoContacto:any = "";
  ciudad:any = "";
  facebook:any = "";
  twitter:any = "";
  instagram:any = "";
  notificacionEmail:any = "";
  notificacionSMS:any = "";
  activoDesde:any = "";
  registro:any = "";
  completaPerfil:any = "";
  creaCaso:any = "";
  buscaCaso:any = "";
  disfrutaExperiencia:any = "";
  passwordOld:any = "";
  ciudades:any = [];
  generos:any = [];
  tiposDocumentos:any = [];
  tmpFile: any = "";
  tmpOpenFile: any = "";

  constructor(
    private spinner: NgxSpinnerService,
    private http:HttpClient
  ) {

    //  Validar autentiación

    if(sessionStorage.getItem("autenticado") == "0")
      this.location("home");
    else
      this.getDataPage();


  }

  ngOnInit() {

    var _this = this;

    $(".perfilCargaFoto").click(function() {
      $("input[id='photo']").click();
    });

    $("#photo").change(function(event){

      let reader = new FileReader();
              
      if(event.target.files && event.target.files.length) {

        const [file] = event.target.files;
        reader.readAsDataURL(file);

        reader.onloadend = function () {
          
          _this.tmpFile = reader.result;
          _this.tmpOpenFile = URL.createObjectURL(event.target.files[0]);

          $(".perfilCargaFoto").prop("src",_this.tmpOpenFile);

          var ext = $("#photo").val().split('.').pop().toLowerCase();

          //  Actualizar foto perfil
          _this.savePhoto(ext);

        }

      }

    });

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    //  Redireccionar
    window.location.href = ruta;

  }

  /************************************************************************************* */
  //  Obtener información de la página
  /************************************************************************************* */

  getDataPage(){

    //  Variables iniciales
    var _this = this;

    //  Obtener ciudades

    let apiAdminCiudadGet = new FormData();
    _this.postModel("apiAdminCiudadGet",apiAdminCiudadGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.ciudades = result;});

    //  Obtener generos

    let apiAdminGeneroGet = new FormData();
    _this.postModel("apiAdminGeneroGet",apiAdminGeneroGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.generos = result;});

    //  Obtener tipos de documentos

    let apiAdminTipoDocumentoGet = new FormData();
    _this.postModel("apiAdminTipoDocumentoGet",apiAdminTipoDocumentoGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.tiposDocumentos = result;});

    //  Obtener información del usuario

    _this.spinner.show();

    let apiUsuariosGetUser = new FormData();

    apiUsuariosGetUser.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      //  Actualizar informacion

      _this.nombres = result[0].nombres;
      _this.apellidos = result[0].apellidos;
      _this.usuario = result[0].usuario;
      _this.email = result[0].email;
      _this.tipoIdentificacion = result[0].tipo_identificacion;
      _this.identificacion = result[0].identificacion;
      _this.genero = result[0].genero;
      _this.telefonoContacto = result[0].telefono_contacto;
      _this.ciudad = result[0].ciudad;
      _this.facebook = result[0].facebook;
      _this.twitter = result[0].twitter;
      _this.instagram = result[0].instagram;
      _this.notificacionEmail = result[0].notificacion_email;
      _this.notificacionSMS = result[0].notificacion_sms;
      _this.activoDesde = result[0].activo_desde;
      _this.registro = result[0].registro;
      _this.completaPerfil = result[0].completa_perfil;
      _this.creaCaso = result[0].crea_caso;
      _this.buscaCaso = result[0].busca_caso;
      _this.disfrutaExperiencia = result[0].disfruta_experiencia;
      _this.passwordOld = result[0].password;

      //  Actualizar foto

      if(result[0].foto)
        $(".perfilCargaFoto").prop("src",`${environment.backend}` + result[0].foto);

      //  Actualizar selects

      $("#tipoIdentificacion").val(_this.tipoIdentificacion);
      $("#genero").val(_this.genero);
      $("#ciudad").val(_this.ciudad);

      //  Actualizar checkbox

      if(_this.notificacionEmail = "on")
        $("#notificacionEmail").prop("checked",true);

      if(_this.notificacionSMS = "on")
        $("#notificacionSMS").prop("checked",true);

    });

  }

  /************************************************************************************* */
  //  Actualizar
  /************************************************************************************* */

  actualizar(){

    //  Variables iniciales
    
    var _this = this;
    var nombres = $("#nombres").val();
    var apellidos = $("#apellidos").val();
    var usuario = $("#usuario").val();
    var email = $("#email").val();
    var tipoIdentificacion = $("#tipoIdentificacion").val();
    var identificacion = $("#identificacion").val();
    var genero = $("#genero").val();
    var telefonoContacto = $("#telefonoContacto").val();
    var ciudad = $("#ciudad").val();
    var facebook = $("#facebook").val();
    var twitter = $("#twitter").val();
    var instagram = $("#instagram").val();
    var notificacionEmail = $("#notificacionEmail").val();
    var notificacionSMS = $("#notificacionSMS").val();

    //  Validar correo electronico

    var emailData = email.split("@");

    if(emailData.length == 1)
      email = "";

    //  Actualizar información

    _this.spinner.show();

    let apiUsuariosUpdateUser = new FormData();

    apiUsuariosUpdateUser.append("nombres",nombres);
    apiUsuariosUpdateUser.append("apellidos",apellidos);
    apiUsuariosUpdateUser.append("usuario",usuario);
    apiUsuariosUpdateUser.append("email",email);
    apiUsuariosUpdateUser.append("tipoIdentificacion",tipoIdentificacion);
    apiUsuariosUpdateUser.append("identificacion",identificacion);
    apiUsuariosUpdateUser.append("genero",genero);
    apiUsuariosUpdateUser.append("telefonoContacto",telefonoContacto);
    apiUsuariosUpdateUser.append("ciudad",ciudad);
    apiUsuariosUpdateUser.append("facebook",facebook);
    apiUsuariosUpdateUser.append("twitter",twitter);
    apiUsuariosUpdateUser.append("instagram",instagram);
    apiUsuariosUpdateUser.append("notificacionEmail",notificacionEmail);
    apiUsuariosUpdateUser.append("notificacionSMS",notificacionSMS);

    _this.postModel("apiUsuariosUpdateUser",apiUsuariosUpdateUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $(".msgPerfil").show();
      $(".msgPerfil").html("Se actualizó el perfil correctamente.");
      $(".msgPerfil").css("color","green");

      setTimeout(function(){
        $(".msgPerfil").hide();
      },3000);

    });
    

  }

  /************************************************************************************* */
  //  Cambiar password
  /************************************************************************************* */

  cambiarPassword(){

    //  Variables iniciales
    
    var _this = this;
    var passwordOld = $("#passwordOld").val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();
    var error = 0;
    var msgError = "";

    //  Restablecer estilos

    $("#passwordOld").css("color","black");
    $("#password").css("color","black");
    $("#passwordConfirm").css("color","black");

    //  Validar contraseña anterior

    if(error == 0 && passwordOld != _this.passwordOld){
      
      error = 1;
      msgError = "La contraseña anterior no es correcta.";

      $("#passwordOld").css("color","red");

    }

    //  Validar confirmación de contraseña

    if(error == 0 && password != passwordConfirm){
      
      error = 1;
      msgError = "Las contraseña de confirmación no coincide.";

      $("#password").css("color","red");
      $("#passwordConfirm").css("color","red");

    }

    //  Validar que la contraseña nueva contenga mínimo 6 caracteres

    if(error == 0 && password.length < 6){

      error = 1;
      msgError = "La nueva contraseña debe contener mínimo 6 caracteres.";
      
      $("#password").css("color","red");

    }

    //  Mostrar errores

    if(error == 1){

      $(".msgPassword").show();
      $(".msgPassword").html(msgError);
      $(".msgPassword").css("color","red");

      setTimeout(function(){
        $(".msgPassword").hide();
      },3000);

    }

    //  Actualizar contraseña

    if(error == 0){

      _this.spinner.show();

      let apiUsuariosUpdateUserPassword = new FormData();

      apiUsuariosUpdateUserPassword.append("usuario",$("#usuario").val());
      apiUsuariosUpdateUserPassword.append("password",password);

      _this.postModel("apiUsuariosUpdateUserPassword",apiUsuariosUpdateUserPassword).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        _this.spinner.hide();

        $("#passwordOld").val("");
        $("#password").val("");
        $("#passwordConfirm").val("");
        
        $(".msgPassword").show();
        $(".msgPassword").html("Se actualizó la contraseña correctamente.");
        $(".msgPassword").css("color","green");

        setTimeout(function(){
          $(".msgPassword").hide();
        },3000);

      });

    }

  }

  /************************************************************************************* */
  //  Actualizar foto perfil
  /************************************************************************************* */

  savePhoto(ext){

    console.log(1);

    //  Variables iniciales
    var _this = this;

    //  Guardar imagen perfil

    let apiUsuariosUpdatePhoto = new FormData();

    apiUsuariosUpdatePhoto.append("usuario",_this.usuario);
    apiUsuariosUpdatePhoto.append("base64",_this.tmpFile);
    apiUsuariosUpdatePhoto.append("ext",ext);

    _this.postModel("apiUsuariosUpdatePhoto",apiUsuariosUpdatePhoto).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.generos = result;});

  }

}
