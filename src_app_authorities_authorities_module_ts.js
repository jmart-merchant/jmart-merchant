"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_authorities_authorities_module_ts"],{

/***/ 45503:
/*!***********************************************************!*\
  !*** ./src/app/authorities/authorities-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesRoutingModule": () => (/* binding */ AuthoritiesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards */ 97377);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 17007);
/* harmony import */ var _authorities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorities.component */ 29121);






const routes = [
    {
        path: '',
        component: _authorities_component__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesComponent,
        data: {
            title: 'SETTINGS.TITLE',
        },
        children: [
            {
                path: 'main',
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesMainComponent,
                children: [
                    {
                        path: 'users',
                        component: _containers__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesUsersComponent,
                    },
                    {
                        path: 'order',
                        component: _containers__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesOrderComponent,
                    },
                    {
                        path: 'otp',
                        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_0__.HasOtpDevicesGuard],
                        component: _containers__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesOtpComponent,
                    },
                    {
                        path: '**',
                        redirectTo: 'users',
                    },
                ],
            },
            {
                path: 'limits/:id',
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesLimitsComponent,
            },
            {
                path: '**',
                redirectTo: 'main',
            },
        ],
    },
];
let AuthoritiesRoutingModule = class AuthoritiesRoutingModule {
};
AuthoritiesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], AuthoritiesRoutingModule);



/***/ }),

/***/ 29121:
/*!******************************************************!*\
  !*** ./src/app/authorities/authorities.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesComponent": () => (/* binding */ AuthoritiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities.component.html?ngResource */ 36869);
/* harmony import */ var _authorities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities.component.scss?ngResource */ 69916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthoritiesComponent = class AuthoritiesComponent {
    constructor() { }
};
AuthoritiesComponent.ctorParameters = () => [];
AuthoritiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-authorities',
        template: _authorities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesComponent);



/***/ }),

/***/ 14753:
/*!***************************************************!*\
  !*** ./src/app/authorities/authorities.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesModule": () => (/* binding */ AuthoritiesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 17007);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ 98874);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals */ 82988);
/* harmony import */ var _authorities_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorities-routing.module */ 45503);
/* harmony import */ var _authorities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorities.component */ 29121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);










let AuthoritiesModule = class AuthoritiesModule {
};
AuthoritiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _authorities_routing_module__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesRoutingModule,
        ],
        declarations: [_authorities_component__WEBPACK_IMPORTED_MODULE_5__.AuthoritiesComponent, _containers__WEBPACK_IMPORTED_MODULE_1__.CONTAINERS, _components__WEBPACK_IMPORTED_MODULE_2__.COMPONENTS, _modals__WEBPACK_IMPORTED_MODULE_3__.MODALS],
    })
], AuthoritiesModule);



/***/ }),

/***/ 47514:
/*!*************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-nav/authorities-nav.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesNavComponent": () => (/* binding */ AuthoritiesNavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-nav.component.html?ngResource */ 13046);
/* harmony import */ var _authorities_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-nav.component.scss?ngResource */ 8969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @authorities/services */ 30285);






let AuthoritiesNavComponent = class AuthoritiesNavComponent {
    constructor(authoritiesService) {
        this.authoritiesService = authoritiesService;
        this.links = [
            'users',
            // 'order',
            'otp',
        ];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.initSubscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    mapTranslate(label) {
        return `AUTHORITIES.MAIN.NAV.${label.toUpperCase()}`;
    }
    initSubscription() {
        this.subscription.add(this.authoritiesService.getOtpDevices().subscribe((otpDevices) => {
            if ((otpDevices === null || otpDevices === void 0 ? void 0 : otpDevices.length) > 0) {
                if (!this.links.includes('otp')) {
                    this.links.push('otp');
                }
            }
            else {
                if (this.links.includes('otp')) {
                    this.links.splice(this.links.indexOf('otp'), 1);
                }
            }
        }));
    }
};
AuthoritiesNavComponent.ctorParameters = () => [
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesService }
];
AuthoritiesNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-authorities-nav',
        template: _authorities_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesNavComponent);



/***/ }),

/***/ 6016:
/*!*********************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payment/authorities-payment.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesPaymentComponent": () => (/* binding */ AuthoritiesPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-payment.component.html?ngResource */ 31607);
/* harmony import */ var _authorities_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-payment.component.scss?ngResource */ 90093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _authorities_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @authorities/modals */ 82988);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @authorities/services */ 30285);









