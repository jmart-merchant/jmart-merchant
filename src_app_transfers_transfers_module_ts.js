"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_transfers_transfers_module_ts"],{

/***/ 49653:
/*!*******************************************************************!*\
  !*** ./src/app/payments/services/can-deactivate-payment.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanDeactivatePaymentGuard": () => (/* binding */ CanDeactivatePaymentGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _payments_components_payment_guard_modal_payment_guard_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @payments/components/payment-guard-modal/payment-guard-modal.component */ 57553);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/auth.service */ 50384);






let CanDeactivatePaymentGuard = class CanDeactivatePaymentGuard {
    constructor(modal, auth, router) {
        this.modal = modal;
        this.auth = auth;
        this.router = router;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        var _a;
        // check page reloading after draft creation. payment id to url, but no notification
        const { extras } = this.router.getCurrentNavigation();
        if ((_a = extras === null || extras === void 0 ? void 0 : extras.state) === null || _a === void 0 ? void 0 : _a.silent) {
            return Promise.resolve(true);
        }
        if (component && component.formDirective && this.auth.isAuthenticated) {
            const { formDirective, form } = component;
            if ((!formDirective.submitted && form.dirty) ||
                (formDirective.submitted && form.dirty)) {
                return this.modal.open(_payments_components_payment_guard_modal_payment_guard_modal_component__WEBPACK_IMPORTED_MODULE_0__.PaymentGuardModalComponent, {
                    backdropClass: 'backdrop_light',
                    windowClass: 'modal_light modal_max-height',
                    centered: true,
                }).result;
            }
        }
        return Promise.resolve(true);
    }
};
CanDeactivatePaymentGuard.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CanDeactivatePaymentGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], CanDeactivatePaymentGuard);



/***/ }),

/***/ 78602:
/*!*************************************************!*\
  !*** ./src/app/payments/services/form-model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7500:
/*!********************************************!*\
  !*** ./src/app/payments/services/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanDeactivatePaymentGuard": () => (/* reexport safe */ _can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivatePaymentGuard),
/* harmony export */   "COUNTRY": () => (/* reexport safe */ _currency_payment_service__WEBPACK_IMPORTED_MODULE_1__.COUNTRY),
/* harmony export */   "CurrencyPaymentService": () => (/* reexport safe */ _currency_payment_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyPaymentService),
/* harmony export */   "PaymentApiService": () => (/* reexport safe */ _payment_api_service__WEBPACK_IMPORTED_MODULE_3__.PaymentApiService),
/* harmony export */   "PaymentTypeSwitchGuard": () => (/* reexport safe */ _payment_type_switch_guard__WEBPACK_IMPORTED_MODULE_4__.PaymentTypeSwitchGuard),
/* harmony export */   "PaymentsFormFactoryService": () => (/* reexport safe */ _payments_form_factory_service__WEBPACK_IMPORTED_MODULE_5__.PaymentsFormFactoryService),
/* harmony export */   "PaymentsPipelineService": () => (/* reexport safe */ _payments_pipeline_service__WEBPACK_IMPORTED_MODULE_6__.PaymentsPipelineService),
/* harmony export */   "MessageType": () => (/* reexport safe */ _payments_service__WEBPACK_IMPORTED_MODULE_7__.MessageType),
/* harmony export */   "PaymentRootTitle": () => (/* reexport safe */ _payments_service__WEBPACK_IMPORTED_MODULE_7__.PaymentRootTitle),
/* harmony export */   "PaymentsService": () => (/* reexport safe */ _payments_service__WEBPACK_IMPORTED_MODULE_7__.PaymentsService),
/* harmony export */   "messages": () => (/* reexport safe */ _payments_service__WEBPACK_IMPORTED_MODULE_7__.messages)
/* harmony export */ });
/* harmony import */ var _can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can-deactivate-payment.guard */ 49653);
/* harmony import */ var _currency_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-payment.service */ 54557);
/* harmony import */ var _form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-model */ 78602);
/* harmony import */ var _payment_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-api.service */ 74967);
/* harmony import */ var _payment_type_switch_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-type-switch.guard */ 54702);
/* harmony import */ var _payments_form_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-form-factory.service */ 39996);
/* harmony import */ var _payments_pipeline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments-pipeline.service */ 91024);
/* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments.service */ 28706);










/***/ }),

/***/ 54702:
/*!****************************************************************!*\
  !*** ./src/app/payments/services/payment-type-switch.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypeSwitchGuard": () => (/* binding */ PaymentTypeSwitchGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payment_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-api.service */ 74967);
/* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.service */ 28706);
/* harmony import */ var _payments_payments_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/payments-routes */ 38114);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ 50449);







let PaymentTypeSwitchGuard = class PaymentTypeSwitchGuard {
    constructor(router, route, api, payments, notification) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.payments = payments;
        this.notification = notification;
    }
    canActivate(next, state) {
        var _a, _b, _c;
        const repeatPayment = (_b = (_a = this.router.getCurrentNavigation().extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.repeatPayment;
        const paymentId = ((_c = next.params) === null || _c === void 0 ? void 0 : _c.paymentId) || (repeatPayment === null || repeatPayment === void 0 ? void 0 : repeatPayment.id);
        let route = _payments_payments_routes__WEBPACK_IMPORTED_MODULE_2__.paymentsRoutes.tenge.order;
        if (repeatPayment) {
            route = this.payments.getPaymentRouteByType(repeatPayment.type);
        }
        if (paymentId) {
            this.api
                .getPaymentById(paymentId)
                .then((response) => {
                const commands = [this.payments.getPaymentRouteByType(response.type)];
                if (!repeatPayment) {
                    commands.push(paymentId);
                }
                this.router.navigate(commands, {
                    state: {
                        resolvedPayment: response,
                    },
                });
            })
                .catch((e) => {
                this.router.navigate([_payments_payments_routes__WEBPACK_IMPORTED_MODULE_2__.paymentsRoutes.tenge.order]);
                this.notification.show({
                    type: 'error',
                    message: e,
                });
            });
        }
        else {
            this.router.navigate([route]);
        }
        return false;
    }
};
PaymentTypeSwitchGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _payment_api_service__WEBPACK_IMPORTED_MODULE_0__.PaymentApiService },
    { type: _payments_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierService }
];
PaymentTypeSwitchGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], PaymentTypeSwitchGuard);



