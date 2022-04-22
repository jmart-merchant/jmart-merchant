"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_payments_payments_module_ts"],{

/***/ 51476:
/*!********************************************!*\
  !*** ./src/app/payments/config/amounts.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SALARY_EMPLOYEE_MIN_AMOUNT": () => (/* binding */ SALARY_EMPLOYEE_MIN_AMOUNT),
/* harmony export */   "SALARY_EMPLOYEE_MAX_AMOUNT": () => (/* binding */ SALARY_EMPLOYEE_MAX_AMOUNT),
/* harmony export */   "SOCIAL_EMPLOYEE_MIN_AMOUNT": () => (/* binding */ SOCIAL_EMPLOYEE_MIN_AMOUNT),
/* harmony export */   "SOCIAL_EMPLOYEE_MAX_AMOUNT": () => (/* binding */ SOCIAL_EMPLOYEE_MAX_AMOUNT),
/* harmony export */   "PENSION_EMPLOYEE_MIN_AMOUNT": () => (/* binding */ PENSION_EMPLOYEE_MIN_AMOUNT),
/* harmony export */   "PENSION_EMPLOYEE_MAX_AMOUNT": () => (/* binding */ PENSION_EMPLOYEE_MAX_AMOUNT),
/* harmony export */   "MEDICAL_EMPLOYEE_MIN_AMOUNT": () => (/* binding */ MEDICAL_EMPLOYEE_MIN_AMOUNT),
/* harmony export */   "MEDICAL_EMPLOYEE_MAX_AMOUNT": () => (/* binding */ MEDICAL_EMPLOYEE_MAX_AMOUNT)
/* harmony export */ });
const SALARY_EMPLOYEE_MIN_AMOUNT = 0.01;
const SALARY_EMPLOYEE_MAX_AMOUNT = null;
const SOCIAL_EMPLOYEE_MIN_AMOUNT = 2100;
const SOCIAL_EMPLOYEE_MAX_AMOUNT = null;
const PENSION_EMPLOYEE_MIN_AMOUNT = 6000;
const PENSION_EMPLOYEE_MAX_AMOUNT = null;
const MEDICAL_EMPLOYEE_MIN_AMOUNT = 4200;
const MEDICAL_EMPLOYEE_MAX_AMOUNT = null;


/***/ }),

/***/ 38314:
/*!**********************************************************************************!*\
  !*** ./src/app/payments/containers/budget-payments/budget-payments.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetPaymentsComponent": () => (/* binding */ BudgetPaymentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _budget_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-payments.component.html?ngResource */ 67531);
/* harmony import */ var _budget_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget-payments.component.scss?ngResource */ 90050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _payments_payments_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/payments-routes */ 38114);
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations */ 73510);
/* harmony import */ var _shared_animations_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/helpers */ 87263);







let BudgetPaymentsComponent = class BudgetPaymentsComponent extends _shared_animations_helpers__WEBPACK_IMPORTED_MODULE_4__.RouterSlideAnimation {
    constructor() {
        super();
        this.routes = _payments_payments_routes__WEBPACK_IMPORTED_MODULE_2__.paymentsRoutes;
    }
};
BudgetPaymentsComponent.ctorParameters = () => [];
BudgetPaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'j-budget-payments',
        template: _budget_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_3__.routeTransitionAnimations],
        styles: [_budget_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BudgetPaymentsComponent);



/***/ }),

/***/ 98018:
/*!************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payment/currency-payment.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPaymentComponent": () => (/* binding */ CurrencyPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currency_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-payment.component.html?ngResource */ 61600);
/* harmony import */ var _currency_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-payment.component.scss?ngResource */ 21011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 61745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/masked/masked */ 31475);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes */ 39843);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/validators */ 88228);
/* harmony import */ var _shared_services_payment_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/payment-validators */ 47755);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _company_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @company/index */ 98316);
/* harmony import */ var _conversion_conversion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @conversion/conversion.service */ 57720);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _contracts_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @contracts/services */ 74466);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @payments/components */ 58886);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @payments/services */ 7500);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _base_payment_container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../base-payment.container */ 15695);
/* harmony import */ var _components_foreign_contracts_recipients_dictionary_foreign_contracts_recipients_dictionary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/foreign-contracts-recipients-dictionary/foreign-contracts-recipients-dictionary.component */ 84722);
/* harmony import */ var _components_aml_main_modal_aml_main_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/aml-main-modal/aml-main-modal.component */ 60348);
/* harmony import */ var _components_aml_warning_modal_aml_warning_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/aml-warning-modal/aml-warning-modal.component */ 29616);

































