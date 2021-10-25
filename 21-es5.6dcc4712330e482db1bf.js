function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"7wo0":function(e,t,i){"use strict";i.r(t);var n,r,s,a=i("ofXK"),c=i("PCNd"),o=i("3Pt+"),l=i("tyNb"),u=i("fXoL"),b=i("paXB"),f=i("7/bn"),h=i("oMXN"),d=i("EiG8"),p=i("sYmb"),m=i("zdqJ"),v=function(){return["main"]},g=function(){return["authorities"]},S=function(){return["password"]},y=function(){return["faq"]},_=function(){return["feature-request"]},k=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Kb({type:r,selectors:[["j-settings-tabs"]],decls:11,vars:10,consts:[[1,"tabs"],["routerLinkActive","tabs__link--active","translate","",1,"p1","tabs__link",3,"routerLink"],["jTour","SETTINGS.AUTHORITIES","jTourPosition","bottom","routerLinkActive","tabs__link--active","translate","",1,"p1","tabs__link",3,"routerLink"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"a",1),u.Qc(2,"SETTINGS.MAIN"),u.Vb(),u.Wb(3,"a",2),u.Qc(4,"SETTINGS.AUTHORITIES.TITLE"),u.Vb(),u.Wb(5,"a",1),u.Qc(6,"SETTINGS.PASSWORD.TITLE"),u.Vb(),u.Wb(7,"a",1),u.Qc(8,"SETTINGS.FAQ.TITLE"),u.Vb(),u.Wb(9,"a",1),u.Qc(10,"SETTINGS.FEATURE_REQUEST.TITLE"),u.Vb(),u.Vb()),2&e&&(u.Ab(1),u.rc("routerLink",u.vc(5,v)),u.Ab(2),u.rc("routerLink",u.vc(6,g)),u.Ab(2),u.rc("routerLink",u.vc(7,S)),u.Ab(2),u.rc("routerLink",u.vc(8,y)),u.Ab(2),u.rc("routerLink",u.vc(9,_)))},directives:[l.f,l.e,p.a,m.a],styles:[".tabs[_ngcontent-%COMP%]{display:-webkit-box;display:flex;border-bottom:1px solid #eceef1}.tabs__link[_ngcontent-%COMP%]{color:#666c72;padding:1rem 0;display:block;border-bottom:2px solid transparent;bottom:-1.5px;position:relative}.tabs__link--active[_ngcontent-%COMP%]{color:#1a1c1f;font-weight:500;border-bottom-color:#ef5630}.tabs__link[_ngcontent-%COMP%] + .tabs__link[_ngcontent-%COMP%]{margin-left:40px}"]}),r),A=((n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Kb({type:n,selectors:[["j-settings"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-lg-10","offset-lg-1","col-xl-10","offset-xl-2"],[1,"settings"],["translate","",1,"header-title"]],template:function(e,t){1&e&&(u.Wb(0,"j-layout-home"),u.Wb(1,"j-aside"),u.Rb(2,"j-nav-main"),u.Vb(),u.Wb(3,"j-main"),u.Wb(4,"section",0),u.Wb(5,"section",1),u.Wb(6,"section",2),u.Wb(7,"h2",3),u.Qc(8,"SETTINGS.TITLE"),u.Vb(),u.Rb(9,"j-settings-tabs"),u.Rb(10,"router-outlet"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb())},directives:[b.a,f.a,h.a,d.a,p.a,k,l.h],styles:[".settings{padding-top:40px}.settings-info{padding:1rem;margin:2rem 0;background:#fff;border-radius:.75rem;max-width:435px}.settings-info a:hover{color:#ef5630!important}.settings-heading{font-size:1.25rem;margin:.375rem 0 1rem}.settings-heading-wrapper{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.all-requisites-item{border-radius:8px;background:#fff;margin:12px 16px;padding:16px 16px 16px 56px}"],encapsulation:2}),n),T=i("mrSG"),I=i("4Nuw"),C=i("ZF+8"),x=i("VnnJ"),w=i("JqCM"),O=i("VO+5"),P=i("Kcpt"),R=i("e8Ap"),E=i("L+ju"),W=i("zN9f"),V=((s=function(){function e(){_classCallCheck(this,e),this.selected=new u.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSelect",value:function(){this.account.isSelected=!this.account.isSelected,this.selected.emit(this.account.isSelected)}},{key:"mapSelectedAccountLabel",value:function(e){var t;switch(null===(t=e)||void 0===t?void 0:t.accountType){case E.a.CARD:return"ACCOUNTS.CARD";case E.a.ACCOUNT:return"ACCOUNTS.DROPDOWN.REGULAR";case E.a.DEPOSIT:return"ACCOUNTS.DEPOSIT";default:return null}}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=u.Kb({type:s,selectors:[["j-all-requisites-item"]],inputs:{isChecked:"isChecked",account:"account"},outputs:{selected:"selected"},decls:13,vars:8,consts:[[1,"custom-control","custom-checkbox","all-requisites-item"],["type","checkbox",1,"custom-control-input",3,"id","ngModel","change"],[1,"custom-control-label","all-requisites-item-label",3,"for"],[1,"all-requisites-item__row"],[1,"all-requisites-item__cell"],["size","sm",3,"name"],[1,"d-block","text-muted"],[1,"p2","all-requisites-item__iban"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"input",1),u.ic("change",(function(e){return t.onSelect()})),u.Vb(),u.Wb(2,"label",2),u.Wb(3,"div",3),u.Wb(4,"div",4),u.Rb(5,"j-entity-logo",5),u.Vb(),u.Wb(6,"div",4),u.Wb(7,"small",6),u.Wb(8,"div"),u.Qc(9),u.mc(10,"translate"),u.Vb(),u.Vb(),u.Wb(11,"span",7),u.Qc(12),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Ab(1),u.rc("id",t.account.id)("ngModel",t.account.isSelected),u.Ab(1),u.rc("for",t.account.id),u.Ab(3),u.rc("name",t.account.balance.currency),u.Ab(4),u.Rc(u.nc(10,6,t.mapSelectedAccountLabel(t.account))),u.Ab(3),u.Rc(t.account.iban))},directives:[o.a,o.t,o.w,W.a],pipes:[p.d],styles:[".all-requisites-item__row[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;flex-direction:row}.all-requisites-item__cell[_ngcontent-%COMP%], .all-requisites-item__row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.all-requisites-item__cell[_ngcontent-%COMP%]{margin:auto 5px;-webkit-box-orient:vertical;flex-direction:column}.all-requisites-item-label[_ngcontent-%COMP%]:after, .all-requisites-item-label[_ngcontent-%COMP%]:before{top:0;bottom:0;margin:auto}.text-muted[_ngcontent-%COMP%]{font-size:14px}.all-requisites-item__iban[_ngcontent-%COMP%]{margin-top:4px;display:block}"]}),s);function N(e,t){if(1&e){var i=u.Xb();u.Wb(0,"div"),u.Wb(1,"j-all-requisites-item",15),u.ic("selected",(function(e){return u.Fc(i),u.lc().onSelect()})),u.Vb(),u.Vb()}if(2&e){var n=t.$implicit;u.Ab(1),u.rc("account",n)}}function M(e,t){1&e&&(u.Wb(0,"div",16),u.Rb(1,"ngx-spinner",17),u.Vb()),2&e&&(u.Ab(1),u.rc("fullScreen",!1))}var D,q,j=((D=function(){function e(t,i,n,r,s){_classCallCheck(this,e),this.accountsService=t,this.filesService=i,this.companyService=n,this.spinner=r,this.notifier=s,this.closed=new u.n,this.accounts=[],this.isAllSelected=!1,this.isLoading=!0}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(T.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.spinner.show(),e.next=4,this.accountsService.getAccounts();case 4:this.accounts=e.sent,this.accounts.forEach((function(e){e.isSelected=!0})),this.isAllSelected=!0,this.spinner.hide(),this.isLoading=!1;case 9:case"end":return e.stop()}}),e,this)})))}},{key:"selectAll",value:function(){var e=this;this.isAllSelected=!this.isAllSelected,this.accounts=this.accounts.map((function(t){return t.isSelected=e.isAllSelected,t}))}},{key:"onSelect",value:function(){this.isAllSelected=this.accounts.every((function(e){return e.isSelected}))}},{key:"onDownload",value:function(){var e=this.accounts.filter((function(e){return e.isSelected})).map((function(e){return e.iban}));e.length>0?this.download(e):this.notifier.show({type:"error",message:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d \u0441\u0447\u0435\u0442. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0447\u0435\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c"})}},{key:"download",value:function(e){return Object(T.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.accountsService.getPdfWithMultipleIbans(this.companyService.currentId,e);case 3:i=t.sent,this.filesService.downloadFile(i,"".concat(this.companyService.currentCompany.bin,".pdf")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"onClose",value:function(){this.closed.emit()}}]),e}()).\u0275fac=function(e){return new(e||D)(u.Qb(I.c),u.Qb(C.b),u.Qb(x.a),u.Qb(w.c),u.Qb(O.c))},D.\u0275cmp=u.Kb({type:D,selectors:[["j-all-requisites"]],outputs:{closed:"closed"},decls:20,vars:12,consts:[[1,"all-requisites-selector__header"],[1,"p2","text-dark","all-requisites-selector__header_size_b"],["type","button",1,"details__close","ml-auto","close",3,"click"],["size","md","name","cross",1,"size-md"],[1,"all-requisites-selector"],[1,"custom-control","custom-checkbox","all-requisites-item"],["type","checkbox",1,"custom-control-input",3,"id","ngModel","change"],[1,"custom-control-label",3,"for"],[1,"all-requisites-selector__list"],[4,"ngFor","ngForOf"],["class","spinner-wrap",4,"ngIf"],[1,"all-requisites__footer"],[1,"all-requisites__button","btn","btn-outline-primary","btn-md",3,"click"],[3,"inlineSVG"],["translate","",1,"ml-2"],[3,"account","selected"],[1,"spinner-wrap"],["type","ball-scale-ripple-multiple","size","large","color","#d6dadf","bdColor","rgba(255, 255, 255, 1)",3,"fullScreen"]],template:function(e,t){1&e&&(u.Wb(0,"section",0),u.Wb(1,"div",1),u.Qc(2),u.mc(3,"translate"),u.Vb(),u.Wb(4,"button",2),u.ic("click",(function(e){return t.onClose()})),u.Rb(5,"j-icon",3),u.Vb(),u.Vb(),u.Wb(6,"div",4),u.Wb(7,"div",5),u.Wb(8,"input",6),u.ic("change",(function(e){return t.selectAll()})),u.Vb(),u.Wb(9,"label",7),u.Qc(10),u.mc(11,"translate"),u.Vb(),u.Vb(),u.Wb(12,"div",8),u.Oc(13,N,2,1,"div",9),u.Vb(),u.Vb(),u.Oc(14,M,2,1,"div",10),u.Wb(15,"div",11),u.Wb(16,"button",12),u.ic("click",(function(e){return t.onDownload()})),u.Rb(17,"div",13),u.Wb(18,"strong",14),u.Qc(19,"ACCOUNTS.REQUISITES.DOWNLOAD"),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Ab(2),u.Sc(" ",u.nc(3,8,"SETTINGS.REQUISITES.SELECT_REQUISITES")," "),u.Ab(6),u.rc("id","all")("ngModel",t.isAllSelected),u.Ab(1),u.rc("for","all"),u.Ab(1),u.Sc(" ",u.nc(11,10,"SETTINGS.REQUISITES.SELECT_ALL")," "),u.Ab(3),u.rc("ngForOf",t.accounts),u.Ab(1),u.rc("ngIf",t.isLoading),u.Ab(3),u.rc("inlineSVG","assets/icons/account/pdf.svg"))},directives:[P.a,o.a,o.t,o.w,a.t,a.u,R.a,p.a,V,w.a],pipes:[p.d],styles:[".all-requisites-selector[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(100% - 11rem)}.all-requisites-selector__header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:1.5rem;background-color:#fff}.all-requisites-selector__header_size_b[_ngcontent-%COMP%]{font-size:24px;font-weight:500;line-height:30px}.all-requisites-selector__list[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;overflow-y:auto}.all-requisites__footer[_ngcontent-%COMP%]{margin:10px auto}.all-requisites__button[_ngcontent-%COMP%]{margin:1rem;width:calc(100% - 2rem);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]}),D),L=i("quSY"),Q=i("lJxs"),G=i("TwVa"),U=i("S09V"),F=i("kmKP"),z=i("mR7B"),K=i("tmjD"),H=((q=function(){function e(t,i,n,r,s){_classCallCheck(this,e),this.companyService=t,this.userService=i,this.translateService=n,this.maskedService=r,this.maskPipe=s,this.locale=this.translateService.currentLang}return _createClass(e,[{key:"generateMainInfo",value:function(){return{title:this.mapCompanyPrefix("TITLE"),titleAdditional:this.mapCompanyPrefix("REQUISITES"),fields:[{label:this.mapCompanyPrefix("NAME"),value:this.companyService.currentCompany.name},{label:this.mapCompanyPrefix("IIN"),value:this.maskPipe.transform(this.companyService.currentCompany.bin,U.a.iin.mask)},{label:this.mapCompanyPrefix("KBE"),value:this.companyService.currentCompany.kod},{label:this.mapCompanyPrefix("ADDRESS"),value:this.companyService.currentCompany.legalAddress},{label:this.mapCompanyPrefix("SECTOR"),value:this.companyService.currentCompany.economicSector},{label:this.mapCompanyPrefix("REGISTER_DATE"),value:this.mapDate(this.companyService.currentCompany.registrationDate)}]}}},{key:"generatePrivateInfo",value:function(){var e=this.userService.user;if(e)return{title:this.mapPrivatePrefix("TITLE"),fields:[{label:this.mapPrivatePrefix("NAME"),value:"".concat(e.lastname," ").concat(e.firstname," ").concat(e.middlename)},{label:this.mapPrivatePrefix("IIN"),value:this.maskPipe.transform(e.iin,U.a.iin.mask)},{label:this.mapPrivatePrefix("ROLE"),value:this.mapRole(this.companyService.currentAuthority)},{label:this.mapPrivatePrefix("RIGHTS"),value:this.mapSignText(this.companyService.currentAuthority)},{label:this.mapPrivatePrefix("EMAIL"),value:e.email},{label:this.mapPrivatePrefix("PHONE"),value:"".concat(this.maskPipe.transform(this.maskedService.getPastedPhone(e.phone),U.a.phone.mask)),isPhone:!0}]}}},{key:"generateContactsInfo",value:function(){return{title:this.mapContactsPrefix("TITLE"),fields:[{label:this.mapContactsPrefix("CALL_CENTER"),value:"7711",isPhone:!0}]}}},{key:"getAuthoritiesList",value:function(){var e=this;return this.companyService.getAuthorizedPersons().pipe(Object(Q.a)((function(t){var i;return null===(i=t)||void 0===i?void 0:i.sort(e.sortPersons).map((function(t){return{initials:e.retrieveInitials(t),name:e.companyService.retrieveShortName(t),role:e.mapRole(t),startDate:t.fromDate,endDate:t.toDate,sign:e.mapSignText(t),color:e.mapInitialsColor(t)}}))})))}},{key:"mapAuthoritiesPrefix",value:function(e){return this.mapTranslatePrefix("AUTHORITIES",e)}},{key:"mapCompanyPrefix",value:function(e){return this.mapTranslatePrefix("COMPANY",e)}},{key:"mapPrivatePrefix",value:function(e){return this.mapTranslatePrefix("PRIVATE",e)}},{key:"mapContactsPrefix",value:function(e){return this.mapTranslatePrefix("CONTACTS",e)}},{key:"mapTranslatePrefix",value:function(e,t){return"SETTINGS.".concat(e,".").concat(t)}},{key:"mapDate",value:function(e){return e?Object(a.K)(e,"d MMMM yyyy",this.locale):null}},{key:"sortPersons",value:function(e,t){return e.authority===t.authority?0:e.authority===G.a.PRIMARY_SIGNATURE?-1:e.authority===G.a.SECONDARY_SIGNATURE&&t.authority===G.a.NO_SIGNATURE?-1:1}},{key:"mapRole",value:function(e){switch(e.authority){case G.a.PRIMARY_SIGNATURE:return this.mapAuthoritiesPrefix("HEAD");case G.a.SECONDARY_SIGNATURE:return this.mapAuthoritiesPrefix("MAIN_ACCOUNTANT");case G.a.NO_SIGNATURE:default:return this.mapAuthoritiesPrefix("ACCOUNTANT")}}},{key:"mapSignText",value:function(e){switch(e.authority){case G.a.PRIMARY_SIGNATURE:return this.mapAuthoritiesPrefix("FIRST_SIGN");case G.a.SECONDARY_SIGNATURE:return this.mapAuthoritiesPrefix("SECOND_SIGN");case G.a.NO_SIGNATURE:default:return this.mapAuthoritiesPrefix("NO_SIGN")}}},{key:"mapInitialsColor",value:function(e){switch(e.authority){case G.a.PRIMARY_SIGNATURE:return"first-sign";case G.a.SECONDARY_SIGNATURE:return"second-sign";case G.a.NO_SIGNATURE:default:return"no-sign"}}},{key:"retrieveInitials",value:function(e){return"".concat(e.lastname[0]).concat(e.firstname[0])}}]),e}()).\u0275fac=function(e){return new(e||q)(u.ec(x.a),u.ec(F.b),u.ec(p.e),u.ec(z.a),u.ec(K.b))},q.\u0275prov=u.Mb({token:q,factory:q.\u0275fac,providedIn:"root"}),q);function $(e,t){if(1&e&&(u.Wb(0,"div",11),u.Wb(1,"span",12),u.Qc(2,"SETTINGS.AUTHORITIES.ROLE"),u.Vb(),u.Qc(3,": "),u.Wb(4,"span",12),u.Qc(5),u.Vb(),u.Vb()),2&e){var i=u.lc().$implicit;u.Ab(5),u.Rc(i.role)}}function Y(e,t){if(1&e&&(u.Wb(0,"div",11),u.Wb(1,"span",12),u.Qc(2,"SETTINGS.AUTHORITIES.START_DATE"),u.Vb(),u.Qc(3,": "),u.Wb(4,"span",12),u.Qc(5),u.mc(6,"date"),u.Vb(),u.Vb()),2&e){var i=u.lc().$implicit;u.Ab(5),u.Rc(u.oc(6,1,i.startDate,"dd.MM.yyyy"))}}function J(e,t){if(1&e&&(u.Wb(0,"div",11),u.Wb(1,"span",12),u.Qc(2,"SETTINGS.AUTHORITIES.END_DATE"),u.Vb(),u.Qc(3,": "),u.Wb(4,"span",12),u.Qc(5),u.mc(6,"date"),u.Vb(),u.Vb()),2&e){var i=u.lc().$implicit;u.Ab(5),u.Rc(u.oc(6,1,i.endDate,"dd.MM.yyyy"))}}function X(e,t){if(1&e&&(u.Wb(0,"div",13),u.Qc(1),u.Vb()),2&e){var i=u.lc().$implicit;u.Ab(1),u.Sc(" ",i.sign," ")}}function B(e,t){if(1&e&&(u.Wb(0,"div",4),u.Wb(1,"div",5),u.Qc(2),u.Vb(),u.Wb(3,"div",6),u.Wb(4,"div",7),u.Qc(5),u.Vb(),u.Wb(6,"div",8),u.Oc(7,$,6,1,"div",9),u.Oc(8,Y,7,4,"div",9),u.Oc(9,J,7,4,"div",9),u.Vb(),u.Vb(),u.Oc(10,X,2,1,"div",10),u.Vb()),2&e){var i=t.$implicit;u.Ab(1),u.Db(i.color),u.Ab(1),u.Sc(" ",i.initials," "),u.Ab(3),u.Rc(i.name),u.Ab(2),u.rc("ngIf",i.role),u.Ab(1),u.rc("ngIf",i.startDate),u.Ab(1),u.rc("ngIf",i.endDate),u.Ab(1),u.rc("ngIf",i.sign)}}function Z(e,t){if(1&e&&(u.Wb(0,"section",1),u.Wb(1,"h6",2),u.Qc(2,"SETTINGS.AUTHORITIES.TITLE"),u.Vb(),u.Oc(3,B,11,8,"div",3),u.Vb()),2&e){var i=u.lc();u.Ab(3),u.rc("ngForOf",i.authorities)}}var ee,te=((ee=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||ee)},ee.\u0275cmp=u.Kb({type:ee,selectors:[["e-authorities"]],inputs:{authorities:"authorities"},decls:1,vars:1,consts:[["class","settings-info",4,"ngIf"],[1,"settings-info"],["translate","",1,"settings-heading"],["class","authority",4,"ngFor","ngForOf"],[1,"authority"],[1,"authority__initials","p2"],[1,"authority__info"],[1,"p2","text-dark","authority__name"],[1,"p3","text-muted"],["class","authority__row",4,"ngIf"],["class","authority__sign p3 text-dark","translate","",4,"ngIf"],[1,"authority__row"],["translate",""],["translate","",1,"authority__sign","p3","text-dark"]],template:function(e,t){1&e&&u.Oc(0,Z,4,1,"section",0),2&e&&u.rc("ngIf",t.authorities)},directives:[a.u,p.a,a.t],pipes:[a.f],styles:[".authority[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;margin-bottom:1rem}.authority[_ngcontent-%COMP%], .authority__initials[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.authority__initials[_ngcontent-%COMP%]{flex-shrink:0;width:2.5rem;height:2.5rem;border-radius:1rem;margin-right:1rem;color:#fff;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:#d6dadf}.authority__initials.first-sign[_ngcontent-%COMP%]{background:rgba(239,143,0,.7)}.authority__initials.second-sign[_ngcontent-%COMP%]{background:rgba(21,134,187,.7)}.authority__sign[_ngcontent-%COMP%]{margin-left:auto}.authority__name[_ngcontent-%COMP%]{margin-bottom:.25rem}"]}),ee),ie=i("xJkR"),ne=i("lABO");function re(e,t){if(1&e&&u.Rb(0,"e-authorities",3),2&e){var i=u.lc();u.rc("authorities",i.authorities)}}var se=function(){return{width:"220px",height:"30px","margin-top":"0.375rem","margin-bottom":"30px","background-color":"#ECEEF1"}},ae=function(){return{height:"70px","margin-bottom":"1rem","background-color":"#ECEEF1"}};function ce(e,t){1&e&&(u.Wb(0,"div",4),u.Rb(1,"ngx-skeleton-loader",5),u.Rb(2,"ngx-skeleton-loader",6),u.Vb()),2&e&&(u.Ab(1),u.rc("theme",u.vc(2,se)),u.Ab(1),u.rc("theme",u.vc(3,ae)))}function oe(e,t){if(1&e){var i=u.Xb();u.Wb(0,"j-error-placeholder",7),u.ic("retried",(function(e){return u.Fc(i),u.lc().onRetry()})),u.Vb()}}var le,ue=((le=function(){function e(t,i){var n=this;_classCallCheck(this,e),this.settingsService=t,this.companyService=i,this.subscription=new L.a;var r=this.settingsService.getAuthoritiesList().subscribe((function(e){console.log(e),n.authorities=e}));this.subscription.add(r)}return _createClass(e,[{key:"onRetry",value:function(){this.companyService.fetchAuthorizedPersons()}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||le)(u.Qb(H),u.Qb(x.a))},le.\u0275cmp=u.Kb({type:le,selectors:[["j-settings-authorities"]],decls:3,vars:3,consts:[[3,"authorities",4,"ngIf"],["class","settings-info",4,"ngIf"],["class","error-placeholder",3,"retried",4,"ngIf"],[3,"authorities"],[1,"settings-info"],[3,"theme"],["count","3",3,"theme"],[1,"error-placeholder",3,"retried"]],template:function(e,t){1&e&&(u.Oc(0,re,1,1,"e-authorities",0),u.Oc(1,ce,3,4,"div",1),u.Oc(2,oe,1,0,"j-error-placeholder",2)),2&e&&(u.rc("ngIf",(null==t.authorities?null:t.authorities.length)>0),u.Ab(1),u.rc("ngIf",0==(null==t.authorities?null:t.authorities.length)),u.Ab(1),u.rc("ngIf",!t.authorities))},directives:[a.u,te,ie.a,ne.a],styles:[".error-placeholder[_ngcontent-%COMP%]{max-width:435px}"]}),le);function be(e,t){if(1&e&&(u.Wb(0,"section",3),u.Sb(1,4),u.Vb()),2&e){u.lc();var i=u.Cc(3);u.Ab(1),u.rc("ngTemplateOutlet",i)}}function fe(e,t){if(1&e&&(u.Wb(0,"section",5),u.Sb(1,4),u.Vb()),2&e){u.lc();var i=u.Cc(3);u.Ab(1),u.rc("ngTemplateOutlet",i)}}function he(e,t){if(1&e){var i=u.Xb();u.Wb(0,"button",11),u.ic("click",(function(e){return u.Fc(i),u.lc(3).openRequisites()})),u.Qc(1),u.Vb()}if(2&e){var n=u.lc(3);u.Ab(1),u.Sc(" ",n.info.titleAdditional," ")}}function de(e,t){if(1&e&&(u.Wb(0,"div",17),u.Qc(1),u.Vb()),2&e){var i=u.lc(2).$implicit;u.Ab(1),u.Sc(" ",i.value," ")}}function pe(e,t){if(1&e&&(u.Wb(0,"a",18),u.Qc(1),u.Vb()),2&e){var i=u.lc(2).$implicit;u.tc("href","tel:",i.value,"",u.Hc),u.Ab(1),u.Rc(i.value)}}function me(e,t){if(1&e&&(u.Wb(0,"a",18),u.Qc(1),u.Vb()),2&e){var i=u.lc(2).$implicit;u.tc("href","mailto:",i.value,"",u.Hc),u.Ab(1),u.Rc(i.value)}}function ve(e,t){if(1&e&&(u.Wb(0,"div",13),u.Wb(1,"div",14),u.Qc(2),u.Vb(),u.Oc(3,de,2,1,"div",15),u.Oc(4,pe,2,2,"a",16),u.Oc(5,me,2,2,"a",16),u.Vb()),2&e){var i=u.lc().$implicit;u.Ab(2),u.Sc(" ",i.label," "),u.Ab(1),u.rc("ngIf",!i.isPhone&&!i.isEmail),u.Ab(1),u.rc("ngIf",i.isPhone),u.Ab(1),u.rc("ngIf",i.isEmail)}}function ge(e,t){if(1&e&&(u.Ub(0),u.Oc(1,ve,6,4,"div",12),u.Tb()),2&e){var i=t.$implicit;u.Ab(1),u.rc("ngIf",i.value)}}function Se(e,t){if(1&e&&(u.Ub(0),u.Wb(1,"div",7),u.Wb(2,"h6",8),u.Qc(3),u.Vb(),u.Oc(4,he,2,1,"button",9),u.Vb(),u.Oc(5,ge,2,1,"ng-container",10),u.Tb()),2&e){var i=u.lc(2);u.Ab(3),u.Rc(i.info.title),u.Ab(1),u.rc("ngIf",i.info.titleAdditional),u.Ab(1),u.rc("ngForOf",i.info.fields)}}function ye(e,t){if(1&e&&u.Oc(0,Se,6,3,"ng-container",6),2&e){var i=u.lc();u.rc("ngIf",i.info)}}var _e,ke=((_e=function(){function e(){_classCallCheck(this,e),this.requisitesClicked=new u.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"openRequisites",value:function(){this.requisitesClicked.emit()}}]),e}()).\u0275fac=function(e){return new(e||_e)},_e.\u0275cmp=u.Kb({type:_e,selectors:[["j-settings-info"]],inputs:{info:"info",hasTour:"hasTour"},outputs:{requisitesClicked:"requisitesClicked"},decls:4,vars:2,consts:[["class","settings-info","jTour","SETTINGS.INFO","jTourPosition","right",4,"ngIf"],["class","settings-info",4,"ngIf"],["infoTemplate",""],["jTour","SETTINGS.INFO","jTourPosition","right",1,"settings-info"],[3,"ngTemplateOutlet"],[1,"settings-info"],[4,"ngIf"],[1,"settings-heading-wrapper"],["translate","",1,"settings-heading"],["class","btn-link-classic","translate","",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["translate","",1,"btn-link-classic",3,"click"],["class","j-desc-row",4,"ngIf"],[1,"j-desc-row"],["translate","",1,"text-muted","j-desc-child"],["class","text-dark j-desc-child","translate","",4,"ngIf"],["class","text-dark j-desc-child",3,"href",4,"ngIf"],["translate","",1,"text-dark","j-desc-child"],[1,"text-dark","j-desc-child",3,"href"]],template:function(e,t){1&e&&(u.Oc(0,be,2,1,"section",0),u.Oc(1,fe,2,1,"section",1),u.Oc(2,ye,1,1,"ng-template",null,2,u.Pc)),2&e&&(u.rc("ngIf",t.hasTour),u.Ab(1),u.rc("ngIf",!t.hasTour))},directives:[a.u,m.a,a.B,p.a,a.t],styles:[".btn-link-classic[_ngcontent-%COMP%]{margin-bottom:.5rem}"],changeDetection:0}),_e);function Ae(e,t){if(1&e){var i=u.Xb();u.Wb(0,"section",3),u.Wb(1,"div",4),u.ic("click",(function(e){return u.Fc(i),u.lc().hideSelector()})),u.Vb(),u.Wb(2,"section",5),u.Wb(3,"j-all-requisites",6),u.ic("closed",(function(e){return u.Fc(i),u.lc().hideSelector()})),u.Vb(),u.Vb(),u.Vb()}if(2&e){var n=u.lc();u.rc("ngClass",n.wrapperClasses),u.Ab(2),u.rc("ngClass",n.allRequisitesClasses)}}var Te,Ie,Ce,xe=((Te=function(){function e(t,i,n,r){var s=this;_classCallCheck(this,e),this.settingsService=t,this.companyService=i,this.tourService=n,this.document=r,this.subscription=new L.a,this.isAnimating=!1,this.wrapperClasses="",this.allRequisitesClasses="",this.isAllRequisitesShown=!1,this.isTourShown=!1,this.loadData();var a=this.companyService.refresh$.subscribe((function(){s.loadData()}));this.subscription.add(a)}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"loadData",value:function(){this.retrieveMainInfo(),this.retrieveContactsInfo(),this.retrievePrivateInfo()}},{key:"retrieveMainInfo",value:function(){this.mainInfo=this.settingsService.generateMainInfo()}},{key:"retrieveContactsInfo",value:function(){this.contactsInfo=this.settingsService.generateContactsInfo()}},{key:"retrievePrivateInfo",value:function(){this.privateInfo=this.settingsService.generatePrivateInfo()}},{key:"showSelector",value:function(){var e=this;this.isAnimating||(this.isAnimating=!0,this.isAllRequisitesShown=!0,this.wrapperClasses="animate__animated zoomInJ",setTimeout((function(){e.document.body.classList.add("overflow-hidden"),e.allRequisitesClasses="is-shown"}),250),setTimeout((function(){e.wrapperClasses="",e.isAnimating=!1}),300))}},{key:"hideSelector",value:function(){var e=this;this.isAnimating||(this.isAnimating=!0,this.allRequisitesClasses="",setTimeout((function(){e.document.body.classList.remove("overflow-hidden"),e.wrapperClasses="animate__animated zoomOutJ"}),250),setTimeout((function(){e.wrapperClasses="",e.isAllRequisitesShown=!1,e.isAnimating=!1}),300))}}]),e}()).\u0275fac=function(e){return new(e||Te)(u.Qb(H),u.Qb(x.a),u.Qb(C.g),u.Qb(a.e))},Te.\u0275cmp=u.Kb({type:Te,selectors:[["j-settings-main"]],decls:4,vars:5,consts:[[3,"info","hasTour","requisitesClicked"],[3,"info"],["class","f-page-wrapper is-shown",3,"ngClass",4,"ngIf"],[1,"f-page-wrapper","is-shown",3,"ngClass"],[1,"f-page-backdrop",3,"click"],[1,"f-page-content","f-page-content--gray","f-page-content--quarter",3,"ngClass"],[3,"closed"]],template:function(e,t){1&e&&(u.Wb(0,"j-settings-info",0),u.ic("requisitesClicked",(function(e){return t.showSelector()})),u.Vb(),u.Rb(1,"j-settings-info",1),u.Rb(2,"j-settings-info",1),u.Oc(3,Ae,4,2,"section",2)),2&e&&(u.rc("info",t.mainInfo)("hasTour",!0),u.Ab(1),u.rc("info",t.privateInfo),u.Ab(1),u.rc("info",t.contactsInfo),u.Ab(1),u.rc("ngIf",t.isAllRequisitesShown))},directives:[ke,a.u,a.r,j],styles:[""]}),Te),we=i("p6Hd"),Oe=i("tWFC"),Pe=i("1kSV"),Re=i("kUBv"),Ee=["newPassword"],We=[{path:"",component:A,data:{title:"SETTINGS.TITLE"},children:[{path:"main",component:xe},{path:"authorities",component:ue},{path:"password",component:(Ie=function(){function e(t,i){_classCallCheck(this,e),this.userService=t,this.modalService=i,this.isLoading=!1}return _createClass(e,[{key:"onSubmit",value:function(e){return Object(T.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,this.errorText=null,t.prev=1,t.next=4,this.userService.changePassword(e.oldPassword,e.newPassword);case 4:this.newPassword.clearForm(),this.showSuccessModal(),t.next=20;break;case 8:t.prev=8,t.t0=t.catch(1),t.t1=t.t0.code,t.next=t.t1===we.b.INVALID_PASSWORD?13:t.t1===we.b.IDENTICAL_PASSWORDS?15:t.t1===we.b.USED_PASSWORD?17:19;break;case 13:return this.errorText="SETTINGS.PASSWORD.OLD_ERROR",t.abrupt("break",20);case 15:return this.errorText="SETTINGS.PASSWORD.IDENTICAL",t.abrupt("break",20);case 17:return this.errorText="SETTINGS.PASSWORD.USED",t.abrupt("break",20);case 19:this.errorText=t.t0.description;case 20:return t.prev=20,this.isLoading=!1,t.finish(20);case 23:case"end":return t.stop()}}),t,this,[[1,8,20,23]])})))}},{key:"showSuccessModal",value:function(){return Object(T.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.modalService.open(Oe.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0}),e.prev=1,e.next=4,t.result;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,this,[[1,6]])})))}}]),e}(),Ie.\u0275fac=function(e){return new(e||Ie)(u.Qb(F.b),u.Qb(Pe.q))},Ie.\u0275cmp=u.Kb({type:Ie,selectors:[["j-settings-password"]],viewQuery:function(e,t){var i;1&e&&u.Vc(Ee,!0),2&e&&u.Bc(i=u.jc())&&(t.newPassword=i.first)},decls:6,vars:3,consts:[[1,"row"],[1,"col-md-8","col-lg-7","col-xl-5"],[1,"password","my-4"],["translate","SETTINGS.PASSWORD.DESCRIPTION",1,"p2","mb-4"],[3,"isOldShown","isLoading","errorText","submitted"],["newPassword",""]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"div",1),u.Wb(2,"div",2),u.Rb(3,"div",3),u.Wb(4,"j-new-password",4,5),u.ic("submitted",(function(e){return t.onSubmit(e)})),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Ab(4),u.rc("isOldShown",!0)("isLoading",t.isLoading)("errorText",t.errorText))},directives:[p.a,Re.a],styles:[""]}),Ie)},{path:"**",redirectTo:"main"}]}],Ve=((Ce=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:Ce}),Ce.\u0275inj=u.Nb({factory:function(e){return new(e||Ce)},imports:[[l.g.forChild(We)],l.g]}),Ce);i("qcJj"),i("/Fsc"),i.d(t,"SettingsModule",(function(){return Me}));var Ne,Me=((Ne=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:Ne}),Ne.\u0275inj=u.Nb({factory:function(e){return new(e||Ne)},imports:[[a.c,c.a,Ve,o.n,o.D]]}),Ne)}}]);