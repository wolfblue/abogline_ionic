(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "+6GH":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead input {\n  width: 100%;\n}\n\ntable {\n  width: 90%;\n  margin: auto;\n}\n\n#container {\n  top: 28%;\n  width: 90%;\n  margin: auto;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICB0b3A6IDI4JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6MTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "N0Fe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <table id=\"buscarNotificaciones\" class=\"table table-striped table-bordered\">\n\n      <thead>\n\n        <tr>\n          <th>#</th>\n          <th>Notificación</th>\n          <th>Fecha de registro</th>\n          <th>Acciones</th>\n        </tr>\n\n      </thead>\n\n      <tbody></tbody>\n\n    </table>\n\n  </div>\n\n  <div class=\"informacion success alert-primary\" role=\"alert\">\n    {{this.msg}}\n  </div>\n\n  <div class=\"informacion warning alert-warning\" role=\"alert\">\n    {{this.msg}}\n  </div>\n\n  <div class=\"informacion error alert-danger\" role=\"alert\">\n    {{this.msg}}\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "QFHF":
/*!*****************************************************************!*\
  !*** ./src/app/notificaciones/notificaciones-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function() { return NotificacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificaciones.page */ "kNFv");




const routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
    }
];
let NotificacionesPageRoutingModule = class NotificacionesPageRoutingModule {
};
NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificacionesPageRoutingModule);



/***/ }),

/***/ "kNFv":
/*!*******************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.ts ***!
  \*******************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notificaciones.page.html */ "N0Fe");
/* harmony import */ var _notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificaciones.page.scss */ "+6GH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let NotificacionesPage = class NotificacionesPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
        this.notificaciones = [];
        //  Obtener todas las notificaciones
        this.getNotificaciones();
    }
    ngOnInit() { }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    location(ruta) {
        this.router.navigateByUrl(ruta);
    }
    /************************************************************************ */
    /**
     * Obtener todas las notificaciones de un usuario
     */
    getNotificaciones() {
        var _this = this;
        let getNotificacion = new FormData();
        getNotificacion.append("email", sessionStorage.getItem("email"));
        this.postModel("getNotificacion", getNotificacion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
            this.notificaciones = result;
            var buscarNotificaciones = "";
            for (var i = 0; i < result.length; i++) {
                buscarNotificaciones += "<tr>";
                buscarNotificaciones += " <td>" + (i + 1) + "</td>";
                buscarNotificaciones += " <td>" + result[i].message + "</td>";
                buscarNotificaciones += " <td>" + result[i].created_at + "</td>";
                buscarNotificaciones += " <td><button type='button' id='" + result[i].id + "' class='btn btn-danger eliminarNotificacion'>Eliminar Notificación</button></td>";
                buscarNotificaciones += "</tr>";
            }
            $("#buscarNotificaciones tbody").append(buscarNotificaciones);
            //  Evento click eliminar notificacion
            $(".eliminarNotificacion").click(function () {
                var confirm = window.confirm("¿ Esta seguro de eliminar la notificación ?");
                if (confirm == true) {
                    let deleteNotificacion = new FormData();
                    deleteNotificacion.append("id", $(this).prop("id"));
                    _this.postModel("deleteNotificacion", deleteNotificacion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe((result) => {
                        _this.msg = "Se eliminó la notificación correctamente";
                        $(".success").show();
                        $(this).parent().parent().remove();
                        //  Volver a la busqueda de casos
                        setTimeout(function () {
                            $(".success").hide();
                        }, 3000);
                    });
                }
            });
            //  Datatable notificaciones
            $('#buscarNotificaciones thead tr').clone(true).appendTo('#buscarNotificaciones thead');
            $('#buscarNotificaciones thead tr:eq(1) th').each(function (i) {
                var title = $(this).text();
                if (title != 'Acciones')
                    $(this).html('<input type="text" />');
                else
                    $(this).html('');
                $('input', this).on('keyup change', function () {
                    if (table.column(i).search() !== this.value) {
                        table
                            .column(i)
                            .search(this.value)
                            .draw();
                    }
                });
            });
            var table = $('#buscarNotificaciones').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                }
            });
        });
    }
};
NotificacionesPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notificaciones',
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificacionesPage);



/***/ }),

/***/ "nMF9":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.module.ts ***!
  \*********************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificaciones-routing.module */ "QFHF");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "kNFv");







let NotificacionesPageModule = class NotificacionesPageModule {
};
NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]
        ],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
    })
], NotificacionesPageModule);



/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module.js.map