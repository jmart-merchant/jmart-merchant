"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_conversion_conversion_module_ts"],{

/***/ 77471:
/*!*************************************************************************!*\
  !*** ./src/app/conversion/conversion-form/conversion-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionFormComponent": () => (/* binding */ ConversionFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversion_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion-form.component.html?ngResource */ 46224);
/* harmony import */ var _conversion_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion-form.component.scss?ngResource */ 58013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/errors */ 32146);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes */ 39843);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _conversion_modals_conversion_success_modal_conversion_success_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @conversion/modals/conversion-success-modal/conversion-success-modal.component */ 95618);
/* harmony import */ var _conversion_modals_conversion_error_modal_conversion_error_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @conversion/modals/conversion-error-modal/conversion-error-modal.component */ 85830);
/* harmony import */ var _conversion_conversion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @conversion/conversion.service */ 57720);
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @filter/filter.model */ 41359);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @payments/services */ 7500);


























const INPUT_DEBOUNCE_TIME = 500;
const PURPOSE_MAX_LENGTH = 250;
const MODAL_CONFIG = {
    backdropClass: 'backdrop_light',
    windowClass: 'modal_light modal_sm',
    backdrop: 'static',
    centered: true,
};
var RATE_ERROR;
(function (RATE_ERROR) {
    RATE_ERROR["RATE_NOT_LOADED"] = "rate_not_found";
})(RATE_ERROR || (RATE_ERROR = {}));
let ConversionFormComponent = class ConversionFormComponent {
    constructor(conversionService, accountsService, paymentsService, companyService, maskedService, curSymbolPipe, modalService, router, route, notifierService, translateService, navService, authorityPermissionsService, paymentsApiService) {
        this.conversionService = conversionService;
        this.accountsService = accountsService;
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.maskedService = maskedService;
        this.curSymbolPipe = curSymbolPipe;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.notifierService = notifierService;
        this.translateService = translateService;
        this.navService = navService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.paymentsApiService = paymentsApiService;
        this.descriptionMaxLength = PURPOSE_MAX_LENGTH;
        this.isSubmitted = false;
        this.isRateLoading = false;
        this.isEditing = false;
        this.isLoading = true;
        this.isRestricted = false;
        this.isSubmitting = false;
        this.isCommissionAccountSelectable = false;
        this.rateFrom = null;
        this.rateTo = null;
        this.hasAccountFromRateError = false;
        this.hasAccountToRateError = false;
        this.rateErrorDescription = '';
        this.commission = null;
        this.accounts = [];
        this.purposeList = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
        this.descriptionLengthMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(`0/${this.descriptionMaxLength}`);
        this.isAccountsLoading = true;
        this.rateSubscription = null;
        this.conversionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            fromAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            toAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            documentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required),
            commission: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null),
            commissionAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(this.descriptionMaxLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
            ]),
        });
        this.listenFromAmount();
        this.listenToAmount();
        this.listenDescription();
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
        this.getPermission().then(() => {
            if (this.isRestricted) {
                this.isLoading = false;
            }
            else {
                this.initPage();
            }
        });
    }
    initPage() {
        const routeStateSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(() => window.history.state))
            .subscribe((state) => {
            if (this.isEditing) {
                this.loadEditConversion(this.f.id.value);
            }
            else if (state.repeatPaymentId) {
                this.loadRepeatConversion(state.repeatPaymentId);
            }
            else {
                this.loadNewConversion();
            }
        });
        const formSubscription = this.conversionForm.valueChanges.subscribe((value) => {
            this.isSubmitted = false;
        });
        this.subscription.add(routeStateSubscription);
        this.subscription.add(formSubscription);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getItemCode(purpose) {
        return purpose.code || '';
    }
    getItemDescription(purpose) {
        return purpose.description || '';
    }
    get f() {
        return this.conversionForm.controls;
    }
    get fromAccounts() {
        if (this.toCurrency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT) {
            return this.accounts.filter((account) => account.balance.currency !== _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT);
        }
        return this.accounts;
    }
    get toAccounts() {
        if (this.fromCurrency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT) {
            return this.accounts.filter((account) => account.balance.currency !== _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT);
        }
        return this.accounts;
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
    get isRateShown() {
        return (this.rateFrom && this.rateTo) || this.isRateLoading;
    }
    get fromAmountError() {
        var _a, _b;
        if (!this.f.fromAmount.value) {
            return null;
        }
        const numberedFromAmount = this.maskedService.getNumberedAmount(this.f.fromAmount.value);
        return numberedFromAmount > ((_b = (_a = this.f.from.value) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.amount)
            ? 'ERRORS.NOT_ENOUGH_AMOUNT'
            : null;
    }
    onFromSelect(selectedAccount) {
        if (!selectedAccount) {
            return;
        }
        this.applyClearAmountsIfOnlyTwoAccountsRule();
        this.applyClearOnFromSelectedRule(selectedAccount);
        this.applySelectFromCompanionRule(selectedAccount);
        this.selectFromAccount(selectedAccount);
        this.recalculateToAmount();
        this.commissionAccountDropdown.selectAccount(selectedAccount);
        this.recalculateCommission();
    }
    onToSelect(selectedAccount) {
        if (!selectedAccount) {
            return;
        }
        this.applyClearAmountsIfOnlyTwoAccountsRule();
        this.applyClearOnToSelectedRule(selectedAccount);
        this.applySelectToCompanionRule(selectedAccount);
        this.selectToAccount(selectedAccount);
        this.recalculateToAmount();
    }
    onPurposeSelect(purpose) {
        if (!purpose) {
            return;
        }
        this.f.purpose.setValue(purpose);
        this.recalculateCommission();
    }
    onCommissionAccountSelect(selectedAccount) {
        if (!selectedAccount) {
            return;
        }
        this.f.commissionAccount.setValue(selectedAccount);
        this.recalculateCommission();
    }
    reverseAccounts() {
        const fromAccount = this.f.from.value;
        const toAccount = this.f.to.value;
        this.selectFromAccount(toAccount);
        this.fromDropdown.selectAccount(toAccount);
        this.f.fromAmount.setValue('', { emitEvent: false });
        this.selectToAccount(fromAccount);
        this.toDropdown.selectAccount(fromAccount);
        this.f.toAmount.setValue('', { emitEvent: false });
    }
    updateRate(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        if (this.hasAccountFromRateError) {
            this.recalculateFromAmount();
        }
        else {
            this.recalculateToAmount();
        }
    }
    mapDescriptionErrors() {
        if (!this.f.description.errors) {
            return null;
        }
        if (this.f.description.errors.maxlength) {
            return 'ERRORS.MAX_LENGTH';
        }
    }
    retrievePurposeList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.purposeList = yield this.conversionService.getPurposeList();
        });
    }
    retrieveAccounts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isAccountsLoading = true;
            try {
                const retrieved = yield this.accountsService.getAccounts();
                this.accounts = retrieved.filter((account) => {
                    var _a;
                    return !!((_a = account.balance) === null || _a === void 0 ? void 0 : _a.currency) &&
                        account.accountType === _accounts_index__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_TYPE.ACCOUNT;
                });
            }
            catch (error) {
            }
            finally {
                this.isAccountsLoading = false;
            }
            this.applyTwoAccountsRule();
        });
    }
    createOnly() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            this.paymentNumberStore = this.paymentsService.conversionPaymentNumber;
            if (this.conversionForm.invalid || this.fromAmountError) {
                if (this.hasAccountFromRateError || this.hasAccountToRateError) {
                    this.showRateNotLoadedNotification();
                }
                return;
            }
            this.isSubmitting = true;
            const formValue = this.conversionForm.getRawValue();
            const isAllowed = yield this.checkIfAllowedToCreate(formValue.amount);
            if (!isAllowed) {
                this.isSubmitting = false;
                return;
            }
            try {
                yield this.conversionService.createConversion(formValue);
                this.paymentNumberStore.entity = null;
                this.showSuccessModal('CONVERSION.CREATE.SUCCESS');
            }
            catch (error) {
                const errorMessage = this.handleError(error);
                if (errorMessage) {
                    this.showCreateError(errorMessage);
                }
            }
            finally {
                this.isSubmitting = false;
            }
        });
    }
    createAndSign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            this.paymentNumberStore = this.paymentsService.conversionPaymentNumber;
            if (this.conversionForm.invalid || this.fromAmountError) {
                if (this.hasAccountFromRateError || this.hasAccountToRateError) {
                    this.showRateNotLoadedNotification();
                }
                return;
            }
            this.isSubmitting = true;
            const formValue = this.conversionForm.getRawValue();
            const isAllowed = yield this.checkIfAllowedToCreate(formValue.amount);
            if (!isAllowed) {
                this.isSubmitting = false;
                return;
            }
            try {
                yield this.conversionService.createAndSignConversion(formValue);
                this.paymentNumberStore.entity = null;
                let description;
                if (this.companyService.currentCompany.signatureScheme ===
                    _shared_models__WEBPACK_IMPORTED_MODULE_9__.SIGNATURE_SCHEME.SINGLE_SIGN &&
                    this.companyService.currentAuthority.authority ===
                        _shared_models__WEBPACK_IMPORTED_MODULE_9__.AUTHORITY_TYPE.PRIMARY_SIGNATURE) {
                    description = 'CONVERSION.CREATE_AND_SIGN.SUCCESS';
                }
                else {
                    description = 'CONVERSION.SIGN_ONLY.SUCCESS';
                }
                this.showSuccessModal(description, true);
            }
            catch (error) {
                const errorMessage = this.handleError(error);
                if (errorMessage) {
                    this.showCreateAndSignError(errorMessage);
                }
            }
            finally {
                this.isSubmitting = false;
            }
        });
    }
    checkIfAllowedToCreate(amount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            // const isWorkingTimeCheckPassed =
            //   await this.paymentsApiService.checkWorkingTime();
            const isAmountCheckPassed = yield this.paymentsApiService.checkAmountLimit(amount, _shared_models__WEBPACK_IMPORTED_MODULE_9__.PAYMENT_TYPE.CONVERSION);
            return isAmountCheckPassed;
            // return isWorkingTimeCheckPassed && isAmountCheckPassed;
        });
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.conversionForm.invalid) {
                if (this.hasAccountFromRateError || this.hasAccountToRateError) {
                    this.showRateNotLoadedNotification();
                }
                return;
            }
            this.isSubmitting = true;
            try {
                yield this.conversionService.saveEditedConversion(this.conversionForm.value, this.originalPayment);
                this.showSuccessModal('CONVERSION.EDIT.SUCCESS');
            }
            catch (error) {
                if (error.code === _api_errors__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RATE_CHANGED) {
                    this.showErrorNotification(error);
                    this.updateRate();
                }
                else {
                    this.showEditError(this.mapError(error));
                }
            }
            finally {
                this.isSubmitting = false;
            }
        });
    }
    loadRepeatConversion(repeatConversionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const values = yield Promise.all([
                this.conversionService.getConversionById(repeatConversionId),
                this.retrievePurposeList(),
                this.retrieveAccounts(),
                this.setAutoNumeration(),
            ]);
            const [originalPayment] = values;
            this.loadConversionFromPayment(originalPayment);
            this.isLoading = false;
        });
    }
    loadEditConversion(conversionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const values = yield Promise.all([
                this.conversionService.getConversionById(conversionId),
                this.retrievePurposeList(),
                this.retrieveAccounts(),
            ]);
            const [originalPayment] = values;
            this.f.documentNumber.setValue(originalPayment.details.documentId);
            this.loadConversionFromPayment(originalPayment);
            this.isLoading = false;
        });
    }
    listenDescription() {
        this.f.description.valueChanges.subscribe((description) => {
            this.descriptionLengthMessage$.next(`${description.length}/${this.descriptionMaxLength}`);
        });
    }
    showRateNotLoadedNotification() {
        const message = this.translateService.instant(`CONVERSION.RATE_NOT_LOADED`);
        this.notifierService.hideAll();
        this.notifierService.notify('default', message);
    }
    showErrorNotification(error) {
        if (error.code === _api_errors__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RATE_CHANGED) {
            const message = this.translateService.instant(`CONVERSION.RATE_CHANGED`);
            this.notifierService.hideAll();
            this.notifierService.notify('default', message);
        }
    }
    loadConversionFromPayment(originalPayment) {
        this.originalPayment = originalPayment;
        this.selectFromAccountByIban(originalPayment.details.payerIban);
        this.selectToAccountByIban(originalPayment.paymentRecipient.recipientAccount.iban);
        this.selectPurposeByCode(originalPayment.details.conversionPurpose.code);
        const maskedAmount = this.maskedService.getMaskedAmount(originalPayment.details.paymentAmount.amount, this.curSymbolPipe.transform(originalPayment.details.paymentAmount.currency));
        this.f.fromAmount.patchValue(maskedAmount);
        this.f.description.patchValue(originalPayment.details.description);
    }
    getPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isRestricted = yield this.authorityPermissionsService.isRestricted(_shared_models__WEBPACK_IMPORTED_MODULE_9__.PAYMENT_TYPE.CONVERSION);
        });
    }
    loadNewConversion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield Promise.all([
                this.retrievePurposeList(),
                this.retrieveAccounts(),
                this.setAutoNumeration(),
            ]);
            this.isLoading = false;
        });
    }
    selectPurposeByCode(purposeCode) {
        const foundPurpose = this.purposeList.find((purpose) => purpose.code === purposeCode);
        this.onPurposeSelect(foundPurpose);
        this.purposeDropdown.selectItem(foundPurpose);
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
    listenFromAmount() {
        const amountSubscription = this.f.fromAmount.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.debounceTime)(INPUT_DEBOUNCE_TIME))
            .subscribe((value) => {
            if (!value) {
                return;
            }
            this.recalculateToAmount();
        });
        this.subscription.add(amountSubscription);
    }
    listenToAmount() {
        const amountSubscription = this.f.toAmount.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.debounceTime)(INPUT_DEBOUNCE_TIME))
            .subscribe((value) => {
            if (!value) {
                return;
            }
            this.recalculateFromAmount();
        });
        this.subscription.add(amountSubscription);
    }
    applyTwoAccountsRule() {
        if (this.accounts.length === 2 &&
            this.accounts[0].balance.currency !== this.accounts[1].balance.currency) {
            const kztAccounts = this.accounts.filter((account) => account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT);
            const fromToSelect = kztAccounts.length
                ? kztAccounts[0]
                : this.accounts[0];
            this.selectFromAccount(fromToSelect);
            this.fromDropdown.selectAccount(fromToSelect);
            this.applySelectFromCompanionRule(fromToSelect);
        }
    }
    applySelectToCompanionRule(selectedAccount) {
        var _a;
        if (((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) === 2) {
            const unselected = this.findUnselectedAccount(selectedAccount);
            this.selectFromAccount(unselected);
            this.fromDropdown.selectAccount(unselected);
        }
    }
    applySelectFromCompanionRule(selectedAccount) {
        var _a;
        if (((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) === 2) {
            const unselected = this.findUnselectedAccount(selectedAccount);
            this.selectToAccount(unselected);
            this.toDropdown.selectAccount(unselected);
        }
    }
    applyClearAmountsIfOnlyTwoAccountsRule() {
        if (this.accounts.length === 2) {
            this.f.fromAmount.setValue('');
            this.f.toAmount.setValue('');
        }
    }
    findUnselectedAccount(selectedAccount) {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.find((account) => {
            return account !== selectedAccount;
        });
    }
    findAccountByIban(iban) {
        var _a;
        return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.find((account) => {
            return account.iban === iban;
        });
    }
    setAutoNumeration() {
        this.subscription.add(this.paymentsService.conversionPaymentNumber$.subscribe((numberFromStore) => {
            this.f.documentNumber.setValue(numberFromStore);
        }));
    }
    selectToAccount(selectedAccount) {
        var _a;
        this.toCurrency = (_a = selectedAccount.balance) === null || _a === void 0 ? void 0 : _a.currency;
        this.f.to.setValue(selectedAccount);
    }
    selectFromAccount(selectedAccount) {
        var _a;
        this.fromCurrency = (_a = selectedAccount.balance) === null || _a === void 0 ? void 0 : _a.currency;
        this.f.from.setValue(selectedAccount);
    }
    clearToAccount() {
        var _a;
        this.toCurrency = null;
        this.f.to.setValue(null);
        (_a = this.toDropdown) === null || _a === void 0 ? void 0 : _a.clearSelected();
    }
    clearFromAccount() {
        var _a;
        this.fromCurrency = null;
        this.f.from.setValue(null);
        (_a = this.fromDropdown) === null || _a === void 0 ? void 0 : _a.clearSelected();
    }
    applyClearOnFromSelectedRule(selectedAccount) {
        if (selectedAccount === this.f.to.value) {
            this.clearToAccount();
        }
    }
    applyClearOnToSelectedRule(selectedAccount) {
        if (selectedAccount === this.f.from.value) {
            this.clearFromAccount();
        }
    }
    recalculateAmount(config) {
        const { source, target, sourceCurrency, targetCurrency, errorStateKey } = config;
        if (!this.fromCurrency || !this.toCurrency || !source.value) {
            return;
        }
        if (this.rateSubscription) {
            this.rateSubscription.unsubscribe();
        }
        target.disable({ emitEvent: false });
        this.hasAccountToRateError = false;
        this.hasAccountFromRateError = false;
        this.isRateLoading = true;
        this.rateErrorDescription = '';
        this.rateFrom = null;
        this.rateTo = null;
        const calculatingAmount = this.maskedService.getNumberedAmount(source.value);
        this.rateSubscription = this.conversionService
            .getRateObservable({
            currencyFrom: this.fromCurrency,
            currencyTo: this.toCurrency,
            sum: {
                amount: calculatingAmount,
                currency: sourceCurrency,
            },
        })
            .subscribe((rate) => {
            this.f.rate.setValue(rate);
            this.rateFrom = rate.equation.from;
            this.rateTo = rate.equation.to;
            const maskedAmount = this.maskedService.getMaskedAmount(rate.calculatedSum, this.curSymbolPipe.transform(targetCurrency));
            target.patchValue(maskedAmount, {
                emitEvent: false,
            });
            target.enable({ emitEvent: false });
            this.recalculateCommission();
            this.isRateLoading = false;
            this.rateSubscription = null;
        }, (error) => {
            if (error.code === RATE_ERROR.RATE_NOT_LOADED) {
                this.rateErrorDescription = error.description;
            }
            target.patchValue('', { emitEvent: false });
            target.enable({ emitEvent: false });
            this[errorStateKey] = true;
            this.isRateLoading = false;
            this.rateSubscription = null;
        });
    }
    recalculateToAmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.recalculateAmount({
                source: this.f.fromAmount,
                target: this.f.toAmount,
                sourceCurrency: this.fromCurrency,
                targetCurrency: this.toCurrency,
                errorStateKey: 'hasAccountToRateError',
            });
        });
    }
    recalculateFromAmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            this.recalculateAmount({
                source: this.f.toAmount,
                target: this.f.fromAmount,
                sourceCurrency: this.toCurrency,
                targetCurrency: this.fromCurrency,
                errorStateKey: 'hasAccountFromRateError',
            });
        });
    }
    recalculateCommission() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.commission = yield this.conversionService.getCommission(this.conversionForm.getRawValue());
                this.f.commission.setValue(this.commission);
                this.isCommissionAccountSelectable = ((_a = this.commission) === null || _a === void 0 ? void 0 : _a.amount) > 0;
                if (this.isCommissionAccountSelectable &&
                    this.commissionAccountDropdown.selectedAccount === undefined) {
                    this.setSelectedDefaultCommissionAccount();
                }
            }
            catch (error) {
                this.commission = null;
            }
        });
    }
    setSelectedDefaultCommissionAccount() {
        var _a, _b;
        if (this.accounts.length === 1) {
            (_a = this.commissionAccountDropdown) === null || _a === void 0 ? void 0 : _a.selectAccount(this.accounts[0]);
            this.onCommissionAccountSelect(this.accounts[0]);
        }
        const kztAccounts = this.accounts.filter((account) => account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_6__.CURRENCY.KZT);
        if ((kztAccounts === null || kztAccounts === void 0 ? void 0 : kztAccounts.length) === 1) {
            (_b = this.commissionAccountDropdown) === null || _b === void 0 ? void 0 : _b.selectAccount(kztAccounts[0]);
            this.onCommissionAccountSelect(kztAccounts[0]);
        }
    }
    showCreateError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.CREATE.ERROR', error);
                this.createOnly();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showCreateAndSignError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.CREATE_AND_SIGN.ERROR', error);
                this.createAndSign();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showEditError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.showErrorModal('TRANSFERS.EDIT.ERROR', error);
                this.edit();
            }
            catch (error) {
                this.navigateToHome();
            }
        });
    }
    showSuccessModal(description, hasSigned = false) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_conversion_modals_conversion_success_modal_conversion_success_modal_component__WEBPACK_IMPORTED_MODULE_10__.ConversionSuccessModalComponent, MODAL_CONFIG);
            modal.componentInstance.description = description;
            const fromAmount = this.maskedService.getNumberedAmount(this.f.fromAmount.value);
            const toAmount = this.maskedService.getNumberedAmount(this.f.toAmount.value);
            modal.componentInstance.fromBalance = {
                amount: fromAmount,
                currency: (_b = (_a = this.f.from.value) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency,
            };
            modal.componentInstance.toBalance = {
                amount: toAmount,
                currency: (_d = (_c = this.f.to.value) === null || _c === void 0 ? void 0 : _c.balance) === null || _d === void 0 ? void 0 : _d.currency,
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
        const modal = this.modalService.open(_conversion_modals_conversion_error_modal_conversion_error_modal_component__WEBPACK_IMPORTED_MODULE_11__.ConversionErrorModalComponent, MODAL_CONFIG);
        modal.componentInstance.description = description;
        modal.componentInstance.errorText = error;
        return modal.result;
    }
    navigateToHome() {
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        this.router.navigate(['/']);
    }
    navigateToHistory(hasSigned = false) {
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        let paymentStatus = _filter_filter_model__WEBPACK_IMPORTED_MODULE_13__.FILTER_PAYMENT_STATUS.FOR_SIGN;
        if (hasSigned &&
            this.companyService.isPrimaryAuthority() &&
            this.companyService.isSingleSignScheme()) {
            paymentStatus = _filter_filter_model__WEBPACK_IMPORTED_MODULE_13__.FILTER_PAYMENT_STATUS.IN_PROGRESS;
        }
        this.router.navigate([`/history/conversion`], {
            queryParams: { paymentStatus },
        });
    }
    handleError(error) {
        if (!error) {
            return;
        }
        if (error.code === _api_errors__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RATE_CHANGED) {
            this.showErrorNotification(error);
            this.updateRate();
        }
        else {
            this.paymentNumberStore.entity = this.f.documentNumber.value;
            return this.mapError(error);
        }
    }
    mapError(error) {
        let errorToShow = '';
        if (error === null || error === void 0 ? void 0 : error.data) {
            let i = 0;
            for (const errorMessage in error.data) {
                if (Object.prototype.hasOwnProperty.call(error.data, errorMessage)) {
                    if (i++ > 0) {
                        errorToShow += '<br>';
                    }
                    errorToShow += `${error.data[errorMessage]}`;
                }
            }
        }
        else {
            errorToShow = error.description || error.code || error;
        }
        return errorToShow;
    }
};
ConversionFormComponent.ctorParameters = () => [
    { type: _conversion_conversion_service__WEBPACK_IMPORTED_MODULE_12__.ConversionService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_3__.AccountsService },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_5__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_7__.MaskedService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_8__.CurSymbolPipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_25__.NotifierService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_14__.NavService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_15__.AuthorityPermissionsService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_16__.PaymentApiService }
];
ConversionFormComponent.propDecorators = {
    fromDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['fromDropdown',] }],
    toDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['toDropdown',] }],
    purposeDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['purposeDropdown',] }],
    commissionAccountDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['commissionAccountDropdown',] }]
};
ConversionFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'j-conversion-form',
        template: _conversion_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conversion_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConversionFormComponent);



