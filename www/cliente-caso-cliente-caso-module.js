(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-caso-cliente-caso-module"],{

/***/ "88Xf":
/*!*****************************************************!*\
  !*** ./src/app/cliente-caso/cliente-caso.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #C5E1A5;\n}\n\nform {\n  width: 60%;\n  margin: 60px auto;\n  background: #efefef;\n  padding: 12% 120px 80px 120px;\n  text-align: center;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n}\n\nlabel {\n  display: block;\n  position: relative;\n  margin: 40px 0px;\n}\n\n.label-txt {\n  position: absolute;\n  top: -1.6em;\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 0.8em;\n  letter-spacing: 1px;\n  color: #787878;\n  transition: ease 0.3s;\n}\n\n.input {\n  width: 100%;\n  padding: 10px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.line-box {\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background: #BCBCBC;\n}\n\n.line {\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0B1B3B;\n  transition: ease 0.6s;\n}\n\n.input:focus + .line-box .line {\n  width: 100%;\n}\n\n.label-active {\n  top: -3em;\n}\n\nbutton {\n  display: inline-block;\n  padding: 12px 24px;\n  background: gainsboro;\n  font-weight: bold;\n  color: #787878;\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: ease 0.3s;\n}\n\nbutton:hover {\n  background: #0B1B3B;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudGUtY2Fzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEsMENBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxTQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFHRiIsImZpbGUiOiJjbGllbnRlLWNhc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjQzVFMUE1O1xyXG59XHJcbmZvcm0ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICBwYWRkaW5nOiAxMiUgMTIwcHggODBweCAxMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA0MHB4IDBweDtcclxufVxyXG4ubGFiZWwtdHh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMS42ZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogcmdiKDEyMCwxMjAsMTIwKTtcclxuICB0cmFuc2l0aW9uOiBlYXNlIC4zcztcclxufVxyXG4uaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNCQ0JDQkM7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogIzBCMUIzQjtcclxuICB0cmFuc2l0aW9uOiBlYXNlIC42cztcclxufVxyXG5cclxuLmlucHV0OmZvY3VzICsgLmxpbmUtYm94IC5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxhYmVsLWFjdGl2ZSB7XHJcbiAgdG9wOiAtM2VtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIyMCwyMjAsMjIwKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDEyMCwxMjAsMTIwKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGVhc2UgLjNzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwQjFCM0I7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "A7EW":
/*!*************************************************************!*\
  !*** ./src/app/cliente-caso/cliente-caso-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ClienteCasoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCasoPageRoutingModule", function() { return ClienteCasoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cliente_caso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-caso.page */ "WJHI");




const routes = [
    {
        path: '',
        component: _cliente_caso_page__WEBPACK_IMPORTED_MODULE_3__["ClienteCasoPage"]
    }
];
let ClienteCasoPageRoutingModule = class ClienteCasoPageRoutingModule {
};
ClienteCasoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteCasoPageRoutingModule);



/***/ }),

