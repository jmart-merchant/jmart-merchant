"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_directory_directory_module_ts"],{

/***/ 37005:
/*!*************************************************************************************!*\
  !*** ./src/app/directory/components/counterparty-row/counterparty-row.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterpartyRowComponent": () => (/* binding */ CounterpartyRowComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _counterparty_row_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterparty-row.component.html?ngResource */ 33459);
/* harmony import */ var _counterparty_row_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterparty-row.component.scss?ngResource */ 70749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CounterpartyRowComponent = class CounterpartyRowComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.cancelRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onEdit() {
        this.edit.emit(this.row);
    }
    onRemove() {
        this.remove.emit(this.row);
    }
    onCancelRemove() {
        this.cancelRemove.emit(this.row);
    }
};
CounterpartyRowComponent.ctorParameters = () => [];
CounterpartyRowComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    removing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    cancelRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CounterpartyRowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-counterparty-row',
        template: _counterparty_row_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        host: {
            class: 'j-table--row',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_counterparty_row_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CounterpartyRowComponent);



/***/ }),

/***/ 16494:
/*!***************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-edit-employee/directory-edit-employee.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDIT_ACTION_TYPE": () => (/* binding */ EDIT_ACTION_TYPE),
/* harmony export */   "DirectoryEditEmployeeComponent": () => (/* binding */ DirectoryEditEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directory_edit_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-edit-employee.component.html?ngResource */ 41620);
/* harmony import */ var _directory_edit_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory-edit-employee.component.scss?ngResource */ 1645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _payments_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @payments/services */ 7500);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/employee */ 6699);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/validators */ 88228);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/dates */ 12266);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/misc */ 37212);
/* harmony import */ var _utils_typed_reactive_form_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/typed-reactive-form-helper */ 87497);


















var EDIT_ACTION_TYPE;
(function (EDIT_ACTION_TYPE) {
    EDIT_ACTION_TYPE["create"] = "create";
    EDIT_ACTION_TYPE["delete"] = "delete";
    EDIT_ACTION_TYPE["update"] = "update";
})(EDIT_ACTION_TYPE || (EDIT_ACTION_TYPE = {}));
let DirectoryEditEmployeeComponent = class DirectoryEditEmployeeComponent {
    constructor(modal, employeesService, maskService, fb, paymentsService, translate) {
        this.modal = modal;
        this.employeesService = employeesService;
        this.maskService = maskService;
        this.fb = fb;
        this.paymentsService = paymentsService;
        this.translate = translate;
        this.autocomplete$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(undefined);
        this.updateInProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(undefined);
        this.masks = {};
        this.errors = _shared_validators__WEBPACK_IMPORTED_MODULE_7__.errors;
        this.minDate = new Date(1900, 0, 0);
        this.maxDate = new Date();
        this.minAmount = 0.01;
        this.maxAmount = 212500;
        this.socialSumErr = [
            {
                error: 'max',
                message: `${this.translate.instant('ERRORS.MAX_SUM')} ${this.maxAmount}`,
            },
        ];
        this.lockChildFields = ['iin', 'firstName', 'lastName', 'birthDate'];
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.getMaskConfig();
        this.fGroup = this.createForm(this.item);
        if ((_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.salarySum) === null || _b === void 0 ? void 0 : _b.amount) {
            this.fGroup.patchValue({ salarySum: this.maskService.formatAmount(this.item.salarySum.amount) });
        }
        if ((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.pensionSum) === null || _d === void 0 ? void 0 : _d.amount) {
            this.fGroup.patchValue({ pensionSum: this.maskService.formatAmount(this.item.pensionSum.amount) });
        }
        if ((_f = (_e = this.item) === null || _e === void 0 ? void 0 : _e.socialSum) === null || _f === void 0 ? void 0 : _f.amount) {
            this.fGroup.patchValue({ socialSum: this.maskService.formatAmount(this.item.socialSum.amount) });
        }
        if ((_h = (_g = this.item) === null || _g === void 0 ? void 0 : _g.ocmcSum) === null || _h === void 0 ? void 0 : _h.amount) {
            this.fGroup.patchValue({ ocmcSum: this.maskService.formatAmount(this.item.ocmcSum.amount) });
        }
        if (!this.editMode) {
            const { iin: iinControl } = this.fGroup.controls;
            this.subs.add(iinControl.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)((iin) => iinControl.valid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)((iin) => {
                if (iinControl.valid) {
                    this.autocomplete$.next(iin);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.from)(this.employeesService.getNameByIin(iin)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)((employee) => {
                        return {
                            bin: iin,
                            lastName: employee.lastName,
                            firstName: employee.firstName,
                            middleName: employee.middleName
                        };
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(iinControl.valueChanges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.of)(null)));
                }
                else {
                    this.autocomplete$.next(null);
                    return rxjs__WEBPACK_IMPORTED_MODULE_21__.EMPTY;
                }
            }))
                .subscribe((result) => {
                if (result) {
                    if (this.autocomplete$.getValue() === result.bin) {
                        this.fGroup.patchValue({ lastName: result.lastName.trim() });
                        this.fGroup.patchValue({ firstName: result.firstName.trim() });
                        this.fGroup.patchValue({ middleName: result.middleName.trim() });
                    }
                }
                this.autocomplete$.next(null);
            }));
        }
    }
    get isSubmitted() {
        return this.form.submitted;
    }
    get editMode() {
        var _a;
        return (_a = this.item) === null || _a === void 0 ? void 0 : _a.id;
    }
    createForm(item = {}) {
        var _a, _b, _c, _d;
        const maxValidator = _shared_validators__WEBPACK_IMPORTED_MODULE_7__.MiscValidators.SafeMaxAmount(this.maxAmount);
        const minValidator = _shared_validators__WEBPACK_IMPORTED_MODULE_7__.MiscValidators.SafeMinAmount(this.minAmount);
        return this.fb.group({
            iin: [
                {
                    value: item.iin || '',
                    disabled: this.editMode,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.minLength(12)],
            ],
            lastName: [item.lastName || ''],
            firstName: [item.firstName || ''],
            middleName: [item.middleName || ''],
            birthDate: [
                (item.birthDate && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_8__.isoDateToPeriodInputSafe)(item.birthDate)) || '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required],
            ],
            iban: [
                item.iban || '',
                [
                    (control) => this.paymentsService.bankExist((0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.ibanPrefix)(control.value || '', _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT)),
                ],
            ],
            ocmcSum: [(_a = item.ocmcSum) === null || _a === void 0 ? void 0 : _a.amount, [minValidator, maxValidator]],
            pensionSum: [(_b = item.pensionSum) === null || _b === void 0 ? void 0 : _b.amount, [minValidator, maxValidator]],
            salarySum: [(_c = item.salarySum) === null || _c === void 0 ? void 0 : _c.amount, [minValidator]],
            socialSum: [(_d = item.socialSum) === null || _d === void 0 ? void 0 : _d.amount, [minValidator, maxValidator]],
        });
    }
    onCancel() {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        this.modal.close();
    }
    onSubmit() {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        if (this.fGroup.invalid) {
            this.emulateSubmit();
            return;
        }
        const body = this.prepareBody();
        this.processRequest(body);
    }
    onDelete() {
        this.modal.close({
            payload: this.item,
            type: EDIT_ACTION_TYPE.delete,
        });
    }
    getMaskConfig() {
        Object.entries({
            iin: 'iin',
            iban: 'tengeAccount',
        }).forEach(([k, v]) => (this.masks[k] = this.maskService.getConfig(v)));
    }
    emulateSubmit() {
        this.form.submitted = true;
        this.form.ngSubmit.emit();
        this.fGroup.markAllAsTouched();
    }
    prepareBody() {
        const rawValue = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.getGroupRawValue)(this.fGroup);
        ['ocmcSum', 'pensionSum', 'salarySum', 'socialSum'].forEach((key) => {
            const amount = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.safeUnmaskAmount)(rawValue[key]);
            if (amount) {
                rawValue[key] = { amount, currency: _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT };
            }
            else {
                rawValue[key] = null;
            }
        });
        rawValue.lastName = rawValue.lastName.trim();
        rawValue.firstName = rawValue.firstName.trim();
        rawValue.middleName = rawValue.middleName.trim();
        rawValue.birthDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_8__.periodInputDateToISODateSafe)(rawValue.birthDate);
        rawValue.iban =
            (rawValue.iban && (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.ibanPrefix)(rawValue.iban, _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_3__.CURRENCY.KZT)) || null;
        return rawValue;
    }
    processRequest(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.updateInProgress$.next(true);
                let result;
                let type;
                if (this.editMode) {
                    result = yield this.employeesService.editEmployee(body);
                    type = EDIT_ACTION_TYPE.update;
                }
                else {
                    result = yield this.employeesService.createEmployee(body);
                    type = EDIT_ACTION_TYPE.create;
                }
                this.modal.close({
                    payload: result,
                    type,
                });
            }
            catch (e) {
                this.updateInProgress$.next(false);
                this.errorText = (e && e.description) || JSON.stringify(e);
            }
        });
    }
};
DirectoryEditEmployeeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbActiveModal },
    { type: _shared_employee__WEBPACK_IMPORTED_MODULE_4__.EmployeeService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__.MaskedService },
    { type: _utils_typed_reactive_form_helper__WEBPACK_IMPORTED_MODULE_10__.FormBuilderTypeSafe },
    { type: _payments_services__WEBPACK_IMPORTED_MODULE_2__.PaymentsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService }
];
DirectoryEditEmployeeComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild, args: ['formDirective', { static: true },] }]
};
DirectoryEditEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.Component)({
        selector: 'j-directory-edit-employee',
        template: _directory_edit_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher,
                useClass: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__.ShowOnDirtyErrorStateMatcher,
            },
        ],
        styles: [_directory_edit_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectoryEditEmployeeComponent);



/***/ }),

/***/ 5025:
/*!*************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-employee-row/directory-employee-row.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryEmployeeRowComponent": () => (/* binding */ DirectoryEmployeeRowComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directory_employee_row_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-employee-row.component.html?ngResource */ 31664);
/* harmony import */ var _directory_employee_row_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory-employee-row.component.scss?ngResource */ 25166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DirectoryEmployeeRowComponent = class DirectoryEmployeeRowComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.cancelRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onEdit() {
        this.edit.emit(this.row);
    }
    onRemove() {
        this.remove.emit(this.row);
    }
    onCancelRemove() {
        this.cancelRemove.emit(this.row);
    }
    get fio() {
        const fio = [];
        if (this.item.lastName) {
            fio.push(this.item.lastName);
        }
        if (this.item.firstName) {
            fio.push(this.item.firstName);
        }
        if (this.item.middleName) {
            fio.push(this.item.middleName);
        }
        return fio.join(' ');
    }
};
DirectoryEmployeeRowComponent.ctorParameters = () => [];
DirectoryEmployeeRowComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    removing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    cancelRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DirectoryEmployeeRowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'j-directory-employee-row',
        template: _directory_employee_row_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        host: {
            class: 'j-table--row',
        },
        styles: [_directory_employee_row_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectoryEmployeeRowComponent);



/***/ }),

/***/ 13297:
/*!*********************************************************************************!*\
  !*** ./src/app/directory/components/directory-tabs/directory-tabs.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryTabsComponent": () => (/* binding */ DirectoryTabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directory_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-tabs.component.html?ngResource */ 84661);
/* harmony import */ var _directory_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory-tabs.component.scss?ngResource */ 56028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DirectoryTabsComponent = class DirectoryTabsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DirectoryTabsComponent.ctorParameters = () => [];
DirectoryTabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-directory-tabs',
        template: _directory_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_directory_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectoryTabsComponent);



/***/ }),

/***/ 76716:
/*!***************************************************************************************!*\
  !*** ./src/app/directory/components/edit-counterparty/edit-counterparty.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDIT_COUNTER_PARTY_ACTION_TYPE": () => (/* binding */ EDIT_COUNTER_PARTY_ACTION_TYPE),
/* harmony export */   "EditCounterpartyComponent": () => (/* binding */ EditCounterpartyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_counterparty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-counterparty.component.html?ngResource */ 22380);
/* harmony import */ var _edit_counterparty_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-counterparty.component.scss?ngResource */ 21387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _company_recipients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/recipients.service */ 45736);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @payments/services/payments.service */ 28706);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/validators */ 88228);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _shared_pipes_bank_from_account_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/bank-from-account.pipe */ 8295);
