/***/ }),

/***/ 24959:
/*!*******************************************!*\
  !*** ./src/app/transfers/modals/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRANSFERS_MODALS": () => (/* binding */ TRANSFERS_MODALS),
/* harmony export */   "TransferErrorComponent": () => (/* reexport safe */ _transfer_error_transfer_error_component__WEBPACK_IMPORTED_MODULE_0__.TransferErrorComponent),
/* harmony export */   "TransferSuccessComponent": () => (/* reexport safe */ _transfer_success_transfer_success_component__WEBPACK_IMPORTED_MODULE_1__.TransferSuccessComponent)
/* harmony export */ });
/* harmony import */ var _transfer_error_transfer_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-error/transfer-error.component */ 55577);
/* harmony import */ var _transfer_success_transfer_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-success/transfer-success.component */ 18097);


const TRANSFERS_MODALS = [
    _transfer_error_transfer_error_component__WEBPACK_IMPORTED_MODULE_0__.TransferErrorComponent,
    _transfer_success_transfer_success_component__WEBPACK_IMPORTED_MODULE_1__.TransferSuccessComponent,
];




/***/ }),

/***/ 55577:
/*!*****************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-error/transfer-error.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferErrorComponent": () => (/* binding */ TransferErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfer_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-error.component.html?ngResource */ 75833);
/* harmony import */ var _transfer_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-error.component.scss?ngResource */ 1368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);






let TransferErrorComponent = class TransferErrorComponent {
    constructor(modal, router) {
        this.modal = modal;
        this.router = router;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.router.navigate(['/transfers']);
        this.modal.close();
    }
};
TransferErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TransferErrorComponent.propDecorators = {
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    errorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
TransferErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-transfer-error',
        template: _transfer_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfer_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferErrorComponent);



/***/ }),

/***/ 18097:
/*!*********************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-success/transfer-success.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferSuccessComponent": () => (/* binding */ TransferSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfer_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-success.component.html?ngResource */ 44951);
/* harmony import */ var _transfer_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-success.component.scss?ngResource */ 13231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let TransferSuccessComponent = class TransferSuccessComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
};
TransferSuccessComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
TransferSuccessComponent.propDecorators = {
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    totalBalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TransferSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-transfer-success',
        template: _transfer_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfer_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferSuccessComponent);



/***/ }),

/***/ 3720:
/*!********************************************************************!*\
  !*** ./src/app/transfers/transfers-own/transfers-own.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersOwnComponent": () => (/* binding */ TransfersOwnComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfers_own_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers-own.component.html?ngResource */ 41510);
/* harmony import */ var _transfers_own_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfers-own.component.scss?ngResource */ 57906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes */ 39843);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _cards_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cards/models */ 12188);
/* harmony import */ var _cards_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cards/services */ 76684);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/services */ 7500);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals */ 24959);
/* harmony import */ var _transfers_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../transfers.service */ 50024);
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @filter/filter.model */ 41359);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @authorities/services */ 30285);


























