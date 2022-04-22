"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["default-src_app_shared_select-module_select_module_ts"],{

/***/ 68846:
/*!***************************************************************!*\
  !*** ./src/app/shared/select-module/select-config.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSelectConfig": () => (/* binding */ JSelectConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let JSelectConfig = class JSelectConfig {
    constructor() {
        this.notFoundText = 'PAYMENTS.SELECT.NOT_FOUND';
        this.typeToSearchText = 'PAYMENTS.SELECT.SEARCH';
        this.addTagText = 'PAYMENTS.SELECT.ADD';
        this.loadingText = 'PAYMENTS.SELECT.LOADING';
        this.clearAllText = 'PAYMENTS.SELECT.CLEAR';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
};
JSelectConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], JSelectConfig);



/***/ }),

/***/ 41908:
/*!*************************************************************************!*\
  !*** ./src/app/shared/select-module/select-dropdown-panel.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JDropdownPanelComponent": () => (/* binding */ JDropdownPanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 73911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 73066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71695);
/* harmony import */ var _select_dropdown_panel_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dropdown-panel.service */ 94297);
/* harmony import */ var _select_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-utils */ 81635);







const TOP_CSS_CLASS = 'j-select-top';
const BOTTOM_CSS_CLASS = 'j-select-bottom';
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined'
    ? rxjs__WEBPACK_IMPORTED_MODULE_2__.animationFrameScheduler
    : rxjs__WEBPACK_IMPORTED_MODULE_3__.asapScheduler;
let JDropdownPanelComponent = class JDropdownPanelComponent {
    constructor(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    get currentPosition() {
        return this._currentPosition;
    }
    get itemsLength() {
        return this._itemsLength;
    }
    set itemsLength(value) {
        if (value !== this._itemsLength) {
            this._itemsLength = value;
            this._onItemsLengthChanged();
        }
    }
    get _startOffset() {
        if (this.markedItem) {
            const { itemHeight, panelHeight } = this._panelService.dimensions;
            const offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
        }
        return 0;
    }
    handleMousedown($event) {
        const target = $event.target;
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    }
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    }
    ngOnChanges(changes) {
        if (changes.items) {
            const change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    scrollTo(option, startFromOption = false) {
        if (!option) {
            return;
        }
        const index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        let scrollTo;
        if (this.virtualScroll) {
            const itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            const item = this._dropdown.querySelector(`#${option.htmlId}`);
            const lastScroll = startFromOption
                ? item.offsetTop
                : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if ((0,_select_utils__WEBPACK_IMPORTED_MODULE_1__.isDefined)(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    }
    scrollToTag() {
        const panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    adjustPosition() {
        const parent = this._parent.getBoundingClientRect();
        const select = this._select.getBoundingClientRect();
        this._setOffset(parent, select);
    }
    _handleDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updatePosition();
        }
        this._dropdown.style.opacity = '1';
    }
    _handleScroll() {
        this._zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.auditTime)(0, SCROLL_SCHEDULER))
                .subscribe((e) => this._onContentScrolled(e.target.scrollTop));
        });
    }
    _handleOutsideClick() {
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._document, 'touchstart', { capture: true }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._document, 'mousedown', { capture: true }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$))
                .subscribe(($event) => this._checkToClose($event));
        });
    }
    _checkToClose($event) {
        if (this._select.contains($event.target) ||
            this._dropdown.contains($event.target)) {
            return;
        }
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target &&
            $event.target.shadowRoot &&
            path &&
            path[0] &&
            this._select.contains(path[0])) {
            return;
        }
        this._zone.run(() => this.outsideClick.emit());
    }
    _onItemsChange(items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._updateItems(firstChange);
        }
    }
    _updateItems(firstChange) {
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            Promise.resolve().then(() => {
                const panelHeight = this._scrollablePanel.clientHeight;
                this._panelService.setDimensions(0, panelHeight);
                this._handleDropdownPosition();
                this.scrollTo(this.markedItem, firstChange);
            });
        });
    }
    _updateItemsRange(firstChange) {
        this._zone.runOutsideAngular(() => {
            this._measureDimensions().then(() => {
                if (firstChange) {
                    this._renderItemsRange(this._startOffset);
                    this._handleDropdownPosition();
                }
                else {
                    this._renderItemsRange();
                }
            });
        });
    }
    _onContentScrolled(scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    }
    _updateVirtualHeight(height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = `${height}px`;
            this._updateScrollHeight = false;
        }
    }
    _onItemsLengthChanged() {
        this._updateScrollHeight = true;
    }
    _renderItemsRange(scrollTop = null) {
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
        this._zone.run(() => {
            this.update.emit(this.items.slice(range.start, range.end));
            this.scroll.emit({ start: range.start, end: range.end });
        });
        if ((0,_select_utils__WEBPACK_IMPORTED_MODULE_1__.isDefined)(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    }
    _measureDimensions() {
        if (this._panelService.dimensions.itemHeight > 0 ||
            this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        const [first] = this.items;
        this.update.emit([first]);
        return Promise.resolve().then(() => {
            const option = this._dropdown.querySelector(`#${first.htmlId}`);
            const optionHeight = option.clientHeight;
            this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
            const panelHeight = this._scrollablePanel.clientHeight;
            this._panelService.setDimensions(optionHeight, panelHeight);
            return this._panelService.dimensions;
        });
    }
    _fireScrollToEnd(scrollTop) {
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        const padding = this.virtualScroll
            ? this._virtualPadding
            : this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run(() => this.scrollToEnd.emit());
            this._scrollToEndFired = true;
        }
    }
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        const selectRect = this._select.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const offsetTop = selectRect.top + window.pageYOffset;
        const height = selectRect.height;
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight >
            scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    _appendDropdown() {
        if (!this.appendTo) {
            return;
        }
        if (typeof this.appendTo === 'string') {
            this._parent = document.querySelector(this.appendTo);
            if (!this._parent) {
                throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
            }
        }
        else {
            this._parent = this.appendTo;
        }
        this._parent.appendChild(this._dropdown);
    }
    _updatePosition() {
        const select = this._select.getBoundingClientRect();
        const parent = this._parent.getBoundingClientRect();
        // const offsetLeft = select.left - parent.left;
        this._setOffset(parent, select);
        // this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = parent.width + 'px';
        this._dropdown.style.minWidth = parent.width + 'px';
    }
    _setOffset(parent, select) {
        const delta = select.height;
        if (this._currentPosition === 'top') {
            const offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            const offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    }
};
JDropdownPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone },
    { type: _select_dropdown_panel_service__WEBPACK_IMPORTED_MODULE_0__.JDropdownPanelService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,] }] }
];
JDropdownPanelComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, static: true },] }],
    scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, static: true },] }],
    paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, static: true },] }],
    handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['mousedown', ['$event'],] }]
};
JDropdownPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        selector: 'j-dropdown-panel',
        template: `
    <div *ngIf="headerTemplate" class="j-dropdown-header">
      <ng-container
        [ngTemplateOutlet]="headerTemplate"
        [ngTemplateOutletContext]="{ searchTerm: filterValue }"
      ></ng-container>
    </div>
    <div #scroll class="j-dropdown-panel-items scroll-host">
      <div #padding [class.total-padding]="virtualScroll"></div>
      <div #content [class.scrollable-content]="virtualScroll && items.length">
        <ng-content></ng-content>
      </div>
    </div>
    <div *ngIf="footerTemplate" class="j-dropdown-footer">
      <ng-container
        [ngTemplateOutlet]="footerTemplate"
        [ngTemplateOutletContext]="{ searchTerm: filterValue }"
      ></ng-container>
    </div>
  `,
    })
], JDropdownPanelComponent);



/***/ }),

/***/ 94297:
/*!***********************************************************************!*\
  !*** ./src/app/shared/select-module/select-dropdown-panel.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JDropdownPanelService": () => (/* binding */ JDropdownPanelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let JDropdownPanelService = class JDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    get dimensions() {
        return this._dimensions;
    }
    calculateItems(scrollPos, itemsLength, buffer) {
        const d = this._dimensions;
        const scrollHeight = d.itemHeight * itemsLength;
        const scrollTop = Math.max(0, scrollPos);
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        const maxStartEnd = end;
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    setDimensions(itemHeight, panelHeight) {
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        const itemBottom = itemTop + itemHeight;
        const top = lastScroll;
        const bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    }
};
JDropdownPanelService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], JDropdownPanelService);



/***/ }),

/***/ 82187:
/*!*********************************************************************!*\
  !*** ./src/app/shared/select-module/select-items-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsList": () => (/* binding */ ItemsList)
/* harmony export */ });
/* harmony import */ var _select_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-utils */ 81635);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/index */ 96530);