/***/ }),

/***/ 33493:
/*!*********************************************************!*\
  !*** ./src/app/conversion/conversion-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionRoutingModule": () => (/* binding */ ConversionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _conversion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion.component */ 54361);




const routes = [
    {
        path: '',
        component: _conversion_component__WEBPACK_IMPORTED_MODULE_0__.ConversionComponent,
    },
    {
        path: ':id',
        component: _conversion_component__WEBPACK_IMPORTED_MODULE_0__.ConversionComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let ConversionRoutingModule = class ConversionRoutingModule {
};
ConversionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConversionRoutingModule);



/***/ }),

/***/ 54361:
/*!****************************************************!*\
  !*** ./src/app/conversion/conversion.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionComponent": () => (/* binding */ ConversionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion.component.html?ngResource */ 13531);
/* harmony import */ var _conversion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion.component.scss?ngResource */ 37734);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);







let ConversionComponent = class ConversionComponent {
    constructor(navService, featureFlagsService, location) {
        this.navService = navService;
        this.featureFlagsService = featureFlagsService;
        this.location = location;
        this.featureFlagsService.checkFeatureRoute(_feature_flags_index__WEBPACK_IMPORTED_MODULE_2__.FEATURE_FLAG.CONVERSION);
    }
    onClose() {
        this.navService.retrieveLetterBadges();
        this.navService.retrieveContractBadges();
        this.location.back();
    }
};
ConversionComponent.ctorParameters = () => [
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_2__.FeatureFlagsService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
ConversionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'j-conversion',
        template: _conversion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conversion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConversionComponent);