/***/ "HzQg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente-caso/cliente-caso.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <div class=\"informacion success alert-primary\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion warning alert-warning\" role=\"alert\">\n        {{this.msg}}\n      </div>\n  \n      <div class=\"informacion error alert-danger\" role=\"alert\">\n        {{this.msg}}\n      </div>\n\n      <!--  Campo 1 -->\n\n      <label>\n        <p class=\"label-txt\">¿Con quién tiene problemas? (*):</p>\n        <select class=\"input\" id=\"casoField1\" (change)=\"changeField('casoField1')\">\n          <option value=\"\">- Seleccionar -</option>\n          <option value=\"1\">El estado (Toda entidad pública u organismo adscrito a los gobiernos nacionales regionales y/o locales)</option>\n          <option value=\"2\">Un particular o empresa privada (Tu jefe, un amigo, tu familia, conocidos, tu jefe y empresas que son privadas)</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 2 -->\n      \n      <label>\n        <p class=\"label-txt\">¿Sobre que trata tu caso? (*):</p>\n        <select class=\"input\" id=\"casoField2\" (change)=\"changeField('casoField2')\">\n          <option value=\"\">- Seleccionar -</option>\n          <option value=\"1\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 1\">Con tu empleo en una entidad pública</option>\n          <option value=\"2\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Con tus impuestos</option>\n          <option value=\"3\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Con tu negocio</option>\n          <option value=\"4\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Con un amigo o conocido</option>\n          <option value=\"5\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 1\">Reparación de daños y perjuicios causados por el estado</option>\n          <option value=\"6\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Tu familia</option>\n          <option value=\"7\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Tu jefe o empresa</option>\n          <option value=\"8\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Vulneración a tu salud</option>\n          <option value=\"9\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 1\">Vulneración de derechos fundamentales</option>\n          <option value=\"10\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 1\">Vulneración de derechos por el estado</option>\n          <option value=\"11\" *ngIf=\"casoField2Vali1 == 1 && casoField2Vali2 == 2\">Un delito o temas con policía</option>\n          <option value=\"12\" *ngIf=\"casoField2Vali1 == 1\">Otro</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 3 -->\n\n      <label class=\"otro casoField3\">\n        <p class=\"label-txt\">Cual:</p>\n        <input type=\"text\" class=\"input\" id=\"casoField3\" disabled>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 4 -->\n      \n      <label>\n        <p class=\"label-txt\">¿Cuál es tu problema? (*):</p>\n        <select class=\"input\" id=\"casoField4\" (change)=\"changeField('casoField4')\" multiple>\n          <option value=\"\">- Seleccionar -</option>\n          <option value=\"1\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 2\">Acoso laboral</option>\n          <option value=\"2\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Alimentos a hijos o conyugues</option>\n          <option value=\"3\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Capitulaciones</option>\n          <option value=\"4\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 5\">Con tu EPS</option>\n          <option value=\"5\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 3\">Contratos</option>\n          <option value=\"6\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 4\">Declaración de renta</option>\n          <option value=\"7\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 5\">Deterioro de tu salud a causa de la responsabilidad médica</option>\n          <option value=\"8\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 2\">Despido sin justa causa</option>\n          <option value=\"9\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 3\">Dineros adeudados</option>\n          <option value=\"10\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Divorcios</option>\n          <option value=\"11\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Emancipación</option>\n          <option value=\"12\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Herencias</option>\n          <option value=\"13\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Inpugnación de paternidad</option>\n          <option value=\"14\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Matrimonio</option>\n          <option value=\"15\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 5\">Omisión médica</option>\n          <option value=\"16\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 2\">Prestaciones sociales (Prima, vacaciones, cesantías, etc)</option>\n          <option value=\"17\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 4\">Problemas de deudas impuestos</option>\n          <option value=\"18\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 2\">Saldos y/o pagos adeudados por el empleador</option>\n          <option value=\"19\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Seguridad social (Salud, Pensión ARL)</option>\n          <option value=\"20\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 3\">Tus bienes</option>\n          <option value=\"21\" *ngIf=\"casoField4Vali1 == 1 && casoField4Vali2 == 1\">Violencia intrafamiliar</option>\n          <option value=\"22\" *ngIf=\"casoField2Vali1 == 1\">Otro</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 5 -->\n\n      <label class='otro casoField5'>\n        <p class=\"label-txt\">Cual:</p>\n        <input type=\"text\" class=\"input\" id=\"casoField5\" disabled>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 6 -->\n\n      <label>\n        <p class=\"label-txt\">Cuentanos de tu caso (*):</p>\n        <textarea class=\"input\" id=\"casoField6\"></textarea>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n\n      <!--  Campo 7 -->\n\n      <label>\n        <p class=\"label-txt\">¿Ya se inició un proceso ante un juzgado o entidad para su solución? (*):</p>\n        <select class=\"input\" id=\"casoField7\">\n          <option value=\"\">- Seleccionar -</option>\n          <option value=\"1\">Si</option>\n          <option value=\"2\">No</option>\n        </select>\n        <div class=\"line-box\">\n          <div class=\"line\"></div>\n        </div>\n      </label>\n      \n      <button (click)=\"modalConfirmar('Registrar caso','¿ Esta seguro de continuar con la información diligenciada ?')\">Registrar Caso</button>\n\n    </form>\n\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "NApd":
/*!*****************************************************!*\
  !*** ./src/app/cliente-caso/cliente-caso.module.ts ***!
  \*****************************************************/
/*! exports provided: ClienteCasoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCasoPageModule", function() { return ClienteCasoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cliente_caso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-caso-routing.module */ "A7EW");
/* harmony import */ var _cliente_caso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-caso.page */ "WJHI");







let ClienteCasoPageModule = class ClienteCasoPageModule {
};
ClienteCasoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_caso_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteCasoPageRoutingModule"]
        ],
        declarations: [_cliente_caso_page__WEBPACK_IMPORTED_MODULE_6__["ClienteCasoPage"]]
    })
], ClienteCasoPageModule);



/***/ }),

/***/ "WJHI":
/*!***************************************************!*\
  !*** ./src/app/cliente-caso/cliente-caso.page.ts ***!
  \***************************************************/
