(function(e){function n(n){for(var o,i,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={index:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ccc073f4","chunk-2d0b59a6":"a0d1cc21","chunk-2d0b9d35":"e1e43a98","chunk-2d20813a":"e9ca0e2b","chunk-2d2086b7":"67b475d9"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=t("5f5b");t("ab8b"),t("2dd8");o["default"].use(r["a"]);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("navbar"),t("router-view")],1)},i=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",{attrs:{to:"/"}},[e._v("FloodFire News Explore")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:"List"}},[e._v("List")]),t("b-nav-item",{attrs:{to:"Login"}},[e._v("Login")])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v("User")])]},proxy:!0}])},[t("b-dropdown-item",{attrs:{to:"Admin"}},[e._v("Admin")]),t("b-dropdown-item",{attrs:{href:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)],1)},u=[],s={},l=s,d=t("2877"),f=Object(d["a"])(l,c,u,!1,null,null,null),b=f.exports,p={components:{navbar:b}},v=p,m=(t("5c0b"),Object(d["a"])(v,a,i,!1,null,null,null)),h=m.exports,g=t("9483");Object(g["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var w=t("8c4f"),y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("b-container",[t("b-row",[t("b-col",[t("b-jumbotron",{staticClass:"my-2",scopedSlots:e._u([{key:"header",fn:function(){return[e._v("FloodFire News Explore")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" The data explore tool for FloodFire News database ")]},proxy:!0}])},[t("hr",{staticClass:"my-4"}),t("p",[e._v(" CopyRight : FloodFire Lab ")]),t("b-button",{staticClass:"mx-1",attrs:{variant:"primary",href:"#"}},[e._v(" 前往新聞來源列表 ")]),t("b-button",{staticClass:"mx-1",attrs:{variant:"success",href:"#"}},[e._v(" 查看資料數據統計 ")])],1)],1)],1),t("b-row",{staticClass:"my-2"},[t("b-col",[t("h2",[e._v("新聞媒體列表")]),t("b-table",{attrs:{striped:"",hover:"",items:e.newsSources}})],1)],1),t("b-row",[t("b-col",[t("h2",[e._v("數據統計")])])],1),t("b-row",[t("b-col",[t("h3",[e._v("熱詞統計")])]),t("b-col",[t("h3",[e._v("資料庫相關數據統計")])])],1)],1)],1)},_=[],k={name:"Home",components:{},data:function(){return{newsSources:[{name:"中時",num:20},{name:"聯合",num:30}],database_stat_pie:{title:{text:"pie"}}}}},x=k,j=Object(d["a"])(x,y,_,!1,null,null,null),O=j.exports;o["default"].use(w["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-2d0b9d35").then(t.bind(null,"3530"))}},{path:"/list",name:"List",component:function(){return t.e("chunk-2d0b59a6").then(t.bind(null,"1a33"))}},{path:"/news",name:"News",component:function(){return t.e("chunk-2d20813a").then(t.bind(null,"a2f9"))}}],C=new w["a"]({routes:S}),F=C,E=t("2f62");o["default"].use(E["a"]);var L=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["default"].config.productionTip=!0,new o["default"]({router:F,store:L,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=index.2cb5dc1f.js.map