var BANKS;
(function (BANKS) {
    BANKS["JYSAN"] = "TSESKZKA";
})(BANKS || (BANKS = {}));
const NO_DECIMALS_CURRENCY = _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.JPY;
const RUSSIAN_PURPOSE_LENGTH = 203;
const CHINA_PURPOSE_LENGTH = 300;
const CURRENCY_PURPOSE_LENGTH = 335;
const AUSTRALIA_AUD_NAME_MAX_LENGTH = 35;
const AUSTRALIA_AUD_CITY_MAX_LENGTH = 26;
const AUSTRALIA_NON_AUD_NAME_MAX_LENGTH = 35;
const AUSTRALIA_NON_AUD_CITY_MAX_LENGTH = 31;
const RUB_NON_RUSSIA_NAME_MAX_LENGTH = 35;
const RUB_NON_RUSSIA_CITY_MAX_LENGTH = 32;
const NAME_MAX_LENGTH_DEFAULT = 103;
const CITY_MAX_LENGTH_DEFAULT = 32;
const RUB_IBAN_LENGTH = 20;
const RUSSIAN_BUDGET_START_INDEX = '0';
const KNP_WITHOUT_CONTRACT = ['342', '343', '314', '312'];
// const RUSSIAN_BUDGET_MIDDLE_INDEX = '643';
const RUSSIAN_NON_BUDGET_MIDDLE_INDEX = '810';
const CONTAINS_LATIN_WORDS_REGEX = new RegExp(/(([a-zA-Z]{1}[a-zA-Z0-9\/\-?:().,\'+\ ]+)|([a-zA-Z]{1}))+/g);
const IS_RUSSIAN_NON_BUDGET_IBAN_MIDDLE_INDEX = (iban) => {
    if (!iban) {
        return false;
    }
    return iban.substring(5, 8) !== RUSSIAN_NON_BUDGET_MIDDLE_INDEX;
};
const IS_RUSSIAN_BUDGET_BIC_MIDDLE_INDEX = (bic) => {
    if (!bic) {
        return false;
    }
    return ['000', '001', '002'].includes(bic.substring(6, 9));
};
const IS_RUSSIAN_BUDGET_IBAN_START_INDEX = (iban) => {
    if (!iban) {
        return false;
    }
    return iban[0] === RUSSIAN_BUDGET_START_INDEX;
};
const RUB_KIO_VALIDATOR = (control) => {
    var _a, _b, _c;
    if (!control.value) {
        return null;
    }
    if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) !== 5 &&
        ((_b = control.value) === null || _b === void 0 ? void 0 : _b.length) !== 10 &&
        ((_c = control.value) === null || _c === void 0 ? void 0 : _c.length) !== 12) {
        return {
            lengthMismatch: true,
        };
    }
    return null;
};
const RUB_IBAN_VALIDATOR = (control, bic) => {
    const numericRegex = new RegExp('^[0-9]+$');
    if (control.value && !control.value.match(numericRegex)) {
        return {
            rubInvalidNumbers: true,
        };
        // }
        // else if (
        //   control.value &&
        //   control.value.length > 8 &&
        //   control.value[0] === RUSSIAN_BUDGET_START_INDEX &&
        //   control.value.substring(5, 8) === RUSSIAN_BUDGET_MIDDLE_INDEX &&
        //   isRussianBudgetDisabled
        // ) {
        //   return {
        //     rubBudgetDisabled: true,
        //   };
    }
    else if (control.value &&
        bic &&
        !IS_RUSSIAN_BUDGET_IBAN_START_INDEX(control.value) &&
        IS_RUSSIAN_BUDGET_BIC_MIDDLE_INDEX(bic)) {
        return {
            rubInvalidBudget: true,
        };
    }
    else if (control.value &&
        bic &&
        control.value.length > 8 &&
        !IS_RUSSIAN_BUDGET_IBAN_START_INDEX(control.value) &&
        IS_RUSSIAN_NON_BUDGET_IBAN_MIDDLE_INDEX(control.value)) {
        return {
            rubInvalid: true,
        };
    }
    else if (control.value && control.value.length !== RUB_IBAN_LENGTH) {
        return {
            rubLength: true,
        };
    }
    return null;
};
const DEFAULT_IBAN_VALIDATOR = (control, country) => {
    var _a, _b;
    const isIban = (_a = control.value) === null || _a === void 0 ? void 0 : _a.substring(0, 2).match(/[A-Za-z]{2}/);
    if (country &&
        isIban &&
        ((_b = control.value) === null || _b === void 0 ? void 0 : _b.substring(0, 2).toUpperCase()) !==
            (country === null || country === void 0 ? void 0 : country.substring(0, 2).toUpperCase())) {
        return {
            currencyMismatch: true,
        };
    }
    return null;
};
const RUB_NON_RUSSIA_IBAN_VALIDATOR = (control) => {
    const numericRegex = new RegExp('^[0-9]+$');
    if (control.value && !control.value.match(numericRegex)) {
        return {
            rubInvalidNumbers: true,
        };
        // }
        // else if (
        //   control.value &&
        //   control.value.length > 8 &&
        //   control.value[0] === RUSSIAN_BUDGET_START_INDEX &&
        //   control.value.substring(5, 8) === RUSSIAN_BUDGET_MIDDLE_INDEX &&
        //   isRussianBudgetDisabled
        // ) {
        //   return {
        //     rubBudgetDisabled: true,
        //   };
        // } else if (control.value && !IS_RUSSIAN_BUDGET_IBAN_START_INDEX(control.value)) {
        // return {
        // rubInvalidBudget: true,
        // };
    }
    else if (control.value &&
        control.value.length > 8 &&
        !IS_RUSSIAN_BUDGET_IBAN_START_INDEX(control.value) &&
        IS_RUSSIAN_NON_BUDGET_IBAN_MIDDLE_INDEX(control.value)) {
        return {
            rubInvalid: true,
        };
    }
    else if (control.value && control.value.length !== RUB_IBAN_LENGTH) {
        return {
            rubLength: true,
        };
    }
    return null;
};
let CurrencyPaymentComponent = class CurrencyPaymentComponent extends _base_payment_container__WEBPACK_IMPORTED_MODULE_20__.BasePaymentContainer {
    constructor(companyService, paymentsService, maskService, route, router, api, dictionaries, translateService, authorityPermissionsService, modalService, pipelines, paymentsFormsFactory, maskPipe, recipientsService, featureFlagsService, bankFromAccount, accountsService, currencyPaymentService, curSymbolPipe, conversionService, contractsModalsService) {
        super(paymentsFormsFactory.createCurrencyForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipelines, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.companyService = companyService;
        this.paymentsService = paymentsService;
        this.maskService = maskService;
        this.route = route;
        this.router = router;
        this.api = api;
        this.dictionaries = dictionaries;
        this.translateService = translateService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.modalService = modalService;
        this.pipelines = pipelines;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.maskPipe = maskPipe;
        this.recipientsService = recipientsService;
        this.featureFlagsService = featureFlagsService;
        this.bankFromAccount = bankFromAccount;
        this.accountsService = accountsService;
        this.currencyPaymentService = currencyPaymentService;
        this.curSymbolPipe = curSymbolPipe;
        this.conversionService = conversionService;
        this.contractsModalsService = contractsModalsService;
        this.nameMaxLength = NAME_MAX_LENGTH_DEFAULT;
        this.cityMaxLength = CITY_MAX_LENGTH_DEFAULT;
        this.paymentCategory = _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.FOREIGN;
        this.isCounterPartyLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(null);
        this.masks = {
            iinOrBin: 'iin',
            bankAccount: 'foreignAccount',
            kbeCode: 'kbe',
            knp: 'knp',
            number: 'paymentNum',
            amount: 'amount',
            name: 'foreignLatin',
            cityName: 'foreignLatin',
            purpose: 'foreignLatin',
            // Russian
            kvo: 'kvo',
            kio: 'kio',
            // Russian budget
            kpp: 'kpp',
            oktmo: 'oktmo',
            paymentBasis: 'basis',
            budgetDocNumber: 'budgetDocNumber',
            budgetPeriod: 'budgetPeriod',
            rubNonRussiaCorrespondentIban: 'russianAccount',
        };
        this.focusEmail$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subject();
        this.prevEmails$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject([]);
        this.fetchingEmailsFor$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(null);
        this.accounts = [];
        this.isAccountsLoading = true;
        this.contracts = [];
        this.filteredContracts = [];
        this.isContractsLoading = false;
        this.isContractSelected = false;
        this.withinContract = false;
        this.isContractsDescriptionShown = false;
        this.isContractsAgreementShown = true;
        this.isContractsDescriptionLoading = false;
        this.contractMaxAmount = {
            amount: 10000,
            currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD,
        };
        // Country
        this.countries = [];
        this.countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject([]);
        // City
        this.hasDefaultCity = false;
        this.isCityShown = false;
        this.cityPlaceholder$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject('CURRENCY_PAYMENT.RECIPIENT.CITY');
        this.isBicRequired = true;
        this.isIntermediaryBankSwitchable = false;
        this.hasIntermediaryBank = false;
        // IBAN
        this.ibanMaxLength = 34;
        // Amount
        this.amountMask = 'separator.2';
        this.amountPlaceholder = '0,00';
        this.amountSuffix = ' ';
        this.isCommissionAccountSelectable = true;
        this.isOurComission = false;
        this.canPayCommission = true;
        this.commissionBalance = null;
        // KVO & KIO
        this.isKppEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.isKioEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.isKvoEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        // codeWord
        this.codeWordLabel$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject('CURRENCY_PAYMENT.RECIPIENT.CODEWORD');
        this.isCodeWordEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        // RUB
        this.isRubNonRussia$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.isRubToRussia$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        // RussianBudget
        this.isRussianBudgetDisabled = false;
        this.isRussianBudget$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.isRussianTaxpayer = false;
        this.kbkList = [];
        this.isKbkLoading = false;
        this.statuses = [];
        this.isStatusesLoading = false;
        this.hasRussianBudgetExtras = false;
        // 10000$ needs contract
        this.isForeignContractDisabled = false;
        // Australian Dollar
        this.isAustraliaAud$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.isAustraliaNonAud$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        // Country Canada
        this.isCountryCanada$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject(false);
        this.rules.purposeLength = CURRENCY_PURPOSE_LENGTH;
        this.isForeignContractDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.FOREIGN_CONTRACT);
        this.featureFlagsService.featureFlags$.subscribe((flags) => {
            this.isForeignContractDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.FOREIGN_CONTRACT);
        });
        this.featureFlagsService
            .checkFeatureRoute(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.FOREIGN_PAYMENT)
            .then(() => {
            this.isRussianBudgetDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.RUB_BUDGET_PAYMENT);
            this.isForeignContractDisabled = this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.FOREIGN_CONTRACT);
        });
    }
    ngOnInit() {
        super.ngOnInit();
        this.accountStore = this.accountsService.store;
        this.dateLimit = this.paymentsService.stdDateRangeNgb;
        this.retrieveKnps();
        this.retrieveAccounts();
        this.retrieveCountries();
        this.retrieveContracts();
        this.retrieveCodeWords();
        this.retrieveKbks();
        this.retrieveStatuses();
        this.createControlsStream(this.form);
        this.getMaskConfig();
        this.listenCommission();
        this.listenCountrySelect();
        this.listenWithinContractSwitch();
        this.listenContractsSwitchDescription();
        this.listenContractSelect();
        this.listenEmailSearch();
        this.listenWorkingDays();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
        this.listenPurpose();
        this.listenPayComission();
        this.listenIntermediaryBankSwitch();
        this.listenIntermediaryBankSwitchable();
        this.listenAmount();
        this.applyAmountValidation();
        this.listenAmountMessage();
        this.setAutoNumeration();
        this.listenCompanyType();
        this.listenIsRussianBudget();
        this.listenIsRussianTaxpayer();
        this.listenHasRussianBudgetExtras();
        this.listenRouterParams();
        this.listenKvo();
        this.listenKio();
        this.listenCodeWordEnabling();
        this.listenCodeWord();
        this.listenCodeWordsList();
        // this.listenShouldEnterCity();
        this.listenRubToNonRussia();
        this.listenRubNonRussiaCorrespondentBank();
        this.listenAudToAustralia();
        this.listenAudNonAustralia();
        this.listenCountryIsCanada();
        this.listenMaxLengths();
        // HOW IT SHOULD BE
        this.applyKbeRules();
        this.applyNameRules();
        this.applyCountryRules();
        this.applyIbanRules();
        // this.applyAmlRules();
    }
    // HOW IT SHOULD BE
    applyKbeRules() {
        this.subs.add(this.controlsStream.withinContract.subscribe((withinContract) => {
            if (withinContract) {
                this.clearValidation([this.form.controls.kbeCode]);
            }
            else {
                this.setValidation([this.form.controls.kbeCode], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _shared_validators__WEBPACK_IMPORTED_MODULE_9__.MiscValidators.kbe]);
            }
        }));
    }
    // AML Check
    applyAmlRules() {
        if (localStorage.getItem('aml-modal-shown')) {
            return;
        }
        localStorage.setItem('aml-modal-shown', 'true');
        this.modalService.open(_components_aml_warning_modal_aml_warning_modal_component__WEBPACK_IMPORTED_MODULE_23__.AmlWarningModalComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_sm',
            backdrop: 'static',
            centered: true,
        });
    }
    // Name Rules
    applyNameRules() {
        const { name } = this.form.controls;
        const { withinContract, senderAccount } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([withinContract, senderAccount])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            var _a;
            const [withinContractValue, senderAccountValue] = values;
            const currency = (_a = senderAccountValue === null || senderAccountValue === void 0 ? void 0 : senderAccountValue.balance) === null || _a === void 0 ? void 0 : _a.currency;
            const prevPristine = name.pristine;
            if (withinContractValue) {
                name.disable();
                this.clearValidation([name]);
                this.masks.name = {
                    mask: null,
                };
            }
            else {
                name.enable();
                this.setValidation([name], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
                if (currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB) {
                    this.masks.name = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.foreignCyrillic;
                }
                else {
                    this.masks.name = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.foreignLatin;
                }
            }
            setTimeout(() => {
                if (prevPristine) {
                    name.markAsPristine();
                }
            }, 0);
        }));
    }
    ibanParams(control) {
        var _a;
        if (!((_a = control === null || control === void 0 ? void 0 : control.errors) === null || _a === void 0 ? void 0 : _a.bankRestricted)) {
            return null;
        }
        return {
            bankName: this.bankFromAccount.transform(control.value, 'name'),
        };
    }
    // Name Events
    onNamePaste(event) {
        event.preventDefault();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData('text');
        const toPasteRaw = pastedText.substring(0, this.nameMaxLength);
        this.form.controls.name.setValue(toPasteRaw);
    }
    // Country Rules
    applyCountryRules() {
        const { countryCode } = this.form.controls;
        const { withinContract, senderAccount, contract } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([withinContract, senderAccount, contract])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            var _a;
            const [withinContractValue, senderAccountValue] = values;
            const currency = (_a = senderAccountValue === null || senderAccountValue === void 0 ? void 0 : senderAccountValue.balance) === null || _a === void 0 ? void 0 : _a.currency;
            const prevPristine = countryCode.pristine;
            if (withinContractValue) {
                countryCode.disable();
                this.clearValidation([countryCode]);
            }
            else {
                countryCode.enable();
                const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required];
                if (currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.CNY) {
                    validators.push((control) => {
                        if (control.value !== _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN) {
                            return { cnyOnlyToChina: true };
                        }
                        return null;
                    });
                }
                this.setValidation([countryCode], validators);
            }
            setTimeout(() => {
                if (prevPristine) {
                    countryCode.markAsPristine();
                }
            }, 0);
        }));
    }
    // Country Events
    onCountrySearch({ term, items }) {
        if (!term) {
            this.countries$.next(this.countries);
            return;
        }
        const filteredCountries = this.countries.filter((country) => {
            return (country.code.toLowerCase().includes(term.toLowerCase()) ||
                country.nameEn.toLowerCase().includes(term.toLowerCase()) ||
                country.nameKk.toLowerCase().includes(term.toLowerCase()) ||
                country.nameRu.toLowerCase().includes(term.toLowerCase()));
        });
        const sortedCountries = filteredCountries.sort((a, b) => {
            return this.countrySorter(a, b, term);
        });
        this.countries$.next(sortedCountries);
    }
    onCountryFocus() {
        if (!this.form.controls.senderAccount.value) {
            this.senderAccountDropdown.hasError = true;
        }
    }
    onCountrySelect(country) {
        this.hasDefaultCity = !!country.defaultCityName;
        this.form.controls.country.setValue(country);
    }
    // Country Dropdown Helpers
    countrySorter(a, b, term) {
        if (a.code.toLowerCase() === term.toLowerCase()) {
            return -1;
        }
        else if (b.code.toLowerCase() === term.toLowerCase()) {
            return 1;
        }
        else if (a.code.toLowerCase().includes(term.toLowerCase())) {
            return -1;
        }
        else if (b.code.toLowerCase().includes(term.toLowerCase())) {
            return 1;
        }
        else {
            switch (this.translateService.currentLang) {
                case 'ru':
                    return a.nameRu < b.nameRu ? -1 : 1;
                case 'en':
                    return a.nameEn < b.nameEn ? -1 : 1;
                case 'kk':
                    return a.nameKk < b.nameKk ? -1 : 1;
                default:
                    return 0;
            }
        }
    }
    countryComparator(query, country) {
        return true;
    }
    mapCountryLabel(country) {
        let countryName;
        switch (this.translateService.currentLang) {
            case 'ru':
            default:
                countryName = country.nameRu;
                break;
            case 'kk':
                countryName = country.nameKk;
                break;
            case 'en':
                countryName = country.nameEn;
                break;
        }
        return `${country.code} - ${countryName || country.name}`;
    }
    // Country Helpers
    get currentCountryCode() {
        var _a, _b, _c;
        const contractCountryCode = ((_c = (_b = (_a = this.formValue.contract) === null || _a === void 0 ? void 0 : _a.contractor) === null || _b === void 0 ? void 0 : _b.country) === null || _c === void 0 ? void 0 : _c.code) || null;
        if (this.formValue.withinContract && contractCountryCode) {
            return contractCountryCode.substring(0, 2);
        }
        if (!this.formValue.withinContract && this.formValue.countryCode) {
            return this.formValue.countryCode.substring(0, 2);
        }
        return null;
    }
    retrieveCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            this.countries = yield this.currencyPaymentService.getCountries();
            this.countries$.next(this.countries);
        });
    }
    // BankAccount (IBAN)
    applyIbanRules() {
        const { senderAccount, country, countryCode, contract, contractId, bank, rubNonRussiaBank, withinContract, } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            senderAccount,
            bank,
            rubNonRussiaBank,
            country,
            countryCode,
            contract,
            contractId,
            withinContract,
            this.countries$,
        ]).subscribe((values) => {
            var _a, _b, _c;
            const [senderAccount, bank, rubNonRussiaBank] = values;
            const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required];
            const asyncValidators = [
                _shared_services_payment_validators__WEBPACK_IMPORTED_MODULE_10__.PaymentAsyncValidators.externalIbanRestricted(this.dictionaries),
            ];
            const senderCurrency = (_b = (_a = senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency;
            const currentCountryCode = this.currentCountryCode;
            const prevPristine = this.form.controls.bankAccount.pristine;
            if (senderCurrency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU) {
                this.masks.bankAccount = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.russianAccount;
                validators.push((control) => {
                    var _a;
                    return RUB_IBAN_VALIDATOR(control, (_a = bank) === null || _a === void 0 ? void 0 : _a.bic);
                });
            }
            else {
                const bankToCompare = senderCurrency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB ? rubNonRussiaBank : bank;
                const bankCountryCode = (_c = this.countries.find((country) => { var _a; return country.id === ((_a = bankToCompare) === null || _a === void 0 ? void 0 : _a.countryId); })) === null || _c === void 0 ? void 0 : _c.code;
                this.masks.bankAccount = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.foreignAccount;
                validators.push((control) => {
                    return DEFAULT_IBAN_VALIDATOR(control, bankCountryCode);
                });
                validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(this.ibanMaxLength));
            }
            this.setValidation([this.form.controls.bankAccount], validators, asyncValidators);
            setTimeout(() => {
                if (prevPristine) {
                    this.form.controls.bankAccount.markAsPristine();
                }
            }, 0);
        }));
    }
    openForeignContractsRecipientsDictionary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modals.open(_components_foreign_contracts_recipients_dictionary_foreign_contracts_recipients_dictionary_component__WEBPACK_IMPORTED_MODULE_21__.ForeignContractsRecipientsDictionaryComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_dictionary',
                centered: true,
            });
            const { contract } = this.form.getRawValue();
            modalRef.componentInstance.recipients = contract.recipients;
            try {
                const selectedRecipient = (yield modalRef.result);
                this.selectContractRecipient(selectedRecipient);
            }
            catch (error) { }
        });
    }
    selectContractRecipient(recipient) {
        var _a, _b, _c, _d;
        if (!recipient) {
            return;
        }
        const { name, country, countryCode, bankAccount, bank, cityName, fxContractRecipient, fxContractRecipientId, } = this.form.controls;
        fxContractRecipient.setValue(recipient);
        fxContractRecipientId.setValue(recipient.id);
        name.setValue(recipient.name || '');
        if (((_a = recipient.country) === null || _a === void 0 ? void 0 : _a.code) &&
            !this.countries.find((item) => { var _a; return item.code === ((_a = recipient.country) === null || _a === void 0 ? void 0 : _a.code); })) {
            this.countries$.next([...this.countries, recipient.country]);
        }
        country.setValue(recipient.country);
        countryCode.setValue(((_b = recipient.country) === null || _b === void 0 ? void 0 : _b.code) || recipient.countryCode);
        if (recipient.cityName || recipient.defaultCityName) {
            cityName.setValue(recipient.cityName || recipient.defaultCityName || '');
        }
        if (recipient.iban) {
            bankAccount.setValue(recipient.iban);
        }
        if (recipient.bankBic) {
            bank.setValue({
                code: recipient.bankBic,
                name: recipient.bankName,
            });
            (_c = this.bankDropdown) === null || _c === void 0 ? void 0 : _c.selectByBic(recipient.bankBic);
            (_d = this.rubNonRussiaBankDropdown) === null || _d === void 0 ? void 0 : _d.selectByBic(recipient.bankBic);
        }
    }
    showContractDetails(event) {
        event.preventDefault();
        event.stopPropagation();
        this.contractDetails.show();
    }
    onContractSelect(selected, shouldSkipKio = false) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const { contract, kio, contractId } = this.form.controls;
            try {
                const loaded = yield this.currencyPaymentService.getContractById(selected.id);
                Object.assign(selected, loaded);
            }
            catch (error) { }
            contract.setValue(selected);
            contractId.setValue(selected.id);
            if (selected.contractor.iinOrBin && !shouldSkipKio) {
                kio === null || kio === void 0 ? void 0 : kio.setValue(selected.contractor.iinOrBin);
            }
            let recipientToSelect = (_a = selected.recipients) === null || _a === void 0 ? void 0 : _a.find((recipient) => recipient.primary);
            const { fxContractRecipient, fxContractRecipientId } = this.form.getRawValue();
            if (!fxContractRecipient && !fxContractRecipientId && recipientToSelect) {
                this.selectContractRecipient(recipientToSelect);
                return;
            }
            const foundRecipient = (_b = selected.recipients) === null || _b === void 0 ? void 0 : _b.find((recipient) => (fxContractRecipient === null || fxContractRecipient === void 0 ? void 0 : fxContractRecipient.id) === recipient.id ||
                fxContractRecipientId === recipient.id);
            if (foundRecipient) {
                recipientToSelect = foundRecipient;
            }
            this.selectContractRecipient(recipientToSelect);
        });
    }
    // HOW IT IS NOW
    onEmailOnSuccessFocus(event) {
        this.focusEmail$.next(event.target.value);
    }
    onSenderAccountSelect(debitAccount) {
        if (!debitAccount) {
            return;
        }
        this.form.controls.senderAccount.setValue(debitAccount);
        this.form.controls.senderAccount.markAsDirty();
        this.senderAccountDropdown.hasError = false;
    }
    onCommissionAccountSelect(commissionAccount) {
        this.form.controls.commissionAccount.setValue(commissionAccount);
    }
    get senderAccountsList() {
        return this.accounts;
        // .filter(
        // (account) => account.balance.currency !== CURRENCY.KZT
        // );
    }
    get commissionAccountsList() {
        const formValue = this.form.getRawValue();
        const senderAccount = formValue.senderAccount;
        return this.accounts.filter((account) => {
            var _a;
            return account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT ||
                account.balance.currency === ((_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.currency);
        });
    }
    codeWordComparator(query, codeWord) {
        if (!query) {
            return true;
        }
        return (codeWord.name.toLowerCase().includes(query.toLowerCase()) ||
            codeWord.code.toLowerCase().includes(query.toLowerCase()));
    }
    kbkComparator(query, kbk) {
        if (!query) {
            return true;
        }
        return (kbk.code.toLowerCase().includes(query.toLowerCase()) ||
            kbk.description.toLowerCase().includes(query.toLowerCase()));
    }
    statusComparator(query, status) {
        if (!query) {
            return true;
        }
        return (status.code.toLowerCase().includes(query.toLowerCase()) ||
            status.description.toLowerCase().includes(query.toLowerCase()));
    }
    scrollToContracts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            yield this.form.controls.withinContract.setValue(true);
            setTimeout(() => {
                const el = document.getElementById('contractGroup');
                el.scrollIntoView({ behavior: 'smooth' });
                this.contractsSelect.focus();
                this.contractsSelect.open();
            }, 100);
        });
    }
    onAmountPaste(event) {
        var _a, _b;
        event.preventDefault();
        const rawValue = this.form.getRawValue();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData('text');
        let toPasteRaw = this.maskService.getNumberedAmount(pastedText);
        if (((_b = (_a = rawValue.senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency) === NO_DECIMALS_CURRENCY) {
            toPasteRaw = Math.trunc(toPasteRaw);
        }
        this.form.controls.amount.setValue(toPasteRaw);
    }
    mapCodeWordLabel(codeWord) {
        if (!codeWord) {
            return;
        }
        return `${codeWord.code} - ${codeWord.name}`;
    }
    listenMaxLengths() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.isAustraliaAud$,
            this.isAustraliaNonAud$,
            this.isCountryCanada$,
            this.isRubNonRussia$,
            this.isRubToRussia$,
            this.controlsStream.name,
            this.controlsStream.purpose,
            this.purposeMessage$,
            this.controlsStream.countryCode,
        ]).subscribe((values) => {
            let [isAustraliaAud, isAustraliaNonAud, isRubNonRussia, isRubToRussia, name, purpose, purposeMessage, countryCode,] = values;
            name = name || '';
            purpose = purpose || '';
            purposeMessage = purposeMessage || '';
            if (isAustraliaAud) {
                this.nameMaxLength = AUSTRALIA_AUD_NAME_MAX_LENGTH;
                this.cityMaxLength = AUSTRALIA_AUD_CITY_MAX_LENGTH;
            }
            else if (isAustraliaNonAud) {
                this.nameMaxLength = AUSTRALIA_NON_AUD_NAME_MAX_LENGTH;
                this.cityMaxLength = AUSTRALIA_NON_AUD_CITY_MAX_LENGTH;
            }
            else if (isRubNonRussia) {
                this.nameMaxLength = RUB_NON_RUSSIA_NAME_MAX_LENGTH;
                this.cityMaxLength = RUB_NON_RUSSIA_CITY_MAX_LENGTH;
            }
            else {
                this.nameMaxLength = NAME_MAX_LENGTH_DEFAULT;
                this.cityMaxLength = CITY_MAX_LENGTH_DEFAULT;
            }
            if (isRubToRussia || isRubNonRussia) {
                this.rules.purposeLength = RUSSIAN_PURPOSE_LENGTH;
                const nameLatinMatches = name.match(CONTAINS_LATIN_WORDS_REGEX);
                if ((nameLatinMatches === null || nameLatinMatches === void 0 ? void 0 : nameLatinMatches.length) > 0) {
                    this.nameMaxLength -= nameLatinMatches.length * 2;
                }
                const purposeLatinMatches = purpose.match(CONTAINS_LATIN_WORDS_REGEX);
                if ((purposeLatinMatches === null || purposeLatinMatches === void 0 ? void 0 : purposeLatinMatches.length) > 0) {
                    this.rules.purposeLength -= purposeLatinMatches.length * 2;
                }
            }
            else if (countryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN) {
                this.rules.purposeLength = CHINA_PURPOSE_LENGTH;
            }
            else {
                this.rules.purposeLength = CURRENCY_PURPOSE_LENGTH;
            }
            const purposeLength = countryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN
                ? this.rules.purposeLength
                : this.rules.purposeLength - purposeMessage.length;
            this.setValidation([this.form.controls.purpose], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(purposeLength)], null, false);
        }));
    }
    listenAudToAustralia() {
        this.subs.add(this.isAustraliaAud$.subscribe((isAustraliaAud) => {
            const { audIndex, audState, audStreet, audBuildingNumber } = this.form.controls;
            if (isAustraliaAud) {
                this.setValidation([audIndex, audState, audStreet, audBuildingNumber], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.clearValidation([
                    audIndex,
                    audState,
                    audStreet,
                    audBuildingNumber,
                ]);
            }
        }));
    }
    listenAudNonAustralia() {
        this.subs.add(this.isAustraliaNonAud$.subscribe((isAustraliaNonAud) => {
            const { audAddress } = this.form.controls;
            if (isAustraliaNonAud) {
                this.setValidation([audAddress], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.clearValidation([audAddress]);
            }
        }));
    }
    listenCountryIsCanada() {
        this.subs.add(this.isCountryCanada$.subscribe((isCountryCanada) => {
            const { canAddress } = this.form.controls;
            if (isCountryCanada) {
                this.setValidation([canAddress], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.clearValidation([canAddress]);
            }
        }));
    }
    listenCompanyType() {
        this.subs.add(this.companyService.refresh$.subscribe((company) => {
            const companyType = this.companyService.currentCompany.type;
            if (companyType === _company_index__WEBPACK_IMPORTED_MODULE_12__.COMPANY_TYPE.CORPORATE) {
                this.agreementText = 'CURRENCY_PAYMENT.AGREEMENT.CORPORATE';
                if (this.isForeignContractDisabled) {
                    this.isContractsAgreementShown = false;
                }
                this.isContractsDescriptionShown = true;
            }
            else {
                this.agreementText = 'CURRENCY_PAYMENT.AGREEMENT.ENTREPRENEUR';
                if (this.isForeignContractDisabled) {
                    this.isContractsAgreementShown = true;
                }
                this.isContractsDescriptionShown = false;
            }
        }));
    }
    retrieveKnps() {
        this.knp$ = this.combineKNP([
            (knps) => this.dictionaries.selectByPaymentType(knps, {
                type: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.FOREIGN,
                sortFavourite: false,
            }),
        ]);
    }
    retrieveAccounts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            // const accountsPromise = new Promise<RegularAccount[]>((resolve, reject) => {
            //   combineLatest([
            //     this.accountStore.fetching$,
            //     this.accountStore.items$,
            //   ]).subscribe(
            //     (values) => {
            //       const [fetching, items] = values;
            //       if (!fetching && items.length > 0) {
            //         resolve(items);
            //       }
            //     },
            //     (error) => {
            //       reject(error);
            //     }
            //   );
            // });
            // await accountsPromise;
            this.isAccountsLoading = true;
            try {
                const accountsList = yield this.accountsService.getAccounts(this.companyService.currentId);
                this.accounts = accountsList
                    .filter((account) => account.balance.currency &&
                    account.accountType === _accounts_index__WEBPACK_IMPORTED_MODULE_11__.ACCOUNT_TYPE.ACCOUNT)
                    .sort(this.sortAccounts);
                this.selectDefaultSenderAccount();
                this.listenCommissionAccount();
            }
            catch (error) {
            }
            finally {
                this.isAccountsLoading = false;
            }
        });
    }
    selectDefaultSenderAccount() {
        try {
            if (this.senderAccountsList.length === 1) {
                this.senderAccountDropdown.selectAccount(this.senderAccountsList[0]);
                this.onSenderAccountSelect(this.senderAccountsList[0]);
                this.senderAccountDropdown.isDisabled = true;
            }
        }
        catch (error) { }
    }
    retrieveContracts() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            this.isContractsLoading = true;
            try {
                const retrieved = yield this.currencyPaymentService.getContracts();
                this.contracts = retrieved.filter((contract) => contract.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.FX_CONTRACT_STATUS.REGED);
                const senderCurrency = (_b = (_a = this.formValue.senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency;
                if (senderCurrency) {
                    this.filteredContracts = this.contracts.filter((contract) => contract.permittedCurrencies.includes(senderCurrency));
                }
                else {
                    this.filteredContracts = [...this.contracts];
                }
            }
            catch (error) {
            }
            finally {
                this.isContractsLoading = false;
            }
        });
    }
    retrieveKbks() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            this.isKbkLoading = true;
            try {
                this.kbkList = yield this.currencyPaymentService.getKbkList();
            }
            catch (error) {
            }
            finally {
                this.isKbkLoading = false;
            }
        });
    }
    retrieveStatuses() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            this.isStatusesLoading = true;
            try {
                this.statuses = yield this.currencyPaymentService.getStatuses();
            }
            catch (error) {
            }
            finally {
                this.isStatusesLoading = false;
            }
        });
    }
    retrieveCodeWords(countryCode = this.currentCountryCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isCodeWordsLoading) {
                return;
            }
            this.isCodeWordsLoading = true;
            try {
                if (countryCode) {
                    this.codeWords = yield this.currencyPaymentService.getCodeWords(countryCode);
                    const currentCodeWord = this.form.controls.codeWord.value;
                    if (!this.codeWords.find((codeWord) => currentCodeWord.code === codeWord.code &&
                        currentCodeWord.countryCode === codeWord.countryCode)) {
                        this.form.controls.codeWord.setValue('');
                    }
                }
            }
            catch (error) {
            }
            finally {
                this.isCodeWordsLoading = false;
            }
        });
    }
    listenCountrySelect() {
        const { countryCode, senderAccount, country } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([countryCode, senderAccount, country])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            var _a, _b, _c;
            const [countryCode, senderAccount] = values;
            if (!countryCode) {
                return;
            }
            this.form.controls.bankLabel.setValue('');
            this.form.controls.bank.setValue(null);
            if (((_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.currency) !== _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                !this.hasDefaultCity) {
                this.isCityShown = true;
                this.setValidation([this.form.controls.cityName], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.isCityShown = false;
                this.clearValidation([this.form.controls.cityName]);
            }
            if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU &&
                ((_c = (_b = senderAccount) === null || _b === void 0 ? void 0 : _b.balance) === null || _c === void 0 ? void 0 : _c.currency) ===
                    _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB) {
                this.canPayCommission = false;
            }
        }));
    }
    listenContractsSwitchDescription() {
        this.subs.add(this.controlsStream.senderAccount.subscribe((senderAccount) => {
            var _a, _b, _c, _d;
            this.filteredContracts = this.contracts.filter((contract) => {
                var _a, _b;
                return (_a = contract.permittedCurrencies) === null || _a === void 0 ? void 0 : _a.includes((_b = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _b === void 0 ? void 0 : _b.currency);
            });
            if (((_b = (_a = this.formValue.contract) === null || _a === void 0 ? void 0 : _a.amount) === null || _b === void 0 ? void 0 : _b.currency) !==
                ((_c = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _c === void 0 ? void 0 : _c.currency)) {
                this.form.controls.contract.setValue(null);
                this.form.controls.contractId.setValue('');
            }
            this.updateContractsSwitchDescriptionParams(((_d = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _d === void 0 ? void 0 : _d.currency) || null);
        }));
    }
    listenIsRussianBudget() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.controlsStream.senderAccount,
            this.controlsStream.bankAccount,
            this.controlsStream.bank,
            this.controlsStream.withinContract,
            this.controlsStream.contract,
            this.controlsStream.country,
        ]).subscribe((values) => {
            var _a;
            const [senderAccount, bankAccount, bank] = values;
            const isRussianBudgetBic = IS_RUSSIAN_BUDGET_IBAN_START_INDEX(bankAccount) &&
                IS_RUSSIAN_BUDGET_BIC_MIDDLE_INDEX(bank === null || bank === void 0 ? void 0 : bank.bic);
            if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU &&
                ((_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.currency) === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                isRussianBudgetBic &&
                !this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FEATURE_FLAG.RUB_BUDGET_PAYMENT)) {
                this.isRussianBudget$.next(true);
                this.form.controls.isRussianBudget.setValue(true);
            }
            else {
                this.isRussianBudget$.next(false);
                this.form.controls.isRussianBudget.setValue(false);
            }
        }));
    }
    listenWithinContractSwitch() {
        const { withinContract, senderAccount, contract, country } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([withinContract, senderAccount, contract, country])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            var _a;
            const [withinContractValue, senderAccountValue, contractValue, countryValue,] = values;
            this.withinContract = withinContractValue;
            const senderCurrencyValue = (_a = senderAccountValue === null || senderAccountValue === void 0 ? void 0 : senderAccountValue.balance) === null || _a === void 0 ? void 0 : _a.currency;
            const { bank, bankLabel } = this.form.controls;
            const controlsToRequiredArray = [bank, bankLabel];
            if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.US) {
                this.cityPlaceholder$.next('CURRENCY_PAYMENT.RECIPIENT.CITY_STATE');
                this.clearValidation([
                    this.form.controls.bankLabel,
                    this.form.controls.bank,
                ]);
                // this.isBicRequired = false;
            }
            else if (this.formValue.isRubNonRussia) {
                this.cityPlaceholder$.next('CURRENCY_PAYMENT.RECIPIENT.CITY_BANK');
                // this.isBicRequired = true;
            }
            else {
                this.cityPlaceholder$.next('CURRENCY_PAYMENT.RECIPIENT.CITY');
            }
            if (withinContractValue) {
                const hasCityInContract = !!(contractValue === null || contractValue === void 0 ? void 0 : contractValue.contractor.cityName);
                const isRussia = this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU;
                const isRub = senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB;
                // if ((isRussia && isRub) || hasCityInContract) {
                // this.shouldEnterCity$.next(false);
                // } else {
                // this.shouldEnterCity$.next(true);
                // }
                // if (!contractValue?.iban) {
                // this.shouldEnterIban$.next(true);
                // } else {
                // this.shouldEnterIban$.next(false);
                // }
                if (!(contractValue === null || contractValue === void 0 ? void 0 : contractValue.contractor.iinOrBin) && isRub) {
                    this.isKioEnabled$.next(true);
                }
                else {
                    this.isKioEnabled$.next(false);
                }
                this.clearValidation(controlsToRequiredArray);
                this.setValidation([this.form.controls.contractId], [
                    (control) => {
                        // if (
                        //   contract?.contractor?.country?.code !== COUNTRY.RU &&
                        //   senderAccount?.balance?.currency === CURRENCY.RUB
                        // ) {
                        //   return { rubOnlyViaBranch: true };
                        // } else
                        if (this.currentCountryCode !== _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN &&
                            senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.CNY) {
                            return { cnyOnlyToChina: true };
                        }
                        return null;
                    },
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                ], null, false);
                const isAud = senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.AUD;
                const isCanada = this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CA;
                const isAustralia = this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.AU;
                this.isAustraliaAud$.next(isAud && isAustralia);
                this.isAustraliaNonAud$.next(!isAud && isAustralia);
                this.isCountryCanada$.next(isCanada);
                if (this.currentCountryCode &&
                    senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB) {
                    this.rubNonRussiaWithinContractCountry = contractValue.contractor
                        .country.code;
                    this.applyRubPaymentRules(this.rubNonRussiaWithinContractCountry);
                }
            }
            else {
                this.form.controls.contract.setValue(null, { emitEvent: false });
                this.form.controls.contractId.setValue(null);
                this.clearValidation([this.form.controls.contractId]);
                this.setValidation(controlsToRequiredArray, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
                const isAud = senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.AUD;
                const isAustralia = this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.AU;
                const isCanada = this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CA;
                this.isAustraliaAud$.next(isAud && isAustralia);
                this.isAustraliaNonAud$.next(!isAud && isAustralia);
                this.isCountryCanada$.next(isCanada);
                if (senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB) {
                    this.applyRubPaymentRules(this.currentCountryCode);
                }
                else if (senderCurrencyValue === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.CNY) {
                    this.form.controls.codeWord.setValue('');
                    this.applyChinaPaymentRules(this.currentCountryCode);
                }
                else {
                    this.applyDefaultPaymentRules();
                }
            }
        }));
    }
    listenCodeWordEnabling() {
        const { withinContract, contract, country } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([withinContract, contract, country]).subscribe((values) => {
            if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.AE) {
                this.isCodeWordEnabled$.next(true);
                this.codeWordLabel$.next('CURRENCY_PAYMENT.RECIPIENT.CODEWORD_AE');
            }
            else if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN) {
                this.isCodeWordEnabled$.next(true);
                this.codeWordLabel$.next('CURRENCY_PAYMENT.RECIPIENT.CODEWORD');
            }
            else {
                this.isCodeWordEnabled$.next(false);
                this.codeWordLabel$.next('CURRENCY_PAYMENT.RECIPIENT.CODEWORD');
            }
        }));
    }
    listenContractSelect() {
        this.subs.add(this.controlsStream.contractId
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((value) => {
            if (value) {
                this.isContractSelected = true;
            }
            else {
                this.isContractSelected = false;
            }
        }));
    }
    updateContractsSwitchDescriptionParams(senderCurrency = _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            if (!senderCurrency || senderCurrency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD) {
                this.contractMaxAmount = {
                    amount: 10000,
                    currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD,
                };
            }
            else {
                this.isContractsDescriptionLoading = true;
                const exchangeRate = {
                    currencyFrom: senderCurrency,
                    currencyTo: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD,
                    sum: {
                        amount: 10000,
                        currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD,
                    },
                };
                try {
                    const calculatedRate = yield this.conversionService.getRate(exchangeRate);
                    this.contractMaxAmount = {
                        amount: calculatedRate.calculatedSum,
                        currency: senderCurrency,
                    };
                }
                catch (error) {
                    this.contractMaxAmount = {
                        amount: 10000,
                        currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD,
                    };
                }
                finally {
                    this.isContractsDescriptionLoading = false;
                }
            }
            let amount = this.maskService.getMaskedAmount(this.contractMaxAmount.amount);
            amount = amount
                .split(',')
                .filter((number) => parseInt(number, 10) > 0)
                .map((number, index) => {
                if (index === 1 && number.length < 2) {
                    return `${number}0`;
                }
                return number;
            })
                .join(',');
            const currency = this.curSymbolPipe.transform(this.contractMaxAmount.currency);
            this.contractsSwitchDescriptionParams = {
                amount: `${amount} ${currency}`,
            };
        });
    }
    openForeignRecipientsDictionary() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modals.open(_payments_components__WEBPACK_IMPORTED_MODULE_17__.ForeignRecipientsDictionaryComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_dictionary',
                centered: true,
            });
            try {
                const selectedRecipient = (yield modalRef.result);
                const { countryCode, cityName, name, bankAccount, kbeCode, bank, kio } = this.form.controls;
                const { recipient, account } = selectedRecipient;
                countryCode.setValue(recipient.countryCode);
                cityName.setValue(recipient.cityName || '');
                name.setValue(recipient.name || '');
                bankAccount.setValue(account.iban);
                kbeCode.setValue(recipient.kbe.code);
                bank.setValue({
                    bic: account.bic,
                    name: account.bankName,
                });
                this.bankDropdown.selectByBic(account.bic);
                (_a = this.rubNonRussiaBankDropdown) === null || _a === void 0 ? void 0 : _a.selectByBic(account.bic);
                kio === null || kio === void 0 ? void 0 : kio.setValue(recipient.iinOrBin);
            }
            catch (error) { }
        });
    }
    get formValue() {
        return this.form.getRawValue();
    }
    get shouldBindContract() {
        var _a, _b;
        if (KNP_WITHOUT_CONTRACT.indexOf(this.formValue.knp) !== -1 ||
            this.isForeignContractDisabled) {
            return false;
        }
        return (((_b = (_a = this.formValue.senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency) ===
            this.contractMaxAmount.currency &&
            !this.formValue.contractId &&
            this.maskService.getNumberedAmount(this.formValue.amount) >
                this.contractMaxAmount.amount);
    }
    applyAmountValidation() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.controlsStream.senderAccount,
            this.controlsStream.contractId,
        ]).subscribe((values) => {
            var _a;
            const [senderAccount, contractId] = values;
            let validators = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.min(this.paymentsService.rules.minAmount),
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(this.paymentsService.rules.maxAmount),
                (control) => {
                    if ((control === null || control === void 0 ? void 0 : control.value) === 0) {
                        return { cantBeZero: true };
                    }
                    return null;
                },
            ];
            if (((_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.currency) ===
                this.contractMaxAmount.currency &&
                !contractId) {
                validators.push((control) => {
                    const numberedAmount = this.maskService.getNumberedAmount(control.value);
                    if (this.isForeignContractDisabled || this.withinContract) {
                        return;
                    }
                    else {
                        if (numberedAmount > this.contractMaxAmount.amount) {
                            if (KNP_WITHOUT_CONTRACT.indexOf(this.formValue.knp) !== -1) {
                                return null;
                            }
                            else {
                                return {
                                    mustIncludeContract: true,
                                };
                            }
                        }
                    }
                    //  Когда будем реализовывать блокировку платежа если не хватает суммы, пригодится.
                    // else if (
                    //   numberedAmount > formValue.senderAccount?.balance?.amount
                    // ) {
                    //   return {
                    //     balanceNotEnough: true,
                    //   };
                    // }
                    return null;
                });
            }
            this.setValidation([this.form.controls.amount], validators, null, false);
        }));
    }
    setValidation(controls, validators, asyncValidators = [], emitEvent = true) {
        controls.forEach((control) => {
            const prevPristine = control.pristine;
            control.setValidators(validators);
            control.setAsyncValidators(asyncValidators);
            control.updateValueAndValidity({ emitEvent });
            setTimeout(() => {
                if (prevPristine) {
                    control.markAsPristine();
                }
            }, 0);
        });
    }
    clearValidation(controls, emitEvent = true) {
        controls.forEach((control) => {
            const prevPristine = control.pristine;
            control.clearValidators();
            control.clearAsyncValidators();
            control.updateValueAndValidity({ emitEvent });
            setTimeout(() => {
                if (prevPristine) {
                    control.markAsPristine();
                }
            }, 0);
        });
    }
    listenPayComission() {
        this.subs.add(this.controlsStream.payComission
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((value) => {
            this.isOurComission = value;
        }));
    }
    listenIntermediaryBankSwitchable() {
        const { senderAccount, country, bank } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([senderAccount, country, bank]).subscribe((values) => {
            var _a;
            const [senderAccount, country, bank] = values;
            const currency = (_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.currency;
            const bic = bank === null || bank === void 0 ? void 0 : bank.bic;
            if ((currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.EUR ||
                (currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD &&
                    this.currentCountryCode !== _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.US)) &&
                bic !== BANKS.JYSAN) {
                this.isIntermediaryBankSwitchable = true;
                this.setValidation([this.form.controls.intermediaryBankLabel], [
                    (control) => {
                        const formValue = this.form.getRawValue();
                        if (control.value && control.value === formValue.bankLabel) {
                            return {
                                equalBanks: true,
                            };
                        }
                        return null;
                    },
                ], _shared_services_payment_validators__WEBPACK_IMPORTED_MODULE_10__.PaymentAsyncValidators.bankRestricted(this.dictionaries));
            }
            else {
                // this.form.controls.hasIntermediaryBank.setValue(false);
                // this.form.controls.intermediaryBankLabel.setValue('');
                // this.form.controls.intermediaryBank.setValue(null);
                this.clearValidation([this.form.controls.intermediaryBankLabel]);
                this.isIntermediaryBankSwitchable = false;
            }
        }));
    }
    listenIntermediaryBankSwitch() {
        this.subs.add(this.controlsStream.hasIntermediaryBank
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((value) => {
            this.hasIntermediaryBank = value;
            if (!value) {
                this.form.controls.intermediaryBankLabel.setValue('');
                this.form.controls.intermediaryBank.setValue(null);
            }
        }));
    }
    listenEmailSearch() {
        const { emailOnSuccess } = this.form.controls;
        this.subs.add(this.controlsStream.notify
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.debounceTime)(100))
            .subscribe((v) => v ? emailOnSuccess.enable() : emailOnSuccess.disable()));
        // this.subs.add(
        //   this.controlsStream.iinOrBin
        //     .pipe(
        //       debounceTime(200),
        //       filter((iinOrBin) => this.form.controls.iinOrBin.valid),
        //       switchMap((iinOrBin) => {
        //         this.fetchingEmailsFor$.next(iinOrBin);
        //         this.prevEmails$.next([]);
        //         return this.recipientsService
        //           .getPrevNotifications(iinOrBin)
        //           .catch((e) => []);
        //       })
        //     )
        //     .subscribe((emails) => {
        //       this.prevEmails$.next(emails);
        //       this.fetchingEmailsFor$.next(null);
        //     })
        // );
        this.search = (text$) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
                this.prevEmails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)((emails) => emails.map((emailEntity) => emailEntity.email))),
                text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.startWith)('')),
                this.focusEmail$,
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(([emails, term, focus]) => {
                if (term) {
                    return emails
                        .filter((item) => item.toLowerCase().indexOf(term.toLowerCase()) > -1)
                        .slice(0, 3);
                }
                else {
                    return emails.slice(0, 3);
                }
            }));
        };
    }
    // Override
    setAutoNumeration() {
        this.subs.add(this.paymentsService.foreignPaymentNumber$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.withLatestFrom)(this.controlsStream.number))
            .subscribe(([numberFromStore, numberValue]) => {
            if (!numberValue) {
                this.form.controls.number.setValue(numberFromStore);
            }
        }));
    }
    // Override
    listenCommission() {
        const { senderAccount, date, commissionAccount, amount, payComission } = this.controlsStream;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            senderAccount,
            date,
            commissionAccount,
            amount,
            payComission,
            this.workingHours$.asObservable(),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.debounceTime)(300))
            .subscribe((values) => {
            this.updateComission();
        });
    }
    updateComission() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const { senderAccount, date, commissionAccount, amount, payComission } = this.form.controls;
            let isAllFieldsValid = true;
            [senderAccount, date, commissionAccount, amount, payComission].forEach((control) => {
                if (control.invalid) {
                    isAllFieldsValid = false;
                    return;
                }
            });
            if (!isAllFieldsValid) {
                return;
            }
            const formValue = this.form.getRawValue();
            try {
                const date = formValue.date ? (0,_utils_index__WEBPACK_IMPORTED_MODULE_14__.ngbStructToISO)(formValue.date) : null;
                const amountValue = this.maskService.getNumberedAmount(formValue.amount);
                const body = {
                    companyId: this.companyService.currentId,
                    category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.FOREIGN,
                    type: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.FOREIGN,
                    details: {
                        valueDate: date,
                        paymentAmount: {
                            amount: amountValue,
                            currency: (_b = (_a = formValue.senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency,
                        },
                        foreignPaymentDetails: {
                            type: formValue.payComission ? 'OUR' : 'SHA',
                        },
                        urgent: false,
                        payerIban: formValue.senderAccount.iban,
                    },
                };
                this.commissionBalance = yield this.api.getCommissionWithCurrency(body);
                this.form.controls.comission.setValue(((_c = this.commissionBalance) === null || _c === void 0 ? void 0 : _c.amount) || 0);
                this.form.controls.comissionCurrency.setValue(this.commissionBalance.currency);
                if (((_e = (_d = formValue.commissionAccount) === null || _d === void 0 ? void 0 : _d.balance) === null || _e === void 0 ? void 0 : _e.amount) <
                    ((_f = this.commissionBalance) === null || _f === void 0 ? void 0 : _f.amount) &&
                    ((_h = (_g = formValue.commissionAccount) === null || _g === void 0 ? void 0 : _g.balance) === null || _h === void 0 ? void 0 : _h.currency) ===
                        ((_j = this.commissionBalance) === null || _j === void 0 ? void 0 : _j.currency)) {
                    this.comissionMessage = this.mapCommissionMessage({
                        amount: ((_k = this.commissionBalance) === null || _k === void 0 ? void 0 : _k.amount) -
                            ((_m = (_l = formValue.commissionAccount) === null || _l === void 0 ? void 0 : _l.balance) === null || _m === void 0 ? void 0 : _m.amount),
                        currency: this.commissionBalance.currency,
                    });
                }
                else {
                    this.comissionMessage = (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.of)(null);
                }
            }
            catch (error) {
                this.commission$.next(null);
                this.comissionMessage = null;
            }
        });
    }
    mapCommissionMessage(balance, workingHours = this.workingHours$.value) {
        const formValue = this.form.getRawValue();
        const date = formValue.date;
        const amountMasked = this.maskService.formatAmount(balance.amount);
        const currencySymbol = this.curSymbolPipe.transform(balance.currency);
        const edge = (workingHours === null || workingHours === void 0 ? void 0 : workingHours.endTime) || _utils_index__WEBPACK_IMPORTED_MODULE_14__.edgeTimeLabel;
        const message = date
            ? 'CURRENCY_PAYMENT.MESSAGES.COMMISSION.WITH_DATE'
            : 'CURRENCY_PAYMENT.MESSAGES.COMMISSION.DEFAULT';
        return this.translateService.get(message, {
            amount: `${amountMasked} ${currencySymbol}`,
            edge: `${(0,_utils_index__WEBPACK_IMPORTED_MODULE_14__.formatNgbDate)(date, this.translateService.currentLang)} ${edge}`,
        });
    }
    mapAmountMessage(balance, workingHours = this.workingHours$.value) {
        const formValue = this.form.getRawValue();
        const date = formValue.date;
        const amountMasked = this.maskService.formatAmount(balance.amount);
        const currencySymbol = this.curSymbolPipe.transform(balance.currency);
        const edge = (workingHours === null || workingHours === void 0 ? void 0 : workingHours.endTime) || _utils_index__WEBPACK_IMPORTED_MODULE_14__.edgeTimeLabel;
        let message = date
            ? 'CURRENCY_PAYMENT.MESSAGES.AMOUNT.WITH_DATE'
            : 'CURRENCY_PAYMENT.MESSAGES.AMOUNT.DEFAULT';
        return this.translateService.get(message, {
            amount: `${amountMasked} ${currencySymbol}`,
            edge: `${(0,_utils_index__WEBPACK_IMPORTED_MODULE_14__.formatNgbDate)(date, this.translateService.currentLang)} ${edge}`,
        });
    }
    sortAccounts(a, b) {
        if (a.balance.currency === b.balance.currency) {
            return 0;
        }
        else if (a.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.USD) {
            return -1;
        }
        else {
            return 1;
        }
    }
    listenAmount() {
        const { amount } = this.form.controls;
        this.subs.add(this.controlsStream.senderAccount
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)((value) => {
            var _a;
            const currency = (_a = value === null || value === void 0 ? void 0 : value.balance) === null || _a === void 0 ? void 0 : _a.currency;
            const prevPristine = amount.pristine;
            this.amountSuffix = ` ${this.curSymbolPipe.transform(currency) ||
                currency ||
                this.curSymbolPipe.transform(_shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT)}`;
            if (currency === NO_DECIMALS_CURRENCY) {
                this.amountMask = 'separator.0';
                this.amountPlaceholder = '0';
            }
            else {
                this.amountMask = 'separator.2';
                this.amountPlaceholder = '0,00';
            }
            return prevPristine;
        }), 
        // wait for ngx mask recalc
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.delay)(0))
            .subscribe((prevPristine) => {
            // ngx mask is making field dirty on force recalculating after mask and suffix change
            if (prevPristine && prevPristine !== amount.pristine) {
                amount.markAsPristine();
            }
        }));
    }
    listenAmountMessage() {
        const { senderAccount, date, amount, contractId } = this.controlsStream;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            senderAccount,
            date,
            amount,
            contractId,
            this.workingHours$.asObservable(),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            var _a, _b;
            const [senderAccount, date, amount, contractId, workingHours] = values;
            const amountValue = this.maskService.getNumberedAmount(amount);
            const showAmountMessage = ((_a = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _a === void 0 ? void 0 : _a.amount) < amountValue &&
                !this.shouldBindContract;
            this.amountMessage = showAmountMessage
                ? this.mapAmountMessage({
                    amount: amountValue - ((_b = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _b === void 0 ? void 0 : _b.amount),
                    currency: senderAccount.balance.currency,
                })
                : (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.of)(null);
        });
    }
    listenCommissionAccount() {
        this.subs.add(this.controlsStream.senderAccount
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((senderAccount) => {
            var _a, _b, _c, _d, _e;
            const formValue = this.form.getRawValue();
            const commissionAccount = formValue.commissionAccount;
            if (commissionAccount &&
                ((_a = commissionAccount === null || commissionAccount === void 0 ? void 0 : commissionAccount.balance) === null || _a === void 0 ? void 0 : _a.currency) !=
                    ((_b = senderAccount === null || senderAccount === void 0 ? void 0 : senderAccount.balance) === null || _b === void 0 ? void 0 : _b.currency)) {
                this.commissionAccountDropdown.clearSelected();
                this.onCommissionAccountSelect(null);
            }
            if (this.commissionAccountsList.length === 1) {
                const onlyAccount = this.commissionAccountsList[0];
                (_c = this.commissionAccountDropdown) === null || _c === void 0 ? void 0 : _c.selectAccount(onlyAccount);
                this.onCommissionAccountSelect(onlyAccount);
                this.isCommissionAccountSelectable = false;
            }
            else {
                this.isCommissionAccountSelectable = true;
            }
            const kztAccounts = this.commissionAccountsList.filter((account) => account.balance.currency === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT);
            if ((kztAccounts === null || kztAccounts === void 0 ? void 0 : kztAccounts.length) === 1) {
                (_d = this.commissionAccountDropdown) === null || _d === void 0 ? void 0 : _d.selectAccount(kztAccounts[0]);
                this.onCommissionAccountSelect(kztAccounts[0]);
            }
            else if (kztAccounts.length === 0 && senderAccount) {
                (_e = this.commissionAccountDropdown) === null || _e === void 0 ? void 0 : _e.selectAccount(senderAccount);
                this.onCommissionAccountSelect(senderAccount);
            }
        }));
    }
    /**
     * @override
     */
    saveToDraft(body) {
        var _a;
        this.formDirective.submitted = true;
        this.formDirective.form.markAsPristine();
        const paymentNumberStore = this.paymentsService.foreignPaymentNumber;
        const rawBody = body || Object.assign({}, this.form.value);
        paymentNumberStore.entity = null;
        this.processingPayment$.next(Object.assign({ id: this.paymentId }, rawBody));
        this.pipeline
            .saveToDrafts(rawBody, {
            paymentId: this.paymentId,
            type: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_TYPE.FOREIGN,
            commission: (_a = this.commissionBalance) === null || _a === void 0 ? void 0 : _a.amount,
            userPurpose: this.form.value.purpose,
            category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.FOREIGN,
        })
            .then((payment) => {
            if (payment.id !== this.paymentId) {
                if (payment) {
                    this.restoredData = {
                        status: payment.status,
                        signatures: payment.signatures,
                        companyId: payment.companyId,
                    };
                }
                this.router.navigate([this.route.snapshot.params.paymentId ? '../' : '.', payment.id], {
                    relativeTo: this.route,
                    replaceUrl: true,
                    state: {
                        silent: true,
                        resolvedPayment: this.currencyPaymentService.mapForm(this.form.getRawValue()),
                    },
                });
            }
        })
            .catch((e) => {
            if (!paymentNumberStore.entity && !paymentNumberStore.fetching) {
                paymentNumberStore.entity = rawBody.number;
            }
        })
            .finally(() => {
            this.processingPayment$.next(null);
        });
    }
    listenRouterParams() {
        this.subs.add(this.route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)((params) => ({
            state: window.history.state,
            params,
            route: this.route,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.debounceTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.switchMap)(({ params, state }) => {
            // silent passed for redirect with id without reloading in addition with custom url state matcher after payment creation
            if (state === null || state === void 0 ? void 0 : state.silent) {
                if (this.restoredData.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_STATUS.DRAFT) {
                    this.paymentsService.rootTitle = _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.EDIT_DRAFT;
                }
                else if (this.restoredData.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_STATUS.CREATED) {
                    this.paymentsService.rootTitle = _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.EDIT_PAYMENT;
                }
                // only drafts can be edited on redirect after creation
                return rxjs__WEBPACK_IMPORTED_MODULE_37__.EMPTY;
            }
            else if (state === null || state === void 0 ? void 0 : state.resolvedPayment) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.of)(state.resolvedPayment);
            }
            else if (params.paymentId || (state === null || state === void 0 ? void 0 : state.repeatPaymentId)) {
                const paymentId = params.paymentId || state.repeatPaymentId;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_38__.from)(this.api.getPaymentById(paymentId)).pipe(
                // wrong id
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_39__.catchError)((e) => {
                    this.router.navigate([
                        this.router.url.replace('/' + paymentId, ''),
                    ]);
                    return rxjs__WEBPACK_IMPORTED_MODULE_37__.EMPTY;
                }));
            }
            this.setAutoNumeration();
            this.paymentsService.rootTitle = _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.NEW;
            return rxjs__WEBPACK_IMPORTED_MODULE_37__.EMPTY;
        }))
            .subscribe((restorePayment) => {
            this.restorePayment(restorePayment);
        }));
    }
    /**
     * @override
     */
    restorePayment(data) {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.knpStore.fetched$,
            // this.kbkStore.fetched$,
            // this.ugdStore.fetched$,
            // this.dictionaries.bankDictionary.fetched$,
            // this.accountStore.fetched$,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_40__.filter)((loaded) => loaded.every((l) => l)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_41__.tap)(() => {
            var _a;
            let model;
            try {
                model = this.pipeline.flattenPaymentToModel(data);
            }
            catch (e) {
                model = {};
            }
            this.restoredData = {
                companyId: data.companyId,
                status: (_a = data.status) === null || _a === void 0 ? void 0 : _a.code,
                signatures: data.signatures,
            };
            // resolved payment full data but no id in router - going further as 'repeat payment' branch
            if (data.isNewPayment || (data.id && !this.paymentId)) {
                model.number = '';
                model.date = null;
                this.restoredData.status = null;
                this.paymentsService.rootTitle = _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.NEW;
            }
            else {
                this.paymentsService.rootTitle =
                    this.restoredData.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_STATUS.DRAFT
                        ? _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.EDIT_DRAFT
                        : _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentRootTitle.EDIT_PAYMENT;
            }
            if (model.emailOnSuccess) {
                model.notify = true;
            }
            this.form.patchValue(Object.assign({}, model));
            this.restoreAsyncData(data);
            // mark filled amount to trigger commission request;
            // reworked commission
            // this.form.controls.amount.value &&
            //   this.form.controls.amount.markAsDirty();
            this.isImported = data.imported;
            if (!model.number) {
                this.setAutoNumeration();
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.debounceTime)(10), 
        // tap(() => {
        //   // remove duplicated purpose additional message as vat or knp name
        //   this.form.controls.purpose.patchValue(
        //     this.form.controls.purpose.value.replace(
        //       this.purposeMessage$.getValue(),
        //       ''
        //     )
        //   );
        // }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_42__.take)(1))
            .subscribe());
    }
    /**
     * @override
     */
    sendPayment(body) {
        var _a, _b;
        this.formDirective.form.markAsPristine();
        const paymentNumberStore = this.paymentsService.paymentNumber;
        const rawBody = body || Object.assign({}, this.form.value);
        this.processingPayment$.next(rawBody);
        this.paymentsService.paymentNumber.entity = null;
        return this.pipeline
            .processPayment({
            paymentId: this.paymentId,
            // no commission in total JSN-1624
            total: rawBody.amount,
            commission: (_a = this.commissionBalance) === null || _a === void 0 ? void 0 : _a.amount,
            status: (_b = this.restoredData) === null || _b === void 0 ? void 0 : _b.status,
            userPurpose: this.form.value.purpose,
            rawBody,
        })
            .then((r) => {
            if (r) {
                this.restoredData = {
                    status: r.status.code,
                    signatures: r.signatures,
                    companyId: r.companyId,
                };
            }
            else {
                this.restoredData = null;
                if (!paymentNumberStore.entity && !paymentNumberStore.fetching) {
                    paymentNumberStore.entity = rawBody.number;
                }
            }
        })
            .catch((err) => { })
            .finally(() => {
            // this.formDirective.resetForm();
            this.processingPayment$.next(null);
        });
    }
    /** @override */
    onSubmit(e) {
        e && e.preventDefault();
        if (this.form.valid) {
            this.processPayment();
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    processPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const formValue = this.form.getRawValue();
            this.processingPayment$.next(formValue);
            try {
                const isWorkingTimeCheckPassed = yield this.api.checkWorkingTime(formValue.date);
                const isAmountCheckPassed = yield this.api.checkAmountLimit(formValue.amount, this.paymentType);
                // await this.showAmlMainModal();
                if (isWorkingTimeCheckPassed && isAmountCheckPassed) {
                    this.sendPayment();
                }
                else {
                    this.processingPayment$.next(null);
                }
            }
            catch (error) {
                this.processingPayment$.next(null);
            }
        });
    }
    showAmlMainModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_components_aml_main_modal_aml_main_modal_component__WEBPACK_IMPORTED_MODULE_22__.AmlMainModalComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_sm',
                centered: true,
            });
            try {
                yield modalRef.result;
            }
            catch (error) {
            }
            finally {
                return;
            }
        });
    }
    openContractsAddingModal(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.contractsModalsService.showAddContractModal(false);
    }
    openKnpDictionary(select, event) {
        select.close();
        select.blur();
        setTimeout(() => {
            this.modals
                .open(_payments_components__WEBPACK_IMPORTED_MODULE_17__.KnpDictionaryComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_max-height',
                centered: true,
            })
                .result.then((item) => {
                this.form.controls.knp.patchValue(item);
                this.form.controls.knpObject.patchValue(item);
                // trigger cd to update dynamic bottom form field slot
                // this.form.controls.purpose.patchValue(
                //   this.form.controls.purpose.value
                // );
            })
                .catch(() => {
                /*  no selection or dismiss */
            });
        }, 0);
    }
    restoreAsyncData(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__awaiter)(this, void 0, void 0, function* () {
            yield this.retrieveAccounts();
            this.senderAccountDropdown.selectByIban((_a = data.details) === null || _a === void 0 ? void 0 : _a.payerIban);
            const currentBank = (_c = (_b = data === null || data === void 0 ? void 0 : data.paymentRecipient) === null || _b === void 0 ? void 0 : _b.recipientAccount) === null || _c === void 0 ? void 0 : _c.bic;
            const intermediaryBank = (_e = (_d = data === null || data === void 0 ? void 0 : data.details) === null || _d === void 0 ? void 0 : _d.foreignPaymentDetails) === null || _e === void 0 ? void 0 : _e.intermediaryBankBic;
            const intermediaryBankIban = (_g = (_f = data === null || data === void 0 ? void 0 : data.details) === null || _f === void 0 ? void 0 : _f.foreignPaymentDetails) === null || _g === void 0 ? void 0 : _g.intermediaryBankIban;
            if (((_h = this.formValue.senderAccount) === null || _h === void 0 ? void 0 : _h.balance.currency) === _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                this.currentCountryCode !== _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU) {
                this.isRubNonRussia$.next(true);
            }
            if (currentBank) {
                setTimeout(() => {
                    var _a, _b;
                    if (this.formValue.isRubNonRussia) {
                        (_a = this.rubNonRussiaBankDropdown) === null || _a === void 0 ? void 0 : _a.selectByBic(currentBank);
                    }
                    else {
                        (_b = this.bankDropdown) === null || _b === void 0 ? void 0 : _b.selectByBic(currentBank);
                    }
                }, 100);
            }
            if (intermediaryBank) {
                setTimeout(() => {
                    var _a;
                    if (this.formValue.isRubNonRussia) {
                        this.rubNonRussiaCorrespondentBankDropdown.selectByBic(intermediaryBank);
                    }
                    else {
                        (_a = this.intermediaryBankDropdown) === null || _a === void 0 ? void 0 : _a.selectByBic(intermediaryBank);
                    }
                }, 100);
            }
            if (intermediaryBankIban && this.formValue.isRubNonRussia) {
                this.form.controls.rubNonRussiaCorrespondentIban.setValue(intermediaryBankIban);
            }
            if (this.withinContract) {
                this.onContractSelect(this.formValue.contract, true);
            }
            if ((_j = data.details) === null || _j === void 0 ? void 0 : _j.foreignPaymentDetails.codeWord) {
                yield this.retrieveCodeWords();
                this.form.controls.codeWord.setValue(data.details.foreignPaymentDetails.codeWord);
            }
            this.commissionAccountDropdown.selectByIban(data.details.foreignPaymentDetails.commissionWithdrawalIban);
            this.hasDefaultCity = !!((_l = (_k = data.paymentRecipient) === null || _k === void 0 ? void 0 : _k.country) === null || _l === void 0 ? void 0 : _l.defaultCityName);
            if (((_o = (_m = data === null || data === void 0 ? void 0 : data.details) === null || _m === void 0 ? void 0 : _m.paymentAmount) === null || _o === void 0 ? void 0 : _o.currency) !== _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                !this.hasDefaultCity) {
                this.isCityShown = true;
                this.setValidation([this.form.controls.cityName], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.isCityShown = false;
                this.clearValidation([this.form.controls.cityName]);
            }
        });
    }
    // Override
    listenPurposeMessageStream() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.purposeMessage$,
            this.controlsStream.purpose,
            this.controlsStream.countryCode,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)((values) => {
            const [purposeMessage, userMessage, countryCode] = values;
            if (countryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN) {
                return (userMessage || '').length;
            }
            else {
                return (purposeMessage || '').length + (userMessage || '').length;
            }
        }))
            .subscribe(this.purposeLength$));
        this.validatePurpose();
    }
    listenIsRussianTaxpayer() {
        this.subs.add(this.controlsStream.isRussianTaxPayer.subscribe((value) => {
            if (value) {
                this.isRussianTaxpayer = true;
                this.setValidation([this.form.controls.payerInn], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, RUB_KIO_VALIDATOR]);
            }
            else {
                this.isRussianTaxpayer = false;
                this.clearValidation([this.form.controls.payerInn]);
            }
        }));
    }
    listenHasRussianBudgetExtras() {
        this.subs.add(this.controlsStream.hasRussianBudgetExtras.subscribe((value) => {
            if (value) {
                this.hasRussianBudgetExtras = true;
            }
            else {
                this.hasRussianBudgetExtras = false;
            }
        }));
    }
    listenKvo() {
        this.subs.add(this.isKvoEnabled$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((isKvoEnabled) => {
            if (isKvoEnabled) {
                this.setValidation([this.form.controls.kvo], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.clearValidation([this.form.controls.kvo]);
            }
        }));
    }
    listenPurpose() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.isKvoEnabled$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)()),
            this.controlsStream.kvo.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)()),
            this.controlsStream.isRubNonRussia.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)()),
            this.controlsStream.name.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)()),
            this.controlsStream.withinContract.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)()),
            this.controlsStream.bankAccount,
            this.controlsStream.country,
            this.controlsStream.countryCode,
            this.controlsStream.codeWord,
        ]).subscribe((values) => {
            var _a;
            const [isKvoEnabled, kvoValue, isRubNonRussia, name, withinContract, bankAccount, country, countryCode, codeWord,] = values;
            let message = '';
            if (isKvoEnabled) {
                message += `'(VO${kvoValue || ''})'`;
            }
            if (isRubNonRussia && !withinContract) {
                message += ` для ${name || ''} счёт '${bankAccount || ''}'`;
            }
            if (countryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN) {
                message += `//${((_a = codeWord) === null || _a === void 0 ? void 0 : _a.code) || ''}`;
            }
            this.purposeMessage$.next(message);
        }));
    }
    listenKio() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([this.isKioEnabled$, this.isRussianBudget$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((values) => {
            const [isKioEnabled, isRussianBudget] = values;
            if (isKioEnabled) {
                let validators;
                if (isRussianBudget) {
                    validators = [RUB_KIO_VALIDATOR, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required];
                }
                else {
                    validators = [RUB_KIO_VALIDATOR];
                }
                this.setValidation([this.form.controls.kio], validators);
            }
            else {
                this.clearValidation([this.form.controls.kio]);
            }
        }));
    }
    listenCodeWordsList() {
        const { country, countryCode, contract, withinContract } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([country, countryCode, contract, withinContract]).subscribe((values) => {
            this.retrieveCodeWords();
        }));
    }
    listenCodeWord() {
        this.subs.add(this.isCodeWordEnabled$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)())
            .subscribe((isEnabled) => {
            if (isEnabled) {
                this.setValidation([this.form.controls.codeWord], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
            }
            else {
                this.clearValidation([this.form.controls.codeWord]);
            }
        }));
    }
    listenRubToNonRussia() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.isRussianBudget$,
            this.isRubToRussia$,
            this.isRubNonRussia$,
            this.controlsStream.senderAccount,
            this.controlsStream.contract,
            this.controlsStream.withinContract,
            this.controlsStream.bankAccount,
            this.controlsStream.bank,
        ]).subscribe((values) => {
            var _a;
            const [isRussianBudget, isRubToRussia, isRubNonRussia, senderAccount, contract, withinContract, bankAccount, bank,] = values;
            this.form.controls.isRubNonRussia.setValue(isRubNonRussia);
            const bankCountryCode = (_a = contract) === null || _a === void 0 ? void 0 : _a.contractor.bankCountryCode;
            if (isRubNonRussia) {
                // if (!this.formValue.rubNonRussiaCorrespondentBank) {
                //   setTimeout(() => {
                //     if (this.formValue.withinContract) {
                //       this.rubNonRussiaCorrespondentBankDropdownWithinContract.focus();
                //     } else {
                //       this.rubNonRussiaCorrespondentBankDropdown.focus();
                //     }
                //   }, 0);
                // }
                if (bankCountryCode && bankCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU) {
                    setTimeout(() => {
                        this.rubNonRussiaCorrespondentBankDropdown.selectByBic(contract.contractor.bank.code);
                    }, 100);
                }
                else if (bankCountryCode && bankCountryCode !== _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU) {
                    setTimeout(() => {
                        var _a;
                        this.rubNonRussiaBankDropdown.selectByBic((_a = this.formValue.contract) === null || _a === void 0 ? void 0 : _a.contractor.bank.code);
                    }, 100);
                }
                this.clearValidation([this.form.controls.bank, this.form.controls.bankLabel], false);
                this.setValidation([
                    this.form.controls.rubNonRussiaBank,
                    this.form.controls.rubNonRussiaBankLabel,
                ], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]);
                this.setValidation([this.form.controls.rubNonRussiaCorrespondentBankLabel], [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                    (control) => {
                        if (!control.value) {
                            return {
                                required: true,
                            };
                        }
                        return null;
                    },
                    () => {
                        var _a;
                        const bank = this.dictionaries.bankDictionary.getItemByKey((_a = this.form.controls.rubNonRussiaBank.value) === null || _a === void 0 ? void 0 : _a.id, 'id');
                        if ((bank === null || bank === void 0 ? void 0 : bank.transferAllowed) === false) {
                            return { bankRestricted: true };
                        }
                        return null;
                    },
                ]
                // PaymentAsyncValidators.bankLabelRestricted(
                //   this.dictionaries,
                //   this.form.controls.bank
                // )
                );
                this.setValidation([this.form.controls.rubNonRussiaCorrespondentIban], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, RUB_NON_RUSSIA_IBAN_VALIDATOR], _shared_services_payment_validators__WEBPACK_IMPORTED_MODULE_10__.PaymentAsyncValidators.externalIbanRestricted(this.dictionaries));
            }
            else {
                if (withinContract) {
                    this.clearValidation([this.form.controls.bank, this.form.controls.bankLabel], false);
                }
                else {
                    this.setValidation([this.form.controls.bank], [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required], null, false);
                    this.setValidation([this.form.controls.bankLabel], [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                        () => {
                            var _a, _b, _c, _d, _e, _f;
                            if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU &&
                                ((_b = (_a = senderAccount) === null || _a === void 0 ? void 0 : _a.balance) === null || _b === void 0 ? void 0 : _b.currency) ===
                                    _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                                IS_RUSSIAN_BUDGET_IBAN_START_INDEX(bankAccount) &&
                                IS_RUSSIAN_BUDGET_BIC_MIDDLE_INDEX((_c = bank) === null || _c === void 0 ? void 0 : _c.bic) &&
                                this.isRussianBudgetDisabled) {
                                return {
                                    rubBudgetDisabled: true,
                                };
                            }
                            else if (this.currentCountryCode === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU &&
                                ((_e = (_d = senderAccount) === null || _d === void 0 ? void 0 : _d.balance) === null || _e === void 0 ? void 0 : _e.currency) ===
                                    _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.RUB &&
                                IS_RUSSIAN_BUDGET_IBAN_START_INDEX(bankAccount) &&
                                !IS_RUSSIAN_BUDGET_BIC_MIDDLE_INDEX((_f = bank) === null || _f === void 0 ? void 0 : _f.bic)) {
                                return {
                                    rubBudgetWrongBic: true,
                                };
                            }
                            return null;
                        },
                        () => {
                            var _a;
                            const bank = this.dictionaries.bankDictionary.getItemByKey((_a = this.form.controls.bank.value) === null || _a === void 0 ? void 0 : _a.id, 'id');
                            if ((bank === null || bank === void 0 ? void 0 : bank.transferAllowed) === false) {
                                return { bankRestricted: true };
                            }
                            return null;
                        },
                    ]
                    // PaymentAsyncValidators.bankLabelRestricted(
                    //   this.dictionaries,
                    //   this.form.controls.bank
                    // )
                    );
                }
                this.clearValidation([
                    this.form.controls.rubNonRussiaCorrespondentBankLabel,
                    this.form.controls.rubNonRussiaCorrespondentIban,
                ]);
            }
        }));
    }
    listenRubNonRussiaCorrespondentBank() {
        this.subs.add(this.controlsStream.rubNonRussiaBank.subscribe((bank) => {
            if (bank === null || bank === void 0 ? void 0 : bank.cityName) {
                this.form.controls.cityName.setValue(bank.cityName);
            }
        }));
    }
    // private listenShouldEnterCity() {
    //   this.subs.add(
    //     this.shouldEnterCity$.subscribe((shouldEnterCity) => {
    //       if (shouldEnterCity) {
    //         this.setValidation(
    //           [this.form.controls.cityName],
    //           [Validators.required]
    //         );
    //       } else {
    //         this.clearValidation([this.form.controls.cityName]);
    //       }
    //     })
    //   );
    // }
    // RUB Payment Rules
    applyRubPaymentRules(country) {
        if (!country) {
            return;
        }
        this.applyRubPurposeRules();
        if (country === _payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.RU) {
            this.isRubNonRussia$.next(false);
            this.isRubToRussia$.next(true);
            this.applyRubToRussiaKvoAndKioRules();
            this.applyRubToRussiaPayCommissionRules();
        }
        else {
            this.isRubNonRussia$.next(true);
            this.isRubToRussia$.next(false);
            this.applyRubToNonRussiaCorrespondentRules();
            this.applyRubToNonRussiaKvoAndKioRules();
        }
    }
    applyRubPurposeRules() {
        this.masks.purpose = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.foreignCyrillic;
    }
    applyRubToRussiaKvoAndKioRules() {
        this.isKvoEnabled$.next(true);
        this.isKioEnabled$.next(true);
        this.isKppEnabled$.next(true);
    }
    applyRubToRussiaPayCommissionRules() {
        this.canPayCommission = false;
        this.form.controls.payComission.setValue(false);
    }
    applyRubToNonRussiaCorrespondentRules() {
        this.cityPlaceholder$.next('CURRENCY_PAYMENT.RECIPIENT.CITY_BANK');
        // this.shouldEnterCity$.next(true);
        // this.shouldEnterIban$.next(true);
    }
    applyRubToNonRussiaKvoAndKioRules() {
        this.isKvoEnabled$.next(true);
        this.isKioEnabled$.next(false);
        this.isKppEnabled$.next(false);
    }
    // Non Rub Payment Rules
    applyDefaultPaymentRules() {
        this.isRubNonRussia$.next(false);
        this.applyDefaultPaymentPurposeRules();
        this.applyDefaultPaymentKvoAndKioRules();
        this.applyDefaultPaymentPayCommissionRules();
        this.applyDefaultPaymentCodeWordRules();
    }
    applyDefaultPaymentPayCommissionRules() {
        this.canPayCommission = true;
    }
    applyDefaultPaymentPurposeRules() {
        this.masks.purpose = _shared_masked_masked__WEBPACK_IMPORTED_MODULE_5__.Masks.foreignLatin;
    }
    applyDefaultPaymentKvoAndKioRules() {
        this.isKioEnabled$.next(false);
        this.isKvoEnabled$.next(false);
        this.isKppEnabled$.next(false);
    }
    applyDefaultPaymentCodeWordRules() {
        this.isCodeWordEnabled$.next(false);
    }
    applyChinaPaymentRules(countryCode) {
        if (!countryCode) {
            this.form.controls.countryCode.setValue(_payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN);
            this.hasDefaultCity = false;
            this.retrieveCodeWords(_payments_services__WEBPACK_IMPORTED_MODULE_18__.COUNTRY.CN);
        }
        this.isCodeWordEnabled$.next(true);
        this.codeWordLabel$.next('CURRENCY_PAYMENT.RECIPIENT.CODEWORD');
    }
    knpIsChanged() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.controlsStream.senderAccount,
            this.controlsStream.contractId,
        ]).subscribe((values) => {
            const validators = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.min(this.paymentsService.rules.minAmount),
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.max(this.paymentsService.rules.maxAmount),
                (control) => {
                    if ((control === null || control === void 0 ? void 0 : control.value) === 0) {
                        return { cantBeZero: true };
                    }
                    return null;
                },
            ];
            validators.push((control) => {
                const numberedAmount = this.maskService.getNumberedAmount(control.value);
                if (this.isForeignContractDisabled || this.withinContract) {
                    return;
                }
                else {
                    if (numberedAmount > this.contractMaxAmount.amount) {
                        if (KNP_WITHOUT_CONTRACT.indexOf(this.formValue.knp) !== -1) {
                            return null;
                        }
                        else {
                            return {
                                mustIncludeContract: true,
                            };
                        }
                    }
                }
                return null;
            });
            this.setValidation([this.form.controls.amount], validators, null, false);
        }));
    }
};
CurrencyPaymentComponent.ctorParameters = () => [
    { type: _company_index__WEBPACK_IMPORTED_MODULE_12__.CompanyService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentsService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__.MaskedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_43__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_43__.Router },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentApiService },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_8__.DictionariesService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_44__.TranslateService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_19__.AuthorityPermissionsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_45__.NgbModal },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentsPipelineService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_18__.PaymentsFormFactoryService },
    { type: ngx_mask__WEBPACK_IMPORTED_MODULE_46__.MaskPipe },
    { type: _company_index__WEBPACK_IMPORTED_MODULE_12__.RecipientsService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_16__.FeatureFlagsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_7__.BankFromAccountPipe },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_11__.AccountsService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_18__.CurrencyPaymentService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_7__.CurSymbolPipe },
    { type: _conversion_conversion_service__WEBPACK_IMPORTED_MODULE_13__.ConversionService },
    { type: _contracts_services__WEBPACK_IMPORTED_MODULE_15__.ContractsModalsService }
];
CurrencyPaymentComponent.propDecorators = {
    emailOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['emailOnSuccess', { static: true },] }],
    senderAccountDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['senderAccountDropdown',] }],
    contractsSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['contractsSelect',] }],
    contractDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['contractDetails',] }],
    bankDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['bankDropdown',] }],
    intermediaryBankDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['intermediaryBankDropdown',] }],
    commissionAccountDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['commissionAccountDropdown',] }],
    rubNonRussiaBankDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['rubNonRussiaBankDropdown',] }],
    rubNonRussiaCorrespondentBankDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['rubNonRussiaCorrespondentBankDropdown',] }],
    rubNonRussiaCorrespondentIbanInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewChild, args: ['rubNonRussiaCorrespondentIbanInput',] }]
};
CurrencyPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_47__.Component)({
        selector: 'j-currency-payment',
        template: _currency_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_47__.ViewEncapsulation.None,
        providers: [
            {
                provide: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
                useClass: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__.ShowOnDirtyErrorStateMatcher,
            },
        ],
        styles: [_currency_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyPaymentComponent);



/***/ }),