// removed search helper and diacritic. Check ng-select search helper
class ItemsList {
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    get items() {
        return this._items;
    }
    get filteredItems() {
        return this._filteredItems;
    }
    get markedIndex() {
        return this._markedIndex;
    }
    get selectedItems() {
        return this._selectionModel.value;
    }
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    get noItemsToSelect() {
        return (this._ngSelect.hideSelected &&
            this._items.length === this.selectedItems.length);
    }
    get maxItemsSelected() {
        return (this._ngSelect.multiple &&
            this._ngSelect.maxSelectedItems <= this.selectedItems.length);
    }
    get lastSelectedItem() {
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    setItems(items) {
        this._items = items.map((item, index) => this.mapItem(item, index));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected &&
            (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(item.index) &&
            this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    findItem(value) {
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = (item) => this._ngSelect.compareWith(item.value, value);
        }
        else if (this._ngSelect.bindValue) {
            findBy = (item) => !item.children &&
                this.resolveNested(item.value, this._ngSelect.bindValue) === value;
        }
        else {
            findBy = (item) => item.value === value ||
                (!item.children &&
                    item.label &&
                    item.label === this.resolveNested(value, this._ngSelect.bindLabel));
        }
        return this._items.find((item) => findBy(item));
    }
    addItem(item) {
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach((item) => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    findByLabel(term) {
        // removed search helper and diacritic. Check ng-select search helper
        // term = searchHelper.stripSpecialChars(term).toLocaleLowerCase();
        term = term.toLocaleLowerCase();
        return this.filteredItems.find((item) => {
            // const label = searchHelper.stripSpecialChars(item.label).toLocaleLowerCase();
            const label = item.label.toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    }
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        // term = this._ngSelect.searchFn ? term : searchHelper.stripSpecialChars(term).toLocaleLowerCase();
        term = this._ngSelect.searchFn ? term : term.toLocaleLowerCase();
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected &&
                    ((item.parent && item.parent.selected) || item.selected)) {
                    continue;
                }
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    const head = this._items.find((x) => x === last.parent);
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter((x) => !x.selected);
        }
        else {
            this._filteredItems = this._items;
        }
    }
    unmarkItem() {
        this._markedIndex = -1;
    }
    markNextItem() {
        this._stepToItem(+1);
    }
    markPreviousItem() {
        this._stepToItem(-1);
    }
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        const lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault
                ? this.filteredItems.findIndex((x) => !x.disabled)
                : -1;
        }
    }
    resolveNested(option, key) {
        if (!key) {
            return;
        }
        if (!(0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            let keys = key.split('.');
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    mapItem(item, index) {
        const label = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(item.$ngOptionLabel)
            ? item.$ngOptionLabel
            : this.resolveNested(item, this._ngSelect.bindLabel);
        const value = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${index}`,
        };
    }
    mapSelectedItems() {
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            const value = this._ngSelect.bindValue
                ? this.resolveNested(selected.value, this._ngSelect.bindValue)
                : selected.value;
            const item = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter((x) => this.selectedItems.indexOf(x) === -1);
        }
    }
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            const parent = item.parent;
            const parentExists = this._filteredItems.find((x) => x === parent);
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [
            ...this._filteredItems.sort((a, b) => a.index - b.index),
        ];
    }
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter((x) => x !== item);
        if (item.parent) {
            const children = item.parent.children;
            if (children.every((x) => x.selected)) {
                this._filteredItems = this._filteredItems.filter((x) => x !== item.parent);
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter((x) => x.parent !== item);
        }
    }
    _defaultSearchFn(search, opt) {
        //  const label = searchHelper.stripSpecialChars(opt.label).toLocaleLowerCase();
        const label = opt.label.toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return this._markedIndex === this._filteredItems.length - 1
                ? 0
                : this._markedIndex + 1;
        }
        return this._markedIndex <= 0
            ? this._filteredItems.length - 1
            : this._markedIndex - 1;
    }
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 ||
            this._filteredItems.every((x) => x.disabled)) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    _getLastMarkedIndex() {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    }
    _groupBy(items, prop) {
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[prop])) {
            for (const item of items) {
                const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
                groups.set(item, children);
            }
            return groups;
        }
        const isFnKey = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(this._ngSelect.groupBy);
        const keyFn = (item) => {
            let key = isFnKey
                ? prop(item.value)
                : item.value[prop];
            return (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(key) ? key : undefined;
        };
        // Group items by key.
        for (const item of items) {
            let key = keyFn(item);
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    _flatten(groups) {
        const isGroupByFn = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(this._ngSelect.groupBy);
        const items = [];
        for (const key of Array.from(groups.keys())) {
            let i = items.length;
            if (key === undefined) {
                const withoutGroup = groups.get(undefined) || [];
                items.push(...withoutGroup.map((x) => (Object.assign(Object.assign({}, x), { index: i++ }))));
                continue;
            }
            const isObjectKey = (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(key);
            const parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.generateUniqueId)(),
            };
            const groupKey = isGroupByFn
                ? this._ngSelect.bindLabel
                : this._ngSelect.groupBy;
            const groupValue = this._ngSelect.groupValue ||
                (() => {
                    if (isObjectKey) {
                        return key.value;
                    }
                    return { [groupKey]: key };
                });
            const children = groups.get(key).map((x) => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map((x) => x.value));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}


/***/ }),

/***/ 75821:
/*!*****************************************************************!*\
  !*** ./src/app/shared/select-module/select-option.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JOptionComponent": () => (/* binding */ JOptionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);



let JOptionComponent = class JOptionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = this._isDisabled(value);
    }
    get label() {
        return (this.elementRef.nativeElement.textContent || '').trim();
    }
    ngOnChanges(changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
            });
        }
    }
    ngAfterViewChecked() {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML,
            });
        }
    }
    ngOnDestroy() {
        this.stateChange$.complete();
    }
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
};
JOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
JOptionComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
JOptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'j-option',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
        template: `<ng-content></ng-content>`,
    })
], JOptionComponent);



/***/ }),

/***/ 2757:
/*!**************************************************************!*\
  !*** ./src/app/shared/select-module/select-tpl.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JItemLabelDirective": () => (/* binding */ JItemLabelDirective),
/* harmony export */   "JOptionTemplateDirective": () => (/* binding */ JOptionTemplateDirective),
/* harmony export */   "JOptgroupTemplateDirective": () => (/* binding */ JOptgroupTemplateDirective),
/* harmony export */   "JLabelTemplateDirective": () => (/* binding */ JLabelTemplateDirective),
/* harmony export */   "JMultiLabelTemplateDirective": () => (/* binding */ JMultiLabelTemplateDirective),
/* harmony export */   "JHeaderTemplateDirective": () => (/* binding */ JHeaderTemplateDirective),
/* harmony export */   "JFooterTemplateDirective": () => (/* binding */ JFooterTemplateDirective),
/* harmony export */   "JNotFoundTemplateDirective": () => (/* binding */ JNotFoundTemplateDirective),
/* harmony export */   "JTypeToSearchTemplateDirective": () => (/* binding */ JTypeToSearchTemplateDirective),
/* harmony export */   "JLoadingTextTemplateDirective": () => (/* binding */ JLoadingTextTemplateDirective),
/* harmony export */   "JTagTemplateDirective": () => (/* binding */ JTagTemplateDirective),
/* harmony export */   "JLoadingSpinnerTemplateDirective": () => (/* binding */ JLoadingSpinnerTemplateDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _select_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-utils */ 81635);



let JItemLabelDirective = class JItemLabelDirective {
    constructor(element) {
        this.element = element;
        this.escape = true;
    }
    ngOnChanges(changes) {
        this.element.nativeElement.innerHTML = this.escape
            ? (0,_select_utils__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(this.ngItemLabel)
            : this.ngItemLabel;
    }
};
JItemLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
JItemLabelDirective.propDecorators = {
    ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
JItemLabelDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[ngItemLabel]' })
], JItemLabelDirective);

let JOptionTemplateDirective = class JOptionTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JOptionTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JOptionTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-option-tmp]' })
], JOptionTemplateDirective);

let JOptgroupTemplateDirective = class JOptgroupTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JOptgroupTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JOptgroupTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-optgroup-tmp]' })
], JOptgroupTemplateDirective);

let JLabelTemplateDirective = class JLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JLabelTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-label-tmp]' })
], JLabelTemplateDirective);

let JMultiLabelTemplateDirective = class JMultiLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JMultiLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JMultiLabelTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-multi-label-tmp]' })
], JMultiLabelTemplateDirective);

let JHeaderTemplateDirective = class JHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JHeaderTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-header-tmp]' })
], JHeaderTemplateDirective);

let JFooterTemplateDirective = class JFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JFooterTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-footer-tmp]' })
], JFooterTemplateDirective);

let JNotFoundTemplateDirective = class JNotFoundTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JNotFoundTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JNotFoundTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-notfound-tmp]' })
], JNotFoundTemplateDirective);

let JTypeToSearchTemplateDirective = class JTypeToSearchTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JTypeToSearchTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-typetosearch-tmp]' })
], JTypeToSearchTemplateDirective);

let JLoadingTextTemplateDirective = class JLoadingTextTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JLoadingTextTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JLoadingTextTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-loadingtext-tmp]' })
], JLoadingTextTemplateDirective);

let JTagTemplateDirective = class JTagTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JTagTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JTagTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-tag-tmp]' })
], JTagTemplateDirective);

let JLoadingSpinnerTemplateDirective = class JLoadingSpinnerTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
JLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
JLoadingSpinnerTemplateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: '[j-loadingspinner-tmp]' })
], JLoadingSpinnerTemplateDirective);



/***/ }),

/***/ 81635:
/*!******************************************************!*\
  !*** ./src/app/shared/select-module/select-utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeHTML": () => (/* binding */ escapeHTML),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) :
        string;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
    return value instanceof Promise;
}
function isFunction(value) {
    return value instanceof Function;
}


/***/ }),

/***/ 69585:
/*!**********************************************************!*\
  !*** ./src/app/shared/select-module/select.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECTION_MODEL_FACTORY": () => (/* binding */ SELECTION_MODEL_FACTORY),
/* harmony export */   "JSelectComponent": () => (/* binding */ JSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.component.html?ngResource */ 78318);
/* harmony import */ var _select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.component.scss?ngResource */ 36728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var _select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-tpl.directive */ 2757);
/* harmony import */ var _select_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-utils */ 81635);
/* harmony import */ var _select_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-items-list.component */ 82187);
/* harmony import */ var _select_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select.types */ 64409);
/* harmony import */ var _select_dropdown_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-dropdown-panel.component */ 41908);
/* harmony import */ var _select_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-option.component */ 75821);
/* harmony import */ var _select_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-config.service */ 68846);
/* harmony import */ var _select_dropdown_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-dropdown-panel.service */ 94297);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/index */ 96530);
/* harmony import */ var _shared_form_field_form_field_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/form-field/form-field-control */ 46758);
/* harmony import */ var _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/form-field/utils */ 11685);
/* harmony import */ var _shared_form_field_error_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/form-field/error.status */ 61688);
var JSelectComponent_1;



















const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.InjectionToken('j-select-selection-model');
// Boilerplate for applying mixins to MatSelect.
/** @docs-private */
class JSelectBase {
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
// const _JSelectMixinBase:
// typeof MatSelectBase =
//     mixinTabIndex(mixinDisabled(mixinErrorState(MatSelectBase)));
const JSelectMixinBase = (0,_shared_form_field_error_status__WEBPACK_IMPORTED_MODULE_13__.mixinErrorState)(JSelectBase);
/* tslint:disable no-conflicting-lifecycle */
let JSelectComponent = JSelectComponent_1 = class JSelectComponent extends JSelectMixinBase {
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, _cd // private _console: ConsoleService
    ) {
        super(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this.classes = classes;
        this.autoFocus = autoFocus;
        this.ngControl = ngControl;
        this._cd = _cd;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (_) => true;
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        this.controlType = 'select';
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = (0,_utils_index__WEBPACK_IMPORTED_MODULE_10__.generateUniqueId)();
        // JFormControlField
        this.id = this.dropdownId;
        this.escapeHTML = true;
        this.useDefaultClass = true;
        // JFormControlField
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this.clearItem = (item) => {
            const option = this.selectedItems.find((x) => x.value === item);
            this.unselect(option);
        };
        this.trackByOption = (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        };
        if (this.ngControl) {
            // Note: provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        this._mergeGlobalConfig(config);
        this.itemsList = new _select_items_list_component__WEBPACK_IMPORTED_MODULE_4__.ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        if (!(0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * JFormFieldControl.
     * @docs-private
     */
    /** Value of the select control. */
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (newValue !== this._value) {
            this.writeValue(newValue);
            this._value = newValue;
        }
    }
    get clearSearchOnAdd() {
        return (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this._clearSearchOnAdd)
            ? this._clearSearchOnAdd
            : this.closeOnSelect;
    }
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    get disabled() {
        return this.readonly || this._disabled;
    }
    get filtered() {
        return (!!this.searchTerm && this.searchable) || this._isComposing;
    }
    get _editableSearchTerm() {
        return this.editableSearchTerm && !this.multiple;
    }
    /**
     * JFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        return ((this.isOpen && this.searchable) ||
            (this.searchable && this.focused) ||
            !this.empty);
    }
    /**
     * JFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this.hasValue;
    }
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    get selectedValues() {
        return this.selectedItems.map((x) => x.value);
    }
    get hasValue() {
        return this.selectedItems.some((item) => item.value);
    }
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(changes.isOpen.currentValue);
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    ngAfterViewInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if ((0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this.autoFocus)) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    handleKeyDown($event) {
        const keyCode = _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    handleKeyCode($event) {
        switch ($event.which) {
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.Space:
                this._handleSpace($event);
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.Enter:
                this._handleEnter($event);
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.Tab:
                this._handleTab($event);
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case _select_types__WEBPACK_IMPORTED_MODULE_5__.KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    handleMousedown($event) {
        const target = $event.target;
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('j-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('j-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('j-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    onContainerClick($event) {
        this.handleMousedown($event);
    }
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
        // this.stateChanges.next();
    }
    /** @todo connect to aria?
     * JFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        // this._ariaDescribedby = ids.join(' ');
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(state) {
        this._disabled = state;
        // this._cd.markForCheck();
        // this.stateChanges.next();
    }
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    open() {
        if (this.disabled ||
            this.isOpen ||
            this.itemsList.maxItemsSelected ||
            this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (this.searchable && !this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this.stateChanges.next();
        this._cd.markForCheck();
    }
    toggleItem(item, event) {
        if (event) {
            event.stopPropagation();
        }
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    }
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    focus() {
        this.searchInput.nativeElement.focus();
    }
    blur() {
        this.searchInput.nativeElement.blur();
    }
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    selectTag() {
        let tag;
        if ((0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.addTag)) {
            tag = this.addTag(this.searchTerm);
        }
        else {
            tag = this._primitive
                ? this.searchTerm
                : { [this.bindLabel]: this.searchTerm };
        }
        const handleTag = (item) => this._isTypeahead || !this.isOpen
            ? this.itemsList.mapItem(item, null)
            : this.itemsList.addItem(item);
        if ((0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isPromise)(tag)) {
            tag.then((item) => this.select(handleTag(item))).catch(() => { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    showClear() {
        return (this.clearable && (this.hasValue || this.searchTerm) && !this.disabled);
    }
    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }
        const term = this.searchTerm.toLowerCase().trim();
        return (this.addTag &&
            !this.itemsList.filteredItems.some((x) => x.label.toLowerCase() === term) &&
            ((!this.hideSelected && this.isOpen) ||
                !this.selectedItems.some((x) => x.label.toLowerCase() === term)) &&
            !this.loading);
    }
    showNoItemsFound() {
        const empty = this.itemsList.filteredItems.length === 0;
        return (((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag);
    }
    showTypeToSearch() {
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    onCompositionStart() {
        this._isComposing = true;
    }
    onCompositionEnd(term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    }
    filter(term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({
            term,
            items: this.itemsList.filteredItems.map((x) => x.value),
        });
        this.open();
    }
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('j-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
        /**
         * @todo possible issue with autofocus with change after checking
         */
        this.stateChanges.next();
    }
    onInputBlur($event) {
        this.element.classList.remove('j-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
            this.stateChanges.next();
            this._cd.markForCheck();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    }
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    detectChanges() {
        if (!this._cd.destroyed) {
            this._cd.markForCheck();
        }
    }
    _setSearchTermFromItems() {
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }
    _setItems(items) {
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(firstItem)
            ? !(0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(firstItem)
            : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    _setItemsFromNgOptions() {
        const mapNgOptions = (options) => {
            this.items = options.map((option) => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled,
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };
        const handleOptionChange = () => {
            const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.ngOptions.changes, this._destroy$);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(...this.ngOptions.map((option) => option.stateChange$))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(changedOrDestroyed))
                .subscribe((option) => {
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                // this.stateChanges.next()
                // this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$))
            .subscribe((options) => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        });
    }
    _isValidWriteValue(value) {
        if (!(0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(value) ||
            (this.multiple && value === '') ||
            (Array.isArray(value) && value.length === 0)) {
            return false;
        }
        const validateBinding = (item) => {
            if (!(0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this.compareWith) && (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(item) && this.bindValue) {
                // this._console.warn(
                //   `Binding object(${JSON.stringify(
                //     item
                //   )}) with bindValue is not allowed.`
                // );
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                // this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((item) => validateBinding(item));
        }
        else {
            return validateBinding(value);
        }
    }
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        const select = (val) => {
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                const isValObject = (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(val);
                const isPrimitive = !isValObject && !this.bindValue;
                if (isValObject || isPrimitive) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue && val) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val,
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            ngModel.forEach((item) => select(item));
        }
        else {
            select(ngModel);
        }
    }
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)((letter) => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(() => this._pressedKeys.join('')))
            .subscribe((term) => {
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    // this._cd.markForCheck();
                    // this.stateChanges.next();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        });
    }
    _setInputAttributes() {
        const input = this.searchInput.nativeElement;
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    _updateNgModel() {
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                let value = null;
                if (item.children) {
                    const groupKey = this.groupValue
                        ? this.bindValue
                        : this.groupBy;
                    value = item.value[groupKey || this.groupBy];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        const selected = this.selectedItems.map((x) => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange((0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        // this._cd.markForCheck();
        // this.stateChanges.next();
    }
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            // this._cd.markForCheck();
            // this.stateChanges.next();
            this.dropdownPanel.adjustPosition();
        }
    }
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    _nextItemIsTag(nextStep) {
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return (this.addTag &&
            this.searchTerm &&
            this.itemsList.markedItem &&
            (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length));
    }
    _handleBackspace() {
        if (this.searchTerm ||
            !this.clearable ||
            !this.clearOnBackspace ||
            !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    get _validTerm() {
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this.virtualScroll)
            ? this.virtualScroll
            : (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(config.disableVirtualScroll)
                ? !config.disableVirtualScroll
                : false;
        this.openOnEnter = (0,_select_utils__WEBPACK_IMPORTED_MODULE_3__.isDefined)(this.openOnEnter)
            ? this.openOnEnter
            : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    }
};
JSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Attribute, args: ['class',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Attribute, args: ['autofocus',] }] },
    { type: _select_config_service__WEBPACK_IMPORTED_MODULE_8__.JSelectConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Optional }] },
    { type: _shared_form_field_utils__WEBPACK_IMPORTED_MODULE_12__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef }
];
JSelectComponent.propDecorators = {
    bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    searchMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    shadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-typeahead',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-multiple',] }],
    addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-taggable',] }],
    searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-searchable',] }],
    clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-clearable',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-opened',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['focus',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['change',] }],
    openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['open',] }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['close',] }],
    searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['search',] }],
    clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['clear',] }],
    addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['add',] }],
    removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['remove',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['scroll',] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChild, args: [_select_tpl_directive__WEBPACK_IMPORTED_MODULE_2__.JLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.TemplateRef },] }],
    dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.forwardRef)(() => _select_dropdown_panel_component__WEBPACK_IMPORTED_MODULE_6__.JDropdownPanelComponent),] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['searchInput', { static: false },] }],
    ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ContentChildren, args: [_select_option_component__WEBPACK_IMPORTED_MODULE_7__.JOptionComponent, { descendants: true },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-disabled',] }],
    filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostBinding, args: ['class.j-select-filtered',] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostListener, args: ['keydown', ['$event'],] }]
};
JSelectComponent = JSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'j-select',
        template: _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            // {
            //   provide: NG_VALUE_ACCESSOR,
            //   useExisting: forwardRef(() => JSelectComponent),
            //   multi: true,
            // },
            { provide: _shared_form_field_form_field_control__WEBPACK_IMPORTED_MODULE_11__.JFormFieldControl, useExisting: JSelectComponent_1 },
            _select_dropdown_panel_service__WEBPACK_IMPORTED_MODULE_9__.JDropdownPanelService,
        ],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewEncapsulation.None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectionStrategy.OnPush,
        host: {
            role: 'listbox',
            '[class.j-select]': 'useDefaultClass',
            '[class.j-select-single]': '!multiple',
        },
        styles: [_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JSelectComponent);



