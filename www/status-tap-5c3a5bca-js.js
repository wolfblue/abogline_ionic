(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-5c3a5bca-js"],{

/***/ "dP+9":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-5c3a5bca.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(contentEl, resolve)).then(() => {
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await contentEl.scrollToTop(300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};




/***/ })

}]);
//# sourceMappingURL=status-tap-5c3a5bca-js.js.map