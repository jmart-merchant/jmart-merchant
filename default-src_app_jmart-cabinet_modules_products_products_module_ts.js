"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["default-src_app_jmart-cabinet_modules_products_products_module_ts"],{

/***/ 22791:
/*!****************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/card-products/card-products.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardProductsComponent": () => (/* binding */ CardProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-products.component.html?ngResource */ 17681);
/* harmony import */ var _card_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-products.component.scss?ngResource */ 6103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CardProductsComponent = class CardProductsComponent {
    constructor() {
        this.isHoverable = false;
        this.isWithoutPadding = false;
    }
    ngOnInit() {
    }
};
CardProductsComponent.ctorParameters = () => [];
CardProductsComponent.propDecorators = {
    isHoverable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isWithoutPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CardProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-card-products',
        template: _card_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_card_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardProductsComponent);



/***/ }),

/***/ 5315:
/*!************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/carousel-products/carousel-products.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselProductsComponent": () => (/* binding */ CarouselProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _carousel_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-products.component.html?ngResource */ 86971);
/* harmony import */ var _carousel_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-products.component.scss?ngResource */ 85574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);






let CarouselProductsComponent = class CarouselProductsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.links = [];
        this.currentIndex = 0;
        this.slide = 0;
    }
    down() {
        var _a, _b;
        if (((_a = this.links) === null || _a === void 0 ? void 0 : _a.length) > this.currentIndex + 1) {
            if (this.currentIndex < (((_b = this.links) === null || _b === void 0 ? void 0 : _b.length) - 5)) {
                --this.slide;
            }
            this.currentIndex++;
        }
    }
    up() {
        if (0 < this.currentIndex) {
            if (this.currentIndex + 1 > 5) {
                ++this.slide;
            }
            this.currentIndex--;
        }
    }
    ngOnInit() {
    }
    open(content) {
        const modalRef = this.modalService.open(content, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_dictionary modal-adaptive modal-holder',
            centered: true,
        });
        modalRef.componentInstance.currentIndex = this.links[this.currentIndex];
    }
    onImgError(event) {
        event.target.src = './assets/jmart/empty-img.svg';
    }
};
CarouselProductsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal }
];
CarouselProductsComponent.propDecorators = {
    links: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding, args: ['style.--slide',] }]
};
CarouselProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-carousel-products',
        template: _carousel_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('slideUp', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* <=> *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateY(-{{startHeight}}%)', overflow: 'hidden' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('13s ease'),
                ], { params: { startHeight: '0' } })
            ])],
        styles: [_carousel_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarouselProductsComponent);



/***/ }),

/***/ 74525:
/*!******************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/empty-products/empty-products.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyProductsComponent": () => (/* binding */ EmptyProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _empty_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-products.component.html?ngResource */ 53092);
/* harmony import */ var _empty_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-products.component.scss?ngResource */ 45562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let EmptyProductsComponent = class EmptyProductsComponent {
    constructor() {
        this.img = './assets/jmart/no-data.svg';
        this.text = 'JMART.PRODUCTS.INFORMATION.EMPTY_TEXT';
    }
    ngOnInit() {
    }
};
EmptyProductsComponent.ctorParameters = () => [];
EmptyProductsComponent.propDecorators = {
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmptyProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-empty-products',
        template: _empty_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_empty_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmptyProductsComponent);



/***/ }),

/***/ 38439:
/*!******************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/table-products/table-products.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableProductsComponent": () => (/* binding */ TableProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _table_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-products.component.html?ngResource */ 57677);
/* harmony import */ var _table_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-products.component.scss?ngResource */ 14628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TableProductsComponent = class TableProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TableProductsComponent.ctorParameters = () => [];
TableProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-table-products',
        template: _table_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_table_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableProductsComponent);



/***/ }),

/***/ 25663:
/*!****************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/tabs-products/tabs-products.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsProductsComponent": () => (/* binding */ TabsProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-products.component.html?ngResource */ 63533);
/* harmony import */ var _tabs_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-products.component.scss?ngResource */ 70239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsProductsComponent = class TabsProductsComponent {
};
TabsProductsComponent.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TabsProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-tabs-products',
        template: _tabs_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsProductsComponent);



/***/ }),

/***/ 14310:
/*!****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/typography-products/typography-products.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyProductsComponent": () => (/* binding */ TypographyProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _typography_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography-products.component.html?ngResource */ 7927);
/* harmony import */ var _typography_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography-products.component.scss?ngResource */ 2923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TypographyProductsComponent = class TypographyProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TypographyProductsComponent.ctorParameters = () => [];
TypographyProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-typography-products',
        template: _typography_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_typography_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TypographyProductsComponent);



/***/ }),

/***/ 66324:
/*!********************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/upload-products/upload-products.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadProductsComponent": () => (/* binding */ UploadProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _upload_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-products.component.html?ngResource */ 97206);
/* harmony import */ var _upload_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-products.component.scss?ngResource */ 86191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let UploadProductsComponent = class UploadProductsComponent {
    constructor() {
        this.uploadFile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    handle(file) {
        this.uploadFile.emit(file);
    }
    openFile() {
        document.getElementById('openFile').click();
    }
};
UploadProductsComponent.propDecorators = {
    importState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    uploadFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    fileStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    fileStatusMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UploadProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-upload-products',
        template: _upload_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadProductsComponent);



/***/ }),

/***/ 22089:
/*!*****************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/directives/drag.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDirective": () => (/* binding */ DragDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



let DragDirective = class DragDirective {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.file = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.eventChange.emit('onDragOver');
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.eventChange.emit('onDragLeave');
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.eventChange.emit('onDrop');
        const file = evt.dataTransfer.files[0];
        if (file) {
            this.file.emit(file);
        }
    }
};
DragDirective.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer }
];
DragDirective.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    eventChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['drop', ['$event'],] }]
};
DragDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[jDrag]'
    })
], DragDirective);



/***/ }),

/***/ 42482:
/*!******************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-item/binding-item.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingItemComponent": () => (/* binding */ BindingItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _binding_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding-item.component.html?ngResource */ 22949);
/* harmony import */ var _binding_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding-item.component.scss?ngResource */ 31823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _jmart_cabinet_modules_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jmart-cabinet/modules/products/services/products.service */ 68838);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _jmart_cabinet_modules_products_pages_binding_product_page_binding_modal_binding_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jmart-cabinet/modules/products/pages/binding-product-page/binding-modal/binding-modal.component */ 70011);







let BindingItemComponent = class BindingItemComponent {
    constructor(modalService, productsService) {
        this.modalService = modalService;
        this.productsService = productsService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selectProduct = '';
        this.loading = false;
    }
    ngOnInit() {
    }
    open() {
        this.selectProduct = '';
        const modalRef = this.modalService.open(_jmart_cabinet_modules_products_pages_binding_product_page_binding_modal_binding_modal_component__WEBPACK_IMPORTED_MODULE_3__.BindingModalComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_md modal-holder',
            centered: true,
        });
        modalRef.componentInstance.productItem = this.productItem;
        modalRef.componentInstance.type = this.type;
        modalRef.componentInstance.refresh.subscribe(() => {
            this.productItem.clarify = true;
            this.refresh.emit(this.type);
        });
    }
    clarify(product) {
        console.log(product);
        this.loading = true;
        this.productsService.clarifyProduct(product.id, product.productVariants[0].productCode).subscribe(data => {
            console.log(data);
            this.loading = false;
            product.clarify = true;
            this.refresh.emit(this.type);
        }, error => {
            console.log(error);
            alert('Ошибка! Обратитесь в службу поддержки Jusan Магазин ');
        });
    }
    onImgError(event) {
        event.target.src = './assets/jmart/empty-img.svg';
    }
};
BindingItemComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: _jmart_cabinet_modules_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
BindingItemComponent.propDecorators = {
    productItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
BindingItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-binding-item',
        template: _binding_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_binding_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BindingItemComponent);



/***/ }),

/***/ 70011:
/*!********************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-modal/binding-modal.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingModalComponent": () => (/* binding */ BindingModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _binding_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding-modal.component.html?ngResource */ 76232);
/* harmony import */ var _binding_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding-modal.component.scss?ngResource */ 66825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _jmart_cabinet_modules_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jmart-cabinet/modules/products/services/products.service */ 68838);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 52428);









let BindingModalComponent = class BindingModalComponent {
    constructor(modal, productsService) {
        this.modal = modal;
        this.productsService = productsService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.loading = false;
        this.loadingItems = false;
        this.selectProduct = '';
        this.terms = '';
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.theme = { height: '3rem', width: '100%', 'background-color': '#ECEEF1' };
    }
    ngOnInit() {
        if (this.type === 2) {
            this.terms = this.productItem.model;
            this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.terms);
        }
        else {
            this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.terms);
        }
        const searchSource = this.searchStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.loadingItems = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(searchTerm => {
            return { terms: searchTerm };
        }));
        const source = searchSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)({ terms: this.terms }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((params) => {
            return this.productsService.getAllProducts(params.terms);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.loadingItems = false));
        this.productItems$ = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.pluck)('products'));
    }
    search(term) {
        this.terms = term;
        this.searchStream.next(term);
    }
    clarify() {
        this.loading = true;
        this.productsService.clarifyProduct(this.productItem.id, this.selectProduct).subscribe(data => {
            this.modal.dismiss();
            this.refresh.emit();
        }, error => {
            this.loading = false;
            alert('Ошибка! Обратитесь в службу поддержки Jusan Магазин ');
        });
    }
    onImgError(event) {
        event.target.src = './assets/jmart/empty-img.svg';
    }
};
BindingModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbActiveModal },
    { type: _jmart_cabinet_modules_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
BindingModalComponent.propDecorators = {
    productItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
BindingModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-binding-modal',
        template: _binding_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_binding_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BindingModalComponent);



/***/ }),

/***/ 96503:
/*!*************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-product-page.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingProductPageComponent": () => (/* binding */ BindingProductPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _binding_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding-product-page.component.html?ngResource */ 43590);
/* harmony import */ var _binding_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding-product-page.component.scss?ngResource */ 60670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 76839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 52428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32647);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 68838);









let BindingProductPageComponent = class BindingProductPageComponent {
    constructor(productsService, router, route) {
        var _a, _b;
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.type = 3;
        this.terms = '';
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.page = 1;
        this.newSearch = false;
        this.loading = true;
        this.pageStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.theme = { height: '7rem', 'background-color': '#ECEEF1' };
        this.terms = ((_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.terms) || '';
        this.type = +((_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.type) || 3;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.terms);
    }
    onScroll(event) {
        const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        const max = document.documentElement.scrollHeight;
        if (pos === max) {
            this.goToNextPage();
            console.log(true);
        }
    }
    ;
    ngOnInit() {
        this.productsService.getLastImportFile().subscribe(data => {
            this.lastStatusCount = data;
        });
        this.productsService.getImportProductStatusCount().subscribe(data => {
            this.statusCount = data;
        });
        const searchSource = this.searchStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(searchTerm => {
            this.terms = searchTerm;
            this.router.navigate([], {
                queryParams: {
                    terms: this.terms
                }
            });
            return { terms: searchTerm, page: 1 };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => { this.newSearch = true; this.myDivRef.nativeElement.scrollTop = 0; }));
        const pageSource = this.pageStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.newSearch = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(pageNumber => {
            this.page = pageNumber;
            return { terms: this.terms, page: pageNumber };
        }));
        const source = pageSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.merge)(searchSource), // новая весия mergeWith
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)({ terms: this.terms, page: this.page }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((params) => {
            return this.productsService.getProductsImport(params.terms, params.page, this.type);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.loading = false));
        this.productItems$ = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.pluck)('items'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.scan)((acc, data) => {
            return this.newSearch ? data : [...acc, ...data];
        }, []));
        source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.pluck)('pagination')).subscribe(data => this.productsPagination = data);
    }
    search(term) {
        this.searchStream.next(term);
    }
    typeSelect(type) {
        this.type = type;
        this.searchStream.next('');
    }
    addNextProductItems(page) {
        this.pageStream.next(page);
    }
    refresh(event) {
        console.log(event);
        --this.statusCount[event];
    }
    goToNextPage() {
        if (this.productsPagination.lastPage > this.productsPagination.currentPage) {
            this.addNextProductItems(this.productsPagination.currentPage + 1);
        }
    }
};
BindingProductPageComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute }
];
BindingProductPageComponent.propDecorators = {
    onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostListener, args: ['window:scroll', ['$event'], // for window scroll events
            ] }],
    myDivRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['myDiv',] }]
};
BindingProductPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'j-binding-product-page',
        template: _binding_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_binding_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BindingProductPageComponent);



/***/ }),

/***/ 96978:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-last-info/import-last-info.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportLastInfoComponent": () => (/* binding */ ImportLastInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _import_last_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-last-info.component.html?ngResource */ 24274);
/* harmony import */ var _import_last_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-last-info.component.scss?ngResource */ 13724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ImportLastInfoComponent = class ImportLastInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImportLastInfoComponent.ctorParameters = () => [];
ImportLastInfoComponent.propDecorators = {
    importLastInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    importState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ImportLastInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-import-last-info',
        template: _import_last_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_import_last_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImportLastInfoComponent);



/***/ }),

/***/ 63378:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-link-upload/import-link-upload.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportLinkUploadComponent": () => (/* binding */ ImportLinkUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _import_link_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-link-upload.component.html?ngResource */ 15164);
/* harmony import */ var _import_link_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-link-upload.component.scss?ngResource */ 59190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ImportLinkUploadComponent = class ImportLinkUploadComponent {
    constructor() {
        this.uploadLink = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    getLink(link) {
        this.link = link;
    }
    updateLink() {
        this.uploadLink.emit(this.link);
    }
};
ImportLinkUploadComponent.ctorParameters = () => [];
ImportLinkUploadComponent.propDecorators = {
    uploadLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    importState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ImportLinkUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-import-link-upload',
        template: _import_link_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_import_link_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImportLinkUploadComponent);



/***/ }),

/***/ 5485:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-mode-toggle/import-mode-toggle.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportModeToggleComponent": () => (/* binding */ ImportModeToggleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _import_mode_toggle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-mode-toggle.component.html?ngResource */ 38294);
/* harmony import */ var _import_mode_toggle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-mode-toggle.component.scss?ngResource */ 50873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ImportModeToggleComponent = class ImportModeToggleComponent {
    constructor() {
        this.controlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.currentId = 0;
        this.mods = [
            {
                id: 0,
                label: 'Загрузка файла',
            },
            {
                id: 1,
                label: 'Автообновление',
            },
        ];
    }
    ngOnInit() {
    }
    setMod(mode) {
        this.currentId = mode.id;
        this.controlChange.emit(mode.id);
    }
};
ImportModeToggleComponent.ctorParameters = () => [];
ImportModeToggleComponent.propDecorators = {
    controlChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ImportModeToggleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-import-mode-toggle',
        template: _import_mode_toggle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_import_mode_toggle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImportModeToggleComponent);



/***/ }),

/***/ 95031:
/*!***********************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-product-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportProductPageComponent": () => (/* binding */ ImportProductPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _import_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-product-page.component.html?ngResource */ 73126);
/* harmony import */ var _import_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-product-page.component.scss?ngResource */ 98987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 68838);





let ImportProductPageComponent = class ImportProductPageComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.tabId = 0;
        this.importState = {
            loading: false,
            errorText: '',
            fileName: '',
            uploadStatus: ''
        };
    }
    ngOnInit() {
        this.getLastImportFile();
    }
    controlChange(event) {
        this.tabId = event;
        this.importState.fileName = '';
    }
    uploadFile(file) {
        this.importState.fileName = file === null || file === void 0 ? void 0 : file.name;
        const formData = new FormData();
        formData.append('file', file);
        this.uploadFileRequest(formData);
    }
    uploadLink(file) {
        this.importState.fileName = file;
        const formData = new FormData();
        formData.append('file', file);
        this.uploadFileRequest(formData);
    }
    uploadFileRequest(data) {
        this.importState.loading = true;
        this.importState.errorText = '';
        this.productsService.importProduct(data).subscribe(() => {
            this.importState.loading = false;
            this.importState.fileName = '';
            this.getLastImportFile();
        }, error => {
            var _a, _b;
            this.importState.loading = false;
            this.importState.errorText = ((_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.statusText;
            this.importState.fileName = '';
            this.getLastImportFile();
            console.log(error);
        });
    }
    getLastImportFile() {
        this.productsService.getLastImportFile().subscribe(data => {
            this.importLastInfo = data;
        });
    }
    onUploadingFilesUpdate(event) {
    }
};
ImportProductPageComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
ImportProductPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-import-product-page',
        template: _import_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_import_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImportProductPageComponent);