let AuthoritiesPaymentComponent = class AuthoritiesPaymentComponent {
    constructor(authorityPermissionsService, notifierService, translateService, modalService) {
        this.authorityPermissionsService = authorityPermissionsService;
        this.notifierService = notifierService;
        this.translateService = translateService;
        this.modalService = modalService;
    }
    onChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let permission;
                if (value) {
                    permission = yield this.enablePayment();
                }
                else {
                    permission = yield this.disablePayment();
                }
                if (!this.payment.permissionId && (permission === null || permission === void 0 ? void 0 : permission.id)) {
                    this.payment.permissionId = permission.id;
                }
            }
            catch (error) {
                this.payment.isEnabled = !this.payment.isEnabled;
            }
        });
    }
    enablePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const permission = yield this.authorityPermissionsService.grantPermission(this.person, this.payment);
                this.notify('ACCESS_ENABLED');
                return permission;
            }
            catch (error) {
                console.log(error);
                this.notify('ACCESS_ENABLE_FAILED', 'error');
                throw error;
            }
        });
    }
    disablePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const permission = yield this.authorityPermissionsService.refusePermission(this.person, this.payment);
                this.notify('ACCESS_DISABLED');
                return permission;
            }
            catch (error) {
                console.log(error);
                this.notify('ACCESS_DISABLE_FAILED', 'error');
                throw error;
            }
        });
    }
    showCreateLimitModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.createModalRef(_authorities_modals__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesCreateLimitModalComponent);
            try {
                const limit = yield modalRef.result;
                this.payment.limitId = limit.id;
                this.payment.limitAmount = limit.limit;
                this.notify('LIMIT_SET');
            }
            catch (error) {
                if (error) {
                    this.notify('LIMIT_SET_FAILED', 'error');
                }
            }
        });
    }
    showEditLimitModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.createModalRef(_authorities_modals__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesEditLimitModalComponent);
            modalRef.componentInstance.limit = {
                id: this.payment.limitId,
                paymentType: this.payment.type,
                limit: this.payment.limitAmount,
            };
            try {
                const { message, limit } = yield modalRef.result;
                if (message === 'update') {
                    this.payment.limitId = limit.id;
                    this.payment.limitAmount = limit.limit;
                    this.notify('LIMIT_UPDATED');
                }
                else {
                    this.payment.limitId = null;
                    this.payment.limitAmount = null;
                    this.notify('LIMIT_DELETED');
                }
            }
            catch (error) {
                if (error === 'update') {
                    this.notify('LIMIT_UPDATE_FAILED', 'error');
                }
                else if (error == 'delete') {
                    this.notify('LIMIT_DELETE_FAILED', 'error');
                }
            }
        });
    }
    mapPaymentType(type) {
        return this.mapTranslate(`TYPE.${type}`);
    }
    mapButtonLabel(message) {
        return this.mapTranslate(`BUTTON.${message}`);
    }
    mapSwitchMessage(message) {
        return this.mapTranslate(`SWITCH.${message}`);
    }
    createModalRef(modalComponent) {
        const modalRef = this.modalService.open(modalComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_dictionary',
            centered: true,
        });
        modalRef.componentInstance.authorityId = this.person.id;
        modalRef.componentInstance.paymentType = this.payment.type;
        return modalRef;
    }
    mapTranslate(key) {
        return `AUTHORITIES.PAYMENTS.${key}`;
    }
    notify(message, type = 'default') {
        this.notifierService.notify(type, this.translateService.instant(this.mapTranslate(`MESSAGES.${message}`), {
            paymentType: this.translateService.instant(this.mapPaymentType(this.payment.type)),
        }));
    }
};
AuthoritiesPaymentComponent.ctorParameters = () => [
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_3__.AuthorityPermissionsService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal }
];
AuthoritiesPaymentComponent.propDecorators = {
    payment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
AuthoritiesPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'j-authorities-payment',
        template: _authorities_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesPaymentComponent);



/***/ }),

/***/ 31642:
/*!***********************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payments/authorities-payments.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesPaymentsComponent": () => (/* binding */ AuthoritiesPaymentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-payments.component.html?ngResource */ 3859);
/* harmony import */ var _authorities_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-payments.component.scss?ngResource */ 46935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @authorities/services */ 30285);






const PAYMENT_TYPES = [
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.PENSION,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.SOCIAL,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.MEDICAL,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.TAX,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.SALARY,
    // PAYMENT_TYPE.IN_BETWEEN,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.CONVERSION,
    _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.FOREIGN,
];
let AuthoritiesPaymentsComponent = class AuthoritiesPaymentsComponent {
    constructor(authorityPermissionsService, authorityLimitsService) {
        this.authorityPermissionsService = authorityPermissionsService;
        this.authorityLimitsService = authorityLimitsService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const permissions = yield this.authorityPermissionsService.getPermissions(this.person.id);
                const limits = yield this.loadLimits();
                this.payments = PAYMENT_TYPES.map((type) => {
                    const permission = permissions.find((permission) => permission.paymentType === type);
                    const limit = limits.find((limit) => limit.paymentType === type);
                    return {
                        type,
                        permissionId: permission ? permission.id : null,
                        isEnabled: permission ? permission.permissions.length > 0 : true,
                        limitId: limit ? limit.id : null,
                        limitAmount: limit ? limit.limit : null,
                        isLimitDisabled: [
                            _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.CONVERSION,
                            _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.FOREIGN,
                        ].includes(type),
                    };
                });
            }
            catch (error) {
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    loadLimits() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const limits = yield this.authorityLimitsService.getLimits(this.person.id);
                return limits;
            }
            catch (error) {
                return [];
            }
        });
    }
    mapTranslate(key) {
        return `AUTHORITIES.PAYMENTS.${key}`;
    }
};
AuthoritiesPaymentsComponent.ctorParameters = () => [
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_3__.AuthorityPermissionsService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_3__.AuthorityLimitsService }
];
AuthoritiesPaymentsComponent.propDecorators = {
    person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
AuthoritiesPaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-authorities-payments',
        template: _authorities_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesPaymentsComponent);



/***/ }),

/***/ 85633:
/*!***************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-registered/authorities-registered.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesRegisteredComponent": () => (/* binding */ AuthoritiesRegisteredComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_registered_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-registered.component.html?ngResource */ 19630);
/* harmony import */ var _authorities_registered_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-registered.component.scss?ngResource */ 18722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @feature-flags/index */ 15057);









let AuthoritiesRegisteredComponent = class AuthoritiesRegisteredComponent {
    constructor(companyService, authoritiesService, featureFlagsService) {
        this.companyService = companyService;
        this.authoritiesService = authoritiesService;
        this.featureFlagsService = featureFlagsService;
        this.persons = [];
        this.isPrimaryAuthority = false;
        this.headings = ['USER', 'TYPE', 'DURATION'];
        // primaryHeadings = ['RESTRICTIONS', ''];
        this.primaryHeadings = [''];
        this.isFeatureDisabled = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.restrictions = [];
        this.initCompanySubscription();
        this.initFeatureFlagsSubscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    mapAuthority(authority) {
        return this.mapTranslate(`AUTHORITY.${authority}`);
    }
    mapRestrictions(restrictionType) {
        return this.mapTranslate(`RESTRICTIONS.${restrictionType}`);
    }
    mapTableHeading(heading) {
        if (!heading) {
            return '';
        }
        return this.mapTranslate(`TABLE.${heading}`);
    }
    mapTranslate(key) {
        return `AUTHORITIES.USERS.${key}`;
    }
    initCompanySubscription() {
        this.subscription.add(this.companyService.refresh$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([, , isAuthorized]) => isAuthorized))
            .subscribe(([user, company]) => {
            this.currentUserId = user === null || user === void 0 ? void 0 : user.id;
            this.isPrimaryAuthority = this.companyService.isPrimaryAuthority(company.authority);
            if (this.isPrimaryAuthority) {
                this.retrieveRestrictions();
            }
        }));
    }
    initFeatureFlagsSubscription() {
        this.subscription.add(this.featureFlagsService.featureFlags$.subscribe(() => {
            this.isFeatureDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_4__.FEATURE_FLAG.PAYMENT_PERMISSIONS);
        }));
    }
    retrieveRestrictions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.restrictions = yield this.authoritiesService.fetchRestrictions();
        });
    }
};
AuthoritiesRegisteredComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_3__.AuthoritiesService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_4__.FeatureFlagsService }
];
AuthoritiesRegisteredComponent.propDecorators = {
    persons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
AuthoritiesRegisteredComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'j-authorities-registered',
        template: _authorities_registered_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_registered_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesRegisteredComponent);



