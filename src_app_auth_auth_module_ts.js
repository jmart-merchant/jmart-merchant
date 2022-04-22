"use strict";
(self["webpackChunkjysan"] = self["webpackChunkjysan"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routeComponents": () => (/* binding */ routeComponents),
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _login_login_sms_login_sms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login-sms/login-sms.component */ 97873);
/* harmony import */ var _login_login_phone_login_phone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login-phone/login-phone.component */ 39486);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 67225);
/* harmony import */ var _register_register_iin_register_iin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register-iin/register-iin.component */ 5175);
/* harmony import */ var _register_register_phone_register_phone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-phone/register-phone.component */ 76960);
/* harmony import */ var _register_register_sms_register_sms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register-sms/register-sms.component */ 64217);
/* harmony import */ var _register_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register-email/register-email.component */ 37676);
/* harmony import */ var _register_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-password/register-password.component */ 45630);
/* harmony import */ var _register_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register-result/register-result.component */ 66672);
/* harmony import */ var _errors_no_account_no_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors/no-account/no-account.component */ 85380);
/* harmony import */ var _errors_no_email_no_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors/no-email/no-email.component */ 58714);
/* harmony import */ var _errors_user_blocked_user_blocked_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./errors/user-blocked/user-blocked.component */ 14129);
/* harmony import */ var _errors_phone_not_match_phone_not_match_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./errors/phone-not-match/phone-not-match.component */ 71876);
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.model */ 90377);
/* harmony import */ var _register_register_error_register_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register-error/register-error.component */ 13506);



// Login



// Register







// Errors






const routeComponents = [
    // Login
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    _login_login_phone_login_phone_component__WEBPACK_IMPORTED_MODULE_2__.LoginPhoneComponent,
    _login_login_sms_login_sms_component__WEBPACK_IMPORTED_MODULE_1__.LoginSmsComponent,
    // Register
    _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
    _register_register_phone_register_phone_component__WEBPACK_IMPORTED_MODULE_5__.RegisterPhoneComponent,
    _register_register_sms_register_sms_component__WEBPACK_IMPORTED_MODULE_6__.RegisterSmsComponent,
    _register_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_7__.RegisterEmailComponent,
    _register_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__.RegisterPasswordComponent,
    _register_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__.RegisterResultComponent,
    // Errors
    _errors_no_account_no_account_component__WEBPACK_IMPORTED_MODULE_10__.NoAccountComponent,
    _errors_no_email_no_email_component__WEBPACK_IMPORTED_MODULE_11__.NoEmailComponent,
    _errors_user_blocked_user_blocked_component__WEBPACK_IMPORTED_MODULE_12__.UserBlockedComponent,
    _errors_phone_not_match_phone_not_match_component__WEBPACK_IMPORTED_MODULE_13__.PhoneNotMatchComponent,
];
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        children: [
            {
                path: '',
                redirectTo: 'iin',
            },
            {
                path: 'iin',
                component: _register_register_iin_register_iin_component__WEBPACK_IMPORTED_MODULE_4__.RegisterIinComponent,
                data: {
                    title: 'AUTH.REGISTER_TITLE',
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
            {
                path: 'no-account',
                component: _errors_no_account_no_account_component__WEBPACK_IMPORTED_MODULE_10__.NoAccountComponent,
            },
            {
                path: 'no-email',
                component: _errors_no_email_no_email_component__WEBPACK_IMPORTED_MODULE_11__.NoEmailComponent,
            },
            {
                path: 'user-blocked',
                component: _errors_user_blocked_user_blocked_component__WEBPACK_IMPORTED_MODULE_12__.UserBlockedComponent,
            },
            {
                path: 'phone',
                component: _register_register_phone_register_phone_component__WEBPACK_IMPORTED_MODULE_5__.RegisterPhoneComponent,
                data: {
                    title: 'SHARED.PHONE',
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
            {
                path: 'sms',
                component: _register_register_sms_register_sms_component__WEBPACK_IMPORTED_MODULE_6__.RegisterSmsComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
            {
                path: 'phone-not-match',
                component: _errors_phone_not_match_phone_not_match_component__WEBPACK_IMPORTED_MODULE_13__.PhoneNotMatchComponent,
            },
            {
                path: 'email',
                component: _register_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_7__.RegisterEmailComponent,
            },
            {
                path: 'password',
                component: _register_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__.RegisterPasswordComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
            {
                path: 'error',
                component: _register_register_error_register_error_component__WEBPACK_IMPORTED_MODULE_15__.RegisterErrorComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
            {
                path: 'result',
                component: _register_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__.RegisterResultComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.REGISTER,
                },
            },
        ],
    },
    {
        path: 'restore',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        children: [
            {
                path: '',
                redirectTo: 'iin',
            },
            {
                path: 'iin',
                component: _register_register_iin_register_iin_component__WEBPACK_IMPORTED_MODULE_4__.RegisterIinComponent,
                data: {
                    title: 'AUTH.RESTORE',
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
            {
                path: 'no-account',
                component: _errors_no_account_no_account_component__WEBPACK_IMPORTED_MODULE_10__.NoAccountComponent,
            },
            {
                path: 'no-email',
                component: _errors_no_email_no_email_component__WEBPACK_IMPORTED_MODULE_11__.NoEmailComponent,
            },
            {
                path: 'user-blocked',
                component: _errors_user_blocked_user_blocked_component__WEBPACK_IMPORTED_MODULE_12__.UserBlockedComponent,
            },
            {
                path: 'phone',
                component: _register_register_phone_register_phone_component__WEBPACK_IMPORTED_MODULE_5__.RegisterPhoneComponent,
                data: {
                    title: 'SHARED.PHONE',
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
            {
                path: 'sms',
                component: _register_register_sms_register_sms_component__WEBPACK_IMPORTED_MODULE_6__.RegisterSmsComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
            {
                path: 'phone-not-match',
                component: _errors_phone_not_match_phone_not_match_component__WEBPACK_IMPORTED_MODULE_13__.PhoneNotMatchComponent,
            },
            {
                path: 'email',
                component: _register_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_7__.RegisterEmailComponent,
            },
            {
                path: 'password',
                component: _register_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__.RegisterPasswordComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
            {
                path: 'error',
                component: _register_register_error_register_error_component__WEBPACK_IMPORTED_MODULE_15__.RegisterErrorComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
            {
                path: 'result',
                component: _register_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__.RegisterResultComponent,
                data: {
                    action: _auth_model__WEBPACK_IMPORTED_MODULE_14__.AUTH_TYPE.RESTORE,
                },
            },
        ],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    })
], AuthRoutingModule);



/***/ }),

/***/ 45031:
/*!*************************************!*\
  !*** ./src/app/auth/auth.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_CONFIG": () => (/* binding */ AUTH_CONFIG)
/* harmony export */ });
const AUTH_CONFIG = {
    EMAIL_COUNTDOWN: 300,
    BASIC_AUTH_HEADER: 'Basic d2ViYXBwOnJqWkk5TWZRT2Y=',
    NEXT_INPUT_KEY: 'Tab',
};


/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _modals_can_register_can_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/can-register/can-register.component */ 38223);
/* harmony import */ var _modals_can_restore_can_restore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/can-restore/can-restore.component */ 61792);
/* harmony import */ var _modals_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/contact-modal/contact-modal.component */ 54446);
/* harmony import */ var _modals_expired_expired_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/expired/expired.component */ 39118);
/* harmony import */ var _modals_invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/invalid-phone/invalid-phone.component */ 67832);
/* harmony import */ var _helpers_auth_iin_auth_iin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/auth-iin/auth-iin.component */ 45566);
/* harmony import */ var _register_register_iin_register_iin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-iin/register-iin.component */ 5175);
/* harmony import */ var _register_register_error_register_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register-error/register-error.component */ 13506);







// Routing

// Models





// Errors



let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.routeComponents,
            _modals_can_register_can_register_component__WEBPACK_IMPORTED_MODULE_2__.CanRegisterComponent,
            _modals_can_restore_can_restore_component__WEBPACK_IMPORTED_MODULE_3__.CanRestoreComponent,
            _modals_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_4__.ContactModalComponent,
            _helpers_auth_iin_auth_iin_component__WEBPACK_IMPORTED_MODULE_7__.AuthIinComponent,
            _register_register_iin_register_iin_component__WEBPACK_IMPORTED_MODULE_8__.RegisterIinComponent,
            _modals_expired_expired_component__WEBPACK_IMPORTED_MODULE_5__.ExpiredComponent,
            _modals_invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_6__.InvalidPhoneComponent,
            _register_register_error_register_error_component__WEBPACK_IMPORTED_MODULE_9__.RegisterErrorComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_15__.NgxMaskModule,
        ],
        providers: [{ provide: ngx_mask__WEBPACK_IMPORTED_MODULE_15__.MaskPipe, useClass: ngx_mask__WEBPACK_IMPORTED_MODULE_15__.MaskPipe }],
    })
], AuthModule);



/***/ }),

/***/ 85380:
/*!****************************************************************!*\
  !*** ./src/app/auth/errors/no-account/no-account.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAccountComponent": () => (/* binding */ NoAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _no_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-account.component.html?ngResource */ 44012);
/* harmony import */ var _no_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-account.component.scss?ngResource */ 32273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);





let NoAccountComponent = class NoAccountComponent {
    constructor(navService) {
        this.navService = navService;
        this.translateParams = {
            tel: '7711',
        };
        this.navService.triggerRegisterError('iin', true);
        this.navService.triggerRegisterError('no-account', true);
    }
};
NoAccountComponent.ctorParameters = () => [
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
NoAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-no-account',
        template: _no_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_no_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoAccountComponent);



/***/ }),

/***/ 58714:
/*!************************************************************!*\
  !*** ./src/app/auth/errors/no-email/no-email.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoEmailComponent": () => (/* binding */ NoEmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _no_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-email.component.html?ngResource */ 2915);
/* harmony import */ var _no_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-email.component.scss?ngResource */ 18676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);





let NoEmailComponent = class NoEmailComponent {
    constructor(navService) {
        this.navService = navService;
        this.navService.triggerRegisterError('iin', true);
        this.navService.triggerRegisterError('no-email', true);
    }
};
NoEmailComponent.ctorParameters = () => [
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
NoEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-no-email',
        template: _no_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_no_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoEmailComponent);



/***/ }),

/***/ 71876:
/*!**************************************************************************!*\
  !*** ./src/app/auth/errors/phone-not-match/phone-not-match.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNotMatchComponent": () => (/* binding */ PhoneNotMatchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _phone_not_match_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-not-match.component.html?ngResource */ 64749);
/* harmony import */ var _phone_not_match_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-not-match.component.scss?ngResource */ 64211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);








let PhoneNotMatchComponent = class PhoneNotMatchComponent {
    constructor(router, route, navService) {
        this.router = router;
        this.route = route;
        this.navService = navService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.navService.triggerRegisterError('phone', true);
        this.navService.triggerRegisterError('phone-not-match', true);
        this.subscription.add(this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => window.history.state))
            .subscribe((state) => {
            this.phone = state.phone;
            this.iin = state.iin;
            this.countryCode = state.countryCode;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    navigateToPhone(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.router.navigate([`phone`], {
            relativeTo: this.route.parent,
            state: {
                iin: this.iin,
                phone: this.phone,
                countryCode: this.countryCode,
            },
        });
    }
};
PhoneNotMatchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
PhoneNotMatchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'j-phone-not-match',
        template: _phone_not_match_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_phone_not_match_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhoneNotMatchComponent);



/***/ }),

/***/ 14129:
/*!********************************************************************!*\
  !*** ./src/app/auth/errors/user-blocked/user-blocked.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBlockedComponent": () => (/* binding */ UserBlockedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_blocked_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-blocked.component.html?ngResource */ 1048);
/* harmony import */ var _user_blocked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-blocked.component.scss?ngResource */ 39729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);





let UserBlockedComponent = class UserBlockedComponent {
    constructor(navService) {
        this.navService = navService;
        this.translateParams = {
            tel: '7711',
        };
        this.navService.triggerRegisterError('iin', true);
        this.navService.triggerRegisterError('user-blocked', true);
    }
};
UserBlockedComponent.ctorParameters = () => [
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
UserBlockedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-user-blocked',
        template: _user_blocked_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_blocked_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserBlockedComponent);



/***/ }),

/***/ 45566:
/*!*************************************************************!*\
  !*** ./src/app/auth/helpers/auth-iin/auth-iin.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthIinComponent": () => (/* binding */ AuthIinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _auth_iin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-iin.component.html?ngResource */ 63777);
/* harmony import */ var _auth_iin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-iin.component.scss?ngResource */ 63127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _shared_validators_iin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/validators/iin */ 98588);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.service */ 50384);








let AuthIinComponent = class AuthIinComponent {
    constructor(authService) {
        this.authService = authService;
        this.IIN = '';
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.openIinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            iin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.IIN, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _shared_validators_iin__WEBPACK_IMPORTED_MODULE_2__.validateIin]),
        });
        const formSubscription = this.openIinForm.valueChanges.subscribe((value) => {
            this.isSubmitted = false;
            this.errorText = '';
        });
        this.subs.add(formSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngAfterViewInit() {
        this.iinInput.focus();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (!this.openIinForm.valid) {
                this.validateIin(this.f.iin.errors);
                return;
            }
            this.isLoading = true;
            this.submitted.emit({
                iin: this.iin,
                // status: result.status,
            });
            // try {
            //   const result = await this.authService.checkIin(this.iin);
            //   this.submitted.emit({
            //     iin: this.iin,
            //     status: result.status,
            //   });
            // } catch (error) {
            //   switch (error.code) {
            //     case ERRORS.INVALID_DATA:
            //       this.submitted.emit({
            //         iin: this.iin,
            //         status: IIN_STATUS.INVALID_DATA,
            //       });
            //       break;
            //   }
            //   this.iinInput.triggerHelperAnimation();
            // } finally {
            //   this.isLoading = false;
            // }
        });
    }
    get f() {
        return this.openIinForm.controls;
    }
    get iin() {
        return this.f.iin.value;
    }
    validateIin(errors) {
        if (!errors || !errors.iin) {
            return;
        }
        if (errors.iin.length) {
            this.errorText = `ERRORS.IIN_LENGTH`;
        }
        else if (errors.iin.date) {
            this.errorText = `ERRORS.IIN_DATE`;
        }
    }
};
AuthIinComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
AuthIinComponent.propDecorators = {
    iinInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['iinInput',] }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AuthIinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-auth-iin',
        template: _auth_iin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_iin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthIinComponent);



