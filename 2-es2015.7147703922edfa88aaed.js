(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+BgI":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var i=n("mrSG"),a=n("YMfE"),r=n("+/Tu"),o=n("Eajh"),s=n("NlNA"),c=n("i2Gl"),d=n("p6Hd"),u=n("HghS"),l=n("TwVa"),m=n("wd/R"),p=n("D1y2"),y=n.n(p),b=n("fXoL"),v=n("4Nuw"),h=n("0mgW"),g=n("bHA9"),f=n("B1Ao"),k=n("wtV8"),A=n("VnnJ"),S=n("1kSV"),R=n("VO+5"),P=n("mR7B"),I=n("sYmb"),E=n("O/Ur");let C=(()=>{class e{constructor(e,t,n,i,a,r,o,s,c,d,u,l){this.accounts=e,this.payments=t,this.dictionaries=n,this.recipients=i,this.api=a,this.bankFromAccount=r,this.company=o,this.modalService=s,this.notifier=c,this.maskService=d,this.translate=u,this.currencyPayments=l}processPayment(e){return Object(i.a)(this,void 0,void 0,(function*(){try{const t=e;return t.body=this.constructPaymentBody(e.rawBody,e),e.paymentId?e.status===l.i.DRAFT?(t.response=yield this.api.updatePayment(t.body,{paymentId:e.paymentId}),yield this.api.createFromDraft(t.body,{paymentId:e.paymentId}),t.response.status.code=l.i.CREATED,t.verified=yield this.handlePaymentCreateResponse(t.response),this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===l.k.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,t.response)):(t.response=yield this.api.updatePayment(t.body,{paymentId:e.paymentId}),this.showResult(!0,{amount:e.total,updateCreated:!0},null,t.response)):(t.response=yield this.api.createPayment(t.body),t.verified=yield this.handlePaymentCreateResponse(t.response),this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===l.k.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,t.response)),t.body.paymentRecipient&&this.checkRecipientsRefresh(t.body),t.response}catch(t){throw t&&this.showResult(!1,void 0,t),t}}))}constructPaymentBody(e,t){var n;let i;return e.type&&e.type!==l.j.INTERNAL&&e.type!==l.j.EXTERNAL?e.type===l.j.TAX?i=this.preparePaymentTaxBody(e,t):[l.j.PENSION,l.j.MEDICAL,l.j.SOCIAL].includes(e.type)?i=this.prepareEmployeePaymentBody(e,t):e.type===l.j.SALARY?i=this.prepareSalaryPaymentBody(e,t):e.type===l.j.IN_BETWEEN||e.type===l.j.CARD_TO_CARD||e.type===l.j.CARD_TO_ACCOUNT||e.type===l.j.ACCOUNT_TO_CARD?i=e:e.type===l.j.FOREIGN?i=this.prepareForeignPaymentBody(e):this.notifier.notify("error","NOT_IMPLEMENTED"):i=this.preparePaymentOrderBody(e,t),(null===(n=t)||void 0===n?void 0:n.userPurpose)&&y()(i,"details.associatedField.parameters.paymentPurpose",t.userPurpose),i}handlePaymentCreateResponse(e){return e.status.code===d.e.REJECTED?Promise.reject(e):this.payments.isSignatureRequired?new Promise((t,n)=>{this.processPaymentVerify(e).then(e=>{console.log(e),t(e)}).catch(e=>{console.log(e),n(e)})}):Promise.resolve()}saveToDrafts(e,t){return Object(i.a)(this,void 0,void 0,(function*(){const n=Object.assign(this.constructPaymentBody(Object.assign({},e),t),{category:t.category,status:{code:l.i.DRAFT}});try{const e=yield t.paymentId?this.api.updatePayment(n,{paymentId:t.paymentId}):this.api.createPayment(n);return this.notifier.notify("success",this.translate.instant(t.paymentId?"PAYMENTS.PIPELINES.DRAFT_UPDATED":"PAYMENTS.PIPELINES.SAVED_TO_DRAFTS")),e}catch(i){throw this.notifier.notify("error",i.description||"ERRORS.UNKNOWN_ERROR"),i}}))}processPaymentVerify(e){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.modalService.open(c.b,{backdropClass:"backdrop_light",windowClass:"modal_light modal_md",backdrop:"static",centered:!0});return Object.assign(t.componentInstance,{additionalParams:{actionIds:[e.id]}}),Object.assign(t.componentInstance,{headerParams:{smsHeader:d.d.SIGNING_PAYMENT}}),new Promise((n,i)=>{t.componentInstance.submitted.subscribe(a=>{this.api.signPayment(a,e.id).then(i=>{t.close(),localStorage.setItem("preferredSignatureType",a.type===l.q.OTP?c.a.OTP:c.a.SMS),n(e)}).catch(e=>{i(e||null),t.dismiss()})}),t.componentInstance.closed.subscribe(()=>{i()})})}))}preparePaymentOrderBody(e,t){const n=e.bankAccount?Object(a.ibanPrefix)(e.bankAccount,r.a.KZT):"",i={iinOrBin:e.iinOrBin,name:e.name,kbe:{name:e.kbeCode,code:e.kbeCode},recipientAccount:{iban:n,bankName:n&&this.bankFromAccount.transform(n,"name"),bic:n&&this.bankFromAccount.transform(n)}},o=this.constructBasePaymentDetails(e,t),s=this.payments.checkPaymentTypeFromIban(o.payerIban,n);return{emailOnSuccess:e.emailOnSuccess,paymentRecipient:i,details:o,category:l.h.DOMESTIC,type:s}}prepareForeignPaymentBody(e){return this.currencyPayments.mapForm(e)}prepareEmployeePaymentBody(e,t){const n=e.commonPeriodEnabled&&e.period&&m(e.period).format(a.ISO_8061),i=this.constructBasePaymentDetails(e,t),r=e.employees.map(e=>{const t=e.fio.split(" "),i=t[0],a=t[1];t.splice(0,2);const r=t.length>0?t.join(" "):null;return{amount:{currency:e.currency,amount:e.amount||0},birthDate:e.birthDate,iin:e.iin,lastname:i,firstname:a,middlename:r,period:n||e.period}});return{category:l.h.DOMESTIC,type:e.type,details:i,paymentEmployees:r}}prepareSalaryPaymentBody(e,t){var n,i,o,s,c;const d=this.dictionaries.bankDictionary.getItemsByIds(e.bankReceiver),u={iinOrBin:null===(n=d)||void 0===n?void 0:n.bin,name:null===(i=d)||void 0===i?void 0:i.name,kbe:{code:e.isResidents?"19":"29"},recipientAccount:{iban:(null===(o=d)||void 0===o?void 0:o.salaryTransitIban)||Object(a.ibanPrefix)(e.bankAccount,r.a.KZT),bic:null===(s=d)||void 0===s?void 0:s.bic}},m=this.constructBasePaymentDetails(e,t),p=null===(c=e.employees)||void 0===c?void 0:c.map(e=>{const[t,n,i]=e.fio.split(" ")||[],a=this.maskService.getNumberedAmount(e.amount);return{iban:e.iban,amount:{currency:r.a.KZT,amount:a||0},birthDate:e.birthDate,iin:e.iin.replace(" ",""),lastname:t,firstname:n,middlename:i}});return{category:l.h.DOMESTIC,type:e.type,details:m,paymentEmployees:p,paymentRecipient:u}}preparePaymentTaxBody(e,t){var n,i,o,s;const c=e.bankAccount?Object(a.ibanPrefix)(e.bankAccount,r.a.KZT):"",d=this.dictionaries.UGDictionary.getItemByKey(e.ugd,"code"),u=this.dictionaries.KBKDictionary.getItemByKey(e.kbk,"code"),p={recipientAccount:{iban:c},iinOrBin:null===(n=d)||void 0===n?void 0:n.bin,name:null===(i=d)||void 0===i?void 0:i.name},y=["period","periodStart","periodEnd","vin","protocolNumber"].reduce((t,n)=>(e[n]&&(t[n]=e[n]instanceof Date?m(e[n]).format("MM.yyyy"):e[n]),t),{});return{paymentRecipient:p,details:Object.assign(Object.assign({},this.constructBasePaymentDetails(e,t)),{associatedField:{parameters:y},kbk:{code:null===(o=u)||void 0===o?void 0:o.code,name:null===(s=u)||void 0===s?void 0:s.name}}),category:l.h.DOMESTIC,type:l.j.TAX}}flattenPaymentToModel(e){var t,n,i,r,o,s,c,d,u,p,y,b,v,h,g,f,k,A,S,R,P;const{paymentRecipient:I,details:E,paymentEmployees:C,type:D}=e,N=this.accounts.store.items.find(e=>e.iban===E.payerIban),T={amount:this.maskService.getMaskedAmount(null===(t=E.paymentAmount)||void 0===t?void 0:t.amount),number:E.documentId,date:E.valueDate&&Object(a.dateToNgbStruct)(new Date(E.valueDate)),knp:null===(n=E.knp)||void 0===n?void 0:n.code,purpose:E.description,vat:E.vat,urgent:E.urgent,type:D,senderAccount:N,emailOnSuccess:e.emailOnSuccess},O=(null===(i=E.associatedField)||void 0===i?void 0:i.parameters)||{};if(C&&(T.employees=C.map(e=>({amount:e.amount.amount,iin:e.iin,fio:[e.lastname,e.firstname,e.middlename].join(" "),birthDate:e.birthDate,period:e.period,iban:e.iban})),T.employees.length)){const e=T.employees[0].period;T.commonPeriodEnabled=T.employees.every(t=>t.period&&t.period===e),T.commonPeriodEnabled&&(T.period=m(e,a.ISO_8061).toDate())}switch(D){case l.j.MEDICAL:case l.j.PENSION:case l.j.SOCIAL:break;case l.j.SALARY:const t=this.dictionaries.bankDictionary.getItemByKey(null===(o=null===(r=I)||void 0===r?void 0:r.recipientAccount)||void 0===o?void 0:o.bic,"bic");t&&(T.bankReceiver=t.id,t.salaryTransitIban||(T.bankAccount=null===(c=null===(s=I)||void 0===s?void 0:s.recipientAccount)||void 0===c?void 0:c.iban)),I&&(T.isResidents="19"===(null===(u=null===(d=I)||void 0===d?void 0:d.kbe)||void 0===u?void 0:u.code));break;case l.j.TAX:let n;(null===(p=I)||void 0===p?void 0:p.iinOrBin)&&(n=this.dictionaries.UGDictionary.getItemByKey(I.iinOrBin,"bin")),Object.assign(T,{ugd:null===(y=n)||void 0===y?void 0:y.code,kbk:null===(b=E.kbk)||void 0===b?void 0:b.code,vin:null===(v=O)||void 0===v?void 0:v.vin,protocolNumber:null===(h=O)||void 0===h?void 0:h.protocolNumber,bankAccount:(null===(f=null===(g=I)||void 0===g?void 0:g.recipientAccount)||void 0===f?void 0:f.iban)||l.p.TAX_ACCOUNT}),["period","periodStart","periodEnd"].forEach(e=>{var t;const n=O[e],i=n&&m(n,"MM.yyyy");(null===(t=i)||void 0===t?void 0:t.isValid())&&(T[e]=i.toDate())}),(T.periodEnd||T.periodEnd)&&(T.intervalEnabled=!0);break;case l.j.FOREIGN:Object.assign(T,this.currencyPayments.mapPayment(e));break;default:Object.assign(T,{iinOrBin:null===(k=I)||void 0===k?void 0:k.iinOrBin,name:null===(A=I)||void 0===A?void 0:A.name,bankAccount:null===(R=null===(S=I)||void 0===S?void 0:S.recipientAccount)||void 0===R?void 0:R.iban,kbeCode:null===(P=I)||void 0===P?void 0:P.kbe.code})}return T}showResult(e,t={},n,i){var a,o;const c=this.modalService.open(u.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",centered:!0,backdrop:"static"});Object.assign(c.componentInstance,{message:n?(null===(a=n)||void 0===a?void 0:a.description)||(null===(o=n)||void 0===o?void 0:o.colvirResultDescription)||"ERRORS.UNKNOWN_ERROR":null,result:e,currency:r.a.KZT,amount:this.maskService.getNumberedAmount(t.amount)||0,multySubscribers:t.multySubscribers,hasRights:this.company.authorityLevel!==s.a.NO_SIGNATURE,payment:i,updateCreated:t.updateCreated})}constructBasePaymentDetails(e,t){var n,i,s;const c=this.dictionaries.KNPDictionary.getItemByKey(e.knp,"code"),d=this.maskService.getNumberedAmount(e.amount);return{valueDate:e.date&&Object(a.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,knp:{code:e.knp,name:c&&c.name||o.b},description:e.purpose,payerIban:null===(n=e.senderAccount)||void 0===n?void 0:n.iban,paymentAmount:{amount:d,currency:null===(s=null===(i=e.senderAccount)||void 0===i?void 0:i.balance)||void 0===s?void 0:s.currency},commission:{amount:t.commission,currency:r.a.KZT},vat:e.vat,urgent:e.urgent,documentId:e.number}}checkRecipientsRefresh(e){const t=e.paymentRecipient.recipientAccount;let n=this.recipients.isRecipientExist({companyId:this.company.currentId,iinOrBin:e.paymentRecipient.iinOrBin,name:e.paymentRecipient.name,kbe:e.paymentRecipient.kbe});return n&&this.recipients.isRecipientAccountExist(t.iban,n.id)||this.recipients.getRecipients("",!0),e}}return e.\u0275fac=function(t){return new(t||e)(b.ec(v.c),b.ec(h.c),b.ec(g.a),b.ec(f.a),b.ec(k.a),b.ec(o.a),b.ec(A.a),b.ec(S.q),b.ec(R.c),b.ec(P.a),b.ec(I.e),b.ec(E.b))},e.\u0275prov=b.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},CVrE:function(e,t,n){"use strict";n("FSxY");var i=n("O/Ur");n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return i.b}));var a=n("wtV8");n.d(t,"c",(function(){return a.a})),n("gm23");var r=n("kFTB");n.d(t,"e",(function(){return r.a}));var o=n("+BgI");n.d(t,"f",(function(){return o.a}));var s=n("0mgW");n.d(t,"d",(function(){return s.b})),n.d(t,"g",(function(){return s.c}))},D1y2:function(e,t,n){var i=n("FZoo");e.exports=function(e,t,n){return null==e?e:i(e,t,n)}},FSxY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("Stn5"),a=n("fXoL"),r=n("1kSV"),o=n("qXBG"),s=n("tyNb");let c=(()=>{class e{constructor(e,t,n){this.modal=e,this.auth=t,this.router=n}canDeactivate(e,t,n,a){var r,o;const{extras:s}=this.router.getCurrentNavigation();if(null===(o=null===(r=s)||void 0===r?void 0:r.state)||void 0===o?void 0:o.silent)return Promise.resolve(!0);if(e&&e.formDirective&&this.auth.isAuthenticated){const{formDirective:t,form:n}=e;if(!t.submitted&&n.dirty||t.submitted&&n.dirty)return this.modal.open(i.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_max-height",centered:!0}).result}return Promise.resolve(!0)}}return e.\u0275fac=function(t){return new(t||e)(a.ec(r.q),a.ec(o.a),a.ec(s.c))},e.\u0275prov=a.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},HghS:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var i=n("3Pt+"),a=n("y5b2"),r=n("TwVa"),o=n("fXoL"),s=n("1kSV"),c=n("tyNb"),d=n("VnnJ"),u=n("mR7B"),l=n("sYmb"),m=n("bsP8");function p(e,t){1&e&&o.Sb(0)}function y(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Rb(1,"j-money",16),o.Vb()),2&e){const e=o.mc();o.Ab(1),o.uc("money",e.money)}}function b(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Tc(1),o.nc(2,"translate"),o.Vb()),2&e){const e=o.mc();o.Ab(1),o.Vc(" ",o.oc(2,1,e.subtitle)," ")}}function v(e,t){if(1&e&&(o.Wb(0,"p",17),o.Wb(1,"span"),o.Tc(2),o.nc(3,"translate"),o.Vb(),o.Tc(4,"\xa0"),o.Rb(5,"j-money",16),o.Vb()),2&e){const e=o.mc();o.Ab(2),o.Vc("",o.oc(3,2,"PAYMENTS.RESULT_MODAL.COMMISSION"),":"),o.Ab(3),o.uc("money",e.payment.details.commission)}}function h(e,t){if(1&e){const e=o.Xb();o.Wb(0,"div",11),o.Wb(1,"button",18),o.ic("click",(function(t){return o.Ic(e),o.mc().goToHistory()})),o.Tc(2),o.nc(3,"translate"),o.Vb(),o.Vb()}2&e&&(o.Ab(2),o.Uc(o.oc(3,1,"PAYMENTS.RESULT_MODAL.CHECK_STATUS")))}function g(e,t){1&e&&(o.Rb(0,"img",19),o.nc(1,"translate")),2&e&&o.vc("alt",o.oc(1,1,"SHARED.DONE"))}function f(e,t){1&e&&(o.Rb(0,"img",20),o.nc(1,"translate")),2&e&&o.vc("alt",o.oc(1,1,"SHARED.ERROR"))}let k=(()=>{class e{constructor(e,t,n,a,o,s){this.modal=e,this.router=t,this.companyService=n,this.maskedService=a,this.translate=o,this.navService=s,this.hasRights=!0,this.PAYMENT_TYPE=r.j,this.subscribe=new i.h(!1)}ngOnInit(){}get money(){var e;return(null===(e=this.payment)||void 0===e?void 0:e.type)==r.j.FOREIGN?this.payment.details.paymentAmount:{amount:Math.abs(this.maskedService.getNumberedAmount(this.amount)),currency:this.currency}}get subtitle(){let e="";return e=this.result?this.updateCreated?"PAYMENTS.PAYMENT_EDITED":this.hasRights?this.multySubscribers?this.companyService.isPrimaryAuthority()?"PAYMENTS.PAYMENT_SENT_FOR_SIGN":"PAYMENTS.PAYMENT_SIGNED":"PAYMENTS.PAYMENT_SIGNED_AND_SENT":"PAYMENTS.CREATED_FOR_SIGN":"SHARED.ERROR",this.translate.instant(e)}closeModal(e,t){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),t&&this.router.navigate(["/"]),this.modal.close({subscribe:this.subscribe.value,createNew:e})}goToHistory(){var e,t;if(this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.result){let n="tenge";(null===(e=this.payment)||void 0===e?void 0:e.category)==r.h.FOREIGN?n="foreign":(null===(t=this.payment)||void 0===t?void 0:t.category)==r.h.CONVERSION&&(n="conversion"),this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()?this.router.navigate([`/history/${n}`],{queryParams:{paymentStatus:a.d.IN_PROGRESS}}):this.router.navigate([`/history/${n}`],{queryParams:{paymentStatus:a.d.FOR_SIGN}})}this.modal.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(c.c),o.Qb(d.a),o.Qb(u.a),o.Qb(l.e),o.Qb(m.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["j-payment-result"]],inputs:{result:"result",currency:"currency",amount:"amount",multySubscribers:"multySubscribers",hasRights:"hasRights",message:"message",payment:"payment",updateCreated:"updateCreated"},decls:22,vars:17,consts:[[1,"result-modal"],[1,"modal-header"],[1,"modal-body","result-body","pb-0"],[1,"text-center"],[1,"result-modal--label","mb-2"],[4,"ngIf","ngIfThen","ngIfElse"],["class","light mb-3 mt-2",4,"ngIf"],["class","text-muted mt-0 mb-1",4,"ngIf"],[1,"m-0","text-muted"],[1,"modal-body","result-body"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"btn","btn-block",3,"click"],["success",""],["failure",""],[1,"light","mb-3","mt-2"],[3,"money"],[1,"text-muted","mt-0","mb-1"],[1,"btn","btn-primary","btn-block",3,"click"],["src","./assets/img/history/modals/success.svg",3,"alt"],["src","./assets/img/history/modals/error.svg",3,"alt"]],template:function(e,t){if(1&e&&(o.Wb(0,"div",0),o.Rb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"div",3),o.Wb(4,"div",4),o.Rc(5,p,1,0,"ng-container",5),o.Vb(),o.Rc(6,y,2,1,"h3",6),o.Rc(7,b,3,3,"h3",6),o.Rc(8,v,6,4,"p",7),o.Wb(9,"p",8),o.Tc(10),o.nc(11,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Wb(12,"div",9),o.Rc(13,h,4,3,"div",10),o.Wb(14,"div",11),o.Wb(15,"button",12),o.ic("click",(function(e){return t.closeModal(!1,!0)})),o.Tc(16),o.nc(17,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Rc(18,g,2,3,"ng-template",null,13,o.Sc),o.Rc(20,f,2,3,"ng-template",null,14,o.Sc)),2&e){const e=o.Fc(19),n=o.Fc(21);o.Ab(5),o.uc("ngIf",t.result)("ngIfThen",e)("ngIfElse",n),o.Ab(1),o.uc("ngIf",t.result),o.Ab(1),o.uc("ngIf",!t.result),o.Ab(1),o.uc("ngIf",(null==t.payment?null:t.payment.type)==t.PAYMENT_TYPE.FOREIGN&&(null==t.payment?null:null==t.payment.details?null:t.payment.details.commission)),o.Ab(2),o.Uc(o.oc(11,13,t.message||t.subtitle)),o.Ab(3),o.uc("ngIf",t.result),o.Ab(2),o.Hb("btn-primary",!t.result)("btn-link",t.result),o.Ab(1),o.Uc(o.oc(17,15,"PAYMENTS.RESULT_MODAL.BACK_TO_HOME"))}},styles:["@-webkit-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@-webkit-keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@-webkit-keyframes colored-circle{0%{opacity:0}to{opacity:1}}@keyframes colored-circle{0%{opacity:0}to{opacity:1}}.inlinesvg .svg svg{display:inline}.icon--order-success svg polyline{-webkit-animation:checkmark .25s ease-in-out .7s backwards;animation:checkmark .25s ease-in-out .7s backwards}.icon--order-success svg circle{-webkit-animation:checkmark-circle .6s ease-in-out backwards;animation:checkmark-circle .6s ease-in-out backwards}.icon--order-success svg circle#colored{-webkit-animation:colored-circle .6s ease-in-out .7s backwards;animation:colored-circle .6s ease-in-out .7s backwards}.result-body{padding:1.5rem}"],encapsulation:2}),e})()},"O/Ur":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var i=n("mrSG"),a=n("tk/3"),r=n("YMfE"),o=n("+/Tu"),s=n("TwVa"),c=n("fXoL"),d=n("p6Hd"),u=n("VnnJ"),l=n("mR7B"),m=n("bHA9"),p=function(e){return e.RU="RU",e.US="US",e.CN="CN",e.AU="AU",e.CA="CA",e.AE="AE",e}({});let y=(()=>{class e{constructor(e,t,n,i){this.api=e,this.companyService=t,this.maskedService=n,this.dictionaries=i}getCountries(){return this.api.get("countries")}getContractById(e){return this.api.get(`companies/${this.companyService.currentId}/fx-contracts/${e}`)}getContracts(){return Object(i.a)(this,void 0,void 0,(function*(){return this.api.get(`companies/${this.companyService.currentId}/fx-contracts`)}))}getCodeWords(e){return Object(i.a)(this,void 0,void 0,(function*(){if(e&&this.cashedCodeWordsList&&e===this.cashedCodeWordsCountry)return this.cashedCodeWordsList;let t=new a.h;t=t.append("countryCode",e);const n=yield this.api.get("dictionaries/codewords",null,t);return this.cashedCodeWordsCountry=e,this.cashedCodeWordsList=n,this.cashedCodeWordsList}))}getBanks(e=null,t=null){return Object(i.a)(this,void 0,void 0,(function*(){if(e===this.cashedBankQuery&&t===this.cashedBankCountryCode)return this.cashedBankList;this.cashedBankQuery=e,this.cashedBankCountryCode=t;let n=new a.h;e&&(n=n.append("search",e)),t&&(n=n.append("countryCode",t));const i=yield this.api.get("dictionaries/banks",null,n);return this.cashedBankList=i,i}))}getKbkList(){return this.api.get("dictionaries/kbk")}getStatuses(){return this.api.get("dictionaries/payer-status")}mapForm(e){var t,n,i,a,c,d,u,l,m,y,b,v;let h={commission:{amount:e.comission,currency:e.comissionCurrency},description:e.purpose,documentId:e.number,foreignPaymentDetails:{commissionWithdrawalIban:null===(t=e.commissionAccount)||void 0===t?void 0:t.iban,intermediaryBankBic:null===(n=e.intermediaryBank)||void 0===n?void 0:n.bic,intermediaryBankName:null===(i=e.intermediaryBank)||void 0===i?void 0:i.name,type:e.payComission?"OUR":"SHA"},valueDate:e.date&&Object(r.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,payerIban:null===(a=e.senderAccount)||void 0===a?void 0:a.iban,paymentAmount:{amount:this.maskedService.getNumberedAmount(e.amount),currency:null===(d=null===(c=e.senderAccount)||void 0===c?void 0:c.balance)||void 0===d?void 0:d.currency}};if(e.knp){let t="";t=e.knpObject?e.knpObject.code:e.knp;const n=this.dictionaries.KNPDictionary.getItemByKey(t,"code");h.knp={code:n.code,name:n.name}}e.kbk&&(h.kbk={code:e.kbk.code,name:e.kbk.description}),e.withinContract&&(h.foreignPaymentDetails.fxContractId=e.contractId,h.foreignPaymentDetails.contract=e.contract,h.foreignPaymentDetails.fxContractRecipient=e.fxContractRecipient,h.foreignPaymentDetails.fxContractRecipientId=e.fxContractRecipientId),e.codeWord&&(h.foreignPaymentDetails.codeWord=e.codeWord),e.isRubNonRussia&&(h.foreignPaymentDetails.intermediaryBankBic=e.rubNonRussiaCorrespondentBank.bic,h.foreignPaymentDetails.intermediaryBankIban=e.rubNonRussiaCorrespondentIban);let g=e.bank;e.isRubNonRussia&&(g=e.rubNonRussiaBank);const f=e.countryCode||(null===(u=e.country)||void 0===u?void 0:u.code)||(null===(m=null===(l=e.fxContractRecipient)||void 0===l?void 0:l.country)||void 0===m?void 0:m.code)||(null===(y=e.fxContractRecipient)||void 0===y?void 0:y.countryCode);let k={category:s.j.FOREIGN,companyId:this.companyService.currentId,details:h,emailOnSuccess:e.emailOnSuccess,paymentRecipient:{cityName:e.cityName,countryCode:f,kbe:{code:e.kbeCode},kpp:e.kpp,name:e.name,recipientAccount:{bankName:null===(b=g)||void 0===b?void 0:b.name,bic:null===(v=g)||void 0===v?void 0:v.bic,iban:e.bankAccount?this.removeSpaces(e.bankAccount):e.bankAccount}},type:s.j.FOREIGN};return f==p.AU&&(k.paymentRecipient.address=e.senderAccount.balance.currency===o.a.AUD?{index:e.audIndex,state:e.audState,street:e.audStreet,buildingNumber:e.audBuildingNumber}:{text:e.audAddress}),f==p.CA&&(k.paymentRecipient.address={text:e.canAddress}),e.kio&&(k.paymentRecipient.iinOrBin=e.kio),e.kvo&&(h.foreignPaymentDetails.currencyTransactionCode=e.kvo),e.isRussianBudget&&(h.foreignPaymentDetails.oktmo=e.oktmo,h.foreignPaymentDetails.payerInn=e.payerInn,h.foreignPaymentDetails.payerKpp=e.payerKpp,h.foreignPaymentDetails.payerStatus=e.payerStatus,h.foreignPaymentDetails.paymentBasis=e.paymentBasis,h.foreignPaymentDetails.period=e.budgetPeriod,h.foreignPaymentDetails.uip=e.uip,h.foreignPaymentDetails.budgetDocNumber=e.budgetDocNumber),k}mapPayment(e){var t,n,i,a,o,c,d,u,l,m,p,y,b,v,h,g,f,k,A,S,R,P;return{type:s.j.FOREIGN,senderAccount:null,commissionAccount:null,comission:e.details.comission,payComission:"OUR"==e.details.foreignPaymentDetails.type,countryCode:(null===(t=e.paymentRecipient)||void 0===t?void 0:t.countryCode)||"",cityName:(null===(n=e.paymentRecipient)||void 0===n?void 0:n.cityName)||"",isNewPayment:e.isNewPayment||!1,contract:e.details.foreignPaymentDetails.fxContract,contractId:e.details.foreignPaymentDetails.fxContractId,fxContractRecipient:e.details.foreignPaymentDetails.fxContractRecipient,fxContractRecipientId:e.details.foreignPaymentDetails.fxContractRecipientId,withinContract:!!e.details.foreignPaymentDetails.fxContractId,name:(null===(i=e.paymentRecipient)||void 0===i?void 0:i.name)||"",bankAccount:(null===(a=e.paymentRecipient)||void 0===a?void 0:a.recipientAccount.iban)||"",kbeCode:(null===(c=null===(o=e.paymentRecipient)||void 0===o?void 0:o.kbe)||void 0===c?void 0:c.code)||"",number:e.details.documentId,date:e.details.valueDate&&Object(r.dateToNgbStruct)(new Date(e.details.valueDate)),knp:null===(d=e.details.knp)||void 0===d?void 0:d.code,purpose:e.details.description,amount:null===(u=e.details.paymentAmount)||void 0===u?void 0:u.amount,bankLabel:"",bank:null,hasIntermediaryBank:!!e.details.foreignPaymentDetails.intermediaryBankBic,intermediaryBankLabel:"",intermediaryBank:null,notify:!!e.emailOnSuccess,emailOnSuccess:e.emailOnSuccess,kpp:(null===(l=e.paymentRecipient)||void 0===l?void 0:l.kpp)||"",kvo:e.details.foreignPaymentDetails.currencyTransactionCode||"",kio:(null===(m=e.paymentRecipient)||void 0===m?void 0:m.iinOrBin)||"",isRussianBudget:null,isRussianTaxPayer:!(!e.details.foreignPaymentDetails.payerInn&&!e.details.foreignPaymentDetails.payerKpp),payerInn:e.details.foreignPaymentDetails.payerInn||"",payerKpp:e.details.foreignPaymentDetails.payerKpp||"",kbk:e.details.kbk?{code:e.details.kbk.code,description:e.details.kbk.name}:"",oktmo:e.details.foreignPaymentDetails.oktmo||"",payerStatus:e.details.foreignPaymentDetails.payerStatus||"",hasRussianBudgetExtras:!!(e.details.foreignPaymentDetails.paymentBasis||e.details.foreignPaymentDetails.budgetDocNumber||e.details.foreignPaymentDetails.period||e.details.foreignPaymentDetails.uip),paymentBasis:e.details.foreignPaymentDetails.paymentBasis||"",budgetDocNumber:e.details.foreignPaymentDetails.budgetDocNumber||"",budgetPeriod:e.details.foreignPaymentDetails.period||"",uip:e.details.foreignPaymentDetails.uip||"",codeWord:e.details.foreignPaymentDetails.codeWord,audIndex:(null===(y=null===(p=e.paymentRecipient)||void 0===p?void 0:p.address)||void 0===y?void 0:y.index)||"",audState:(null===(v=null===(b=e.paymentRecipient)||void 0===b?void 0:b.address)||void 0===v?void 0:v.state)||"",audStreet:(null===(g=null===(h=e.paymentRecipient)||void 0===h?void 0:h.address)||void 0===g?void 0:g.street)||"",audBuildingNumber:(null===(k=null===(f=e.paymentRecipient)||void 0===f?void 0:f.address)||void 0===k?void 0:k.buildingNumber)||"",audAddress:(null===(S=null===(A=e.paymentRecipient)||void 0===A?void 0:A.address)||void 0===S?void 0:S.text)||"",canAddress:(null===(P=null===(R=e.paymentRecipient)||void 0===R?void 0:R.address)||void 0===P?void 0:P.text)||""}}removeSpaces(e){return e.replace(/ /g,"")}}return e.\u0275fac=function(t){return new(t||e)(c.ec(d.a),c.ec(u.a),c.ec(l.a),c.ec(m.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Stn5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),a=n("1kSV"),r=n("sYmb");let o=(()=>{class e{constructor(e){this.modal=e}ngOnInit(){}cancel(){this.modal.close(!1)}continue(){this.modal.close(!0)}}return e.\u0275fac=function(t){return new(t||e)(i.Qb(a.a))},e.\u0275cmp=i.Kb({type:e,selectors:[["j-payment-guard-modal"]],decls:21,vars:15,consts:[[1,"result-modal"],[1,"modal-header"],["type","button",1,"close",3,"click"],["src","./assets/icons/close.svg",3,"alt"],[1,"modal-body","p-3"],[1,"text-center"],[1,"modal-body","text-center"],[1,"form-group"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-link",3,"click"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"button",2),i.ic("click",(function(e){return t.modal.dismiss()})),i.Rb(3,"img",3),i.nc(4,"translate"),i.Vb(),i.Vb(),i.Wb(5,"div",4),i.Wb(6,"div",5),i.Wb(7,"h5"),i.Tc(8),i.nc(9,"translate"),i.Vb(),i.Wb(10,"p"),i.Tc(11),i.nc(12,"translate"),i.Vb(),i.Vb(),i.Vb(),i.Wb(13,"div",6),i.Wb(14,"div",7),i.Wb(15,"button",8),i.ic("click",(function(e){return t.continue()})),i.Tc(16),i.nc(17,"translate"),i.Vb(),i.Wb(18,"button",9),i.ic("click",(function(e){return t.cancel()})),i.Tc(19),i.nc(20,"translate"),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&e&&(i.Ab(3),i.vc("alt",i.oc(4,5,"SHARED.CLOSE")),i.Ab(5),i.Uc(i.oc(9,7,"PAYMENTS.GUARD_MODAL.TITLE")),i.Ab(3),i.Uc(i.oc(12,9,"PAYMENTS.GUARD_MODAL.DESCRIPTION")),i.Ab(5),i.Uc(i.oc(17,11,"PAYMENTS.GUARD_MODAL.EXIT")),i.Ab(3),i.Uc(i.oc(20,13,"SHARED.CANCEL")))},pipes:[r.d],styles:[""]}),e})()},gm23:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("gzBp"),a=n("fXoL"),r=n("tyNb"),o=n("wtV8"),s=n("0mgW"),c=n("VO+5");let d=(()=>{class e{constructor(e,t,n,i,a){this.router=e,this.route=t,this.api=n,this.payments=i,this.notification=a}canActivate(e,t){var n,a,r,o;const s=null===(a=null===(n=this.router.getCurrentNavigation().extras)||void 0===n?void 0:n.state)||void 0===a?void 0:a.repeatPayment,c=(null===(r=e.params)||void 0===r?void 0:r.paymentId)||(null===(o=s)||void 0===o?void 0:o.id);let d=i.a.tenge.order;return s&&(d=this.payments.getPaymentRouteByType(s.type)),c?this.api.getPaymentById(c).then(e=>{const t=[this.payments.getPaymentRouteByType(e.type)];s||t.push(c),this.router.navigate(t,{state:{resolvedPayment:e}})}).catch(e=>{this.router.navigate([i.a.tenge.order]),this.notification.show({type:"error",message:e})}):this.router.navigate([d]),!1}}return e.\u0275fac=function(t){return new(t||e)(a.ec(r.c),a.ec(r.a),a.ec(o.a),a.ec(s.c),a.ec(c.c))},e.\u0275prov=a.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},kFTB:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("YMfE"),a=n("3Pt+"),r=n("SMdK"),o=n("TwVa"),s=n("+/Tu"),c=n("fXoL"),d=n("0mgW"),u=n("7rOj"),l=n("bHA9");let m=(()=>{class e{constructor(e,t,n,i){this.fb=e,this.paymentsService=t,this.bankFromAccount=n,this.dictionaries=i}createPaymentInTengeForm(){const e=this.fb.group({type:void 0,iinOrBin:["",[a.H.required,a.H.minLength(12)]],name:["",[a.H.required,a.H.maxLength(250)]],bankAccount:[void 0,a.H.required],kbeCode:["",[a.H.required,r.a.kbe]],number:["",a.H.required],date:null,knp:[void 0,[a.H.required]],purpose:[""],senderAccount:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount),e=>{var t;return 0===(null===(t=e)||void 0===t?void 0:t.value)?{cantBeZero:!0}:null}]],vat:[!1],urgent:[!1],notify:[!1],emailOnSuccess:[{value:"",disabled:!0},[a.H.required,a.H.email]]}),{bankAccount:t,senderAccount:n}=e.controls;return t.setValidators([a.H.required,e=>{const t=Object(i.ibanPrefix)(e.value,s.a.KZT),a=n.value;return!e.value||t.length<18||!a||t!==a.iban?null:{isEqual:!0}},e=>this.paymentsService.bankExist(Object(i.ibanPrefix)(e.value||"",s.a.KZT)),e=>`KZ${e.value}`!==o.p.TAX_ACCOUNT?null:{taxAccountError:!0}]),n.setValidators([a.H.required,e=>(e.value&&t.updateValueAndValidity(),null)]),e}createTaxForm(){const e=this.fb.group({type:o.j.TAX,ugd:[void 0,a.H.required],kbk:["",[a.H.required]],number:["",a.H.required],date:void 0,knp:[{value:"",disabled:!0},[a.H.required]],bankAccount:["",a.H.required],senderAccount:["",a.H.required],purpose:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount)]],urgent:[!1],vin:[{value:"",disabled:!0}],intervalEnabled:!1,period:[{value:"",disabled:!0},[a.H.required]],periodStart:[{value:"",disabled:!0}],periodEnd:[{value:"",disabled:!0}],protocolNumber:[{value:"",disabled:!0},[a.H.required]]}),{periodEnd:t,periodStart:n}=e.controls,c=r.a.isSmallerThan(t),d=r.a.isGreaterThan(n);n.setValidators([a.H.required,c,r.a.revalidateLinkControlIf(()=>!c(n)&&t.hasError("isGreaterThan"),t)]),t.setValidators([a.H.required,d,r.a.revalidateLinkControlIf(()=>!d(t)&&n.hasError("isSmallerThan"),n)]);const{bankAccount:u,senderAccount:l}=e.controls;return u.setValidators([a.H.required,e=>{const t=Object(i.ibanPrefix)(e.value,s.a.KZT),n=l.value;return!e.value||t.length<18||!n||t!==n.iban?null:{isEqual:!0}},e=>this.paymentsService.bankExist(Object(i.ibanPrefix)(e.value||"",s.a.KZT)),e=>"070"===`KZ${e.value}`.substring(4,7)?null:{wrongTaxAccountError:!0}]),e}createPensionForm(){return this.fb.group({type:o.j.PENSION,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["010",[a.H.required]],purpose:"",employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.j.PENSION)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],commonPeriodEnabled:!1})}createSocialForm(){return this.fb.group({type:o.j.SOCIAL,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["012",[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.j.SOCIAL)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:"",commonPeriodEnabled:!1})}createMedicalForm(){return this.fb.group({type:o.j.MEDICAL,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["121",[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.j.MEDICAL)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:"",commonPeriodEnabled:!1})}createSalaryForm(){const e=this.fb.group({type:o.j.SALARY,bankReceiver:[""],bankAccount:[{value:"",disabled:!0}],date:void 0,number:["",a.H.required],knp:[void 0,[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.j.SALARY)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:[""],isResidents:!0}),{bankReceiver:t,bankAccount:n}=e.controls;return t.setValidators([a.H.required,e=>(e.value&&n.updateValueAndValidity(),null)]),n.setValidators([a.H.required,e=>{const n=Object(i.ibanPrefix)(e.value,s.a.KZT);if(n.length<7||!t.value)return null;const a=this.dictionaries.bankDictionary.getItemsByIds(t.value),r=this.paymentsService.bankFromAccount.transform(n);return a&&a.bic!==r?{difReceiverAndBankBiq:!0}:null}]),e}createCurrencyForm(){return this.fb.group({type:o.j.FOREIGN,senderAccount:["",a.H.required],commissionAccount:["",a.H.required],comission:[null],comissionCurrency:[null],payComission:[!1],countryCode:[void 0,a.H.required],country:[null],cityName:[void 0],contract:[null],contractId:[null],fxContractRecipient:[null],fxContractRecipientId:[null],withinContract:[!1],name:["",[a.H.required,a.H.maxLength(103)]],bankAccount:[""],kbeCode:["",[a.H.required,r.a.kbe]],number:["",a.H.required],date:[null],knp:[void 0,[a.H.required]],knpObject:[null],purpose:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount),e=>{var t;return 0===(null===(t=e)||void 0===t?void 0:t.value)?{cantBeZero:!0}:null}]],bankLabel:["",a.H.required],bank:[null,a.H.required],hasIntermediaryBank:[!1],intermediaryBankLabel:[""],intermediaryBank:[null],notify:[!1],emailOnSuccess:[{value:"",disabled:!0},[a.H.required,a.H.email]],kpp:[""],kvo:[void 0],codeWord:[void 0],kio:[void 0,a.H.required],isRussianBudget:[null],isRussianTaxPayer:[null],payerInn:[null],payerKpp:[""],kbk:[null],oktmo:[""],payerStatus:["S08"],hasRussianBudgetExtras:[null],paymentBasis:[""],budgetDocNumber:[""],budgetPeriod:[""],uip:[null],isRubNonRussia:[!1],rubNonRussiaCorrespondentBankLabel:[""],rubNonRussiaCorrespondentBank:[null],rubNonRussiaBankLabel:[""],rubNonRussiaBank:[null],rubNonRussiaCorrespondentIban:[""],audIndex:[""],audState:[""],audStreet:[""],audBuildingNumber:[""],audAddress:[""],canAddress:[""]})}}return e.\u0275fac=function(t){return new(t||e)(c.ec(i.FormBuilderTypeSafe),c.ec(d.c),c.ec(u.b),c.ec(l.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);