/***/ 41422:
/*!**************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payments/currency-payments.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPaymentsComponent": () => (/* binding */ CurrencyPaymentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currency_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-payments.component.html?ngResource */ 42344);
/* harmony import */ var _currency_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-payments.component.scss?ngResource */ 50065);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);









let CurrencyPaymentsComponent = class CurrencyPaymentsComponent {
    constructor(location, navService, paymentsService) {
        this.location = location;
        this.navService = navService;
        this.paymentsService = paymentsService;
    }
    ngOnInit() {
        this.title$ = this.paymentsService.rootTitle$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((v) => `CURRENCY_PAYMENT.${v}`));
    }
    onClose() {
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        this.location.back();
    }
    ngAfterViewInit() {
        this.formDirective = this.paymentComponent.formDirective;
        this.form = this.paymentComponent.form;
    }
};
CurrencyPaymentsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsService }
];
CurrencyPaymentsComponent.propDecorators = {
    paymentComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['paymentComponent',] }]
};
CurrencyPaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'j-currency-payments',
        template: _currency_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
                useClass: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_3__.ShowOnDirtyErrorStateMatcher,
            },
        ],
        styles: [_currency_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyPaymentsComponent);



/***/ }),

/***/ 5343:
/*!**********************************************!*\
  !*** ./src/app/payments/containers/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAYMENTS_CONTAINERS": () => (/* binding */ PAYMENTS_CONTAINERS),
/* harmony export */   "CurrencyPaymentsComponent": () => (/* reexport safe */ _currency_payments_currency_payments_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyPaymentsComponent),
/* harmony export */   "TengePaymentsComponent": () => (/* reexport safe */ _tenge_payments_tenge_payments_component__WEBPACK_IMPORTED_MODULE_1__.TengePaymentsComponent),
/* harmony export */   "TaxPaymentComponent": () => (/* reexport safe */ _tax_payment_tax_payment_component__WEBPACK_IMPORTED_MODULE_2__.TaxPaymentComponent),
/* harmony export */   "BudgetPaymentsComponent": () => (/* reexport safe */ _budget_payments_budget_payments_component__WEBPACK_IMPORTED_MODULE_3__.BudgetPaymentsComponent),
/* harmony export */   "PaymentOrderComponent": () => (/* reexport safe */ _payment_order_payment_order_component__WEBPACK_IMPORTED_MODULE_4__.PaymentOrderComponent),
/* harmony export */   "PensionPaymentComponent": () => (/* reexport safe */ _pension_payment_pension_payment_component__WEBPACK_IMPORTED_MODULE_5__.PensionPaymentComponent),
/* harmony export */   "SocialPaymentComponent": () => (/* reexport safe */ _social_payment_social_payment_component__WEBPACK_IMPORTED_MODULE_6__.SocialPaymentComponent),
/* harmony export */   "MedicalPaymentComponent": () => (/* reexport safe */ _medical_payment_medical_payment_component__WEBPACK_IMPORTED_MODULE_7__.MedicalPaymentComponent),
/* harmony export */   "SalaryPaymentComponent": () => (/* reexport safe */ _salary_payment_salary_payment_component__WEBPACK_IMPORTED_MODULE_8__.SalaryPaymentComponent),
/* harmony export */   "BasePaymentContainer": () => (/* reexport safe */ _base_payment_container__WEBPACK_IMPORTED_MODULE_10__.BasePaymentContainer)
/* harmony export */ });
/* harmony import */ var _currency_payments_currency_payments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-payments/currency-payments.component */ 41422);
/* harmony import */ var _tenge_payments_tenge_payments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenge-payments/tenge-payments.component */ 58644);
/* harmony import */ var _tax_payment_tax_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-payment/tax-payment.component */ 4741);
/* harmony import */ var _budget_payments_budget_payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget-payments/budget-payments.component */ 38314);
/* harmony import */ var _payment_order_payment_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-order/payment-order.component */ 37169);
/* harmony import */ var _pension_payment_pension_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pension-payment/pension-payment.component */ 14785);
/* harmony import */ var _social_payment_social_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-payment/social-payment.component */ 84422);
/* harmony import */ var _medical_payment_medical_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./medical-payment/medical-payment.component */ 15636);
/* harmony import */ var _salary_payment_salary_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salary-payment/salary-payment.component */ 68739);
/* harmony import */ var _currency_payment_currency_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./currency-payment/currency-payment.component */ 98018);
/* harmony import */ var _base_payment_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-payment.container */ 15695);










const PAYMENTS_CONTAINERS = [
    _currency_payments_currency_payments_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyPaymentsComponent,
    _currency_payment_currency_payment_component__WEBPACK_IMPORTED_MODULE_9__.CurrencyPaymentComponent,
    _tenge_payments_tenge_payments_component__WEBPACK_IMPORTED_MODULE_1__.TengePaymentsComponent,
    _tax_payment_tax_payment_component__WEBPACK_IMPORTED_MODULE_2__.TaxPaymentComponent,
    _budget_payments_budget_payments_component__WEBPACK_IMPORTED_MODULE_3__.BudgetPaymentsComponent,
    _payment_order_payment_order_component__WEBPACK_IMPORTED_MODULE_4__.PaymentOrderComponent,
    _pension_payment_pension_payment_component__WEBPACK_IMPORTED_MODULE_5__.PensionPaymentComponent,
    _social_payment_social_payment_component__WEBPACK_IMPORTED_MODULE_6__.SocialPaymentComponent,
    _medical_payment_medical_payment_component__WEBPACK_IMPORTED_MODULE_7__.MedicalPaymentComponent,
    _salary_payment_salary_payment_component__WEBPACK_IMPORTED_MODULE_8__.SalaryPaymentComponent,
];












/***/ }),

/***/ 15636:
/*!**********************************************************************************!*\
  !*** ./src/app/payments/containers/medical-payment/medical-payment.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalPaymentComponent": () => (/* binding */ MedicalPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _medical_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-payment.component.html?ngResource */ 34043);
/* harmony import */ var _medical_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-payment.component.scss?ngResource */ 24659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/services/payments-form-factory.service */ 39996);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @payments/config/amounts */ 51476);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/pipes */ 39843);






















let MedicalPaymentComponent = class MedicalPaymentComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_2__.BasePaymentContainer {
    constructor(route, router, paymentsService, companyService, dateAdapter, maskService, accountsService, modalService, dictionaries, api, pipeline, translateService, paymentsFormsFactory, authorityPermissionsService, featureFlagsService, bankFromAccount) {
        super(paymentsFormsFactory.createMedicalForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipeline, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.route = route;
        this.router = router;
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.dateAdapter = dateAdapter;
        this.maskService = maskService;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.dictionaries = dictionaries;
        this.api = api;
        this.pipeline = pipeline;
        this.translateService = translateService;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.authorityPermissionsService = authorityPermissionsService;
        this.featureFlagsService = featureFlagsService;
        this.bankFromAccount = bankFromAccount;
        this.masks = {
            number: 'paymentNum',
            amount: 'amount',
            knp: 'knp',
        };
        this.employeeMinAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__.MEDICAL_EMPLOYEE_MIN_AMOUNT;
        this.employeeMaxAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__.MEDICAL_EMPLOYEE_MAX_AMOUNT;
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_8__.PAYMENT_TYPE.MEDICAL;
    }
    ngOnInit() {
        super.ngOnInit();
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)((next) => this.checkPersonalAccounts(next)));
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.knp$ = this.combineKNP();
        this.combineEmployeesAmount();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
    }
};
MedicalPaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateParserFormatter },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__.MaskedService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_5__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__.DictionariesService },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_10__.PaymentApiService },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_9__.PaymentsPipelineService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService },
    { type: _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_11__.PaymentsFormFactoryService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_12__.AuthorityPermissionsService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_13__.FeatureFlagsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_15__.BankFromAccountPipe }
];
MedicalPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'j-medical-payment',
        template: _medical_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_medical_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicalPaymentComponent);



/***/ }),

/***/ 37169:
/*!******************************************************************************!*\
  !*** ./src/app/payments/containers/payment-order/payment-order.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentOrderComponent": () => (/* binding */ PaymentOrderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_order_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-order.component.html?ngResource */ 21299);
/* harmony import */ var _payment_order_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-order.component.scss?ngResource */ 55457);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _payments_components_recipients_dictionary_recipients_dictionary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @payments/components/recipients-dictionary/recipients-dictionary.component */ 93751);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _company_recipients_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @company/recipients.service */ 45736);
/* harmony import */ var _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @payments/services/payments-form-factory.service */ 39996);
/* harmony import */ var _payments_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @payments/components */ 58886);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/services */ 17253);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _contracts_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @contracts/services */ 74466);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @payments/services */ 7500);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @core/models */ 73902);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/pipes */ 39843);






























var COUNTER_PARTY_STATUS;
(function (COUNTER_PARTY_STATUS) {
    COUNTER_PARTY_STATUS["SUCCESS"] = "SUCCESS";
    COUNTER_PARTY_STATUS["ERROR"] = "ERROR";
})(COUNTER_PARTY_STATUS || (COUNTER_PARTY_STATUS = {}));
let PaymentOrderComponent = class PaymentOrderComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_5__.BasePaymentContainer {
    constructor(companyService, paymentsService, maskService, route, router, api, dictionaries, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount, accountsService, modalService, pipelines, paymentsFormsFactory, recipientsService, userService, contractsModalsService, currencyPaymentService) {
        super(paymentsFormsFactory.createPaymentInTengeForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipelines, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.companyService = companyService;
        this.paymentsService = paymentsService;
        this.maskService = maskService;
        this.route = route;
        this.router = router;
        this.api = api;
        this.dictionaries = dictionaries;
        this.translateService = translateService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.featureFlagsService = featureFlagsService;
        this.bankFromAccount = bankFromAccount;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.pipelines = pipelines;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.recipientsService = recipientsService;
        this.userService = userService;
        this.contractsModalsService = contractsModalsService;
        this.currencyPaymentService = currencyPaymentService;
        this.isCounterPartyLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
        this.masks = {
            iinOrBin: 'iin',
            bankAccount: 'tengeAccount',
            kbeCode: 'kbe',
            knp: 'knp',
            number: 'paymentNum',
            amount: 'amount',
        };
        this.riskGroups = [];
        this.counterPartyStatus = COUNTER_PARTY_STATUS;
        this.counterParty$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
        this.focusEmail$ = new rxjs__WEBPACK_IMPORTED_MODULE_23__.Subject();
        this.prevEmails$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject([]);
        this.fetchingEmailsFor$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
        this.iinIsSubmitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
        this.iinIsFound$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
        this.isFxContractsLoading = true;
        this.fxContracts = [];
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.REGULAR_PAYMENT_ORDER;
        this.user = this.userService.user;
    }
    ngOnInit() {
        super.ngOnInit();
        this.dateLimit = this.paymentsService.stdDateRangeNgb;
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.tap)((next) => this.checkPersonalAccounts(next)));
        this.knp$ = this.combineKNP([
            (knps) => this.dictionaries.selectByPaymentType(knps, {
                type: _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.REGULAR_PAYMENT_ORDER,
                sortFavourite: true,
            }),
        ]);
        this.listenWorkingDays();
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.listenVAT();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
        this.listenEmailSearch();
        this.retrieveContracts();
        const { bankAccount, senderAccount } = this.controlsStream;
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.combineLatest)([
            bankAccount.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.filter)((v) => this.form.controls.bankAccount.valid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.startWith)('')),
            senderAccount.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.filter)((v) => this.form.controls.senderAccount.valid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)((a) => a.iban), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.startWith)('')),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(([payerIban, senderAccount]) => this.paymentsService.checkPaymentTypeFromIban(senderAccount, 'KZ' + payerIban)))
            .subscribe((t) => (this.paymentType = t)));
        this.applyCounterAgentVerification();
        this.applyContractApplyableRule();
        this.applyContractValidationRule();
    }
    openSavedPayments() {
        this.modalService
            .open(_payments_components_recipients_dictionary_recipients_dictionary_component__WEBPACK_IMPORTED_MODULE_4__.RecipientsDictionaryComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_max-height',
            centered: true,
        })
            .result.then(({ recipient, account, }) => {
            this.form.patchValue({
                bankAccount: account.iban,
                iinOrBin: recipient.iinOrBin,
                name: recipient.name,
                kbeCode: recipient.kbe.code,
            });
            this.form.markAsDirty();
        })
            .catch(() => {
            /*  no selection or dismiss */
        });
    }
    onEmailOnSuccessFocus(event) {
        this.focusEmail$.next(event.target.value);
    }
    openContractsAddingModal(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.contractsModalsService.showAddContractModal(false);
    }
    showContractDetails(event) {
        event.preventDefault();
        event.stopPropagation();
        this.contractDetails.show();
    }
    retrieveContracts() {
        this.subs.add(this.api
            .getFxContracts()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => {
            this.isFxContractsLoading = false;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)((contracts) => contracts.filter((contract) => contract.permittedCurrencies.includes(_core_models__WEBPACK_IMPORTED_MODULE_20__.CURRENCY.KZT))))
            .subscribe((contracts) => {
            this.fxContracts = contracts;
        }));
    }
    onContractSelect(selected) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__awaiter)(this, void 0, void 0, function* () {
            const { contract, contractId } = this.form.controls;
            const loaded = yield this.currencyPaymentService.getContractById(selected.id);
            Object.assign(selected, loaded);
            contract.setValue(selected);
            contractId.setValue(selected.id);
            let recipientToSelect = (_a = selected.recipients) === null || _a === void 0 ? void 0 : _a.find((recipient) => recipient.primary);
            const { fxContractRecipient, fxContractRecipientId } = this.form.getRawValue();
            if (!fxContractRecipient && !fxContractRecipientId && recipientToSelect) {
                this.selectContractRecipient(recipientToSelect);
                return;
            }
            const foundRecipient = (_b = selected.recipients) === null || _b === void 0 ? void 0 : _b.find((recipient) => (fxContractRecipient === null || fxContractRecipient === void 0 ? void 0 : fxContractRecipient.id) === recipient.id ||
                fxContractRecipientId === recipient.id);
            if (foundRecipient) {
                recipientToSelect = foundRecipient;
            }
            this.selectContractRecipient(recipientToSelect);
        });
    }
    selectContractRecipient(recipient) {
        if (!recipient) {
            return;
        }
        const { 
        // name,
        // bankAccount,
        fxContractRecipient, fxContractRecipientId, } = this.form.controls;
        fxContractRecipient.setValue(recipient);
        fxContractRecipientId.setValue(recipient.id);
        // name.setValue(recipient.name || '');
        // if (recipient.iban) {
        // bankAccount.setValue(recipient.iban);
        // }
    }
    openKnpDictionary(select, event) {
        select.close();
        select.blur();
        setTimeout(() => {
            const modalRef = this.modals.open(_payments_components__WEBPACK_IMPORTED_MODULE_14__.KnpDictionaryComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_max-height',
                centered: true,
            });
            modalRef.componentInstance.paymentType =
                _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.REGULAR_PAYMENT_ORDER;
            modalRef.result
                .then((item) => {
                this.form.controls.knp.patchValue(item.code);
                // trigger cd to update dynamic bottom form field slot
                // this.form.controls.purpose.patchValue(
                //   this.form.controls.purpose.value
                // );
            })
                .catch(() => {
                /*  no selection or dismiss */
            });
        }, 0);
    }
    applyContractApplyableRule() {
        this.isContractApplyable$ = this.controlsStream.kbeCode.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)((kbe) => {
            return kbe && kbe[0] !== this.companyService.currentCompany.kod[0];
        }));
    }
    applyContractValidationRule() {
        this.subs.add(this.controlsStream.withinContract.subscribe((withinContract) => {
            if (withinContract) {
                this.form.controls.contract.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_31__.Validators.required);
            }
            else {
                this.form.controls.contract.clearValidators();
            }
            this.form.controls.contract.updateValueAndValidity();
        }));
    }
    applyCounterAgentVerification() {
        const { iinOrBin } = this.form.controls;
        this.subs.add(this.controlsStream.iinOrBin
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.switchMap)((bin) => {
            this.counterParty$.next(null);
            this.iinIsFound$.next(null);
            this.iinIsSubmitted$.next(null);
            if (iinOrBin.valid) {
                this.iinIsNotOwn = this.user.iin !== bin;
                this.isCounterPartyLoading$.next(bin);
            }
            this.isCounterPartyLoading$.next(null);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_35__.of)(null);
        }))
            .subscribe((counterPartyResult) => {
            counterPartyResult && this.checkCounterParty(counterPartyResult);
            this.isCounterPartyLoading$.next(null);
        }));
    }
    checkCounterParty(counterPartyResult) {
        var _a, _b, _c;
        if ((_a = counterPartyResult.companyInfo) === null || _a === void 0 ? void 0 : _a.name) {
            this.form.controls.name.setValue((_b = counterPartyResult.companyInfo) === null || _b === void 0 ? void 0 : _b.name);
        }
        if (counterPartyResult.riskGroups) {
            this.riskGroups = counterPartyResult.riskGroups;
        }
        this.counterParty$.next(((_c = counterPartyResult.riskGroups) === null || _c === void 0 ? void 0 : _c.length) === 0
            ? this.counterPartyStatus.SUCCESS
            : this.counterPartyStatus.ERROR);
    }
    listenEmailSearch() {
        const { emailOnSuccess } = this.form.controls;
        this.subs.add(this.controlsStream.notify
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.debounceTime)(100))
            .subscribe((v) => v ? emailOnSuccess.enable() : emailOnSuccess.disable()));
        this.subs.add(this.controlsStream.iinOrBin
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.filter)((iinOrBin) => this.form.controls.iinOrBin.valid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.switchMap)((iinOrBin) => {
            this.fetchingEmailsFor$.next(iinOrBin);
            this.prevEmails$.next([]);
            return this.recipientsService
                .getPrevNotifications(iinOrBin)
                .catch((e) => []);
        }))
            .subscribe((emails) => {
            this.prevEmails$.next(emails);
            this.fetchingEmailsFor$.next(null);
        }));
        this.search = (text$) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.combineLatest)([
                this.prevEmails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)((emails) => emails.map((emailEntity) => emailEntity.email))),
                text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.startWith)('')),
                this.focusEmail$,
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(([emails, term, focus]) => {
                if (term) {
                    return emails
                        .filter((item) => item.toLowerCase().indexOf(term.toLowerCase()) > -1)
                        .slice(0, 3);
                }
                else {
                    return emails.slice(0, 3);
                }
            }));
        };
    }
    checkIin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__awaiter)(this, void 0, void 0, function* () {
            this.riskGroups = [];
            this.iinIsSubmitted$.next(true);
            const iinOrBin = this.form.controls.iinOrBin.value;
            this.isCounterPartyLoading$.next(iinOrBin);
            this.recipientsService
                .checkCounterParty(iinOrBin)
                .then((counterPartyResult) => (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__awaiter)(this, void 0, void 0, function* () {
                counterPartyResult && this.checkCounterParty(counterPartyResult);
                yield this.successfulCounterPartyResult();
            }))
                .catch((e) => {
                console.error(e);
                this.iinIsSubmitted$.next(null);
                this.iinIsFound$.next(null);
                this.isCounterPartyLoading$.next(null);
                this.showSignError();
            });
        });
    }
    showSignError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__awaiter)(this, void 0, void 0, function* () {
            return this.modalService.open(_payments_components__WEBPACK_IMPORTED_MODULE_14__.IinCheckErrorComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_max-height',
                centered: true,
            }).result;
        });
    }
    successfulCounterPartyResult() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__awaiter)(this, void 0, void 0, function* () {
            this.iinIsSubmitted$.next(null);
            this.iinIsFound$.next(true);
            this.isCounterPartyLoading$.next(null);
        });
    }
};
PaymentOrderComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_7__.PaymentsService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_8__.MaskedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__.Router },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_11__.PaymentApiService },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__.DictionariesService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_16__.AuthorityPermissionsService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_17__.FeatureFlagsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_21__.BankFromAccountPipe },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_2__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModal },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_6__.PaymentsPipelineService },
    { type: _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_13__.PaymentsFormFactoryService },
    { type: _company_recipients_service__WEBPACK_IMPORTED_MODULE_12__.RecipientsService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_15__.UserService },
    { type: _contracts_services__WEBPACK_IMPORTED_MODULE_18__.ContractsModalsService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_19__.CurrencyPaymentService }
];
PaymentOrderComponent.propDecorators = {
    emailOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_39__.ViewChild, args: ['emailOnSuccess', { static: true },] }],
    contractDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_39__.ViewChild, args: ['contractDetails',] }]
};
PaymentOrderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_39__.Component)({
        selector: 'j-payment-order',
        template: _payment_order_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_order_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentOrderComponent);



/***/ }),