/***/ }),

/***/ 31259:
/*!*******************************************************!*\
  !*** ./src/app/shared/select-module/select.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectModule": () => (/* binding */ SelectModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _select_dropdown_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-dropdown-panel.component */ 41908);
/* harmony import */ var _select_option_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-option.component */ 75821);
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ 69585);
/* harmony import */ var _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-tpl.directive */ 2757);
/* harmony import */ var _select_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.types */ 64409);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 44466);










let SelectModule = class SelectModule {
};
SelectModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _select_dropdown_panel_component__WEBPACK_IMPORTED_MODULE_0__.JDropdownPanelComponent,
            _select_option_component__WEBPACK_IMPORTED_MODULE_1__.JOptionComponent,
            _select_component__WEBPACK_IMPORTED_MODULE_2__.JSelectComponent,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JOptgroupTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JOptionTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLabelTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JMultiLabelTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JHeaderTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JFooterTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JNotFoundTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JTypeToSearchTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLoadingTextTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JTagTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLoadingSpinnerTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JItemLabelDirective,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule.forChild()
        ],
        exports: [
            _select_component__WEBPACK_IMPORTED_MODULE_2__.JSelectComponent,
            _select_option_component__WEBPACK_IMPORTED_MODULE_1__.JOptionComponent,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JOptgroupTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JOptionTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLabelTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JMultiLabelTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JHeaderTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JFooterTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JNotFoundTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JTypeToSearchTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLoadingTextTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JTagTemplateDirective,
            _select_tpl_directive__WEBPACK_IMPORTED_MODULE_3__.JLoadingSpinnerTemplateDirective
        ],
        providers: [
            { provide: _select_component__WEBPACK_IMPORTED_MODULE_2__.SELECTION_MODEL_FACTORY, useValue: _select_types__WEBPACK_IMPORTED_MODULE_4__.DefaultSelectionModelFactory }
        ]
    })
], SelectModule);