/***/ }),

/***/ 7948:
/*!*******************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/main-product-page.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainProductPageComponent": () => (/* binding */ MainProductPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-product-page.component.html?ngResource */ 28082);
/* harmony import */ var _main_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-product-page.component.scss?ngResource */ 40878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 76839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 52428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 32647);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 68838);









let MainProductPageComponent = class MainProductPageComponent {
    constructor(productsService, router, route) {
        var _a;
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.terms = '';
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.page = 1;
        this.newSearch = false;
        this.loading = true;
        this.pageStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.theme = { height: '7rem', 'background-color': '#ECEEF1' };
        this.terms = ((_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.terms) || '';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.terms);
    }
    onScroll(event) {
        const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        const max = document.documentElement.scrollHeight;
        if (pos === max) {
            this.goToNextPage();
            console.log(true);
        }
    }
    ;
    ngOnInit() {
        const searchSource = this.searchStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(searchTerm => {
            this.terms = searchTerm;
            this.router.navigate([], {
                queryParams: {
                    terms: this.terms
                }
            });
            return { terms: searchTerm, page: 1 };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => { this.newSearch = true; this.myDivRef.nativeElement.scrollTop = 0; }));
        const pageSource = this.pageStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.newSearch = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(pageNumber => {
            this.page = pageNumber;
            return { terms: this.terms, page: pageNumber };
        }));
        const source = pageSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.merge)(searchSource), // новая весия mergeWith
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)({ terms: this.terms, page: this.page }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((params) => {
            return this.productsService.getProducts(params.terms, params.page);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)());
        this.productItems$ = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.pluck)('items'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.scan)((acc, data) => this.newSearch ? data : [...acc, ...data], []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.loading = false));
        source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.pluck)('pagination')).subscribe(data => this.productsPagination = data);
    }
    search(term) {
        this.searchStream.next(term);
    }
    addNextProductItems(page) {
        this.pageStream.next(page);
    }
    goToNextPage() {
        if (this.productsPagination.lastPage > this.productsPagination.currentPage) {
            this.addNextProductItems(this.productsPagination.currentPage + 1);
        }
    }
    routeClick(productId) {
        this.router.navigate(['jmart-cabinet', 'product-card', productId], { queryParamsHandling: 'preserve' });
    }
};
MainProductPageComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute }
];
MainProductPageComponent.propDecorators = {
    myDivRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['myDiv',] }],
    onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.HostListener, args: ['window:scroll', ['$event'], // for window scroll events
            ] }]
};
MainProductPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'j-main-product-page',
        template: _main_product_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_product_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainProductPageComponent);



/***/ }),

/***/ 57765:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/products-item/products-item.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsItemComponent": () => (/* binding */ ProductsItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-item.component.html?ngResource */ 71562);
/* harmony import */ var _products_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-item.component.scss?ngResource */ 22924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ProductsItemComponent = class ProductsItemComponent {
    constructor() { }
    ngOnInit() {
    }
    getProducts() {
    }
    onImgError(event) {
        event.target.src = './assets/jmart/empty-img.svg';
    }
};
ProductsItemComponent.ctorParameters = () => [];
ProductsItemComponent.propDecorators = {
    productItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ProductsItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-products-item',
        template: _products_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_products_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsItemComponent);



/***/ }),

/***/ 91413:
/*!***************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/products-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jmart_cabinet_components_jmart_cabinet_layout_jmart_cabinet_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jmart-cabinet/components/jmart-cabinet-layout/jmart-cabinet-layout.component */ 18232);
/* harmony import */ var _jmart_cabinet_components_jmart_cabinet_no_layout_jmart_cabinet_no_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jmart-cabinet/components/jmart-cabinet-no-layout/jmart-cabinet-no-layout.component */ 6553);
/* harmony import */ var _pages_binding_product_page_binding_product_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/binding-product-page/binding-product-page.component */ 96503);
/* harmony import */ var _pages_import_product_page_import_product_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/import-product-page/import-product-page.component */ 95031);
/* harmony import */ var _pages_main_product_page_main_product_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-product-page/main-product-page.component */ 7948);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ 1461);









const routes = [
    {
        path: '',
        component: _jmart_cabinet_components_jmart_cabinet_layout_jmart_cabinet_layout_component__WEBPACK_IMPORTED_MODULE_0__.JmartCabinetLayoutComponent,
        children: [
            {
                path: '',
                component: _products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent,
                data: {
                    title: 'SETTINGS.TITLE',
                },
                children: [
                    {
                        path: 'main',
                        component: _pages_main_product_page_main_product_page_component__WEBPACK_IMPORTED_MODULE_4__.MainProductPageComponent,
                    },
                    {
                        path: 'import',
                        component: _pages_import_product_page_import_product_page_component__WEBPACK_IMPORTED_MODULE_3__.ImportProductPageComponent,
                    },
                    {
                        path: 'binding',
                        component: _pages_binding_product_page_binding_product_page_component__WEBPACK_IMPORTED_MODULE_2__.BindingProductPageComponent,
                    },
                    {
                        path: '',
                        redirectTo: 'main',
                    },
                    {
                        path: '**',
                        redirectTo: 'main',
                    },
                ],
            },
        ],
    },
    {
        path: 'no-layout',
        component: _jmart_cabinet_components_jmart_cabinet_no_layout_jmart_cabinet_no_layout_component__WEBPACK_IMPORTED_MODULE_1__.JmartCabinetNoLayoutComponent,
        children: [
        // put product card here
        ]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], ProductsRoutingModule);



/***/ }),

/***/ 1461:
/*!**********************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/products.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component.html?ngResource */ 15770);
/* harmony import */ var _products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.scss?ngResource */ 55812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ProductsComponent = class ProductsComponent {
    constructor() {
        this.tabs = [
            {
                link: 'main',
                title: 'JMART.PRODUCTS.TABS.PRODUCTS'
            },
            {
                link: 'import',
                title: 'JMART.PRODUCTS.TABS.IMPORT'
            },
            {
                link: 'binding',
                title: 'JMART.PRODUCTS.TABS.BINDING'
            },
        ];
    }
};
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-jmart-products',
        template: _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 4970:
/*!*******************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/products.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-file-drop */ 50157);
/* harmony import */ var _pages_main_product_page_main_product_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-product-page/main-product-page.component */ 7948);
/* harmony import */ var _components_card_products_card_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card-products/card-products.component */ 22791);
/* harmony import */ var _components_empty_products_empty_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/empty-products/empty-products.component */ 74525);
/* harmony import */ var _components_carousel_products_carousel_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carousel-products/carousel-products.component */ 5315);
/* harmony import */ var _components_tabs_products_tabs_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabs-products/tabs-products.component */ 25663);
/* harmony import */ var _components_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upload-products/upload-products.component */ 66324);
/* harmony import */ var _components_typography_products_typography_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/typography-products/typography-products.component */ 14310);
/* harmony import */ var _components_table_products_table_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/table-products/table-products.component */ 38439);
/* harmony import */ var _pages_import_product_page_import_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/import-product-page/import-product-page.component */ 95031);
/* harmony import */ var _pages_main_product_page_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main-product-page/products-item/products-item.component */ 57765);
/* harmony import */ var _directives_drag_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/drag.directive */ 22089);
/* harmony import */ var _pages_import_product_page_import_link_upload_import_link_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/import-product-page/import-link-upload/import-link-upload.component */ 63378);
/* harmony import */ var _pages_import_product_page_import_last_info_import_last_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/import-product-page/import-last-info/import-last-info.component */ 96978);
/* harmony import */ var _pages_binding_product_page_binding_product_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/binding-product-page/binding-product-page.component */ 96503);
/* harmony import */ var _pages_binding_product_page_binding_item_binding_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/binding-product-page/binding-item/binding-item.component */ 42482);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products.component */ 1461);
/* harmony import */ var _pages_import_product_page_import_mode_toggle_import_mode_toggle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/import-product-page/import-mode-toggle/import-mode-toggle.component */ 5485);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products-routing.module */ 91413);
/* harmony import */ var _pages_binding_product_page_binding_modal_binding_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/binding-product-page/binding-modal/binding-modal.component */ 70011);


























let ProductsModule = class ProductsModule {
};
ProductsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_16__.ProductsComponent,
            _pages_main_product_page_main_product_page_component__WEBPACK_IMPORTED_MODULE_1__.MainProductPageComponent,
            _components_card_products_card_products_component__WEBPACK_IMPORTED_MODULE_2__.CardProductsComponent,
            _components_empty_products_empty_products_component__WEBPACK_IMPORTED_MODULE_3__.EmptyProductsComponent,
            _components_carousel_products_carousel_products_component__WEBPACK_IMPORTED_MODULE_4__.CarouselProductsComponent,
            _components_tabs_products_tabs_products_component__WEBPACK_IMPORTED_MODULE_5__.TabsProductsComponent,
            _components_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_6__.UploadProductsComponent,
            _components_typography_products_typography_products_component__WEBPACK_IMPORTED_MODULE_7__.TypographyProductsComponent,
            _components_table_products_table_products_component__WEBPACK_IMPORTED_MODULE_8__.TableProductsComponent,
            _pages_import_product_page_import_product_page_component__WEBPACK_IMPORTED_MODULE_9__.ImportProductPageComponent,
            _pages_main_product_page_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_10__.ProductsItemComponent,
            _pages_import_product_page_import_mode_toggle_import_mode_toggle_component__WEBPACK_IMPORTED_MODULE_17__.ImportModeToggleComponent,
            _directives_drag_directive__WEBPACK_IMPORTED_MODULE_11__.DragDirective,
            _pages_import_product_page_import_link_upload_import_link_upload_component__WEBPACK_IMPORTED_MODULE_12__.ImportLinkUploadComponent,
            _pages_import_product_page_import_last_info_import_last_info_component__WEBPACK_IMPORTED_MODULE_13__.ImportLastInfoComponent,
            _pages_binding_product_page_binding_product_page_component__WEBPACK_IMPORTED_MODULE_14__.BindingProductPageComponent,
            _pages_binding_product_page_binding_item_binding_item_component__WEBPACK_IMPORTED_MODULE_15__.BindingItemComponent,
            _pages_binding_product_page_binding_modal_binding_modal_component__WEBPACK_IMPORTED_MODULE_19__.BindingModalComponent,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_18__.ProductsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_24__.NgxFileDropModule],
        exports: [
            _pages_main_product_page_main_product_page_component__WEBPACK_IMPORTED_MODULE_1__.MainProductPageComponent,
            _components_card_products_card_products_component__WEBPACK_IMPORTED_MODULE_2__.CardProductsComponent,
            _components_empty_products_empty_products_component__WEBPACK_IMPORTED_MODULE_3__.EmptyProductsComponent,
            _components_carousel_products_carousel_products_component__WEBPACK_IMPORTED_MODULE_4__.CarouselProductsComponent,
            _components_tabs_products_tabs_products_component__WEBPACK_IMPORTED_MODULE_5__.TabsProductsComponent,
            _components_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_6__.UploadProductsComponent,
            _components_typography_products_typography_products_component__WEBPACK_IMPORTED_MODULE_7__.TypographyProductsComponent,
            _components_table_products_table_products_component__WEBPACK_IMPORTED_MODULE_8__.TableProductsComponent,
            _pages_import_product_page_import_product_page_component__WEBPACK_IMPORTED_MODULE_9__.ImportProductPageComponent,
            _pages_main_product_page_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_10__.ProductsItemComponent,
            _pages_import_product_page_import_mode_toggle_import_mode_toggle_component__WEBPACK_IMPORTED_MODULE_17__.ImportModeToggleComponent,
            _directives_drag_directive__WEBPACK_IMPORTED_MODULE_11__.DragDirective,
            _pages_import_product_page_import_link_upload_import_link_upload_component__WEBPACK_IMPORTED_MODULE_12__.ImportLinkUploadComponent,
            _pages_import_product_page_import_last_info_import_last_info_component__WEBPACK_IMPORTED_MODULE_13__.ImportLastInfoComponent,
            _pages_binding_product_page_binding_product_page_component__WEBPACK_IMPORTED_MODULE_14__.BindingProductPageComponent,
            _pages_binding_product_page_binding_item_binding_item_component__WEBPACK_IMPORTED_MODULE_15__.BindingItemComponent,
        ],
        entryComponents: [_pages_binding_product_page_binding_modal_binding_modal_component__WEBPACK_IMPORTED_MODULE_19__.BindingModalComponent]
    })
], ProductsModule);



/***/ }),

/***/ 68838:
/*!*****************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/services/products.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);




let ProductsService = class ProductsService {
    constructor(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    getProducts(search = '', page = 1) {
        const url = `${this.baseUrl}/gw/catalog/v1/my/products`;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('search', search)
            .set('page', String(page));
        return this.http.get(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    getProduct(id) {
        const url = `${this.baseUrl}/gw/catalog/v1/my/products/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    importProduct(body) {
        const url = `${this.baseUrl}/gw/catalog/v1/my/vendor-product-import/import`;
        return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    getLastImportFile() {
        const url = `${this.baseUrl}/gw/catalog/v1/my/vendor-product-import-file/last`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    getProductsImport(model = '', page = 1, status = 1) {
        const url = `${this.baseUrl}/gw/catalog/v1/my/vendor-product-import`;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('search', model)
            .set('page', String(page))
            .set('status', String(status));
        return this.http.get(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    getImportProductStatusCount() {
        const url = `${this.baseUrl}/gw/catalog/v1/my/vendor-product-import/process-status`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    getAllProducts(query) {
        const url = `${this.baseUrl}/gw/catalog/v1/products?page=1&query=${query}&show_totals=true`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
    clarifyProduct(id, productCode) {
        const url = `${this.baseUrl}/gw/catalog/v1/my/vendor-product-import/clarify/${id}`;
        return this.http.put(url, { 'product_code': productCode }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data));
    }
};
ProductsService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: ['JMART_CABINET_BASE_URL',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ 76839:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/merge.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _observable_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/merge */ 88623);

function merge(...observables) {
    return (source) => source.lift.call((0,_observable_merge__WEBPACK_IMPORTED_MODULE_0__.merge)(source, ...observables));
}


/***/ }),