/***/ 14785:
/*!**********************************************************************************!*\
  !*** ./src/app/payments/containers/pension-payment/pension-payment.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PensionPaymentComponent": () => (/* binding */ PensionPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pension_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pension-payment.component.html?ngResource */ 13148);
/* harmony import */ var _pension_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pension-payment.component.scss?ngResource */ 98098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services */ 17253);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @payments/services */ 7500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_config_amounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/config/amounts */ 51476);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/pipes */ 39843);




















let PensionPaymentComponent = class PensionPaymentComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_7__.BasePaymentContainer {
    constructor(route, router, paymentsService, companyService, dateAdapter, maskService, accountsService, modalService, dictionaries, api, pipeline, translateService, authorityPermissionsService, paymentsFormsFactory, featureFlagsService, bankFromAccount) {
        super(paymentsFormsFactory.createPensionForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipeline, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.route = route;
        this.router = router;
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.dateAdapter = dateAdapter;
        this.maskService = maskService;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.dictionaries = dictionaries;
        this.api = api;
        this.pipeline = pipeline;
        this.translateService = translateService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.featureFlagsService = featureFlagsService;
        this.bankFromAccount = bankFromAccount;
        this.masks = {
            number: 'paymentNum',
            amount: 'amount',
            knp: 'knp',
        };
        this.employeeMinAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_11__.PENSION_EMPLOYEE_MIN_AMOUNT;
        this.employeeMaxAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_11__.PENSION_EMPLOYEE_MAX_AMOUNT;
        this.employees$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
        this.amount$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(0);
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_TYPE.PENSION;
    }
    ngOnInit() {
        super.ngOnInit();
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)((next) => this.checkPersonalAccounts(next)));
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.knp$ = this.combineKNP();
        this.combineEmployeesAmount();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
    }
};
PensionPaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_8__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDateParserFormatter },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__.MaskedService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_2__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.DictionariesService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_8__.PaymentApiService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_8__.PaymentsPipelineService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_9__.AuthorityPermissionsService },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_8__.PaymentsFormFactoryService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_10__.FeatureFlagsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_12__.BankFromAccountPipe }
];
PensionPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'j-pension-payment',
        template: _pension_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewEncapsulation.None,
        styles: [_pension_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PensionPaymentComponent);



/***/ }),

/***/ 68739:
/*!********************************************************************************!*\
  !*** ./src/app/payments/containers/salary-payment/salary-payment.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaryPaymentComponent": () => (/* binding */ SalaryPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _salary_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salary-payment.component.html?ngResource */ 60025);
/* harmony import */ var _salary_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary-payment.component.scss?ngResource */ 52989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 61745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @payments/services/payments-form-factory.service */ 39996);
/* harmony import */ var _payments_components_banks_receivers_banks_receivers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/components/banks-receivers/banks-receivers.component */ 62981);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_config_amounts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @payments/config/amounts */ 51476);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/pipes */ 39843);























let SalaryPaymentComponent = class SalaryPaymentComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_12__.BasePaymentContainer {
    constructor(paymentsService, companyService, dateAdapter, route, router, maskService, accountsService, modalService, api, dictionaries, pipeline, translateService, paymentsFormsFactory, authorityPermissionsService, featureFlagsService, bankFromAccount) {
        super(paymentsFormsFactory.createSalaryForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipeline, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.dateAdapter = dateAdapter;
        this.route = route;
        this.router = router;
        this.maskService = maskService;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.api = api;
        this.dictionaries = dictionaries;
        this.pipeline = pipeline;
        this.translateService = translateService;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.authorityPermissionsService = authorityPermissionsService;
        this.featureFlagsService = featureFlagsService;
        this.bankFromAccount = bankFromAccount;
        this.masks = {
            number: 'paymentNum',
            amount: 'amount',
            knp: 'knp',
            bankAccount: 'tengeAccount',
        };
        this.employeeMinAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_15__.SALARY_EMPLOYEE_MIN_AMOUNT;
        this.employeeMaxAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_15__.SALARY_EMPLOYEE_MAX_AMOUNT;
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_4__.PAYMENT_TYPE.SALARY;
    }
    ngOnInit() {
        super.ngOnInit();
        this.banks = this.dictionaries.bankDictionary;
        this.dateLimit = this.paymentsService.stdDateRangeNgb;
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)((next) => this.checkPersonalAccounts(next)));
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.listenWorkingDays();
        this.combineEmployeesAmount();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
        this.knp$ = this.dictionaries.KNPDictionary.items$;
        this.subs.add(this.controlsStream.bankReceiver
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.withLatestFrom)(this.banks.entities$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(([id, entities]) => id && entities[id]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)())
            .subscribe((bank) => {
            const { bankAccount } = this.form.controls;
            if (!bank || (bank.salaryTransitIban && bankAccount.enabled)) {
                bankAccount.disable();
                bankAccount.patchValue('');
            }
            else if (bank && !bank.salaryTransitIban && bankAccount.disabled) {
                // bankAccount.patchValue('');
                bankAccount.enable();
            }
            else if (bank) {
                bankAccount.updateValueAndValidity();
            }
        }));
    }
    // onEmployeeUpdate(items: Employee[]) {}
    // onEmployeeAdded(items: Employee[]) {
    //   this.formDirective.resetForm(this.formDirective.value);
    // }
    openBanksDictionary() {
        this.modals
            .open(_payments_components_banks_receivers_banks_receivers_component__WEBPACK_IMPORTED_MODULE_11__.BanksReceiversComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_max-height',
            centered: true,
        })
            .result.then((item) => item && this.form.controls.bankReceiver.patchValue(item.id))
            .catch(() => {
            /*  no selection or dismiss */
        });
    }
};
SalaryPaymentComponent.ctorParameters = () => [
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_7__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_6__.CompanyService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDateParserFormatter },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_2__.MaskedService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_5__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_8__.PaymentApiService },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__.DictionariesService },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_9__.PaymentsPipelineService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService },
    { type: _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_10__.PaymentsFormFactoryService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_13__.AuthorityPermissionsService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_14__.FeatureFlagsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_16__.BankFromAccountPipe }
];
SalaryPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
        selector: 'j-salary-payment',
        template: _salary_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salary_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalaryPaymentComponent);



/***/ }),

/***/ 84422:
/*!********************************************************************************!*\
  !*** ./src/app/payments/containers/social-payment/social-payment.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialPaymentComponent": () => (/* binding */ SocialPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _social_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-payment.component.html?ngResource */ 40774);
/* harmony import */ var _social_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-payment.component.scss?ngResource */ 35262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @payments/services/payments-form-factory.service */ 39996);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @payments/config/amounts */ 51476);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/pipes */ 39843);






















let SocialPaymentComponent = class SocialPaymentComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_2__.BasePaymentContainer {
    constructor(paymentsService, companyService, dateAdapter, route, router, maskService, accountsService, modalService, api, dictionaries, pipeline, translateService, paymentsFormsFactory, featureFlagsService, authorityPermissionsService, bankFromAccount) {
        super(paymentsFormsFactory.createSocialForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipeline, translateService, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.dateAdapter = dateAdapter;
        this.route = route;
        this.router = router;
        this.maskService = maskService;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.api = api;
        this.dictionaries = dictionaries;
        this.pipeline = pipeline;
        this.translateService = translateService;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.featureFlagsService = featureFlagsService;
        this.authorityPermissionsService = authorityPermissionsService;
        this.bankFromAccount = bankFromAccount;
        this.masks = {
            number: 'paymentNum',
            amount: 'amount',
            knp: 'knp',
        };
        this.employeeMinAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__.SOCIAL_EMPLOYEE_MIN_AMOUNT;
        this.employeeMaxAmount = _payments_config_amounts__WEBPACK_IMPORTED_MODULE_14__.SOCIAL_EMPLOYEE_MAX_AMOUNT;
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_8__.PAYMENT_TYPE.SOCIAL;
    }
    ngOnInit() {
        super.ngOnInit();
        this.dateLimit = this.paymentsService.stdDateRangeNgb;
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)((next) => this.checkPersonalAccounts(next)));
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.listenWorkingDays();
        this.combineEmployeesAmount();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenPurposeMessageStream();
        this.knp$ = this.combineKNP();
    }
};
SocialPaymentComponent.ctorParameters = () => [
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDateParserFormatter },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_4__.MaskedService },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_5__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_9__.PaymentApiService },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__.DictionariesService },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_10__.PaymentsPipelineService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService },
    { type: _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_11__.PaymentsFormFactoryService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_13__.FeatureFlagsService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_12__.AuthorityPermissionsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_15__.BankFromAccountPipe }
];
SocialPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'j-social-payment',
        template: _social_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_social_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SocialPaymentComponent);



/***/ }),

/***/ 4741:
/*!**************************************************************************!*\
  !*** ./src/app/payments/containers/tax-payment/tax-payment.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxPaymentComponent": () => (/* binding */ TaxPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tax_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-payment.component.html?ngResource */ 54747);
/* harmony import */ var _tax_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-payment.component.scss?ngResource */ 43366);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/containers/base-payment.container */ 15695);
/* harmony import */ var _payments_components_generic_dictionary_generic_dictionary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @payments/components/generic-dictionary/generic-dictionary.component */ 87510);
/* harmony import */ var _payments_components_ugd_dictionary_ugd_dictionary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @payments/components/ugd-dictionary/ugd-dictionary.component */ 51782);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 64398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/dictionaries.service */ 9010);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/directives */ 94221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @payments/services/payments-pipeline.service */ 91024);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @payments/services/payment-api.service */ 74967);
/* harmony import */ var _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @payments/services/payments-form-factory.service */ 39996);
/* harmony import */ var _payments_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @payments/components */ 58886);
/* harmony import */ var _authorities_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @authorities/services */ 30285);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/pipes */ 39843);




























let TaxPaymentComponent = class TaxPaymentComponent extends _payments_containers_base_payment_container__WEBPACK_IMPORTED_MODULE_3__.BasePaymentContainer {
    constructor(route, router, paymentsService, companyService, dateAdapter, maskService, translate, datePipe, accountsService, modalService, pipelines, api, dictionaries, featureFlagsService, paymentsFormsFactory, authorityPermissionsService, bankFromAccount) {
        super(paymentsFormsFactory.createTaxForm(), api, route, router, companyService, paymentsService, maskService, modalService, dictionaries, pipelines, translate, authorityPermissionsService, featureFlagsService, bankFromAccount);
        this.route = route;
        this.router = router;
        this.paymentsService = paymentsService;
        this.companyService = companyService;
        this.dateAdapter = dateAdapter;
        this.maskService = maskService;
        this.translate = translate;
        this.datePipe = datePipe;
        this.accountsService = accountsService;
        this.modalService = modalService;
        this.pipelines = pipelines;
        this.api = api;
        this.dictionaries = dictionaries;
        this.featureFlagsService = featureFlagsService;
        this.paymentsFormsFactory = paymentsFormsFactory;
        this.authorityPermissionsService = authorityPermissionsService;
        this.bankFromAccount = bankFromAccount;
        this.associatedFieldTpl = undefined;
        this.masks = {
            number: 'paymentNum',
            amount: 'amount',
            vin: 'vin',
            knp: 'knp',
            kbk: 'kbk',
            protocolNumber: 'protocol',
            bankAccount: 'tengeAccount',
        };
        // selectedAccount$: Observable<Account>;
        this.commission$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(0);
        this.protocolMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject('');
        this.vinLength = 17;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription();
        this.paymentType = _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.TAX;
    }
    ngOnInit() {
        super.ngOnInit();
        this.dateLimit = this.paymentsService.stdDateRangeNgb;
        this.accountStore = this.accountsService.store;
        this.acceptableAccounts$ = this.paymentsService
            .combineAcceptableAccounts(this.accountStore)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)((next) => this.checkPersonalAccounts(next)));
        this.getMaskConfig();
        this.createControlsStream(this.form);
        this.combineKBK(this.paymentType);
        this.knp$ = this.combineKNP([
            (knps) => this.dictionaries.selectByPaymentType(knps, {
                type: _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.TAX,
                sortFavourite: false,
            }),
        ]);
        this.listenWorkingDays();
        this.listenCommission();
        this.listenTotal();
        this.provideAmountMessage();
        this.listenDateMessageStream();
        this.listenKnpUpdates();
        this.subs.add(this.createPeriodMessage$().subscribe(this.periodMessage$));
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([
            this.controlsStream.vin.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((v) => (v ? `VIN${v}/V` : ''))),
            this.controlsStream.protocolNumber.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((v) => (v ? `ADM${v}/A` : ''))),
        ]).subscribe((values) => {
            this.protocolMessage$.next(values.join(' '));
        }));
        const purposeParts = [
            this.protocolMessage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((message) => ['protocol', message])),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([
                this.translate.get('SHARED.NOT_SELECTED'),
                this.translate.get('SHARED.TIME.PERIOD'),
                this.periodMessage$,
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(([NOT_SELECTED, PERIOD, message]) => {
                if (message && message !== NOT_SELECTED) {
                    return `${PERIOD}: ${message}.`;
                }
                return '';
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((message) => ['period', message])),
        ];
        this.listenPurposeMessageStream(purposeParts, [
            'protocol',
            'kbk',
            'knp',
            'period',
        ]);
        this.subs.add(this.controlsStream.kbk.pipe().subscribe((code) => {
            const { protocolNumber, vin } = this.form.controls;
            if (this.rules.kbkCodeVinReq.some((item) => item === code)) {
                vin.enable();
                protocolNumber.disable();
                protocolNumber.value && protocolNumber.patchValue('');
                this.associatedFieldTpl = this.vinTpl;
            }
            else if (/^204\d+$/.test(code)) {
                vin.disable();
                vin.value && vin.patchValue('');
                protocolNumber.enable();
                this.associatedFieldTpl = this.protocolNumberTpl;
            }
            else {
                this.associatedFieldTpl = null;
                vin.disable();
                protocolNumber.disable();
                protocolNumber.value && protocolNumber.patchValue('');
                vin.value && vin.patchValue('');
            }
        }));
        this.subs.add(this.controlsStream.intervalEnabled
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.throttleTime)(300, undefined, { leading: true, trailing: true }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)())
            .subscribe((v) => {
            const { period, periodEnd, periodStart } = this.form.controls;
            if (v) {
                [periodEnd, periodStart].forEach((c) => c.enable());
                period.disable();
            }
            else {
                [periodEnd, periodStart].forEach((c) => c.disable());
                period.enable();
            }
        }));
        if (!this.form.get('bankAccount').value) {
            this.form.get('bankAccount').setValue(_shared_models__WEBPACK_IMPORTED_MODULE_10__.SPECIAL_ACCOUNTS.TAX_ACCOUNT);
        }
    }
    get intervalSwitchLabel() {
        return this.form.controls.intervalEnabled.value
            ? 'PAYMENTS.INTERVAL.ENABLED'
            : 'PAYMENTS.INTERVAL.DISABLED';
    }
    onKbkSelect(kbk) {
        if (!this.form.controls.knp.value && kbk.associatedKnpList) {
            this.form.controls.knp.setValue(kbk.associatedKnpList[0]);
        }
    }
    openDepartmentDictionary(select, event) {
        event && event.preventDefault();
        if (select) {
            select.blur();
            select.close();
        }
        this.modalService
            .open(_payments_components_ugd_dictionary_ugd_dictionary_component__WEBPACK_IMPORTED_MODULE_5__.UgdDictionaryComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_max-height',
            centered: true,
        })
            .result.then((item) => {
            this.form.controls.ugd.setValue(item.code);
        })
            .catch(() => {
            /*  no selection or dismiss */
        });
    }
    openKBKDictionary(select, event) {
        event && event.preventDefault();
        if (select) {
            select.blur();
            select.close();
        }
        const modal = this.modalService.open(_payments_components_generic_dictionary_generic_dictionary_component__WEBPACK_IMPORTED_MODULE_4__.GenericDictionaryComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_max-height',
            centered: true,
        });
        Object.assign(modal.componentInstance, {
            store: this.kbkStore,
        });
        modal.result
            .then((item) => {
            this.form.controls.kbk.setValue(item.code);
        })
            .catch(() => {
            /*  no selection or dismiss */
        });
    }
    onUgdSelect(ugd) {
        // this.form.controls.knp.patchValue(ugd.knpCode);
    }
    // showResult() {
    //   const modal = this.modalService.open(PaymentResultComponent, {
    //     backdropClass: 'backdrop_light',
    //     windowClass: 'modal_light modal_sm',
    //     centered: true,
    //     backdrop: 'static',
    //   });
    //   Object.assign(modal.componentInstance, {
    //     result: true,
    //     currency: 'KZT',
    //     amount: +this.form.controls.amount.value + this.commission$.getValue(),
    //     multySubscribers: false,
    //     hasRights: true,
    //   });
    // }
    createPeriodMessage$() {
        const { intervalEnabled, periodEnd, periodStart, period } = this.controlsStream;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([
            intervalEnabled,
            this.translate.get('SHARED.NOT_SELECTED'),
            period,
            periodStart,
            periodEnd,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.debounceTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(([intervalEnabledV, notSelected, ...rest]) => {
            const [periodV, periodStartV, periodEndV] = rest.map((v) => v ? this.datePipe.transform(v, 'MM.yyyy') : '');
            if ((!intervalEnabledV && !periodV) ||
                (intervalEnabledV && !periodStartV && !periodEndV)) {
                return notSelected;
            }
            if (intervalEnabledV) {
                return `${periodStartV || notSelected} - ${periodEndV || notSelected}`;
            }
            return `${periodV || notSelected}`;
        }));
    }
    sendPayment() {
        return super.sendPayment(this.constructTaxPaymentBody());
    }
    saveToDraft() {
        return super.saveToDraft(this.constructTaxPaymentBody());
    }
    openKnpDictionary(select, event) {
        select.close();
        select.blur();
        setTimeout(() => {
            const modalRef = this.modals.open(_payments_components__WEBPACK_IMPORTED_MODULE_15__.KnpDictionaryComponent, {
                backdropClass: 'backdrop_light',
                windowClass: 'modal_light modal_max-height',
                centered: true,
            });
            modalRef.componentInstance.paymentType = this.paymentType;
            modalRef.result
                .then((item) => {
                this.form.controls.knp.patchValue(item.code);
            })
                .catch(() => {
                /*  no selection or dismiss */
            });
        }, 0);
    }
    constructTaxPaymentBody() {
        const formValue = this.form.value;
        const protocol = this.protocolMessage$.getValue();
        let purpose = '';
        if (protocol) {
            purpose = this.purposeMessage$
                .getValue()
                .replace(protocol, [protocol, formValue.purpose].filter((v) => !!v).join(' '));
        }
        else {
            purpose = [formValue.purpose, this.purposeMessage$.getValue()]
                .filter((v) => !!v)
                .join('. ');
        }
        return Object.assign(Object.assign({}, formValue), { purpose });
    }
    listenKnpUpdates() {
        this.knp$.subscribe((list) => {
            this.filteredKnpList = list;
        });
    }
    get vinMessage() {
        var _a, _b;
        if (!this.form.controls.vin.value ||
            this.form.controls.vin.value.length === 0) {
            return this.translate.instant('PAYMENTS.VIN_MESSAGE.OPTIONAL');
        }
        if (((_a = this.form.controls.vin.value) === null || _a === void 0 ? void 0 : _a.length) < this.vinLength) {
            return this.translate.instant('PAYMENTS.VIN_MESSAGE.LESS', {
                length: this.vinLength,
            });
        }
        if (((_b = this.form.controls.vin.value) === null || _b === void 0 ? void 0 : _b.length) > this.vinLength) {
            return this.translate.instant('PAYMENTS.VIN_MESSAGE.MORE', {
                length: this.vinLength,
            });
        }
        return '';
    }
};
TaxPaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_27__.Router },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_6__.PaymentsService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_9__.CompanyService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbDateParserFormatter },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_7__.MaskedService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_30__.DatePipe },
    { type: _accounts_index__WEBPACK_IMPORTED_MODULE_2__.AccountsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModal },
    { type: _payments_services_payments_pipeline_service__WEBPACK_IMPORTED_MODULE_12__.PaymentsPipelineService },
    { type: _payments_services_payment_api_service__WEBPACK_IMPORTED_MODULE_13__.PaymentApiService },
    { type: _shared_services_dictionaries_service__WEBPACK_IMPORTED_MODULE_8__.DictionariesService },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_17__.FeatureFlagsService },
    { type: _payments_services_payments_form_factory_service__WEBPACK_IMPORTED_MODULE_14__.PaymentsFormFactoryService },
    { type: _authorities_services__WEBPACK_IMPORTED_MODULE_16__.AuthorityPermissionsService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_18__.BankFromAccountPipe }
];
TaxPaymentComponent.propDecorators = {
    ngForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_31__.ViewChild, args: [_angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgForm,] }],
    focusableContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_31__.ViewChild, args: [_shared_directives__WEBPACK_IMPORTED_MODULE_11__.FocusableContainerDirective,] }],
    vinTpl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_31__.ViewChild, args: ['vinTpl', { read: _angular_core__WEBPACK_IMPORTED_MODULE_31__.TemplateRef },] }],
    protocolNumberTpl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_31__.ViewChild, args: ['protocolNumberTpl', { read: _angular_core__WEBPACK_IMPORTED_MODULE_31__.TemplateRef },] }]
};
TaxPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_33__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.Component)({
        selector: 'j-tax-payment',
        template: _tax_payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tax_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaxPaymentComponent);

/*Если ничего не заполнено: “Необязательное поле“.

Если заполнен хотя бы один символ: “Введенный VIN- код менее 17 символов”.

Если заполнен полностью, то текст пропадает.

Если заполнен полностью, а затем стерт какой-то символ из поля, то снова показывается 2 пункт, если стерты все символы, то 1 пункт.*/


/***/ }),

/***/ 58644:
/*!********************************************************************************!*\
  !*** ./src/app/payments/containers/tenge-payments/tenge-payments.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TengePaymentsComponent": () => (/* binding */ TengePaymentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tenge_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenge-payments.component.html?ngResource */ 18323);
/* harmony import */ var _tenge_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenge-payments.component.scss?ngResource */ 16075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations */ 73510);
/* harmony import */ var _shared_animations_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/helpers */ 87263);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _payments_payments_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @payments/payments-routes */ 38114);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);













let TengePaymentsComponent = class TengePaymentsComponent extends _shared_animations_helpers__WEBPACK_IMPORTED_MODULE_3__.RouterSlideAnimation {
    constructor(navService, router, paymentsService, location) {
        super();
        this.navService = navService;
        this.router = router;
        this.paymentsService = paymentsService;
        this.location = location;
        this.routes = _payments_payments_routes__WEBPACK_IMPORTED_MODULE_5__.paymentsRoutes;
    }
    ngOnInit() {
        super.ngOnInit();
        this.title$ = this.paymentsService.rootTitle$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((v) => `PAYMENTS.${v}`));
    }
    onClose() {
        this.navService.retrieveContractBadges();
        this.navService.retrieveLetterBadges();
        this.location.back();
    }
};
TengePaymentsComponent.ctorParameters = () => [
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_7__.NavService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_6__.PaymentsService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location }
];
TengePaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'j-tenge-payments',
        template: _tenge_payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewEncapsulation.None,
        animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_2__.routeTransitionAnimations],
        providers: [
            {
                provide: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
                useClass: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_4__.ShowOnDirtyErrorStateMatcher,
            },
        ],
        styles: [_tenge_payments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TengePaymentsComponent);



/***/ }),

/***/ 48076:
/*!*****************************************************!*\
  !*** ./src/app/payments/payments-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsRoutingModule": () => (/* binding */ PaymentsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payments_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routes */ 38114);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/can-deactivate-payment.guard */ 49653);
/* harmony import */ var _services_payment_type_switch_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/payment-type-switch.guard */ 54702);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ 5343);








const paymentId = '/:paymentId';
const routes = [
    {
        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.root,
        component: _containers__WEBPACK_IMPORTED_MODULE_4__.TengePaymentsComponent,
        children: [
            {
                path: '',
                canActivate: [_services_payment_type_switch_guard__WEBPACK_IMPORTED_MODULE_3__.PaymentTypeSwitchGuard],
            },
            {
                path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.root,
                component: _containers__WEBPACK_IMPORTED_MODULE_4__.BudgetPaymentsComponent,
                data: { animation: 'slideOrFade', index: 2 },
                children: [
                    {
                        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.tax,
                        matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.tax, 'paymentId'),
                        component: _containers__WEBPACK_IMPORTED_MODULE_4__.TaxPaymentComponent,
                        canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                        data: { animation: 'slideOrFade', index: 21 },
                    },
                    {
                        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.pension,
                        matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.pension, 'paymentId'),
                        component: _containers__WEBPACK_IMPORTED_MODULE_4__.PensionPaymentComponent,
                        canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                        data: { animation: 'slideOrFade', index: 22 },
                    },
                    {
                        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.social,
                        matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.social, 'paymentId'),
                        component: _containers__WEBPACK_IMPORTED_MODULE_4__.SocialPaymentComponent,
                        canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                        data: { animation: 'slideOrFade', index: 23 },
                    },
                    {
                        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.osms,
                        matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.osms, 'paymentId'),
                        component: _containers__WEBPACK_IMPORTED_MODULE_4__.MedicalPaymentComponent,
                        canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                        data: { animation: 'slideOrFade', index: 24 },
                    },
                    {
                        path: '**',
                        redirectTo: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.statePaymentsRoutes.tax,
                    },
                ],
            },
            {
                path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.order,
                matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.order, 'paymentId'),
                component: _containers__WEBPACK_IMPORTED_MODULE_4__.PaymentOrderComponent,
                canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                data: { animation: 'slideOrFade', index: 1 },
            },
            {
                path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.salary,
                matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.salary, 'paymentId'),
                component: _containers__WEBPACK_IMPORTED_MODULE_4__.SalaryPaymentComponent,
                canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
                data: { animation: 'slideOrFade', index: 3 },
            },
            // catch case when we have only id without type or provide easy navigation by id
            // and restore state without explicit direct payment type route
            {
                path: ':paymentId',
                canActivate: [_services_payment_type_switch_guard__WEBPACK_IMPORTED_MODULE_3__.PaymentTypeSwitchGuard],
            },
            {
                path: '**',
                redirectTo: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.order,
            },
        ],
    },
    {
        path: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.paymentsRoutes.foreignCurrency,
        canDeactivate: [_services_can_deactivate_payment_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivatePaymentGuard],
        matcher: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.factoryUserPageMatcher)(_payments_routes__WEBPACK_IMPORTED_MODULE_0__.paymentsRoutes.foreignCurrency, 'paymentId'),
        component: _containers__WEBPACK_IMPORTED_MODULE_4__.CurrencyPaymentsComponent,
    },
    {
        path: '**',
        redirectTo: _payments_routes__WEBPACK_IMPORTED_MODULE_0__.tengePaymentsRoutes.root,
    },
];
let PaymentsRoutingModule = class PaymentsRoutingModule {
};
PaymentsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], PaymentsRoutingModule);



/***/ }),

/***/ 5335:
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsModule": () => (/* binding */ PaymentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);
/* harmony import */ var _accounts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @accounts/index */ 15913);
/* harmony import */ var _contracts_contracts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @contracts/contracts.module */ 19168);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_select_module_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/select-module/select.module */ 31259);
/* harmony import */ var _utils_typed_reactive_form_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/typed-reactive-form-helper */ 87497);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-routing.module */ 48076);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ 58886);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ 5343);
















let PaymentsModule = class PaymentsModule {
};
PaymentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_7__.PAYMENTS_CONTAINERS, _components__WEBPACK_IMPORTED_MODULE_6__.PAYMENTS_COMPONENTS],
        providers: [
            _utils_typed_reactive_form_helper__WEBPACK_IMPORTED_MODULE_4__.FormBuilderTypeSafe,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__.NgxSkeletonLoaderModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule,
            _accounts_index__WEBPACK_IMPORTED_MODULE_0__.AccountsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _shared_select_module_select_module__WEBPACK_IMPORTED_MODULE_3__.SelectModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__.PaymentsRoutingModule,
            _contracts_contracts_module__WEBPACK_IMPORTED_MODULE_1__.ContractsModule,
        ],
        exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPopoverModule],
    })
], PaymentsModule);



/***/ }),

/***/ 87263:
/*!**********************************************!*\
  !*** ./src/app/shared/animations/helpers.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterSlideAnimation": () => (/* binding */ RouterSlideAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 89221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24514);




let RouterSlideAnimation = class RouterSlideAnimation {
    constructor() {
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.itemChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.routerTrigger$ = this.itemChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(this.itemChanges$.getValue()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([prev, next]) => {
            const params = {
                offsetEnterX: 0,
                offsetLeaveX: 0,
            };
            if (prev !== 0) {
                params.offsetEnterX = prev > next ? -100 : 100;
                params.offsetLeaveX = prev > next ? 100 : -100;
            }
            return {
                value: next,
                params,
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
    }
    ngOnInit() {
        this.subs.add(this.routerTrigger$.subscribe());
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onActivate(e, outlet) {
        if (outlet.activatedRouteData &&
            outlet.activatedRouteData['animation'] &&
            outlet.activatedRouteData['index'] !== this.itemChanges$.getValue()) {
            this.itemChanges$.next(outlet.activatedRouteData['index']);
        }
    }
};
RouterSlideAnimation.ctorParameters = () => [];
RouterSlideAnimation = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive)()
], RouterSlideAnimation);



/***/ }),

/***/ 89221:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 60014);

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        let pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    }
}


/***/ }),