/***/ }),

/***/ 64409:
/*!******************************************************!*\
  !*** ./src/app/shared/select-module/select.types.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCode": () => (/* binding */ KeyCode),
/* harmony export */   "DefaultSelectionModelFactory": () => (/* binding */ DefaultSelectionModelFactory),
/* harmony export */   "DefaultSelectionModel": () => (/* binding */ DefaultSelectionModel)
/* harmony export */ });
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Esc"] = 27] = "Esc";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
    KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    get value() {
        return this._selected;
    }
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                const childrenCount = item.parent.children.length;
                const selectedCount = item.parent.children.filter(x => x.selected).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = [...this._selected.filter(x => x.parent !== item), item];
                }
                else {
                    this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
                }
            }
        }
    }
    unselect(item, multiple) {
        this._selected = this._selected.filter(x => x !== item);
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter(x => x !== item && !x.disabled));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
    }
    _setChildrenSelectedState(children, selected) {
        for (const child of children) {
            if (child.disabled) {
                continue;
            }
            child.selected = selected;
        }
        ;
    }
    _removeChildren(parent) {
        this._selected = [
            ...this._selected.filter(x => x.parent !== parent),
            ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)
        ];
    }
    _removeParent(parent) {
        this._selected = this._selected.filter(x => x !== parent);
    }
    _activeChildren(item) {
        return item.children.every(x => !x.disabled || x.selected);
    }
}


/***/ }),

/***/ 76763:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audit": () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 52831);

function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    }
    notifyNext() {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}


/***/ }),

/***/ 71695:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auditTime": () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 76763);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 45398);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}


/***/ }),

/***/ 17271:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ 32282);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3670);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}


/***/ }),

/***/ 70523:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 52901);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 73066:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asapScheduler": () => (/* binding */ asapScheduler),
/* harmony export */   "asap": () => (/* binding */ asap)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 17271);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 70523);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;


/***/ }),

/***/ 32282:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": () => (/* binding */ Immediate),
/* harmony export */   "TestTools": () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};


/***/ }),