/***/ }),

/***/ 83022:
/*!*******************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-unregistered/authorities-unregistered.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesUnregisteredComponent": () => (/* binding */ AuthoritiesUnregisteredComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_unregistered_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-unregistered.component.html?ngResource */ 25615);
/* harmony import */ var _authorities_unregistered_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-unregistered.component.scss?ngResource */ 15940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthoritiesUnregisteredComponent = class AuthoritiesUnregisteredComponent {
    constructor() {
        this.persons = [];
        this.headings = ['USER', 'IIN', 'PHONE'];
    }
    mapTableHeading(heading) {
        if (!heading) {
            return '';
        }
        return this.mapTranslate(`TABLE.${heading}`);
    }
    mapTranslate(key) {
        return `AUTHORITIES.USERS.${key}`;
    }
};
AuthoritiesUnregisteredComponent.ctorParameters = () => [];
AuthoritiesUnregisteredComponent.propDecorators = {
    persons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AuthoritiesUnregisteredComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-authorities-unregistered',
        template: _authorities_unregistered_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_unregistered_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesUnregisteredComponent);



/***/ }),

/***/ 98874:
/*!*************************************************!*\
  !*** ./src/app/authorities/components/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "AuthoritiesNavComponent": () => (/* reexport safe */ _authorities_nav_authorities_nav_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesNavComponent),
/* harmony export */   "AuthoritiesPaymentComponent": () => (/* reexport safe */ _authorities_payment_authorities_payment_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesPaymentComponent),
/* harmony export */   "AuthoritiesPaymentsComponent": () => (/* reexport safe */ _authorities_payments_authorities_payments_component__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesPaymentsComponent),
/* harmony export */   "AuthoritiesRegisteredComponent": () => (/* reexport safe */ _authorities_registered_authorities_registered_component__WEBPACK_IMPORTED_MODULE_3__.AuthoritiesRegisteredComponent),
/* harmony export */   "AuthoritiesUnregisteredComponent": () => (/* reexport safe */ _authorities_unregistered_authorities_unregistered_component__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesUnregisteredComponent)
/* harmony export */ });
/* harmony import */ var _authorities_nav_authorities_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-nav/authorities-nav.component */ 47514);
/* harmony import */ var _authorities_payment_authorities_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-payment/authorities-payment.component */ 6016);
/* harmony import */ var _authorities_payments_authorities_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorities-payments/authorities-payments.component */ 31642);
/* harmony import */ var _authorities_registered_authorities_registered_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorities-registered/authorities-registered.component */ 85633);
/* harmony import */ var _authorities_unregistered_authorities_unregistered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorities-unregistered/authorities-unregistered.component */ 83022);





const COMPONENTS = [
    _authorities_nav_authorities_nav_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesNavComponent,
    _authorities_registered_authorities_registered_component__WEBPACK_IMPORTED_MODULE_3__.AuthoritiesRegisteredComponent,
    _authorities_unregistered_authorities_unregistered_component__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesUnregisteredComponent,
    _authorities_payments_authorities_payments_component__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesPaymentsComponent,
    _authorities_payment_authorities_payment_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesPaymentComponent,
];







/***/ }),

/***/ 44568:
/*!*******************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-limits/authorities-limits.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesLimitsComponent": () => (/* binding */ AuthoritiesLimitsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_limits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-limits.component.html?ngResource */ 7021);
/* harmony import */ var _authorities_limits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-limits.component.scss?ngResource */ 51426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47418);








let AuthoritiesLimitsComponent = class AuthoritiesLimitsComponent {
    constructor(router, route, companyService) {
        this.router = router;
        this.route = route;
        this.companyService = companyService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.isReady = false;
        this.initAuthoritiesSubscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    mapAuthority(authority) {
        return this.mapTranslate(`AUTHORITY.${authority}`);
    }
    mapTranslate(key) {
        return `AUTHORITIES.USERS.${key}`;
    }
    initAuthoritiesSubscription() {
        this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([
            this.route.params,
            this.companyService
                .getAuthorizedPersons()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((list) => (list === null || list === void 0 ? void 0 : list.length) > 0))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err, caught) => {
                console.log(err);
                this.onClose();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
            })),
        ]).subscribe(([params, authorizedPersons]) => {
            this.initPerson(authorizedPersons.find((person) => person.id === params.id));
        }));
    }
    initPerson(person) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!person) {
                this.onClose();
            }
            this.person = person;
            this.isReady = true;
        });
    }
    onClose() {
        this.router.navigate(['/authorities/main']);
    }
};
AuthoritiesLimitsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService }
];
AuthoritiesLimitsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'j-authorities-limits',
        template: _authorities_limits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_limits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesLimitsComponent);



/***/ }),

/***/ 8338:
/*!***************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-main/authorities-main.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesMainComponent": () => (/* binding */ AuthoritiesMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-main.component.html?ngResource */ 67984);
/* harmony import */ var _authorities_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-main.component.scss?ngResource */ 66244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let AuthoritiesMainComponent = class AuthoritiesMainComponent {
    constructor(router) {
        this.router = router;
    }
    onClose() {
        this.router.navigate(['/settings']);
    }
};
AuthoritiesMainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthoritiesMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-authorities-main',
        template: _authorities_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesMainComponent);



/***/ }),

/***/ 89375:
/*!*****************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-order/authorities-order.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesOrderComponent": () => (/* binding */ AuthoritiesOrderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_order_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-order.component.html?ngResource */ 12506);
/* harmony import */ var _authorities_order_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-order.component.scss?ngResource */ 98189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthoritiesOrderComponent = class AuthoritiesOrderComponent {
    constructor() { }
};
AuthoritiesOrderComponent.ctorParameters = () => [];
AuthoritiesOrderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-authorities-order',
        template: _authorities_order_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_order_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesOrderComponent);



/***/ }),

