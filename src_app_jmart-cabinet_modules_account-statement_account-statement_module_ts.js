"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_jmart-cabinet_modules_account-statement_account-statement_module_ts"],{

/***/ 60653:
/*!****************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/account-statement.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementComponent": () => (/* binding */ AccountStatementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_statement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement.component.html?ngResource */ 90924);
/* harmony import */ var _account_statement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement.component.scss?ngResource */ 40979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _jmart_cabinet_modules_account_statement_account_statement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jmart-cabinet/modules/account-statement/account-statement.service */ 37774);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 76839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 24514);







let AccountStatementComponent = class AccountStatementComponent {
    constructor(accountStatementService) {
        this.accountStatementService = accountStatementService;
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.pagingStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.periodStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.params = {
            page: 1,
            dateTo: '',
            dateFrom: '',
            search: ''
        };
        this.loading = true;
    }
    ngOnInit() {
        const periodSource = this.periodStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(date => {
            this.params.dateTo = date.to;
            this.params.dateFrom = date.from;
            this.params.page = 1;
            return this.params;
        }));
        const pagingSource = this.pagingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(pageNumber => {
            this.params.page = pageNumber;
            return this.params;
        }));
        const searchSource = this.searchStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(searchTerm => {
            this.params.search = searchTerm;
            this.params.page = 1;
            return this.params;
        }));
        const source = pagingSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.merge)(searchSource, periodSource), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
            this.loading = true;
            this.accountStatements = null;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((params) => {
            return this.accountStatementService.getAccountStatements(params.page, params.dateTo, params.dateFrom, params.search);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.loading = false));
        source.subscribe(data => {
            this.accountStatements = data.items;
            this.pagination = data.pagination;
        });
    }
    searchChange(term) {
        this.searchStream.next(term);
    }
    onPeriodChanged(period) {
        this.periodStream.next(period);
    }
    pageChange(page) {
        this.pagingStream.next(page);
    }
};
AccountStatementComponent.ctorParameters = () => [
    { type: _jmart_cabinet_modules_account_statement_account_statement_service__WEBPACK_IMPORTED_MODULE_2__.AccountStatementService }
];
AccountStatementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'j-account-statement',
        template: _account_statement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_statement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountStatementComponent);



/***/ }),

/***/ 91267:
/*!*************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/account-statement.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementModule": () => (/* binding */ AccountStatementModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _account_statement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement.component */ 60653);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jmart_cabinet_components_jmart_cabinet_layout_jmart_cabinet_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jmart-cabinet/components/jmart-cabinet-layout/jmart-cabinet-layout.component */ 18232);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @filter/filter.module */ 67655);
/* harmony import */ var _components_account_statement_period_date_account_statement_period_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account-statement-period-date/account-statement-period-date.component */ 52731);
/* harmony import */ var _components_account_statement_search_account_statement_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-statement-search/account-statement-search.component */ 71800);
/* harmony import */ var _components_account_statement_table_account_statement_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account-statement-table/account-statement-table.component */ 73695);
/* harmony import */ var _components_account_statement_pagination_account_statement_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-statement-pagination/account-statement-pagination.component */ 79884);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);














const routes = [
    {
        path: '',
        component: _jmart_cabinet_components_jmart_cabinet_layout_jmart_cabinet_layout_component__WEBPACK_IMPORTED_MODULE_1__.JmartCabinetLayoutComponent,
        children: [
            {
                path: '',
                component: _account_statement_component__WEBPACK_IMPORTED_MODULE_0__.AccountStatementComponent,
            },
        ],
    }
];
let AccountStatementModule = class AccountStatementModule {
};
AccountStatementModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _account_statement_component__WEBPACK_IMPORTED_MODULE_0__.AccountStatementComponent,
            _components_account_statement_period_date_account_statement_period_date_component__WEBPACK_IMPORTED_MODULE_4__.AccountStatementPeriodDateComponent,
            _components_account_statement_search_account_statement_search_component__WEBPACK_IMPORTED_MODULE_5__.AccountStatementSearchComponent,
            _components_account_statement_table_account_statement_table_component__WEBPACK_IMPORTED_MODULE_6__.AccountStatementTableComponent,
            _components_account_statement_pagination_account_statement_pagination_component__WEBPACK_IMPORTED_MODULE_7__.AccountStatementPaginationComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__.FilterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)
        ]
    })
], AccountStatementModule);



/***/ }),

/***/ 37774:
/*!**************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/account-statement.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementService": () => (/* binding */ AccountStatementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);




let AccountStatementService = class AccountStatementService {
    constructor(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    getAccountStatements(page = 1, paymentDateTo = '', paymentDateFrom = '', search = '') {
        const url = `${this.baseUrl}/gw/order/v2/merchant/order-transactions`;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('search', search)
            .set('page', String(page))
            .set('per_page', '12');
        if (paymentDateTo) {
            params = params.set('payment_date_to', paymentDateTo);
        }
        if (paymentDateFrom) {
            params = params.set('payment_date_from', paymentDateFrom);
        }
        return this.http.get(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => data.data));
    }
};
AccountStatementService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: ['JMART_CABINET_BASE_URL',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AccountStatementService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AccountStatementService);



