import { Component, ViewChild, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { $$ } from 'protractor';
import { count } from 'console';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild("modalRegistoMain", {static: false}) modalRegistoMain: TemplateRef<any>;
  @ViewChild("modalRegistoForm", {static: false}) modalRegistoForm: TemplateRef<any>;
  @ViewChild("modalAutenticacion", {static: false}) modalAutenticacion: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();
  public email = "";
  public auth: any = 0;
  public mainActive: any = "inicio";
  public profile = sessionStorage.getItem("profile");
  public notificacionesTotal: any = "0";
  
  closeResult = '';
  design = 0;
  modal : NgbModalRef;

  autenticado: any = 0;
  usuario:any = "";
  perfil: any = "";
  usuarioHeader: any = "";
  chat = [];
  chatFlujo = 0;
  rutaBackend = `${environment.backend}`;
  totalNotificaciones = 0;

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {

    var _this = this;

    //  Variables de sesión

    if(sessionStorage.getItem("autenticado")){

      this.autenticado = sessionStorage.getItem("autenticado");
      this.usuario = sessionStorage.getItem("usuario");
      this.perfil = sessionStorage.getItem("perfil");

      //  Consultar información del usuario
      this.getUser();

    }

    //  Consultar cantidad de notificaciones
    this.consultarTotalNotificaciones();

  }

  ngOnInit() {

    //  Variables iniciales
    var _this = this;
    
    //  Validar autenticación
    this.validateAuth();

    //  Validar modal registro
    this.modalRegistro();

    setTimeout(function(){
      $(".ion-page").css("background","#ffffff!important");
      console.log("Estilos");
    }),3000;

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
  //  Validar autenticación
  /************************************************************************************* */

  validateAuth(){

    //  Variables iniciales
    var _this = this;

    if(sessionStorage.getItem("usuario")){  //  Sesión abierta

      //  Ocultar botones

      $(".register").hide();
      $(".login").hide();

      //  Mostrar botones

      $(".logout").show();
      $(".email").show();
      $(".notification").show();

      //  Datos de autenticación

      this.auth = 1;
      this.email = sessionStorage.getItem("email");
      this.profile = sessionStorage.getItem("perfil");
      this.usuario = sessionStorage.getItem("usuario");

    }else{

      //  Ocultar botones

      $(".logout").hide();
      $(".email").hide();
      $(".notification").hide();

      //  Mostrar botones

      $(".register").show();
      $(".login").show();

    }

  }

  /**
   * Cerrar sesión
   */

   logout(){

      //  Limpiar variables de sesión

      sessionStorage.setItem("email","");
      sessionStorage.setItem("usuario","");
      sessionStorage.setItem("perfil","");

      //  Limpiar variables
      this.usuario = "";

    this.auth = 0;
    this.email = "";
    this.validateAuth();
    this.router.navigateByUrl("home");

   }

  /**************************************************************************** */
  //  MODAL
  /**************************************************************************** */

  open(content) {
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });        
  }

  /**************************************************************************** */
  //  REGISTRARSE DESDE EL MENÚ
  /**************************************************************************** */

  registrarseMain(){

    //  Variables iniciales
    var _this = this;

    //  Cerrar modal

    if(_this.modal)
      _this.modal.close();

    // Abrir modal
    _this.open(_this.modalRegistoMain);

    //  Editar estilos

    setTimeout(function(){
      $(".modal-content").css("background","none");
      $(".modal-content").css("border","0px solid");
    },20);

  }

  /**************************************************************************** */
  //  REGISTRO SELECCIÓN DE PERFIL
  /**************************************************************************** */

  registerProfile(profile){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.modal.close();
    _this.open(_this.modalRegistoForm);

    //  Actualizar variables globales
    _this.perfil = profile;

    //  Editar estilos

    setTimeout(function(){
      $(".modal-content").css("background","none");
      $(".modal-content").css("border","0px solid");
    },20);

  }

  /**************************************************************************** */
  //  AUTENTICACIÓN
  /**************************************************************************** */

  autenticacion(){

    //  Variables iniciales
    var _this = this;

    //  Cerrar modal

    if(_this.modal)
      _this.modal.close();

    // Abrir modal
    _this.open(_this.modalAutenticacion);

    //  Editar estilos

    setTimeout(function(){
      $(".modal-content").css("background","none");
      $(".modal-content").css("border","0px solid");
      $(".bodyModalRegistroMain").css("min-height","270px");
    },20);

  }

  /**************************************************************************** */
  //  REGISTRARSE
  /**************************************************************************** */

  registrarse(){

    // Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";
    var fieldError = "";
    var fieldErrorImage = "";

    //  Spinner
    _this.spinner.show();

    // Valores por defecto

    $(".msgError").html("");
    $(".msgError").hide();
    $(".inputUsuario").css("background","url('/assets/images/input_usuario.png')");
    $(".inputUsuario").css("background-size","100% 100%");
    $(".inputEmail").css("background","url('/assets/images/input_email.png')");
    $(".inputEmail").css("background-size","100% 100%");
    $(".inputPassword").css("background","url('/assets/images/input_password.png')");
    $(".inputPassword").css("background-size","100% 100%");
    $(".inputConfirmPassword").css("background","url('/assets/images/input_confirm_password.png')");
    $(".inputConfirmPassword").css("background-size","100% 100%");
   
    // Validar campos obligatorios

    if(error == 0 && !$("#registerUsuario").val()){

      error = 1;
      msg = "El usuario es obligatorio.";
      fieldError = ".inputUsuario";
      fieldErrorImage = "input_usuario_rojo.png";

    }

    if(error == 0 && !$("#registerEmail").val()){

      error = 1;
      msg = "El e-mail es obligatorio.";
      fieldError = ".inputEmail";
      fieldErrorImage = "input_email_rojo.png";

    }

    if(error == 0 && !$("#registerPassword").val()){

      error = 1;
      msg = "La contraseña es obligatoria.";
      fieldError = ".inputPassword";
      fieldErrorImage = "input_password_rojo.png";

    }

    if(error == 0 && !$("#registerConfirmPassword").val()){

      error = 1;
      msg = "El E-mail es obligatorio.";
      fieldError = ".inputConfirmPassword";
      fieldErrorImage = "input_confirm_password_rojo.png";

    }

    //  Validar email válido

    if(error == 0){

      var emailData = $("#registerEmail").val().split("@");

      if(emailData.length < 2){

        error = 1;
        msg = "El e-mail no es válido.";
        fieldError = ".inputEmail";
        fieldErrorImage = "input_email_rojo.png";

      }

    }

    //  Validar que el usuario contenga mínimo 6 caracteres

    if(error == 0 && $(".inputUsuario").val().length < 6){

      error = 1;
      msg = "El usuario debe contener mínimo 6 caracteres.";
      fieldError = ".inputUsuario";
      fieldErrorImage = "input_usuario_rojo.png";

    }

    //  Validar que la contraseña contenga mínimo 6 caracteres

    if(error == 0 && $(".inputPassword").val().length < 6){

      error = 1;
      msg = "La contraseña debe contener mínimo 6 caracteres.";
      fieldError = ".inputPassword";
      fieldErrorImage = "input_confirm_password_rojo.png";

    }

    //  Validar que las contraseñas coincidan

    if(error == 0 && ( $(".inputPassword").val() != $(".inputConfirmPassword").val() ) ){

      error = 1;
      msg = "Las contraseñas no coinciden.";
      fieldError = ".inputConfirmPassword";
      fieldErrorImage = "input_confirm_password_rojo.png";

    }

    // Mostrar errores

    if(error == 1){

      $(".msgError").html(msg);
      $(".msgError").show();
      $(fieldError).css("background","url('/assets/images/"+fieldErrorImage+"')");
      $(fieldError).css("background-size","100% 100%");

      //  Spinner
      _this.spinner.hide();

    }

    //  Validar terminos

    if(error == 0 && $("#checkTerminos").prop("checked") == false){

      error = 1;
      $(".msgError").html("Debe aceptar los términos y condiciones");
      $(".msgError").show();

      //  Spinner
      _this.spinner.hide();

    }

    //  Validar que el usuario no se encuentre registrado

    if(error == 0){

      let apiUsuariosGetUser = new FormData();

      apiUsuariosGetUser.append("usuario",$("#registerUsuario").val());

      _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        if(result.length > 0){

          $(".msgError").html("El usuario ya se encuentra registrado.");
          $(".msgError").show();

          //  Spinner
          _this.spinner.hide();

        }else{

          //  Registrar usuario

          let apiUsuariosInsertUser = new FormData();

          apiUsuariosInsertUser.append("usuario",$("#registerUsuario").val());
          apiUsuariosInsertUser.append("email",$("#registerEmail").val());
          apiUsuariosInsertUser.append("password",$("#registerPassword").val());
          apiUsuariosInsertUser.append("perfil",_this.perfil);

          _this.postModel("apiUsuariosInsertUser",apiUsuariosInsertUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

            //  Spinner
            _this.spinner.hide();

            $(".msgSuccess").html("Se registro el usuario correctamente, por favor confirmar en el correo electronico");
            $(".msgSuccess").show();
            
            setTimeout(function(){

              //sessionStorage.setItem("autenticado","1");
              //sessionStorage.setItem("usuario",$("#registerUsuario").val());
              //sessionStorage.setItem("perfil",_this.perfil);

              //_this.autenticado = 1;
              //_this.usuario = $("#registerUsuario").val();
              //_this.perfil = _this.perfil;
              _this.modal.close();

              $("#registerUsuario").val("");
              $("#registerEmail").val("");
              $("#registerPassword").val("");

              //  Consultar información del usuario
              //_this.getUser();

              //  Actualizar home
              _this.location('/home');

            },3000);

          });

        }

      });

    }

  }

  /**************************************************************************** */
  //  AUTENTICACIÓN
  /**************************************************************************** */

  autenticacionAction(){

    // Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";
    var fieldError = "";
    var fieldErrorImage = "";

    //  Spinner
    _this.spinner.show();

    // Valores por defecto

    $(".msgErrorLogin").html("");
    $(".msgErrorLogin").hide();
    $("#loginUsuario").css("background","url('/assets/images/input_usuario.png')");
    $("#loginUsuario").css("background-size","100% 100%");
    $("#loginPassword").css("background","url('/assets/images/input_password.png')");
    $("#loginPassword").css("background-size","100% 100%");
    $(".iniciarSesionButton").css("margin-top","0%");
   
    // Validar campos obligatorios

    if(error == 0 && !$("#loginUsuario").val()){

      error = 1;
      msg = "El usuario es obligatorio.";
      fieldError = "#loginUsuario";
      fieldErrorImage = "input_usuario_rojo.png";

    }

    if(error == 0 && !$("#loginPassword").val()){

      error = 1;
      msg = "La contraseña es obligatoria.";
      fieldError = "#loginPassword";
      fieldErrorImage = "input_password_rojo.png";

    }   

    // Mostrar errores

    if(error == 1){

      $(".msgErrorLogin").html(msg);
      $(".msgErrorLogin").show();
      $(fieldError).css("background","url('/assets/images/"+fieldErrorImage+"')");
      $(fieldError).css("background-size","100% 100%");
      $(".iniciarSesionButton").css("margin-top","0%");

      //  Spinner
      _this.spinner.hide();

    }

    //  Validar que el usuario se encuentre registrado

    if(error == 0){

      let apiUsuariosGetUser = new FormData();

      apiUsuariosGetUser.append("usuario",$("#loginUsuario").val());

      _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        if(result.length == 0){

          $(".msgErrorLogin").html("El usuario no se encuentra registrado o esta pendiente de confirmación.");
          $(".msgErrorLogin").show();
          $(".iniciarSesionButton").css("margin-top","0%");

          //  Spinner
          _this.spinner.hide();
          
        }else{

          //  Validar contraseña del usuario

          let apiUsuariosGetUserPassword = new FormData();

          apiUsuariosGetUserPassword.append("usuario",$("#loginUsuario").val());
          apiUsuariosGetUserPassword.append("password",$("#loginPassword").val());
          apiUsuariosGetUserPassword.append("recordar",'true');

          _this.postModel("apiUsuariosGetUserPassword",apiUsuariosGetUserPassword).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

            //  Spinner
            _this.spinner.hide();

            if(result.length == 0){

              $(".msgErrorLogin").html("La contraseña no es válida.");
              $(".msgErrorLogin").show();
              $(".iniciarSesionButton").css("margin-top","0%");

            }else{

              if(result[0].perfil == "administrador"){

                $(".msgErrorLogin").html("La contraseña no es válida.");
                $(".msgErrorLogin").show();
                $(".iniciarSesionButton").css("margin-top","0%");

              }else{

                //  Autenticar

                $(".msgSuccessLogin").html("Autenticado correctamente");
                $(".msgSuccessLogin").show();
                $(".iniciarSesionButton").css("margin-top","0%");

                setTimeout(function(){

                  sessionStorage.setItem("autenticado","1");
                  sessionStorage.setItem("usuario",result[0].usuario);
                  sessionStorage.setItem("perfil",result[0].perfil);

                  _this.autenticado = 1;
                  _this.usuario = result[0].usuario;
                  _this.perfil = result[0].perfil;
                  _this.modal.close();

                  //  Consultar información del usuario
                  _this.getUser();

                  _this.location('/home');

                },3000);

              }

            }

          });

        }

      });

    }

  }

  /**************************************************************************** */
  //  OLVIDAR CONTRASEÑA
  /**************************************************************************** */

  olvidarPassword(){

    // Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";
    var fieldError = "";
    var fieldErrorImage = "";

    // Valores por defecto

    $(".msgErrorLogin").html("");
    $(".msgErrorLogin").hide();
    $("#loginUsuario").css("background","url('/assets/images/input_usuario.png')");
    $("#loginUsuario").css("background-size","100% 100%");
   
    // Validar campos obligatorios

    if(error == 0 && !$("#loginUsuario").val()){

      error = 1;
      msg = "El usuario es obligatorio.";
      fieldError = "#loginUsuario";
      fieldErrorImage = "input_usuario_rojo.png";

    }

    // Mostrar errores

    if(error == 1){

      $(".msgErrorLogin").html(msg);
      $(".msgErrorLogin").show();
      $(fieldError).css("background","url('/assets/images/"+fieldErrorImage+"')");
      $(fieldError).css("background-size","100% 100%");

    } 

    //  Enviar correo electronico si no hay errores

    if(error == 0){

      let apiUsuariosGetUser = new FormData();

      apiUsuariosGetUser.append("usuario",$("#loginUsuario").val());

      _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        if(result.length == 0){

          $(".msgErrorLogin").html("El usuario no se encuentra registrado.");
          $(".msgErrorLogin").show();

        }else{

          //  Enviar correo para recordar contraseña

          if(error == 0){

            _this.spinner.show();

            let apiLoginRecordarPassword = new FormData();

            apiLoginRecordarPassword.append("usuario",$("#loginUsuario").val());

            _this.postModel("apiLoginRecordarPassword",apiLoginRecordarPassword).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

              _this.spinner.hide();

              $.alert('Se ha enviado un correo electrónico para restablecer la contraseña.');

              setTimeout(function(){
                _this.modal.close();
              },3000);

            });

          }

        }

      });

    }

  }

  /**************************************************************************** */
  //  CERRAR SESIÓN
  /**************************************************************************** */

  cerrarSesion(){

    // Variables iniciales
    var _this = this;

    //  Cerrar sesión

    sessionStorage.setItem("autenticado","0");
    sessionStorage.setItem("usuario","");
    sessionStorage.setItem("perfil","");

    _this.autenticado = 0;
    _this.usuario = "";
    _this.location("home");
    
  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DEL USUARIO
  /**************************************************************************** */

  getUser(){

    // Variables iniciales
    var _this = this;

    //  Valores predeterminados
    _this.usuarioHeader = _this.usuario;

    //  Consultar información del usuario
    let apiUsuariosGetUser = new FormData();

    apiUsuariosGetUser.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiUsuariosGetUser",apiUsuariosGetUser).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        if(result[0].nombres){

          var nameData = result[0].nombres.split(" ");
          var lastnameData = result[0].apellidos.split(" ");

          _this.usuarioHeader = nameData[0] + " " + lastnameData[0];

        }

      }

    });

  }

  /**************************************************************************** */
  //  CERRAR MODAL
  /**************************************************************************** */

  closeModal(){

    //  Variables iniciales
    var _this = this;

    //  Cerrar modal
    _this.modal.close();

  }

  /***************** */
  //  Modal registro
  /***************** */

  modalRegistro(){

    //  Variables iniciales
    var _this = this;

    //  Abrir modal registro

    if(sessionStorage.getItem("registro")){

      setTimeout(function(){

        _this.registrarseMain();

        $(".botonCliente").click();

        sessionStorage.setItem("registro","");

      },1000);

    }

  }

  //  ABRIR CHAT

  openChat(){

    //  Variables iniciales
    var _this = this;

    //  Validaciones iniciales
    
    $(".chatHeader").hide();
    $(".chatHeader2").show();
    $(".chatContenido").show();
    $(".chatTipo1").hide();
    $(".chatTipo2").hide();

    //  Validar tipo de chat

    if(_this.usuario || sessionStorage.getItem("chatIdentificacion")){

      $(".chatTipo2").show();
      $(".chatContenido").css("padding-left","5%");
      $(".chatContenido").css("padding-right","5%");
      $(".btn-flotante2").css("bottom","60%");
      $(".chatEnviar2").show();

    }

    if(!_this.usuario && !sessionStorage.getItem("chatIdentificacion")){

      $(".chatTipo1").show();
      $(".chatContenido").css("padding-left","13%");
      $(".chatContenido").css("padding-right","13%");
      $(".btn-flotante2").css("bottom","53%");
      $(".chatEnviar2").hide();

    }

    //  Bajar scroll

    var scroll=$('.chatTipo2');
    scroll.animate({scrollTop: scroll.prop("scrollHeight")});

  }

  cerrarChat(){

    //  Variables iniciales
    var _this = this;

    //  Solicitar confirmación

    $.confirm({

      title: 'Finalizar chat!',
      content: 'Esta seguro de finalizar la conversación ?',
      buttons: {

        confirmar: function () {

          $(".chatHeader").show();
          $(".chatHeader2").hide();
          $(".chatContenido").hide();
          $(".chatEnviar2").hide();

          _this.chat = [];
          _this.chatFlujo = 0;

        },
        cancelar: function () {}

      }

    });

  }

  minimizarChat(){
    
    $(".chatHeader").show();
    $(".chatHeader2").hide();
    $(".chatContenido").hide();
    $(".chatEnviar2").hide();

  }

  //  INICIAR CHAT

  iniciarChat(){

    //  Variables iniciales

    var _this = this;
    var error = 0;
    var msg = "";
    var chatTipoIdentificacion = $("#chatTipoIdentificacion").val();
    var chatIdentificacion = $("#chatIdentificacion").val();
    var chatNombres = $("#chatNombres").val();
    var chatApellidos = $("#chatApellidos").val();
    var chatCorreo = $("#chatCorreo").val();
    var chatCuentanos = $("#chatCuentanos").val();
    var chatTerminos = $("#chatTerminos").prop("checked");

    //  Validar terminos

    if(chatTerminos == false){

      error = 1;
      msg = "Debe aceptar los terminos y condiciones para continuar.";

    }

    //  Validar identificación

    if(!chatIdentificacion){

      error = 1;
      msg = "Debe digitar identificación para continuar.";

    }

    //  Validar nombres

    if(!chatNombres){

      error = 1;
      msg = "Debe digitar los nombres para continuar.";

    }

    //  Validar apellidos

    if(!chatApellidos){

      error = 1;
      msg = "Debe digitar los apellidos para continuar.";

    }

    //  Validar correo

    if(chatCorreo.split("@").length == 1){

      error = 1;
      msg = "Debe digitar un correo electrónico válido para continuar.";

    }

    //  Validar comentario

    if(!chatCuentanos){

      error = 1;
      msg = "Debe digitar el comentario para continuar.";

    }

    //  Mostrar errores

    if(error)
      $.alert(msg);

    //  Iniciar chat

    if(!error){

      //  Guardar datos del chat en sesión

      sessionStorage.setItem("chatTipoIdentificacion",chatTipoIdentificacion);
      sessionStorage.setItem("chatIdentificacion",chatIdentificacion);
      sessionStorage.setItem("chatNombres",chatNombres);
      sessionStorage.setItem("chatApellidos",chatApellidos);
      sessionStorage.setItem("chatCorreo",chatCorreo);
      sessionStorage.setItem("chatCuentanos",chatCuentanos);

      $(".chatTipo1").hide();
      $(".chatTipo2").show();

    }

  }

  //  ENVIAR MENSAJE USUARIO

  enviarMensajeUsuario(){

    //  Variables iniciales

    var _this = this;
    var mensajeUsuario = $("#mensajeUsuario").val();
    var mensajeRobot = "";
    var error = 0;

    _this.chat.push(
      {
        'tipo':'usuario',
        'msg':mensajeUsuario,
      }
    );

    //  Validar mensaje

    if(mensajeUsuario){

      if(_this.perfil == "cliente"){

        switch(_this.chatFlujo){

          //  Flujo 0

          case 0:

            switch(mensajeUsuario){
    
              case "1":
      
                mensajeRobot = "¿Qué tipo de problema solucionar?";

                _this.chat.push(
                  {
                    'tipo':'robot',
                    'msg':mensajeRobot,
                  }
                );

                //  Actualizar flujo chat
                _this.chatFlujo = 1;
      
              break;

              case "2":
      
                mensajeRobot = " Selecciona una de las siguientes opciones: <br><br>";
                mensajeRobot += " 1. ¿Para qué funciona? <br>";
                mensajeRobot += " 2. Acerca del funcionamiento de consultar caso.";

                _this.chat.push(
                  {
                    'tipo':'robot',
                    'msg':mensajeRobot,
                  }
                );

                //  Actualizar flujo chat
                _this.chatFlujo = 3;
      
              break;
    
              default:
    
                $.alert('Opción no válida');
                error = 1;
    
              break;
      
            }

          break;

          //  Flujo 1

          case 1:

            if(_this.perfil == "cliente"){

              mensajeRobot = "Te damos las mejores opciones, es muy fácil que las escojas. Revisa nuestro manual y escoge la mejor opción.”";

              _this.chat.push(
                {
                  'tipo':'robot',
                  'msg':mensajeRobot,
                }
              );

              mensajeRobot = " Selecciona una de las siguientes opciones: <br><br>";
              mensajeRobot += " 1. Volver a las primeras opciones <br>";
              mensajeRobot += " 2. Finalizar chat";

              _this.chat.push(
                {
                  'tipo':'robot',
                  'msg':mensajeRobot,
                }
              );

              //  Actualizar flujo chat
              _this.chatFlujo = 2;
    
            }
            
          break;

          //  Flujo 2

          case 2:
          
            switch(mensajeUsuario){
      
              case "1":

                mensajeRobot = "Selecciona la opción que quieres consultar, para esto debe <b>escribir el número</b> correspondiente:<br><br>";
                mensajeRobot += "1. Registrar caso <br>";
                mensajeRobot += "2. Consultar caso <br>";
                mensajeRobot += "3. Consultar abogado <br>";
                mensajeRobot += "4. Consultar cliente <br>";
                mensajeRobot += "5. Agendar <br>";
                mensajeRobot += "6. Pagos <br>";
                mensajeRobot += "7. Perfil";

                _this.chat.push(
                  {
                    'tipo':'robot',
                    'msg':mensajeRobot,
                  }
                );

                //  Actualizar flujo chat
                _this.chatFlujo = 0;

              break;

              case "2":

                mensajeRobot = "Gracias por usar Abogline, estaremos pendientes si necesitas alguna ayuda adicional.";

                _this.chat.push(
                  {
                    'tipo':'robot',
                    'msg':mensajeRobot,
                  }
                );

                if($("#enviarCorreo").prop("checked") == true){

                  mensajeRobot = "Enviamos un correo electrónico con el historial del chat.";

                  _this.chat.push(
                    {
                      'tipo':'robot',
                      'msg':mensajeRobot,
                    }
                  );

                  //  Enviar correo electronico

                  $(".chatLogoContent").html("");
                  var chatHistorial = $(".historialChat").html();

                  let apiHomeEnviarChat = new FormData();

                  apiHomeEnviarChat.append("usuario",sessionStorage.getItem("usuario"));
                  apiHomeEnviarChat.append("chat",chatHistorial);

                  _this.postModel("apiHomeEnviarChat",apiHomeEnviarChat).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {});

                }

                _this.chatFlujo = 0;

                setTimeout(function(){
                  _this.cerrarChat();
                },10000);

              break;

            }

          break;

        }

      }

      //  Limpiar campo mensaje

      $("#mensajeUsuario").val("");

      //  Validar si no tiene errores

      if(!error){

        //  Bajar scroll

        var scroll=$('.chatTipo2');
        scroll.animate({scrollTop: scroll.prop("scrollHeight")});

      }

    }


  } 

  //  CONSULTAR TOTAL NOTIFICACIONES PENDIENTES POR LEER

  consultarTotalNotificaciones(){

    //  Variables inciales
    var _this = this;

    //  Consultar notificaciones

    let apiHomeConsultarNotificaciones = new FormData();

    apiHomeConsultarNotificaciones.append("usuario",_this.usuario);

    _this.postModel("apiHomeConsultarNotificaciones",apiHomeConsultarNotificaciones).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.totalNotificaciones = result.length;

    });

  }

}