/***/ 90050:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/budget-payments/budget-payments.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtcGF5bWVudHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 21011:
/*!*************************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payment/currency-payment.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".payments__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.payment-section--submit {\n  text-align: right;\n}\n\n.payment-section {\n  max-width: 582px;\n}\n\n.payment-section--purpose-length {\n  position: absolute;\n  right: 0.8rem;\n  top: 0.4rem;\n  z-index: 1;\n}\n\n.payment-section--summary .payment-section--amount-warn {\n  color: #666c72;\n}\n\n@media (min-width: 960px) {\n  .payment-section--summary .payment-section--amount-warn {\n    width: 70%;\n    text-align: right;\n    margin-left: auto;\n  }\n}\n\n.kbe-account-row {\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 960px) {\n  .kbe-account-row {\n    display: grid;\n    grid-column-gap: 12px;\n    column-gap: 12px;\n    grid-template-columns: 130px 1fr;\n  }\n}\n\n@media (min-width: 960px) {\n  .kbe-account-row .form-group {\n    margin-bottom: 0;\n  }\n}\n\n.intermediatory-content {\n  width: 100%;\n}\n\n.intermediatory-input {\n  margin-top: 0.5rem;\n  position: relative;\n  margin-bottom: 0.25rem;\n}\n\n.intermediatory-input .bic-dropdown {\n  left: 0;\n  right: 0;\n}\n\n.list-dictionary {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n}\n\n.list-dictionary span {\n  display: block;\n}\n\n.comission-message {\n  margin-top: -12px;\n}\n\n.j-select .j-spinner-loader {\n  top: 19px;\n}\n\n.contract-row {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.contract-row > *:first-child {\n  padding-right: 1rem;\n}\n\n.contracts__empty {\n  text-align: center;\n  max-width: 312px;\n  margin: 0 auto;\n}\n\n.contracts-description {\n  position: relative;\n}\n\n.contracts-description.is-loading small {\n  opacity: 0.5;\n}\n\n.contracts-scroll-link {\n  border-bottom: 1px dashed #1586bb;\n}\n\n.contracts-scroll-link:hover {\n  border-color: #ef5630;\n}\n\n.russian-row {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.russian-row > * {\n  width: 100%;\n  max-width: calc(50% - 6px);\n}\n\n.recipient-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BheW1lbnRzLnNoYXJlZC5zY3NzIiwiY3VycmVuY3ktcGF5bWVudC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNERjs7QUFIQTtFQUNFLGlCQUFBO0FBTUY7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFNRjs7QUFGRTtFQUNFLGNDTk87QURXWDs7QUVvQ0k7RUYxQ0Y7SUFHSSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU9KO0FBQ0Y7O0FBSEE7RUFDRSxtQkFBQTtBQU1GOztBRXlCSTtFRmhDSjtJQUtJLGFBQUE7SUFDQSxxQkFBQTtJQUFBLGdCQUFBO0lBQ0EsZ0NBQUE7RUFNRjtBQUNGOztBRWtCSTtFRnRCRjtJQUVJLGdCQUFBO0VBTUo7QUFDRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUtGOztBQUhFO0VBQ0UsT0FBQTtFQUNBLFFBQUE7QUFLSjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkU7RUFDRSxjQUFBO0FBSUo7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsU0FBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUdGOztBQUFJO0VBQ0UsbUJBQUE7QUFFTjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVJO0VBQ0UsWUFBQTtBQUFOOztBQUtBO0VBQ0UsaUNBQUE7QUFGRjs7QUFJRTtFQUNFLHFCQ3ZFSztBRHFFVDs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFLRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFKRiIsImZpbGUiOiJjdXJyZW5jeS1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcblxuLnBheW1lbnRzX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3BheW1lbnRzLnNoYXJlZC5zY3NzJztcclxuXHJcbi5wYXltZW50LXNlY3Rpb24tLXN1Ym1pdCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYXltZW50LXNlY3Rpb24ge1xyXG4gIG1heC13aWR0aDogNTgycHg7XHJcbn1cclxuXHJcbi5wYXltZW50LXNlY3Rpb24tLXB1cnBvc2UtbGVuZ3RoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDAuOHJlbTtcclxuICB0b3A6IDAuNHJlbTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucGF5bWVudC1zZWN0aW9uLS1zdW1tYXJ5IHtcclxuICAucGF5bWVudC1zZWN0aW9uLS1hbW91bnQtd2FybiB7XHJcbiAgICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5rYmUtYWNjb3VudC1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTMwcHggMWZyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmludGVybWVkaWF0b3J5LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW50ZXJtZWRpYXRvcnktaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuXHJcbiAgLmJpYy1kcm9wZG93biB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1kaWN0aW9uYXJ5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbWlzc2lvbi1tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAtMTJweDtcclxufVxyXG5cclxuLmotc2VsZWN0IC5qLXNwaW5uZXItbG9hZGVyIHtcclxuICB0b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5jb250cmFjdC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250cmFjdHNfX2VtcHR5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMTJweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRyYWN0cy1kZXNjcmlwdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYuaXMtbG9hZGluZyB7XHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250cmFjdHMtc2Nyb2xsLWxpbmsge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgJGJsdWUtbGlnaHQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICB9XHJcbn1cclxuXHJcbi5ydXNzaWFuLXJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICYgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjaXBpZW50LXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIi8vIFZhcmlhYmxlc1xyXG4vL1xyXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3JcclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXktMTAwOiAjZmFmN2Y3O1xyXG4kZ3JheS0yMDA6ICNmNmY3Zjg7XHJcbiRncmF5LTMwMDogI2VjZWVmMTtcclxuJGdyYXktNDAwOiAjZDZkYWRmO1xyXG4kZ3JheS01MDA6ICNiN2JlYzU7XHJcbiRncmF5LTYwMDogIzY2NmM3MjtcclxuJGdyYXktNzAwOiAjNDc0YjUyO1xyXG4kZ3JheS04MDA6ICNlOWVjZjE7XHJcbiRncmF5LTkwMDogI2RiZGZlMjtcclxuJGdyYXktMTAwMDogIzgyODI4MjtcclxuJGJsYWNrOiAjMWExYzFmO1xyXG5cclxuJGdyYXlzOiAoKTtcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJzEwMCc6ICRncmF5LTEwMCxcclxuICAgICcyMDAnOiAkZ3JheS0yMDAsXHJcbiAgICAnMzAwJzogJGdyYXktMzAwLFxyXG4gICAgJzQwMCc6ICRncmF5LTQwMCxcclxuICAgICc1MDAnOiAkZ3JheS01MDAsXHJcbiAgICAnNjAwJzogJGdyYXktNjAwLFxyXG4gICAgJzcwMCc6ICRncmF5LTcwMCxcclxuICAgICc4MDAnOiAkZ3JheS04MDAsXHJcbiAgKSxcclxuICAkZ3JheXNcclxuKTtcclxuXHJcbiRibHVlOiAjMjA0MTc3O1xyXG4kYmx1ZS1saWdodDogIzE1ODZiYjtcclxuJGJsdWUtd2hpdGU6ICNmNWY5ZmQ7XHJcbiRvcmFuZ2U6ICNlZjU2MzA7XHJcbiRvcmFuZ2UtZGFyazogI2Q0M2UxOTtcclxuJG9yYW5nZS1saWdodDogI2Y3YWI5ODtcclxuJHllbGxvdzogI2VmOGYwMDtcclxuJGdyZWVuOiAjMjM5YTU0O1xyXG4kZ3JlZW4tbGlnaHQ6ICM3NGJhNzI7XHJcbiRyZWQ6ICNmZjAwMDA7XHJcbiRyZWQtbGlnaHQ6ICNmZmVmZWY7XHJcblxyXG4kZ3JheTogJGdyYXktNTAwO1xyXG4kZ3JheS1kYXJrOiAkZ3JheS02MDA7XHJcbiRncmF5LWxpZ2h0OiAkZ3JheS00MDA7XHJcblxyXG4kY29sb3JzOiAoKTtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdibHVlJzogJGJsdWUsXHJcbiAgICAnYmx1ZS1saWdodCc6ICRibHVlLWxpZ2h0LFxyXG4gICAgJ2JsdWUtd2hpdGUnOiAkYmx1ZS13aGl0ZSxcclxuICAgICdvcmFuZ2UnOiAkb3JhbmdlLFxyXG4gICAgJ29yYW5nZS1kYXJrJzogJG9yYW5nZS1kYXJrLFxyXG4gICAgJ29yYW5nZS1saWdodCc6ICRvcmFuZ2UtbGlnaHQsXHJcbiAgICAneWVsbG93JzogJHllbGxvdyxcclxuICAgICdncmVlbic6ICRncmVlbixcclxuICAgICdncmVlbi1saWdodCc6ICRncmVlbi1saWdodCxcclxuICAgICdyZWQnOiAkcmVkLFxyXG4gICAgJ3JlZC1saWdodCc6ICRyZWQtbGlnaHQsXHJcbiAgICAnYmxhY2snOiAkYmxhY2ssXHJcbiAgICAnYmxhY2stbGlnaHQnOiAkZ3JheS03MDAsXHJcbiAgICAnZ3JheSc6ICRncmF5LTUwMCxcclxuICAgICdncmF5LWRhcmsnOiAkZ3JheS02MDAsXHJcbiAgICAnZ3JheS1saWdodCc6ICRncmF5LTQwMCxcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kc2Vjb25kYXJ5OiAkYmx1ZTtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJGluZm86ICRibHVlLWxpZ2h0O1xyXG4kd2FybmluZzogJHllbGxvdztcclxuJGRhbmdlcjogJHJlZDtcclxuJGxpZ2h0OiAkZ3JheS01MDA7XHJcbiRkYXJrOiAkYmxhY2s7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKTtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXHJcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcclxuICAgICdzdWNjZXNzJzogJHN1Y2Nlc3MsXHJcbiAgICAnaW5mbyc6ICRpbmZvLFxyXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcclxuICAgICdkYW5nZXInOiAkZGFuZ2VyLFxyXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxyXG4gICAgJ2RhcmsnOiAkZGFyayxcclxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vICR0ZXh0LWNvbG9yczogKCk7XHJcbi8vICR0ZXh0LWNvbG9yczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgICdkZWZhdWx0JzogJGJsYWNrLFxyXG4vLyAgICAgJ2xvdy1jb250cmFzdCc6ICRncmF5LTYwMCxcclxuLy8gICAgICdpbmZvJzogJGdyYXktNTAwLFxyXG4vLyAgICAgJ2Vycm9yJzogJHJlZCxcclxuLy8gICAgICdsaW5rJzogJGJsdWUsXHJcbi8vICAgICAnYmFsYW5jZSc6ICRncmVlbixcclxuLy8gICAgICdiYWxhbmNlLWNvaW5zJzogJGdyZWVuLWxpZ2h0LFxyXG4vLyAgICksXHJcbi8vICAgJHRleHQtY29sb3JzXHJcbi8vICk7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuJHNwYWNlcjogMXJlbTtcclxuJHNwYWNlcnM6ICgpO1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAvLyAwcHhcclxuICAgIDE6ICRzcGFjZXIgKiAwLjI1LFxyXG4gICAgLy8gNHB4IHh4cyxcclxuICAgIDI6ICRzcGFjZXIgKiAwLjUsXHJcbiAgICAvLyA4cHggeHMsXHJcbiAgICAzOiAkc3BhY2VyLFxyXG4gICAgLy8gMTZweCBzbVxyXG4gICAgNDogJHNwYWNlciAqIDEuNSxcclxuICAgIC8vIDI0cHggbWQsXHJcbiAgICA1OiAkc3BhY2VyICogMixcclxuICAgIC8vIDMycHggbGcsXHJcbiAgICA2OiAkc3BhY2VyICogMi41LFxyXG4gICAgLy8gNDBweCB4bCxcclxuICAgIDc6ICRzcGFjZXIgKiAzLjUsXHJcbiAgICAvLyA1NnB4IHh4bFxyXG4gICAgODogJHNwYWNlciAqIDQsXHJcbiAgICAvLyA2NHB4IHh4bFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG5cclxuJGJvZHktYmc6ICR3aGl0ZTtcclxuJGJvZHktY29sb3I6ICRkYXJrO1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcbiRsaW5rLWRlY29yYXRpb246IG5vbmU7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAkb3JhbmdlLWRhcms7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4vLyBQYXJhZ3JhcGhzXHJcbi8vXHJcbi8vIFN0eWxlIHAgZWxlbWVudC5cclxuXHJcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDY3MHB4LFxyXG4gIG1kOiA5NjBweCxcclxuICBsZzogMTI4MHB4LFxyXG4gIHhsOiAxOTIwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMjgwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1jb2x1bW5zOiAxMjtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4O1xyXG4kZ3JpZC1yb3ctY29sdW1uczogNjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1zbTogMS41O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1tZDogcmVteSgxMik7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAyLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjJyZW07XHJcblxyXG4vLyBMMFxyXG4kYm94LXNoYWRvdy14czogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDFcclxuJGJveC1zaGFkb3ctc206IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDJcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMM1xyXG4kYm94LXNoYWRvdy1sZzogMHB4IDE0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMNFxyXG4kYm94LXNoYWRvdy14bDogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAyNHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGU7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiR0cmFuc2l0aW9uLWZhZGU6IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogaGVpZ2h0IDAuMzVzIGVhc2U7XHJcbiR0cmFuc2l0aW9uLW1heC1oZWlnaHQ6IGFsbCAwLjZzIGVhc2U7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXHJcbiAgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7IC8vIDE0cHhcclxuJGZvbnQtc2l6ZS14czogcmVteSgxMik7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlcjtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiByZW15KDMwKTtcclxuJGgyLWZvbnQtc2l6ZTogcmVteSgyNik7XHJcbiRoMy1mb250LXNpemU6IHJlbXkoMjQpO1xyXG4kaDQtZm9udC1zaXplOiByZW15KDIyKTtcclxuJGg1LWZvbnQtc2l6ZTogcmVteSgyMCk7XHJcbiRoNi1mb250LXNpemU6IHJlbXkoMTgpO1xyXG5cclxuJGgxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMzBweCxcclxuICBzbTogMzZweCxcclxuICBtZDogNDhweCxcclxuICBsZzogNDhweCxcclxuICB4bDogNjBweCxcclxuKTtcclxuXHJcbi8vIGgyIHNpemVzXHJcbiRoMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI2cHgsXHJcbiAgc206IDMwcHgsXHJcbiAgbWQ6IDQwcHgsXHJcbiAgbGc6IDQ0cHgsXHJcbiAgeGw6IDU0cHgsXHJcbik7XHJcblxyXG4vLyBoMyBzaXplc1xyXG4kaDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAyNHB4LFxyXG4gIHNtOiAyNnB4LFxyXG4gIG1kOiAzMnB4LFxyXG4gIGxnOiAzNnB4LFxyXG4gIHhsOiA0NHB4LFxyXG4pO1xyXG5cclxuLy8gaDQgc2l6ZXNcclxuJGg0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjJweCxcclxuICBzbTogMjRweCxcclxuICBtZDogMjRweCxcclxuICBsZzogMjhweCxcclxuICB4bDogMjhweCxcclxuKTtcclxuXHJcbi8vIGg1IHNpemVzXHJcbiRoNS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIwcHgsXHJcbiAgc206IDIycHgsXHJcbiAgbWQ6IDIycHgsXHJcbiAgbGc6IDI0cHgsXHJcbiAgeGw6IDI0cHgsXHJcbik7XHJcblxyXG4vLyBoNiBzaXplc1xyXG4kaDYtZm9udC1zaXplczogKFxyXG4gIHhzOiAxOHB4LFxyXG4gIHNtOiAxOHB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAyMHB4LFxyXG4gIHhsOiAyMHB4LFxyXG4pO1xyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IG51bGw7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRoZWFkaW5ncy1jb2xvcjogbnVsbDtcclxuXHJcbiRwMC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIHhsOiAxOHB4LFxyXG4pO1xyXG5cclxuJHAyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTRweCxcclxuICBzbTogMTRweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEycHgsXHJcbiAgc206IDEycHgsXHJcbiAgbWQ6IDE0cHgsXHJcbiAgbGc6IDE0cHgsXHJcbiAgeGw6IDE0cHgsXHJcbik7XHJcblxyXG4kcDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMHB4LFxyXG4gIHNtOiAxMHB4LFxyXG4gIG1kOiAxMnB4LFxyXG4gIGxnOiAxMnB4LFxyXG4gIHhsOiAxMnB4LFxyXG4pO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuXHJcbiR0ZXh0LW11dGVkOiAkZ3JheS02MDA7XHJcblxyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVGFibGVzXHJcbi8vIC8vXHJcbi8vIC8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cclxuXHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCdXR0b25zICsgRm9ybXNcclxuLy8gLy9cclxuLy8gLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6IG51bGw7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6IHJlbXkoMSk7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDEuMnJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogJGxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMi41cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kYnRuLXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRidG4tZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGJ0bi1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuJGJ0bi13aGl0ZS1zcGFjZTogbnVsbDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktc206ICRpbnB1dC1idG4tcGFkZGluZy15LXNtO1xyXG4kYnRuLXBhZGRpbmcteC1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXgtc207XHJcbiRidG4tZm9udC1zaXplLXNtOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1saW5lLWhlaWdodC1zbTogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTtcclxuXHJcbiRidG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZztcclxuJGJ0bi1wYWRkaW5nLXgtbGc6ICRpbnB1dC1idG4tcGFkZGluZy14LWxnO1xyXG4kYnRuLWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGc7XHJcbiRidG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc7XHJcblxyXG4kYnRuLWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRidG4tZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuNTtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiA4cHg7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAvLyBGb3Jtc1xyXG5cclxuLy8gJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbXkoMjApO1xyXG4kaW5wdXQtZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRpbnB1dC1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRkYXJrO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG5cclxuJGlucHV0LWZvY3VzLWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuLy8gJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAkZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICRpbnB1dC1wYWRkaW5nLXk7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogMS4yNXJlbTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxLjI1cmVtOyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmc6ICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6IGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSBuby1yZXBlYXQgcmlnaHRcclxuICAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKFxyXG4gIDFlbSAqIDAuNzUsXHJcbiAgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAwLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArXHJcbiAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ1xyXG4pICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHRcclxuICAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZlxyXG4gICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtdGV4dDogKFxyXG4vLyAgIGVuOiBcIkJyb3dzZVwiXHJcbi8vICkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHZhbGlkYXRpb25cclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xyXG4vLyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgIFwidmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICAgIFwiaW52YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICApLFxyXG4vLyAgICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXHJcbi8vICk7XHJcblxyXG4vLyAvLyBaLWluZGV4IG1hc3RlciBsaXN0XHJcbi8vIC8vXHJcbi8vIC8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xyXG4vLyAvLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXHJcblxyXG4vLyAkemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2c1xyXG5cclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdmJhclxyXG5cclxuLy8gJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vIC8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xyXG4vLyAkbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLW1pbi13aWR0aDogMTByZW07XHJcbiRkcm9wZG93bi1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJGRyb3Bkb3duLXNwYWNlcjogMC4xMjVyZW07XHJcbiRkcm9wZG93bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGRyb3Bkb3duLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJGRyb3Bkb3duLWJnOiAkd2hpdGU7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjE1KTtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsXHJcbiAgJGRyb3Bkb3duLWJvcmRlci13aWR0aFxyXG4pO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogJG5hdi1kaXZpZGVyLW1hcmdpbi15O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkZ3JheS0yMDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjI1cmVtO1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIC8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC42cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxLjVyZW07XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6IDA7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJGxpbmstaG92ZXItY29sb3I7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogJGdyYXktODAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbi8vIC8vIEp1bWJvdHJvblxyXG5cclxuLy8gJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2FyZHNcclxuXHJcbi8vICRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvb2x0aXBzXHJcblxyXG4vLyAkdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAyNDZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjIpICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJHBvcG92ZXItYm9yZGVyLXJhZGl1cyxcclxuICAkcG9wb3Zlci1ib3JkZXItd2lkdGhcclxuKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogJGJveC1zaGFkb3cteGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xyXG5cclxuLy8gJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9hc3RzXHJcblxyXG4vLyAkdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiByZW15KDEyKTtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIDAuMjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtO1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbWQ7XHJcblxyXG4vLyAkYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XHJcbi8vICRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xyXG4vLyAvLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXHJcbi8vIC8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cclxuLy8gJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC43NXJlbTtcclxuXHJcbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xyXG4vLyAkbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiBudWxsO1xyXG4kbW9kYWwtY29udGVudC1iZzogJHdoaXRlO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogbm9uZTtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRibGFjaztcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogMTA0NHB4O1xyXG4vLyAkbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsZXJ0c1xyXG4vLyAvL1xyXG4vLyAvLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbi8vICRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByb2dyZXNzIGJhcnNcclxuXHJcbi8vICRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIExpc3QgZ3JvdXBcclxuXHJcbi8vICRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6IDBweDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbi8vICR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGaWd1cmVzXHJcblxyXG4vLyAkZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XHJcbi8vICRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJyZWFkY3J1bWJzXHJcblxyXG4vLyAkYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcm91c2VsXHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXHJcblxyXG4vLyAvLyBTcGlubmVyc1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDbG9zZVxyXG5cclxuLy8gJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENvZGVcclxuXHJcbi8vICRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xyXG4vLyAkY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBVdGlsaXRpZXNcclxuXHJcbi8vICRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcclxuLy8gJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xyXG4vLyAkcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByaW50aW5nXHJcblxyXG4vLyAkcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcclxuLy8gJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vIEp5c2FuIFZhcmlhYmxlc1xyXG5cclxuQGZ1bmN0aW9uIHNwYWNlKCRzaXplKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRzcGFjZXJzLCAka2V5OiAkc2l6ZSk7XHJcbn1cclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA2MnB4O1xyXG4kaGVhZGVyLWhlaWdodC1tZDogMTAwcHg7XHJcbiRoZWFkZXItd2lkdGg6IDI4MHB4O1xyXG5cclxuJGJ0bi1taW4td2lkdGg6IDE2NHB4O1xyXG5cclxuLy8gSi1pbnB1dFxyXG4kai1pbnB1dC1mb250LXNpemU6IDFyZW07XHJcbiRqLWlucHV0LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcclxuJGotaW5wdXQtZm9udC1zdHlsZTogbm9ybWFsO1xyXG4kai1pbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcblxyXG4kai1pbnB1dC1saW5lLWhlaWdodDogMjBweDtcclxuJGotaW5wdXQtcGFkZGluZy15OiAxNy41cHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteDogMjBweDtcclxuXHJcbiRqLWlucHV0LWJvcmRlci13aWR0aDogMXB4O1xyXG4kai1pbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRqLWlucHV0LWJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yOiAkYmxhY2s7XHJcbiRqLWlucHV0LW1hc2stY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1pY29uLWNvbG9yOiAkb3JhbmdlO1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZXJyb3I6ICRyZWQtbGlnaHQ7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1kaXNhYmxlZDogJGlucHV0LWRpc2FibGVkLWJnOyAvLyBmcm9tIGZpZ21hIHByaW1pdGl2ZXMgc2hvdWxkIGJlIGdyYXktMjAwXHJcblxyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3A6ICRqLWlucHV0LXBhZGRpbmcteSArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wLWFjdGl2ZTogMTBweDtcclxuJGotaW5wdXQtbGluay1wb3NpdGlvbi10b3A6IDE2cHg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ6ICRqLWlucHV0LXBhZGRpbmcteCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6ICRqLWlucHV0LWxpbmUtaGVpZ2h0O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LXBhZGRpbmctdG9wOiAyN3B4O1xyXG4kai1pbnB1dC1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuJGotaW5wdXQtbWFyZ2luLWJvdHRvbTogMTZweDtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1wb3NpdGlvbjogJGotaW5wdXQtcGFkZGluZy10b3AgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWNoYXItbGVuZ3RoOiA4Ljk5cHg7XHJcblxyXG4kai1pbnB1dC1idXR0b24tcG9zaXRpb246IDIwcHg7XHJcbiRqLWlucHV0LXNoYWRvdy1wb3NpdGlvbjogJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDtcclxuXHJcbiRqLWlucHV0LWxhYmVsLXotaW5kZXg6IDA7XHJcbiRqLWlucHV0LXNoYWRvdy16LWluZGV4OiAxO1xyXG4kai1pbnB1dC16LWluZGV4OiAyO1xyXG4kai1pbnB1dC1saW5rLXotaW5kZXg6IDM7XHJcbiRqLWlucHV0LWJ1dHRvbi16LWluZGV4OiA0O1xyXG5cclxuJGJveC1zaGFkb3ctdG8tdG9wLWxnOiAwIC0xcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6IHRydWU7XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 50065:
/*!***************************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payments/currency-payments.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS1wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 24659:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/medical-payment/medical-payment.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FsLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 55457:
/*!*******************************************************************************************!*\
  !*** ./src/app/payments/containers/payment-order/payment-order.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".payments__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.counterParty {\n  position: relative;\n  min-width: 40px;\n  height: 100%;\n}\n\nli.risk-li + li.risk-li {\n  margin-top: 0.5rem;\n}\n\n.j-select .j-spinner-loader {\n  top: 19px;\n}\n\n.contract-row {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.contract-row > *:first-child {\n  padding-right: 1rem;\n}\n\n.contracts__empty {\n  text-align: center;\n  max-width: 312px;\n  margin: 0 auto;\n}\n\n.contracts-description {\n  position: relative;\n}\n\n.contracts-description.is-loading small {\n  opacity: 0.5;\n}\n\n.contracts-scroll-link {\n  border-bottom: 1px dashed #1586bb;\n}\n\n.contracts-scroll-link:hover {\n  border-color: #ef5630;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BheW1lbnRzLnNoYXJlZC5zY3NzIiwicGF5bWVudC1vcmRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0RGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFKQTtFQUNFLFNBQUE7QUFPRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFPRjs7QUFKSTtFQUNFLG1CQUFBO0FBTU47O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGSTtFQUNFLFlBQUE7QUFJTjs7QUFDQTtFQUNFLGlDQUFBO0FBRUY7O0FBQUU7RUFDRSxxQkNSSztBRFVUIiwiZmlsZSI6InBheW1lbnQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4ucGF5bWVudHNfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vcGF5bWVudHMuc2hhcmVkLnNjc3MnO1xyXG5cclxuLmNvdW50ZXJQYXJ0eSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubGkucmlzay1saSArIGxpLnJpc2stbGkge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmotc2VsZWN0IC5qLXNwaW5uZXItbG9hZGVyIHtcclxuICB0b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5jb250cmFjdC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250cmFjdHNfX2VtcHR5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMTJweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRyYWN0cy1kZXNjcmlwdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYuaXMtbG9hZGluZyB7XHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250cmFjdHMtc2Nyb2xsLWxpbmsge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgJGJsdWUtbGlnaHQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICB9XHJcbn1cclxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIl19 */";

/***/ }),

/***/ 98098:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/pension-payment/pension-payment.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5zaW9uLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 52989:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/salary-payment/salary-payment.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".payments__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BheW1lbnRzLnNoYXJlZC5zY3NzIiwic2FsYXJ5LXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDREYiLCJmaWxlIjoic2FsYXJ5LXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4ucGF5bWVudHNfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuIiwiLnBheW1lbnRzX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 35262:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/social-payment/social-payment.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 43366:
/*!***************************************************************************************!*\
  !*** ./src/app/payments/containers/tax-payment/tax-payment.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".payments__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BheW1lbnRzLnNoYXJlZC5zY3NzIiwidGF4LXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDREYiLCJmaWxlIjoidGF4LXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4ucGF5bWVudHNfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuIiwiLnBheW1lbnRzX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 16075:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/tenge-payments/tenge-payments.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".payment-section--submit {\n  text-align: right;\n}\n\n.payment-section {\n  max-width: 582px;\n}\n\n.payment-section--purpose-length {\n  position: absolute;\n  right: 0.8rem;\n  top: 0.4rem;\n  z-index: 1;\n}\n\n.payment-section--summary .payment-section--amount-warn {\n  color: #666c72;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmdlLXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0U7RUFDRSxjQ0ZPO0FESVgiLCJmaWxlIjoidGVuZ2UtcGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuLnBheW1lbnQtc2VjdGlvbi0tc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucGF5bWVudC1zZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1ODJweDtcbn1cbi5wYXltZW50LXNlY3Rpb24tLXB1cnBvc2UtbGVuZ3RoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLjhyZW07XG4gIHRvcDogMC40cmVtO1xuICB6LWluZGV4OiAxO1xufVxuLnBheW1lbnQtc2VjdGlvbi0tc3VtbWFyeSB7XG4gIC5wYXltZW50LXNlY3Rpb24tLWFtb3VudC13YXJuIHtcbiAgICBjb2xvcjogJHRleHQtbXV0ZWQ7XG4gICAgLy8gVE9ETyBKU04tMzAyNyB0byBiZSBkaXNjdXNzZWRcbiAgICAvLyBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgLy8gICB3aWR0aDogNzAlO1xuICAgIC8vICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAvLyB9XG4gIH1cbn1cblxuXG4vLyAucGF5bWVudHMtd3JhcHBlciB7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgdG9wOiAwO1xuLy8gICB6LWluZGV4OiAxO1xuLy8gICByaWdodDogMDtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4vLyAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbi8vICAgb3BhY2l0eTogMDtcbi8vICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcblxuLy8gICAmLmlzLXNob3duIHtcbi8vICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgIH1cbi8vIH1cblxuLy8gLnBheW1lbnRzLWJhY2tkcm9wIHtcbi8vICAgY29udGVudDogJyc7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgdG9wOiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NywgMjQ4LCAwLjgpO1xuLy8gICB6LWluZGV4OiA1O1xuLy8gfVxuXG4vLyAucGF5bWVudHMtY29udGVudCB7XG4vLyAgIHotaW5kZXg6IDEwO1xuLy8gICByaWdodDogLTEwMCU7XG4vLyAgIHRvcDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBvdmVyZmxvdy15OiBhdXRvO1xuXG4vLyAgICYtLXNlbGVjdCB7XG4vLyAgICAgd2lkdGg6IDI1JTtcbi8vICAgICBtaW4td2lkdGg6IDQwMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IHNwYWNlKDQpIDBweCAwcHggc3BhY2UoNCk7XG4vLyAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3cteGw7XG4vLyAgIH1cblxuLy8gICAmLmlzLXNob3duIHtcbi8vICAgICByaWdodDogMDtcbi8vICAgfVxuLy8gfVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIl19 */";

/***/ }),

