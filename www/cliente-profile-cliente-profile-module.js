(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-profile-cliente-profile-module"],{

/***/ "h6/8":
/*!***********************************************************!*\
  !*** ./src/app/cliente-profile/cliente-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: ClienteProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteProfilePageModule", function() { return ClienteProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cliente_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-profile-routing.module */ "uf5g");
/* harmony import */ var _cliente_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-profile.page */ "0rSQ");







let ClienteProfilePageModule = class ClienteProfilePageModule {
};
ClienteProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteProfilePageRoutingModule"]
        ],
        declarations: [_cliente_profile_page__WEBPACK_IMPORTED_MODULE_6__["ClienteProfilePage"]]
    })
], ClienteProfilePageModule);



/***/ }),

/***/ "uf5g":
/*!*******************************************************************!*\
  !*** ./src/app/cliente-profile/cliente-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteProfilePageRoutingModule", function() { return ClienteProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cliente_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-profile.page */ "0rSQ");




const routes = [
    {
        path: '',
        component: _cliente_profile_page__WEBPACK_IMPORTED_MODULE_3__["ClienteProfilePage"]
    }
];
let ClienteProfilePageRoutingModule = class ClienteProfilePageRoutingModule {
};
ClienteProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=cliente-profile-cliente-profile-module.js.map