const SAME_IBANS_NOTIFICATION = 'TRANSFERS.SAME_IBANS_NOTIFICATION';
const CANT_BE_ZERO = (control) => {
    if ((control === null || control === void 0 ? void 0 : control.value) == 0) {
        return { cantBeZero: true };
    }
    return null;
};
let TransfersOwnComponent = class TransfersOwnComponent {
    constructor(route, transfersService, companyService, paymentsService, accountsService, amountFormatPipe, modalService, router, maskedService, paymentsApiService, cardsService, featureFlagsService, notifierService, translateService, moneyPipe, navService, authorityPermissionsService) {
        this.route = route;
        this.transfersService = transfersService;
        this.companyService = companyService;
        this.paymentsService = paymentsService;
        this.accountsService = accountsService;
        this.amountFormatPipe = amountFormatPipe;
        this.modalService = modalService;
        this.router = router;
        this.maskedService = maskedService;
        this.paymentsApiService = paymentsApiService;
        this.cardsService = cardsService;
        this.featureFlagsService = featureFlagsService;
        this.notifierService = notifierService;
        this.translateService = translateService;
        this.moneyPipe = moneyPipe;
        this.navService = navService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.isRestricted = false;
        this.isSubmitted = false;
        this.isLoading = true;
        this.repeatPayment = null;
        this.defaultCurrency = _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT;
        this.maxSumParams = null;
        this.irreducibleBalanceParams = null;
        this.unsufficientFundsParams = null;
        this.hasUnsufficientFunds = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
        this.isAccountsLoading = true;
        this.transferForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(''),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
            fromAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
            toAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
            documentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, CANT_BE_ZERO]),
        });
    }
    ngOnInit() {
        const routeParamsSubscription = this.route.params.subscribe((params) => {
            if (params.id) {
                this.f.id.setValue(params.id);
                this.isEditing = true;
            }
        });
        this.subscription.add(routeParamsSubscription);
    }
    ngAfterViewInit() {
        this.getPermission()
            .then(() => {
            if (this.isRestricted) {
                this.isLoading = false;
            }
            else {
                this.initPage();
            }
        })
            .catch((error) => {
            this.isLoading = false;
            this.initPage();
        });
    }
    initPage() {
        const routeStateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([
            this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(() => window.history.state)),
            this.route.queryParams,
            this.featureFlagsService.featureFlags$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)((flags) => (flags === null || flags === void 0 ? void 0 : flags.length) > 0)),
        ]).subscribe((values) => {
            const [state, params] = values;
            if (this.isEditing) {
                this.loadEditTransfer(this.f.id.value);
            }
            else if (state.repeatPaymentId) {
                this.loadRepeatTransfer(state.repeatPaymentId);
            }
            else {
                this.loadNewTransfer(params);
            }
        });
        const formSubscription = this.transferForm.valueChanges.subscribe((value) => {
            this.isSubmitted = false;
        });
        this.subscription.add(routeStateSubscription);
        this.subscription.add(formSubscription);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get fromAccounts() {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.filter((account) => {
            var _a;
            switch (account.accountType) {
                case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.ACCOUNT:
                    return (account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT ||
                        (((_a = this.to) === null || _a === void 0 ? void 0 : _a.accountType) === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT &&
                            this.to.balance.currency === account.balance.currency));
                case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.CARD:
                    return account.category !== _cards_models__WEBPACK_IMPORTED_MODULE_7__.CARD_CATEGORY.PRIVATE;
                case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT:
                    return (account.depositType &&
                        account.additionalDetails.payOut);
                default:
                    return true;
            }
        });
    }
    get commissionParams() {
        var _a, _b;
        return {
            amount: this.moneyPipe.transform({
                amount: 0,
                currency: ((_a = this.from) === null || _a === void 0 ? void 0 : _a.balance.currency) || ((_b = this.to) === null || _b === void 0 ? void 0 : _b.balance.currency) || this.defaultCurrency,
            }),
        };
    }
    get toAccounts() {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.filter((account) => {
            var _a;
            switch (account.accountType) {
                case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.ACCOUNT:
                    return (account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT ||
                        (((_a = this.from) === null || _a === void 0 ? void 0 : _a.accountType) === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT &&
                            this.from.additionalDetails.clientAccount ===
                                account.iban));
                case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT:
                    return (account.depositType &&
                        account.additionalDetails.addPay);
                default:
                    return true;
            }
        });
    }
    get canSendAndSign() {
        return (this.companyService.isSecondaryAuthority() ||
            (this.companyService.isPrimaryAuthority() &&
                this.companyService.isSingleSignScheme()));
    }
    get canSendOnly() {
        return (this.companyService.isNoSignAuthority() ||
            (this.companyService.isPrimaryAuthority() &&
                this.companyService.isMultipleSignScheme()));
    }
    get f() {
        return this.transferForm.controls;
    }
    mapIrreducibleBalanceParams() {
        var _a, _b;
        if (!this.from || !((_a = this.from) === null || _a === void 0 ? void 0 : _a.irreducibleBalance)) {
            this.irreducibleBalanceParams = null;
            return null;
        }
        this.irreducibleBalanceParams = {
            amount: this.moneyPipe.transform({
                amount: (_b = this.from) === null || _b === void 0 ? void 0 : _b.irreducibleBalance,
                currency: this.from.balance.currency,
            }),
        };
    }
    mapMaxSumParams() {
        var _a, _b, _c, _d;
        if (!this.to || !((_b = (_a = this.to) === null || _a === void 0 ? void 0 : _a.additionalDetails) === null || _b === void 0 ? void 0 : _b.maxSum)) {
            this.maxSumParams = null;
            return;
        }
        this.maxSumParams = {
            amount: this.moneyPipe.transform({
                amount: (_d = (_c = this.to) === null || _c === void 0 ? void 0 : _c.additionalDetails) === null || _d === void 0 ? void 0 : _d.maxSum,
                currency: this.to.balance.currency,
            }),
        };
    }
    mapUnsufficientFundsParams() {
        this.unsufficientFundsParams = {
            amount: this.moneyPipe.transform({
                amount: this.amountDelta,
                currency: this.from.balance.currency,
            }),
        };
    }
    mapHasUnsufficientFunds() {
        this.hasUnsufficientFunds = this.amountDelta > 0;
    }
    onFromSelect(selectedAccount) {
        if (!selectedAccount) {
            return;
        }
        this.selectFromAccount(selectedAccount);
        this.applyClearOnFromSelectedRule(selectedAccount);
        this.applySelectFromCompanionRule(selectedAccount);
        this.applyDepositAmountValidation();
        this.applyDepositWithdrawalRule(selectedAccount);
        this.applyFromCurrencyRule(selectedAccount);
    }
    onToSelect(selectedAccount) {
        if (!selectedAccount) {
            return;
        }
        this.selectToAccount(selectedAccount);
        this.applyClearOnToSelectedRule(selectedAccount);
        this.applySelectToCompanionRule(selectedAccount);
        this.applyDepositAmountValidation();
        this.applyDepositReplenishmentRule(selectedAccount);
        this.applyToCurrencyRule(selectedAccount);
    }
    loadRepeatTransfer(repeatTransferId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const values = yield Promise.all([
                this.transfersService.getTransferById(repeatTransferId),
                this.retrieveAccounts(),
            ]);
            this.applyOnlyAccountRule();
            const [originalPayment] = values;
            const repeatTransfer = yield this.mapRepeatTransferFromPayment(originalPayment);
            this.initRepeatTransfer(repeatTransfer);
            this.setAutoNumeration();
            this.isLoading = false;
        });
    }
    loadEditTransfer(transferId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.originalPayment = yield this.transfersService.getTransferById(transferId);
            const repeatTransfer = yield this.mapRepeatTransferFromPayment(this.originalPayment);
            yield this.retrieveAccounts();
            this.applyOnlyAccountRule();
            this.initRepeatTransfer(repeatTransfer);
            this.isLoading = false;
        });
    }
    loadNewTransfer(params = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.retrieveAccounts();
            this.setAutoNumeration();
            this.setInitialParams(params);
            this.isLoading = false;
        });
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.transferForm.invalid) {
                return;
            }
            try {
                yield this.transfersService.saveEditedTransfer(this.transferForm.value, this.originalPayment);
                this.showEditSuccess();
            }
            catch (error) {
                this.showEditError(error);
            }
        });
    }
    createOnly() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.transferForm.invalid) {
                return;
            }
            this.isLoading = true;
            const formValue = this.transferForm.getRawValue();
            const isAllowed = yield this.checkIfAllowedToCreate(formValue.amount);
            if (!isAllowed) {
                this.isLoading = false;
                return;
            }
            const paymentNumberStore = this.paymentsService.paymentNumber;
            try {
                yield this.transfersService.createOwnTransfer(formValue);
                this.showCreateSuccess();
                paymentNumberStore.entity = null;
            }
            catch (error) {
                paymentNumberStore.entity = this.f.documentNumber.value;
                this.showCreateError(error);
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    createAndSign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.transferForm.invalid) {
                return;
            }
            this.isLoading = true;
            const formValue = this.transferForm.getRawValue();
            const isAllowed = yield this.checkIfAllowedToCreate(formValue.amount);
            if (!isAllowed) {
                this.isLoading = false;
                return;
            }
            const paymentNumberStore = this.paymentsService.paymentNumber;
            try {
                yield this.transfersService.createAndSignOwnTransfer(formValue);
                this.showCreateAndSignSuccess();
                paymentNumberStore.entity = null;
            }
            catch (error) {
                paymentNumberStore.entity = this.f.documentNumber.value;
                this.showCreateAndSignError(error);
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    getPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.isRestricted = yield this.authorityPermissionsService.isRestricted(_shared_models__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_TYPE.IN_BETWEEN);
            }
            catch (error) {
                this.isRestricted = false;
            }
        });
    }
    checkIfAllowedToCreate(amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const isWorkingTimeCheckPassed = yield this.paymentsApiService.checkWorkingTime();
            const isAmountCheckPassed = yield this.paymentsApiService.checkAmountLimit(amount, _shared_models__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_TYPE.IN_BETWEEN);
            return isWorkingTimeCheckPassed && isAmountCheckPassed;
        });
    }
    mapRepeatTransferFromPayment(payment) {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            yield this.retrieveAccounts();
            let fromIban = (_a = payment.details) === null || _a === void 0 ? void 0 : _a.payerIban;
            if (payment.type === _shared_models__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_TYPE.CARD_TO_CARD ||
                payment.type === _shared_models__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_TYPE.CARD_TO_ACCOUNT) {
                fromIban = this.fromAccounts.find((card) => {
                    var _a;
                    return card.accountType === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.CARD &&
                        card.accountId === ((_a = payment.details) === null || _a === void 0 ? void 0 : _a.payerAccountId);
                }).iban;
            }
            return {
                to: (_c = (_b = payment.paymentRecipient) === null || _b === void 0 ? void 0 : _b.recipientAccount) === null || _c === void 0 ? void 0 : _c.iban,
                toAccount: this.toAccounts.find((account) => { var _a, _b; return account.iban === ((_b = (_a = payment.paymentRecipient) === null || _a === void 0 ? void 0 : _a.recipientAccount) === null || _b === void 0 ? void 0 : _b.iban); }),
                from: fromIban,
                fromAccount: this.fromAccounts.find((account) => account.iban === fromIban),
                documentNumber: (_d = payment.details) === null || _d === void 0 ? void 0 : _d.documentId,
                amount: (_e = payment.details) === null || _e === void 0 ? void 0 : _e.paymentAmount.amount,
            };
        });
    }
    setInitialParams(params) {
        if (!params) {
            return;
        }
        if (params.from) {
            this.fromDropdown.selectByIban(params.from);
        }
        if (params.to) {
            this.toDropdown.selectByIban(params.to);
        }
    }
    initRepeatTransfer(repeatTransfer) {
        if (!repeatTransfer) {
            return;
        }
        this.selectToAccountByIban(repeatTransfer.to);
        this.selectFromAccountByIban(repeatTransfer.from);
        this.f.documentNumber.setValue(repeatTransfer.documentNumber);
        this.f.amount.setValue(this.maskedService.getMaskedAmount(repeatTransfer.amount));
    }
    get amountDelta() {
        var _a, _b;
        const { amount } = this.transferForm.getRawValue();
        return (this.maskedService.getNumberedAmount(amount) - ((_b = (_a = this.from) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.amount));
    }
    applyDepositAmountValidation() {
        var _a, _b;
        const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, CANT_BE_ZERO];
        if (((_a = this.from) === null || _a === void 0 ? void 0 : _a.accountType) === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT) {
            validators.push(this.generateIrreducibleValidator);
        }
        if (((_b = this.to) === null || _b === void 0 ? void 0 : _b.accountType) === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT) {
            validators.push(this.generateMaxSumValidator);
        }
        this.transferForm.controls.amount.setValidators(validators);
    }
    generateIrreducibleValidator() {
        const validator = (control) => {
            if (this.from.balance.amount -
                this.maskedService.getNumberedAmount(control.value) <=
                this.from.irreducibleBalance) {
                return {
                    irreducible: true,
                };
            }
            return null;
        };
        return validator;
    }
    generateMaxSumValidator() {
        const validator = (control) => {
            var _a, _b;
            if (this.to.balance.amount +
                this.maskedService.getNumberedAmount(control.value) >
                ((_b = (_a = this.to) === null || _a === void 0 ? void 0 : _a.additionalDetails) === null || _b === void 0 ? void 0 : _b.maxSum)) {
                return {
                    maxSum: true,
                };
            }
            return null;
        };
        return validator;
    }
    applySelectToCompanionRule(selectedAccount) {
        var _a, _b;
        if (((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) == 2) {
            const unselected = this.findUnselectedAccount(selectedAccount);
            this.selectFromAccount(unselected);
            (_b = this.fromDropdown) === null || _b === void 0 ? void 0 : _b.selectAccount(unselected);
        }
    }
    applyDepositReplenishmentRule(selectedAccount) {
        var _a, _b, _c;
        if (selectedAccount.accountType === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT) {
            this.selectFromAccountByIban(selectedAccount.additionalDetails.clientAccount);
        }
        else if (((_a = this.from) === null || _a === void 0 ? void 0 : _a.accountType) === _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT &&
            selectedAccount.iban !==
                ((_c = (_b = this.from) === null || _b === void 0 ? void 0 : _b.additionalDetails) === null || _c === void 0 ? void 0 : _c.clientAccount)) {
            this.clearFromAccount();
        }
    }
    applyFromCurrencyRule(selectedAccount) {
        var _a, _b;
        if (
        // (selectedAccount.accountType === ACCOUNT_TYPE.DEPOSIT ||
        // this.to.accountType === ACCOUNT_TYPE.DEPOSIT) &&
        selectedAccount.balance.currency !== ((_b = (_a = this.to) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency)) {
            this.clearToAccount();
        }
    }
    applyToCurrencyRule(selectedAccount) {
        var _a, _b;
        if (
        // (selectedAccount.accountType === ACCOUNT_TYPE.DEPOSIT ||
        // this.from.accountType === ACCOUNT_TYPE.DEPOSIT) &&
        selectedAccount.balance.currency !== ((_b = (_a = this.from) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency)) {
            this.clearFromAccount();
        }
    }
    applyDepositWithdrawalRule(selectedAccount) {
        var _a, _b;
        if (selectedAccount.accountType !== _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT ||
            !((_b = (_a = selectedAccount) === null || _a === void 0 ? void 0 : _a.additionalDetails) === null || _b === void 0 ? void 0 : _b.clientAccount)) {
            return;
        }
        this.selectToAccountByIban(selectedAccount.additionalDetails.clientAccount);
    }
    applySelectFromCompanionRule(selectedAccount) {
        var _a, _b;
        if (((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) == 2) {
            const unselected = this.findUnselectedAccount(selectedAccount);
            this.selectToAccount(unselected);
            (_b = this.toDropdown) === null || _b === void 0 ? void 0 : _b.selectAccount(unselected);
        }
    }
    findUnselectedAccount(selectedAccount) {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.find((account) => {
            return account != selectedAccount;
        });
    }
    findAccountByIban(iban) {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.find((account) => {
            return account.iban == iban;
        });
    }
    applyClearOnFromSelectedRule(selectedAccount) {
        var _a;
        const isSameAccounts = selectedAccount == this.to;
        const haveSameIbans = selectedAccount.iban == ((_a = this.to) === null || _a === void 0 ? void 0 : _a.iban) && !isSameAccounts;
        if (isSameAccounts || haveSameIbans) {
            this.clearToAccount();
        }
        if (haveSameIbans) {
            this.notifierService.notify('default', this.translateService.instant(SAME_IBANS_NOTIFICATION));
        }
    }
    applyClearOnToSelectedRule(selectedAccount) {
        var _a;
        const isSameAccounts = selectedAccount == this.from;
        const haveSameIbans = selectedAccount.iban == ((_a = this.from) === null || _a === void 0 ? void 0 : _a.iban) && !isSameAccounts;
        if (isSameAccounts || haveSameIbans) {
            this.clearFromAccount();
        }
        if (haveSameIbans) {
            this.notifierService.notify('default', this.translateService.instant(SAME_IBANS_NOTIFICATION));
        }
    }
    applyOnlyAccountRule() {
        var _a;
        if (((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) == 1) {
            const onlyAccount = this.accounts[0];
            if (!(onlyAccount.isLocked ||
                onlyAccount.hasLockedState)) {
                this.selectFromAccount(onlyAccount);
                this.fromDropdown.selectAccount(onlyAccount);
            }
            else {
                this.selectToAccount(onlyAccount);
                this.toDropdown.selectAccount(onlyAccount);
            }
        }
    }
    selectToAccount(selectedAccount) {
        var _a;
        this.to = selectedAccount;
        this.f.to.setValue((_a = this.to) === null || _a === void 0 ? void 0 : _a.iban);
        this.f.toAccount.setValue(this.to);
    }
    selectFromAccount(selectedAccount) {
        var _a;
        this.from = selectedAccount;
        this.f.from.setValue((_a = this.from) === null || _a === void 0 ? void 0 : _a.iban);
        this.f.fromAccount.setValue(this.from);
    }
    selectToAccountByIban(iban) {
        const foundAccount = this.findAccountByIban(iban);
        this.selectToAccount(foundAccount);
        this.toDropdown.selectAccount(foundAccount);
    }
    selectFromAccountByIban(iban) {
        const foundAccount = this.findAccountByIban(iban);
        this.selectFromAccount(foundAccount);
        this.fromDropdown.selectAccount(foundAccount);
    }
    clearToAccount() {
        var _a;
        this.to = null;
        this.f.to.setValue(null);
        (_a = this.toDropdown) === null || _a === void 0 ? void 0 : _a.clearSelected();
    }
    clearFromAccount() {
        var _a;
        this.from = null;
        this.f.from.setValue(null);
        (_a = this.fromDropdown) === null || _a === void 0 ? void 0 : _a.clearSelected();
    }
    isAccountAllowed(account) {
        const isDepositsOperationsDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_10__.FEATURE_FLAG.DEPOSIT_OPERATIONS);
        switch (account.accountType) {
            case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.ACCOUNT:
                return true; // account.balance.currency === CURRENCY.KZT;
            case _accounts_index__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_TYPE.DEPOSIT:
                if (isDepositsOperationsDisabled) {
                    return false;
                }
                return (account.additionalDetails.addPay ||
                    account.additionalDetails.payOut);
        }
    }
    // TODO: Переписать на использование AccountsStore
    retrieveAccounts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isAccountsLoading = true;
            try {
                yield this.accountsService
                    .retrieveAccounts()
                    .then((result) => {
                    const filteredAccounts = result.filter((account) => this.isAccountAllowed(account));
                    this.accounts = this.accounts
                        ? [...this.accounts, ...filteredAccounts]
                        : [...filteredAccounts];
                })
                    .catch((e) => {
                    this.accounts = this.accounts || [];
                    console.log(e);
                });
                if (!this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_10__.FEATURE_FLAG.CARD_TRANSFERS)) {
                    yield this.cardsService
                        .getCorporateCards()
                        .then((result) => {
                        const filteredCards = result.filter((card) => {
                            return card.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT;
                        });
                        this.accounts = this.accounts
                            ? [...this.accounts, ...filteredCards]
                            : [...filteredCards];
                    })
                        .catch((e) => {
                        this.accounts = this.accounts || [];
                        console.log(e);
                    });
                }
            }
            catch (error) {
            }
            finally {
                this.isAccountsLoading = false;
            }
        });
    }
    showEditSuccess() {
        const amount = parseFloat(this.maskedService.getUnmaskedAmount(this.f.amount.value));
        this.showSuccessModal('TRANSFERS.EDIT.SUCCESS', amount);
    }
    showEditError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.EDIT.ERROR', error);
                this.edit();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showCreateSuccess() {
        const amount = this.maskedService.getNumberedAmount(this.f.amount.value);
        this.showSuccessModal('TRANSFERS.CREATE.SUCCESS', amount);
    }
    showCreateError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.CREATE.ERROR', error);
                this.createOnly();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showCreateAndSignSuccess() {
        const amount = this.maskedService.getNumberedAmount(this.f.amount.value);
        this.showSuccessModal('TRANSFERS.CREATE_AND_SIGN.SUCCESS', amount, true);
    }
    showCreateAndSignError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.CREATE_AND_SIGN.ERROR', error);
                this.createAndSign();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showSuccessModal(description, amount, hasSigned = false) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.TransferSuccessComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_sm',
                backdrop: 'static',
                centered: true,
            });
            modal.componentInstance.description = description;
            modal.componentInstance.totalBalance = {
                amount: amount,
                currency: ((_a = this.from) === null || _a === void 0 ? void 0 : _a.balance.currency) || ((_b = this.to) === null || _b === void 0 ? void 0 : _b.balance.currency) || this.defaultCurrency,
            };
            try {
                yield modal.result;
                this.navigateToHistory(hasSigned);
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showErrorModal(description, error) {
        const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.TransferErrorComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_sm',
            backdrop: 'static',
            centered: true,
        });
        modal.componentInstance.description = description;
        modal.componentInstance.errorText = this.mapErrors(error === null || error === void 0 ? void 0 : error.data) || error;
        return modal.result;
    }
    mapErrors(data) {
        let errorsMarkup = '';
        for (const [key, value] of Object.entries(data)) {
            errorsMarkup += value + '<br>';
        }
        return errorsMarkup || null;
    }
    setAutoNumeration() {
        this.subscription.add(this.paymentsService.paymentNumber$.subscribe((numberFromStore) => {
            this.f.documentNumber.setValue(numberFromStore);
        }));
    }
    navigateToHome() {
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        this.router.navigate(['/']);
    }
    navigateToHistory(hasSigned = false) {
        let paymentStatus = _filter_filter_model__WEBPACK_IMPORTED_MODULE_14__.FILTER_PAYMENT_STATUS.FOR_SIGN;
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        if (hasSigned &&
            this.companyService.isPrimaryAuthority() &&
            this.companyService.isSingleSignScheme()) {
            paymentStatus = _filter_filter_model__WEBPACK_IMPORTED_MODULE_14__.FILTER_PAYMENT_STATUS.IN_PROGRESS;
        }
        this.router.navigate([`/history/tenge`], {
            queryParams: { paymentStatus },
        });
    }
};
TransfersOwnComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute },
    { type: _transfers_service__WEBPACK_IMPORTED_MODULE_13__.TransfersService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_9__.CompanyService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_11__.PaymentsService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_6__.AccountsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_2__.AmountFormatPipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_5__.MaskedService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_11__.PaymentApiService },
    { type: _cards_services__WEBPACK_IMPORTED_MODULE_8__.CardsService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_10__.FeatureFlagsService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_25__.NotifierService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_2__.MoneyPipe },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_15__.NavService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_16__.AuthorityPermissionsService }
];
TransfersOwnComponent.propDecorators = {
    fromDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['fromDropdown',] }],
    toDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['toDropdown',] }]
};
TransfersOwnComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'j-transfers-own',
        template: _transfers_own_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfers_own_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransfersOwnComponent);



