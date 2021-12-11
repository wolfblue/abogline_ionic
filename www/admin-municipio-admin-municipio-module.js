(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-municipio-admin-municipio-module"],{

/***/ "R/ae":
/*!***********************************************************!*\
  !*** ./src/app/admin-municipio/admin-municipio.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin-top: 3%;\n}\n\n#tableDT {\n  margin-top: 8%;\n}\n\n.addBtn {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.btnDelete {\n  margin-left: 2%;\n}\n\n.msg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLW11bmljaXBpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLW11bmljaXBpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbn1cclxuXHJcbiN0YWJsZURUe1xyXG4gICAgbWFyZ2luLXRvcDo4JTtcclxufVxyXG5cclxuLmFkZEJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5EZWxldGV7XHJcbiAgICBtYXJnaW4tbGVmdDoyJTtcclxufVxyXG5cclxuLm1zZ3tcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "Wlro":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-municipio/admin-municipio.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <h3>Administrar Municipios</h3>\n\n  <button class=\"btn btn-primary addBtn\" type=\"submit\" (click)=\"addMunicipio()\">Agregar Municipio</button>\n\n  <table id=\"tableDT\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n\n    <thead>\n      <tr>\n        <th class=\"center\">Municipio</th>\n        <th class=\"center\">Acciones</th>\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let item of municipios\">\n        <td>{{item.municipio}}</td>\n        <td class=\"center\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"red\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\" (click)=\"deleteMunicipio(item.municipio)\">\n            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n          </svg>\n        </td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--  MODAL REGISTER -->\n\n<ng-template #modalRegister let-modal>\n\n  <div class=\"modal-body\">\n      \n    <form>\n      <div class=\"form-group\">\n        <label for=\"municipio\">Municipio</label>\n        <input type=\"text\" class=\"form-control\" id=\"municipio\" aria-describedby=\"emailHelp\" placeholder=\"Ingresar municipio\">\n        <small id=\"municipioHelp\" class=\"form-text text-muted\">Ingresar nombre de la municipio.</small>\n      </div>\n      <p class=\"msg\"></p>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"formRegister()\">Agregar municipio</button>\n    </form>\n\n  </div>\n\n</ng-template>");

/***/ }),

/***/ "dbwE":
/*!*******************************************************************!*\
  !*** ./src/app/admin-municipio/admin-municipio-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminMunicipioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipioPageRoutingModule", function() { return AdminMunicipioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_municipio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-municipio.page */ "oE8e");




const routes = [
    {
        path: '',
        component: _admin_municipio_page__WEBPACK_IMPORTED_MODULE_3__["AdminMunicipioPage"]
    }
];
let AdminMunicipioPageRoutingModule = class AdminMunicipioPageRoutingModule {
};
AdminMunicipioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminMunicipioPageRoutingModule);



/***/ }),

/***/ "oE8e":
/*!*********************************************************!*\
  !*** ./src/app/admin-municipio/admin-municipio.page.ts ***!
  \*********************************************************/
/*! exports provided: AdminMunicipioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipioPage", function() { return AdminMunicipioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_municipio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-municipio.page.html */ "Wlro");
/* harmony import */ var _admin_municipio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-municipio.page.scss */ "R/ae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");











let AdminMunicipioPage = class AdminMunicipioPage {
    constructor(http, router, modalService, spinner) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.spinner = spinner;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.municipios = [];
        //  Obtener municipios
        this.getMunicipios();
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
    addMunicipio() {
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
        var municipio = $("#municipio").val();
        //  Spinner
        _this.spinner.show();
        //  Validar campos obligatorios
        if (!municipio) {
            error = 1;
            msgError = "El campo municipio es obligatorio.";
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
        //  Registrar municipio
        if (error == 0) {
            let apiAdminMunicipioRegister = new FormData();
            apiAdminMunicipioRegister.append("municipio", municipio);
            _this.postModel("apiAdminMunicipioRegister", apiAdminMunicipioRegister).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                //  Spinner
                _this.spinner.hide();
                $(".msg").css("color", "green");
                $(".msg").html("Se registro el municipio correctamente.");
                $(".msg").show();
                setTimeout(function () {
                    $(".msg").hide();
                    _this.modal.close();
                    //  Limpiar campos
                    $(".municipio").val("");
                    //  Consultar municipios
                    _this.getMunicipios();
                }, 3000);
            });
        }
    }
    /************************************************************************************* */
    //  Consultar municipios
    /************************************************************************************* */
    getMunicipios() {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar municipios
        let apiAdminMunicipioGet = new FormData();
        _this.postModel("apiAdminMunicipioGet", apiAdminMunicipioGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            _this.municipios = result;
            setTimeout(function () {
                $('#tableDT').DataTable();
            });
        });
    }
    /************************************************************************************* */
    //  Eliminar municipio
    /************************************************************************************* */
    deleteMunicipio(municipio) {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar municipios
        let apiAdminMunicipioDelete = new FormData();
        apiAdminMunicipioDelete.append("municipio", municipio);
        _this.postModel("apiAdminMunicipioDelete", apiAdminMunicipioDelete).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            //  Consultar municipios
            _this.getMunicipios();
        });
    }
};
AdminMunicipioPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
];
AdminMunicipioPage.propDecorators = {
    modalRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["modalRegister", { static: false },] }]
};
AdminMunicipioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-municipio',
        template: _raw_loader_admin_municipio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_municipio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminMunicipioPage);



/***/ }),

/***/ "ytJ+":
/*!***********************************************************!*\
  !*** ./src/app/admin-municipio/admin-municipio.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminMunicipioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipioPageModule", function() { return AdminMunicipioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_municipio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-municipio-routing.module */ "dbwE");
/* harmony import */ var _admin_municipio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-municipio.page */ "oE8e");







let AdminMunicipioPageModule = class AdminMunicipioPageModule {
};
AdminMunicipioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_municipio_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminMunicipioPageRoutingModule"]
        ],
        declarations: [_admin_municipio_page__WEBPACK_IMPORTED_MODULE_6__["AdminMunicipioPage"]]
    })
], AdminMunicipioPageModule);



/***/ })

}]);
//# sourceMappingURL=admin-municipio-admin-municipio-module.js.map