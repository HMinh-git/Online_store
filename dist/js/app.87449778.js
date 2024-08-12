(function(){"use strict";var e={3074:function(e,t,n){var o=n(2829),r=n(5557),a=n(5539);const i={apiKey:"AIzaSyDqIi1wFUMTFeKA0TCdDU1JWeaQWmWOlC0",authDomain:"webbansach-f9994.firebaseapp.com",projectId:"webbansach-f9994",storageBucket:"webbansach-f9994.appspot.com",messagingSenderId:"655191171289",appId:"1:655191171289:web:b53f19cfe228456c199ec8",measurementId:"G-QDX2NDZ0FT"},c=(0,o.Wp)(i);(0,r.aU)(c),(0,a.c7)(c)},4082:function(e,t,n){var o=n(5130),r=n(6768);function a(e,t,n,o,a,i){const c=(0,r.g2)("navbarView"),u=(0,r.g2)("FooterView");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(c),(0,r.bF)(u)])}const i={class:"navbar navbar-expand-lg",style:{background:"#A9A9A9"}},c={class:"container"},u=(0,r.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r.Lk)("span",{class:"navbar-toggler-icon"})],-1),s=(0,r.Lk)("h1",null,"MinhBook",-1),l={class:"container-fluid"},d={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},p={class:"nav-item"},m=(0,r.eW)("Home"),h={class:"nav-item"},v=(0,r.eW)("Products"),b={class:"nav-item"},g=(0,r.eW)("My Products"),k={class:"nav-item"},y=(0,r.eW)("Log In"),C={class:"nav-item"},w=(0,r.eW)("Orders"),A={class:"nav-item"},L=(0,r.Lk)("i",{class:"fas fa-shopping-cart"},null,-1);function O(e,t,n,o,a,O){const S=(0,r.g2)("router-link"),F=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",i,[(0,r.Lk)("div",c,[u,(0,r.bF)(S,{to:"/",class:"text-uppercase nav-link"},{default:(0,r.k6)((()=>[s])),_:1}),(0,r.Lk)("div",l,[(0,r.Lk)("div",d,[(0,r.Lk)("ul",f,[(0,r.Lk)("li",p,[(0,r.bF)(S,{class:"nav-link active",style:{color:"white"},"aria-current":"page",to:"/"},{default:(0,r.k6)((()=>[m])),_:1})]),(0,r.Lk)("li",h,[(0,r.bF)(S,{class:"nav-link",to:"/products"},{default:(0,r.k6)((()=>[v])),_:1})]),(0,r.Lk)("li",b,[a.CheckAuth?((0,r.uX)(),(0,r.Wv)(S,{key:0,class:"nav-link",to:"/myproducts"},{default:(0,r.k6)((()=>[g])),_:1})):(0,r.Q3)("",!0)]),(0,r.Lk)("li",k,[null==a.CheckAuth?((0,r.uX)(),(0,r.Wv)(S,{key:0,class:"nav-link",to:"/login"},{default:(0,r.k6)((()=>[y])),_:1})):(0,r.Q3)("",!0)]),(0,r.Lk)("li",C,[a.CheckAuth?((0,r.uX)(),(0,r.Wv)(S,{key:0,class:"nav-link",to:"/orders"},{default:(0,r.k6)((()=>[w])),_:1})):(0,r.Q3)("",!0)]),(0,r.Lk)("li",A,[a.CheckAuth?((0,r.uX)(),(0,r.CE)("a",{key:0,class:"nav-link",style:{cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>O.logout&&O.logout(...e))},"Logout")):(0,r.Q3)("",!0)]),(0,r.Lk)("li",null,[(0,r.bF)(S,{id:"cart",to:"/cart",class:"cart","data-totalitems":O.count},{default:(0,r.k6)((()=>[L])),_:1},8,["data-totalitems"])])])])])])]),(0,r.bF)(F)],64)}n(3074);var S=n(0),F=n(228);const x=(0,S.xI)();var E={name:"NavbarView",data(){return{CheckAuth:null}},methods:{logout(){(0,S.CI)(x).then((()=>{localStorage.removeItem("uidUser"),F.A.push("/")})).catch((e=>{console.log(e)}))}},created(){(0,S.hg)(x,(e=>{this.CheckAuth=e||null}))},computed:{count(){return this.$store.state.count}}},N=n(1241);const j=(0,N.A)(E,[["render",O]]);var I=j;const T={class:"py-5 bg-dark"},_=(0,r.Lk)("div",{class:"container"},[(0,r.Lk)("p",{class:"m-0 text-center text-white"},"Copyright © Your Website 2024")],-1),W=[_];function q(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("footer",T,W)}var P={name:"FooterView"};const X=(0,N.A)(P,[["render",q]]);var D=X,M={name:"App",components:{NavbarView:I,FooterView:D}};const B=(0,N.A)(M,[["render",a]]);var Q=B,V=n(782);let H=localStorage.getItem("cart"),G=localStorage.getItem("count");var K=(0,V.y$)({state(){return{count:G?parseInt(G):0,cart:H?JSON.parse(H):[]}},getters:{},mutations:{addToCart(e,t){let n=e.cart.find((e=>e.key==t.key));n?(n.quantity++,n.totalPrice=n.quantity*n.price):(e.cart.push(t),e.count++),this.commit("saveCart")},removeFromCart(e,t){let n=e.cart.indexOf(t);n>-1&&(e.count--,e.cart.splice(n,1),e.cart.splice()),this.commit("saveCart")},decrementQuentity(e,t){let n=e.cart.find((e=>e.key==t.key));n&&n.quantity>1&&(n.quantity--,n.totalPrice=n.quantity*n.price),this.commit("saveCart")},saveCart(e){localStorage.setItem("cart",JSON.stringify(e.cart)),localStorage.setItem("count",e.count)},resetCart(e){e.cart=[],e.count=0,localStorage.setItem("cart",JSON.stringify(e.cart)),localStorage.setItem("count",e.count)}},actions:{},modules:{}});n(6213),n(2323);(0,o.Ef)(Q).use(K).use(F.A).mount("#app")},228:function(e,t,n){n.d(t,{A:function(){return y}});n(3074);var o=n(1387),r=n(0),a=n(6768);const i={class:"wrapper",style:{color:"var(--title-color)","text-align":"center",padding:"60px 0"}},c=(0,a.Lk)("h2",{style:{"font-size":"160px",color:"var(--title-color)","line-height":"1",margin:"0 0 25px"}}," 404 ",-1),u=(0,a.Lk)("div",null,null,-1),s=(0,a.Lk)("h4",null,"Sorry, The page you were looking for in Our site does not exist.",-1),l=(0,a.Lk)("br",null,null,-1);function d(e,t,n,o,r,d){return(0,a.uX)(),(0,a.CE)("div",i,[c,u,s,l,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",style:{background:"#39b5ff"},onClick:t[0]||(t[0]=(...e)=>d.GoToHome&&d.GoToHome(...e))}," GO BACK HOME ")])}var f={name:"NotFound",methods:{GoToHome(){y.push("/")}}},p=n(1241);const m=(0,p.A)(f,[["render",d]]);var h=m;const v=(0,r.xI)(),b=()=>new Promise(((e,t)=>{const n=(0,r.hg)(v,(t=>{n(),e(t)}),t)})),g=[{path:"/",name:"home",component:()=>n.e(949).then(n.bind(n,9016))},{path:"/signin",name:"signin",component:()=>n.e(549).then(n.bind(n,2549))},{path:"/:pathMatch(.*)*",name:"NotFound",component:h},{path:"/products",name:"products",component:()=>n.e(375).then(n.bind(n,7375))},{path:"/myproducts",name:"myproducts",component:()=>n.e(862).then(n.bind(n,9862)),meta:{requiresAuth:!0}},{path:"/products/:id",name:"details",component:()=>n.e(771).then(n.bind(n,6771))},{path:"/products/:id",name:"LinkNotFound",component:()=>n.e(448).then(n.bind(n,3448))},{path:"/login",name:"login",component:()=>n.e(941).then(n.bind(n,8941))},{path:"/logout",name:"logout",component:()=>n.e(949).then(n.bind(n,9016)),meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>n.e(603).then(n.bind(n,603))},{path:"/cart",name:"cart",component:()=>n.e(836).then(n.bind(n,9589))},{path:"/orders",name:"OrdersView",component:()=>n.e(222).then(n.bind(n,7222)),meta:{requiresAuth:!0}}],k=(0,o.aE)({history:(0,o.LA)("/"),routes:g});var y=k;k.beforeEach((async(e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!await b()?n("signin"):n()}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{222:"b926448c",375:"9e44ff67",448:"01874ae6",549:"3f1d9127",603:"42991dc1",771:"60ba433b",836:"cae30a6b",862:"74e17904",941:"048c7a10",949:"14cec987"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{222:"1bd8bb44",375:"67eec943",549:"ae17f6c2",771:"448f9386",862:"972bd9c2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="myprojectvuejs:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=c,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={222:1,375:1,549:1,771:1,862:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4082)}));o=n.O(o)})();
//# sourceMappingURL=app.87449778.js.map