/***/ }),

/***/ 60467:
/*!*************************************************!*\
  !*** ./src/app/conversion/conversion.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionModule": () => (/* binding */ ConversionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _conversion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversion-routing.module */ 33493);
/* harmony import */ var _conversion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversion.component */ 54361);
/* harmony import */ var _conversion_form_conversion_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversion-form/conversion-form.component */ 77471);
/* harmony import */ var _modals_conversion_success_modal_conversion_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/conversion-success-modal/conversion-success-modal.component */ 95618);
/* harmony import */ var _modals_conversion_error_modal_conversion_error_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/conversion-error-modal/conversion-error-modal.component */ 85830);















let ConversionModule = class ConversionModule {
};
ConversionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _conversion_component__WEBPACK_IMPORTED_MODULE_4__.ConversionComponent,
            _conversion_form_conversion_form_component__WEBPACK_IMPORTED_MODULE_5__.ConversionFormComponent,
            _modals_conversion_success_modal_conversion_success_modal_component__WEBPACK_IMPORTED_MODULE_6__.ConversionSuccessModalComponent,
            _modals_conversion_error_modal_conversion_error_modal_component__WEBPACK_IMPORTED_MODULE_7__.ConversionErrorModalComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _conversion_routing_module__WEBPACK_IMPORTED_MODULE_3__.ConversionRoutingModule,
            _accounts_index__WEBPACK_IMPORTED_MODULE_1__.AccountsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
    })
], ConversionModule);



