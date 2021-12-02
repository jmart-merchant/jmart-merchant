function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(a){o=!0,r=a}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VBqz:function(t,e,n){"use strict";n.r(e);var i,o=n("ofXK"),r=n("3Pt+"),s=n("tk/3"),c=n("xJkR"),a=n("sYmb"),u=n("e8Ap"),l=n("4Nuw"),m=n("PCNd"),d=n("tyNb"),h=n("Kd2e"),b=n("fXoL"),v=n("S1F0"),f=n("oKsb"),p=n("fvpk"),g=n("mrSG"),A=n("quSY"),y=n("2Vo4"),S=n("lJxs"),R=n("Kj3r"),C=n("jtnZ"),E=n("+/Tu"),k=n("TwVa"),w=n("1kSV"),O=n("Kx/q"),T=((i=function(){function t(e){_classCallCheck(this,t),this.modal=e}return _createClass(t,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),t}()).\u0275fac=function(t){return new(t||i)(b.Qb(w.a))},i.\u0275cmp=b.Kb({type:i,selectors:[["j-conversion-success-modal"]],inputs:{fromBalance:"fromBalance",toBalance:"toBalance",description:"description"},decls:16,vars:7,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","./assets/img/history/modals/success.svg"],[1,"p2","mb-0","mt-4","text-muted"],[3,"money","showAllDecimals"],["src","./assets/icons/conversion/modal-success-arrow.svg"],[1,"p2","mb-0"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Wb(1,"div",1),b.Rb(2,"img",2),b.Wb(3,"p",3),b.Rb(4,"j-money",4),b.Vb(),b.Rb(5,"img",5),b.Wb(6,"h3"),b.Rb(7,"j-money",4),b.Vb(),b.Wb(8,"p",6),b.Sc(9),b.nc(10,"translate"),b.Vb(),b.Vb(),b.Wb(11,"div",7),b.Wb(12,"button",8),b.ic("click",(function(t){return e.closeModal()})),b.Sc(13," CONVERSION.NAVIGATE_TO_HISTORY "),b.Vb(),b.Wb(14,"button",9),b.ic("click",(function(t){return e.dismissModal()})),b.Sc(15," SHARED.BACK_TO_HOME "),b.Vb(),b.Vb()),2&t&&(b.Ab(4),b.tc("money",e.fromBalance)("showAllDecimals",!0),b.Ab(3),b.tc("money",e.toBalance)("showAllDecimals",!0),b.Ab(2),b.Tc(b.oc(10,5,e.description)))},directives:[O.a,a.a],pipes:[a.d],styles:[""]}),i);function N(t,e){if(1&t&&b.Rb(0,"p",10),2&t){var n=b.mc();b.tc("innerHTML",n.errorText,b.Ic)}}var V,_=((V=function(){function t(e){_classCallCheck(this,t),this.modal=e}return _createClass(t,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),t}()).\u0275fac=function(t){return new(t||V)(b.Qb(w.a))},V.\u0275cmp=b.Kb({type:V,selectors:[["j-conversion-error-modal"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","./assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Wb(1,"div",1),b.Rb(2,"img",2),b.nc(3,"translate"),b.Wb(4,"h3",3),b.Sc(5,"SHARED.ERROR"),b.Vb(),b.Wb(6,"p",4),b.Wb(7,"span",5),b.Sc(8),b.Vb(),b.Vb(),b.Qc(9,N,1,1,"p",6),b.Vb(),b.Wb(10,"div",7),b.Wb(11,"button",8),b.ic("click",(function(t){return e.closeModal()})),b.Sc(12," SHARED.TRY_AGAIN "),b.Vb(),b.Wb(13,"button",9),b.ic("click",(function(t){return e.dismissModal()})),b.Sc(14," SHARED.BACK_TO_HOME "),b.Vb(),b.Vb()),2&t&&(b.Ab(2),b.uc("alt",b.oc(3,3,"SHARED.ERROR")),b.Ab(6),b.Tc(e.description),b.Ab(1),b.tc("ngIf",e.errorText))},directives:[a.a,o.u],pipes:[a.d],styles:[""]}),V),x=n("FSKB"),I=n("0mgW"),L=n("VnnJ"),D=n("mR7B"),j=n("7rOj"),M=n("VO+5"),F=n("hsBV"),W=n("NpBu"),P=n("9odQ"),H=n("h7tf"),B=n("M6pS"),Q=["fromDropdown"],G=["toDropdown"],U=["purposeDropdown"],K=["commissionAccountDropdown"];function q(t,e){if(1&t&&b.Rb(0,"j-money",33),2&t){var n=b.mc();b.tc("money",n.commission)}}function X(t,e){1&t&&b.Rb(0,"span",34),2&t&&b.tc("translate","CONVERSION.COMMISSION_FALLBACK")}function Y(t,e){if(1&t&&(b.Ub(0),b.Rb(1,"j-money",39),b.Sc(2," = "),b.Rb(3,"j-money",39),b.Tb()),2&t){var n=b.mc(2);b.Ab(1),b.tc("showAllDecimals",!0)("money",n.rateFrom),b.Ab(2),b.tc("showAllDecimals",!0)("money",n.rateTo)}}function Z(t,e){if(1&t&&(b.Wb(0,"h6",35),b.Wb(1,"span",36),b.Sc(2,"CONVERSION.RATE"),b.Vb(),b.Sc(3,": "),b.Wb(4,"span",37),b.Qc(5,Y,4,4,"ng-container",38),b.Vb(),b.Vb()),2&t){var n=b.mc();b.Ab(4),b.tc("jLoading",n.isRateLoading)("jLoadingInverted",!0),b.Ab(1),b.tc("ngIf",!n.isRateLoading)}}function J(t,e){if(1&t){var n=b.Xb();b.Wb(0,"div",40),b.Wb(1,"div"),b.Sc(2),b.nc(3,"translate"),b.Vb(),b.Wb(4,"a",41),b.ic("click",(function(t){return b.Hc(n),b.mc().updateRate(t)})),b.Sc(5,"CONVERSION.RATE_RETRY"),b.Vb(),b.Vb()}if(2&t){var i=b.mc();b.Ab(2),b.Tc(i.rateErrorDescription?i.rateErrorDescription:b.oc(3,1,"CONVERSION.RATE_ERROR"))}}function $(t,e){if(1&t&&(b.Wb(0,"span",42),b.Sc(1),b.Vb()),2&t){var n=e.$implicit,i=b.mc();b.Ab(1),b.Vc(" ",i.getItemCode(n)," - ",i.getItemDescription(n)," ")}}function z(t,e){if(1&t&&(b.Wb(0,"div",43),b.Wb(1,"strong"),b.Sc(2),b.Vb(),b.Wb(3,"span"),b.Sc(4," - "),b.Vb(),b.Wb(5,"span"),b.Sc(6),b.Vb(),b.Vb()),2&t){var n=e.$implicit,i=b.mc();b.Ab(2),b.Tc(i.getItemCode(n)),b.Ab(4),b.Tc(i.getItemDescription(n))}}function tt(t,e){if(1&t){var n=b.Xb();b.Wb(0,"div",44),b.Wb(1,"button",45),b.ic("click",(function(t){return b.Hc(n),b.mc().edit()})),b.Sc(2,"CONVERSION.SAVE"),b.Vb(),b.Vb()}if(2&t){var i=b.mc();b.Ab(1),b.tc("jLoadingInverted",!0)("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function et(t,e){if(1&t){var n=b.Xb();b.Ub(0),b.Wb(1,"button",46),b.ic("click",(function(t){return b.Hc(n),b.mc(2).createOnly()})),b.Rb(2,"span",47),b.Wb(3,"span",16),b.Sc(4," CONVERSION.FOR_SIGN "),b.Vb(),b.Vb(),b.Wb(5,"button",48),b.ic("click",(function(t){return b.Hc(n),b.mc(2).createAndSign()})),b.Sc(6,"CONVERSION.SIGN"),b.Vb(),b.Tb()}if(2&t){var i=b.mc(2);b.Ab(1),b.tc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)("jLoadingInverted",!0),b.Ab(1),b.tc("inlineSVG","./assets/icons/conversion/sign.svg"),b.Ab(3),b.tc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function nt(t,e){if(1&t){var n=b.Xb();b.Ub(0),b.Wb(1,"button",48),b.ic("click",(function(t){return b.Hc(n),b.mc(2).createOnly()})),b.Rb(2,"span",47),b.Wb(3,"span",16),b.Sc(4," CONVERSION.FOR_SIGN "),b.Vb(),b.Vb(),b.Tb()}if(2&t){var i=b.mc(2);b.Ab(1),b.tc("disabled",i.isSubmitting)("jLoading",i.isSubmitting),b.Ab(1),b.tc("inlineSVG","./assets/icons/conversion/sign.svg")}}function it(t,e){if(1&t&&(b.Wb(0,"div",44),b.Qc(1,et,7,6,"ng-container",38),b.Qc(2,nt,5,3,"ng-container",38),b.Vb()),2&t){var n=b.mc();b.Ab(1),b.tc("ngIf",n.canSendAndSign),b.Ab(1),b.tc("ngIf",n.canSendOnly)}}var ot,rt,st,ct={backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0},at=function(t){return t.RATE_NOT_LOADED="rate_not_found",t}({}),ut=((rt=function(){function t(e,n,i,o,s,c,a,u,l,m,d){_classCallCheck(this,t),this.conversionService=e,this.accountsService=n,this.paymentsService=i,this.companyService=o,this.maskedService=s,this.curSymbolPipe=c,this.modalService=a,this.router=u,this.route=l,this.notifierService=m,this.translateService=d,this.descriptionMaxLength=250,this.isSubmitted=!1,this.isRateLoading=!1,this.isEditing=!1,this.isLoading=!0,this.isSubmitting=!1,this.isCommissionAccountSelectable=!1,this.rateFrom=null,this.rateTo=null,this.hasAccountFromRateError=!1,this.hasAccountToRateError=!1,this.rateErrorDescription="",this.commission=null,this.accounts=[],this.purposeList=[],this.subscription=new A.a,this.descriptionLengthMessage$=new y.a("0/".concat(this.descriptionMaxLength)),this.isAccountsLoading=!0,this.conversionForm=new r.k({id:new r.h(null),from:new r.h(null,r.H.required),fromAmount:new r.h("",r.H.required),to:new r.h(null,r.H.required),toAmount:new r.h("",r.H.required),documentNumber:new r.h("",r.H.required),purpose:new r.h("",r.H.required),commission:new r.h(null),commissionAccount:new r.h(null),rate:new r.h(null),description:new r.h("",[r.H.maxLength(this.descriptionMaxLength),r.H.required])}),this.listenFromAmount(),this.listenToAmount(),this.listenDescription()}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,e=this.route.params.subscribe((function(e){e.id&&(t.f.id.setValue(e.id),t.isEditing=!0)}));this.subscription.add(e)}},{key:"ngAfterViewInit",value:function(){var t=this,e=this.route.paramMap.pipe(Object(S.a)((function(){return window.history.state}))).subscribe((function(e){t.isEditing?t.loadEditConversion(t.f.id.value):e.repeatPaymentId?t.loadRepeatConversion(e.repeatPaymentId):t.loadNewConversion()})),n=this.conversionForm.valueChanges.subscribe((function(e){t.isSubmitted=!1}));this.subscription.add(e),this.subscription.add(n)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"getItemCode",value:function(t){return t.code||""}},{key:"getItemDescription",value:function(t){return t.description||""}},{key:"onFromSelect",value:function(t){t&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnFromSelectedRule(t),this.applySelectFromCompanionRule(t),this.selectFromAccount(t),this.recalculateToAmount())}},{key:"onToSelect",value:function(t){t&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnToSelectedRule(t),this.applySelectToCompanionRule(t),this.selectToAccount(t),this.recalculateToAmount())}},{key:"onPurposeSelect",value:function(t){t&&(this.f.purpose.setValue(t),this.recalculateCommission())}},{key:"onCommissionAccountSelect",value:function(t){t&&(this.f.commissionAccount.setValue(t),this.recalculateCommission())}},{key:"reverseAccounts",value:function(){var t=this.f.from.value,e=this.f.to.value;this.selectFromAccount(e),this.fromDropdown.selectAccount(e),this.f.fromAmount.setValue("",{emitEvent:!1}),this.selectToAccount(t),this.toDropdown.selectAccount(t),this.f.toAmount.setValue("",{emitEvent:!1})}},{key:"updateRate",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(t=e)||void 0===t||t.preventDefault(),this.hasAccountFromRateError?this.recalculateFromAmount():this.recalculateToAmount()}},{key:"mapDescriptionErrors",value:function(){return this.f.description.errors?this.f.description.errors.maxlength?"ERRORS.MAX_LENGTH":void 0:null}},{key:"retrievePurposeList",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.conversionService.getPurposeList();case 2:this.purposeList=t.sent;case 3:case"end":return t.stop()}}),t,this)})))}},{key:"retrieveAccounts",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isAccountsLoading=!0,t.prev=1,t.next=4,this.accountsService.getAccounts();case 4:e=t.sent,this.accounts=e.filter((function(t){var e;return!!(null===(e=t.balance)||void 0===e?void 0:e.currency)&&t.accountType===l.a.ACCOUNT})),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:return t.prev=10,this.isAccountsLoading=!1,t.finish(10);case 13:this.applyTwoAccountsRule();case 14:case"end":return t.stop()}}),t,this,[[1,8,10,13]])})))}},{key:"createOnly",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){t.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),t.next=19;break;case 4:return this.isSubmitting=!0,t.prev=5,t.next=8,this.conversionService.createConversion(this.conversionForm.getRawValue());case 8:this.paymentNumberStore.entity=null,this.showSuccessModal("CONVERSION.CREATE.SUCCESS"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),(e=this.handleError(t.t0))&&this.showCreateError(e);case 16:return t.prev=16,this.isSubmitting=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[5,12,16,19]])})))}},{key:"createAndSign",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){t.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),t.next=20;break;case 4:return this.isSubmitting=!0,t.prev=5,t.next=8,this.conversionService.createAndSignConversion(this.conversionForm.getRawValue());case 8:this.paymentNumberStore.entity=null,e=this.companyService.currentCompany.signatureScheme===k.j.SINGLE_SIGN&&this.companyService.currentAuthority.authority===k.a.PRIMARY_SIGNATURE?"CONVERSION.CREATE_AND_SIGN.SUCCESS":"CONVERSION.SIGN_ONLY.SUCCESS",this.showSuccessModal(e),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),(n=this.handleError(t.t0))&&this.showCreateAndSignError(n);case 17:return t.prev=17,this.isSubmitting=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[5,13,17,20]])})))}},{key:"edit",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isSubmitted=!0,!this.conversionForm.invalid){t.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),t.next=17;break;case 4:return this.isSubmitting=!0,t.prev=5,t.next=8,this.conversionService.saveEditedConversion(this.conversionForm.value,this.originalPayment);case 8:this.showSuccessModal("CONVERSION.EDIT.SUCCESS"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),t.t0.code==C.a.RATE_CHANGED?(this.showErrorNotification(t.t0),this.updateRate()):this.showEditError(this.mapError(t.t0));case 14:return t.prev=14,this.isSubmitting=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[5,11,14,17]])})))}},{key:"loadRepeatConversion",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,Promise.all([this.conversionService.getConversionById(t),this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:n=e.sent,i=_slicedToArray(n,1),o=i[0],this.loadConversionFromPayment(o),this.isLoading=!1;case 7:case"end":return e.stop()}}),e,this)})))}},{key:"loadEditConversion",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,Promise.all([this.conversionService.getConversionById(t),this.retrievePurposeList(),this.retrieveAccounts()]);case 3:n=e.sent,i=_slicedToArray(n,1),o=i[0],this.f.documentNumber.setValue(o.details.documentId),this.loadConversionFromPayment(o),this.isLoading=!1;case 7:case"end":return e.stop()}}),e,this)})))}},{key:"listenDescription",value:function(){var t=this;this.f.description.valueChanges.subscribe((function(e){t.descriptionLengthMessage$.next("".concat(e.length,"/").concat(t.descriptionMaxLength))}))}},{key:"showRateNotLoadedNotification",value:function(){var t=this.translateService.instant("CONVERSION.RATE_NOT_LOADED");this.notifierService.hideAll(),this.notifierService.notify("default",t)}},{key:"showErrorNotification",value:function(t){if(t.code===C.a.RATE_CHANGED){var e=this.translateService.instant("CONVERSION.RATE_CHANGED");this.notifierService.hideAll(),this.notifierService.notify("default",e)}}},{key:"loadConversionFromPayment",value:function(t){this.originalPayment=t,this.selectFromAccountByIban(t.details.payerIban),this.selectToAccountByIban(t.paymentRecipient.recipientAccount.iban),this.selectPurposeByCode(t.details.conversionPurpose.code);var e=this.maskedService.getMaskedAmount(t.details.paymentAmount.amount,this.curSymbolPipe.transform(t.details.paymentAmount.currency));this.f.fromAmount.patchValue(e),this.f.description.patchValue(t.details.description)}},{key:"loadNewConversion",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)})))}},{key:"selectPurposeByCode",value:function(t){var e=this.purposeList.find((function(e){return e.code==t}));this.onPurposeSelect(e),this.purposeDropdown.selectItem(e)}},{key:"selectToAccountByIban",value:function(t){var e=this.findAccountByIban(t);this.selectToAccount(e),this.toDropdown.selectAccount(e)}},{key:"selectFromAccountByIban",value:function(t){var e=this.findAccountByIban(t);this.selectFromAccount(e),this.fromDropdown.selectAccount(e)}},{key:"listenFromAmount",value:function(){var t=this,e=this.f.fromAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(e){e&&t.recalculateToAmount()}));this.subscription.add(e)}},{key:"listenToAmount",value:function(){var t=this,e=this.f.toAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(e){e&&t.recalculateFromAmount()}));this.subscription.add(e)}},{key:"applyTwoAccountsRule",value:function(){if(2==this.accounts.length&&this.accounts[0].balance.currency!=this.accounts[1].balance.currency){var t=this.accounts.filter((function(t){return t.balance.currency===E.a.KZT})),e=t.length?t[0]:this.accounts[0];this.selectFromAccount(e),this.fromDropdown.selectAccount(e),this.applySelectFromCompanionRule(e)}}},{key:"applySelectToCompanionRule",value:function(t){var e;if(2==(null===(e=this.accounts)||void 0===e?void 0:e.length)){var n=this.findUnselectedAccount(t);this.selectFromAccount(n),this.fromDropdown.selectAccount(n)}}},{key:"applySelectFromCompanionRule",value:function(t){var e;if(2==(null===(e=this.accounts)||void 0===e?void 0:e.length)){var n=this.findUnselectedAccount(t);this.selectToAccount(n),this.toDropdown.selectAccount(n)}}},{key:"applyClearAmountsIfOnlyTwoAccountsRule",value:function(){2==this.accounts.length&&(this.f.fromAmount.setValue(""),this.f.toAmount.setValue(""))}},{key:"findUnselectedAccount",value:function(t){var e;return null===(e=this.accounts)||void 0===e?void 0:e.find((function(e){return e!=t}))}},{key:"findAccountByIban",value:function(t){var e;return null===(e=this.accounts)||void 0===e?void 0:e.find((function(e){return e.iban==t}))}},{key:"setAutoNumeration",value:function(){var t=this;this.subscription.add(this.paymentsService.conversionPaymentNumber$.subscribe((function(e){t.f.documentNumber.setValue(e)})))}},{key:"selectToAccount",value:function(t){var e;this.toCurrency=null===(e=t.balance)||void 0===e?void 0:e.currency,this.f.to.setValue(t)}},{key:"selectFromAccount",value:function(t){var e;this.fromCurrency=null===(e=t.balance)||void 0===e?void 0:e.currency,this.f.from.setValue(t)}},{key:"clearToAccount",value:function(){var t;this.toCurrency=null,this.f.to.setValue(null),null===(t=this.toDropdown)||void 0===t||t.clearSelected()}},{key:"clearFromAccount",value:function(){var t;this.fromCurrency=null,this.f.from.setValue(null),null===(t=this.fromDropdown)||void 0===t||t.clearSelected()}},{key:"applyClearOnFromSelectedRule",value:function(t){t==this.f.to.value&&this.clearToAccount()}},{key:"applyClearOnToSelectedRule",value:function(t){t==this.f.from.value&&this.clearFromAccount()}},{key:"recalculateToAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.fromCurrency&&this.toCurrency&&this.f.fromAmount.value){t.next=2;break}return t.abrupt("return");case 2:return this.f.toAmount.disable({emitEvent:!1}),this.hasAccountToRateError=!1,this.hasAccountFromRateError=!1,this.rateErrorDescription="",this.isRateLoading=!0,this.rateFrom=null,this.rateTo=null,e=this.maskedService.getNumberedAmount(this.f.fromAmount.value),t.prev=4,t.next=7,this.conversionService.getRate({currencyFrom:this.fromCurrency,currencyTo:this.toCurrency,sum:{amount:e,currency:this.fromCurrency}});case 7:n=t.sent,this.f.rate.setValue(n),this.rateFrom=n.equation.from,this.rateTo=n.equation.to,i=this.maskedService.getMaskedAmount(n.calculatedSum,this.curSymbolPipe.transform(this.toCurrency)),this.f.toAmount.patchValue(i,{emitEvent:!1}),this.recalculateCommission(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),t.t0.code===at.RATE_NOT_LOADED&&(this.rateErrorDescription=t.t0.description),this.f.toAmount.patchValue("",{emitEvent:!1}),this.hasAccountToRateError=!0;case 16:return t.prev=16,this.f.toAmount.enable({emitEvent:!1}),this.isRateLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[4,13,16,19]])})))}},{key:"recalculateFromAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.fromCurrency&&this.toCurrency&&this.f.toAmount.value){t.next=2;break}return t.abrupt("return");case 2:return this.hasAccountToRateError=!1,this.hasAccountFromRateError=!1,this.f.fromAmount.disable({emitEvent:!1}),this.isRateLoading=!0,this.rateFrom=null,this.rateTo=null,e=this.maskedService.getNumberedAmount(this.f.toAmount.value),t.prev=4,t.next=7,this.conversionService.getRate({currencyFrom:this.fromCurrency,currencyTo:this.toCurrency,sum:{amount:e,currency:this.toCurrency}});case 7:n=t.sent,this.f.rate.setValue(n),this.rateFrom=n.equation.from,this.rateTo=n.equation.to,i=this.maskedService.getMaskedAmount(n.calculatedSum,this.curSymbolPipe.transform(this.fromCurrency)),this.f.fromAmount.patchValue(i,{emitEvent:!1}),this.recalculateCommission(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),t.t0.code===at.RATE_NOT_LOADED&&(this.rateErrorDescription=t.t0.description),this.f.fromAmount.patchValue("",{emitEvent:!1}),this.hasAccountFromRateError=!0;case 16:return t.prev=16,this.f.fromAmount.enable({emitEvent:!1}),this.isRateLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[4,13,16,19]])})))}},{key:"recalculateCommission",value:function(){var t;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.conversionService.getCommission(this.conversionForm.getRawValue());case 3:this.commission=e.sent,this.f.commission.setValue(this.commission),this.isCommissionAccountSelectable=(null===(t=this.commission)||void 0===t?void 0:t.amount)>0,this.isCommissionAccountSelectable&&void 0===this.commissionAccountDropdown.selectedAccount&&this.setSelectedDefaultCommissionAccount(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.commission=null;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})))}},{key:"setSelectedDefaultCommissionAccount",value:function(){var t,e,n;1==this.accounts.length&&(null===(t=this.commissionAccountDropdown)||void 0===t||t.selectAccount(this.accounts[0]),this.onCommissionAccountSelect(this.accounts[0]));var i=this.accounts.filter((function(t){return t.balance.currency===E.a.KZT}));1==(null===(e=i)||void 0===e?void 0:e.length)&&(null===(n=this.commissionAccountDropdown)||void 0===n||n.selectAccount(i[0]),this.onCommissionAccountSelect(i[0]))}},{key:"showCreateError",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.showErrorModal("TRANSFERS.CREATE.ERROR",t);case 3:this.createOnly(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.navigateToHome();case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"showCreateAndSignError",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",t);case 3:this.createAndSign(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.navigateToHome();case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"showEditError",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.showErrorModal("TRANSFERS.EDIT.ERROR",t);case 3:this.edit(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.navigateToHome();case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"showSuccessModal",value:function(t){var e,n,i,o;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var s,c,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(s=this.modalService.open(T,ct)).componentInstance.description=t,c=this.maskedService.getNumberedAmount(this.f.fromAmount.value),a=this.maskedService.getNumberedAmount(this.f.toAmount.value),s.componentInstance.fromBalance={amount:c,currency:null===(n=null===(e=this.f.from.value)||void 0===e?void 0:e.balance)||void 0===n?void 0:n.currency},s.componentInstance.toBalance={amount:a,currency:null===(o=null===(i=this.f.to.value)||void 0===i?void 0:i.balance)||void 0===o?void 0:o.currency},r.prev=4,r.next=7,s.result;case 7:this.navigateToHistory(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(4),this.navigateToHome();case 13:case"end":return r.stop()}}),r,this,[[4,10]])})))}},{key:"showErrorModal",value:function(t,e){var n=this.modalService.open(_,ct);return n.componentInstance.description=t,n.componentInstance.errorText=e,n.result}},{key:"navigateToHome",value:function(){this.router.navigate(["/"])}},{key:"navigateToHistory",value:function(){this.router.navigate(["/history/conversion",{}])}},{key:"handleError",value:function(t){if(t)return t.code!=C.a.RATE_CHANGED?(this.paymentNumberStore.entity=this.f.documentNumber.value,this.mapError(t)):(this.showErrorNotification(t),void this.updateRate())}},{key:"mapError",value:function(t){var e,n="";if(null===(e=t)||void 0===e?void 0:e.data){var i=0;for(var o in t.data)Object.prototype.hasOwnProperty.call(t.data,o)&&(i++>0&&(n+="<br>"),n+="".concat(t.data[o]))}else n=t.description||t.code||t;return n}},{key:"f",get:function(){return this.conversionForm.controls}},{key:"fromAccounts",get:function(){return this.toCurrency===E.a.KZT?this.accounts.filter((function(t){return t.balance.currency!==E.a.KZT})):this.accounts}},{key:"toAccounts",get:function(){return this.fromCurrency===E.a.KZT?this.accounts.filter((function(t){return t.balance.currency!==E.a.KZT})):this.accounts}},{key:"canSendAndSign",get:function(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}},{key:"canSendOnly",get:function(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}},{key:"isRateShown",get:function(){return this.rateFrom&&this.rateTo||this.isRateLoading}},{key:"fromAmountError",get:function(){var t,e;return this.f.fromAmount.value&&this.maskedService.getNumberedAmount(this.f.fromAmount.value)>(null===(e=null===(t=this.f.from.value)||void 0===t?void 0:t.balance)||void 0===e?void 0:e.amount)?"ERRORS.NOT_ENOUGH_AMOUNT":null}}]),t}()).\u0275fac=function(t){return new(t||rt)(b.Qb(x.a),b.Qb(l.c),b.Qb(I.c),b.Qb(L.a),b.Qb(D.a),b.Qb(j.c),b.Qb(w.q),b.Qb(d.c),b.Qb(d.a),b.Qb(M.c),b.Qb(a.e))},rt.\u0275cmp=b.Kb({type:rt,selectors:[["j-conversion-form"]],viewQuery:function(t,e){var n;1&t&&(b.Xc(Q,!0),b.Xc(G,!0),b.Xc(U,!0),b.Xc(K,!0)),2&t&&(b.Dc(n=b.jc())&&(e.fromDropdown=n.first),b.Dc(n=b.jc())&&(e.toDropdown=n.first),b.Dc(n=b.jc())&&(e.purposeDropdown=n.first),b.Dc(n=b.jc())&&(e.commissionAccountDropdown=n.first))},decls:48,vars:43,consts:[[1,"conversion",3,"formGroup"],[1,"conversion__main"],[1,"conversion__from"],["translate","",1,"mb-3"],[1,"form-group"],["label","CONVERSION.FROM.LABEL",3,"hasError","isLoading","accounts","isDisabledSelectable","selected"],["fromDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","errorText","isDisabled","currency"],[1,"conversion__arrows"],[3,"disabled","inlineSVG","click"],[1,"conversion__to"],["label","CONVERSION.TO.LABEL",3,"isLoading","hasError","accounts","isDisabledSelectable","selected"],["toDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","isDisabled","currency"],[1,"conversion__rates"],[1,"p3","text-muted"],["translate",""],[3,"money",4,"ngIf"],[3,"translate",4,"ngIf"],["class","d-inline-flex align-items-center",4,"ngIf"],["class","p3 text-muted mt-2",4,"ngIf"],[1,"conversion__details"],[1,"conversion__details-row"],["label","CONVERSION.DETAILS.DOCUMENT_NUMBER",3,"formControl","hasError","isClearable"],["label","CONVERSION.DETAILS.PURPOSE",3,"options","hasError","selected"],["purposeDropdown",""],["selectedTemplate",""],["optionTemplate",""],[1,"form-group",3,"hidden"],["label","CONVERSION.COMMISSION_ACCOUNT",3,"isLoading","accounts","isDisabledSelectable","selected"],["commissionAccountDropdown",""],["label","CONVERSION.DETAILS.DESCRIPTION","type","textarea",3,"inputExtra","formControl","hasError","errorText","maxLength","isClearable"],["class","form-footer",4,"ngIf"],[3,"money"],[3,"translate"],[1,"d-inline-flex","align-items-center"],["translate","",1,"text-muted","conversion__rate-label"],[1,"ml-2","conversion__rate","text-dark",3,"jLoading","jLoadingInverted"],[4,"ngIf"],[3,"showAllDecimals","money"],[1,"p3","text-muted","mt-2"],["href","#","translate","",1,"link",3,"click"],[1,"text-truncate"],[1,"py-2"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"jLoadingInverted","disabled","jLoading","click"],["type","button",1,"btn","btn-link",3,"disabled","jLoading","jLoadingInverted","click"],[1,"d-inline-block","mr-2",3,"inlineSVG"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"disabled","jLoading","click"]],template:function(t,e){1&t&&(b.Wb(0,"form",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Wb(3,"h5",3),b.Sc(4,"CONVERSION.FROM.TITLE"),b.Vb(),b.Wb(5,"div",4),b.Wb(6,"j-account-dropdown",5,6),b.ic("selected",(function(t){return e.onFromSelect(t)})),b.Vb(),b.Vb(),b.Wb(8,"div",4),b.Rb(9,"j-amount-input",7),b.Vb(),b.Vb(),b.Wb(10,"div",8),b.Wb(11,"button",9),b.ic("click",(function(t){return e.reverseAccounts()})),b.Vb(),b.Vb(),b.Wb(12,"div",10),b.Wb(13,"h5",3),b.Sc(14,"CONVERSION.TO.TITLE"),b.Vb(),b.Wb(15,"div",4),b.Wb(16,"j-account-dropdown",11,12),b.ic("selected",(function(t){return e.onToSelect(t)})),b.Vb(),b.Vb(),b.Wb(18,"div",4),b.Rb(19,"j-amount-input",13),b.Vb(),b.Vb(),b.Vb(),b.Wb(20,"div",14),b.Wb(21,"div",15),b.Wb(22,"span",16),b.Sc(23,"CONVERSION.COMMISSION"),b.Vb(),b.Sc(24,": "),b.Qc(25,q,1,1,"j-money",17),b.Qc(26,X,1,1,"span",18),b.Vb(),b.Qc(27,Z,6,3,"h6",19),b.Qc(28,J,6,3,"div",20),b.Vb(),b.Wb(29,"div",21),b.Wb(30,"h5",3),b.Sc(31,"CONVERSION.DETAILS.TITLE"),b.Vb(),b.Wb(32,"div",22),b.Rb(33,"j-input",23),b.Wb(34,"j-dropdown-input",24,25),b.ic("selected",(function(t){return e.onPurposeSelect(t)})),b.Qc(36,$,2,2,"ng-template",null,26,b.Rc),b.Qc(38,z,7,2,"ng-template",null,27,b.Rc),b.Vb(),b.Vb(),b.Wb(40,"div",28),b.Wb(41,"j-account-dropdown",29,30),b.ic("selected",(function(t){return e.onCommissionAccountSelect(t)})),b.Vb(),b.Vb(),b.Wb(43,"div",4),b.Rb(44,"j-input",31),b.nc(45,"async"),b.Vb(),b.Vb(),b.Qc(46,tt,3,3,"div",32),b.Qc(47,it,3,2,"div",32),b.Vb()),2&t&&(b.tc("formGroup",e.conversionForm),b.Ab(6),b.tc("hasError",e.f.from.invalid&&e.isSubmitted)("isLoading",e.isAccountsLoading)("accounts",e.fromAccounts)("isDisabledSelectable",!0),b.Ab(3),b.tc("hasError",e.f.fromAmount.invalid&&e.isSubmitted||e.fromAmountError)("formControl",e.f.fromAmount)("errorText",e.fromAmountError)("isDisabled",e.f.fromAmount.disabled)("currency",e.fromCurrency),b.Ab(2),b.tc("disabled",!e.isRateShown)("inlineSVG","./assets/icons/conversion/arrows.svg"),b.Ab(5),b.tc("isLoading",e.isAccountsLoading)("hasError",e.f.to.invalid&&e.isSubmitted)("accounts",e.toAccounts)("isDisabledSelectable",!0),b.Ab(3),b.tc("hasError",e.f.toAmount.invalid&&e.isSubmitted)("formControl",e.f.toAmount)("isDisabled",e.f.toAmount.disabled)("currency",e.toCurrency),b.Ab(6),b.tc("ngIf",e.commission),b.Ab(1),b.tc("ngIf",!e.commission),b.Ab(1),b.tc("ngIf",e.isRateShown&&!e.hasAccountFromRateError&&!e.hasAccountToRateError),b.Ab(1),b.tc("ngIf",e.hasAccountFromRateError||e.hasAccountToRateError),b.Ab(5),b.tc("formControl",e.f.documentNumber)("hasError",e.f.documentNumber.invalid&&e.isSubmitted)("isClearable",!1),b.Ab(1),b.tc("options",e.purposeList)("hasError",e.f.purpose.invalid&&e.isSubmitted),b.Ab(6),b.tc("hidden",!e.isCommissionAccountSelectable),b.Ab(1),b.tc("isLoading",e.isAccountsLoading)("accounts",e.accounts)("isDisabledSelectable",!0),b.Ab(3),b.tc("inputExtra",b.oc(45,41,e.descriptionLengthMessage$))("formControl",e.f.description)("hasError",e.f.description.invalid&&e.isSubmitted)("errorText",e.mapDescriptionErrors())("maxLength",e.descriptionMaxLength)("isClearable",!1),b.Ab(2),b.tc("ngIf",e.isEditing),b.Ab(1),b.tc("ngIf",!e.isEditing))},directives:[r.J,r.u,r.l,a.a,F.a,W.a,r.t,r.i,u.a,o.u,P.b,H.a,O.a,B.a],pipes:[o.b,a.d],styles:[".conversion__main[_ngcontent-%COMP%]{padding:1.5rem 0 0}@media(min-width:960px){.conversion__main[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(50% - 24px) 40px calc(50% - 24px);-webkit-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}}.conversion__arrows[_ngcontent-%COMP%]{margin:1rem auto;text-align:center}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]{margin:5.5rem 0 0}}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;height:40px;outline:0;padding:0;border:0;background:none;box-shadow:none;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]){background:#fff;box-shadow:0 0 1px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 4px 8px rgba(0,0,0,.04)}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.conversion__rate-label[_ngcontent-%COMP%]{font-weight:400}.conversion__rate[_ngcontent-%COMP%]{display:inline-block;position:relative;min-width:30px;height:24px}.conversion__rates[_ngcontent-%COMP%]{text-align:center;padding-bottom:1.5rem}.conversion__details[_ngcontent-%COMP%], .conversion__rates[_ngcontent-%COMP%]{border-bottom:1px solid rgba(183,190,197,.35)}.conversion__details[_ngcontent-%COMP%]{padding:1.5rem 0 .5rem}@media(min-width:960px){.conversion__details-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(35% - 10px) calc(65% - 10px);-webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px}}"]}),rt),lt=((ot=function(){function t(e,n){_classCallCheck(this,t),this.router=e,this.featureFlagsService=n,this.featureFlagsService.checkFeatureRoute(h.a.CONVERSION)}return _createClass(t,[{key:"onClose",value:function(){this.router.navigate(["/"])}}]),t}()).\u0275fac=function(t){return new(t||ot)(b.Qb(d.c),b.Qb(h.b))},ot.\u0275cmp=b.Kb({type:ot,selectors:[["j-conversion"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-1 col-lg-10 offset-xl-2 col-xl-8","headerClassList","bg-white",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(t,e){1&t&&(b.Wb(0,"f-page",0),b.ic("closed",(function(t){return e.onClose()})),b.Wb(1,"f-page-header"),b.Wb(2,"section",1),b.Wb(3,"h1",2),b.Sc(4,"CONVERSION.TITLE"),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"f-page-body"),b.Rb(6,"j-conversion-form"),b.Vb(),b.Vb())},directives:[v.a,f.a,a.a,p.a,ut],styles:["[_nghost-%COMP%]{background:#f6f7f8;display:block}"]}),ot),mt=[{path:"",component:lt},{path:":id",component:lt},{path:"**",redirectTo:""}],dt=((st=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:st}),st.\u0275inj=b.Nb({factory:function(t){return new(t||st)},imports:[[d.g.forChild(mt)],d.g]}),st);n.d(e,"ConversionModule",(function(){return bt}));var ht,bt=((ht=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:ht}),ht.\u0275inj=b.Nb({factory:function(t){return new(t||ht)},imports:[[o.c,r.n,r.D,s.d,c.b,a.c,u.b,dt,l.b,m.a]]}),ht)}}]);