/***/ 32880:
/*!*************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-otp/authorities-otp.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesOtpComponent": () => (/* binding */ AuthoritiesOtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-otp.component.html?ngResource */ 3827);
/* harmony import */ var _authorities_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-otp.component.scss?ngResource */ 60733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @authorities/services */ 30285);






let AuthoritiesOtpComponent = class AuthoritiesOtpComponent {
    constructor(authoritiesService) {
        this.authoritiesService = authoritiesService;
        this.otpDevices = [];
        this.headings = ['SERIAL', 'USER'];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.initSubscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    mapTableHeading(heading) {
        if (!heading) {
            return '';
        }
        return this.mapTranslate(`TABLE.${heading}`);
    }
    mapTranslate(key) {
        return `AUTHORITIES.OTP.${key}`;
    }
    initSubscription() {
        this.subscription.add(this.authoritiesService.getOtpDevices().subscribe((otpDevices) => {
            this.otpDevices = otpDevices;
        }));
    }
};
AuthoritiesOtpComponent.ctorParameters = () => [
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesService }
];
AuthoritiesOtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-authorities-otp',
        template: _authorities_otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesOtpComponent);



/***/ }),

/***/ 39810:
/*!*****************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-users/authorities-users.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesUsersComponent": () => (/* binding */ AuthoritiesUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-users.component.html?ngResource */ 1081);
/* harmony import */ var _authorities_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-users.component.scss?ngResource */ 37770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);







let AuthoritiesUsersComponent = class AuthoritiesUsersComponent {
    constructor(companyService) {
        this.companyService = companyService;
        this.registered = [];
        this.unregistered = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.initAuthoritiesSubscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initAuthoritiesSubscription() {
        this.subscription.add(this.companyService
            .getAuthorizedPersons()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err, caught) => {
            console.log(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
        }))
            .subscribe((authorities) => {
            if ((authorities === null || authorities === void 0 ? void 0 : authorities.length) > 0) {
                this.registered = authorities.filter((authority) => !!authority.userId);
                this.unregistered = authorities.filter((authority) => !authority.userId);
            }
        }));
    }
};
AuthoritiesUsersComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService }
];
AuthoritiesUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'j-authorities-users',
        template: _authorities_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesUsersComponent);



/***/ }),

/***/ 17007:
/*!*************************************************!*\
  !*** ./src/app/authorities/containers/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTAINERS": () => (/* binding */ CONTAINERS),
/* harmony export */   "AuthoritiesMainComponent": () => (/* reexport safe */ _authorities_main_authorities_main_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesMainComponent),
/* harmony export */   "AuthoritiesOrderComponent": () => (/* reexport safe */ _authorities_order_authorities_order_component__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesOrderComponent),
/* harmony export */   "AuthoritiesOtpComponent": () => (/* reexport safe */ _authorities_otp_authorities_otp_component__WEBPACK_IMPORTED_MODULE_3__.AuthoritiesOtpComponent),
/* harmony export */   "AuthoritiesUsersComponent": () => (/* reexport safe */ _authorities_users_authorities_users_component__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesUsersComponent),
/* harmony export */   "AuthoritiesLimitsComponent": () => (/* reexport safe */ _authorities_limits_authorities_limits_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesLimitsComponent)
/* harmony export */ });
/* harmony import */ var _authorities_limits_authorities_limits_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-limits/authorities-limits.component */ 44568);
/* harmony import */ var _authorities_main_authorities_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-main/authorities-main.component */ 8338);
/* harmony import */ var _authorities_order_authorities_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorities-order/authorities-order.component */ 89375);
/* harmony import */ var _authorities_otp_authorities_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorities-otp/authorities-otp.component */ 32880);
/* harmony import */ var _authorities_users_authorities_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorities-users/authorities-users.component */ 39810);





const CONTAINERS = [
    _authorities_main_authorities_main_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesMainComponent,
    _authorities_users_authorities_users_component__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesUsersComponent,
    _authorities_order_authorities_order_component__WEBPACK_IMPORTED_MODULE_2__.AuthoritiesOrderComponent,
    _authorities_otp_authorities_otp_component__WEBPACK_IMPORTED_MODULE_3__.AuthoritiesOtpComponent,
    _authorities_limits_authorities_limits_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesLimitsComponent
];







/***/ }),

/***/ 8371:
/*!***********************************************************!*\
  !*** ./src/app/authorities/guards/hasOtpDevices.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasOtpDevicesGuard": () => (/* binding */ HasOtpDevicesGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);





let HasOtpDevicesGuard = class HasOtpDevicesGuard {
    constructor(authoritiesService, router) {
        this.authoritiesService = authoritiesService;
        this.router = router;
    }
    canActivate() {
        return this.authoritiesService.getOtpDevices().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((otpDevices) => {
            const hasDevices = (otpDevices === null || otpDevices === void 0 ? void 0 : otpDevices.length) > 0;
            if (!hasDevices) {
                this.router.navigate(['/authorities/main']);
            }
            return hasDevices;
        }));
    }
};
HasOtpDevicesGuard.ctorParameters = () => [
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HasOtpDevicesGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], HasOtpDevicesGuard);



/***/ }),

/***/ 97377:
/*!*********************************************!*\
  !*** ./src/app/authorities/guards/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasOtpDevicesGuard": () => (/* reexport safe */ _hasOtpDevices_guard__WEBPACK_IMPORTED_MODULE_0__.HasOtpDevicesGuard)
/* harmony export */ });
/* harmony import */ var _hasOtpDevices_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasOtpDevices.guard */ 8371);



/***/ }),

/***/ 26676:
/*!***************************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-create-limit-modal/authorities-create-limit-modal.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesCreateLimitModalComponent": () => (/* binding */ AuthoritiesCreateLimitModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_create_limit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-create-limit-modal.component.html?ngResource */ 76474);
/* harmony import */ var _authorities_create_limit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-create-limit-modal.component.scss?ngResource */ 45174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _authorities_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @authorities/models */ 58328);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @authorities/services */ 30285);










