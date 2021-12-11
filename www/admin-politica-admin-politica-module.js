(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-politica-admin-politica-module"],{

/***/ "Ao0A":
/*!*********************************************************!*\
  !*** ./src/app/admin-politica/admin-politica.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminPoliticaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPoliticaPageModule", function() { return AdminPoliticaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_politica_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-politica-routing.module */ "B6H5");
/* harmony import */ var _admin_politica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-politica.page */ "Ns4Z");







let AdminPoliticaPageModule = class AdminPoliticaPageModule {
};
AdminPoliticaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_politica_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPoliticaPageRoutingModule"]
        ],
        declarations: [_admin_politica_page__WEBPACK_IMPORTED_MODULE_6__["AdminPoliticaPage"]]
    })
], AdminPoliticaPageModule);



/***/ }),

/***/ "B6H5":
/*!*****************************************************************!*\
  !*** ./src/app/admin-politica/admin-politica-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminPoliticaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPoliticaPageRoutingModule", function() { return AdminPoliticaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_politica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-politica.page */ "Ns4Z");




const routes = [
    {
        path: '',
        component: _admin_politica_page__WEBPACK_IMPORTED_MODULE_3__["AdminPoliticaPage"]
    }
];
let AdminPoliticaPageRoutingModule = class AdminPoliticaPageRoutingModule {
};
AdminPoliticaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPoliticaPageRoutingModule);



/***/ }),

/***/ "Ns4Z":
/*!*******************************************************!*\
  !*** ./src/app/admin-politica/admin-politica.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminPoliticaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPoliticaPage", function() { return AdminPoliticaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_politica_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-politica.page.html */ "sI3S");
/* harmony import */ var _admin_politica_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-politica.page.scss */ "VooF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








let AdminPoliticaPage = class AdminPoliticaPage {
    constructor(http) {
        this.http = http;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.contenido = "";
        //  Consultar contenido
        this.consultar();
    }
    ngOnInit() { }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /************************************************************************************* */
    //  Consultar contenido
    /************************************************************************************* */
    consultar() {
        //  Variables iniciales
        var _this = this;
        //  Consultar contenido
        let apiAdminGetContenido = new FormData();
        apiAdminGetContenido.append("tipo", "politica");
        _this.postModel("apiAdminGetContenido", apiAdminGetContenido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            if (result.length > 0)
                _this.contenido = result[0].contenido;
        });
    }
    /************************************************************************************* */
    //  Actualizar contenido
    /************************************************************************************* */
    actualizar() {
        //  Variables iniciales
        var _this = this;
        //  Actualizar contenido
        let apiAdminUpdate = new FormData();
        apiAdminUpdate.append("tipo", "politica");
        apiAdminUpdate.append("contenido", $("#contenido").val());
        _this.postModel("apiAdminUpdate", apiAdminUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            $(".msg").css("color", "green");
            $(".msg").html("Se actualizó el contenido correctamente.");
            $(".msg").show();
            setTimeout(function () {
                $(".msg").hide();
            }, 3000);
        });
    }
};
AdminPoliticaPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AdminPoliticaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-politica',
        template: _raw_loader_admin_politica_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_politica_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPoliticaPage);



/***/ }),

/***/ "VooF":
/*!*********************************************************!*\
  !*** ./src/app/admin-politica/admin-politica.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  width: 100%;\n}\n\nh3 {\n  margin-top: 3%;\n}\n\n#tableDT {\n  margin-top: 8%;\n}\n\n.addBtn {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.btnDelete {\n  margin-left: 2%;\n}\n\n.msg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLXBvbGl0aWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4tcG9saXRpY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbn1cclxuXHJcbiN0YWJsZURUe1xyXG4gICAgbWFyZ2luLXRvcDo4JTtcclxufVxyXG5cclxuLmFkZEJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5EZWxldGV7XHJcbiAgICBtYXJnaW4tbGVmdDoyJTtcclxufVxyXG5cclxuLm1zZ3tcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "sI3S":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-politica/admin-politica.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <h3>Administrar Política y privacidad</h3>\n\n  <div>\n    <textarea id=\"contenido\" rows=\"10\">{{contenido}}</textarea>\n  </div>\n\n  <p class=\"msg\"></p>\n\n  <button class=\"btn btn-primary addBtn\" type=\"submit\" (click)=\"actualizar()\">Actualizar información</button>\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=admin-politica-admin-politica-module.js.map