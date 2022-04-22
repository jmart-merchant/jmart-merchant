"use strict";(self.webpackChunkjysan=self.webpackChunkjysan||[]).push([[84],{54084:(Ft,E,s)=>{s.r(E),s.d(E,{TransfersModule:()=>Et});var b=s(69808),c=s(93075),Q=s(40520),T=s(89854),N=s(23918),l=s(56104),U=s(91995),S=s(59516),e=s(5e3),I=s(77501),B=s(79311),J=s(94114),k=s(61459),u=s(70655),Y=s(42654),H=s(36053),j=s(24850),G=s(92198),v=s(7102),A=s(80457),V=s(89129),C=s(15057),R=s(40703);function K(o,a){if(1&o&&e._UZ(0,"p",10),2&o){const t=e.oxw();e.Q6J("innerHTML",t.errorText,e.oJD)}}let O=(()=>{class o{constructor(t,n){this.modal=t,this.router=n}dismissModal(){this.modal.dismiss()}closeModal(){this.router.navigate(["/transfers"]),this.modal.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(R.Kz),e.Y36(S.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["j-transfer-error"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","/assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(t,n){1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.ALo(3,"translate"),e.TgZ(4,"h3",3),e._uU(5,"SHARED.ERROR"),e.qZA(),e.TgZ(6,"p",4)(7,"span",5),e._uU(8),e.qZA()(),e.YNc(9,K,1,1,"p",6),e.qZA(),e.TgZ(10,"div",7)(11,"button",8),e.NdJ("click",function(){return n.closeModal()}),e._uU(12," SHARED.TRY_AGAIN "),e.qZA(),e.TgZ(13,"button",9),e.NdJ("click",function(){return n.dismissModal()}),e._uU(14," SHARED.BACK_TO_HOME "),e.qZA()()),2&t&&(e.xp6(2),e.s9C("alt",e.lcZ(3,3,"SHARED.ERROR")),e.xp6(6),e.Oqu(n.description),e.xp6(1),e.Q6J("ngIf",n.errorText))},directives:[T.Pi,b.O5],pipes:[T.X$],styles:[""]}),o})();var W=s(72159);let x=(()=>{class o{constructor(t){this.modal=t}dismissModal(){this.modal.dismiss()}closeModal(){this.modal.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(R.Kz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["j-transfer-success"]],inputs:{description:"description",totalBalance:"totalBalance"},decls:14,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","/assets/img/history/modals/success.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[3,"money"],["translate","",1,"m-0","text-muted"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(t,n){1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.ALo(3,"translate"),e.TgZ(4,"h3",3)(5,"strong"),e._UZ(6,"j-money",4),e.qZA()(),e.TgZ(7,"p",5),e._uU(8),e.qZA()(),e.TgZ(9,"div",6)(10,"button",7),e.NdJ("click",function(){return n.closeModal()}),e._uU(11," TRANSFERS.NAVIGATE_TO_HISTORY "),e.qZA(),e.TgZ(12,"button",8),e.NdJ("click",function(){return n.dismissModal()}),e._uU(13," SHARED.BACK_TO_HOME "),e.qZA()()),2&t&&(e.xp6(2),e.s9C("alt",e.lcZ(3,3,n.description)),e.xp6(4),e.Q6J("money",n.totalBalance),e.xp6(2),e.hij(" ",n.description," "))},directives:[T.Pi,W.y],pipes:[T.X$],styles:[""]}),o})();var D=s(41359),h=s(5157),z=s(53145),X=s(91024),$=s(74967),w=s(26484);let q=(()=>{class o{constructor(t,n,i,r){this.accountsService=t,this.paymentsPipelineService=n,this.paymentsApiService=i,this.maskedService=r}getTransferById(t){return this.paymentsApiService.getPaymentById(t)}saveEditedTransfer(t,n){return this.paymentsApiService.updatePayment(Object.assign(Object.assign({},n),this.mapTransferOwnPaymentBody(t)),{paymentId:t.id})}createOwnTransfer(t){return(0,u.mG)(this,void 0,void 0,function*(){try{return this.paymentsApiService.createPayment(this.mapTransferOwnPaymentBody(t))}catch(n){throw n}})}createAndSignOwnTransfer(t){return(0,u.mG)(this,void 0,void 0,function*(){const n=yield this.createOwnTransfer(t);return this.paymentsPipelineService.processPaymentVerify(n)})}mapTransferOwnPaymentBody(t){var n,i,r,m;let d=v.V_.IN_BETWEEN,y=null;t.fromAccount.accountType===h.Q5.ACCOUNT&&t.toAccount.accountType===h.Q5.CARD&&(d=v.V_.ACCOUNT_TO_CARD),t.fromAccount.accountType===h.Q5.CARD&&t.toAccount.accountType===h.Q5.ACCOUNT&&(d=v.V_.CARD_TO_ACCOUNT,y=t.fromAccount.accountId),t.fromAccount.accountType===h.Q5.CARD&&t.toAccount.accountType===h.Q5.CARD&&(d=v.V_.CARD_TO_CARD,y=t.fromAccount.accountId),t.fromAccount.accountType===h.Q5.DEPOSIT&&t.toAccount.accountType===h.Q5.ACCOUNT&&(d=v.V_.DEPOSIT_WITHDRAWAL),t.fromAccount.accountType===h.Q5.ACCOUNT&&t.toAccount.accountType===h.Q5.DEPOSIT&&(d=v.V_.DEPOSIT_REPLENISHMENT);let p=null;t.fromAccount.accountType===h.Q5.DEPOSIT?p=this.accountsService.getDepositName(t.fromAccount):t.toAccount.accountType===h.Q5.DEPOSIT&&(p=this.accountsService.getDepositName(t.toAccount));let f={type:d,category:v.nK.DOMESTIC,paymentRecipient:{recipientAccount:{iban:t.to}},details:{payerIban:t.from,paymentAmount:{amount:this.maskedService.getNumberedAmount(t.amount),currency:(null===(i=null===(n=t.fromAccount)||void 0===n?void 0:n.balance)||void 0===i?void 0:i.currency)||(null===(m=null===(r=t.toAccount)||void 0===r?void 0:r.balance)||void 0===m?void 0:m.currency)||A.w.KZT},documentId:t.documentNumber,associatedField:{parameters:{depositName:p,payerCardNumber:t.fromAccount.accountType===h.Q5.CARD?t.fromAccount.cardNumber:null,recipientCardNumber:t.toAccount.accountType===h.Q5.CARD?t.toAccount.cardNumber:null}}}};return y&&(f.details=Object.assign(Object.assign({},f.details),{payerAccountId:y})),f}mapTransferOwnToPayment(t,n){return n.paymentRecipient.recipientAccount.iban=t.to,n.details.payerIban=t.from,n.details.paymentAmount.amount=this.maskedService.getNumberedAmount(t.amount),n.details.documentId=t.documentNumber,n}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(z.iu),e.LFG(X.Z),e.LFG($.e),e.LFG(w.O))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var tt=s(26164),P=s(7500),F=s(19208),et=s(14181),nt=s(66013),it=s(65212),ot=s(27763),rt=s(70853),st=s(50235),at=s(65243);const ct=["fromDropdown"],lt=["toDropdown"],_=function(){return{height:"56px","background-color":"#ECEEF1"}},ut=function(){return{height:"56px",width:"200px","background-color":"#ECEEF1"}};function dt(o,a){1&o&&(e.ynx(0),e._UZ(1,"ngx-skeleton-loader",3)(2,"ngx-skeleton-loader",3)(3,"ngx-skeleton-loader",3)(4,"ngx-skeleton-loader",3),e.TgZ(5,"div",4),e._UZ(6,"ngx-skeleton-loader",3),e.qZA(),e.BQk()),2&o&&(e.xp6(1),e.Q6J("theme",e.DdM(5,_)),e.xp6(1),e.Q6J("theme",e.DdM(6,_)),e.xp6(1),e.Q6J("theme",e.DdM(7,_)),e.xp6(1),e.Q6J("theme",e.DdM(8,_)),e.xp6(2),e.Q6J("theme",e.DdM(9,ut)))}function mt(o,a){1&o&&e._UZ(0,"j-restricted-placeholder",5)}function ht(o,a){if(1&o&&(e._UZ(0,"p",18),e.ALo(1,"translate")),2&o){const t=e.oxw(2);e.ekj("text-danger",null==t.f.amount.errors?null:t.f.amount.errors.irreducible),e.Q6J("innerHTML",e.xi3(1,3,"TRANSFERS.IRREDUCIBLE_BALANCE",t.irreducibleBalanceParams),e.oJD)}}function ft(o,a){if(1&o&&(e._UZ(0,"p",18),e.ALo(1,"translate")),2&o){const t=e.oxw(2);e.ekj("text-danger",null==t.f.amount.errors?null:t.f.amount.errors.maxSum),e.Q6J("innerHTML",e.xi3(1,3,"TRANSFERS.MAX_SUM",t.maxSumParams),e.oJD)}}function pt(o,a){if(1&o&&(e._UZ(0,"p",18),e.ALo(1,"translate")),2&o){const t=e.oxw(2);e.Q6J("innerHTML",e.xi3(1,1,"TRANSFERS.COMMISSION",t.commissionParams),e.oJD)}}function vt(o,a){if(1&o&&(e._UZ(0,"p",18),e.ALo(1,"translate")),2&o){const t=e.oxw(2);e.Q6J("innerHTML",e.xi3(1,1,"TRANSFERS.NOT_ENOUGH",t.unsufficientFundsParams),e.oJD)}}function yt(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).edit()}),e._uU(2,"TRANSFERS.SAVE"),e.qZA()()}}function Tt(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).createOnly()}),e._uU(1,"TRANSFERS.FOR_SIGN"),e.qZA()}}function St(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).createAndSign()}),e._uU(1,"TRANSFERS.SIGN"),e.qZA()}}function At(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).createOnly()}),e._uU(1,"TRANSFERS.SEND"),e.qZA()}}function gt(o,a){if(1&o&&(e.TgZ(0,"div",19),e.YNc(1,Tt,2,0,"button",21),e.YNc(2,St,2,0,"button",22),e.YNc(3,At,2,0,"button",22),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.canSendAndSign),e.xp6(1),e.Q6J("ngIf",t.canSendAndSign),e.xp6(1),e.Q6J("ngIf",t.canSendOnly)}}function bt(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",6)(2,"div",7)(3,"j-account-dropdown",8,9),e.NdJ("selected",function(i){return e.CHM(t),e.oxw().onFromSelect(i)}),e.qZA()(),e.TgZ(5,"div",10)(6,"j-account-dropdown",11,12),e.NdJ("selected",function(i){return e.CHM(t),e.oxw().onToSelect(i)}),e.qZA()(),e.TgZ(8,"div",10),e._UZ(9,"j-input",13),e.qZA(),e.TgZ(10,"div",10),e._UZ(11,"j-amount-input",14),e.YNc(12,ht,2,6,"p",15),e.YNc(13,ft,2,6,"p",15),e.YNc(14,pt,2,4,"p",16),e.YNc(15,vt,2,4,"p",16),e.qZA(),e.YNc(16,yt,3,0,"div",17),e.YNc(17,gt,4,3,"div",17),e.qZA(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.transferForm),e.xp6(2),e.Q6J("hasError",t.f.from.invalid&&t.isSubmitted)("accounts",t.fromAccounts)("isDisabledSelectable",!1)("isLoading",t.isAccountsLoading)("isFromArrowShown",!0),e.xp6(3),e.Q6J("hasError",t.f.to.invalid&&t.isSubmitted)("accounts",t.toAccounts)("isLoading",t.isAccountsLoading)("isDisabledSelectable",!0),e.xp6(3),e.Q6J("hasError",t.f.documentNumber.invalid&&t.isSubmitted)("isClearable",!1)("formControl",t.f.documentNumber),e.xp6(2),e.Q6J("hasError",t.f.amount.invalid&&t.isSubmitted)("currency",(null==t.from?null:t.from.balance.currency)||(null==t.to?null:t.to.balance.currency)||t.defaultCurrency)("formControl",t.f.amount),e.xp6(1),e.Q6J("ngIf",t.irreducibleBalanceParams),e.xp6(1),e.Q6J("ngIf",t.maxSumParams),e.xp6(1),e.Q6J("ngIf",t.f.amount.valid||!t.isSubmitted),e.xp6(1),e.Q6J("ngIf",t.hasUnsufficientFunds),e.xp6(1),e.Q6J("ngIf",t.isEditing),e.xp6(1),e.Q6J("ngIf",!t.isEditing)}}const M="TRANSFERS.SAME_IBANS_NOTIFICATION",Z=o=>0==(null==o?void 0:o.value)?{cantBeZero:!0}:null;let _t=(()=>{class o{constructor(t,n,i,r,m,d,y,p,f,g,Nt,It,Ot,xt,Dt,wt,Pt){this.route=t,this.transfersService=n,this.companyService=i,this.paymentsService=r,this.accountsService=m,this.amountFormatPipe=d,this.modalService=y,this.router=p,this.maskedService=f,this.paymentsApiService=g,this.cardsService=Nt,this.featureFlagsService=It,this.notifierService=Ot,this.translateService=xt,this.moneyPipe=Dt,this.navService=wt,this.authorityPermissionsService=Pt,this.isRestricted=!1,this.isSubmitted=!1,this.isLoading=!0,this.repeatPayment=null,this.defaultCurrency=A.w.KZT,this.maxSumParams=null,this.irreducibleBalanceParams=null,this.unsufficientFundsParams=null,this.hasUnsufficientFunds=!1,this.subscription=new Y.w,this.isAccountsLoading=!0,this.transferForm=new c.cw({id:new c.NI(""),from:new c.NI("",[c.kI.required]),fromAccount:new c.NI(null),to:new c.NI("",[c.kI.required]),toAccount:new c.NI(null),documentNumber:new c.NI("",[c.kI.required]),amount:new c.NI("",[c.kI.required,Z])})}ngOnInit(){const t=this.route.params.subscribe(n=>{n.id&&(this.f.id.setValue(n.id),this.isEditing=!0)});this.subscription.add(t)}ngAfterViewInit(){this.getPermission().then(()=>{this.isRestricted?this.isLoading=!1:this.initPage()}).catch(t=>{this.isLoading=!1,this.initPage()})}initPage(){const t=(0,H.aj)([this.route.paramMap.pipe((0,j.U)(()=>window.history.state)),this.route.queryParams,this.featureFlagsService.featureFlags$.pipe((0,G.h)(i=>(null==i?void 0:i.length)>0))]).subscribe(i=>{const[r,m]=i;this.isEditing?this.loadEditTransfer(this.f.id.value):r.repeatPaymentId?this.loadRepeatTransfer(r.repeatPaymentId):this.loadNewTransfer(m)}),n=this.transferForm.valueChanges.subscribe(i=>{this.isSubmitted=!1});this.subscription.add(t),this.subscription.add(n)}ngOnDestroy(){this.subscription.unsubscribe()}get fromAccounts(){var t;return null===(t=this.accounts)||void 0===t?void 0:t.filter(n=>{var i;switch(n.accountType){case l.Q5.ACCOUNT:return n.balance.currency===A.w.KZT||(null===(i=this.to)||void 0===i?void 0:i.accountType)===l.Q5.DEPOSIT&&this.to.balance.currency===n.balance.currency;case l.Q5.CARD:return n.category!==V.kk.PRIVATE;case l.Q5.DEPOSIT:return n.depositType&&n.additionalDetails.payOut;default:return!0}})}get commissionParams(){var t,n;return{amount:this.moneyPipe.transform({amount:0,currency:(null===(t=this.from)||void 0===t?void 0:t.balance.currency)||(null===(n=this.to)||void 0===n?void 0:n.balance.currency)||this.defaultCurrency})}}get toAccounts(){var t;return null===(t=this.accounts)||void 0===t?void 0:t.filter(n=>{var i;switch(n.accountType){case l.Q5.ACCOUNT:return n.balance.currency===A.w.KZT||(null===(i=this.from)||void 0===i?void 0:i.accountType)===l.Q5.DEPOSIT&&this.from.additionalDetails.clientAccount===n.iban;case l.Q5.DEPOSIT:return n.depositType&&n.additionalDetails.addPay;default:return!0}})}get canSendAndSign(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}get canSendOnly(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}get f(){return this.transferForm.controls}mapIrreducibleBalanceParams(){var t,n;if(!this.from||!(null===(t=this.from)||void 0===t?void 0:t.irreducibleBalance))return this.irreducibleBalanceParams=null,null;this.irreducibleBalanceParams={amount:this.moneyPipe.transform({amount:null===(n=this.from)||void 0===n?void 0:n.irreducibleBalance,currency:this.from.balance.currency})}}mapMaxSumParams(){var t,n,i,r;this.maxSumParams=this.to&&(null===(n=null===(t=this.to)||void 0===t?void 0:t.additionalDetails)||void 0===n?void 0:n.maxSum)?{amount:this.moneyPipe.transform({amount:null===(r=null===(i=this.to)||void 0===i?void 0:i.additionalDetails)||void 0===r?void 0:r.maxSum,currency:this.to.balance.currency})}:null}mapUnsufficientFundsParams(){this.unsufficientFundsParams={amount:this.moneyPipe.transform({amount:this.amountDelta,currency:this.from.balance.currency})}}mapHasUnsufficientFunds(){this.hasUnsufficientFunds=this.amountDelta>0}onFromSelect(t){!t||(this.selectFromAccount(t),this.applyClearOnFromSelectedRule(t),this.applySelectFromCompanionRule(t),this.applyDepositAmountValidation(),this.applyDepositWithdrawalRule(t),this.applyFromCurrencyRule(t))}onToSelect(t){!t||(this.selectToAccount(t),this.applyClearOnToSelectedRule(t),this.applySelectToCompanionRule(t),this.applyDepositAmountValidation(),this.applyDepositReplenishmentRule(t),this.applyToCurrencyRule(t))}loadRepeatTransfer(t){return(0,u.mG)(this,void 0,void 0,function*(){this.isLoading=!0;const n=yield Promise.all([this.transfersService.getTransferById(t),this.retrieveAccounts()]);this.applyOnlyAccountRule();const[i]=n,r=yield this.mapRepeatTransferFromPayment(i);this.initRepeatTransfer(r),this.setAutoNumeration(),this.isLoading=!1})}loadEditTransfer(t){return(0,u.mG)(this,void 0,void 0,function*(){this.isLoading=!0,this.originalPayment=yield this.transfersService.getTransferById(t);const n=yield this.mapRepeatTransferFromPayment(this.originalPayment);yield this.retrieveAccounts(),this.applyOnlyAccountRule(),this.initRepeatTransfer(n),this.isLoading=!1})}loadNewTransfer(t=null){return(0,u.mG)(this,void 0,void 0,function*(){this.isLoading=!0,yield this.retrieveAccounts(),this.setAutoNumeration(),this.setInitialParams(t),this.isLoading=!1})}edit(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.isSubmitted=!0,!this.transferForm.invalid)try{yield this.transfersService.saveEditedTransfer(this.transferForm.value,this.originalPayment),this.showEditSuccess()}catch(t){this.showEditError(t)}})}createOnly(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.isSubmitted=!0,this.transferForm.invalid)return;this.isLoading=!0;const t=this.transferForm.getRawValue();if(!(yield this.checkIfAllowedToCreate(t.amount)))return void(this.isLoading=!1);const i=this.paymentsService.paymentNumber;try{yield this.transfersService.createOwnTransfer(t),this.showCreateSuccess(),i.entity=null}catch(r){i.entity=this.f.documentNumber.value,this.showCreateError(r)}finally{this.isLoading=!1}})}createAndSign(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.isSubmitted=!0,this.transferForm.invalid)return;this.isLoading=!0;const t=this.transferForm.getRawValue();if(!(yield this.checkIfAllowedToCreate(t.amount)))return void(this.isLoading=!1);const i=this.paymentsService.paymentNumber;try{yield this.transfersService.createAndSignOwnTransfer(t),this.showCreateAndSignSuccess(),i.entity=null}catch(r){i.entity=this.f.documentNumber.value,this.showCreateAndSignError(r)}finally{this.isLoading=!1}})}getPermission(){return(0,u.mG)(this,void 0,void 0,function*(){try{this.isRestricted=yield this.authorityPermissionsService.isRestricted(v.V_.IN_BETWEEN)}catch(t){this.isRestricted=!1}})}checkIfAllowedToCreate(t){return(0,u.mG)(this,void 0,void 0,function*(){const n=yield this.paymentsApiService.checkWorkingTime(),i=yield this.paymentsApiService.checkAmountLimit(t,v.V_.IN_BETWEEN);return n&&i})}mapRepeatTransferFromPayment(t){var n,i,r,m,d;return(0,u.mG)(this,void 0,void 0,function*(){yield this.retrieveAccounts();let y=null===(n=t.details)||void 0===n?void 0:n.payerIban;return(t.type===v.V_.CARD_TO_CARD||t.type===v.V_.CARD_TO_ACCOUNT)&&(y=this.fromAccounts.find(p=>{var f;return p.accountType===l.Q5.CARD&&p.accountId===(null===(f=t.details)||void 0===f?void 0:f.payerAccountId)}).iban),{to:null===(r=null===(i=t.paymentRecipient)||void 0===i?void 0:i.recipientAccount)||void 0===r?void 0:r.iban,toAccount:this.toAccounts.find(p=>{var f,g;return p.iban===(null===(g=null===(f=t.paymentRecipient)||void 0===f?void 0:f.recipientAccount)||void 0===g?void 0:g.iban)}),from:y,fromAccount:this.fromAccounts.find(p=>p.iban===y),documentNumber:null===(m=t.details)||void 0===m?void 0:m.documentId,amount:null===(d=t.details)||void 0===d?void 0:d.paymentAmount.amount}})}setInitialParams(t){!t||(t.from&&this.fromDropdown.selectByIban(t.from),t.to&&this.toDropdown.selectByIban(t.to))}initRepeatTransfer(t){!t||(this.selectToAccountByIban(t.to),this.selectFromAccountByIban(t.from),this.f.documentNumber.setValue(t.documentNumber),this.f.amount.setValue(this.maskedService.getMaskedAmount(t.amount)))}get amountDelta(){var t,n;const{amount:i}=this.transferForm.getRawValue();return this.maskedService.getNumberedAmount(i)-(null===(n=null===(t=this.from)||void 0===t?void 0:t.balance)||void 0===n?void 0:n.amount)}applyDepositAmountValidation(){var t,n;const i=[c.kI.required,Z];(null===(t=this.from)||void 0===t?void 0:t.accountType)===l.Q5.DEPOSIT&&i.push(this.generateIrreducibleValidator),(null===(n=this.to)||void 0===n?void 0:n.accountType)===l.Q5.DEPOSIT&&i.push(this.generateMaxSumValidator),this.transferForm.controls.amount.setValidators(i)}generateIrreducibleValidator(){return n=>this.from.balance.amount-this.maskedService.getNumberedAmount(n.value)<=this.from.irreducibleBalance?{irreducible:!0}:null}generateMaxSumValidator(){return n=>{var i,r;return this.to.balance.amount+this.maskedService.getNumberedAmount(n.value)>(null===(r=null===(i=this.to)||void 0===i?void 0:i.additionalDetails)||void 0===r?void 0:r.maxSum)?{maxSum:!0}:null}}applySelectToCompanionRule(t){var n,i;if(2==(null===(n=this.accounts)||void 0===n?void 0:n.length)){const r=this.findUnselectedAccount(t);this.selectFromAccount(r),null===(i=this.fromDropdown)||void 0===i||i.selectAccount(r)}}applyDepositReplenishmentRule(t){var n,i,r;t.accountType===l.Q5.DEPOSIT?this.selectFromAccountByIban(t.additionalDetails.clientAccount):(null===(n=this.from)||void 0===n?void 0:n.accountType)===l.Q5.DEPOSIT&&t.iban!==(null===(r=null===(i=this.from)||void 0===i?void 0:i.additionalDetails)||void 0===r?void 0:r.clientAccount)&&this.clearFromAccount()}applyFromCurrencyRule(t){var n,i;t.balance.currency!==(null===(i=null===(n=this.to)||void 0===n?void 0:n.balance)||void 0===i?void 0:i.currency)&&this.clearToAccount()}applyToCurrencyRule(t){var n,i;t.balance.currency!==(null===(i=null===(n=this.from)||void 0===n?void 0:n.balance)||void 0===i?void 0:i.currency)&&this.clearFromAccount()}applyDepositWithdrawalRule(t){var n,i;t.accountType!==l.Q5.DEPOSIT||!(null===(i=null===(n=t)||void 0===n?void 0:n.additionalDetails)||void 0===i?void 0:i.clientAccount)||this.selectToAccountByIban(t.additionalDetails.clientAccount)}applySelectFromCompanionRule(t){var n,i;if(2==(null===(n=this.accounts)||void 0===n?void 0:n.length)){const r=this.findUnselectedAccount(t);this.selectToAccount(r),null===(i=this.toDropdown)||void 0===i||i.selectAccount(r)}}findUnselectedAccount(t){var n;return null===(n=this.accounts)||void 0===n?void 0:n.find(i=>i!=t)}findAccountByIban(t){var n;return null===(n=this.accounts)||void 0===n?void 0:n.find(i=>i.iban==t)}applyClearOnFromSelectedRule(t){var n;const i=t==this.to,r=t.iban==(null===(n=this.to)||void 0===n?void 0:n.iban)&&!i;(i||r)&&this.clearToAccount(),r&&this.notifierService.notify("default",this.translateService.instant(M))}applyClearOnToSelectedRule(t){var n;const i=t==this.from,r=t.iban==(null===(n=this.from)||void 0===n?void 0:n.iban)&&!i;(i||r)&&this.clearFromAccount(),r&&this.notifierService.notify("default",this.translateService.instant(M))}applyOnlyAccountRule(){var t;if(1==(null===(t=this.accounts)||void 0===t?void 0:t.length)){const n=this.accounts[0];n.isLocked||n.hasLockedState?(this.selectToAccount(n),this.toDropdown.selectAccount(n)):(this.selectFromAccount(n),this.fromDropdown.selectAccount(n))}}selectToAccount(t){var n;this.to=t,this.f.to.setValue(null===(n=this.to)||void 0===n?void 0:n.iban),this.f.toAccount.setValue(this.to)}selectFromAccount(t){var n;this.from=t,this.f.from.setValue(null===(n=this.from)||void 0===n?void 0:n.iban),this.f.fromAccount.setValue(this.from)}selectToAccountByIban(t){const n=this.findAccountByIban(t);this.selectToAccount(n),this.toDropdown.selectAccount(n)}selectFromAccountByIban(t){const n=this.findAccountByIban(t);this.selectFromAccount(n),this.fromDropdown.selectAccount(n)}clearToAccount(){var t;this.to=null,this.f.to.setValue(null),null===(t=this.toDropdown)||void 0===t||t.clearSelected()}clearFromAccount(){var t;this.from=null,this.f.from.setValue(null),null===(t=this.fromDropdown)||void 0===t||t.clearSelected()}isAccountAllowed(t){const n=this.featureFlagsService.isDisabled(C.Y.DEPOSIT_OPERATIONS);switch(t.accountType){case l.Q5.ACCOUNT:return!0;case l.Q5.DEPOSIT:return!n&&(t.additionalDetails.addPay||t.additionalDetails.payOut)}}retrieveAccounts(){return(0,u.mG)(this,void 0,void 0,function*(){this.isAccountsLoading=!0;try{yield this.accountsService.retrieveAccounts().then(t=>{const n=t.filter(i=>this.isAccountAllowed(i));this.accounts=this.accounts?[...this.accounts,...n]:[...n]}).catch(t=>{this.accounts=this.accounts||[],console.log(t)}),this.featureFlagsService.isDisabled(C.Y.CARD_TRANSFERS)||(yield this.cardsService.getCorporateCards().then(t=>{const n=t.filter(i=>i.balance.currency===A.w.KZT);this.accounts=this.accounts?[...this.accounts,...n]:[...n]}).catch(t=>{this.accounts=this.accounts||[],console.log(t)}))}catch(t){}finally{this.isAccountsLoading=!1}})}showEditSuccess(){const t=parseFloat(this.maskedService.getUnmaskedAmount(this.f.amount.value));this.showSuccessModal("TRANSFERS.EDIT.SUCCESS",t)}showEditError(t){return(0,u.mG)(this,void 0,void 0,function*(){try{yield this.showErrorModal("TRANSFERS.EDIT.ERROR",t),this.edit()}catch(n){this.navigateToHome()}})}showCreateSuccess(){const t=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE.SUCCESS",t)}showCreateError(t){return(0,u.mG)(this,void 0,void 0,function*(){try{yield this.showErrorModal("TRANSFERS.CREATE.ERROR",t),this.createOnly()}catch(n){this.navigateToHome()}})}showCreateAndSignSuccess(){const t=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE_AND_SIGN.SUCCESS",t,!0)}showCreateAndSignError(t){return(0,u.mG)(this,void 0,void 0,function*(){try{yield this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",t),this.createAndSign()}catch(n){this.navigateToHome()}})}showSuccessModal(t,n,i=!1){var r,m;return(0,u.mG)(this,void 0,void 0,function*(){const d=this.modalService.open(x,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0});d.componentInstance.description=t,d.componentInstance.totalBalance={amount:n,currency:(null===(r=this.from)||void 0===r?void 0:r.balance.currency)||(null===(m=this.to)||void 0===m?void 0:m.balance.currency)||this.defaultCurrency};try{yield d.result,this.navigateToHistory(i)}catch(y){this.navigateToHome()}})}showErrorModal(t,n){const i=this.modalService.open(O,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0});return i.componentInstance.description=t,i.componentInstance.errorText=this.mapErrors(null==n?void 0:n.data)||n,i.result}mapErrors(t){let n="";for(const[i,r]of Object.entries(t))n+=r+"<br>";return n||null}setAutoNumeration(){this.subscription.add(this.paymentsService.paymentNumber$.subscribe(t=>{this.f.documentNumber.setValue(t)}))}navigateToHome(){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.router.navigate(["/"])}navigateToHistory(t=!1){let n=D.$9.FOR_SIGN;this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),t&&this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()&&(n=D.$9.IN_PROGRESS),this.router.navigate(["/history/tenge"],{queryParams:{paymentStatus:n}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.gz),e.Y36(q),e.Y36(tt.J),e.Y36(P.cR),e.Y36(l.iu),e.Y36(F.nU),e.Y36(R.FF),e.Y36(S.F0),e.Y36(w.O),e.Y36(P.e6),e.Y36(et.d),e.Y36(C.a),e.Y36(nt.lG),e.Y36(T.sK),e.Y36(F.Ly),e.Y36(I.t),e.Y36(it.Eg))},o.\u0275cmp=e.Xpm({type:o,selectors:[["j-transfers-own"]],viewQuery:function(t,n){if(1&t&&(e.Gf(ct,5),e.Gf(lt,5)),2&t){let i;e.iGM(i=e.CRH())&&(n.fromDropdown=i.first),e.iGM(i=e.CRH())&&(n.toDropdown=i.first)}},decls:4,vars:4,consts:[[4,"ngIf"],[3,"hidden"],["label","PAYMENTS.RESTRICTED_PLACEHOLDER",4,"ngIf"],[3,"theme"],[1,"d-flex","justify-content-end"],["label","PAYMENTS.RESTRICTED_PLACEHOLDER"],[3,"formGroup"],[1,"form-group","form-from"],["label","TRANSFERS.FROM",3,"hasError","accounts","isDisabledSelectable","isLoading","isFromArrowShown","selected"],["fromDropdown",""],[1,"form-group"],["label","TRANSFERS.TO",3,"hasError","accounts","isLoading","isDisabledSelectable","selected"],["toDropdown",""],["label","TRANSFERS.DOCUMENT_NUMBER",3,"hasError","isClearable","formControl"],["label","TRANSFERS.AMOUNT",3,"hasError","currency","formControl"],["class","text-muted p3 j-input-helper",3,"text-danger","innerHTML",4,"ngIf"],["class","text-muted p3 j-input-helper",3,"innerHTML",4,"ngIf"],["class","form-footer",4,"ngIf"],[1,"text-muted","p3","j-input-helper",3,"innerHTML"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"click"],["type","button","class","btn btn-outline-primary","translate","",3,"click",4,"ngIf"],["type","submit","class","btn btn-primary ml-3","translate","",3,"click",4,"ngIf"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,dt,7,10,"ng-container",0),e.TgZ(1,"section",1),e.YNc(2,mt,1,0,"j-restricted-placeholder",2),e.YNc(3,bt,18,22,"ng-container",0),e.qZA()),2&t&&(e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("hidden",n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isRestricted),e.xp6(1),e.Q6J("ngIf",!n.isRestricted))},directives:[b.O5,N.xr,ot.G,c._Y,c.JL,c.sg,rt.S,st.N,c.JJ,c.oH,at.l,T.Pi],pipes:[T.X$],styles:[".form-footer[_ngcontent-%COMP%]{border-top:1px solid rgba(183,190,197,.5);display:flex;justify-content:flex-end;margin-top:1.5rem;padding-top:1.5rem}.form-from[_ngcontent-%COMP%]{position:relative;z-index:5}"]}),o})(),L=(()=>{class o{constructor(t,n){this.location=t,this.navService=n}ngOnInit(){}onClose(){this.navService.retrieveLetterBadges(),this.navService.retrieveContractBadges(),this.location.back()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.Ye),e.Y36(I.t))},o.\u0275cmp=e.Xpm({type:o,selectors:[["j-transfers"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-2 col-lg-8 offset-xl-3 col-xl-6",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(t,n){1&t&&(e.TgZ(0,"f-page",0),e.NdJ("closed",function(){return n.onClose()}),e.TgZ(1,"f-page-header")(2,"section",1)(3,"h1",2),e._uU(4,"TRANSFERS.TITLE"),e.qZA()()(),e.TgZ(5,"f-page-body"),e._UZ(6,"j-transfers-own"),e.qZA()())},directives:[B.J,J.M,T.Pi,k.G,_t],styles:["@media (min-width: 1920px){.f-page-title[_ngcontent-%COMP%]{font-size:48px}}"]}),o})();const Ct=[{path:"",component:L,data:{title:"TRANSFERS.TITLE"}},{path:":id",component:L},{path:"**",redirectTo:""}];let Rt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[S.Bz.forChild(Ct)],S.Bz]}),o})(),Et=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[b.ez,c.u5,c.UX,Q.JF,N.hx,Rt,l.jW,U.m,T.aw]]}),o})()}}]);