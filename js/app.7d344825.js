(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a42cc1a8"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-pwa/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("router-link",{staticClass:"white--text mx-3 text-decoration-none",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"white--text mx-3 text-decoration-none",attrs:{to:"/about"}},[t._v("About")])],1),n("v-main",[n("router-view")],1),n("v-snackbar",{attrs:{timeout:"-1",color:"info",top:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"purple",text:""},on:{click:t.update}},"v-btn",r,!1),[t._v(" Update ")])]}}]),model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t._v(" "+t._s(t.text)+" ")])],1)},a=[],i={name:"App",data:function(){return{text:"New content is available, please update",registration:null,isRefresh:!1,refreshing:!1}},methods:{appUpdateUI:function(t){this.registration=t.detail,this.isRefresh=!0},update:function(){this.isRefresh=!1,(this.registration||this.registration.waiting)&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}},created:function(){var t=this;navigator.serviceWorker.addEventListener("controllerchange",(function(){t.refreshing||(t.refreshing=!0,window.location.reload())})),document.addEventListener("serviceWorkerUpdateEvent",this.appUpdateUI,{once:!0})}},s=i,c=n("2877"),u=n("6544"),l=n.n(u),f=n("7496"),p=n("40dc"),d=n("8336"),v=n("adda"),h=n("f6c4"),m=n("2db4"),g=n("2fa4"),y=Object(c["a"])(s,o,a,!1,null,null,null),b=y.exports;l()(y,{VApp:f["a"],VAppBar:p["a"],VBtn:d["a"],VImg:v["a"],VMain:h["a"],VSnackbar:m["a"],VSpacer:g["a"]});var w=n("9483");Object(w["a"])("".concat("/vue-pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("serviceWorkerUpdateEvent",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world",{attrs:{posts:t.posts}})},k=[],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-row",t._l(t.posts,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",lg:"4"}},[r("v-card",[r("v-card-title",[t._v(t._s(e.title))]),r("v-card-text",[t._v(t._s(e.body))])],1)],1)})),1)],1)],1)],1)},C=[],V={name:"HelloWorld",props:{posts:{type:Array}},data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},O=V,E=n("b0af"),A=n("99d9"),S=n("62ad"),P=n("a523"),T=n("0fd9"),I=Object(c["a"])(O,_,C,!1,null,null,null),M=I.exports;l()(I,{VCard:E["a"],VCardText:A["a"],VCardTitle:A["b"],VCol:S["a"],VContainer:P["a"],VImg:v["a"],VRow:T["a"]});var N=n("bc3a"),R=n.n(N),U={name:"Home",data:function(){return{posts:[]}},components:{HelloWorld:M},created:function(){var t=this;R.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t.posts=e.data})).catch((function(t){console.error(t)}))}},L=U,W=Object(c["a"])(L,j,k,!1,null,null,null),q=W.exports;r["a"].use(x["a"]);var H=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new x["a"]({mode:"history",base:"/vue-pwa/",routes:H}),B=$,F=n("2f62");r["a"].use(F["a"]);var J=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=n("f309");r["a"].use(D["a"]);var G=new D["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:B,store:J,vuetify:G,render:function(t){return t(b)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.7d344825.js.map