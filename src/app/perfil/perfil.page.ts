import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { $$ } from 'protractor';

declare var $;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
  fechaNacimiento: any = "";
  perfil: any = "";
  direccion: any = "";
  municipio: any = "";
  hojaVida: any = "";
  validacion: any = "";
  aprobado: any = "";
  buscaCliente: any = "";
  municipios:any = [];
  nacimiento: any = "";
  politicaPrivacidad: any = "";
  acerdaDe: any = "";
  titulos: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private http:HttpClient
  ) {

    //  Validar autentiación

    if(sessionStorage.getItem("autenticado") == "0")
      this.location("home");
    else
      this.getDataPage();

      //  Consultar acerca de
      this.acercaDe();
  
      //  Consultar politica y privacidad
      this.politicaPrivacidadGet();


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

    //  Obtener municipios

    let apiAdminMunicipioGet = new FormData();
    _this.postModel("apiAdminMunicipioGet",apiAdminMunicipioGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.municipios = result;});

    //  Obtener títulos

    let apiAdminTituloGet = new FormData();
    _this.postModel("apiAdminTituloGet",apiAdminTituloGet).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.titulos = result;});

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
      _this.perfil = result[0].perfil;
      _this.direccion = result[0].direccion;
      _this.municipio = result[0].municipio;
      _this.hojaVida = result[0].hoja_vida;
      _this.validacion = result[0].validacion;
      _this.aprobado = result[0].aprobado;
      _this.buscaCliente = result[0].busca_cliente;
      _this.nacimiento = result[0].nacimiento;

      //  Actualizar foto

      if(result[0].foto)
        $(".perfilCargaFoto").prop("src",`${environment.backend}` + result[0].foto);

      //  Actualizar selects

      setTimeout(function(){

        $("#tipoIdentificacion").val(_this.tipoIdentificacion);
        $("#genero").val(_this.genero);
        $("#ciudad").val(_this.ciudad);
        $("#municipio").val(_this.municipio);

      },500);

      //  Actualizar checkbox

      if(_this.notificacionEmail == "true")
        $("#flexSwitchCheckDefaultNotificacionEmail").prop("checked",true);

      if(_this.notificacionSMS == "true")
        $("#flexSwitchCheckDefaultNotificacionSMS").prop("checked",true);

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
    var notificacionEmail = $("#flexSwitchCheckDefaultNotificacionEmail").prop("checked");
    var notificacionSMS = $("#flexSwitchCheckDefaultNotificacionSMS").prop("checked");
    var direccion = $("#direccion").val();
    var municipio = $("#municipio").val();
    var nacimiento = $("#nacimiento").val();

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
    apiUsuariosUpdateUser.append("direccion",direccion);
    apiUsuariosUpdateUser.append("municipio",municipio);
    apiUsuariosUpdateUser.append("nacimiento",nacimiento);

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

    //  Variables iniciales
    var _this = this;

    //  Guardar imagen perfil

    let apiUsuariosUpdatePhoto = new FormData();

    apiUsuariosUpdatePhoto.append("usuario",_this.usuario);
    apiUsuariosUpdatePhoto.append("base64",_this.tmpFile);
    apiUsuariosUpdatePhoto.append("ext",ext);

    _this.postModel("apiUsuariosUpdatePhoto",apiUsuariosUpdatePhoto).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.generos = result;});

  }

  /************************************************************************************* */
  //  Red social compartir
  /************************************************************************************* */

  redSocial(red){

    switch(red){

      case "facebook":

        window.open('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fqa.abogline.com%2F');

      break;

      case "twitter":

        window.open('https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fqa.abogline.com%2F');

      break;

      case "instagram":

        window.open('https://www.instagram.com/');

      break;

      case "linked":

        window.open('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttp%3A%2F%2Fqa.abogline.com%2F');

      break;

      case "whatsapp":

        window.open('https://api.whatsapp.com/send?text=http%3A%2F%2Fqa.abogline.com%2F');

      break;

    }

  }

  /************************************************************************************* */
  //  Menú lateral
  /************************************************************************************* */

  menu(contenido){

    //  Variables iniciales
    var _this = this;

    //  Ocultar contenidos

    $("#perfil").hide();
    $("#hojaVida").hide();
    $("#politica").hide();
    $("#pqrs").hide();
    $("#acerca").hide();
    $(".formRegister2").hide();

    //  Cambiar botones

    $(".btnPerfil").prop("src","/assets/images/perfil.png");
    $(".btnHojaVida").prop("src","/assets/images/hoja_vida.png");
    $(".btnPolitica").prop("src","/assets/images/politica_privacidad.png");
    $(".btnPQRS").prop("src","/assets/images/pqrs.png");
    $(".btnAcerca").prop("src","/assets/images/acerca_de.png");

    switch(contenido){

      case "perfil":
        $("#perfil").show();
        $(".btnPerfil").prop("src","/assets/images/perfil_activo.png");
        $(".formRegister2").show();
      break;

      case "hojaVida":
        $("#hojaVida").show();
        $(".btnHojaVida").prop("src","/assets/images/hoja_vida_activo.png");
        $(".formRegister2").show();
      break;

      case "politica":
        $("#politica").show();
        $(".btnPolitica").prop("src","/assets/images/politica_activo.png");
      break;

      case "pqrs":
        $("#pqrs").show();
        $(".btnPQRS").prop("src","/assets/images/pqrs_activo.png");
      break;

      case "acerca":
        $("#acerca").show();
        $(".btnAcerca").prop("src","/assets/images/acerca_de_activo.png");
      break;

    }

  }

  /************************************************************************************* */
  //  Consultar acerca de
  /************************************************************************************* */

  acercaDe(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contenido

    let apiAdminGetContenido = new FormData();

    apiAdminGetContenido.append("tipo","acerca");

    _this.postModel("apiAdminGetContenido",apiAdminGetContenido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.acercaDe = result[0].contenido;

    });

  }

  /************************************************************************************* */
  //  Consultar acerca de
  /************************************************************************************* */

  politicaPrivacidadGet(){

    //  Variables iniciales
    var _this = this;

    //  Consultar contenido

    let apiAdminGetContenido = new FormData();

    apiAdminGetContenido.append("tipo","politica");

    _this.postModel("apiAdminGetContenido",apiAdminGetContenido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.politicaPrivacidad = result[0].contenido;

    });
  }

  /************************************************************************************* */
  //  Enviar PQRS
  /************************************************************************************* */

  pqrs(){

    //  Variables iniciales
    var _this = this;

    //  Enviar pqrs

    if($("#pqrsTextarea").val()){

      $(".msg").css("color","green");
      $(".msg").html("Se envio el PQRS correctamente, pronto te responderemos.");
      $(".msg").show();

      setTimeout(function(){

        $(".msg").hide();
        $("#pqrsTextarea").val("");

      },3000);

    }

  }

  /************************************************************************************* */
  //  Selección de título
  /************************************************************************************* */

  selectTitulo(id){

    //  Variables iniciales
    var _this = this;

    //  Definir título
    var tituloData = $(".selectUniversidad"+id).val().split("-");

    //  Asignar título
    
    if($(".selectUniversidad"+id).val())
      $(".titulo"+id).html(tituloData[1]);
    else
      $(".titulo"+id).html("");

  }
  

}
