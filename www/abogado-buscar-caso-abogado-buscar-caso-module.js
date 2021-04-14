(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abogado-buscar-caso-abogado-buscar-caso-module"],{

/***/ "AxDS":
/*!*******************************************************************!*\
  !*** ./src/app/abogado-buscar-caso/abogado-buscar-caso.module.ts ***!
  \*******************************************************************/
/*! exports provided: AbogadoBuscarCasoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoBuscarCasoPageModule", function() { return AbogadoBuscarCasoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _abogado_buscar_caso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abogado-buscar-caso-routing.module */ "TysH");
/* harmony import */ var _abogado_buscar_caso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abogado-buscar-caso.page */ "qWSj");







let AbogadoBuscarCasoPageModule = class AbogadoBuscarCasoPageModule {
};
AbogadoBuscarCasoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _abogado_buscar_caso_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbogadoBuscarCasoPageRoutingModule"]
        ],
        declarations: [_abogado_buscar_caso_page__WEBPACK_IMPORTED_MODULE_6__["AbogadoBuscarCasoPage"]]
    })
], AbogadoBuscarCasoPageModule);



/***/ }),

/***/ "TysH":
/*!***************************************************************************!*\
  !*** ./src/app/abogado-buscar-caso/abogado-buscar-caso-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AbogadoBuscarCasoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoBuscarCasoPageRoutingModule", function() { return AbogadoBuscarCasoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _abogado_buscar_caso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abogado-buscar-caso.page */ "qWSj");




const routes = [
    {
        path: '',
        component: _abogado_buscar_caso_page__WEBPACK_IMPORTED_MODULE_3__["AbogadoBuscarCasoPage"]
    }
];
let AbogadoBuscarCasoPageRoutingModule = class AbogadoBuscarCasoPageRoutingModule {
};
AbogadoBuscarCasoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AbogadoBuscarCasoPageRoutingModule);



/***/ }),

/***/ "YQWr":
/*!*******************************************************************!*\
  !*** ./src/app/abogado-buscar-caso/abogado-buscar-caso.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead input {\n  width: 100%;\n}\n\ntable {\n  width: 90%;\n  margin: auto;\n}\n\n#container {\n  top: 28%;\n  width: 90%;\n  margin: auto;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib2dhZG8tYnVzY2FyLWNhc28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJhYm9nYWRvLWJ1c2Nhci1jYXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgdG9wOiAyOCU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "nsh2":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/abogado-buscar-caso/abogado-buscar-caso.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n\n    <form>\n\n      <table id=\"buscarCaso\" class=\"table table-striped table-bordered\">\n\n        <thead>\n  \n          <tr>\n            <th># Caso</th>\n            <th>Con quién tiene problemas</th>\n            <th>Sobre que trata el caso</th>\n            <th>Ya se inició un proceso ante un juzgado o entidad para su solución</th>\n            <th>Acciones</th>\n          </tr>\n  \n        </thead>\n  \n        <tbody></tbody>\n  \n      </table>\n\n    </form>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "qWSj":
/*!*****************************************************************!*\
  !*** ./src/app/abogado-buscar-caso/abogado-buscar-caso.page.ts ***!
  \*****************************************************************/
/*! exports provided: AbogadoBuscarCasoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoBuscarCasoPage", function() { return AbogadoBuscarCasoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_abogado_buscar_caso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./abogado-buscar-caso.page.html */ "nsh2");
/* harmony import */ var _abogado_buscar_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abogado-buscar-caso.page.scss */ "YQWr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _abogado_detalle_caso_abogado_detalle_caso_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abogado-detalle-caso/abogado-detalle-caso.page */ "sr/y");










let AbogadoBuscarCasoPage = class AbogadoBuscarCasoPage {
    constructor(http, router, AbogadoDetalleCasoPage) {
        this.http = http;
        this.router = router;
        this.AbogadoDetalleCasoPage = AbogadoDetalleCasoPage;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msg = "";
        this.error = 0;
        this.casos = [];
        //  Obtener todos los casos
        this.getCasos();
    }
    ngOnInit() { }
    postModel(Metodo, data) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}` + Metodo;
        return this.http.post(url, data);
    }
    location(ruta) {
        window.location = ruta;
    }
    /************************************************************************ */
    /**
     * Obtener todos los casos
     */
    getCasos() {
        var _this = this;
        let getDataCaso = new FormData();
        this.postModel("getDataCaso", getDataCaso).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe((result) => {
            this.casos = result;
            var buscarCaso = "";
            for (var i = 0; i < result.length; i++) {
                buscarCaso += "<tr>";
                buscarCaso += " <td>" + result[i].id + "</td>";
                buscarCaso += " <td>" + result[i].field1Desc + "</td>";
                buscarCaso += " <td>" + result[i].field2Desc + "</td>";
                buscarCaso += " <td>" + result[i].field7Desc + "</td>";
                buscarCaso += " <td><button type='button' id='" + i + "' class='btn btn-info verDetalle'>Ver Detalle</button></td>";
                buscarCaso += "</tr>";
            }
            $("#buscarCaso tbody").append(buscarCaso);
            //  Evento click ver detalle
            $(".verDetalle").click(function () {
                sessionStorage.setItem('caso', JSON.stringify(_this.casos[$(this).prop('id')]));
                _this.location('abogado-detalle-caso');
                _this.AbogadoDetalleCasoPage.getDataCaso();
            });
            //  Datatable casos
            $('#buscarCaso thead tr').clone(true).appendTo('#buscarCaso thead');
            $('#buscarCaso thead tr:eq(1) th').each(function (i) {
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
            var table = $('#buscarCaso').DataTable({
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
AbogadoBuscarCasoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _abogado_detalle_caso_abogado_detalle_caso_page__WEBPACK_IMPORTED_MODULE_9__["AbogadoDetalleCasoPage"] }
];
AbogadoBuscarCasoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-abogado-buscar-caso',
        template: _raw_loader_abogado_buscar_caso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abogado_buscar_caso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AbogadoBuscarCasoPage);



/***/ })

}]);
//# sourceMappingURL=abogado-buscar-caso-abogado-buscar-caso-module.js.map