/***/ 67531:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/budget-payments/budget-payments.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"payment-section\">\r\n  <div class=\"form-group mb-5\">\r\n    <a routerLinkActive=\"active\"\r\n       [routerLink]=\"[routes.tenge.state.tax]\"\r\n       class=\"btn btn-sm btn-outline-dark btn-shadow\">{{ 'PAYMENTS.TABS.TAX' | translate }}</a>\r\n    <a routerLinkActive=\"active\"\r\n       [routerLink]=\"[routes.tenge.state.pension]\"\r\n       class=\"btn btn-sm btn-outline-dark btn-shadow ml-2\">{{ 'PAYMENTS.TABS.PENSION' | translate }}</a>\r\n    <a routerLinkActive=\"active\"\r\n       [routerLink]=\"[routes.tenge.state.social]\"\r\n       class=\"btn btn-sm btn-outline-dark btn-shadow ml-2\">{{ 'PAYMENTS.TABS.SOCIAL' | translate }}</a>\r\n    <a routerLinkActive=\"active\"\r\n       [routerLink]=\"[routes.tenge.state.osms]\"\r\n       class=\"btn btn-sm btn-outline-dark btn-shadow ml-2\">{{ 'PAYMENTS.TABS.MEDICAL' | translate }}</a>\r\n  </div>\r\n  <!-- <div *ngIf=\"accountMessages$ | async as info\"\r\n       class=\"form-section\">\r\n    <div class=\"alert alert-secondary\"\r\n         role=\"alert\">\r\n      {{info.message}}\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div [@slideRouteAnimations]=\"routerTrigger$ | async\"\r\n       class=\"outlet-animation-wrapper\">\r\n    <router-outlet (activate)='onActivate($event, outlet)'\r\n                   #outlet=\"outlet\"></router-outlet>\r\n  </div> -->\r\n\r\n  <div class=\"outlet-animation-wrapper\">\r\n    <router-outlet (activate)='onActivate($event, outlet)'\r\n                   #outlet=\"outlet\"></router-outlet>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 61600:
/*!*************************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payment/currency-payment.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\n                          [isLoading]=\"isPermissionsUpdating\"\n                          (retried)=\"updatePermissions()\"\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\n</j-restricted-placeholder>\n\n<ng-container *ngIf=\"!isRestricted\">\n  <div class=\"payment-section\">\n    <!-- <j-aml-alert></j-aml-alert> -->\n\n    <form #formDirective=\"ngForm\"\n          autocomplete=\"off\"\n          (submit)=\"onSubmit($event)\"\n          [formGroup]=\"form\"\n          jInvalidControlScroll\n          jFocusableContainer>\n\n      <!-- DEBIT_ACCOUNT -->\n      <fieldset class=\"mb-4\">\n        <h5 class=\"mb-4\"\n            translate>CURRENCY_PAYMENT.DEBIT_ACCOUNT</h5>\n        <j-account-dropdown #senderAccountDropdown\n                            (selected)=\"onSenderAccountSelect($event)\"\n                            [isLoading]=\"isAccountsLoading\"\n                            [isDisabledSelectable]=\"true\"\n                            [label]=\"'CURRENCY_PAYMENT.DEBIT_ACCOUNT'\"\n                            [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\n                            [accounts]=\"senderAccountsList\"></j-account-dropdown>\n\n        <div class=\"j-switch-wrap form-group\">\n          <j-switch [formControl]=\"form.controls.withinContract\"></j-switch>\n          <div class=\"ml-3\">\n            <strong translate>CURRENCY_PAYMENT.CONTRACTS.SWITCH.TITLE</strong>\n            <div [jLoading]=\"isContractsDescriptionLoading\"\n                 [jLoadingInverted]=\"true\"\n                 [class.is-loading]=\"isContractsDescriptionLoading\"\n                 *ngIf=\"isContractsDescriptionShown\"\n                 class=\"contracts-description\">\n              <small [innerHTML]=\"'CURRENCY_PAYMENT.CONTRACTS.SWITCH.DESCRIPTION'| translate: contractsSwitchDescriptionParams\"\n                     class=\"text-gray\"></small>\n            </div>\n          </div>\n        </div>\n        <ng-container *ngIf=\"withinContract\">\n          <div id=\"contractGroup\"\n               class=\"form-group mt-4\">\n            <j-form-field #contractsWrapper>\n              <j-label translate>CURRENCY_PAYMENT.RECIPIENT.CONTRACT</j-label>\n              <j-select #contractsSelect\n                        [loading]=\"isContractsLoading\"\n                        (change)=\"onContractSelect($event)\"\n                        [appendTo]=\"contractsWrapper.elementRef.nativeElement\"\n                        [jFocusOnReturn]=\"contractsSelect\"\n                        [formControl]=\"form.controls.contractId\"\n                        [clearable]=\"false\"\n                        bindValue=\"id\"\n                        [searchFn]=\"contractComparator\"\n                        [items]=\"filteredContracts\">\n                <ng-template j-header-tmp\n                             let-searchTerm=\"searchTerm\">\n                  <div class=\"mb-3\"\n                       *ngIf=\"!searchTerm && !isContractsLoading\">\n                    <button (click)=\"openContractsAddingModal()\"\n                            *ngIf=\"filteredContracts.length > 0\"\n                            type=\"button\"\n                            class=\"list-dictionary form-section--action btn btn-xs btn-link float-right\">\n                      <span translate>\n                        CURRENCY_PAYMENT.CONTRACTS.ADD_NEW\n                      </span>\n                    </button>\n                    <h6 translate>CURRENCY_PAYMENT.CONTRACTS.TITLE</h6>\n                  </div>\n                </ng-template>\n\n                <ng-template j-option-tmp\n                             let-item=\"item\">\n                  <div class=\"j-option-label text-wrap p3\">\n                    <div class=\"text-dark contract-row\">\n                      <span>{{ item.contractor.name }}</span>\n                      <j-money [money]=\"item.amount\"></j-money>\n                    </div>\n                    <div class=\"text-muted contract-row\">\n                      <span>{{ item.contractNumber }}</span>\n                      <div>\n                        <span translate=\"CURRENCY_PAYMENT.CONTRACTS.SELECT.REMAINDER\"></span>&nbsp;\n                        <j-money [money]=\"item.remainder\"></j-money>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n                <ng-template j-notfound-tmp>\n                  <ng-container *ngIf=\"contracts.length == 0\">\n                    <div class=\"contracts__empty\">\n                      <img src=\"assets/img/payments/no_contract.svg\">\n                      <div class=\"mx-auto mt-3 p2 text-muted\"\n                           [innerHTML]=\"'CURRENCY_PAYMENT.CONTRACTS.EMPTY_STATE' | translate\"></div>\n                      <a href=\"#\"\n                         (click)=\"openContractsAddingModal($event)\"\n                         class=\"link d-inline-block mt-3\">\n                        {{'CURRENCY_PAYMENT.CONTRACTS.ADD_NEW' | translate}}\n                      </a>\n                    </div>\n                  </ng-container>\n                  <ng-container *ngIf=\"contracts.length > 0\">\n                    <j-empty-placeholder label=\"CURRENCY_PAYMENT.CONTRACTS.NOT_FOUND\"></j-empty-placeholder>\n                    <div class=\"text-center my-2\">\n                      <a href=\"#\"\n                         (click)=\"openContractsAddingModal($event)\"\n                         class=\"link d-inline-block \">\n                        {{'CURRENCY_PAYMENT.CONTRACTS.ADD_NEW' | translate}}\n                      </a>\n                    </div>\n                  </ng-container>\n                </ng-template>\n                <ng-template j-label-tmp\n                             let-item=\"item\">\n                  {{ mapContractLabel(item || form.controls.contract.value) }}\n                </ng-template>\n              </j-select>\n              <a *ngIf=\"isContractSelected\"\n                 href=\"#\"\n                 (click)=\"showContractDetails($event)\"\n                 jSuffix\n                 class=\"mr-1 p3\"\n                 translate>CURRENCY_PAYMENT.CONTRACTS.SHOW_DETAILS</a>\n\n              <j-error [control]=\"form.controls.contractId\"\n                       [errorMessages]=\"errors.contractId\"></j-error>\n            </j-form-field>\n          </div>\n        </ng-container>\n      </fieldset>\n      <!-- /DEBIT_ACCOUNT -->\n\n      <!-- RECIPIENT -->\n      <fieldset class=\"form-section\">\n        <div class=\"recipient-title mb-4\">\n          <h5 class=\"m-0\"\n              translate>CURRENCY_PAYMENT.RECIPIENT.TITLE</h5>\n          <button *ngIf=\"withinContract && form.controls.contract?.value?.recipients?.length > 1\"\n                  class=\"btn btn-link p-0 p3\"\n                  type=\"button\"\n                  (click)=\"openForeignContractsRecipientsDictionary()\"\n                  translate=\"CURRENCY_PAYMENT.CONTRACTS_DICTIONARY.OPEN\"></button>\n          <button *ngIf=\"!withinContract\"\n                  class=\"btn btn-link p-0 p3\"\n                  type=\"button\"\n                  (click)=\"openForeignRecipientsDictionary()\"\n                  translate=\"CURRENCY_PAYMENT.DICTIONARY.OPEN\"></button>\n        </div>\n\n        <div class=\"form-group\">\n          <j-form-field clearable=\"true\">\n            <j-label translate>CURRENCY_PAYMENT.RECIPIENT.NAME</j-label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   jFocusOnReturn\n                   jFormInput\n                   [mask]=\"masks.name.mask\"\n                   [dropSpecialCharacters]=\"false\"\n                   [maxlength]=\"withinContract ? null : nameMaxLength\"\n                   [formControl]=\"form.controls.name\"\n                   (paste)=\"onNamePaste($event)\">\n          </j-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <j-form-field #countryWrapper>\n            <j-label translate>CURRENCY_PAYMENT.RECIPIENT.COUNTRY</j-label>\n            <j-select #countrySelect\n                      (change)=\"onCountrySelect($event)\"\n                      (focus)=\"onCountryFocus()\"\n                      [appendTo]=\"countryWrapper.elementRef.nativeElement\"\n                      [jFocusOnReturn]=\"countrySelect\"\n                      [formControl]=\"form.controls.countryCode\"\n                      [readonly]=\"form.controls.countryCode.disabled\"\n                      [clearable]=\"false\"\n                      bindValue=\"code\"\n                      [searchFn]=\"countryComparator\"\n                      (search)=\"onCountrySearch($event)\"\n                      [items]=\"countries$ | async\">\n              <ng-template j-option-tmp\n                           let-item=\"item\">\n                <div class=\"j-option-label text-wrap\">\n                  {{mapCountryLabel(item)}}\n                </div>\n              </ng-template>\n              <ng-template j-label-tmp\n                           let-item=\"item\">\n                {{countrySelect.focused ? '' : mapCountryLabel(item)}}\n              </ng-template>\n            </j-select>\n            <j-error [control]=\"form.controls.countryCode\"\n                     [errorMessages]=\"errors.country\"></j-error>\n          </j-form-field>\n        </div>\n\n        <div class=\"form-group\"\n             *ngIf=\"isCityShown\">\n          <j-form-field>\n            <j-label>{{cityPlaceholder$ | async | translate}}</j-label>\n            <input type=\"text\"\n                   [mask]=\"masks.cityName.mask\"\n                   [dropSpecialCharacters]=\"false\"\n                   jFocusOnReturn\n                   jFormInput\n                   [maxlength]=\"cityMaxLength\"\n                   class=\"form-control\"\n                   [formControl]=\"form.controls.cityName\">\n            <j-error [control]=\"form.controls.cityName\"\n                     [errorMessages]=\"errors.purpose\"></j-error>\n          </j-form-field>\n        </div>\n\n        <ng-container *ngIf=\"isAustraliaAud$ | async\">\n          <div class=\"kbe-account-row\">\n            <div class=\"form-group\">\n              <j-form-field>\n                <j-label translate>CURRENCY_PAYMENT.AUD.INDEX</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       maxlength=\"4\"\n                       class=\"form-control\"\n                       [formControl]=\"form.controls.audIndex\">\n              </j-form-field>\n            </div>\n            <div class=\"form-group\">\n              <j-form-field>\n                <j-label translate>CURRENCY_PAYMENT.AUD.STATE</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       maxlength=\"28\"\n                       class=\"form-control\"\n                       [formControl]=\"form.controls.audState\">\n              </j-form-field>\n            </div>\n          </div>\n          <div class=\"kbe-account-row\">\n            <div class=\"form-group\">\n              <j-form-field>\n                <j-label translate>CURRENCY_PAYMENT.AUD.BUILDING_NUMBER</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       maxlength=\"10\"\n                       class=\"form-control\"\n                       [formControl]=\"form.controls.audBuildingNumber\">\n              </j-form-field>\n            </div>\n            <div class=\"form-group\">\n              <j-form-field>\n                <j-label translate>CURRENCY_PAYMENT.AUD.STREET</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       maxlength=\"25\"\n                       class=\"form-control\"\n                       [formControl]=\"form.controls.audStreet\">\n              </j-form-field>\n            </div>\n          </div>\n          <hr class=\"mt-0\">\n        </ng-container>\n\n        <ng-container *ngIf=\"isAustraliaNonAud$ | async\">\n          <div class=\"form-group\">\n            <j-form-field>\n              <j-label translate>CURRENCY_PAYMENT.AUD.ADDRESS</j-label>\n              <input type=\"text\"\n                     jFocusOnReturn\n                     jFormInput\n                     maxlength=\"70\"\n                     class=\"form-control\"\n                     [formControl]=\"form.controls.audAddress\">\n            </j-form-field>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"isCountryCanada$ | async\">\n          <div class=\"form-group\">\n            <j-form-field>\n              <j-label translate>CURRENCY_PAYMENT.AUD.ADDRESS</j-label>\n              <input type=\"text\"\n                     jFocusOnReturn\n                     jFormInput\n                     maxlength=\"70\"\n                     class=\"form-control\"\n                     [formControl]=\"form.controls.canAddress\">\n            </j-form-field>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"isRubNonRussia$ | async\">\n          <div class=\"form-group\">\n            <j-foreign-bank-select #rubNonRussiaCorrespondentBankDropdown\n                                   [labelText]=\"'CURRENCY_PAYMENT.RECIPIENT.CORRESPONDENT_BIC'\"\n                                   [placeholderText]=\"'CURRENCY_PAYMENT.RECIPIENT.NO_CORRESPONDENT_BIC_ENTERED'\"\n                                   [labelControl]=\"form.controls.rubNonRussiaCorrespondentBankLabel\"\n                                   [errorMessages]=\"errors.bankSelect\"\n                                   [bankControl]=\"form.controls.rubNonRussiaCorrespondentBank\"></j-foreign-bank-select>\n          </div>\n\n          <div class=\"form-group\">\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RECIPIENT.CORRESPONDENT_IBAN</j-label>\n              <input #rubNonRussiaCorrespondentIbanInput=\"jFormInput\"\n                     type=\"text\"\n                     jFormInput\n                     jFocusOnReturn\n                     jUppercase\n                     class=\"form-control\"\n                     [validation]=\"false\"\n                     [mask]=\"masks.rubNonRussiaCorrespondentIban.mask\"\n                     [formControl]=\"form.controls.rubNonRussiaCorrespondentIban\">\n              <j-error [control]=\"form.controls.rubNonRussiaCorrespondentIban\"\n                       [errorMessages]=\"errors.bankAccount\"\n                       [params]=\"ibanParams(form.controls.rubNonRussiaCorrespondentIban)\"></j-error>\n            </j-form-field>\n          </div>\n        </ng-container>\n\n\n        <div [class.kbe-account-row]=\"!((isRubNonRussia$ | async) || withinContract )\">\n          <div class=\"form-group\"\n               *ngIf=\"!withinContract\">\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RECIPIENT.KBE</j-label>\n              <input type=\"text\"\n                     jFormInput\n                     class=\"form-control\"\n                     [mask]=\"masks.kbeCode.mask\"\n                     [jShadow]=\"masks.kbeCode.shadow\"\n                     jFocusOnReturn\n                     [dropSpecialCharacters]=\"true\"\n                     [formControl]=\"form.controls.kbeCode\">\n              <a href=\"javascript:void(0)\"\n                 jSuffix\n                 tooltipClass=\"tooltip-light tooltip-large\"\n                 [ngbTooltip]=\"kbeInfo\"\n                 [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                 triggers=\"mouseenter:mouseleave\"\n                 class=\"mr-1 link-gray\"></a>\n\n              <j-error [control]=\"form.controls.kbeCode\"\n                       [errorMessages]=\"errors.kbeCode\"></j-error>\n            </j-form-field>\n          </div>\n          <ng-container *ngIf=\"isRubNonRussia$ | async\">\n            <div class=\"form-group\">\n              <j-foreign-bank-select #rubNonRussiaBankDropdown\n                                     [labelText]=\"'CURRENCY_PAYMENT.RECIPIENT.BANK'\"\n                                     [placeholderText]=\"'CURRENCY_PAYMENT.RECIPIENT.NO_BIC_ENTERED'\"\n                                     [labelControl]=\"form.controls.rubNonRussiaBankLabel\"\n                                     [errorMessages]=\"errors.bankSelect\"\n                                     [bankControl]=\"form.controls.rubNonRussiaBank\"></j-foreign-bank-select>\n            </div>\n            <div class=\"form-group\">\n              <j-form-field>\n                <j-label>{{cityPlaceholder$ | async | translate}}</j-label>\n                <input type=\"text\"\n                       [mask]=\"masks.cityName.mask\"\n                       [dropSpecialCharacters]=\"false\"\n                       jFocusOnReturn\n                       jFormInput\n                       class=\"form-control\"\n                       [maxlength]=\"cityMaxLength\"\n                       [formControl]=\"form.controls.cityName\">\n              </j-form-field>\n            </div>\n\n          </ng-container>\n\n          <div class=\"form-group\"\n               [class.mb-3]=\"withinContract\">\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RECIPIENT.IBAN</j-label>\n              <input #accountInput=\"jFormInput\"\n                     type=\"text\"\n                     jFormInput\n                     jFocusOnReturn\n                     jUppercase\n                     class=\"form-control\"\n                     [mask]=\"masks.bankAccount.mask\"\n                     [formControl]=\"form.controls.bankAccount\">\n              <!-- <a href=\"javascript:void(0)\"\n                 jSuffix\n                 tooltipClass=\"tooltip-light tooltip-large\"\n                 [ngbTooltip]=\"ibanInfo\"\n                 [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                 triggers=\"mouseenter:mouseleave\"\n                 class=\"mr-1 link-gray\"></a> -->\n              <j-error [control]=\"form.controls.bankAccount\"\n                       [errorMessages]=\"errors.bankAccount\"\n                       [params]=\"ibanParams(form.controls.bankAccount)\"></j-error>\n            </j-form-field>\n          </div>\n        </div>\n\n        <ng-container *ngIf=\"!(isRubNonRussia$ | async)\">\n          <div class=\"form-group\">\n            <j-foreign-bank-select #bankDropdown\n                                   [placeholderText]=\"'CURRENCY_PAYMENT.RECIPIENT.NO_BIC_ENTERED'\"\n                                   [labelControl]=\"form.controls.bankLabel\"\n                                   [errorMessages]=\"errors.bankSelect\"\n                                   [bankControl]=\"form.controls.bank\"></j-foreign-bank-select>\n            <div *ngIf=\"!isBicRequired\"\n                 class=\"j-input-helper text-muted mt-1 mb-0 p3\"\n                 translate>\n              CURRENCY_PAYMENT.RECIPIENT.BIC_DESCRIPTION\n            </div>\n          </div>\n        </ng-container>\n\n        <div class=\"j-switch-wrap form-group\"\n             *ngIf=\"isIntermediaryBankSwitchable\">\n          <j-switch [formControl]=\"form.controls.hasIntermediaryBank\"></j-switch>\n          <div class=\"intermediatory-content ml-3\">\n            <strong translate>CURRENCY_PAYMENT.RECIPIENT.SWITCH.TITLE</strong>\n            <j-foreign-bank-select #intermediaryBankDropdown\n                                   [placeholderText]=\"'CURRENCY_PAYMENT.RECIPIENT.NO_INTERMEDIARY_BIC_ENTERED'\"\n                                   [labelControl]=\"form.controls.intermediaryBankLabel\"\n                                   [bankControl]=\"form.controls.intermediaryBank\"\n                                   [errorMessages]=\"errors.bankSelect\"\n                                   class=\"intermediatory-input\"\n                                   *ngIf=\"hasIntermediaryBank\"></j-foreign-bank-select>\n            <small translate\n                   class=\"d-block text-gray\">CURRENCY_PAYMENT.RECIPIENT.SWITCH.DESCRIPTION</small>\n          </div>\n        </div>\n\n        <div class=\"form-group\"\n             *ngIf=\"isKioEnabled$ | async\">\n          <j-form-field clearable=\"true\">\n            <j-label translate>CURRENCY_PAYMENT.RECIPIENT.KIO</j-label>\n            <input type=\"text\"\n                   jFocusOnReturn\n                   jFormInput\n                   class=\"form-control\"\n                   [mask]=\"masks.kio.mask\"\n                   maxlength=\"12\"\n                   [dropSpecialCharacters]=\"false\"\n                   [formControl]=\"form.controls.kio\">\n            <j-error [control]=\"form.controls.kio\"\n                     [errorMessages]=\"errors.kio\"></j-error>\n          </j-form-field>\n        </div>\n        <div class=\"form-group\"\n             *ngIf=\"isKppEnabled$ | async\">\n          <j-form-field clearable=\"true\">\n            <j-label translate>CURRENCY_PAYMENT.RECIPIENT.KPP</j-label>\n            <input type=\"text\"\n                   jFocusOnReturn\n                   jFormInput\n                   class=\"form-control\"\n                   [mask]=\"masks.kpp.mask\"\n                   [jShadow]=\"masks.kpp.shadow\"\n                   [validation]=\"false\"\n                   [formControl]=\"form.controls.kpp\">\n            <a href=\"javascript:void(0)\"\n               jSuffix\n               tooltipClass=\"tooltip-light tooltip-large\"\n               [ngbTooltip]=\"kppInfo\"\n               [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n               triggers=\"mouseenter:mouseleave\"\n               class=\"mr-1 link-gray\"></a>\n          </j-form-field>\n          <div class=\"j-input-helper text-muted mt-1 mb-0 p3\"\n               translate>\n            CURRENCY_PAYMENT.RECIPIENT.KPP_DESCRIPTION\n          </div>\n        </div>\n      </fieldset>\n      <!-- /RECIPIENT -->\n\n      <!-- RUSSIAN BUDGET -->\n      <ng-container *ngIf=\"isRussianBudget$ | async\">\n        <fieldset class=\"form-section\">\n          <h5 class=\"mb-4\"\n              translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.TITLE</h5>\n          <div class=\"form-group\">\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\"\n                     class=\"custom-control-input\"\n                     id=\"isRussianTaxPayer\"\n                     [formControl]=\"form.controls.isRussianTaxPayer\">\n              <label class=\"custom-control-label\"\n                     for=\"isRussianTaxPayer\">\n                <span class=\"p3 text-muted\"\n                      translate=\"CURRENCY_PAYMENT.RUSSIAN_BUDGET.IS_TAXPAYER\"></span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"russian-row\"\n               *ngIf=\"isRussianTaxpayer\">\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.KIO</j-label>\n              <input type=\"text\"\n                     jFocusOnReturn\n                     jFormInput\n                     class=\"form-control\"\n                     maxlength=\"12\"\n                     [formControl]=\"form.controls.payerInn\">\n              <j-error [control]=\"form.controls.payerInn\"\n                       [errorMessages]=\"errors.payerInn\"></j-error>\n            </j-form-field>\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.KPP</j-label>\n              <input type=\"text\"\n                     jFocusOnReturn\n                     jFormInput\n                     class=\"form-control\"\n                     [mask]=\"masks.kpp.mask\"\n                     [jShadow]=\"masks.kpp.shadow\"\n                     [formControl]=\"form.controls.payerKpp\">\n              <a href=\"javascript:void(0)\"\n                 jSuffix\n                 tooltipClass=\"tooltip-light tooltip-large\"\n                 [ngbTooltip]=\"kppInfo\"\n                 [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                 triggers=\"mouseenter:mouseleave\"\n                 class=\"mr-1 link-gray\"></a>\n            </j-form-field>\n\n          </div>\n\n          <div class=\"russian-row\"\n               #kbkRowWrapper>\n            <j-form-field #kbkWrapper>\n              <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.KBK</j-label>\n              <j-select #kbkSelect\n                        [loading]=\"isKbkLoading\"\n                        [appendTo]=\"kbkRowWrapper\"\n                        [jFocusOnReturn]=\"kbkSelect\"\n                        [formControl]=\"form.controls.kbk\"\n                        [clearable]=\"false\"\n                        [searchFn]=\"kbkComparator\"\n                        [items]=\"kbkList\">\n                <ng-template j-option-tmp\n                             let-item=\"item\">\n                  <div class=\"j-option-label text-wrap p3\">\n                    <strong>{{ item.code }}</strong>\n                    <span> - </span>\n                    <span>{{ item.description }}</span>\n                  </div>\n                </ng-template>\n                <ng-template j-notfound-tmp>\n                  <j-empty-placeholder label=\"CURRENCY_PAYMENT.RUSSIAN_BUDGET.KBK_NOT_FOUND\"></j-empty-placeholder>\n                </ng-template>\n                <ng-template j-label-tmp\n                             let-item=\"item\">\n                  {{ kbkSelect.focused ? '' : item.code + ' - ' + item.description }}\n                </ng-template>\n              </j-select>\n            </j-form-field>\n            <j-form-field clearable=\"true\">\n              <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.OKTMO</j-label>\n              <input type=\"text\"\n                     jFocusOnReturn\n                     jFormInput\n                     class=\"form-control\"\n                     [mask]=\"masks.oktmo.mask\"\n                     [jShadow]=\"masks.oktmo.shadow\"\n                     [formControl]=\"form.controls.oktmo\">\n              <a href=\"javascript:void(0)\"\n                 jSuffix\n                 tooltipClass=\"tooltip-light tooltip-large\"\n                 [ngbTooltip]=\"oktmoInfo\"\n                 [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                 triggers=\"mouseenter:mouseleave\"\n                 class=\"mr-1 link-gray\"></a>\n            </j-form-field>\n          </div>\n\n          <div class=\"form-group\">\n            <j-form-field #payerStatusWrap>\n              <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.PAYER_STATUS</j-label>\n              <j-select #payerStatusSelect\n                        [loading]=\"isStatusesLoading\"\n                        [appendTo]=\"payerStatusWrap.elementRef.nativeElement\"\n                        [jFocusOnReturn]=\"payerStatusSelect\"\n                        [formControl]=\"form.controls.payerStatus\"\n                        [clearable]=\"false\"\n                        bindValue=\"code\"\n                        [searchFn]=\"statusComparator\"\n                        [items]=\"statuses\">\n                <ng-template j-option-tmp\n                             let-item=\"item\">\n                  <div class=\"j-option-label text-wrap p3\">\n                    <strong>{{ item.code }}</strong>\n                    <span> - </span>\n                    <span>{{ item.description }}</span>\n                  </div>\n                </ng-template>\n                <ng-template j-notfound-tmp>\n                  <j-empty-placeholder label=\"CURRENCY_PAYMENT.RUSSIAN_BUDGET.STATUS_NOT_FOUND\"></j-empty-placeholder>\n                </ng-template>\n                <ng-template j-label-tmp\n                             let-item=\"item\">\n                  {{ payerStatusSelect.focused ? '' : item.code + ' - ' + item.description }}\n                </ng-template>\n              </j-select>\n            </j-form-field>\n          </div>\n\n        </fieldset>\n        <fieldset class=\"form-section\">\n          <div class=\"form-group\">\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\"\n                     class=\"custom-control-input\"\n                     id=\"hasRussianBudgetExtras\"\n                     [formControl]=\"form.controls.hasRussianBudgetExtras\">\n              <label class=\"custom-control-label\"\n                     for=\"hasRussianBudgetExtras\">\n                <span class=\"p3 text-muted\"\n                      translate=\"CURRENCY_PAYMENT.RUSSIAN_BUDGET.EXTRAS\"></span>\n              </label>\n            </div>\n          </div>\n          <ng-container *ngIf=\"hasRussianBudgetExtras\">\n            <div class=\"form-group\">\n              <j-form-field clearable=\"true\">\n                <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.PURPOSE</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       class=\"form-control\"\n                       [mask]=\"masks.paymentBasis.mask\"\n                       [jShadow]=\"masks.paymentBasis.shadow\"\n                       [formControl]=\"form.controls.paymentBasis\">\n                <a href=\"javascript:void(0)\"\n                   jSuffix\n                   tooltipClass=\"tooltip-light tooltip-large\"\n                   [ngbTooltip]=\"basisInfo\"\n                   [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                   triggers=\"mouseenter:mouseleave\"\n                   class=\"mr-1 link-gray\"></a>\n              </j-form-field>\n            </div>\n            <div class=\"form-group\">\n              <j-form-field clearable=\"true\">\n                <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.TAX_NUMBER</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       class=\"form-control\"\n                       [mask]=\"masks.budgetDocNumber.mask\"\n                       [jShadow]=\"masks.budgetDocNumber.shadow\"\n                       [formControl]=\"form.controls.budgetDocNumber\">\n              </j-form-field>\n            </div>\n            <div class=\"russian-row\">\n              <div>\n                <j-form-field clearable=\"true\">\n                  <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.PERIOD</j-label>\n                  <input type=\"text\"\n                         jFocusOnReturn\n                         jFormInput\n                         class=\"form-control\"\n                         [mask]=\"masks.budgetPeriod.mask\"\n                         [jShadow]=\"masks.budgetPeriod.shadow\"\n                         [dropSpecialCharacters]=\"false\"\n                         [formControl]=\"form.controls.budgetPeriod\">\n                  <a href=\"javascript:void(0)\"\n                     jSuffix\n                     tooltipClass=\"tooltip-light tooltip-large\"\n                     [ngbTooltip]=\"budgetPeriodInfo\"\n                     [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\n                     triggers=\"mouseenter:mouseleave\"\n                     class=\"mr-1 link-gray\"></a>\n                </j-form-field>\n                <div class=\"j-input-helper text-muted mt-1 mb-0 p3\"\n                     translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.PERIOD_DESCRIPTION\n                </div>\n              </div>\n              <j-form-field clearable=\"true\">\n                <j-label translate>CURRENCY_PAYMENT.RUSSIAN_BUDGET.UIP</j-label>\n                <input type=\"text\"\n                       jFocusOnReturn\n                       jFormInput\n                       class=\"form-control\"\n                       [formControl]=\"form.controls.uip\">\n              </j-form-field>\n            </div>\n          </ng-container>\n        </fieldset>\n      </ng-container>\n\n      <!-- /RUSSIAN BUDGET -->\n\n      <!-- DETAILS -->\n      <fieldset class=\"form-section\">\n        <h5 class=\"mb-4\"\n            translate>CURRENCY_PAYMENT.DETAILS.TITLE</h5>\n\n        <div class=\"form-group\">\n          <j-form-field>\n            <j-label translate>CURRENCY_PAYMENT.DETAILS.DOCUMENT_NUMBER</j-label>\n            <input type=\"text\"\n                   jFormInput\n                   jFocusOnReturn\n                   class=\"form-control\"\n                   [mask]=\"masks.number.mask\"\n                   [formControl]=\"form.controls.number\">\n          </j-form-field>\n        </div>\n        <div class=\"form-group\">\n          <j-date-picker #datePicker\n                         allowAuto=\"true\"\n                         [datesEnabled]=\"workingDays$ | async\"\n                         [formControl]=\"form.controls.date\"\n                         [formatValue]=\"true\"\n                         [jFocusOnReturn]=\"datePicker\"\n                         [label]=\"'CURRENCY_PAYMENT.DETAILS.VALUE_DATE' | translate\"\n                         [minDate]=\"dateLimit.minDate\"\n                         [maxDate]=\"dateLimit.maxDate\"\n                         [helperText]=\"dateMessage$ | async | translate\">\n          </j-date-picker>\n        </div>\n        <div class=\"form-group\">\n          <j-form-field #knpWrapper>\n            <j-label translate>CURRENCY_PAYMENT.DETAILS.KNP.TITLE</j-label>\n            <j-select #knpSelect\n                      [jFocusOnReturn]=\"knpSelect\"\n                      [appendTo]=\"knpWrapper.elementRef.nativeElement\"\n                      [formControl]=\"form.controls.knp\"\n                      [clearable]=\"false\"\n                      [searchMask]=\"masks.knp.mask\"\n                      [shadow]=\"masks.knp.shadow\"\n                      (change)=\"knpIsChanged()\"\n                      [compareWith]=\"knpComparator\"\n                      bindLabel=\"label\"\n                      bindValue=\"code\"\n                      [items]=\"knp$ | async\">\n              <ng-template j-header-tmp\n                           let-searchTerm=\"searchTerm\">\n                <div *ngIf=\"!searchTerm\">\n                  <button (click)=\"openKnpDictionary(knpSelect, $event)\"\n                          type=\"button\"\n                          class=\"list-dictionary form-section--action btn btn-xs btn-link float-right\">\n                    <span class=\"mr-2\"\n                          [inlineSVG]=\"'/assets/icons/payments/list.svg'\"></span>\n                    <span translate>\n                      CURRENCY_PAYMENT.DETAILS.KNP.DICTIONARY\n                    </span>\n                  </button>\n                  <p class=\"p2 m-0\"\n                     translate>CURRENCY_PAYMENT.DETAILS.KNP.FREQUENT</p>\n                  <p class=\"p3 text-gray\"\n                     translate>CURRENCY_PAYMENT.DETAILS.KNP.DESCRIPTION</p>\n                </div>\n              </ng-template>\n            </j-select>\n          </j-form-field>\n        </div>\n        <div class=\"form-group\"\n             *ngIf=\"isKvoEnabled$ | async\">\n          <j-form-field>\n            <j-label translate>CURRENCY_PAYMENT.DETAILS.KVO</j-label>\n            <input type=\"text\"\n                   jFormInput\n                   jFocusOnReturn\n                   class=\"form-control\"\n                   [mask]=\"masks.kvo.mask\"\n                   [formControl]=\"form.controls.kvo\">\n          </j-form-field>\n        </div>\n\n        <div class=\"form-group\"\n             *ngIf=\"isCodeWordEnabled$ | async\">\n          <j-form-field #codeWordsWrapper>\n            <j-label>{{ codeWordLabel$ | async | translate }}</j-label>\n            <j-select #codeWordsSelect\n                      [loading]=\"isCodeWordsLoading\"\n                      [appendTo]=\"codeWordsWrapper.elementRef.nativeElement\"\n                      [jFocusOnReturn]=\"codeWordsSelect\"\n                      [formControl]=\"form.controls.codeWord\"\n                      [clearable]=\"false\"\n                      [searchFn]=\"codeWordComparator\"\n                      [items]=\"codeWords\">\n              <ng-template j-option-tmp\n                           let-item=\"item\">\n                <div class=\"j-option-label text-wrap p3\">\n                  {{ mapCodeWordLabel(item) }}\n                </div>\n              </ng-template>\n              <ng-template j-label-tmp\n                           let-item=\"item\">\n                {{codeWordsSelect.focused ? '' : mapCodeWordLabel(item || form.controls.codeWord?.value)}}\n              </ng-template>\n            </j-select>\n          </j-form-field>\n        </div>\n\n        <div class=\"form-group position-relative\">\n          <span class=\"payment-section--purpose-length p3 text-gray\">\n            {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\n          <j-form-field>\n            <j-label translate>CURRENCY_PAYMENT.DETAILS.PURPOSE</j-label>\n            <textarea #purpose\n                      jFocusOnReturn\n                      jFormInput\n                      class=\"form-control\"\n                      [formControl]=\"form.controls.purpose\"\n                      [mask]=\"masks.purpose.mask\"\n                      [dropSpecialCharacters]=\"false\"\n                      rows=\"5\"></textarea>\n            <j-error [control]=\"form.controls.purpose\"\n                     [errorMessages]=\"errors.purpose\"></j-error>\n            <div *ngIf=\"purposeMessage$ | async as message\"\n                 jBottomLine\n                 class=\"j-form-field-bottom\">\n              <div class=\"text-truncate small\">\n                {{message}}\n              </div>\n            </div>\n          </j-form-field>\n          <div class=\"j-input-helper text-muted mt-1 mb-0 p3\"\n               translate>\n            CURRENCY_PAYMENT.DETAILS.PURPOSE_DESCRIPTION\n          </div>\n        </div>\n      </fieldset>\n      <!-- /DETAILS -->\n\n      <!-- AMOUNT -->\n      <fieldset class=\"form-section\">\n        <div [hidden]=\"!isCommissionAccountSelectable\">\n          <j-account-dropdown #commissionAccountDropdown\n                              [isLoading]=\"isAccountsLoading\"\n                              (selected)=\"onCommissionAccountSelect($event)\"\n                              [accounts]=\"commissionAccountsList\"\n                              [isDisabledSelectable]=\"true\"\n                              [hasError]=\"form.controls.commissionAccount.touched && form.controls.commissionAccount.errors\"\n                              [label]=\"'CURRENCY_PAYMENT.COMISSION.ACCOUNT'\"></j-account-dropdown>\n\n          <div class=\"j-input-helper text-muted comission-message p3\"\n               *ngIf=\"comissionMessage\">\n            <span [innerHTML]=\"comissionMessage | async\"></span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <j-form-field clearable=\"true\"\n                        [floatLabel]=\"'always'\">\n            <j-label translate>CURRENCY_PAYMENT.AMOUNT.TITLE</j-label>\n            <input jFocusOnReturn\n                   jFormInput\n                   jCursorBound\n                   jReplaceDot\n                   (paste)=\"onAmountPaste($event)\"\n                   [suffix]=\"amountSuffix\"\n                   [placeholder]=\"amountPlaceholder\"\n                   class=\"form-control\"\n                   [mask]=\"amountMask\"\n                   thousandSeparator=\" \"\n                   decimalMarker=\",\"\n                   maxlength=\"29\"\n                   [dropSpecialCharacters]=\"true\"\n                   [formControl]=\"form.controls.amount\">\n          </j-form-field>\n\n          <div class=\"j-input-helper text-muted mt-1 p3\"\n               *ngIf=\"amountMessage\">\n            <span [innerHTML]=\"amountMessage | async\"></span>\n          </div>\n\n          <div class=\"j-input-helper text-muted mt-1 p3\"\n               *ngIf=\"shouldBindContract\">\n            <span class='text-danger mr-1'\n                  [translate]=\"'ERRORS.CURRENCY_PAYMENT.MUST_INCLUDE_CONTRACT'\"\n                  [translateParams]=\"{amount: contractMaxAmount | money}\">\n            </span>\n            <a class=\"link-blue contracts-scroll-link\"\n               href=\"#\"\n               (click)=\"scrollToContracts($event)\">{{ 'ERRORS.CURRENCY_PAYMENT.MUST_INCLUDE_CONTRACT_LINK' | translate\n              }}</a>\n          </div>\n\n          <div class=\"j-input-helper text-muted mt-1 p3\"\n               *ngIf=\"comissionMessage && !isCommissionAccountSelectable\">\n            <span [innerHTML]=\"comissionMessage\"></span>\n          </div>\n\n          <div class=\"j-input-helper text-muted mt-2 p3 position-relative\">\n            <ng-container *ngIf=\"commissionBalance === null; else commission\">\n              {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\n            </ng-container>\n\n            <ng-template #commission>\n              {{'PAYMENTS.COMMISSION' | translate}}:\n              <j-money [money]=\"commissionBalance\"></j-money>\n            </ng-template>\n\n            <div class=\"mt-2\"\n                 *ngIf=\"isOurComission == false && canPayCommission\"\n                 translate=\"CURRENCY_PAYMENT.COMISSION.DESCRIPTION\"></div>\n          </div>\n        </div>\n        <ul class=\"list-group\">\n          <li *ngIf=\"canPayCommission\"\n              class=\"list-group-item d-flex align-items-center\">\n            <j-switch [formControl]=\"form.controls.payComission\"></j-switch>\n            <span class=\"ml-3\">\n              <strong translate>CURRENCY_PAYMENT.AGENT.TITLE</strong>\n              <br>\n              <small translate\n                     class=\"text-gray\">CURRENCY_PAYMENT.AGENT.DESCRIPTION</small>\n            </span>\n          </li>\n          <li class=\"list-group-item d-flex align-items-center\">\n            <j-switch [formControl]=\"form.controls.notify\"></j-switch>\n            <div class=\"ml-3 flex-grow-1\">\n              <strong>{{ 'PAYMENTS.NOTIFY.TITLE' | translate }}</strong>\n              <br>\n              <div *ngIf=\"!form.controls.notify.value\">\n                <small class=\"text-gray\">{{ 'PAYMENTS.NOTIFY.DESCRIPTION' | translate }}</small>\n              </div>\n              <div class=\"mt-1\"\n                   *ngIf=\"form.controls.notify.value\">\n                <j-form-field>\n                  <j-label>{{ 'PAYMENTS.NOTIFY.EMAIL' | translate }}</j-label>\n                  <input type=\"email\"\n                         #emailOnSuccess=\"ngbTypeahead\"\n                         (focus)=\"onEmailOnSuccessFocus($event)\"\n                         jFormInput\n                         jFocusOnReturn\n                         autocomplete=\"off\"\n                         class=\"form-control\"\n                         [ngbTypeahead]=\"search\"\n                         [formControl]=\"form.controls.emailOnSuccess\">\n                  <j-error [control]=\"form.controls.emailOnSuccess\"\n                           [errorMessages]=\"errors.email\"></j-error>\n                </j-form-field>\n                <small class=\"text-gray\">{{ 'PAYMENTS.NOTIFY.EMAIL' | translate }}</small>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </fieldset>\n      <!-- /AMOUNT -->\n      <p class=\"my-3 p3 text-muted\"\n         *ngIf=\"!withinContract\"\n         [innerHTML]=\"agreementText | translate\"></p>\n      <div class=\"payment-section--submit form-group pt-4\">\n        <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\n          <button class=\"btn btn-link btn-static\"\n                  (click)=\"saveToDraft()\"\n                  type=\"button\"><strong translate>SHARED.SAVE</strong></button>\n          <button class=\"btn btn-primary btn-static ml-3\"\n                  type=\"submit\">{{submitLabel | translate}}\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\n          <button class=\"btn btn-outline-primary btn-static\"\n                  type=\"submit\"\n                  translate>SHARED.SAVE_EDITING</button>\n        </ng-container>\n      </div>\n      <ngx-spinner type=\"ball-scale-ripple-multiple\"\n                   [name]=\"SPINNER\"\n                   [fullScreen]=\"false\"\n                   size=\"large\"\n                   color=\"#d6dadf\"\n                   zIndex=\"3\"\n                   bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\n    </form>\n  </div>\n\n  <j-fx-contract-details #contractDetails\n                         *ngIf=\"form.controls.contract.value\"\n                         [contract]=\"form.controls.contract.value\"></j-fx-contract-details>\n\n  <ng-template #amountInfo>\n  </ng-template>\n\n  <ng-template #kbeInfo>\n    <j-kbe-info></j-kbe-info>\n  </ng-template>\n\n  <!-- <ng-template #ibanInfo>\n  <j-iban-info></j-iban-info>\n</ng-template> -->\n\n  <ng-template #kppInfo>\n    <div class=\"p4\"\n         [innerHTML]=\"'PAYMENTS.KPP' | translate\"></div>\n  </ng-template>\n\n  <ng-template #oktmoInfo>\n    <div class=\"p4\"\n         [innerHTML]=\"'PAYMENTS.OKTMO' | translate\"></div>\n  </ng-template>\n\n  <ng-template #basisInfo>\n    <div class=\"p4\"\n         [innerHTML]=\"'PAYMENTS.BASIS' | translate\"></div>\n  </ng-template>\n\n  <ng-template #budgetPeriodInfo>\n    <div class=\"p4\"\n         [innerHTML]=\"'PAYMENTS.BUDGET' | translate\"></div>\n  </ng-template>\n</ng-container>";

/***/ }),