/***/ }),

/***/ 39486:
/*!*****************************************************************!*\
  !*** ./src/app/auth/login/login-phone/login-phone.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPhoneComponent": () => (/* binding */ LoginPhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-phone.component.html?ngResource */ 57991);
/* harmony import */ var _login_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-phone.component.scss?ngResource */ 22004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @company/company.service */ 26164);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services */ 17253);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth/auth.model */ 90377);












let LoginPhoneComponent = class LoginPhoneComponent {
    constructor(maskedService, route, companyService, translateService, dictionariesService) {
        this.maskedService = maskedService;
        this.route = route;
        this.companyService = companyService;
        this.translateService = translateService;
        this.dictionariesService = dictionariesService;
        this.isSubmitted = false;
        this.isPhoneSubmitted = false;
        this.PHONE = localStorage.getItem('phone') ? localStorage.getItem('phone') : '';
        this.PASSWORD = '';
        this.passwordRegExp = /[^ ]/;
        this.passwordPasteRegExp = /[ ]/;
        this.countryCode = {
            code: this.PHONE || '+7',
            country: this.translateService.instant(`COUNTRIES.${_auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY.KAZAKHSTAN}`),
            id: _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY.KAZAKHSTAN,
            countryCode: _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY_CODE.KAZAKHSTAN,
        };
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.isFromAtf = false;
        const routeSubscription = this.route.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
            this.isFromAtf = this.companyService.isFromAtf(queryParams);
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.countryCode.code, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.PHONE, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.PASSWORD, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        const formSubscription = this.loginForm.valueChanges.subscribe(() => {
            this.isSubmitted = false;
            this.isPhoneSubmitted = false;
            // this.passwordError = '';
            // this.loginError = '';
        });
        this.subscription.add(routeSubscription);
        this.subscription.add(formSubscription);
    }
    ngOnInit() {
        this.fetchCountryCodes();
    }
    fetchCountryCodes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.dictionariesService
                    .fetchCountryCodesDictionary()
                    .then((response) => {
                    this.countryCodes = response.map((countryObj) => ({
                        id: countryObj.id,
                        code: countryObj.value.description,
                        country: countryObj.value.name,
                        countryCode: countryObj.value.code,
                    }));
                });
            }
            catch (err) { }
        });
    }
    triggerErrorAnimation() {
        this.passwordInput.triggerHelperAnimation();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        if (this.loginForm.controls.phone.valid) {
            this.passwordInput.focus();
        }
        else {
            this.phoneInput.focus();
        }
    }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes.passwordError) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.passwordError = changes.passwordError.currentValue;
        }
    }
    onTabPress(event) {
        event.preventDefault();
        this.isPhoneSubmitted = true;
        if (this.f.phone.valid) {
            this.passwordInput.focus();
        }
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.loginForm.invalid) {
                if (this.loginForm.controls.phone.errors) {
                    this.loginError = 'ERRORS.NOT_ENOUGH_SYMBOLS';
                }
                else if (this.loginForm.controls.password.errors) {
                    this.passwordError = 'ERRORS.ENTER_PASSWORD';
                }
                return;
            }
            const phone = this.maskedService.getUnmaskedPhone(this.f.phone.value);
            const password = this.f.password.value;
            const countryCode = this.countryCode;
            this.submitted.emit({
                phone,
                password,
                countryCode,
            });
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    onCountrySelected(countryCode) {
        this.countryCode = countryCode;
    }
};
LoginPhoneComponent.ctorParameters = () => [
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__.MaskedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.DictionariesService }
];
LoginPhoneComponent.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    phone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    passwordError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    loginError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    phoneInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['phoneInput',] }],
    passwordInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['passwordInput',] }],
    registerButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['registerButton',] }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
LoginPhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'j-login-phone',
        template: _login_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPhoneComponent);



/***/ }),

/***/ 97873:
/*!*************************************************************!*\
  !*** ./src/app/auth/login/login-sms/login-sms.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSmsComponent": () => (/* binding */ LoginSmsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_sms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-sms.component.html?ngResource */ 92851);
/* harmony import */ var _login_sms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-sms.component.scss?ngResource */ 45773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/api.service */ 82524);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components */ 7667);







let LoginSmsComponent = class LoginSmsComponent {
    constructor() {
        this.isReady = false;
        this.preferredSignatureType = localStorage.getItem('preferredSignatureType');
        this.tokenType = _shared_models__WEBPACK_IMPORTED_MODULE_3__.TOKEN_TYPE;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.headerParams = {
            smsHeader: _api_api_service__WEBPACK_IMPORTED_MODULE_2__.SMS_HEADERS.AUTHORIZATION
        };
        this.preferredSignatureType = localStorage.getItem('preferredSignatureType') || _shared_components__WEBPACK_IMPORTED_MODULE_4__.CONFIRM_SIGNATURE_TYPE.SMS;
    }
    onSmsLoaded() {
        this.isReady = true;
    }
    onSubmit(smsToken) {
        this.submitted.emit(smsToken);
    }
    navigateToPhone(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.closed.emit();
    }
    changeCodeRequestMethod(method) {
        localStorage.setItem('preferredSignatureType', method === _shared_models__WEBPACK_IMPORTED_MODULE_3__.TOKEN_TYPE.OTP
            ? _shared_components__WEBPACK_IMPORTED_MODULE_4__.CONFIRM_SIGNATURE_TYPE.OTP
            : _shared_components__WEBPACK_IMPORTED_MODULE_4__.CONFIRM_SIGNATURE_TYPE.SMS);
        this.preferredSignatureType = method;
    }
};
LoginSmsComponent.ctorParameters = () => [];
LoginSmsComponent.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    phone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    countryCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
LoginSmsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'j-login-sms',
        template: _login_sms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_sms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginSmsComponent);



/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 85639);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 83488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ 50449);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _shared_token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/token/token.service */ 47083);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/auth.service */ 50384);











var LOGIN_STEPS;
(function (LOGIN_STEPS) {
    LOGIN_STEPS["PHONE"] = "phone";
    LOGIN_STEPS["SMS"] = "sms";
    LOGIN_STEPS["LOADING"] = "loading";
})(LOGIN_STEPS || (LOGIN_STEPS = {}));
let LoginComponent = class LoginComponent {
    constructor(auth, tokenService, route, router, notifierService) {
        this.auth = auth;
        this.tokenService = tokenService;
        this.route = route;
        this.router = router;
        this.notifierService = notifierService;
        this.isLoading = false;
        this.steps = LOGIN_STEPS;
        this.currentStep = this.steps.PHONE;
        this.phoneError = '';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.subscription.add(this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => window.history.state))
            .subscribe((state) => {
            if (state.phone) {
                this.phone = state.phone;
            }
            if (state.error) {
                this.phoneError = state.error;
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSmsClose() {
        this.navigateToPhone();
        this.phoneError = '';
    }
    onPhoneSubmit(loginForm) {
        this.loginForm = loginForm;
        this.phone = '+' + this.loginForm.phone;
        this.countryCode = this.loginForm.countryCode;
        try {
            const deviceToken = this.tokenService.getDeviceToken(this.loginForm.password);
            localStorage.setItem('countryCode', JSON.stringify(this.countryCode));
            localStorage.setItem('phone', this.loginForm.phone);
            if (deviceToken) {
                this.login();
            }
            else {
                this.navigateToSms();
            }
        }
        catch (error) {
            this.navigateToSms();
        }
    }
    onSmsSubmit(smsToken) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.setSmsToken(smsToken);
            this.currentStep = this.steps.LOADING;
            try {
                const deviceToken = yield this.auth.requestDevice(this.phone, smsToken.type);
                this.tokenService.setDeviceToken(deviceToken.signature, this.loginForm.password);
                this.login();
            }
            catch (error) {
                this.navigateToPhone();
                switch (error.code) {
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.DEVICE_TOKEN_INVALID:
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_NOT_FOUND:
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.AUTHORIZATION_ERROR:
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_GRANT:
                        this.phoneError = 'ERRORS.WRONG_CREDENTIALS';
                        break;
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.USER_BLOCKED:
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_BLOCKED:
                        this.phoneError = 'ERRORS.ACCOUNT_BLOCKED';
                        break;
                    default:
                        this.phoneError = error.description;
                        break;
                }
            }
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.phoneError = '';
            try {
                yield this.auth.login('+' + this.loginForm.phone, this.loginForm.password);
                this.router.navigateByUrl('/');
                this.notifierService.hideAll();
            }
            catch (error) {
                this.navigateToPhone();
                if (!error.status) {
                    this.phoneError = 'ERRORS.API_UNAVAILABLE';
                }
                else {
                    switch (error.code) {
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_NOT_FOUND:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.AUTHORIZATION_ERROR:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_GRANT:
                            this.phoneError = 'ERRORS.WRONG_CREDENTIALS';
                            break;
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_BLOCKED:
                            this.tokenService.clearDeviceToken();
                            this.phoneError = 'ERRORS.ACCOUNT_BLOCKED';
                            break;
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.DEVICE_NOT_AUTHORIZED:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.DEVICE_TOKEN_INVALID:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.TOKEN_EXPIRED:
                            this.navigateToSms();
                            // this.phoneError = error.description;
                            break;
                        default:
                            this.phoneError = error.description;
                            break;
                    }
                }
                this.loginPhone.triggerErrorAnimation();
                this.isLoading = false;
            }
        });
    }
    navigateToSms() {
        this.currentStep = LOGIN_STEPS.SMS;
    }
    navigateToPhone() {
        this.currentStep = LOGIN_STEPS.PHONE;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _shared_token_token_service__WEBPACK_IMPORTED_MODULE_3__.TokenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_9__.NotifierService }
];
LoginComponent.propDecorators = {
    loginPhone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['loginPhone',] }]
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'j-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 38223:
/*!********************************************************************!*\
  !*** ./src/app/auth/modals/can-register/can-register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanRegisterComponent": () => (/* binding */ CanRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _can_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can-register.component.html?ngResource */ 38163);
/* harmony import */ var _can_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-register.component.scss?ngResource */ 56979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let CanRegisterComponent = class CanRegisterComponent {
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
CanRegisterComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
CanRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-can-register',
        template: _can_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_can_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CanRegisterComponent);



/***/ }),

/***/ 61792:
/*!******************************************************************!*\
  !*** ./src/app/auth/modals/can-restore/can-restore.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanRestoreComponent": () => (/* binding */ CanRestoreComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _can_restore_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can-restore.component.html?ngResource */ 16333);
/* harmony import */ var _can_restore_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-restore.component.scss?ngResource */ 74655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let CanRestoreComponent = class CanRestoreComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal(message) {
        this.modal.close(message);
    }
};
CanRestoreComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
CanRestoreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-can-restore',
        template: _can_restore_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_can_restore_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CanRestoreComponent);



/***/ }),

/***/ 54446:
/*!**********************************************************************!*\
  !*** ./src/app/auth/modals/contact-modal/contact-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModalComponent": () => (/* binding */ ContactModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contact_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-modal.component.html?ngResource */ 84575);
/* harmony import */ var _contact_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-modal.component.scss?ngResource */ 36394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let ContactModalComponent = class ContactModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    closeModal(message) {
        this.modal.close(message);
    }
};
ContactModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ContactModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-contact-modal',
        template: _contact_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactModalComponent);



/***/ }),

/***/ 39118:
/*!**********************************************************!*\
  !*** ./src/app/auth/modals/expired/expired.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiredComponent": () => (/* binding */ ExpiredComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expired_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expired.component.html?ngResource */ 54320);
/* harmony import */ var _expired_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expired.component.scss?ngResource */ 78664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let ExpiredComponent = class ExpiredComponent {
    constructor(modal) {
        this.modal = modal;
    }
    closeModal() {
        this.modal.close();
    }
};
ExpiredComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ExpiredComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-expired',
        template: _expired_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expired_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpiredComponent);



/***/ }),

/***/ 56696:
/*!**************************************!*\
  !*** ./src/app/auth/modals/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanRegisterComponent": () => (/* reexport safe */ _can_register_can_register_component__WEBPACK_IMPORTED_MODULE_0__.CanRegisterComponent),
/* harmony export */   "CanRestoreComponent": () => (/* reexport safe */ _can_restore_can_restore_component__WEBPACK_IMPORTED_MODULE_1__.CanRestoreComponent),
/* harmony export */   "ContactModalComponent": () => (/* reexport safe */ _contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_2__.ContactModalComponent),
/* harmony export */   "ExpiredComponent": () => (/* reexport safe */ _expired_expired_component__WEBPACK_IMPORTED_MODULE_3__.ExpiredComponent),
/* harmony export */   "InvalidPhoneComponent": () => (/* reexport safe */ _invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_4__.InvalidPhoneComponent)
/* harmony export */ });
/* harmony import */ var _can_register_can_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can-register/can-register.component */ 38223);
/* harmony import */ var _can_restore_can_restore_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-restore/can-restore.component */ 61792);
/* harmony import */ var _contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-modal/contact-modal.component */ 54446);
/* harmony import */ var _expired_expired_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expired/expired.component */ 39118);
/* harmony import */ var _invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invalid-phone/invalid-phone.component */ 67832);