/***/ }),

/***/ 79884:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-pagination/account-statement-pagination.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementPaginationComponent": () => (/* binding */ AccountStatementPaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_statement_pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement-pagination.component.html?ngResource */ 91049);
/* harmony import */ var _account_statement_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement-pagination.component.scss?ngResource */ 3936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountStatementPaginationComponent = class AccountStatementPaginationComponent {
    constructor() {
        this.page = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
};
AccountStatementPaginationComponent.ctorParameters = () => [];
AccountStatementPaginationComponent.propDecorators = {
    pagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
AccountStatementPaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-account-statement-pagination',
        template: _account_statement_pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_statement_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountStatementPaginationComponent);



/***/ }),

/***/ 52731:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-period-date/account-statement-period-date.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementPeriodDateComponent": () => (/* binding */ AccountStatementPeriodDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_statement_period_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement-period-date.component.html?ngResource */ 17605);
/* harmony import */ var _account_statement_period_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement-period-date.component.scss?ngResource */ 25792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @filter/filter.model */ 41359);
/* harmony import */ var _filter_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @filter/filter.service */ 67515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







let AccountStatementPeriodDateComponent = class AccountStatementPeriodDateComponent {
    constructor(filterService, datePipe, cdr) {
        this.filterService = filterService;
        this.datePipe = datePipe;
        this.cdr = cdr;
        this.mode = _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__.FILTER_MODE.ACCOUNTS;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.defaultPeriod = {
            type: _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__.FILTER_PERIOD_TYPE.NONE,
            label: 'За всё время',
            showDates: false,
            dates: { from: null, to: null },
        };
        this.periodList = [this.defaultPeriod, ...this.filterService.PERIOD_LIST];
        this.cdr.detectChanges();
    }
    onPeriodChanged(event) {
        console.log(event);
        this.submitted.emit({
            to: this.datePipe.transform(event.to, 'dd-MM-yyyy'),
            from: this.datePipe.transform(event.from, 'dd-MM-yyyy')
        });
    }
};
AccountStatementPeriodDateComponent.ctorParameters = () => [
    { type: _filter_filter_service__WEBPACK_IMPORTED_MODULE_3__.FilterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
AccountStatementPeriodDateComponent.propDecorators = {
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AccountStatementPeriodDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-account-statement-period-date',
        template: _account_statement_period_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        styles: [_account_statement_period_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountStatementPeriodDateComponent);



/***/ }),

/***/ 71800:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-search/account-statement-search.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementSearchComponent": () => (/* binding */ AccountStatementSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_statement_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement-search.component.html?ngResource */ 34854);
/* harmony import */ var _account_statement_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement-search.component.scss?ngResource */ 75404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






let AccountStatementSearchComponent = class AccountStatementSearchComponent {
    constructor(route) {
        var _a;
        this.route = route;
        this.terms = '';
        this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.terms = ((_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.terms) || '';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.terms);
    }
    ngOnInit() {
        this.searchChange.emit(this.terms);
    }
    search(term) {
        this.terms = term;
        this.searchChange.emit(term);
    }
};
AccountStatementSearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
AccountStatementSearchComponent.propDecorators = {
    searchChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
AccountStatementSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-account-statement-search',
        template: _account_statement_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_statement_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountStatementSearchComponent);



/***/ }),

/***/ 73695:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-table/account-statement-table.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementTableComponent": () => (/* binding */ AccountStatementTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_statement_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement-table.component.html?ngResource */ 98205);
/* harmony import */ var _account_statement_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement-table.component.scss?ngResource */ 23156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountStatementTableComponent = class AccountStatementTableComponent {
    constructor() {
        this.img = './assets/jmart/no-data.svg';
        this.theme = { height: '2.5rem', 'background-color': '#ECEEF1', margin: '25px 10px 0 10px', width: 'calc(100% - 20px)' };
    }
    ngOnInit() {
    }
};
AccountStatementTableComponent.ctorParameters = () => [];
AccountStatementTableComponent.propDecorators = {
    accountStatements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AccountStatementTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-account-statement-table',
        template: _account_statement_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_statement_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountStatementTableComponent);



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

