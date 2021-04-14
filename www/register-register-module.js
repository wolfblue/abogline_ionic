(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <label>\n        <p class=\"label-txt\">Usuario (*):</p>\n        <input type=\"text\" class=\"input\" id=\"user\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Correo Electrónico (*):</p>\n        <input type=\"text\" class=\"input\" id=\"email\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Contraseña (*):</p>\n        <input type=\"password\" class=\"input\" id=\"password\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Confirmar Contraseña (*):</p>\n        <input type=\"password\" class=\"input\" id=\"passwordConfirm\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Perfil (*):</p>\n        <select class=\"input\" id=\"perfil\">\n          <option value=\"abogado\">Abogado</option>\n          <option value=\"cliente\">Cliente</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <input type=\"checkbox\" class=\"input\" id=\"termsCliente\"> &nbsp;\n        Acepta los términos y condiciones(*):\n      </label>\n      <button (click)=\"modalConfirmar('Registrar usuario','¿ Esta seguro de continuar con la información diligenciada ?')\">Registrarse</button>\n    </form>\n\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








let RegisterPage = class RegisterPage {
    constructor(http) {
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
    }
    ngOnInit() {
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /************************************************************************************* */
    /**
     * Modal confirmar
     */
    modalConfirmar(titulo, body) {
        var _this = this;
        $(".modal-title").html(titulo);
        $(".modal-body").html(body);
        $(".modalConfirm").modal("toggle");
        $(".modalContinuar").unbind("click");
        $(".modal-continuar").click(function () {
            _this.registerUser();
            $(".modalConfirm").modal("toggle");
        });
    }
    /************************************************************************************* */
    /**
     * Registar usuario
     */
    registerUser() {
        this.error = 0;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        //  Verificar campos obligatorios
        if (!$("#user").val() || !$("#email").val() || !$("#password").val() || !$("#passwordConfirm").val() || $("#termsCliente").prop("checked") == false) {
            this.error = 1;
            this.msg = "Faltan campos por diligenciar";
        }
        //  Verificar si las contraseñas coinciden
        if (this.error == 0 && $("#password").val() != $("#passwordConfirm").val()) {
            this.error = 1;
            this.msg = "Las contraseñas no coinciden";
        }
        //  Verificar si el usuario existe
        if (this.error == 0) {
            let getUser = new FormData();
            getUser.append("user", $("#user").val());
            getUser.append("email", $("#email").val());
            getUser.append("password", "");
            this.postModel("getUser", getUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                if (result.length > 0) {
                    $("input").val("");
                    this.msg = "El usuario ya se encuentra registrado";
                    $(".warning").show();
                }
                else {
                    let createUser = new FormData();
                    createUser.append("active", "1");
                    createUser.append("user", $("#user").val());
                    createUser.append("email", $("#email").val());
                    createUser.append("password", $("#password").val());
                    createUser.append("profile", $("#perfil").val());
                    this.postModel("createUser", createUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                        $("input").val("");
                        this.msg = "Se registro el usuario correctamente";
                        $(".success").show();
                    });
                }
            });
        }
        //  Mostrar errores
        if (this.error == 1)
            $(".error").show();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #C5E1A5;\n}\n\nform {\n  width: 60%;\n  margin: 60px auto;\n  background: #efefef;\n  padding: 60px 120px 80px 120px;\n  text-align: center;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n}\n\nlabel {\n  display: block;\n  position: relative;\n  margin: 40px 0px;\n}\n\n.label-txt {\n  position: absolute;\n  top: -1.6em;\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 0.8em;\n  letter-spacing: 1px;\n  color: #787878;\n  transition: ease 0.3s;\n}\n\n.input {\n  width: 100%;\n  padding: 10px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.line-box {\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background: #BCBCBC;\n}\n\n.line {\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0B1B3B;\n  transition: ease 0.6s;\n}\n\n.input:focus + .line-box .line {\n  width: 100%;\n}\n\n.label-active {\n  top: -3em;\n}\n\nbutton {\n  display: inline-block;\n  padding: 12px 24px;\n  background: gainsboro;\n  font-weight: bold;\n  color: #787878;\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: ease 0.3s;\n}\n\nbutton:hover {\n  background: #0B1B3B;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI0M1RTFBNTtcclxufVxyXG5mb3JtIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgcGFkZGluZzogNjBweCAxMjBweCA4MHB4IDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcbi5sYWJlbC10eHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xLjZlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiByZ2IoMTIwLDEyMCwxMjApO1xyXG4gIHRyYW5zaXRpb246IGVhc2UgLjNzO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxpbmUtYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogI0JDQkNCQztcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBiYWNrZ3JvdW5kOiAjMEIxQjNCO1xyXG4gIHRyYW5zaXRpb246IGVhc2UgLjZzO1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXMgKyAubGluZS1ib3ggLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGFiZWwtYWN0aXZlIHtcclxuICB0b3A6IC0zZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjIwLDIyMCwyMjApO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMTIwLDEyMCwxMjApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuM3M7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzBCMUIzQjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map