/***/ }),

/***/ 67832:
/*!**********************************************************************!*\
  !*** ./src/app/auth/modals/invalid-phone/invalid-phone.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidPhoneComponent": () => (/* binding */ InvalidPhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invalid_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-phone.component.html?ngResource */ 28360);
/* harmony import */ var _invalid_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid-phone.component.scss?ngResource */ 21967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





let InvalidPhoneComponent = class InvalidPhoneComponent {
    constructor(modal) {
        this.modal = modal;
    }
    closeModal() {
        this.modal.close();
    }
};
InvalidPhoneComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
InvalidPhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'j-invalid-phone',
        template: _invalid_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invalid_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvalidPhoneComponent);



/***/ }),

/***/ 37676:
/*!**************************************************************************!*\
  !*** ./src/app/auth/register/register-email/register-email.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterEmailComponent": () => (/* binding */ RegisterEmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-email.component.html?ngResource */ 24483);
/* harmony import */ var _register_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-email.component.scss?ngResource */ 3776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.config */ 45031);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/auth.service */ 50384);
/* harmony import */ var _auth_modals_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth/modals/contact-modal/contact-modal.component */ 54446);
/* harmony import */ var _auth_modals_expired_expired_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth/modals/expired/expired.component */ 39118);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
















let RegisterEmailComponent = class RegisterEmailComponent {
    constructor(route, auth, router, modalService, navService) {
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.navService = navService;
        this.smsCodeLength = _shared_models__WEBPACK_IMPORTED_MODULE_7__.SMS_CODE_LENGTH;
        this.timerMaxValue = _shared_models__WEBPACK_IMPORTED_MODULE_7__.SMS_TIMER_COUNTDOWN;
        this.expireTimerMaxValue = _auth_auth_config__WEBPACK_IMPORTED_MODULE_3__.AUTH_CONFIG.EMAIL_COUNTDOWN;
        this.errorTypes = _shared_models__WEBPACK_IMPORTED_MODULE_7__.SMS_ERROR_TYPES;
        this.isReady = false;
        this.currentTab = _shared_models__WEBPACK_IMPORTED_MODULE_7__.SMS_TABS.FORM;
        this.authTabs = _shared_models__WEBPACK_IMPORTED_MODULE_7__.SMS_TABS;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        this.emailCodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            emailCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        const routeSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => window.history.state))
            .subscribe((state) => {
            this.phone = state.phone;
            this.iin = state.iin;
            this.requestEmail();
        });
        const formSubscription = this.emailCodeForm.valueChanges.subscribe((value) => {
            this.isSubmitted = false;
            if (value.emailCode && value.emailCode.length === this.smsCodeLength) {
                this.onSubmit();
            }
        });
        this.subs.add(routeSubscription);
        this.subs.add(formSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    openContactModal() {
        this.modalService.open(_auth_modals_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_5__.ContactModalComponent, {
            centered: true,
        });
    }
    setTab(tab) {
        this.currentTab = tab;
    }
    get f() {
        return this.emailCodeForm.controls;
    }
    requestEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.f.emailCode.setValue('');
            this.errorText = '';
            this.hasError = false;
            try {
                const emailToken = yield this.auth.requestEmail(this.phone, this.iin);
                this.setTab(this.authTabs.FORM);
                this.email = emailToken.email.replace(/\*/gm, '•');
                this.codeInput.focus();
            }
            catch (error) {
                switch (error.code) {
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.ARGUMENT_MISSING:
                        this.router.navigate([`phone`], {
                            relativeTo: this.route.parent,
                        });
                        break;
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_BLOCKED:
                        if (error.data && error.data.millisecondsLeft) {
                            this.startBlockedTimer(error.data.millisecondsLeft);
                        }
                        this.setTab(this.authTabs.FORBIDDEN_BLOCKED);
                        break;
                    default:
                        this.setTab(this.authTabs.ERRORED);
                        break;
                }
            }
            finally {
                this.isReady = true;
            }
        });
    }
    navigateToPhone(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.router.navigate([`phone`], {
            relativeTo: this.route.parent,
            state: {
                iin: this.iin,
                phone: this.phone,
            },
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (this.emailCodeForm.valid) {
                this.isLoading = true;
                const emailCode = this.f.emailCode.value;
                try {
                    yield this.auth.submitEmail(emailCode, this.phone, this.iin);
                    this.router.navigate([`password`], {
                        relativeTo: this.route.parent,
                        state: { phone: this.phone, iin: this.iin },
                    });
                }
                catch (error) {
                    this.hasError = true;
                    switch (error.code) {
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.ARGUMENT_MISSING:
                            this.router.navigate([`phone`], {
                                relativeTo: this.route.parent,
                            });
                            break;
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_BLOCKED:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_CODE:
                            let triesLeft;
                            if (error.data && error.data.triesLeft) {
                                triesLeft = error.data.triesLeft;
                                this.errorParams = { triesLeft };
                                this.errorText = 'ERRORS.INVALID_CODE.';
                                switch (triesLeft % 20) {
                                    case 1:
                                        this.errorText += `ONE`;
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        this.errorText += `FEW`;
                                        break;
                                    default:
                                        this.errorText += `OTHER`;
                                }
                            }
                            else {
                                this.startTimer();
                                this.setTab(this.authTabs.FORBIDDEN);
                            }
                            break;
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.FORBIDDEN:
                            this.startTimer();
                            this.setTab(this.authTabs.FORBIDDEN);
                            break;
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.PHONE_TOKEN_EXPIRED:
                        case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.TOKEN_EXPIRED:
                            const modalRef = this.modalService.open(_auth_modals_expired_expired_component__WEBPACK_IMPORTED_MODULE_6__.ExpiredComponent, {
                                centered: true,
                            });
                            try {
                                yield modalRef.result;
                            }
                            catch (error) {
                            }
                            finally {
                                this.router.navigate([`iin`], {
                                    relativeTo: this.route.parent,
                                    state: { iin: this.iin },
                                });
                            }
                            break;
                        default:
                            this.errorText = error.description;
                            break;
                    }
                    this.codeInput.triggerHelperAnimation();
                }
                finally {
                    this.isLoading = false;
                }
            }
        });
    }
    startTimer(timerMaxValue = this.timerMaxValue) {
        this.isTimerRunning = true;
        this.timerValue = timerMaxValue;
        this.timer = setInterval(() => {
            this.timerValue--;
            if (this.timerValue === 0) {
                this.stopTimer();
            }
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.timer);
        this.isTimerRunning = false;
    }
    startBlockedTimer(millisecondsLeft) {
        this.blockedTimerValue = Math.ceil(millisecondsLeft / 1000);
        this.isBlockedTimerRunning = true;
        this.blockedTimer = setInterval(() => {
            this.blockedTimerValue--;
            if (this.blockedTimerValue === 0) {
                this.stopBlockedTimer();
            }
        }, 1000);
    }
    stopBlockedTimer() {
        clearInterval(this.blockedTimer);
        this.isBlockedTimerRunning = false;
        this.blockedTimerValue = null;
    }
};
RegisterEmailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_8__.NavService }
];
RegisterEmailComponent.propDecorators = {
    codeInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['codeInput',] }]
};
RegisterEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'j-register-email',
        template: _register_email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterEmailComponent);



/***/ }),

/***/ 13506:
/*!**************************************************************************!*\
  !*** ./src/app/auth/register/register-error/register-error.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterErrorComponent": () => (/* binding */ RegisterErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-error.component.html?ngResource */ 82221);
/* harmony import */ var _register_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-error.component.scss?ngResource */ 78462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/auth.model */ 90377);








let RegisterErrorComponent = class RegisterErrorComponent {
    constructor(route) {
        this.route = route;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        const routeDataSubscription = this.route.data.subscribe((data) => {
            this.authType = data.action;
        });
        const routeStateSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => window.history.state))
            .subscribe((state) => {
            this.error = state.error;
            this.iin = state.iin;
        });
        this.subscription.add(routeStateSubscription);
        this.subscription.add(routeDataSubscription);
    }
    get description() {
        return this.authType === _auth_auth_model__WEBPACK_IMPORTED_MODULE_2__.AUTH_TYPE.REGISTER
            ? 'AUTH.ERROR.DESCRIPTION_REGISTER'
            : 'AUTH.ERROR.DESCRIPTION_RESTORE';
    }
    get state() {
        return {
            iin: this.iin,
        };
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RegisterErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
RegisterErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'j-register-error',
        template: _register_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterErrorComponent);



/***/ }),

/***/ 5175:
/*!**********************************************************************!*\
  !*** ./src/app/auth/register/register-iin/register-iin.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterIinComponent": () => (/* binding */ RegisterIinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_iin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-iin.component.html?ngResource */ 77626);
/* harmony import */ var _register_iin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-iin.component.scss?ngResource */ 7387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.model */ 90377);
/* harmony import */ var _auth_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/modals */ 56696);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @company/company.service */ 26164);











const MODAL_OPTIONS = {
    backdropClass: 'backdrop_light',
    windowClass: 'modal_light modal-auth',
    size: 'md',
    centered: true,
};
let RegisterIinComponent = class RegisterIinComponent {
    constructor(router, route, navService, modalService, companyService) {
        this.router = router;
        this.route = route;
        this.navService = navService;
        this.modalService = modalService;
        this.companyService = companyService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.isFromAtf = false;
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        this.navService.triggerRegisterError('iin', false);
        this.navService.triggerRegisterError('no-account', false);
        this.navService.triggerRegisterError('no-email', false);
        this.navService.triggerRegisterError('user-blocked', false);
        this.navService.triggerRegisterError('phone-not-match', false);
        const routeDataSubscription = this.route.data.subscribe((data) => {
            this.title = data.title;
            this.authType = data.action;
        });
        const routeParamSubscription = this.route.queryParams.subscribe((queryParams) => {
            this.isFromAtf = this.companyService.isFromAtf(queryParams);
        });
        this.subs.add(routeDataSubscription);
        this.subs.add(routeParamSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onSubmit(result) {
        this.navigateToPhone(result.iin);
        // this.handleCheckIin(result.status, result.iin);
    }
    handleCheckIin(iinStatus, iin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            switch (iinStatus) {
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.BLOCKED:
                    this.navigateToUserBlocked();
                    break;
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.DOES_NOT_EXIST:
                    this.navigateToNoAccount();
                    break;
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.INCORRECT_DATA:
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.INVALID_DATA:
                    this.navigateToNoEmail();
                    break;
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.ALREADY_REGISTERED:
                    this.handleAlreadyRegistered(iin);
                    break;
                case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_STATUS.CAN_REGISTER:
                    this.handleCanRegister(iin);
                    break;
            }
        });
    }
    handleAlreadyRegistered(iin) {
        switch (this.authType) {
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.RESTORE:
                this.navigateToPhone(iin);
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.REGISTER:
                this.showCanRestoreModal(iin);
                break;
        }
    }
    showCanRegisterModal(iin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals__WEBPACK_IMPORTED_MODULE_4__.CanRegisterComponent, MODAL_OPTIONS);
            try {
                yield modalRef.result;
                this.navigateToRegisterPhone(iin);
            }
            catch (error) { }
        });
    }
    showCanRestoreModal(iin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals__WEBPACK_IMPORTED_MODULE_4__.CanRestoreComponent, MODAL_OPTIONS);
            try {
                const closeAction = yield modalRef.result;
                if (closeAction == 'restore') {
                    this.navigateToRestorePhone(iin);
                }
                else if (closeAction == 'login') {
                    this.navigateToLogin();
                }
            }
            catch (error) { }
        });
    }
    handleCanRegister(iin) {
        switch (this.authType) {
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.REGISTER:
                this.navigateToPhone(iin);
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.RESTORE:
                this.showCanRegisterModal(iin);
                break;
        }
    }
    navigateToPhone(iin, prefix = '') {
        this.router.navigate([`${prefix}phone`], {
            relativeTo: this.route.parent,
            state: {
                iin,
            },
        });
    }
    navigateToRegisterPhone(iin) {
        this.navigateToPhone(iin, '../register/');
    }
    navigateToRestorePhone(iin) {
        this.navigateToPhone(iin, '../restore/');
    }
    navigateToLogin() {
        this.router.navigate([`../login`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToNoAccount() {
        this.router.navigate([`no-account`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToNoEmail() {
        this.router.navigate([`no-email`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToUserBlocked() {
        this.router.navigate([`user-blocked`], {
            relativeTo: this.route.parent,
        });
    }
};
RegisterIinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService }
];
RegisterIinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'j-register-iin',
        template: _register_iin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_iin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterIinComponent);



/***/ }),

/***/ 45630:
/*!********************************************************************************!*\
  !*** ./src/app/auth/register/register-password/register-password.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPasswordComponent": () => (/* binding */ RegisterPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-password.component.html?ngResource */ 57084);
/* harmony import */ var _register_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-password.component.scss?ngResource */ 29559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.service */ 50384);
/* harmony import */ var _auth_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/modals */ 56696);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth/auth.model */ 90377);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);