/***/ 6103:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/card-products/card-products.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  margin: 1rem 0;\n  border-radius: 0.75rem;\n  padding: 1rem 1.5rem;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border: none;\n}\n\n.card-hoverable:hover {\n  transform: scale(1.005);\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.06);\n}\n\n.no_padding {\n  padding: 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JDQ007RURBTiw2R0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsNkdBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREYiLCJmaWxlIjoiY2FyZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbi5jYXJke1xuICBtYXJnaW46IDFyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWhvdmVyYWJsZTpob3ZlcntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5ub19wYWRkaW5ne1xuICBwYWRkaW5nOiAwIDAgIWltcG9ydGFudDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xyXG4vL1xyXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3JcclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXktMTAwOiAjZmFmN2Y3O1xyXG4kZ3JheS0yMDA6ICNmNmY3Zjg7XHJcbiRncmF5LTMwMDogI2VjZWVmMTtcclxuJGdyYXktNDAwOiAjZDZkYWRmO1xyXG4kZ3JheS01MDA6ICNiN2JlYzU7XHJcbiRncmF5LTYwMDogIzY2NmM3MjtcclxuJGdyYXktNzAwOiAjNDc0YjUyO1xyXG4kZ3JheS04MDA6ICNlOWVjZjE7XHJcbiRncmF5LTkwMDogI2RiZGZlMjtcclxuJGdyYXktMTAwMDogIzgyODI4MjtcclxuJGJsYWNrOiAjMWExYzFmO1xyXG5cclxuJGdyYXlzOiAoKTtcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJzEwMCc6ICRncmF5LTEwMCxcclxuICAgICcyMDAnOiAkZ3JheS0yMDAsXHJcbiAgICAnMzAwJzogJGdyYXktMzAwLFxyXG4gICAgJzQwMCc6ICRncmF5LTQwMCxcclxuICAgICc1MDAnOiAkZ3JheS01MDAsXHJcbiAgICAnNjAwJzogJGdyYXktNjAwLFxyXG4gICAgJzcwMCc6ICRncmF5LTcwMCxcclxuICAgICc4MDAnOiAkZ3JheS04MDAsXHJcbiAgKSxcclxuICAkZ3JheXNcclxuKTtcclxuXHJcbiRibHVlOiAjMjA0MTc3O1xyXG4kYmx1ZS1saWdodDogIzE1ODZiYjtcclxuJGJsdWUtd2hpdGU6ICNmNWY5ZmQ7XHJcbiRvcmFuZ2U6ICNlZjU2MzA7XHJcbiRvcmFuZ2UtZGFyazogI2Q0M2UxOTtcclxuJG9yYW5nZS1saWdodDogI2Y3YWI5ODtcclxuJHllbGxvdzogI2VmOGYwMDtcclxuJGdyZWVuOiAjMjM5YTU0O1xyXG4kZ3JlZW4tbGlnaHQ6ICM3NGJhNzI7XHJcbiRyZWQ6ICNmZjAwMDA7XHJcbiRyZWQtbGlnaHQ6ICNmZmVmZWY7XHJcblxyXG4kZ3JheTogJGdyYXktNTAwO1xyXG4kZ3JheS1kYXJrOiAkZ3JheS02MDA7XHJcbiRncmF5LWxpZ2h0OiAkZ3JheS00MDA7XHJcblxyXG4kY29sb3JzOiAoKTtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdibHVlJzogJGJsdWUsXHJcbiAgICAnYmx1ZS1saWdodCc6ICRibHVlLWxpZ2h0LFxyXG4gICAgJ2JsdWUtd2hpdGUnOiAkYmx1ZS13aGl0ZSxcclxuICAgICdvcmFuZ2UnOiAkb3JhbmdlLFxyXG4gICAgJ29yYW5nZS1kYXJrJzogJG9yYW5nZS1kYXJrLFxyXG4gICAgJ29yYW5nZS1saWdodCc6ICRvcmFuZ2UtbGlnaHQsXHJcbiAgICAneWVsbG93JzogJHllbGxvdyxcclxuICAgICdncmVlbic6ICRncmVlbixcclxuICAgICdncmVlbi1saWdodCc6ICRncmVlbi1saWdodCxcclxuICAgICdyZWQnOiAkcmVkLFxyXG4gICAgJ3JlZC1saWdodCc6ICRyZWQtbGlnaHQsXHJcbiAgICAnYmxhY2snOiAkYmxhY2ssXHJcbiAgICAnYmxhY2stbGlnaHQnOiAkZ3JheS03MDAsXHJcbiAgICAnZ3JheSc6ICRncmF5LTUwMCxcclxuICAgICdncmF5LWRhcmsnOiAkZ3JheS02MDAsXHJcbiAgICAnZ3JheS1saWdodCc6ICRncmF5LTQwMCxcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kc2Vjb25kYXJ5OiAkYmx1ZTtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJGluZm86ICRibHVlLWxpZ2h0O1xyXG4kd2FybmluZzogJHllbGxvdztcclxuJGRhbmdlcjogJHJlZDtcclxuJGxpZ2h0OiAkZ3JheS01MDA7XHJcbiRkYXJrOiAkYmxhY2s7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKTtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXHJcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcclxuICAgICdzdWNjZXNzJzogJHN1Y2Nlc3MsXHJcbiAgICAnaW5mbyc6ICRpbmZvLFxyXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcclxuICAgICdkYW5nZXInOiAkZGFuZ2VyLFxyXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxyXG4gICAgJ2RhcmsnOiAkZGFyayxcclxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vICR0ZXh0LWNvbG9yczogKCk7XHJcbi8vICR0ZXh0LWNvbG9yczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgICdkZWZhdWx0JzogJGJsYWNrLFxyXG4vLyAgICAgJ2xvdy1jb250cmFzdCc6ICRncmF5LTYwMCxcclxuLy8gICAgICdpbmZvJzogJGdyYXktNTAwLFxyXG4vLyAgICAgJ2Vycm9yJzogJHJlZCxcclxuLy8gICAgICdsaW5rJzogJGJsdWUsXHJcbi8vICAgICAnYmFsYW5jZSc6ICRncmVlbixcclxuLy8gICAgICdiYWxhbmNlLWNvaW5zJzogJGdyZWVuLWxpZ2h0LFxyXG4vLyAgICksXHJcbi8vICAgJHRleHQtY29sb3JzXHJcbi8vICk7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuJHNwYWNlcjogMXJlbTtcclxuJHNwYWNlcnM6ICgpO1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAvLyAwcHhcclxuICAgIDE6ICRzcGFjZXIgKiAwLjI1LFxyXG4gICAgLy8gNHB4IHh4cyxcclxuICAgIDI6ICRzcGFjZXIgKiAwLjUsXHJcbiAgICAvLyA4cHggeHMsXHJcbiAgICAzOiAkc3BhY2VyLFxyXG4gICAgLy8gMTZweCBzbVxyXG4gICAgNDogJHNwYWNlciAqIDEuNSxcclxuICAgIC8vIDI0cHggbWQsXHJcbiAgICA1OiAkc3BhY2VyICogMixcclxuICAgIC8vIDMycHggbGcsXHJcbiAgICA2OiAkc3BhY2VyICogMi41LFxyXG4gICAgLy8gNDBweCB4bCxcclxuICAgIDc6ICRzcGFjZXIgKiAzLjUsXHJcbiAgICAvLyA1NnB4IHh4bFxyXG4gICAgODogJHNwYWNlciAqIDQsXHJcbiAgICAvLyA2NHB4IHh4bFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG5cclxuJGJvZHktYmc6ICR3aGl0ZTtcclxuJGJvZHktY29sb3I6ICRkYXJrO1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcbiRsaW5rLWRlY29yYXRpb246IG5vbmU7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAkb3JhbmdlLWRhcms7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4vLyBQYXJhZ3JhcGhzXHJcbi8vXHJcbi8vIFN0eWxlIHAgZWxlbWVudC5cclxuXHJcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDY3MHB4LFxyXG4gIG1kOiA5NjBweCxcclxuICBsZzogMTI4MHB4LFxyXG4gIHhsOiAxOTIwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMjgwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1jb2x1bW5zOiAxMjtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4O1xyXG4kZ3JpZC1yb3ctY29sdW1uczogNjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1zbTogMS41O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1tZDogcmVteSgxMik7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAyLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjJyZW07XHJcblxyXG4vLyBMMFxyXG4kYm94LXNoYWRvdy14czogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDFcclxuJGJveC1zaGFkb3ctc206IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDJcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMM1xyXG4kYm94LXNoYWRvdy1sZzogMHB4IDE0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMNFxyXG4kYm94LXNoYWRvdy14bDogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAyNHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGU7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiR0cmFuc2l0aW9uLWZhZGU6IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogaGVpZ2h0IDAuMzVzIGVhc2U7XHJcbiR0cmFuc2l0aW9uLW1heC1oZWlnaHQ6IGFsbCAwLjZzIGVhc2U7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXHJcbiAgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7IC8vIDE0cHhcclxuJGZvbnQtc2l6ZS14czogcmVteSgxMik7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlcjtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiByZW15KDMwKTtcclxuJGgyLWZvbnQtc2l6ZTogcmVteSgyNik7XHJcbiRoMy1mb250LXNpemU6IHJlbXkoMjQpO1xyXG4kaDQtZm9udC1zaXplOiByZW15KDIyKTtcclxuJGg1LWZvbnQtc2l6ZTogcmVteSgyMCk7XHJcbiRoNi1mb250LXNpemU6IHJlbXkoMTgpO1xyXG5cclxuJGgxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMzBweCxcclxuICBzbTogMzZweCxcclxuICBtZDogNDhweCxcclxuICBsZzogNDhweCxcclxuICB4bDogNjBweCxcclxuKTtcclxuXHJcbi8vIGgyIHNpemVzXHJcbiRoMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI2cHgsXHJcbiAgc206IDMwcHgsXHJcbiAgbWQ6IDQwcHgsXHJcbiAgbGc6IDQ0cHgsXHJcbiAgeGw6IDU0cHgsXHJcbik7XHJcblxyXG4vLyBoMyBzaXplc1xyXG4kaDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAyNHB4LFxyXG4gIHNtOiAyNnB4LFxyXG4gIG1kOiAzMnB4LFxyXG4gIGxnOiAzNnB4LFxyXG4gIHhsOiA0NHB4LFxyXG4pO1xyXG5cclxuLy8gaDQgc2l6ZXNcclxuJGg0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjJweCxcclxuICBzbTogMjRweCxcclxuICBtZDogMjRweCxcclxuICBsZzogMjhweCxcclxuICB4bDogMjhweCxcclxuKTtcclxuXHJcbi8vIGg1IHNpemVzXHJcbiRoNS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIwcHgsXHJcbiAgc206IDIycHgsXHJcbiAgbWQ6IDIycHgsXHJcbiAgbGc6IDI0cHgsXHJcbiAgeGw6IDI0cHgsXHJcbik7XHJcblxyXG4vLyBoNiBzaXplc1xyXG4kaDYtZm9udC1zaXplczogKFxyXG4gIHhzOiAxOHB4LFxyXG4gIHNtOiAxOHB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAyMHB4LFxyXG4gIHhsOiAyMHB4LFxyXG4pO1xyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IG51bGw7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRoZWFkaW5ncy1jb2xvcjogbnVsbDtcclxuXHJcbiRwMC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIHhsOiAxOHB4LFxyXG4pO1xyXG5cclxuJHAyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTRweCxcclxuICBzbTogMTRweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEycHgsXHJcbiAgc206IDEycHgsXHJcbiAgbWQ6IDE0cHgsXHJcbiAgbGc6IDE0cHgsXHJcbiAgeGw6IDE0cHgsXHJcbik7XHJcblxyXG4kcDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMHB4LFxyXG4gIHNtOiAxMHB4LFxyXG4gIG1kOiAxMnB4LFxyXG4gIGxnOiAxMnB4LFxyXG4gIHhsOiAxMnB4LFxyXG4pO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuXHJcbiR0ZXh0LW11dGVkOiAkZ3JheS02MDA7XHJcblxyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVGFibGVzXHJcbi8vIC8vXHJcbi8vIC8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cclxuXHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCdXR0b25zICsgRm9ybXNcclxuLy8gLy9cclxuLy8gLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6IG51bGw7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6IHJlbXkoMSk7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDEuMnJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogJGxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMi41cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kYnRuLXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRidG4tZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGJ0bi1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuJGJ0bi13aGl0ZS1zcGFjZTogbnVsbDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktc206ICRpbnB1dC1idG4tcGFkZGluZy15LXNtO1xyXG4kYnRuLXBhZGRpbmcteC1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXgtc207XHJcbiRidG4tZm9udC1zaXplLXNtOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1saW5lLWhlaWdodC1zbTogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTtcclxuXHJcbiRidG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZztcclxuJGJ0bi1wYWRkaW5nLXgtbGc6ICRpbnB1dC1idG4tcGFkZGluZy14LWxnO1xyXG4kYnRuLWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGc7XHJcbiRidG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc7XHJcblxyXG4kYnRuLWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRidG4tZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuNTtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiA4cHg7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAvLyBGb3Jtc1xyXG5cclxuLy8gJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbXkoMjApO1xyXG4kaW5wdXQtZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRpbnB1dC1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRkYXJrO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG5cclxuJGlucHV0LWZvY3VzLWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuLy8gJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAkZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICRpbnB1dC1wYWRkaW5nLXk7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogMS4yNXJlbTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxLjI1cmVtOyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmc6ICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6IGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSBuby1yZXBlYXQgcmlnaHRcclxuICAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKFxyXG4gIDFlbSAqIDAuNzUsXHJcbiAgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAwLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArXHJcbiAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ1xyXG4pICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHRcclxuICAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZlxyXG4gICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtdGV4dDogKFxyXG4vLyAgIGVuOiBcIkJyb3dzZVwiXHJcbi8vICkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHZhbGlkYXRpb25cclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xyXG4vLyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgIFwidmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICAgIFwiaW52YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICApLFxyXG4vLyAgICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXHJcbi8vICk7XHJcblxyXG4vLyAvLyBaLWluZGV4IG1hc3RlciBsaXN0XHJcbi8vIC8vXHJcbi8vIC8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xyXG4vLyAvLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXHJcblxyXG4vLyAkemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2c1xyXG5cclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdmJhclxyXG5cclxuLy8gJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vIC8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xyXG4vLyAkbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLW1pbi13aWR0aDogMTByZW07XHJcbiRkcm9wZG93bi1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJGRyb3Bkb3duLXNwYWNlcjogMC4xMjVyZW07XHJcbiRkcm9wZG93bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGRyb3Bkb3duLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJGRyb3Bkb3duLWJnOiAkd2hpdGU7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjE1KTtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsXHJcbiAgJGRyb3Bkb3duLWJvcmRlci13aWR0aFxyXG4pO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogJG5hdi1kaXZpZGVyLW1hcmdpbi15O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkZ3JheS0yMDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjI1cmVtO1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIC8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC42cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxLjVyZW07XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6IDA7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJGxpbmstaG92ZXItY29sb3I7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogJGdyYXktODAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbi8vIC8vIEp1bWJvdHJvblxyXG5cclxuLy8gJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2FyZHNcclxuXHJcbi8vICRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvb2x0aXBzXHJcblxyXG4vLyAkdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAyNDZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjIpICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJHBvcG92ZXItYm9yZGVyLXJhZGl1cyxcclxuICAkcG9wb3Zlci1ib3JkZXItd2lkdGhcclxuKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogJGJveC1zaGFkb3cteGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xyXG5cclxuLy8gJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9hc3RzXHJcblxyXG4vLyAkdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiByZW15KDEyKTtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIDAuMjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtO1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbWQ7XHJcblxyXG4vLyAkYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XHJcbi8vICRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xyXG4vLyAvLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXHJcbi8vIC8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cclxuLy8gJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC43NXJlbTtcclxuXHJcbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xyXG4vLyAkbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiBudWxsO1xyXG4kbW9kYWwtY29udGVudC1iZzogJHdoaXRlO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogbm9uZTtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRibGFjaztcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogMTA0NHB4O1xyXG4vLyAkbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsZXJ0c1xyXG4vLyAvL1xyXG4vLyAvLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbi8vICRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByb2dyZXNzIGJhcnNcclxuXHJcbi8vICRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIExpc3QgZ3JvdXBcclxuXHJcbi8vICRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6IDBweDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbi8vICR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGaWd1cmVzXHJcblxyXG4vLyAkZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XHJcbi8vICRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJyZWFkY3J1bWJzXHJcblxyXG4vLyAkYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcm91c2VsXHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXHJcblxyXG4vLyAvLyBTcGlubmVyc1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDbG9zZVxyXG5cclxuLy8gJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENvZGVcclxuXHJcbi8vICRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xyXG4vLyAkY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBVdGlsaXRpZXNcclxuXHJcbi8vICRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcclxuLy8gJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xyXG4vLyAkcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByaW50aW5nXHJcblxyXG4vLyAkcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcclxuLy8gJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vIEp5c2FuIFZhcmlhYmxlc1xyXG5cclxuQGZ1bmN0aW9uIHNwYWNlKCRzaXplKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRzcGFjZXJzLCAka2V5OiAkc2l6ZSk7XHJcbn1cclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA2MnB4O1xyXG4kaGVhZGVyLWhlaWdodC1tZDogMTAwcHg7XHJcbiRoZWFkZXItd2lkdGg6IDI4MHB4O1xyXG5cclxuJGJ0bi1taW4td2lkdGg6IDE2NHB4O1xyXG5cclxuLy8gSi1pbnB1dFxyXG4kai1pbnB1dC1mb250LXNpemU6IDFyZW07XHJcbiRqLWlucHV0LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcclxuJGotaW5wdXQtZm9udC1zdHlsZTogbm9ybWFsO1xyXG4kai1pbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcblxyXG4kai1pbnB1dC1saW5lLWhlaWdodDogMjBweDtcclxuJGotaW5wdXQtcGFkZGluZy15OiAxNy41cHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteDogMjBweDtcclxuXHJcbiRqLWlucHV0LWJvcmRlci13aWR0aDogMXB4O1xyXG4kai1pbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRqLWlucHV0LWJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yOiAkYmxhY2s7XHJcbiRqLWlucHV0LW1hc2stY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1pY29uLWNvbG9yOiAkb3JhbmdlO1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZXJyb3I6ICRyZWQtbGlnaHQ7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1kaXNhYmxlZDogJGlucHV0LWRpc2FibGVkLWJnOyAvLyBmcm9tIGZpZ21hIHByaW1pdGl2ZXMgc2hvdWxkIGJlIGdyYXktMjAwXHJcblxyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3A6ICRqLWlucHV0LXBhZGRpbmcteSArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wLWFjdGl2ZTogMTBweDtcclxuJGotaW5wdXQtbGluay1wb3NpdGlvbi10b3A6IDE2cHg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ6ICRqLWlucHV0LXBhZGRpbmcteCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6ICRqLWlucHV0LWxpbmUtaGVpZ2h0O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LXBhZGRpbmctdG9wOiAyN3B4O1xyXG4kai1pbnB1dC1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuJGotaW5wdXQtbWFyZ2luLWJvdHRvbTogMTZweDtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1wb3NpdGlvbjogJGotaW5wdXQtcGFkZGluZy10b3AgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWNoYXItbGVuZ3RoOiA4Ljk5cHg7XHJcblxyXG4kai1pbnB1dC1idXR0b24tcG9zaXRpb246IDIwcHg7XHJcbiRqLWlucHV0LXNoYWRvdy1wb3NpdGlvbjogJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDtcclxuXHJcbiRqLWlucHV0LWxhYmVsLXotaW5kZXg6IDA7XHJcbiRqLWlucHV0LXNoYWRvdy16LWluZGV4OiAxO1xyXG4kai1pbnB1dC16LWluZGV4OiAyO1xyXG4kai1pbnB1dC1saW5rLXotaW5kZXg6IDM7XHJcbiRqLWlucHV0LWJ1dHRvbi16LWluZGV4OiA0O1xyXG5cclxuJGJveC1zaGFkb3ctdG8tdG9wLWxnOiAwIC0xcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6IHRydWU7XHJcbiJdfQ== */";

/***/ }),

