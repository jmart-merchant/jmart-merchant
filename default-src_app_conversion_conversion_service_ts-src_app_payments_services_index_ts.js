"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["default-src_app_conversion_conversion_service_ts-src_app_payments_services_index_ts"],{

/***/ 57720:
/*!**************************************************!*\
  !*** ./src/app/conversion/conversion.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionService": () => (/* binding */ ConversionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services_payments_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/payments-shared.service */ 25437);










let ConversionService = class ConversionService {
    constructor(api, companyService, maskedService, paymentsPipelineService, paymentsApiService, paymentsSharedService) {
        this.api = api;
        this.companyService = companyService;
        this.maskedService = maskedService;
        this.paymentsPipelineService = paymentsPipelineService;
        this.paymentsApiService = paymentsApiService;
        this.paymentsSharedService = paymentsSharedService;
    }
    getPurposeList() {
        const url = `dictionaries/conversion-purposes`;
        return this.api.get(url);
    }
    getRateObservable(body) {
        const url = `companies/${this.companyService.currentId}/payments/exchange-rate`;
        return this.api.postObservable(url, body);
    }
    getRate(body) {
        return this.paymentsSharedService.getExchangeRate(body);
    }
    getConversionById(conversionId) {
        return this.paymentsApiService.getPaymentById(conversionId);
    }
    saveEditedConversion(conversionForm, originalPayment) {
        return this.paymentsApiService.updatePayment(this.mapConversionToPayment(conversionForm, originalPayment), { paymentId: conversionForm.id });
    }
    getCommission(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${this.companyService.currentId}/payments/commission`;
            const body = this.mapFormToPayment(form);
            const retrieved = yield this.api.post(url, body);
            const commission = {
                amount: retrieved.commissionAmount || 0,
                currency: retrieved.currency || _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT,
            };
            return commission;
        });
    }
    createConversion(form) {
        return this.paymentsApiService.createPayment(this.mapFormToPayment(form));
    }
    updateConversion(form) {
        return this.paymentsApiService.updatePayment(this.mapFormToPayment(form), {
            paymentId: form.id,
        });
    }
    createAndSignConversion(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const paymentResult = yield this.createConversion(form);
            return this.paymentsPipelineService.processPaymentVerify(paymentResult);
        });
    }
    mapFormToPayment(form) {
        var _a, _b, _c, _d, _e;
        const mappedPayment = {
            status: {
                code: _shared_models__WEBPACK_IMPORTED_MODULE_5__.PAYMENT_STATUS.CREATED,
            },
            paymentRecipient: {
                recipientAccount: {
                    iban: (_a = form.to) === null || _a === void 0 ? void 0 : _a.iban,
                },
            },
            type: _shared_models__WEBPACK_IMPORTED_MODULE_5__.PAYMENT_TYPE.CONVERSION,
            category: _shared_models__WEBPACK_IMPORTED_MODULE_5__.PAYMENT_CATEGORY.CONVERSION,
            details: {
                exchangeRate: form.rate,
                conversionPurpose: form.purpose,
                description: form.description,
                payerIban: (_b = form.from) === null || _b === void 0 ? void 0 : _b.iban,
                paymentAmount: {
                    amount: this.maskedService.getNumberedAmount(form.fromAmount),
                    currency: (_d = (_c = form.from) === null || _c === void 0 ? void 0 : _c.balance) === null || _d === void 0 ? void 0 : _d.currency,
                },
                documentId: form.documentNumber,
            },
        };
        if (form.commissionAccount) {
            mappedPayment.details.exchangeRate = Object.assign(Object.assign({}, mappedPayment.details.exchangeRate), { commissionWithdrawalIban: (_e = form.commissionAccount) === null || _e === void 0 ? void 0 : _e.iban });
        }
        return mappedPayment;
    }
    mapConversionToPayment(conversionForm, originalPayment) {
        originalPayment.paymentRecipient.recipientAccount.iban =
            conversionForm.to.iban;
        originalPayment.details.exchangeRate = conversionForm.rate;
        originalPayment.details.conversionPurpose = conversionForm.purpose;
        originalPayment.details.description = conversionForm.description;
        originalPayment.details.payerIban = conversionForm.from.iban;
        originalPayment.details.paymentAmount = {
            amount: this.maskedService.getNumberedAmount(conversionForm.fromAmount),
            currency: conversionForm.from.balance.currency,
        };
        originalPayment.details.documentId = conversionForm.documentNumber;
        return originalPayment;
    }
};
ConversionService.ctorParameters = () => [
    { type: _api_index__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__.MaskedService },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsPipelineService },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_2__.PaymentApiService },
    { type: _shared_services_payments_shared_service__WEBPACK_IMPORTED_MODULE_7__.PaymentsSharedService }
];
ConversionService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], ConversionService);



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=default-src_app_conversion_conversion_service_ts-src_app_payments_services_index_ts.js.map