let AuthoritiesCreateLimitModalComponent = class AuthoritiesCreateLimitModalComponent {
    constructor(modal, authorityLimitsService, maskedService) {
        this.modal = modal;
        this.authorityLimitsService = authorityLimitsService;
        this.maskedService = maskedService;
        this.isLoading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                (control) => {
                    if (control.value &&
                        this.maskedService.getNumberedAmount(control.value) > _authorities_models__WEBPACK_IMPORTED_MODULE_4__.LIMIT_MAX_AMOUNT) {
                        return { maxAmount: true };
                    }
                    return null;
                },
            ]),
        });
    }
    ngOnInit() {
        this.title = this.mapTranslate(`CREATE.${this.paymentType}`);
    }
    dismissModal(error) {
        this.modal.dismiss(error);
    }
    closeModal(limit) {
        this.modal.close(limit);
    }
    createLimit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const { amount } = this.form.getRawValue();
            const limit = {
                paymentType: this.paymentType,
                limit: {
                    amount: this.maskedService.getNumberedAmount(amount),
                    currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_2__.CURRENCY.KZT,
                },
            };
            try {
                const result = yield this.authorityLimitsService.createLimit(this.authorityId, limit);
                this.closeModal(result);
            }
            catch (error) {
                this.dismissModal(error);
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    mapTranslate(key) {
        return `AUTHORITIES.MODALS.${key}`;
    }
};
AuthoritiesCreateLimitModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_5__.AuthorityLimitsService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__.MaskedService }
];
AuthoritiesCreateLimitModalComponent.propDecorators = {
    authorityId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    paymentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
AuthoritiesCreateLimitModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'j-authorities-create-limit-modal',
        template: _authorities_create_limit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_create_limit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesCreateLimitModalComponent);



/***/ }),

/***/ 92764:
/*!***********************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-edit-limit-modal/authorities-edit-limit-modal.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoritiesEditLimitModalComponent": () => (/* binding */ AuthoritiesEditLimitModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authorities_edit_limit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-edit-limit-modal.component.html?ngResource */ 98591);
/* harmony import */ var _authorities_edit_limit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-edit-limit-modal.component.scss?ngResource */ 68408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _authorities_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @authorities/models */ 58328);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @authorities/services */ 30285);










let AuthoritiesEditLimitModalComponent = class AuthoritiesEditLimitModalComponent {
    constructor(modal, authorityLimitsService, maskedService) {
        this.modal = modal;
        this.authorityLimitsService = authorityLimitsService;
        this.maskedService = maskedService;
        this.isLoading = false;
    }
    dismissModal(message) {
        this.modal.dismiss(message);
    }
    closeModal(message, limit = null) {
        this.modal.close({ message, limit });
    }
    ngOnInit() {
        this.title = this.mapTranslate(`CREATE.${this.paymentType}`);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.maskedService.getMaskedAmount(this.limit.limit.amount), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                (control) => {
                    if (control.value &&
                        this.maskedService.getNumberedAmount(control.value) >
                            _authorities_models__WEBPACK_IMPORTED_MODULE_4__.LIMIT_MAX_AMOUNT) {
                        return { maxAmount: true };
                    }
                    return null;
                },
            ]),
        });
    }
    deleteLimit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            try {
                yield this.authorityLimitsService.deleteLimit(this.authorityId, this.limit);
                this.closeModal('delete');
            }
            catch (error) {
                this.dismissModal('delete');
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    updateLimit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { amount } = this.form.getRawValue();
            const limit = Object.assign(Object.assign({}, this.limit), { limit: {
                    amount: this.maskedService.getNumberedAmount(amount),
                    currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_2__.CURRENCY.KZT,
                } });
            this.isLoading = true;
            try {
                const result = yield this.authorityLimitsService.updateLimit(this.authorityId, limit);
                this.closeModal('update', result);
            }
            catch (error) {
                this.dismissModal('update');
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    mapTranslate(key) {
        return `AUTHORITIES.MODALS.${key}`;
    }
};
AuthoritiesEditLimitModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_5__.AuthorityLimitsService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__.MaskedService }
];
AuthoritiesEditLimitModalComponent.propDecorators = {
    authorityId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    paymentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
AuthoritiesEditLimitModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'j-authorities-edit-limit-modal',
        template: _authorities_edit_limit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authorities_edit_limit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthoritiesEditLimitModalComponent);



/***/ }),

/***/ 82988:
/*!*********************************************!*\
  !*** ./src/app/authorities/modals/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODALS": () => (/* binding */ MODALS),
/* harmony export */   "AuthoritiesCreateLimitModalComponent": () => (/* reexport safe */ _authorities_create_limit_modal_authorities_create_limit_modal_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesCreateLimitModalComponent),
/* harmony export */   "AuthoritiesEditLimitModalComponent": () => (/* reexport safe */ _authorities_edit_limit_modal_authorities_edit_limit_modal_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesEditLimitModalComponent)
/* harmony export */ });
/* harmony import */ var _authorities_create_limit_modal_authorities_create_limit_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorities-create-limit-modal/authorities-create-limit-modal.component */ 26676);
/* harmony import */ var _authorities_edit_limit_modal_authorities_edit_limit_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorities-edit-limit-modal/authorities-edit-limit-modal.component */ 92764);


const MODALS = [
    _authorities_create_limit_modal_authorities_create_limit_modal_component__WEBPACK_IMPORTED_MODULE_0__.AuthoritiesCreateLimitModalComponent,
    _authorities_edit_limit_modal_authorities_edit_limit_modal_component__WEBPACK_IMPORTED_MODULE_1__.AuthoritiesEditLimitModalComponent,
];




/***/ }),

