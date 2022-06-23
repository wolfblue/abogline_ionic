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
  registro:any = "true";
  completaPerfil:any = "false";
  creaCaso:any = "false";
  buscaCaso:any = "false";
  disfrutaExperiencia:any = "false";
  passwordOld:any = "";
  ciudades:any = [];
  generos:any = [];
  tiposDocumentos:any = [];
  tmpFile: any = "";
  tmpOpenFile: any = "";
  fechaNacimiento: any = "";
  perfil = (sessionStorage.getItem("perfil") ? sessionStorage.getItem("perfil") : "");
  direccion: any = "";
  municipio: any = "";
  hojaVida: any = "false";
  validacion: any = "false";
  aprobado: any = "false";
  buscaCliente: any = "false";
  municipios:any = [];
  nacimiento: any = "";
  politicaPrivacidad: any = "";
  acerdaDe: any = "";
  titulos: any = [];
  universidadEgreso: any = "";
  tituloProfesional: any = "";
  presentacion: any = "";
  tarjetaLicencia: any = "";
  experiencia: any = "";
  experienciaTiempo: any = "";
  investigacion: any = "";
  ramas: any = "";
  consulta: any = "";
  titulosUsuario: any = [];
  cargaCedula: any = "";
  cargaReciboServicioPublico: any = "";
  cargaTp: any = "";
  cargaDiploma: any = "";
  cargaEspecializacion: any = "";
  cargaMaestria: any = "";
  tipo_tp: any = "";

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

    setTimeout(function(){

      $(".perfilCargaFoto").click(function() {
        $("input[id='photo']").click();
      });
  
      $(".cargaCedula").click(function() {
        $("input[id='cargaCedula']").click();
      });
  
      $(".cargaReciboServicioPublico").click(function() {
        $("input[id='cargaReciboServicioPublico']").click();
      });
  
      $(".cargaTp").click(function() {
        $("input[id='cargaTp']").click();
      });
  
      $(".cargaDiploma").click(function() {
        $("input[id='cargaDiploma']").click();
      });
  
      $(".cargaEspecializacion").click(function() {
        $("input[id='cargaEspecializacion']").click();
      });
  
      $(".cargaMaestria").click(function() {
        $("input[id='cargaMaestria']").click();
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

    },2000);

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

    //  Obtener títulos asignados

    let apiUsuariosGetTitulos = new FormData();

    apiUsuariosGetTitulos.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetTitulos",apiUsuariosGetTitulos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {_this.titulosUsuario = result;});

    //  Obtener documentos registrados

    let apiUsuariosGetDocumentos = new FormData();

    apiUsuariosGetDocumentos.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetDocumentos",apiUsuariosGetDocumentos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
      
      if(result.length > 0){

        for(var i = 0; i < result.length; i++){

          switch(result[i].tipo){

            case "cargaCedula":
              _this.cargaCedula = true;
            break;

            case "cargaReciboServicioPublico":
              _this.cargaReciboServicioPublico = true;
            break;

            case "cargaTp":
              _this.cargaTp = true;
            break;

            case "cargaDiploma":
              _this.cargaDiploma = true;
            break;

            case "cargaEspecializacion":
              _this.cargaEspecializacion = true;
            break;

            case "cargaMaestria":
              _this.cargaMaestria = true;
            break;

          }

        }

      }
    
    });

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
      //_this.registro = result[0].registro;
      _this.completaPerfil = result[0].completa_perfil;
      //_this.creaCaso = result[0].crea_caso;
      //_this.buscaCaso = result[0].busca_caso;
      //_this.disfrutaExperiencia = result[0].disfruta_experiencia;
      _this.passwordOld = result[0].password;
      _this.perfil = result[0].perfil;
      _this.direccion = result[0].direccion;
      _this.municipio = result[0].municipio;
      _this.hojaVida = result[0].hoja_vida;
      //_this.validacion = result[0].validacion;
      //_this.aprobado = result[0].aprobado;
      //_this.buscaCliente = result[0].busca_cliente;
      _this.nacimiento = result[0].nacimiento;
      _this.universidadEgreso = result[0].universidad_egreso;
      _this.tituloProfesional = result[0].titulo_profesional;
      _this.presentacion = result[0].presentacion;
      _this.tarjetaLicencia = result[0].tarjeta_licencia;
      _this.experiencia = result[0].experiencia;
      _this.experienciaTiempo = result[0].experiencia_tiempo;
      _this.investigacion = result[0].investigacion;
      _this.ramas = result[0].ramas;
      _this.consulta = result[0].consulta;
      _this.tipo_tp = result[0].tipo_tp;

      //  Actualizar foto

      if(result[0].foto)
        $(".perfilCargaFoto").prop("src",`${environment.backend}` + result[0].foto);

      //  Actualizar selects

      setTimeout(function(){

        $("#tipoIdentificacion").val(_this.tipoIdentificacion);
        $("#genero").val(_this.genero);
        $("#ciudad").val(_this.ciudad);
        $("#municipio").val(_this.municipio);
        $("#tipo_tp").val(_this.tipo_tp);
        $("#experiencia").val(_this.experiencia);
        $("#investigacion").val(_this.investigacion);
        $("#ramas").val(_this.ramas);

      },500);

      //  Actualizar checkbox

      if(_this.notificacionEmail == "true")
        $("#flexSwitchCheckDefaultNotificacionEmail").prop("checked",true);

      if(_this.notificacionSMS == "true")
        $("#flexSwitchCheckDefaultNotificacionSMS").prop("checked",true);

      //  Area presentación
      
      setTimeout(function(){
        _this.areaPresentacion();
      },1000);

      //  Validar estado de actividad hoja de vida
      //_this.validateHojaVida();

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
    apiUsuariosUpdateUser.append("perfil",_this.perfil);

    _this.postModel("apiUsuariosUpdateUser",apiUsuariosUpdateUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      $(".msgPerfil").show();
      $(".msgPerfil").html("Se actualizó el perfil correctamente.");
      $(".msgPerfil").css("color","green");

      setTimeout(function(){
        _this.location("/perfil");
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

  selectTitulo(id,idTitulo){

    //  Variables iniciales
    var _this = this;

    //  Definir título
    var tituloData = $(".selectUniversidad"+id).val().split("-");

    //  Asignar título
    
    if($(".selectUniversidad"+id).val())
      $(".titulo"+id).html(tituloData[1]);
    else
      $(".titulo"+id).html("");

    //  Actualizar en db

    let apiUsuariosUpdateFieldTitulo = new FormData();

    apiUsuariosUpdateFieldTitulo.append("id",idTitulo);
    apiUsuariosUpdateFieldTitulo.append("field","titulo");
    apiUsuariosUpdateFieldTitulo.append("value",$("#tituloSelect"+id).val());

    _this.postModel("apiUsuariosUpdateFieldTitulo",apiUsuariosUpdateFieldTitulo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

  }

  /*************************************** */
  //  Cambio de texto area de presentación
  /*************************************** */
  areaPresentacion(){

    //  Variables iniciales
    
    var _this = this;
    var areaPresentacion = $(".areaPresentacion").val();
    var maxPresentacion = areaPresentacion.length;

    $(".maxPresentacion").html(maxPresentacion+"/160");

  }

  /*************************************** */
  //  Cambio de campo hoja de vida
  /*************************************** */
  
  changeFieldHoja(id){

    //  Variables iniciales
    var _this = this;

    //  Actualizar registro

    let apiUsuariosUpdateField = new FormData();

    apiUsuariosUpdateField.append("usuario",sessionStorage.getItem('usuario'));
    apiUsuariosUpdateField.append("field",id);
    apiUsuariosUpdateField.append("value",$("#"+id).val());

    _this.postModel("apiUsuariosUpdateField",apiUsuariosUpdateField).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

  }

  /*************************************** */
  //  Añadir título
  /*************************************** */

  addTitulo(){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Insertar nuevo título

    let apiUsuariosInsertTitulo = new FormData();

    apiUsuariosInsertTitulo.append("usuario",sessionStorage.getItem('usuario'));

    _this.postModel("apiUsuariosInsertTitulo",apiUsuariosInsertTitulo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

    //  Obtener títulos asignados

    let apiUsuariosGetTitulos = new FormData();

    apiUsuariosGetTitulos.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetTitulos",apiUsuariosGetTitulos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
      
      _this.titulosUsuario = result;

      //  Spinner hide
      _this.spinner.hide();
    
    });

  }

  /*************************************** */
  //  Eliminar título
  /*************************************** */

  deleteTitulo(id){

    //  Variables iniciales
    var _this = this;

    //  Spinner
    _this.spinner.show();

    //  Eliminar título

    let apiUsuariosDeleteTitulo = new FormData();

    apiUsuariosDeleteTitulo.append("id",id);

    _this.postModel("apiUsuariosDeleteTitulo",apiUsuariosDeleteTitulo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

    //  Obtener títulos asignados

    let apiUsuariosGetTitulos = new FormData();

    apiUsuariosGetTitulos.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetTitulos",apiUsuariosGetTitulos).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
      
      _this.titulosUsuario = result;

      //  Spinner hide
      _this.spinner.hide();
    
    });

  }

  /*************************************** */
  //  Actualizar título
  /*************************************** */

  updateTitulo(num,item,id){

    //  Variables iniciales
    var _this = this;

    //  Actualizar título
    
    let apiUsuariosUpdateFieldTitulo = new FormData();

    apiUsuariosUpdateFieldTitulo.append("id",id);
    apiUsuariosUpdateFieldTitulo.append("field","descripcion"+num);
    apiUsuariosUpdateFieldTitulo.append("value",$("#tituloDescription"+num+''+item).val());

    _this.postModel("apiUsuariosUpdateFieldTitulo",apiUsuariosUpdateFieldTitulo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

  }

  /*************************************** */
  //  Guardar documento del usuario
  /*************************************** */

  changeFile(event,tipo){

    //  Variables iniciales
    var _this = this;

    console.log("changeFile");
    console.log(event);

    //  Leer documentos

    let reader = new FileReader();

    if(event.target.files && event.target.files.length) {

      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onloadend = function () {

        _this.tmpFile = reader.result;

        let apiUsuariosUpdateDocumento = new FormData();

        apiUsuariosUpdateDocumento.append("usuario",sessionStorage.getItem("usuario"));
        apiUsuariosUpdateDocumento.append("tipo",tipo);
        apiUsuariosUpdateDocumento.append("base64",_this.tmpFile);

        _this.postModel("apiUsuariosUpdateDocumento",apiUsuariosUpdateDocumento).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

      }

    }

  }

  /*************************************** */
  //  Validar estado hoja de vida
  /*************************************** */

  validateHojaVida(){

    //  Variables iniciales
    var _this = this;

    //  Validar estado

    if(
      _this.universidadEgreso &&
      _this.tituloProfesional &&
      _this.presentacion &&
      _this.tarjetaLicencia &&
      _this.experienciaTiempo &&
      _this.consulta &&
      _this.cargaCedula &&
      _this.cargaReciboServicioPublico &&
      _this.cargaTp &&
      _this.cargaDiploma &&
      _this.cargaEspecializacion &&
      _this.cargaMaestria
    ){
      _this.hojaVida = "true";
    }

  }

}