/***/ }),

/***/ 92826:
/*!*******************************************************!*\
  !*** ./src/app/transfers/transfers-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersRoutingModule": () => (/* binding */ TransfersRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transfers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers.component */ 15516);




const routes = [
    {
        path: '',
        component: _transfers_component__WEBPACK_IMPORTED_MODULE_0__.TransfersComponent,
        data: {
            title: 'TRANSFERS.TITLE',
        },
    },
    {
        path: ':id',
        component: _transfers_component__WEBPACK_IMPORTED_MODULE_0__.TransfersComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let TransfersRoutingModule = class TransfersRoutingModule {
};
TransfersRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransfersRoutingModule);



/***/ }),

/***/ 15516:
/*!**************************************************!*\
  !*** ./src/app/transfers/transfers.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersComponent": () => (/* binding */ TransfersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers.component.html?ngResource */ 89958);
/* harmony import */ var _transfers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfers.component.scss?ngResource */ 24939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);






let TransfersComponent = class TransfersComponent {
    constructor(location, navService) {
        this.location = location;
        this.navService = navService;
    }
    ngOnInit() { }
    onClose() {
        this.navService.retrieveLetterBadges();
        this.navService.retrieveContractBadges();
        this.location.back();
    }
};
TransfersComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
TransfersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-transfers',
        template: _transfers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfers_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransfersComponent);



