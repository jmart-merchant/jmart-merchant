"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_history_history_module_ts"],{

/***/ 8402:
/*!****************************************************************!*\
  !*** ./src/app/history/history-list/history-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryListComponent": () => (/* binding */ HistoryListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _history_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-list.component.html?ngResource */ 74421);
/* harmony import */ var _history_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-list.component.scss?ngResource */ 68143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/api.service */ 82524);
/* harmony import */ var _filter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @filter/index */ 81698);
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @filter/filter.model */ 41359);
/* harmony import */ var _statement_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @statement/index */ 19204);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/currency/currency.model */ 80457);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services_files_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/files.service */ 17687);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components */ 7667);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals */ 14342);
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../history.service */ 72726);






















const PAGE_START = 1;
const PAGE_SIZE = 25;
const PAGE_SIZE_FOR_SIGN = _history_service__WEBPACK_IMPORTED_MODULE_13__.MAX_PAGE_SIZE_FOR_SIGN;
let HistoryListComponent = class HistoryListComponent {
    constructor(company, filterService, historyService, route, router, datePipe, modalService, filesService, maskedService, statementService, notifierService) {
        this.company = company;
        this.filterService = filterService;
        this.historyService = historyService;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.filesService = filesService;
        this.maskedService = maskedService;
        this.statementService = statementService;
        this.notifierService = notifierService;
        this.filterScheme = {
            periodTo: null,
            periodFrom: null,
        };
        this.filterCurrency = _shared_currency_currency_model__WEBPACK_IMPORTED_MODULE_8__.CURRENCY.KZT;
        this.filterMode = _filter_index__WEBPACK_IMPORTED_MODULE_3__.FILTER_MODE.HISTORY;
        this.modalConfigSmall = {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_sm',
            backdrop: 'static',
            centered: true,
        };
        this.modalConfigMedium = {
            backdropClass: 'backdrop_light',
            windowClass: 'modal_light modal_md',
            backdrop: 'static',
            centered: true,
        };
        this.historyTypes = [
            {
                label: 'HISTORY.ALL',
                url: '/history/all',
            },
            {
                label: 'HISTORY.TENGE_PAYMENTS',
                url: '/history/tenge',
            },
            {
                label: 'HISTORY.CURRENCY_PAYMENTS',
                url: '/history/foreign',
            },
            {
                label: 'HISTORY.CONVERSION',
                url: '/history/conversion',
            },
        ];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
        this.pageNumber = PAGE_START;
        this.pageSize = PAGE_SIZE;
        this.pageSizeForSign = PAGE_SIZE_FOR_SIGN;
        this.hasMorePages = true;
        this.isLoading = true;
        this.isLoadingExtra = true;
        this.isReady = false;
        this.hasSignableSelected = false;
        // Checkboxes
        this.isAllSelected = false;
        this.selectedTransactions = [];
        this.selectedCount = 0;
        this.SESSION_ROUTE_KEY = 'historyRouteQuery';
        this.cashedRouteQuery = JSON.parse(sessionStorage.getItem(this.SESSION_ROUTE_KEY));
        this.canBeNavigatedToForSign = true;
        const routeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([
            this.route.queryParams,
            this.route.data,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1))
            .subscribe(([queryParams, dataParams]) => {
            if (Object.keys(queryParams).length > 0) {
                this.canBeNavigatedToForSign = false;
            }
            this.paymentCategory = dataParams.category;
            if (this.cashedRouteQuery && !queryParams) {
                queryParams = this.cashedRouteQuery;
            }
            this.updateCashedRouteQuery(queryParams);
            const mappedScheme = this.mapQueryParams(queryParams);
            this.filterScheme = mappedScheme;
            this.filterService.updateExtra(this.filterScheme);
        });
        this.subscription.add(routeSubscription);
        const company$ = this.company.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => this.historyService.updateStatusCounts(this.paymentCategory)));
        const filter$ = this.filterService.getScheme();
        const changesSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(filter$, company$)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)((data) => this.init(!Array.isArray(data) ? data : this.filterScheme)))
            .subscribe(() => { });
        const importSubscription = this.filesService.onImport().subscribe(() => {
            this.init(this.filterScheme).toPromise();
            this.historyService.updateStatusCounts(this.paymentCategory);
        });
        const filterStatusesSubscription = this.filterService
            .getStatuses()
            .subscribe((statuses) => {
            const forSign = statuses.find((status) => status.value == _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN);
            if (forSign.count > 0 &&
                forSign.classList.includes('badge-primary') &&
                this.canBeNavigatedToForSign) {
                this.canBeNavigatedToForSign = false;
                const updatedScheme = Object.assign(this.filterScheme, {
                    paymentStatus: _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN,
                });
                this.filterService.updateExtra(updatedScheme);
            }
        });
        this.subscription.add(changesSubscription);
        this.subscription.add(importSubscription);
        this.subscription.add(filterStatusesSubscription);
    }
    init(scheme = this.filterService.getDefaults(this.filterMode)) {
        this.filterScheme = Object.assign({}, scheme);
        this.pageNumber = 1;
        this.hasMorePages = false; // думаю будет лучше если поставим по умолчанию false чтобы он не грузил пока нет response-а
        this.isLoading = true;
        this.updateQueryParams();
        return this.loadStatement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => this.updateSelectable()));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onScroll() {
        if (this.hasMorePages) {
            this.pageNumber++;
            this.loadStatement().toPromise();
        }
    }
    validateTransactionsByPaymentId(transactionIds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield this.historyService.validateTransactionsByPaymentId(this.company.currentId, transactionIds);
                if (response.status !== _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.SUCCESS) {
                    this.showValidationError(response);
                }
                return response.status;
            }
            catch (error) {
                this.showValidationError(error);
                return _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED;
            }
        });
    }
    onSign(transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modalParams = {
                transactionIds: [transaction.id],
                totalBalance: transaction.balance,
                transactionsCount: 1,
            };
            try {
                if (transaction.paymentStatus.code === _shared_models__WEBPACK_IMPORTED_MODULE_7__.PAYMENT_STATUS.DRAFT) {
                    const validationStatus = yield this.validateTransactionsByPaymentId(modalParams.transactionIds);
                    if (validationStatus === _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED) {
                        return;
                    }
                }
                yield this.showSignModal(modalParams);
                this.historyService.updateForSignCount(null, this.paymentCategory);
            }
            catch (error) { }
        });
    }
    onSentForSign(transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.sendToSigned([transaction]);
        });
    }
    onSelect() {
        this.updateSelectable();
    }
    selectAll() {
        this.currentTransactions.forEach((transaction) => {
            transaction.isSelected = this.isAllSelected;
        });
        this.updateSelectable();
        this.isAllSelected = true;
    }
    selectSignable() {
        this.currentTransactions.forEach((transaction) => {
            if (transaction.isSignable) {
                transaction.isSelected = this.hasSignableSelected;
            }
            else {
                transaction.isSelected = false;
            }
        });
        this.updateSelectable();
        this.hasSignableSelected = true;
    }
    get isAllSignable() {
        return (this.currentTransactions.length > 0 &&
            (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN ||
                this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT) &&
            this.hasSignableInList(this.currentTransactions));
    }
    get isAllSendableForSign() {
        return (!this.isAllSignable &&
            this.currentTransactions.length > 0 &&
            this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT &&
            this.hasSendableForSignInList(this.currentTransactions));
    }
    get isSignable() {
        return (this.currentTransactions &&
            (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN ||
                this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT) &&
            this.isAllSignableInList(this.selectedTransactions));
    }
    get isSendableForSign() {
        return (!this.isSignable &&
            this.currentTransactions &&
            this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT &&
            this.isAllSendableForSignInList(this.selectedTransactions));
    }
    get isSelectable() {
        return (this.currentTransactions &&
            (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN ||
                this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT));
    }
    get isSelectableForExport() {
        return (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.SUCCESS ||
            this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FAILED ||
            this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.IN_PROGRESS ||
            this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT);
    }
    get isAllSelectableForExport() {
        return (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.IN_PROGRESS);
    }
    get totalBalance() {
        if (this.selectedCount > 0) {
            return this.selectedBalance;
        }
        else {
            return this.countTotalBalanceFromTransactionsList(this.currentTransactions);
        }
    }
    get totalCount() {
        if (this.selectedCount > 0) {
            return this.selectedCount;
        }
        else {
            return this.currentTransactionsCount;
        }
    }
    get currentTransactionsCount() {
        var _a;
        return ((_a = this.statement) === null || _a === void 0 ? void 0 : _a.totalTransactionsCount) || 0;
    }
    get currentTransactions() {
        var _a, _b;
        const totalTransactions = (_b = (_a = this.statement) === null || _a === void 0 ? void 0 : _a.transactionGroups) === null || _b === void 0 ? void 0 : _b.map((group) => {
            return group.transactions;
        });
        return (totalTransactions === null || totalTransactions === void 0 ? void 0 : totalTransactions.flat()) || [];
    }
    get hasAnySelected() {
        return this.selectedCount > 0;
    }
    get currencies() {
        const currencies = {};
        let transactions = this.selectedCount > 0
            ? this.selectedTransactions
            : this.currentTransactions;
        transactions.forEach((transaction) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if ((_a = transaction.balance) === null || _a === void 0 ? void 0 : _a.currency) {
                if (currencies[(_b = transaction.balance) === null || _b === void 0 ? void 0 : _b.currency]) {
                    currencies[(_c = transaction.balance) === null || _c === void 0 ? void 0 : _c.currency].count++;
                    currencies[(_d = transaction.balance) === null || _d === void 0 ? void 0 : _d.currency].balance.amount +=
                        (_e = transaction.balance) === null || _e === void 0 ? void 0 : _e.amount;
                }
                else {
                    currencies[(_f = transaction.balance) === null || _f === void 0 ? void 0 : _f.currency] = {
                        count: 1,
                        balance: {
                            amount: (_g = transaction.balance) === null || _g === void 0 ? void 0 : _g.amount,
                            currency: (_h = transaction.balance) === null || _h === void 0 ? void 0 : _h.currency,
                        },
                    };
                }
            }
        });
        return Object.values(currencies);
    }
    signAll(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            const filterScheme = {
                paymentStatus: this.filterScheme.paymentStatus,
            };
            const historyPaymentsResult = yield this.historyService.getHistoryList(this.paymentCategory, filterScheme, 1, this.pageSizeForSign // Указано максимально возможное кол-во платежей на подпись, увеличить при необходимости
            );
            const historyPaymentsList = historyPaymentsResult.body;
            const signableList = historyPaymentsList.filter((payment) => {
                return this.historyService.isSignable(payment);
            });
            const modalParams = {
                transactionIds: this.retrieveIdsFromList(signableList),
                totalBalance: this.countTotalBalanceFromPaymentsList(signableList),
                transactionsCount: signableList.length,
            };
            if (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT) {
                const validationStatus = yield this.validateTransactionsByPaymentId(modalParams.transactionIds);
                if (validationStatus === _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED) {
                    return;
                }
            }
            this.showSignModal(modalParams);
        });
    }
    sendAllForSign(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            const filterScheme = {
                paymentStatus: _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT,
            };
            const historyPaymentsResult = yield this.historyService.getHistoryList(this.paymentCategory, filterScheme, 1, this.pageSizeForSign // Указано максимально возможное кол-во платежей на подпись, увеличить при необходимости
            );
            const historyPaymentsList = historyPaymentsResult.body;
            const sendableForSignList = historyPaymentsList.filter((payment) => {
                return this.historyService.isSendableForSign(payment);
            });
            this.sendToSigned(sendableForSignList);
        });
    }
    signSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            const modalParams = {
                transactionIds: this.retrieveIdsFromList(this.selectedTransactions),
                totalBalance: this.countTotalBalanceFromTransactionsList(this.selectedTransactions),
                transactionsCount: this.selectedTransactions.length,
            };
            if (this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.DRAFT) {
                const validationStatus = yield this.validateTransactionsByPaymentId(modalParams.transactionIds);
                if (validationStatus !== _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.SUCCESS) {
                    return;
                }
            }
            this.showSignModal(modalParams);
        });
    }
    sendForSignSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            this.sendToSigned(this.selectedTransactions);
        });
    }
    deleteSelectedTransactions(event = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                event.preventDefault();
            }
            this.deleteTransactions(this.selectedTransactions);
        });
    }
    exportSelectedTransactions(event = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                event.preventDefault();
            }
            const exportedTransactions = yield this.statementService.exportTransactions(this.selectedTransactions);
            const filename = `${this.selectedCount}_operations.pdf`;
            this.filesService.downloadFile(exportedTransactions, filename);
        });
    }
    onDelete(transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            yield this.deleteTransactions([transaction]);
        });
    }
    onRevoke(transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            transaction.isLoading = true;
            try {
                yield this.historyService.revokePayment(this.company.currentId, transaction);
                yield this.init(this.filterScheme).toPromise();
            }
            catch (error) {
                this.notifierService.notify('error', error.description || error.code);
            }
            finally {
                this.historyService.updateForSignCount(null, this.paymentCategory);
                this.historyService.updateStatusCounts(this.paymentCategory);
                this.resetSelectable();
                this.updateSelectable();
            }
        });
    }
    deleteTransactions(transactions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            transactions.forEach((transaction) => {
                transaction.isLoading = true;
            });
            try {
                const deleteResult = yield this.historyService.deleteMultipleTransactions(this.company.currentId, transactions);
                yield this.init(this.filterScheme).toPromise();
                const successCount = deleteResult.length;
                const failedCount = transactions.length - successCount;
                if (successCount === 0) {
                    this.showDeleteError(transactions);
                }
                else if (failedCount === 0) {
                    this.showDeleteSuccess(successCount);
                }
                else {
                    this.showDeletePartial(successCount, failedCount);
                }
            }
            catch (error) {
                this.showDeleteError(transactions);
            }
            finally {
                this.historyService.updateForSignCount(null, this.paymentCategory);
                this.resetSelectable();
                this.updateSelectable();
            }
        });
    }
    sendToSigned(transactions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const sendResult = yield this.historyService.sendMultipleTransactionsForSign(transactions.map((transaction) => transaction.id));
                switch (sendResult.status) {
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.SUCCESS:
                        this.showSendToSignedSuccess(sendResult);
                        yield this.init(this.filterScheme).toPromise();
                        break;
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.PARTLY_SUCCESS:
                        this.showSendToSignedPartial(sendResult);
                        yield this.init(this.filterScheme).toPromise();
                        break;
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED:
                        this.showSendToSignedPartialError(sendResult);
                        break;
                }
            }
            catch (error) {
                console.error(error);
                this.showSendToSignedError(transactions);
            }
            finally {
                this.resetSelectable();
                this.updateSelectable();
                this.historyService.updateForSignCount(null, this.paymentCategory);
            }
        });
    }
    showSignModal(modalParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_shared_components__WEBPACK_IMPORTED_MODULE_11__.ConfirmSmsModalComponent, this.modalConfigMedium);
            Object.assign(modal.componentInstance, {
                additionalParams: {
                    actionIds: modalParams.transactionIds,
                },
            });
            Object.assign(modal.componentInstance, {
                headerParams: {
                    smsHeader: _api_api_service__WEBPACK_IMPORTED_MODULE_2__.SMS_HEADERS.SIGNING_PAYMENT,
                },
            });
            modal.componentInstance.submitted.subscribe((smsToken) => {
                this.signMultipleTransactions(smsToken, modalParams)
                    .then(() => {
                    localStorage.setItem('preferredSignatureType', smsToken.type === _shared_models__WEBPACK_IMPORTED_MODULE_7__.TOKEN_TYPE.OTP
                        ? _shared_components__WEBPACK_IMPORTED_MODULE_11__.CONFIRM_SIGNATURE_TYPE.OTP
                        : _shared_components__WEBPACK_IMPORTED_MODULE_11__.CONFIRM_SIGNATURE_TYPE.SMS);
                })
                    .catch((error) => {
                    const errorText = error.description || error.code;
                    this.showMultipleSignError(errorText, modalParams);
                })
                    .finally(() => {
                    this.historyService.updateForSignCount(null, this.paymentCategory);
                    modal.close();
                });
            });
            modal.componentInstance.sentForRevision.subscribe(() => {
                this.init(this.filterScheme).toPromise();
                modal.close();
            });
        });
    }
    signMultipleTransactions(smsToken, modalParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const signResult = yield this.historyService.signMultipleTransactions(this.company.currentId, smsToken, modalParams.transactionIds);
                switch (signResult.status) {
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.SUCCESS:
                        this.showMultipleSignSuccess(signResult);
                        yield this.init(this.filterScheme).toPromise();
                        break;
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.PARTLY_SUCCESS:
                        this.showMultipleSignPartialSuccess(signResult);
                        yield this.init(this.filterScheme).toPromise();
                        break;
                    case _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED:
                        this.showMultipleSignPartialError(signResult);
                        break;
                }
            }
            catch (error) {
                this.showMultipleSignError(error, modalParams);
            }
            finally {
                this.updateSelectable();
                this.historyService.updateForSignCount(null, this.paymentCategory);
            }
        });
    }
    loadStatement() {
        this.isLoadingExtra = true;
        if (this.pageNumber === PAGE_START) {
            this.statement = null;
        }
        return this.historyService
            .getTransactionGroup(this.paymentCategory, this.filterScheme, this.pageNumber, this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN
            ? this.pageSizeForSign
            : this.pageSize)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)((retrievedTransactionGroup) => {
            this.hasMorePages =
                this.pageSize * this.pageNumber <=
                    retrievedTransactionGroup.transactionsCount;
            this.statement = {
                totalTransactionsCount: retrievedTransactionGroup.transactionsCount,
                transactionGroups: this.filterScheme.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN
                    ? this.destructureForSignGroups(retrievedTransactionGroup)
                    : [retrievedTransactionGroup],
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)((err) => {
            console.log(err);
            this.statement = null;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.throwError)(err);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)(() => {
            this.isReady = true;
            this.isLoading = false;
            this.isLoadingExtra = false;
        }));
    }
    destructureForSignGroups(mergedGroup) {
        const forMeTransactions = mergedGroup.transactions.filter((transaction) => {
            return transaction.isSignable;
        });
        const forOthersTransactions = mergedGroup.transactions.filter((transaction) => {
            return transaction.isSignableByOthers;
        });
        const forMeToSign = {
            title: this.historyService.generateGroupTitle(_filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN),
            creditSum: null,
            debitSum: this.historyService.getTotalAmount(forMeTransactions),
            hasLargeTransactions: this.statementService.checkListForLargeTransactions(forMeTransactions),
            transactionsCount: forMeTransactions.length,
            transactions: forMeTransactions,
        };
        const forOthersToSign = {
            title: this.historyService.generateGroupTitle(_filter_filter_model__WEBPACK_IMPORTED_MODULE_4__.FILTER_PAYMENT_STATUS.FOR_SIGN_OTHERS),
            creditSum: null,
            debitSum: this.historyService.getTotalAmount(forOthersTransactions),
            hasLargeTransactions: this.statementService.checkListForLargeTransactions(forOthersTransactions),
            transactionsCount: forOthersTransactions.length,
            transactions: forOthersTransactions,
        };
        return [forMeToSign, forOthersToSign];
    }
    showValidationError(validationResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.ValidationErrorComponent, this.modalConfigMedium);
            validationResult.results = validationResult.results.map((item) => {
                item.documentNumber = this.getDocumentNumberById(item.itemId);
                return item;
            });
            modal.componentInstance.result = validationResult;
        });
    }
    showMultipleSignPartialSuccess(signResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.MultipleSignPartialSuccessComponent, this.modalConfigMedium);
            signResult.results = signResult.results.map((signItem) => {
                signItem.documentNumber = this.getDocumentNumberById(signItem.itemId);
                return signItem;
            });
            modal.componentInstance.result = signResult;
        });
    }
    showMultipleSignPartialError(signResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.MultipleSignPartialErrorComponent, this.modalConfigMedium);
            signResult.results = signResult.results.map((signItem) => {
                signItem.documentNumber = this.getDocumentNumberById(signItem.itemId);
                return signItem;
            });
            modal.componentInstance.signResult = signResult;
        });
    }
    showMultipleSignSuccess(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.MultipleSignSuccessComponent, this.modalConfigSmall);
            modal.componentInstance.result = result;
        });
    }
    showMultipleSignError(errorText = null, modalParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.MultipleSignErrorComponent, this.modalConfigSmall);
            modal.componentInstance.errorText = errorText;
            try {
                yield modal.result;
                this.showSignModal(modalParams);
            }
            catch (error) { }
        });
    }
    showDeleteSuccess(successCount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.DeleteSuccessComponent, this.modalConfigSmall);
            modal.componentInstance.successCount = successCount;
        });
    }
    showDeletePartial(successCount, failedCount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.DeletePartialComponent, this.modalConfigMedium);
            modal.componentInstance.successCount = successCount;
            modal.componentInstance.failedCount = failedCount;
        });
    }
    showDeleteError(deletingTransactions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.DeleteErrorComponent, this.modalConfigSmall);
            modal.componentInstance.failedCount = deletingTransactions.length;
            try {
                yield modal.result;
                this.deleteTransactions(deletingTransactions);
            }
            catch (error) { }
        });
    }
    showSendToSignedSuccess(signResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.SendToSignedSuccessComponent, this.modalConfigSmall);
            modal.componentInstance.signResult =
                signResult;
            // modal.componentInstance.successCount = successCount;
        });
    }
    showSendToSignedPartial(signResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.SendToSignedPartialComponent, this.modalConfigMedium);
            signResult.results = signResult.results.map((signItem) => {
                signItem.documentNumber = this.getDocumentNumberById(signItem.itemId);
                return signItem;
            });
            modal.componentInstance.signResult =
                signResult;
            // modal.componentInstance.successCount = successCount;
            // modal.componentInstance.failedCount = failedCount;
        });
    }
    showSendToSignedPartialError(signResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.SendToSignedPartialErrorComponent, this.modalConfigMedium);
            signResult.results = signResult.results.map((signItem) => {
                signItem.documentNumber = this.getDocumentNumberById(signItem.itemId);
                return signItem;
            });
            modal.componentInstance.signResult =
                signResult;
            // modal.componentInstance.successCount = successCount;
            // modal.componentInstance.failedCount = failedCount;
        });
    }
    showSendToSignedError(sendingTransactions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_12__.SendToSignedErrorComponent, this.modalConfigSmall);
            modal.componentInstance.signResult = {
                numberOfFailed: sendingTransactions.length,
                numberOfSuccess: 0,
                status: _shared_models__WEBPACK_IMPORTED_MODULE_7__.BULK_OPERATION_STATUS.FAILED,
            };
            try {
                yield modal.result;
                this.sendToSigned(sendingTransactions);
            }
            catch (error) { }
        });
    }
    resetSelectable() {
        this.selectedTransactions = [];
        this.selectedCount = 0;
        this.selectedBalance = {
            amount: 0,
            currency: null,
        };
        this.isAllSelected = false;
        this.hasSignableSelected = false;
    }
    updateSelectable() {
        this.resetSelectable();
        this.updateSelectedValues();
    }
    retrieveIdsFromList(list) {
        return list.map((item) => {
            return item.id;
        });
    }
    updateSelectedValues() {
        this.currentTransactions.forEach((item) => {
            if (item.isSelected) {
                this.selectedTransactions.push(item);
                this.selectedCount++;
            }
        });
        this.selectedBalance = this.countTotalBalanceFromTransactionsList(this.selectedTransactions);
    }
    countTotalBalanceFromPaymentsList(payments) {
        const result = {
            amount: 0,
            currency: null,
        };
        payments.forEach((payment) => {
            var _a, _b;
            if (!result.currency) {
                result.currency = (_a = payment.details.paymentAmount) === null || _a === void 0 ? void 0 : _a.currency;
            }
            result.amount += (_b = payment.details.paymentAmount) === null || _b === void 0 ? void 0 : _b.amount;
        });
        return result;
    }
    countTotalBalanceFromTransactionsList(transactions) {
        const result = {
            amount: 0,
            currency: null,
        };
        transactions.forEach((item) => {
            if (item.debit) {
                if (!result.currency && item.debit.currency) {
                    result.currency = item.debit.currency;
                }
                result.amount += item.debit.amount;
            }
        });
        return result;
    }
    isAllSignableInList(transactions) {
        let result = true;
        transactions.forEach((transaction) => {
            if (result === false) {
                return result;
            }
            if (!transaction.isSignable) {
                result = false;
            }
        });
        return result;
    }
    isAllSendableForSignInList(transactions) {
        let result = true;
        transactions.forEach((transaction) => {
            if (result === false) {
                return result;
            }
            if (!transaction.isSendableForSign) {
                result = false;
            }
        });
        return result;
    }
    hasSignableInList(transactions) {
        return transactions.find((transaction) => {
            return transaction.isSignable;
        })
            ? true
            : false;
    }
    hasSendableForSignInList(transactions) {
        return transactions.find((transaction) => {
            return transaction.isSendableForSign;
        })
            ? true
            : false;
    }
    mapQueryParams(queryParams) {
        let filter = Object.assign({}, this.filterService.getDefaults(this.filterMode));
        for (const key in queryParams) {
            if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
                const param = queryParams[key];
                if (!param) {
                    continue;
                }
                if (key == 'periodFrom' || key == 'periodTo') {
                    filter[key] = new Date(param);
                }
                else {
                    filter[key] = param;
                }
            }
        }
        return filter;
    }
    updateQueryParams() {
        const queryParams = Object.assign({}, this.filterScheme);
        const newFilter = {};
        for (const key in queryParams) {
            if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
                const param = queryParams[key];
                if (param && param != null && param != 'null') {
                    if (key == 'periodFrom' || key == 'periodTo') {
                        newFilter[key] = this.datePipe.transform(param, 'yyyy-MM-dd');
                    }
                    else {
                        newFilter[key] = param;
                    }
                    if (key == 'amountFrom' || key == 'amountTo') {
                        newFilter[key] = this.maskedService.getNumberedAmount(param);
                    }
                }
            }
        }
        this.updateCashedRouteQuery(newFilter);
        this.router.navigate([], {
            queryParams: newFilter,
            relativeTo: this.route,
            skipLocationChange: false,
        });
    }
    updateCashedRouteQuery(queryParams) {
        sessionStorage.setItem(this.SESSION_ROUTE_KEY, JSON.stringify(queryParams));
    }
    getDocumentNumberById(transactionId) {
        const found = this.currentTransactions.find((transaction) => {
            return transaction.id == transactionId;
        });
        return (found && found.documentNumber) || null;
    }
};
HistoryListComponent.ctorParameters = () => [
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_6__.CompanyService },
    { type: _filter_index__WEBPACK_IMPORTED_MODULE_3__.FilterService },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_13__.HistoryService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal },
    { type: _shared_services_files_service__WEBPACK_IMPORTED_MODULE_10__.FilesService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_9__.MaskedService },
    { type: _statement_index__WEBPACK_IMPORTED_MODULE_5__.StatementService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_27__.NotifierService }
];
HistoryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
        selector: 'j-history-list',
        template: _history_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_history_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryListComponent);