/***/ 40979:
/*!*****************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/account-statement.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".account-statement {\n  padding-top: 40px;\n}\n.account-statement__title {\n  font-weight: normal;\n  line-height: 55px;\n}\n.account-statement__filter {\n  display: flex;\n  width: 100%;\n  margin-bottom: 40px;\n}\n.account-statement__search {\n  width: calc(100% - 235px);\n  display: inline-block;\n}\n.account-statement__period {\n  display: inline-block;\n  width: 235px;\n}\n.account-statement__period ::ng-deep.period-dropdown-toggle {\n  width: 227px;\n  height: 56px;\n  padding-top: 15px;\n  background: #e9ecf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUFERjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNOIiwiZmlsZSI6ImFjY291bnQtc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcblxuLmFjY291bnQtc3RhdGVtZW50IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICB9XG4gICZfX2ZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgJl9fc2VhcmNoe1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMzVweCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gICZfX3BlcmlvZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIzNXB4O1xuICAgIDo6bmctZGVlcC5wZXJpb2QtZHJvcGRvd24tdG9nZ2xle1xuICAgICAgd2lkdGg6IDIyN3B4O1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTllY2YxO1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 3936:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-pagination/account-statement-pagination.component.scss?ngResource ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".order-pagination {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdGVtZW50LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoiYWNjb3VudC1zdGF0ZW1lbnQtcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3Njc3Mvc2hhcmVkJztcblxuLm9yZGVyLXBhZ2luYXRpb257XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 25792:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-period-date/account-statement-period-date.component.scss?ngResource ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXN0YXRlbWVudC1wZXJpb2QtZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 75404:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-search/account-statement-search.component.scss?ngResource ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXN0YXRlbWVudC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 23156:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-table/account-statement-table.component.scss?ngResource ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".table-wrapper {\n  min-width: 100%;\n  background: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid rgba(183, 190, 197, 0.5);\n  margin-bottom: 100px;\n}\n.table-wrapper .empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem 0;\n}\n.table-wrapper .empty__img {\n  width: 140px;\n  height: 140px;\n}\n.table-wrapper .empty__text {\n  display: block;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: #666c72;\n  white-space: pre-wrap;\n  text-align: center;\n}\n.table-wrapper table {\n  min-width: 100%;\n}\n.table-wrapper table thead th {\n  border-bottom: solid 1px rgba(183, 190, 197, 0.5);\n  border-right: solid 1px rgba(183, 190, 197, 0.5);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: #666C72;\n  padding: 28px 10px;\n}\n.table-wrapper table thead th:nth-child(1) {\n  width: 115px;\n}\n.table-wrapper table thead th:nth-child(2) {\n  width: 80px;\n}\n.table-wrapper table thead th:nth-child(3) {\n  width: 180px;\n}\n.table-wrapper table thead th {\n  width: calc((100% - 375px) / 5);\n}\n.table-wrapper table thead th:last-child {\n  border-right: none;\n}\n.table-wrapper table tbody tr {\n  border-top: solid 1px rgba(183, 190, 197, 0.5);\n}\n.table-wrapper table tbody tr:nth-child(2n) {\n  background: #F6F7F8;\n}\n.table-wrapper table tbody td {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: #1A1C1F;\n  border-left: solid 1px rgba(183, 190, 197, 0.5);\n  padding: 28px 10px;\n}\n.table-wrapper table tbody td:first-child {\n  border-left: none;\n}\n.table-wrapper table tbody tr:last-child td:first-child {\n  border-bottom-left-radius: 8px;\n}\n.table-wrapper table tbody tr:last-child td:last-child {\n  border-bottom-right-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdGVtZW50LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFTjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDVEs7RURVTCxxQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFHRTtFQUNFLGVBQUE7QUFESjtBQUdNO0VBQ0UsaURBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFHTTtFQUNFLFlBQUE7QUFEUjtBQUdNO0VBQ0UsV0FBQTtBQURSO0FBR007RUFDRSxZQUFBO0FBRFI7QUFHTTtFQUNFLCtCQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0FBRFI7QUFLTTtFQUNFLDhDQUFBO0FBSFI7QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFLTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQUtNO0VBQ0UsOEJBQUE7QUFIUjtBQUtNO0VBQ0UsK0JBQUE7QUFIUiIsImZpbGUiOiJhY2NvdW50LXN0YXRlbWVudC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzaGFyZWRcIjtcbi50YWJsZS13cmFwcGVye1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODMsIDE5MCwgMTk3LCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgLmVtcHR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAmX19pbWcge1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAkZ3JheS02MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgdGFibGV7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHRoZWFke1xuICAgICAgdGh7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAgcmdiYSgxODMsIDE5MCwgMTk3LCAwLjUpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDE4MywgMTkwLCAxOTcsIDAuNSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjNjY2QzcyO1xuICAgICAgICBwYWRkaW5nOiAyOHB4IDEwcHg7XG4gICAgICB9XG4gICAgICB0aDpudGgtY2hpbGQoMSl7XG4gICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgIH1cbiAgICAgIHRoOm50aC1jaGlsZCgyKXtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB9XG4gICAgICB0aDpudGgtY2hpbGQoMyl7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIH1cbiAgICAgIHRoe1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDM3NXB4KSAvIDUpO1xuICAgICAgfVxuICAgICAgdGg6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICB0Ym9keXtcbiAgICAgIHRye1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgxODMsIDE5MCwgMTk3LCAwLjUpO1xuICAgICAgfVxuICAgICAgdHI6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNkY3Rjg7XG4gICAgICB9XG4gICAgICB0ZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMxQTFDMUY7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgxODMsIDE5MCwgMTk3LCAwLjUpO1xuICAgICAgICBwYWRkaW5nOiAyOHB4IDEwcHg7XG4gICAgICB9XG4gICAgICB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICB9XG4gICAgICB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxke1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgICB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGR7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiIsIi8vIFZhcmlhYmxlc1xyXG4vL1xyXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3JcclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXktMTAwOiAjZmFmN2Y3O1xyXG4kZ3JheS0yMDA6ICNmNmY3Zjg7XHJcbiRncmF5LTMwMDogI2VjZWVmMTtcclxuJGdyYXktNDAwOiAjZDZkYWRmO1xyXG4kZ3JheS01MDA6ICNiN2JlYzU7XHJcbiRncmF5LTYwMDogIzY2NmM3MjtcclxuJGdyYXktNzAwOiAjNDc0YjUyO1xyXG4kZ3JheS04MDA6ICNlOWVjZjE7XHJcbiRncmF5LTkwMDogI2RiZGZlMjtcclxuJGdyYXktMTAwMDogIzgyODI4MjtcclxuJGJsYWNrOiAjMWExYzFmO1xyXG5cclxuJGdyYXlzOiAoKTtcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJzEwMCc6ICRncmF5LTEwMCxcclxuICAgICcyMDAnOiAkZ3JheS0yMDAsXHJcbiAgICAnMzAwJzogJGdyYXktMzAwLFxyXG4gICAgJzQwMCc6ICRncmF5LTQwMCxcclxuICAgICc1MDAnOiAkZ3JheS01MDAsXHJcbiAgICAnNjAwJzogJGdyYXktNjAwLFxyXG4gICAgJzcwMCc6ICRncmF5LTcwMCxcclxuICAgICc4MDAnOiAkZ3JheS04MDAsXHJcbiAgKSxcclxuICAkZ3JheXNcclxuKTtcclxuXHJcbiRibHVlOiAjMjA0MTc3O1xyXG4kYmx1ZS1saWdodDogIzE1ODZiYjtcclxuJGJsdWUtd2hpdGU6ICNmNWY5ZmQ7XHJcbiRvcmFuZ2U6ICNlZjU2MzA7XHJcbiRvcmFuZ2UtZGFyazogI2Q0M2UxOTtcclxuJG9yYW5nZS1saWdodDogI2Y3YWI5ODtcclxuJHllbGxvdzogI2VmOGYwMDtcclxuJGdyZWVuOiAjMjM5YTU0O1xyXG4kZ3JlZW4tbGlnaHQ6ICM3NGJhNzI7XHJcbiRyZWQ6ICNmZjAwMDA7XHJcbiRyZWQtbGlnaHQ6ICNmZmVmZWY7XHJcblxyXG4kZ3JheTogJGdyYXktNTAwO1xyXG4kZ3JheS1kYXJrOiAkZ3JheS02MDA7XHJcbiRncmF5LWxpZ2h0OiAkZ3JheS00MDA7XHJcblxyXG4kY29sb3JzOiAoKTtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdibHVlJzogJGJsdWUsXHJcbiAgICAnYmx1ZS1saWdodCc6ICRibHVlLWxpZ2h0LFxyXG4gICAgJ2JsdWUtd2hpdGUnOiAkYmx1ZS13aGl0ZSxcclxuICAgICdvcmFuZ2UnOiAkb3JhbmdlLFxyXG4gICAgJ29yYW5nZS1kYXJrJzogJG9yYW5nZS1kYXJrLFxyXG4gICAgJ29yYW5nZS1saWdodCc6ICRvcmFuZ2UtbGlnaHQsXHJcbiAgICAneWVsbG93JzogJHllbGxvdyxcclxuICAgICdncmVlbic6ICRncmVlbixcclxuICAgICdncmVlbi1saWdodCc6ICRncmVlbi1saWdodCxcclxuICAgICdyZWQnOiAkcmVkLFxyXG4gICAgJ3JlZC1saWdodCc6ICRyZWQtbGlnaHQsXHJcbiAgICAnYmxhY2snOiAkYmxhY2ssXHJcbiAgICAnYmxhY2stbGlnaHQnOiAkZ3JheS03MDAsXHJcbiAgICAnZ3JheSc6ICRncmF5LTUwMCxcclxuICAgICdncmF5LWRhcmsnOiAkZ3JheS02MDAsXHJcbiAgICAnZ3JheS1saWdodCc6ICRncmF5LTQwMCxcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kc2Vjb25kYXJ5OiAkYmx1ZTtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJGluZm86ICRibHVlLWxpZ2h0O1xyXG4kd2FybmluZzogJHllbGxvdztcclxuJGRhbmdlcjogJHJlZDtcclxuJGxpZ2h0OiAkZ3JheS01MDA7XHJcbiRkYXJrOiAkYmxhY2s7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKTtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXHJcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcclxuICAgICdzdWNjZXNzJzogJHN1Y2Nlc3MsXHJcbiAgICAnaW5mbyc6ICRpbmZvLFxyXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcclxuICAgICdkYW5nZXInOiAkZGFuZ2VyLFxyXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxyXG4gICAgJ2RhcmsnOiAkZGFyayxcclxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vICR0ZXh0LWNvbG9yczogKCk7XHJcbi8vICR0ZXh0LWNvbG9yczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgICdkZWZhdWx0JzogJGJsYWNrLFxyXG4vLyAgICAgJ2xvdy1jb250cmFzdCc6ICRncmF5LTYwMCxcclxuLy8gICAgICdpbmZvJzogJGdyYXktNTAwLFxyXG4vLyAgICAgJ2Vycm9yJzogJHJlZCxcclxuLy8gICAgICdsaW5rJzogJGJsdWUsXHJcbi8vICAgICAnYmFsYW5jZSc6ICRncmVlbixcclxuLy8gICAgICdiYWxhbmNlLWNvaW5zJzogJGdyZWVuLWxpZ2h0LFxyXG4vLyAgICksXHJcbi8vICAgJHRleHQtY29sb3JzXHJcbi8vICk7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuJHNwYWNlcjogMXJlbTtcclxuJHNwYWNlcnM6ICgpO1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAvLyAwcHhcclxuICAgIDE6ICRzcGFjZXIgKiAwLjI1LFxyXG4gICAgLy8gNHB4IHh4cyxcclxuICAgIDI6ICRzcGFjZXIgKiAwLjUsXHJcbiAgICAvLyA4cHggeHMsXHJcbiAgICAzOiAkc3BhY2VyLFxyXG4gICAgLy8gMTZweCBzbVxyXG4gICAgNDogJHNwYWNlciAqIDEuNSxcclxuICAgIC8vIDI0cHggbWQsXHJcbiAgICA1OiAkc3BhY2VyICogMixcclxuICAgIC8vIDMycHggbGcsXHJcbiAgICA2OiAkc3BhY2VyICogMi41LFxyXG4gICAgLy8gNDBweCB4bCxcclxuICAgIDc6ICRzcGFjZXIgKiAzLjUsXHJcbiAgICAvLyA1NnB4IHh4bFxyXG4gICAgODogJHNwYWNlciAqIDQsXHJcbiAgICAvLyA2NHB4IHh4bFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG5cclxuJGJvZHktYmc6ICR3aGl0ZTtcclxuJGJvZHktY29sb3I6ICRkYXJrO1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcbiRsaW5rLWRlY29yYXRpb246IG5vbmU7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAkb3JhbmdlLWRhcms7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4vLyBQYXJhZ3JhcGhzXHJcbi8vXHJcbi8vIFN0eWxlIHAgZWxlbWVudC5cclxuXHJcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDY3MHB4LFxyXG4gIG1kOiA5NjBweCxcclxuICBsZzogMTI4MHB4LFxyXG4gIHhsOiAxOTIwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMjgwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1jb2x1bW5zOiAxMjtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4O1xyXG4kZ3JpZC1yb3ctY29sdW1uczogNjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1zbTogMS41O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1tZDogcmVteSgxMik7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAyLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjJyZW07XHJcblxyXG4vLyBMMFxyXG4kYm94LXNoYWRvdy14czogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDFcclxuJGJveC1zaGFkb3ctc206IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDJcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMM1xyXG4kYm94LXNoYWRvdy1sZzogMHB4IDE0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMNFxyXG4kYm94LXNoYWRvdy14bDogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAyNHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGU7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiR0cmFuc2l0aW9uLWZhZGU6IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogaGVpZ2h0IDAuMzVzIGVhc2U7XHJcbiR0cmFuc2l0aW9uLW1heC1oZWlnaHQ6IGFsbCAwLjZzIGVhc2U7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXHJcbiAgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7IC8vIDE0cHhcclxuJGZvbnQtc2l6ZS14czogcmVteSgxMik7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlcjtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiByZW15KDMwKTtcclxuJGgyLWZvbnQtc2l6ZTogcmVteSgyNik7XHJcbiRoMy1mb250LXNpemU6IHJlbXkoMjQpO1xyXG4kaDQtZm9udC1zaXplOiByZW15KDIyKTtcclxuJGg1LWZvbnQtc2l6ZTogcmVteSgyMCk7XHJcbiRoNi1mb250LXNpemU6IHJlbXkoMTgpO1xyXG5cclxuJGgxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMzBweCxcclxuICBzbTogMzZweCxcclxuICBtZDogNDhweCxcclxuICBsZzogNDhweCxcclxuICB4bDogNjBweCxcclxuKTtcclxuXHJcbi8vIGgyIHNpemVzXHJcbiRoMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI2cHgsXHJcbiAgc206IDMwcHgsXHJcbiAgbWQ6IDQwcHgsXHJcbiAgbGc6IDQ0cHgsXHJcbiAgeGw6IDU0cHgsXHJcbik7XHJcblxyXG4vLyBoMyBzaXplc1xyXG4kaDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAyNHB4LFxyXG4gIHNtOiAyNnB4LFxyXG4gIG1kOiAzMnB4LFxyXG4gIGxnOiAzNnB4LFxyXG4gIHhsOiA0NHB4LFxyXG4pO1xyXG5cclxuLy8gaDQgc2l6ZXNcclxuJGg0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjJweCxcclxuICBzbTogMjRweCxcclxuICBtZDogMjRweCxcclxuICBsZzogMjhweCxcclxuICB4bDogMjhweCxcclxuKTtcclxuXHJcbi8vIGg1IHNpemVzXHJcbiRoNS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIwcHgsXHJcbiAgc206IDIycHgsXHJcbiAgbWQ6IDIycHgsXHJcbiAgbGc6IDI0cHgsXHJcbiAgeGw6IDI0cHgsXHJcbik7XHJcblxyXG4vLyBoNiBzaXplc1xyXG4kaDYtZm9udC1zaXplczogKFxyXG4gIHhzOiAxOHB4LFxyXG4gIHNtOiAxOHB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAyMHB4LFxyXG4gIHhsOiAyMHB4LFxyXG4pO1xyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IG51bGw7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRoZWFkaW5ncy1jb2xvcjogbnVsbDtcclxuXHJcbiRwMC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIHhsOiAxOHB4LFxyXG4pO1xyXG5cclxuJHAyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTRweCxcclxuICBzbTogMTRweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEycHgsXHJcbiAgc206IDEycHgsXHJcbiAgbWQ6IDE0cHgsXHJcbiAgbGc6IDE0cHgsXHJcbiAgeGw6IDE0cHgsXHJcbik7XHJcblxyXG4kcDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMHB4LFxyXG4gIHNtOiAxMHB4LFxyXG4gIG1kOiAxMnB4LFxyXG4gIGxnOiAxMnB4LFxyXG4gIHhsOiAxMnB4LFxyXG4pO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuXHJcbiR0ZXh0LW11dGVkOiAkZ3JheS02MDA7XHJcblxyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVGFibGVzXHJcbi8vIC8vXHJcbi8vIC8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cclxuXHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCdXR0b25zICsgRm9ybXNcclxuLy8gLy9cclxuLy8gLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6IG51bGw7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6IHJlbXkoMSk7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDEuMnJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogJGxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMi41cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kYnRuLXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRidG4tZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGJ0bi1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuJGJ0bi13aGl0ZS1zcGFjZTogbnVsbDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktc206ICRpbnB1dC1idG4tcGFkZGluZy15LXNtO1xyXG4kYnRuLXBhZGRpbmcteC1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXgtc207XHJcbiRidG4tZm9udC1zaXplLXNtOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1saW5lLWhlaWdodC1zbTogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTtcclxuXHJcbiRidG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZztcclxuJGJ0bi1wYWRkaW5nLXgtbGc6ICRpbnB1dC1idG4tcGFkZGluZy14LWxnO1xyXG4kYnRuLWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGc7XHJcbiRidG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc7XHJcblxyXG4kYnRuLWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRidG4tZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuNTtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiA4cHg7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAvLyBGb3Jtc1xyXG5cclxuLy8gJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbXkoMjApO1xyXG4kaW5wdXQtZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRpbnB1dC1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRkYXJrO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG5cclxuJGlucHV0LWZvY3VzLWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuLy8gJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAkZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICRpbnB1dC1wYWRkaW5nLXk7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogMS4yNXJlbTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxLjI1cmVtOyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmc6ICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6IGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSBuby1yZXBlYXQgcmlnaHRcclxuICAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKFxyXG4gIDFlbSAqIDAuNzUsXHJcbiAgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAwLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArXHJcbiAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ1xyXG4pICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHRcclxuICAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZlxyXG4gICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtdGV4dDogKFxyXG4vLyAgIGVuOiBcIkJyb3dzZVwiXHJcbi8vICkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHZhbGlkYXRpb25cclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xyXG4vLyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgIFwidmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICAgIFwiaW52YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICApLFxyXG4vLyAgICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXHJcbi8vICk7XHJcblxyXG4vLyAvLyBaLWluZGV4IG1hc3RlciBsaXN0XHJcbi8vIC8vXHJcbi8vIC8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xyXG4vLyAvLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXHJcblxyXG4vLyAkemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2c1xyXG5cclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdmJhclxyXG5cclxuLy8gJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vIC8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xyXG4vLyAkbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLW1pbi13aWR0aDogMTByZW07XHJcbiRkcm9wZG93bi1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJGRyb3Bkb3duLXNwYWNlcjogMC4xMjVyZW07XHJcbiRkcm9wZG93bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGRyb3Bkb3duLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJGRyb3Bkb3duLWJnOiAkd2hpdGU7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjE1KTtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsXHJcbiAgJGRyb3Bkb3duLWJvcmRlci13aWR0aFxyXG4pO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogJG5hdi1kaXZpZGVyLW1hcmdpbi15O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkZ3JheS0yMDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjI1cmVtO1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIC8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC42cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxLjVyZW07XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6IDA7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJGxpbmstaG92ZXItY29sb3I7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogJGdyYXktODAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbi8vIC8vIEp1bWJvdHJvblxyXG5cclxuLy8gJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2FyZHNcclxuXHJcbi8vICRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvb2x0aXBzXHJcblxyXG4vLyAkdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAyNDZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjIpICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJHBvcG92ZXItYm9yZGVyLXJhZGl1cyxcclxuICAkcG9wb3Zlci1ib3JkZXItd2lkdGhcclxuKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogJGJveC1zaGFkb3cteGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xyXG5cclxuLy8gJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9hc3RzXHJcblxyXG4vLyAkdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiByZW15KDEyKTtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIDAuMjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtO1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbWQ7XHJcblxyXG4vLyAkYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XHJcbi8vICRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xyXG4vLyAvLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXHJcbi8vIC8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cclxuLy8gJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC43NXJlbTtcclxuXHJcbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xyXG4vLyAkbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiBudWxsO1xyXG4kbW9kYWwtY29udGVudC1iZzogJHdoaXRlO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogbm9uZTtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRibGFjaztcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogMTA0NHB4O1xyXG4vLyAkbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsZXJ0c1xyXG4vLyAvL1xyXG4vLyAvLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbi8vICRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByb2dyZXNzIGJhcnNcclxuXHJcbi8vICRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIExpc3QgZ3JvdXBcclxuXHJcbi8vICRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6IDBweDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbi8vICR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGaWd1cmVzXHJcblxyXG4vLyAkZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XHJcbi8vICRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJyZWFkY3J1bWJzXHJcblxyXG4vLyAkYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcm91c2VsXHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXHJcblxyXG4vLyAvLyBTcGlubmVyc1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDbG9zZVxyXG5cclxuLy8gJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENvZGVcclxuXHJcbi8vICRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xyXG4vLyAkY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBVdGlsaXRpZXNcclxuXHJcbi8vICRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcclxuLy8gJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xyXG4vLyAkcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByaW50aW5nXHJcblxyXG4vLyAkcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcclxuLy8gJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vIEp5c2FuIFZhcmlhYmxlc1xyXG5cclxuQGZ1bmN0aW9uIHNwYWNlKCRzaXplKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRzcGFjZXJzLCAka2V5OiAkc2l6ZSk7XHJcbn1cclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA2MnB4O1xyXG4kaGVhZGVyLWhlaWdodC1tZDogMTAwcHg7XHJcbiRoZWFkZXItd2lkdGg6IDI4MHB4O1xyXG5cclxuJGJ0bi1taW4td2lkdGg6IDE2NHB4O1xyXG5cclxuLy8gSi1pbnB1dFxyXG4kai1pbnB1dC1mb250LXNpemU6IDFyZW07XHJcbiRqLWlucHV0LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcclxuJGotaW5wdXQtZm9udC1zdHlsZTogbm9ybWFsO1xyXG4kai1pbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcblxyXG4kai1pbnB1dC1saW5lLWhlaWdodDogMjBweDtcclxuJGotaW5wdXQtcGFkZGluZy15OiAxNy41cHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteDogMjBweDtcclxuXHJcbiRqLWlucHV0LWJvcmRlci13aWR0aDogMXB4O1xyXG4kai1pbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRqLWlucHV0LWJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yOiAkYmxhY2s7XHJcbiRqLWlucHV0LW1hc2stY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1pY29uLWNvbG9yOiAkb3JhbmdlO1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZXJyb3I6ICRyZWQtbGlnaHQ7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1kaXNhYmxlZDogJGlucHV0LWRpc2FibGVkLWJnOyAvLyBmcm9tIGZpZ21hIHByaW1pdGl2ZXMgc2hvdWxkIGJlIGdyYXktMjAwXHJcblxyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3A6ICRqLWlucHV0LXBhZGRpbmcteSArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wLWFjdGl2ZTogMTBweDtcclxuJGotaW5wdXQtbGluay1wb3NpdGlvbi10b3A6IDE2cHg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ6ICRqLWlucHV0LXBhZGRpbmcteCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6ICRqLWlucHV0LWxpbmUtaGVpZ2h0O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LXBhZGRpbmctdG9wOiAyN3B4O1xyXG4kai1pbnB1dC1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuJGotaW5wdXQtbWFyZ2luLWJvdHRvbTogMTZweDtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1wb3NpdGlvbjogJGotaW5wdXQtcGFkZGluZy10b3AgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWNoYXItbGVuZ3RoOiA4Ljk5cHg7XHJcblxyXG4kai1pbnB1dC1idXR0b24tcG9zaXRpb246IDIwcHg7XHJcbiRqLWlucHV0LXNoYWRvdy1wb3NpdGlvbjogJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDtcclxuXHJcbiRqLWlucHV0LWxhYmVsLXotaW5kZXg6IDA7XHJcbiRqLWlucHV0LXNoYWRvdy16LWluZGV4OiAxO1xyXG4kai1pbnB1dC16LWluZGV4OiAyO1xyXG4kai1pbnB1dC1saW5rLXotaW5kZXg6IDM7XHJcbiRqLWlucHV0LWJ1dHRvbi16LWluZGV4OiA0O1xyXG5cclxuJGJveC1zaGFkb3ctdG8tdG9wLWxnOiAwIC0xcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6IHRydWU7XHJcbiJdfQ== */";