/***/ }),

/***/ 62088:
/*!***********************************************!*\
  !*** ./src/app/transfers/transfers.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersModule": () => (/* binding */ TransfersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfers-routing.module */ 92826);
/* harmony import */ var _transfers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfers.component */ 15516);
/* harmony import */ var _transfers_own_transfers_own_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transfers-own/transfers-own.component */ 3720);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals */ 24959);













let TransfersModule = class TransfersModule {
};
TransfersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_transfers_component__WEBPACK_IMPORTED_MODULE_3__.TransfersComponent, _transfers_own_transfers_own_component__WEBPACK_IMPORTED_MODULE_4__.TransfersOwnComponent, _modals__WEBPACK_IMPORTED_MODULE_5__.TRANSFERS_MODALS],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule,
            _transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__.TransfersRoutingModule,
            _accounts_index__WEBPACK_IMPORTED_MODULE_0__.AccountsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        ],
    })
], TransfersModule);



/***/ }),

/***/ 50024:
/*!************************************************!*\
  !*** ./src/app/transfers/transfers.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersService": () => (/* binding */ TransfersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @accounts/account.model */ 5157);
/* harmony import */ var _accounts_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @accounts/services */ 53145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/models */ 63157);









let TransfersService = class TransfersService {
    constructor(accountsService, paymentsPipelineService, paymentsApiService, maskedService) {
        this.accountsService = accountsService;
        this.paymentsPipelineService = paymentsPipelineService;
        this.paymentsApiService = paymentsApiService;
        this.maskedService = maskedService;
    }
    getTransferById(transferId) {
        return this.paymentsApiService.getPaymentById(transferId);
    }
    saveEditedTransfer(transferForm, originalPayment) {
        return this.paymentsApiService.updatePayment(Object.assign(Object.assign({}, originalPayment), this.mapTransferOwnPaymentBody(transferForm)), { paymentId: transferForm.id });
    }
    createOwnTransfer(transferForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return this.paymentsApiService.createPayment(this.mapTransferOwnPaymentBody(transferForm));
            }
            catch (error) {
                throw error;
            }
        });
    }
    createAndSignOwnTransfer(transferForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const paymentResult = yield this.createOwnTransfer(transferForm);
            return this.paymentsPipelineService.processPaymentVerify(paymentResult);
        });
    }
    mapTransferOwnPaymentBody(transferForm) {
        var _a, _b, _c, _d;
        let paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.IN_BETWEEN;
        let payerAccountId = null;
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.ACCOUNT &&
            transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD) {
            paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.ACCOUNT_TO_CARD;
        }
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD &&
            transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.ACCOUNT) {
            paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.CARD_TO_ACCOUNT;
            payerAccountId = transferForm.fromAccount.accountId;
        }
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD &&
            transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD) {
            paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.CARD_TO_CARD;
            payerAccountId = transferForm.fromAccount.accountId;
        }
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.DEPOSIT &&
            transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.ACCOUNT) {
            paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.DEPOSIT_WITHDRAWAL;
        }
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.ACCOUNT &&
            transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.DEPOSIT) {
            paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.DEPOSIT_REPLENISHMENT;
        }
        let depositName = null;
        if (transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.DEPOSIT) {
            depositName = this.accountsService.getDepositName(transferForm.fromAccount);
        }
        else if (transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.DEPOSIT) {
            depositName = this.accountsService.getDepositName(transferForm.toAccount);
        }
        let mappedPayment = {
            type: paymentType,
            category: _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_CATEGORY.DOMESTIC,
            paymentRecipient: {
                recipientAccount: {
                    iban: transferForm.to,
                },
            },
            details: {
                payerIban: transferForm.from,
                paymentAmount: {
                    amount: this.maskedService.getNumberedAmount(transferForm.amount),
                    currency: ((_b = (_a = transferForm.fromAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency) || ((_d = (_c = transferForm.toAccount) === null || _c === void 0 ? void 0 : _c.balance) === null || _d === void 0 ? void 0 : _d.currency) || _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT,
                },
                documentId: transferForm.documentNumber,
                associatedField: {
                    parameters: {
                        depositName,
                        payerCardNumber: transferForm.fromAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD
                            ? transferForm.fromAccount.cardNumber
                            : null,
                        recipientCardNumber: transferForm.toAccount.accountType === _accounts_account_model__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_TYPE.CARD
                            ? transferForm.toAccount.cardNumber
                            : null,
                    },
                },
            },
        };
        if (payerAccountId) {
            mappedPayment.details = Object.assign(Object.assign({}, mappedPayment.details), { payerAccountId });
        }
        return mappedPayment;
    }
    mapTransferOwnToPayment(transferForm, originalPayment) {
        originalPayment.paymentRecipient.recipientAccount.iban = transferForm.to;
        originalPayment.details.payerIban = transferForm.from;
        originalPayment.details.paymentAmount.amount =
            this.maskedService.getNumberedAmount(transferForm.amount);
        originalPayment.details.documentId = transferForm.documentNumber;
        return originalPayment;
    }
};
TransfersService.ctorParameters = () => [
    { type: _accounts_services__WEBPACK_IMPORTED_MODULE_1__.AccountsService },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsPipelineService },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_2__.PaymentApiService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_5__.MaskedService }
];
TransfersService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], TransfersService);