/***/ }),

/***/ 85830:
/*!**********************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-error-modal/conversion-error-modal.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionErrorModalComponent": () => (/* binding */ ConversionErrorModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversion_error_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion-error-modal.component.html?ngResource */ 26711);
/* harmony import */ var _conversion_error_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion-error-modal.component.scss?ngResource */ 55739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let ConversionErrorModalComponent = class ConversionErrorModalComponent {
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
ConversionErrorModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ConversionErrorModalComponent.propDecorators = {
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    errorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ConversionErrorModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-conversion-error-modal',
        template: _conversion_error_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conversion_error_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConversionErrorModalComponent);



/***/ }),

/***/ 95618:
/*!**************************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-success-modal/conversion-success-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionSuccessModalComponent": () => (/* binding */ ConversionSuccessModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversion_success_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion-success-modal.component.html?ngResource */ 17065);
/* harmony import */ var _conversion_success_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion-success-modal.component.scss?ngResource */ 73240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let ConversionSuccessModalComponent = class ConversionSuccessModalComponent {
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
ConversionSuccessModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ConversionSuccessModalComponent.propDecorators = {
    fromBalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    toBalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ConversionSuccessModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-conversion-success-modal',
        template: _conversion_success_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conversion_success_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConversionSuccessModalComponent);



/***/ }),

/***/ 58013:
/*!**************************************************************************************!*\
  !*** ./src/app/conversion/conversion-form/conversion-form.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".conversion__main {\n  padding: 1.5rem 0 0;\n}\n@media (min-width: 960px) {\n  .conversion__main {\n    display: grid;\n    grid-template-columns: calc(50% - 24px) 40px calc(50% - 24px);\n    grid-column-gap: 0.5rem;\n    column-gap: 0.5rem;\n  }\n}\n.conversion__arrows {\n  margin: 1rem auto;\n  text-align: center;\n}\n@media (min-width: 960px) {\n  .conversion__arrows {\n    margin: 0;\n    margin-top: 5.5rem;\n  }\n}\n.conversion__arrows button {\n  width: 40px;\n  height: 40px;\n  outline: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  box-shadow: none;\n  border-radius: 50%;\n  transform: rotate(90deg);\n  transition: all 0.2s ease-in-out;\n}\n.conversion__arrows button:hover:not([disabled]) {\n  background: #fff;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);\n}\n@media (min-width: 960px) {\n  .conversion__arrows button {\n    transform: rotate(0deg);\n  }\n}\n.conversion__rate-label {\n  font-weight: 400;\n}\n.conversion__rate {\n  display: inline-block;\n  position: relative;\n  min-width: 30px;\n  height: 24px;\n}\n.conversion__rates {\n  text-align: center;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(183, 190, 197, 0.35);\n}\n.conversion__details {\n  border-bottom: 1px solid rgba(183, 190, 197, 0.35);\n  padding: 1.5rem 0 0.5rem;\n}\n@media (min-width: 960px) {\n  .conversion__details-row {\n    display: grid;\n    grid-template-columns: calc(35% - 10px) calc(65% - 10px);\n    grid-column-gap: 20px;\n    column-gap: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCIuLi8uLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0FBREY7QUMwREk7RUQxREo7SUFJSSxhQUFBO0lBQ0EsNkRBQUE7SUFDQSx1QkFBQTtJQUFBLGtCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FDOENJO0VEaERKO0lBS0ksU0FBQTtJQUNBLGtCQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDRXdNYztBRnZNbEI7QUFDSTtFQUNFLGdCRTNCRTtFRjRCRiw2R0VzTFU7QUZyTGhCO0FDd0JJO0VEdkNGO0lBa0JJLHVCQUFBO0VBQ0o7QUFDRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtBQUFGO0FBR0E7RUFDRSxrREFBQTtFQUNBLHdCQUFBO0FBQUY7QUNISTtFRE1KO0lBRUksYUFBQTtJQUNBLHdEQUFBO0lBQ0EscUJBQUE7SUFBQSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiY29udmVyc2lvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcblxuLmNvbnZlcnNpb25fX21haW4ge1xuICBwYWRkaW5nOiAxLjVyZW0gMCAwO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyg1MCUgLSAyNHB4KSA0MHB4IGNhbGMoNTAlIC0gMjRweCk7XG4gICAgY29sdW1uLWdhcDogMC41cmVtO1xuICB9XG59XG5cbi5jb252ZXJzaW9uX19hcnJvd3Mge1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogNS41cmVtO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctc207XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICB9XG59XG5cbi5jb252ZXJzaW9uX19yYXRlLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnZlcnNpb25fX3JhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5jb252ZXJzaW9uX19yYXRlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGdyYXktNTAwLCAwLjM1KTtcbn1cblxuLmNvbnZlcnNpb25fX2RldGFpbHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkZ3JheS01MDAsIDAuMzUpO1xuICBwYWRkaW5nOiAxLjVyZW0gMCAwLjVyZW07XG59XG5cbi5jb252ZXJzaW9uX19kZXRhaWxzLXJvdyB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzNSUgLSAxMHB4KSBjYWxjKDY1JSAtIDEwcHgpO1xuICAgIGNvbHVtbi1nYXA6IDIwcHg7XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIl19 */";