/***/ }),

/***/ 35010:
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryRoutingModule": () => (/* binding */ HistoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component */ 23656);
/* harmony import */ var _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-list/history-list.component */ 8402);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);






const routes = [
    {
        path: '',
        component: _history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent,
        data: {
            title: 'HISTORY.TITLE',
        },
        children: [
            {
                path: 'all',
                component: _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_1__.HistoryListComponent,
                data: {
                    category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.ALL,
                },
            },
            {
                path: 'tenge',
                component: _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_1__.HistoryListComponent,
                data: {
                    category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.DOMESTIC,
                },
            },
            {
                path: 'foreign',
                component: _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_1__.HistoryListComponent,
                data: {
                    category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.FOREIGN,
                },
            },
            {
                path: 'conversion',
                component: _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_1__.HistoryListComponent,
                data: {
                    category: _shared_models__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_CATEGORY.CONVERSION,
                },
            },
            {
                path: '**',
                redirectTo: 'all',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let HistoryRoutingModule = class HistoryRoutingModule {
};
HistoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], HistoryRoutingModule);



/***/ }),

/***/ 23656:
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component.html?ngResource */ 40772);
/* harmony import */ var _history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.component.scss?ngResource */ 26777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryComponent.ctorParameters = () => [];
HistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-history',
        template: _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryComponent);



/***/ }),

/***/ 92486:
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryModule": () => (/* binding */ HistoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-infinite-scroll */ 64503);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _statement_statement_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @statement/statement.module */ 48925);
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @filter/filter.module */ 67655);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ 14342);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ 35010);
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component */ 23656);
/* harmony import */ var _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history-list/history-list.component */ 8402);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 15034);














let HistoryModule = class HistoryModule {
};
HistoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_history_component__WEBPACK_IMPORTED_MODULE_6__.HistoryComponent, _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_7__.HistoryListComponent, _modals__WEBPACK_IMPORTED_MODULE_4__.HISTORY_MODALS],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__.FilterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _statement_statement_module__WEBPACK_IMPORTED_MODULE_2__.StatementModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__.HistoryRoutingModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__.InfiniteScrollModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
        ],
    })
], HistoryModule);



/***/ }),

