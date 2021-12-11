(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-tipo-documento-admin-tipo-documento-module"],{

/***/ "IUYK":
/*!*******************************************************************!*\
  !*** ./src/app/admin-tipo-documento/admin-tipo-documento.page.ts ***!
  \*******************************************************************/
/*! exports provided: AdminTipoDocumentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTipoDocumentoPage", function() { return AdminTipoDocumentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_tipo_documento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-tipo-documento.page.html */ "OhKP");
/* harmony import */ var _admin_tipo_documento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-tipo-documento.page.scss */ "gRJ4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");











let AdminTipoDocumentoPage = class AdminTipoDocumentoPage {
    constructor(http, router, modalService, spinner) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.spinner = spinner;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.tiposDocumentos = [];
        //  Obtener tipos de documentos
        this.getTiposDocumentos();
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
    addTipoDocumento() {
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
        var tipoDocumento = $("#tipoDocumento").val();
        //  Spinner
        _this.spinner.show();
        //  Validar campos obligatorios
        if (!tipoDocumento) {
            error = 1;
            msgError = "El campo tipo de documento es obligatorio.";
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
        //  Registrar tipo de documento
        if (error == 0) {
            let apiAdminTipoDocumentoRegister = new FormData();
            apiAdminTipoDocumentoRegister.append("tipoDocumento", tipoDocumento);
            _this.postModel("apiAdminTipoDocumentoRegister", apiAdminTipoDocumentoRegister).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                //  Spinner
                _this.spinner.hide();
                $(".msg").css("color", "green");
                $(".msg").html("Se registro el tipo de documento correctamente.");
                $(".msg").show();
                setTimeout(function () {
                    $(".msg").hide();
                    _this.modal.close();
                    //  Limpiar campos
                    $(".tipoDocumento").val("");
                    //  Consultar tipos de documentos
                    _this.getTiposDocumentos();
                }, 3000);
            });
        }
    }
    /************************************************************************************* */
    //  Consultar tipos de documentos
    /************************************************************************************* */
    getTiposDocumentos() {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar tipos documentos
        let apiAdminTipoDocumentoGet = new FormData();
        _this.postModel("apiAdminTipoDocumentoGet", apiAdminTipoDocumentoGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            _this.tiposDocumentos = result;
            setTimeout(function () {
                $('#tableDT').DataTable();
            });
        });
    }
    /************************************************************************************* */
    //  Eliminar tipo de documento
    /************************************************************************************* */
    deleteTipoDocumento(tipoDocumento) {
        //  Variables iniciales
        var _this = this;
        //  Spinner
        _this.spinner.show();
        //  Consultar tipos de documentos
        let apiAdminTipoDocumentoDelete = new FormData();
        apiAdminTipoDocumentoDelete.append("tipoDocumento", tipoDocumento);
        _this.postModel("apiAdminTipoDocumentoDelete", apiAdminTipoDocumentoDelete).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
            //  Spinner
            _this.spinner.hide();
            //  Consultar tipos de documentos
            _this.getTiposDocumentos();
        });
    }
};
AdminTipoDocumentoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
];
AdminTipoDocumentoPage.propDecorators = {
    modalRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["modalRegister", { static: false },] }]
};
AdminTipoDocumentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-tipo-documento',
        template: _raw_loader_admin_tipo_documento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_tipo_documento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminTipoDocumentoPage);



/***/ }),

/***/ "OhKP":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-tipo-documento/admin-tipo-documento.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <h3>Administrar Tipos de Documentos</h3>\n\n  <button class=\"btn btn-primary addBtn\" type=\"submit\" (click)=\"addTipoDocumento()\">Agregar Tipo de Documento</button>\n\n  <table id=\"tableDT\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n\n    <thead>\n      <tr>\n        <th class=\"center\">Tipo de documento</th>\n        <th class=\"center\">Acciones</th>\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let item of tiposDocumentos\">\n        <td>{{item.tipo_documento}}</td>\n        <td class=\"center\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"red\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\" (click)=\"deleteTipoDocumento(item.tipo_documento)\">\n            <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n            <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n          </svg>\n        </td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--  MODAL REGISTER -->\n\n<ng-template #modalRegister let-modal>\n\n  <div class=\"modal-body\">\n      \n    <form>\n      <div class=\"form-group\">\n        <label for=\"tipoDocumento\">Tipo documento</label>\n        <input type=\"text\" class=\"form-control\" id=\"tipoDocumento\" aria-describedby=\"emailHelp\" placeholder=\"Ingresar tipo de documento\">\n        <small id=\"tipoDocumentoHelp\" class=\"form-text text-muted\">Ingresar nombre del tipo de documento.</small>\n      </div>\n      <p class=\"msg\"></p>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"formRegister()\">Agregar tipo de documento</button>\n    </form>\n\n  </div>\n\n</ng-template>");

/***/ }),

/***/ "bR24":
/*!*********************************************************************!*\
  !*** ./src/app/admin-tipo-documento/admin-tipo-documento.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminTipoDocumentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTipoDocumentoPageModule", function() { return AdminTipoDocumentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_tipo_documento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-tipo-documento-routing.module */ "tc5E");
/* harmony import */ var _admin_tipo_documento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-tipo-documento.page */ "IUYK");







let AdminTipoDocumentoPageModule = class AdminTipoDocumentoPageModule {
};
AdminTipoDocumentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_tipo_documento_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminTipoDocumentoPageRoutingModule"]
        ],
        declarations: [_admin_tipo_documento_page__WEBPACK_IMPORTED_MODULE_6__["AdminTipoDocumentoPage"]]
    })
], AdminTipoDocumentoPageModule);



/***/ }),

/***/ "gRJ4":
/*!*********************************************************************!*\
  !*** ./src/app/admin-tipo-documento/admin-tipo-documento.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin-top: 3%;\n}\n\n#tableDT {\n  margin-top: 8%;\n}\n\n.addBtn {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.btnDelete {\n  margin-left: 2%;\n}\n\n.msg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLXRpcG8tZG9jdW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4tdGlwby1kb2N1bWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICBtYXJnaW4tdG9wOjMlO1xyXG59XHJcblxyXG4jdGFibGVEVHtcclxuICAgIG1hcmdpbi10b3A6OCU7XHJcbn1cclxuXHJcbi5hZGRCdG57XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uYnRuRGVsZXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbn1cclxuXHJcbi5tc2d7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "tc5E":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-tipo-documento/admin-tipo-documento-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminTipoDocumentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTipoDocumentoPageRoutingModule", function() { return AdminTipoDocumentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_tipo_documento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-tipo-documento.page */ "IUYK");




const routes = [
    {
        path: '',
        component: _admin_tipo_documento_page__WEBPACK_IMPORTED_MODULE_3__["AdminTipoDocumentoPage"]
    }
];
let AdminTipoDocumentoPageRoutingModule = class AdminTipoDocumentoPageRoutingModule {
};
AdminTipoDocumentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminTipoDocumentoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=admin-tipo-documento-admin-tipo-documento-module.js.map