/***/ 85574:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/carousel-products/carousel-products.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".img_small {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0.5rem 0;\n  border: 1.5px solid #777777;\n  border-radius: 4px;\n  object-fit: cover;\n  object-position: center center;\n  transition: transform 1s ease;\n  transform: translateY(calc(var(--slide, 0) * 3.5rem));\n}\n\n.imgs {\n  height: 17.5rem;\n  overflow-y: hidden;\n}\n\n.img_small {\n  animation-name: two_move;\n  animation-duration: 2s;\n  animation-fill-mode: forwards;\n}\n\n.img_small:hover {\n  border: 1.5px solid #EF5630;\n}\n\n.img_small_select {\n  border: 1.5px solid #EF5630;\n}\n\n.img_main {\n  width: 100%;\n  max-height: 20rem;\n  cursor: pointer;\n}\n\n.img_main:hover {\n  transform: scale(1.01);\n}\n\n.img_select {\n  cursor: pointer;\n}\n\n.img_size {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxREFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUtGIiwiZmlsZSI6ImNhcm91c2VsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19zbWFsbHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzc3Nzc3NztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCBjYWxjKCAgdmFyKC0tc2xpZGUsIDApICogMy41cmVtKSApO1xuXG5cbn1cbi5pbWdze1xuICBoZWlnaHQ6IDE3LjVyZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5pbWdfc21hbGwge1xuICBhbmltYXRpb24tbmFtZTogdHdvX21vdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaW1nX3NtYWxsOmhvdmVye1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNFRjU2MzA7XG59XG4uaW1nX3NtYWxsX3NlbGVjdHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRUY1NjMwO1xufVxuLmltZ19tYWlue1xuICB3aWR0aDogMTAwJTtcblxuICBtYXgtaGVpZ2h0OiAyMHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZ19tYWluOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuLmltZ19zZWxlY3R7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWdfc2l6ZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlclxufVxuIl19 */";

/***/ }),

/***/ 45562:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/empty-products/empty-products.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0.5rem 0;\n}\n.empty__img {\n  width: 140px;\n  height: 140px;\n}\n.empty__text {\n  display: block;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: #666c72;\n  white-space: pre-wrap;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDSk87RURLUCxxQkFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoiZW1wdHktcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi5lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICAmX19pbWcge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgY29sb3I6ICRncmF5LTYwMDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIvLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2ZhZjdmNztcclxuJGdyYXktMjAwOiAjZjZmN2Y4O1xyXG4kZ3JheS0zMDA6ICNlY2VlZjE7XHJcbiRncmF5LTQwMDogI2Q2ZGFkZjtcclxuJGdyYXktNTAwOiAjYjdiZWM1O1xyXG4kZ3JheS02MDA6ICM2NjZjNzI7XHJcbiRncmF5LTcwMDogIzQ3NGI1MjtcclxuJGdyYXktODAwOiAjZTllY2YxO1xyXG4kZ3JheS05MDA6ICNkYmRmZTI7XHJcbiRncmF5LTEwMDA6ICM4MjgyODI7XHJcbiRibGFjazogIzFhMWMxZjtcclxuXHJcbiRncmF5czogKCk7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICcxMDAnOiAkZ3JheS0xMDAsXHJcbiAgICAnMjAwJzogJGdyYXktMjAwLFxyXG4gICAgJzMwMCc6ICRncmF5LTMwMCxcclxuICAgICc0MDAnOiAkZ3JheS00MDAsXHJcbiAgICAnNTAwJzogJGdyYXktNTAwLFxyXG4gICAgJzYwMCc6ICRncmF5LTYwMCxcclxuICAgICc3MDAnOiAkZ3JheS03MDAsXHJcbiAgICAnODAwJzogJGdyYXktODAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzIwNDE3NztcclxuJGJsdWUtbGlnaHQ6ICMxNTg2YmI7XHJcbiRibHVlLXdoaXRlOiAjZjVmOWZkO1xyXG4kb3JhbmdlOiAjZWY1NjMwO1xyXG4kb3JhbmdlLWRhcms6ICNkNDNlMTk7XHJcbiRvcmFuZ2UtbGlnaHQ6ICNmN2FiOTg7XHJcbiR5ZWxsb3c6ICNlZjhmMDA7XHJcbiRncmVlbjogIzIzOWE1NDtcclxuJGdyZWVuLWxpZ2h0OiAjNzRiYTcyO1xyXG4kcmVkOiAjZmYwMDAwO1xyXG4kcmVkLWxpZ2h0OiAjZmZlZmVmO1xyXG5cclxuJGdyYXk6ICRncmF5LTUwMDtcclxuJGdyYXktZGFyazogJGdyYXktNjAwO1xyXG4kZ3JheS1saWdodDogJGdyYXktNDAwO1xyXG5cclxuJGNvbG9yczogKCk7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnYmx1ZSc6ICRibHVlLFxyXG4gICAgJ2JsdWUtbGlnaHQnOiAkYmx1ZS1saWdodCxcclxuICAgICdibHVlLXdoaXRlJzogJGJsdWUtd2hpdGUsXHJcbiAgICAnb3JhbmdlJzogJG9yYW5nZSxcclxuICAgICdvcmFuZ2UtZGFyayc6ICRvcmFuZ2UtZGFyayxcclxuICAgICdvcmFuZ2UtbGlnaHQnOiAkb3JhbmdlLWxpZ2h0LFxyXG4gICAgJ3llbGxvdyc6ICR5ZWxsb3csXHJcbiAgICAnZ3JlZW4nOiAkZ3JlZW4sXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAkZ3JlZW4tbGlnaHQsXHJcbiAgICAncmVkJzogJHJlZCxcclxuICAgICdyZWQtbGlnaHQnOiAkcmVkLWxpZ2h0LFxyXG4gICAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICAgJ2JsYWNrLWxpZ2h0JzogJGdyYXktNzAwLFxyXG4gICAgJ2dyYXknOiAkZ3JheS01MDAsXHJcbiAgICAnZ3JheS1kYXJrJzogJGdyYXktNjAwLFxyXG4gICAgJ2dyYXktbGlnaHQnOiAkZ3JheS00MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJHNlY29uZGFyeTogJGJsdWU7XHJcbiRzdWNjZXNzOiAkZ3JlZW47XHJcbiRpbmZvOiAkYmx1ZS1saWdodDtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcbiRkYW5nZXI6ICRyZWQ7XHJcbiRsaWdodDogJGdyYXktNTAwO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCk7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAncHJpbWFyeSc6ICRwcmltYXJ5LFxyXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXHJcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxyXG4gICAgJ2luZm8nOiAkaW5mbyxcclxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXHJcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcclxuICAgICdsaWdodCc6ICRsaWdodCxcclxuICAgICdkYXJrJzogJGRhcmssXHJcbiAgICAnd2hpdGUnOiAkd2hpdGUsXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyAkdGV4dC1jb2xvcnM6ICgpO1xyXG4vLyAkdGV4dC1jb2xvcnM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICAnZGVmYXVsdCc6ICRibGFjayxcclxuLy8gICAgICdsb3ctY29udHJhc3QnOiAkZ3JheS02MDAsXHJcbi8vICAgICAnaW5mbyc6ICRncmF5LTUwMCxcclxuLy8gICAgICdlcnJvcic6ICRyZWQsXHJcbi8vICAgICAnbGluayc6ICRibHVlLFxyXG4vLyAgICAgJ2JhbGFuY2UnOiAkZ3JlZW4sXHJcbi8vICAgICAnYmFsYW5jZS1jb2lucyc6ICRncmVlbi1saWdodCxcclxuLy8gICApLFxyXG4vLyAgICR0ZXh0LWNvbG9yc1xyXG4vLyApO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgLy8gMHB4XHJcbiAgICAxOiAkc3BhY2VyICogMC4yNSxcclxuICAgIC8vIDRweCB4eHMsXHJcbiAgICAyOiAkc3BhY2VyICogMC41LFxyXG4gICAgLy8gOHB4IHhzLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIC8vIDE2cHggc21cclxuICAgIDQ6ICRzcGFjZXIgKiAxLjUsXHJcbiAgICAvLyAyNHB4IG1kLFxyXG4gICAgNTogJHNwYWNlciAqIDIsXHJcbiAgICAvLyAzMnB4IGxnLFxyXG4gICAgNjogJHNwYWNlciAqIDIuNSxcclxuICAgIC8vIDQwcHggeGwsXHJcbiAgICA3OiAkc3BhY2VyICogMy41LFxyXG4gICAgLy8gNTZweCB4eGxcclxuICAgIDg6ICRzcGFjZXIgKiA0LFxyXG4gICAgLy8gNjRweCB4eGxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAkd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAkZGFyaztcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogJG9yYW5nZS1kYXJrO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG4vL1xyXG4vLyBTdHlsZSBwIGVsZW1lbnQuXHJcblxyXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA2NzBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTkyMHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMzBweDtcclxuJGdyaWQtcm93LWNvbHVtbnM6IDY7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbWQ6IHJlbXkoMTIpO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMi41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4ycmVtO1xyXG5cclxuLy8gTDBcclxuJGJveC1zaGFkb3cteHM6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEwxXHJcbiRib3gtc2hhZG93LXNtOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwyXHJcbiRib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDNcclxuJGJveC1zaGFkb3ctbGc6IDBweCAxNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDRcclxuJGJveC1zaGFkb3cteGw6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4kdHJhbnNpdGlvbi1mYWRlOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuJHRyYW5zaXRpb24tY29sbGFwc2U6IGhlaWdodCAwLjM1cyBlYXNlO1xyXG4kdHJhbnNpdGlvbi1tYXgtaGVpZ2h0OiBhbGwgMC42cyBlYXNlO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0OyAvLyAxNHB4XHJcbiRmb250LXNpemUteHM6IHJlbXkoMTIpO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogcmVteSgzMCk7XHJcbiRoMi1mb250LXNpemU6IHJlbXkoMjYpO1xyXG4kaDMtZm9udC1zaXplOiByZW15KDI0KTtcclxuJGg0LWZvbnQtc2l6ZTogcmVteSgyMik7XHJcbiRoNS1mb250LXNpemU6IHJlbXkoMjApO1xyXG4kaDYtZm9udC1zaXplOiByZW15KDE4KTtcclxuXHJcbiRoMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDMwcHgsXHJcbiAgc206IDM2cHgsXHJcbiAgbWQ6IDQ4cHgsXHJcbiAgbGc6IDQ4cHgsXHJcbiAgeGw6IDYwcHgsXHJcbik7XHJcblxyXG4vLyBoMiBzaXplc1xyXG4kaDItZm9udC1zaXplczogKFxyXG4gIHhzOiAyNnB4LFxyXG4gIHNtOiAzMHB4LFxyXG4gIG1kOiA0MHB4LFxyXG4gIGxnOiA0NHB4LFxyXG4gIHhsOiA1NHB4LFxyXG4pO1xyXG5cclxuLy8gaDMgc2l6ZXNcclxuJGgzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjRweCxcclxuICBzbTogMjZweCxcclxuICBtZDogMzJweCxcclxuICBsZzogMzZweCxcclxuICB4bDogNDRweCxcclxuKTtcclxuXHJcbi8vIGg0IHNpemVzXHJcbiRoNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIycHgsXHJcbiAgc206IDI0cHgsXHJcbiAgbWQ6IDI0cHgsXHJcbiAgbGc6IDI4cHgsXHJcbiAgeGw6IDI4cHgsXHJcbik7XHJcblxyXG4vLyBoNSBzaXplc1xyXG4kaDUtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMHB4LFxyXG4gIHNtOiAyMnB4LFxyXG4gIG1kOiAyMnB4LFxyXG4gIGxnOiAyNHB4LFxyXG4gIHhsOiAyNHB4LFxyXG4pO1xyXG5cclxuLy8gaDYgc2l6ZXNcclxuJGg2LWZvbnQtc2l6ZXM6IChcclxuICB4czogMThweCxcclxuICBzbTogMThweCxcclxuICBtZDogMThweCxcclxuICBsZzogMjBweCxcclxuICB4bDogMjBweCxcclxuKTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGluZ3MtY29sb3I6IG51bGw7XHJcblxyXG4kcDAtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMThweCxcclxuICBsZzogMThweCxcclxuICB4bDogMThweCxcclxuKTtcclxuXHJcbiRwMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE0cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMnB4LFxyXG4gIHNtOiAxMnB4LFxyXG4gIG1kOiAxNHB4LFxyXG4gIGxnOiAxNHB4LFxyXG4gIHhsOiAxNHB4LFxyXG4pO1xyXG5cclxuJHA0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMTBweCxcclxuICBzbTogMTBweCxcclxuICBtZDogMTJweCxcclxuICBsZzogMTJweCxcclxuICB4bDogMTJweCxcclxuKTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6ICRmb250LXNpemUteHM7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRhYmxlc1xyXG4vLyAvL1xyXG4vLyAvLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vIC8vXHJcbi8vIC8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDFyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiByZW15KDEpO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxLjJyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDIuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcbiRidG4td2hpdGUtc3BhY2U6IG51bGw7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogOHB4O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gLy8gRm9ybXNcclxuXHJcbi8vICRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW15KDIwKTtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZGFyaztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuXHJcbiRpbnB1dC1mb2N1cy1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbi8vICRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMS4yNXJlbTsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnOiAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGdyYXktODAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZChcclxuICAxZW0gKiAwLjc1LFxyXG4gICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogMC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggK1xyXG4gICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmdcclxuKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXRleHQ6IChcclxuLy8gICBlbjogXCJCcm93c2VcIlxyXG4vLyApICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB2YWxpZGF0aW9uXHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcclxuLy8gLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICBcInZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgICBcImludmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgKSxcclxuLy8gICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4vLyApO1xyXG5cclxuLy8gLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vLyAvL1xyXG4vLyAvLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuLy8gJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdnNcclxuXHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZiYXJcclxuXHJcbi8vICRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAvLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuLy8gJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRkcm9wZG93bi1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRkcm9wZG93bi1iZzogJHdoaXRlO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xNSk7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRkcm9wZG93bi1ib3JkZXItcmFkaXVzLFxyXG4gICRkcm9wZG93bi1ib3JkZXItd2lkdGhcclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktMjAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC4yNXJlbTtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyAvLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNnJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMS41cmVtO1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogMS4yNTtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRncmF5LTgwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4vLyAvLyBKdW1ib3Ryb25cclxuXHJcbi8vICRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcmRzXHJcblxyXG4vLyAkY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuLy8gJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb29sdGlwc1xyXG5cclxuLy8gJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogMjQ2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4yKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRwb3BvdmVyLWJvcmRlci1yYWRpdXMsXHJcbiAgJHBvcG92ZXItYm9yZGVyLXdpZHRoXHJcbikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICRib3gtc2hhZG93LXhsICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuXHJcbi8vICRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvYXN0c1xyXG5cclxuLy8gJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogcmVteSgxMik7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwO1xyXG4vLyAkYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAwLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbTtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLW1kO1xyXG5cclxuLy8gJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xyXG4vLyAkYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcclxuLy8gLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxyXG4vLyAvLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXHJcbi8vICRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuNzVyZW07XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuLy8gJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IG5vbmU7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjc7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS41cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6IDEwNDRweDtcclxuLy8gJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGVydHNcclxuLy8gLy9cclxuLy8gLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4vLyAkYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4vLyAkcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBMaXN0IGdyb3VwXHJcblxyXG4vLyAkbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4vLyAkdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRmlndXJlc1xyXG5cclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xyXG4vLyAkZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCcmVhZGNydW1ic1xyXG5cclxuLy8gJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJvdXNlbFxyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gLy8gU3Bpbm5lcnNcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2xvc2VcclxuXHJcbi8vICRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDb2RlXHJcblxyXG4vLyAkY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcclxuLy8gJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVXRpbGl0aWVzXHJcblxyXG4vLyAkZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XHJcbi8vICRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcclxuLy8gJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcmludGluZ1xyXG5cclxuLy8gJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XHJcbi8vICRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyBKeXNhbiBWYXJpYWJsZXNcclxuXHJcbkBmdW5jdGlvbiBzcGFjZSgkc2l6ZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkc3BhY2VycywgJGtleTogJHNpemUpO1xyXG59XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNjJweDtcclxuJGhlYWRlci1oZWlnaHQtbWQ6IDEwMHB4O1xyXG4kaGVhZGVyLXdpZHRoOiAyODBweDtcclxuXHJcbiRidG4tbWluLXdpZHRoOiAxNjRweDtcclxuXHJcbi8vIEotaW5wdXRcclxuJGotaW5wdXQtZm9udC1zaXplOiAxcmVtO1xyXG4kai1pbnB1dC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XHJcbiRqLWlucHV0LWZvbnQtc3R5bGU6IG5vcm1hbDtcclxuJGotaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG5cclxuJGotaW5wdXQtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteTogMTcuNXB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXg6IDIwcHg7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItd2lkdGg6IDFweDtcclxuJGotaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kai1pbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodDtcclxuJGotaW5wdXQtdGV4dC1jb2xvcjogJGJsYWNrO1xyXG4kai1pbnB1dC1tYXNrLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtaWNvbi1jb2xvcjogJG9yYW5nZTtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtdGV4dC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWVycm9yOiAkcmVkLWxpZ2h0O1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZGlzYWJsZWQ6ICRpbnB1dC1kaXNhYmxlZC1iZzsgLy8gZnJvbSBmaWdtYSBwcmltaXRpdmVzIHNob3VsZCBiZSBncmF5LTIwMFxyXG5cclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wOiAkai1pbnB1dC1wYWRkaW5nLXkgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcC1hY3RpdmU6IDEwcHg7XHJcbiRqLWlucHV0LWxpbmstcG9zaXRpb24tdG9wOiAxNnB4O1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0OiAkai1pbnB1dC1wYWRkaW5nLXggKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAkai1pbnB1dC1saW5lLWhlaWdodDtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1wYWRkaW5nLXRvcDogMjdweDtcclxuJGotaW5wdXQtcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiRqLWlucHV0LW1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItcG9zaXRpb246ICRqLWlucHV0LXBhZGRpbmctdG9wICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1jaGFyLWxlbmd0aDogOC45OXB4O1xyXG5cclxuJGotaW5wdXQtYnV0dG9uLXBvc2l0aW9uOiAyMHB4O1xyXG4kai1pbnB1dC1zaGFkb3ctcG9zaXRpb246ICRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ7XHJcblxyXG4kai1pbnB1dC1sYWJlbC16LWluZGV4OiAwO1xyXG4kai1pbnB1dC1zaGFkb3ctei1pbmRleDogMTtcclxuJGotaW5wdXQtei1pbmRleDogMjtcclxuJGotaW5wdXQtbGluay16LWluZGV4OiAzO1xyXG4kai1pbnB1dC1idXR0b24tei1pbmRleDogNDtcclxuXHJcbiRib3gtc2hhZG93LXRvLXRvcC1sZzogMCAtMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlO1xyXG4iXX0= */";

/***/ }),