var EDIT_COUNTER_PARTY_ACTION_TYPE;
(function (EDIT_COUNTER_PARTY_ACTION_TYPE) {
    EDIT_COUNTER_PARTY_ACTION_TYPE["create"] = "create";
    EDIT_COUNTER_PARTY_ACTION_TYPE["delete"] = "delete";
    EDIT_COUNTER_PARTY_ACTION_TYPE["update"] = "update";
})(EDIT_COUNTER_PARTY_ACTION_TYPE || (EDIT_COUNTER_PARTY_ACTION_TYPE = {}));
// ibanPrefix(formValue.bankAccount, CURRENCY.KZT)
let EditCounterpartyComponent = class EditCounterpartyComponent {
    constructor(modal, recipients, maskService, fb, bankFromAccount, paymentsService) {
        this.modal = modal;
        this.recipients = recipients;
        this.maskService = maskService;
        this.fb = fb;
        this.bankFromAccount = bankFromAccount;
        this.paymentsService = paymentsService;
        this.checkingCounterParty$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
        this.updateInProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
        this.masks = {};
        this.errors = _shared_validators__WEBPACK_IMPORTED_MODULE_7__.errors;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    }
    ngOnInit() {
        this.getMaskConfig();
        this.fGroup = this.createForm(this.item);
        if (!this.editMode) {
            const { iinOrBin } = this.fGroup.controls;
            this.subs.add(iinOrBin.valueChanges
                .pipe(
            // filter((bin) => iinOrBin.valid),
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((bin) => {
                if (iinOrBin.valid) {
                    this.checkingCounterParty$.next(bin);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.recipients.checkCounterParty(bin)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(iinOrBin.valueChanges)
                    // catchError(() => of(null))
                    );
                }
                else {
                    this.checkingCounterParty$.next(null);
                    return rxjs__WEBPACK_IMPORTED_MODULE_16__.EMPTY;
                }
            }))
                .subscribe((result) => {
                if (result) {
                    if (this.checkingCounterParty$.getValue() === result.bin) {
                        this.fGroup.patchValue({ name: result.name });
                        this.checkingCounterParty$.next(null);
                    }
                }
                this.checkingCounterParty$.next(null);
            }));
        }
    }
    get editMode() {
        var _a;
        return (_a = this.item) === null || _a === void 0 ? void 0 : _a.id;
    }
    createForm(item) {
        var _a;
        return this.fb.group({
            iinOrBin: [
                {
                    value: (item === null || item === void 0 ? void 0 : item.iinOrBin) || '',
                    disabled: this.editMode,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.minLength(12)],
            ],
            kbeCode: [(_a = item === null || item === void 0 ? void 0 : item.kbe) === null || _a === void 0 ? void 0 : _a.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _shared_validators__WEBPACK_IMPORTED_MODULE_7__.MiscValidators.kbe]],
            name: [
                (item === null || item === void 0 ? void 0 : item.name) || '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(250)],
            ],
            accounts: this.fb.array(((item === null || item === void 0 ? void 0 : item.accounts) || [{ iban: '' }]).map((account) => this.getAccountControlConfig(account))),
        });
    }
    addAccount() {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        this.fGroup.controls.accounts.push(this.fb.control('', this.getAccountControlConfig()[1]));
    }
    deleteAccount(index) {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        this.fGroup.controls.accounts.removeAt(index);
    }
    onCancel() {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        this.modal.close();
    }
    onSubmit() {
        if (this.updateInProgress$.getValue()) {
            return;
        }
        if (this.fGroup.invalid) {
            this.emulateSubmit();
            return;
        }
        const body = this.prepareBody();
        this.processRequest(body);
    }
    onDelete() {
        this.modal.close({
            payload: this.item,
            type: EDIT_COUNTER_PARTY_ACTION_TYPE.delete,
        });
    }
    getAccountControlConfig(account = {}) {
        return [
            account.iban,
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
                (control) => this.paymentsService.bankExist((0,_utils_index__WEBPACK_IMPORTED_MODULE_8__.ibanPrefix)(control.value || '', _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT)),
            ],
        ];
    }
    getMaskConfig() {
        Object.entries({
            iinOrBin: 'iin',
            bankAccount: 'tengeAccount',
            kbeCode: 'kbe',
        }).forEach(([k, v]) => (this.masks[k] = this.maskService.getConfig(v)));
    }
    emulateSubmit() {
        this.form.submitted = true;
        this.form.ngSubmit.emit();
        this.fGroup.markAllAsTouched();
    }
    prepareBody() {
        let accDict = {};
        const accounts = this.fGroup.controls.accounts.value;
        let body = (0,_utils_index__WEBPACK_IMPORTED_MODULE_8__.getGroupRawValue)(this.fGroup);
        body.kbe = {
            code: body.kbeCode,
            name: '',
        };
        delete body.kbeCode;
        if (this.editMode) {
            accDict = this.item.accounts.reduce((dict, account) => {
                dict[account.iban] = account;
                return dict;
            }, {});
            body = Object.assign(Object.assign({}, this.item), body);
        }
        else {
        }
        const pickedAccounts = accounts.map((rawIban) => {
            const prefixedIban = (0,_utils_index__WEBPACK_IMPORTED_MODULE_8__.ibanPrefix)(rawIban, _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_4__.CURRENCY.KZT);
            let picked = accDict[prefixedIban];
            if (!picked) {
                picked = {
                    bic: this.bankFromAccount.transform(prefixedIban),
                    iban: prefixedIban,
                };
            }
            return picked;
        });
        body.accounts = pickedAccounts;
        return body;
    }
    processRequest(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.updateInProgress$.next(true);
                let result;
                let type;
                if (this.editMode) {
                    result = yield this.recipients.updateRecipient(body);
                    type = EDIT_COUNTER_PARTY_ACTION_TYPE.update;
                }
                else {
                    result = yield this.recipients.createRecipient(body);
                    type = EDIT_COUNTER_PARTY_ACTION_TYPE.create;
                }
                this.modal.close({
                    payload: result,
                    type,
                });
            }
            catch (e) {
                this.updateInProgress$.next(false);
                this.errorText = (e && e.description) || JSON.stringify(e);
            }
        });
    }
};
EditCounterpartyComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbActiveModal },
    { type: _company_recipients_service__WEBPACK_IMPORTED_MODULE_2__.RecipientsService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_6__.MaskedService },
    { type: _utils_index__WEBPACK_IMPORTED_MODULE_8__.FormBuilderTypeSafe },
    { type: _shared_pipes_bank_from_account_pipe__WEBPACK_IMPORTED_MODULE_9__.BankFromAccountPipe },
    { type: _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService }
];
EditCounterpartyComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ['formDirective',] }]
};
EditCounterpartyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'j-edit-counterparty',
        template: _edit_counterparty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher,
                useClass: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_5__.ShowOnDirtyErrorStateMatcher,
            },
        ],
        styles: [_edit_counterparty_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditCounterpartyComponent);



/***/ }),

/***/ 94699:
/*!***********************************************!*\
  !*** ./src/app/directory/components/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTORY_COMPONENTS": () => (/* binding */ DIRECTORY_COMPONENTS),
/* harmony export */   "DirectoryTabsComponent": () => (/* reexport safe */ _directory_tabs_directory_tabs_component__WEBPACK_IMPORTED_MODULE_0__.DirectoryTabsComponent),
/* harmony export */   "CounterpartyRowComponent": () => (/* reexport safe */ _counterparty_row_counterparty_row_component__WEBPACK_IMPORTED_MODULE_1__.CounterpartyRowComponent),
/* harmony export */   "EDIT_COUNTER_PARTY_ACTION_TYPE": () => (/* reexport safe */ _edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_2__.EDIT_COUNTER_PARTY_ACTION_TYPE),
/* harmony export */   "EditCounterpartyComponent": () => (/* reexport safe */ _edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_2__.EditCounterpartyComponent),
/* harmony export */   "DirectoryEmployeeRowComponent": () => (/* reexport safe */ _directory_employee_row_directory_employee_row_component__WEBPACK_IMPORTED_MODULE_3__.DirectoryEmployeeRowComponent),
/* harmony export */   "DirectoryEditEmployeeComponent": () => (/* reexport safe */ _directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__.DirectoryEditEmployeeComponent),
/* harmony export */   "EDIT_ACTION_TYPE": () => (/* reexport safe */ _directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__.EDIT_ACTION_TYPE)
/* harmony export */ });
/* harmony import */ var _directory_tabs_directory_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-tabs/directory-tabs.component */ 13297);
/* harmony import */ var _counterparty_row_counterparty_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterparty-row/counterparty-row.component */ 37005);
/* harmony import */ var _edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-counterparty/edit-counterparty.component */ 76716);
/* harmony import */ var _directory_employee_row_directory_employee_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directory-employee-row/directory-employee-row.component */ 5025);
/* harmony import */ var _directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directory-edit-employee/directory-edit-employee.component */ 16494);





const DIRECTORY_COMPONENTS = [_directory_tabs_directory_tabs_component__WEBPACK_IMPORTED_MODULE_0__.DirectoryTabsComponent, _counterparty_row_counterparty_row_component__WEBPACK_IMPORTED_MODULE_1__.CounterpartyRowComponent, _edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_2__.EditCounterpartyComponent, _directory_employee_row_directory_employee_row_component__WEBPACK_IMPORTED_MODULE_3__.DirectoryEmployeeRowComponent, _directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__.DirectoryEditEmployeeComponent];







/***/ }),

/***/ 14930:
/*!*********************************************************************************!*\
  !*** ./src/app/directory/containers/counterparties/counterparties.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterpartiesComponent": () => (/* binding */ CounterpartiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _counterparties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterparties.component.html?ngResource */ 86278);
/* harmony import */ var _counterparties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterparties.component.scss?ngResource */ 74565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 16276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _company_recipients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @company/recipients.service */ 45736);
/* harmony import */ var _directory_models_counterparty_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @directory/models/counterparty.models */ 42068);
/* harmony import */ var _directory_components_edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @directory/components/edit-counterparty/edit-counterparty.component */ 76716);














let CounterpartiesComponent = class CounterpartiesComponent {
    constructor(company, recipients, modalService, notifierService, translateService) {
        this.company = company;
        this.recipients = recipients;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.translateService = translateService;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.rows$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
        this.composedRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
        this.loadingErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(undefined);
        this.selectionModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl([]);
        // recipients$ = new BehaviorSubject([]);
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    ngOnInit() {
        this.store = this.recipients.store;
        this.subs.add(this.company.currentCompany$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.skip)(1)).subscribe((v) => {
            this.selectionModel.patchValue([]);
            this.rows$.getValue().forEach((row) => {
                row.cancelRemove$ && row.cancelRemove$.next(Date.now());
            });
        }));
        this.combineFilter();
        this.watchForBodyTpl();
        this.watchForItems();
        this.onRefresh();
    }
    selectAll() { }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onEdit(row) {
        const modal = this.modalService.open(_directory_components_edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_5__.EditCounterpartyComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal-adaptive_sm modal_max-height modal-adaptive',
            centered: true,
            backdrop: 'static',
        });
        modal.componentInstance.item = row === null || row === void 0 ? void 0 : row.data;
        modal.result.then((result) => this.handleEditResult(result, row));
    }
    onRemoveSelected() {
        let lastSelected = this.selectionModel.value;
        lastSelected = lastSelected[lastSelected.length - 1];
        const lastRow = this.rows$
            .getValue()
            .find((row) => row.data.id === lastSelected);
        if (lastRow) {
            this.startDeleteProcess(lastRow, true);
        }
    }
    onRemove(row, checkSelection) {
        this.startDeleteProcess(row, checkSelection);
    }
    onCancelRemove(row) {
        row.cancelRemove$ && row.cancelRemove$.next(Date.now());
    }
    onRefresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.recipients.getRecipients('', true);
                // this.getEntities();
                this.selectionModel.patchValue([]);
                this.loadingErrors$.next(null);
            }
            catch (err) {
                this.rows$.next([]);
                this.selectionModel.patchValue([]);
                this.loadingErrors$.next(err);
            }
        });
    }
    handleEditResult(result, row) {
        if (result) {
            if ([
                _directory_components_edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_COUNTER_PARTY_ACTION_TYPE.create,
                _directory_components_edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_COUNTER_PARTY_ACTION_TYPE.update,
            ].some((action) => action === result.type)) {
                this.notifierService.notify('success', this.translateService.instant('COUNTERPARTY.' +
                    (_directory_components_edit_counterparty_edit_counterparty_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_COUNTER_PARTY_ACTION_TYPE.create === result.type
                        ? 'CREATED_COUNTERPARTY'
                        : 'UPDATED_COUNTERPARTY')));
                this.store.upsertItem(result.payload);
            }
            else {
                this.startDeleteProcess(row);
            }
        }
    }
    watchForItems() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([
            this.store.items$,
            this.store.fetching$,
            this.store.fetched$,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(([items, fetching, fetched]) => {
            return !fetching && fetched;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)((args) => args[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)((v) => this.selectionModel.patchValue([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)((recipients) => {
            // this.recipients$.next(recipients);
            return recipients.map((recipient) => new _directory_models_counterparty_models__WEBPACK_IMPORTED_MODULE_4__.DirectoryRow(recipient));
        }))
            .subscribe((rows) => {
            this.rows$.next(rows);
        }));
    }
    combineFilter() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.rows$, this.search.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(''))])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([rows, search]) => {
            const filtered = rows.filter((row) => !row.hidden && this.recipients.filterRecipient(row.data, search));
            return filtered;
        }))
            .subscribe(this.composedRows$));
    }
    watchForBodyTpl() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([
            this.store.fetched$,
            this.search.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)('')),
            this.loadingErrors$,
            this.composedRows$,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([loaded, search, err, rows]) => {
            if (err) {
                return this.errorBody;
            }
            else if (loaded && !rows.length) {
                return this.emptyBody;
            }
            return this.contentBody;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)())
            .subscribe((tpl) => (this.contentTpl = tpl)));
    }
    startDeleteProcess(targetRow, checkSelection) {
        let toRemove;
        if (checkSelection) {
            const dict = this.selectionModel.value.reduce((acc, id) => {
                acc[id] = true;
                return acc;
            }, {});
            delete dict[targetRow.data.id];
            toRemove = this.rows$.getValue().filter((row) => dict[row.data.id]);
            targetRow.deleteWith = toRemove;
            toRemove.forEach((item) => (item.hidden = true));
        }
        targetRow.cancelRemove$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
        targetRow.removing$.next('5');
        this.rows$.next([...this.rows$.getValue()]);
        const sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.interval)(1000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(targetRow.cancelRemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(() => {
            targetRow.removing$.next('');
            if (targetRow.deleteWith) {
                targetRow.deleteWith.forEach((item) => (item.hidden = false));
                targetRow.deleteWith = null;
            }
            targetRow.cancelRemove$ = null;
            // this.rows$.next([...this.rows$.getValue()]);
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)((v) => {
            targetRow.removing$.next((+targetRow.removing$.getValue() - 1).toString());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(5))
            .subscribe({
            next: (v) => {
                if (v === 4) {
                    this.finishRemove(targetRow, toRemove);
                }
            },
            complete: () => sub.unsubscribe(),
            error: () => sub.unsubscribe(),
        });
    }
    finishRemove(targetRow, selection) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            !targetRow.destroy$.closed && targetRow.removing$.next(null);
            let idsToRemove = [];
            if (selection) {
                idsToRemove = selection
                    .map((item) => item.data.id)
                    .concat(targetRow.data.id);
            }
            else {
                idsToRemove = [targetRow.data.id];
            }
            this.store.removeItems(idsToRemove);
            const dict = idsToRemove.reduce((acc, id) => {
                acc[id] = true;
                return acc;
            }, {});
            this.selectionModel.patchValue(this.selectionModel.value.filter((id) => !dict[id]));
            [targetRow, ...(selection || [])].forEach((toClean) => toClean.destroy());
            try {
                yield this.recipients.deleteRecipient(idsToRemove);
                this.notifierService.notify('success', this.translateService.instant('COUNTERPARTY.' +
                    (idsToRemove.length > 1
                        ? 'DELETED_COUNTERPARTIES'
                        : 'DELETED_COUNTERPARTY')));
            }
            catch (e) {
                this.notifierService.notify('error', e);
            }
        });
    }
};
CounterpartiesComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService },
    { type: _company_recipients_service__WEBPACK_IMPORTED_MODULE_3__.RecipientsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModal },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_23__.NotifierService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService }
];
CounterpartiesComponent.propDecorators = {
    contentBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: ['contentBody',] }],
    emptyBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: ['emptyBody',] }],
    errorBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: ['errorBody',] }]
};
CounterpartiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
        selector: 'j-counterparties',
        template: _counterparties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewEncapsulation.None,
        styles: [_counterparties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CounterpartiesComponent);