/***/ }),

/***/ 1368:
/*!******************************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-error/transfer-error.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 13231:
/*!**********************************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-success/transfer-success.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zlci1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57906:
/*!*********************************************************************************!*\
  !*** ./src/app/transfers/transfers-own/transfers-own.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".form-footer {\n  border-top: 1px solid rgba(183, 190, 197, 0.5);\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.form-from {\n  position: relative;\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVycy1vd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURGIiwiZmlsZSI6InRyYW5zZmVycy1vd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4uZm9ybS1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgkZ3JheSwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogc3BhY2UoNCk7XG4gIHBhZGRpbmctdG9wOiBzcGFjZSg0KTtcbn1cblxuLmZvcm0tZnJvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 24939:
/*!***************************************************************!*\
  !*** ./src/app/transfers/transfers.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@media (min-width: 1920px) {\n  .f-page-title {\n    font-size: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCJ0cmFuc2ZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERJO0VDMURKO0lBRUksZUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoidHJhbnNmZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQnO1xyXG5cclxuLmYtcGFnZS10aXRsZSB7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75833:
/*!******************************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-error/transfer-error.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\"></div>\n<div class=\"modal-body px-4 pt-0 pb-4 text-center \">\n    <img src=\"/assets/img/history/modals/error.svg\"\n         alt=\"{{ 'SHARED.ERROR' | translate }}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">SHARED.ERROR</h3>\n    <p class=\"m-0 text-muted\">\n        <span translate>{{description}}</span>\n    </p>\n    <p *ngIf=\"errorText\"\n       class=\"mt-3 mb-0 text-danger\"\n       [innerHTML]=\"errorText\">\n    </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        SHARED.TRY_AGAIN\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        SHARED.BACK_TO_HOME\n    </button>\n</div>";

/***/ }),