/***/ 69916:
/*!*******************************************************************!*\
  !*** ./src/app/authorities/authorities.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8969:
/*!**************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-nav/authorities-nav.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy1uYXYuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 90093:
/*!**********************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payment/authorities-payment.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n  padding: 1rem 0;\n}\n@media (min-width: 670px) {\n  :host {\n    align-items: center;\n    display: flex;\n  }\n}\n.toggle__label {\n  display: block;\n  margin-left: 1rem;\n}\n.toggle {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n@media (min-width: 670px) {\n  .toggle {\n    margin-bottom: 0;\n  }\n}\n.toggle__button {\n  text-align: center;\n  flex-grow: 1;\n}\n@media (min-width: 670px) {\n  .toggle__button {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml0aWVzLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFERjtBQ3lESTtFRDFESjtJQUtJLG1CQUFBO0lBQ0EsYUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FDd0NJO0VEM0NKO0lBTUksZ0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjtBQzhCSTtFRGpDSjtJQUtJLGlCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJhdXRob3JpdGllcy1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZV9fbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGVfX2J1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuIFxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 46935:
/*!************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payments/authorities-payments.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  background: #fff;\n  border-radius: 12px;\n  display: block;\n}\n\n.payments__header,\n.payments__body {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.payments__header {\n  padding-top: 22px;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #dbdfe2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml0aWVzLXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFDRiIsImZpbGUiOiJhdXRob3JpdGllcy1wYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wYXltZW50c19faGVhZGVyLFxyXG4ucGF5bWVudHNfX2JvZHkge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ucGF5bWVudHNfX2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDIycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRmZTI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 18722:
/*!****************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-registered/authorities-registered.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".j-authorities-table {\n  background: #fff;\n  width: 100%;\n  border-radius: 12px;\n}\n.j-authorities-table tr {\n  border-bottom: 1px solid #e9ebec;\n}\n.j-authorities-table tbody tr:last-child {\n  border-bottom: none;\n}\n.j-authorities-table th {\n  padding: 14px 16px;\n  font-weight: normal;\n}\n.j-authorities-table td {\n  padding: 10px 16px;\n}\n.restriction {\n  background: #f2f2f7;\n  border-radius: 12px;\n  padding: 0 8px;\n  display: inline-block;\n}\n.restriction--danger {\n  background: #ffefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGhvcml0aWVzLXRhYmxlLnNjc3MiLCJhdXRob3JpdGllcy1yZWdpc3RlcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZ0NBQUE7QUNDSjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FBZkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBa0JGO0FBZkE7RUFDRSxtQkFBQTtBQWtCRiIsImZpbGUiOiJhdXRob3JpdGllcy1yZWdpc3RlcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotYXV0aG9yaXRpZXMtdGFibGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWViZWM7XHJcbiAgfVxyXG5cclxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi9hdXRob3JpdGllcy10YWJsZS5zY3NzJztcclxuXHJcbi5yZXN0cmljdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnJlc3RyaWN0aW9uLS1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmVmZWY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 15940:
/*!********************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-unregistered/authorities-unregistered.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".j-authorities-table {\n  background: #fff;\n  width: 100%;\n  border-radius: 12px;\n}\n.j-authorities-table tr {\n  border-bottom: 1px solid #e9ebec;\n}\n.j-authorities-table tbody tr:last-child {\n  border-bottom: none;\n}\n.j-authorities-table th {\n  padding: 14px 16px;\n  font-weight: normal;\n}\n.j-authorities-table td {\n  padding: 10px 16px;\n}\n:host {\n  display: block;\n  margin-top: 2.5rem;\n}\n.j-authorities-table--unregistered tbody {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGhvcml0aWVzLXRhYmxlLnNjc3MiLCJhdXRob3JpdGllcy11bnJlZ2lzdGVyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQ0FBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0FDRko7QUFmQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWtCRjtBQWRFO0VBQ0UsWUFBQTtBQWlCSiIsImZpbGUiOiJhdXRob3JpdGllcy11bnJlZ2lzdGVyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuai1hdXRob3JpdGllcy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWJlYztcclxuICB9XHJcblxyXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL2F1dGhvcml0aWVzLXRhYmxlLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLmotYXV0aG9yaXRpZXMtdGFibGUtLXVucmVnaXN0ZXJlZCB7XHJcbiAgdGJvZHkge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 51426:
/*!********************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-limits/authorities-limits.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".limits__position {\n  margin-bottom: 6px;\n}\n\n.limits__name {\n  line-height: 60px;\n  margin-bottom: 0px;\n}\n\n.limits__header {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml0aWVzLWxpbWl0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImF1dGhvcml0aWVzLWxpbWl0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW1pdHNfX3Bvc2l0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5saW1pdHNfX25hbWUge1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmxpbWl0c19faGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 66244:
/*!****************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-main/authorities-main.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy1tYWluLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 98189:
/*!******************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-order/authorities-order.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy1vcmRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 60733:
/*!**************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-otp/authorities-otp.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".j-authorities-table {\n  background: #fff;\n  width: 100%;\n  border-radius: 12px;\n}\n.j-authorities-table tr {\n  border-bottom: 1px solid #e9ebec;\n}\n.j-authorities-table tbody tr:last-child {\n  border-bottom: none;\n}\n.j-authorities-table th {\n  padding: 14px 16px;\n  font-weight: normal;\n}\n.j-authorities-table td {\n  padding: 10px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGhvcml0aWVzLXRhYmxlLnNjc3MiLCJhdXRob3JpdGllcy1vdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQ0FBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0FDRkoiLCJmaWxlIjoiYXV0aG9yaXRpZXMtb3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotYXV0aG9yaXRpZXMtdGFibGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWViZWM7XHJcbiAgfVxyXG5cclxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIuai1hdXRob3JpdGllcy10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmotYXV0aG9yaXRpZXMtdGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWJlYztcbn1cbi5qLWF1dGhvcml0aWVzLXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmotYXV0aG9yaXRpZXMtdGFibGUgdGgge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uai1hdXRob3JpdGllcy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn0iXX0= */";

/***/ }),

/***/ 37770:
/*!******************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-users/authorities-users.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 45174:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-create-limit-modal/authorities-create-limit-modal.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".authorities-modal__article h5 {\n  line-height: 30px;\n  max-width: 340px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml0aWVzLWNyZWF0ZS1saW1pdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJhdXRob3JpdGllcy1jcmVhdGUtbGltaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yaXRpZXMtbW9kYWxfX2FydGljbGUge1xyXG4gIGg1IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 68408:
/*!************************************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-edit-limit-modal/authorities-edit-limit-modal.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdGllcy1lZGl0LWxpbWl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 36869:
/*!*******************************************************************!*\
  !*** ./src/app/authorities/authorities.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ }),

/***/ 13046:
/*!**************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-nav/authorities-nav.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"f-page-tabs-wrap\">\n  <nav class=\"f-page-tabs\">\n    <a *ngFor=\"let link of links\"\n       routerLinkActive=\"active\"\n       [routerLink]=\"link\">\n      {{ mapTranslate(link) | translate }}\n    </a>\n  </nav>\n</div>";

/***/ }),