/***/ 14628:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/table-products/table-products.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 70239:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/tabs-products/tabs-products.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".tabs {\n  display: flex;\n  border-bottom: 1px solid #eceef1;\n  margin-bottom: 2.5rem;\n}\n.tabs__link {\n  color: #666c72;\n  padding: 1rem 0;\n  margin-left: 2.5rem;\n  display: block;\n  border-bottom: 2px solid transparent;\n  bottom: -1.5px;\n  position: relative;\n}\n.tabs__link:first-child {\n  margin-left: 0;\n}\n.tabs__link_active {\n  color: #1a1c1f;\n  font-weight: 500;\n  border-bottom-color: #ef5630;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FBREY7QUFFRTtFQUNFLGNDTU87RURMUCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtBQUFOO0FBSUU7RUFDRSxjQ0hJO0VESUosZ0JDdU9lO0VEdE9mLDRCQ2VLO0FEakJUIiwiZmlsZSI6InRhYnMtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS0zMDA7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgJl9fbGluayB7XG4gICAgY29sb3I6ICRncmF5LWRhcms7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTogLTEuNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG5cbiAgJl9fbGlua19hY3RpdmV7XG4gICAgY29sb3I6ICRkYXJrO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG59XG4iLCIvLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2ZhZjdmNztcclxuJGdyYXktMjAwOiAjZjZmN2Y4O1xyXG4kZ3JheS0zMDA6ICNlY2VlZjE7XHJcbiRncmF5LTQwMDogI2Q2ZGFkZjtcclxuJGdyYXktNTAwOiAjYjdiZWM1O1xyXG4kZ3JheS02MDA6ICM2NjZjNzI7XHJcbiRncmF5LTcwMDogIzQ3NGI1MjtcclxuJGdyYXktODAwOiAjZTllY2YxO1xyXG4kZ3JheS05MDA6ICNkYmRmZTI7XHJcbiRncmF5LTEwMDA6ICM4MjgyODI7XHJcbiRibGFjazogIzFhMWMxZjtcclxuXHJcbiRncmF5czogKCk7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICcxMDAnOiAkZ3JheS0xMDAsXHJcbiAgICAnMjAwJzogJGdyYXktMjAwLFxyXG4gICAgJzMwMCc6ICRncmF5LTMwMCxcclxuICAgICc0MDAnOiAkZ3JheS00MDAsXHJcbiAgICAnNTAwJzogJGdyYXktNTAwLFxyXG4gICAgJzYwMCc6ICRncmF5LTYwMCxcclxuICAgICc3MDAnOiAkZ3JheS03MDAsXHJcbiAgICAnODAwJzogJGdyYXktODAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzIwNDE3NztcclxuJGJsdWUtbGlnaHQ6ICMxNTg2YmI7XHJcbiRibHVlLXdoaXRlOiAjZjVmOWZkO1xyXG4kb3JhbmdlOiAjZWY1NjMwO1xyXG4kb3JhbmdlLWRhcms6ICNkNDNlMTk7XHJcbiRvcmFuZ2UtbGlnaHQ6ICNmN2FiOTg7XHJcbiR5ZWxsb3c6ICNlZjhmMDA7XHJcbiRncmVlbjogIzIzOWE1NDtcclxuJGdyZWVuLWxpZ2h0OiAjNzRiYTcyO1xyXG4kcmVkOiAjZmYwMDAwO1xyXG4kcmVkLWxpZ2h0OiAjZmZlZmVmO1xyXG5cclxuJGdyYXk6ICRncmF5LTUwMDtcclxuJGdyYXktZGFyazogJGdyYXktNjAwO1xyXG4kZ3JheS1saWdodDogJGdyYXktNDAwO1xyXG5cclxuJGNvbG9yczogKCk7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnYmx1ZSc6ICRibHVlLFxyXG4gICAgJ2JsdWUtbGlnaHQnOiAkYmx1ZS1saWdodCxcclxuICAgICdibHVlLXdoaXRlJzogJGJsdWUtd2hpdGUsXHJcbiAgICAnb3JhbmdlJzogJG9yYW5nZSxcclxuICAgICdvcmFuZ2UtZGFyayc6ICRvcmFuZ2UtZGFyayxcclxuICAgICdvcmFuZ2UtbGlnaHQnOiAkb3JhbmdlLWxpZ2h0LFxyXG4gICAgJ3llbGxvdyc6ICR5ZWxsb3csXHJcbiAgICAnZ3JlZW4nOiAkZ3JlZW4sXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAkZ3JlZW4tbGlnaHQsXHJcbiAgICAncmVkJzogJHJlZCxcclxuICAgICdyZWQtbGlnaHQnOiAkcmVkLWxpZ2h0LFxyXG4gICAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICAgJ2JsYWNrLWxpZ2h0JzogJGdyYXktNzAwLFxyXG4gICAgJ2dyYXknOiAkZ3JheS01MDAsXHJcbiAgICAnZ3JheS1kYXJrJzogJGdyYXktNjAwLFxyXG4gICAgJ2dyYXktbGlnaHQnOiAkZ3JheS00MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJHNlY29uZGFyeTogJGJsdWU7XHJcbiRzdWNjZXNzOiAkZ3JlZW47XHJcbiRpbmZvOiAkYmx1ZS1saWdodDtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcbiRkYW5nZXI6ICRyZWQ7XHJcbiRsaWdodDogJGdyYXktNTAwO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCk7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAncHJpbWFyeSc6ICRwcmltYXJ5LFxyXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXHJcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxyXG4gICAgJ2luZm8nOiAkaW5mbyxcclxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXHJcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcclxuICAgICdsaWdodCc6ICRsaWdodCxcclxuICAgICdkYXJrJzogJGRhcmssXHJcbiAgICAnd2hpdGUnOiAkd2hpdGUsXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyAkdGV4dC1jb2xvcnM6ICgpO1xyXG4vLyAkdGV4dC1jb2xvcnM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICAnZGVmYXVsdCc6ICRibGFjayxcclxuLy8gICAgICdsb3ctY29udHJhc3QnOiAkZ3JheS02MDAsXHJcbi8vICAgICAnaW5mbyc6ICRncmF5LTUwMCxcclxuLy8gICAgICdlcnJvcic6ICRyZWQsXHJcbi8vICAgICAnbGluayc6ICRibHVlLFxyXG4vLyAgICAgJ2JhbGFuY2UnOiAkZ3JlZW4sXHJcbi8vICAgICAnYmFsYW5jZS1jb2lucyc6ICRncmVlbi1saWdodCxcclxuLy8gICApLFxyXG4vLyAgICR0ZXh0LWNvbG9yc1xyXG4vLyApO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgLy8gMHB4XHJcbiAgICAxOiAkc3BhY2VyICogMC4yNSxcclxuICAgIC8vIDRweCB4eHMsXHJcbiAgICAyOiAkc3BhY2VyICogMC41LFxyXG4gICAgLy8gOHB4IHhzLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIC8vIDE2cHggc21cclxuICAgIDQ6ICRzcGFjZXIgKiAxLjUsXHJcbiAgICAvLyAyNHB4IG1kLFxyXG4gICAgNTogJHNwYWNlciAqIDIsXHJcbiAgICAvLyAzMnB4IGxnLFxyXG4gICAgNjogJHNwYWNlciAqIDIuNSxcclxuICAgIC8vIDQwcHggeGwsXHJcbiAgICA3OiAkc3BhY2VyICogMy41LFxyXG4gICAgLy8gNTZweCB4eGxcclxuICAgIDg6ICRzcGFjZXIgKiA0LFxyXG4gICAgLy8gNjRweCB4eGxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAkd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAkZGFyaztcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogJG9yYW5nZS1kYXJrO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG4vL1xyXG4vLyBTdHlsZSBwIGVsZW1lbnQuXHJcblxyXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA2NzBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTkyMHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMzBweDtcclxuJGdyaWQtcm93LWNvbHVtbnM6IDY7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbWQ6IHJlbXkoMTIpO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMi41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4ycmVtO1xyXG5cclxuLy8gTDBcclxuJGJveC1zaGFkb3cteHM6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEwxXHJcbiRib3gtc2hhZG93LXNtOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwyXHJcbiRib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDNcclxuJGJveC1zaGFkb3ctbGc6IDBweCAxNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDRcclxuJGJveC1zaGFkb3cteGw6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4kdHJhbnNpdGlvbi1mYWRlOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuJHRyYW5zaXRpb24tY29sbGFwc2U6IGhlaWdodCAwLjM1cyBlYXNlO1xyXG4kdHJhbnNpdGlvbi1tYXgtaGVpZ2h0OiBhbGwgMC42cyBlYXNlO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0OyAvLyAxNHB4XHJcbiRmb250LXNpemUteHM6IHJlbXkoMTIpO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogcmVteSgzMCk7XHJcbiRoMi1mb250LXNpemU6IHJlbXkoMjYpO1xyXG4kaDMtZm9udC1zaXplOiByZW15KDI0KTtcclxuJGg0LWZvbnQtc2l6ZTogcmVteSgyMik7XHJcbiRoNS1mb250LXNpemU6IHJlbXkoMjApO1xyXG4kaDYtZm9udC1zaXplOiByZW15KDE4KTtcclxuXHJcbiRoMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDMwcHgsXHJcbiAgc206IDM2cHgsXHJcbiAgbWQ6IDQ4cHgsXHJcbiAgbGc6IDQ4cHgsXHJcbiAgeGw6IDYwcHgsXHJcbik7XHJcblxyXG4vLyBoMiBzaXplc1xyXG4kaDItZm9udC1zaXplczogKFxyXG4gIHhzOiAyNnB4LFxyXG4gIHNtOiAzMHB4LFxyXG4gIG1kOiA0MHB4LFxyXG4gIGxnOiA0NHB4LFxyXG4gIHhsOiA1NHB4LFxyXG4pO1xyXG5cclxuLy8gaDMgc2l6ZXNcclxuJGgzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjRweCxcclxuICBzbTogMjZweCxcclxuICBtZDogMzJweCxcclxuICBsZzogMzZweCxcclxuICB4bDogNDRweCxcclxuKTtcclxuXHJcbi8vIGg0IHNpemVzXHJcbiRoNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIycHgsXHJcbiAgc206IDI0cHgsXHJcbiAgbWQ6IDI0cHgsXHJcbiAgbGc6IDI4cHgsXHJcbiAgeGw6IDI4cHgsXHJcbik7XHJcblxyXG4vLyBoNSBzaXplc1xyXG4kaDUtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMHB4LFxyXG4gIHNtOiAyMnB4LFxyXG4gIG1kOiAyMnB4LFxyXG4gIGxnOiAyNHB4LFxyXG4gIHhsOiAyNHB4LFxyXG4pO1xyXG5cclxuLy8gaDYgc2l6ZXNcclxuJGg2LWZvbnQtc2l6ZXM6IChcclxuICB4czogMThweCxcclxuICBzbTogMThweCxcclxuICBtZDogMThweCxcclxuICBsZzogMjBweCxcclxuICB4bDogMjBweCxcclxuKTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGluZ3MtY29sb3I6IG51bGw7XHJcblxyXG4kcDAtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMThweCxcclxuICBsZzogMThweCxcclxuICB4bDogMThweCxcclxuKTtcclxuXHJcbiRwMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE0cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMnB4LFxyXG4gIHNtOiAxMnB4LFxyXG4gIG1kOiAxNHB4LFxyXG4gIGxnOiAxNHB4LFxyXG4gIHhsOiAxNHB4LFxyXG4pO1xyXG5cclxuJHA0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMTBweCxcclxuICBzbTogMTBweCxcclxuICBtZDogMTJweCxcclxuICBsZzogMTJweCxcclxuICB4bDogMTJweCxcclxuKTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6ICRmb250LXNpemUteHM7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRhYmxlc1xyXG4vLyAvL1xyXG4vLyAvLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vIC8vXHJcbi8vIC8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDFyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiByZW15KDEpO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxLjJyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDIuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcbiRidG4td2hpdGUtc3BhY2U6IG51bGw7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogOHB4O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gLy8gRm9ybXNcclxuXHJcbi8vICRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW15KDIwKTtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZGFyaztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuXHJcbiRpbnB1dC1mb2N1cy1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbi8vICRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMS4yNXJlbTsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnOiAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGdyYXktODAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZChcclxuICAxZW0gKiAwLjc1LFxyXG4gICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogMC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggK1xyXG4gICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmdcclxuKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXRleHQ6IChcclxuLy8gICBlbjogXCJCcm93c2VcIlxyXG4vLyApICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB2YWxpZGF0aW9uXHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcclxuLy8gLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICBcInZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgICBcImludmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgKSxcclxuLy8gICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4vLyApO1xyXG5cclxuLy8gLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vLyAvL1xyXG4vLyAvLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuLy8gJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdnNcclxuXHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZiYXJcclxuXHJcbi8vICRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAvLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuLy8gJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRkcm9wZG93bi1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRkcm9wZG93bi1iZzogJHdoaXRlO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xNSk7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRkcm9wZG93bi1ib3JkZXItcmFkaXVzLFxyXG4gICRkcm9wZG93bi1ib3JkZXItd2lkdGhcclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktMjAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC4yNXJlbTtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyAvLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNnJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMS41cmVtO1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogMS4yNTtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRncmF5LTgwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4vLyAvLyBKdW1ib3Ryb25cclxuXHJcbi8vICRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcmRzXHJcblxyXG4vLyAkY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuLy8gJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb29sdGlwc1xyXG5cclxuLy8gJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogMjQ2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4yKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRwb3BvdmVyLWJvcmRlci1yYWRpdXMsXHJcbiAgJHBvcG92ZXItYm9yZGVyLXdpZHRoXHJcbikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICRib3gtc2hhZG93LXhsICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuXHJcbi8vICRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvYXN0c1xyXG5cclxuLy8gJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogcmVteSgxMik7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwO1xyXG4vLyAkYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAwLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbTtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLW1kO1xyXG5cclxuLy8gJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xyXG4vLyAkYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcclxuLy8gLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxyXG4vLyAvLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXHJcbi8vICRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuNzVyZW07XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuLy8gJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IG5vbmU7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjc7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS41cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6IDEwNDRweDtcclxuLy8gJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGVydHNcclxuLy8gLy9cclxuLy8gLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4vLyAkYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4vLyAkcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBMaXN0IGdyb3VwXHJcblxyXG4vLyAkbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4vLyAkdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRmlndXJlc1xyXG5cclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xyXG4vLyAkZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCcmVhZGNydW1ic1xyXG5cclxuLy8gJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJvdXNlbFxyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gLy8gU3Bpbm5lcnNcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2xvc2VcclxuXHJcbi8vICRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDb2RlXHJcblxyXG4vLyAkY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcclxuLy8gJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVXRpbGl0aWVzXHJcblxyXG4vLyAkZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XHJcbi8vICRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcclxuLy8gJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcmludGluZ1xyXG5cclxuLy8gJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XHJcbi8vICRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyBKeXNhbiBWYXJpYWJsZXNcclxuXHJcbkBmdW5jdGlvbiBzcGFjZSgkc2l6ZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkc3BhY2VycywgJGtleTogJHNpemUpO1xyXG59XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNjJweDtcclxuJGhlYWRlci1oZWlnaHQtbWQ6IDEwMHB4O1xyXG4kaGVhZGVyLXdpZHRoOiAyODBweDtcclxuXHJcbiRidG4tbWluLXdpZHRoOiAxNjRweDtcclxuXHJcbi8vIEotaW5wdXRcclxuJGotaW5wdXQtZm9udC1zaXplOiAxcmVtO1xyXG4kai1pbnB1dC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XHJcbiRqLWlucHV0LWZvbnQtc3R5bGU6IG5vcm1hbDtcclxuJGotaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG5cclxuJGotaW5wdXQtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteTogMTcuNXB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXg6IDIwcHg7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItd2lkdGg6IDFweDtcclxuJGotaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kai1pbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodDtcclxuJGotaW5wdXQtdGV4dC1jb2xvcjogJGJsYWNrO1xyXG4kai1pbnB1dC1tYXNrLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtaWNvbi1jb2xvcjogJG9yYW5nZTtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtdGV4dC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWVycm9yOiAkcmVkLWxpZ2h0O1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZGlzYWJsZWQ6ICRpbnB1dC1kaXNhYmxlZC1iZzsgLy8gZnJvbSBmaWdtYSBwcmltaXRpdmVzIHNob3VsZCBiZSBncmF5LTIwMFxyXG5cclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wOiAkai1pbnB1dC1wYWRkaW5nLXkgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcC1hY3RpdmU6IDEwcHg7XHJcbiRqLWlucHV0LWxpbmstcG9zaXRpb24tdG9wOiAxNnB4O1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0OiAkai1pbnB1dC1wYWRkaW5nLXggKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAkai1pbnB1dC1saW5lLWhlaWdodDtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1wYWRkaW5nLXRvcDogMjdweDtcclxuJGotaW5wdXQtcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiRqLWlucHV0LW1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItcG9zaXRpb246ICRqLWlucHV0LXBhZGRpbmctdG9wICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1jaGFyLWxlbmd0aDogOC45OXB4O1xyXG5cclxuJGotaW5wdXQtYnV0dG9uLXBvc2l0aW9uOiAyMHB4O1xyXG4kai1pbnB1dC1zaGFkb3ctcG9zaXRpb246ICRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ7XHJcblxyXG4kai1pbnB1dC1sYWJlbC16LWluZGV4OiAwO1xyXG4kai1pbnB1dC1zaGFkb3ctei1pbmRleDogMTtcclxuJGotaW5wdXQtei1pbmRleDogMjtcclxuJGotaW5wdXQtbGluay16LWluZGV4OiAzO1xyXG4kai1pbnB1dC1idXR0b24tei1pbmRleDogNDtcclxuXHJcbiRib3gtc2hhZG93LXRvLXRvcC1sZzogMCAtMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlO1xyXG4iXX0= */";