/***/ 44951:
/*!**********************************************************************************************!*\
  !*** ./src/app/transfers/modals/transfer-success/transfer-success.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\"></div>\n<div class=\"modal-body j-modal-body text-center pb-4\">\n    <img src=\"/assets/img/history/modals/success.svg\"\n         alt=\"{{description | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">\n        <strong>\n            <j-money [money]=\"totalBalance\"></j-money>\n        </strong>\n    </h3>\n    <p translate\n       class=\"m-0 text-muted\">\n        {{description}}\n    </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        TRANSFERS.NAVIGATE_TO_HISTORY\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        SHARED.BACK_TO_HOME\n    </button>\n</div>";

/***/ }),

/***/ 41510:
/*!*********************************************************************************!*\
  !*** ./src/app/transfers/transfers-own/transfers-own.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"isLoading\">\r\n    <ngx-skeleton-loader [theme]=\"{ height: '56px', 'background-color':'#ECEEF1' }\"></ngx-skeleton-loader>\r\n    <ngx-skeleton-loader [theme]=\"{ height: '56px', 'background-color':'#ECEEF1' }\"></ngx-skeleton-loader>\r\n    <ngx-skeleton-loader [theme]=\"{ height: '56px', 'background-color':'#ECEEF1' }\"></ngx-skeleton-loader>\r\n    <ngx-skeleton-loader [theme]=\"{ height: '56px', 'background-color':'#ECEEF1' }\"></ngx-skeleton-loader>\r\n    <div class=\"d-flex justify-content-end\">\r\n        <ngx-skeleton-loader [theme]=\"{ height: '56px', width:'200px', 'background-color':'#ECEEF1' }\">\r\n        </ngx-skeleton-loader>\r\n    </div>\r\n</ng-container>\r\n\r\n<section [hidden]=\"isLoading\">\r\n    <j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                              label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n    </j-restricted-placeholder>\r\n\r\n    <ng-container *ngIf=\"!isRestricted\">\r\n        <form [formGroup]=\"transferForm\">\r\n            <div class=\"form-group form-from\">\r\n                <j-account-dropdown #fromDropdown\r\n                                    [hasError]=\"f.from.invalid && isSubmitted\"\r\n                                    [accounts]=\"fromAccounts\"\r\n                                    [isDisabledSelectable]=\"false\"\r\n                                    [isLoading]=\"isAccountsLoading\"\r\n                                    [isFromArrowShown]=\"true\"\r\n                                    (selected)=\"onFromSelect($event)\"\r\n                                    label=\"TRANSFERS.FROM\"></j-account-dropdown>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <j-account-dropdown #toDropdown\r\n                                    [hasError]=\"f.to.invalid && isSubmitted\"\r\n                                    [accounts]=\"toAccounts\"\r\n                                    [isLoading]=\"isAccountsLoading\"\r\n                                    [isDisabledSelectable]=\"true\"\r\n                                    (selected)=\"onToSelect($event)\"\r\n                                    label=\"TRANSFERS.TO\"></j-account-dropdown>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <j-input label=\"TRANSFERS.DOCUMENT_NUMBER\"\r\n                         [hasError]=\"f.documentNumber.invalid && isSubmitted\"\r\n                         [isClearable]=\"false\"\r\n                         [formControl]=\"f.documentNumber\"></j-input>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <j-amount-input label=\"TRANSFERS.AMOUNT\"\r\n                                [hasError]=\"f.amount.invalid && isSubmitted\"\r\n                                [currency]=\"from?.balance.currency || to?.balance.currency || defaultCurrency\"\r\n                                [formControl]=\"f.amount\">\r\n                </j-amount-input>\r\n\r\n                <p *ngIf=\"irreducibleBalanceParams\"\r\n                   class=\"text-muted p3 j-input-helper\"\r\n                   [class.text-danger]=\"f.amount.errors?.irreducible\"\r\n                   [innerHTML]=\"'TRANSFERS.IRREDUCIBLE_BALANCE' | translate: irreducibleBalanceParams\"></p>\r\n\r\n                <p *ngIf=\"maxSumParams\"\r\n                   class=\"text-muted p3 j-input-helper\"\r\n                   [class.text-danger]=\"f.amount.errors?.maxSum\"\r\n                   [innerHTML]=\"'TRANSFERS.MAX_SUM' | translate: maxSumParams\"></p>\r\n\r\n                <p *ngIf=\"f.amount.valid || !isSubmitted\"\r\n                   class=\"text-muted p3 j-input-helper\"\r\n                   [innerHTML]=\"'TRANSFERS.COMMISSION' | translate: commissionParams\"></p>\r\n\r\n                <p *ngIf=\"hasUnsufficientFunds\"\r\n                   class=\"text-muted p3 j-input-helper\"\r\n                   [innerHTML]=\"'TRANSFERS.NOT_ENOUGH' | translate: unsufficientFundsParams\"></p>\r\n            </div>\r\n            <div class=\"form-footer\"\r\n                 *ngIf=\"isEditing\">\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        translate\r\n                        (click)=\"edit()\">TRANSFERS.SAVE</button>\r\n            </div>\r\n            <div class=\"form-footer\"\r\n                 *ngIf=\"!isEditing\">\r\n                <button *ngIf=\"canSendAndSign\"\r\n                        type=\"button\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        translate\r\n                        (click)=\"createOnly()\">TRANSFERS.FOR_SIGN</button>\r\n                <button *ngIf=\"canSendAndSign\"\r\n                        type=\"submit\"\r\n                        class=\"btn btn-primary ml-3\"\r\n                        translate\r\n                        (click)=\"createAndSign()\">TRANSFERS.SIGN</button>\r\n                <button *ngIf=\"canSendOnly\"\r\n                        type=\"submit\"\r\n                        class=\"btn btn-primary ml-3\"\r\n                        translate\r\n                        (click)=\"createOnly()\">TRANSFERS.SEND</button>\r\n            </div>\r\n        </form>\r\n    </ng-container>\r\n</section>";

/***/ }),

/***/ 89958:
/*!***************************************************************!*\
  !*** ./src/app/transfers/transfers.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<f-page closePosition=\"outside\"\n        colsClassList=\"offset-lg-2 col-lg-8 offset-xl-3 col-xl-6\"\n        (closed)=\"onClose()\">\n    <f-page-header>\n        <section class=\"account-header\">\n            <h1 class=\"f-page-title\"\n                translate>TRANSFERS.TITLE</h1>\n        </section>\n    </f-page-header>\n    <f-page-body>\n        <j-transfers-own></j-transfers-own>\n    </f-page-body>\n</f-page>";

/***/ })

}]);
//# sourceMappingURL=src_app_transfers_transfers_module_ts.js.map