function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"POq/":function(t,e,n){"use strict";n.r(e);var a,i,r,s,c=n("ofXK"),o=n("3Pt+"),l=n("PCNd"),u=n("tyNb"),b=n("fXoL"),p=n("lABO"),f=((a=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"onRetry",value:function(){this.router.navigate(["/landing"])}}]),t}()).\u0275fac=function(t){return new(t||a)(b.Qb(u.c))},a.\u0275cmp=b.Kb({type:a,selectors:[["j-went-wrong"]],decls:2,vars:0,consts:[[1,"vh-100","d-flex","justify-content-center","align-items-center"],[3,"retried"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Wb(1,"j-error-placeholder",1),b.ic("retried",(function(t){return e.onRetry()})),b.Vb(),b.Vb())},directives:[p.a],styles:[""]}),a),g=n("AytR"),d=n("tk/3"),h=((i=function(t){function e(t){var n;return _classCallCheck(this,e),(n=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this))).http=t,n}return _inherits(e,t),_createClass(e,[{key:"getCategories",value:function(){return this.http.get("".concat(g.a.baseUrl,"/dictionaries/store-product-categories"))}}]),e}(function(){return function t(){_classCallCheck(this,t)}}())).\u0275fac=function(t){return new(t||i)(b.ec(d.c))},i.\u0275prov=b.Mb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),m=n("mrSG"),_=n("yZrb"),v=n("VnnJ"),C=((r=function(){function t(e,n){_classCallCheck(this,t),this.apiService=e,this.companyService=n,this.isJmart=null}return _createClass(t,[{key:"resolveAccess",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.apiService.get("companies/".concat(this.companyService.currentId,"/is-jmart")),t.next=3,e;case 3:return this.isJmart=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"hasAccess",value:function(){return this.isJmart}},{key:"createApplication",value:function(t){return this.apiService.post("companies/".concat(this.companyService.currentId,"/store-claim"),t)}}]),t}()).\u0275fac=function(t){return new(t||r)(b.ec(_.a),b.ec(v.a))},r.\u0275prov=b.Mb({token:r,factory:r.\u0275fac}),r),O=n("sYmb"),S=n("e8Ap"),y=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=b.Kb({type:s,selectors:[["j-has-store"]],decls:18,vars:1,consts:[[1,"container-fluid","has-store"],[1,"row","justify-content-between"],[1,"col-4","align-self-center"],["translate","",1,"has-store__title","mb-4"],["translate","",1,"text-gray","mb-4"],[1,"mb-4"],["translate","",1,"has-store__partners"],[1,"text-gray","has-store__phone"],[1,"has-store__email"],["href","https://jmart.kz","target","_blank","translate","",1,"btn","btn-primary"],[3,"inlineSVG"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Wb(3,"h1",3),b.Qc(4,"JMART.LANDING.STORE_CONNECTED.TITLE"),b.Vb(),b.Wb(5,"p",4),b.Qc(6,"JMART.LANDING.CONNECT_STORE.TEXT"),b.Vb(),b.Wb(7,"div",5),b.Wb(8,"p",6),b.Qc(9,"JMART.LANDING.STORE_CONNECTED.PARTNERS"),b.Vb(),b.Wb(10,"p",7),b.Qc(11,"+7 (771) 234 56 78"),b.Vb(),b.Wb(12,"p",8),b.Qc(13,"business@jmart.kz"),b.Vb(),b.Vb(),b.Wb(14,"a",9),b.Qc(15,"JMART.LANDING.GOTOSTORE"),b.Vb(),b.Vb(),b.Wb(16,"div"),b.Rb(17,"span",10),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Ab(17),b.rc("inlineSVG","./assets/jmart/landing/hookup-store.svg"))},directives:[O.a,S.a],styles:[".has-store__title[_ngcontent-%COMP%]{line-height:60px;color:#000}.has-store__partners[_ngcontent-%COMP%]{font-weight:500;font-size:18px;line-height:24px;color:#1a1c1f;margin-bottom:6px}.has-store__phone[_ngcontent-%COMP%]{font-size:14px;line-height:18px;margin-bottom:6px}.has-store__email[_ngcontent-%COMP%]{font-size:14px;line-height:18px;color:#ef5630;margin-bottom:0}"]}),s);function R(t,e){1&t&&(b.Wb(0,"div"),b.Wb(1,"section",2),b.Wb(2,"div",3),b.Wb(3,"div",4),b.Wb(4,"h1",5),b.Qc(5,"JMART.LANDING.CONNECT_STORE.CLAIM_SENT"),b.Vb(),b.Wb(6,"p",6),b.Qc(7,"JMART.LANDING.CONNECT_STORE.CLAIM_SENT_TEXT"),b.Vb(),b.Vb(),b.Wb(8,"div"),b.Rb(9,"span",7),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Ab(9),b.rc("inlineSVG","./assets/jmart/landing/hookup-store.svg"))}function A(t,e){if(1&t){var n=b.Xb();b.Wb(0,"section",2),b.Wb(1,"div",3),b.Wb(2,"div",4),b.Wb(3,"h1",5),b.Qc(4,"JMART.LANDING.CONNECT_STORE.TITLE"),b.Vb(),b.Wb(5,"p",6),b.Qc(6,"JMART.LANDING.CONNECT_STORE.TEXT"),b.Vb(),b.Wb(7,"button",8),b.ic("click",(function(t){return b.Fc(n),b.lc().scroll()})),b.Qc(8,"JMART.LANDING.CONNECT_STORE.SCROLL_BTN"),b.Vb(),b.Vb(),b.Wb(9,"div"),b.Rb(10,"span",7),b.Vb(),b.Vb(),b.Vb()}2&t&&(b.Ab(10),b.rc("inlineSVG","./assets/jmart/landing/hookup-store.svg"))}var T,x=((T=function(){function t(e){_classCallCheck(this,t),this.landingService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.landingService.hasAccess().isStoreClaimSent;this.isStoreClaimSent=t}},{key:"scroll",value:function(){window.scrollTo(0,document.body.scrollHeight)}}]),t}()).\u0275fac=function(t){return new(t||T)(b.Qb(C))},T.\u0275cmp=b.Kb({type:T,selectors:[["j-connect-store"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["storeClaimNotSent",""],[1,"container-fluid","connect-store"],[1,"row","justify-content-between"],[1,"col-4","align-self-center"],["translate","",1,"connect-store__title","m-0","pb-4"],["translate","",1,"text-gray","connect-store__text","m-0","pb-4"],[3,"inlineSVG"],["type","button","translate","",1,"btn","btn-primary","btn-block",3,"click"]],template:function(t,e){if(1&t&&(b.Oc(0,R,10,1,"div",0),b.Oc(1,A,11,1,"ng-template",null,1,b.Pc)),2&t){var n=b.Cc(2);b.rc("ngIf",e.isStoreClaimSent)("ngIfElse",n)}},directives:[c.u,O.a,S.a],styles:[".connect-store[_ngcontent-%COMP%]{margin-bottom:100px}.connect-store__title[_ngcontent-%COMP%]{line-height:60px;color:#000}.btn[_ngcontent-%COMP%]{width:176px}"]}),T);function E(t,e){if(1&t&&(b.Wb(0,"div"),b.Wb(1,"div",7),b.Wb(2,"p",8),b.Qc(3),b.Vb(),b.Wb(4,"p",9),b.Qc(5),b.Vb(),b.Vb(),b.Vb()),2&t){var n=e.$implicit;b.Db(n.class),b.Ab(3),b.Rc(n.value),b.Ab(2),b.Rc(n.name)}}var V,N=((V=function(){function t(){_classCallCheck(this,t),this.facts=[{name:"JMART.LANDING.STORE_FACTS.GOODS",value:"400 000+"},{name:"JMART.LANDING.STORE_FACTS.CATEGORIES",value:"3 000+"},{name:"JMART.LANDING.STORE_FACTS.PARTNERS",value:"1 000+"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=b.Kb({type:V,selectors:[["j-store-facts"]],decls:9,vars:1,consts:[[1,"container-fluid","facts"],[1,"header"],["translate","",1,"text-center","header__title","m-0","pb-2"],["translate","",1,"text-center","text-dark","header__text","m-0"],[1,"container-fluid","px-0"],[1,"store-fact"],[3,"class",4,"ngFor","ngForOf"],[1,"fact"],[1,"fact__text","text-center","mt-3"],["translate","",1,"text-center","text-black"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Wb(2,"h3",2),b.Qc(3,"JMART.LANDING.STORE_FACTS.STORE"),b.Vb(),b.Wb(4,"p",3),b.Qc(5,"JMART.LANDING.STORE_FACTS.DESC"),b.Vb(),b.Vb(),b.Wb(6,"div",4),b.Wb(7,"div",5),b.Oc(8,E,6,5,"div",6),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Ab(8),b.rc("ngForOf",e.facts))},directives:[O.a,c.t],styles:[".facts[_ngcontent-%COMP%]{margin-bottom:100px}.header[_ngcontent-%COMP%]{margin-bottom:40px}.header__title[_ngcontent-%COMP%]{font-size:32px;line-height:40px}.header__text[_ngcontent-%COMP%]{line-height:24px;opacity:.7}.fact[_ngcontent-%COMP%]{background:#fff;border:1px solid #e7e8eb;border-radius:12px}.fact__text[_ngcontent-%COMP%]{font-weight:500;font-size:48px;line-height:60px}.fact__text[_ngcontent-%COMP%], .text-dark[_ngcontent-%COMP%]{color:#1a1c1f}.text-orange[_ngcontent-%COMP%]{font-weight:500;font-size:48px;line-height:60px;color:#ef5630}.text-black[_ngcontent-%COMP%]{color:#666c72}.store-fact[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}"]}),V);function k(t,e){if(1&t&&(b.Wb(0,"div"),b.Wb(1,"div",7),b.Wb(2,"div",5),b.Wb(3,"div"),b.Wb(4,"h6",8),b.Qc(5),b.Vb(),b.Wb(6,"p",9),b.Qc(7),b.Vb(),b.Vb(),b.Wb(8,"div"),b.Rb(9,"span",10),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t){var n=e.$implicit;b.Fb("col-",n.size," ",n.class," advantages-main__col"),b.Ab(3),b.Eb("col-",n.subsize1," advantages-main__text"),b.Ab(2),b.Rc(n.subheader),b.Ab(2),b.Rc(n.description),b.Ab(1),b.Eb("col-",n.subsize2,""),b.Ab(1),b.rc("inlineSVG",n.img)}}var M,W,P,w,I=((W=function(){function t(){_classCallCheck(this,t),this.translatePrefix="JMART.LANDING.ADVANTAGES",this.advantages=[{subheader:this.mapTranslate("INCREACE"),description:this.mapTranslate("INCREACE_DESC"),img:"./assets/jmart/landing/advantages-1.svg",size:6,class:"pt-0",subsize1:7,subsize2:5},{subheader:this.mapTranslate("BRAND"),description:this.mapTranslate("BRAND_DESC"),img:"./assets/jmart/landing/advantages-2.svg",size:6,class:"pt-0",subsize1:7,subsize2:5},{subheader:this.mapTranslate("COOPERATION"),description:this.mapTranslate("COOPERATION_DESC"),img:"./assets/jmart/landing/advantages-3.svg",size:5,class:"",subsize1:6,subsize2:6},{subheader:this.mapTranslate("DELIVERY"),description:this.mapTranslate("DELIVERY_DESC"),img:"./assets/jmart/landing/advantages-4.svg",size:7,class:"",subsize1:8,subsize2:4},{subheader:this.mapTranslate("INSTALLMENT"),description:this.mapTranslate("INSTALLMENT_DESC"),img:"./assets/jmart/landing/advantages-5.svg",size:7,class:"pb-0",subsize1:8,subsize2:4},{subheader:this.mapTranslate("SALES"),description:this.mapTranslate("SALES_DESC"),img:"./assets/jmart/landing/advantages-6.svg",size:5,class:"pb-0",subsize1:6,subsize2:6}]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"mapTranslate",value:function(t){return"".concat(this.translatePrefix,".").concat(t)}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=b.Kb({type:W,selectors:[["j-advantages"]],decls:9,vars:3,consts:[[1,"container-fluid","advantages"],[1,"advantages-header"],["translate","",1,"text-center","advantages-header__title","m-0","pb-2"],["translate","",1,"text-center","advantages-header__text","m-0"],[1,"container-fluid","advantages-main","px-0"],[1,"row"],[3,"class",4,"ngFor","ngForOf"],[1,"container-fluid","advantages-main__item"],["translate","",1,"advantages-main__subheader"],["translate","",1,"advantages-main__description"],[1,"advantages-main__img",3,"inlineSVG"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Wb(2,"h3",2),b.Qc(3),b.Vb(),b.Wb(4,"p",3),b.Qc(5),b.Vb(),b.Vb(),b.Wb(6,"div",4),b.Wb(7,"div",5),b.Oc(8,k,10,13,"div",6),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Ab(3),b.Rc(e.mapTranslate("TITLE")),b.Ab(2),b.Rc(e.mapTranslate("DESC")),b.Ab(3),b.rc("ngForOf",e.advantages))},directives:[O.a,c.t,S.a],styles:[".advantages[_ngcontent-%COMP%]{margin-bottom:100px}.advantages-header[_ngcontent-%COMP%]{margin-bottom:40px}.advantages-header__title[_ngcontent-%COMP%]{font-size:32px;line-height:40px}.advantages-header__text[_ngcontent-%COMP%]{opacity:.7}.advantages-main__item[_ngcontent-%COMP%]{background:#fff;border:1px solid #e7e8eb;border-radius:20px}.advantages-main__subheader[_ngcontent-%COMP%]{line-height:20px;color:#000}.advantages-main__description[_ngcontent-%COMP%]{font-size:14px;line-height:18px;color:#666c72}.advantages-main__img[_ngcontent-%COMP%]{width:150px}.advantages-main__col[_ngcontent-%COMP%]:nth-child(odd){padding:10px 10px 10px 0}.advantages-main__col[_ngcontent-%COMP%]:nth-child(2n){padding:10px 0 10px 10px}.advantages-main__text[_ngcontent-%COMP%]{padding-top:32px;padding-left:32px}"]}),W),j=((M=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=b.Kb({type:M,selectors:[["j-jmart-logo"]],decls:1,vars:0,consts:[["inlineSVG","./assets/jmart/logo.svg"]],template:function(t,e){1&t&&b.Rb(0,"span",0)},directives:[S.a],styles:[""]}),M),L=n("h7tf"),D=n("ZVDf"),G=n("9odQ"),z=((w=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=b.Kb({type:w,selectors:[["j-success-form"]],decls:7,vars:1,consts:[[1,"container","success"],[1,"text-center","success__icon"],[1,"mr-2",3,"inlineSVG"],["translate","",1,"text-center","success__text"],["translate","",1,"text-center"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Rb(2,"span",2),b.Vb(),b.Wb(3,"h4",3),b.Qc(4,"JMART.LANDING.FORM_RESPONSE.SUCCESS"),b.Vb(),b.Wb(5,"p",4),b.Qc(6,"JMART.LANDING.FORM_RESPONSE.SUCCESS_TEXT"),b.Vb(),b.Vb()),2&t&&(b.Ab(2),b.rc("inlineSVG","assets/jmart/success.svg"))},directives:[S.a,O.a],styles:[".success[_ngcontent-%COMP%]{margin-top:112px}.success__icon[_ngcontent-%COMP%], .success__text[_ngcontent-%COMP%]{margin-bottom:30px}"]}),w),J=((P=function(){function t(){_classCallCheck(this,t),this.onRepeat=new b.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"repeat",value:function(){this.onRepeat.emit("default")}}]),t}()).\u0275fac=function(t){return new(t||P)},P.\u0275cmp=b.Kb({type:P,selectors:[["j-failed-form"]],outputs:{onRepeat:"onRepeat"},decls:9,vars:0,consts:[[1,"container","failed"],[1,"text-center","failed__icon"],["src","./assets/jmart/error.svg","width","48px","height","48px"],["translate","",1,"text-center","failed__text"],["translate","",1,"text-center"],["type","button","translate","",1,"btn","btn-primary","btn-block",3,"click"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Rb(2,"img",2),b.Vb(),b.Wb(3,"h4",3),b.Qc(4,"JMART.LANDING.FORM_RESPONSE.FAILED"),b.Vb(),b.Wb(5,"p",4),b.Qc(6,"JMART.LANDING.FORM_RESPONSE.FAILED_TEXT"),b.Vb(),b.Wb(7,"button",5),b.ic("click",(function(t){return e.repeat()})),b.Qc(8,"JMART.LANDING.FORM_RESPONSE.REPEAT"),b.Vb(),b.Vb())},directives:[O.a],styles:[".failed[_ngcontent-%COMP%]{margin-top:112px}.failed__icon[_ngcontent-%COMP%], .failed__text[_ngcontent-%COMP%]{margin-bottom:30px}"]}),P),Q=function(){return{id:"phoneKz"}};function F(t,e){if(1&t){var n=b.Xb();b.Wb(0,"form",9),b.ic("ngSubmit",(function(t){return b.Fc(n),b.lc().submit()})),b.Wb(1,"h4",10),b.Qc(2,"JMART.LANDING.FORM.TITLE"),b.Vb(),b.Wb(3,"p",11),b.Qc(4,"JMART.LANDING.FORM.DESC"),b.Vb(),b.Wb(5,"j-dropdown-input",12),b.ic("selected",(function(t){return b.Fc(n),b.lc().selectedCategory(t)})),b.Vb(),b.Rb(6,"j-phone-input",13),b.Rb(7,"j-input",14),b.Wb(8,"button",15),b.Qc(9," JMART.LANDING.FORM.APPLICATION "),b.Vb(),b.Vb()}if(2&t){var a=b.lc();b.rc("formGroup",a.form),b.Ab(5),b.rc("options",a.categories)("hasError",a.categoryError&&a.isSubmitted)("isOptionsObj",!0),b.Ab(1),b.rc("isClearable",!1)("formControl",a.form.get("phone"))("hasError",a.phoneError&&a.isSubmitted)("countryCode",b.vc(12,Q))("defaultFocus",!1),b.Ab(1),b.rc("isClearable",!1)("formControl",a.form.get("email"))("hasError",a.emailError&&a.isSubmitted)}}function K(t,e){1&t&&(b.Wb(0,"div"),b.Rb(1,"j-success-form"),b.Vb())}function X(t,e){if(1&t){var n=b.Xb();b.Wb(0,"div"),b.Wb(1,"j-failed-form",16),b.ic("onRepeat",(function(t){return b.Fc(n),b.lc().onRepeat(t)})),b.Vb(),b.Vb()}}var H,q=((H=function(){function t(e,n){_classCallCheck(this,t),this.categoriesService=e,this.landingService=n,this.isSubmitted=!1,this.formStatus="default",this.pageFailedLoad=null,this.form=new o.k({category:new o.h(null,o.H.required),phone:new o.h("",o.H.required),email:new o.h("sample@gmail.com",[o.H.required,o.H.email])})}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCategories()}},{key:"submit",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isSubmitted=!0,!this.form.invalid){t.next=2;break}return t.abrupt("return");case 2:return e={category:this.form.value.category.id,phone:"+7"+this.form.value.phone,email:this.form.value.email},console.log(e),t.prev=4,t.next=7,this.landingService.createApplication(e);case 7:this.formStatus="success",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0),this.formStatus="failed";case 13:this.formReset();case 14:case"end":return t.stop()}}),t,this,[[4,10]])})))}},{key:"selectedCategory",value:function(t){this.form.get("category").setValue(t)}},{key:"onRepeat",value:function(t){this.formStatus=t}},{key:"getCategories",value:function(){var t=this;this.pageFailedLoad=null,this.cSub=this.categoriesService.getCategories().subscribe((function(e){t.categories=e}),(function(e){t.pageFailedLoad=e.description||e}))}},{key:"formReset",value:function(){this.form.get("category").reset(),this.form.get("phone").setValue(""),this.form.get("email").reset()}},{key:"onRetry",value:function(){this.getCategories()}},{key:"ngOnDestroy",value:function(){this.cSub&&this.cSub.unsubscribe()}},{key:"categoryError",get:function(){return this.form.get("category").errors}},{key:"phoneError",get:function(){return this.form.get("phone").errors}},{key:"emailError",get:function(){return this.form.get("email").errors}}]),t}()).\u0275fac=function(t){return new(t||H)(b.Qb(h),b.Qb(C))},H.\u0275cmp=b.Kb({type:H,selectors:[["j-application-form"]],decls:11,vars:5,consts:[[1,"container-fluid","application"],[1,"row","justify-content-between"],[1,"col-6","application__form"],[1,"container-fluid","p-0"],[3,"ngSwitch"],[3,"formGroup","ngSubmit",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"application__img"],[1,"mr-2",3,"inlineSVG"],[3,"formGroup","ngSubmit"],["translate","",1,"container-fluid","mb-2","p-0","application__title"],["translate","",1,"mb-4"],["label","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",3,"options","hasError","isOptionsObj","selected"],["label","\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",3,"isClearable","formControl","hasError","countryCode","defaultFocus"],["label","\u041f\u043e\u0447\u0442\u0430",3,"isClearable","formControl","hasError"],["type","submit","translate","",1,"btn","btn-primary","btn-block"],[3,"onRepeat"]],template:function(t,e){1&t&&(b.Wb(0,"section",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Wb(3,"div",3),b.Rb(4,"j-jmart-logo"),b.Ub(5,4),b.Oc(6,F,10,13,"form",5),b.Oc(7,K,2,0,"div",6),b.Oc(8,X,2,0,"div",6),b.Tb(),b.Vb(),b.Vb(),b.Wb(9,"div",7),b.Rb(10,"span",8),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Ab(5),b.rc("ngSwitch",e.formStatus),b.Ab(1),b.rc("ngSwitchCase","default"),b.Ab(1),b.rc("ngSwitchCase","success"),b.Ab(1),b.rc("ngSwitchCase","failed"),b.Ab(2),b.rc("inlineSVG","./assets/jmart/landing/form.svg"))},directives:[j,c.y,c.z,S.a,o.J,o.u,o.l,O.a,L.a,D.a,o.t,o.i,G.b,z,J],styles:[".application[_ngcontent-%COMP%]{background:#fff;border-radius:40px}.application__form[_ngcontent-%COMP%]{padding:60px}.application__title[_ngcontent-%COMP%]{margin-top:48px}"]}),H);function B(t,e){1&t&&b.Rb(0,"j-application-form")}var U,Y=((U=function(){function t(e){_classCallCheck(this,t),this.landingService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.landingService.hasAccess().isStoreClaimSent;this.isStoreClaimSent=t}}]),t}()).\u0275fac=function(t){return new(t||U)(b.Qb(C))},U.\u0275cmp=b.Kb({type:U,selectors:[["j-has-not-store"]],decls:4,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(b.Rb(0,"j-connect-store"),b.Rb(1,"j-store-facts"),b.Rb(2,"j-advantages"),b.Oc(3,B,1,0,"j-application-form",0)),2&t&&(b.Ab(3),b.rc("ngIf",!e.isStoreClaimSent))},directives:[x,N,I,c.u,q],styles:[""]}),U);function Z(t,e){1&t&&b.Rb(0,"j-has-store")}function $(t,e){1&t&&b.Rb(0,"j-has-not-store")}var tt,et,nt,at=((et=function(){function t(e,n){_classCallCheck(this,t),this.landingService=e,this.route=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.data.isJmart.isJmartCompany;this.isJmartCompany=t}}]),t}()).\u0275fac=function(t){return new(t||et)(b.Qb(C),b.Qb(u.a))},et.\u0275cmp=b.Kb({type:et,selectors:[["j-landing"]],decls:4,vars:2,consts:[[1,"main"],[4,"ngIf","ngIfElse"],["hasnot",""]],template:function(t,e){if(1&t&&(b.Wb(0,"div",0),b.Oc(1,Z,1,0,"j-has-store",1),b.Oc(2,$,1,0,"ng-template",null,2,b.Pc),b.Vb()),2&t){var n=b.Cc(3);b.Ab(1),b.rc("ngIf",e.isJmartCompany)("ngIfElse",n)}},directives:[c.u,y,Y],styles:[".main[_ngcontent-%COMP%]{margin-top:140px;margin-bottom:160px}"]}),et),it=((tt=function(){function t(e,n){_classCallCheck(this,t),this.router=e,this.landingService=n}return _createClass(t,[{key:"resolve",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.landingService.resolveAccess();case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),this.router.navigate(["landing","went-wrong"]);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}}]),t}()).\u0275fac=function(t){return new(t||tt)(b.ec(u.c),b.ec(C))},tt.\u0275prov=b.Mb({token:tt,factory:tt.\u0275fac}),tt),rt=[{path:"",component:at,resolve:{isJmart:it}},{path:"went-wrong",component:f}],st=((nt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:nt}),nt.\u0275inj=b.Nb({factory:function(t){return new(t||nt)},imports:[[u.g.forChild(rt)],u.g]}),nt);n.d(e,"LandingModule",(function(){return ot}));var ct,ot=((ct=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:ct}),ct.\u0275inj=b.Nb({factory:function(t){return new(t||ct)},providers:[it,C],imports:[[c.c,l.a,st,o.n,o.D,u.g]]}),ct)}}]);