/***/ }),

/***/ 2923:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/typography-products/typography-products.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".small {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #666C72;\n}\n\n.title {\n  font-size: 16px;\n  line-height: 24px;\n  color: #1A1C1F;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cG9ncmFwaHktcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoidHlwb2dyYXBoeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM2NjZDNzI7XG59XG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMUExQzFGO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4iXX0= */";

/***/ }),

/***/ 86191:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/upload-products/upload-products.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  font-family: Lato;\n}\n\n.dropzone {\n  min-height: 190px;\n  display: table;\n  width: 100%;\n  border: 4px dashed #E7E7F1;\n  border-radius: 24px;\n  background: white;\n}\n\n.disabled_drag {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.drag_over {\n  background: #F9F9FB;\n  border: 4px dashed #EF5630;\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.title {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  /* identical to box height, or 129% */\n  align-items: center;\n  text-align: center;\n  /* hover/input-common/label--default */\n  color: #666C72;\n}\n\n.button_text {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  /* identical to box height, or 150% */\n  text-align: center;\n  /* Text/links */\n  color: #EF5630;\n}\n\n.small_text {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  /* identical to box height, or 129% */\n  align-items: center;\n  text-align: center;\n  /* Text/disable */\n  color: #B7BEC5;\n}\n\n.img_file {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLHNDQUFBO0VBRUEsY0FBQTtBQUdGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEsa0JBQUE7RUFFQSxlQUFBO0VBRUEsY0FBQTtBQURGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7QUFIRiIsImZpbGUiOiJ1cGxvYWQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG4uZHJvcHpvbmUge1xuICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDRweCBkYXNoZWQgI0U3RTdGMTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZGlzYWJsZWRfZHJhZ3tcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmRyYWdfb3ZlcntcbiAgYmFja2dyb3VuZDogI0Y5RjlGQjtcbiAgYm9yZGVyOiA0cHggZGFzaGVkICNFRjU2MzA7XG59XG4udGV4dC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi50aXRsZXtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEyOSUgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC8qIGhvdmVyL2lucHV0LWNvbW1vbi9sYWJlbC0tZGVmYXVsdCAqL1xuXG4gIGNvbG9yOiAjNjY2QzcyO1xuXG5cbn1cbi5idXR0b25fdGV4dHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTUwJSAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAvKiBUZXh0L2xpbmtzICovXG5cbiAgY29sb3I6ICNFRjU2MzA7XG59XG4uc21hbGxfdGV4dHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEyOSUgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC8qIFRleHQvZGlzYWJsZSAqL1xuXG4gIGNvbG9yOiAjQjdCRUM1O1xuXG5cbn1cbi5pbWdfZmlsZXtcbiAgd2lkdGg6IDkwcHg7XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 31823:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-item/binding-item.component.scss?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #1A1C1F;\n  margin-bottom: 0;\n}\n\n.link {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #EF5630;\n}\n\n.card {\n  padding: 0 16px;\n  /* Line colors/mobile_line */\n  border: 1px solid #E7E7F1;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin: 16px 0px;\n}\n\n::ng-deep .modal_md .modal-content {\n  border-radius: 8px;\n}\n\n.variant {\n  height: 25rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBRUUsZUFBQTtFQUVBLDRCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJiaW5kaW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMUExQzFGO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG59XG4ubGlua3tcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0VGNTYzMDtcblxufVxuLmNhcmR7XG5cbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gIC8qIExpbmUgY29sb3JzL21vYmlsZV9saW5lICovXG5cbiAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdGMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG46Om5nLWRlZXAgLm1vZGFsX21kIC5tb2RhbC1jb250ZW50e1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4udmFyaWFudHtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIl19 */";

/***/ }),

/***/ 66825:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-modal/binding-modal.component.scss?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #1A1C1F;\n  margin-bottom: 0;\n}\n\n.link {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #EF5630;\n}\n\n.card {\n  padding: 0 16px;\n  /* Line colors/mobile_line */\n  border: 1px solid #E7E7F1;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin: 16px 0px;\n}\n\n::ng-deep .modal_md .modal-content {\n  border-radius: 8px;\n}\n\n.variant {\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.item-recom {\n  border-bottom: 1px solid #E7E7F1;\n}\n\n.item-recom-select {\n  background: #F9F9FB;\n  box-sizing: border-box;\n  border: 1px solid #E7E7F1;\n  border-radius: 8px;\n}\n\n.disabled-modal {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUVFLGVBQUE7RUFFQSw0QkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLGdDQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRiIsImZpbGUiOiJiaW5kaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzFBMUMxRjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxufVxuLmxpbmt7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNFRjU2MzA7XG5cbn1cbi5jYXJke1xuXG4gIHBhZGRpbmc6IDAgMTZweDtcblxuICAvKiBMaW5lIGNvbG9ycy9tb2JpbGVfbGluZSAqL1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0U3RjE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICBtYXJnaW46IDE2cHggMHB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9tZCAubW9kYWwtY29udGVudHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnZhcmlhbnR7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uaXRlbS1yZWNvbXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0U3RjE7XG59XG4uaXRlbS1yZWNvbS1zZWxlY3R7XG4gIGJhY2tncm91bmQ6ICNGOUY5RkI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0U3RjE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5kaXNhYmxlZC1tb2RhbHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 60670:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-product-page.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".btn-filter {\n  background: #FFFFFF;\n  padding: 8px 20px;\n  border: 1px solid #D6DADF;\n  margin-right: 1rem;\n  color: #666C72;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n}\n.btn-filter .last-status {\n  color: #239A54;\n}\n.btn-filter__active {\n  padding: 8px 20px;\n  color: white;\n  background: #474B52;\n  border-radius: 8px;\n  margin-right: 1rem;\n}\n.btn-filter__active .last-status {\n  color: #74BA72;\n}\n.type-text {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  color: #1A1C1F;\n}\n.type-text-count {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #666C72;\n}\n.binding-search {\n  margin-bottom: 1rem;\n}\n.binding-main {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.binding-data {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #B7BEC5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmctcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0FBRUo7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVGO0FBREU7RUFDRSxjQUFBO0FBR0o7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0Y7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlGO0FBREE7RUFDRSxtQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBS0Y7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU1GIiwiZmlsZSI6ImJpbmRpbmctcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWx0ZXJ7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDZEQURGO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjNjY2QzcyO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC5sYXN0LXN0YXR1c3tcbiAgICBjb2xvcjojMjM5QTU0O1xuICB9XG59XG4uYnRuLWZpbHRlcl9fYWN0aXZle1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNDc0QjUyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgLmxhc3Qtc3RhdHVze1xuICAgIGNvbG9yOiM3NEJBNzI7XG4gIH1cbn1cbi50eXBlLXRleHR7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMxQTFDMUY7XG59XG4udHlwZS10ZXh0LWNvdW50e1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzY2NkM3Mjtcbn1cblxuLmJpbmRpbmctc2VhcmNoIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5iaW5kaW5nLW1haW57XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5iaW5kaW5nLWRhdGF7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjQjdCRUM1O1xuXG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 13724:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-last-info/import-last-info.component.scss?ngResource ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".upload_last {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 20px;\n  /* identical to box height, or 100% */\n  /* Text/high-contrast */\n  color: #1A1C1F;\n}\n\n.small {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  /* identical to box height, or 150% */\n  /* Text/low-contrast */\n  color: #666C72;\n}\n\n.import_card {\n  background: #F6F7F8;\n  border-radius: 8px;\n  padding: 8px 16px;\n  min-height: 4rem;\n}\n\n.import_card:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n\n.title_upload {\n  font-size: 16px;\n  line-height: 24px;\n  padding: 0;\n  margin: 0;\n  /* identical to box height, or 150% */\n  /* Text/high-contrast */\n  color: #1A1C1F;\n}\n\n.title_find {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 0;\n  margin: 0;\n  color: #1A1C1F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1sYXN0LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFHQSx1QkFBQTtFQUVBLGNBQUE7QUFGRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFHQSx1QkFBQTtFQUVBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJpbXBvcnQtbGFzdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZF9sYXN0e1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG5cblxuICAvKiBUZXh0L2hpZ2gtY29udHJhc3QgKi9cblxuICBjb2xvcjogIzFBMUMxRjtcbn1cbi5zbWFsbHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1MCUgKi9cbiAgLyogVGV4dC9sb3ctY29udHJhc3QgKi9cbiAgY29sb3I6ICM2NjZDNzI7XG59XG4uaW1wb3J0X2NhcmR7XG4gIGJhY2tncm91bmQ6ICNGNkY3Rjg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDRyZW07XG59XG4uaW1wb3J0X2NhcmQ6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aXRsZV91cGxvYWR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1MCUgKi9cblxuXG4gIC8qIFRleHQvaGlnaC1jb250cmFzdCAqL1xuXG4gIGNvbG9yOiAjMUExQzFGO1xuXG59XG4udGl0bGVfZmluZHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMUExQzFGO1xufVxuIl19 */";