/***/ 31607:
/*!**********************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payment/authorities-payment.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"toggle\">\n  <j-toggle [(value)]=\"payment.isEnabled\"\n            (valueChange)=\"onChange($event)\"></j-toggle>\n  <span class=\"toggle__label\">\n    <strong class=\"d-block\">{{ mapPaymentType(payment.type) | translate }}</strong>\n\n    <small *ngIf=\"!payment.limitAmount\"\n           class=\"text-gray\">{{ mapSwitchMessage('NO_LIMITS') | translate }}</small>\n\n    <small *ngIf=\"payment.limitAmount\"\n           class=\"text-gray\">\n      {{ mapSwitchMessage('HAS_LIMIT') | translate: { amount: (payment.limitAmount | money) } }}\n    </small>\n  </span>\n</div>\n\n<ng-container *ngIf=\"!payment.isLimitDisabled\">\n  <div class=\"toggle__button\">\n    <button *ngIf=\"!payment.limitAmount\"\n            class=\"btn btn-link link-blue p-0\"\n            (click)=\"showCreateLimitModal()\"\n            [disabled]=\"!payment.isEnabled\">\n      {{ mapButtonLabel('SET_LIMIT') | translate }}\n    </button>\n\n    <button *ngIf=\"payment.limitAmount\"\n            class=\"btn btn-link p-0\"\n            (click)=\"showEditLimitModal()\"\n            [disabled]=\"!payment.isEnabled\">\n      {{ mapButtonLabel('CHANGE_LIMIT') | translate }}\n    </button>\n  </div>\n</ng-container>\n";

/***/ }),

/***/ 3859:
/*!************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-payments/authorities-payments.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<article class=\"payments__header\">\n  <h6 class=\"mb-1\">{{ mapTranslate('TITLE') | translate }}</h6>\n  <p class=\"mb-0 p3 text-muted\">{{ mapTranslate('DESCRIPTION') | translate }}</p>\n</article>\n\n<div class=\"payments__body\"\n     *ngIf=\"!isLoading\">\n  <div class=\"payments__item\"\n       *ngFor=\"let payment of payments\">\n    <j-authorities-payment [payment]=\"payment\"\n                           [person]=\"person\"></j-authorities-payment>\n  </div>\n</div>\n\n<div class=\"payments__body pt-4 pb-2\"\n     *ngIf=\"isLoading\">\n  <ngx-skeleton-loader [theme]=\"{ height: '80px', 'background-color':'#ECEEF1'}\"\n                       count='8'>\n  </ngx-skeleton-loader>\n</div>";

/***/ }),

/***/ 19630:
/*!****************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-registered/authorities-registered.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<article>\n  <h6 class=\"mb-1\">{{ 'AUTHORITIES.USERS.REGISTERED.TITLE' | translate }}</h6>\n  <p class=\"p3 text-muted\">{{ 'AUTHORITIES.USERS.REGISTERED.DESCRIPTION' | translate }}</p>\n</article>\n\n<table class=\"j-authorities-table\">\n  <thead>\n    <tr>\n      <th class=\"p4 text-muted\"\n          *ngFor=\"let heading of headings\">{{ mapTableHeading(heading) | translate }}</th>\n\n      <ng-container *ngIf=\"isPrimaryAuthority\">\n        <th class=\"p4 text-muted\"\n            *ngFor=\"let heading of primaryHeadings\">{{ mapTableHeading(heading) | translate }}</th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let person of persons\">\n      <td>\n        <div class=\"p2 text-dark\">\n          {{ person.lastname }}\n          {{ person.firstname ? person.firstname[0] + '.' : '' }}\n          {{ person.middlename ? person.middlename[0] + '.' : '' }}\n        </div>\n        <div class=\"p4 text-muted\">\n          {{ person.position }}\n        </div>\n      </td>\n      <td>\n        <div class=\"p4 text-dark\">\n          {{ mapAuthority(person.authority) | translate }}\n        </div>\n      </td>\n      <td>\n        <div class=\"p4 text-dark\">\n          <ng-container *ngIf=\"!person.toDate\">\n            {{ 'SHARED.DATE_FROM' | translate }}\n          </ng-container>\n\n          {{ person.fromDate | date: 'dd MMM yyyy' }}\n\n          <ng-container *ngIf=\"person.toDate\">\n            —\n            <br>\n          </ng-container>\n\n          {{ person.toDate | date: 'dd MMM yyyy' }}\n        </div>\n      </td>\n      <ng-container *ngIf=\"isPrimaryAuthority && !isFeatureDisabled\">\n        <!-- <td>\n          <div *ngIf=\"restrictions.includes(person.id)\"\n               class=\"p4 text-danger restriction restriction--danger\">\n            {{ mapRestrictions('HAS_RESTRICTIONS') | translate }}\n          </div>\n          <div *ngIf=\"!restrictions.includes(person.id)\"\n               class=\"p4 text-dark restriction\">\n            {{ mapRestrictions('NO_RESTRICTIONS') | translate }}\n          </div>\n        </td> -->\n        <td>\n          <span *ngIf=\"currentUserId === person.userId\"\n                class=\"p3 text-disabled\">{{ mapTranslate('LIMITS_LINK') | translate }}</span>\n          <a *ngIf=\"currentUserId !== person.userId\"\n             [routerLink]=\"'/authorities/limits/' + person.id\"\n             class=\"p3 link-blue\">{{ mapTranslate('LIMITS_LINK') | translate }}</a>\n        </td>\n      </ng-container>\n    </tr>\n  </tbody>\n</table>";

/***/ }),

/***/ 25615:
/*!********************************************************************************************************************!*\
  !*** ./src/app/authorities/components/authorities-unregistered/authorities-unregistered.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<article>\n  <h6 class=\"mb-1\">{{ 'AUTHORITIES.USERS.UNREGISTERED.TITLE' | translate }}</h6>\n  <p class=\"p3 text-muted\">{{ 'AUTHORITIES.USERS.UNREGISTERED.DESCRIPTION' | translate }}</p>\n</article>\n\n<table class=\"j-authorities-table j-authorities-table--unregistered\">\n  <thead>\n    <tr>\n      <th class=\"p4 text-muted\"\n          *ngFor=\"let heading of headings\">{{ mapTableHeading(heading) | translate }}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let person of persons\">\n      <td>\n        <div class=\"p2 text-dark\">\n          {{ person.lastname }}\n          {{ person.firstname ? person.firstname[0] + '.' : '' }}\n          {{ person.middlename ? person.middlename[0] + '.' : '' }}\n        </div>\n        <div class=\"p4 text-muted\">\n          {{ person.position }}\n        </div>\n      </td>\n      <td>\n        <div class=\"p4 text-muted\">\n          {{ person.phone ? ( person.phone | mask: '+0 (000) 000 00 00' ) : '—' }} \n        </div>\n      </td>\n      <td>\n        <div class=\"p4 text-muted\">\n          {{ person.iin || '—' }}\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>";

/***/ }),