/*! exports provided: ClienteCasoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCasoPage", function() { return ClienteCasoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_caso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-caso.page.html */ "HzQg");
/* harmony import */ var _cliente_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-caso.page.scss */ "88Xf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ClienteCasoPage = class ClienteCasoPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
        this.casoField2Vali1 = 0;
        this.casoField2Vali2 = 0;
        this.casoField4Vali1 = 0;
        this.casoField4Vali2 = 0;
    }
    ngOnInit() {
        //  Ocultar campos con clase 'otro'
        $(".otro").hide();
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
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
     * Modal confirmar
     */
    modalConfirmar(titulo, body) {
        var _this = this;
        $(".modal-title").html(titulo);
        $(".modal-body").html(body);
        $(".modalConfirm").modal("toggle");
        $(".modalContinuar").unbind();
        $(".modal-continuar").click(function () {
            _this.casoRegister();
            $(".modalConfirm").modal("toggle");
        });
    }
    /************************************************************************************** */
    /**
     * Change en los campos
     */
    changeField(field) {
        this.error = 0;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        switch (field) {
            /*----------------------------------------------------------------*/
            case "casoField1":
                //  Activar o desactivar campos dependientes
                if ($("#" + field).val())
                    this.casoField2Vali1 = 1;
                else
                    this.casoField2Vali1 = 0;
                //  Activar o desactivar opciones campo 2
                if ($("#" + field).val() == 0)
                    this.casoField2Vali2 = 0;
                if ($("#" + field).val() == 1)
                    this.casoField2Vali2 = 1;
                if ($("#" + field).val() == 2)
                    this.casoField2Vali2 = 2;
                break;
            /*----------------------------------------------------------------*/
            case "casoField2":
                this.casoField4Vali1 = 0;
                this.casoField4Vali2 = 0;
                //  Activar o desactivar el campo 3
                if ($("#" + field).val() == 12) {
                    $(".casoField3").show();
                    $("#casoField3").prop("disabled", false);
                }
                else {
                    $(".casoField3").hide();
                    $("#casoField3").val("");
                    $("#casoField3").prop("disabled", true);
                }
                //  Activar o desactivar campos dependientes
                if ($("#" + field).val())
                    this.casoField4Vali1 = 1;
                else
                    this.casoField4Vali1 = 0;
                //  Activar o desactivar opciones campo 4
                if ($("#" + field).val() == 6)
                    this.casoField4Vali2 = 1;
                if ($("#" + field).val() == 7)
                    this.casoField4Vali2 = 2;
                if ($("#" + field).val() == 4)
                    this.casoField4Vali2 = 3;
                if ($("#" + field).val() == 2)
                    this.casoField4Vali2 = 4;
                if ($("#" + field).val() == 8)
                    this.casoField4Vali2 = 5;
                break;
            /*----------------------------------------------------------------*/
            case "casoField4":
                //  Activar o desactivar el campo 5
                if ($("#" + field).val() == 22) {
                    $(".casoField5").show();
                    $("#casoField5").prop("disabled", false);
                }
                else {
                    $(".casoField5").hide();
                    $("#casoField5").val("");
                    $("#casoField5").prop("disabled", true);
                }
                //  Solo permitir dos opciones
                if ($("#casoField4 option:selected").length > 2)
                    $("#casoField4").val("");
                break;
        }
    }
    /************************************************************************************* */
    /**
     *  Registrar caso
     */
    casoRegister() {
        console.log(1);
        var _this = this;
        this.error = 0;
        $(".error").hide();
        $(".success").hide();
        $(".warning").hide();
        //  Calidar campos obligatorios
        if (!$("#casoField1").val() || !$("#casoField2").val() || $("#casoField4").val().length == 0 || $("#casoField6").val().length == 0 || !$("#casoField7").val()) {
            this.error = 1;
            this.msg = "Faltan campos que son obligatorios por diligenciar";
        }
        //  Registrar caso
        if (this.error == 0) {
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
            this.postModel("casosUpdate", casosUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
                this.msg = "Se registró el caso correctamente";
                $(".success").show();
                setTimeout(function () {
                    $(".success").hide();
                    _this.location('home');
                }, 3000);
            });
        }
        //  Mostrar errores
        if (this.error == 1)
            $(".error").show();
    }
};
ClienteCasoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ClienteCasoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cliente-caso',
        template: _raw_loader_cliente_caso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClienteCasoPage);



/***/ })

}]);
//# sourceMappingURL=cliente-caso-cliente-caso-module.js.map