/***/ 72726:
/*!********************************************!*\
  !*** ./src/app/history/history.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_PAGE_SIZE_FOR_SIGN": () => (/* binding */ MAX_PAGE_SIZE_FOR_SIGN),
/* harmony export */   "HistoryService": () => (/* binding */ HistoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @filter/filter.model */ 41359);
/* harmony import */ var _statement_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @statement/index */ 19204);
/* harmony import */ var _statement_statement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @statement/statement.service */ 78232);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _filter_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @filter/filter.service */ 67515);
/* harmony import */ var _feature_flags_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @feature-flags/index */ 15057);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes */ 39843);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 86942);

















const MAX_PAGE_SIZE_FOR_SIGN = 100000;
let HistoryService = class HistoryService {
    constructor(statementService, companyService, api, translateService, filterService, maskedService, curSymbolPipe, featureFlagsService) {
        this.statementService = statementService;
        this.companyService = companyService;
        this.api = api;
        this.translateService = translateService;
        this.filterService = filterService;
        this.maskedService = maskedService;
        this.curSymbolPipe = curSymbolPipe;
        this.featureFlagsService = featureFlagsService;
    }
    getTransactionGroup(category = _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.DOMESTIC, filter, pageNumber = 1, pageSize = 50) {
        if (
        // предлагаю кеширование на уровне interceptor-a делать
        this.cashedCategory === category &&
            this.cashedTransactionGroup &&
            this.cashedFilter === filter &&
            this.cashedPageNumber === pageNumber &&
            this.cashedPageSize === pageSize) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.cashedTransactionGroup);
        }
        const isNextPage = this.cashedFilter === filter && pageNumber > this.cashedPageNumber;
        return this.getHistoryListObservable(category, filter, pageNumber, pageSize).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((historyPaymentsResult) => {
            this.cashedCategory = category;
            this.cashedFilter = filter;
            this.cashedPageNumber = pageNumber;
            this.cashedPageSize = pageSize;
            const historyPaymentsList = historyPaymentsResult.body;
            const mappedTransactions = this.mapHistoryPayments(historyPaymentsList);
            let mergedTransactions = isNextPage
                ? this.cashedTransactionGroup.transactions.concat(mappedTransactions)
                : mappedTransactions;
            if (filter.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FOR_SIGN) {
                mergedTransactions = mergedTransactions.sort(this.compareBySignature);
                mergedTransactions = mergedTransactions.sort(this.compareByDate);
            }
            if (filter.paymentStatus === _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FAILED) {
                this.markFailedAsRead();
            }
            this.cashedTransactionGroup = {
                title: this.generateGroupTitle(filter.paymentStatus),
                creditSum: null,
                debitSum: this.getTotalAmount(mergedTransactions),
                hasLargeTransactions: this.statementService.checkListForLargeTransactions(mergedTransactions),
                transactionsCount: mergedTransactions.length,
                transactions: mergedTransactions,
            };
            return this.cashedTransactionGroup;
        }));
    }
    getHistoryList(category, filter, pageNumber = 1, pageSize = 50) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${this.companyService.currentId}/payments`;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
            params = this.appendCategoryParams(category, params);
            params = params.append('page', `${pageNumber}`);
            params = params.append('pageSize', `${pageSize}`);
            params = this.appendFilterParams(filter, params);
            return this.api.get(url, headers, params, {
                observe: 'response',
            });
        });
    }
    getHistoryListObservable(category, filter, pageNumber = 1, pageSize = 50) {
        const url = `/companies/${this.companyService.currentId}/payments`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
        params = this.appendCategoryParams(category, params);
        params = params.append('page', `${pageNumber}`);
        params = params.append('pageSize', `${pageSize}`);
        params = this.appendFilterParams(filter, params);
        const extras = {
            observe: 'response',
        };
        return this.api.getObservable(url, headers, params, extras);
    }
    sendMultipleTransactionsForSign(transactionIds) {
        const url = `companies/${this.companyService.currentId}/payments:to-created`;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
        transactionIds.forEach((id) => {
            params = params.append('paymentId', id);
        });
        return this.api.patch(url, null, null, params);
    }
    validateTransactionsByPaymentId(companyId, transactionIds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${companyId}/payments/signatures/validate`;
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
            transactionIds.forEach((id) => {
                params = params.append('paymentId', id);
            });
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            return this.api.post(url, params, headers);
        });
    }
    signMultipleTransactions(companyId, smsToken, transactionIds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${companyId}/payments/signatures`;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            if (smsToken.type === _shared_models__WEBPACK_IMPORTED_MODULE_10__.TOKEN_TYPE.OTP) {
                headers = headers.set(_api_index__WEBPACK_IMPORTED_MODULE_0__.HEADERS.OTP, smsToken.signature);
            }
            else {
                headers = headers.set(_api_index__WEBPACK_IMPORTED_MODULE_0__.HEADERS.PHONE, smsToken.signature);
            }
            const body = { itemIds: transactionIds };
            return this.api.post(url, body, headers);
        });
    }
    deleteTransaction(companyId, transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${companyId}/payments`;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams().set('id', transaction.id);
            return this.api.delete(url, headers, params);
        });
    }
    revokePayment(companyId, transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${companyId}/payments/${transaction.paymentId}:to-revoked`;
            return this.api.patch(url);
        });
    }
    deleteMultipleTransactions(companyId, transactions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${companyId}/payments`;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
            transactions.forEach((transaction) => {
                params = params.append('id', transaction.id);
            });
            return this.api.delete(url, headers, params);
        });
    }
    isRemovable(payment) {
        return (payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED ||
            payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT);
    }
    isEditable(payment) {
        if (payment.type === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.CONVERSION &&
            payment.status.code !== _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED) {
            return false;
        }
        return (payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT ||
            payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED);
    }
    isRevokable(payment) {
        return payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.READY_TO_SEND;
    }
    getSignsCountText(transaction) {
        const signed = (transaction.signatures && transaction.signatures.length) || 0;
        const total = this.companyService.isMultipleSignScheme(transaction.signatureScheme)
            ? 2
            : 1;
        return `${signed}/${total}`;
    }
    appendCategoryParams(category, params) {
        switch (category) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.ALL:
                params = params.append('category', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.DOMESTIC);
                params = params.append('category', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.FOREIGN);
                params = params.append('category', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.CONVERSION);
                break;
            default:
                params = params.append('category', category);
                break;
        }
        return params;
    }
    appendFilterParams(filter, params) {
        params = this.appendStatusToParams(filter.paymentStatus, params);
        if (filter.documentNumber) {
            params = params.append('documentNumber', filter.documentNumber);
        }
        if (filter.periodFrom) {
            params = params.append('dateFrom', (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.convertDateToApiFormat)(filter.periodFrom));
        }
        if (filter.periodTo) {
            params = params.append('dateTo', (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.convertDateToApiFormat)(filter.periodTo));
        }
        if (filter.amountFrom) {
            params = params.append('amountFrom', `${filter.amountFrom}`);
        }
        if (filter.amountTo) {
            params = params.append('amountTo', `${filter.amountTo}`);
        }
        if (filter.recipientIban) {
            params = params.append('correspondentAccount', filter.recipientIban);
        }
        if (filter.recipientBin) {
            params = params.append('correspondentBin', filter.recipientBin);
        }
        if (filter.type) {
            params = params.append('type', filter.type);
        }
        switch (filter.sortBy) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_SORT.AMOUNT_ASC:
                params = params.append('sortBy', 'AMOUNT');
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_SORT.AMOUNT_DESC:
                params = params.append('sortBy', '-AMOUNT');
                break;
        }
        return params;
    }
    appendStatusToParams(filterStatus, params) {
        switch (filterStatus) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.ALL:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.REJECTED);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_COMPLETED);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_PROCESSING);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_SENT);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.READY_TO_SEND);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.IN_BANK);
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.DRAFT:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT);
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FOR_SIGN:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED);
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FAILED:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.REJECTED);
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.SUCCESS:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_COMPLETED);
                break;
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.IN_PROGRESS:
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_PROCESSING);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_SENT);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.READY_TO_SEND);
                params = params.append('status', _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.IN_BANK);
                break;
        }
        return params;
    }
    compareByDate(a, b) {
        if (a.paymentStatus.timestamp < b.paymentStatus.timestamp) {
            return 1;
        }
        if (a.paymentStatus.timestamp > b.paymentStatus.timestamp) {
            return -1;
        }
        return 0;
    }
    updateForSignCount(payments = null, paymentCategory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.filterService.updateForSignCount(null);
            if (!payments) {
                const result = yield this.retrivePaymentsByStatus(_filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FOR_SIGN, paymentCategory);
                payments = result.payments;
            }
            let forSignMeCount = 0;
            let forSignOthersCount = 0;
            payments === null || payments === void 0 ? void 0 : payments.forEach((payment) => {
                var _a;
                if (this.companyService.isSignable(payment.status.code, payment.signatureScheme, this.companyService.currentAuthority.authority, (_a = payment.signatures) === null || _a === void 0 ? void 0 : _a.length)) {
                    forSignMeCount++;
                }
                else {
                    forSignOthersCount++;
                }
            });
            if (forSignMeCount == 0 && forSignOthersCount == 0) {
                this.filterService.updateForSignCount(0);
            }
            else if (forSignMeCount > 0) {
                this.filterService.updateForSignCount(forSignMeCount, true);
            }
            else {
                this.filterService.updateForSignCount(forSignOthersCount);
            }
        });
    }
    retrivePaymentsByStatus(paymentStatus, paymentCategory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let retrievedCount = 0;
            let payments = null;
            const url = `companies/${this.companyService.currentId}/payments`;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
            params = this.appendStatusToParams(paymentStatus, params);
            params = this.appendCategoryParams(paymentCategory, params);
            params = params.append('pageSize', `${MAX_PAGE_SIZE_FOR_SIGN}`);
            try {
                const historyPaymentsResult = yield this.api.get(url, headers, params, {
                    observe: 'response',
                });
                payments = historyPaymentsResult.body;
                retrievedCount = +historyPaymentsResult.headers.get('X-Total-Count');
            }
            catch (error) {
            }
            finally {
                return {
                    payments: payments,
                    count: retrievedCount,
                };
            }
        });
    }
    updateStatusCounts(paymentCategory) {
        this.updateForSignCount(null, paymentCategory);
        this.updateCountsByBadges(paymentCategory);
    }
    isSignable(payment) {
        var _a;
        const hasSignRights = this.companyService.isSignable(payment.status.code, payment.signatureScheme, this.companyService.currentAuthority.authority, (_a = payment.signatures) === null || _a === void 0 ? void 0 : _a.length);
        if (payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT) {
            return hasSignRights && this.isCorrectlyFullfilled(payment);
        }
        return hasSignRights;
    }
    isSignableByOthers(payment) {
        var _a;
        return this.companyService.isSignableByOthers(payment.status.code, payment.signatureScheme, this.companyService.currentAuthority.authority, (_a = payment.signatures) === null || _a === void 0 ? void 0 : _a.length);
    }
    isSendableForSign(payment) {
        const isSignableByOthers = this.isSignableByOthers(payment);
        const isSendableForSign = this.companyService.isSendableForSign(payment.status.code, payment.signatureScheme, this.companyService.currentAuthority.authority);
        return !isSignableByOthers && isSendableForSign;
    }
    isCorrectlyFullfilled(payment) {
        // TODO: [JSN-1755] Make this check)
        return true;
    }
    markFailedAsRead() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const url = `companies/${this.companyService.currentId}/payments/badges:mark-read-rejected`;
            try {
                yield this.api.put(url);
            }
            catch (error) {
            }
            finally {
                this.filterService.updateFailedCount(0);
            }
        });
    }
    updateCountsByBadges(paymentCategory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.filterService.updateInProgressCount(null);
            this.filterService.updateFailedCount(null);
            let inProgressCount = 0;
            let failedCount = 0;
            const url = `companies/${this.companyService.currentId}/payments/badges`;
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpParams();
            params = this.appendCategoryParams(paymentCategory, params);
            try {
                const badges = yield this.api.get(url, null, params);
                badges.forEach((badge) => {
                    switch (badge.statusCode) {
                        case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.READY_TO_SEND:
                        case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.IN_BANK:
                        case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_PROCESSING:
                        case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.BANK_SENT:
                            inProgressCount += badge.count;
                            break;
                        case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.REJECTED:
                            failedCount += badge.count;
                            break;
                    }
                });
            }
            catch (error) {
            }
            finally {
                this.filterService.updateInProgressCount(inProgressCount);
                this.filterService.updateFailedCount(failedCount);
            }
        });
    }
    getTotalAmount(transactions) {
        let total = 0;
        let currency = null;
        transactions.forEach((item) => {
            if (item.balance) {
                if (item.balance.currency && !currency) {
                    currency = item.balance.currency;
                }
                total += item.balance.amount;
            }
        });
        return {
            currency: currency,
            amount: total,
        };
    }
    mapDescription(payment) {
        var _a, _b, _c, _d, _e, _f, _g;
        switch (payment.type) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.CONVERSION:
                const amount = this.maskedService.getMaskedAmount((_a = payment.details.exchangeRate) === null || _a === void 0 ? void 0 : _a.calculatedSum);
                const currency = this.curSymbolPipe.transform((_b = payment.details.exchangeRate) === null || _b === void 0 ? void 0 : _b.currencyTo);
                let mainDescription;
                if (amount && currency) {
                    mainDescription = this.translateService.instant('CONVERSION.DESCRIPTION', {
                        money: `${amount} ${currency}`,
                        iban: payment.paymentRecipient.recipientAccount.iban,
                    });
                }
                else {
                    mainDescription = ((_c = payment.details) === null || _c === void 0 ? void 0 : _c.description) || null;
                }
                if (mainDescription) {
                    return `${mainDescription} ${((_d = payment.details.conversionPurpose) === null || _d === void 0 ? void 0 : _d.description) || ''}`;
                }
                else if ((_e = payment.details.conversionPurpose) === null || _e === void 0 ? void 0 : _e.description) {
                    return `${(_f = payment.details.conversionPurpose) === null || _f === void 0 ? void 0 : _f.description}`;
                }
                return null;
            default:
                return ((_g = payment.details) === null || _g === void 0 ? void 0 : _g.description) || null;
        }
    }
    mapHistoryPayments(payments) {
        return payments.map((payment, index) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
            const transaction = {
                id: payment.id || null,
                iban: ((_a = payment.details) === null || _a === void 0 ? void 0 : _a.payerIban) || null,
                reference: payment.id || null,
                documentNumber: ((_b = payment.details) === null || _b === void 0 ? void 0 : _b.documentId) || null,
                correspondentBankBic: ((_d = (_c = payment.paymentRecipient) === null || _c === void 0 ? void 0 : _c.recipientAccount) === null || _d === void 0 ? void 0 : _d.bic) || null,
                correspondentAccount: ((_f = (_e = payment.paymentRecipient) === null || _e === void 0 ? void 0 : _e.recipientAccount) === null || _f === void 0 ? void 0 : _f.iban) || null,
                correspondentName: ((_g = payment.paymentRecipient) === null || _g === void 0 ? void 0 : _g.name) || null,
                kbe: ((_h = payment.paymentRecipient) === null || _h === void 0 ? void 0 : _h.kbe) || null,
                correspondentBin: ((_j = payment.paymentRecipient) === null || _j === void 0 ? void 0 : _j.iinOrBin) || null,
                debit: ((_k = payment.details) === null || _k === void 0 ? void 0 : _k.paymentAmount) || null,
                credit: null,
                description: this.mapDescription(payment),
                documentDate: ((_l = payment.details) === null || _l === void 0 ? void 0 : _l.issueDate) || null,
                valueDate: ((_m = payment.details) === null || _m === void 0 ? void 0 : _m.valueDate) || null,
                knp: ((_o = payment.details) === null || _o === void 0 ? void 0 : _o.knp) || null,
                kbk: ((_p = payment.details) === null || _p === void 0 ? void 0 : _p.kbk) || null,
                signHead: null,
                signBuch: null,
                isPayment: true,
                paymentId: payment.id,
                paymentStatus: payment.status || null,
                paymentType: payment.type || null,
                paymentEmployees: payment.paymentEmployees,
                createDate: ((_q = payment.details) === null || _q === void 0 ? void 0 : _q.createDate) || null,
                foreignPaymentDetails: payment.details.foreignPaymentDetails || null,
                foreignRecipient: {
                    country: (_r = payment.paymentRecipient) === null || _r === void 0 ? void 0 : _r.country,
                    countryCode: (_s = payment.paymentRecipient) === null || _s === void 0 ? void 0 : _s.countryCode,
                    cityName: (_t = payment.paymentRecipient) === null || _t === void 0 ? void 0 : _t.cityName,
                    bic: (_v = (_u = payment.paymentRecipient) === null || _u === void 0 ? void 0 : _u.recipientAccount) === null || _v === void 0 ? void 0 : _v.bic,
                    bankName: (_x = (_w = payment.paymentRecipient) === null || _w === void 0 ? void 0 : _w.recipientAccount) === null || _x === void 0 ? void 0 : _x.bankName,
                },
                emailOnSuccess: payment.emailOnSuccess || null,
                signatureScheme: payment.signatureScheme || null,
                signatures: payment.signatures || [],
            };
            const newTransaction = new _statement_index__WEBPACK_IMPORTED_MODULE_2__.Transaction(transaction, this.translateService);
            if (this.isFeatureDisabled(payment.type)) {
                newTransaction.isExportable = false;
                newTransaction.isRepeatable = false;
                newTransaction.isEditable = false;
                newTransaction.isRemovable = false;
                newTransaction.isSignable = false;
                newTransaction.isSendableForSign = false;
                newTransaction.isRevokable = false;
            }
            else {
                newTransaction.isExportable = this.isExportable(payment);
                newTransaction.isRepeatable = this.isRepeatable(payment);
                newTransaction.isEditable = this.isEditable(payment);
                newTransaction.isRemovable = this.isRemovable(payment);
                newTransaction.isSignable = this.isSignable(payment);
                newTransaction.isSendableForSign = this.isSendableForSign(payment);
                newTransaction.isRevokable = this.isRevokable(payment);
            }
            newTransaction.associatedField =
                (_z = (_y = payment.details) === null || _y === void 0 ? void 0 : _y.associatedField) === null || _z === void 0 ? void 0 : _z.parameters;
            newTransaction.isSignableByOthers = this.isSignableByOthers(payment);
            newTransaction.signsCountText = this.getSignsCountText(newTransaction);
            return newTransaction;
        });
    }
    isFeatureDisabled(paymentType) {
        const isTypeConversionAndDisabled = paymentType == _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.CONVERSION &&
            this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_7__.FEATURE_FLAG.CONVERSION);
        const isTypeForeignAndDisabled = paymentType == _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_TYPE.FOREIGN &&
            this.featureFlagsService.isDisabled(_feature_flags_index__WEBPACK_IMPORTED_MODULE_7__.FEATURE_FLAG.FOREIGN_PAYMENT);
        return isTypeConversionAndDisabled || isTypeForeignAndDisabled || false;
    }
    isRepeatable(payment) {
        if ((payment.status.state == _shared_models__WEBPACK_IMPORTED_MODULE_10__.HISTORY_PAYMENT_STATE.MIGRATED &&
            payment.category === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.CONVERSION) ||
            payment.status.code == _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.DRAFT) {
            return false;
        }
        else {
            return true;
        }
    }
    isExportable(payment) {
        if ((payment.status.state === _shared_models__WEBPACK_IMPORTED_MODULE_10__.HISTORY_PAYMENT_STATE.MIGRATED &&
            payment.category === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_CATEGORY.CONVERSION) ||
            payment.status.code === _shared_models__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STATUS.CREATED) {
            return false;
        }
        else {
            return true;
        }
    }
    generateGroupTitle(filterStatus) {
        switch (filterStatus) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.ALL:
                return 'HISTORY.LISTS.ALL';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FOR_SIGN:
                return 'HISTORY.LISTS.FOR_SIGN';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FOR_SIGN_OTHERS:
                return 'HISTORY.LISTS.FOR_SIGN_OTHERS';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.SUCCESS:
                return 'HISTORY.LISTS.SUCCESS';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.FAILED:
                return 'HISTORY.LISTS.FAILED';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.IN_PROGRESS:
                return 'HISTORY.LISTS.IN_PROGRESS';
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__.FILTER_PAYMENT_STATUS.DRAFT:
                return 'HISTORY.LISTS.DRAFT';
        }
    }
    compareBySignature(a, b) {
        if (a.isSignable && b.isSignable) {
            return 0;
        }
        else if (a.isSignable && b.isSignableByOthers) {
            return -1;
        }
        else {
            return 1;
        }
    }
};
HistoryService.ctorParameters = () => [
    { type: _statement_statement_service__WEBPACK_IMPORTED_MODULE_3__.StatementService },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService },
    { type: _api_index__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService },
    { type: _filter_filter_service__WEBPACK_IMPORTED_MODULE_6__.FilterService },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_8__.MaskedService },
    { type: _shared_pipes__WEBPACK_IMPORTED_MODULE_9__.CurSymbolPipe },
    { type: _feature_flags_index__WEBPACK_IMPORTED_MODULE_7__.FeatureFlagsService }
];
HistoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable)({
        providedIn: 'root',
    })
], HistoryService);