/***/ }),

/***/ 37734:
/*!*****************************************************************!*\
  !*** ./src/app/conversion/conversion.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  background: #f6f7f8;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ01TO0VETFQsY0FBQTtBQURGIiwiZmlsZSI6ImNvbnZlcnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQ6ICRncmF5LTIwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIvLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2ZhZjdmNztcclxuJGdyYXktMjAwOiAjZjZmN2Y4O1xyXG4kZ3JheS0zMDA6ICNlY2VlZjE7XHJcbiRncmF5LTQwMDogI2Q2ZGFkZjtcclxuJGdyYXktNTAwOiAjYjdiZWM1O1xyXG4kZ3JheS02MDA6ICM2NjZjNzI7XHJcbiRncmF5LTcwMDogIzQ3NGI1MjtcclxuJGdyYXktODAwOiAjZTllY2YxO1xyXG4kZ3JheS05MDA6ICNkYmRmZTI7XHJcbiRncmF5LTEwMDA6ICM4MjgyODI7XHJcbiRibGFjazogIzFhMWMxZjtcclxuXHJcbiRncmF5czogKCk7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICcxMDAnOiAkZ3JheS0xMDAsXHJcbiAgICAnMjAwJzogJGdyYXktMjAwLFxyXG4gICAgJzMwMCc6ICRncmF5LTMwMCxcclxuICAgICc0MDAnOiAkZ3JheS00MDAsXHJcbiAgICAnNTAwJzogJGdyYXktNTAwLFxyXG4gICAgJzYwMCc6ICRncmF5LTYwMCxcclxuICAgICc3MDAnOiAkZ3JheS03MDAsXHJcbiAgICAnODAwJzogJGdyYXktODAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzIwNDE3NztcclxuJGJsdWUtbGlnaHQ6ICMxNTg2YmI7XHJcbiRibHVlLXdoaXRlOiAjZjVmOWZkO1xyXG4kb3JhbmdlOiAjZWY1NjMwO1xyXG4kb3JhbmdlLWRhcms6ICNkNDNlMTk7XHJcbiRvcmFuZ2UtbGlnaHQ6ICNmN2FiOTg7XHJcbiR5ZWxsb3c6ICNlZjhmMDA7XHJcbiRncmVlbjogIzIzOWE1NDtcclxuJGdyZWVuLWxpZ2h0OiAjNzRiYTcyO1xyXG4kcmVkOiAjZmYwMDAwO1xyXG4kcmVkLWxpZ2h0OiAjZmZlZmVmO1xyXG5cclxuJGdyYXk6ICRncmF5LTUwMDtcclxuJGdyYXktZGFyazogJGdyYXktNjAwO1xyXG4kZ3JheS1saWdodDogJGdyYXktNDAwO1xyXG5cclxuJGNvbG9yczogKCk7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnYmx1ZSc6ICRibHVlLFxyXG4gICAgJ2JsdWUtbGlnaHQnOiAkYmx1ZS1saWdodCxcclxuICAgICdibHVlLXdoaXRlJzogJGJsdWUtd2hpdGUsXHJcbiAgICAnb3JhbmdlJzogJG9yYW5nZSxcclxuICAgICdvcmFuZ2UtZGFyayc6ICRvcmFuZ2UtZGFyayxcclxuICAgICdvcmFuZ2UtbGlnaHQnOiAkb3JhbmdlLWxpZ2h0LFxyXG4gICAgJ3llbGxvdyc6ICR5ZWxsb3csXHJcbiAgICAnZ3JlZW4nOiAkZ3JlZW4sXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAkZ3JlZW4tbGlnaHQsXHJcbiAgICAncmVkJzogJHJlZCxcclxuICAgICdyZWQtbGlnaHQnOiAkcmVkLWxpZ2h0LFxyXG4gICAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICAgJ2JsYWNrLWxpZ2h0JzogJGdyYXktNzAwLFxyXG4gICAgJ2dyYXknOiAkZ3JheS01MDAsXHJcbiAgICAnZ3JheS1kYXJrJzogJGdyYXktNjAwLFxyXG4gICAgJ2dyYXktbGlnaHQnOiAkZ3JheS00MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJHNlY29uZGFyeTogJGJsdWU7XHJcbiRzdWNjZXNzOiAkZ3JlZW47XHJcbiRpbmZvOiAkYmx1ZS1saWdodDtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcbiRkYW5nZXI6ICRyZWQ7XHJcbiRsaWdodDogJGdyYXktNTAwO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCk7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAncHJpbWFyeSc6ICRwcmltYXJ5LFxyXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXHJcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxyXG4gICAgJ2luZm8nOiAkaW5mbyxcclxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXHJcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcclxuICAgICdsaWdodCc6ICRsaWdodCxcclxuICAgICdkYXJrJzogJGRhcmssXHJcbiAgICAnd2hpdGUnOiAkd2hpdGUsXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyAkdGV4dC1jb2xvcnM6ICgpO1xyXG4vLyAkdGV4dC1jb2xvcnM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICAnZGVmYXVsdCc6ICRibGFjayxcclxuLy8gICAgICdsb3ctY29udHJhc3QnOiAkZ3JheS02MDAsXHJcbi8vICAgICAnaW5mbyc6ICRncmF5LTUwMCxcclxuLy8gICAgICdlcnJvcic6ICRyZWQsXHJcbi8vICAgICAnbGluayc6ICRibHVlLFxyXG4vLyAgICAgJ2JhbGFuY2UnOiAkZ3JlZW4sXHJcbi8vICAgICAnYmFsYW5jZS1jb2lucyc6ICRncmVlbi1saWdodCxcclxuLy8gICApLFxyXG4vLyAgICR0ZXh0LWNvbG9yc1xyXG4vLyApO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgLy8gMHB4XHJcbiAgICAxOiAkc3BhY2VyICogMC4yNSxcclxuICAgIC8vIDRweCB4eHMsXHJcbiAgICAyOiAkc3BhY2VyICogMC41LFxyXG4gICAgLy8gOHB4IHhzLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIC8vIDE2cHggc21cclxuICAgIDQ6ICRzcGFjZXIgKiAxLjUsXHJcbiAgICAvLyAyNHB4IG1kLFxyXG4gICAgNTogJHNwYWNlciAqIDIsXHJcbiAgICAvLyAzMnB4IGxnLFxyXG4gICAgNjogJHNwYWNlciAqIDIuNSxcclxuICAgIC8vIDQwcHggeGwsXHJcbiAgICA3OiAkc3BhY2VyICogMy41LFxyXG4gICAgLy8gNTZweCB4eGxcclxuICAgIDg6ICRzcGFjZXIgKiA0LFxyXG4gICAgLy8gNjRweCB4eGxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAkd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAkZGFyaztcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogJG9yYW5nZS1kYXJrO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG4vL1xyXG4vLyBTdHlsZSBwIGVsZW1lbnQuXHJcblxyXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA2NzBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTkyMHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMzBweDtcclxuJGdyaWQtcm93LWNvbHVtbnM6IDY7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbWQ6IHJlbXkoMTIpO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMi41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4ycmVtO1xyXG5cclxuLy8gTDBcclxuJGJveC1zaGFkb3cteHM6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEwxXHJcbiRib3gtc2hhZG93LXNtOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwyXHJcbiRib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDNcclxuJGJveC1zaGFkb3ctbGc6IDBweCAxNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDRcclxuJGJveC1zaGFkb3cteGw6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4kdHJhbnNpdGlvbi1mYWRlOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuJHRyYW5zaXRpb24tY29sbGFwc2U6IGhlaWdodCAwLjM1cyBlYXNlO1xyXG4kdHJhbnNpdGlvbi1tYXgtaGVpZ2h0OiBhbGwgMC42cyBlYXNlO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0OyAvLyAxNHB4XHJcbiRmb250LXNpemUteHM6IHJlbXkoMTIpO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogcmVteSgzMCk7XHJcbiRoMi1mb250LXNpemU6IHJlbXkoMjYpO1xyXG4kaDMtZm9udC1zaXplOiByZW15KDI0KTtcclxuJGg0LWZvbnQtc2l6ZTogcmVteSgyMik7XHJcbiRoNS1mb250LXNpemU6IHJlbXkoMjApO1xyXG4kaDYtZm9udC1zaXplOiByZW15KDE4KTtcclxuXHJcbiRoMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDMwcHgsXHJcbiAgc206IDM2cHgsXHJcbiAgbWQ6IDQ4cHgsXHJcbiAgbGc6IDQ4cHgsXHJcbiAgeGw6IDYwcHgsXHJcbik7XHJcblxyXG4vLyBoMiBzaXplc1xyXG4kaDItZm9udC1zaXplczogKFxyXG4gIHhzOiAyNnB4LFxyXG4gIHNtOiAzMHB4LFxyXG4gIG1kOiA0MHB4LFxyXG4gIGxnOiA0NHB4LFxyXG4gIHhsOiA1NHB4LFxyXG4pO1xyXG5cclxuLy8gaDMgc2l6ZXNcclxuJGgzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjRweCxcclxuICBzbTogMjZweCxcclxuICBtZDogMzJweCxcclxuICBsZzogMzZweCxcclxuICB4bDogNDRweCxcclxuKTtcclxuXHJcbi8vIGg0IHNpemVzXHJcbiRoNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIycHgsXHJcbiAgc206IDI0cHgsXHJcbiAgbWQ6IDI0cHgsXHJcbiAgbGc6IDI4cHgsXHJcbiAgeGw6IDI4cHgsXHJcbik7XHJcblxyXG4vLyBoNSBzaXplc1xyXG4kaDUtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMHB4LFxyXG4gIHNtOiAyMnB4LFxyXG4gIG1kOiAyMnB4LFxyXG4gIGxnOiAyNHB4LFxyXG4gIHhsOiAyNHB4LFxyXG4pO1xyXG5cclxuLy8gaDYgc2l6ZXNcclxuJGg2LWZvbnQtc2l6ZXM6IChcclxuICB4czogMThweCxcclxuICBzbTogMThweCxcclxuICBtZDogMThweCxcclxuICBsZzogMjBweCxcclxuICB4bDogMjBweCxcclxuKTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGluZ3MtY29sb3I6IG51bGw7XHJcblxyXG4kcDAtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMThweCxcclxuICBsZzogMThweCxcclxuICB4bDogMThweCxcclxuKTtcclxuXHJcbiRwMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE0cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMnB4LFxyXG4gIHNtOiAxMnB4LFxyXG4gIG1kOiAxNHB4LFxyXG4gIGxnOiAxNHB4LFxyXG4gIHhsOiAxNHB4LFxyXG4pO1xyXG5cclxuJHA0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMTBweCxcclxuICBzbTogMTBweCxcclxuICBtZDogMTJweCxcclxuICBsZzogMTJweCxcclxuICB4bDogMTJweCxcclxuKTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6ICRmb250LXNpemUteHM7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRhYmxlc1xyXG4vLyAvL1xyXG4vLyAvLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vIC8vXHJcbi8vIC8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDFyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiByZW15KDEpO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxLjJyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDIuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcbiRidG4td2hpdGUtc3BhY2U6IG51bGw7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogOHB4O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gLy8gRm9ybXNcclxuXHJcbi8vICRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW15KDIwKTtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZGFyaztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuXHJcbiRpbnB1dC1mb2N1cy1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbi8vICRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMS4yNXJlbTsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnOiAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGdyYXktODAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZChcclxuICAxZW0gKiAwLjc1LFxyXG4gICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogMC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggK1xyXG4gICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmdcclxuKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXRleHQ6IChcclxuLy8gICBlbjogXCJCcm93c2VcIlxyXG4vLyApICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB2YWxpZGF0aW9uXHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcclxuLy8gLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICBcInZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgICBcImludmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgKSxcclxuLy8gICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4vLyApO1xyXG5cclxuLy8gLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vLyAvL1xyXG4vLyAvLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuLy8gJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdnNcclxuXHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZiYXJcclxuXHJcbi8vICRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAvLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuLy8gJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRkcm9wZG93bi1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRkcm9wZG93bi1iZzogJHdoaXRlO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xNSk7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRkcm9wZG93bi1ib3JkZXItcmFkaXVzLFxyXG4gICRkcm9wZG93bi1ib3JkZXItd2lkdGhcclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktMjAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC4yNXJlbTtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyAvLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNnJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMS41cmVtO1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogMS4yNTtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRncmF5LTgwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4vLyAvLyBKdW1ib3Ryb25cclxuXHJcbi8vICRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcmRzXHJcblxyXG4vLyAkY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuLy8gJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb29sdGlwc1xyXG5cclxuLy8gJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogMjQ2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4yKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRwb3BvdmVyLWJvcmRlci1yYWRpdXMsXHJcbiAgJHBvcG92ZXItYm9yZGVyLXdpZHRoXHJcbikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICRib3gtc2hhZG93LXhsICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuXHJcbi8vICRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvYXN0c1xyXG5cclxuLy8gJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogcmVteSgxMik7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwO1xyXG4vLyAkYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAwLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbTtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLW1kO1xyXG5cclxuLy8gJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xyXG4vLyAkYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcclxuLy8gLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxyXG4vLyAvLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXHJcbi8vICRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuNzVyZW07XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuLy8gJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IG5vbmU7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjc7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS41cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6IDEwNDRweDtcclxuLy8gJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGVydHNcclxuLy8gLy9cclxuLy8gLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4vLyAkYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4vLyAkcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBMaXN0IGdyb3VwXHJcblxyXG4vLyAkbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4vLyAkdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRmlndXJlc1xyXG5cclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xyXG4vLyAkZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCcmVhZGNydW1ic1xyXG5cclxuLy8gJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJvdXNlbFxyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gLy8gU3Bpbm5lcnNcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2xvc2VcclxuXHJcbi8vICRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDb2RlXHJcblxyXG4vLyAkY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcclxuLy8gJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVXRpbGl0aWVzXHJcblxyXG4vLyAkZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XHJcbi8vICRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcclxuLy8gJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcmludGluZ1xyXG5cclxuLy8gJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XHJcbi8vICRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyBKeXNhbiBWYXJpYWJsZXNcclxuXHJcbkBmdW5jdGlvbiBzcGFjZSgkc2l6ZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkc3BhY2VycywgJGtleTogJHNpemUpO1xyXG59XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNjJweDtcclxuJGhlYWRlci1oZWlnaHQtbWQ6IDEwMHB4O1xyXG4kaGVhZGVyLXdpZHRoOiAyODBweDtcclxuXHJcbiRidG4tbWluLXdpZHRoOiAxNjRweDtcclxuXHJcbi8vIEotaW5wdXRcclxuJGotaW5wdXQtZm9udC1zaXplOiAxcmVtO1xyXG4kai1pbnB1dC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XHJcbiRqLWlucHV0LWZvbnQtc3R5bGU6IG5vcm1hbDtcclxuJGotaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG5cclxuJGotaW5wdXQtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteTogMTcuNXB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXg6IDIwcHg7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItd2lkdGg6IDFweDtcclxuJGotaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kai1pbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodDtcclxuJGotaW5wdXQtdGV4dC1jb2xvcjogJGJsYWNrO1xyXG4kai1pbnB1dC1tYXNrLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtaWNvbi1jb2xvcjogJG9yYW5nZTtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtdGV4dC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWVycm9yOiAkcmVkLWxpZ2h0O1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZGlzYWJsZWQ6ICRpbnB1dC1kaXNhYmxlZC1iZzsgLy8gZnJvbSBmaWdtYSBwcmltaXRpdmVzIHNob3VsZCBiZSBncmF5LTIwMFxyXG5cclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wOiAkai1pbnB1dC1wYWRkaW5nLXkgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcC1hY3RpdmU6IDEwcHg7XHJcbiRqLWlucHV0LWxpbmstcG9zaXRpb24tdG9wOiAxNnB4O1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0OiAkai1pbnB1dC1wYWRkaW5nLXggKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAkai1pbnB1dC1saW5lLWhlaWdodDtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1wYWRkaW5nLXRvcDogMjdweDtcclxuJGotaW5wdXQtcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiRqLWlucHV0LW1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItcG9zaXRpb246ICRqLWlucHV0LXBhZGRpbmctdG9wICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1jaGFyLWxlbmd0aDogOC45OXB4O1xyXG5cclxuJGotaW5wdXQtYnV0dG9uLXBvc2l0aW9uOiAyMHB4O1xyXG4kai1pbnB1dC1zaGFkb3ctcG9zaXRpb246ICRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ7XHJcblxyXG4kai1pbnB1dC1sYWJlbC16LWluZGV4OiAwO1xyXG4kai1pbnB1dC1zaGFkb3ctei1pbmRleDogMTtcclxuJGotaW5wdXQtei1pbmRleDogMjtcclxuJGotaW5wdXQtbGluay16LWluZGV4OiAzO1xyXG4kai1pbnB1dC1idXR0b24tei1pbmRleDogNDtcclxuXHJcbiRib3gtc2hhZG93LXRvLXRvcC1sZzogMCAtMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlO1xyXG4iXX0= */";

