(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! O:\Proyectos\Abogline\Desarrollo\repositorios\abogline_ionic\src\main.ts */"zUnb");


/***/ }),

/***/ "0rSQ":
/*!*********************************************************!*\
  !*** ./src/app/cliente-profile/cliente-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: ClienteProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteProfilePage", function() { return ClienteProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-profile.page.html */ "qAef");
/* harmony import */ var _cliente_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-profile.page.scss */ "SHlA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








let ClienteProfilePage = class ClienteProfilePage {
    constructor(http) {
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
        this.tmpFile = "";
        this.tmpFormat = "";
        this.pathFile = "";
        //  Obtener los datos del abogado
        this.getDataCliente();
    }
    ngOnInit() {
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /*********************************************************************************** */
    /**
      * Obtener los datos del abogado
      */
    getDataCliente() {
        var _this = this;
        setTimeout(function () {
            //  Porcentaje de registro
            $('.progress-bar').css('width', '0%');
            $('.progress-bar').attr('aria-valuenow', 0);
            $('.progress-bar').text('0%');
            $("#userCliente").val(sessionStorage.getItem("user"));
            $("#emailCliente").val(sessionStorage.getItem("email"));
            let getDataClientes = new FormData();
            getDataClientes.append("email", sessionStorage.getItem("email"));
            _this.postModel("getDataClientes", getDataClientes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                if (result.length > 0) {
                    //  Asignar valores
                    $("#nameCliente").val(result[0].name);
                    $("#lastnameCliente").val(result[0].lastname);
                    $("#idTypeCliente").val(result[0].idType);
                    $("#identificationCliente").val(result[0].identification);
                    $("#emailCliente").val(result[0].email2);
                    $("#phone").val(result[0].phone);
                }
            });
            setTimeout(function () {
                var contInput = 0;
                var contInputEnter = 1;
                $("#formCliente input").each(function () {
                    contInput += 1;
                    if ($(this).val())
                        contInputEnter += 1;
                });
                $("#formCliente select").each(function () {
                    contInput += 1;
                    if ($(this).val())
                        contInputEnter += 1;
                });
                var percent = (100 / contInput * contInputEnter).toFixed(0);
                $('.progress-bar').css('width', percent + '%');
                $('.progress-bar').attr('aria-valuenow', percent);
                $('.progress-bar').text(percent + '%');
            }, 2000);
        }, 500);
    }
    /****************************************************************************************** */
    /**
     * Registrar
     */
    register() {
        this.error = 0;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        //  Validar campos obligatorios
        if (!$("#nameCliente").val() ||
            !$("#lastnameCliente").val() ||
            !$("#idTypeCliente").val() ||
            !$("#identificationCliente").val() ||
            !$("#emailCliente").val() ||
            !$("#phone").val()) {
            this.error = 1;
            this.msg = "Faltan campos por diligenciar";
        }
        //  Proceder con el registro
        if (this.error == 0) {
            let clientesUpdate = new FormData();
            clientesUpdate.append("email", sessionStorage.getItem('email'));
            clientesUpdate.append("name", $("#nameCliente").val());
            clientesUpdate.append("lastname", $("#lastnameCliente").val());
            clientesUpdate.append("idType", $("#idTypeCliente").val());
            clientesUpdate.append("identification", $("#identificationCliente").val());
            clientesUpdate.append("email2", $("#emailCliente").val());
            clientesUpdate.append("password", $("#passwordCliente").val());
            clientesUpdate.append("phone", $("#phone").val());
            this.postModel("clientesUpdate", clientesUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                this.msg = "Se actualizó la información correctamente";
                $(".success").show();
                setTimeout(function () {
                    $(".success").hide();
                }, 3000);
            });
        }
        //  Mostrar errores
        if (this.error == 1)
            $(".error").show();
    }
};
ClienteProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ClienteProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cliente-profile',
        template: _raw_loader_cliente_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClienteProfilePage);



/***/ }),