/***/ }),

/***/ 1205:
/*!***********************************************************************!*\
  !*** ./src/app/history/modals/delete-error/delete-error.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteErrorComponent": () => (/* binding */ DeleteErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-error.component.html?ngResource */ 50972);
/* harmony import */ var _delete_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-error.component.scss?ngResource */ 49112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete-partial/delete-partial.component */ 55450);






let DeleteErrorComponent = class DeleteErrorComponent extends _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_2__.DeletePartialComponent {
    constructor(modal) {
        super(modal);
        this.modal = modal;
    }
};
DeleteErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
DeleteErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-delete-error',
        template: _delete_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteErrorComponent);



/***/ }),

/***/ 55450:
/*!***************************************************************************!*\
  !*** ./src/app/history/modals/delete-partial/delete-partial.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletePartialComponent": () => (/* binding */ DeletePartialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_partial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-partial.component.html?ngResource */ 21868);
/* harmony import */ var _delete_partial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-partial.component.scss?ngResource */ 74652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let DeletePartialComponent = class DeletePartialComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    get failedText() {
        switch (this.failedCount % 20) {
            case 1:
                return 'HISTORY.DELETE.FAILED.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.DELETE.FAILED.FEW';
            default:
                return 'HISTORY.DELETE.FAILED.OTHER';
        }
    }
    get failedParams() {
        return {
            transactionsCount: this.failedCount,
        };
    }
    get successText() {
        switch (this.successCount % 10) {
            case 1:
                return 'HISTORY.DELETE.SUCCESS.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.DELETE.SUCCESS.FEW';
            default:
                return 'HISTORY.DELETE.SUCCESS.OTHER';
        }
    }
    get successParams() {
        return {
            transactionsCount: this.successCount,
        };
    }
};
DeletePartialComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
DeletePartialComponent.propDecorators = {
    failedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    successCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
DeletePartialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-delete-partial',
        template: _delete_partial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_partial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeletePartialComponent);



/***/ }),

/***/ 9034:
/*!***************************************************************************!*\
  !*** ./src/app/history/modals/delete-success/delete-success.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteSuccessComponent": () => (/* binding */ DeleteSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-success.component.html?ngResource */ 70166);
/* harmony import */ var _delete_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-success.component.scss?ngResource */ 11750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete-partial/delete-partial.component */ 55450);






let DeleteSuccessComponent = class DeleteSuccessComponent extends _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_2__.DeletePartialComponent {
    constructor(modal) {
        super(modal);
        this.modal = modal;
    }
};
DeleteSuccessComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
DeleteSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-delete-success',
        template: _delete_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteSuccessComponent);



/***/ }),

/***/ 14342:
/*!*****************************************!*\
  !*** ./src/app/history/modals/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HISTORY_MODALS": () => (/* binding */ HISTORY_MODALS),
/* harmony export */   "DeleteErrorComponent": () => (/* reexport safe */ _delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_1__.DeleteErrorComponent),
/* harmony export */   "DeletePartialComponent": () => (/* reexport safe */ _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_0__.DeletePartialComponent),
/* harmony export */   "DeleteSuccessComponent": () => (/* reexport safe */ _delete_success_delete_success_component__WEBPACK_IMPORTED_MODULE_2__.DeleteSuccessComponent),
/* harmony export */   "MultipleSignErrorComponent": () => (/* reexport safe */ _multiple_sign_error_multiple_sign_error_component__WEBPACK_IMPORTED_MODULE_5__.MultipleSignErrorComponent),
/* harmony export */   "MultipleSignSuccessComponent": () => (/* reexport safe */ _multiple_sign_success_multiple_sign_success_component__WEBPACK_IMPORTED_MODULE_6__.MultipleSignSuccessComponent),
/* harmony export */   "MultipleSignPartialErrorComponent": () => (/* reexport safe */ _multiple_sign_partial_error_multiple_sign_partial_error_component__WEBPACK_IMPORTED_MODULE_3__.MultipleSignPartialErrorComponent),
/* harmony export */   "MultipleSignPartialSuccessComponent": () => (/* reexport safe */ _multiple_sign_partial_success_multiple_sign_partial_success_component__WEBPACK_IMPORTED_MODULE_4__.MultipleSignPartialSuccessComponent),
/* harmony export */   "SendToSignedSuccessComponent": () => (/* reexport safe */ _send_to_signed_success_send_to_signed_success_component__WEBPACK_IMPORTED_MODULE_7__.SendToSignedSuccessComponent),
/* harmony export */   "SendToSignedErrorComponent": () => (/* reexport safe */ _send_to_signed_error_send_to_signed_error_component__WEBPACK_IMPORTED_MODULE_8__.SendToSignedErrorComponent),
/* harmony export */   "SendToSignedPartialComponent": () => (/* reexport safe */ _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_9__.SendToSignedPartialComponent),
/* harmony export */   "SendToSignedPartialErrorComponent": () => (/* reexport safe */ _send_to_signed_partial_error_send_to_signed_partial_error_component__WEBPACK_IMPORTED_MODULE_10__.SendToSignedPartialErrorComponent),
/* harmony export */   "ValidationErrorComponent": () => (/* reexport safe */ _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__.ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-partial/delete-partial.component */ 55450);
/* harmony import */ var _delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-error/delete-error.component */ 1205);
/* harmony import */ var _delete_success_delete_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-success/delete-success.component */ 9034);
/* harmony import */ var _multiple_sign_partial_error_multiple_sign_partial_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiple-sign-partial-error/multiple-sign-partial-error.component */ 21576);
/* harmony import */ var _multiple_sign_partial_success_multiple_sign_partial_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple-sign-partial-success/multiple-sign-partial-success.component */ 33439);
/* harmony import */ var _multiple_sign_error_multiple_sign_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiple-sign-error/multiple-sign-error.component */ 44590);
/* harmony import */ var _multiple_sign_success_multiple_sign_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multiple-sign-success/multiple-sign-success.component */ 9031);
/* harmony import */ var _send_to_signed_success_send_to_signed_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-to-signed-success/send-to-signed-success.component */ 75847);
/* harmony import */ var _send_to_signed_error_send_to_signed_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-to-signed-error/send-to-signed-error.component */ 41867);
/* harmony import */ var _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-to-signed-partial/send-to-signed-partial.component */ 48120);
/* harmony import */ var _send_to_signed_partial_error_send_to_signed_partial_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./send-to-signed-partial-error/send-to-signed-partial-error.component */ 79135);
/* harmony import */ var _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validation-error/validation-error.component */ 51913);












const HISTORY_MODALS = [
    _delete_success_delete_success_component__WEBPACK_IMPORTED_MODULE_2__.DeleteSuccessComponent,
    _delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_1__.DeleteErrorComponent,
    _delete_partial_delete_partial_component__WEBPACK_IMPORTED_MODULE_0__.DeletePartialComponent,
    _multiple_sign_success_multiple_sign_success_component__WEBPACK_IMPORTED_MODULE_6__.MultipleSignSuccessComponent,
    _multiple_sign_error_multiple_sign_error_component__WEBPACK_IMPORTED_MODULE_5__.MultipleSignErrorComponent,
    _multiple_sign_partial_success_multiple_sign_partial_success_component__WEBPACK_IMPORTED_MODULE_4__.MultipleSignPartialSuccessComponent,
    _multiple_sign_partial_error_multiple_sign_partial_error_component__WEBPACK_IMPORTED_MODULE_3__.MultipleSignPartialErrorComponent,
    _send_to_signed_success_send_to_signed_success_component__WEBPACK_IMPORTED_MODULE_7__.SendToSignedSuccessComponent,
    _send_to_signed_error_send_to_signed_error_component__WEBPACK_IMPORTED_MODULE_8__.SendToSignedErrorComponent,
    _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_9__.SendToSignedPartialComponent,
    _send_to_signed_partial_error_send_to_signed_partial_error_component__WEBPACK_IMPORTED_MODULE_10__.SendToSignedPartialErrorComponent,
    _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__.ValidationErrorComponent,
];














/***/ }),