let RegisterPasswordComponent = class RegisterPasswordComponent {
    constructor(auth, router, route, modalService, navService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.navService = navService;
        this.isLoading = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        const routeStateSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => window.history.state))
            .subscribe((state) => {
            this.phone = state.phone;
            this.iin = state.iin;
            if (!this.iin) {
                this.navigateToIin();
            }
            else if (!this.phone) {
                this.navigateToPhone();
            }
        });
        const routeDataSubscription = this.route.data.subscribe((data) => {
            this.authType = data.action;
        });
        this.subs.add(routeStateSubscription);
        this.subs.add(routeDataSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onSubmit(newPasswordResult) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            try {
                if (this.authType == _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.AUTH_TYPE.RESTORE) {
                    yield this.auth.restore(this.phone, newPasswordResult.newPassword, this.iin);
                }
                else {
                    yield this.auth.register(this.phone, newPasswordResult.newPassword, this.iin);
                }
                this.navigateToResult(newPasswordResult.newPassword);
            }
            catch (error) {
                this.mapError(error);
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    mapError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            switch (error.code) {
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_NOT_FOUND:
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.FORBIDDEN:
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.RESOURCE_EXISTS:
                    this.navigateToPhoneNotMatch();
                    break;
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.PHONE_TOKEN_EXPIRED:
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.TOKEN_EXPIRED:
                    this.showExpiredModal();
                    break;
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_PHONE_FORMAT:
                case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.ARGUMENT_MISSING:
                    this.navigateToPhone();
                    break;
                default:
                    this.errorText = error.description;
                    break;
            }
        });
    }
    showExpiredModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals__WEBPACK_IMPORTED_MODULE_4__.ExpiredComponent, {
                centered: true,
            });
            try {
                yield modalRef.result;
            }
            catch (error) {
            }
            finally {
                this.navigateToIin();
            }
        });
    }
    navigateToIin() {
        this.router.navigate([`iin`], {
            relativeTo: this.route.parent,
            state: { iin: this.iin || '' },
        });
    }
    navigateToPhone() {
        this.router.navigate([`phone`], {
            relativeTo: this.route.parent,
            state: { iin: this.iin },
        });
    }
    navigateToResult(newPassword) {
        this.router.navigate([`result`], {
            relativeTo: this.route.parent,
            state: { phone: this.phone, password: newPassword },
        });
    }
    navigateToPhoneNotMatch() {
        this.router.navigate([`phone-not-match`], {
            relativeTo: this.route.parent,
        });
    }
};
RegisterPasswordComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService }
];
RegisterPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'j-register-password',
        template: _register_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPasswordComponent);



/***/ }),

/***/ 76960:
/*!**************************************************************************!*\
  !*** ./src/app/auth/register/register-phone/register-phone.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPhoneComponent": () => (/* binding */ RegisterPhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-phone.component.html?ngResource */ 74089);
/* harmony import */ var _register_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-phone.component.scss?ngResource */ 2193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/index */ 39354);
/* harmony import */ var _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/masked/masked.service */ 26484);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth/auth.model */ 90377);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth/auth.service */ 50384);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _auth_modals_invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth/modals/invalid-phone/invalid-phone.component */ 67832);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services */ 17253);


















let RegisterPhoneComponent = class RegisterPhoneComponent {
    constructor(router, route, maskedService, maskPipe, navService, authService, modalService, translateService, dictionariesService) {
        this.router = router;
        this.route = route;
        this.maskedService = maskedService;
        this.maskPipe = maskPipe;
        this.navService = navService;
        this.authService = authService;
        this.modalService = modalService;
        this.translateService = translateService;
        this.dictionariesService = dictionariesService;
        this.PHONE = '';
        this.hasNoAccount = false;
        this.countryCode = {
            code: '+7',
            country: this.translateService.instant(`COUNTRIES.${_auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY.KAZAKHSTAN}`),
            id: _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY.KAZAKHSTAN,
            countryCode: _auth_auth_model__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COUNTRY_CODE.KAZAKHSTAN,
        };
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        this.registerPhoneForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.PHONE, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.navService.triggerRegisterError('phone', false);
        this.navService.triggerRegisterError('no-account', false);
        this.navService.triggerRegisterError('no-email', false);
        this.navService.triggerRegisterError('user-blocked', false);
        this.navService.triggerRegisterError('phone-not-match', false);
        const formSubscription = this.registerPhoneForm.valueChanges.subscribe(() => {
            this.isSubmitted = false;
        });
        const routeDataSubscription = this.route.data.subscribe((data) => {
            this.title = data.title;
            this.authType = data.action;
        });
        const routeStateSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => window.history.state))
            .subscribe((state) => {
            if (state.iin) {
                this.iin = state.iin;
            }
            else {
                this.navigateToIin();
            }
            if (state.countryCode) {
                this.countryCode = state.countryCode;
                if (state.phone) {
                    this.f.phone.setValue(state.phone);
                }
            }
        });
        this.subs.add(formSubscription);
        this.subs.add(routeDataSubscription);
        this.subs.add(routeStateSubscription);
    }
    ngOnInit() {
        this.fetchCountryCodes();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onEnter() {
        this.phoneInput.blur();
        this.onSubmit();
    }
    focus() {
        this.phoneInput.focus();
    }
    navigateFromModal(path) {
        this.router.navigate([`/auth/${path}/sms`], {
            state: { phone: this.phone, iin: this.iin },
        });
    }
    fetchCountryCodes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.dictionariesService.fetchCountryCodesDictionary().then(response => {
                    this.countryCodes = response.map((countryObj) => ({
                        id: countryObj.id,
                        code: countryObj.value.description,
                        country: countryObj.value.name,
                        countryCode: countryObj.value.code,
                    }));
                });
            }
            catch (err) { }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (!this.registerPhoneForm.valid) {
                this.errorText = 'ERRORS.NOT_ENOUGH_SYMBOLS';
                return;
            }
            this.isLoading = true;
            try {
                this.phone = '+' + this.maskedService.getUnmaskedPhone(this.f.phone.value);
                yield this.authService.checkPhone(this.phone);
                this.navigateToSms();
            }
            catch (error) {
                switch (error.code) {
                    case _api_index__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_PHONE_FORMAT:
                        yield this.showInvalidPhoneFormatModal();
                        break;
                    default:
                        this.errorText = error.description;
                        break;
                }
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    get f() {
        return this.registerPhoneForm.controls;
    }
    showInvalidPhoneFormatModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals_invalid_phone_invalid_phone_component__WEBPACK_IMPORTED_MODULE_7__.InvalidPhoneComponent, {
                centered: true,
            });
            try {
                yield modalRef.result;
            }
            catch (error) {
            }
            finally {
                this.phoneInput.focus();
            }
        });
    }
    navigateToSms() {
        this.router.navigate([`sms`], {
            relativeTo: this.route.parent,
            state: {
                phone: this.phone,
                iin: this.iin,
                countryCode: this.countryCode,
            },
        });
    }
    navigateToIin() {
        this.router.navigate([`iin`], {
            relativeTo: this.route.parent,
        });
    }
    onCountrySelected(countryCode) {
        this.countryCode = countryCode;
    }
};
RegisterPhoneComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _shared_masked_masked_service__WEBPACK_IMPORTED_MODULE_3__.MaskedService },
    { type: ngx_mask__WEBPACK_IMPORTED_MODULE_14__.MaskPipe },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__.DictionariesService }
];
RegisterPhoneComponent.propDecorators = {
    phoneInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['phoneInput',] }],
    onEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.HostListener, args: ['keyup.enter',] }]
};
RegisterPhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'j-register-phone',
        template: _register_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPhoneComponent);



/***/ }),

/***/ 66672:
/*!****************************************************************************!*\
  !*** ./src/app/auth/register/register-result/register-result.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterResultComponent": () => (/* binding */ RegisterResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_result_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-result.component.html?ngResource */ 44682);
/* harmony import */ var _register_result_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-result.component.scss?ngResource */ 12585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/auth.service */ 50384);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.model */ 90377);
/* harmony import */ var _shared_token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/token/token.service */ 47083);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/models */ 63157);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);












let RegisterResultComponent = class RegisterResultComponent {
    constructor(route, router, auth, tokenService, navService) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.tokenService = tokenService;
        this.navService = navService;
        this.isLoading = false;
        this.authTypes = _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        const routeStateSubscription = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => window.history.state))
            .subscribe((state) => {
            this.phone = state.phone;
            this.password = state.password;
        });
        const routeDataSubscription = this.route.data.subscribe((data) => {
            this.authType = data.action;
        });
        this.subs.add(routeStateSubscription);
        this.subs.add(routeDataSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    login(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            this.isLoading = true;
            try {
                const deviceToken = yield this.auth.requestDevice(this.phone, _shared_models__WEBPACK_IMPORTED_MODULE_5__.TOKEN_TYPE.SMS);
                this.tokenService.setDeviceToken(deviceToken.signature, this.password);
                yield this.auth.login(this.phone, this.password);
                this.router.navigateByUrl('/');
            }
            catch (error) {
                this.router.navigate(['/auth/login'], {
                    state: {
                        error: error.description || error,
                    },
                });
            }
            finally {
                this.isLoading = false;
            }
        });
    }
};
RegisterResultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _shared_token_token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService }
];
RegisterResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'j-register-result',
        template: _register_result_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_result_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterResultComponent);



/***/ }),

/***/ 64217:
/*!**********************************************************************!*\
  !*** ./src/app/auth/register/register-sms/register-sms.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSmsComponent": () => (/* binding */ RegisterSmsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_sms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-sms.component.html?ngResource */ 42086);
/* harmony import */ var _register_sms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-sms.component.scss?ngResource */ 18800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/auth.service */ 50384);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/auth.model */ 90377);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _auth_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/modals */ 56696);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/api.service */ 82524);
/* harmony import */ var _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/nav/nav.service */ 77501);













const MODAL_OPTIONS = {
    backdropClass: 'backdrop_light',
    windowClass: 'modal_light modal-auth',
    size: 'md',
    centered: true,
};
let RegisterSmsComponent = class RegisterSmsComponent {
    constructor(authService, route, router, modalService, navService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.navService = navService;
        this.isFormLoaded = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.navService.triggerActiveItem(route.snapshot.url[0].path);
        this.subs.add(this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => window.history.state))
            .subscribe((state) => {
            this.phone = state.phone;
            this.countryCode = state.countryCode;
            this.iin = state.iin;
            this.params = {
                actionIds: [this.iin],
            };
        }));
        const routeSubscription = this.route.data.subscribe((data) => {
            this.authType = data.action;
            this.headerParams = {
                smsHeader: _api_api_service__WEBPACK_IMPORTED_MODULE_5__.SMS_HEADERS[this.authType.toUpperCase()]
            };
        });
        this.subs.add(routeSubscription);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    onSmsFail() {
        this.navigateToPhone();
    }
    onFormLoaded() {
        this.isFormLoaded = true;
    }
    onSmsSubmit(smsToken) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.setSmsToken(smsToken);
            this.checkIinAndPhone();
        });
    }
    navigateToPhone(event = null) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.router.navigate([`phone`], {
            relativeTo: this.route.parent,
            state: { iin: this.iin, phone: this.phone, countryCode: this.countryCode },
        });
    }
    checkIinAndPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const iinAndPhoneCheckResult = yield this.authService.checkIinAndPhone(this.iin, this.phone);
                this.handleIinAndPhoneCheck(iinAndPhoneCheckResult.status);
            }
            catch (error) {
                this.navigateToError(error);
            }
        });
    }
    handleIinAndPhoneCheck(status) {
        switch (status) {
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.BLOCKED:
                this.navigateToUserBlocked();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.DOES_NOT_EXIST:
                this.navigateToNoAccount();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.INVALID_DATA:
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.INCORRECT_DATA:
                this.navigateToNoEmail();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.DATA_MISMATCH:
                this.navigateToPhoneNotMatch();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.ALREADY_REGISTERED:
                this.handleAlreadyRegistered();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.IIN_AND_PHONE_STATUS.CAN_REGISTER:
                this.handleCanRegister();
                break;
        }
    }
    navigateToError(error) {
        this.router.navigate([`error`], {
            relativeTo: this.route.parent,
            state: {
                error,
                iin: this.iin,
            },
        });
    }
    navigateToUserBlocked() {
        this.router.navigate([`user-blocked`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToEmail(prefix = '') {
        this.router.navigate([`${prefix}email`], {
            relativeTo: this.route.parent,
            state: { phone: this.phone, iin: this.iin },
        });
    }
    navigateToNoAccount() {
        this.router.navigate([`no-account`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToNoEmail() {
        this.router.navigate([`no-email`], {
            relativeTo: this.route.parent,
        });
    }
    navigateToPhoneNotMatch() {
        this.router.navigate([`phone-not-match`], {
            relativeTo: this.route.parent,
            state: { iin: this.iin, phone: this.phone, countryCode: this.countryCode },
        });
    }
    handleAlreadyRegistered() {
        switch (this.authType) {
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.RESTORE:
                this.navigateToEmail();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.REGISTER:
                this.showCanRestoreModal();
                break;
        }
    }
    showCanRegisterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals__WEBPACK_IMPORTED_MODULE_4__.CanRegisterComponent, MODAL_OPTIONS);
            try {
                yield modalRef.result;
                this.navigateToRegisterEmail();
            }
            catch (error) {
                this.navigateToPhone();
            }
        });
    }
    showCanRestoreModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_auth_modals__WEBPACK_IMPORTED_MODULE_4__.CanRestoreComponent, MODAL_OPTIONS);
            try {
                const closeAction = yield modalRef.result;
                if (closeAction === 'restore') {
                    this.navigateToRestoreEmail();
                }
                else if (closeAction === 'login') {
                    this.navigateToLogin();
                }
            }
            catch (error) {
                this.navigateToPhone();
            }
        });
    }
    handleCanRegister() {
        switch (this.authType) {
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.REGISTER:
                this.navigateToEmail();
                break;
            case _auth_auth_model__WEBPACK_IMPORTED_MODULE_3__.AUTH_TYPE.RESTORE:
                this.showCanRegisterModal();
                break;
        }
    }
    navigateToRegisterEmail() {
        this.navigateToEmail('../register/');
    }
    navigateToRestoreEmail() {
        this.navigateToEmail('../restore/');
    }
    navigateToLogin() {
        this.router.navigate([`../login`], {
            relativeTo: this.route.parent,
        });
    }
};
RegisterSmsComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal },
    { type: _shared_nav_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService }
];
RegisterSmsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'j-register-sms',
        template: _register_sms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_sms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterSmsComponent);



