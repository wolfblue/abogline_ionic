(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abogado-profile-abogado-profile-module"],{

/***/ "YDbF":
/*!*******************************************************************!*\
  !*** ./src/app/abogado-profile/abogado-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AbogadoProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoProfilePageRoutingModule", function() { return AbogadoProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _abogado_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abogado-profile.page */ "DRCg");




const routes = [
    {
        path: '',
        component: _abogado_profile_page__WEBPACK_IMPORTED_MODULE_3__["AbogadoProfilePage"]
    }
];
let AbogadoProfilePageRoutingModule = class AbogadoProfilePageRoutingModule {
};
AbogadoProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AbogadoProfilePageRoutingModule);



/***/ }),

/***/ "oYJW":
/*!***********************************************************!*\
  !*** ./src/app/abogado-profile/abogado-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: AbogadoProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbogadoProfilePageModule", function() { return AbogadoProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _abogado_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abogado-profile-routing.module */ "YDbF");
/* harmony import */ var _abogado_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abogado-profile.page */ "DRCg");







let AbogadoProfilePageModule = class AbogadoProfilePageModule {
};
AbogadoProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _abogado_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbogadoProfilePageRoutingModule"]
        ],
        declarations: [_abogado_profile_page__WEBPACK_IMPORTED_MODULE_6__["AbogadoProfilePage"]]
    })
], AbogadoProfilePageModule);



/***/ })

}]);
//# sourceMappingURL=abogado-profile-abogado-profile-module.js.map