/***/ }),

/***/ 42728:
/*!*******************************************************************************************!*\
  !*** ./src/app/directory/containers/directory-employees/directory-employees.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryEmployeesComponent": () => (/* binding */ DirectoryEmployeesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directory_employees_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-employees.component.html?ngResource */ 41253);
/* harmony import */ var _directory_employees_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory-employees.component.scss?ngResource */ 1190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 16276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/employee */ 6699);
/* harmony import */ var _utils_simple_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/simple-store */ 3464);
/* harmony import */ var _directory_components_directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @directory/components/directory-edit-employee/directory-edit-employee.component */ 16494);
/* harmony import */ var _directory_models_counterparty_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @directory/models/counterparty.models */ 42068);















let DirectoryEmployeesComponent = class DirectoryEmployeesComponent {
    constructor(company, employeeService, modalService, notifierService, translateService) {
        this.company = company;
        this.employeeService = employeeService;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.translateService = translateService;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.rows$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        this.composedRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        this.loadingErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
        this.selectionModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl([]);
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.store = new _utils_simple_store__WEBPACK_IMPORTED_MODULE_4__.EntitiesStore([]);
    }
    ngOnInit() {
        this.subs.add(this.company.currentCompany$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.skip)(1)).subscribe((v) => {
            this.selectionModel.patchValue([]);
            this.onRefresh();
            this.rows$.getValue().forEach((row) => {
                row.cancelRemove$ && row.cancelRemove$.next(Date.now());
            });
        }));
        this.combineFilter();
        this.watchForBodyTpl();
        this.watchForItems();
        this.onRefresh();
    }
    onEdit(row) {
        const modal = this.modalService.open(_directory_components_directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__.DirectoryEditEmployeeComponent, {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal-adaptive_sm modal_max-height modal-adaptive',
            centered: true,
            backdrop: 'static',
        });
        modal.componentInstance.item =
            row === null || row === void 0 ? void 0 : row.data;
        modal.result.then((result) => this.handleEditResult(result, row));
    }
    onRemoveSelected() {
        let lastSelected = this.selectionModel.value;
        lastSelected = lastSelected[lastSelected.length - 1];
        const lastRow = this.rows$
            .getValue()
            .find((row) => row.data.id === lastSelected);
        if (lastRow) {
            this.startDeleteProcess(lastRow, true);
        }
    }
    onRemove(row, checkSelection) {
        this.startDeleteProcess(row, checkSelection);
    }
    onCancelRemove(row) {
        row.cancelRemove$ && row.cancelRemove$.next(Date.now());
    }
    onRefresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.fetchEmployees();
                // this.getEntities();
                this.selectionModel.patchValue([]);
                this.loadingErrors$.next(null);
            }
            catch (err) {
                this.rows$.next([]);
                this.selectionModel.patchValue([]);
                this.loadingErrors$.next(err);
            }
        });
    }
    combineFilter() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.rows$, this.search.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(''))])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([rows, search]) => {
            const term = search.toLocaleLowerCase();
            return rows.filter((row) => !row.hidden &&
                this.employeeService.filterEmployee(row.data, term));
        }))
            .subscribe(this.composedRows$));
    }
    fetchEmployees() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.store.fetching = true;
            try {
                const employees = yield this.employeeService.getEmployees();
                this.store.setState(employees);
                this.store.fetching = false;
                !this.store.fetched && (this.store.fetched = true);
            }
            catch (err) {
                this.store.setState([]);
                !this.store.fetched && (this.store.fetched = true);
                this.store.fetching = false;
                throw err;
            }
        });
    }
    handleEditResult(result, row) {
        if (result) {
            if ([_directory_components_directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_ACTION_TYPE.create, _directory_components_directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_ACTION_TYPE.update].some((action) => action === result.type)) {
                this.notifierService.notify('success', this.translateService.instant('DIRECTORY.EMPLOYEES.' +
                    (_directory_components_directory_edit_employee_directory_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__.EDIT_ACTION_TYPE.create === result.type
                        ? 'EMPLOYEE_ADDED'
                        : 'EMPLOYEE_EDITED')));
                this.store.upsertItem(result.payload);
            }
            else {
                this.startDeleteProcess(row);
            }
        }
    }
    watchForItems() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([
            this.store.items$,
            this.store.fetching$,
            this.store.fetched$,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(([items, fetching, fetched]) => {
            return !fetching && fetched;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((args) => args[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)((v) => this.selectionModel.patchValue([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((employees) => {
            return employees.map((recipient) => new _directory_models_counterparty_models__WEBPACK_IMPORTED_MODULE_6__.DirectoryRow(recipient));
        }))
            .subscribe((rows) => {
            this.rows$.next(rows);
        }));
    }
    watchForBodyTpl() {
        this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([
            this.store.fetched$,
            this.search.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)('')),
            this.loadingErrors$,
            this.composedRows$,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([loaded, search, err, rows]) => {
            if (err) {
                return this.errorBody;
            }
            else if (loaded && !rows.length) {
                return this.emptyBody;
            }
            return this.contentBody;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)())
            .subscribe((tpl) => (this.contentTpl = tpl)));
    }
    startDeleteProcess(targetRow, checkSelection) {
        let toRemove;
        if (checkSelection) {
            const dict = this.selectionModel.value.reduce((acc, id) => {
                acc[id] = true;
                return acc;
            }, {});
            delete dict[targetRow.data.id];
            toRemove = this.rows$.getValue().filter((row) => dict[row.data.id]);
            targetRow.deleteWith = toRemove;
            toRemove.forEach((item) => (item.hidden = true));
        }
        targetRow.cancelRemove$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        targetRow.removing$.next('5');
        this.rows$.next([...this.rows$.getValue()]);
        const sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(1000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(targetRow.cancelRemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(() => {
            targetRow.removing$.next('');
            if (targetRow.deleteWith) {
                targetRow.deleteWith.forEach((item) => (item.hidden = false));
                targetRow.deleteWith = null;
            }
            targetRow.cancelRemove$ = null;
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)((v) => {
            targetRow.removing$.next((+targetRow.removing$.getValue() - 1).toString());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(5))
            .subscribe({
            next: (v) => {
                if (v === 4) {
                    this.finishRemove(targetRow, toRemove);
                }
            },
            complete: () => sub.unsubscribe(),
            error: () => sub.unsubscribe(),
        });
    }
    finishRemove(targetRow, selection) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            !targetRow.destroy$.closed && targetRow.removing$.next(null);
            let idsToRemove = [];
            if (selection) {
                idsToRemove = selection
                    .map((item) => item.data.id)
                    .concat(targetRow.data.id);
            }
            else {
                idsToRemove = [targetRow.data.id];
            }
            const iins = idsToRemove
                .map((id) => this.store.entities[id])
                .map((empl) => empl && empl.iin);
            this.store.removeItems(idsToRemove);
            const dict = idsToRemove.reduce((acc, id) => {
                acc[id] = true;
                return acc;
            }, {});
            this.selectionModel.patchValue(this.selectionModel.value.filter((id) => !dict[id]));
            [targetRow, ...(selection || [])].forEach((toClean) => toClean.destroy());
            try {
                yield this.employeeService.deleteEmployee(iins);
                this.notifierService.notify('success', this.translateService.instant('DIRECTORY.EMPLOYEES.' +
                    (idsToRemove.length > 1 ? 'EMPLOYEES_DELETED' : 'EMPLOYEE_DELETED'), { num: idsToRemove.length }));
            }
            catch (e) {
                this.notifierService.notify('error', e);
            }
        });
    }
};
DirectoryEmployeesComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService },
    { type: _shared_employee__WEBPACK_IMPORTED_MODULE_3__.EmployeeService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModal },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_24__.NotifierService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService }
];
DirectoryEmployeesComponent.propDecorators = {
    contentBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild, args: ['contentBody',] }],
    emptyBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild, args: ['emptyBody',] }],
    errorBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild, args: ['errorBody',] }]
};
DirectoryEmployeesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.Component)({
        selector: 'app-directory-employees',
        template: _directory_employees_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewEncapsulation.None,
        styles: [_directory_employees_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectoryEmployeesComponent);



/***/ }),

/***/ 624:
/*!***********************************************!*\
  !*** ./src/app/directory/containers/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTORY_CONTAINERS": () => (/* binding */ DIRECTORY_CONTAINERS),
/* harmony export */   "DirectoryEmployeesComponent": () => (/* reexport safe */ _directory_employees_directory_employees_component__WEBPACK_IMPORTED_MODULE_1__.DirectoryEmployeesComponent),
/* harmony export */   "CounterpartiesComponent": () => (/* reexport safe */ _counterparties_counterparties_component__WEBPACK_IMPORTED_MODULE_0__.CounterpartiesComponent)
/* harmony export */ });
/* harmony import */ var _counterparties_counterparties_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterparties/counterparties.component */ 14930);
/* harmony import */ var _directory_employees_directory_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory-employees/directory-employees.component */ 42728);


const DIRECTORY_CONTAINERS = [
    _counterparties_counterparties_component__WEBPACK_IMPORTED_MODULE_0__.CounterpartiesComponent,
    _directory_employees_directory_employees_component__WEBPACK_IMPORTED_MODULE_1__.DirectoryEmployeesComponent
];




/***/ }),

/***/ 21385:
/*!*******************************************************!*\
  !*** ./src/app/directory/directory-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryRoutingModule": () => (/* binding */ DirectoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 624);
/* harmony import */ var _directory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.component */ 44830);





const routes = [
    {
        path: '',
        component: _directory_component__WEBPACK_IMPORTED_MODULE_1__.DirectoryComponent,
        data: {
            title: 'DIRECTORY.TITLE',
        },
        children: [
            {
                path: 'counterparties',
                component: _containers__WEBPACK_IMPORTED_MODULE_0__.CounterpartiesComponent,
            },
            {
                path: 'employees',
                component: _containers__WEBPACK_IMPORTED_MODULE_0__.DirectoryEmployeesComponent,
            },
            {
                path: '**',
                redirectTo: 'counterparties',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let DirectoryRoutingModule = class DirectoryRoutingModule {
};
DirectoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], DirectoryRoutingModule);



/***/ }),

/***/ 44830:
/*!**************************************************!*\
  !*** ./src/app/directory/directory.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryComponent": () => (/* binding */ DirectoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directory_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory.component.html?ngResource */ 88978);
/* harmony import */ var _directory_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.component.scss?ngResource */ 39947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DirectoryComponent = class DirectoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
DirectoryComponent.ctorParameters = () => [];
DirectoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        selector: 'j-directory',
        template: _directory_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_directory_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectoryComponent);



/***/ }),

/***/ 64527:
/*!***********************************************!*\
  !*** ./src/app/directory/directory.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryModule": () => (/* binding */ DirectoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _portal_portal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal/portal.module */ 6455);
/* harmony import */ var _directory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directory.component */ 44830);
/* harmony import */ var _directory_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directory-routing.module */ 21385);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ 94699);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ 624);













let DirectoryModule = class DirectoryModule {
};
DirectoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _directory_routing_module__WEBPACK_IMPORTED_MODULE_4__.DirectoryRoutingModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__.NgxSkeletonLoaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forChild(),
            _portal_portal_module__WEBPACK_IMPORTED_MODULE_2__.PortalModule
        ],
        providers: [_utils_index__WEBPACK_IMPORTED_MODULE_1__.FormBuilderTypeSafe],
        declarations: [
            _directory_component__WEBPACK_IMPORTED_MODULE_3__.DirectoryComponent,
            _components__WEBPACK_IMPORTED_MODULE_5__.DIRECTORY_COMPONENTS,
            _containers__WEBPACK_IMPORTED_MODULE_6__.DIRECTORY_CONTAINERS,
        ],
    })
], DirectoryModule);



/***/ }),

/***/ 42068:
/*!*********************************************************!*\
  !*** ./src/app/directory/models/counterparty.models.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryRow": () => (/* binding */ DirectoryRow)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);

class DirectoryRow {
    constructor(data) {
        this.removing$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.id = data.id;
        this.data = data;
    }
    destroy() {
        this.destroy$.next(Date.now());
        this.destroy$.complete();
        this.removing$.complete();
        this.cancelRemove$ && this.cancelRemove$.complete();
        this.deleteWith = undefined;
    }
}


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



/***/ }),

/***/ 23203:
/*!*************************************************************!*\
  !*** ./src/app/portal/portal-host/portal-host.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalHostComponent": () => (/* binding */ PortalHostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _portal_host_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-host.component.html?ngResource */ 17972);
/* harmony import */ var _portal_host_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal-host.component.scss?ngResource */ 97834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal.service */ 14815);






