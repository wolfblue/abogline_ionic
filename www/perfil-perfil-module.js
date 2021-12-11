(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "W8eC":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "uuZe");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "oKkR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let PerfilPage = class PerfilPage {
    constructor(spinner, http) {
        //  Validar autentiación
        this.spinner = spinner;
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.nombres = "";
        this.apellidos = "";
        this.usuario = "";
        this.email = "";
        this.tipoIdentificacion = "";
        this.identificacion = "";
        this.genero = "";
        this.telefonoContacto = "";
        this.ciudad = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
        this.notificacionEmail = "";
        this.notificacionSMS = "";
        this.activoDesde = "";
        this.registro = "";
        this.completaPerfil = "";
        this.creaCaso = "";
        this.buscaCaso = "";
        this.disfrutaExperiencia = "";
        this.passwordOld = "";
        this.ciudades = [];
        this.generos = [];
        this.tiposDocumentos = [];
        this.tmpFile = "";
        this.tmpOpenFile = "";
        this.fechaNacimiento = "";
        this.perfil = "";
        this.direccion = "";
        this.municipio = "";
        this.hojaVida = "";
        this.validacion = "";
        this.aprobado = "";
        this.buscaCliente = "";
        this.municipios = [];
        this.nacimiento = "";
        this.politicaPrivacidad = "";
        this.acerdaDe = "";
        this.titulos = [];
        if (sessionStorage.getItem("autenticado") == "0")
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
        $(".perfilCargaFoto").click(function () {
            $("input[id='photo']").click();
        });
        $("#photo").change(function (event) {
            let reader = new FileReader();
            if (event.target.files && event.target.files.length) {
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    _this.tmpFile = reader.result;
                    _this.tmpOpenFile = URL.createObjectURL(event.target.files[0]);
                    $(".perfilCargaFoto").prop("src", _this.tmpOpenFile);
                    var ext = $("#photo").val().split('.').pop().toLowerCase();
                    //  Actualizar foto perfil
                    _this.savePhoto(ext);
                };
            }
        });
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /************************************************************************************* */
    //  Redireccionar
    /************************************************************************************* */
    location(ruta) {
        //  Redireccionar
        window.location.href = ruta;
    }
    /************************************************************************************* */
    //  Obtener información de la página
    /************************************************************************************* */
    getDataPage() {
        //  Variables iniciales
        var _this = this;
        //  Obtener ciudades
        let apiAdminCiudadGet = new FormData();
        _this.postModel("apiAdminCiudadGet", apiAdminCiudadGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.ciudades = result; });
        //  Obtener generos
        let apiAdminGeneroGet = new FormData();
        _this.postModel("apiAdminGeneroGet", apiAdminGeneroGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.generos = result; });
        //  Obtener tipos de documentos
        let apiAdminTipoDocumentoGet = new FormData();
        _this.postModel("apiAdminTipoDocumentoGet", apiAdminTipoDocumentoGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.tiposDocumentos = result; });
        //  Obtener municipios
        let apiAdminMunicipioGet = new FormData();
        _this.postModel("apiAdminMunicipioGet", apiAdminMunicipioGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.municipios = result; });
        //  Obtener títulos
        let apiAdminTituloGet = new FormData();
        _this.postModel("apiAdminTituloGet", apiAdminTituloGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.titulos = result; });
        //  Obtener información del usuario
        _this.spinner.show();
        let apiUsuariosGetUser = new FormData();
        apiUsuariosGetUser.append("usuario", sessionStorage.getItem("usuario"));
        _this.postModel("apiUsuariosGetUser", apiUsuariosGetUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
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
            if (result[0].foto)
                $(".perfilCargaFoto").prop("src", `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend}` + result[0].foto);
            //  Actualizar selects
            setTimeout(function () {
                $("#tipoIdentificacion").val(_this.tipoIdentificacion);
                $("#genero").val(_this.genero);
                $("#ciudad").val(_this.ciudad);
                $("#municipio").val(_this.municipio);
            }, 500);
            //  Actualizar checkbox
            if (_this.notificacionEmail == "true")
                $("#flexSwitchCheckDefaultNotificacionEmail").prop("checked", true);
            if (_this.notificacionSMS == "true")
                $("#flexSwitchCheckDefaultNotificacionSMS").prop("checked", true);
        });
    }
    /************************************************************************************* */
    //  Actualizar
    /************************************************************************************* */
    actualizar() {
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
        if (emailData.length == 1)
            email = "";
        //  Actualizar información
        _this.spinner.show();
        let apiUsuariosUpdateUser = new FormData();
        apiUsuariosUpdateUser.append("nombres", nombres);
        apiUsuariosUpdateUser.append("apellidos", apellidos);
        apiUsuariosUpdateUser.append("usuario", usuario);
        apiUsuariosUpdateUser.append("email", email);
        apiUsuariosUpdateUser.append("tipoIdentificacion", tipoIdentificacion);
        apiUsuariosUpdateUser.append("identificacion", identificacion);
        apiUsuariosUpdateUser.append("genero", genero);
        apiUsuariosUpdateUser.append("telefonoContacto", telefonoContacto);
        apiUsuariosUpdateUser.append("ciudad", ciudad);
        apiUsuariosUpdateUser.append("facebook", facebook);
        apiUsuariosUpdateUser.append("twitter", twitter);
        apiUsuariosUpdateUser.append("instagram", instagram);
        apiUsuariosUpdateUser.append("notificacionEmail", notificacionEmail);
        apiUsuariosUpdateUser.append("notificacionSMS", notificacionSMS);
        apiUsuariosUpdateUser.append("direccion", direccion);
        apiUsuariosUpdateUser.append("municipio", municipio);
        apiUsuariosUpdateUser.append("nacimiento", nacimiento);
        _this.postModel("apiUsuariosUpdateUser", apiUsuariosUpdateUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            _this.spinner.hide();
            $(".msgPerfil").show();
            $(".msgPerfil").html("Se actualizó el perfil correctamente.");
            $(".msgPerfil").css("color", "green");
            setTimeout(function () {
                $(".msgPerfil").hide();
            }, 3000);
        });
    }
    /************************************************************************************* */
    //  Cambiar password
    /************************************************************************************* */
    cambiarPassword() {
        //  Variables iniciales
        var _this = this;
        var passwordOld = $("#passwordOld").val();
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();
        var error = 0;
        var msgError = "";
        //  Restablecer estilos
        $("#passwordOld").css("color", "black");
        $("#password").css("color", "black");
        $("#passwordConfirm").css("color", "black");
        //  Validar contraseña anterior
        if (error == 0 && passwordOld != _this.passwordOld) {
            error = 1;
            msgError = "La contraseña anterior no es correcta.";
            $("#passwordOld").css("color", "red");
        }
        //  Validar confirmación de contraseña
        if (error == 0 && password != passwordConfirm) {
            error = 1;
            msgError = "Las contraseña de confirmación no coincide.";
            $("#password").css("color", "red");
            $("#passwordConfirm").css("color", "red");
        }
        //  Validar que la contraseña nueva contenga mínimo 6 caracteres
        if (error == 0 && password.length < 6) {
            error = 1;
            msgError = "La nueva contraseña debe contener mínimo 6 caracteres.";
            $("#password").css("color", "red");
        }
        //  Mostrar errores
        if (error == 1) {
            $(".msgPassword").show();
            $(".msgPassword").html(msgError);
            $(".msgPassword").css("color", "red");
            setTimeout(function () {
                $(".msgPassword").hide();
            }, 3000);
        }
        //  Actualizar contraseña
        if (error == 0) {
            _this.spinner.show();
            let apiUsuariosUpdateUserPassword = new FormData();
            apiUsuariosUpdateUserPassword.append("usuario", $("#usuario").val());
            apiUsuariosUpdateUserPassword.append("password", password);
            _this.postModel("apiUsuariosUpdateUserPassword", apiUsuariosUpdateUserPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                _this.spinner.hide();
                $("#passwordOld").val("");
                $("#password").val("");
                $("#passwordConfirm").val("");
                $(".msgPassword").show();
                $(".msgPassword").html("Se actualizó la contraseña correctamente.");
                $(".msgPassword").css("color", "green");
                setTimeout(function () {
                    $(".msgPassword").hide();
                }, 3000);
            });
        }
    }
    /************************************************************************************* */
    //  Actualizar foto perfil
    /************************************************************************************* */
    savePhoto(ext) {
        //  Variables iniciales
        var _this = this;
        //  Guardar imagen perfil
        let apiUsuariosUpdatePhoto = new FormData();
        apiUsuariosUpdatePhoto.append("usuario", _this.usuario);
        apiUsuariosUpdatePhoto.append("base64", _this.tmpFile);
        apiUsuariosUpdatePhoto.append("ext", ext);
        _this.postModel("apiUsuariosUpdatePhoto", apiUsuariosUpdatePhoto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => { _this.generos = result; });
    }
    /************************************************************************************* */
    //  Red social compartir
    /************************************************************************************* */
    redSocial(red) {
        switch (red) {
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
    menu(contenido) {
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
        $(".btnPerfil").prop("src", "/assets/images/perfil.png");
        $(".btnHojaVida").prop("src", "/assets/images/hoja_vida.png");
        $(".btnPolitica").prop("src", "/assets/images/politica_privacidad.png");
        $(".btnPQRS").prop("src", "/assets/images/pqrs.png");
        $(".btnAcerca").prop("src", "/assets/images/acerca_de.png");
        switch (contenido) {
            case "perfil":
                $("#perfil").show();
                $(".btnPerfil").prop("src", "/assets/images/perfil_activo.png");
                $(".formRegister2").show();
                break;
            case "hojaVida":
                $("#hojaVida").show();
                $(".btnHojaVida").prop("src", "/assets/images/hoja_vida_activo.png");
                $(".formRegister2").show();
                break;
            case "politica":
                $("#politica").show();
                $(".btnPolitica").prop("src", "/assets/images/politica_activo.png");
                break;
            case "pqrs":
                $("#pqrs").show();
                $(".btnPQRS").prop("src", "/assets/images/pqrs_activo.png");
                break;
            case "acerca":
                $("#acerca").show();
                $(".btnAcerca").prop("src", "/assets/images/acerca_de_activo.png");
                break;
        }
    }
    /************************************************************************************* */
    //  Consultar acerca de
    /************************************************************************************* */
    acercaDe() {
        //  Variables iniciales
        var _this = this;
        //  Consultar contenido
        let apiAdminGetContenido = new FormData();
        apiAdminGetContenido.append("tipo", "acerca");
        _this.postModel("apiAdminGetContenido", apiAdminGetContenido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            if (result.length > 0)
                _this.acercaDe = result[0].contenido;
        });
    }
    /************************************************************************************* */
    //  Consultar acerca de
    /************************************************************************************* */
    politicaPrivacidadGet() {
        //  Variables iniciales
        var _this = this;
        //  Consultar contenido
        let apiAdminGetContenido = new FormData();
        apiAdminGetContenido.append("tipo", "politica");
        _this.postModel("apiAdminGetContenido", apiAdminGetContenido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            if (result.length > 0)
                _this.politicaPrivacidad = result[0].contenido;
        });
    }
    /************************************************************************************* */
    //  Enviar PQRS
    /************************************************************************************* */
    pqrs() {
        //  Variables iniciales
        var _this = this;
        //  Enviar pqrs
        if ($("#pqrsTextarea").val()) {
            $(".msg").css("color", "green");
            $(".msg").html("Se envio el PQRS correctamente, pronto te responderemos.");
            $(".msg").show();
            setTimeout(function () {
                $(".msg").hide();
                $("#pqrsTextarea").val("");
            }, 3000);
        }
    }
    /************************************************************************************* */
    //  Selección de título
    /************************************************************************************* */
    selectTitulo(id) {
        //  Variables iniciales
        var _this = this;
        //  Definir título
        var tituloData = $(".selectUniversidad" + id).val().split("-");
        //  Asignar título
        if ($(".selectUniversidad" + id).val())
            $(".titulo" + id).html(tituloData[1]);
        else
            $(".titulo" + id).html("");
    }
};
PerfilPage.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "ZEuG":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "bn5b");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "W8eC");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "bn5b":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "W8eC");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "oKkR":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  border: 0px solid !important;\n}\n\ntr {\n  border: 0px solid !important;\n}\n\ntd {\n  border: 0px solid !important;\n}\n\np {\n  width: 100%;\n}\n\ninput {\n  border-top: 0px solid;\n  border-left: 0px solid;\n  border-right: 0px solid;\n  border-bottom: 1px solid gray;\n  margin-bottom: 6%;\n  width: 100%;\n}\n\nselect {\n  border-top: 0px solid;\n  border-left: 0px solid;\n  border-right: 0px solid;\n  border-bottom: 1px solid gray;\n  margin-bottom: 6%;\n  width: 100%;\n}\n\n#pqrsTextarea {\n  width: 100%;\n}\n\n#hojaVida {\n  display: none;\n}\n\n#politica {\n  display: none;\n}\n\n#pqrs {\n  display: none;\n}\n\n#acerca {\n  display: none;\n}\n\n#notificacionEmail, #notificacionSMS {\n  width: auto;\n}\n\n#identificacion {\n  min-height: 41px;\n}\n\n#fechaNacimiento {\n  min-height: 41px;\n}\n\n.paddingRight0 {\n  padding-right: 0%;\n}\n\n.heightFull {\n  height: 100%;\n}\n\n.background1 {\n  background: #7F7F7F;\n}\n\n.center {\n  text-align: center;\n}\n\n.perfilCargaFoto {\n  width: 90%;\n  padding-left: 4%;\n  padding-top: 6%;\n  border-radius: 50%;\n  min-height: 190px;\n  max-height: 190px;\n}\n\n.usuario {\n  color: #ffffff;\n  font-weight: bold;\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.itemMain {\n  color: #00475C;\n  font-weight: bold;\n  border-top: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  padding-top: 4%;\n  padding-bottom: 4%;\n}\n\n.marginAuto {\n  margin: auto;\n}\n\n.cursor:hover {\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n.registerForm {\n  padding: 0%;\n  background: #D8D9DD;\n}\n\n.registerFormContainer {\n  margin: 2% 4% 2% 2%;\n  background: #ffffff;\n  padding-top: 2%;\n  border-radius: 8px;\n  padding-bottom: 2%;\n}\n\n.registerFormCapa1 {\n  padding-left: 5%;\n  padding-right: 3%;\n  border-right: 1px solid #dddddd;\n}\n\n.registerFormCapa2 {\n  padding-left: 7%;\n  padding-right: 3%;\n  padding-top: 12%;\n  border-right: 1px solid #dddddd;\n}\n\n.titleRegister {\n  color: #051937;\n  font-weight: bold;\n  font-size: 18px;\n  padding-bottom: 6%;\n}\n\n.titleRegister2 {\n  color: #051937;\n  font-weight: bold;\n  font-size: 18px;\n  padding-bottom: 1%;\n}\n\n.pField1 {\n  font-style: italic;\n  font-size: 16px;\n  line-height: 0px;\n}\n\n.notificacionEmail {\n  padding-left: 4%;\n}\n\n.notificacionSMS {\n  padding-left: 4%;\n}\n\n.perfilActualizar {\n  width: 30%;\n  padding-top: 3%;\n  float: right;\n}\n\n.perfilActualizar {\n  width: 27%;\n  padding-top: 0%;\n}\n\n.changePassword {\n  margin-top: 9%;\n  padding-top: 6%;\n  padding-left: 8%;\n  padding-right: 4%;\n}\n\n.formRegister2 {\n  background: #ffffff;\n  margin-left: 2%;\n  margin-top: 3%;\n  margin-right: 4%;\n  margin-bottom: 3%;\n  border-radius: 8px;\n  padding: 2% 3% 2% 4%;\n}\n\n.textRight {\n  text-align: right;\n}\n\n.f12 {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.pasosImg {\n  width: 45%;\n}\n\n.lineaTiempo {\n  vertical-align: middle;\n  text-align: center;\n  width: 50px;\n}\n\n.lineaTiempo img {\n  width: 50%;\n  height: 5px;\n  min-width: 50px;\n  vertical-align: middle;\n}\n\n.msgPassword {\n  display: none;\n}\n\n.msgPerfil {\n  display: none;\n}\n\n.marginTop3 {\n  margin-top: 3%;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.redSocial {\n  width: 7%;\n  margin-right: 2%;\n}\n\n.paddingRight0 {\n  padding-right: 0%;\n}\n\n.paddingL0 {\n  padding-left: 0%;\n}\n\n.marginB2 {\n  margin-bottom: 2%;\n}\n\n.compartir {\n  margin-left: 2px;\n}\n\n.padding0 {\n  padding: 0%;\n}\n\n.backgroundPassword {\n  background: #F2F2F2;\n}\n\n.widthFull {\n  width: 100%;\n}\n\n.passwordActualizar {\n  background: #F2F2F2;\n  width: 28%;\n  margin-bottom: 3%;\n}\n\n.textAlignR {\n  text-align: right;\n}\n\n.form-check-input:checked {\n  background-color: #0A1D3A;\n  border-color: #0A1D3A;\n}\n\n.form-check-input {\n  background-color: #00475C;\n  border-color: #00475C;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n\n.actividad th {\n  padding-left: 0%;\n  padding-right: 0%;\n}\n\n.actividad td {\n  padding-left: 0%;\n  padding-right: 0%;\n}\n\n.btnPQRSEnvio {\n  background: #0C1F3C;\n}\n\n.cargaDocumentos {\n  width: 50%;\n}\n\n.cargaDocmentosDiv {\n  padding-right: 0%;\n  text-align: right;\n}\n\n.borderRightGray {\n  border-right: 1px solid #dddddd;\n}\n\n.marginBottom3 {\n  margin-bottom: 3%;\n}\n\n.marginLeft5 {\n  margin-left: 5%;\n}\n\n.universidad {\n  width: 90%;\n}\n\n.marginLeft8 {\n  margin-left: 8%;\n}\n\n.overflowY {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 280px;\n}\n\n.selectUniversidad {\n  height: 18px;\n  font-size: 12px;\n  margin-bottom: 0%;\n  width: 90%;\n}\n\n.presentacion {\n  border-top: 1px solid #dddddd;\n  margin-top: 2%;\n  padding-top: 2%;\n}\n\n.tPresentacion {\n  max-width: 17%;\n  padding-right: 0%;\n}\n\n.tRight {\n  text-align: right;\n}\n\n.informacion {\n  width: 6%;\n  margin-right: 3%;\n}\n\n.dileClientes {\n  color: #1E304B;\n}\n\n.areaPresentacion {\n  border: 1px solid #386E7E;\n  border-radius: 8px;\n  margin-left: 1%;\n  width: 98%;\n  height: 125px;\n}\n\n.selectTipo1 {\n  height: 26px;\n  margin-bottom: 3%;\n}\n\n.selectUniversidad {\n  height: 20px;\n  margin: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVKQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksK0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFFSiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRye1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIWltcG9ydGFudDtcclxufVxyXG5cclxucHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jcHFyc1RleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNob2phVmlkYXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuI3BvbGl0aWNhe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4jcHFyc3tcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuI2FjZXJjYXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuI25vdGlmaWNhY2lvbkVtYWlsLCAjbm90aWZpY2FjaW9uU01Te1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiNpZGVudGlmaWNhY2lvbntcclxuICAgIG1pbi1oZWlnaHQ6IDQxcHg7XHJcbn1cclxuXHJcbiNmZWNoYU5hY2ltaWVudG97XHJcbiAgICBtaW4taGVpZ2h0OiA0MXB4O1xyXG59XHJcblxyXG4ucGFkZGluZ1JpZ2h0MHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG59XHJcblxyXG4uaGVpZ2h0RnVsbHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZDF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0Y3RjdGO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGVyZmlsQ2FyZ2FGb3Rve1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG59XHJcblxyXG4udXN1YXJpb3tcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG59XHJcblxyXG4uaXRlbU1haW57XHJcbiAgICBjb2xvcjogIzAwNDc1QztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG59XHJcblxyXG4ubWFyZ2luQXV0b3tcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmN1cnNvcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6MC40O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJGb3Jte1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDhEOUREXHJcbn1cclxuXHJcbi5yZWdpc3RlckZvcm1Db250YWluZXJ7XHJcbiAgICBtYXJnaW46IDIlIDQlIDIlIDIlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyRm9ybUNhcGExe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQjZGRkZGRkO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJGb3JtQ2FwYTJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTIlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxufVxyXG5cclxuLnRpdGxlUmVnaXN0ZXJ7XHJcbiAgICBjb2xvcjogIzA1MTkzNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYlO1xyXG59XHJcblxyXG4udGl0bGVSZWdpc3RlcjJ7XHJcbiAgICBjb2xvcjogIzA1MTkzNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG59XHJcblxyXG4ucEZpZWxkMXtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYWNpb25FbWFpbHtcclxuICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi5ub3RpZmljYWNpb25TTVN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4ucGVyZmlsQWN0dWFsaXphcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wZXJmaWxBY3R1YWxpemFye1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxufVxyXG5cclxuLmNoYW5nZVBhc3N3b3Jke1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgcGFkZGluZy1yaWdodDogNCU7XHJcbn1cclxuXHJcbi5mb3JtUmVnaXN0ZXIye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMiUgMyUgMiUgNCU7XHJcbn1cclxuXHJcbi50ZXh0UmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcblxyXG4uZjEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYXNvc0ltZ3tcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5saW5lYVRpZW1wb3tcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmxpbmVhVGllbXBvIGltZ3tcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm1zZ1Bhc3N3b3Jke1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ubXNnUGVyZmlse1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wM3tcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbn1cclxuXHJcbi5ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZWRTb2NpYWx7XHJcbiAgICB3aWR0aDo3JTtcclxuICAgIG1hcmdpbi1yaWdodDoyJTtcclxufVxyXG5cclxuLnBhZGRpbmdSaWdodDB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxufVxyXG5cclxuLnBhZGRpbmdMMHtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tYXJnaW5CMntcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uY29tcGFydGlye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLnBhZGRpbmcwe1xyXG4gICAgcGFkZGluZzowJTtcclxufVxyXG5cclxuLmJhY2tncm91bmRQYXNzd29yZHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbi53aWR0aEZ1bGx7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ucGFzc3dvcmRBY3R1YWxpemFye1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4udGV4dEFsaWduUntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMUQzQTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBBMUQzQTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NzVDO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA0NzVDO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5hY3RpdmlkYWQgdGh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbi5hY3RpdmlkYWQgdGR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbi5idG5QUVJTRW52aW97XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEMxRjNDO1xyXG59XHJcblxyXG4uY2FyZ2FEb2N1bWVudG9ze1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNhcmdhRG9jbWVudG9zRGl2e1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvcmRlclJpZ2h0R3JheXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkI2RkZGRkZDtcclxufVxyXG5cclxuLm1hcmdpbkJvdHRvbTN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLm1hcmdpbkxlZnQ1e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4udW5pdmVyc2lkYWR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubWFyZ2luTGVmdDh7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuXHJcbi5vdmVyZmxvd1l7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMjgwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RVbml2ZXJzaWRhZHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnByZXNlbnRhY2lvbntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCNkZGRkZGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuLnRQcmVzZW50YWNpb257XHJcbiAgICBtYXgtd2lkdGg6IDE3JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG59XHJcblxyXG4udFJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbmZvcm1hY2lvbntcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuXHJcbi5kaWxlQ2xpZW50ZXN7XHJcbiAgICBjb2xvcjogIzFFMzA0QjtcclxufVxyXG5cclxuLmFyZWFQcmVzZW50YWNpb257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCMzODZFN0U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxufVxyXG5cclxuLnNlbGVjdFRpcG8xe1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5zZWxlY3RVbml2ZXJzaWRhZHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "uuZe":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row heightFull\">\n\n  <div class=\"col-md-2 background1 center paddingRight0\">\n\n    <div class=\"center\">\n      <img class=\"perfilCargaFoto\" src=\"/assets/images/perfil_carga_foto.png\" />\n      <input type=\"file\" id=\"photo\" style=\"display: none;\" />\n    </div>\n\n    <p class=\"usuario\">{{nombres}} {{apellidos}}</p>\n\n    <div>\n      <img class=\"cursor btnPerfil\" src=\"/assets/images/perfil_activo.png\" (click)=\"menu('perfil')\" />\n    </div>\n\n    <div *ngIf=\"perfil=='abogado'\">\n      <img class=\"cursor btnHojaVida\" src=\"/assets/images/hoja_vida.png\" (click)=\"menu('hojaVida')\" />\n    </div>\n\n    <div>\n      <img class=\"cursor btnPolitica\" src=\"/assets/images/politica_privacidad.png\" (click)=\"menu('politica')\" />\n    </div>\n\n    <div>\n      <img class=\"cursor btnPQRS\" src=\"/assets/images/pqrs.png\" (click)=\"menu('pqrs')\" />\n    </div>\n\n    <div>\n      <img class=\"cursor btnAcerca\" src=\"/assets/images/acerca_de.png\" (click)=\"menu('acerca')\" />\n    </div>\n\n  </div>\n\n  <div class=\"col-md-10 registerForm\">\n\n    <div id=\"perfil\">\n\n      <div class=\"row registerFormContainer\">\n\n        <div class=\"col-6 registerFormCapa1\">\n\n          <p class=\"titleRegister\">CONFIGURA TU PERFIL</p>\n\n          <p class=\"pField1\">Nombres</p>\n          <div><input type=\"text\" id=\"nombres\" value=\"{{nombres}}\" /></div>\n\n          <p class=\"pField1\">Apellidos</p>\n          <div><input type=\"text\" id=\"apellidos\" value=\"{{apellidos}}\"/></div>\n\n          <p class=\"pField1\">Usuario</p>\n          <div><input type=\"text\" id=\"usuario\" disabled value=\"{{usuario}}\"/></div>\n\n          <p class=\"pField1\">Correo eléctronico</p>\n          <div><input type=\"text\" id=\"email\" value=\"{{email}}\"/></div>\n\n          <div class=\"row\">\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Tipo de identificación</p>\n              <div>\n                <select id=\"tipoIdentificacion\">\n                  <option value=\"\"></option>\n                  <ng-container *ngFor=\"let item of tiposDocumentos\">\n                    <option value=\"{{item.tipo_documento}}\">{{item.tipo_documento}}</option>\n                  </ng-container>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Identificación</p>\n              <div><input type=\"text\" id=\"identificacion\" value=\"{{identificacion}}\"/></div>\n\n            </div>\n\n          </div>\n\n          <div class=\"row marginTop3\" *ngIf=\"perfil=='abogado'\">\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Fecha de Nacimiento</p>\n              <div><input type=\"date\" id=\"nacimiento\" value=\"{{nacimiento}}\"/></div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Género</p>\n              <div>\n                <select id=\"genero\">\n                  <option value=\"\"></option>\n                  <ng-container *ngFor=\"let item of generos\">\n                    <option value=\"{{item.genero}}\">{{item.genero}}</option>\n                  </ng-container>\n                </select>\n              </div>\n\n            </div>\n\n          </div>\n\n          <p class=\"pField1\" *ngIf=\"perfil!='abogado'\">Género</p>\n          <div *ngIf=\"perfil!='abogado'\">\n            <select id=\"genero\">\n              <option value=\"\"></option>\n              <ng-container *ngFor=\"let item of generos\">\n                <option value=\"{{item.genero}}\">{{item.genero}}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <p class=\"pField1\" *ngIf=\"perfil!='abogado'\">Teléfono de contacto</p>\n          <p class=\"pField1 marginTop3\" *ngIf=\"perfil=='abogado'\">Teléfono</p>\n\n          <div><input type=\"text\" id=\"telefonoContacto\" value=\"{{telefonoContacto}}\"/></div>\n\n          <div class=\"row marginTop3\" *ngIf=\"perfil=='abogado'\">\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Municipio</p>\n              <div>\n                <select id=\"municipio\">\n                  <option value=\"\"></option>\n                  <ng-container *ngFor=\"let item of municipios\">\n                    <option value=\"{{item.municipio}}\">{{item.municipio}}</option>\n                  </ng-container>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n\n              <p class=\"pField1\">Ciudad</p>\n              <div>\n                <select id=\"ciudad\">\n                  <option value=\"\"></option>\n                  <ng-container *ngFor=\"let item of ciudades\">\n                    <option value=\"{{item.ciudad}}\">{{item.ciudad}}</option>\n                  </ng-container>\n                </select>\n              </div>\n\n            </div>\n\n          </div>\n\n          <p class=\"pField1\" *ngIf=\"perfil!='abogado'\">Ciudad</p>\n          <div *ngIf=\"perfil!='abogado'\">\n            <select id=\"ciudad\">\n              <option value=\"\"></option>\n              <ng-container *ngFor=\"let item of ciudades\">\n                <option value=\"{{item.ciudad}}\">{{item.ciudad}}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <p class=\"pField1 marginTop3\" *ngIf=\"perfil=='abogado'\">Dirección Residencia</p>\n          <div *ngIf=\"perfil=='abogado'\"><input type=\"text\" id=\"direccion\" value=\"{{direccion}}\"/></div>\n\n        </div>\n\n        <div class=\"col-6 padding0\">\n\n          <div class=\"registerFormCapa2\">\n\n            <p class=\"pField1\">Facebook</p>\n            <div><input type=\"text\" id=\"facebook\" value=\"{{facebook}}\"/></div>\n\n            <p class=\"pField1\">Twitter</p>\n            <div><input type=\"text\" id=\"twitter\" value=\"{{twitter}}\"/></div>\n\n            <p class=\"pField1\">Instagram</p>\n            <div><input type=\"text\" id=\"instagram\" value=\"{{instagram}}\"/></div>\n\n            <div class=\"row marginB2\">\n\n              <div class=\"col-md-6\">\n\n                <div class=\"form-check form-switch\">\n\n                  <div class=\"row\">\n\n                    <div class=\"col-9 paddingL0\">\n                      <label class=\"form-check-label bold\" for=\"flexSwitchCheckDefaultNotificacionEmail\">Notificación Email</label>\n                    </div>\n\n                    <div class=\"col-3\">\n                      <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefaultNotificacionEmail\">\n                    </div>\n\n                  </div>\n                  \n                </div>\n\n              </div>\n\n              <div class=\"col-md-6\">\n\n                <div class=\"form-check form-switch\">\n\n                  <div class=\"row\">\n\n                    <div class=\"col-9 paddingL0\">\n                      <label class=\"form-check-label bold\" for=\"flexSwitchCheckDefaultNotificacionSMS\">Notificación SMS</label>\n                    </div>\n\n                    <div class=\"col-3\">\n                      <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefaultNotificacionSMS\">\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-3 paddingRight0\">\n\n                <p class=\"pField2\">\n                  <span class=\"bold compartir\">Compartir</span>\n                </p>\n\n              </div>\n\n              <div class=\"col-md-9\">\n\n                <img class=\"redSocial\" src=\"/assets/images/perfil_facebook.png\" (click)=\"redSocial('facebook')\" />\n                <img class=\"redSocial\" src=\"/assets/images/perfil_twitter.png\" (click)=\"redSocial('twitter')\" />\n                <img class=\"redSocial\" src=\"/assets/images/perfil_instagram.png\" (click)=\"redSocial('instagram')\" />\n                <img class=\"redSocial\" src=\"/assets/images/perfil_linked.png\" (click)=\"redSocial('linked')\" />\n                <img class=\"redSocial\" src=\"/assets/images/perfil_whatsapp.png\" (click)=\"redSocial('whatsapp')\" />\n\n              </div>\n\n            </div>\n\n            <p class=\"msgPerfil\"></p>\n\n            <div>\n              <img class=\"perfilActualizar cursor\" src=\"/assets/images/perfil_actualizar.png\" (click)=\"actualizar()\" />\n            </div>\n\n          </div>\n\n          <div class=\"changePassword backgroundPassword\">\n\n            <p class=\"pField1 backgroundPassword\">Contraseña Anterior</p>\n            <div class=\"backgroundPassword\" ><input class=\"backgroundPassword\" type=\"password\" id=\"passwordOld\" /></div>\n\n            <p class=\"pField1 backgroundPassword\">Nueva Contraseña</p>\n            <div><input class=\"backgroundPassword\" type=\"password\" id=\"password\" /></div>\n\n            <p class=\"pField1 backgroundPassword\">Confirmar Contraseña</p>\n            <div><input class=\"backgroundPassword\" type=\"password\" id=\"passwordConfirm\" /></div>\n\n            <p class=\"msgPassword backgroundPassword\"></p>\n\n            <div class=\"backgroundPassword widthFull textAlignR\">\n              <img class=\"passwordActualizar cursor backgroundPassword\" src=\"/assets/images/perfil_cambiar.png\" (click)=\"cambiarPassword()\"/>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div id=\"hojaVida\">\n\n      <div class=\"row registerFormContainer registerFormCapa1\">\n\n        <p class=\"titleRegister2 center\">HOJA DE VIDA</p>\n\n        <div class=\"overflowY\">\n\n          <div class=\"row\">\n\n          <div class=\"col-6 borderRightGray\">\n\n            <p>Universidad de egreso - Profesional *</p>\n            <input type=\"text\" class=\"universidad\" />\n\n          </div>\n\n          <div class=\"col-6\">\n\n            <p class=\"marginLeft8\">Título Profesional</p>\n            <input type=\"text\" class=\"universidad marginLeft8\" />\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-6 borderRightGray\">\n\n            <p>\n              <select class=\"selectUniversidad selectUniversidad1\" (change)=\"selectTitulo('1')\">\n                <option value=\"\">- Agregar otro Título -</option>\n                <ng-container *ngFor=\"let item of titulos\">\n                  <option value=\"{{item.titulo}}\">{{item.titulo}}</option>\n                </ng-container>\n              </select>\n            </p>\n\n            <input type=\"text\" class=\"universidad\" />\n\n          </div>\n\n          <div class=\"col-6\">\n\n            <p class=\"marginLeft8\">Título <span class=\"titulo1\"></span></p>\n            <input type=\"text\" class=\"universidad marginLeft8\" />\n\n          </div>\n\n        </div>\n\n        </div>\n\n        <div class=\"row presentacion\">\n\n          <div class=\"col titleRegister2 tPresentacion\">\n            PRESENTACIÓN\n          </div>\n\n          <div class=\"col dileClientes\">\n            (Dile a tus clientes por qué deben contratarte)\n          </div>\n\n          <div class=\"col tRight\">\n            <img class=\"informacion\" src=\"/assets/images/informacion.png\" />\n            <span>0/160</span>\n          </div>\n\n        </div>\n\n        <textarea class=\"areaPresentacion\"></textarea>\n\n        <div class=\"row marginTop3\">\n\n          <div class=\"col\">Tipo de T.P</div>\n          <div class=\"col\">No. Tarjeta o Licencia</div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n\n            <select class=\"selectTipo1\">\n              <option>Temporal</option>\n            </select>\n\n          </div>\n\n          <div class=\"col\">\n\n            <input type=\"text\" />\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">¿Cuenta con experiencia laboral en el ejercicio del Derecho?</div>\n          <div class=\"col\">¿Cuánto Tiempo?</div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n\n            <select class=\"selectTipo1\">\n              <option>SI</option>\n              <option>NO</option>\n            </select>\n\n          </div>\n\n          <div class=\"col\">\n\n            <input type=\"text\" />\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">¿Cuenta con alguna investigación disciplinaria por parte del Consejo Superior de la Juricatura?</div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n\n            <select class=\"selectTipo1\">\n              <option>SI</option>\n              <option>NO</option>\n            </select>\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">¿Cuál de las siguientes opciones se ajusta a sus gastos en las ramas del derecho o en cuál le gustaría desempeñar laboralmente?</div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n\n            <select class=\"selectTipo1\">\n              <option>CIVIL</option>\n            </select>\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">¿Cuánto es el promedio que cobra usted por una asesoría jurídica? (Solo asesoría)</div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n\n            <select class=\"selectTipo1\">\n              <option>$200.000</option>\n            </select>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"row registerFormContainer registerFormCapa1\">\n\n        <p class=\"titleRegister2 center\">CARGA DE DOCUMENTOS</p>\n\n        <div class=\"row\">\n\n          <div class=\"col-6 borderRightGray\">\n\n            <div class=\"row marginBottom3\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos.png\"></div>\n              <div class=\"col-10 marginAuto\">Cargar Cédula al 150%</div>\n\n            </div>\n\n            <div class=\"row marginBottom3\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos.png\"></div>\n              <div class=\"col-10 marginAuto\">Cargar Recibo de Servicio Público</div>\n\n            </div>\n\n            <div class=\"row marginBottom3\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos.png\"></div>\n              <div class=\"col-10 marginAuto\">Cargar T.P.</div>\n\n            </div>\n\n          </div>\n\n          <div class=\"col-6\">\n\n            <div class=\"row marginBottom3 marginLeft5\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos.png\"></div>\n              <div class=\"col-10 marginAuto\">Cargar Diploma o Acta de Grado</div>\n\n            </div>\n\n            <div class=\"row marginBottom3 marginLeft5\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos_rojo.png\"></div>\n              <div class=\"col-10 marginAuto\">Especialización</div>\n\n            </div>\n\n            <div class=\"row marginBottom3 marginLeft5\">\n\n              <div class=\"col-2 cargaDocmentosDiv\"><img class=\"cargaDocumentos\" src=\"/assets/images/carga_documentos_rojo.png\"></div>\n              <div class=\"col-10 marginAuto\">Maestría</div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div id=\"politica\">\n\n      <div class=\"row registerFormContainer registerFormCapa1\">\n\n        <p class=\"titleRegister2\">POLÍTICA DE PRIVACIDAD</p>\n\n        <p>{{politicaPrivacidad}}</p>\n\n      </div>\n\n    </div>\n\n    <div id=\"pqrs\">\n\n      <div class=\"row registerFormContainer registerFormCapa1\">\n\n        <p class=\"titleRegister2\">PQRS</p>\n\n        <p>Escribenos tu petición, queja o reclamo a continuación:</p>\n\n        <div>\n          <textarea id=\"pqrsTextarea\" rows=\"10\">{{contenido}}</textarea>\n        </div>\n      \n        <p class=\"msg\"></p>\n      \n        <button class=\"btn btn-primary btnPQRSEnvio\" type=\"submit\" (click)=\"pqrs()\">Enviar PQRS</button>\n\n      </div>\n\n    </div>\n\n    <div id=\"acerca\">\n\n      <div class=\"row registerFormContainer registerFormCapa1\">\n\n        <p class=\"titleRegister2\">ACERCA DE</p>\n\n        <p>{{acercaDe}}</p>\n\n      </div>\n\n    </div>\n\n    <div class=\"row formRegister2\">\n\n      <div class=\"col\">\n      \n        <div class=\"row\">\n\n          <div class=\"col-md-6 titleRegister\">TU ACTIVIDAD</div>\n          <div class=\"col-md-6 textRight\">Activo desde: <b>{{activoDesde}}</b></div>\n  \n        </div>\n\n        <table class=\"table actividad\">\n          <thead>\n            <tr>\n              <th class=\"center\" scope=\"col f12\">Registro</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\"></th>\n              <th class=\"center\" scope=\"col f12\">Completa tu perfil</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\"></th>\n\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='cliente'\">Crea tu caso</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\" *ngIf=\"perfil=='cliente'\"></th>\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='cliente'\">Busca tu Abogado</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\" *ngIf=\"perfil=='cliente'\"></th>\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='cliente'\">Disfruta la experiencia</th>\n\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\">Completa tu HV</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\"></th>\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\">Proceso de Validación</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\"></th>\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\">Aprobado</th>\n              <th class=\"center lineaTiempo\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\"></th>\n              <th class=\"center\" scope=\"col f12\" *ngIf=\"perfil=='abogado'\">Busca tus Clientes</th>\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n\n              <td class=\"center\" *ngIf=\"registro=='true'\"><img class=\"pasosImg\" src=\"/assets/images/paso1_true.png\"></td>\n              <td class=\"center\" *ngIf=\"registro=='false'\"><img class=\"pasosImg\" src=\"/assets/images/paso1_red.png\"></td>\n\n              <td class=\"center lineaTiempo\"><img class=\"pasosImg\" src=\"/assets/images/linea_tiempo.png\"></td>\n\n              <td class=\"center\" *ngIf=\"completaPerfil=='true'\"><img class=\"pasosImg\" src=\"/assets/images/paso2_true.png\"></td>\n              <td class=\"center\" *ngIf=\"completaPerfil=='false'\"><img class=\"pasosImg\" src=\"/assets/images/paso2_red.png\"></td>\n\n              <td class=\"center lineaTiempo\"><img class=\"pasosImg\" src=\"/assets/images/linea_tiempo.png\"></td>\n\n              <td class=\"center\" *ngIf=\"creaCaso=='true' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso3_true.png\"></td>\n              <td class=\"center\" *ngIf=\"creaCaso=='false' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso3_red.png\"></td>\n\n              <td class=\"center\" *ngIf=\"hojaVida=='true' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/hoja_true.png\"></td>\n              <td class=\"center\" *ngIf=\"hojaVida=='false' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/hoja_red.png\"></td>\n\n              <td class=\"center lineaTiempo\"><img class=\"pasosImg\" src=\"/assets/images/linea_tiempo.png\"></td>\n\n              <td class=\"center\" *ngIf=\"buscaCaso=='true' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso4_true.png\"></td>\n              <td class=\"center\" *ngIf=\"buscaCaso=='false' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso4_red.png\"></td>\n\n              <td class=\"center\" *ngIf=\"validacion=='true' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/validacion_true.png\"></td>\n              <td class=\"center\" *ngIf=\"validacion=='false' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/validacion_red.png\"></td>\n\n              <td class=\"center lineaTiempo\"><img class=\"pasosImg\" src=\"/assets/images/linea_tiempo.png\"></td>\n\n              <td class=\"center\" *ngIf=\"disfrutaExperiencia=='true' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso5_true.png\"></td>\n              <td class=\"center\" *ngIf=\"disfrutaExperiencia=='false' && perfil=='cliente'\"><img class=\"pasosImg\" src=\"/assets/images/paso5_red.png\"></td>\n\n              <td class=\"center\" *ngIf=\"aprobado=='true' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/aprobado_true.png\"></td>\n              <td class=\"center\" *ngIf=\"aprobado=='false' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/aprobado_red.png\"></td>\n\n              <td *ngIf=\"perfil=='abogado'\" class=\"center lineaTiempo\"><img class=\"pasosImg\" src=\"/assets/images/linea_tiempo.png\"></td>\n\n              <td class=\"center\" *ngIf=\"buscaCliente=='true' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/busca_cliente_true.png\"></td>\n              <td class=\"center\" *ngIf=\"buscaCliente=='false' && perfil=='abogado'\"><img class=\"pasosImg\" src=\"/assets/images/busca_cliente_red.png\"></td>\n\n            </tr>\n\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map