/***/ 42344:
/*!***************************************************************************************************!*\
  !*** ./src/app/payments/containers/currency-payments/currency-payments.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<f-page (closed)=\"onClose()\">\n  <f-page-header>\n    <h1 class=\"f-page-title\">\n      {{ (title$ | async) | translate }}\n    </h1>\n  </f-page-header>\n  <f-page-body>\n    <j-currency-payment #paymentComponent></j-currency-payment>\n  </f-page-body>\n</f-page>\n";

/***/ }),

/***/ 34043:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/medical-payment/medical-payment.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\r\n                          [isLoading]=\"isPermissionsUpdating\"\r\n                          (retried)=\"updatePermissions()\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n  <form jInvalidControlScroll\r\n        jFocusableContainer\r\n        autocomplete=\"off\"\r\n        (submit)=\"onSubmit($event)\"\r\n        #formDirective=\"ngForm\"\r\n        [formGroup]=\"form\">\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\r\n        <div class=\"form-group\">\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\r\n            <input jFocusOnReturn\r\n                   type=\"text\"\r\n                   jFormInput\r\n                   class=\"form-control\"\r\n                   [mask]=\"masks.number.mask\"\r\n                   [formControl]=\"form.controls.number\">\r\n            <!-- <j-error [control]=\"form.controls.number\"\r\n                         [errorMessages]=\"errors.number\"></j-error> -->\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <!-- <div class=\"form-group\">\r\n        <j-period-input [formControl]=\"form.controls.period\"></j-period-input>\r\n      </div> -->\r\n\r\n        <div class=\"form-group\">\r\n          <j-form-field #knpWrapper>\r\n            <j-label>{{ 'PAYMENTS.FORM.KNP' | translate }}</j-label>\r\n            <j-select #select\r\n                      [jFocusOnReturn]=\"select\"\r\n                      [appendTo]=\"knpWrapper.elementRef.nativeElement\"\r\n                      [formControl]=\"form.controls.knp\"\r\n                      [clearable]=\"false\"\r\n                      bindValue=\"code\"\r\n                      bindLabel=\"label\"\r\n                      [searchMask]=\"masks.knp.mask\"\r\n                      [shadow]=\"masks.knp.shadow\"\r\n                      [items]=\"knp$ | async\">\r\n              <!-- <ng-template j-label-tmp\r\n                         let-item=\"item\">\r\n              <div class=\"text-truncate\">{{item.label}}</div>\r\n            </ng-template> -->\r\n            </j-select>\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group position-relative\">\r\n          <span class=\"payment-section--purpose-length p3 text-gray\">\r\n            {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\r\n            <textarea #purpose\r\n                      jFocusOnReturn\r\n                      jFormInput\r\n                      class=\"form-control\"\r\n                      [formControl]=\"form.controls.purpose\"\r\n                      rows=\"5\"></textarea>\r\n            <j-error [control]=\"form.controls.purpose\"\r\n                     [errorMessages]=\"errors.purpose\"></j-error>\r\n            <div *ngIf=\"purposeMessage$ | async as message\"\r\n                 jBottomLine\r\n                 class=\"j-form-field-bottom\">\r\n              <div class=\"text-truncate small\">\r\n                {{ message | translate }}\r\n              </div>\r\n            </div>\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <j-account-dropdown #senderAccountDropdown\r\n                              (selected)=\"onSenderAccountSelect($event)\"\r\n                              [isLoading]=\"accountStore.fetching$ | async\"\r\n                              [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\r\n                              [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\r\n                              [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <j-employee-group-control [formControl]=\"form.controls.employees\"\r\n                                  [paymentType]=\"paymentType\"\r\n                                  [minAmount]=\"employeeMinAmount\"\r\n                                  [maxAmount]=\"employeeMaxAmount\"\r\n                                  [periodRequired]=\"true\"\r\n                                  [birthDateRequired]=\"true\"\r\n                                  [additionalPeriodEnabled]=\"true\">\r\n          <j-error [control]=\"form.controls.employees\"\r\n                   [errorMessages]=\"errors.employees\"></j-error>\r\n        </j-employee-group-control>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"payment-section--summary form-section\">\r\n      <div class=\"form-group\">\r\n        <fieldset>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              <h5 class=\"light m-0\">{{ 'PAYMENTS.FORM.TOTAL_AMOUNT' | translate }}:\r\n                <span class=\"h3\"><strong>{{(total$ | async) | amountFormat}}</strong> ₸</span>\r\n              </h5>\r\n              <div class=\"payment-section--amount-warn mt-1 p2\"\r\n                   *ngIf=\"amountMessage$ | async as message\">\r\n                <span [innerHTML]=\"message | translate\"></span>\r\n              </div>\r\n              <p class=\"p3 text text-gray d-inline-block m-0\">\r\n                <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\r\n                  {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\r\n                </ng-container>\r\n                <ng-template #commission>\r\n                  {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\r\n                </ng-template>\r\n              </p>\r\n            </li>\r\n            <li class=\"list-group-item d-flex align-items-center\">\r\n              <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\r\n              <span class=\"ml-3\">{{ 'PAYMENTS.FORM.URGENT' | translate }} <br>\r\n                <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"payment-section--submit form-group pt-4\">\r\n      <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\r\n        <button class=\"btn btn-outline-primary btn-static\"\r\n                (click)=\"saveToDraft()\"\r\n                type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\r\n        <button class=\"btn btn-primary btn-static ml-3\"\r\n                type=\"submit\">{{submitLabel | translate}}\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\r\n        <button class=\"btn btn-outline-primary btn-static\"\r\n                type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\r\n      </ng-container>\r\n    </div>\r\n    <ngx-spinner type=\"ball-scale-ripple-multiple\"\r\n                 [name]=\"SPINNER\"\r\n                 [fullScreen]=\"false\"\r\n                 size=\"large\"\r\n                 color=\"#d6dadf\"\r\n                 zIndex=\"3\"\r\n                 bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\r\n  </form>\r\n</ng-container>";

/***/ }),

/***/ 21299:
/*!*******************************************************************************************!*\
  !*** ./src/app/payments/containers/payment-order/payment-order.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\r\n                          [isLoading]=\"isPermissionsUpdating\"\r\n                          (retried)=\"updatePermissions()\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n  <div class=\"payment-section\">\r\n    <form #formDirective=\"ngForm\"\r\n          (submit)=\"onSubmit($event)\"\r\n          [formGroup]=\"form\"\r\n          jInvalidControlScroll\r\n          jFocusableContainer>\r\n      <div class=\"form-section\">\r\n        <fieldset>\r\n          <div class=\"payments__header\">\r\n            <h2 class=\"h2 mb-0\">\r\n              {{ 'PAYMENTS.RECIPIENT.TITLE' | translate }}\r\n            </h2>\r\n            <button (click)=\"openSavedPayments()\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-link p-0 p3\">\r\n              {{ 'PAYMENTS.SELECT_FROM_DICTIONARY' | translate }}\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <j-form-field>\r\n              <j-label>{{ 'PAYMENTS.FORM.IIN' | translate }}</j-label>\r\n              <input type=\"text\"\r\n                     jFocusOnReturn\r\n                     jFormInput\r\n                     [dropSpecialCharacters]=\"true\"\r\n                     class=\"form-control\"\r\n                     [jShadow]=\"masks.iinOrBin.shadow\"\r\n                     [mask]=\"masks.iinOrBin.mask\"\r\n                     [formControl]=\"form.controls.iinOrBin\">\r\n              <!--              <button jSuffix-->\r\n              <!--                      type=\"button\"-->\r\n              <!--                      (click)=\"checkIin()\"-->\r\n              <!--                      *ngIf=\"form.controls.iinOrBin.valid && iinIsNotOwn && !(iinIsSubmitted$ | async) && !(iinIsFound$ | async)\"-->\r\n              <!--                      class=\"btn btn-xs btn-link\">{{ 'PAYMENTS.FORM.CHECK' | translate }}</button>-->\r\n              <div jSuffix\r\n                   [jLoading]=\"isCounterPartyLoading$ | async\"\r\n                   [jLoadingInverted]=\"true\"\r\n                   class=\"counterParty p3\">\r\n                <span *ngIf=\"(counterParty$ | async) === counterPartyStatus.SUCCESS\">\r\n                  <span class=\"text-muted mr-2\"\r\n                        translate>PAYMENTS.TRUSTED_COUNTERPARTY</span>\r\n                  <span class=\"text-success\"\r\n                        [inlineSVG]=\"'/assets/icons/counterparty/status.svg'\"></span>\r\n                </span>\r\n                <span *ngIf=\"(counterParty$ | async) === counterPartyStatus.ERROR\">\r\n                  <span class=\"text-muted mr-2\"\r\n                        translate>PAYMENTS.UNTRUSTED_COUNTERPARTY</span>\r\n                  <span class=\"text-danger\"\r\n                        [inlineSVG]=\"'/assets/icons/counterparty/status.svg'\"></span>\r\n                </span>\r\n              </div>\r\n              <j-error [control]=\"form.controls.iinOrBin\"\r\n                       [errorMessages]=\"errors.iinOrBin\"></j-error>\r\n            </j-form-field>\r\n            <ul class=\"navbar-nav mt-2\">\r\n              <li *ngFor=\"let riskGroup of riskGroups\"\r\n                  class=\"p3 risk-li text-muted\">\r\n                • {{riskGroup.name | translate}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <j-form-field clearable=\"true\">\r\n              <j-label>{{ 'PAYMENTS.FORM.NAME' | translate }}</j-label>\r\n              <input type=\"text\"\r\n                     jFocusOnReturn\r\n                     jFormInput\r\n                     class=\"form-control\"\r\n                     [formControl]=\"form.controls.name\">\r\n              <!-- <j-error [control]=\"form.controls.name\"\r\n                         [errorMessages]=\"errors.name\"></j-error> -->\r\n            </j-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <j-form-field clearable=\"true\">\r\n              <j-entity-logo jPrefix\r\n                             hideEmpty=\"true\"\r\n                             [name]=\"('KZ' + form.controls.bankAccount.value) | bankFromAccount\">\r\n              </j-entity-logo>\r\n              <j-label>{{ 'PAYMENTS.FORM.IBAN' | translate }}</j-label>\r\n              <input #accountInput=\"jFormInput\"\r\n                     type=\"text\"\r\n                     jFormInput\r\n                     jReplaceOnPaste=\"KZ\"\r\n                     jDynamicPrefix=\"KZ\"\r\n                     jFocusOnReturn\r\n                     jUppercase\r\n                     [jShadow]=\"masks.bankAccount.shadow\"\r\n                     class=\"form-control\"\r\n                     [dropSpecialCharacters]=\"true\"\r\n                     [mask]=\"masks.bankAccount.mask\"\r\n                     [formControl]=\"form.controls.bankAccount\">\r\n              <j-error [control]=\"form.controls.bankAccount\"\r\n                       [errorMessages]=\"errors.bankAccount\"\r\n                       [params]=\"bankAccountErrorParams\"></j-error>\r\n            </j-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <j-form-field clearable=\"true\">\r\n              <j-label>{{ 'PAYMENTS.FORM.KBE' | translate }}</j-label>\r\n              <input type=\"text\"\r\n                     jFormInput\r\n                     class=\"form-control\"\r\n                     [mask]=\"masks.kbeCode.mask\"\r\n                     [jShadow]=\"masks.kbeCode.shadow\"\r\n                     jFocusOnReturn\r\n                     [dropSpecialCharacters]=\"true\"\r\n                     [formControl]=\"form.controls.kbeCode\">\r\n              <a href=\"javascript:void(0)\"\r\n                 jSuffix\r\n                 tooltipClass=\"tooltip-light tooltip-large\"\r\n                 [ngbTooltip]=\"kbeInfo\"\r\n                 [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\r\n                 triggers=\"mouseenter:mouseleave\"\r\n                 class=\"mr-1 link-gray\"></a>\r\n              <j-error [control]=\"form.controls.kbeCode\"\r\n                       [errorMessages]=\"errors.kbeCode\"></j-error>\r\n            </j-form-field>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n\r\n      <div class=\"form-section\">\r\n        <fieldset>\r\n          <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\r\n\r\n          <ng-container *ngIf=\"isContractApplyable$ | async\">\r\n            <div class=\"j-switch-wrap form-group\">\r\n              <j-switch [formControl]=\"form.controls.withinContract\"></j-switch>\r\n              <div class=\"ml-3\">\r\n                <strong translate>CURRENCY_PAYMENT.CONTRACTS.SWITCH.TITLE</strong>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"form.controls.withinContract.value\"\r\n                 id=\"contractGroup\"\r\n                 class=\"form-group mt-4\">\r\n              <j-form-field #contractsWrapper>\r\n                <j-label translate>CURRENCY_PAYMENT.RECIPIENT.CONTRACT</j-label>\r\n                <j-select #contractsSelect\r\n                          [loading]=\"isFxContractsLoading\"\r\n                          (change)=\"onContractSelect($event)\"\r\n                          [appendTo]=\"contractsWrapper.elementRef.nativeElement\"\r\n                          [jFocusOnReturn]=\"contractsSelect\"\r\n                          [formControl]=\"form.controls.contract\"\r\n                          [clearable]=\"false\"\r\n                          [searchFn]=\"contractComparator\"\r\n                          [items]=\"fxContracts\">\r\n                  <ng-template j-header-tmp\r\n                               let-searchTerm=\"searchTerm\">\r\n                    <div class=\"mb-3\"\r\n                         *ngIf=\"!searchTerm && !fxContracts\">\r\n                      <button (click)=\"openContractsAddingModal()\"\r\n                              *ngIf=\"fxContracts.length > 0\"\r\n                              type=\"button\"\r\n                              class=\"list-dictionary form-section--action btn btn-xs btn-link float-right\">\r\n                        <span translate>\r\n                          CURRENCY_PAYMENT.CONTRACTS.ADD_NEW\r\n                        </span>\r\n                      </button>\r\n                      <h6 translate>CURRENCY_PAYMENT.CONTRACTS.TITLE</h6>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template j-option-tmp\r\n                               let-item=\"item\">\r\n                    <div class=\"j-option-label text-wrap p3\">\r\n                      <div class=\"text-dark contract-row\">\r\n                        <span>{{ item.contractor.name }}</span>\r\n                        <j-money [money]=\"item.amount\"></j-money>\r\n                      </div>\r\n                      <div class=\"text-muted contract-row\">\r\n                        <span>{{ item.contractNumber }}</span>\r\n                        <div>\r\n                          <span translate=\"CURRENCY_PAYMENT.CONTRACTS.SELECT.REMAINDER\"></span>&nbsp;\r\n                          <j-money [money]=\"item.remainder\"></j-money>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template j-notfound-tmp>\r\n                    <ng-container *ngIf=\"fxContracts.length == 0\">\r\n                      <div class=\"contracts__empty\">\r\n                        <img src=\"assets/img/payments/no_contract.svg\">\r\n                        <div class=\"mx-auto mt-3 p2 text-muted\"\r\n                             [innerHTML]=\"'CURRENCY_PAYMENT.CONTRACTS.EMPTY_STATE' | translate\"></div>\r\n                        <a href=\"#\"\r\n                           (click)=\"openContractsAddingModal($event)\"\r\n                           class=\"link d-inline-block mt-3\">\r\n                          {{'CURRENCY_PAYMENT.CONTRACTS.ADD_NEW' | translate}}\r\n                        </a>\r\n                      </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"fxContracts.length > 0\">\r\n                      <j-empty-placeholder label=\"CURRENCY_PAYMENT.CONTRACTS.NOT_FOUND\"></j-empty-placeholder>\r\n                      <div class=\"text-center my-2\">\r\n                        <a href=\"#\"\r\n                           (click)=\"openContractsAddingModal($event)\"\r\n                           class=\"link d-inline-block \">\r\n                          {{'CURRENCY_PAYMENT.CONTRACTS.ADD_NEW' | translate}}\r\n                        </a>\r\n                      </div>\r\n                    </ng-container>\r\n                  </ng-template>\r\n                  <ng-template j-label-tmp\r\n                               let-item=\"item\">\r\n                    {{ mapContractLabel(item || form.controls.contract.value) }}\r\n                  </ng-template>\r\n                </j-select>\r\n                <a *ngIf=\"form.controls.contractId.value\"\r\n                   href=\"#\"\r\n                   (click)=\"showContractDetails($event)\"\r\n                   jSuffix\r\n                   class=\"mr-1 p3\"\r\n                   translate>CURRENCY_PAYMENT.CONTRACTS.SHOW_DETAILS</a>\r\n              </j-form-field>\r\n            </div>\r\n\r\n\r\n          </ng-container>\r\n\r\n          <div class=\"form-group\">\r\n            <j-form-field>\r\n              <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\r\n              <input type=\"text\"\r\n                     jFormInput\r\n                     jFocusOnReturn\r\n                     class=\"form-control\"\r\n                     [mask]=\"masks.number.mask\"\r\n                     [formControl]=\"form.controls.number\">\r\n              <!-- <j-error [control]=\"form.controls.number\"\r\n                           [errorMessages]=\"errors.number\"></j-error> -->\r\n            </j-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <j-date-picker #datePicker\r\n                           allowAuto=\"true\"\r\n                           [datesEnabled]=\"workingDays$ | async\"\r\n                           [formControl]=\"form.controls.date\"\r\n                           [formatValue]=\"true\"\r\n                           [jFocusOnReturn]=\"datePicker\"\r\n                           [label]=\"'PAYMENTS.FORM.VALUE_DATE' | translate\"\r\n                           [minDate]=\"dateLimit.minDate\"\r\n                           [maxDate]=\"dateLimit.maxDate\"\r\n                           [helperText]=\"dateMessage$ | async | translate\">\r\n            </j-date-picker>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <j-form-field #knpWrapper>\r\n              <j-label>{{ 'PAYMENTS.FORM.KNP_REGULAR' | translate }}</j-label>\r\n              <j-select #select\r\n                        [jFocusOnReturn]=\"select\"\r\n                        bindValue=\"code\"\r\n                        [appendTo]=\"knpWrapper.elementRef.nativeElement\"\r\n                        bindLabel=\"label\"\r\n                        [formControl]=\"form.controls.knp\"\r\n                        [clearable]=\"false\"\r\n                        [searchMask]=\"masks.knp.mask\"\r\n                        [shadow]=\"masks.knp.shadow\"\r\n                        [compareWith]=\"knpComparator\"\r\n                        [items]=\"knp$ | async\">\r\n                <ng-template j-header-tmp\r\n                             let-searchTerm=\"searchTerm\">\r\n                  <div *ngIf=\"!searchTerm\">\r\n                    <button (click)=\"openKnpDictionary(select, $event)\"\r\n                            type=\"button\"\r\n                            class=\"form-section--action btn btn-xs btn-link float-right\">\r\n                      {{ 'PAYMENTS.DICTIONARY.TITLE' | translate }}\r\n                    </button>\r\n                    <p class=\"p2 m-0\">{{ 'PAYMENTS.DICTIONARY.FREQUENT_KNP' | translate }}</p>\r\n                    <p class=\"p3 text-gray\">{{ 'PAYMENTS.DICTIONARY.KNP_DESCRIPTION' | translate }}</p>\r\n                  </div>\r\n                </ng-template>\r\n              </j-select>\r\n            </j-form-field>\r\n          </div>\r\n          <div class=\"form-group position-relative\">\r\n            <span class=\"payment-section--purpose-length p3 text-gray\">\r\n              {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\r\n            <j-form-field>\r\n              <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\r\n              <textarea #purpose\r\n                        jFocusOnReturn\r\n                        jFormInput\r\n                        class=\"form-control\"\r\n                        [formControl]=\"form.controls.purpose\"\r\n                        rows=\"5\"></textarea>\r\n              <j-error [control]=\"form.controls.purpose\"\r\n                       [errorMessages]=\"errors.purpose\"></j-error>\r\n              <div *ngIf=\"purposeMessage$ | async as message\"\r\n                   jBottomLine\r\n                   class=\"j-form-field-bottom\">\r\n                <div class=\"text-truncate small\">\r\n                  {{message}}\r\n                </div>\r\n              </div>\r\n            </j-form-field>\r\n            <div class=\"j-input-helper text-muted mt-1 p3\">\r\n              {{ 'PAYMENTS.FORM.PURPOSE_HELPER' | translate }}\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n\r\n      <div class=\"form-section\">\r\n        <fieldset>\r\n          <div class=\"form-group\">\r\n            <j-account-dropdown #senderAccountDropdown\r\n                                (selected)=\"onSenderAccountSelect($event)\"\r\n                                [isLoading]=\"accountStore.fetching$ | async\"\r\n                                [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\r\n                                [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\r\n                                [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-group\">\r\n              <j-form-field clearable=\"true\"\r\n                            [floatLabel]=\"'always'\">\r\n                <j-label>{{'PAYMENTS.FORM.AMOUNT' | translate}}</j-label>\r\n                <input type=\"text\"\r\n                       jFocusOnReturn\r\n                       jFormInput\r\n                       jCursorBound\r\n                       jReplaceDot\r\n                       suffix=\" ₸\"\r\n                       placeholder=\"0,00\"\r\n                       class=\"form-control\"\r\n                       mask=\"separator.2\"\r\n                       thousandSeparator=\" \"\r\n                       decimalMarker=\",\"\r\n                       [dropSpecialCharacters]=\"true\"\r\n                       [formControl]=\"form.controls.amount\">\r\n                <!-- <j-error [control]=\"form.controls.amount\"\r\n                           [errorMessages]=\"errors.amount\"></j-error> -->\r\n              </j-form-field>\r\n              <div class=\"j-input-helper text-muted mt-1 p3\"\r\n                   *ngIf=\"amountMessage$ | async as message\">\r\n                <span [innerHTML]=\"message | translate\"></span>\r\n              </div>\r\n              <div class=\"j-input-helper text-muted mt-1 p3 position-relative\">\r\n                <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\r\n                  {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\r\n                </ng-container>\r\n                <ng-template #commission>\r\n                  {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item d-flex align-items-center\">\r\n                <j-switch [formControl]=\"form.controls.vat\"></j-switch>\r\n                <span class=\"ml-3\"> {{'PAYMENTS.VAT.TITLE' | translate}}<br>\r\n                  <small class=\"text-gray\">{{'PAYMENTS.VAT.DESCRIPTION' | translate}} = {{vat$ | async | amountFormat}}\r\n                    ₸</small></span>\r\n              </li>\r\n              <li class=\"list-group-item d-flex align-items-center\">\r\n                <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\r\n                <span class=\"ml-3\">{{'PAYMENTS.FORM.URGENT' | translate}} <br>\r\n                  <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\r\n                </span>\r\n              </li>\r\n              <li class=\"list-group-item d-flex align-items-center\">\r\n                <j-switch [formControl]=\"form.controls.notify\"></j-switch>\r\n                <div class=\"ml-3 flex-grow-1\">\r\n                  <strong>{{ 'PAYMENTS.NOTIFY.TITLE' | translate }}</strong>\r\n                  <br>\r\n                  <div *ngIf=\"!form.controls.notify.value\">\r\n                    <small class=\"text-gray\">{{ 'PAYMENTS.NOTIFY.DESCRIPTION' | translate }}</small>\r\n                  </div>\r\n                  <div class=\"mt-1\"\r\n                       *ngIf=\"form.controls.notify.value\">\r\n                    <j-form-field>\r\n                      <j-label>{{ 'PAYMENTS.NOTIFY.EMAIL' | translate }}</j-label>\r\n                      <input type=\"email\"\r\n                             #emailOnSuccess=\"ngbTypeahead\"\r\n                             (focus)=\"onEmailOnSuccessFocus($event)\"\r\n                             jFormInput\r\n                             jFocusOnReturn\r\n                             autocomplete=\"off\"\r\n                             class=\"form-control\"\r\n                             [ngbTypeahead]=\"search\"\r\n                             [formControl]=\"form.controls.emailOnSuccess\">\r\n                      <j-error [control]=\"form.controls.emailOnSuccess\"\r\n                               [errorMessages]=\"errors.email\"></j-error>\r\n                    </j-form-field>\r\n                    <small class=\"text-gray\">{{ 'PAYMENTS.NOTIFY.EMAIL' | translate }}</small>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n      <div class=\"payment-section--submit form-group pt-4\">\r\n        <div class=\"payment-section--submit form-group pt-4\">\r\n          <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\r\n            <button class=\"btn btn-outline-primary btn-static\"\r\n                    (click)=\"saveToDraft()\"\r\n                    type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\r\n            <button class=\"btn btn-primary btn-static ml-3\"\r\n                    type=\"submit\">{{submitLabel | translate}}\r\n            </button>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\r\n            <button class=\"btn btn-outline-primary btn-static\"\r\n                    type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <ngx-spinner type=\"ball-scale-ripple-multiple\"\r\n                   [name]=\"SPINNER\"\r\n                   [fullScreen]=\"false\"\r\n                   size=\"large\"\r\n                   color=\"#d6dadf\"\r\n                   zIndex=\"3\"\r\n                   bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\r\n    </form>\r\n  </div>\r\n\r\n  <ng-template #kbeInfo>\r\n    <j-kbe-info></j-kbe-info>\r\n  </ng-template>\r\n</ng-container>";

/***/ }),

/***/ 13148:
/*!***********************************************************************************************!*\
  !*** ./src/app/payments/containers/pension-payment/pension-payment.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\r\n                          [isLoading]=\"isPermissionsUpdating\"\r\n                          (retried)=\"updatePermissions()\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n  <form jInvalidControlScroll\r\n        autocomplete=\"off\"\r\n        jFocusableContainer\r\n        (submit)=\"onSubmit($event)\"\r\n        #formDirective=\"ngForm\"\r\n        [formGroup]=\"form\">\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\r\n        <div class=\"form-group\">\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\r\n            <input jFocusOnReturn\r\n                   type=\"text\"\r\n                   jFormInput\r\n                   class=\"form-control\"\r\n                   [mask]=\"masks.number.mask\"\r\n                   [formControl]=\"form.controls.number\">\r\n            <!-- <j-error [control]=\"form.controls.number\"\r\n                         [errorMessages]=\"errors.number\"></j-error> -->\r\n          </j-form-field>\r\n        </div>\r\n        <!-- <div class=\"form-group\">\r\n        <j-period-input [formControl]=\"form.controls.period\"></j-period-input>\r\n      </div> -->\r\n        <div class=\"form-group\">\r\n          <j-form-field #knpWrapper>\r\n            <j-label>{{ 'PAYMENTS.FORM.KNP' | translate }}</j-label>\r\n            <j-select #select\r\n                      [jFocusOnReturn]=\"select\"\r\n                      [appendTo]=\"knpWrapper.elementRef.nativeElement\"\r\n                      [formControl]=\"form.controls.knp\"\r\n                      [clearable]=\"false\"\r\n                      bindValue=\"code\"\r\n                      bindLabel=\"label\"\r\n                      [searchMask]=\"masks.knp.mask\"\r\n                      [shadow]=\"masks.knp.shadow\"\r\n                      [items]=\"knp$ | async\">\r\n            </j-select>\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group position-relative\">\r\n          <span class=\"payment-section--purpose-length p3 text-gray\">\r\n            {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\r\n            <textarea #purpose\r\n                      jFocusOnReturn\r\n                      jFormInput\r\n                      class=\"form-control\"\r\n                      [formControl]=\"form.controls.purpose\"\r\n                      rows=\"5\"></textarea>\r\n            <j-error [control]=\"form.controls.purpose\"\r\n                     [errorMessages]=\"errors.purpose\"></j-error>\r\n            <div *ngIf=\"purposeMessage$ | async as message\"\r\n                 jBottomLine\r\n                 class=\"j-form-field-bottom\">\r\n              <div class=\"text-truncate small\">\r\n                {{message}}\r\n              </div>\r\n            </div>\r\n          </j-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <j-account-dropdown #senderAccountDropdown\r\n                              (selected)=\"onSenderAccountSelect($event)\"\r\n                              [isLoading]=\"accountStore.fetching$ | async\"\r\n                              [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\r\n                              [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\r\n                              [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <j-employee-group-control [formControl]=\"form.controls.employees\"\r\n                                  [paymentType]=\"paymentType\"\r\n                                  [minAmount]=\"employeeMinAmount\"\r\n                                  [maxAmount]=\"employeeMaxAmount\"\r\n                                  [periodRequired]=\"true\"\r\n                                  [birthDateRequired]=\"true\"\r\n                                  [additionalPeriodEnabled]=\"true\">\r\n          <j-error [control]=\"form.controls.employees\"\r\n                   [errorMessages]=\"errors.employees\"></j-error>\r\n        </j-employee-group-control>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"payment-section--summary form-section\">\r\n      <div class=\"form-group\">\r\n        <fieldset>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              <h5 class=\"light m-0\">{{ 'PAYMENTS.FORM.TOTAL_AMOUNT' | translate }}:\r\n                <span class=\"h3\"><strong>{{(total$ | async) | amountFormat}}</strong> ₸</span>\r\n              </h5>\r\n              <div class=\"payment-section--amount-warn mt-1 p2\"\r\n                   *ngIf=\"amountMessage$ | async as message\">\r\n                <span [innerHTML]=\"message | translate\"></span>\r\n              </div>\r\n              <p class=\"p3 text text-gray d-inline-block m-0\">\r\n                <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\r\n                  {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\r\n                </ng-container>\r\n                <ng-template #commission>\r\n                  {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\r\n                </ng-template>\r\n              </p>\r\n            </li>\r\n            <li class=\"list-group-item d-flex align-items-center\">\r\n              <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\r\n              <span class=\"ml-3\">{{'PAYMENTS.FORM.URGENT' | translate}} <br>\r\n                <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"payment-section--submit form-group pt-4\">\r\n      <div class=\"payment-section--submit form-group pt-4\">\r\n        <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\r\n          <button class=\"btn btn-outline-primary btn-static\"\r\n                  (click)=\"saveToDraft()\"\r\n                  type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\r\n          <button class=\"btn btn-primary btn-static ml-3\"\r\n                  type=\"submit\">{{submitLabel | translate}}\r\n          </button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\r\n          <button class=\"btn btn-outline-primary btn-static\"\r\n                  type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <ngx-spinner type=\"ball-scale-ripple-multiple\"\r\n                 [name]=\"SPINNER\"\r\n                 [fullScreen]=\"false\"\r\n                 size=\"large\"\r\n                 color=\"#d6dadf\"\r\n                 zIndex=\"3\"\r\n                 bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\r\n  </form>\r\n</ng-container>";

/***/ }),