/***/ "1am6":
/*!***************************************************************************!*\
  !*** ./src/app/cliente-detalle-abogado/cliente-detalle-abogado.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead input {\n  width: 100%;\n}\n\ntable {\n  width: 90%;\n  margin: auto;\n}\n\n#container {\n  top: 55%;\n  width: 90%;\n  margin: auto;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudGUtZGV0YWxsZS1hYm9nYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiY2xpZW50ZS1kZXRhbGxlLWFib2dhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICB0b3A6IDU1JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6MTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "7YuR":
/*!***********************************************************!*\
  !*** ./src/app/abogado-profile/abogado-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #C5E1A5;\n}\n\nform {\n  width: 100%;\n  margin: 60px auto;\n  padding: 50% 120px 0% 120px;\n  text-align: center;\n}\n\nlabel {\n  display: block;\n  position: relative;\n  margin: 40px 0px;\n}\n\n.label-txt {\n  position: absolute;\n  top: -1.6em;\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 0.8em;\n  letter-spacing: 1px;\n  color: #787878;\n  transition: ease 0.3s;\n}\n\n.input {\n  width: 100%;\n  padding: 10px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.line-box {\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background: #BCBCBC;\n}\n\n.line {\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0B1B3B;\n  transition: ease 0.6s;\n}\n\n.input:focus + .line-box .line {\n  width: 100%;\n}\n\n.label-active {\n  top: -3em;\n}\n\nbutton {\n  display: inline-block;\n  padding: 12px 24px;\n  background: gainsboro;\n  font-weight: bold;\n  color: #787878;\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: ease 0.3s;\n}\n\nbutton:hover {\n  background: #0B1B3B;\n  color: #ffffff;\n}\n\n.progress {\n  margin-top: 2%;\n}\n\n.register {\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib2dhZG8tcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtBQUtGIiwiZmlsZSI6ImFib2dhZG8tcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNDNUUxQTU7XHJcbn1cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgcGFkZGluZzogNTAlIDEyMHB4IDAlIDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNDBweCAwcHg7XHJcbn1cclxuLmxhYmVsLXR4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEuNmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6IHJnYigxMjAsMTIwLDEyMCk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuM3M7XHJcbn1cclxuLmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubGluZS1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjQkNCQ0JDO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJhY2tncm91bmQ6ICMwQjFCM0I7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuNnM7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyArIC5saW5lLWJveCAubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYWJlbC1hY3RpdmUge1xyXG4gIHRvcDogLTNlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjAsMjIwLDIyMCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigxMjAsMTIwLDEyMCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBlYXNlIC4zcztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMEIxQjNCO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5wcm9ncmVzc3tcclxuICBtYXJnaW4tdG9wOjIlO1xyXG59XHJcbi5yZWdpc3RlcntcclxuICBtYXJnaW4tdG9wOjIlO1xyXG59Il19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://127.0.0.1:8000/api/',
    backend: 'http://127.0.0.1:8000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C0wz":
/*!*********************************************************************!*\
  !*** ./src/app/cliente-detalle-caso/cliente-detalle-caso.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead input {\n  width: 100%;\n}\n\ntable {\n  width: 90%;\n  margin: auto;\n}\n\n#container {\n  top: 28%;\n  width: 90%;\n  margin: auto;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudGUtZGV0YWxsZS1jYXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiY2xpZW50ZS1kZXRhbGxlLWNhc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICB0b3A6IDI4JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6MTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "DRCg":
/*!*********************************************************!*\
  !*** ./src/app/abogado-profile/abogado-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: AbogadoProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoProfilePage", function() { return AbogadoProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_abogado_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./abogado-profile.page.html */ "nvRe");
/* harmony import */ var _abogado_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abogado-profile.page.scss */ "7YuR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