/***/ }),

/***/ 59190:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-link-upload/import-link-upload.component.scss?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  /* identical to box height, or 129% */\n  /* Text/low-contrast */\n  color: #666C72;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1saW5rLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFHQSxzQkFBQTtFQUVBLGNBQUE7QUFGRiIsImZpbGUiOiJpbXBvcnQtbGluay11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMjklICovXG5cblxuICAvKiBUZXh0L2xvdy1jb250cmFzdCAqL1xuXG4gIGNvbG9yOiAjNjY2QzcyO1xuXG59XG4iXX0= */";

/***/ }),

/***/ 50873:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-mode-toggle/import-mode-toggle.component.scss?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".delivery-mode-toggle {\n  background: #ECEEF1;\n  border-radius: 9px;\n}\n.delivery-mode-toggle .btn:hover {\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1tb2RlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7QUFDUiIsImZpbGUiOiJpbXBvcnQtbW9kZS10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsaXZlcnktbW9kZS10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNFQ0VFRjE7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IFxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 98987:
/*!************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-product-page.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnQtcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 40878:
/*!********************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/main-product-page.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".products-search {\n  margin-bottom: 1rem;\n}\n\n.products-main {\n  z-index: 1000;\n}\n\n.products-main__items, .products-main__skeleton, .products-main__empty {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7QUFHSiIsImZpbGUiOiJtYWluLXByb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy1zZWFyY2gge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnByb2R1Y3RzLW1haW57XG4gIHotaW5kZXg6IDEwMDA7XG4gICZfX2l0ZW1zLCAmX19za2VsZXRvbiwgJl9fZW1wdHl7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 22924:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/products-item/products-item.component.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".product-item {\n  cursor: pointer;\n}\n.product-item__img {\n  width: 5rem;\n  height: 5rem;\n  object-fit: cover;\n  object-position: center center;\n  margin: 0 1.25rem;\n}\n.product-item__small {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #666C72;\n}\n.product-item__title {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #1A1C1F;\n}\n.product-item__status-default {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #B7BEC5;\n}\n.product-item__status-success {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #239A54;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6InByb2R1Y3RzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pdGVte1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICZfX2ltZ3tcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXIgO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMS4yNXJlbTtcbiAgfVxuICAmX19zbWFsbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGNvbG9yOiAjNjY2QzcyO1xuICB9XG4gICZfX3RpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMUExQzFGO1xuICB9XG4gICZfX3N0YXR1cy1kZWZhdWx0e1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjQjdCRUM1O1xuICB9XG4gICZfX3N0YXR1cy1zdWNjZXNze1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMjM5QTU0O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 55812:
/*!***********************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/products.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".products {\n  padding-top: 40px;\n}\n.products__title {\n  font-weight: normal;\n  line-height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUFERjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcblxuLnByb2R1Y3RzIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICB9XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 17681:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/card-products/card-products.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='card' [class.card-hoverable]='isHoverable' [class.no_padding]='isWithoutPadding'>\n  <!--  ...  -->\n  <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 86971:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/carousel-products/carousel-products.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='row mr-5'>\n  <div class='col-2 img_select' *ngIf='links?.length > 1'>\n    <img src='./assets/jmart/arrow-top.svg' alt='' (click)='up()' (error)='onImgError($event)' *ngIf='links?.length > 5'>\n    <div  class='imgs'>\n      <img class='img_small'\n           *ngFor='let link of links; let i = index'\n           [class.img_small_select]='i === currentIndex'\n           (click)='currentIndex = i'\n           [src]='link'\n           (error)='onImgError($event)'>\n    </div>\n    <img (error)='onImgError($event)' src='./assets/jmart/arrow-bottom.svg' alt='' (click)='down()' *ngIf='links?.length > 5'>\n  </div>\n  <div [class.col-10]='links?.length > 1' [class.col-12]='!(links?.length > 1)'>\n    <img (error)='onImgError($event)' class='img_main' *ngIf='links?.length' [src]='links[currentIndex]' (click)=\"open(content)\" alt=''/>\n  </div>\n</div>\n<ng-template #content let-modal >\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"14.7695\" width=\"2\" height=\"20.8868\" rx=\"1\" transform=\"rotate(45 14.7695 0)\" fill=\"#666C72\"/>\n<rect x=\"16\" y=\"14.769\" width=\"2\" height=\"20.8868\" rx=\"1\" transform=\"rotate(135 16 14.769)\" fill=\"#666C72\"/>\n</svg>\n</span>\n    </button>\n  </div>\n  <div class=\"modal-body p-auto\">\n    <img (error)='onImgError($event)' class='img_size' [src]='links[currentIndex]'  alt=''>\n  </div>\n\n</ng-template>\n";

/***/ }),

/***/ 53092:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/empty-products/empty-products.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"empty container-fluid\">\n  <span class=\"empty__img mb-3\" [inlineSVG]=\"img\"></span>\n  <span class=\"empty__text\" [innerHTML]='text | translate'>\n  </span>\n</section>\n";

/***/ }),

/***/ 57677:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/table-products/table-products.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>table-products works!</p>\n";

/***/ }),

/***/ 63533:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/tabs-products/tabs-products.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tabs\">\n  <a *ngFor='let tab of tabs;'\n   class=\"p1 tabs__link\"\n   [routerLink]=\"[tab.link]\"\n   routerLinkActive=\"tabs__link_active\"\n   translate> {{tab.title}}\n  </a>\n</div>\n";

/***/ }),

/***/ 7927:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/typography-products/typography-products.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='row'>\n  <div class='col-12 small'>\n    <ng-content select='span'></ng-content>\n  </div>\n  <div class='col-12 title'>\n    <ng-content select='p'></ng-content>\n  </div>\n</div>\n";

/***/ }),

/***/ 97206:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/components/upload-products/upload-products.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <router-outlet></router-outlet> -->\n\n<div  class=\"col-12 rmpm dropzone\"\n      [class.drag_over]='importState.uploadStatus ===\"onDragOver\"'\n      [class.disabled_drag]='importState.loading'\n      jDrag\n      (file)=\"handle($event)\"\n      (eventChange)='importState.uploadStatus = $event'>\n  <div class=\"text-wrapper\">\n    <div class=\"centered\" *ngIf='importState.uploadStatus === \"\" || importState.uploadStatus === \"onDragLeave\" || importState.uploadStatus === \"onDrop\"'>\n      <div class='row'>\n        <div class='col-12 mt-3'>\n          <img class='' src='assets/jmart/file.svg' alt=''>\n        </div>\n        <div class='col-12 title mt-3'>\n          Перетащите и отпустите файл Excel для загрузки\n        </div>\n        <div class='col-12 mt-3'>\n          <button type=\"button\"  class=\"btn btn-outline-primary button_text\" (click)=\"openFile()\">\n            <img src='assets/jmart/xls.svg' alt=''>\n            Или выберите файл\n            <input id='openFile' type=\"file\" [multiple]='false'   style=\"display:none\" (change)=\"handle($event.target?.files[0])\">\n          </button>\n        </div>\n        <div class='col-12 small_text my-3' *ngIf='!importState.errorText;'>\n          Размер файла не должен превышать 50МБ\n        </div>\n        <div class='col-12 small_text my-3 text-danger' *ngIf='importState.errorText && importState?.errorText !==\"OK\"'>\n          {{importState.errorText}}\n        </div>\n      </div>\n    </div>\n    <div class=\"centered\" *ngIf='importState.uploadStatus === \"onDragOver\"'>\n          <img class='' src='assets/jmart/load_arrow.svg' alt=''>\n    </div>\n  </div>\n</div>\n\n<!--<div *ngFor=\"let file of files\">-->\n<!--  <img *ngIf=\"file\" [src]=\"file.url\" width=\"100px\" height=\"100px\">-->\n<!--</div>-->\n\n";

/***/ }),

/***/ 22949:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-item/binding-item.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='row'>\n  <div class='col-5 mt-4 mb-3 ml-5'>\n    <j-typography-products>\n        <span>\n            Артикул: {{productItem?.sku}}\n        </span>\n      <p class='title '>\n        {{productItem?.model}}\n      </p>\n    </j-typography-products>\n  </div>\n  <div class='d-flex'>\n    <img src='assets/jmart/vector.svg' alt=''>\n  </div>\n  <div class='col-6 py-4 ' *ngIf='type === 3 || type === 1'>\n    <div class='row align-items-center '>\n      <div class='col-2' >\n        <img style='width: 100%; max-height: 60px' [src]='productItem.productVariants[0].imageUrl' (error)=\"onImgError($event)\" alt=''>\n<!--        <img style='width: 100%; max-height: 60px' src='./assets/jmart/empty-img.svg' alt=''>-->\n      </div>\n      <div class='col-8  p-0'>\n        <j-typography-products>\n                  <span>\n              Код товара: {{productItem.productVariants[0].productCode}}\n                  </span>\n          <p class='title'>\n            {{productItem.productVariants[0].product}}\n          </p>\n        </j-typography-products>\n        <ng-container *ngIf='type === 1 && !productItem?.clarify && !loading'>\n          <a href='javascript:void(0)' class='link' (click)=\"open()\">Выбрать другой товар</a>\n          <a href='javascript:void(0)' class='link ml-3' (click)=\"clarify(productItem)\">Связать товар</a>\n        </ng-container>\n        <ng-container *ngIf='type === 1 && !productItem?.clarify && loading'>\n          <a href='javascript:void(0)' class='link text-muted' >Загрузка...</a>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class='col-3 py-4' *ngIf=' type === 2'>\n    <div class='row align-items-center'>\n      <div class='col-3' >\n        <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"15.5\" stroke=\"#E2DBDB\" stroke-dasharray=\"2 2\"/>\n        </svg>\n      </div>\n      <div class='col-6 ml-3'>\n        <a href='javascript:void(0)' class='link' (click)=\"open()\">Выбрать товар</a>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #load>\n  <div class='col-4'>\n    <ngx-skeleton-loader  [theme]='{width: \"100%\", height: \"7rem\"}'>\n    </ngx-skeleton-loader>\n  </div>\n</ng-template>\n";

/***/ }),

/***/ 76232:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-modal/binding-modal.component.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <button (click)=\"modal.dismiss('Cross click')\" aria-label='Close' class='close' type='button'>\n      <span aria-hidden='true'>\n        <svg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'>\n          <rect fill='#666C72' height='20.8868' rx='1' transform='rotate(45 14.7695 0)' width='2' x='14.7695' />\n          <rect fill='#666C72' height='20.8868' rx='1' transform='rotate(135 16 14.769)' width='2' x='16' y='14.769' />\n        </svg>\n      </span>\n  </button>\n</div>\n<div class='modal-body mx-3 p-auto' style='min-height: 70vh' [class.disabled-modal]='loading'>\n  <div class='row my-3'>\n    <div class='col-12' style='font-weight: 500; font-size: 24px; color: #1A1C1F;'>\n      Выбор товара\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-12'>\n      <div class='card p-3'>\n        <j-typography-products>\n          <span>\n            Артикул: {{productItem?.sku}}\n          </span>\n          <p class='title'>\n            {{productItem?.model}}\n          </p>\n        </j-typography-products>\n      </div>\n    </div>\n  </div>\n  <div class='row mb-3'>\n    <div class='col-12'>\n      <j-search-input ngDefaultControl (valueChanged)=\"search($event)\" [value]='terms' [formControl]='control' [placeholder]=\"'Артикул/наименование'\">\n      </j-search-input>\n    </div>\n  </div>\n  <ng-container *ngIf='type === 1 && !terms.length'>\n    <div class='row mb-3 align-items-center'>\n      <div  class='col-9' style='font-weight: 500; font-size: 20px; color: #1A1C1F;'>\n        Рекомендации\n      </div>\n      <div class='col-3 text-right' style='font-weight: normal; font-size: 14px; color: #1A1C1F;'>\n        Товары: <b>{{productItem.productVariants.length}}</b>\n      </div>\n    </div>\n    <div class='variant'>\n      <div (click)='selectProduct = productVariant.productCode' *ngFor='let productVariant of productItem?.productVariants'\n           class='row align-items-center item-recom py-2' [class.item-recom-select]='selectProduct === productVariant.productCode'>\n        <div class='col-2'>\n          <img (error)='onImgError($event)' [src]='productVariant.imageUrl' alt='' style='width: 100%; max-height: 100px;'>\n        </div>\n        <div class='col-8'>\n          <j-typography-products>\n          <span style='font-size: 12px;'>\n                Код товара: {{productVariant.productCode}}\n          </span>\n            <p class='title mt-2' style='font-size: 14px;'>\n              {{productVariant.product}}\n            </p>\n          </j-typography-products>\n        </div>\n        <div  class='col-1'>\n          <svg *ngIf='selectProduct === productVariant.productCode' fill='none' height='28' viewBox='0 0 28 28' width='28' xmlns='http://www.w3.org/2000/svg'>\n            <path d='M5.23953 14C5.09586 14.0012 4.95361 13.9715 4.82246 13.9128C4.69131 13.8542 4.57435 13.7679 4.47953 13.66L0.249527 8.84997C0.087896 8.6493 0.00996389 8.39398 0.0319793 8.13725C0.0539947 7.88053 0.174258 7.6422 0.367695 7.47198C0.561131 7.30176 0.812809 7.21277 1.07025 7.22357C1.3277 7.23438 1.57103 7.34414 1.74953 7.52997L5.14953 11.39L12.1495 1.38997C12.3034 1.17249 12.5373 1.02503 12.7998 0.980021C13.0624 0.935013 13.332 0.996145 13.5495 1.14997C13.767 1.3038 13.9145 1.53771 13.9595 1.80027C14.0045 2.06282 13.9434 2.33249 13.7895 2.54997L6.01953 13.55C5.93257 13.6726 5.81907 13.774 5.68749 13.8468C5.55591 13.9195 5.40963 13.9616 5.25953 13.97L5.23953 14Z' fill='#239A54' />\n          </svg>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf='type === 2 || terms.length' >\n    <div class='row mb-3 align-items-center'>\n      <div  class='col-9' style='font-weight: 500; font-size: 20px; color: #1A1C1F;'>\n        Результаты поиска\n      </div>\n    </div>\n    <div class='variant' *ngIf=\"(productItems$ | async) as productItems\">\n      <div (click)='selectProduct = productItem.productCode' *ngFor='let productItem of productItems'\n           class='row align-items-center item-recom py-2 ' [class.item-recom-select]='selectProduct === productItem.productCode'>\n        <div class='col-2'>\n          <img (error)='onImgError($event)' [src]='productItem.imageUrl' alt='' style='width: 100%; max-height: 100px'>\n        </div>\n        <div class='col-8'>\n          <j-typography-products>\n          <span style='font-size: 12px;'>\n                Код товара: {{productItem.productCode}}\n          </span>\n            <p class='title mt-2' style='font-size: 14px;'>\n              {{productItem.product}}\n            </p>\n          </j-typography-products>\n        </div>\n        <div  class='col-1'>\n          <svg *ngIf='selectProduct === productItem.productCode' fill='none' height='28' viewBox='0 0 28 28' width='28' xmlns='http://www.w3.org/2000/svg'>\n            <path d='M5.23953 14C5.09586 14.0012 4.95361 13.9715 4.82246 13.9128C4.69131 13.8542 4.57435 13.7679 4.47953 13.66L0.249527 8.84997C0.087896 8.6493 0.00996389 8.39398 0.0319793 8.13725C0.0539947 7.88053 0.174258 7.6422 0.367695 7.47198C0.561131 7.30176 0.812809 7.21277 1.07025 7.22357C1.3277 7.23438 1.57103 7.34414 1.74953 7.52997L5.14953 11.39L12.1495 1.38997C12.3034 1.17249 12.5373 1.02503 12.7998 0.980021C13.0624 0.935013 13.332 0.996145 13.5495 1.14997C13.767 1.3038 13.9145 1.53771 13.9595 1.80027C14.0045 2.06282 13.9434 2.33249 13.7895 2.54997L6.01953 13.55C5.93257 13.6726 5.81907 13.774 5.68749 13.8468C5.55591 13.9195 5.40963 13.9616 5.25953 13.97L5.23953 14Z' fill='#239A54' />\n          </svg>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf='loadingItems && terms.length'>\n    <div class='row'>\n        <div class='col-12'>\n          <ngx-skeleton-loader *ngFor='let $ of [].constructor(5);' [theme]='theme'>\n          </ngx-skeleton-loader>\n        </div>\n\n    </div>\n  </ng-container>\n</div>\n<div class='modal-footer mx-3 mb-3'>\n  <div class='row'>\n    <div class='col-5'>\n      <button [disabled]='loading' (click)=\"modal.dismiss('Cross click')\" class='btn btn-link'>Отмена</button>\n    </div>\n    <div class='col-7'>\n      <button class='btn btn-primary'\n        [disabled]='loading'\n        (click)='clarify()'>\n         {{loading ? 'Загрузка...': 'Связать товар' }}\n      </button>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 43590:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/binding-product-page/binding-product-page.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='binding-data mb-3' *ngIf='lastStatusCount'>\n  Последнее изменение: {{lastStatusCount.updatedAt | date: 'dd.MM.yyyy HH:mm'}}\n  (распознано +{{lastStatusCount.active}},\n  требуют уточнения +{{lastStatusCount.needClarification}},\n  нераспознаны +{{lastStatusCount.needModeration}})\n</div>\n<div class='binding-filter mb-3' *ngIf='statusCount'>\n  <button class='btn btn-filter' [class.btn-filter__active]='type === 3'  (click)='typeSelect(3)'>\n    Распознанные {{statusCount[\"3\"]}}\n  </button>\n  <button class='btn btn-filter' [class.btn-filter__active]='type === 1' (click)='typeSelect(1)'>\n    Требуют уточнения\n    {{statusCount[\"1\"]}}\n  </button>\n  <button class='btn btn-filter' [class.btn-filter__active]='type === 2' (click)='typeSelect(2)'>\n    Нераспознанные\n    {{statusCount[\"2\"]}}\n  </button>\n</div>\n<div class=\"binding-search\">\n  <j-search-input ngDefaultControl (valueChanged)=\"search($event)\" [value]='terms' [formControl]='control' [placeholder]=\"'Артикул/наименование'\">\n  </j-search-input>\n</div>\n<div class='binding-type'>\n<!--  <div class='row my-5'>-->\n<!--    <div class='col-6 type-text'>-->\n<!--      Смартфоны и телефоны-->\n<!--    </div>-->\n<!--    <div class='col-6 text-right type-text-count'>-->\n<!--      Товары: <span style='color: #34373a'>3 шт.</span>-->\n<!--    </div>-->\n<!--  </div>-->\n</div>\n<div class='binding-main' #myDiv >\n  <div class='binding-main__items' *ngIf=\"(productItems$ | async) as productItems\">\n    <ng-container *ngIf=\"productItems.length && (!loading || !newSearch); else empty\">\n      <j-card-products *ngFor='let productItem of productItems; let i = index'  [isWithoutPadding]='true'>\n        <j-binding-item [productItem]='productItem' [type]='type' (refresh)='refresh($event)'></j-binding-item>\n      </j-card-products>\n    </ng-container>\n  </div>\n  <div class='binding-main__skeleton' *ngIf='loading'>\n    <ngx-skeleton-loader *ngFor='let $ of [].constructor(12);' [theme]='theme'>\n    </ngx-skeleton-loader>\n  </div>\n  <ng-template #empty>\n    <div class='binding-main__empty' *ngIf='!loading'>\n      <j-card-products>\n        <j-empty-products [text]=\"terms?'JMART.PRODUCTS.INFORMATION.SEARCH_EMPTY_TEXT':'JMART.PRODUCTS.INFORMATION.EMPTY_TEXT'\"></j-empty-products>\n      </j-card-products>\n    </div>\n  </ng-template>\n</div>\n";

