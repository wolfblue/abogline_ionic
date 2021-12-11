(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-city-admin-city-module"],{

/***/ "LmFD":
/*!*************************************************!*\
  !*** ./src/app/admin-city/admin-city.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin-top: 3%;\n}\n\n#tableDT {\n  margin-top: 8%;\n}\n\n.addBtn {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.btnDelete {\n  margin-left: 2%;\n}\n\n.msg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLWNpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJhZG1pbi1jaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgbWFyZ2luLXRvcDozJTtcclxufVxyXG5cclxuI3RhYmxlRFR7XHJcbiAgICBtYXJnaW4tdG9wOjglO1xyXG59XHJcblxyXG4uYWRkQnRue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkRlbGV0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OjIlO1xyXG59XHJcblxyXG4ubXNne1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59Il19 */");

/***/ }),

/***/ "akPm":
/*!*************************************************!*\
  !*** ./src/app/admin-city/admin-city.module.ts ***!
  \*************************************************/
/*! exports provided: AdminCityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCityPageModule", function() { return AdminCityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_city_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-city-routing.module */ "mvJ6");
/* harmony import */ var _admin_city_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-city.page */ "yspU");







let AdminCityPageModule = class AdminCityPageModule {
};
AdminCityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_city_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminCityPageRoutingModule"]
        ],
        declarations: [_admin_city_page__WEBPACK_IMPORTED_MODULE_6__["AdminCityPage"]]
    })
], AdminCityPageModule);



/***/ }),

/***/ "lm63":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-city/admin-city.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <h3>Administrar Ciudades</h3>\n\n  <button class=\"btn btn-primary addBtn\" type=\"submit\" (click)=\"addCiudad()\">Agregar Ciudad</button>\n\n  <table id=\"tableDT\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n\n    <thead>\n      <tr>\n        <th class=\"center\">Ciudad</th>\n        <th class=\"center\">Acciones</th>\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let item of ciudades\">\n        <td>{{item.ciudad}}</td>\n        <td class=\"center\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"red\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\" (click)=\"deleteCiudad(item.ciudad)\">\n            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n          </svg>\n        </td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--  MODAL REGISTER -->\n\n<ng-template #modalRegister let-modal>\n\n  <div class=\"modal-body\">\n      \n    <form>\n      <div class=\"form-group\">\n        <label for=\"ciudad\">Ciudad</label>\n        <input type=\"text\" class=\"form-control\" id=\"ciudad\" aria-describedby=\"emailHelp\" placeholder=\"Ingresar ciudad\">\n        <small id=\"ciudadHelp\" class=\"form-text text-muted\">Ingresar nombre de la ciudad.</small>\n      </div>\n      <p class=\"msg\"></p>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"formRegister()\">Agregar ciudad</button>\n    </form>\n\n  </div>\n\n</ng-template>");

/***/ }),

/***/ "mvJ6":
/*!*********************************************************!*\
  !*** ./src/app/admin-city/admin-city-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminCityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCityPageRoutingModule", function() { return AdminCityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_city_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-city.page */ "yspU");




const routes = [
    {
        path: '',
        component: _admin_city_page__WEBPACK_IMPORTED_MODULE_3__["AdminCityPage"]
    }
];
let AdminCityPageRoutingModule = class AdminCityPageRoutingModule {
};
AdminCityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminCityPageRoutingModule);



/***/ }),

/***/ "yspU":
/*!***********************************************!*\
  !*** ./src/app/admin-city/admin-city.page.ts ***!
  \***********************************************/
/*! exports provided: AdminCityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCityPage", function() { return AdminCityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_city_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-city.page.html */ "lm63");
/* harmony import */ var _admin_city_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-city.page.scss */ "LmFD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");











let AdminCityPage = class AdminCityPage {
    constructor(http, router, modalService, spinner) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.spinner = spinner;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.ciudades = [];
        //  Obtener ciudades
        this.getCiudades();
    }
    ngOnInit() {
    }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    /**************************************************************************** */
    //  MODAL
    /**************************************************************************** */
    open(content) {
        this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' });
        this.modal.result.then((e) => {
            console.log("dialogo cerrado");
        });
    }
    /************************************************************************************* */
    //  Actualizar
    /************************************************************************************* */
    addCiudad() {
        //  Variables iniciales
        var _this = this;
        // Abrir modal
        _this.open(_this.modalRegister);
    }
    /************************************************************************************* */
    //  Form register
    /************************************************************************************* */
    formRegister() {
        //  Variables iniciales
        var _this = this;
        var error = 0;
        var msgError = "";
        var ciudad = $("#ciudad").val();
        //  Spinner
        _this.spinner.show();
        //  Validar campos obligatorios
        if (!ciudad) {
            error = 1;
            msgError = "El campo ciudad es obligatorio.";
        }
        //  Mostrar errores
        if (error == 1) {
            $(".msg").css("color", "red");
            $(".msg").html(msgError);
            $(".msg").show();
            setTimeout(function () {
                $(".msg").hide();
            }, 3000);
        }
        //  Registrar ciudad
        if (error == 0) {
            let apiAdminCiudadRegister = new FormData();
            apiAdminCiudadRegister.append("ciudad", ciudad);
            _this.postModel("apiAdminCiudadRegister", apiAdminCiudadRegister).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                //  Spinner
                _this.spinner.hide();
                $(".msg").css("color", "green");
                $(".msg").html("Se registro la ciudad correctamente.");
                $(".msg").show();
                setTimeout(function () {
                    $(".msg").hide();
                    _this.modal.close();
                    //  Limpiar campos
                    $(".ciudad").val("");
                    //  Consultar ciudades
                    _this.getCiudades();
                }, 3000);
            });
        }
    }
    /************************************************************************************* */
    //  Consultar ciudades
    /************************************************************************************* */
    getCiudades() {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar ciudades
        let apiAdminCiudadGet = new FormData();
        _this.postModel("apiAdminCiudadGet", apiAdminCiudadGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            _this.ciudades = result;
            setTimeout(function () {
                $('#tableDT').DataTable();
            });
        });
    }
    /************************************************************************************* */
    //  Eliminar ciudad
    /************************************************************************************* */
    deleteCiudad(ciudad) {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar ciudades
        let apiAdminCiudadDelete = new FormData();
        apiAdminCiudadDelete.append("ciudad", ciudad);
        _this.postModel("apiAdminCiudadDelete", apiAdminCiudadDelete).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            //  Consultar ciudades
            _this.getCiudades();
        });
    }
};
AdminCityPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
];
AdminCityPage.propDecorators = {
    modalRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["modalRegister", { static: false },] }]
};
AdminCityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-city',
        template: _raw_loader_admin_city_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_city_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminCityPage);



/***/ })

}]);
//# sourceMappingURL=admin-city-admin-city-module.js.map