/***/ }),

/***/ 67225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 64966);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 98041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RegisterComponent = class RegisterComponent {
    constructor() { }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'j-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 98588:
/*!******************************************!*\
  !*** ./src/app/shared/validators/iin.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateIin": () => (/* binding */ validateIin)
/* harmony export */ });
function validateIin(c) {
    const isLengthValid = c.value.length == 12;
    if (isLengthValid) {
        return null;
    }
    let errors = {};
    if (!isLengthValid) {
        errors.length = true;
    }
    return { iin: errors };
}


/***/ }),

/***/ 32273:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/errors/no-account/no-account.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 18676:
/*!*************************************************************************!*\
  !*** ./src/app/auth/errors/no-email/no-email.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 64211:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/errors/phone-not-match/phone-not-match.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG9uZS1ub3QtbWF0Y2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 39729:
/*!*********************************************************************************!*\
  !*** ./src/app/auth/errors/user-blocked/user-blocked.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWJsb2NrZWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 63127:
/*!**************************************************************************!*\
  !*** ./src/app/auth/helpers/auth-iin/auth-iin.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWlpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 22004:
/*!******************************************************************************!*\
  !*** ./src/app/auth/login/login-phone/login-phone.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".phone-input {\n  display: flex;\n  flex-direction: row;\n}\n\nj-phone-input {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBob25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFRSw2QkFBQTtFQUNBLHFCQUFBO0VBQUEsY0FBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLXBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob25lLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbmotcGhvbmUtaW5wdXQge1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogc3RyZXRjaDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 45773:
/*!**************************************************************************!*\
  !*** ./src/app/auth/login/login-sms/login-sms.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".spinner-wrap {\n  min-height: 280px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXNtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1zbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci13cmFwIHtcbiAgbWluLWhlaWdodDogMjgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 83488:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".login {\n  background: #f6f7f8;\n  width: 100%;\n  padding: 1rem;\n}\n@media (min-width: 670px) {\n  .login {\n    border-radius: 2.5rem;\n    padding: 3.5rem;\n  }\n}\n.login-wrap {\n  max-width: 546px;\n  margin: auto;\n  width: 100%;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n@media (min-width: 1920px) {\n  .login-wrap {\n    max-width: 600px;\n  }\n}\n.spinner-wrap {\n  min-height: 280px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJDRVM7RUREVCxXQUFBO0VBQ0EsYUFBQTtBQUxGO0FFd0RJO0VGdERKO0lBTUkscUJDdU1lO0lEdE1mLGVBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRSxnQkFmZ0I7RUFnQmhCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUpGO0FFMENJO0VGM0NKO0lBUUksZ0JBckJpQjtFQWtCbkI7QUFDRjtBQU1BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUhGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2hhcmVkJztcblxuJGxvZ2luLW1hcmdpbi15OiAxMDBweDtcbiRsb2dpbi1tYXgtd2lkdGg6IDU0NnB4O1xuJGxvZ2luLW1heC13aWR0aC14bDogNjAwcHg7XG5cbi5sb2dpbiB7XG4gIGJhY2tncm91bmQ6ICRncmF5LTIwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHNwYWNlKDMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZztcbiAgICBwYWRkaW5nOiBzcGFjZSg3KTtcbiAgfVxufVxuXG4ubG9naW4td3JhcCB7XG4gIG1heC13aWR0aDogJGxvZ2luLW1heC13aWR0aDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IHNwYWNlKDQpO1xuICBwYWRkaW5nLWJvdHRvbTogc3BhY2UoNCk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAgIG1heC13aWR0aDogJGxvZ2luLW1heC13aWR0aC14bDtcbiAgfVxufVxuXG4uc3Bpbm5lci13cmFwIHtcbiAgbWluLWhlaWdodDogMjgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi8vIFZhcmlhYmxlc1xyXG4vL1xyXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3JcclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXktMTAwOiAjZmFmN2Y3O1xyXG4kZ3JheS0yMDA6ICNmNmY3Zjg7XHJcbiRncmF5LTMwMDogI2VjZWVmMTtcclxuJGdyYXktNDAwOiAjZDZkYWRmO1xyXG4kZ3JheS01MDA6ICNiN2JlYzU7XHJcbiRncmF5LTYwMDogIzY2NmM3MjtcclxuJGdyYXktNzAwOiAjNDc0YjUyO1xyXG4kZ3JheS04MDA6ICNlOWVjZjE7XHJcbiRncmF5LTkwMDogI2RiZGZlMjtcclxuJGdyYXktMTAwMDogIzgyODI4MjtcclxuJGJsYWNrOiAjMWExYzFmO1xyXG5cclxuJGdyYXlzOiAoKTtcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgJzEwMCc6ICRncmF5LTEwMCxcclxuICAgICcyMDAnOiAkZ3JheS0yMDAsXHJcbiAgICAnMzAwJzogJGdyYXktMzAwLFxyXG4gICAgJzQwMCc6ICRncmF5LTQwMCxcclxuICAgICc1MDAnOiAkZ3JheS01MDAsXHJcbiAgICAnNjAwJzogJGdyYXktNjAwLFxyXG4gICAgJzcwMCc6ICRncmF5LTcwMCxcclxuICAgICc4MDAnOiAkZ3JheS04MDAsXHJcbiAgKSxcclxuICAkZ3JheXNcclxuKTtcclxuXHJcbiRibHVlOiAjMjA0MTc3O1xyXG4kYmx1ZS1saWdodDogIzE1ODZiYjtcclxuJGJsdWUtd2hpdGU6ICNmNWY5ZmQ7XHJcbiRvcmFuZ2U6ICNlZjU2MzA7XHJcbiRvcmFuZ2UtZGFyazogI2Q0M2UxOTtcclxuJG9yYW5nZS1saWdodDogI2Y3YWI5ODtcclxuJHllbGxvdzogI2VmOGYwMDtcclxuJGdyZWVuOiAjMjM5YTU0O1xyXG4kZ3JlZW4tbGlnaHQ6ICM3NGJhNzI7XHJcbiRyZWQ6ICNmZjAwMDA7XHJcbiRyZWQtbGlnaHQ6ICNmZmVmZWY7XHJcblxyXG4kZ3JheTogJGdyYXktNTAwO1xyXG4kZ3JheS1kYXJrOiAkZ3JheS02MDA7XHJcbiRncmF5LWxpZ2h0OiAkZ3JheS00MDA7XHJcblxyXG4kY29sb3JzOiAoKTtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdibHVlJzogJGJsdWUsXHJcbiAgICAnYmx1ZS1saWdodCc6ICRibHVlLWxpZ2h0LFxyXG4gICAgJ2JsdWUtd2hpdGUnOiAkYmx1ZS13aGl0ZSxcclxuICAgICdvcmFuZ2UnOiAkb3JhbmdlLFxyXG4gICAgJ29yYW5nZS1kYXJrJzogJG9yYW5nZS1kYXJrLFxyXG4gICAgJ29yYW5nZS1saWdodCc6ICRvcmFuZ2UtbGlnaHQsXHJcbiAgICAneWVsbG93JzogJHllbGxvdyxcclxuICAgICdncmVlbic6ICRncmVlbixcclxuICAgICdncmVlbi1saWdodCc6ICRncmVlbi1saWdodCxcclxuICAgICdyZWQnOiAkcmVkLFxyXG4gICAgJ3JlZC1saWdodCc6ICRyZWQtbGlnaHQsXHJcbiAgICAnYmxhY2snOiAkYmxhY2ssXHJcbiAgICAnYmxhY2stbGlnaHQnOiAkZ3JheS03MDAsXHJcbiAgICAnZ3JheSc6ICRncmF5LTUwMCxcclxuICAgICdncmF5LWRhcmsnOiAkZ3JheS02MDAsXHJcbiAgICAnZ3JheS1saWdodCc6ICRncmF5LTQwMCxcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kc2Vjb25kYXJ5OiAkYmx1ZTtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJGluZm86ICRibHVlLWxpZ2h0O1xyXG4kd2FybmluZzogJHllbGxvdztcclxuJGRhbmdlcjogJHJlZDtcclxuJGxpZ2h0OiAkZ3JheS01MDA7XHJcbiRkYXJrOiAkYmxhY2s7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKTtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXHJcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcclxuICAgICdzdWNjZXNzJzogJHN1Y2Nlc3MsXHJcbiAgICAnaW5mbyc6ICRpbmZvLFxyXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcclxuICAgICdkYW5nZXInOiAkZGFuZ2VyLFxyXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxyXG4gICAgJ2RhcmsnOiAkZGFyayxcclxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vICR0ZXh0LWNvbG9yczogKCk7XHJcbi8vICR0ZXh0LWNvbG9yczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgICdkZWZhdWx0JzogJGJsYWNrLFxyXG4vLyAgICAgJ2xvdy1jb250cmFzdCc6ICRncmF5LTYwMCxcclxuLy8gICAgICdpbmZvJzogJGdyYXktNTAwLFxyXG4vLyAgICAgJ2Vycm9yJzogJHJlZCxcclxuLy8gICAgICdsaW5rJzogJGJsdWUsXHJcbi8vICAgICAnYmFsYW5jZSc6ICRncmVlbixcclxuLy8gICAgICdiYWxhbmNlLWNvaW5zJzogJGdyZWVuLWxpZ2h0LFxyXG4vLyAgICksXHJcbi8vICAgJHRleHQtY29sb3JzXHJcbi8vICk7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuJHNwYWNlcjogMXJlbTtcclxuJHNwYWNlcnM6ICgpO1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAvLyAwcHhcclxuICAgIDE6ICRzcGFjZXIgKiAwLjI1LFxyXG4gICAgLy8gNHB4IHh4cyxcclxuICAgIDI6ICRzcGFjZXIgKiAwLjUsXHJcbiAgICAvLyA4cHggeHMsXHJcbiAgICAzOiAkc3BhY2VyLFxyXG4gICAgLy8gMTZweCBzbVxyXG4gICAgNDogJHNwYWNlciAqIDEuNSxcclxuICAgIC8vIDI0cHggbWQsXHJcbiAgICA1OiAkc3BhY2VyICogMixcclxuICAgIC8vIDMycHggbGcsXHJcbiAgICA2OiAkc3BhY2VyICogMi41LFxyXG4gICAgLy8gNDBweCB4bCxcclxuICAgIDc6ICRzcGFjZXIgKiAzLjUsXHJcbiAgICAvLyA1NnB4IHh4bFxyXG4gICAgODogJHNwYWNlciAqIDQsXHJcbiAgICAvLyA2NHB4IHh4bFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG5cclxuJGJvZHktYmc6ICR3aGl0ZTtcclxuJGJvZHktY29sb3I6ICRkYXJrO1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcbiRsaW5rLWRlY29yYXRpb246IG5vbmU7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAkb3JhbmdlLWRhcms7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4vLyBQYXJhZ3JhcGhzXHJcbi8vXHJcbi8vIFN0eWxlIHAgZWxlbWVudC5cclxuXHJcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDY3MHB4LFxyXG4gIG1kOiA5NjBweCxcclxuICBsZzogMTI4MHB4LFxyXG4gIHhsOiAxOTIwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMjgwcHgsXHJcbik7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1jb2x1bW5zOiAxMjtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4O1xyXG4kZ3JpZC1yb3ctY29sdW1uczogNjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1zbTogMS41O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4kYm9yZGVyLXJhZGl1cy1tZDogcmVteSgxMik7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAyLjVyZW07XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjJyZW07XHJcblxyXG4vLyBMMFxyXG4kYm94LXNoYWRvdy14czogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuLy8gTDFcclxuJGJveC1zaGFkb3ctc206IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuLy8gTDJcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4vLyBMM1xyXG4kYm94LXNoYWRvdy1sZzogMHB4IDE0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4vLyBMNFxyXG4kYm94LXNoYWRvdy14bDogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAyNHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGU7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiR0cmFuc2l0aW9uLWZhZGU6IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogaGVpZ2h0IDAuMzVzIGVhc2U7XHJcbiR0cmFuc2l0aW9uLW1heC1oZWlnaHQ6IGFsbCAwLjZzIGVhc2U7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXHJcbiAgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7IC8vIDE0cHhcclxuJGZvbnQtc2l6ZS14czogcmVteSgxMik7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlcjtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiByZW15KDMwKTtcclxuJGgyLWZvbnQtc2l6ZTogcmVteSgyNik7XHJcbiRoMy1mb250LXNpemU6IHJlbXkoMjQpO1xyXG4kaDQtZm9udC1zaXplOiByZW15KDIyKTtcclxuJGg1LWZvbnQtc2l6ZTogcmVteSgyMCk7XHJcbiRoNi1mb250LXNpemU6IHJlbXkoMTgpO1xyXG5cclxuJGgxLWZvbnQtc2l6ZXM6IChcclxuICB4czogMzBweCxcclxuICBzbTogMzZweCxcclxuICBtZDogNDhweCxcclxuICBsZzogNDhweCxcclxuICB4bDogNjBweCxcclxuKTtcclxuXHJcbi8vIGgyIHNpemVzXHJcbiRoMi1mb250LXNpemVzOiAoXHJcbiAgeHM6IDI2cHgsXHJcbiAgc206IDMwcHgsXHJcbiAgbWQ6IDQwcHgsXHJcbiAgbGc6IDQ0cHgsXHJcbiAgeGw6IDU0cHgsXHJcbik7XHJcblxyXG4vLyBoMyBzaXplc1xyXG4kaDMtZm9udC1zaXplczogKFxyXG4gIHhzOiAyNHB4LFxyXG4gIHNtOiAyNnB4LFxyXG4gIG1kOiAzMnB4LFxyXG4gIGxnOiAzNnB4LFxyXG4gIHhsOiA0NHB4LFxyXG4pO1xyXG5cclxuLy8gaDQgc2l6ZXNcclxuJGg0LWZvbnQtc2l6ZXM6IChcclxuICB4czogMjJweCxcclxuICBzbTogMjRweCxcclxuICBtZDogMjRweCxcclxuICBsZzogMjhweCxcclxuICB4bDogMjhweCxcclxuKTtcclxuXHJcbi8vIGg1IHNpemVzXHJcbiRoNS1mb250LXNpemVzOiAoXHJcbiAgeHM6IDIwcHgsXHJcbiAgc206IDIycHgsXHJcbiAgbWQ6IDIycHgsXHJcbiAgbGc6IDI0cHgsXHJcbiAgeGw6IDI0cHgsXHJcbik7XHJcblxyXG4vLyBoNiBzaXplc1xyXG4kaDYtZm9udC1zaXplczogKFxyXG4gIHhzOiAxOHB4LFxyXG4gIHNtOiAxOHB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAyMHB4LFxyXG4gIHhsOiAyMHB4LFxyXG4pO1xyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IG51bGw7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRoZWFkaW5ncy1jb2xvcjogbnVsbDtcclxuXHJcbiRwMC1mb250LXNpemVzOiAoXHJcbiAgeHM6IDE2cHgsXHJcbiAgc206IDE2cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgbGc6IDE2cHgsXHJcbiAgeGw6IDE2cHgsXHJcbik7XHJcblxyXG4kcDEtZm9udC1zaXplczogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIHNtOiAxNnB4LFxyXG4gIG1kOiAxOHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIHhsOiAxOHB4LFxyXG4pO1xyXG5cclxuJHAyLWZvbnQtc2l6ZXM6IChcclxuICB4czogMTRweCxcclxuICBzbTogMTRweCxcclxuICBtZDogMTZweCxcclxuICBsZzogMTZweCxcclxuICB4bDogMTZweCxcclxuKTtcclxuXHJcbiRwMy1mb250LXNpemVzOiAoXHJcbiAgeHM6IDEycHgsXHJcbiAgc206IDEycHgsXHJcbiAgbWQ6IDE0cHgsXHJcbiAgbGc6IDE0cHgsXHJcbiAgeGw6IDE0cHgsXHJcbik7XHJcblxyXG4kcDQtZm9udC1zaXplczogKFxyXG4gIHhzOiAxMHB4LFxyXG4gIHNtOiAxMHB4LFxyXG4gIG1kOiAxMnB4LFxyXG4gIGxnOiAxMnB4LFxyXG4gIHhsOiAxMnB4LFxyXG4pO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuXHJcbiR0ZXh0LW11dGVkOiAkZ3JheS02MDA7XHJcblxyXG4vLyAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG5cclxuLy8gJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcclxuLy8gJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcblxyXG4vLyAkaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVGFibGVzXHJcbi8vIC8vXHJcbi8vIC8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cclxuXHJcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbi8vICR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xyXG5cclxuLy8gJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyAkdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBCdXR0b25zICsgRm9ybXNcclxuLy8gLy9cclxuLy8gLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6IG51bGw7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6IHJlbXkoMSk7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDEuMnJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogJGxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMi41cmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kYnRuLXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRidG4tZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGJ0bi1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuJGJ0bi13aGl0ZS1zcGFjZTogbnVsbDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktc206ICRpbnB1dC1idG4tcGFkZGluZy15LXNtO1xyXG4kYnRuLXBhZGRpbmcteC1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXgtc207XHJcbiRidG4tZm9udC1zaXplLXNtOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1saW5lLWhlaWdodC1zbTogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTtcclxuXHJcbiRidG4tcGFkZGluZy15LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZztcclxuJGJ0bi1wYWRkaW5nLXgtbGc6ICRpbnB1dC1idG4tcGFkZGluZy14LWxnO1xyXG4kYnRuLWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGc7XHJcbiRidG4tbGluZS1oZWlnaHQtbGc6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc7XHJcblxyXG4kYnRuLWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRidG4tZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuNTtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMTJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiA4cHg7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAvLyBGb3Jtc1xyXG5cclxuLy8gJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbXkoMjApO1xyXG4kaW5wdXQtZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRpbnB1dC1mb250LXNpemU6ICRpbnB1dC1idG4tZm9udC1zaXplO1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4vLyAkaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICR3aGl0ZTtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRkYXJrO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xyXG5cclxuJGlucHV0LWZvY3VzLWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuLy8gJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcclxuLy8gJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuLy8gJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcblxyXG4vLyAkZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICRpbnB1dC1wYWRkaW5nLXk7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogMS4yNXJlbTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxLjI1cmVtOyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmc6ICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6IGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSBuby1yZXBlYXQgcmlnaHRcclxuICAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKFxyXG4gIDFlbSAqIDAuNzUsXHJcbiAgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAwLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArXHJcbiAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ1xyXG4pICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHRcclxuICAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZlxyXG4gICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLWZpbGUtdGV4dDogKFxyXG4vLyAgIGVuOiBcIkJyb3dzZVwiXHJcbi8vICkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHZhbGlkYXRpb25cclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xyXG4vLyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4vLyAkZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxyXG4vLyAgIChcclxuLy8gICAgIFwidmFsaWRcIjogKFxyXG4vLyAgICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxyXG4vLyAgICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICAgIFwiaW52YWxpZFwiOiAoXHJcbi8vICAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcclxuLy8gICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxyXG4vLyAgICAgKSxcclxuLy8gICApLFxyXG4vLyAgICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXHJcbi8vICk7XHJcblxyXG4vLyAvLyBaLWluZGV4IG1hc3RlciBsaXN0XHJcbi8vIC8vXHJcbi8vIC8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xyXG4vLyAvLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXHJcblxyXG4vLyAkemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xyXG4vLyAkemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gTmF2c1xyXG5cclxuLy8gJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcclxuLy8gJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIE5hdmJhclxyXG5cclxuLy8gJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbi8vIC8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xyXG4vLyAkbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG4vLyAkbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcclxuXHJcbi8vICRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAkbmF2YmFyLWxpZ2h0LXRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcclxuLy8gJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay10aGVtZS1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLW1pbi13aWR0aDogMTByZW07XHJcbiRkcm9wZG93bi1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJGRyb3Bkb3duLXNwYWNlcjogMC4xMjVyZW07XHJcbiRkcm9wZG93bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGRyb3Bkb3duLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJGRyb3Bkb3duLWJnOiAkd2hpdGU7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjE1KTtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsXHJcbiAgJGRyb3Bkb3duLWJvcmRlci13aWR0aFxyXG4pO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogJG5hdi1kaXZpZGVyLW1hcmdpbi15O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkZ3JheS0yMDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjI1cmVtO1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIC8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC42cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxLjVyZW07XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6IDA7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJGxpbmstaG92ZXItY29sb3I7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGdyYXktODAwO1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogJGdyYXktODAwO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuXHJcbi8vIC8vIEp1bWJvdHJvblxyXG5cclxuLy8gJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuLy8gJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQ2FyZHNcclxuXHJcbi8vICRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFRvb2x0aXBzXHJcblxyXG4vLyAkdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbi8vICR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbi8vICR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xyXG4vLyAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcbi8vICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcclxuLy8gJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAyNDZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjIpICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoXHJcbiAgJHBvcG92ZXItYm9yZGVyLXJhZGl1cyxcclxuICAkcG9wb3Zlci1ib3JkZXItd2lkdGhcclxuKSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogJGJveC1zaGFkb3cteGwgIWRlZmF1bHQ7XHJcblxyXG4vLyAkcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcclxuLy8gJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xyXG5cclxuLy8gJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gVG9hc3RzXHJcblxyXG4vLyAkdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbi8vICR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcclxuLy8gJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xyXG5cclxuLy8gLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiByZW15KDEyKTtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIDAuMjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtO1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbWQ7XHJcblxyXG4vLyAkYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XHJcbi8vICRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyAkYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xyXG4vLyAvLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXHJcbi8vIC8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cclxuLy8gJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC43NXJlbTtcclxuXHJcbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xyXG4vLyAkbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiBudWxsO1xyXG4kbW9kYWwtY29udGVudC1iZzogJHdoaXRlO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDA7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogbm9uZTtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRibGFjaztcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogMDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjVyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg7XHJcblxyXG4vLyAkbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogMTA0NHB4O1xyXG4vLyAkbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcclxuLy8gJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAkbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xyXG4vLyAkbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEFsZXJ0c1xyXG4vLyAvL1xyXG4vLyAvLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbi8vICRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xyXG4vLyAkYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcclxuLy8gJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByb2dyZXNzIGJhcnNcclxuXHJcbi8vICRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcclxuLy8gJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4vLyAkcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIExpc3QgZ3JvdXBcclxuXHJcbi8vICRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6IDBweDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcclxuXHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbi8vICRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbi8vICR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuLy8gJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbi8vICR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBGaWd1cmVzXHJcblxyXG4vLyAkZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XHJcbi8vICRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIEJyZWFkY3J1bWJzXHJcblxyXG4vLyAkYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuLy8gJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbi8vICRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuLy8gJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4vLyAkYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENhcm91c2VsXHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4vLyAkY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuLy8gJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XHJcbi8vICRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXHJcblxyXG4vLyAvLyBTcGlubmVyc1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuLy8gJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XHJcbi8vICRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xyXG5cclxuLy8gJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xyXG4vLyAkc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBDbG9zZVxyXG5cclxuLy8gJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcclxuLy8gJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4vLyAkY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIENvZGVcclxuXHJcbi8vICRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xyXG4vLyAkY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcclxuXHJcbi8vICRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4vLyAka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcclxuLy8gJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xyXG4vLyAka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vICRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vICRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuLy8gJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAvLyBVdGlsaXRpZXNcclxuXHJcbi8vICRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcclxuLy8gJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xyXG4vLyAkcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcclxuXHJcbi8vIC8vIFByaW50aW5nXHJcblxyXG4vLyAkcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcclxuLy8gJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcclxuXHJcbi8vIEp5c2FuIFZhcmlhYmxlc1xyXG5cclxuQGZ1bmN0aW9uIHNwYWNlKCRzaXplKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRzcGFjZXJzLCAka2V5OiAkc2l6ZSk7XHJcbn1cclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA2MnB4O1xyXG4kaGVhZGVyLWhlaWdodC1tZDogMTAwcHg7XHJcbiRoZWFkZXItd2lkdGg6IDI4MHB4O1xyXG5cclxuJGJ0bi1taW4td2lkdGg6IDE2NHB4O1xyXG5cclxuLy8gSi1pbnB1dFxyXG4kai1pbnB1dC1mb250LXNpemU6IDFyZW07XHJcbiRqLWlucHV0LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcclxuJGotaW5wdXQtZm9udC1zdHlsZTogbm9ybWFsO1xyXG4kai1pbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcblxyXG4kai1pbnB1dC1saW5lLWhlaWdodDogMjBweDtcclxuJGotaW5wdXQtcGFkZGluZy15OiAxNy41cHg7XHJcbiRqLWlucHV0LXBhZGRpbmcteDogMjBweDtcclxuXHJcbiRqLWlucHV0LWJvcmRlci13aWR0aDogMXB4O1xyXG4kai1pbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRqLWlucHV0LWJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4kai1pbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yOiAkYmxhY2s7XHJcbiRqLWlucHV0LW1hc2stY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1pY29uLWNvbG9yOiAkb3JhbmdlO1xyXG4kai1pbnB1dC1oZWxwZXItY29sb3I6ICRncmF5LWRhcms7XHJcblxyXG4kai1pbnB1dC1ib3JkZXItY29sb3ItLWFjdGl2ZTogJHByaW1hcnk7XHJcbiRqLWlucHV0LWxhYmVsLWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG4kai1pbnB1dC10ZXh0LWNvbG9yLS1hY3RpdmU6ICRwcmltYXJ5O1xyXG5cclxuJGotaW5wdXQtYmFja2dyb3VuZC1jb2xvci0tZXJyb3I6ICRyZWQtbGlnaHQ7XHJcbiRqLWlucHV0LWhlbHBlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcbiRqLWlucHV0LWJvcmRlci1jb2xvci0tZXJyb3I6ICRyZWQ7XHJcblxyXG4kai1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yLS1kaXNhYmxlZDogJGlucHV0LWRpc2FibGVkLWJnOyAvLyBmcm9tIGZpZ21hIHByaW1pdGl2ZXMgc2hvdWxkIGJlIGdyYXktMjAwXHJcblxyXG4kai1pbnB1dC1sYWJlbC1wb3NpdGlvbi10b3A6ICRqLWlucHV0LXBhZGRpbmcteSArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tdG9wLWFjdGl2ZTogMTBweDtcclxuJGotaW5wdXQtbGluay1wb3NpdGlvbi10b3A6IDE2cHg7XHJcbiRqLWlucHV0LWxhYmVsLXBvc2l0aW9uLWxlZnQ6ICRqLWlucHV0LXBhZGRpbmcteCArICRqLWlucHV0LWJvcmRlci13aWR0aDtcclxuJGotaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6ICRqLWlucHV0LWxpbmUtaGVpZ2h0O1xyXG4kai1pbnB1dC1sYWJlbC1jb2xvcjogJGdyYXktZGFyaztcclxuXHJcbiRqLWlucHV0LXBhZGRpbmctdG9wOiAyN3B4O1xyXG4kai1pbnB1dC1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuJGotaW5wdXQtbWFyZ2luLWJvdHRvbTogMTZweDtcclxuJGotaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRncmF5O1xyXG4kai1pbnB1dC1wbGFjZWhvbGRlci1wb3NpdGlvbjogJGotaW5wdXQtcGFkZGluZy10b3AgKyAkai1pbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRqLWlucHV0LWNoYXItbGVuZ3RoOiA4Ljk5cHg7XHJcblxyXG4kai1pbnB1dC1idXR0b24tcG9zaXRpb246IDIwcHg7XHJcbiRqLWlucHV0LXNoYWRvdy1wb3NpdGlvbjogJGotaW5wdXQtbGFiZWwtcG9zaXRpb24tbGVmdDtcclxuXHJcbiRqLWlucHV0LWxhYmVsLXotaW5kZXg6IDA7XHJcbiRqLWlucHV0LXNoYWRvdy16LWluZGV4OiAxO1xyXG4kai1pbnB1dC16LWluZGV4OiAyO1xyXG4kai1pbnB1dC1saW5rLXotaW5kZXg6IDM7XHJcbiRqLWlucHV0LWJ1dHRvbi16LWluZGV4OiA0O1xyXG5cclxuJGJveC1zaGFkb3ctdG8tdG9wLWxnOiAwIC0xcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6IHRydWU7XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 56979:
/*!*********************************************************************************!*\
  !*** ./src/app/auth/modals/can-register/can-register.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW4tcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 74655:
/*!*******************************************************************************!*\
  !*** ./src/app/auth/modals/can-restore/can-restore.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW4tcmVzdG9yZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 36394:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/modals/contact-modal/contact-modal.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 78664:
/*!***********************************************************************!*\
  !*** ./src/app/auth/modals/expired/expired.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBpcmVkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 21967:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/modals/invalid-phone/invalid-phone.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZhbGlkLXBob25lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3776:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-email/register-email.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 78462:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-error/register-error.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7387:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/register/register-iin/register-iin.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1paW4uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 29559:
/*!*********************************************************************************************!*\
  !*** ./src/app/auth/register/register-password/register-password.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2193:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-phone/register-phone.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".phone-block {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBob25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLXBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob25lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */";