/***/ 7021:
/*!********************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-limits/authorities-limits.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<f-page closePosition=\"outside\"\n        colsClassList=\"offset-lg-1 col-lg-8\"\n        bodyClassList=\"py-5\"\n        (closed)=\"onClose()\">\n  <f-page-header>\n    <div style=\"position: relative;\"\n         class=\"limits__header\">\n      <ng-container *ngIf=\"person && isReady\">\n        <p class=\"text-muted limits__position\">\n          {{ person.position }}\n          <ng-container *ngIf=\"person.position && person.authority\"> • </ng-container>\n          {{ mapAuthority(person.authority) | translate }}\n        </p>\n        <h1 class=\"limits__name\">\n          {{ person.lastname }}\n          {{ person.firstname ? person.firstname[0] + '.' : '' }}{{ person.middlename ? person.middlename[0] + '.' : ''\n          }}\n        </h1>\n      </ng-container>\n      <ng-container *ngIf=\"!person || !isReady\">\n        <ngx-skeleton-loader\n                             [theme]=\"{ width: '300px', height: '24px', 'margin-bottom':'6px', 'background-color':'#ECEEF1'}\">\n        </ngx-skeleton-loader>\n        <ngx-skeleton-loader [theme]=\"{ height: '48px', 'margin-bottom':'0', 'background-color':'#ECEEF1'}\">\n        </ngx-skeleton-loader>\n      </ng-container>\n    </div>\n  </f-page-header>\n  <f-page-body>\n    <j-authorities-payments *ngIf=\"person && isReady\"\n                            [person]=\"person\"></j-authorities-payments>\n  </f-page-body>\n</f-page>";

/***/ }),

/***/ 67984:
/*!****************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-main/authorities-main.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<f-page closePosition=\"outside\"\n        colsClassList=\"offset-lg-1 col-lg-11 offset-xl-2 col-xl-10\"\n        bodyClassList=\"py-5\"\n        (closed)=\"onClose()\">\n  <f-page-header>\n    <h1 class=\"f-page-title\">{{ 'AUTHORITIES.MAIN.TITLE' | translate }}</h1>\n    <j-authorities-nav></j-authorities-nav>\n  </f-page-header>\n  <f-page-body>\n    <router-outlet></router-outlet>\n  </f-page-body>\n</f-page>";

/***/ }),

/***/ 12506:
/*!******************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-order/authorities-order.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  authorities-order works!\n</p>\n";

/***/ }),

/***/ 3827:
/*!**************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-otp/authorities-otp.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"j-authorities-table\">\n  <thead>\n    <tr>\n      <th class=\"p4 text-muted\"\n          *ngFor=\"let heading of headings\">{{ mapTableHeading(heading) | translate }}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let otpDevice of otpDevices\">\n      <td>\n        <div class=\"p4 text-dark\">\n          {{ otpDevice.serial }}\n        </div>\n      </td>\n      <td>\n        <div class=\"p2 text-dark\">\n          {{ otpDevice.user?.lastname }}\n          {{ otpDevice.user?.firstname ? otpDevice.user?.firstname[0] + '.' : '' }}\n          {{ otpDevice.user?.middlename ? otpDevice.user?.middlename[0] + '.' : '' }}\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>";

/***/ }),

/***/ 1081:
/*!******************************************************************************************************!*\
  !*** ./src/app/authorities/containers/authorities-users/authorities-users.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-authorities-registered *ngIf=\"registered?.length > 0\" [persons]=\"registered\"></j-authorities-registered>\n<j-authorities-unregistered *ngIf=\"unregistered?.length > 0\" [persons]=\"unregistered\"></j-authorities-unregistered>";

/***/ }),

/***/ 76474:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-create-limit-modal/authorities-create-limit-modal.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form class=\"pt-5 pb-4 px-4\"\n      [formGroup]=\"form\">\n  <article class=\"authorities-modal__article\">\n    <h5>\n      {{ title | translate }}\n    </h5>\n    <p class=\"p3 text-muted\">\n      {{ mapTranslate('DESCRIPTION') | translate }}\n    </p>\n  </article>\n\n  <j-amount-input [label]=\"mapTranslate('LABEL')\"\n                  [formControl]=\"form.controls.amount\">\n  </j-amount-input>\n\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"submit\"\n            class=\"btn btn-primary\"\n            [jLoading]=\"isLoading\"\n            [disabled]=\"isLoading || form.invalid\"\n            (click)=\"createLimit()\">\n      {{ mapTranslate('SUBMIT') | translate }}\n    </button>\n  </div>\n</form>";

/***/ }),

/***/ 98591:
/*!************************************************************************************************************************!*\
  !*** ./src/app/authorities/modals/authorities-edit-limit-modal/authorities-edit-limit-modal.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form class=\"pt-5 pb-4 px-4\"\n      [formGroup]=\"form\">\n  <article class=\"authorities-modal__article\">\n    <h5>\n      {{ title | translate }}\n    </h5>\n    <p class=\"p3 text-muted\">\n      {{ mapTranslate('DESCRIPTION') | translate }}\n    </p>\n  </article>\n\n  <j-amount-input [label]=\"mapTranslate('LABEL')\"\n                  [formControl]=\"form.controls.amount\">\n  </j-amount-input>\n\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\"\n            class=\"btn btn-outline-primary\"\n            [jLoading]=\"isLoading\"\n            [disabled]=\"isLoading\"\n            (click)=\"deleteLimit()\">\n      {{ mapTranslate('RESET') | translate }}\n    </button>\n    <button type=\"submit\"\n            class=\"ml-3 btn btn-primary\"\n            [jLoading]=\"isLoading\"\n            [disabled]=\"isLoading || form.invalid\"\n            (click)=\"updateLimit()\">\n      {{ mapTranslate('SUBMIT') | translate }}\n    </button>\n  </div>\n</form>";

/***/ })

}]);
//# sourceMappingURL=src_app_authorities_authorities_module_ts.js.map