/***/ 36728:
/*!***********************************************************************!*\
  !*** ./src/app/shared/select-module/select.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".j-select {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.j-select [hidden] {\n  display: none;\n}\n.j-select.j-select-searchable .j-select-container .j-value-container .j-search-input {\n  opacity: 1;\n}\n.j-select.j-select-disabled .j-select-container .j-value-container .j-placeholder,\n.j-select.j-select-disabled .j-select-container .j-value-container .j-value {\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n.j-select.j-select-disabled .j-arrow-wrapper {\n  cursor: default;\n}\n.j-select.j-select-filtered .j-placeholder {\n  display: none;\n}\n.j-select .j-select-container {\n  cursor: default;\n  display: flex;\n  outline: none;\n  overflow: hidden;\n  width: 100%;\n}\n.j-select .j-select-container .j-value-container {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n.j-select .j-select-container .j-value-container .j-search-input {\n  opacity: 0;\n}\n.j-select .j-select-container .j-value-container .j-search-input > input {\n  box-sizing: content-box;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  outline: none;\n  padding-left: 2px;\n  cursor: default;\n  width: 100%;\n}\n.j-select .j-select-container .j-value-container .j-search-input > input::-ms-clear {\n  display: none;\n}\n.j-select .j-select-container .j-value-container .j-search-input > input[readonly] {\n  -webkit-user-select: none;\n          user-select: none;\n  width: 0;\n  padding: 0;\n}\n.j-select.j-select-single.j-select-filtered .j-select-container .j-value-container .j-value {\n  visibility: hidden;\n}\n.j-select.j-select-single .j-select-container .j-value-container {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.j-select.j-select-single .j-select-container .j-value-container .j-value {\n  padding-left: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.j-select.j-select-single .j-select-container .j-value-container .j-value .j-value-icon {\n  display: none;\n}\n.j-select.j-select-single .j-select-container .j-value-container .j-search-input {\n  top: 1.2em;\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n.j-select.j-select-multiple.j-select-disabled > .j-select-container .j-value-container .j-value .j-value-icon {\n  display: none;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container {\n  flex-wrap: wrap;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-placeholder {\n  position: absolute;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-value {\n  white-space: nowrap;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-value.j-value-disabled .j-value-icon {\n  display: none;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-value .j-value-icon {\n  cursor: pointer;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-search-input {\n  flex: 1;\n  z-index: 2;\n}\n.j-select.j-select-multiple .j-select-container .j-value-container .j-placeholder {\n  z-index: 1;\n}\n.j-select .j-clear-wrapper {\n  cursor: pointer;\n  position: relative;\n  width: 17px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.j-select .j-clear-wrapper .j-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n  pointer-events: none;\n}\n.j-select .j-spinner-loader {\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  margin-right: 5px;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 2px solid rgba(66, 66, 66, 0.2);\n  border-right: 2px solid rgba(66, 66, 66, 0.2);\n  border-bottom: 2px solid rgba(66, 66, 66, 0.2);\n  border-left: 2px solid #424242;\n  transform: translateZ(0);\n  animation: load8 0.8s infinite linear;\n}\n.j-select .j-spinner-loader:after {\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n}\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.j-select .j-arrow-wrapper {\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.j-select .j-arrow-wrapper .j-arrow {\n  pointer-events: none;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: absolute;\n}\n.j-dropdown-panel {\n  box-sizing: border-box;\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n}\n.j-dropdown-panel .j-dropdown-panel-items {\n  display: block;\n  height: auto;\n  box-sizing: border-box;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.j-dropdown-panel .j-dropdown-panel-items .j-optgroup {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.j-dropdown-panel .j-dropdown-panel-items .j-option {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n}\n.j-dropdown-panel .j-dropdown-panel-items .j-option .highlighted {\n  font-weight: bold;\n  text-decoration: underline;\n}\n.j-dropdown-panel .j-dropdown-panel-items .j-option.disabled {\n  cursor: default;\n}\n.j-dropdown-panel .scroll-host {\n  overflow: hidden;\n  overflow-y: auto;\n  position: relative;\n  display: block;\n  -webkit-overflow-scrolling: touch;\n  padding-right: 0.5rem;\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.j-dropdown-panel .scroll-host::-webkit-scrollbar {\n  width: 8px;\n}\n.j-dropdown-panel .scroll-host::-webkit-scrollbar-track {\n  background: #fff;\n}\n.j-dropdown-panel .scroll-host::-webkit-scrollbar-thumb {\n  background: #b7bec5;\n  border-radius: 10px;\n}\n.j-dropdown-panel .scrollable-content {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.j-dropdown-panel .total-padding {\n  width: 1px;\n  opacity: 0;\n}\n.j-form-field-type-select .j-form-field .j-form-field--infix {\n  border-top: 0px;\n  padding: 0;\n}\n.j-form-field-type-select .j-form-field-flex {\n  display: flex;\n}\n.j-form-field-type-select .j-form-field--label-wrapper {\n  top: 0;\n  box-sizing: border-box;\n}\n.j-select:not(.j-select-filtered) .j-has-value .input-shadow {\n  opacity: 0;\n}\n.j-value-container {\n  position: relative;\n  border: 0px;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  border-radius: 0;\n  background: none;\n  padding: 0;\n  height: 3.5em;\n}\n.j-form-field-has-label .j-value-container {\n  padding-top: 1.7em;\n  padding-bottom: 0.4em;\n}\n.j-dropdown-panel {\n  background-color: #fff;\n  padding: 1.5rem;\n}\n.j-dropdown-panel.j-select-bottom {\n  border-radius: 0 0 8px 8px;\n  margin-top: 1px;\n  box-shadow: 0px 14px 16px rgba(0, 0, 0, 0.05);\n}\n.j-dropdown-panel.j-select-top {\n  border-radius: 8px 8px 0 0;\n  margin-bottom: 2px;\n  box-shadow: 0 -1rem 3rem rgba(26, 28, 31, 0.175);\n}\n.j-dropdown-panel .j-option + .j-option {\n  margin-top: 0.5rem;\n}\n.j-value-label-default {\n  display: block;\n}\n.j-form-field-has-label .j-select.j-select-single .j-select-container .j-search-input {\n  top: 1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVBGO0FBY0U7RUFDRSxhQUFBO0FBWko7QUFlSTtFQUNFLFVBQUE7QUFiTjtBQXNCUTs7RUFFRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQXBCVjtBQXdCSTtFQUNFLGVBQUE7QUF0Qk47QUEwQkk7RUFDRSxhQUFBO0FBeEJOO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0FBMUJKO0FBMkJJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFFQSxtQkFBQTtBQTFCTjtBQTJCTTtFQUNFLFVBQUE7QUF6QlI7QUEwQlE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF4QlY7QUF5QlU7RUFDRSxhQUFBO0FBdkJaO0FBeUJVO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBdkJaO0FBK0JNO0VBQ0Usa0JBQUE7QUE3QlI7QUFpQ007RUF2RkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBeURGO0FBOEJRO0VBQ0UsaUJBQUE7RUExRlIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBK0RGO0FBMkJVO0VBQ0UsYUFBQTtBQXpCWjtBQTRCUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBMUJWO0FBa0NRO0VBQ0UsYUFBQTtBQWhDVjtBQXFDTTtFQUNFLGVBQUE7QUFuQ1I7QUFvQ1E7RUFDRSxrQkFBQTtBQWxDVjtBQW9DUTtFQUNFLG1CQUFBO0FBbENWO0FBb0NZO0VBQ0UsYUFBQTtBQWxDZDtBQXFDVTtFQUNFLGVBQUE7QUFuQ1o7QUFzQ1E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQXBDVjtBQXNDUTtFQUNFLFVBQUE7QUFwQ1Y7QUEwQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQXhDSjtBQXlDSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXZDTjtBQTBDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0FBeENKO0FBeUNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXZDTjtBQW1ESTtFQUNFO0lBRUUsdUJBQUE7RUF2Q047RUF5Q0k7SUFFRSx5QkFBQTtFQXZDTjtBQUNGO0FBMENFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBeENKO0FBeUNJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUF2Q047QUE0Q0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUF6Q0Y7QUEwQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUdBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXhDSjtBQTBDSTtFQWhPRixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF5TEY7QUF5Q0k7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdkNOO0FBMENNO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQXhDUjtBQTBDTTtFQUNFLGVBQUE7QUF4Q1I7QUE2Q0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUVBLFVBQUE7RUFLQSxVQUFBO0VBS0EsV0FBQTtFQU1BLG9CQUFBO0FBekRKO0FBMENJO0VBQ0UsVUFBQTtBQXhDTjtBQTRDSTtFQUNFLGdCQy9QRTtBRHFOUjtBQThDSTtFQUNFLG1CQy9QSztFRGdRTCxtQkFBQTtBQTVDTjtBQW9ERTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWxESjtBQW9ERTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBbERKO0FBc0RFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFuREo7QUFxREU7RUFDRSxhQUFBO0FBbkRKO0FBcURFO0VBQ0UsTUFBQTtFQUNBLHNCQUFBO0FBbkRKO0FBeURJO0VBQ0UsVUFBQTtBQXRETjtBQTJEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUF4REY7QUF5REU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBdkRKO0FBMERBO0VBQ0Usc0JDaFVNO0VEaVVOLGVBQUE7QUF2REY7QUE0REU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0NqSFk7QUR1RGhCO0FBNERFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQ2c0Qm1CO0FEMTdCdkI7QUE0REU7RUFDRSxrQkFBQTtBQTFESjtBQTZEQTtFQUNFLGNBQUE7QUExREY7QUE2REU7RUFDRSxVQUFBO0FBMURKIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbkBtaXhpbiB0cnVuY2F0ZS10ZXh0KCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmotc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIEBpbmNsdWRlIGJveC1zaXppbmc7XG4gIC8vIGRpdixcbiAgLy8gaW5wdXQsXG4gIC8vIHNwYW4ge1xuICAvLyAgIEBpbmNsdWRlIGJveC1zaXppbmc7XG4gIC8vIH1cbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgJi5qLXNlbGVjdC1zZWFyY2hhYmxlIHtcbiAgICAuai1zZWxlY3QtY29udGFpbmVyIC5qLXZhbHVlLWNvbnRhaW5lciAuai1zZWFyY2gtaW5wdXQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgJi5qLXNlbGVjdC1vcGVuZWQgLmotc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLy8gei1pbmRleDogMTAwMTtcbiAgfVxuICAmLmotc2VsZWN0LWRpc2FibGVkIHtcbiAgICAuai1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIC5qLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5qLXBsYWNlaG9sZGVyLFxuICAgICAgICAuai12YWx1ZSB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5qLWFycm93LXdyYXBwZXIge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgfVxuICAmLmotc2VsZWN0LWZpbHRlcmVkIHtcbiAgICAuai1wbGFjZWhvbGRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAuai1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5qLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIC8vIHBhZGRpbmc6IDBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuai1zZWFyY2gtaW5wdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICA+IGlucHV0IHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgJjo6LW1zLWNsZWFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICZbcmVhZG9ubHldIHtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmotc2VsZWN0LXNpbmdsZSB7XG4gICAgJi5qLXNlbGVjdC1maWx0ZXJlZCB7XG4gICAgICAuai1zZWxlY3QtY29udGFpbmVyIC5qLXZhbHVlLWNvbnRhaW5lciAuai12YWx1ZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmotc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAuai12YWx1ZS1jb250YWluZXIge1xuICAgICAgICBAaW5jbHVkZSB0cnVuY2F0ZS10ZXh0O1xuICAgICAgICAuai12YWx1ZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgQGluY2x1ZGUgdHJ1bmNhdGUtdGV4dDtcbiAgICAgICAgICAuai12YWx1ZS1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5qLXNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgdG9wOiAxLjJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmotc2VsZWN0LW11bHRpcGxlIHtcbiAgICAmLmotc2VsZWN0LWRpc2FibGVkIHtcbiAgICAgID4gLmotc2VsZWN0LWNvbnRhaW5lciAuai12YWx1ZS1jb250YWluZXIgLmotdmFsdWUge1xuICAgICAgICAuai12YWx1ZS1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5qLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgLmotdmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAuai1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5qLXZhbHVlIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICYuai12YWx1ZS1kaXNhYmxlZCB7XG4gICAgICAgICAgICAuai12YWx1ZS1pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmotdmFsdWUtaWNvbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5qLXNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICAgIC5qLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmotY2xlYXItd3JhcHBlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTdweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAuai1jbGVhciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuICAuai1zcGlubmVyLWxvYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDI0MjQyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBhbmltYXRpb246IGxvYWQ4IDAuOHMgaW5maW5pdGUgbGluZWFyO1xuICAgICY6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgfVxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBsb2FkOCB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmotYXJyb3ctd3JhcHBlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLmotYXJyb3cge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmotZHJvcGRvd24tcGFuZWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDUwO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC5qLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuai1vcHRncm91cCB7XG4gICAgICBAaW5jbHVkZSB0cnVuY2F0ZS10ZXh0KCk7XG4gICAgfVxuXG4gICAgLmotb3B0aW9uIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vIEBpbmNsdWRlIHRydW5jYXRlLXRleHQoKTtcblxuICAgICAgLmhpZ2hsaWdodGVkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2Nyb2xsLWhvc3Qge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcblxuICAgIC8qIHdpZHRoICovXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICB9XG5cbiAgICAvKiBUcmFjayAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAvKiBIYW5kbGUgKi9cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgLy8gYmFja2dyb3VuZDogIzU1NTtcbiAgICB9XG4gIH1cbiAgLnNjcm9sbGFibGUtY29udGVudCB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAudG90YWwtcGFkZGluZyB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uai1mb3JtLWZpZWxkLXR5cGUtc2VsZWN0IHtcbiAgLmotZm9ybS1maWVsZCAuai1mb3JtLWZpZWxkLS1pbmZpeCB7XG4gICAgYm9yZGVyLXRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmotZm9ybS1maWVsZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5qLWZvcm0tZmllbGQtLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5cbi5qLXNlbGVjdDpub3QoLmotc2VsZWN0LWZpbHRlcmVkKSB7XG4gIC5qLWhhcy12YWx1ZSB7XG4gICAgLmlucHV0LXNoYWRvdyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuXG4uai12YWx1ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgLmotZm9ybS1maWVsZC1oYXMtbGFiZWwgJiB7XG4gICAgcGFkZGluZy10b3A6IDEuN2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRlbTtcbiAgfVxufVxuLmotZHJvcGRvd24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IHNwYWNlKDQpO1xuXG4gIC8vIG1hcmdpbi1sZWZ0OiAtLjVyZW07XG4gIC8vIG1hcmdpbi1yaWdodDogLS41cmVtO1xuXG4gICYuai1zZWxlY3QtYm90dG9tIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgJGlucHV0LWJvcmRlci1yYWRpdXMgJGlucHV0LWJvcmRlci1yYWRpdXM7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWxnO1xuICB9XG4gICYuai1zZWxlY3QtdG9wIHtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAkaW5wdXQtYm9yZGVyLXJhZGl1cyAwIDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LXRvLXRvcC1sZztcbiAgfVxuICAmIC5qLW9wdGlvbiArIC5qLW9wdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogc3BhY2UoMik7XG4gIH1cbn1cbi5qLXZhbHVlLWxhYmVsLWRlZmF1bHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qLWZvcm0tZmllbGQtaGFzLWxhYmVsIHtcbiAgLmotc2VsZWN0Lmotc2VsZWN0LXNpbmdsZSAuai1zZWxlY3QtY29udGFpbmVyIC5qLXNlYXJjaC1pbnB1dCB7XG4gICAgdG9wOiAxLjdlbTtcbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxyXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS0xMDA6ICNmYWY3Zjc7XHJcbiRncmF5LTIwMDogI2Y2ZjdmODtcclxuJGdyYXktMzAwOiAjZWNlZWYxO1xyXG4kZ3JheS00MDA6ICNkNmRhZGY7XHJcbiRncmF5LTUwMDogI2I3YmVjNTtcclxuJGdyYXktNjAwOiAjNjY2YzcyO1xyXG4kZ3JheS03MDA6ICM0NzRiNTI7XHJcbiRncmF5LTgwMDogI2U5ZWNmMTtcclxuJGdyYXktOTAwOiAjZGJkZmUyO1xyXG4kZ3JheS0xMDAwOiAjODI4MjgyO1xyXG4kYmxhY2s6ICMxYTFjMWY7XHJcblxyXG4kZ3JheXM6ICgpO1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAnMTAwJzogJGdyYXktMTAwLFxyXG4gICAgJzIwMCc6ICRncmF5LTIwMCxcclxuICAgICczMDAnOiAkZ3JheS0zMDAsXHJcbiAgICAnNDAwJzogJGdyYXktNDAwLFxyXG4gICAgJzUwMCc6ICRncmF5LTUwMCxcclxuICAgICc2MDAnOiAkZ3JheS02MDAsXHJcbiAgICAnNzAwJzogJGdyYXktNzAwLFxyXG4gICAgJzgwMCc6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMyMDQxNzc7XHJcbiRibHVlLWxpZ2h0OiAjMTU4NmJiO1xyXG4kYmx1ZS13aGl0ZTogI2Y1ZjlmZDtcclxuJG9yYW5nZTogI2VmNTYzMDtcclxuJG9yYW5nZS1kYXJrOiAjZDQzZTE5O1xyXG4kb3JhbmdlLWxpZ2h0OiAjZjdhYjk4O1xyXG4keWVsbG93OiAjZWY4ZjAwO1xyXG4kZ3JlZW46ICMyMzlhNTQ7XHJcbiRncmVlbi1saWdodDogIzc0YmE3MjtcclxuJHJlZDogI2ZmMDAwMDtcclxuJHJlZC1saWdodDogI2ZmZWZlZjtcclxuXHJcbiRncmF5OiAkZ3JheS01MDA7XHJcbiRncmF5LWRhcms6ICRncmF5LTYwMDtcclxuJGdyYXktbGlnaHQ6ICRncmF5LTQwMDtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ2JsdWUnOiAkYmx1ZSxcclxuICAgICdibHVlLWxpZ2h0JzogJGJsdWUtbGlnaHQsXHJcbiAgICAnYmx1ZS13aGl0ZSc6ICRibHVlLXdoaXRlLFxyXG4gICAgJ29yYW5nZSc6ICRvcmFuZ2UsXHJcbiAgICAnb3JhbmdlLWRhcmsnOiAkb3JhbmdlLWRhcmssXHJcbiAgICAnb3JhbmdlLWxpZ2h0JzogJG9yYW5nZS1saWdodCxcclxuICAgICd5ZWxsb3cnOiAkeWVsbG93LFxyXG4gICAgJ2dyZWVuJzogJGdyZWVuLFxyXG4gICAgJ2dyZWVuLWxpZ2h0JzogJGdyZWVuLWxpZ2h0LFxyXG4gICAgJ3JlZCc6ICRyZWQsXHJcbiAgICAncmVkLWxpZ2h0JzogJHJlZC1saWdodCxcclxuICAgICdibGFjayc6ICRibGFjayxcclxuICAgICdibGFjay1saWdodCc6ICRncmF5LTcwMCxcclxuICAgICdncmF5JzogJGdyYXktNTAwLFxyXG4gICAgJ2dyYXktZGFyayc6ICRncmF5LTYwMCxcclxuICAgICdncmF5LWxpZ2h0JzogJGdyYXktNDAwLFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRzZWNvbmRhcnk6ICRibHVlO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGJsdWUtbGlnaHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTUwMDtcclxuJGRhcms6ICRibGFjaztcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcclxuICAgICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxyXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcclxuICAgICdpbmZvJzogJGluZm8sXHJcbiAgICAnd2FybmluZyc6ICR3YXJuaW5nLFxyXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXHJcbiAgICAnbGlnaHQnOiAkbGlnaHQsXHJcbiAgICAnZGFyayc6ICRkYXJrLFxyXG4gICAgJ3doaXRlJzogJHdoaXRlLFxyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gJHRleHQtY29sb3JzOiAoKTtcclxuLy8gJHRleHQtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgJ2RlZmF1bHQnOiAkYmxhY2ssXHJcbi8vICAgICAnbG93LWNvbnRyYXN0JzogJGdyYXktNjAwLFxyXG4vLyAgICAgJ2luZm8nOiAkZ3JheS01MDAsXHJcbi8vICAgICAnZXJyb3InOiAkcmVkLFxyXG4vLyAgICAgJ2xpbmsnOiAkYmx1ZSxcclxuLy8gICAgICdiYWxhbmNlJzogJGdyZWVuLFxyXG4vLyAgICAgJ2JhbGFuY2UtY29pbnMnOiAkZ3JlZW4tbGlnaHQsXHJcbi8vICAgKSxcclxuLy8gICAkdGV4dC1jb2xvcnNcclxuLy8gKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIC8vIDBweFxyXG4gICAgMTogJHNwYWNlciAqIDAuMjUsXHJcbiAgICAvLyA0cHggeHhzLFxyXG4gICAgMjogJHNwYWNlciAqIDAuNSxcclxuICAgIC8vIDhweCB4cyxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICAvLyAxNnB4IHNtXHJcbiAgICA0OiAkc3BhY2VyICogMS41LFxyXG4gICAgLy8gMjRweCBtZCxcclxuICAgIDU6ICRzcGFjZXIgKiAyLFxyXG4gICAgLy8gMzJweCBsZyxcclxuICAgIDY6ICRzcGFjZXIgKiAyLjUsXHJcbiAgICAvLyA0MHB4IHhsLFxyXG4gICAgNzogJHNwYWNlciAqIDMuNSxcclxuICAgIC8vIDU2cHggeHhsXHJcbiAgICA4OiAkc3BhY2VyICogNCxcclxuICAgIC8vIDY0cHggeHhsXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcblxyXG4kYm9keS1iZzogJHdoaXRlO1xyXG4kYm9keS1jb2xvcjogJGRhcms7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6ICRvcmFuZ2UtZGFyaztcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNjcwcHgsXHJcbiAgbWQ6IDk2MHB4LFxyXG4gIGxnOiAxMjgwcHgsXHJcbiAgeGw6IDE5MjBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyODBweCxcclxuKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHg7XHJcbiRncmlkLXJvdy1jb2x1bW5zOiA2O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxLjU7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLW1kOiByZW15KDEyKTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDIuNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbi8vIEwwXHJcbiRib3gtc2hhZG93LXhzOiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMMVxyXG4kYm94LXNoYWRvdy1zbTogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMMlxyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbi8vIEwzXHJcbiRib3gtc2hhZG93LWxnOiAwcHggMTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vIEw0XHJcbiRib3gtc2hhZG93LXhsOiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJGNvbXBvbmVudC1hY3RpdmUtYmc6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuJHRyYW5zaXRpb24tbWF4LWhlaWdodDogYWxsIDAuNnMgZWFzZTtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDsgLy8gMTRweFxyXG4kZm9udC1zaXplLXhzOiByZW15KDEyKTtcclxuXHJcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XHJcblxyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcclxuXHJcbiRoMS1mb250LXNpemU6IHJlbXkoMzApO1xyXG4kaDItZm9udC1zaXplOiByZW15KDI2KTtcclxuJGgzLWZvbnQtc2l6ZTogcmVteSgyNCk7XHJcbiRoNC1mb250LXNpemU6IHJlbXkoMjIpO1xyXG4kaDUtZm9udC1zaXplOiByZW15KDIwKTtcclxuJGg2LWZvbnQtc2l6ZTogcmVteSgxOCk7XHJcblxyXG4kaDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAzMHB4LFxyXG4gIHNtOiAzNnB4LFxyXG4gIG1kOiA0OHB4LFxyXG4gIGxnOiA0OHB4LFxyXG4gIHhsOiA2MHB4LFxyXG4pO1xyXG5cclxuLy8gaDIgc2l6ZXNcclxuJGgyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMjZweCxcclxuICBzbTogMzBweCxcclxuICBtZDogNDBweCxcclxuICBsZzogNDRweCxcclxuICB4bDogNTRweCxcclxuKTtcclxuXHJcbi8vIGgzIHNpemVzXHJcbiRoMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI0cHgsXHJcbiAgc206IDI2cHgsXHJcbiAgbWQ6IDMycHgsXHJcbiAgbGc6IDM2cHgsXHJcbiAgeGw6IDQ0cHgsXHJcbik7XHJcblxyXG4vLyBoNCBzaXplc1xyXG4kaDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAyMnB4LFxyXG4gIHNtOiAyNHB4LFxyXG4gIG1kOiAyNHB4LFxyXG4gIGxnOiAyOHB4LFxyXG4gIHhsOiAyOHB4LFxyXG4pO1xyXG5cclxuLy8gaDUgc2l6ZXNcclxuJGg1LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjBweCxcclxuICBzbTogMjJweCxcclxuICBtZDogMjJweCxcclxuICBsZzogMjRweCxcclxuICB4bDogMjRweCxcclxuKTtcclxuXHJcbi8vIGg2IHNpemVzXHJcbiRoNi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE4cHgsXHJcbiAgc206IDE4cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDIwcHgsXHJcbiAgeGw6IDIwcHgsXHJcbik7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1saWdodDogNDAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJHAwLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTZweCxcclxuICBzbTogMTZweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE4cHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgeGw6IDE4cHgsXHJcbik7XHJcblxyXG4kcDItZm9udC1zaXplczogKFxyXG4gIHhzOiAxNHB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIGxnOiAxNnB4LFxyXG4gIHhsOiAxNnB4LFxyXG4pO1xyXG5cclxuJHAzLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTJweCxcclxuICBzbTogMTJweCxcclxuICBtZDogMTRweCxcclxuICBsZzogMTRweCxcclxuICB4bDogMTRweCxcclxuKTtcclxuXHJcbiRwNC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEwcHgsXHJcbiAgc206IDEwcHgsXHJcbiAgbWQ6IDEycHgsXHJcbiAgbGc6IDEycHgsXHJcbiAgeGw6IDEycHgsXHJcbik7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xyXG4vLyAkbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcclxuXHJcbi8vICRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUYWJsZXNcclxuLy8gLy9cclxuLy8gLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vLyAvL1xyXG4vLyAvLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogcmVteSgxKTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMS4ycmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAyLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRidG4tcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGJ0bi1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGJ0bi1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG4kYnRuLXdoaXRlLXNwYWNlOiBudWxsOyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogbm9uZTtcclxuJGJ0bi1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMC41O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAxMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDhweDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vIC8vIEZvcm1zXHJcblxyXG4vLyAkbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogcmVteSgyMCk7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGRhcms7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4vLyAkaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbi8vICRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDEuMjVyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodFxyXG4gICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxyXG5cclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoXHJcbiAgMWVtICogMC43NSxcclxuICAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIDAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nXHJcbikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodFxyXG4gICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmXHJcbiAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbi8vICAgZW46IFwiQnJvd3NlXCJcclxuLy8gKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XHJcbi8vIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbi8vICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbi8vICAgKFxyXG4vLyAgICAgXCJ2YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbi8vICAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICAgXCJpbnZhbGlkXCI6IChcclxuLy8gICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXHJcbi8vICAgICApLFxyXG4vLyAgICksXHJcbi8vICAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuLy8gKTtcclxuXHJcbi8vIC8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy8gLy9cclxuLy8gLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIC8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbi8vICR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XHJcbi8vICR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBOYXZzXHJcblxyXG4vLyAkbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2YmFyXHJcblxyXG4vLyAkbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXHJcbi8vICRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyxcclxuICAkZHJvcGRvd24tYm9yZGVyLXdpZHRoXHJcbik7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAkbmF2LWRpdmlkZXItbWFyZ2luLXk7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRncmF5LTIwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMTAwO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjZyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkZ3JheS04MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG5cclxuLy8gLy8gSnVtYm90cm9uXHJcblxyXG4vLyAkanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4vLyAkanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDYXJkc1xyXG5cclxuLy8gJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9vbHRpcHNcclxuXHJcbi8vICR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI0NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMikgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdChcclxuICAkcG9wb3Zlci1ib3JkZXItcmFkaXVzLFxyXG4gICRwb3BvdmVyLWJvcmRlci13aWR0aFxyXG4pICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy14bCAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcblxyXG4vLyAkcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBUb2FzdHNcclxuXHJcbi8vICR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IHJlbXkoMTIpO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgMC4yNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1tZDtcclxuXHJcbi8vICRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcclxuLy8gJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XHJcbi8vIC8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4vLyAkYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbi8vICRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiBub25lO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogJGJsYWNrO1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogMC43O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC43NXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAxMDQ0cHg7XHJcbi8vICRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XHJcbi8vICRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxlcnRzXHJcbi8vIC8vXHJcbi8vIC8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG5cclxuLy8gJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuLy8gJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTGlzdCBncm91cFxyXG5cclxuLy8gJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMHB4O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuLy8gJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEZpZ3VyZXNcclxuXHJcbi8vICRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcclxuLy8gJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQnJlYWRjcnVtYnNcclxuXHJcbi8vICRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2Fyb3VzZWxcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcclxuXHJcbi8vIC8vIFNwaW5uZXJzXHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENsb3NlXHJcblxyXG4vLyAkY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ29kZVxyXG5cclxuLy8gJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XHJcbi8vICRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbi8vICRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFV0aWxpdGllc1xyXG5cclxuLy8gJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xyXG4vLyAkb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XHJcbi8vICRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUHJpbnRpbmdcclxuXHJcbi8vICRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xyXG4vLyAkcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xyXG5cclxuLy8gSnlzYW4gVmFyaWFibGVzXHJcblxyXG5AZnVuY3Rpb24gc3BhY2UoJHNpemUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJHNwYWNlcnMsICRrZXk6ICRzaXplKTtcclxufVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDYycHg7XHJcbiRoZWFkZXItaGVpZ2h0LW1kOiAxMDBweDtcclxuJGhlYWRlci13aWR0aDogMjgwcHg7XHJcblxyXG4kYnRuLW1pbi13aWR0aDogMTY0cHg7XHJcblxyXG4vLyBKLWlucHV0XHJcbiRqLWlucHV0LWZvbnQtc2l6ZTogMXJlbTtcclxuJGotaW5wdXQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xyXG4kai1pbnB1dC1mb250LXN0eWxlOiBub3JtYWw7XHJcbiRqLWlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuXHJcbiRqLWlucHV0LWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4kai1pbnB1dC1wYWRkaW5nLXk6IDE3LjVweDtcclxuJGotaW5wdXQtcGFkZGluZy14OiAyMHB4O1xyXG5cclxuJGotaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRqLWlucHV0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGotaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3I6ICRncmF5LWRhcms7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XHJcbiRqLWlucHV0LXRleHQtY29sb3I6ICRibGFjaztcclxuJGotaW5wdXQtbWFzay1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LWljb24tY29sb3I6ICRvcmFuZ2U7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tYWN0aXZlOiAkcHJpbWFyeTtcclxuJGotaW5wdXQtbGFiZWwtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LXRleHQtY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1lcnJvcjogJHJlZC1saWdodDtcclxuJGotaW5wdXQtaGVscGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuJGotaW5wdXQtYm9yZGVyLWNvbG9yLS1lcnJvcjogJHJlZDtcclxuXHJcbiRqLWlucHV0LWJhY2tncm91bmQtY29sb3ItLWRpc2FibGVkOiAkaW5wdXQtZGlzYWJsZWQtYmc7IC8vIGZyb20gZmlnbWEgcHJpbWl0aXZlcyBzaG91bGQgYmUgZ3JheS0yMDBcclxuXHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLXRvcDogJGotaW5wdXQtcGFkZGluZy15ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3AtYWN0aXZlOiAxMHB4O1xyXG4kai1pbnB1dC1saW5rLXBvc2l0aW9uLXRvcDogMTZweDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDogJGotaW5wdXQtcGFkZGluZy14ICsgJGotaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kai1pbnB1dC1sYWJlbC1saW5lLWhlaWdodDogJGotaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG5cclxuJGotaW5wdXQtcGFkZGluZy10b3A6IDI3cHg7XHJcbiRqLWlucHV0LXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4kai1pbnB1dC1tYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXk7XHJcbiRqLWlucHV0LXBsYWNlaG9sZGVyLXBvc2l0aW9uOiAkai1pbnB1dC1wYWRkaW5nLXRvcCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtY2hhci1sZW5ndGg6IDguOTlweDtcclxuXHJcbiRqLWlucHV0LWJ1dHRvbi1wb3NpdGlvbjogMjBweDtcclxuJGotaW5wdXQtc2hhZG93LXBvc2l0aW9uOiAkai1pbnB1dC1sYWJlbC1wb3NpdGlvbi1sZWZ0O1xyXG5cclxuJGotaW5wdXQtbGFiZWwtei1pbmRleDogMDtcclxuJGotaW5wdXQtc2hhZG93LXotaW5kZXg6IDE7XHJcbiRqLWlucHV0LXotaW5kZXg6IDI7XHJcbiRqLWlucHV0LWxpbmstei1pbmRleDogMztcclxuJGotaW5wdXQtYnV0dG9uLXotaW5kZXg6IDQ7XHJcblxyXG4kYm94LXNoYWRvdy10by10b3AtbGc6IDAgLTFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuIl19 */";