/***/ }),

/***/ 12585:
/*!*****************************************************************************************!*\
  !*** ./src/app/auth/register/register-result/register-result.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 18800:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/register/register-sms/register-sms.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1zbXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 98041:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 44012:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/errors/no-account/no-account.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<a routerLink=\"../iin\"\n   class=\"j-link\">\n    <j-icon [isStroke]=\"true\"\n            name=\"arrowLeft\"\n            color=\"primary\"\n            class=\"mr-2\"></j-icon>\n    <span translate>SHARED.BACK</span>\n</a>\n\n<article>\n    <h3 translate\n        class=\"light mb-3 mt-0\">AUTH.NO_ACCOUNT.TITLE</h3>\n    <p [innerHTML]=\"'AUTH.NO_ACCOUNT.DESCRIPTION' | translate : translateParams\"\n       class=\"mb-4\"></p>\n    <a routerLink=\"../iin\"\n       class=\"j-link\"\n       class=\"btn btn-static btn-primary\"\n       translate>AUTH.NO_ACCOUNT.LINK</a>\n    <a translate\n       href=\"https://jysanbank.kz/ru/page/contacts\"\n       target=\"_blank\"\n       class=\"btn btn-static btn-link\">AUTH.NO_ACCOUNT.CONTACTS</a>\n</article>";

/***/ }),

