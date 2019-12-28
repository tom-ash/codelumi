(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{233:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e};function t(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=p(a(0)),i=a(4),s=a(442),l=a(8),u=p(a(443)),d=a(20);function p(e){return e&&e.__esModule?e:{default:e}}a(449);var c=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(m,o.default.Component),r(m,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.CloseButton,{classNames:"page narrow"}),o.default.createElement("div",{id:"user-authorize",className:"container narrow-container shadowed",onClick:function(e){return e.stopPropagation()}},o.default.createElement("h2",{className:"page-header"},o.default.createElement("i",{className:"fas fa-sign-in-alt"})," ",this.languageHandler("Logowanie","Signing In")),o.default.createElement(u.default,null)))}}]),m);function m(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,m);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,e));return n.languageHandler=l.languageHandler.bind(n),n}n.default=(0,i.connect)(s.mapStateToProps,s.mapDispatchToProps)(c)},237:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.inputs={businessName:{icon:"fas fa-ellipsis-h",label:{pl:"Nazwa (firma) Ogłoszeniodawcy",en:"Announcer Business Name"}},taxNumber:{icon:"fas fa-ellipsis-h",label:{pl:"Numer identifikacji podatkowej",en:"Tax Identification Number"}},phoneCode:{icon:"fas fa-phone",label:{pl:"ZZZ",en:"ZZZ"}},phone:{icon:"fas fa-phone",label:{pl:"Numer telefonu",en:"Phone number"}},email:{icon:"fas fa-envelope",label:{pl:"Adres email",en:"Email address"}},password:{icon:"fas fa-lock",label:{pl:"Hasło",en:"Password"}},verification:{icon:"fas fa-lock",label:{pl:"Kod weryfikacyjny",en:"Verification Code"}}}},238:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={passwordHashing:{keySize:32,iterations:128},emailRegex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,passwordRegex:/^\S{6,}$/,verificationCodeRegex:/^[a-zA-Z0-9]{8}$/}},239:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.connecting,a=e.label,r=e.languageObjectHandler;return n?t.default.createElement(o.default,{spinnerClass:"very-small-windmill-spinner"}):r(a)};var t=r(a(0)),o=r(a(48));function r(e){return e&&e.__esModule?e:{default:e}}},241:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.labelProvider=function(e,n){return o.default.createElement("span",null,o.default.createElement("i",{className:e}),o.default.createElement("span",{className:"text"},this.languageObjectHandler(n)))};var r,t=a(0),o=(r=t)&&r.__esModule?r:{default:r}},242:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hashPassword=function(e,n){var a=i.default.passwordHashing,r=a.keySize,t=a.iterations;return(0,o.default)(e,n,{keySize:r,iterations:t}).toString()},n.emailAddressValidator=function(e,n,a){return!!i.default.emailRegex.test(e)||(this.props[n](a),!1)};var o=r(a(253)),i=r(a(238));function r(e){return e&&e.__esModule?e:{default:e}}},245:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.emailValidator=function(e){var n=r.default.emailRegex.test(e),a=n?null:t.default.email;return{isValid:n,error:a}};var r=o(a(238)),t=o(a(251));function o(e){return e&&e.__esModule?e:{default:e}}},251:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={email:{pl:"nieprawidłowy adres email",en:"invalid email address"}}},256:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.saveTokens=function(e){var n=this.props.rememberMe?"ninetyDays":null;(0,r.saveCookie)("access_token",e,n)};var r=a(27)},442:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language,authorized:e.user.authorize.data.authorized}},n.mapDispatchToProps=function(n){return{changeApp:function(e){return n({type:"app",value:e})}}}},443:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e};function t(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o,i=a(0),s=(o=i)&&o.__esModule?o:{default:o},l=a(4),u=a(9),d=function(e){{if(e&&e.__esModule)return e;var n={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n.default=e,n}}(a(444)),p=a(445),c=a(446),m=a(8),f=a(241);a(447);var h=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(g,s.default.Component),r(g,[{key:"render",value:function(){var e=this;return s.default.createElement("div",{id:"user-authorize-email"},s.default.createElement("form",null,s.default.createElement(u.ManagedText,this.emailAddressManager()),s.default.createElement(u.ManagedText,this.passwordManager())),s.default.createElement("div",{className:"submit"},s.default.createElement(u.ManagedCheckbox,this.rememberMeManager()),s.default.createElement(u.ManagedButton,this.buttonManager())),s.default.createElement("div",{className:"reset-password"},s.default.createElement("span",{onClick:function(){e.props.changeApp({showUserAuthorize:!1,showUserEditPasswordReset:!0})}},this.languageObjectHandler({pl:"Zresetuj hasło",en:"Reset password"}))))}}]),g);function g(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,e));return n.emailAddressManager=d.emailAddressManager.bind(n),n.passwordManager=d.passwordManager.bind(n),n.rememberMeManager=d.rememberMeManager.bind(n),n.buttonManager=d.buttonManager.bind(n),n.logIn=p.logIn.bind(n),n.languageHandler=m.languageHandler.bind(n),n.languageObjectHandler=m.languageObjectHandler.bind(n),n.labelProvider=f.labelProvider.bind(n),n}n.default=(0,l.connect)(c.mapStateToProps,c.mapDispatchToProps)(h)},444:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.emailAddressManager=function(){var n=this,e=o.inputs.email,a=e.icon,r=e.label;return{id:"user-logon-email-address",controlled:!1,classNames:{container:"form-input text email"},label:this.languageObjectHandler(r),children:t.default.createElement("i",{className:a}),onChange:function(){return n.props.changeErrors({emailOrPassword:l})},onBlur:function(e){return n.emailAddressManager().validate(e)},validate:function(e){(0,i.emailValidator)(e).isValid||n.props.changeErrors({emailOrPassword:{pl:"nieprawidłowy adres email lub hasło",en:"invalid email address and/or password"}})},error:this.languageHandler(this.props.emailOrPasswordError.pl,this.props.emailOrPasswordError.en)}},n.passwordManager=function(){var n=this,e=o.inputs.password,a=e.icon,r=e.label;return{id:"user-logon-password",type:"password",controlled:!1,classNames:{container:"form-input text"},label:this.languageObjectHandler(r),children:t.default.createElement("i",{className:a}),onChange:function(){return n.props.changeErrors({emailOrPassword:l,email:l})},onBlur:function(e){return n.passwordManager().validate(e)},validate:function(e){return!(e.length<1)||(n.props.changeErrors({emailOrPassword:{pl:"nieprawidłowy adres email lub hasło",en:"invalid email address and/or password"}}),!1)},error:this.languageHandler(this.props.emailOrPasswordError.pl,this.props.emailOrPasswordError.en)}},n.rememberMeManager=function(){var e=this,n=this.props.rememberMe;return{classNames:{container:"form-input checkbox"},checked:this.props.rememberMe,label:this.languageHandler("Zapamiętaj mnie","Remember me"),onClick:function(){return e.props.changeInputs({rememberMe:!n})}}},n.buttonManager=function(){var e=this.props.connecting;return{classNames:{container:"form-input button"},label:t.default.createElement(r.default,{connecting:e,label:{pl:"Zaloguj",en:"Sign In"},languageObjectHandler:this.languageObjectHandler}),onClick:this.logIn}};var t=s(a(0)),o=a(237),r=s(a(239)),i=a(245);function s(e){return e&&e.__esModule?e:{default:e}}var l={pl:"",en:""}},445:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.logIn=function(){var n=this,e=document.getElementById("user-logon-email-address").value,a=document.getElementById("user-logon-password").value;this.props.changeControl({connecting:!0}),a=(0,r.hashPassword)(a,e),this.props.changeControl({connecting:!0}),fetch(t.apiUrl+"/authorize_with_email",{method:"PUT",headers:{"Content-Type":"application/json",emailAddress:e,password:a}}).then(function(e){if(200==e.status)return e.json();throw new Error("InvalidCredentials")}).then(function(e){n.props.changeData({authorized:!0,name:e.name,phoneVerified:e.phoneVerified}),o.saveTokens.call(n,e.accessToken),n.props.changeApp({showUserAuthorize:!1})}).catch(function(){n.props.changeErrors({emailOrPassword:{pl:"nieprawidłowy adres email lub hasło",en:"invalid email address and/or password"}})}).finally(function(){n.props.changeControl({connecting:!1})})};var r=a(242),t=a(10),o=a(256)},446:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language,connecting:e.user.authorize.control.connecting,emailError:e.user.authorize.errors.email,emailOrPasswordError:e.user.authorize.errors.emailOrPassword,rememberMe:e.user.authorize.inputs.rememberMe}},n.mapDispatchToProps=function(n){return{changeApp:function(e){return n({type:"app",value:e})},changeEditControl:function(e){return n({type:"user/edit/control",value:e})},changeControl:function(e){return n({type:"user/authorize/control",value:e})},changeInputs:function(e){return n({type:"user/authorize/inputs",value:e})},changeErrors:function(e){return n({type:"user/authorize/errors",value:e})},changeData:function(e){return n({type:"user/authorize/data",value:e})}}}},447:function(e,n,a){var r=a(448);"string"==typeof r&&(r=[[e.i,r,""]]);var t={hmr:!0,transform:void 0};a(6)(r,t);r.locals&&(e.exports=r.locals)},448:function(e,n,a){(e.exports=a(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#user-authorize-email .form-input.email {\n  margin-bottom: 12px; }\n  #user-authorize-email .form-input.email .error-container {\n    display: none; }\n\n#user-authorize-email .submit .checkbox {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  height: 36px; }\n  @media only screen and (max-width: 480px) {\n    #user-authorize-email .submit .checkbox {\n      position: relative;\n      height: 14px;\n      width: 100%;\n      margin-bottom: 24px; } }\n  #user-authorize-email .submit .checkbox .input {\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto 0; }\n  #user-authorize-email .submit .checkbox .label {\n    font-size: 14px;\n    line-height: 36px;\n    margin-left: 25px; }\n    @media only screen and (max-width: 480px) {\n      #user-authorize-email .submit .checkbox .label {\n        line-height: 14px; } }\n\n#user-authorize-email .submit .form-input.button {\n  position: relative;\n  display: block;\n  width: 50%;\n  height: 36px;\n  margin: 0 0 0 auto; }\n  @media only screen and (max-width: 480px) {\n    #user-authorize-email .submit .form-input.button {\n      width: 100%; } }\n  #user-authorize-email .submit .form-input.button .very-small-windmill-spinner {\n    left: -51px;\n    top: -51px; }\n    #user-authorize-email .submit .form-input.button .very-small-windmill-spinner div:after {\n      background: #F0F3F4; }\n\n#user-authorize-email .reset-password {\n  text-align: center;\n  font-size: 14px;\n  color: #566573;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #B2BABB; }\n  #user-authorize-email .reset-password span {\n    cursor: pointer; }\n",""])},449:function(e,n,a){var r=a(450);"string"==typeof r&&(r=[[e.i,r,""]]);var t={hmr:!0,transform:void 0};a(6)(r,t);r.locals&&(e.exports=r.locals)},450:function(e,n,a){(e.exports=a(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n",""])}}]);