/***/ }),

/***/ 90924:
/*!*****************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/account-statement.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"account-statement\" >\n  <h2 class=\"account-statement__title mb-4\" translate>Выписка</h2>\n  <div class='account-statement__filter'>\n    <div class='account-statement__search'>\n      <j-account-statement-search (searchChange)='searchChange($event)'></j-account-statement-search>\n    </div>\n    <div class='account-statement__period'>\n      <j-account-statement-period-date (submitted)='onPeriodChanged($event)'></j-account-statement-period-date>\n    </div>\n  </div>\n  <j-account-statement-table [accountStatements]='accountStatements'  [loading]='loading'></j-account-statement-table>\n  <j-account-statement-pagination (pageChange)='pageChange($event)' [pagination]='pagination'></j-account-statement-pagination>\n</section>\n";

/***/ }),

/***/ 91049:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-pagination/account-statement-pagination.component.html?ngResource ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf='pagination' class='order-pagination' [hidden]='pagination.total < 12'>\n  <ngb-pagination [collectionSize]=\"pagination.total\" [pageSize]='12' [page]=\"pagination.currentPage\" (pageChange)='pageChange.emit($event)'  maxSize=\"3\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n</div>\n";

/***/ }),

/***/ 17605:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-period-date/account-statement-period-date.component.html?ngResource ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-filter-period-dropdown [mode]=\"mode\"\n                          [periodList]=\"periodList\"\n                          [defaultPeriod]='defaultPeriod'\n                          [selectedPeriod]='defaultPeriod'\n                          [hasClearButton]='false'\n                          (submitted)=\"onPeriodChanged($event)\"\n                          class=\"filter-group d-none d-sm-inline-block\">\n</j-filter-period-dropdown>\n";