/***/ 2915:
/*!*************************************************************************!*\
  !*** ./src/app/auth/errors/no-email/no-email.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<a routerLink=\"../phone\"\n   class=\"j-link\">\n    <j-icon [isStroke]=\"true\"\n            name=\"arrowLeft\"\n            color=\"primary\"\n            class=\"mr-2\"></j-icon>\n    <span translate>SHARED.PHONE</span>\n</a>\n\n<article>\n    <h3 translate\n        class=\"light mb-3 mt-0\">AUTH.NO_EMAIL.TITLE</h3>\n    <p [innerHTML]=\"'AUTH.NO_EMAIL.DESCRIPTION' | translate\"\n       class=\"mb-4\"></p>\n    <a translate\n       href=\"https://jysanbank.kz/ru/page/contacts\"\n       target=\"_blank\"\n       class=\"btn btn-static btn-primary\">AUTH.NO_EMAIL.LINK</a>\n</article>";

/***/ }),

/***/ 64749:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/errors/phone-not-match/phone-not-match.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"#\"\n   (click)=\"navigateToPhone($event)\"\n   class=\"j-link\">\n   <j-icon [isStroke]=\"true\"\n           name=\"arrowLeft\"\n           color=\"primary\"\n           class=\"mr-2\"></j-icon>\n   <span translate>SHARED.PHONE</span>\n</a>\n\n<article>\n   <h3 translate\n       class=\"light mb-3 mt-0\">AUTH.PHONE_NOT_MATCH.TITLE</h3>\n   <p [innerHTML]=\"'AUTH.PHONE_NOT_MATCH.DESCRIPTION' | translate\"\n      class=\"mb-4\"></p>\n   <a href=\"#\"\n      translate\n      (click)=\"navigateToPhone($event)\"\n      class=\"btn btn-static btn-primary\">AUTH.PHONE_NOT_MATCH.LINK</a>\n</article>";

/***/ }),

/***/ 1048:
/*!*********************************************************************************!*\
  !*** ./src/app/auth/errors/user-blocked/user-blocked.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<a routerLink=\"../iin\"\n   class=\"j-link\">\n    <j-icon [isStroke]=\"true\"\n            name=\"arrowLeft\"\n            color=\"primary\"\n            class=\"mr-2\"></j-icon>\n    <span translate>SHARED.IIN</span>\n</a>\n\n<article>\n    <h3 translate\n        class=\"light mb-3 mt-0\">AUTH.USER_BLOCKED.TITLE</h3>\n    <p [innerHTML]=\"'AUTH.USER_BLOCKED.DESCRIPTION' | translate: translateParams\"\n       class=\"mb-4\"></p>\n</article>";

/***/ }),

/***/ 63777:
/*!**************************************************************************!*\
  !*** ./src/app/auth/helpers/auth-iin/auth-iin.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"openIinForm\">\n    <div class=\"form-group\">\n        <j-iin-input #iinInput\n                     [formControl]=\"f.iin\"\n                     [hasError]=\"f.iin.errors && isSubmitted\"\n                     [errorText]=\"errorText\"></j-iin-input>\n    </div>\n    <div class=\"auth-submit\">\n        <button translate\n                (click)=\"onSubmit()\"\n                type=\"submit\"\n                class=\"btn btn-static btn-primary btn-lg\"\n                [jLoading]=\"isLoading\"\n                [disabled]=\"isLoading\">SHARED.CONTINUE</button>\n        <a translate\n           href=\"#\"\n           class=\"btn btn-static btn-link\"\n           routerLink=\"/auth/login\">AUTH.LOGIN</a>\n    </div>\n</form>";

/***/ }),

/***/ 57991:
/*!******************************************************************************!*\
  !*** ./src/app/auth/login/login-phone/login-phone.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<article>\n  <h3 translate\n      class=\"light mb-3 mt-0\">AUTH.LOGIN_TITLE</h3>\n  <p>{{ (isFromAtf ? 'AUTH.LOGIN_SUBTITLE_ATF' : 'AUTH.LOGIN_SUBTITLE') | translate }}</p>\n</article>\n\n<form (ngSubmit)=\"onSubmit()\"\n      autocomplete=\"off\"\n      [formGroup]=\"loginForm\">\n  <div class=\"phone-input\">\n    <j-phone-prefix-input #phonePrefixInput\n                          formControlName=\"prefix\"\n                          [countryCode]=\"countryCode\"\n                          [countryCodes]=\"countryCodes\"\n                          (countrySelected)=\"onCountrySelected($event)\"\n                          (keydown.Tab)=\"onTabPress($event)\"></j-phone-prefix-input>\n    <j-phone-input #phoneInput\n                   [formControl]=\"f.phone\"\n                   [hasError]=\"loginError || (f.phone.errors && (isSubmitted || isPhoneSubmitted))\"\n                   [errorText]=\"loginError\"\n                   [countryCode]=\"countryCode\"\n                   [countryCodes]=\"countryCodes\"\n                   (countrySelected)=\"onCountrySelected($event)\"\n                   (keydown.Tab)=\"onTabPress($event)\"></j-phone-input>\n  </div>\n  <j-password-input #passwordInput\n                    [regexStr]=\"passwordRegExp\"\n                    [pasteRegexStr]=\"passwordPasteRegExp\"\n                    [hasCapsLockCheck]=\"true\"\n                    [hasCyrillicCheck]=\"true\"\n                    [isAuth]=\"!isLoading\"\n                    [formControl]=\"f.password\"\n                    [hasError]=\"passwordError || (isSubmitted && f.password.errors)\"\n                    [errorText]=\"passwordError\"></j-password-input>\n  <div class=\"auth-submit\">\n    <div class=\"auth-submit__button\">\n      <button translate\n              type=\"submit\"\n              class=\"btn btn-static btn-primary btn-lg\"\n              [jLoading]=\"isLoading\"\n              [disabled]=\"isLoading\">AUTH.LOGIN</button>\n    </div>\n    <div class=\"auth-submit__button\">\n      <button translate\n              [disabled]=\"isLoading\"\n              class=\"btn btn-static btn-link\"\n              routerLink=\"/auth/register\"\n              queryParamsHandling=\"merge\">AUTH.REGISTER</button>\n    </div>\n  </div>\n</form>";

/***/ }),

/***/ 92851:
/*!**************************************************************************!*\
  !*** ./src/app/auth/login/login-sms/login-sms.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<a *ngIf=\"isReady\"\n   href=\"#\"\n   (click)=\"navigateToPhone($event)\"\n   class=\"j-link\">\n       <j-icon [isStroke]=\"true\"\n               name=\"arrowLeft\"\n               color=\"primary\"\n               class=\"mr-2\"></j-icon>\n       <strong translate>SHARED.BACK</strong>\n</a>\n\n<j-sms (loaded)=\"onSmsLoaded()\"\n       [phone]=\"phone\"\n       [countryCode]=\"countryCode\"\n       [headers]=\"this.headerParams\"\n       [isAuthAction]=\"true\"\n       (otpAuthRequested)=\"changeCodeRequestMethod($event)\"\n       (submitted)=\"onSubmit($event)\"\n       *ngIf=\"preferredSignatureType === 'SMS'\"></j-sms>\n\n\n<j-otp (loaded)=\"onSmsLoaded()\"\n       [phone]=\"phone\"\n       [isAuthAction]=\"true\"\n       (smsAuthRequested)=\"changeCodeRequestMethod($event)\"\n       (submitted)=\"onSubmit($event)\"\n       *ngIf=\"preferredSignatureType === 'OTP'\"></j-otp>\n\n<div class=\"spinner-wrap\"\n     *ngIf=\"!isReady && preferredSignatureType !== tokenType.OTP\">\n       <j-animated-loading></j-animated-loading>\n</div>\n";

/***/ }),

/***/ 85639:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"auth-wrap\">\n  <j-aside [isUserShown]=\"false\"\n           class=\"d-sm-none\"></j-aside>\n  <div class=\"login-wrap\">\n    <div class=\"login\">\n      <div class=\"mb-7 d-none d-sm-flex justify-content-between\">\n        <img src=\"/assets/img/logo.svg\"\n             alt=\"Jusan bank\">\n        <img src=\"/assets/img/v2/atf.svg\"\n             alt=\"ATF Business\">\n      </div>\n      <section class=\"login-steps\">\n        <j-login-phone [hidden]=\"currentStep != steps.PHONE\"\n                       #loginPhone\n                       [phone]=\"phone\"\n                       [isLoading]=\"isLoading\"\n                       [passwordError]=\"phoneError\"\n                       (submitted)=\"onPhoneSubmit($event)\"></j-login-phone>\n        <j-login-sms *ngIf=\"currentStep == steps.SMS\"\n                     [phone]=\"phone\"\n                     [countryCode] = \"countryCode\"\n                     [isLoading]=\"isLoading\"\n                     (closed)=\"onSmsClose()\"\n                     (submitted)=\"onSmsSubmit($event)\">\n        </j-login-sms>\n        <div class=\"spinner-wrap\"\n             *ngIf=\"currentStep == steps.LOADING\">\n          <j-animated-loading></j-animated-loading>\n        </div>\n      </section>\n    </div>\n  </div>\n  <j-footer langClassName=\"d-block\"\n            copyrightClassName=\"\"></j-footer>\n</section>\n";

/***/ }),

/***/ 38163:
/*!*********************************************************************************!*\
  !*** ./src/app/auth/modals/can-register/can-register.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n  <button type=\"button\"\n          class=\"close\"\n          (click)=\"dismissModal()\">\n    <img src=\"/assets/icons/close.svg\"\n         alt=\"{{'SHARED.CLOSE' | translate}}\">\n  </button>\n</div>\n<div class=\"modal-body j-modal-body\">\n  <h3 translate\n      class=\"auth-heading light mb-3 mt-0\">AUTH.CAN_REGISTER.TITLE</h3>\n  <p translate\n     class=\"m-0\">AUTH.CAN_REGISTER.DESCRIPTION</p>\n</div>\n<div class=\"modal-footer j-modal-footer\">\n  <button translate\n          type=\"button\"\n          class=\"btn btn-static btn-primary\"\n          (click)=\"closeModal()\">AUTH.REGISTER</button>\n  <button translate\n          type=\"button\"\n          class=\"btn btn-static btn-link\"\n          (click)=\"dismissModal()\">SHARED.CANCEL</button>\n</div>";

/***/ }),