/***/ 44590:
/*!*************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-error/multiple-sign-error.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSignErrorComponent": () => (/* binding */ MultipleSignErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_sign_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-sign-error.component.html?ngResource */ 91120);
/* harmony import */ var _multiple_sign_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-sign-error.component.scss?ngResource */ 95163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let MultipleSignErrorComponent = class MultipleSignErrorComponent {
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
MultipleSignErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
MultipleSignErrorComponent.propDecorators = {
    errorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MultipleSignErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-multiple-sign-error',
        template: _multiple_sign_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiple_sign_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleSignErrorComponent);



/***/ }),

/***/ 21576:
/*!*****************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-error/multiple-sign-partial-error.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSignPartialErrorComponent": () => (/* binding */ MultipleSignPartialErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_sign_partial_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-sign-partial-error.component.html?ngResource */ 45021);
/* harmony import */ var _multiple_sign_partial_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-sign-partial-error.component.scss?ngResource */ 72398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let MultipleSignPartialErrorComponent = class MultipleSignPartialErrorComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    retrieveErrors(transaction) {
        let mappedErrors;
        if (transaction.errorData) {
            const errors = Object.entries(transaction.errorData);
            mappedErrors = errors.map((item) => {
                return item[1];
            });
        }
        else if (transaction.errorMsg) {
            mappedErrors = [transaction.errorMsg];
        }
        else {
            mappedErrors = [];
        }
        return mappedErrors;
    }
    get failedText() {
        switch (this.signResult && this.signResult.numberOfFailed % 20) {
            case 1:
                return 'HISTORY.PARTIAL.FAILED.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.PARTIAL.FAILED.FEW';
            default:
                return 'HISTORY.PARTIAL.FAILED.OTHER';
        }
    }
    get failedParams() {
        return {
            transactionsCount: this.signResult && this.signResult.numberOfFailed,
        };
    }
    get failedTransactions() {
        var _a;
        return (_a = this.signResult) === null || _a === void 0 ? void 0 : _a.results;
    }
};
MultipleSignPartialErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
MultipleSignPartialErrorComponent.propDecorators = {
    signResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MultipleSignPartialErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-multiple-sign-partial-error',
        template: _multiple_sign_partial_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiple_sign_partial_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleSignPartialErrorComponent);



/***/ }),

/***/ 33439:
/*!*********************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-success/multiple-sign-partial-success.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSignPartialSuccessComponent": () => (/* binding */ MultipleSignPartialSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_sign_partial_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-sign-partial-success.component.html?ngResource */ 11182);
/* harmony import */ var _multiple_sign_partial_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-sign-partial-success.component.scss?ngResource */ 78060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);






let MultipleSignPartialSuccessComponent = class MultipleSignPartialSuccessComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
        this.generateGroups();
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    retrieveErrors(transaction) {
        let mappedErrors;
        if (transaction.errorData) {
            const errors = Object.entries(transaction.errorData);
            mappedErrors = errors.map((item) => {
                return item[1];
            });
        }
        else if (transaction.errorMsg) {
            mappedErrors = [transaction.errorMsg];
        }
        else {
            mappedErrors = [];
        }
        return mappedErrors;
    }
    get successText() {
        switch (this.result && this.result.numberOfSuccess % 10) {
            case 1:
                return 'HISTORY.PARTIAL.SUCCESS.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.PARTIAL.SUCCESS.FEW';
            default:
                return 'HISTORY.PARTIAL.SUCCESS.OTHER';
        }
    }
    get totalBalance() {
        return this.result && this.result.totalBalance;
    }
    get successCount() {
        return this.result && this.result.numberOfSuccess;
    }
    get totalCount() {
        return this.result && this.result.results.length;
    }
    get successParams() {
        return {
            transactionsCount: this.successCount,
        };
    }
    get failedText() {
        switch (this.result && this.result.numberOfFailed % 10) {
            case 1:
                return 'HISTORY.PARTIAL.FAILED.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.PARTIAL.FAILED.FEW';
            default:
                return 'HISTORY.PARTIAL.FAILED.OTHER';
        }
    }
    get failedParams() {
        return {
            transactionsCount: this.result && this.result.numberOfFailed,
        };
    }
    get failedTransactions() {
        return (this.result &&
            this.result.results &&
            this.result.results.filter((signItem) => {
                return signItem.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.BULK_OPERATION_STATUS.FAILED;
            }));
    }
    mapCountLabel(count) {
        switch (count % 20) {
            case 1:
                return 'HISTORY.OPERATION.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.OPERATION.FEW';
            default:
                return 'HISTORY.OPERATION.OTHER';
        }
    }
    generateGroups() {
        let groups = {};
        this.result.results.forEach((item) => {
            const itemBalance = item.result.amount;
            if (groups[itemBalance.currency]) {
                groups[itemBalance.currency].money.amount += itemBalance.amount;
                groups[itemBalance.currency].count++;
            }
            else {
                groups[itemBalance.currency] = {
                    money: {
                        currency: itemBalance.currency,
                        amount: itemBalance.amount,
                    },
                    count: 1,
                };
            }
        });
        this.groups = Object.values(groups);
    }
};
MultipleSignPartialSuccessComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
MultipleSignPartialSuccessComponent.propDecorators = {
    result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MultipleSignPartialSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-multiple-sign-partial-success',
        template: _multiple_sign_partial_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiple_sign_partial_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleSignPartialSuccessComponent);



/***/ }),

/***/ 9031:
/*!*****************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-success/multiple-sign-success.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSignSuccessComponent": () => (/* binding */ MultipleSignSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_sign_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-sign-success.component.html?ngResource */ 67545);
/* harmony import */ var _multiple_sign_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-sign-success.component.scss?ngResource */ 98919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let MultipleSignSuccessComponent = class MultipleSignSuccessComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
        this.generateGroups();
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    mapCountLabel(count) {
        switch (count % 20) {
            case 1:
                return 'HISTORY.OPERATION.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.OPERATION.FEW';
            default:
                return 'HISTORY.OPERATION.OTHER';
        }
    }
    generateGroups() {
        let groups = {};
        this.result.results.forEach((item) => {
            const itemBalance = item.result.amount;
            if (groups[itemBalance.currency]) {
                groups[itemBalance.currency].money.amount += itemBalance.amount;
                groups[itemBalance.currency].count++;
            }
            else {
                groups[itemBalance.currency] = {
                    money: {
                        currency: itemBalance.currency,
                        amount: itemBalance.amount,
                    },
                    count: 1,
                };
            }
        });
        this.groups = Object.values(groups);
    }
};
MultipleSignSuccessComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
MultipleSignSuccessComponent.propDecorators = {
    result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MultipleSignSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-multiple-sign-success',
        template: _multiple_sign_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiple_sign_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleSignSuccessComponent);



/***/ }),

/***/ 41867:
/*!***************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-error/send-to-signed-error.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToSignedErrorComponent": () => (/* binding */ SendToSignedErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _send_to_signed_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-to-signed-error.component.html?ngResource */ 90496);
/* harmony import */ var _send_to_signed_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-to-signed-error.component.scss?ngResource */ 32252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-to-signed-partial/send-to-signed-partial.component */ 48120);






let SendToSignedErrorComponent = class SendToSignedErrorComponent extends _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__.SendToSignedPartialComponent {
    constructor(modal) {
        super(modal);
        this.modal = modal;
    }
};
SendToSignedErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
SendToSignedErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-send-to-signed-error',
        template: _send_to_signed_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_to_signed_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendToSignedErrorComponent);



/***/ }),

/***/ 79135:
/*!*******************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial-error/send-to-signed-partial-error.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToSignedPartialErrorComponent": () => (/* binding */ SendToSignedPartialErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _send_to_signed_partial_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-to-signed-partial-error.component.html?ngResource */ 28650);
/* harmony import */ var _send_to_signed_partial_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-to-signed-partial-error.component.scss?ngResource */ 7004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-to-signed-partial/send-to-signed-partial.component */ 48120);






let SendToSignedPartialErrorComponent = class SendToSignedPartialErrorComponent extends _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__.SendToSignedPartialComponent {
    constructor(modal) {
        super(modal);
        this.modal = modal;
    }
};
SendToSignedPartialErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
SendToSignedPartialErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-send-to-signed-partial-error',
        template: _send_to_signed_partial_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_to_signed_partial_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendToSignedPartialErrorComponent);



/***/ }),

/***/ 48120:
/*!*******************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial/send-to-signed-partial.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToSignedPartialComponent": () => (/* binding */ SendToSignedPartialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _send_to_signed_partial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-to-signed-partial.component.html?ngResource */ 57590);
/* harmony import */ var _send_to_signed_partial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-to-signed-partial.component.scss?ngResource */ 62436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);






let SendToSignedPartialComponent = class SendToSignedPartialComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    retrieveErrors(transaction) {
        let mappedErrors;
        if (transaction.errorData) {
            const errors = Object.entries(transaction.errorData);
            mappedErrors = errors.map((item) => {
                return item[1];
            });
        }
        else if (transaction.errorMsg) {
            mappedErrors = [transaction.errorMsg];
        }
        else {
            mappedErrors = [];
        }
        return mappedErrors;
    }
    get failedCount() {
        var _a;
        return ((_a = this.signResult) === null || _a === void 0 ? void 0 : _a.numberOfFailed) || 0;
    }
    get successCount() {
        var _a;
        return ((_a = this.signResult) === null || _a === void 0 ? void 0 : _a.numberOfSuccess) || 0;
    }
    get failedText() {
        switch (this.failedCount % 20) {
            case 1:
                return 'HISTORY.SEND_TO_SIGNED.FAILED.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.SEND_TO_SIGNED.FAILED.FEW';
            default:
                return 'HISTORY.SEND_TO_SIGNED.FAILED.OTHER';
        }
    }
    get failedParams() {
        return {
            transactionsCount: this.failedCount,
        };
    }
    get failedTransactions() {
        return (this.signResult &&
            this.signResult.results &&
            this.signResult.results.filter((signItem) => {
                return signItem.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.BULK_OPERATION_STATUS.FAILED;
            }));
    }
    get successText() {
        switch (this.successCount % 10) {
            case 1:
                return 'HISTORY.SEND_TO_SIGNED.SUCCESS.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.SEND_TO_SIGNED.SUCCESS.FEW';
            default:
                return 'HISTORY.SEND_TO_SIGNED.SUCCESS.OTHER';
        }
    }
    get successParams() {
        return {
            transactionsCount: this.successCount,
        };
    }
};
SendToSignedPartialComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
SendToSignedPartialComponent.propDecorators = {
    signResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SendToSignedPartialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-send-to-signed-partial',
        template: _send_to_signed_partial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_to_signed_partial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendToSignedPartialComponent);



/***/ }),

/***/ 75847:
/*!*******************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-success/send-to-signed-success.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToSignedSuccessComponent": () => (/* binding */ SendToSignedSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _send_to_signed_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-to-signed-success.component.html?ngResource */ 55793);
/* harmony import */ var _send_to_signed_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-to-signed-success.component.scss?ngResource */ 4977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-to-signed-partial/send-to-signed-partial.component */ 48120);






let SendToSignedSuccessComponent = class SendToSignedSuccessComponent extends _send_to_signed_partial_send_to_signed_partial_component__WEBPACK_IMPORTED_MODULE_2__.SendToSignedPartialComponent {
    constructor(modal) {
        super(modal);
        this.modal = modal;
    }
};
SendToSignedSuccessComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
SendToSignedSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-send-to-signed-success',
        template: _send_to_signed_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_to_signed_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendToSignedSuccessComponent);



/***/ }),

/***/ 51913:
/*!*******************************************************************************!*\
  !*** ./src/app/history/modals/validation-error/validation-error.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationErrorComponent": () => (/* binding */ ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _validation_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-error.component.html?ngResource */ 91199);
/* harmony import */ var _validation_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-error.component.scss?ngResource */ 82447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models */ 63157);






let ValidationErrorComponent = class ValidationErrorComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
        this.generateGroups();
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal() {
        this.modal.close();
    }
    retrieveErrors(errorData) {
        const errors = Object.entries(errorData);
        const mappedErrors = errors.map((item) => {
            return item[1];
        });
        return mappedErrors;
    }
    get totalBalance() {
        return this.result && this.result.totalBalance;
    }
    get successCount() {
        return this.result && this.result.numberOfSuccess;
    }
    get totalCount() {
        return this.result && this.result.results.length;
    }
    get successParams() {
        return {
            transactionsCount: this.successCount,
        };
    }
    get failedText() {
        if (!this.result) {
            return 'HISTORY.VALIDATION.ERROR';
        }
        switch (this.result && this.result.numberOfFailed % 10) {
            case 1:
                return 'HISTORY.VALIDATION.ONE';
            case 2:
            case 3:
            case 4:
                return 'HISTORY.VALIDATION.FEW';
            default:
                return 'HISTORY.VALIDATION.OTHER';
        }
    }
    get failedParams() {
        return {
            transactionsCount: this.result && this.result.numberOfFailed,
        };
    }
    get failedTransactions() {
        return (this.result &&
            this.result.results &&
            this.result.results.filter((signItem) => {
                return signItem.status === _shared_models__WEBPACK_IMPORTED_MODULE_2__.BULK_OPERATION_STATUS.FAILED;
            }));
    }
    mapCountLabel(count) {
        switch (count % 20) {
            case 1:
                return 'HISTORY.OPERATION.ONE';
            default:
                return 'HISTORY.OPERATION.OTHER';
        }
    }
    generateGroups() {
        let groups = {};
        this.result.results.forEach((item) => {
            var _a;
            const itemBalance = (_a = item.result) === null || _a === void 0 ? void 0 : _a.amount;
            if (!itemBalance) {
                return;
            }
            if (groups[itemBalance.currency]) {
                groups[itemBalance.currency].money.amount += itemBalance.amount;
                groups[itemBalance.currency].count++;
            }
            else {
                groups[itemBalance.currency] = {
                    money: {
                        currency: itemBalance.currency,
                        amount: itemBalance.amount,
                    },
                    count: 1,
                };
            }
        });
        this.groups = Object.values(groups);
    }
};
ValidationErrorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
ValidationErrorComponent.propDecorators = {
    result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ValidationErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-validation-error',
        template: _validation_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_validation_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ValidationErrorComponent);



/***/ }),

