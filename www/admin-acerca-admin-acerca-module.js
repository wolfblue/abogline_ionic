(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-acerca-admin-acerca-module"],{

/***/ "5RX3":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-acerca/admin-acerca.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <h3>Administrar Acerca de</h3>\n\n  <div>\n    <textarea id=\"contenido\" rows=\"10\">{{contenido}}</textarea>\n  </div>\n\n  <p class=\"msg\"></p>\n\n  <button class=\"btn btn-primary addBtn\" type=\"submit\" (click)=\"actualizar()\">Actualizar información</button>\n\n</div>");

/***/ }),

/***/ "LU43":
/*!*************************************************************!*\
  !*** ./src/app/admin-acerca/admin-acerca-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminAcercaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAcercaPageRoutingModule", function() { return AdminAcercaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_acerca_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-acerca.page */ "iBfW");




const routes = [
    {
        path: '',
        component: _admin_acerca_page__WEBPACK_IMPORTED_MODULE_3__["AdminAcercaPage"]
    }
];
let AdminAcercaPageRoutingModule = class AdminAcercaPageRoutingModule {
};
AdminAcercaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminAcercaPageRoutingModule);



/***/ }),

/***/ "TNpB":
/*!*****************************************************!*\
  !*** ./src/app/admin-acerca/admin-acerca.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  width: 100%;\n}\n\nh3 {\n  margin-top: 3%;\n}\n\n#tableDT {\n  margin-top: 8%;\n}\n\n.addBtn {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.btnDelete {\n  margin-left: 2%;\n}\n\n.msg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLWFjZXJjYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLWFjZXJjYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDozJTtcclxufVxyXG5cclxuI3RhYmxlRFR7XHJcbiAgICBtYXJnaW4tdG9wOjglO1xyXG59XHJcblxyXG4uYWRkQnRue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkRlbGV0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OjIlO1xyXG59XHJcblxyXG4ubXNne1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59Il19 */");

/***/ }),

/***/ "iBfW":
/*!***************************************************!*\
  !*** ./src/app/admin-acerca/admin-acerca.page.ts ***!
  \***************************************************/
/*! exports provided: AdminAcercaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAcercaPage", function() { return AdminAcercaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_acerca_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-acerca.page.html */ "5RX3");
/* harmony import */ var _admin_acerca_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-acerca.page.scss */ "TNpB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








let AdminAcercaPage = class AdminAcercaPage {
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
        apiAdminGetContenido.append("tipo", "acerca");
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
        apiAdminUpdate.append("tipo", "acerca");
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
AdminAcercaPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AdminAcercaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-acerca',
        template: _raw_loader_admin_acerca_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_acerca_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminAcercaPage);



/***/ }),

/***/ "mC0n":
/*!*****************************************************!*\
  !*** ./src/app/admin-acerca/admin-acerca.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminAcercaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAcercaPageModule", function() { return AdminAcercaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_acerca_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-acerca-routing.module */ "LU43");
/* harmony import */ var _admin_acerca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-acerca.page */ "iBfW");







let AdminAcercaPageModule = class AdminAcercaPageModule {
};
AdminAcercaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_acerca_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminAcercaPageRoutingModule"]
        ],
        declarations: [_admin_acerca_page__WEBPACK_IMPORTED_MODULE_6__["AdminAcercaPage"]]
    })
], AdminAcercaPageModule);



/***/ })

}]);
//# sourceMappingURL=admin-acerca-admin-acerca-module.js.map