/***/ }),

/***/ 34854:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-search/account-statement-search.component.html?ngResource ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-search-input (valueChanged)=\"search($event)\"\n                [value]='terms'\n                [formControl]='control'\n                ngDefaultControl\n                [placeholder]=\"'Номер заказа'\">\n</j-search-input>\n";

/***/ }),

/***/ 98205:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/jmart-cabinet/modules/account-statement/components/account-statement-table/account-statement-table.component.html?ngResource ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class='table-wrapper'>\n  <table>\n    <thead>\n    <tr>\n      <th>Дата</th>\n      <th>№ заказа</th>\n      <th>Тип оплаты</th>\n      <th>Цена без скидки</th>\n      <th>Цена со скидкой</th>\n      <th>Комиссия</th>\n      <th>Сумма комиссии</th>\n      <th>Итоговая сумма</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let accountStatement of accountStatements;'>\n      <td>{{accountStatement.paymentDate | date: 'dd.MM.yyyy HH:mm'}}</td>\n      <td>\n        <a href='javascript:void(0)'\n           routerLink='/jmart-cabinet/order-card/{{accountStatement.orderNumber}}'\n           [queryParams]=\"{'back':'account-statement'}\">\n          {{accountStatement.orderNumber}}\n        </a>\n      </td>\n      <td>{{accountStatement.paymentMethod}}</td>\n      <td>{{accountStatement.price | currency:'₸':'symbol':'0.0-2'}}</td>\n      <td>{{accountStatement.discountPrice | currency:'₸':'symbol':'0.0-2'}}</td>\n      <td>{{accountStatement.commission}}%</td>\n      <td>{{accountStatement.commissionAmount | currency:'₸':'symbol':'0.0-2'}}</td>\n      <td>{{accountStatement.totalAmount | currency:'₸':'symbol':'0.0-2'}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <div class='empty' *ngIf='!loading && this.accountStatements?.length === 0;'>\n    <section class=\"empty container-fluid\">\n      <span class=\"empty__img mb-3\" [inlineSVG]=\"img\"></span>\n      <span class=\"empty__text\" [innerHTML]='\"У вас ещё нет транзакций.\"'>\n        </span>\n    </section>\n\n  </div>\n  <div class='skeleton' *ngIf='loading'>\n    <ngx-skeleton-loader *ngFor='let $ of [].constructor(7);' [theme]='theme'>\n    </ngx-skeleton-loader>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_jmart-cabinet_modules_account-statement_account-statement_module_ts.js.map