/***/ 68143:
/*!*****************************************************************************!*\
  !*** ./src/app/history/history-list/history-list.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  margin: 1rem 0;\n  display: block;\n}\n\n.total {\n  min-height: 60px;\n  position: relative;\n  font-size: 0.875rem;\n  color: #666c72;\n  padding-bottom: 1rem;\n}\n\n@media (min-width: 960px) {\n  .total {\n    align-items: center;\n    display: flex;\n  }\n}\n\n.total::after {\n  content: \"\";\n  display: block;\n  background: #eceef1;\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: -1.5rem;\n  right: -1.5rem;\n}\n\n.total strong {\n  color: #1a1c1f;\n}\n\n.total__select {\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 960px) {\n  .total__select {\n    margin-right: 1.5rem;\n    margin-bottom: 0;\n  }\n}\n\n.total__select .custom-control-label {\n  line-height: 1.5rem;\n}\n\n.total__actions {\n  margin-left: auto;\n  display: flex;\n}\n\n.total__text {\n  margin-right: 1rem;\n}\n\n@media (min-width: 960px) {\n  .total__text {\n    text-align: right;\n  }\n}\n\n.total__action {\n  display: block;\n  margin-left: 0.5rem;\n  color: #b7bec5;\n}\n\n.total__action:hover {\n  color: #ef5630;\n}\n\n.total__action--sign {\n  color: #1586bb;\n}\n\n.total__content {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n@media (min-width: 960px) {\n  .total__content {\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQURGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ2dSNEI7RUQvUTVCLGNFQ1M7RUZBVCxvQkFBQTtBQUZGOztBR2lESTtFSHBESjtJQVFJLG1CQUFBO0lBQ0EsYUFBQTtFQURGO0FBQ0Y7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRWJPO0VGY1AsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxjRWRJO0FGWVI7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBRzBCSTtFSHhCSjtJQUlJLG9CQUFBO0lBQ0EsZ0JBQUE7RUFGRjtBQUNGOztBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUdRSTtFSE5KO0lBSUksaUJBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0VyRFM7QUZtRFg7O0FBSUU7RUFDRSxjRTlCSztBRjRCVDs7QUFLRTtFQUNFLGNFcENTO0FGaUNiOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUdmSTtFSGdCSjtJQVFJLHlCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJoaXN0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4udG90YWwge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgY29sb3I6ICRncmF5LTYwMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTEuNXJlbTtcbiAgICByaWdodDogLTEuNXJlbTtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICRkYXJrO1xuICB9XG59XG5cbi50b3RhbF9fc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuXG4udG90YWxfX2FjdGlvbnMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvdGFsX190ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4udG90YWxfX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBjb2xvcjogJGdyYXktNTAwO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgfVxuXG4gICYtLXNpZ24ge1xuICAgIGNvbG9yOiAkYmx1ZS1saWdodDtcbiAgfVxufVxuXG4udG90YWxfX2NvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgODAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6ICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogLjUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgIGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSBuby1yZXBlYXQgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKDFlbSAqIC43NSwgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgKiAuNSAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtc2Nyb2xsLW1heC1oZWlnaHQ6ICAgICAgNzV2aCAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAqIC41ICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLXZlcnRpY2FsLWFsaWduOiAgLS4xMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogICAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcbiR1c2VyLXNlbGVjdHM6IGFsbCwgYXV0bywgbm9uZSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iLCIvLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2ZhZjdmNztcclxuJGdyYXktMjAwOiAjZjZmN2Y4O1xyXG4kZ3JheS0zMDA6ICNlY2VlZjE7XHJcbiRncmF5LTQwMDogI2Q2ZGFkZjtcclxuJGdyYXktNTAwOiAjYjdiZWM1O1xyXG4kZ3JheS02MDA6ICM2NjZjNzI7XHJcbiRncmF5LTcwMDogIzQ3NGI1MjtcclxuJGdyYXktODAwOiAjZTllY2YxO1xyXG4kZ3JheS05MDA6ICNkYmRmZTI7XHJcbiRncmF5LTEwMDA6ICM4MjgyODI7XHJcbiRibGFjazogIzFhMWMxZjtcclxuXHJcbiRncmF5czogKCk7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICcxMDAnOiAkZ3JheS0xMDAsXHJcbiAgICAnMjAwJzogJGdyYXktMjAwLFxyXG4gICAgJzMwMCc6ICRncmF5LTMwMCxcclxuICAgICc0MDAnOiAkZ3JheS00MDAsXHJcbiAgICAnNTAwJzogJGdyYXktNTAwLFxyXG4gICAgJzYwMCc6ICRncmF5LTYwMCxcclxuICAgICc3MDAnOiAkZ3JheS03MDAsXHJcbiAgICAnODAwJzogJGdyYXktODAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzIwNDE3NztcclxuJGJsdWUtbGlnaHQ6ICMxNTg2YmI7XHJcbiRibHVlLXdoaXRlOiAjZjVmOWZkO1xyXG4kb3JhbmdlOiAjZWY1NjMwO1xyXG4kb3JhbmdlLWRhcms6ICNkNDNlMTk7XHJcbiRvcmFuZ2UtbGlnaHQ6ICNmN2FiOTg7XHJcbiR5ZWxsb3c6ICNlZjhmMDA7XHJcbiRncmVlbjogIzIzOWE1NDtcclxuJGdyZWVuLWxpZ2h0OiAjNzRiYTcyO1xyXG4kcmVkOiAjZmYwMDAwO1xyXG4kcmVkLWxpZ2h0OiAjZmZlZmVmO1xyXG5cclxuJGdyYXk6ICRncmF5LTUwMDtcclxuJGdyYXktZGFyazogJGdyYXktNjAwO1xyXG4kZ3JheS1saWdodDogJGdyYXktNDAwO1xyXG5cclxuJGNvbG9yczogKCk7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnYmx1ZSc6ICRibHVlLFxyXG4gICAgJ2JsdWUtbGlnaHQnOiAkYmx1ZS1saWdodCxcclxuICAgICdibHVlLXdoaXRlJzogJGJsdWUtd2hpdGUsXHJcbiAgICAnb3JhbmdlJzogJG9yYW5nZSxcclxuICAgICdvcmFuZ2UtZGFyayc6ICRvcmFuZ2UtZGFyayxcclxuICAgICdvcmFuZ2UtbGlnaHQnOiAkb3JhbmdlLWxpZ2h0LFxyXG4gICAgJ3llbGxvdyc6ICR5ZWxsb3csXHJcbiAgICAnZ3JlZW4nOiAkZ3JlZW4sXHJcbiAgICAnZ3JlZW4tbGlnaHQnOiAkZ3JlZW4tbGlnaHQsXHJcbiAgICAncmVkJzogJHJlZCxcclxuICAgICdyZWQtbGlnaHQnOiAkcmVkLWxpZ2h0LFxyXG4gICAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICAgJ2JsYWNrLWxpZ2h0JzogJGdyYXktNzAwLFxyXG4gICAgJ2dyYXknOiAkZ3JheS01MDAsXHJcbiAgICAnZ3JheS1kYXJrJzogJGdyYXktNjAwLFxyXG4gICAgJ2dyYXktbGlnaHQnOiAkZ3JheS00MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJHNlY29uZGFyeTogJGJsdWU7XHJcbiRzdWNjZXNzOiAkZ3JlZW47XHJcbiRpbmZvOiAkYmx1ZS1saWdodDtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcbiRkYW5nZXI6ICRyZWQ7XHJcbiRsaWdodDogJGdyYXktNTAwO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCk7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAncHJpbWFyeSc6ICRwcmltYXJ5LFxyXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXHJcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxyXG4gICAgJ2luZm8nOiAkaW5mbyxcclxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXHJcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcclxuICAgICdsaWdodCc6ICRsaWdodCxcclxuICAgICdkYXJrJzogJGRhcmssXHJcbiAgICAnd2hpdGUnOiAkd2hpdGUsXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyAkdGV4dC1jb2xvcnM6ICgpO1xyXG4vLyAkdGV4dC1jb2xvcnM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICAnZGVmYXVsdCc6ICRibGFjayxcclxuLy8gICAgICdsb3ctY29udHJhc3QnOiAkZ3JheS02MDAsXHJcbi8vICAgICAnaW5mbyc6ICRncmF5LTUwMCxcclxuLy8gICAgICdlcnJvcic6ICRyZWQsXHJcbi8vICAgICAnbGluayc6ICRibHVlLFxyXG4vLyAgICAgJ2JhbGFuY2UnOiAkZ3JlZW4sXHJcbi8vICAgICAnYmFsYW5jZS1jb2lucyc6ICRncmVlbi1saWdodCxcclxuLy8gICApLFxyXG4vLyAgICR0ZXh0LWNvbG9yc1xyXG4vLyApO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgLy8gMHB4XHJcbiAgICAxOiAkc3BhY2VyICogMC4yNSxcclxuICAgIC8vIDRweCB4eHMsXHJcbiAgICAyOiAkc3BhY2VyICogMC41LFxyXG4gICAgLy8gOHB4IHhzLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIC8vIDE2cHggc21cclxuICAgIDQ6ICRzcGFjZXIgKiAxLjUsXHJcbiAgICAvLyAyNHB4IG1kLFxyXG4gICAgNTogJHNwYWNlciAqIDIsXHJcbiAgICAvLyAzMnB4IGxnLFxyXG4gICAgNjogJHNwYWNlciAqIDIuNSxcclxuICAgIC8vIDQwcHggeGwsXHJcbiAgICA3OiAkc3BhY2VyICogMy41LFxyXG4gICAgLy8gNTZweCB4eGxcclxuICAgIDg6ICRzcGFjZXIgKiA0LFxyXG4gICAgLy8gNjRweCB4eGxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAkd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAkZGFyaztcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogJG9yYW5nZS1kYXJrO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG4vL1xyXG4vLyBTdHlsZSBwIGVsZW1lbnQuXHJcblxyXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA2NzBweCxcclxuICBtZDogOTYwcHgsXHJcbiAgbGc6IDEyODBweCxcclxuICB4bDogMTkyMHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMzBweDtcclxuJGdyaWQtcm93LWNvbHVtbnM6IDY7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbWQ6IHJlbXkoMTIpO1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMi41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4ycmVtO1xyXG5cclxuLy8gTDBcclxuJGJveC1zaGFkb3cteHM6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEwxXHJcbiRib3gtc2hhZG93LXNtOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwyXHJcbiRib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDNcclxuJGJveC1zaGFkb3ctbGc6IDBweCAxNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDRcclxuJGJveC1zaGFkb3cteGw6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4kdHJhbnNpdGlvbi1mYWRlOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuJHRyYW5zaXRpb24tY29sbGFwc2U6IGhlaWdodCAwLjM1cyBlYXNlO1xyXG4kdHJhbnNpdGlvbi1tYXgtaGVpZ2h0OiBhbGwgMC42cyBlYXNlO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0OyAvLyAxNHB4XHJcbiRmb250LXNpemUteHM6IHJlbXkoMTIpO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogcmVteSgzMCk7XHJcbiRoMi1mb250LXNpemU6IHJlbXkoMjYpO1xyXG4kaDMtZm9udC1zaXplOiByZW15KDI0KTtcclxuJGg0LWZvbnQtc2l6ZTogcmVteSgyMik7XHJcbiRoNS1mb250LXNpemU6IHJlbXkoMjApO1xyXG4kaDYtZm9udC1zaXplOiByZW15KDE4KTtcclxuXHJcbiRoMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDMwcHgsXHJcbiAgc206IDM2cHgsXHJcbiAgbWQ6IDQ4cHgsXHJcbiAgbGc6IDQ4cHgsXHJcbiAgeGw6IDYwcHgsXHJcbik7XHJcblxyXG4vLyBoMiBzaXplc1xyXG4kaDItZm9udC1zaXplczogKFxyXG4gIHhzOiAyNnB4LFxyXG4gIHNtOiAzMHB4LFxyXG4gIG1kOiA0MHB4LFxyXG4gIGxnOiA0NHB4LFxyXG4gIHhsOiA1NHB4LFxyXG4pO1xyXG5cclxuLy8gaDMgc2l6ZXNcclxuJGgzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjRweCxcclxuICBzbTogMjZweCxcclxuICBtZDogMzJweCxcclxuICBsZzogMzZweCxcclxuICB4bDogNDRweCxcclxuKTtcclxuXHJcbi8vIGg0IHNpemVzXHJcbiRoNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIycHgsXHJcbiAgc206IDI0cHgsXHJcbiAgbWQ6IDI0cHgsXHJcbiAgbGc6IDI4cHgsXHJcbiAgeGw6IDI4cHgsXHJcbik7XHJcblxyXG4vLyBoNSBzaXplc1xyXG4kaDUtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMHB4LFxyXG4gIHNtOiAyMnB4LFxyXG4gIG1kOiAyMnB4LFxyXG4gIGxnOiAyNHB4LFxyXG4gIHhsOiAyNHB4LFxyXG4pO1xyXG5cclxuLy8gaDYgc2l6ZXNcclxuJGg2LWZvbnQtc2l6ZXM6IChcclxuICB4czogMThweCxcclxuICBzbTogMThweCxcclxuICBtZDogMThweCxcclxuICBsZzogMjBweCxcclxuICB4bDogMjBweCxcclxuKTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGluZ3MtY29sb3I6IG51bGw7XHJcblxyXG4kcDAtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMThweCxcclxuICBsZzogMThweCxcclxuICB4bDogMThweCxcclxuKTtcclxuXHJcbiRwMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE0cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMnB4LFxyXG4gIHNtOiAxMnB4LFxyXG4gIG1kOiAxNHB4LFxyXG4gIGxnOiAxNHB4LFxyXG4gIHhsOiAxNHB4LFxyXG4pO1xyXG5cclxuJHA0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMTBweCxcclxuICBzbTogMTBweCxcclxuICBtZDogMTJweCxcclxuICBsZzogMTJweCxcclxuICB4bDogMTJweCxcclxuKTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6ICRmb250LXNpemUteHM7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xyXG5cclxuLy8gJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRhYmxlc1xyXG4vLyAvL1xyXG4vLyAvLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vIC8vXHJcbi8vIC8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDFyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiByZW15KDEpO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxLjJyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDIuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcbiRidG4td2hpdGUtc3BhY2U6IG51bGw7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogOHB4O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gLy8gRm9ybXNcclxuXHJcbi8vICRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW15KDIwKTtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZGFyaztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuXHJcbiRpbnB1dC1mb2N1cy1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbi8vICRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xyXG5cclxuLy8gJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMS4yNXJlbTsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnOiAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGdyYXktODAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZChcclxuICAxZW0gKiAwLjc1LFxyXG4gICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogMC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggK1xyXG4gICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmdcclxuKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXRleHQ6IChcclxuLy8gICBlbjogXCJCcm93c2VcIlxyXG4vLyApICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB2YWxpZGF0aW9uXHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcclxuLy8gLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcclxuLy8gICAoXHJcbi8vICAgICBcInZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgICBcImludmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcclxuLy8gICAgICksXHJcbi8vICAgKSxcclxuLy8gICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4vLyApO1xyXG5cclxuLy8gLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vLyAvL1xyXG4vLyAvLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuLy8gJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcclxuLy8gJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdnNcclxuXHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZiYXJcclxuXHJcbi8vICRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAvLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuLy8gJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRkcm9wZG93bi1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRkcm9wZG93bi1iZzogJHdoaXRlO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xNSk7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRkcm9wZG93bi1ib3JkZXItcmFkaXVzLFxyXG4gICRkcm9wZG93bi1ib3JkZXItd2lkdGhcclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktMjAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC4yNXJlbTtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyAvLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNnJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMS41cmVtO1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogMS4yNTtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRncmF5LTgwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4vLyAvLyBKdW1ib3Ryb25cclxuXHJcbi8vICRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcmRzXHJcblxyXG4vLyAkY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuLy8gJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb29sdGlwc1xyXG5cclxuLy8gJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogMjQ2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4yKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KFxyXG4gICRwb3BvdmVyLWJvcmRlci1yYWRpdXMsXHJcbiAgJHBvcG92ZXItYm9yZGVyLXdpZHRoXHJcbikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICRib3gtc2hhZG93LXhsICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuXHJcbi8vICRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvYXN0c1xyXG5cclxuLy8gJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogcmVteSgxMik7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwO1xyXG4vLyAkYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAwLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbTtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLW1kO1xyXG5cclxuLy8gJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xyXG4vLyAkYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcclxuLy8gLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxyXG4vLyAvLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXHJcbi8vICRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuNzVyZW07XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuLy8gJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IG5vbmU7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjc7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS41cmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6IDEwNDRweDtcclxuLy8gJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGVydHNcclxuLy8gLy9cclxuLy8gLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4vLyAkYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4vLyAkcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBMaXN0IGdyb3VwXHJcblxyXG4vLyAkbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4vLyAkdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gRmlndXJlc1xyXG5cclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xyXG4vLyAkZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCcmVhZGNydW1ic1xyXG5cclxuLy8gJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJvdXNlbFxyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gLy8gU3Bpbm5lcnNcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2xvc2VcclxuXHJcbi8vICRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDb2RlXHJcblxyXG4vLyAkY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcclxuLy8gJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVXRpbGl0aWVzXHJcblxyXG4vLyAkZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XHJcbi8vICRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcclxuLy8gJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQcmludGluZ1xyXG5cclxuLy8gJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XHJcbi8vICRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XHJcblxyXG4vLyBKeXNhbiBWYXJpYWJsZXNcclxuXHJcbkBmdW5jdGlvbiBzcGFjZSgkc2l6ZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkc3BhY2VycywgJGtleTogJHNpemUpO1xyXG59XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNjJweDtcclxuJGhlYWRlci1oZWlnaHQtbWQ6IDEwMHB4O1xyXG4kaGVhZGVyLXdpZHRoOiAyODBweDtcclxuXHJcbiRidG4tbWluLXdpZHRoOiAxNjRweDtcclxuXHJcbi8vIEotaW5wdXRcclxuJGotaW5wdXQtZm9udC1zaXplOiAxcmVtO1xyXG4kai1pbnB1dC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XHJcbiRqLWlucHV0LWZvbnQtc3R5bGU6IG5vcm1hbDtcclxuJGotaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG5cclxuJGotaW5wdXQtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteTogMTcuNXB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXg6IDIwcHg7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItd2lkdGg6IDFweDtcclxuJGotaW5wdXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kai1pbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodDtcclxuJGotaW5wdXQtdGV4dC1jb2xvcjogJGJsYWNrO1xyXG4kai1pbnB1dC1tYXNrLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtaWNvbi1jb2xvcjogJG9yYW5nZTtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtdGV4dC1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWVycm9yOiAkcmVkLWxpZ2h0O1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWVycm9yOiAkcmVkO1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZGlzYWJsZWQ6ICRpbnB1dC1kaXNhYmxlZC1iZzsgLy8gZnJvbSBmaWdtYSBwcmltaXRpdmVzIHNob3VsZCBiZSBncmF5LTIwMFxyXG5cclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wOiAkai1pbnB1dC1wYWRkaW5nLXkgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcC1hY3RpdmU6IDEwcHg7XHJcbiRqLWlucHV0LWxpbmstcG9zaXRpb24tdG9wOiAxNnB4O1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0OiAkai1pbnB1dC1wYWRkaW5nLXggKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAkai1pbnB1dC1saW5lLWhlaWdodDtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1wYWRkaW5nLXRvcDogMjdweDtcclxuJGotaW5wdXQtcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiRqLWlucHV0LW1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItcG9zaXRpb246ICRqLWlucHV0LXBhZGRpbmctdG9wICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1jaGFyLWxlbmd0aDogOC45OXB4O1xyXG5cclxuJGotaW5wdXQtYnV0dG9uLXBvc2l0aW9uOiAyMHB4O1xyXG4kai1pbnB1dC1zaGFkb3ctcG9zaXRpb246ICRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ7XHJcblxyXG4kai1pbnB1dC1sYWJlbC16LWluZGV4OiAwO1xyXG4kai1pbnB1dC1zaGFkb3ctei1pbmRleDogMTtcclxuJGotaW5wdXQtei1pbmRleDogMjtcclxuJGotaW5wdXQtbGluay16LWluZGV4OiAzO1xyXG4kai1pbnB1dC1idXR0b24tei1pbmRleDogNDtcclxuXHJcbiRib3gtc2hhZG93LXRvLXRvcC1sZzogMCAtMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlO1xyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 26777:
/*!***********************************************************!*\
  !*** ./src/app/history/history.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 49112:
/*!************************************************************************************!*\
  !*** ./src/app/history/modals/delete-error/delete-error.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 74652:
/*!****************************************************************************************!*\
  !*** ./src/app/history/modals/delete-partial/delete-partial.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcGFydGlhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 11750:
/*!****************************************************************************************!*\
  !*** ./src/app/history/modals/delete-success/delete-success.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 95163:
/*!**************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-error/multiple-sign-error.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS1zaWduLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 72398:
/*!******************************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-error/multiple-sign-partial-error.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS1zaWduLXBhcnRpYWwtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 78060:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-success/multiple-sign-partial-success.component.scss?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS1zaWduLXBhcnRpYWwtc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 98919:
/*!******************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-success/multiple-sign-success.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS1zaWduLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 32252:
/*!****************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-error/send-to-signed-error.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLXNpZ25lZC1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7004:
/*!********************************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial-error/send-to-signed-partial-error.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLXNpZ25lZC1wYXJ0aWFsLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62436:
/*!********************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial/send-to-signed-partial.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLXNpZ25lZC1wYXJ0aWFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4977:
/*!********************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-success/send-to-signed-success.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLXNpZ25lZC1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 82447:
/*!********************************************************************************************!*\
  !*** ./src/app/history/modals/validation-error/validation-error.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 74421:
/*!*****************************************************************************!*\
  !*** ./src/app/history/history-list/history-list.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"j-list\">\r\n  <div class=\"j-list__header\">\r\n    <div class=\"j-tabs\">\r\n      <nav class=\"j-tabs__list\">\r\n        <a [routerLink]=\"type.url\"\r\n           class=\"j-tabs__item\"\r\n           routerLinkActive=\"active\"\r\n           *ngFor=\"let type of historyTypes\"\r\n           translate>{{type.label}}</a>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"j-list__filter\">\r\n      <j-filter [currency]=\"filterCurrency\"\r\n                [mode]=\"filterMode\"></j-filter>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"isLoading\"\r\n       class=\"j-list__statement j-list__loading\">\r\n    <j-statement-loading></j-statement-loading>\r\n  </div>\r\n\r\n  <div infiniteScroll\r\n       [scrollWindow]=\"true\"\r\n       [alwaysCallback]=\"true\"\r\n       [infiniteScrollDistance]=\"2\"\r\n       [infiniteScrollThrottle]=\"500\"\r\n       (scrolled)=\"onScroll()\">\r\n    <div *ngIf=\"!isLoading\"\r\n         class=\"j-list__statement\"\r\n         [class.list-statement--scrollable]=\"hasMorePages\">\r\n      <div *ngIf=\"totalCount && (isSelectable || isSelectableForExport)\" class=\"total\">\r\n        <div class=\"total__select custom-control custom-checkbox\" (click)=\"$event.stopPropagation()\">\r\n          <input type=\"checkbox\"\r\n                 class=\"custom-control-input\"\r\n                 id=\"checkboxAll\"\r\n                 [(ngModel)]=\"isAllSelected\"\r\n                 (click)=\"$event.stopPropagation()\"\r\n                 (change)=\"selectAll()\"/>\r\n          <label class=\"custom-control-label\"\r\n                 for=\"checkboxAll\"\r\n                 translate>HISTORY.SELECT_ALL</label>\r\n        </div>\r\n        <div class=\"total__content\">\r\n          <ng-template [ngIf]=\"!currencies || currencies?.length <= 1\">\r\n            <div class=\"total__text\">\r\n              <div>\r\n                <span translate>HISTORY.OPERATION.OTHER</span>:\r\n                <strong>\r\n                  {{totalCount}}\r\n                </strong>\r\n              </div>\r\n              <div>\r\n                <span translate>HISTORY.FOR_AMOUNT</span>:\r\n                <strong>\r\n                  <j-money [money]=\"totalBalance\"></j-money>\r\n                </strong>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template [ngIf]=\"currencies?.length > 1 && currencies?.length <= 3\">\r\n            <div *ngFor=\"let currency of currencies\"\r\n                 class=\"total__text\">\r\n              <strong>\r\n                <j-money [money]=\"currency.balance\"></j-money>\r\n              </strong>\r\n              ({{currency.count}})\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template [ngIf]=\"currencies?.length > 3\">\r\n            <div *ngFor=\"let currency of currencies.splice(0, 4)\"\r\n                 class=\"total__text\">\r\n              <strong>\r\n                <j-money [money]=\"currency.balance\"></j-money>\r\n              </strong>\r\n              ({{currency.count}})\r\n            </div>\r\n            <div class=\"total__text\"\r\n                 [ngbTooltip]=\"leftCurrencies\">+\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #leftCurrencies>\r\n            <div *ngFor=\"let currency of currencies.splice(3, currencies.length)\">\r\n              <strong>\r\n                <j-money [money]=\"currency.balance\"></j-money>\r\n              </strong>\r\n              ({{currency.count}})\r\n            </div>\r\n          </ng-template>\r\n\r\n          <div class=\"total__actions\">\r\n\r\n            <ng-container *ngIf=\"isSelectableForExport\">\r\n              <a *ngIf=\"isSelectableForExport && selectedCount > 0\"\r\n                 (click)=\"exportSelectedTransactions($event)\"\r\n                 [ngbTooltip]=\"('HISTORY.DOWNLOAD_SELECTED' | translate)\"\r\n                 [inlineSVG]=\"'/assets/icons/transaction/pdf.svg'\"\r\n                 href='#'\r\n                 class='total__action'\r\n                 tooltipClass='tooltip-light'></a>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isSelectable\">\r\n              <ng-container *ngIf=\"selectedCount == 0 && isAllSignable\">\r\n                <a href=\"#\"\r\n                   (click)=\"signAll($event)\"\r\n                   class=\"total__action total__action--sign\">\r\n                  <span translate\r\n                        class=\"mr-2\">HISTORY.SIGN_ALL</span>\r\n                  <span [inlineSVG]=\"'/assets/icons/transaction/sign.svg'\"></span>\r\n                </a>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"selectedCount == 0 && isAllSendableForSign\">\r\n                <a href=\"#\"\r\n                   (click)=\"sendAllForSign($event)\"\r\n                   class=\"total__action total__action--sign\">\r\n                  <span translate\r\n                        class=\"mr-2\">HISTORY.SEND_ALL_FOR_SIGN</span>\r\n                  <span [inlineSVG]=\"'/assets/icons/transaction/for-sign.svg'\"></span>\r\n                </a>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"selectedCount > 0\">\r\n                <a href=\"#\"\r\n                   (click)=\"deleteSelectedTransactions($event)\"\r\n                   class=\"total__action\"\r\n                   tooltipClass=\"tooltip-light\"\r\n                   [ngbTooltip]=\"('HISTORY.DELETE_SELECTED' | translate)\"\r\n                   [inlineSVG]=\"'/assets/icons/transaction/delete.svg'\">\r\n                </a>\r\n                <a href=\"#\"\r\n                   *ngIf=\"isSignable\"\r\n                   (click)=\"signSelected($event)\"\r\n                   class=\"total__action total__action--sign\"\r\n                   tooltipClass=\"tooltip-light\"\r\n                   [ngbTooltip]=\"('HISTORY.SIGN_SELECTED' | translate)\"\r\n                   [inlineSVG]=\"'/assets/icons/transaction/sign.svg'\">\r\n                </a>\r\n                <a href=\"#\"\r\n                   *ngIf=\"isSendableForSign\"\r\n                   (click)=\"sendForSignSelected($event)\"\r\n                   class=\"total__action total__action--sign\"\r\n                   tooltipClass=\"tooltip-light\"\r\n                   [ngbTooltip]=\"('HISTORY.SEND_FOR_SIGN_SELECTED' | translate)\"\r\n                   [inlineSVG]=\"'/assets/icons/transaction/for-sign.svg'\">\r\n                </a>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <j-statement [statement]=\"statement\"\r\n                   [isTotalsShown]=\"false\"\r\n                   [hasExtraPadding]=\"true\"\r\n                   [isSelectable]=\"isSelectable || isSelectableForExport\"\r\n                   (signed)=\"onSign($event)\"\r\n                   (sentForSign)=\"onSentForSign($event)\"\r\n                   (deleted)=\"onDelete($event)\"\r\n                   (revoked)=\"onRevoke($event)\"\r\n                   (selected)=\"onSelect()\"></j-statement>\r\n      <!-- <j-transaction-group *ngIf=\"filteredStatement?.transactionsCount > 0\"\r\n\r\n                           [group]=\"filteredStatement\"\r\n                           [hasLargeTransactions]=\"filteredStatement.hasLargeTransactions\"></j-transaction-group>\r\n      <j-empty-placeholder *ngIf=\"isReady && (filteredStatement?.transactions.length == 0 || !statement)\"\r\n                           label=\"HISTORY.EMPTY\">\r\n      </j-empty-placeholder> -->\r\n\r\n      <div *ngIf=\"!hasMorePages && statement?.totalTransactionsCount > 0\"\r\n           class=\"text-center text-muted mt-5 mb-3 text-small\"\r\n           translate>\r\n        ACCOUNTS.STATEMENT.ALL_LOADED\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n";

/***/ }),