/***/ 16333:
/*!*******************************************************************************!*\
  !*** ./src/app/auth/modals/can-restore/can-restore.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n  <button type=\"button\"\n          class=\"close\"\n          (click)=\"dismissModal()\">\n    <img src=\"/assets/icons/close.svg\"\n         alt=\"{{'SHARED.CLOSE' | translate}}\">\n  </button>\n</div>\n<div class=\"modal-body j-modal-body\">\n  <h3 translate\n      class=\"auth-heading light mb-3 mt-0\">AUTH.CAN_RESTORE.TITLE</h3>\n  <p translate\n     class=\"m-0\">AUTH.CAN_RESTORE.DESCRIPTION</p>\n</div>\n<div class=\"modal-footer j-modal-footer\">\n  <button translate\n          type=\"button\"\n          class=\"btn btn-static btn-primary\"\n          (click)=\"closeModal('login')\">AUTH.LOGIN</button>\n  <!-- <button translate type=\"button\"\n          class=\"btn btn-static btn-link\"\n          (click)=\"closeModal('restore')\">AUTH.RESTORE</button> -->\n</div>";

/***/ }),

/***/ 84575:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/modals/contact-modal/contact-modal.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"dismissModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body\">\n    <h3 translate\n        class=\"auth-heading light mb-3 mt-0\">AUTH.CONTACT.TITLE</h3>\n    <p translate\n       class=\"m-0\">AUTH.CONTACT.DESCRIPTION </p>\n</div>\n<div class=\"modal-footer j-modal-footer\">\n    <a translate\n       href=\"https://jysanbank.kz/ru/page/contacts\"\n       target=\"_blank\"\n       class=\"btn btn-static btn-primary\">AUTH.CONTACT.LINK</a>\n    <button translate\n            type=\"button\"\n            class=\"btn btn-link d-none d-sm-block\"\n            (click)=\"dismissModal()\">SHARED.CANCEL</button>\n</div>";

/***/ }),

/***/ 54320:
/*!***********************************************************************!*\
  !*** ./src/app/auth/modals/expired/expired.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"closeModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body\">\n    <h3 translate\n        class=\"auth-heading light mb-3 mt-0\">AUTH.EXPIRED.TITLE</h3>\n    <p translate\n       class=\"m-0\">AUTH.EXPIRED.DESCRIPTION</p>\n</div>\n<div class=\"modal-footer j-modal-footer\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-primary\"\n            (click)=\"closeModal()\">SHARED.CLOSE</button>\n</div>";

/***/ }),

/***/ 28360:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/modals/invalid-phone/invalid-phone.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header j-modal-header\">\n    <button type=\"button\"\n            class=\"close\"\n            (click)=\"closeModal()\">\n        <img src=\"/assets/icons/close.svg\"\n             alt=\"{{'SHARED.CLOSE' | translate}}\">\n    </button>\n</div>\n<div class=\"modal-body j-modal-body\">\n    <h3 translate\n        class=\"auth-heading light mb-3 mt-0\">AUTH.INVALID_PHONE.TITLE</h3>\n    <p translate\n       class=\"m-0\">AUTH.INVALID_PHONE.DESCRIPTION</p>\n</div>\n<div class=\"modal-footer j-modal-footer\">\n    <button translate\n            type=\"button\"\n            class=\"btn btn-static btn-primary\"\n            (click)=\"closeModal()\">SHARED.OK</button>\n</div>";

/***/ }),

/***/ 24483:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-email/register-email.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<a *ngIf=\"isReady\"\r\n   href=\"#\"\r\n   (click)=\"navigateToPhone($event)\"\r\n   class=\"auth-backlink j-link\">\r\n  <j-icon [isStroke]=\"true\"\r\n          name=\"arrowLeft\"\r\n          color=\"primary\"\r\n          class=\"mr-2\"></j-icon>\r\n  <span translate>SHARED.PHONE</span>\r\n</a>\r\n\r\n<div [hidden]=\"!isReady\">\r\n  <h3 translate\r\n      class=\"auth-heading light mb-3 mt-0\">AUTH.EMAIL.TITLE</h3>\r\n\r\n  <div [hidden]=\"currentTab != authTabs.FORM\">\r\n    <p translate\r\n       class=\"mb-4\">\r\n      AUTH.EMAIL.DESCRIPTION\r\n      <strong class=\"text-nowrap\">{{email}}</strong>\r\n    </p>\r\n    <form class=\"my-4\"\r\n          (ngSubmit)=\"onSubmit()\"\r\n          [formGroup]=\"emailCodeForm\">\r\n      <j-sms-input #codeInput\r\n                   class=\"my-4\"\r\n                   [autofocus]=\"true\"\r\n                   [hasError]=\"hasError\"\r\n                   [errorText]=\"errorText\"\r\n                   [errorTranslateParams]=\"errorParams\"\r\n                   [formControl]=\"f.emailCode\"></j-sms-input>\r\n      <div class=\"auth-submit\">\r\n        <button translate\r\n                type=\"submit\"\r\n                class=\"btn btn-static btn-primary btn-lg\"\r\n                [jLoading]=\"isLoading\"\r\n                [disabled]=\"isLoading\">SHARED.CONTINUE</button>\r\n        <button translate\r\n                type=\"button\"\r\n                (click)=\"openContactModal()\"\r\n                class=\"btn btn-static btn-link\">AUTH.EMAIL.NO_CODE_RECEIVED</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <j-sms-error *ngIf=\"currentTab == authTabs.FORBIDDEN\"\r\n               [errorType]=\"errorTypes.FORBIDDEN\"\r\n               [isLoading]=\"isLoading\"\r\n               destinationLabel=\"AUTH.EMAIL.DESTINATION\"\r\n               [destinationValue]=\"email\"\r\n               [timerValue]=\"timerValue\"\r\n               [isTimerRunning]=\"isTimerRunning\"\r\n               (codeRequested)=\"requestEmail()\">\r\n  </j-sms-error>\r\n\r\n  <j-sms-error *ngIf=\"currentTab == authTabs.FORBIDDEN_BLOCKED\"\r\n               [errorType]=\"errorTypes.FORBIDDEN\"\r\n               [isLoading]=\"isLoading\"\r\n               destinationLabel=\"AUTH.EMAIL.DESTINATION\"\r\n               [destinationValue]=\"email\"\r\n               [timerValue]=\"blockedTimerValue\"\r\n               [isTimerRunning]=\"isBlockedTimerRunning\"\r\n               (codeRequested)=\"requestEmail()\">\r\n  </j-sms-error>\r\n\r\n  <j-sms-error *ngIf=\"currentTab == authTabs.ERRORED\"\r\n               [errorType]=\"errorTypes.UNKNOWN\"\r\n               [isLoading]=\"isLoading\"\r\n               destinationLabel=\"AUTH.EMAIL.DESTINATION\"\r\n               [destinationValue]=\"email\"\r\n               [isTimerRunning]=\"isBlockedTimerRunning\"\r\n               [timerValue]=\"blockedTimerValue\"\r\n               (codeRequested)=\"requestEmail()\">\r\n  </j-sms-error>\r\n</div>\r\n\r\n<j-animated-loading *ngIf=\"!isReady\"></j-animated-loading>";

/***/ }),

/***/ 82221:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-error/register-error.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<a routerLink=\"../iin\"\n   [state]=\"state\"\n   class=\"j-link\">\n  <j-icon [isStroke]=\"true\"\n          name=\"arrowLeft\"\n          color=\"primary\"\n          class=\"mr-2\"></j-icon>\n  <span translate>SHARED.IIN</span>\n</a>\n\n<article>\n  <h3 translate\n      class=\"light mb-3 mt-0\">AUTH.ERROR.TITLE</h3>\n  <p [innerHTML]=\"description | translate\"\n     class=\"mb-4\"></p>\n  <a routerLink=\"../iin\"\n     [state]=\"state\"\n     class=\"btn btn-primary\">\n    {{ 'SHARED.BACK' | translate }}\n  </a>\n</article>";

/***/ }),

/***/ 77626:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/register/register-iin/register-iin.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<article>\n    <h3 translate\n        class=\"auth-heading light mb-3 mt-0\">{{title}}</h3>\n    <p>{{ (isFromAtf ? 'AUTH.REGISTER_SUBTITLE_ATF' : 'AUTH.REGISTER_SUBTITLE' ) | translate}}</p>\n</article>\n\n<j-auth-iin (submitted)=\"onSubmit($event)\"></j-auth-iin>";

/***/ }),

/***/ 57084:
/*!*********************************************************************************************!*\
  !*** ./src/app/auth/register/register-password/register-password.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <a routerLink=\"../email\"\n   class=\"auth-backlink j-link\">\n  <j-icon [isStroke]=\"true\"\n          name=\"arrowLeft\"\n          color=\"primary\"\n          class=\"mr-2\"></j-icon>\n  <span translate>AUTH.EMAIL.CONFIRM</span>\n</a> -->\n<article>\n   <h3 translate\n       class=\"auth-heading light mb-3 mt-0\">AUTH.PASSWORD.TITLE</h3>\n   <p translate\n      class=\"mb-4\">AUTH.PASSWORD.DESCRIPTION</p>\n   <div class=\"my-4\">\n      <j-new-password [isLoading]=\"isLoading\"\n                      [errorText]=\"errorText\"\n                      (submitted)=\"onSubmit($event)\"></j-new-password>\n   </div>\n</article>";

/***/ }),

/***/ 74089:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/register/register-phone/register-phone.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<a routerLink=\"../iin\"\n   class=\"auth-backlink j-link\">\n  <j-icon [isStroke]=\"true\"\n          name=\"arrowLeft\"\n          color=\"primary\"\n          class=\"mr-2\"></j-icon>\n  <span translate>SHARED.IIN</span>\n</a>\n<article>\n  <h3 translate class=\"auth-heading light mb-3 mt-0\">{{title}}</h3>\n  <p translate>AUTH.PHONE.DESCRIPTION</p>\n</article>\n\n<form [formGroup]=\"registerPhoneForm\">\n  <div class=\"phone-block\">\n    <j-phone-prefix-input #phonePrefixInput\n                    [countryCodes]=\"countryCodes\"\n                    [countryCode]=\"countryCode\"\n                    (countrySelected)=\"onCountrySelected($event)\"></j-phone-prefix-input>\n    <j-phone-input #phoneInput\n                  [autofocus]=\"true\"\n                  [formControl]=\"f.phone\"\n                  [hasError]=\"f.phone.errors && isSubmitted\"\n                  [errorText]=\"errorText\"\n                  [countryCodes]=\"countryCodes\"\n                  (countrySelected)=\"onCountrySelected($event)\"\n                  [countryCode]=\"countryCode\"></j-phone-input>\n  </div>\n  <div class=\"auth-submit\">\n    <button translate (click)=\"onSubmit()\"\n            type=\"button\"\n            class=\"btn btn-static btn-primary btn-lg\"\n            [jLoading]=\"isLoading\"\n            [disabled]=\"isLoading\">SHARED.CONTINUE</button>\n  </div>\n</form>\n";

/***/ }),

/***/ 44682:
/*!*****************************************************************************************!*\
  !*** ./src/app/auth/register/register-result/register-result.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<article>\n  <h3 class=\"auth-heading light mb-3 mt-0\">\n    <span translate>SHARED.DONE</span>!\n  </h3>\n  <p class=\"mb-4\">\n    <span translate>{{ authType == authTypes.REGISTER ? 'AUTH.RESULT.REGISTERED' : 'AUTH.RESULT.RESTORED' }}</span>\n    <br />\n    <span translate>AUTH.RESULT.DESCRIPTION</span>\n  </p>\n</article>\n<div class=\"auth-submit\">\n  <button translate\n          class=\"btn btn-static btn-primary\"\n          [disabled]=\"isLoading\"\n          [jLoading]=\"isLoading\"\n          (click)=\"login($event)\">AUTH.LOGIN</button>\n</div>";

/***/ }),

/***/ 42086:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/register/register-sms/register-sms.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<a *ngIf=\"isFormLoaded\"\n   href=\"#\"\n   (click)=\"navigateToPhone($event)\"\n   class=\"auth-backlink j-link\">\n        <j-icon [isStroke]=\"true\"\n                name=\"arrowLeft\"\n                color=\"primary\"\n                class=\"mr-2\"></j-icon>\n        <span translate>SHARED.PHONE</span>\n</a>\n\n\n<j-sms *ngIf=\"params\"\n       [phone]=\"phone\"\n       [countryCode]=\"countryCode\"\n       [params]=\"params\"\n       [headers]=\"headerParams\"\n       (submitted)=\"onSmsSubmit($event)\"\n       (failed)=\"onSmsFail()\"\n       (loaded)=\"onFormLoaded()\"></j-sms>\n\n<j-animated-loading *ngIf=\"!isFormLoaded\"></j-animated-loading>\n";

/***/ }),

/***/ 64966:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<j-layout-home>\n  <j-aside [isUserShown]=\"false\">\n    <j-nav-auth></j-nav-auth>\n  </j-aside>\n\n  <j-main [isCentered]=\"true\">\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-md-7 offset-sm-1 col-lg-5 offset-lg-1 col-xl-4 offset-xl-1\">\n        <div class=\"auth-form\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </j-main>\n</j-layout-home>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map