let PortalHostComponent = class PortalHostComponent {
    constructor(name, portal) {
        this.portal = portal;
        // Builds the template observable
        this.template$ = portal.pipe(
        // Filters only those instances targetting this very portal
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((instance) => !instance || name in instance), 
        // Returns the template or null
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((instance) => {
            return instance && instance[name];
        }));
    }
};
PortalHostComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Attribute, args: ['name',] }] },
    { type: _portal_service__WEBPACK_IMPORTED_MODULE_2__.PortalService }
];
PortalHostComponent.propDecorators = {
    context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PortalHostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-portal-host',
        template: _portal_host_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_portal_host_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PortalHostComponent);



/***/ }),

/***/ 6455:
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalModule": () => (/* binding */ PortalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _portal_host_portal_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-host/portal-host.component */ 23203);
/* harmony import */ var _portalled_tpl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portalled-tpl.directive */ 68867);





let PortalModule = class PortalModule {
};
PortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_portal_host_portal_host_component__WEBPACK_IMPORTED_MODULE_0__.PortalHostComponent, _portalled_tpl_directive__WEBPACK_IMPORTED_MODULE_1__.PortalledTplDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        exports: [_portal_host_portal_host_component__WEBPACK_IMPORTED_MODULE_0__.PortalHostComponent, _portalled_tpl_directive__WEBPACK_IMPORTED_MODULE_1__.PortalledTplDirective],
    })
], PortalModule);



/***/ }),

/***/ 14815:
/*!******************************************!*\
  !*** ./src/app/portal/portal.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalService": () => (/* binding */ PortalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let PortalService = class PortalService extends rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject {
    constructor() {
        super(null);
    }
    activate(instance) {
        this.next(instance);
    }
    clearAll() {
        this.next(null);
    }
};
PortalService.ctorParameters = () => [];
PortalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], PortalService);



/***/ }),

/***/ 68867:
/*!***************************************************!*\
  !*** ./src/app/portal/portalled-tpl.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalledTplDirective": () => (/* binding */ PortalledTplDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _portal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal.service */ 14815);



let PortalledTplDirective = class PortalledTplDirective {
    constructor(teleport, template) {
        this.teleport = teleport;
        this.template = template;
    }
    ngOnChanges(changes) {
        const target = changes.target;
        if (!target) {
            return;
        }
        // Clears the previous target, if any
        target.previousValue && this.teleport.activate({ [target.previousValue]: null });
        // Teleports the template to the new target portal
        target.currentValue && this.teleport.activate({ [target.currentValue]: this.template });
    }
    ngOnDestroy() {
        // Clears the portal on destroy whenever the target is defined
        this.target && this.teleport.activate({ [this.target]: null });
    }
};
PortalledTplDirective.ctorParameters = () => [
    { type: _portal_service__WEBPACK_IMPORTED_MODULE_0__.PortalService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
PortalledTplDirective.propDecorators = {
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['jPortalledTpl',] }]
};
PortalledTplDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: 'ng-template[jPortalledTpl]'
    })
], PortalledTplDirective);



/***/ }),

/***/ 70749:
/*!**************************************************************************************************!*\
  !*** ./src/app/directory/components/counterparty-row/counterparty-row.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVycGFydHktcm93LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1645:
/*!****************************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-edit-employee/directory-edit-employee.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".modal-body {\n  padding: 0.25rem 1.5rem 0.5rem;\n  flex-grow: 1;\n}\n.modal-body .counterParty {\n  width: 3em;\n  position: relative;\n}\n.modal-footer {\n  padding: 0.25rem 1.5rem 1rem;\n  flex-shrink: 0;\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem;\n  flex-shrink: 0;\n}\n.scrolled {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: calc(100vh - 280px);\n}\nj-directory-edit-employee {\n  display: flex;\n  flex-direction: row;\n  max-height: calc(100vh - 80px);\n}\n.j-form-field .is-loading {\n  width: 40px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS1lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUdGO0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUlGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJkaXJlY3RvcnktZWRpdC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NoYXJlZCc7XG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IHNwYWNlKDEpIHNwYWNlKDQpIHNwYWNlKDIpO1xuICBmbGV4LWdyb3c6IDE7XG4gIC5jb3VudGVyUGFydHkge1xuICAgIHdpZHRoOiAzZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogc3BhY2UoMSkgc3BhY2UoNCkgc3BhY2UoMyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IHNwYWNlKDQpIHNwYWNlKDQpIHNwYWNlKDMpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zY3JvbGxlZCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI4MHB4KTtcbn1cbmotZGlyZWN0b3J5LWVkaXQtZW1wbG95ZWV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcblxufVxuLmotZm9ybS1maWVsZCB7XG4gIC5pcy1sb2FkaW5nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 25166:
/*!**************************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-employee-row/directory-employee-row.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = ".directory-employees-list--name-helper {\n  display: inline-block;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS1lbXBsb3llZS1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6ImRpcmVjdG9yeS1lbXBsb3llZS1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlyZWN0b3J5LWVtcGxveWVlcy1saXN0LS1uYW1lLWhlbHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1yaWdodDogMC4yZW07XG59XG4iXX0= */";

/***/ }),