/***/ 40772:
/*!***********************************************************!*\
  !*** ./src/app/history/history.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<j-layout-home>\n    <j-aside>\n        <j-nav-main></j-nav-main>\n    </j-aside>\n\n    <j-main>\n        <section class=\"row\">\n            <section class=\"col-lg-10 offset-lg-1 col-xl-8 offset-xl-2\">\n                <j-header></j-header>\n                <router-outlet></router-outlet>\n            </section>\n        </section>\n    </j-main>\n</j-layout-home>";

/***/ }),

/***/ 50972:
/*!************************************************************************************!*\
  !*** ./src/app/history/modals/delete-error/delete-error.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body px-4 pt-0 pb-4 text-center \">\n    <img src=\"/assets/img/history/modals/error.svg\"\n         alt=\"{{'HISTORY.DELETE.FAILED.TITLE' | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">HISTORY.DELETE.FAILED.TITLE</h3>\n    <p class=\"m-0 text-muted\"\n       [innerHTML]=\"failedText | translate: failedParams\">\n    </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        SHARED.TRY_AGAIN\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>";

/***/ }),

/***/ 21868:
/*!****************************************************************************************!*\
  !*** ./src/app/history/modals/delete-partial/delete-partial.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body text-center pb-3\">\n    <img src=\"/assets/img/history/modals/partial.svg\"\n         alt=\"{{'HISTORY.DELETE.PARTIAL' | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">HISTORY.DELETE.PARTIAL</h3>\n    <p class=\"m-0 text-muted\"\n       [innerHTML]=\"successText | translate: successParams\"></p>\n    <p class=\"mt-0 text-muted\"\n       [innerHTML]=\"failedText | translate: failedParams\"></p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>";

/***/ }),