/***/ }),

/***/ 78318:
/*!***********************************************************************!*\
  !*** ./src/app/shared/select-module/select.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Container click is trigger by form filed -->\r\n<!-- <div (mousedown)=\"handleMousedown($event)\"\r\n     [class.j-appearance-outline]=\"appearance === 'outline'\"\r\n     [class.j-has-value]=\"hasValue\"\r\n     class=\"j-select-container\"> -->\r\n\r\n<div [class.j-appearance-outline]=\"appearance === 'outline'\"\r\n     [class.j-has-value]=\"hasValue\"\r\n     class=\"j-select-container\">\r\n\r\n  <div class=\"j-value-container form-control\">\r\n    <div class=\"j-placeholder\">{{placeholder}}</div>\r\n\r\n    <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\r\n      <div [class.j-value-disabled]=\"item.disabled\"\r\n           class=\"j-value\"\r\n           *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\r\n        <ng-template #defaultLabelTemplate>\r\n          <span class=\"j-value-icon left\"\r\n                (click)=\"unselect(item);\"\r\n                aria-hidden=\"true\">×</span>\r\n          <span class=\"j-value-label j-value-label-default text-truncate\"\r\n                [ngItemLabel]=\"item.label\"\r\n                [escape]=\"escapeHTML\"></span>\r\n        </ng-template>\r\n\r\n        <ng-template [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\r\n                     [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\r\n        </ng-template>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\r\n                 [ngTemplateOutlet]=\"multiLabelTemplate\"\r\n                 [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\r\n    </ng-template>\r\n\r\n    <div class=\"j-search-input\">\r\n      <ng-container *ngIf=\"searchMask; else noMask\">\r\n        <input #searchInput\r\n               [attr.id]=\"labelForId\"\r\n               [attr.tabindex]=\"tabIndex\"\r\n               [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\r\n               [disabled]=\"disabled\"\r\n               [value]=\"searchTerm ? searchTerm : ''\"\r\n               (input)=\"filter(searchInput.value)\"\r\n               (compositionstart)=\"onCompositionStart()\"\r\n               (compositionend)=\"onCompositionEnd(searchInput.value)\"\r\n               (focus)=\"onInputFocus($event)\"\r\n               (blur)=\"onInputBlur($event)\"\r\n               (change)=\"$event.stopPropagation()\"\r\n               role=\"combobox\"\r\n               [attr.aria-expanded]=\"isOpen\"\r\n               [attr.aria-owns]=\"isOpen ? dropdownId : null\"\r\n               [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\r\n               [jShadow]=\"shadow\"\r\n               [mask]=\"searchMask\">\r\n      </ng-container>\r\n\r\n      <ng-template #noMask>\r\n        <input #searchInput\r\n               [attr.id]=\"labelForId\"\r\n               [attr.tabindex]=\"tabIndex\"\r\n               [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\r\n               [disabled]=\"disabled\"\r\n               [value]=\"searchTerm ? searchTerm : ''\"\r\n               (input)=\"filter(searchInput.value)\"\r\n               (compositionstart)=\"onCompositionStart()\"\r\n               (compositionend)=\"onCompositionEnd(searchInput.value)\"\r\n               (focus)=\"onInputFocus($event)\"\r\n               (blur)=\"onInputBlur($event)\"\r\n               (change)=\"$event.stopPropagation()\"\r\n               role=\"combobox\"\r\n               [attr.aria-expanded]=\"isOpen\"\r\n               [attr.aria-owns]=\"isOpen ? dropdownId : null\"\r\n               [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"loading\">\r\n    <ng-template #defaultLoadingSpinnerTemplate>\r\n      <div class=\"j-spinner-loader\"></div>\r\n    </ng-template>\r\n\r\n    <ng-template [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <span *ngIf=\"showClear()\"\r\n        class=\"j-clear-wrapper\"\r\n        title=\"{{clearAllText | translate}}\">\r\n    <span class=\"j-clear\"\r\n          aria-hidden=\"true\">×</span>\r\n  </span>\r\n\r\n  <span class=\"j-arrow-wrapper\">\r\n    <span class=\"j-arrow\"></span>\r\n  </span>\r\n</div>\r\n\r\n<j-dropdown-panel *ngIf=\"isOpen\"\r\n                  class=\"j-dropdown-panel\"\r\n                  [virtualScroll]=\"virtualScroll\"\r\n                  [bufferAmount]=\"bufferAmount\"\r\n                  [appendTo]=\"appendTo\"\r\n                  [position]=\"dropdownPosition\"\r\n                  [headerTemplate]=\"headerTemplate\"\r\n                  [footerTemplate]=\"footerTemplate\"\r\n                  [filterValue]=\"searchTerm\"\r\n                  [items]=\"itemsList.filteredItems\"\r\n                  [markedItem]=\"itemsList.markedItem\"\r\n                  (update)=\"viewPortItems = $event\"\r\n                  (scroll)=\"scroll.emit($event)\"\r\n                  (scrollToEnd)=\"scrollToEnd.emit($event)\"\r\n                  (outsideClick)=\"close()\"\r\n                  [class.j-select-multiple]=\"multiple\"\r\n                  [ngClass]=\"appendTo ? classes : null\"\r\n                  [id]=\"dropdownId\">\r\n\r\n  <ng-container>\r\n    <div class=\"j-option\"\r\n         [attr.role]=\"item.children ? 'group' : 'option'\"\r\n         (click)=\"toggleItem(item, $event)\"\r\n         (mouseover)=\"onItemHover(item)\"\r\n         *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\r\n         [class.j-option-disabled]=\"item.disabled\"\r\n         [class.j-option-selected]=\"item.selected\"\r\n         [class.j-optgroup]=\"item.children\"\r\n         [class.j-option]=\"!item.children\"\r\n         [class.j-option-child]=\"!!item.parent\"\r\n         [class.j-option-marked]=\"item === itemsList.markedItem\"\r\n         [attr.aria-selected]=\"item.selected\"\r\n         [attr.id]=\"item?.htmlId\">\r\n\r\n      <ng-template #defaultOptionTemplate>\r\n        <span class=\"j-option-label\"\r\n              [ngItemLabel]=\"item.label\"\r\n              [escape]=\"escapeHTML\"></span>\r\n      </ng-template>\r\n\r\n      <ng-template [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\r\n                   [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"j-option\"\r\n         [class.j-option-marked]=\"!itemsList.markedItem\"\r\n         (mouseover)=\"itemsList.unmarkItem()\"\r\n         role=\"option\"\r\n         (click)=\"selectTag()\"\r\n         *ngIf=\"showAddTag\">\r\n      <ng-template #defaultTagTemplate>\r\n        <span><span class=\"j-tag-label\">{{addTagText | translate}}</span>\"{{searchTerm}}\"</span>\r\n      </ng-template>\r\n\r\n      <ng-template [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\r\n                   [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\r\n      </ng-template>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"showNoItemsFound()\">\r\n    <ng-template #defaultNotFoundTemplate>\r\n      <div class=\"j-option j-option-disabled\">\r\n        <span class=\"text-center text-muted\">{{notFoundText | translate}}</span>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\r\n                 [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"showTypeToSearch()\">\r\n    <ng-template #defaultTypeToSearchTemplate>\r\n      <div class=\"j-option j-option-disabled\">{{typeToSearchText | translate}}</div>\r\n    </ng-template>\r\n\r\n    <ng-template [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\r\n    <ng-template #defaultLoadingTextTemplate>\r\n      <div class=\"j-option j-option-disabled\">{{loadingText | translate}}</div>\r\n    </ng-template>\r\n\r\n    <ng-template [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\r\n                 [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n</j-dropdown-panel>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_select-module_select_module_ts.js.map