/***/ }),

/***/ 24274:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-last-info/import-last-info.component.html?ngResource ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-card-products *ngIf='importLastInfo && !importState.loading'>\n  <div class='row'>\n    <div class='col-12 upload_last my-3'>\n      <span> Последняя загрузка</span>\n    </div>\n    <div class='col-12 mb-3'>\n      <img src='assets/jmart/file_load.svg' class='mr-3'>\n      {{importLastInfo.filename}}\n    </div>\n    <div class='col-3'>\n      <span class='small'>\n        Дата загрузки\n      </span>\n      <p class='title_upload'>\n        {{importLastInfo.createdAt | date: 'dd.MM.yyyy HH:mm:ss'}}\n      </p>\n    </div>\n    <div class='col-3'>\n      <span class='small'>\n        Последние обновления\n      </span>\n      <p class='title_upload'>\n        <ng-container>\n          {{importLastInfo.updatedAt | date: 'dd.MM.yyyy HH:mm:ss' || '-'}}\n        </ng-container>\n      </p>\n    </div>\n  </div>\n  <div class='row mt-3'>\n    <div class='col-12 mt-3'>\n      <div class='import_card' routerLink='../binding'  [queryParams]='{type: \"3\"}'>\n        <div class='row justify-content-between align-items-center'>\n          <div class='col-10'>\n            <div class='row justify-content-start'>\n              <div class='mx-3 d-flex'>\n                <img src='assets/jmart/success_outline.svg' alt=''>\n              </div>\n              <div class='col-10'>\n                <p class='title_find'>\n                  {{importLastInfo.active}} из {{importLastInfo.total}}\n                </p>\n                <span class='small'>\n              Товаров распознано\n            </span>\n              </div>\n            </div>\n          </div>\n          <div class='col-2'>\n            <img class='float-right' src='assets/jmart/arrow-link.svg' alt=''>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-12 mt-3' *ngIf='importLastInfo.needClarification' >\n      <div class='import_card' routerLink='../binding' [queryParams]='{type: \"1\"}'>\n        <div class='row justify-content-between align-items-center'>\n          <div class='col-10'>\n            <div class='row justify-content-start'>\n              <div class='d-flex mx-3'>\n                <img src='assets/jmart/yellow-sad-smile.svg' alt=''>\n              </div>\n              <div class='col-10'>\n                <p class='title_find'>\n                  {{importLastInfo.needClarification}}\n                </p>\n                <span class='small'>\n                  Товаров требуют уточнения\n            </span>\n              </div>\n            </div>\n          </div>\n          <div class='col-2'>\n            <img class='float-right' src='assets/jmart/arrow-link.svg' alt=''>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-12 mt-3' *ngIf='!importLastInfo.needClarification'>\n      <div class='import_card' routerLink='../binding' [queryParams]='{type: \"1\"}'>\n        <div class='row justify-content-between align-items-center mt-1'>\n          <div class='col-10'>\n            <div class='row justify-content-start align-items-center'>\n              <div class='d-flex mx-3'>\n                <img src='assets/jmart/success_smile.svg' alt=''>\n              </div>\n              <div class='col-8'>\n\n            <span style='font-weight: normal;\n                              font-size: 14px;\n                              line-height: 18px;\n                              color: #666C72;'>\n                Товаров требующих уточнения нет\n            </span>\n\n              </div>\n            </div>\n          </div>\n          <div class='col-2'>\n            <img class='float-right' src='assets/jmart/arrow-link.svg' alt=''>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-12 mt-3' *ngIf='importLastInfo.needModeration' >\n      <div class='import_card' routerLink='../binding' [queryParams]='{type: \"2\"}'>\n        <div class='row justify-content-between align-items-center'>\n          <div class='col-10'>\n            <div class='row justify-content-start'>\n              <div class='d-flex mx-3'>\n                <img src='assets/jmart/sad_smile.svg' alt=''>\n              </div>\n              <div class='col-8'>\n                <p class='title_find'>\n                  {{importLastInfo.needModeration}}\n                </p>\n                <span class='small'>\n                Товаров нераспознано\n            </span>\n              </div>\n            </div>\n          </div>\n          <div class='col-2'>\n            <img class='float-right' src='assets/jmart/arrow-link.svg' alt=''>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-12 mt-3' *ngIf='!importLastInfo.needModeration'>\n      <div class='import_card' routerLink='../binding' [queryParams]='{type: \"2\"}'>\n        <div class='row justify-content-between align-items-center mt-1'>\n          <div class='col-10'>\n            <div class='row justify-content-start align-items-center'>\n              <div class='d-flex mx-3'>\n                <img src='assets/jmart/success_smile.svg' alt=''>\n              </div>\n              <div class='col-8'>\n\n            <span style='font-weight: normal;\n                              font-size: 14px;\n                              line-height: 18px;\n                              color: #666C72;'>\n             Нераспознанных товаров нет\n            </span>\n\n              </div>\n            </div>\n          </div>\n          <div class='col-2'>\n            <img class='float-right' src='assets/jmart/arrow-link.svg' alt=''>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</j-card-products >\n<j-card-products *ngIf='importState.loading'>\n  <div class='row'>\n    <div class='col-12 upload_last my-3'>\n      <span>Загрузка файла</span>\n    </div>\n    <div class='col-12 my-3'>\n      <span>Дождитесь загрузки и обработки файла, чтобы продолжить работу с загруженными товарами</span>\n    </div>\n    <div class='col-12'>\n      <img src='assets/jmart/file_loading.svg' class='mr-3'>\n      {{importState.fileName}}\n    </div>\n  </div>\n</j-card-products >\n<ngx-skeleton-loader *ngIf='!importLastInfo && !importState.loading' [theme]='{height:\"10rem\"}'>\n</ngx-skeleton-loader>\n";

/***/ }),

/***/ 15164:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-link-upload/import-link-upload.component.html?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='row'>\n  <div class='col-12 title my-3'>\n    Укажите ссылку на XML-таблицу, чтобы наличие товаров и цены обновлялись автоматически.\n    Обновление данных происходит каждые 2 часа.\n  </div>\n</div>\n<div class='row'>\n  <div class='col-9'>\n    <j-input  (valueChanged)=\"getLink($event)\" [label]=\"'Введите ссылку на XML'\" [isClearable]='false'>\n    </j-input>\n  </div>\n  <div class='col-3'>\n    <button class=\"btn  btn-primary\" [disabled]='importState?.loading' (click)=\"updateLink()\">\n      Сохранить\n    </button>\n  </div>\n</div>\n<div class='row' *ngIf='importState?.errorText && importState?.errorText !==\"OK\"'>\n  <div class='col-12 text-danger'>\n    {{importState?.errorText}}\n  </div>\n</div>\n";

/***/ }),

/***/ 38294:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-mode-toggle/import-mode-toggle.component.html?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"delivery-mode-toggle w-100 mt-1 mb-3 p-1\">\n    <button\n        class=\"btn delivery-mode-toggle__item w-50\"\n        [class.btn-primary]=\"mode.id === currentId\"\n        *ngFor=\"let mode of mods\"\n        (click)=\"setMod(mode)\">\n        {{ mode.label }}\n    </button>\n</div>\n";

/***/ }),

/***/ 73126:
/*!************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/import-product-page/import-product-page.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-card-products>\n  <j-import-mode-toggle (controlChange)='controlChange($event)'>\n  </j-import-mode-toggle>\n  <j-upload-products *ngIf='tabId === 0' [importState]='importState' (uploadFile)='uploadFile($event)'></j-upload-products>\n  <j-import-link-upload  *ngIf='tabId === 1' [importState]='importState' (uploadLink)='uploadLink($event)' ></j-import-link-upload>\n</j-card-products>\n<j-import-last-info  [importLastInfo]='importLastInfo' [importState]='importState'></j-import-last-info>\n";

/***/ }),

/***/ 28082:
/*!********************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/main-product-page.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"products-search\">\n  <j-search-input (valueChanged)=\"search($event)\" [value]='terms' [formControl]='control' ngDefaultControl [placeholder]=\"'JMART.PRODUCTS.INFORMATION.SEARCH_LABEL'\">\n  </j-search-input>\n</div>\n\n<div class='products-main'  #myDiv >\n  <div class='products-main__items' *ngIf=\"(productItems$ | async) as productItems\">\n    <ng-container *ngIf=\"productItems.length && (!loading || !newSearch); else empty\">\n      <j-card-products *ngFor='let productItem of productItems;' [isHoverable]='true'  (click)='routeClick(productItem?.productId)'>\n        <j-products-item [productItem]='productItem'></j-products-item>\n      </j-card-products>\n    </ng-container>\n  </div>\n  <div class='products-main__skeleton' *ngIf='loading'>\n    <ngx-skeleton-loader *ngFor='let $ of [].constructor(12);' [theme]='theme'>\n    </ngx-skeleton-loader>\n  </div>\n  <ng-template #empty>\n    <div class='products-main__empty' *ngIf='!loading'>\n      <j-card-products>\n        <j-empty-products [text]=\"terms?'JMART.PRODUCTS.INFORMATION.SEARCH_EMPTY_TEXT':'JMART.PRODUCTS.INFORMATION.EMPTY_TEXT'\"></j-empty-products>\n      </j-card-products>\n    </div>\n  </ng-template>\n</div>\n\n\n\n\n";

/***/ }),

/***/ 71562:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/pages/main-product-page/products-item/products-item.component.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='row product-item'>\n  <div class='col-2'>\n    <img class='product-item__img' [src]='productItem?.imageUrl' (error)=\"onImgError($event)\">\n  </div>\n  <div class='col-5 '>\n    <j-typography-products>\n      <span>\n        {{'JMART.PRODUCTS.PRODUCT_ITEM.CODE' | translate}}\n        {{productItem?.productCode}}\n        <span *ngIf='productItem?.article'>\n          {{'JMART.PRODUCTS.PRODUCT_ITEM.ARTICLE' | translate}}\n          {{productItem?.article}}\n        </span>\n      </span>\n      <p class='product-item__title'>\n        {{productItem?.product}}\n      </p>\n    </j-typography-products>\n  </div>\n  <div class='col-3 '>\n    <j-typography-products>\n      <span  *ngIf='productItem?.minPrice && productItem?.maxPrice; else priceText'>\n        {{'JMART.PRODUCTS.PRODUCT_ITEM.RANGE' | translate}}\n      </span>\n      <p class='product-item__title' *ngIf='productItem?.minPrice && productItem?.maxPrice; else price'>\n        {{productItem?.minPrice  | currency:'₸':'symbol':'0.0-2'}} -\n        {{productItem?.maxPrice  | currency:'₸':'symbol':'0.0-2'}}\n      </p>\n    </j-typography-products>\n  </div>\n  <div class='col-2 '>\n    <j-typography-products>\n      <span> {{'JMART.PRODUCTS.PRODUCT_ITEM.STATUS' | translate}}</span>\n      <p class='product-item__title'>\n        <span *ngIf='productItem?.status == \"A\"' class='product-item__status-success'>\n         <img src='./assets/jmart/pulse_success.svg' alt=''>\n          {{'JMART.PRODUCTS.PRODUCT_ITEM.STATUS_A' | translate}}\n        </span>\n        <span *ngIf='productItem?.status == \"D\"'  class='product-item__status-default'>\n          <img src='./assets/jmart/pulse_default.svg' alt=''>\n          {{'JMART.PRODUCTS.PRODUCT_ITEM.STATUS_B' | translate}}\n        </span>\n      </p>\n    </j-typography-products>\n  </div>\n</div>\n<ng-template #priceText>\n  {{'JMART.PRODUCTS.PRODUCT_ITEM.PRICE' | translate}}\n</ng-template>\n<ng-template #price>\n  {{productItem?.price  | currency:'₸':'symbol':'0.0-2'}}\n</ng-template>\n";

/***/ }),

/***/ 15770:
/*!***********************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/products/products.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"products\">\n  <h2 class=\"products__title mb-4\" translate>JMART.PRODUCTS.TITLE</h2>\n  <j-tabs-products [tabs]='tabs'></j-tabs-products>\n  <router-outlet></router-outlet>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_jmart-cabinet_modules_products_products_module_ts.js.map