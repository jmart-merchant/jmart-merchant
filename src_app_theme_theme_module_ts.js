"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_theme_theme_module_ts"],{

/***/ 63098:
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeRoutingModule": () => (/* binding */ ThemeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.component */ 40223);




const routes = [{ path: '', component: _theme_component__WEBPACK_IMPORTED_MODULE_0__.ThemeComponent }];
let ThemeRoutingModule = class ThemeRoutingModule {
};
ThemeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ThemeRoutingModule);



/***/ }),

/***/ 40223:
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeComponent": () => (/* binding */ ThemeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.component.html?ngResource */ 89257);
/* harmony import */ var _theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component.scss?ngResource */ 87665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-data.json */ 19654);





let ThemeComponent = class ThemeComponent {
    constructor() {
        this.icons = _theme_data_json__WEBPACK_IMPORTED_MODULE_2__.icons;
    }
    ngOnInit() {
    }
};
ThemeComponent.ctorParameters = () => [];
ThemeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-theme',
        template: _theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThemeComponent);



/***/ }),

/***/ 85056:
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-routing.module */ 63098);
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component */ 40223);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);






let ThemeModule = class ThemeModule {
};
ThemeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_theme_component__WEBPACK_IMPORTED_MODULE_1__.ThemeComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemeRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]
    })
], ThemeModule);



/***/ }),

/***/ 87665:
/*!*******************************************************!*\
  !*** ./src/app/theme/theme.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".heading {\n  border-bottom: 1px solid;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InRoZW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 89257:
/*!*******************************************************!*\
  !*** ./src/app/theme/theme.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n  <h1 class=\"heading\">\n    Заголовки\n  </h1>\n\n  <h1>\n    Заголовок типа h1.\n  </h1>\n\n  <h2>\n    Заголовок типа h2.\n  </h2>\n\n  <h3>\n    Заголовок типа h3.\n  </h3>\n\n  <h4>\n    Заголовок типа h4.\n  </h4>\n\n  <h5>\n    Заголовок типа h5.\n  </h5>\n\n  <h6>\n    Заголовок типа h6.\n  </h6>\n\n\n\n  <div class=\"mt-5\">\n    <h2 class=\"heading\">Buttons</h2>\n    <div class=\"form-group \">\n      <button type=\"button\"\n              class=\"btn btn-primary\">Primary</button>\n      <button type=\"button\"\n              class=\"btn btn-secondary\">Secondary</button>\n      <button type=\"button\"\n              class=\"btn btn-success\">Success</button>\n      <button type=\"button\"\n              class=\"btn btn-danger\">Danger</button>\n      <button type=\"button\"\n              class=\"btn btn-warning\">Warning</button>\n      <button type=\"button\"\n              class=\"btn btn-info\">Info</button>\n      <button type=\"button\"\n              class=\"btn btn-light\">Light</button>\n      <button type=\"button\"\n              class=\"btn btn-dark\">Dark</button>\n      <button type=\"button\"\n              class=\"btn btn-link\">Link</button>\n    </div>\n    <div class=\"form-group\">\n      <h3>Outline buttons</h3>\n      <button type=\"button\"\n              class=\"btn btn-outline-primary\">Primary</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-secondary\">Secondary</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-success\">Success</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-danger\">Danger</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-warning\">Warning</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-info\">Info</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-light\">Light</button>\n      <button type=\"button\"\n              class=\"btn btn-outline-dark\">Dark</button>\n    </div>\n    <div class=\"form-group\">\n      <h3>Sizes</h3>\n      <button type=\"button\"\n              class=\"btn btn-primary btn-lg\">Large button</button>\n      <button type=\"button\"\n              class=\"btn btn-secondary btn-lg\">Large button</button>\n      <button type=\"button\"\n              class=\"btn btn-primary btn-sm\">Small button</button>\n      <button type=\"button\"\n              class=\"btn btn-secondary btn-sm\">Small button</button>\n      <button type=\"button\"\n              class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n    </div>\n    <div class=\"form-group\">\n      <h3>Modificator</h3>\n      <button type=\"button\"\n              class=\"btn btn-outline-dark btn-shadow\">Dark</button>\n              <button type=\"button\"\n              class=\"btn btn-outline-dark btn-static\">min width</button>\n    </div>\n    <div class=\"form-group\">\n      <h3>Icons</h3>\n      <ul class=\"list-unstyled\">\n        <li *ngFor=\"let icon of icons\" class=\"d-inline-block\">\n          <button title=\"{{icon.name}}\" [inlineSVG]=\"icon.name | svgPath\" class=\"btn btn-icon btn-link-gray\"></button>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 19654:
/*!***************************************!*\
  !*** ./src/app/theme/theme-data.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"icons":[{"name":"chevron-left","group":"shared"},{"name":"chevron-right","group":"shared"},{"name":"arrow-loop-left","group":"shared"},{"name":"list","group":"shared"},{"name":"bucket","group":"shared"}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_theme_theme_module_ts.js.map