/***/ 56028:
/*!**********************************************************************************************!*\
  !*** ./src/app/directory/components/directory-tabs/directory-tabs.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RvcnktdGFicy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 21387:
/*!****************************************************************************************************!*\
  !*** ./src/app/directory/components/edit-counterparty/edit-counterparty.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".modal-body {\n  padding: 0.25rem 1.5rem 0.5rem;\n  flex-grow: 1;\n}\n.modal-body .counterParty {\n  width: 3em;\n  position: relative;\n}\n.modal-footer {\n  padding: 0.25rem 1.5rem 1rem;\n  flex-shrink: 0;\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem;\n  flex-shrink: 0;\n}\n.scrolled {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: calc(100vh - 280px);\n}\nj-edit-counterparty {\n  display: flex;\n  flex-direction: row;\n  max-height: calc(100vh - 80px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY291bnRlcnBhcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUdGO0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUlGIiwiZmlsZSI6ImVkaXQtY291bnRlcnBhcnR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogc3BhY2UoMSkgc3BhY2UoNCkgc3BhY2UoMik7XG4gIGZsZXgtZ3JvdzogMTtcbiAgLmNvdW50ZXJQYXJ0eSB7XG4gICAgd2lkdGg6IDNlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiBzcGFjZSgxKSBzcGFjZSg0KSBzcGFjZSgzKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogc3BhY2UoNCkgc3BhY2UoNCkgc3BhY2UoMyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNjcm9sbGVkIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjgwcHgpO1xufVxuai1lZGl0LWNvdW50ZXJwYXJ0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 74565:
/*!**********************************************************************************************!*\
  !*** ./src/app/directory/containers/counterparties/counterparties.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".counterparty-list {\n  min-height: 200px;\n  overflow: auto;\n}\n.counterparty-list .j-table--head {\n  min-width: 760px;\n  position: sticky;\n  top: 0;\n}\n.counterparty-list .j-table--body {\n  min-width: 760px;\n}\n.counterparty-list .counterparty-list--select {\n  position: sticky;\n  left: 0;\n  background: #fff;\n}\n.counterparty-list--select {\n  flex-basis: 50px;\n  max-width: 50px;\n}\n.counterparty-list--name {\n  flex-basis: 140px;\n}\n.counterparty-list--iin {\n  flex-basis: 110px;\n}\n.counterparty-list--bank {\n  flex-basis: 125px;\n}\n.counterparty-list--bank > p {\n  line-height: 2em;\n  margin-bottom: 0;\n}\n.counterparty-list--bank > p + p {\n  margin-top: 1em;\n}\n.counterparty-list--account {\n  flex-basis: 210px;\n}\n.counterparty-list--account > p {\n  margin-bottom: 0;\n  line-height: 2em;\n}\n.counterparty-list--account > p + p {\n  margin-top: 1em;\n}\n.counterparty-list--kbe {\n  flex-basis: 40px;\n}\n.counterparty-list--tools {\n  flex-basis: 64px;\n  margin-left: auto;\n  text-align: right;\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n.counterparty-list--tools .btn + .btn {\n  margin-left: 1em;\n}\n.counterparty-list--removing {\n  background-color: #f6f7f8;\n}\n@media (min-width: 960px) {\n  .counterparty-list--bank {\n    flex-basis: 150px;\n  }\n\n  .counterparty-list {\n    overflow: initial;\n  }\n  .counterparty-list .counterparty-list--select {\n    position: static;\n  }\n  .counterparty-list .j-table--head {\n    min-width: none;\n    position: static;\n  }\n  .counterparty-list .j-table--body {\n    min-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXJwYXJ0aWVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0FBQ0o7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtBQUVGO0FBREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7QUFGSTtFQUNFLGVBQUE7QUFJTjtBQUFBO0VBQ0UsaUJBQUE7QUFHRjtBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKO0FBSEk7RUFDRSxlQUFBO0FBS047QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFLRjtBQUpFO0VBQ0UsZ0JBQUE7QUFNSjtBQUhBO0VBQ0UseUJDdkRTO0FENkRYO0FFVkk7RUZPRjtJQUNFLGlCQUFBO0VBT0Y7O0VBTEE7SUFDRSxpQkFBQTtFQVFGO0VBUEU7SUFDRSxnQkFBQTtFQVNKO0VBUEU7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFTSjtFQVBFO0lBQ0UsZUFBQTtFQVNKO0FBQ0YiLCJmaWxlIjoiY291bnRlcnBhcnRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuLmNvdW50ZXJwYXJ0eS1saXN0IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAuai10YWJsZS0taGVhZCB7XG4gICAgbWluLXdpZHRoOiA3NjBweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgfVxuICAuai10YWJsZS0tYm9keSB7XG4gICAgbWluLXdpZHRoOiA3NjBweDtcbiAgfVxuICAuY291bnRlcnBhcnR5LWxpc3QtLXNlbGVjdCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cbi5jb3VudGVycGFydHktbGlzdC0tc2VsZWN0IHtcbiAgZmxleC1iYXNpczogNTBweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG4uY291bnRlcnBhcnR5LWxpc3QtLW5hbWUge1xuICBmbGV4LWJhc2lzOiAxNDBweDtcbn1cblxuLmNvdW50ZXJwYXJ0eS1saXN0LS1paW4ge1xuICBmbGV4LWJhc2lzOiAxMTBweDtcbn1cbi5jb3VudGVycGFydHktbGlzdC0tYmFuayB7XG4gIGZsZXgtYmFzaXM6IDEyNXB4O1xuICA+IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAmICsgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICB9XG59XG4uY291bnRlcnBhcnR5LWxpc3QtLWFjY291bnQge1xuICBmbGV4LWJhc2lzOiAyMTBweDtcbiAgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgJiArIHAge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cbiAgfVxufVxuLmNvdW50ZXJwYXJ0eS1saXN0LS1rYmUge1xuICBmbGV4LWJhc2lzOiA0MHB4O1xufVxuLmNvdW50ZXJwYXJ0eS1saXN0LS10b29scyB7XG4gIGZsZXgtYmFzaXM6IDY0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAuYnRuICsgLmJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxufVxuLmNvdW50ZXJwYXJ0eS1saXN0LS1yZW1vdmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTIwMDtcbn1cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgLmNvdW50ZXJwYXJ0eS1saXN0LS1iYW5rIHtcbiAgICBmbGV4LWJhc2lzOiAxNTBweDtcbiAgfVxuICAuY291bnRlcnBhcnR5LWxpc3Qge1xuICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgIC5jb3VudGVycGFydHktbGlzdC0tc2VsZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuICAgIC5qLXRhYmxlLS1oZWFkIHtcbiAgICAgIG1pbi13aWR0aDogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuICAgIC5qLXRhYmxlLS1ib2R5IHtcbiAgICAgIG1pbi13aWR0aDogbm9uZTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 1190:
/*!********************************************************************************************************!*\
  !*** ./src/app/directory/containers/directory-employees/directory-employees.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".directory-employee--list {\n  min-height: 200px;\n  overflow: auto;\n}\n.directory-employee--list .j-table--head {\n  min-width: 760px;\n  position: sticky;\n  top: 0;\n}\n.directory-employee--list .j-table--body {\n  min-width: 760px;\n}\n.directory-employee--list .directory-employees-list--select {\n  position: sticky;\n  left: 0;\n  background: #fff;\n}\n.directory-employee--list--select {\n  flex-basis: 50px;\n  max-width: 50px;\n}\n.directory-employees-list--iin {\n  flex-basis: 120px;\n}\n.directory-employees-list--name {\n  flex-basis: 140px;\n  max-width: 170px;\n  flex-wrap: wrap;\n}\n.directory-employees-list--number {\n  flex-basis: 100px;\n}\n.directory-employees-list--salary {\n  flex-basis: 120px;\n}\n.directory-employees-list--payment {\n  flex-basis: 80px;\n  max-width: 100px;\n}\n.directory-employees-list--tools {\n  flex-basis: 64px;\n  margin-left: auto;\n  text-align: right;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  min-width: 86px;\n}\n.directory-employees-list--tools .btn + .btn {\n  margin-left: 1em;\n}\n.directory-employees-list--removing {\n  background-color: #f6f7f8;\n}\n@media (min-width: 960px) {\n  .directory-employee--list {\n    overflow: initial;\n    min-width: none;\n  }\n  .directory-employee--list .j-table--head {\n    min-width: none;\n    position: static;\n  }\n  .directory-employee--list .directory-employees-list--select {\n    position: static;\n    background: none;\n  }\n  .directory-employee--list .j-table--body {\n    min-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFLRjtBQUpFO0VBQ0UsZ0JBQUE7QUFNSjtBQUhBO0VBQ0UseUJDN0NTO0FEbURYO0FFQUk7RUZIRjtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQU9GO0VBTkU7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFRSjtFQU5FO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQVFKO0VBTkU7SUFDRSxlQUFBO0VBUUo7QUFDRiIsImZpbGUiOiJkaXJlY3RvcnktZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcbi5kaXJlY3RvcnktZW1wbG95ZWUtLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC5qLXRhYmxlLS1oZWFkIHtcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5qLXRhYmxlLS1ib2R5IHtcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xuICB9XG4gIC5kaXJlY3RvcnktZW1wbG95ZWVzLWxpc3QtLXNlbGVjdCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cbi5kaXJlY3RvcnktZW1wbG95ZWUtLWxpc3QtLXNlbGVjdCB7XG4gIGZsZXgtYmFzaXM6IDUwcHg7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLmRpcmVjdG9yeS1lbXBsb3llZXMtbGlzdC0taWluIHtcbiAgZmxleC1iYXNpczogMTIwcHg7XG59XG5cbi5kaXJlY3RvcnktZW1wbG95ZWVzLWxpc3QtLW5hbWUge1xuICBmbGV4LWJhc2lzOiAxNDBweDtcbiAgbWF4LXdpZHRoOiAxNzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmRpcmVjdG9yeS1lbXBsb3llZXMtbGlzdC0tbnVtYmVyIHtcbiAgZmxleC1iYXNpczogMTAwcHg7XG59XG4uZGlyZWN0b3J5LWVtcGxveWVlcy1saXN0LS1zYWxhcnkge1xuICBmbGV4LWJhc2lzOiAxMjBweDtcbn1cbi5kaXJlY3RvcnktZW1wbG95ZWVzLWxpc3QtLXBheW1lbnQge1xuICBmbGV4LWJhc2lzOiA4MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLmRpcmVjdG9yeS1lbXBsb3llZXMtbGlzdC0tdG9vbHMgIHtcbiAgZmxleC1iYXNpczogNjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIG1pbi13aWR0aDogODZweDtcbiAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gIH1cbn1cbi5kaXJlY3RvcnktZW1wbG95ZWVzLWxpc3QtLXJlbW92aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAuZGlyZWN0b3J5LWVtcGxveWVlLS1saXN0IHtcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICBtaW4td2lkdGg6IG5vbmU7XG4gICAgLmotdGFibGUtLWhlYWQge1xuICAgICAgbWluLXdpZHRoOiBub25lO1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG4gICAgLmRpcmVjdG9yeS1lbXBsb3llZXMtbGlzdC0tc2VsZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAuai10YWJsZS0tYm9keSB7XG4gICAgICBtaW4td2lkdGg6IG5vbmU7XG4gICAgfVxuICB9XG5cblxufVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 39947:
/*!***************************************************************!*\
  !*** ./src/app/directory/directory.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".directory__title {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.list-page {\n  background: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border-radius: 12px;\n}\n\n.list-page--nav {\n  padding: 1rem 1.5rem 0;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.list-page--filter {\n  padding: 1rem;\n  background: #f6f7f8;\n}\n\n.page-tabs {\n  display: flex;\n  min-width: 100%;\n}\n\n.page-tabs > a {\n  white-space: nowrap;\n  background: none;\n  display: block;\n  padding: 12px 0;\n  color: #666c72;\n  margin-right: 2.5rem;\n  font-size: 1.125rem;\n}\n\n.page-tabs > a.active {\n  color: #1a1c1f;\n  font-weight: 500;\n  border-bottom: 2px solid #ef5630;\n}\n\n.page-tabs > a[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.j-table--row {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.04);\n  transition: ease-in-out 0.3s box-shadow;\n  will-change: box-shadow;\n}\n\n.j-table--row + .j-table--row {\n  border-top: 1px solid #eceef1;\n}\n\n.j-table--head .j-table--row {\n  border-bottom: 1px solid #eceef1;\n  align-items: center;\n}\n\n.j-table--body .j-table--row:not(.j-table--row_delete):hover {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);\n}\n\n.j-table--cell {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  padding: 20px 8px;\n}\n\n.j-table--cell:first-child {\n  padding-left: 16px;\n}\n\n.j-table--cell:last-child {\n  padding-right: 16px;\n}\n\n.j-table--cell_static {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.header-title .directory--actions {\n  margin-top: 0.2em;\n  float: right;\n  margin-left: 15px;\n}\n\n.directory--actions {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FBRkY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkNaUztBRFlYOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFIRjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNDdEJPO0VEdUJQLG9CQUFBO0VBQ0EsbUJDbU9XO0FEck9mOztBQUdJO0VBQ0UsY0NyQkU7RURzQkYsZ0JDcU5hO0VEcE5iLGdDQUFBO0FBRE47O0FBSUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFGTjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFLRTtFQUNFLDZCQUFBO0FBSEo7O0FBS0U7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUk7RUFDRSwrR0FBQTtBQUpOOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBT0U7RUFDRSxrQkFBQTtBQUxKOztBQU9FO0VBQ0UsbUJBQUE7QUFMSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0UsaUJBQUE7QUFMRiIsImZpbGUiOiJkaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG4uZGlyZWN0b3J5X190aXRsZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5saXN0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ubGlzdC1wYWdlLS1uYXYge1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0LXBhZ2UtLWZpbHRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6ICRncmF5LTIwMDtcbn1cblxuLmxpc3QtcGFnZS0tY29udGVudCB7XG59XG4vLyBUT0RPIG1vdmUgdG8gai10YWJsZVxuLnBhZ2UtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgPiBhIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcbiAgICBtYXJnaW4tcmlnaHQ6IHNwYWNlKDYpO1xuICAgIGZvbnQtc2l6ZTogJGg2LWZvbnQtc2l6ZTtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbn1cblxuLmotdGFibGUtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzIGJveC1zaGFkb3c7XG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xuICAuai10YWJsZS0tcm93ICsgJiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmF5LTMwMDtcbiAgfVxuICAuai10YWJsZS0taGVhZCAmIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktMzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmotdGFibGUtLWJvZHkgJiB7XG4gICAgJjpub3QoLmotdGFibGUtLXJvd19kZWxldGUpOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgICAgICAgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICB9XG4gIH1cbn1cbi5qLXRhYmxlLS1jZWxsIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgcGFkZGluZzogMjBweCA4cHg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbi5qLXRhYmxlLS1jZWxsX3N0YXRpYyB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uaGVhZGVyLXRpdGxlIHtcbiAgLmRpcmVjdG9yeS0tYWN0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMC4yZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG4uZGlyZWN0b3J5LS1hY3Rpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iLCIvLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2ZhZjdmNztcclxuJGdyYXktMjAwOiAjZjZmN2Y4O1xyXG4kZ3JheS0zMDA6ICNlY2VlZjE7XHJcbiRncmF5LTQwMDogI2Q2ZGFkZjtcclxuJGdyYXktNTAwOiAjYjdiZWM1O1xyXG4kZ3JheS02MDA6ICM2NjZjNzI7XHJcbiRncmF5LTcwMDogIzQ3NGI1MjtcclxuJGdyYXktODAwOiAjZTllY2YxO1xyXG4kZ3JheS05MDA6ICNkYmRmZTI7XHJcbiRncmF5LTEwMDA6ICM4MjgyODI7XHJcbiRibGFjazogIzFhMWMxZjtcclxuXHJcbiRncmF5czogKCk7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICcxMDAnOiAkZ3JheS0xMDAsXHJcbiAgICAnMjAwJzogJGdyYXktMjAwLFxyXG4gICAgJzMwMCc6ICRncmF5LTMwMCxcclxuICAgICc0MDAnOiAkZ3JheS00MDAsXHJcbiAgICAnNTAwJzogJGdyYXktNTAwLFxyXG4gICAgJzYwMCc6ICRncmF5LTYwMCxcclxuICAgICc3MDAnOiAkZ3JheS03MDAsXHJcbiAgICAnODAwJzogJGdyYXktODAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzIwNDE3NztcclxuJGJsdWUtbGlnaHQ6ICMxNTg2YmI7XHJcbiRibHVlLXdoaXRlOiAjZjVmOWZkO1xyXG4kb3JhbmdlOiAjZWY1NjMwO1xyXG4kb3JhbmdlLWRhcms6ICNkNDNlMTk7XHJcbiRvcmFuZ2UtbGlnaHQ6ICNmN2FiOTg7XHJcbiR5ZWxsb3c6ICNlZjhmMDA7XHJcbiRncmVlbjogIzIzOWE1NDtcclxuJGdyZWVuLWxpZ2h0OiAjNzRiYTcyO1xyXG4kcmVkOiAjZmYwMDAwO1xyXG4kcmVkLWxpZ2h0OiAjZmZlZmVmO1xyXG5cclxuJGdyYXk6ICRncmF5LTUwMDtcclxuJGdyYXktZGFyazogJGdyYXktNjAwO1xyXG4kZ3JheS1saWdodDogJGdyYXktNDAwO1xyXG5cclxuJGNvbG9yczogKCk7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnYmx1ZSc6ICRibHVlLFxyXG4gICAgJ2JsdWUtbGlnaHQnOiAkYmx1ZS1saWdodCxcclxuICAgICdibHVlLXdoaXRlJzogJGJsdWUtd2hpdGUsXHJcbiAgICAnb3JhbmdlJzogJG9yYW5nZSxcclxuICAgICdvcmFuZ2UtZGFyayc6ICRvcmFuZ2UtZGFyayxcclxuICAgICdvcmFuZ2UtbGlnaHQnOiAkb3JhbmdlLWxpZ2h0LFxyXG4gICAgJ3llbGxvdyc6ICR5ZWxsb3csXHJcbiAgICAnZ3JlZW4nOiAkZ3JlZW4sXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAkZ3JlZW4tbGlnaHQsXHJcbiAgICAncmVkJzogJHJlZCxcclxuICAgICdyZWQtbGlnaHQnOiAkcmVkLWxpZ2h0LFxyXG4gICAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICAgJ2JsYWNrLWxpZ2h0JzogJGdyYXktNzAwLFxyXG4gICAgJ2dyYXknOiAkZ3JheS01MDAsXHJcbiAgICAnZ3JheS1kYXJrJzogJGdyYXktNjAwLFxyXG4gICAgJ2dyYXktbGlnaHQnOiAkZ3JheS00MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJHNlY29uZGFyeTogJGJsdWU7XHJcbiRzdWNjZXNzOiAkZ3JlZW47XHJcbiRpbmZvOiAkYmx1ZS1saWdodDtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcbiRkYW5nZXI6ICRyZWQ7XHJcbiRsaWdodDogJGdyYXktNTAwO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCk7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAncHJpbWFyeSc6ICRwcmltYXJ5LFxyXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXHJcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxyXG4gICAgJ2luZm8nOiAkaW5mbyxcclxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXHJcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcclxuICAgICdsaWdodCc6ICRsaWdodCxcclxuICAgICdkYXJrJzogJGRhcmssXHJcbiAgICAnd2hpdGUnOiAkd2hpdGUsXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyAkdGV4dC1jb2xvcnM6ICgpO1xyXG4vLyAkdGV4dC1jb2xvcnM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICAnZGVmYXVsdCc6ICRibGFjayxcclxuLy8gICAgICdsb3ctY29udHJhc3QnOiAkZ3JheS02MDAsXHJcbi8vICAgICAnaW5mbyc6ICRncmF5LTUwMCxcclxuLy8gICAgICdlcnJvcic6ICRyZWQsXHJcbi8vICAgICAnbGluayc6ICRibHVlLFxyXG4vLyAgICAgJ2JhbGFuY2UnOiAkZ3JlZW4sXHJcbi8vICAgICAnYmFsYW5jZS1jb2lucyc6ICRncmVlbi1saWdodCxcclxuLy8gICApLFxyXG4vLyAgICR0ZXh0LWNvbG9yc1xyXG4vLyApO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgLy8gMHB4XHJcbiAgICAxOiAkc3BhY2VyICogMC4yNSxcclxuICAgIC8vIDRweCB4eHMsXHJcbiAgICAyOiAkc3BhY2VyICogMC41LFxyXG4gICAgLy8gOHB4IHhzLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIC8vIDE2cHggc21cclxuICAgIDQ6ICRzcGFjZXIgKiAxLjUsXHJcbiAgICAvLyAyNHB4IG1kLFxyXG4gICAgNTogJHNwYWNlciAqIDIsXHJcbiAgICAvLyAzMnB4IGxnLFxyXG4gICAgNjogJHNwYWNlciAqIDIuNSxcclxuICAgIC8vIDQwcHggeGwsXHJcbiAgICA3OiAkc3BhY2VyICogMy41LFxyXG4gICAgLy8gNTZweCB4eGxcclxuICAgIDg6ICRzcGFjZXIgKiA0LFxyXG4gICAgLy8gNjRweCB4eGxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAkd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAkZGFyaztcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogJG9yYW5nZS1kYXJrO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG4vL1xyXG4vLyBTdHlsZSBwIGVsZW1lbnQuXHJcblxyXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA2NzBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTkyMHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMzBweDtcclxuJGdyaWQtcm93LWNvbHVtbnM6IDY7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbWQ6IHJlbXkoMTIpO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMi41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4ycmVtO1xyXG5cclxuLy8gTDBcclxuJGJveC1zaGFkb3cteHM6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEwxXHJcbiRib3gtc2hhZG93LXNtOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwyXHJcbiRib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDNcclxuJGJveC1zaGFkb3ctbGc6IDBweCAxNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDRcclxuJGJveC1zaGFkb3cteGw6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4kdHJhbnNpdGlvbi1mYWRlOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuJHRyYW5zaXRpb24tY29sbGFwc2U6IGhlaWdodCAwLjM1cyBlYXNlO1xyXG4kdHJhbnNpdGlvbi1tYXgtaGVpZ2h0OiBhbGwgMC42cyBlYXNlO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0OyAvLyAxNHB4XHJcbiRmb250LXNpemUteHM6IHJlbXkoMTIpO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogcmVteSgzMCk7XHJcbiRoMi1mb250LXNpemU6IHJlbXkoMjYpO1xyXG4kaDMtZm9udC1zaXplOiByZW15KDI0KTtcclxuJGg0LWZvbnQtc2l6ZTogcmVteSgyMik7XHJcbiRoNS1mb250LXNpemU6IHJlbXkoMjApO1xyXG4kaDYtZm9udC1zaXplOiByZW15KDE4KTtcclxuXHJcbiRoMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDMwcHgsXHJcbiAgc206IDM2cHgsXHJcbiAgbWQ6IDQ4cHgsXHJcbiAgbGc6IDQ4cHgsXHJcbiAgeGw6IDYwcHgsXHJcbik7XHJcblxyXG4vLyBoMiBzaXplc1xyXG4kaDItZm9udC1zaXplczogKFxyXG4gIHhzOiAyNnB4LFxyXG4gIHNtOiAzMHB4LFxyXG4gIG1kOiA0MHB4LFxyXG4gIGxnOiA0NHB4LFxyXG4gIHhsOiA1NHB4LFxyXG4pO1xyXG5cclxuLy8gaDMgc2l6ZXNcclxuJGgzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjRweCxcclxuICBzbTogMjZweCxcclxuICBtZDogMzJweCxcclxuICBsZzogMzZweCxcclxuICB4bDogNDRweCxcclxuKTtcclxuXHJcbi8vIGg0IHNpemVzXHJcbiRoNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIycHgsXHJcbiAgc206IDI0cHgsXHJcbiAgbWQ6IDI0cHgsXHJcbiAgbGc6IDI4cHgsXHJcbiAgeGw6IDI4cHgsXHJcbik7XHJcblxyXG4vLyBoNSBzaXplc1xyXG4kaDUtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMHB4LFxyXG4gIHNtOiAyMnB4LFxyXG4gIG1kOiAyMnB4LFxyXG4gIGxnOiAyNHB4LFxyXG4gIHhsOiAyNHB4LFxyXG4pO1xyXG5cclxuLy8gaDYgc2l6ZXNcclxuJGg2LWZvbnQtc2l6ZXM6IChcclxuICB4czogMThweCxcclxuICBzbTogMThweCxcclxuICBtZDogMThweCxcclxuICBsZzogMjBweCxcclxuICB4bDogMjBweCxcclxuKTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGluZ3MtY29sb3I6IG51bGw7XHJcblxyXG4kcDAtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMThweCxcclxuICBsZzogMThweCxcclxuICB4bDogMThweCxcclxuKTtcclxuXHJcbiRwMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE0cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMnB4LFxyXG4gIHNtOiAxMnB4LFxyXG4gIG1kOiAxNHB4LFxyXG4gIGxnOiAxNHB4LFxyXG4gIHhsOiAxNHB4LFxyXG4pO1xyXG5cclxuJHA0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMTBweCxcclxuICBzbTogMTBweCxcclxuICBtZDogMTJweCxcclxuICBsZzogMTJweCxcclxuICB4bDogMTJweCxcclxuKTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6ICRmb250LXNpemUteHM7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRhYmxlc1xyXG4vLyAvL1xyXG4vLyAvLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vIC8vXHJcbi8vIC8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDFyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiByZW15KDEpO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxLjJyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDIuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcbiRidG4td2hpdGUtc3BhY2U6IG51bGw7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogOHB4O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gLy8gRm9ybXNcclxuXHJcbi8vICRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW15KDIwKTtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZGFyaztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuXHJcbiRpbnB1dC1mb2N1cy1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbi8vICRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMS4yNXJlbTsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnOiAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGdyYXktODAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZChcclxuICAxZW0gKiAwLjc1LFxyXG4gICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogMC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggK1xyXG4gICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmdcclxuKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXRleHQ6IChcclxuLy8gICBlbjogXCJCcm93c2VcIlxyXG4vLyApICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB2YWxpZGF0aW9uXHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcclxuLy8gLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICBcInZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgICBcImludmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgKSxcclxuLy8gICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4vLyApO1xyXG5cclxuLy8gLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vLyAvL1xyXG4vLyAvLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuLy8gJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdnNcclxuXHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZiYXJcclxuXHJcbi8vICRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAvLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuLy8gJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRkcm9wZG93bi1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRkcm9wZG93bi1iZzogJHdoaXRlO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xNSk7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRkcm9wZG93bi1ib3JkZXItcmFkaXVzLFxyXG4gICRkcm9wZG93bi1ib3JkZXItd2lkdGhcclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktMjAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC4yNXJlbTtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyAvLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNnJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMS41cmVtO1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogMS4yNTtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRncmF5LTgwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4vLyAvLyBKdW1ib3Ryb25cclxuXHJcbi8vICRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcmRzXHJcblxyXG4vLyAkY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuLy8gJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb29sdGlwc1xyXG5cclxuLy8gJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogMjQ2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4yKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRwb3BvdmVyLWJvcmRlci1yYWRpdXMsXHJcbiAgJHBvcG92ZXItYm9yZGVyLXdpZHRoXHJcbikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICRib3gtc2hhZG93LXhsICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuXHJcbi8vICRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvYXN0c1xyXG5cclxuLy8gJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogcmVteSgxMik7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwO1xyXG4vLyAkYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAwLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbTtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLW1kO1xyXG5cclxuLy8gJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xyXG4vLyAkYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcclxuLy8gLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxyXG4vLyAvLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXHJcbi8vICRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuNzVyZW07XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuLy8gJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IG5vbmU7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjc7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS41cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6IDEwNDRweDtcclxuLy8gJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGVydHNcclxuLy8gLy9cclxuLy8gLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4vLyAkYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4vLyAkcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBMaXN0IGdyb3VwXHJcblxyXG4vLyAkbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4vLyAkdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRmlndXJlc1xyXG5cclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xyXG4vLyAkZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCcmVhZGNydW1ic1xyXG5cclxuLy8gJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJvdXNlbFxyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gLy8gU3Bpbm5lcnNcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2xvc2VcclxuXHJcbi8vICRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDb2RlXHJcblxyXG4vLyAkY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcclxuLy8gJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVXRpbGl0aWVzXHJcblxyXG4vLyAkZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XHJcbi8vICRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcclxuLy8gJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcmludGluZ1xyXG5cclxuLy8gJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XHJcbi8vICRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyBKeXNhbiBWYXJpYWJsZXNcclxuXHJcbkBmdW5jdGlvbiBzcGFjZSgkc2l6ZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkc3BhY2VycywgJGtleTogJHNpemUpO1xyXG59XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNjJweDtcclxuJGhlYWRlci1oZWlnaHQtbWQ6IDEwMHB4O1xyXG4kaGVhZGVyLXdpZHRoOiAyODBweDtcclxuXHJcbiRidG4tbWluLXdpZHRoOiAxNjRweDtcclxuXHJcbi8vIEotaW5wdXRcclxuJGotaW5wdXQtZm9udC1zaXplOiAxcmVtO1xyXG4kai1pbnB1dC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XHJcbiRqLWlucHV0LWZvbnQtc3R5bGU6IG5vcm1hbDtcclxuJGotaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG5cclxuJGotaW5wdXQtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteTogMTcuNXB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXg6IDIwcHg7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItd2lkdGg6IDFweDtcclxuJGotaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kai1pbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodDtcclxuJGotaW5wdXQtdGV4dC1jb2xvcjogJGJsYWNrO1xyXG4kai1pbnB1dC1tYXNrLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtaWNvbi1jb2xvcjogJG9yYW5nZTtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtdGV4dC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWVycm9yOiAkcmVkLWxpZ2h0O1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZGlzYWJsZWQ6ICRpbnB1dC1kaXNhYmxlZC1iZzsgLy8gZnJvbSBmaWdtYSBwcmltaXRpdmVzIHNob3VsZCBiZSBncmF5LTIwMFxyXG5cclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wOiAkai1pbnB1dC1wYWRkaW5nLXkgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcC1hY3RpdmU6IDEwcHg7XHJcbiRqLWlucHV0LWxpbmstcG9zaXRpb24tdG9wOiAxNnB4O1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0OiAkai1pbnB1dC1wYWRkaW5nLXggKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAkai1pbnB1dC1saW5lLWhlaWdodDtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1wYWRkaW5nLXRvcDogMjdweDtcclxuJGotaW5wdXQtcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiRqLWlucHV0LW1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItcG9zaXRpb246ICRqLWlucHV0LXBhZGRpbmctdG9wICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1jaGFyLWxlbmd0aDogOC45OXB4O1xyXG5cclxuJGotaW5wdXQtYnV0dG9uLXBvc2l0aW9uOiAyMHB4O1xyXG4kai1pbnB1dC1zaGFkb3ctcG9zaXRpb246ICRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ7XHJcblxyXG4kai1pbnB1dC1sYWJlbC16LWluZGV4OiAwO1xyXG4kai1pbnB1dC1zaGFkb3ctei1pbmRleDogMTtcclxuJGotaW5wdXQtei1pbmRleDogMjtcclxuJGotaW5wdXQtbGluay16LWluZGV4OiAzO1xyXG4kai1pbnB1dC1idXR0b24tei1pbmRleDogNDtcclxuXHJcbiRib3gtc2hhZG93LXRvLXRvcC1sZzogMCAtMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlO1xyXG4iXX0= */";