let AbogadoProfilePage = class AbogadoProfilePage {
    constructor(http) {
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
        this.tmpFile = "";
        this.tmpFormat = "";
        this.pathFile = "";
        this.getDataAbogado();
    }
    ngOnInit() {
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /**
     * Change de los campos
     */
    changeField(field, event) {
        var _this = this;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        switch (field) {
            case "cv":
                var ext = $("#cv").val().split('.').pop().toLowerCase();
                this.tmpFormat = ext;
                console.log(ext);
                if ($.inArray(ext, ['pdf']) == -1) {
                    this.msg = "Solo se permiten cargar formatos (.pdf)";
                    $(".error").show();
                }
                else {
                    let reader = new FileReader();
                    if (event.target.files && event.target.files.length) {
                        const [file] = event.target.files;
                        reader.readAsDataURL(file);
                        reader.onloadend = function () {
                            _this.tmpFile = reader.result;
                            _this.pathFile = "";
                            if (confirm("Desea visualizar la hoja de vida"))
                                window.open(URL.createObjectURL(event.target.files[0]));
                        };
                    }
                }
                break;
            case "experience":
                if ($("#experience").val() == "2")
                    $("#years").prop("disabled", false);
                else {
                    $("#years").prop("disabled", true);
                    $("#years").val("");
                }
                break;
            case "pleasures":
                if ($("#pleasures").val() == "9")
                    $("#pleasures_other").prop("disabled", false);
                else {
                    $("#pleasures_other").prop("disabled", true);
                    $("#pleasures_other").val("");
                }
                break;
        }
    }
    /**
     * Registrar
     */
    register() {
        this.error = 0;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        //  Validar campos obligatorios
        if (!$("#fullname").val() ||
            !$("#gender").val() ||
            !$("#identification").val() ||
            !$("#address").val() ||
            !$("#document1").val() ||
            !$("#license").val() ||
            !$("#experience").val() ||
            !$("#investigate").val() ||
            !$("#pleasures").val() ||
            !$("#price").val() ||
            !$("#cv").val()) {
            this.error = 1;
            this.msg = "Faltan campos por diligenciar";
        }
        //  Proceder con el registro
        if (this.error == 0) {
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
            this.postModel("abogadosUpdate", abogadosUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                this.msg = "Se actualizó la información correctamente";
                $(".success").show();
            });
        }
        //  Mostrar errores
        if (this.error == 1)
            $(".error").show();
    }
    /**
     * Obtener los datos del abogado
     */
    getDataAbogado() {
        var _this = this;
        setTimeout(function () {
            $('.progress-bar').css('width', '0%');
            $('.progress-bar').attr('aria-valuenow', 0);
            $('.progress-bar').text('0%');
            //  Ocultar campos
            $("#pleasures_other").prop("disabled", true);
            $("#years").prop("disabled", true);
            let getDataAbogados = new FormData();
            getDataAbogados.append("email", sessionStorage.getItem("email"));
            _this.postModel("getDataAbogados", getDataAbogados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                if (result.length > 0) {
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
                    $("#pleasures").val(result[0].pleasures);
                    $("#pleasures_other").val(result[0].pleasures_other);
                    $("#price").val(result[0].price);
                    _this.pathFile = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].backend}` + result[0].cv;
                    //  Desbloquear campos
                    if (result[0].experience == "2")
                        $("#years").prop("disabled", false);
                    if (result[0].pleasures == "9")
                        $("#pleasures_other").prop("disabled", false);
                }
            });
            //  Porcentaje de registro
            setTimeout(function () {
                var contInput = 0;
                var contInputEnter = 0;
                $("#formAbogado input").each(function () {
                    contInput += 1;
                    if ($(this).val())
                        contInputEnter += 1;
                });
                $("#formAbogado select").each(function () {
                    contInput += 1;
                    if ($(this).val())
                        contInputEnter += 1;
                });
                if (_this.pathFile)
                    contInputEnter += 1;
                var percent = (100 / contInput * contInputEnter).toFixed(0);
                $('.progress-bar').css('width', percent + '%');
                $('.progress-bar').attr('aria-valuenow', percent);
                $('.progress-bar').text(percent + '%');
            }, 2000);
        }, 500);
    }
};
AbogadoProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AbogadoProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-abogado-profile',
        template: _raw_loader_abogado_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abogado_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AbogadoProfilePage);



/***/ }),

/***/ "F/0N":
/*!*********************************************************************!*\
  !*** ./src/app/abogado-detalle-caso/abogado-detalle-caso.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead input {\n  width: 100%;\n}\n\ntable {\n  width: 90%;\n  margin: auto;\n}\n\n#container {\n  top: 28%;\n  width: 90%;\n  margin: auto;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib2dhZG8tZGV0YWxsZS1jYXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiYWJvZ2Fkby1kZXRhbGxlLWNhc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICB0b3A6IDI4JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6MTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "R8bi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/abogado-detalle-caso/abogado-detalle-caso.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field1\" class=\"form-label\">\n          ¿Con quién tiene problemas?\n        </label>\n        <p id=\"field1\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field2\" class=\"form-label\">\n          ¿Sobre que trata tu caso?\n        </label>\n        <p id=\"field2\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field4\" class=\"form-label\">\n          ¿Cuál es tu problema?\n        </label>\n        <p id=\"field4\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field6\" class=\"form-label\">\n          Cuentanos tu caso\n        </label>\n        <p id=\"field6\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field7\" class=\"form-label\">\n          ¿Ya inicio un proceso ante un juzgado o entidad  para su solución?\n        </label>\n        <p id=\"field7\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modalConfirmar('Aplicar al caso','¿ Esta seguro de continuar con la información diligenciada ?')\">Aplicar al caso</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "SHlA":
/*!***********************************************************!*\
  !*** ./src/app/cliente-profile/cliente-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #C5E1A5;\n}\n\nform {\n  width: 100%;\n  margin: 60px auto;\n  padding: 20% 120px 0% 120px;\n  text-align: center;\n}\n\nlabel {\n  display: block;\n  position: relative;\n  margin: 40px 0px;\n}\n\n.label-txt {\n  position: absolute;\n  top: -1.6em;\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 0.8em;\n  letter-spacing: 1px;\n  color: #787878;\n  transition: ease 0.3s;\n}\n\n.input {\n  width: 100%;\n  padding: 10px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.line-box {\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background: #BCBCBC;\n}\n\n.line {\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0B1B3B;\n  transition: ease 0.6s;\n}\n\n.input:focus + .line-box .line {\n  width: 100%;\n}\n\n.label-active {\n  top: -3em;\n}\n\nbutton {\n  display: inline-block;\n  padding: 12px 24px;\n  background: gainsboro;\n  font-weight: bold;\n  color: #787878;\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: ease 0.3s;\n}\n\nbutton:hover {\n  background: #0B1B3B;\n  color: #ffffff;\n}\n\n.progress {\n  margin-top: 2%;\n}\n\n.registerCliente {\n  margin-top: 2%;\n}\n\n#terms {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudGUtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtBQUtGIiwiZmlsZSI6ImNsaWVudGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNDNUUxQTU7XHJcbn1cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjAlIDEyMHB4IDAlIDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNDBweCAwcHg7XHJcbn1cclxuLmxhYmVsLXR4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEuNmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6IHJnYigxMjAsMTIwLDEyMCk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuM3M7XHJcbn1cclxuLmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubGluZS1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjQkNCQ0JDO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJhY2tncm91bmQ6ICMwQjFCM0I7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuNnM7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyArIC5saW5lLWJveCAubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYWJlbC1hY3RpdmUge1xyXG4gIHRvcDogLTNlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjAsMjIwLDIyMCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigxMjAsMTIwLDEyMCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBlYXNlIC4zcztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMEIxQjNCO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5wcm9ncmVzc3tcclxuICBtYXJnaW4tdG9wOjIlO1xyXG59XHJcbi5yZWdpc3RlckNsaWVudGV7XHJcbiAgbWFyZ2luLXRvcDoyJTtcclxufVxyXG5cclxuI3Rlcm1ze1xyXG4gIHdpZHRoOmF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _abogado_profile_abogado_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./abogado-profile/abogado-profile.page */ "DRCg");
/* harmony import */ var _cliente_profile_cliente_profile_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cliente-profile/cliente-profile.page */ "0rSQ");











let AppComponent = class AppComponent {
    constructor(http, router, AbogadoProfilePage, ClienteProfilePage) {
        this.http = http;
        this.router = router;
        this.AbogadoProfilePage = AbogadoProfilePage;
        this.ClienteProfilePage = ClienteProfilePage;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.design = 0;
        this.email = "";
        this.auth = 0;
        this.mainActive = "inicio";
        this.profile = sessionStorage.getItem("profile");
        this.notificacionesTotal = "0";
        var _this = this;
    }
    ngOnInit() {
        var _this = this;
        //  Validar autenticación
        this.validateAuth();
        //  Activar opción menú principal
        setTimeout(function () {
            $(".main").removeClass("active");
            $("." + _this.mainActive).addClass("active");
        }, 1500);
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /************************************************************************************* */
    location(ruta) {
        //  Limpiar variables de sesión
        sessionStorage.setItem('caso', '0');
        window.location = ruta;
    }
    /************************************************************************************* */
    /**
     * Validar autenticación
     */
    validateAuth() {
        if (sessionStorage.getItem("email")) {
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
            this.profile = sessionStorage.getItem("profile");
            //  Obtener total notificaciones
            //this.getNotificaciones();
            setInterval(function () {
                //this.getNotificaciones();
            }, 3000);
        }
        else {
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
    logout() {
        sessionStorage.setItem("email", "");
        this.auth = 0;
        this.email = "";
        this.validateAuth();
        this.router.navigateByUrl("home");
    }
    /**
     * Dirigir actualizar perfil de usuario
     */
    profileLink() {
        if (sessionStorage.getItem("profile") == "cliente") {
            this.router.navigateByUrl("cliente-profile");
            this.ClienteProfilePage.getDataCliente();
        }
        else {
            this.router.navigateByUrl("abogado-profile");
            this.AbogadoProfilePage.getDataAbogado();
        }
    }
    /************************************************************************ */
    /**
     * Obtener todas las notificaciones de un usuario
     */
    getNotificaciones() {
        let getNotificacion = new FormData();
        getNotificacion.append("email", sessionStorage.getItem("email"));
        this.postModel("getNotificacion", getNotificacion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
            this.notificacionesTotal = result.length;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _abogado_profile_abogado_profile_page__WEBPACK_IMPORTED_MODULE_9__["AbogadoProfilePage"] },
    { type: _cliente_profile_cliente_profile_page__WEBPACK_IMPORTED_MODULE_10__["ClienteProfilePage"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n  <ion-header [translucent]=\"true\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-align-self-start\" [class.border]=\"design == 1\">\n          <img (click)=\"location('home')\" src=\"/assets/images/logo.png\" width=\"50%\">\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n          &nbsp;\n        </ion-col>\n        <ion-col class=\"ion-align-self-end tRight\" [class.border]=\"design == 1\">\n\n          <ion-grid>\n            <ion-row>\n              <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n                <ion-button class=\"register\" color=\"secondary\" (click)=\"location('register')\">Registrarse</ion-button>\n              </ion-col>\n              <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n                <ion-button class=\"login\" color=\"primary\" (click)=\"location('login')\">Iniciar Sesión</ion-button>\n              </ion-col>\n              <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n                <a class=\"email\" (click)=\"profileLink()\">{{this.email}}</a>\n              </ion-col>\n              <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n                <a class=\"notification\" (click)=\"location('notificaciones')\">\n                  <span class=\"badge\">{{this.notificacionesTotal}}</span>\n                </a>\n              </ion-col>\n              <ion-col class=\"ion-align-self-center\" [class.border]=\"design == 1\">\n                <ion-button class=\"logout\" color=\"primary\" (click)=\"logout()\">Cerrar Sesión</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light mainPrincipal\" *ngIf=\"auth == 1\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link main inicio\" (click)=\"location('home')\">Inicio</a>\n          <a *ngIf=\"profile == 'cliente'\" class=\"nav-item nav-link main registrarCaso\" (click)=\"location('cliente-caso')\">Registrar Caso</a>\n          <a *ngIf=\"profile == 'abogado'\" class=\"nav-item nav-link main registrarCaso\" (click)=\"location('abogado-buscar-caso')\">Buscar Caso</a>\n          <a *ngIf=\"profile == 'cliente'\" class=\"nav-item nav-link main registrarCaso\" (click)=\"location('cliente-buscar-caso')\">Consultar Caso</a>\n        </div>\n      </div>\n    </nav>\n\n  </ion-header>\n\n  <ion-content [fullscreen]=\"true\">\n\n    <ion-router-outlet></ion-router-outlet>\n\n  </ion-content>\n\n</ion-app>\n\n<div class=\"modal modalConfirm\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\"></h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\"></div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary modal-continuar\">Continuar</button>\n        <button type=\"button\" class=\"btn btn-secondary modal-cancelar\" data-dismiss=\"modal\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Y4YP":
/*!*************************************************************************!*\
  !*** ./src/app/cliente-detalle-abogado/cliente-detalle-abogado.page.ts ***!
  \*************************************************************************/
/*! exports provided: ClienteDetalleAbogadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalleAbogadoPage", function() { return ClienteDetalleAbogadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_detalle_abogado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-detalle-abogado.page.html */ "nKvv");
/* harmony import */ var _cliente_detalle_abogado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-detalle-abogado.page.scss */ "1am6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ClienteDetalleAbogadoPage = class ClienteDetalleAbogadoPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
    }
    ngOnInit() {
        //  Obtener detalle del abogado
        this.getDataAbogado();
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    location(ruta) {
        this.router.navigateByUrl(ruta);
    }
    /************************************************************************* */
    /**
     * Obtener detalle del abogado
     */
    getDataAbogado() {
        var _this = this;
        var caso = JSON.parse(sessionStorage.getItem('caso'));
        let getDataAbogados = new FormData();
        getDataAbogados.append("email", caso.abogado);
        _this.postModel("getDataAbogados", getDataAbogados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            $("#field1").html(result[0].fullname);
            $("#field2").html(result[0].genderDesc);
            $("#field3").html(result[0].identification);
            $("#field4").html(result[0].address);
            $("#field5").html(result[0].document1Desc);
            $("#field6").html(result[0].university);
            $("#field7").html(result[0].license);
            $("#field8").html(result[0].experienceDesc);
            $("#field9").html(result[0].years);
            $("#field10").html(result[0].investigateDesc);
        });
    }
    /************************************************************************* */
    /**
     * Aceptar abogado
     */
    aceptarAbogado() {
        var _this = this;
        var caso = JSON.parse(sessionStorage.getItem('caso'));
        let procesosUpdate = new FormData();
        procesosUpdate.append("email", caso.abogado);
        procesosUpdate.append("idCaso", caso.id);
        procesosUpdate.append("active", "3");
        _this.postModel("procesosUpdate", procesosUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            this.msg = "Se ha notificado al abogado la continuación del proceso";
            $(".success").show();
            //  Volver a la consulta de casos
            setTimeout(function () {
                _this.location("cliente-buscar-caso");
                $(".success").hide();
            }, 3000);
        });
    }
};
ClienteDetalleAbogadoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ClienteDetalleAbogadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cliente-detalle-abogado',
        template: _raw_loader_cliente_detalle_abogado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_detalle_abogado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClienteDetalleAbogadoPage);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _abogado_profile_abogado_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abogado-profile/abogado-profile.page */ "DRCg");
/* harmony import */ var _cliente_profile_cliente_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cliente-profile/cliente-profile.page */ "0rSQ");
/* harmony import */ var _abogado_detalle_caso_abogado_detalle_caso_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abogado-detalle-caso/abogado-detalle-caso.page */ "sr/y");
/* harmony import */ var _cliente_detalle_caso_cliente_detalle_caso_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cliente-detalle-caso/cliente-detalle-caso.page */ "iK7f");
/* harmony import */ var _cliente_detalle_abogado_cliente_detalle_abogado_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente-detalle-abogado/cliente-detalle-abogado.page */ "Y4YP");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _cliente_profile_cliente_profile_page__WEBPACK_IMPORTED_MODULE_9__["ClienteProfilePage"],
            _abogado_profile_abogado_profile_page__WEBPACK_IMPORTED_MODULE_8__["AbogadoProfilePage"],
            _abogado_detalle_caso_abogado_detalle_caso_page__WEBPACK_IMPORTED_MODULE_10__["AbogadoDetalleCasoPage"],
            _cliente_detalle_caso_cliente_detalle_caso_page__WEBPACK_IMPORTED_MODULE_11__["ClienteDetalleCasoPage"],
            _cliente_detalle_abogado_cliente_detalle_abogado_page__WEBPACK_IMPORTED_MODULE_12__["ClienteDetalleAbogadoPage"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "iK7f":
/*!*******************************************************************!*\
  !*** ./src/app/cliente-detalle-caso/cliente-detalle-caso.page.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteDetalleCasoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalleCasoPage", function() { return ClienteDetalleCasoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_detalle_caso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-detalle-caso.page.html */ "oHmt");
/* harmony import */ var _cliente_detalle_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-detalle-caso.page.scss */ "C0wz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ClienteDetalleCasoPage = class ClienteDetalleCasoPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.msg = "";
        this.error = 0;
    }
    ngOnInit() {
        //  Obtener detalle del caso
        this.getDataCaso();
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    location(ruta) {
        this.router.navigateByUrl(ruta);
    }
    /************************************************************************* */
    /**
     * Obtener detalle del caso
     */
    getDataCaso() {
        var caso = JSON.parse(sessionStorage.getItem('caso'));
        $("#field1").html(caso.field1Desc);
        $("#field2").html(caso.field2Desc + " " + caso.field3);
        $("#field4").html(caso.field4Desc + " " + caso.field5);
        $("#field6").html(caso.field6);
        $("#field7").html(caso.field7Desc);
    }
};
ClienteDetalleCasoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ClienteDetalleCasoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cliente-detalle-caso',
        template: _raw_loader_cliente_detalle_caso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_detalle_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClienteDetalleCasoPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nKvv":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente-detalle-abogado/cliente-detalle-abogado.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n    \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n    \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field1\" class=\"form-label\">\n          Nombre Completo\n        </label>\n        <p id=\"field1\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field2\" class=\"form-label\">\n          Genero\n        </label>\n        <p id=\"field2\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field3\" class=\"form-label\">\n          Cédula\n        </label>\n        <p id=\"field3\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field4\" class=\"form-label\">\n          Dirección\n        </label>\n        <p id=\"field4\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field5\" class=\"form-label\">\n          Abogado con\n        </label>\n        <p id=\"field5\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field6\" class=\"form-label\">\n          Universidad de egreso en Derecho\n        </label>\n        <p id=\"field6\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field7\" class=\"form-label\">\n          Número de tarjeta o licencia\n        </label>\n        <p id=\"field7\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field8\" class=\"form-label\">\n          Cuenta con experiencia laboral en el ejercicio del Derecho\n        </label>\n        <p id=\"field8\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field9\" class=\"form-label\">\n          Años de experiencia\n        </label>\n        <p id=\"field9\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field10\" class=\"form-label\">\n          Cuenta con alguna investigación disciplinaria por parte del Consejo Superior de la Judicatura\n        </label>\n        <p id=\"field10\"></p>\n      </div>\n\n      <div class=\"mb-3\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"aceptarAbogado()\">Aceptar abogado</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "nvRe":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/abogado-profile/abogado-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form id=\"formAbogado\">\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n      </div>\n      <label>\n        <p class=\"label-txt\">Nombre completo (*):</p>\n        <input type=\"text\" class=\"input\" id=\"fullname\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Genero (*):</p>\n        <select class=\"input\" id=\"gender\">\n          <option value=\"1\">Femenino</option>\n          <option value=\"2\">Masculino</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Cedula (*):</p>\n        <input type=\"number\" class=\"input\" id=\"identification\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Dirección (*):</p>\n        <input type=\"text\" class=\"input\" id=\"address\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">¿ Es usted abogado con ? (*):</p>\n        <select class=\"input\" id=\"document1\">\n          <option value=\"1\">Licencia temporal</option>\n          <option value=\"2\">Tarjeta profesional</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Universidad de egreso en Derecho:</p>\n        <input type=\"text\" class=\"input\" id=\"university\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Número de tarjeta o licencia (*):</p>\n        <input type=\"number\" class=\"input\" id=\"license\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">¿ Cuenta con experiencia laboral en el ejercicio del Derecho ? (*):</p>\n        <select class=\"input\" id=\"experience\" (change)=\"changeField('experience',$event)\">\n          <option value=\"1\">No</option>\n          <option value=\"2\">Si</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label class=\"years\">\n        <p class=\"label-txt\">¿ Cuantos años ?</p>\n        <input type=\"text\" class=\"input\" id=\"years\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">¿ Cuenta con alguna investigación disciplinaria por parte del Consejo Superior de la Judicatura ? (*):</p>\n        <select class=\"input\" id=\"investigate\">\n          <option value=\"1\">No</option>\n          <option value=\"2\">Si</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">¿ Cuál de las siguientes opciones se ajusta a sus gustos en las ramas del derecho o en cual le gustaría desempeñar laboralmente ? (*):</p>\n        <select class=\"input\" id=\"pleasures\" (change)=\"changeField('pleasures',$event)\">\n          <option value=\"1\">Administrativo</option>\n          <option value=\"2\">Ambiental</option>\n          <option value=\"3\">Civil</option>\n          <option value=\"4\">Comercial</option>\n          <option value=\"5\">Derechos humanos</option>\n          <option value=\"6\">Digital</option>\n          <option value=\"7\">Familia</option>\n          <option value=\"8\">Laboral</option>\n          <option value=\"9\">Otro</option>\n          <option value=\"10\">Penal</option>\n          <option value=\"11\">Tributario</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label class=\"pleasures_other\">\n        <p class=\"label-txt\">¿ Cuál ?:</p>\n        <input type=\"text\" class=\"input\" id=\"pleasures_other\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">¿ Cuanto es el promedio que cobra usted por una asesoría juridica (Solo asesoría) ? (*):</p>\n        <input type=\"number\" class=\"input\" id=\"price\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Subir hoja de vida (*):</p>\n        <input type=\"file\" class=\"input\" id=\"cv\" (change)=\"changeField('cv',$event)\">\n        <a *ngIf=\"this.pathFile\" target=\"_blank\" href=\"{{this.pathFile}}\">Visualizar Hoja de Vida</a>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <button class=\"register\" (click)=\"register()\">Actualizar</button>\n\n    </form>\n\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "oHmt":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente-detalle-caso/cliente-detalle-caso.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n    \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n    \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"field1\" class=\"form-label\">\n          ¿Con quién tiene problemas?\n        </label>\n        <p id=\"field1\"></p>\n      </div>\n  \n      <div class=\"mb-3\">\n        <label for=\"field2\" class=\"form-label\">\n          ¿Sobre que trata tu caso?\n        </label>\n        <p id=\"field2\"></p>\n      </div>\n  \n      <div class=\"mb-3\">\n        <label for=\"field4\" class=\"form-label\">\n          ¿Cuál es tu problema?\n        </label>\n        <p id=\"field4\"></p>\n      </div>\n  \n      <div class=\"mb-3\">\n        <label for=\"field6\" class=\"form-label\">\n          Cuentanos tu caso\n        </label>\n        <p id=\"field6\"></p>\n      </div>\n  \n      <div class=\"mb-3\">\n        <label for=\"field7\" class=\"form-label\">\n          ¿Ya inicio un proceso ante un juzgado o entidad  para su solución?\n        </label>\n        <p id=\"field7\"></p>\n      </div>    \n\n    </form>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "qAef":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente-profile/cliente-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form id=\"formCliente\">\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n      </div>\n      <label>\n        <p class=\"label-txt\">Nombres (*):</p>\n        <input type=\"text\" class=\"input\" id=\"nameCliente\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Apellidos (*):</p>\n        <input type=\"text\" class=\"input\" id=\"lastnameCliente\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Tipo de identificación (*):</p>\n        <select class=\"input\" id=\"idTypeCliente\">\n          <option value=\"1\">CC</option>\n          <option value=\"2\">CE</option>\n          <option value=\"3\">Pasaporte</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Identificación (*):</p>\n        <input type=\"number\" class=\"input\" id=\"identificationCliente\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Correo eléctronico(*):</p>\n        <input type=\"email\" class=\"input\" id=\"emailCliente\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Usuario(*):</p>\n        <input type=\"text\" class=\"input\" id=\"userCliente\" disabled>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Contraseña(*):</p>\n        <input type=\"password\" class=\"input\" id=\"passwordCliente\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      <label>\n        <p class=\"label-txt\">Teléfono de contacto(*):</p>\n        <input type=\"text\" class=\"input\" id=\"phone\">\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <button class=\"registerCliente\" (click)=\"register()\">Actualizar</button>\n\n    </form>\n\n  </div>\n\n  <div class=\"informacion success alert-primary\" role=\"alert\">\n    {{this.msg}}\n  </div>\n\n  <div class=\"informacion warning alert-warning\" role=\"alert\">\n    {{this.msg}}\n  </div>\n\n  <div class=\"informacion error alert-danger\" role=\"alert\">\n    {{this.msg}}\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "sr/y":
/*!*******************************************************************!*\
  !*** ./src/app/abogado-detalle-caso/abogado-detalle-caso.page.ts ***!
  \*******************************************************************/
/*! exports provided: AbogadoDetalleCasoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoDetalleCasoPage", function() { return AbogadoDetalleCasoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_abogado_detalle_caso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./abogado-detalle-caso.page.html */ "R8bi");
/* harmony import */ var _abogado_detalle_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abogado-detalle-caso.page.scss */ "F/0N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AbogadoDetalleCasoPage = class AbogadoDetalleCasoPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
    }
    ngOnInit() {
        //  Obtener detalle del caso
        this.getDataCaso();
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    location(ruta) {
        window.location = ruta;
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
            _this.aplicarCaso();
            $(".modalConfirm").modal("toggle");
        });
    }
    /************************************************************************* */
    /**
     * Obtener detalle del caso
     */
    getDataCaso() {
        var caso = JSON.parse(sessionStorage.getItem('caso'));
        $("#field1").html(caso.field1Desc);
        $("#field2").html(caso.field2Desc + " " + caso.field3);
        $("#field4").html(caso.field4Desc + " " + caso.field5);
        $("#field6").html(caso.field6);
        $("#field7").html(caso.field7Desc);
    }
    /***************************************************************************** */
    /**
     * Aplicar al caso
     */
    aplicarCaso() {
        //  Variables iniciales
        var _this = this;
        var caso = JSON.parse(sessionStorage.getItem('caso'));
        //  Validar si el usuario ya aplicó a un caso
        let getProceso = new FormData();
        getProceso.append("email", sessionStorage.getItem("email"));
        getProceso.append("idCaso", caso.id);
        this.postModel("getProceso", getProceso).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
            if (result.length > 0) {
                this.msg = "Usted ya aplicó al proceso anteriormente";
                $(".warning").show();
                setTimeout(function () {
                    $(".warning").hide();
                }, 3000);
            }
            else {
                //  Registrar el proceso
                let createProceso = new FormData();
                createProceso.append("email", sessionStorage.getItem("email"));
                createProceso.append("idCaso", caso.id);
                this.postModel("createProceso", createProceso).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                    this.msg = "Aplicó al caso correctamente";
                    $(".success").show();
                    //  Volver a la busqueda de casos
                    setTimeout(function () {
                        _this.location("abogado-buscar-caso");
                        $(".success").hide();
                    }, 3000);
                });
            }
        });
    }
};
AbogadoDetalleCasoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AbogadoDetalleCasoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-abogado-detalle-caso',
        template: _raw_loader_abogado_detalle_caso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abogado_detalle_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AbogadoDetalleCasoPage);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'abogado-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | abogado-profile-abogado-profile-module */ "abogado-profile-abogado-profile-module").then(__webpack_require__.bind(null, /*! ./abogado-profile/abogado-profile.module */ "oYJW")).then(m => m.AbogadoProfilePageModule)
    },
    {
        path: 'recovery',
        loadChildren: () => __webpack_require__.e(/*! import() | recovery-recovery-module */ "recovery-recovery-module").then(__webpack_require__.bind(null, /*! ./recovery/recovery.module */ "rtaG")).then(m => m.RecoveryPageModule)
    },
    {
        path: 'cliente-caso',
        loadChildren: () => __webpack_require__.e(/*! import() | cliente-caso-cliente-caso-module */ "cliente-caso-cliente-caso-module").then(__webpack_require__.bind(null, /*! ./cliente-caso/cliente-caso.module */ "NApd")).then(m => m.ClienteCasoPageModule)
    },
    {
        path: 'cliente-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | cliente-profile-cliente-profile-module */ "cliente-profile-cliente-profile-module").then(__webpack_require__.bind(null, /*! ./cliente-profile/cliente-profile.module */ "h6/8")).then(m => m.ClienteProfilePageModule)
    },
    {
        path: 'abogado-buscar-caso',
        loadChildren: () => __webpack_require__.e(/*! import() | abogado-buscar-caso-abogado-buscar-caso-module */ "abogado-buscar-caso-abogado-buscar-caso-module").then(__webpack_require__.bind(null, /*! ./abogado-buscar-caso/abogado-buscar-caso.module */ "AxDS")).then(m => m.AbogadoBuscarCasoPageModule)
    },
    {
        path: 'abogado-detalle-caso',
        loadChildren: () => __webpack_require__.e(/*! import() | abogado-detalle-caso-abogado-detalle-caso-module */ "abogado-detalle-caso-abogado-detalle-caso-module").then(__webpack_require__.bind(null, /*! ./abogado-detalle-caso/abogado-detalle-caso.module */ "C/Zv")).then(m => m.AbogadoDetalleCasoPageModule)
    },
    {
        path: 'notificaciones',
        loadChildren: () => __webpack_require__.e(/*! import() | notificaciones-notificaciones-module */ "notificaciones-notificaciones-module").then(__webpack_require__.bind(null, /*! ./notificaciones/notificaciones.module */ "nMF9")).then(m => m.NotificacionesPageModule)
    },
    {
        path: 'cliente-buscar-caso',
        loadChildren: () => __webpack_require__.e(/*! import() | cliente-buscar-caso-cliente-buscar-caso-module */ "cliente-buscar-caso-cliente-buscar-caso-module").then(__webpack_require__.bind(null, /*! ./cliente-buscar-caso/cliente-buscar-caso.module */ "qe59")).then(m => m.ClienteBuscarCasoPageModule)
    },
    {
        path: 'cliente-detalle-caso',
        loadChildren: () => __webpack_require__.e(/*! import() | cliente-detalle-caso-cliente-detalle-caso-module */ "cliente-detalle-caso-cliente-detalle-caso-module").then(__webpack_require__.bind(null, /*! ./cliente-detalle-caso/cliente-detalle-caso.module */ "NddQ")).then(m => m.ClienteDetalleCasoPageModule)
    },
    {
        path: 'cliente-detalle-abogado',
        loadChildren: () => __webpack_require__.e(/*! import() | cliente-detalle-abogado-cliente-detalle-abogado-module */ "cliente-detalle-abogado-cliente-detalle-abogado-module").then(__webpack_require__.bind(null, /*! ./cliente-detalle-abogado/cliente-detalle-abogado.module */ "bLLv")).then(m => m.ClienteDetalleAbogadoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification {\n  color: white;\n  text-decoration: none;\n  padding: 15px 26px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n}\n\n.notification .badge {\n  position: absolute;\n  top: -10px;\n  right: 32px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  background: red;\n  color: white;\n}\n\n#container {\n  top: 15%;\n}\n\na:hover {\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4IDI2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24gLmJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICByaWdodDogMzJweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICB0b3A6MTUlO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map