/***/ }),

/***/ 55739:
/*!***********************************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-error-modal/conversion-error-modal.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzaW9uLWVycm9yLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 73240:
/*!***************************************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-success-modal/conversion-success-modal.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzaW9uLXN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 46224:
/*!**************************************************************************************!*\
  !*** ./src/app/conversion/conversion-form/conversion-form.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n    <form [formGroup]=\"conversionForm\"\r\n          class=\"conversion\">\r\n        <div class=\"conversion__main\">\r\n            <div class=\"conversion__from\">\r\n                <h5 class=\"mb-3\"\r\n                    translate>CONVERSION.FROM.TITLE</h5>\r\n                <div class=\"form-group\">\r\n                    <j-account-dropdown #fromDropdown\r\n                                        [hasError]=\"f.from.invalid && isSubmitted\"\r\n                                        [isLoading]=\"isAccountsLoading\"\r\n                                        [accounts]=\"fromAccounts\"\r\n                                        [isDisabledSelectable]=\"true\"\r\n                                        (selected)=\"onFromSelect($event)\"\r\n                                        label=\"CONVERSION.FROM.LABEL\"></j-account-dropdown>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <j-amount-input label=\"CONVERSION.AMOUNT\"\r\n                                    [hasError]=\"f.fromAmount.invalid && isSubmitted || fromAmountError\"\r\n                                    [formControl]=\"f.fromAmount\"\r\n                                    [errorText]=\"fromAmountError\"\r\n                                    [isDisabled]=\"f.fromAmount.disabled\"\r\n                                    [currency]=\"fromCurrency\">\r\n                    </j-amount-input>\r\n                </div>\r\n            </div>\r\n            <div class=\"conversion__arrows\">\r\n                <button (click)=\"reverseAccounts()\"\r\n                        [disabled]=\"!isRateShown\"\r\n                        [inlineSVG]=\"'/assets/icons/conversion/arrows.svg'\">\r\n                </button>\r\n            </div>\r\n            <div class=\"conversion__to\">\r\n                <h5 class=\"mb-3\"\r\n                    translate>CONVERSION.TO.TITLE</h5>\r\n                <div class=\"form-group\">\r\n                    <j-account-dropdown #toDropdown\r\n                                        [isLoading]=\"isAccountsLoading\"\r\n                                        [hasError]=\"f.to.invalid && isSubmitted\"\r\n                                        [accounts]=\"toAccounts\"\r\n                                        [isDisabledSelectable]=\"true\"\r\n                                        (selected)=\"onToSelect($event)\"\r\n                                        label=\"CONVERSION.TO.LABEL\"></j-account-dropdown>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <j-amount-input label=\"CONVERSION.AMOUNT\"\r\n                                    [hasError]=\"f.toAmount.invalid && isSubmitted\"\r\n                                    [formControl]=\"f.toAmount\"\r\n                                    [isDisabled]=\"f.toAmount.disabled\"\r\n                                    [currency]=\"toCurrency\">\r\n                    </j-amount-input>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"conversion__rates\">\r\n            <div class=\"p3 text-muted\">\r\n                <span translate>CONVERSION.COMMISSION</span>:\r\n                <j-money *ngIf=\"commission\"\r\n                         [money]=\"commission\"></j-money>\r\n                <span *ngIf=\"!commission\"\r\n                      [translate]=\"'CONVERSION.COMMISSION_FALLBACK'\"></span>\r\n            </div>\r\n            <h6 class=\"d-inline-flex align-items-center\"\r\n                *ngIf=\"isRateShown && !hasAccountFromRateError && !hasAccountToRateError\">\r\n                <span class=\"text-muted conversion__rate-label\"\r\n                      translate>CONVERSION.RATE</span>:\r\n                <span [jLoading]=\"isRateLoading\"\r\n                      [jLoadingInverted]=\"true\"\r\n                      class=\"ml-2 conversion__rate text-dark\">\r\n                    <ng-container *ngIf=\"!isRateLoading\">\r\n                        <j-money [showAllDecimals]=\"true\"\r\n                                 [money]=\"rateFrom\"></j-money>\r\n                        =\r\n                        <j-money [showAllDecimals]=\"true\"\r\n                                 [money]=\"rateTo\"></j-money>\r\n                    </ng-container>\r\n                </span>\r\n            </h6>\r\n            <div class=\"p3 text-muted mt-2\"\r\n                 *ngIf=\"hasAccountFromRateError || hasAccountToRateError\">\r\n                <div>{{rateErrorDescription ? rateErrorDescription : 'CONVERSION.RATE_ERROR'| translate}}</div>\r\n                <a href=\"#\"\r\n                   class=\"link\"\r\n                   (click)=\"updateRate($event)\"\r\n                   translate>CONVERSION.RATE_RETRY</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"conversion__details\">\r\n            <h5 class=\"mb-3\"\r\n                translate>CONVERSION.DETAILS.TITLE</h5>\r\n            <div class=\"conversion__details-row\">\r\n                <j-input label=\"CONVERSION.DETAILS.DOCUMENT_NUMBER\"\r\n                         [formControl]=\"f.documentNumber\"\r\n                         [hasError]=\"f.documentNumber.invalid && isSubmitted\"\r\n                         [isClearable]=\"false\"></j-input>\r\n                <j-dropdown-input #purposeDropdown\r\n                                  [options]=\"purposeList\"\r\n                                  [hasError]=\"f.purpose.invalid && isSubmitted\"\r\n                                  (selected)=\"onPurposeSelect($event)\"\r\n                                  label=\"CONVERSION.DETAILS.PURPOSE\">\r\n                    <ng-template #selectedTemplate\r\n                                 let-selectedPurpose>\r\n                        <span class=\"text-truncate\">\r\n                            {{ getItemCode(selectedPurpose) }} - {{ getItemDescription(selectedPurpose) }}\r\n                        </span>\r\n                    </ng-template>\r\n\r\n                    <ng-template #optionTemplate\r\n                                 let-purpose>\r\n                        <div class=\"py-2\">\r\n                            <strong>{{ getItemCode(purpose) }}</strong>\r\n                            <span> - </span>\r\n                            <span>{{ getItemDescription(purpose) }}</span>\r\n                        </div>\r\n                    </ng-template>\r\n                </j-dropdown-input>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <j-account-dropdown #commissionAccountDropdown\r\n                                    [isLoading]=\"isAccountsLoading\"\r\n                                    [accounts]=\"accounts\"\r\n                                    [isDisabledSelectable]=\"true\"\r\n                                    (selected)=\"onCommissionAccountSelect($event)\"\r\n                                    label=\"CONVERSION.COMMISSION_ACCOUNT\"></j-account-dropdown>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <j-input label=\"CONVERSION.DETAILS.DESCRIPTION\"\r\n                         type=\"textarea\"\r\n                         [inputExtra]=\"descriptionLengthMessage$ | async\"\r\n                         [formControl]=\"f.description\"\r\n                         [hasError]=\"f.description.invalid && isSubmitted\"\r\n                         [errorText]=\"mapDescriptionErrors()\"\r\n                         [maxLength]=\"descriptionMaxLength\"\r\n                         [isClearable]=\"false\"></j-input>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-footer\"\r\n             *ngIf=\"isEditing\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-outline-primary\"\r\n                    translate\r\n                    [jLoadingInverted]=\"true\"\r\n                    [disabled]=\"isRateLoading || isSubmitting\"\r\n                    [jLoading]=\"isSubmitting\"\r\n                    (click)=\"edit()\">CONVERSION.SAVE</button>\r\n        </div>\r\n        <div class=\"form-footer\"\r\n             *ngIf=\"!isEditing\">\r\n            <ng-container *ngIf=\"canSendAndSign\">\r\n                <button type=\"button\"\r\n                        [disabled]=\"isRateLoading || isSubmitting\"\r\n                        [jLoading]=\"isSubmitting\"\r\n                        [jLoadingInverted]=\"true\"\r\n                        class=\"btn btn-link\"\r\n                        (click)=\"createOnly()\">\r\n                    <span class=\"d-inline-block mr-2\"\r\n                          [inlineSVG]=\"'/assets/icons/conversion/sign.svg'\"></span>\r\n                    <span translate>\r\n                        CONVERSION.FOR_SIGN\r\n                    </span>\r\n                </button>\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary ml-3\"\r\n                        [disabled]=\"isRateLoading || isSubmitting\"\r\n                        [jLoading]=\"isSubmitting\"\r\n                        translate\r\n                        (click)=\"createAndSign()\">CONVERSION.SIGN</button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"canSendOnly\">\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary ml-3\"\r\n                        translate\r\n                        [disabled]=\"isRateLoading || isSubmitting\"\r\n                        [jLoading]=\"isSubmitting\"\r\n                        (click)=\"createOnly()\">\r\n                    <span class=\"d-inline-block mr-2\"\r\n                          [inlineSVG]=\"'/assets/icons/conversion/sign.svg'\"></span>\r\n                    <span translate>\r\n                        CONVERSION.FOR_SIGN\r\n                    </span>\r\n                </button>\r\n            </ng-container>\r\n        </div>\r\n    </form>\r\n</ng-container>\r\n";

/***/ }),

