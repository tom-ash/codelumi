(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{231:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n};function o(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var a=E(t(0)),r=t(4),c=t(389),u=y(t(390)),s=t(8),d=y(t(391)),l=t(9),p=E(t(30)),m=t(392);t(393);var x=t(395),h=t(396),g=t(397),f=t(398),b=t(399),v=t(240),w=t(13);function y(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function E(n){return n&&n.__esModule?n:{default:n}}var k=(function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(P,a.default.Component),i(P,[{key:"render",value:function(){var t=this;return a.default.createElement("div",{id:"announcement-index-list"},this.props.beingDeleted&&a.default.createElement("div",{className:"delete"},a.default.createElement("div",{className:"cover"}),a.default.createElement("div",{className:"monit"},a.default.createElement("div",{className:"text"},this.languageHandler("Usunięte ogłoszenie nie może być przywrócone. Czy na pewno chcesz usunąć ogłoszenie Nr "+this.props.beingDeleted+". ","The deleted announcement cannot be restored. Are you sure you want to delete the announcement No. "+this.props.beingDeleted)),a.default.createElement(l.ManagedButton,this.cancelDestroyManager()),a.default.createElement(l.ManagedButton,this.destroyManager()),a.default.createElement("div",{className:"float-clear"}))),a.default.createElement("div",{className:"announcements-amount"},this.props.amount," ",this.languageHandler("Ogłoszenia","Announcements")),a.default.createElement("div",{className:"pagination-container"},a.default.createElement(l.ManagedPagination,this.paginationManager())),a.default.createElement("div",{className:"announcements"},this.props.announcements&&this.props.announcements.map(function(n,e){return a.default.createElement(p.default,{key:""+n.id,index:e,first:0==e,last:e==t.props.announcements.length-1,venue:"list",announcement:n,announcements:t.props.announcements,control:t.controlProvider(n,e),changeAnnouncement:t.props.changeAnnouncement})}),a.default.createElement("div",{className:"float-clear"})),a.default.createElement("div",{className:"pagination-container bottom"},a.default.createElement(l.ManagedPagination,this.paginationManager())))}}]),P);function P(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,P);var e=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,n));return e.languageHandler=s.languageHandler.bind(e),e.languageObjectHandler=s.languageObjectHandler.bind(e),e.componentDidMount=u.componentDidMount,e.componentDidUpdate=u.componentDidUpdate,e.componentWillUnmount=u.componentWillUnmount,e.controlProvider=m.controlProvider.bind(e),e.buttonProvider=x.buttonProvider.bind(e),e.edit=b.edit.bind(e),e.triggerVisible=h.triggerVisible.bind(e),e.destroy=f.destroy.bind(e),e.pageHeaderProvider=v.pageHeaderProvider.bind(e),e.sectionHeaderProvider=v.sectionHeaderProvider.bind(e),e.paginationManager=d.paginationManager.bind(e),e.destroyManager=d.destroyManager.bind(e),e.cancelDestroyManager=d.cancelDestroyManager.bind(e),e.extend=g.extend.bind(e),e.changeRoute=w.changeRoute.bind(e),e}e.default=(0,r.connect)(c.mapStateToProps,c.mapDispatchToProps)(k)},240:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pageHeaderProvider=function(n,e){return a.default.createElement("h2",{className:"page-header"},a.default.createElement("i",{className:n}),this.languageObjectHandler(e))},e.sectionHeaderProvider=function(n,e){return a.default.createElement("h3",{className:"section-header"},a.default.createElement("i",{className:n}),this.languageObjectHandler(e))};var i,o=t(0),a=(i=o)&&i.__esModule?i:{default:i}},389:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.mapStateToProps=function(n){var e=n.app.language,t=n.announcement.index.control,i=t.connecting,o=t.fetch,a=t.beingDeleted,r=n.announcement.index.inputs,c=(r.page,r.switches),u=r.sort,s=r.offset,d=n.announcement.index.data;return{language:e,connecting:i,fetch:o,beingDeleted:a,offset:s,switches:c,sort:u,amount:d.amount,announcements:d.announcements}},e.mapDispatchToProps=function(e){return{changeApp:function(n){return e({type:"app",value:n})},changeControl:function(n){return e({type:"announcement/index/control",value:n})},changeData:function(n){return e({type:"announcement/index/data",value:n})},changeInputs:function(n){return e({type:"announcement/index/inputs",value:n})},changeAnnouncement:function(n){return e({type:"announcement/index/data/announcements",value:n})},resetControl:function(n){return e({type:"announcement/index/control/list/reset",value:n})},resetInputs:function(n){return e({type:"announcement/index/inputs/list/reset",value:n})},resetData:function(n){return e({type:"announcement/index/data/list/reset",value:n})}}}},390:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.componentDidMount=function(){},e.componentDidUpdate=function(n){},e.componentWillUnmount=function(){var n=this.props,e=n.resetControl,t=n.resetInputs,i=n.resetData;e(),t(),i()}},391:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.paginationManager=function(){var n=this.props,e=n.offset,t=n.amount,i=n.connecting,o=n.changeControl,a=n.changeInputs;return{classNames:{container:"list-pagination"},display:10<t?"inline-block":"none",current:e/10+1,resultsPerPage:10,resultAmount:+t,onClick:function(n){i||(o({fetch:!0}),a({offset:10*n-10}),window.scrollTo(0,0))}}},e.destroyManager=function(){var n=this;return{classNames:{container:"form-input button destroy"},label:this.languageHandler("Tak","Yes"),onClick:function(){return n.destroy(n.props.beingDeleted)}}},e.cancelDestroyManager=function(){var n=this;return{classNames:{container:"form-input button cancel"},label:this.languageHandler("Anuluj","Cancel"),onClick:function(){return n.props.changeControl({beingDeleted:null})}}}},392:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.controlProvider=function(n,e){var t=this;return a.default.createElement("div",{className:"control small-shadow"},a.default.createElement("div",{className:"active"},this.languageObjectHandler({pl:"Aktywne do ",en:"Active until "})," ",a.default.createElement("strong",null,n.activeUntil),this.buttonProvider("Przedłuż","Extend",n,e,this.extend," extend")),a.default.createElement("div",{className:"info-pieces"},a.default.createElement("div",{className:"info"},n.visible?a.default.createElement("span",null,a.default.createElement("i",{className:"far fa-eye"})," ",this.languageHandler("Widoczne","Visible")):a.default.createElement("span",null,a.default.createElement("i",{className:"far fa-eye-slash"})," ",this.languageHandler("Ukryte","Hidden"))),a.default.createElement("div",{className:"info"},a.default.createElement("i",{className:"fas fa-plus"}),n.createdAt.slice(0,10)),a.default.createElement("div",{className:"info"},a.default.createElement("i",{className:"fas fa-sync-alt"}),n.updatedAt.slice(0,10)),a.default.createElement("div",{className:"info"},a.default.createElement("i",{className:"fas fa-users"}),n.views),a.default.createElement("div",{className:"float-clear"})),this.buttonProvider("Edytuj","Edit",n,e,this.edit," edit"),n.visible?this.buttonProvider("Ukryj","Hide",n,e,this.triggerVisible," hide-show"):this.buttonProvider("Pokaż","Show",n,e,this.triggerVisible," hide-show"),this.buttonProvider("Usuń","Delete",n,e,function(){return t.props.changeControl({beingDeleted:n.id})}," delete"),a.default.createElement("div",{className:"float-clear"}))};var i,o=t(0),a=(i=o)&&i.__esModule?i:{default:i}},393:function(n,e,t){var i=t(394);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0};t(6)(i,o);i.locals&&(n.exports=i.locals)},394:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#announcement-index-list .announcements .announcement-index-tile .primary {\n  position: relative;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  height: 60px;\n  background: #F8F9F9; }\n  #announcement-index-list .announcements .announcement-index-tile .primary .id {\n    position: absolute;\n    top: -32px;\n    background: white;\n    height: 24px;\n    line-height: 24px;\n    font-size: 14px;\n    padding: 0 4px;\n    border-radius: 2.5px; }\n  #announcement-index-list .announcements .announcement-index-tile .primary .left-container {\n    float: left;\n    height: 100%;\n    position: relative;\n    width: 50%; }\n  #announcement-index-list .announcements .announcement-index-tile .primary .right-container {\n    float: left;\n    height: 100%;\n    position: relative;\n    width: 50%; }\n  #announcement-index-list .announcements .announcement-index-tile .primary .data-tile.category, #announcement-index-list .announcements .announcement-index-tile .primary .data-tile.district {\n    height: 36px;\n    line-height: 36px;\n    text-align: center;\n    top: 12px; }\n\n#announcement-index-list .announcements .announcement-index-tile .picture {\n  position: relative;\n  background: #D7DBDD;\n  background-size: 100%;\n  cursor: pointer; }\n  #announcement-index-list .announcements .announcement-index-tile .picture .phone {\n    position: absolute;\n    top: 6px;\n    right: 6px;\n    height: 36px;\n    width: 36px;\n    border-radius: 18px;\n    background: rgba(236, 240, 241, 0.96);\n    white-space: nowrap;\n    overflow: hidden; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .phone.open {\n      width: 190px;\n      transition: 0.72s ease-out; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .phone .fa-phone {\n      height: 36px;\n      width: 36px;\n      font-size: 18px;\n      color: #FBFCFC;\n      background: #28B463;\n      border-radius: 18px;\n      line-height: 36px;\n      text-align: center;\n      opacity: 0.92;\n      margin-right: 12px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .phone a {\n      display: inline; }\n  #announcement-index-list .announcements .announcement-index-tile .picture .arrow {\n    user-select: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 56px;\n    height: 96px;\n    margin: auto;\n    color: rgba(255, 255, 255, 0.88);\n    font-size: 24px;\n    cursor: pointer; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .arrow:hover {\n      color: white; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .arrow.right {\n      right: 0;\n      text-align: right; }\n      #announcement-index-list .announcements .announcement-index-tile .picture .arrow.right .cover {\n        right: 6px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .arrow.left {\n      left: 0; }\n      #announcement-index-list .announcements .announcement-index-tile .picture .arrow.left .cover {\n        left: 6px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .arrow .cover {\n      background: rgba(0, 0, 0, 0.32);\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      height: 36px;\n      width: 36px;\n      margin: auto;\n      text-align: center;\n      line-height: 36px;\n      border-radius: 2.5px; }\n  #announcement-index-list .announcements .announcement-index-tile .map.picture {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  #announcement-index-list .announcements .announcement-index-tile .picture .district, #announcement-index-list .announcements .announcement-index-tile .picture .calendar {\n    position: absolute;\n    left: 6px;\n    font-size: 15px;\n    color: #D0D3D4;\n    padding: 4px 6px;\n    border-radius: 2.5px;\n    background: rgba(0, 0, 0, 0.72);\n    padding-left: 28px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .district.district, #announcement-index-list .announcements .announcement-index-tile .picture .calendar.district {\n      top: 6px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .district.calendar, #announcement-index-list .announcements .announcement-index-tile .picture .calendar.calendar {\n      bottom: 6px; }\n    #announcement-index-list .announcements .announcement-index-tile .picture .district .fas, #announcement-index-list .announcements .announcement-index-tile .picture .calendar .fas {\n      position: absolute;\n      left: 8px;\n      line-height: 15px;\n      font-size: 10px;\n      margin-right: 6px; }\n\n#announcement-index-list .announcements .announcement-index-tile .secondary-data {\n  position: relative;\n  background: #F8F9F9;\n  padding-bottom: 12px; }\n  #announcement-index-list .announcements .announcement-index-tile .secondary-data .data-container {\n    float: left;\n    height: 47px;\n    width: 50%;\n    position: relative; }\n    #announcement-index-list .announcements .announcement-index-tile .secondary-data .data-container.rent {\n      height: 108px; }\n      @media only screen and (max-width: 480px) {\n        #announcement-index-list .announcements .announcement-index-tile .secondary-data .data-container.rent {\n          height: 104px; } }\n\n#announcement-index-list .announcements .announcement-index-tile {\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: relative;\n  min-height: 430px;\n  min-width: 10px; }\n  #announcement-index-list .announcements .announcement-index-tile .close-button {\n    position: absolute;\n    top: -32px;\n    right: 0;\n    height: 24px;\n    width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    line-height: 24px; }\n  #announcement-index-list .announcements .loader.announcement-index-tile {\n    opacity: 0;\n    background: none; }\n\n#announcement-index-list .announcements .announcement-index-tile {\n  position: relative;\n  z-index: 3;\n  border-radius: 4px;\n  width: 400px;\n  margin-top: 96px; }\n  #announcement-index-list .announcements .announcement-index-tile .invisible {\n    opacity: 0.4; }\n  #announcement-index-list .announcements .last.announcement-index-tile {\n    margin-bottom: 72px; }\n  @media only screen and (max-width: 1224px) {\n    #announcement-index-list .announcements .announcement-index-tile {\n      width: 100%; } }\n  #announcement-index-list .announcements .announcement-index-tile .picture {\n    position: relative !important;\n    width: 100%;\n    height: 0;\n    background-size: 117.777% auto;\n    padding-bottom: 56.25246%;\n    border-radius: 0; }\n  #announcement-index-list .announcements .announcement-index-tile .control {\n    position: absolute;\n    background: #F2F3F4;\n    left: 412px;\n    top: 0;\n    bottom: 0;\n    width: 226px;\n    color: #2C3E50;\n    font-size: 16px;\n    padding: 12px 12px 0; }\n    @media only screen and (max-width: 1224px) {\n      #announcement-index-list .announcements .announcement-index-tile .control {\n        position: relative;\n        right: 0;\n        left: 0;\n        width: 100%;\n        box-shadow: none;\n        border-top: 1px solid lightgray;\n        height: 200px; } }\n    #announcement-index-list .announcements .announcement-index-tile .control .info-pieces .fas, #announcement-index-list .announcements .announcement-index-tile .control .info-pieces .far {\n      width: 24px; }\n    #announcement-index-list .announcements .announcement-index-tile .control .info-pieces .info {\n      margin-bottom: 12px;\n      font-size: 15px; }\n      @media only screen and (max-width: 1224px) {\n        #announcement-index-list .announcements .announcement-index-tile .control .info-pieces .info {\n          font-size: 14px; } }\n    #announcement-index-list .announcements .announcement-index-tile .control .button-container {\n      height: 32px;\n      position: absolute;\n      left: 12px;\n      right: 12px; }\n      @media only screen and (max-width: 1224px) {\n        #announcement-index-list .announcements .announcement-index-tile .control .button-container {\n          width: 100px;\n          right: 12px;\n          left: auto; } }\n      #announcement-index-list .announcements .announcement-index-tile .control .button-container.delete {\n        bottom: 12px; }\n      #announcement-index-list .announcements .announcement-index-tile .control .button-container.hide-show {\n        bottom: 56px; }\n      #announcement-index-list .announcements .announcement-index-tile .control .button-container.edit {\n        bottom: 100px; }\n      #announcement-index-list .announcements .announcement-index-tile .control .button-container .button {\n        width: 100%;\n        height: 100%;\n        border: none;\n        background: #3498DB;\n        color: white;\n        border-radius: 2.5px;\n        height: 32px;\n        margin-bottom: 12px;\n        font-size: 13px; }\n        #announcement-index-list .announcements .announcement-index-tile .control .button-container .button:hover {\n          background: rgba(52, 152, 219, 0.8); }\n  #announcement-index-list .announcements .announcement-index-tile .active {\n    width: 100%;\n    line-height: 36px;\n    text-align: center;\n    margin-bottom: 34px; }\n    @media only screen and (max-width: 1224px) {\n      #announcement-index-list .announcements .announcement-index-tile .active {\n        text-align: left;\n        font-size: 14px; } }\n    #announcement-index-list .announcements .announcement-index-tile .active .button-container {\n      position: relative;\n      left: 0;\n      right: 0; }\n      @media only screen and (max-width: 1224px) {\n        #announcement-index-list .announcements .announcement-index-tile .active .button-container {\n          position: absolute;\n          top: 12px;\n          right: 12px;\n          left: auto;\n          width: 100px;\n          font-size: 13px; } }\n      #announcement-index-list .announcements .announcement-index-tile .active .button-container .button {\n        width: 100%;\n        border-radius: 2.5px;\n        height: 32px;\n        margin: auto;\n        border: none;\n        font-size: 14px;\n        color: white;\n        background: #DC7633; }\n        #announcement-index-list .announcements .announcement-index-tile .active .button-container .button:hover {\n          background: rgba(220, 118, 51, 0.8); }\n\n.container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#announcement-index-list .list-pagination {\n  margin-top: 24px;\n  position: absolute;\n  right: 0;\n  height: 32px;\n  width: auto;\n  border-radius: 4px; }\n  #announcement-index-list .list-pagination .input {\n    background: #212F3D;\n    color: white;\n    border: none;\n    border-radius: 2.5px;\n    height: 32px;\n    width: 24px;\n    margin: 0 3px;\n    font-size: 14px; }\n    #announcement-index-list .list-pagination .input.current {\n      background: white;\n      color: #212F3D;\n      border: 1px solid #212F3D; }\n\n#announcement-index-list {\n  position: relative;\n  width: 640px;\n  margin: 0 auto; }\n  @media only screen and (max-width: 1224px) {\n    #announcement-index-list {\n      max-width: 456px;\n      width: 100%;\n      padding: 0 8px; } }\n  #announcement-index-list .announcements-amount {\n    margin-top: 24px;\n    background: #212F3D;\n    color: white;\n    display: inline-block;\n    padding: 8px;\n    border-radius: 2.5px;\n    position: absolute;\n    left: 0; }\n  #announcement-index-list .pagination-container {\n    min-height: 36px;\n    margin-left: 160px;\n    padding: 0; }\n  #announcement-index-list .announcements {\n    margin-top: 64px;\n    min-height: 480px;\n    text-align: left; }\n  #announcement-index-list .loading .list-pagination .input, #announcement-index-list .loading .list-pagination .arrow {\n    background: lightgray; }\n  #announcement-index-list .delete .cover {\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.24); }\n  #announcement-index-list .delete .monit {\n    z-index: 11;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 360px;\n    height: 138px;\n    background: white;\n    margin: auto;\n    border-radius: 2.5px;\n    padding: 12px;\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n    text-align: justify;\n    line-height: 22px; }\n    #announcement-index-list .delete .monit .text {\n      margin-bottom: 12px; }\n  #announcement-index-list .form-input.button {\n    display: block !important;\n    position: relative;\n    float: left;\n    height: 36px;\n    width: 49%;\n    margin: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n    #announcement-index-list .form-input.button .input {\n      font-size: 14px; }\n    #announcement-index-list .form-input.button.cancel {\n      margin-right: 2%; }\n      #announcement-index-list .form-input.button.cancel .input {\n        background: #979A9A; }\n        #announcement-index-list .form-input.button.cancel .input:hover {\n          background: rgba(151, 154, 154, 0.88); }\n    #announcement-index-list .form-input.button.destroy .input {\n      background: #943126; }\n      #announcement-index-list .form-input.button.destroy .input:hover {\n        background: rgba(148, 49, 38, 0.88); }\n",""])},395:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buttonProvider=function(n,e,t,i,o,a){return r.default.createElement("div",{className:"button-container"+(a||"")},r.default.createElement("button",{onClick:function(){return o(t,i)},className:"button"+(a||"")},this.languageHandler(n,e)))};var i,o=t(0),r=(i=o)&&i.__esModule?i:{default:i}},396:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n};e.triggerVisible=function(e,t){var i=this;if(this.props.connecting)return;this.props.changeControl({connecting:!0});var n=(0,r.getAccessToken)();fetch(a.apiUrl+"/announcements/"+e.id+"?attribute=visible",{method:"PUT",headers:{"Content-Type":"application/json",access_token:n},body:JSON.stringify({visible:!e.visible})}).then(function(n){n.ok&&i.props.changeData({announcements:function(n,e){var t=[].concat(function(n){{if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}}(this.props.announcements)),i=o({},n);return i.visible=!n.visible,t[e]=i,t}.call(i,e,t)}),i.props.changeControl({connecting:!1})})};var a=t(10),r=t(26)},397:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n};e.extend=function(e,t){var i=this;if(this.props.connecting)return;this.props.changeControl({connecting:!0});var n=(0,r.getAccessToken)();fetch(o.apiUrl+"/announcements/extend/"+e.id,{method:"PUT",headers:{"Content-Type":"application/json",access_token:n}}).then(function(n){if(n.ok)return n.json()}).then(function(n){i.props.changeData({announcements:function(n,e,t){var i=[].concat(function(n){{if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}}(this.props.announcements)),o=a({},e);return o.activeUntil=n.activeUntil,i[t]=o,i}.call(i,n,e,t)}),i.props.changeControl({connecting:!1})})};var o=t(10),r=t(26)},398:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.destroy=function(n){var e=this;if(this.props.connecting)return;this.props.changeControl({connecting:!0});var t=(0,o.getAccessToken)();fetch(i.apiUrl+"/announcements/"+n,{method:"DELETE",headers:{"Content-Type":"application/json",access_token:t}}).then(function(){e.props.changeControl({fetch:!0,connecting:!1,beingDeleted:null})})};var i=t(10),o=t(26)},399:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.edit=function(n){this.changeRoute({showAnnouncementIndexUser:!1,showAnnouncementEdit:!0,announcementId:n.id})}}}]);