/***/ 70166:
/*!****************************************************************************************!*\
  !*** ./src/app/history/modals/delete-success/delete-success.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body text-center pb-4\">\n    <img src=\"/assets/img/history/modals/success.svg\"\n         alt=\"{{'HISTORY.DELETE.SUCCESS.TITLE' | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">HISTORY.DELETE.SUCCESS.TITLE</h3>\n    <p class=\"m-0 text-muted\"\n       [innerHTML]=\"successText | translate: successParams\"></p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>";

/***/ }),

/***/ 91120:
/*!**************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-error/multiple-sign-error.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body px-4 pt-0 pb-4 text-center \">\n    <img src=\"/assets/img/history/modals/error.svg\"\n         alt=\"{{'HISTORY.FAILED.TITLE' | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">HISTORY.FAILED.TITLE</h3>\n    <p class=\"m-0 text-muted\">\n        <span translate>HISTORY.FAILED.DESCRIPTION</span>\n    </p>\n    <p *ngIf=\"errorText\"\n       class=\"mt-3 mb-0 text-danger\">\n        {{errorText}}\n    </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-primary btn-block mb-3\"\n            (click)=\"closeModal()\">\n        SHARED.TRY_AGAIN\n    </button>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>";

/***/ }),

/***/ 45021:
/*!******************************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-error/multiple-sign-partial-error.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            (click)=\"dismissModal()\">\r\n        <img src=\"/assets/icons/close.svg\"\r\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\r\n    </button>\r\n</div>\r\n<div class=\"modal-body j-modal-body text-center pb-3\">\r\n    <img src=\"/assets/img/history/modals/error.svg\"\r\n         alt=\"{{'HISTORY.FAILED.TITLE' | translate}}\">\r\n    <h3 translate\r\n        class=\"light mb-3 mt-2\">HISTORY.FAILED.TITLE</h3>\r\n    <p class=\"mt-0 text-muted\"\r\n       [innerHTML]=\"failedText | translate: failedParams\"></p>\r\n    <button translate\r\n            type=\"button\"\r\n            class=\"btn btn-static btn-link m-0\"\r\n            (click)=\"dismissModal()\">\r\n        HISTORY.BACK_TO_HISTORY\r\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-footer bg-main p-4 d-block justify-content-start\">\r\n    <h5 translate=\"HISTORY.PARTIAL.SUBTITLE\"></h5>\r\n    <div *ngFor=\"let transaction of failedTransactions\">\r\n        <strong>№{{transaction.documentNumber}}: </strong>\r\n        <span *ngFor=\"let error of retrieveErrors(transaction); let i = index\">\r\n            {{error}}<span *ngIf=\"i < retrieveErrors(transaction)?.length -1\">, </span>\r\n        </span>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 11182:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-partial-success/multiple-sign-partial-success.component.html?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            (click)=\"dismissModal()\">\r\n        <img src=\"/assets/icons/close.svg\"\r\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\r\n    </button>\r\n</div>\r\n<div class=\"modal-body j-modal-body text-center pb-3\">\r\n    <img src=\"/assets/img/history/modals/partial.svg\"\r\n         alt=\"{{'HISTORY.PARTIAL.TITLE' | translate}}\">\r\n    <h3 translate\r\n        class=\"light mb-3 mt-2\">HISTORY.PARTIAL.TITLE</h3>\r\n    <p class=\"m-0 text-muted\">\r\n        <span translate>HISTORY.OPERATION.FEW</span>:\r\n        <strong>{{successCount}}/{{totalCount}}</strong>\r\n    </p>\r\n    \r\n    <div class=\"result-group\"\r\n         *ngFor=\"let group of groups\">\r\n        {{ group.count }}\r\n        {{ mapCountLabel(group.count) | translate | lowercase }}\r\n        –\r\n        <strong>\r\n            <j-money [money]=\"group.money\"></j-money>\r\n        </strong>\r\n    </div>\r\n\r\n    <p class=\"m-0 text-muted\"\r\n       [innerHTML]=\"successText | translate: successParams\"></p>\r\n    <p class=\"mt-0 text-muted\"\r\n       [innerHTML]=\"failedText | translate: failedParams\"></p>\r\n    <button translate\r\n            type=\"button\"\r\n            class=\"btn btn-static btn-link m-0\"\r\n            (click)=\"dismissModal()\">\r\n        HISTORY.BACK_TO_HISTORY\r\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-footer bg-main p-4 d-block justify-content-start\">\r\n    <h4 translate=\"HISTORY.PARTIAL.SUBTITLE\"></h4>\r\n    <div *ngFor=\"let transaction of failedTransactions\">\r\n        <strong>№{{transaction.documentNumber}}: </strong>\r\n        <span *ngFor=\"let error of retrieveErrors(transaction); let i = index\">\r\n            {{error}}<span *ngIf=\"i < retrieveErrors(transaction)?.length -1\">, </span>\r\n        </span>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 67545:
/*!******************************************************************************************************!*\
  !*** ./src/app/history/modals/multiple-sign-success/multiple-sign-success.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body text-center pb-4\">\n    <img src=\"/assets/img/history/modals/success.svg\"\n         alt=\"{{'HISTORY.SIGNED' | translate}}\">\n    <h3 translate\n        class=\"light mb-3 mt-2\">HISTORY.SIGNED</h3>\n\n    <div class=\"result-group\"\n         *ngFor=\"let group of groups\">\n        {{ group.count }}\n        {{ mapCountLabel(group.count) | translate | lowercase }}\n        –\n        <strong>\n            <j-money [money]=\"group.money\"></j-money>\n        </strong>\n    </div>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>";

/***/ }),

/***/ 90496:
/*!****************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-error/send-to-signed-error.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n  <button type=\"button\"\n          class=\"close\"\n          (click)=\"dismissModal()\">\n      <img src=\"/assets/icons/close.svg\"\n           alt=\"{{'SHARED.CLOSE' | translate}}\">\n  </button>\n</div>\n<div class=\"modal-body px-4 pt-0 pb-4 text-center \">\n  <img src=\"/assets/img/history/modals/error.svg\"\n       alt=\"{{'HISTORY.SEND_TO_SIGNED.FAILED.TITLE' | translate}}\">\n  <h3 translate\n      class=\"light mb-3 mt-2\">HISTORY.SEND_TO_SIGNED.FAILED.TITLE</h3>\n  <p class=\"m-0 text-muted\"\n     [innerHTML]=\"failedText | translate: failedParams\">\n  </p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n  <button translate\n          type=\"button\"\n          class=\"btn btn-primary btn-block mb-3\"\n          (click)=\"closeModal()\">\n      SHARED.TRY_AGAIN\n  </button>\n  <button translate\n          type=\"button\"\n          class=\"btn btn-static btn-link m-0\"\n          (click)=\"dismissModal()\">\n      HISTORY.BACK_TO_HISTORY\n      <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n  </button>\n</div>\n";

/***/ }),

/***/ 28650:
/*!********************************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial-error/send-to-signed-partial-error.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\r\n  <button type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"dismissModal()\">\r\n    <img src=\"/assets/icons/close.svg\"\r\n         alt=\"{{'SHARED.CLOSE' | translate}}\">\r\n  </button>\r\n</div>\r\n<div class=\"modal-body j-modal-body text-center pb-3\">\r\n  <img src=\"/assets/img/history/modals/error.svg\"\r\n       alt=\"{{'HISTORY.FAILED.TITLE' | translate}}\">\r\n  <h3 translate\r\n      class=\"light mb-3 mt-2\">HISTORY.FAILED.TITLE</h3>\r\n  <p class=\"mt-0 text-muted\"\r\n     [innerHTML]=\"failedText | translate: failedParams\"></p>\r\n  <button translate\r\n          type=\"button\"\r\n          class=\"btn btn-static btn-link m-0\"\r\n          (click)=\"dismissModal()\">\r\n    HISTORY.BACK_TO_HISTORY\r\n    <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-footer bg-main p-4 d-block justify-content-start\">\r\n  <h5 translate=\"HISTORY.PARTIAL.SUBTITLE\"></h5>\r\n  <div *ngFor=\"let transaction of failedTransactions\">\r\n    <strong>№{{transaction.documentNumber}}: </strong>\r\n    <span *ngFor=\"let error of retrieveErrors(transaction); let i = index\">\r\n      {{error}}<span *ngIf=\"i < retrieveErrors(transaction)?.length -1\">, </span>\r\n    </span>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 57590:
/*!********************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-partial/send-to-signed-partial.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\r\n  <button type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"dismissModal()\">\r\n    <img src=\"/assets/icons/close.svg\"\r\n         alt=\"{{'SHARED.CLOSE' | translate}}\">\r\n  </button>\r\n</div>\r\n<div class=\"modal-body j-modal-body text-center pb-3\">\r\n  <img src=\"/assets/img/history/modals/partial.svg\"\r\n       alt=\"{{'HISTORY.SEND_TO_SIGNED.PARTIAL' | translate}}\">\r\n  <h3 translate\r\n      class=\"light mb-3 mt-2\">HISTORY.SEND_TO_SIGNED.PARTIAL</h3>\r\n  <p class=\"m-0 text-muted\"\r\n     [innerHTML]=\"successText | translate: successParams\"></p>\r\n  <p class=\"mt-0 text-muted\"\r\n     [innerHTML]=\"failedText | translate: failedParams\"></p>\r\n  <button translate\r\n          type=\"button\"\r\n          class=\"btn btn-static btn-link m-0\"\r\n          (click)=\"dismissModal()\">\r\n    HISTORY.BACK_TO_HISTORY\r\n    <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-footer bg-main p-4 d-block justify-content-start\">\r\n  <h4 translate=\"HISTORY.PARTIAL.SUBTITLE\"></h4>\r\n  <div *ngFor=\"let transaction of failedTransactions\">\r\n    <strong>№{{transaction.documentNumber}}: </strong>\r\n    <span *ngFor=\"let error of retrieveErrors(transaction); let i = index\">\r\n      {{error}}<span *ngIf=\"i < retrieveErrors(transaction)?.length -1\">, </span>\r\n    </span>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 55793:
/*!********************************************************************************************************!*\
  !*** ./src/app/history/modals/send-to-signed-success/send-to-signed-success.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n  <button type=\"button\"\n          class=\"close\"\n          (click)=\"dismissModal()\">\n      <img src=\"/assets/icons/close.svg\"\n           alt=\"{{'SHARED.CLOSE' | translate}}\">\n  </button>\n</div>\n<div class=\"modal-body j-modal-body text-center pb-4\">\n  <img src=\"/assets/img/history/modals/success.svg\"\n       alt=\"{{'HISTORY.SEND_TO_SIGNED.SUCCESS.TITLE' | translate}}\">\n  <h3 translate\n      class=\"light mb-3 mt-2\">HISTORY.SEND_TO_SIGNED.SUCCESS.TITLE</h3>\n  <p class=\"m-0 text-muted\"\n     [innerHTML]=\"successText | translate: successParams\"></p>\n</div>\n<div class=\"modal-footer py-4 px-3 justify-content-center\">\n  <button translate\n          type=\"button\"\n          class=\"btn btn-static btn-link m-0\"\n          (click)=\"dismissModal()\">\n      HISTORY.BACK_TO_HISTORY\n      <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n  </button>\n</div>";

/***/ }),

/***/ 91199:
/*!********************************************************************************************!*\
  !*** ./src/app/history/modals/validation-error/validation-error.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body text-center pb-3\">\n    <img src=\"/assets/img/history/modals/partial.svg\"\n         *ngIf=\"successCount>0\"\n         alt=\"{{'HISTORY.VALIDATION.ERROR' | translate}}\">\n    <img src=\"/assets/img/history/modals/error.svg\"\n        *ngIf=\"successCount===0\"\n        alt=\"{{'HISTORY.VALIDATION.ERROR' | translate}}\">\n    <p class=\"m-0 text-muted\" *ngIf=\"totalCount && successCount\">\n        <span translate>HISTORY.OPERATION.FEW</span>:\n        <strong>{{successCount}}/{{totalCount}}</strong>\n    </p>\n    \n    <div class=\"result-group\"\n         *ngFor=\"let group of groups\">\n        {{ group.count }}\n        {{ mapCountLabel(group.count) | translate | lowercase }}\n        –\n        <strong>\n            <j-money [money]=\"group.money\"></j-money>\n        </strong>\n    </div>\n\n    <p class=\"mt-0 text-muted\"\n       [innerHTML]=\"failedText | translate: failedParams\"></p>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-link m-0\"\n            (click)=\"dismissModal()\">\n        HISTORY.BACK_TO_HISTORY\n        <span [inlineSVG]=\"'/assets/icons/shared/arrow-right.svg'\"></span>\n    </button>\n</div>\n<div class=\"modal-footer bg-main p-4 d-block justify-content-start\">\n    <h4 translate=\"HISTORY.PARTIAL.SUBTITLE\"></h4>\n    <div *ngFor=\"let transaction of failedTransactions\">\n        <strong>№{{transaction.documentNumber}}: </strong>\n        <span *ngFor=\"let error of retrieveErrors(transaction.errorData); let i = index\">\n            {{error}}<span *ngIf=\"i < retrieveErrors(transaction.errorData)?.length -1\">, </span>\n        </span>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_history_history_module_ts.js.map