/***/ }),

/***/ 97834:
/*!**************************************************************************!*\
  !*** ./src/app/portal/portal-host/portal-host.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0YWwtaG9zdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 33459:
/*!**************************************************************************************************!*\
  !*** ./src/app/directory/components/counterparty-row/counterparty-row.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"!removing; else removingTpl\">\n  <div class=\"counterparty-list--select p3 j-table--cell j-table--cell_static\">\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\"\n             class=\"custom-control-input\"\n             [attr.id]=\"item.id\"\n             [jSelectionRow]=\"item.id\" />\n      <label class=\"custom-control-label\"\n             [attr.for]=\"item.id\"></label>\n    </div>\n  </div>\n  <div class=\"counterparty-list--iin p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\">{{item.iinOrBin}}</p>\n  </div>\n  <div class=\"counterparty-list--name p3 j-table--cell\">\n    <p class=\"m-0\">{{item.name}}</p>\n  </div>\n  <div class=\"counterparty-list--kbe p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\">{{item.kbe.code}}</p>\n  </div>\n  <div class=\"counterparty-list--bank p3 j-table--cell j-table--cell_static\">\n    <p class=\"d-flex align-items-center\"\n       *ngFor=\"let account of item.accounts\">\n      <j-entity-logo class=\"mr-1\"\n                     [name]=\"account.iban | bankFromAccount\"\n                     size=\"sm\">\n      </j-entity-logo>\n      {{account.iban | bankFromAccount}}\n    </p>\n  </div>\n  <div class=\"counterparty-list--account p3 j-table--cell j-table--cell_static\">\n    <p *ngFor=\"let account of item.accounts\">\n      {{account.iban | formatIban}}\n    </p>\n  </div>\n  <div class=\"counterparty-list--tools p3 j-table--cell\">\n    <ng-container [ngTemplateOutlet]=\"actionsTpl\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #actionsTpl>\n  <span class=\"mr-2\">\n    <button type=\"button\"\n            (click)=\"onEdit()\"\n            tooltipClass=\"tooltip-light\"\n            [ngbTooltip]=\"'COUNTERPARTY.EDIT_COUNTERPARTY' | translate\"\n            placement=\"top\"\n            class=\"btn btn-link btn-as-text btn-link-light-gray ml-auto\">\n      <i [inlineSVG]=\"'edit' | svgPath\"></i>\n    </button>\n  </span>\n  <span>\n    <button type=\"button\"\n            (click)=\"onRemove()\"\n            tooltipClass=\"tooltip-light\"\n            [ngbTooltip]=\"'COUNTERPARTY.DELETE_COUNTERPARTY' | translate\"\n            placement=\"top\"\n            class=\"btn btn-link btn-as-text btn-link-light-gray\">\n      <i [inlineSVG]=\"'bucket' | svgPath\"></i>\n    </button>\n  </span>\n</ng-template>\n\n<ng-template #removingTpl>\n  <div class=\"p3 j-table--cell counterparty-list--removing d-flex\">\n    <span class=\"text-muted\">{{(row.deleteWith ? 'COUNTERPARTY.DELETED_COUNTERPARTIES' :\n      'COUNTERPARTY.DELETED_COUNTERPARTY') | translate}}</span>\n    <button type=\"button\"\n            (click)=\"onCancelRemove()\"\n            class=\"ml-auto  btn btn-link text-info p-0\">\n      <i [inlineSVG]=\"'arrow-loop-left' | svgPath\"></i>\n      <small class=\"ml-1\">{{'SHARED.RETURN' | translate}} {{removing}}</small>\n    </button>\n  </div>\n</ng-template>";

/***/ }),

