"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_jmart_jmart_module_ts"],{

/***/ 81734:
/*!***********************************************!*\
  !*** ./src/app/jmart/jmart-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JmartRoutingModule": () => (/* binding */ JmartRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jmart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jmart.component */ 41584);




const routes = [
    {
        path: 'landing',
        component: _jmart_component__WEBPACK_IMPORTED_MODULE_0__.JmartComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_jmart_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 22148)).then((m) => m.LandingModule)
    },
    {
        path: '**',
        redirectTo: 'landing',
    },
];
let JmartRoutingModule = class JmartRoutingModule {
};
JmartRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], JmartRoutingModule);



/***/ }),

/***/ 41584:
/*!******************************************!*\
  !*** ./src/app/jmart/jmart.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JmartComponent": () => (/* binding */ JmartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jmart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jmart.component.html?ngResource */ 23264);
/* harmony import */ var _jmart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jmart.component.scss?ngResource */ 57383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let JmartComponent = class JmartComponent {
};
JmartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: _jmart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jmart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JmartComponent);



/***/ }),

/***/ 38979:
/*!***************************************!*\
  !*** ./src/app/jmart/jmart.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JmartModule": () => (/* binding */ JmartModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-click-outside */ 70128);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 64503);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);
/* harmony import */ var _jmart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jmart-routing.module */ 81734);
/* harmony import */ var _jmart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jmart.component */ 41584);













let JmartModule = class JmartModule {
};
JmartModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _jmart_component__WEBPACK_IMPORTED_MODULE_4__.JmartComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _jmart_routing_module__WEBPACK_IMPORTED_MODULE_3__.JmartRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule.forChild(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        ],
    })
], JmartModule);



/***/ }),

/***/ 57383:
/*!*******************************************************!*\
  !*** ./src/app/jmart/jmart.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqbWFydC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 23264:
/*!*******************************************************!*\
  !*** ./src/app/jmart/jmart.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<j-layout-home>\n    <j-aside>\n      <j-nav-main></j-nav-main>\n    </j-aside>\n\n    <j-main>\n      <section class=\"row\">\n        <section class=\"col-lg-10 offset-lg-1 col-xl-8 offset-xl-2\">\n          <router-outlet></router-outlet>\n        </section>\n      </section>\n    </j-main>\n</j-layout-home>";

/***/ })

}]);
//# sourceMappingURL=src_app_jmart_jmart_module_ts.js.map