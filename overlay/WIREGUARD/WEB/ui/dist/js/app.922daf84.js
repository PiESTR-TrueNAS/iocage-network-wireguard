(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},s={app:0},n={app:0},o=[];function i(e){return c.p+"js/"+({"Clients~Server~Status":"Clients~Server~Status","Clients~Status":"Clients~Status",Clients:"Clients",Status:"Status",Server:"Server"}[e]||e)+"."+{"Clients~Server~Status":"34b04b53","Clients~Status":"7474b504",Clients:"aa5b2e25",Status:"31c05cf8",Server:"c8932dfc"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"Clients~Server~Status":1,"Clients~Status":1,Clients:1,Server:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var a="css/"+({"Clients~Server~Status":"Clients~Server~Status","Clients~Status":"Clients~Status",Clients:"Clients",Status:"Status",Server:"Server"}[e]||e)+"."+{"Clients~Server~Status":"a4596a99","Clients~Status":"146b1a15",Clients:"79445d5c",Status:"31d6cfe0",Server:"d3de4bc2"}[e]+".css",n=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],f.parentNode.removeChild(f),r(o)},f.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"29bf":function(e,t,r){"use strict";const a="token",s="client_id",n=()=>window.localStorage.getItem(a),o=e=>{window.localStorage.setItem(a,e)},i=()=>{window.localStorage.removeItem(a)},c=()=>window.localStorage.getItem(s),l=e=>{window.localStorage.setItem(s,e)},u=()=>{window.localStorage.removeItem(s)};t["a"]={getToken:n,saveToken:o,destroyToken:i,getClientId:c,saveClientId:l,destroyClientId:u}},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("Notification",{attrs:{notification:e.notification}}),this.isAuthenticated?r("div",[r("Header"),r("v-content",[r("v-container",[r("router-view")],1)],1),r("Footer")],1):e._e()],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-snackbar",{attrs:{right:!0,top:!0,color:e.notification.color},model:{value:e.notification.show,callback:function(t){e.$set(e.notification,"show",t)},expression:"notification.show"}},[e._v(" "+e._s(e.notification.text)+" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.notification.show=!1}}},[e._v(" Close ")])],1)},i=[],c={name:"Notification",props:["notification"],data:()=>({})},l=c,u=r("2877"),d=r("6544"),f=r.n(d),h=r("8336"),m=r("2db4"),v=Object(u["a"])(l,o,i,!1,null,null,null),b=v.exports;f()(v,{VBtn:h["a"],VSnackbar:m["a"]});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-app-bar",{attrs:{app:""}},[a("img",{staticClass:"mr-3",attrs:{src:r("cf05"),height:"50",alt:"Wg Gen Web"}}),a("v-toolbar-title",{attrs:{to:"/"}},[e._v("Wg Gen Web")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{to:"/clients"}},[e._v(" Clients "),a("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-account-network-outline")])],1),a("v-btn",{attrs:{to:"/server"}},[e._v(" Server "),a("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-vpn")])],1),a("v-btn",{attrs:{to:"/status"}},[e._v(" Status "),a("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-chart-bar")])],1)],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:""}},r),[a("v-icon",[e._v("mdi-account-circle")])],1)]}}])},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[e._v("connected as")]),a("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(e.user.name))]),a("v-list-item-subtitle",[e._v("Email: "+e._s(e.user.email))]),a("v-list-item-subtitle",[e._v("Issuer: "+e._s(e.user.issuer))]),a("v-list-item-subtitle",[e._v("Issued at: "+e._s(e._f("formatDate")(e.user.issuedAt)))])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{small:""},on:{click:function(t){return e.logout()}}},[e._v(" logout "),a("v-icon",{attrs:{small:"",right:"",dark:""}},[e._v("mdi-logout")])],1)],1)],1)],1)],1)],1)},p=[],j=r("2f62"),S={name:"Header",computed:{...Object(j["c"])({user:"auth/user"})},methods:{...Object(j["b"])("auth",{logout:"logout"})}},_=S,C=r("40dc"),w=r("b0af"),y=r("99d9"),k=r("a523"),A=r("132d"),x=r("da13"),E=r("5d23"),I=r("e449"),O=r("2fa4"),T=r("2a7f"),V=Object(u["a"])(_,g,p,!1,null,null,null),z=V.exports;f()(V,{VAppBar:C["a"],VBtn:h["a"],VCard:w["a"],VCardActions:y["a"],VContainer:k["a"],VIcon:A["a"],VListItem:x["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMenu:I["a"],VSpacer:O["a"],VToolbarItems:T["a"],VToolbarTitle:T["b"]});var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-footer",{attrs:{app:""}},[r("v-row",{attrs:{justify:"start","no-gutters":""}},[r("v-col",{attrs:{cols:"12",lg:"6",md:"12",sm:"12"}},[r("div",{attrs:{align:e.$vuetify.breakpoint.smAndDown?"center":"left"}},[r("small",[e._v("Copyright © "+e._s((new Date).getFullYear())+", Wg Gen Web. ")]),r("small",[e._v("This work is licensed under "),r("a",{staticClass:"pr-1 pl-1",attrs:{href:"http://www.wtfpl.net/",target:"_blank"}},[e._v("WTFPL License.")])])])])],1),r("v-row",{attrs:{justify:"end","no-gutters":""}},[r("v-col",{attrs:{cols:"12",lg:"6",md:"12",sm:"12"}},[r("div",{attrs:{align:e.$vuetify.breakpoint.smAndDown?"center":"right"}},[r("small",[e._v("Created with")]),r("v-icon",{staticClass:"pr-1 pl-1"},[e._v("mdi-heart")]),r("span",[e._v("by")]),r("a",{staticClass:"pr-2 pl-1",attrs:{href:"mailto:vx3r@127-0-0-1.fr"}},[e._v("vx3r")]),r("a",{attrs:{href:"https://github.com/vx3r/wg-gen-web/commit/"+e.version}},[r("kbd",[e._v("Version: "+e._s(e.version.substring(0,7)))])])],1)])],1)],1)],1)},U=[],Q={name:"Footer",data:()=>({}),computed:{...Object(j["c"])({version:"server/version"})},mounted(){this.versionServer()},methods:{...Object(j["b"])("server",{versionServer:"version"})}},q=Q,P=r("62ad"),R=r("553a"),D=r("0fd9"),L=Object(u["a"])(q,$,U,!1,null,null,null),B=L.exports;f()(L,{VCol:P["a"],VContainer:k["a"],VFooter:R["a"],VIcon:A["a"],VRow:D["a"]});var N={name:"App",components:{Footer:B,Header:z,Notification:b},data:()=>({notification:{show:!1,color:"",text:""}}),computed:{...Object(j["c"])({isAuthenticated:"auth/isAuthenticated",authStatus:"auth/authStatus",authRedirectUrl:"auth/authRedirectUrl",authError:"auth/error",clientError:"client/error",serverError:"server/error"})},created(){this.$vuetify.theme.dark=!0},mounted(){this.$route.query.code&&this.$route.query.state?this.oauth2_exchange({code:this.$route.query.code,state:this.$route.query.state}):this.oauth2_url()},watch:{authError(e,t){console.log(e),this.notify("error",e)},clientError(e,t){console.log(e),this.notify("error",e)},serverError(e,t){console.log(e),this.notify("error",e)},isAuthenticated(e,t){console.log(`Updating isAuthenticated from ${t} to ${e}`),!0===e&&this.$router.push("/clients")},authStatus(e,t){console.log(`Updating authStatus from ${t} to ${e}`),"redirect"===e&&window.location.replace(this.authRedirectUrl)}},methods:{...Object(j["b"])("auth",{oauth2_exchange:"oauth2_exchange",oauth2_url:"oauth2_url"}),notify(e,t){this.notification.show=!0,this.notification.color=e,this.notification.text=t}}},W=N,F=r("7496"),H=r("a75b"),M=Object(u["a"])(W,s,n,!1,null,null,null),Y=M.exports;f()(M,{VApp:F["a"],VContainer:k["a"],VContent:H["a"]});var G=r("8c4f"),J=r("c5fa"),K=r("29bf");const X={error:null,user:null,authStatus:"",authRedirectUrl:""},Z={error(e){return e.error},user(e){return e.user},isAuthenticated(e){return null!==e.user},authRedirectUrl(e){return e.authRedirectUrl},authStatus(e){return e.authStatus}},ee={user({commit:e}){J["a"].get("/auth/user").then(t=>{e("user",t)}).catch(t=>{e("error",t),e("logout")})},oauth2_url({commit:e,dispatch:t}){if(K["a"].getToken())return J["a"].setHeader(),void t("user");J["a"].get("/auth/oauth2_url").then(r=>{"_magic_string_fake_auth_no_redirect_"===r.codeUrl?(console.log("server report oauth2 is disabled, fake exchange"),e("authStatus","disabled"),K["a"].saveClientId(r.clientId),t("oauth2_exchange",{code:"",state:r.state})):(e("authStatus","redirect"),e("authRedirectUrl",r))}).catch(t=>{e("authStatus","error"),e("error",t),e("logout")})},oauth2_exchange({commit:e,dispatch:t},r){r.clientId=K["a"].getClientId(),J["a"].post("/auth/oauth2_exchange",r).then(r=>{e("authStatus","success"),e("token",r),t("user")}).catch(t=>{e("authStatus","error"),e("error",t),e("logout")})},logout({commit:e}){J["a"].get("/auth/logout").then(t=>{e("logout")}).catch(t=>{e("authStatus",""),e("error",t),e("logout")})}},te={error(e,t){e.error=t},authStatus(e,t){e.authStatus=t},authRedirectUrl(e,t){e.authRedirectUrl=t.codeUrl,K["a"].saveClientId(t.clientId)},token(e,t){K["a"].saveToken(t),J["a"].setHeader(),K["a"].destroyClientId()},user(e,t){e.user=t},logout(e){e.user=null,K["a"].destroyToken(),K["a"].destroyClientId()}};var re={namespaced:!0,state:X,getters:Z,actions:ee,mutations:te},ae=r("7ba5");const se={error:null,server:null,config:"",version:"_ci_build_not_run_properly_"},ne={error(e){return e.error},server(e){return e.server},version(e){return e.version},config(e){return e.config}},oe={error({commit:e},t){e("error",t)},read({commit:e,dispatch:t}){J["a"].get("/server").then(r=>{e("server",r),t("config")}).catch(t=>{e("error",t)})},update({commit:e},t){J["a"].patch("/server",t).then(t=>{e("server",t)}).catch(t=>{e("error",t)})},config({commit:e}){J["a"].getWithConfig("/server/config",{responseType:"arraybuffer"}).then(t=>{e("config",t)}).catch(t=>{e("error",t)})},version({commit:e}){J["a"].get("/server/version").then(t=>{e("version",t.version)}).catch(t=>{e("error",t)})}},ie={error(e,t){e.error=t},server(e,t){e.server=t},config(e,t){e.config=t},version(e,t){e.version=t}};var ce={namespaced:!0,state:se,getters:ne,actions:oe,mutations:ie};const le={error:null,enabled:!1,interfaceStatus:null,clientStatus:[],version:"_ci_build_not_run_properly_"},ue={error(e){return e.error},enabled(e){return e.enabled},interfaceStatus(e){return e.interfaceStatus},clientStatus(e){return e.clientStatus},version(e){return e.version}},de={error({commit:e},t){e("error",t)},read({commit:e}){J["a"].get("/status/interface").then(t=>{e("interfaceStatus",t)}).catch(t=>{e("interfaceStatus",null),e("error",t)}),J["a"].get("/status/clients").then(t=>{e("clientStatus",t)}).catch(t=>{e("clientStatus",[]),e("error",t)})},isEnabled({commit:e}){J["a"].get("/status/enabled").then(t=>{e("enabled",t)}).catch(t=>{e("enabled",!1),e("error",t.response.data)})}},fe={error(e,t){e.error=t},enabled(e,t){e.enabled=t},interfaceStatus(e,t){e.interfaceStatus=t},clientStatus(e,t){e.clientStatus=t},version(e,t){e.version=t}};var he={namespaced:!0,state:le,getters:ue,actions:de,mutations:fe};a["a"].use(j["a"]);var me=new j["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:re,client:ae["a"],server:ce,status:he}});a["a"].use(G["a"]);const ve=[{path:"/clients",name:"clients",component:function(){return Promise.all([r.e("Clients~Server~Status"),r.e("Clients~Status"),r.e("Clients")]).then(r.bind(null,"58f3"))},meta:{requiresAuth:!0}},{path:"/server",name:"server",component:function(){return Promise.all([r.e("Clients~Server~Status"),r.e("Server")]).then(r.bind(null,"1d74"))},meta:{requiresAuth:!0}},{path:"/status",name:"status",component:function(){return Promise.all([r.e("Clients~Server~Status"),r.e("Clients~Status"),r.e("Status")]).then(r.bind(null,"9989"))},meta:{requiresAuth:!0}}],be=new G["a"]({mode:"history",base:"/",routes:ve});be.beforeEach((e,t,r)=>{if(e.matched.some(e=>e.meta.requiresAuth)){if(me.getters["auth/isAuthenticated"])return void r();r("/")}else r()});var ge=be,pe=r("f309");a["a"].use(pe["a"]);var je=new pe["a"]({}),Se=r("c1df"),_e=r.n(Se),Ce=r("2ead"),we=r.n(Ce);_e.a.locale("en"),a["a"].use(we.a,{moment:_e.a}),a["a"].filter("formatDate",(function(e){return e?_e()(String(e)).format("YYYY-MM-DD HH:mm"):""}));const ye=r("e748"),ke={install(){a["a"].isCidr=ye,a["a"].prototype.$isCidr=ye}};a["a"].use(ke);var Ae=r("bc3a"),xe=r.n(Ae),Ee=r("a7fe"),Ie=r.n(Ee);a["a"].use(Ie.a,xe.a);let Oe="/api/v1.0";a["a"].axios.defaults.baseURL=Oe,a["a"].axios.interceptors.response.use((function(e){return e}),(function(e){if(401!==e.response.status)return Promise.reject(e);K["a"].destroyToken(),K["a"].destroyClientId(),window.location="/"})),a["a"].config.productionTip=!0,new a["a"]({router:ge,store:me,vuetify:je,render:function(e){return e(Y)}}).$mount("#app")},"7ba5":function(e,t,r){"use strict";(function(e){var a=r("c5fa");const s={error:null,clients:[],clientQrcodes:[],clientConfigs:[]},n={error(e){return e.error},clients(e){return e.clients},getClientQrcode:e=>t=>{let r=e.clientQrcodes.find(e=>e.id===t);return r?r.qrcode:"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="},getClientConfig:e=>t=>{let r=e.clientConfigs.find(e=>e.id===t);return r?r.config:null}},o={error({commit:e},t){e("error",t)},readAll({commit:e,dispatch:t}){a["a"].get("/client").then(r=>{e("clients",r),t("readQrcodes"),t("readConfigs")}).catch(t=>{e("error",t)})},create({commit:e,dispatch:t},r){a["a"].post("/client",r).then(r=>{t("readQrcode",r),t("readConfig",r),e("create",r)}).catch(t=>{e("error",t)})},update({commit:e,dispatch:t},r){a["a"].patch("/client/"+r.id,r).then(r=>{t("readQrcode",r),t("readConfig",r),e("update",r)}).catch(t=>{e("error",t)})},delete({commit:e},t){a["a"].delete("/client/"+t.id).then(()=>{e("delete",t)}).catch(t=>{e("error",t)})},email({commit:e},t){a["a"].get(`/client/${t.id}/email`).then(()=>{}).catch(t=>{e("error",t)})},readQrcode({state:t,commit:r},s){a["a"].getWithConfig(`/client/${s.id}/config?qrcode=true`,{responseType:"arraybuffer"}).then(t=>{let a=e.from(t,"binary").toString("base64");r("clientQrcodes",{client:s,image:a})}).catch(e=>{r("error",e)})},readConfig({state:e,commit:t},r){a["a"].getWithConfig(`/client/${r.id}/config?qrcode=false`,{responseType:"arraybuffer"}).then(e=>{t("clientConfigs",{client:r,config:e})}).catch(e=>{t("error",e)})},readQrcodes({state:e,dispatch:t}){e.clients.forEach(e=>{t("readQrcode",e)})},readConfigs({state:e,dispatch:t}){e.clients.forEach(e=>{t("readConfig",e)})}},i={error(e,t){e.error=t},clients(e,t){e.clients=t},create(e,t){e.clients.push(t)},update(e,t){let r=e.clients.findIndex(e=>e.id===t.id);-1!==r?(e.clients.splice(r,1),e.clients.push(t)):e.error="update client failed, not in list"},delete(e,t){let r=e.clients.findIndex(e=>e.id===t.id);-1!==r?e.clients.splice(r,1):e.error="delete client failed, not in list"},clientQrcodes(e,{client:t,image:r}){let a=e.clientQrcodes.findIndex(e=>e.id===t.id);-1!==a&&e.clientQrcodes.splice(a,1),e.clientQrcodes.push({id:t.id,qrcode:r})},clientConfigs(e,{client:t,config:r}){let a=e.clientConfigs.findIndex(e=>e.id===t.id);-1!==a&&e.clientConfigs.splice(a,1),e.clientConfigs.push({id:t.id,config:r})}};t["a"]={namespaced:!0,state:s,getters:n,actions:o,mutations:i}}).call(this,r("b639").Buffer)},c5fa:function(e,t,r){"use strict";var a=r("2b0e"),s=r("29bf");const n={setHeader(){a["a"].axios.defaults.headers["x-wg-gen-web-auth"]=""+s["a"].getToken()},get(e){return a["a"].axios.get(e).then(e=>e.data).catch(e=>{throw"undefined"!==typeof e.response?new Error(`${e.response.status} - ${e.response.statusText}: ${e.response.data}`):new Error("ApiService: "+e)})},post(e,t){return a["a"].axios.post(e,t).then(e=>e.data).catch(e=>{throw new Error("ApiService: "+e)})},put(e,t){return a["a"].axios.put(e,t).then(e=>e.data).catch(e=>{throw new Error("ApiService: "+e)})},patch(e,t){return a["a"].axios.patch(e,t).then(e=>e.data).catch(e=>{throw new Error("ApiService: "+e)})},delete(e){return a["a"].axios.delete(e).then(e=>e.data).catch(e=>{throw new Error("ApiService: "+e)})},getWithConfig(e,t){return a["a"].axios.get(e,t).then(e=>e.data).catch(e=>{throw new Error("ApiService: "+e)})}};t["a"]=n},cf05:function(e,t,r){e.exports=r.p+"img/logo.c77c66d1.png"}});
//# sourceMappingURL=app.922daf84.js.map