/***/ 41620:
/*!****************************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-edit-employee/directory-edit-employee.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header\">\n  <h4 translate>\n    <button (click)=\"onCancel()\"\n            type=\"button\"\n            class=\"modal-back mr-3 btn btn-outline-primary btn-sm p-0\">\n      <i [inlineSVG]=\"'chevron-left' | svgPath\"></i>\n    </button>\n    {{'DIRECTORY.EMPLOYEES.' + (editMode ? 'EDIT_EMPLOYEE' : 'ADD_EMPLOYEE')}}\n  </h4>\n  <button *ngIf=\"editMode\"\n          (click)=\"onDelete()\"\n          class=\"edit-counterparty--delete btn btn-link btn-link-light-gray btn-as-text float-right mt-2\">\n    <i [inlineSVG]=\"'bucket' | svgPath\"\n       class=\"d-inline\"></i>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"scrolled\">\n    <form class=\"scrolled--content\"\n          [formGroup]=\"fGroup\"\n          #formDirective=\"ngForm\">\n\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.IIN</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 [dropSpecialCharacters]=\"true\"\n                 class=\"form-control\"\n                 [jShadow]=\"masks.iin.shadow\"\n                 [mask]=\"masks.iin.mask\"\n                 [formControl]=\"fGroup.controls.iin\">\n          <div jSuffix\n               [jLoading]=\"autocomplete$ | async\"\n               [jLoadingInverted]=\"true\"\n               class=\"p3\">\n          </div>\n          <j-error [control]=\"fGroup.controls.iin\"\n                   [errorMessages]=\"errors.iinOrBin\"></j-error>\n        </j-form-field>\n      </div>\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.LASTNAME</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 class=\"form-control\"\n                 [formControl]=\"fGroup.controls.lastName\">\n          <div jSuffix\n               [jLoading]=\"autocomplete$ | async\"\n               [jLoadingInverted]=\"true\"\n               class=\"p3\">\n          </div>\n        </j-form-field>\n      </div>\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.FIRSTNAME</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 class=\"form-control\"\n                 [formControl]=\"fGroup.controls.firstName\">\n          <div jSuffix\n               [jLoading]=\"autocomplete$ | async\"\n               [jLoadingInverted]=\"true\"\n               class=\"p3\">\n          </div>\n        </j-form-field>\n      </div>\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.MIDDLENAME</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 class=\"form-control\"\n                 [formControl]=\"fGroup.controls.middleName\">\n          <div jSuffix\n               [jLoading]=\"autocomplete$ | async\"\n               [jLoadingInverted]=\"true\"\n               class=\"p3\">\n          </div>\n        </j-form-field>\n      </div>\n      <div class=\"form-group\">\n        <j-date-input [isCalendarShown]=\"false\"\n                      [label]=\"'DIRECTORY.EMPLOYEES.BIRTH_DATE' | translate\"\n                      [hasError]=\"fGroup.controls.birthDate.errors && isSubmitted\"\n                      [formControl]=\"fGroup.controls.birthDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"></j-date-input>\n      </div>\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.ACCOUNT_SALARY</j-label>\n          <j-entity-logo jPrefix\n                         hideEmpty=\"true\"\n                         [name]=\"('KZ' + fGroup.controls.iban.value) | bankFromAccount\">\n          </j-entity-logo>\n          <input #accountInput=\"jFormInput\"\n                 type=\"text\"\n                 jFormInput\n                 jReplaceOnPaste=\"KZ\"\n                 jDynamicPrefix=\"KZ\"\n                 jUppercase\n                 class=\"form-control\"\n                 [dropSpecialCharacters]=\"true\"\n                 [mask]=\"masks.iban.mask\"\n                 [jShadow]=\"masks.iban.shadow\"\n                 [formControl]=\"fGroup.controls.iban\">\n          <j-error [control]=\"fGroup.controls.iban\"\n                   [errorMessages]=\"errors.bankAccount\"></j-error>\n        </j-form-field>\n      </div>\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.SUM_SALARY</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 jCursorBound\n                 jReplaceDot\n                 suffix=\" ₸\"\n                 class=\"form-control\"\n                 mask=\"separator.2\"\n                 thousandSeparator=\" \"\n                 [dropSpecialCharacters]=\"true\"\n                 [formControl]=\"fGroup.controls.salarySum\">\n        </j-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.SUM_PENSION</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 jCursorBound\n                 jReplaceDot\n                 suffix=\" ₸\"\n                 class=\"form-control\"\n                 mask=\"separator.2\"\n                 thousandSeparator=\" \"\n                 [dropSpecialCharacters]=\"true\"\n                 [formControl]=\"fGroup.controls.pensionSum\">\n          <j-error [control]=\"fGroup.controls.pensionSum\"\n                   [errorMessages]=\"socialSumErr\"></j-error>\n        </j-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.SUM_SOCIAL</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 jCursorBound\n                 jReplaceDot\n                 suffix=\" ₸\"\n                 class=\"form-control\"\n                 mask=\"separator.2\"\n                 thousandSeparator=\" \"\n                 [dropSpecialCharacters]=\"true\"\n                 [formControl]=\"fGroup.controls.socialSum\">\n          <j-error [control]=\"fGroup.controls.socialSum\"\n                   [errorMessages]=\"socialSumErr\"></j-error>\n        </j-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <j-form-field clearable=\"true\">\n          <j-label translate>DIRECTORY.EMPLOYEES.SUM_MEDICAL</j-label>\n          <input type=\"text\"\n                 jFormInput\n                 jCursorBound\n                 jReplaceDot\n                 suffix=\" ₸\"\n                 class=\"form-control\"\n                 mask=\"separator.2\"\n                 thousandSeparator=\" \"\n                 [dropSpecialCharacters]=\"true\"\n                 [formControl]=\"fGroup.controls.ocmcSum\">\n          <j-error [control]=\"fGroup.controls.ocmcSum\"\n                   [errorMessages]=\"socialSumErr\"></j-error>\n        </j-form-field>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"errorText\"\n       class=\"alert alert-danger\"\n       translate>\n    {{errorText}}\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button (click)=\"onCancel()\"\n          [disabled]=\"updateInProgress$ | async\"\n          type=\"button\"\n          class=\"btn btn-outline-primary\">{{'SHARED.CANCEL' | translate}}</button>\n  <button (click)=\"onSubmit()\"\n          [disabled]=\"updateInProgress$ | async\"\n          [jLoading]=\"updateInProgress$ | async\"\n          type=\"submit\"\n          class=\"btn btn-primary\">{{'SHARED.SAVE' | translate}}</button>\n</div>\n";

/***/ }),

/***/ 31664:
/*!**************************************************************************************************************!*\
  !*** ./src/app/directory/components/directory-employee-row/directory-employee-row.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"!removing; else removingTpl\">\n  <div class=\"directory-employees-list--select p3 j-table--cell j-table--cell_static\">\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\"\n             class=\"custom-control-input\"\n             [attr.id]=\"item.id\"\n             [jSelectionRow]=\"item.id\" />\n      <label class=\"custom-control-label\"\n             [attr.for]=\"item.id\"></label>\n    </div>\n  </div>\n  <div class=\"directory-employees-list--iin p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\">{{item.iin}}<br> <span class=\"text-gray\">{{item.birthDate | date: 'dd.MM.yyyy'}}</span></p>\n  </div>\n  <div class=\"directory-employees-list--name p3 j-table--cell\">\n    <p class=\"directory-employees-list--name-helper m-0\">{{ fio }}</p>\n  </div>\n  <div class=\"directory-employees-list--number p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\">{{item.iban | maskIban}}</p>\n  </div>\n  <div class=\"directory-employees-list--salary p3 j-table--cell\">\n    <p class=\"m-0\"><j-money [money]=\"item.salarySum\"></j-money></p>\n  </div>\n  <div class=\"directory-employees-list--payment p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\"><j-money [money]=\"item.pensionSum\"></j-money></p>\n  </div>\n  <div class=\"directory-employees-list--payment p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\"><j-money [money]=\"item.socialSum\"></j-money></p>\n  </div>\n  <div class=\"directory-employees-list--payment p3 j-table--cell j-table--cell_static\">\n    <p class=\"m-0\"><j-money [money]=\"item.ocmcSum\"></j-money></p>\n  </div>\n\n  <div class=\"directory-employees-list--tools p3 j-table--cell\">\n    <span class=\"mr-2\">\n      <button type=\"button\"\n              (click)=\"onEdit()\"\n              tooltipClass=\"tooltip-light\"\n              [ngbTooltip]=\"'DIRECTORY.EMPLOYEES.EDIT' | translate\"\n              placement=\"top\"\n              class=\"btn btn-link btn-as-text btn-link-light-gray ml-auto\">\n        <i [inlineSVG]=\"'edit' | svgPath\"></i>\n      </button>\n    </span>\n    <span>\n      <button type=\"button\"\n              (click)=\"onRemove()\"\n              tooltipClass=\"tooltip-light\"\n              [ngbTooltip]=\"'DIRECTORY.EMPLOYEES.DELETE' | translate\"\n              placement=\"top\"\n              class=\"btn btn-link btn-as-text btn-link-light-gray\">\n        <i [inlineSVG]=\"'bucket' | svgPath\"></i>\n      </button>\n    </span>\n  </div>\n</ng-container>\n\n<ng-template #removingTpl>\n  <div class=\"p3 j-table--cell directory-employees-list--removing d-flex\">\n    <span class=\"text-muted\" translate [translateParams]=\"row.deleteWith ? {num: row.deleteWith.length + 1} : null\">{{(row.deleteWith ? 'DIRECTORY.EMPLOYEES.EMPLOYEES_DELETED' :\n      'DIRECTORY.EMPLOYEES.EMPLOYEE_DELETED') }}</span>\n    <button type=\"button\"\n            (click)=\"onCancelRemove()\"\n            class=\"ml-auto  btn btn-link text-info p-0\">\n      <i [inlineSVG]=\"'arrow-loop-left' | svgPath\"></i>\n      <small class=\"ml-1\">{{'SHARED.RETURN' | translate}} {{removing}}</small>\n    </button>\n  </div>\n</ng-template>\n";

/***/ }),

/***/ 84661:
/*!**********************************************************************************************!*\
  !*** ./src/app/directory/components/directory-tabs/directory-tabs.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"list-page--nav\">\n  <nav>\n    <div class=\"page-tabs\">\n      <a [routerLink]=\"['counterparties']\"\n         routerLinkActive=\"active\"\n         translate>DIRECTORY.COUNTERPARTIES.TITLE</a>\n      <a [routerLink]=\"['employees']\"\n         routerLinkActive=\"active\"\n         translate>DIRECTORY.EMPLOYEES.TITLE</a>\n    </div>\n  </nav>\n  <ng-content></ng-content>\n</div>";

/***/ }),

/***/ 22380:
/*!****************************************************************************************************!*\
  !*** ./src/app/directory/components/edit-counterparty/edit-counterparty.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header\">\r\n  <h4 translate> <button (click)=\"onCancel()\"\r\n            type=\"button\"\r\n            class=\"modal-back mr-3 btn btn-outline-primary btn-sm p-0\">\r\n      <i [inlineSVG]=\"'chevron-left' | svgPath\"></i>\r\n    </button>{{'COUNTERPARTY.' + (editMode ? 'EDIT_COUNTERPARTY' : 'ADD_COUNTERPARTY')}}</h4>\r\n  <button *ngIf=\"editMode\"\r\n          (click)=\"onDelete()\"\r\n          class=\"edit-counterparty--delete btn btn-link btn-link-light-gray btn-as-text float-right mt-2\">\r\n    <i [inlineSVG]=\"'bucket' | svgPath\"\r\n       class=\"d-inline\"></i>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"scrolled\">\r\n    <form class=\"scrolled--content\"\r\n          [formGroup]=\"fGroup\" #formDirective=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <j-form-field clearable=\"true\">\r\n          <j-label>{{ 'COUNTERPARTY.IIN' | translate }}</j-label>\r\n          <input type=\"text\"\r\n                 jFormInput\r\n                 [dropSpecialCharacters]=\"true\"\r\n                 class=\"form-control\"\r\n                 [jShadow]=\"masks.iinOrBin.shadow\"\r\n                 [mask]=\"masks.iinOrBin.mask\"\r\n                 [formControl]=\"fGroup.controls.iinOrBin\">\r\n          <div jSuffix\r\n               [jLoading]=\"checkingCounterParty$ | async\"\r\n               [jLoadingInverted]=\"true\"\r\n               class=\"counterParty p3\">\r\n          </div>\r\n          <j-error [control]=\"fGroup.controls.iinOrBin\"\r\n                   [errorMessages]=\"errors.iinOrBin\"></j-error>\r\n        </j-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-8 pr-2\">\r\n          <j-form-field clearable=\"true\">\r\n            <j-label>{{ 'COUNTERPARTY.NAME' | translate }}</j-label>\r\n            <input type=\"text\"\r\n                   jFormInput\r\n                   class=\"form-control\"\r\n                   [formControl]=\"fGroup.controls.name\">\r\n            <div jSuffix\r\n                 [jLoading]=\"checkingCounterParty$ | async\"\r\n                 [jLoadingInverted]=\"true\"\r\n                 class=\"counterParty p3\">\r\n            </div>\r\n            <!-- <j-error [control]=\"form.controls.name\"\r\n                           [errorMessages]=\"errors.name\"></j-error> -->\r\n          </j-form-field>\r\n        </div>\r\n        <div class=\"form-group col-4 pl-2\">\r\n          <j-form-field clearable=\"true\">\r\n            <j-label>{{ 'COUNTERPARTY.KBE' | translate }}</j-label>\r\n            <input type=\"text\"\r\n                   jFormInput\r\n                   class=\"form-control\"\r\n                   [mask]=\"masks.kbeCode.mask\"\r\n                   [jShadow]=\"masks.kbeCode.shadow\"\r\n                   [dropSpecialCharacters]=\"true\"\r\n                   [formControl]=\"fGroup.controls.kbeCode\">\r\n            <button type=\"button\"\r\n                    jSuffix\r\n                    tooltipClass=\"tooltip-light tooltip-large\"\r\n                    container=\"body\"\r\n                    [ngbTooltip]=\"kbeInfo\"\r\n                    [inlineSVG]=\"'/assets/icons/payments/question.svg'\"\r\n                    class=\"btn-link-gray btn btn-link btn-as-text\"></button>\r\n            <j-error [control]=\"fGroup.controls.kbeCode\"\r\n                     [errorMessages]=\"errors.kbeCode\"></j-error>\r\n          </j-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div formArrayName=\"accounts\"\r\n           *ngFor=\"let item of fGroup.get('accounts')['controls']; let i = index;\">\r\n        <div class=\"row form-group\">\r\n          <div class=\"col\">\r\n            <j-form-field>\r\n              <j-entity-logo jPrefix\r\n                             hideEmpty=\"true\"\r\n                             [name]=\"('KZ' + fGroup.get('accounts')['controls'][i].value) | bankFromAccount\">\r\n              </j-entity-logo>\r\n              <j-label>{{ 'COUNTERPARTY.IBAN' | translate }}</j-label>\r\n              <input type=\"text\"\r\n                     jFormInput\r\n                     jReplaceOnPaste=\"KZ\"\r\n                     jDynamicPrefix=\"KZ\"\r\n                     jUppercase\r\n                     [jShadow]=\"masks.bankAccount.shadow\"\r\n                     class=\"form-control\"\r\n                     [dropSpecialCharacters]=\"true\"\r\n                     [mask]=\"masks.bankAccount.mask\"\r\n                     [formControl]=\"fGroup.get('accounts')['controls'][i]\">\r\n              <j-error [control]=\"fGroup.get('accounts')['controls'][i]\"\r\n                       [errorMessages]=\"errors.bankAccount\"></j-error>\r\n            </j-form-field>\r\n          </div>\r\n          <div *ngIf=\"i\"\r\n               class=\"col d-flex flex-grow-0 text-center\">\r\n            <button (click)=\"deleteAccount(i)\"\r\n                    class=\"btn btn-link btn-link-light-gray btn-as-text float-right\">\r\n              <i [inlineSVG]=\"'bucket' | svgPath\"\r\n                 class=\"d-inline\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  <button [disabled]=\"updateInProgress$ | async\"\r\n          type=\"button\"\r\n          class=\"btn btn-link text-info p-0 ml-auto\"\r\n          (click)=\"addAccount()\">+ {{'COUNTERPARTY.ADD_ACCOUNT' | translate}}</button>\r\n\r\n  <div *ngIf=\"errorText\"\r\n       class=\"alert alert-danger\"\r\n       translate>\r\n    {{errorText}}\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"onCancel()\"\r\n          [disabled]=\"updateInProgress$ | async\"\r\n          type=\"button\"\r\n          class=\"btn btn-outline-primary\">{{'SHARED.CANCEL' | translate}}</button>\r\n  <button (click)=\"onSubmit()\"\r\n          [disabled]=\"updateInProgress$ | async\"\r\n          [jLoading]=\"updateInProgress$ | async\"\r\n          type=\"submit\"\r\n          class=\"btn btn-primary\">{{'SHARED.SAVE' | translate}}</button>\r\n</div>\r\n<ng-template #kbeInfo>\r\n  <j-kbe-info></j-kbe-info>\r\n</ng-template>\r\n";

/***/ }),