/***/ 60025:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/salary-payment/salary-payment.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\r\n                          [isLoading]=\"isPermissionsUpdating\"\r\n                          (retried)=\"updatePermissions()\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n  <div class=\"payment-section\">\r\n    <form jInvalidControlScroll\r\n          autocomplete=\"off\"\r\n          jFocusableContainer\r\n          (submit)=\"onSubmit($event)\"\r\n          #formDirective=\"ngForm\"\r\n          [formGroup]=\"form\">\r\n      <div class=\"form-section\">\r\n        <fieldset>\r\n\r\n          <div class=\"payments__header\">\r\n            <h2 class=\"h2 mb-0\">\r\n              {{ 'PAYMENTS.RECIPIENT.TITLE' | translate }}\r\n            </h2>\r\n            <button (click)=\"openBanksDictionary()\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-link p-0 p3\">\r\n              {{ 'PAYMENTS.SELECT_FROM_DICTIONARY' | translate }}\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <j-form-field #receiverWrapper>\r\n              <j-label *ngIf=\"!form.controls.bankReceiver.value\">{{ 'PAYMENTS.FORM.RECEIVER_BANK' | translate }}\r\n              </j-label>\r\n              <j-select #receiverSelect\r\n                        [searchFn]=\"paymentsService.bankReceiverSearchFn\"\r\n                        [jFocusOnReturn]=\"receiverSelect\"\r\n                        [appendTo]=\"receiverWrapper.elementRef.nativeElement\"\r\n                        [formControl]=\"form.controls.bankReceiver\"\r\n                        [clearable]=\"false\"\r\n                        bindValue=\"id\"\r\n                        [items]=\"banks.items$ | async\">\r\n                <ng-template j-label-tmp\r\n                             let-item=\"item\">\r\n                  <div class=\"account-pill pl-0 pr-0\">\r\n                    <div class=\"account-pill--logo\">\r\n                      <j-entity-logo [name]=\"item.bic\">\r\n                      </j-entity-logo>\r\n                    </div>\r\n                    <div class=\"account-pill--content small\">\r\n                      <p class=\"wrap-text\">\r\n                        {{item.salaryTransitIban ? (( 'PAYMENTS.FORM.ACCOUNT' | translate) + item.salaryTransitIban) :\r\n                        item.name}}\r\n                      </p>\r\n                      <p class=\"wrap-text text-gray\">{{item.bic}}:\r\n                        {{item.name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template j-option-tmp\r\n                             let-item=\"item\">\r\n                  <div class=\"account-pill account-pill_gray account-pill_fill\">\r\n                    <div class=\"account-pill--logo\">\r\n                      <j-entity-logo [name]=\"item.bic\">\r\n                      </j-entity-logo>\r\n                    </div>\r\n                    <div class=\"account-pill--content small\">\r\n                      <p class=\"wrap-text\">\r\n                        {{item.salaryTransitIban ? (( 'PAYMENTS.FORM.ACCOUNT' | translate) + item.salaryTransitIban) :\r\n                        item.name}}\r\n                      </p>\r\n                      <p class=\"wrap-text text-gray\">{{item.bic}}:\r\n                        {{item.name}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </j-select>\r\n              <j-error [control]=\"form.controls.bankReceiver\"\r\n                       [errorMessages]=\"errors.bankReceiver\"\r\n                       [params]=\"bankReceiverErrorParams\"></j-error>\r\n            </j-form-field>\r\n          </div>\r\n          <div *ngIf=\"form.controls.bankAccount.enabled\"\r\n               class=\"form-group\">\r\n            <j-form-field clearable=\"true\">\r\n              <!-- <j-entity-logo jPrefix\r\n                           hideEmpty=\"true\"\r\n                           [name]=\"('KZ' + form.controls.bankAccount.value) | bankFromAccount\">\r\n            </j-entity-logo>  -->\r\n              <j-label>{{ 'PAYMENTS.FORM.BANK_IBAN' | translate }}</j-label>\r\n              <input #accountInput=\"jFormInput\"\r\n                     type=\"text\"\r\n                     jFormInput\r\n                     jReplaceOnPaste=\"KZ\"\r\n                     jDynamicPrefix=\"KZ\"\r\n                     jFocusOnReturn\r\n                     jUppercase\r\n                     [jShadow]=\"masks.bankAccount.shadow\"\r\n                     class=\"form-control\"\r\n                     [dropSpecialCharacters]=\"true\"\r\n                     [mask]=\"masks.bankAccount.mask\"\r\n                     [formControl]=\"form.controls.bankAccount\">\r\n              <j-error [control]=\"form.controls.bankAccount\"\r\n                       [errorMessages]=\"errors.bankAccount\"\r\n                       [params]=\"bankAccountErrorParams\"></j-error>\r\n            </j-form-field>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n      <div class=\"form-section\">\r\n        <fieldset>\r\n          <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\r\n          <div class=\"form-group\">\r\n            <j-form-field>\r\n              <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\r\n              <input jFocusOnReturn\r\n                     type=\"text\"\r\n                     jFormInput\r\n                     class=\"form-control\"\r\n                     [mask]=\"masks.number.mask\"\r\n                     [formControl]=\"form.controls.number\">\r\n              <!-- <j-error [control]=\"form.controls.number\"\r\n                         [errorMessages]=\"errors.number\"></j-error> -->\r\n            </j-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <j-date-picker #datepicker\r\n                           [jFocusOnReturn]=\"datepicker\"\r\n                           [datesEnabled]=\"workingDays$ | async\"\r\n                           allowAuto=\"true\"\r\n                           [formControl]=\"form.controls.date\"\r\n                           [formatValue]=\"true\"\r\n                           [label]=\"'PAYMENTS.FORM.VALUE_DATE' | translate\"\r\n                           [minDate]=\"dateLimit.minDate\"\r\n                           [maxDate]=\"dateLimit.maxDate\"\r\n                           [helperText]=\"dateMessage$ | async | translate\">\r\n            </j-date-picker>\r\n          </div>\r\n          <!--\r\n        <div class=\"form-group\">\r\n          <j-period-input [formControl]=\"form.controls.period\"></j-period-input>\r\n        </div> -->\r\n\r\n          <div class=\"form-group\">\r\n            <j-form-field #knpWrapper>\r\n              <j-label>{{ 'PAYMENTS.FORM.KNP' | translate }}</j-label>\r\n              <j-select #select\r\n                        [jFocusOnReturn]=\"select\"\r\n                        [appendTo]=\"knpWrapper.elementRef.nativeElement\"\r\n                        [formControl]=\"form.controls.knp\"\r\n                        [clearable]=\"false\"\r\n                        bindValue=\"code\"\r\n                        [searchMask]=\"masks.knp.mask\"\r\n                        [shadow]=\"masks.knp.shadow\"\r\n                        [items]=\"knp$ | async\">\r\n                <ng-template j-label-tmp\r\n                             let-item=\"item\">\r\n                  <div class=\"text-truncate\">{{item.label}}</div>\r\n                </ng-template>\r\n              </j-select>\r\n            </j-form-field>\r\n          </div>\r\n\r\n          <div class=\"form-group position-relative\">\r\n            <span class=\"payment-section--purpose-length p3 text-gray\">\r\n              {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\r\n            <j-form-field>\r\n              <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\r\n              <textarea #purpose\r\n                        jFocusOnReturn\r\n                        jFormInput\r\n                        class=\"form-control\"\r\n                        [formControl]=\"form.controls.purpose\"\r\n                        rows=\"5\"></textarea>\r\n              <j-error [control]=\"form.controls.purpose\"\r\n                       [errorMessages]=\"errors.purpose\"></j-error>\r\n              <div *ngIf=\"purposeMessage$ | async as message\"\r\n                   jBottomLine\r\n                   class=\"j-form-field-bottom\">\r\n                <div class=\"text-truncate small\">\r\n                  {{message}}\r\n                </div>\r\n              </div>\r\n            </j-form-field>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <j-account-dropdown #senderAccountDropdown\r\n                                (selected)=\"onSenderAccountSelect($event)\"\r\n                                [isLoading]=\"accountStore.fetching$ | async\"\r\n                                [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\r\n                                [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\r\n                                [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n      <div class=\"form-section\">\r\n\r\n\r\n        <fieldset>\r\n          <j-employee-group-control [formControl]=\"form.controls.employees\"\r\n                                    [paymentType]=\"paymentType\"\r\n                                    [minAmount]=\"employeeMinAmount\"\r\n                                    [maxAmount]=\"employeeMaxAmount\"\r\n                                    [birthDateRequired]=\"false\"\r\n                                    [ibanRequired]=\"true\">\r\n            <div ngProjectAs=\"[header]\"\r\n                 class=\"row\">\r\n              <div class=\"form-group col\">\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\"\r\n                         id=\"residents\"\r\n                         name=\"isResidents\"\r\n                         formControlName=\"isResidents\"\r\n                         [value]=\"true\"\r\n                         class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label text-muted p3\"\r\n                         for=\"residents\">\r\n                    {{ 'PAYMENTS.FORM.EMPLOYEE_RESIDENTS' | translate }}\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col\">\r\n                <div class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\"\r\n                         id=\"nonResident\"\r\n                         name=\"isResidents\"\r\n                         formControlName=\"isResidents\"\r\n                         [value]=\"false\"\r\n                         class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label text-muted p3\"\r\n                         for=\"nonResident\">\r\n                    {{ 'PAYMENTS.FORM.EMPLOYEE_NON-RESIDENTS' | translate }}\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <j-error [control]=\"form.controls.employees\"\r\n                     [errorMessages]=\"errors.employees\"></j-error>\r\n          </j-employee-group-control>\r\n        </fieldset>\r\n      </div>\r\n\r\n      <div class=\"payment-section--summary form-section\">\r\n        <div class=\"form-group\">\r\n          <fieldset>\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item\">\r\n                <h5 class=\"light m-0\">{{ 'PAYMENTS.FORM.TOTAL_AMOUNT' | translate }}:\r\n                  <span class=\"h3\"><strong>{{(total$ | async) | amountFormat}}</strong> ₸</span>\r\n                </h5>\r\n                <div class=\"payment-section--amount-warn mt-1 p2\"\r\n                     *ngIf=\"amountMessage$ | async as message\">\r\n                  <span [innerHTML]=\"message | translate\"></span>\r\n                </div>\r\n                <p class=\"p3 text text-gray d-inline-block m-0\">\r\n                  <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\r\n                    {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\r\n                  </ng-container>\r\n                  <ng-template #commission>\r\n                    {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\r\n                  </ng-template>\r\n                  <!-- <button [ngbPopover]=\"amountInfo\"\r\n                        type=\"button\"\r\n                        triggers=\"mouseenter:mouseleave\"\r\n                        class=\"btn btn-link text-dark btn-xxs mt-n1 float-right\">\r\n                  <j-icon name=\"question\"></j-icon>\r\n                </button> -->\r\n                </p>\r\n\r\n              </li>\r\n              <li class=\"list-group-item d-flex align-items-center\">\r\n                <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\r\n                <span class=\"ml-3\">{{'PAYMENTS.FORM.URGENT' | translate}} <br>\r\n                  <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\r\n                </span>\r\n              </li>\r\n            </ul>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"payment-section--submit form-group pt-4\">\r\n        <p *ngIf=\"controlsStream.isResidents | async\"\r\n           class=\"p3 text-gray text-right\"\r\n           [innerHTML]=\"'PAYMENTS.FORM.RESIDENT_AGREEMENT' | translate\"></p>\r\n        <div class=\"payment-section--submit form-group pt-4\">\r\n          <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\r\n            <button class=\"btn btn-outline-primary btn-static\"\r\n                    (click)=\"saveToDraft()\"\r\n                    type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\r\n            <button class=\"btn btn-primary btn-static ml-3\"\r\n                    type=\"submit\">{{submitLabel | translate}}\r\n            </button>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\r\n            <button class=\"btn btn-outline-primary btn-static\"\r\n                    type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <ngx-spinner type=\"ball-scale-ripple-multiple\"\r\n                   [name]=\"SPINNER\"\r\n                   [fullScreen]=\"false\"\r\n                   size=\"large\"\r\n                   color=\"#d6dadf\"\r\n                   zIndex=\"3\"\r\n                   bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\r\n    </form>\r\n  </div>\r\n</ng-container>";

/***/ }),

/***/ 40774:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/social-payment/social-payment.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\r\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\r\n                          [isLoading]=\"isPermissionsUpdating\"\r\n                          (retried)=\"updatePermissions()\"\r\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\r\n</j-restricted-placeholder>\r\n\r\n<ng-container *ngIf=\"!isRestricted\">\r\n  <form jInvalidControlScroll\r\n        jFocusableContainer\r\n        autocomplete=\"off\"\r\n        (submit)=\"onSubmit($event)\"\r\n        #formDirective=\"ngForm\"\r\n        [formGroup]=\"form\">\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\r\n        <div class=\"form-group\">\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\r\n            <input jFocusOnReturn\r\n                   type=\"text\"\r\n                   jFormInput\r\n                   class=\"form-control\"\r\n                   [mask]=\"masks.number.mask\"\r\n                   [formControl]=\"form.controls.number\">\r\n            <!-- <j-error [control]=\"form.controls.number\"\r\n                         [errorMessages]=\"errors.number\"></j-error> -->\r\n          </j-form-field>\r\n        </div>\r\n        <!-- <div class=\"form-group\">\r\n        <j-date-picker #datepicker\r\n                       [jFocusOnReturn]=\"datepicker\"\r\n                       allowAuto=\"true\"\r\n                       [formControl]=\"form.controls.date\"\r\n                       [formatValue]=\"true\"\r\n                       [label]=\"'PAYMENTS.FORM.VALUE_DATE' | translate\"\r\n                       [minDate]=\"dateLimit.minDate\"\r\n                       [maxDate]=\"dateLimit.maxDate\"\r\n                       [helperText]=\"dateMessage$ | async | translate\">\r\n        </j-date-picker>\r\n      </div> -->\r\n\r\n        <!-- <div class=\"form-group\">\r\n        <j-period-input [formControl]=\"form.controls.period\"></j-period-input>\r\n      </div> -->\r\n\r\n        <div class=\"form-group\">\r\n          <j-form-field #knpWrapper>\r\n            <j-label>{{ 'PAYMENTS.FORM.KNP' | translate }}</j-label>\r\n            <j-select #select\r\n                      [jFocusOnReturn]=\"select\"\r\n                      [appendTo]=\"knpWrapper.elementRef.nativeElement\"\r\n                      [formControl]=\"form.controls.knp\"\r\n                      [clearable]=\"false\"\r\n                      bindValue=\"code\"\r\n                      bindLabel=\"label\"\r\n                      [searchMask]=\"masks.knp.mask\"\r\n                      [shadow]=\"masks.knp.shadow\"\r\n                      [items]=\"knp$ | async\">\r\n              <!-- <ng-template j-label-tmp\r\n                         let-item=\"item\">\r\n              <div class=\"text-truncate\">{{item.label}}</div>\r\n            </ng-template> -->\r\n            </j-select>\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group position-relative\">\r\n          <span class=\"payment-section--purpose-length p3 text-gray\">\r\n            {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\r\n          <j-form-field>\r\n            <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\r\n            <textarea #purpose\r\n                      jFocusOnReturn\r\n                      jFormInput\r\n                      class=\"form-control\"\r\n                      [formControl]=\"form.controls.purpose\"\r\n                      rows=\"5\"></textarea>\r\n            <j-error [control]=\"form.controls.purpose\"\r\n                     [errorMessages]=\"errors.purpose\"></j-error>\r\n            <div *ngIf=\"purposeMessage$ | async as message\"\r\n                 jBottomLine\r\n                 class=\"j-form-field-bottom\">\r\n              <div class=\"text-truncate small\">\r\n                {{message}}\r\n              </div>\r\n            </div>\r\n          </j-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <j-account-dropdown #senderAccountDropdown\r\n                              (selected)=\"onSenderAccountSelect($event)\"\r\n                              [isLoading]=\"accountStore.fetching$ | async\"\r\n                              [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\r\n                              [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\r\n                              [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n    <div class=\"form-section\">\r\n      <fieldset>\r\n        <j-employee-group-control [formControl]=\"form.controls.employees\"\r\n                                  [paymentType]=\"paymentType\"\r\n                                  [periodRequired]=\"true\"\r\n                                  [birthDateRequired]=\"true\"\r\n                                  [minAmount]=\"employeeMinAmount\"\r\n                                  [maxAmount]=\"employeeMaxAmount\"\r\n                                  [additionalPeriodEnabled]=\"true\">\r\n          <j-error [control]=\"form.controls.employees\"\r\n                   [errorMessages]=\"errors.employees\"></j-error>\r\n        </j-employee-group-control>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"payment-section--summary form-section\">\r\n      <div class=\"form-group \">\r\n        <fieldset>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              <h5 class=\"light m-0\">{{ 'PAYMENTS.FORM.TOTAL_AMOUNT' | translate }}:\r\n                <span class=\"h3\"><strong>{{(total$ | async) | amountFormat}}</strong> ₸</span>\r\n              </h5>\r\n              <div class=\"payment-section--amount-warn mt-1 p2\"\r\n                   *ngIf=\"amountMessage$ | async as message\">\r\n                <span [innerHTML]=\"message | translate\"></span>\r\n              </div>\r\n              <p class=\"p3 text text-gray d-inline-block m-0\">\r\n                <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\r\n                  {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\r\n                </ng-container>\r\n                <ng-template #commission>\r\n                  {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\r\n                </ng-template>\r\n                <!-- <button [ngbPopover]=\"amountInfo\"\r\n                      type=\"button\"\r\n                      triggers=\"mouseenter:mouseleave\"\r\n                      class=\"btn btn-link text-dark btn-xxs mt-n1 float-right\">\r\n                <j-icon name=\"question\"></j-icon>\r\n              </button> -->\r\n              </p>\r\n            </li>\r\n            <li class=\"list-group-item d-flex align-items-center\">\r\n              <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\r\n              <span class=\"ml-3\">{{'PAYMENTS.FORM.URGENT' | translate}} <br>\r\n                <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"payment-section--submit form-group pt-4\">\r\n      <div class=\"payment-section--submit form-group pt-4\">\r\n        <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\r\n          <button class=\"btn btn-outline-primary btn-static\"\r\n                  (click)=\"saveToDraft()\"\r\n                  type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\r\n          <button class=\"btn btn-primary btn-static ml-3\"\r\n                  type=\"submit\">{{submitLabel | translate}}\r\n          </button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\r\n          <button class=\"btn btn-outline-primary btn-static\"\r\n                  type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <ngx-spinner type=\"ball-scale-ripple-multiple\"\r\n                 [name]=\"SPINNER\"\r\n                 [fullScreen]=\"false\"\r\n                 size=\"large\"\r\n                 color=\"#d6dadf\"\r\n                 zIndex=\"3\"\r\n                 bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\r\n  </form>\r\n</ng-container>";

/***/ }),

/***/ 54747:
/*!***************************************************************************************!*\
  !*** ./src/app/payments/containers/tax-payment/tax-payment.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<j-restricted-placeholder *ngIf=\"isRestricted\"\n                          [isRetryable]=\"isPermissionsUpdateAllowed\"\n                          [isLoading]=\"isPermissionsUpdating\"\n                          (retried)=\"updatePermissions()\"\n                          label='PAYMENTS.RESTRICTED_PLACEHOLDER'>\n</j-restricted-placeholder>\n\n<ng-container *ngIf=\"!isRestricted\">\n  <form #formDirective=\"ngForm\"\n        autocomplete=\"off\"\n        [formGroup]=\"form\"\n        jInvalidControlScroll\n        jFocusableContainer\n        (submit)=\"onSubmit($event)\"\n        class=\"p-relative\">\n    <div class=\"form-section\">\n      <fieldset>\n\n        <div class=\"payments__header\">\n          <h2 class=\"h2 mb-0\">\n            {{ 'PAYMENTS.RECIPIENT.TITLE' | translate }}\n          </h2>\n          <button (click)=\"openDepartmentDictionary(ugdSelect, $event)\"\n                  type=\"button\"\n                  class=\"btn btn-link p-0 p3\">\n            {{ 'PAYMENTS.SELECT_FROM_DICTIONARY' | translate }}\n          </button>\n        </div>\n\n        <div class=\"form-group\">\n          <j-form-field #selectWrapper>\n            <j-label>{{ 'PAYMENTS.FORM.UGD' | translate }}</j-label>\n            <j-select #ugdSelect\n                      [appendTo]=\"selectWrapper.elementRef.nativeElement\"\n                      [jFocusOnReturn]=\"ugdSelect\"\n                      [formControl]=\"form.controls.ugd\"\n                      [clearable]=\"false\"\n                      [searchFn]=\"paymentsService.ugdSearchFn\"\n                      bindValue=\"code\"\n                      bindLabel=\"label\"\n                      [items]=\"ugdStore.items$ | async\">\n              <ng-template j-option-tmp\n                           let-item=\"item\">\n                <div class=\"j-option-label text-wrap\">\n                  <p class=\"m-0\">{{item.label}}</p>\n                  <p class=\"p3 text-gray m-0\">{{ 'PAYMENTS.FORM.BIN' | translate }} {{item.bin}}</p>\n                </div>\n              </ng-template>\n              <ng-template j-header-tmp\n                           let-searchTerm=\"searchTerm\">\n                <div *ngIf=\"!searchTerm\">\n                  <button (click)=\"openDepartmentDictionary(ugdSelect, $event)\"\n                          type=\"button\"\n                          class=\"form-section--action btn btn-xs btn-link float-right\">\n                    {{ 'PAYMENTS.DICTIONARY.TITLE' | translate }}\n                  </button>\n                  <p class=\"p2\">{{ 'PAYMENTS.DICTIONARY.FREQUENT_UGD' | translate }}</p>\n                </div>\n              </ng-template>\n            </j-select>\n          </j-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <j-form-field clearable=\"true\">\n            <j-entity-logo jPrefix\n                           hideEmpty=\"true\"\n                           [name]=\"('KZ' + form.controls.bankAccount.value) | bankFromAccount\">\n            </j-entity-logo>\n            <j-label>{{ 'PAYMENTS.FORM.IBAN' | translate }}</j-label>\n            <input #accountInput=\"jFormInput\"\n                   type=\"text\"\n                   jFormInput\n                   jReplaceOnPaste=\"KZ\"\n                   jDynamicPrefix=\"KZ\"\n                   jFocusOnReturn\n                   jUppercase\n                   [jShadow]=\"masks.bankAccount.shadow\"\n                   class=\"form-control\"\n                   [dropSpecialCharacters]=\"true\"\n                   [mask]=\"masks.bankAccount.mask\"\n                   [formControl]=\"form.controls.bankAccount\">\n            <j-error [control]=\"form.controls.bankAccount\"\n                     [errorMessages]=\"errors.bankAccount\"\n                     [params]=\"bankAccountErrorParams\"></j-error>\n          </j-form-field>\n        </div>\n      </fieldset>\n    </div>\n\n    <div class=\"form-section\">\n      <fieldset>\n        <legend class=\"h2\">{{ 'PAYMENTS.FORM.DETAILS' | translate }}</legend>\n        <div class=\"form-group\">\n          <j-form-field>\n            <j-label>{{ 'PAYMENTS.FORM.DOCUMENT_NUMBER' | translate }}</j-label>\n            <input type=\"text\"\n                   jFormInput\n                   jFocusOnReturn\n                   class=\"form-control\"\n                   [mask]=\"masks.number.mask\"\n                   [formControl]=\"form.controls.number\">\n            <!-- <j-error [control]=\"form.controls.number\"\n                         [errorMessages]=\"errors.number\"></j-error> -->\n          </j-form-field>\n        </div>\n        <!-- <div class=\"form-group\">\n        <j-date-picker #datePicker\n                       allowAuto=\"true\"\n                       [jFocusOnReturn]=\"datePicker\"\n                       [formControl]=\"form.controls.date\"\n                       [formatValue]=\"true\"\n                       [label]=\"'PAYMENTS.FORM.VALUE_DATE' | translate\"\n                       [minDate]=\"dateLimit.minDate\"\n                       [maxDate]=\"dateLimit.maxDate\"\n                       [helperText]=\"dateMessage$ | async | translate\">\n        </j-date-picker>\n      </div> -->\n        <div class=\"form-group\"\n             *ngTemplateOutlet=\"!form.controls.intervalEnabled.value ? periodTpl : intervalTpl\"></div>\n        <div class=\"form-group\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item text-left d-flex align-items-center\">\n              <j-switch [formControl]=\"form.controls.intervalEnabled\"></j-switch>\n              <span class=\"ml-3\"> {{ 'PAYMENTS.FORPERIOD' | translate}} <br>\n                <small class=\"text-gray\">\n                  {{ intervalSwitchLabel | translate }}\n                  <span [hidden]=\"!form.controls.intervalEnabled.value\">:\n                    {{periodMessage$ | async}}\n                  </span>\n                </small>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-group\">\n            <j-form-field #kbkWrapper>\n              <j-label>{{ 'PAYMENTS.FORM.KBK' | translate }}</j-label>\n              <j-select #kbkSelect\n                        [jFocusOnReturn]=\"kbkSelect\"\n                        [appendTo]=\"kbkWrapper.elementRef.nativeElement\"\n                        [formControl]=\"form.controls.kbk\"\n                        [clearable]=\"false\"\n                        bindValue=\"code\"\n                        bindLabel=\"label\"\n                        [searchMask]=\"masks.kbk.mask\"\n                        [shadow]=\"masks.kbk.shadow\"\n                        [items]=\"kbkStore.items$ | async\">\n                <ng-template j-header-tmp\n                             let-searchTerm=\"searchTerm\">\n                  <div *ngIf=\"!searchTerm\">\n                    <button (click)=\"openKBKDictionary(kbkSelect, $event)\"\n                            type=\"button\"\n                            class=\"form-section--action btn btn-xs btn-link float-right\">\n                      {{ 'PAYMENTS.DICTIONARY.TITLE' | translate }}\n                    </button>\n                    <p class=\"p2\"> {{ 'PAYMENTS.DICTIONARY.FREQUENT_KBK' | translate }} </p>\n                  </div>\n                </ng-template>\n              </j-select>\n            </j-form-field>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <j-form-field #knpWrapper>\n            <j-label>{{ 'PAYMENTS.FORM.KNP_REGULAR' | translate }}</j-label>\n            <j-select #knpSelect\n                      [appendTo]=\"knpWrapper.elementRef.nativeElement\"\n                      [jFocusOnReturn]=\"knpSelect\"\n                      [formControl]=\"form.controls.knp\"\n                      [clearable]=\"false\"\n                      bindValue=\"code\"\n                      [searchMask]=\"masks.knp.mask\"\n                      [shadow]=\"masks.knp.shadow\"\n                      bindLabel=\"label\"\n                      [items]=\"filteredKnpList\">\n              <ng-template j-header-tmp\n                           let-searchTerm=\"searchTerm\">\n                <div *ngIf=\"!searchTerm\">\n                  <button (click)=\"openKnpDictionary(knpSelect, $event)\"\n                          type=\"button\"\n                          class=\"form-section--action btn btn-xs btn-link float-right\">\n                    {{ 'PAYMENTS.DICTIONARY.TITLE' | translate }}\n                  </button>\n                  <p class=\"p2 m-0\">{{ 'PAYMENTS.DICTIONARY.FREQUENT_KNP' | translate }}</p>\n                  <p class=\"p3 text-gray\">{{ 'PAYMENTS.DICTIONARY.KNP_DESCRIPTION' | translate }}</p>\n                </div>\n              </ng-template>\n            </j-select>\n          </j-form-field>\n        </div>\n        <div class=\"form-group position-relative\">\n          <span class=\"payment-section--purpose-length p3 text-gray\">\n            {{purposeLength$ | async}}/{{rules.purposeLength}}</span>\n          <j-form-field>\n            <j-label>{{ 'PAYMENTS.FORM.PURPOSE' | translate }}</j-label>\n            <textarea #purpose\n                      jFocusOnReturn\n                      jFormInput\n                      class=\"form-control\"\n                      [formControl]=\"form.controls.purpose\"\n                      rows=\"5\"></textarea>\n            <j-error [control]=\"form.controls.purpose\"\n                     [errorMessages]=\"errors.purpose\"></j-error>\n            <div *ngIf=\"purposeMessage$ | async as message\"\n                 jBottomLine\n                 class=\"j-form-field-bottom\">\n              <div class=\"text-truncate small\">\n                {{message}}\n              </div>\n            </div>\n          </j-form-field>\n          <!-- <div class=\"j-input-helper text-muted mt-1 p3\">\n          При оплате за товары/услуги укажите наименование товаров, работ, услуг,\n          номера и даты договоров/счетов\n        </div> -->\n        </div>\n        <div *ngTemplateOutlet=\"associatedFieldTpl\"\n             class=\"form-group\"></div>\n\n      </fieldset>\n    </div>\n\n\n    <div class=\"form-section\">\n      <fieldset>\n        <div class=\"form-group\">\n          <j-account-dropdown #senderAccountDropdown\n                              (selected)=\"onSenderAccountSelect($event)\"\n                              [isLoading]=\"accountStore.fetching$ | async\"\n                              [label]=\"'PAYMENTS.SENDER_ACCOUNT.UNSELECTED'\"\n                              [hasError]=\"form.controls.senderAccount.touched && form.controls.senderAccount.errors\"\n                              [accounts]=\"acceptableAccounts$ | async\"></j-account-dropdown>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-group\">\n            <j-form-field clearable=\"true\"\n                          [floatLabel]=\"'always'\">\n              <j-label>{{'PAYMENTS.FORM.AMOUNT' | translate}}</j-label>\n              <input type=\"text\"\n                     suffix=\" ₸\"\n                     jFormInput\n                     jCursorBound\n                     placeholder=\"0,00\"\n                     class=\"form-control\"\n                     mask=\"separator.2\"\n                     jReplaceDot\n                     thousandSeparator=\" \"\n                     decimalMarker=\",\"\n                     [dropSpecialCharacters]=\"true\"\n                     [formControl]=\"form.controls.amount\">\n              <!-- <j-error [control]=\"form.controls.amount\"\n                         [errorMessages]=\"errors.amount\"></j-error> -->\n            </j-form-field>\n            <div class=\"j-input-helper text-muted mt-1 p3\"\n                 *ngIf=\"amountMessage$ | async as message\">\n              <span [innerHTML]=\"message | translate\"></span>\n            </div>\n            <div class=\"j-input-helper text-muted mt-1 p3 position-relative\">\n              <ng-container *ngIf=\"(commission$ | async) === null; else commission\">\n                {{'PAYMENTS.COMMISSION_CALC_AUTO' | translate}}\n              </ng-container>\n              <ng-template #commission>\n                {{'PAYMENTS.COMMISSION' | translate}}: {{commission$ | async | amountFormat}} ₸\n              </ng-template>\n              <!-- <button [ngbPopover]=\"amountInfo\"\n                    type=\"button\"\n                    triggers=\"mouseenter:mouseleave\"\n                    class=\"btn btn-link text-dark btn-xxs mt-n1 float-right\">\n              <j-icon name=\"question\"></j-icon>\n            </button> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item text-left d-flex align-items-center\">\n              <j-switch [formControl]=\"form.controls.urgent\"></j-switch>\n              <span class=\"ml-3\">{{'PAYMENTS.FORM.URGENT' | translate}} <br>\n                <small class=\"text-gray\">{{'PAYMENTS.URGENT_HELPER' | translate}}</small>\n              </span>\n            </li>\n          </ul>\n        </div>\n      </fieldset>\n    </div>\n    <div class=\"payment-section--submit form-group pt-4\">\n      <div class=\"payment-section--submit form-group pt-4\">\n        <ng-container *ngIf=\"restoredData.status !== PAYMENT_STATUS.CREATED\">\n          <button class=\"btn btn-outline-primary btn-static\"\n                  (click)=\"saveToDraft()\"\n                  type=\"button\">{{ 'PAYMENTS.FORM.SAVE' | translate }}</button>\n          <button class=\"btn btn-primary btn-static ml-3\"\n                  type=\"submit\">{{submitLabel | translate}}\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"restoredData.status === PAYMENT_STATUS.CREATED\">\n          <button class=\"btn btn-outline-primary btn-static\"\n                  type=\"submit\">{{ 'PAYMENTS.FORM.SAVE_EDIT' | translate }}</button>\n        </ng-container>\n      </div>\n    </div>\n\n    <ng-template #periodTpl>\n      <div class=\"row\">\n        <div class=\"col\">\n          <j-period-input #period\n                          [hasError]=\"hasError(period, form.controls.period)\"\n                          [label]=\"'SHARED.TIME.PERIOD' | translate\"\n                          [formControl]=\"form.controls.period\"></j-period-input>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #intervalTpl>\n      <div class=\"row\">\n        <div class=\"col col-md-6\">\n          <j-period-input #periodStart\n                          [hasError]=\"hasError(periodStart, form.controls.periodStart) || hasError(periodEnd, form.controls.periodEnd)\"\n                          label=\"{{'SHARED.TIME.MONTH' | translate}} {{'SHARED.PREPOSITION.FROM' | translate}}\"\n                          [formControl]=\"form.controls.periodStart\"></j-period-input>\n        </div>\n        <div class=\"col col-md-6\">\n          <j-period-input #periodEnd\n                          [hasError]=\"hasError(periodEnd, form.controls.periodEnd) || hasError(periodStart, form.controls.periodStart)\"\n                          label=\"{{'SHARED.TIME.MONTH' | translate}} {{'SHARED.PREPOSITION.TO' | translate}}\"\n                          [formControl]=\"form.controls.periodEnd\"></j-period-input>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #vinTpl>\n      <j-form-field clearable=\"true\">\n        <j-label>{{ 'PAYMENTS.FORM.VIN' | translate }}</j-label>\n        <input type=\"text\"\n               jFormInput\n               jFocusOnReturn\n               class=\"form-control\"\n               maxlength=\"64\"\n               jUppercase\n               [formControl]=\"form.controls.vin\">\n        <j-error [control]=\"form.controls.vin\"\n                 [errorMessages]=\"errors.vin\"></j-error>\n      </j-form-field>\n      <div class=\"j-input-helper text-muted mt-1 p3\">\n        <span [innerHTML]=\"vinMessage\"></span>\n      </div>\n    </ng-template>\n    <ng-template #protocolNumberTpl>\n      <j-form-field clearable=\"true\">\n        <j-label>{{ 'PAYMENTS.FORM.PROTOCOL_NUMBER' | translate }}</j-label>\n        <input type=\"text\"\n               jFormInput\n               jFocusOnReturn\n               [mask]=\"masks.protocolNumber.mask\"\n               class=\"form-control\"\n               [formControl]=\"form.controls.protocolNumber\">\n        <!-- <j-error [control]=\"form.controls.protocolNumber\"\n               [errorMessages]=\"errors.protocolNumber\"></j-error> -->\n      </j-form-field>\n    </ng-template>\n\n\n    <ngx-spinner type=\"ball-scale-ripple-multiple\"\n                 [name]=\"SPINNER\"\n                 [fullScreen]=\"false\"\n                 size=\"large\"\n                 color=\"#d6dadf\"\n                 zIndex=\"3\"\n                 bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\n    <ngx-spinner type=\"ball-scale-ripple-multiple\"\n                 [name]=\"SPINNER\"\n                 [fullScreen]=\"false\"\n                 size=\"large\"\n                 color=\"#d6dadf\"\n                 zIndex=\"3\"\n                 bdColor=\"rgba(246, 247, 248, 0.3)\"></ngx-spinner>\n  </form>\n</ng-container>";

/***/ }),

/***/ 18323:
/*!*********************************************************************************************!*\
  !*** ./src/app/payments/containers/tenge-payments/tenge-payments.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<f-page (closed)=\"onClose()\">\r\n  <f-page-header>\r\n    <h1 class=\"f-page-title\">\r\n      {{(title$ | async) | translate}}\r\n    </h1>\r\n    <div class=\"f-page-tabs-wrap\">\r\n      <nav class=\"f-page-tabs\">\r\n        <a routerLinkActive=\"active\"\r\n           [routerLink]=\"[routes.tenge.order]\">\r\n          {{ 'PAYMENTS.TABS.PAYMENT_ORDER' | translate }}\r\n        </a>\r\n        <a routerLinkActive=\"active\"\r\n           [routerLink]=\"[routes.tenge.state.root]\">\r\n          {{ 'PAYMENTS.TABS.BUDGET' | translate }}\r\n        </a>\r\n        <a routerLinkActive=\"active\"\r\n           [routerLink]=\"[routes.tenge.salary]\">\r\n          {{ 'PAYMENTS.TABS.SALARY' | translate }}\r\n        </a>\r\n      </nav>\r\n    </div>\r\n  </f-page-header>\r\n  <f-page-body>\r\n    <!-- <div [@slideRouteAnimations]=\"routerTrigger$ | async\"\r\n         class=\"outlet-animation-wrapper\">\r\n      <router-outlet (activate)='onActivate($event, outlet)'\r\n                     #outlet=\"outlet\"></router-outlet>\r\n    </div> -->\r\n    <div class=\"outlet-animation-wrapper\">\r\n      <router-outlet #outlet=\"outlet\"></router-outlet>\r\n    </div>\r\n  </f-page-body>\r\n</f-page>";

/***/ })

}]);
//# sourceMappingURL=src_app_payments_payments_module_ts.js.map