/***/ 13531:
/*!*****************************************************************!*\
  !*** ./src/app/conversion/conversion.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<f-page closePosition=\"outside\"\n        colsClassList=\"offset-lg-1 col-lg-10 offset-xl-2 col-xl-8\"\n        headerClassList=\"bg-white\"\n        (closed)=\"onClose()\">\n    <f-page-header>\n        <section class=\"account-header\">\n            <h1 class=\"f-page-title\"\n                translate>CONVERSION.TITLE</h1>\n        </section>\n    </f-page-header>\n    <f-page-body>\n        <j-conversion-form></j-conversion-form>\n    </f-page-body>\n</f-page>";

/***/ }),

/***/ 26711:
/*!***********************************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-error-modal/conversion-error-modal.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\"></div>\n<div class=\"modal-body px-4 pt-0 pb-4 text-center \">\n    <img src=\"/assets/img/history/modals/error.svg\"\n         alt=\"{{ 'SHARED.ERROR' | translate }}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">SHARED.ERROR</h3>\n    <p class=\"m-0 text-muted\">\n        <span translate>{{ description }}</span>\n    </p>\n    <p *ngIf=\"errorText\"\n       class=\"mt-3 mb-0 text-danger\"\n       [innerHTML]=\"errorText\">\n    </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        SHARED.TRY_AGAIN\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        SHARED.BACK_TO_HOME\n    </button>\n</div>";

/***/ }),

/***/ 17065:
/*!***************************************************************************************************************!*\
  !*** ./src/app/conversion/modals/conversion-success-modal/conversion-success-modal.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\"></div>\n<div class=\"modal-body j-modal-body text-center pb-4\">\n    <img src=\"/assets/img/history/modals/success.svg\">\n    <p class=\"p2 mb-0 mt-4 text-muted\">\n        <j-money [money]=\"fromBalance\"\n                 [showAllDecimals]=\"true\"></j-money>\n    </p>\n    <img src=\"/assets/icons/conversion/modal-success-arrow.svg\">\n    <h3>\n        <j-money [money]=\"toBalance\"\n                 [showAllDecimals]=\"true\"></j-money>\n    </h3>\n    <p class=\"p2 mb-0\">{{ description | translate }}</p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        CONVERSION.NAVIGATE_TO_HISTORY\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        SHARED.BACK_TO_HOME\n    </button>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_conversion_conversion_module_ts.js.map