/***/ 86278:
/*!**********************************************************************************************!*\
  !*** ./src/app/directory/containers/counterparties/counterparties.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"list-page--content list-page--content_counterparties\"\r\n     [jSelectionContainer]=\"selectionModel\"\r\n     [rows]=\"composedRows$ | async\">\r\n  <div class=\"list-page--filter\">\r\n    <j-form-field clearable=\"true\">\r\n      <span class=\"text-primary d-block mt-n1\"\r\n            jPrefix\r\n            inlineSVG=\"/assets/icons/search.svg\"></span>\r\n      <input type=\"text\"\r\n             jFormInput\r\n             placeholder=\"{{'FILTER.SEARCH.COUNTERPARTY' | translate}}\"\r\n             class=\"form-control\"\r\n             autocomplete=\"off\"\r\n             [formControl]=\"search\">\r\n    </j-form-field>\r\n  </div>\r\n  <div *ngIf=\"(store.fetched$ | async); else loading\"\r\n       class=\"counterparty-list j-table\">\r\n    <ng-container *ngTemplateOutlet=\"tableHead\"></ng-container>\r\n\r\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\r\n  </div>\r\n\r\n  <ng-template #tableHead>\r\n    <div class=\"j-table--head\">\r\n      <div class=\"j-table--row\">\r\n        <div class=\"counterparty-list--select j-table--cell j-table--cell_static\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\"\r\n                   class=\"custom-control-input\"\r\n                   id=\"checkboxAll\"\r\n                   jSelectionRow\r\n                   [masterSelect]=\"true\" />\r\n            <label class=\"custom-control-label\"\r\n                   for=\"checkboxAll\"></label>\r\n          </div>\r\n        </div>\r\n        <div class=\"counterparty-list--iin j-table--cell j-table--cell_static p4\">{{ 'COUNTERPARTY.IIN' | translate }}\r\n        </div>\r\n        <div class=\"counterparty-list--name j-table--cell p4\">{{ 'COUNTERPARTY.NAME' | translate }}</div>\r\n        <div class=\"counterparty-list--kbe j-table--cell j-table--cell_static p4\">{{ 'COUNTERPARTY.KBE' | translate }}\r\n        </div>\r\n        <div class=\"counterparty-list--bank j-table--cell j-table--cell_static p4\">{{ 'COUNTERPARTY.BANK' | translate }}\r\n        </div>\r\n        <div class=\"counterparty-list--account j-table--cell j-table--cell_static p4\">{{ 'COUNTERPARTY.ACCOUNT_NUMBER' |\r\n          translate }}</div>\r\n        <div class=\"counterparty-list--tools j-table--cell\">\r\n          <span class=\"ml-auto\">\r\n            <button *ngIf=\"selectionModel.value.length\"\r\n                    type=\"button\"\r\n                    (click)=\"onRemoveSelected()\"\r\n                    tooltipClass=\"tooltip-light\"\r\n                    [ngbTooltip]=\"'COUNTERPARTY.DELETE_COUNTERPARTIES' | translate\"\r\n                    placement=\"top\"\r\n                    class=\"btn btn-link btn-as-text btn-link-light-gray\">\r\n              <i [inlineSVG]=\"'bucket' | svgPath\"></i>\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #contentBody>\r\n    <div class=\"j-table--body\">\r\n      <ng-template ngFor\r\n                   let-row\r\n                   [ngForOf]=\"composedRows$ | async\"\r\n                   [ngForTrackBy]=\"( 'id' | trackByProperty )\">\r\n        <j-counterparty-row (edit)=\"onEdit(row)\"\r\n                            (remove)=\"onRemove(row)\"\r\n                            (cancelRemove)=\"onCancelRemove(row)\"\r\n                            [hidden]=\"row.hidden\"\r\n                            [row]=\"row\"\r\n                            [item]=\"row.data\"\r\n                            [removing]=\"row.removing$ | async\"></j-counterparty-row>\r\n      </ng-template>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<ng-template #emptyBody>\r\n  <j-empty-placeholder label=\"COUNTERPARTY.NO_COUNTERPARTIES\">\r\n  </j-empty-placeholder>\r\n</ng-template>\r\n\r\n<ng-template #errorBody>\r\n  <div class=\"text-center pt-5\">\r\n    <p translate\r\n       class=\"text-gray text-gray\">SHARED.LIST_LOADING_ERR_REFRESH</p>\r\n    <button class=\"btn btn-link p-1\"\r\n            translate\r\n            (click)=\"onRefresh()\"\r\n            ng-disabled=\"store.fetching$ | async\">SHARED.REFRESH</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template jPortalledTpl=\"DIRECTORY_TITLE\">\r\n  <button (click)=\"onEdit()\"\r\n          class=\"mt-n3 btn btn-link p-0\">+ {{ 'COUNTERPARTY.ADD_COUNTERPARTY' | translate}}</button>\r\n</ng-template>\r\n\r\n<ng-template #loading>\r\n  <div class=\"p-4\">\r\n    <ng-container *ngTemplateOutlet=\"loaderPart\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"loaderPart\"></ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #loaderPart>\r\n  <ngx-skeleton-loader [theme]=\"{ width: '200px', height: '25px', 'background-color':'#ECEEF1'}\">\r\n  </ngx-skeleton-loader>\r\n  <ngx-skeleton-loader [theme]=\"{ height: '115px', 'background-color':'#ECEEF1' }\">\r\n  </ngx-skeleton-loader>\r\n  <ngx-skeleton-loader [theme]=\"{ height: '115px', 'background-color':'#ECEEF1' }\">\r\n  </ngx-skeleton-loader>\r\n</ng-template>";

/***/ }),

/***/ 41253:
/*!********************************************************************************************************!*\
  !*** ./src/app/directory/containers/directory-employees/directory-employees.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"list-page--content list-page--content_counterparties\"\n     [jSelectionContainer]=\"selectionModel\"\n     [rows]=\"composedRows$ | async\">\n  <div class=\"list-page--filter\">\n    <j-form-field clearable=\"true\">\n      <span class=\"text-primary d-block mt-n1\"\n            jPrefix\n            inlineSVG=\"/assets/icons/search.svg\"></span>\n      <input type=\"text\"\n             jFormInput\n             placeholder=\"Поиск\"\n             class=\"form-control\"\n             autocomplete=\"off\"\n             [formControl]=\"search\">\n    </j-form-field>\n  </div>\n  <div *ngIf=\"(store.fetched$ | async); else loading\"\n       class=\"directory-employee--list j-table\">\n    <ng-container *ngTemplateOutlet=\"tableHead\"></ng-container>\n\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n\n  <ng-template #tableHead>\n    <div class=\"j-table--head\">\n      <div class=\"j-table--row\">\n        <div class=\"directory-employees-list--select j-table--cell j-table--cell_static\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\"\n                   class=\"custom-control-input\"\n                   id=\"checkboxAll\"\n                   jSelectionRow\n                   [masterSelect]=\"true\" />\n            <label class=\"custom-control-label\"\n                   for=\"checkboxAll\"></label>\n          </div>\n        </div>\n        <div class=\"directory-employees-list--iin j-table--cell j-table--cell_static p4\"\n             translate>DIRECTORY.EMPLOYEES.IIN_BIRTH</div>\n        <div class=\"directory-employees-list--name j-table--cell p4\"\n             translate>DIRECTORY.EMPLOYEES.FIO</div>\n        <div class=\"directory-employees-list--number j-table--cell j-table--cell_static p4\"\n             translate>DIRECTORY.EMPLOYEES.ACCOUNT_N</div>\n        <div class=\"directory-employees-list--salary j-table--cell p4\"\n             translate>DIRECTORY.EMPLOYEES.SUM_SAL</div>\n        <div class=\"directory-employees-list--payment j-table--cell j-table--cell_static p4\"\n             translate>DIRECTORY.EMPLOYEES.SUM_PENS</div>\n        <div class=\"directory-employees-list--payment j-table--cell j-table--cell_static p4\"\n             translate>DIRECTORY.EMPLOYEES.SUM_SOC</div>\n        <div class=\"directory-employees-list--payment j-table--cell j-table--cell_static p4\"\n             translate>DIRECTORY.EMPLOYEES.SUM_MEDICAL</div>\n        <div class=\"directory-employees-list--tools j-table--cell\">\n          <span class=\"ml-auto\">\n            <button *ngIf=\"selectionModel.value.length\"\n                    type=\"button\"\n                    (click)=\"onRemoveSelected()\"\n                    tooltipClass=\"tooltip-light\"\n                    [ngbTooltip]=\"'DIRECTORY.EMPLOYEES.DELETE_MULTY' | translate\"\n                    placement=\"top\"\n                    class=\"btn btn-link btn-as-text btn-link-light-gray\">\n              <i [inlineSVG]=\"'bucket' | svgPath\"></i>\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #contentBody>\n    <div class=\"j-table--body\">\n      <ng-template ngFor\n                   let-row\n                   [ngForOf]=\"composedRows$ | async\"\n                   [ngForTrackBy]=\"( 'id' | trackByProperty )\">\n        <j-directory-employee-row (edit)=\"onEdit(row)\"\n                                  (remove)=\"onRemove(row)\"\n                                  (cancelRemove)=\"onCancelRemove(row)\"\n                                  [hidden]=\"row.hidden\"\n                                  [row]=\"row\"\n                                  [item]=\"row.data\"\n                                  [removing]=\"row.removing$ | async\"></j-directory-employee-row>\n      </ng-template>\n    </div>\n  </ng-template>\n</div>\n\n<ng-template #emptyBody>\n  <j-empty-placeholder [label]=\"search.value ? 'DIRECTORY.EMPLOYEES.NOT_FOUND_CHANGE_PARAMS' : 'PAYMENTS.EMPLOYEES.EMPTY'\">\n  </j-empty-placeholder>\n</ng-template>\n\n<ng-template #errorBody>\n  <div class=\"text-center pt-5\">\n    <p translate\n       class=\"text-gray text-gray\">SHARED.LIST_LOADING_ERR_REFRESH</p>\n    <button class=\"btn btn-link p-1\"\n            translate\n            (click)=\"onRefresh()\"\n            ng-disabled=\"store.fetching$ | async\">SHARED.REFRESH</button>\n  </div>\n</ng-template>\n\n<ng-template jPortalledTpl=\"DIRECTORY_TITLE\">\n  <button (click)=\"onEdit()\"\n          class=\"mt-n3 btn btn-link p-0\">+ {{ 'DIRECTORY.EMPLOYEES.ADD_EMPLOYEE' | translate}}</button>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"p-4\">\n    <ng-container *ngTemplateOutlet=\"loaderPart\"></ng-container>\n    <ng-container *ngTemplateOutlet=\"loaderPart\"></ng-container>\n  </div>\n</ng-template>\n\n<ng-template #loaderPart>\n  <ngx-skeleton-loader [theme]=\"{ width: '200px', height: '25px', 'background-color':'#ECEEF1'}\">\n  </ngx-skeleton-loader>\n  <ngx-skeleton-loader [theme]=\"{ height: '115px', 'background-color':'#ECEEF1' }\">\n  </ngx-skeleton-loader>\n  <ngx-skeleton-loader [theme]=\"{ height: '115px', 'background-color':'#ECEEF1' }\">\n  </ngx-skeleton-loader>\n</ng-template>\n";

/***/ }),

/***/ 88978:
/*!***************************************************************!*\
  !*** ./src/app/directory/directory.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<j-layout-home>\n  <j-aside>\n    <j-nav-main></j-nav-main>\n  </j-aside>\n  <j-main>\n    <div class=\"row\">\n      <div class=\"col-lg-10 offset-lg-1 col-xl-8 offset-xl-2\">\n        <section>\n\n          <h2 class=\"directory__title header-title\">{{'DIRECTORY.TITLE' | translate}}\n            <div class=\"directory--actions d-md-none\">\n              <j-portal-host name=\"DIRECTORY_TITLE\"></j-portal-host>\n            </div>\n          </h2>\n          <div class=\"list-page\">\n            <j-directory-tabs>\n              <div class=\"directory--actions d-none d-md-block\">\n                <j-portal-host name=\"DIRECTORY_TITLE\"></j-portal-host>\n              </div>\n            </j-directory-tabs>\n\n            <router-outlet></router-outlet>\n          </div>\n        </section>\n      </div>\n    </div>\n  </j-main>\n</j-layout-home>\n";

/***/ }),

/***/ 17972:
/*!**************************************************************************!*\
  !*** ./src/app/portal/portal-host/portal-host.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngTemplateOutlet=\"template$ | async; context: context\"></ng-container>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_directory_directory_module_ts.js.map