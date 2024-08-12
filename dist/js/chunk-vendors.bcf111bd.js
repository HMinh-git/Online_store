(self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[]).push([[504],{4601:function(t,e,n){var r=n(8420),i=n(3838),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},7473:function(t,e,n){var r=n(8420),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5190:function(t,e,n){var r=n(7658),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},3938:function(t,e,n){var r=n(5335),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},9809:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},5343:function(t,e,n){"use strict";var r,i,s,o=n(9809),a=n(5077),c=n(200),u=n(8420),l=n(5335),h=n(6490),d=n(3062),f=n(3838),p=n(7712),g=n(7485),m=n(3610).f,v=n(7658),y=n(7970),_=n(9686),b=n(1602),w=n(665),E=n(9206),T=E.enforce,C=E.get,I=c.Int8Array,x=I&&I.prototype,S=c.Uint8ClampedArray,A=S&&S.prototype,k=I&&y(I),O=x&&y(x),N=Object.prototype,D=c.TypeError,R=b("toStringTag"),L=w("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=o&&!!_&&"Opera"!==d(c.opera),j=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(F,e)||h(U,e)},$=function(t){var e=y(t);if(l(e)){var n=C(e);return n&&h(n,P)?n[P]:$(e)}},B=function(t){if(!l(t))return!1;var e=d(t);return h(F,e)||h(U,e)},q=function(t){if(B(t))return t;throw D("Target is not a typed array")},H=function(t){if(u(t)&&(!_||v(k,t)))return t;throw D(f(t)+" is not a typed array constructor")},W=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:M&&x[t]||e,r)}},z=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(k[t]&&!n)return;try{return g(k,t,n?e:M&&k[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!M||!u(k)||k===Function.prototype)&&(k=function(){throw D("Incorrect invocation")},M))for(r in F)c[r]&&_(c[r],k);if((!M||!O||O===N)&&(O=k.prototype,M))for(r in F)c[r]&&_(c[r].prototype,O);if(M&&y(A)!==O&&_(A,O),a&&!h(O,R))for(r in j=!0,m(O,R,{get:function(){return l(this)?this[L]:void 0}}),F)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:j&&L,aTypedArray:q,aTypedArrayConstructor:H,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:$,isView:V,isTypedArray:B,TypedArray:k,TypedArrayPrototype:O}},447:function(t,e,n){var r=n(3493);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},8186:function(t,e,n){var r=n(5476),i=n(6539),s=n(3493),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},5582:function(t,e,n){var r=n(6885),i=n(8664),s=n(2612),o=n(3493),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},4033:function(t,e,n){var r=n(3493);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1867:function(t,e,n){var r=n(3493),i=n(9328),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},8569:function(t,e,n){var r=n(281),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},3062:function(t,e,n){var r=n(3129),i=n(8420),s=n(8569),o=n(1602),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},6820:function(t,e,n){var r=n(281),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},4361:function(t,e,n){var r=n(6490),i=n(5816),s=n(7632),o=n(3610);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7168:function(t,e,n){var r=n(2074);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},7712:function(t,e,n){var r=n(5077),i=n(3610),s=n(6843);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6843:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7485:function(t,e,n){var r=n(8420),i=n(3610),s=n(8218),o=n(9430);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9430:function(t,e,n){var r=n(200),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5077:function(t,e,n){var r=n(2074);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3262:function(t,e,n){var r=n(200),i=n(5335),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6567:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7061:function(t,e,n){var r=n(6492);t.exports=r("navigator","userAgent")||""},6845:function(t,e,n){var r,i,s=n(200),o=n(7061),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},290:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1605:function(t,e,n){var r=n(200),i=n(7632).f,s=n(7712),o=n(7485),a=n(9430),c=n(4361),u=n(4977);t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},2074:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6885:function(t,e,n){var r=n(281),i=n(4601),s=n(8823),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},8823:function(t,e,n){var r=n(2074);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2368:function(t,e,n){var r=n(8823),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},2071:function(t,e,n){var r=n(5077),i=n(6490),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},281:function(t,e,n){var r=n(8823),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},6492:function(t,e,n){var r=n(200),i=n(8420),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},6457:function(t,e,n){var r=n(4601);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},200:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6490:function(t,e,n){var r=n(281),i=n(2612),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},7708:function(t){t.exports={}},7694:function(t,e,n){var r=n(5077),i=n(2074),s=n(3262);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8664:function(t,e,n){var r=n(281),i=n(2074),s=n(8569),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},3054:function(t,e,n){var r=n(8420),i=n(5335),s=n(9686);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},9965:function(t,e,n){var r=n(281),i=n(8420),s=n(9310),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9206:function(t,e,n){var r,i,s,o=n(2886),a=n(200),c=n(281),u=n(5335),l=n(7712),h=n(6490),d=n(9310),f=n(5904),p=n(7708),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},_=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=c(b.get),E=c(b.has),T=c(b.set);r=function(t,e){if(E(b,t))throw new m(g);return e.facade=t,T(b,t,e),e},i=function(t){return w(b,t)||{}},s=function(t){return E(b,t)}}else{var C=f("state");p[C]=!0,r=function(t,e){if(h(t,C))throw new m(g);return e.facade=t,l(t,C,e),e},i=function(t){return h(t,C)?t[C]:{}},s=function(t){return h(t,C)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:_}},7472:function(t,e,n){var r=n(3062),i=n(281),s=i("".slice);t.exports=function(t){return"Big"===s(r(t),0,3)}},8420:function(t){t.exports=function(t){return"function"==typeof t}},4977:function(t,e,n){var r=n(2074),i=n(8420),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},5335:function(t,e,n){var r=n(8420);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},6926:function(t){t.exports=!1},2328:function(t,e,n){var r=n(6492),i=n(8420),s=n(7658),o=n(5225),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},3493:function(t,e,n){var r=n(3747);t.exports=function(t){return r(t.length)}},8218:function(t,e,n){var r=n(2074),i=n(8420),s=n(6490),o=n(5077),a=n(2071).CONFIGURABLE,c=n(9965),u=n(9206),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return s(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},9830:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},1849:function(t,e,n){var r=n(6845),i=n(2074);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},2886:function(t,e,n){var r=n(200),i=n(8420),s=n(9965),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},610:function(t,e,n){var r=n(5362);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3610:function(t,e,n){var r=n(5077),i=n(7694),s=n(4491),o=n(3938),a=n(6032),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7632:function(t,e,n){var r=n(5077),i=n(2368),s=n(9304),o=n(6843),a=n(5476),c=n(6032),u=n(6490),l=n(7694),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},4789:function(t,e,n){var r=n(6347),i=n(290),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8916:function(t,e){e.f=Object.getOwnPropertySymbols},7970:function(t,e,n){var r=n(6490),i=n(8420),s=n(2612),o=n(5904),a=n(7168),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7658:function(t,e,n){var r=n(281);t.exports=r({}.isPrototypeOf)},6347:function(t,e,n){var r=n(281),i=n(6490),s=n(5476),o=n(8186).indexOf,a=n(7708),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},9304:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},9686:function(t,e,n){var r=n(281),i=n(3938),s=n(7473);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},9751:function(t,e,n){var r=n(2368),i=n(8420),s=n(5335),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},5816:function(t,e,n){var r=n(6492),i=n(281),s=n(4789),o=n(8916),a=n(3938),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},1229:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},5904:function(t,e,n){var r=n(2),i=n(665),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},9310:function(t,e,n){var r=n(200),i=n(9430),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2:function(t,e,n){var r=n(6926),i=n(9310);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6539:function(t,e,n){var r=n(9328),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},3005:function(t,e,n){var r=n(874),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5476:function(t,e,n){var r=n(8664),i=n(1229);t.exports=function(t){return r(i(t))}},9328:function(t,e,n){var r=n(9830);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},3747:function(t,e,n){var r=n(9328),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},2612:function(t,e,n){var r=n(1229),i=Object;t.exports=function(t){return i(r(t))}},3720:function(t,e,n){var r=n(5955),i=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw i("Wrong offset");return n}},5955:function(t,e,n){var r=n(9328),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw i("The argument can't be less than 0");return e}},874:function(t,e,n){var r=n(2368),i=n(5335),s=n(2328),o=n(6457),a=n(9751),c=n(1602),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6032:function(t,e,n){var r=n(874),i=n(2328);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},3129:function(t,e,n){var r=n(1602),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},5362:function(t,e,n){var r=n(3062),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},3838:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},665:function(t,e,n){var r=n(281),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},5225:function(t,e,n){var r=n(1849);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4491:function(t,e,n){var r=n(5077),i=n(2074);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1602:function(t,e,n){var r=n(200),i=n(2),s=n(6490),o=n(665),a=n(1849),c=n(5225),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},4973:function(t,e,n){"use strict";var r=n(5343),i=n(5582).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0)}))},1308:function(t,e,n){"use strict";var r=n(5343),i=n(5582).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0)}))},3266:function(t,e,n){"use strict";var r=n(200),i=n(2368),s=n(5343),o=n(3493),a=n(3720),c=n(2612),u=n(2074),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,g=s.exportTypedArrayMethod,m=!u((function(){var t=new Uint8ClampedArray(2);return i(f,t,{length:1,0:3},1),3!==t[1]})),v=m&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return i(f,this,n,e);var r=this.length,s=o(n),u=0;if(s+e>r)throw l("Wrong length");while(u<s)this[e+u]=n[u++]}),!m||v)},7036:function(t,e,n){n(4973)},1337:function(t,e,n){n(1308)},4517:function(t,e,n){"use strict";var r=n(4033),i=n(5343),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},1794:function(t,e,n){"use strict";var r=n(5343),i=n(281),s=n(4601),o=n(447),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},1319:function(t,e,n){"use strict";var r=n(1867),i=n(5343),s=n(7472),o=n(9328),a=n(3005),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},9078:function(t,e,n){"use strict";var r=n(1605),i=n(200),s=n(6492),o=n(6843),a=n(3610).f,c=n(6490),u=n(5190),l=n(3054),h=n(610),d=n(6567),f=n(6820),p=n(5077),g=n(6926),m="DOMException",v=s("Error"),y=s(m),_=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,_),r},b=_.prototype=y.prototype,w="stack"in v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!T&&!(T.writable&&T.configurable),I=w&&!C&&!E;r({global:!0,constructor:!0,forced:g||I},{DOMException:I?_:y});var x=s(m),S=x.prototype;if(S.constructor!==x)for(var A in g||a(S,"constructor",o(1,x)),d)if(c(d,A)){var k=d[A],O=k.s;c(x,O)||a(x,O,o(6,k.c))}},4046:function(t,e,n){"use strict";n.d(e,{Am:function(){return k},FA:function(){return T},I9:function(){return O},Im:function(){return x},Ku:function(){return M},Uj:function(){return a},ZQ:function(){return l},b8:function(){return g},bD:function(){return S},cY:function(){return u},eX:function(){return b},g:function(){return E},hp:function(){return N},jZ:function(){return h},lT:function(){return m},lV:function(){return p},n4:function(){return v},nr:function(){return y},sr:function(){return f},tD:function(){return D},u:function(){return c},zW:function(){return _}});n(9078);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v(){return l().indexOf("MSAppHost/")>=0}function y(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}function b(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?C(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function C(t,e){return t.replace(I,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(A(n)&&A(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function O(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function N(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){const n=new R(t,e);return n.subscribe.bind(n)}class R{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}},7982:function(t,e,n){"use strict";n.r(e),n.d(e,{afterMain:function(){return E},afterRead:function(){return _},afterWrite:function(){return I},applyStyles:function(){return L},arrow:function(){return it},auto:function(){return a},basePlacements:function(){return c},beforeMain:function(){return b},beforeRead:function(){return v},beforeWrite:function(){return T},bottom:function(){return i},clippingParents:function(){return h},computeStyles:function(){return lt},createPopper:function(){return ae},createPopperBase:function(){return se},createPopperLite:function(){return ue},detectOverflow:function(){return Nt},end:function(){return l},eventListeners:function(){return ft},flip:function(){return Pt},hide:function(){return Ut},left:function(){return o},main:function(){return w},modifierPhases:function(){return x},offset:function(){return Bt},placements:function(){return m},popper:function(){return f},popperGenerator:function(){return ie},popperOffsets:function(){return Ht},preventOverflow:function(){return Kt},read:function(){return y},reference:function(){return p},right:function(){return s},start:function(){return u},top:function(){return r},variationPlacements:function(){return g},viewport:function(){return d},write:function(){return C}});var r="top",i="bottom",s="right",o="left",a="auto",c=[r,i,s,o],u="start",l="end",h="clippingParents",d="viewport",f="popper",p="reference",g=c.reduce((function(t,e){return t.concat([e+"-"+u,e+"-"+l])}),[]),m=[].concat(c,[a]).reduce((function(t,e){return t.concat([e,e+"-"+u,e+"-"+l])}),[]),v="beforeRead",y="read",_="afterRead",b="beforeMain",w="main",E="afterMain",T="beforeWrite",C="write",I="afterWrite",x=[v,y,_,b,w,E,T,C,I];function S(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function k(t){var e=A(t).Element;return t instanceof e||t instanceof Element}function O(t){var e=A(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function N(t){if("undefined"===typeof ShadowRoot)return!1;var e=A(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function D(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];O(i)&&S(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))}function R(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],i=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});O(r)&&S(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(t){r.removeAttribute(t)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:R,requires:["computeStyles"]};function P(t){return t.split("-")[0]}var M=Math.max,j=Math.min,F=Math.round;function U(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),r=1,i=1;if(O(t)&&e){var s=t.offsetHeight,o=t.offsetWidth;o>0&&(r=F(n.width)/o||1),s>0&&(i=F(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function V(t){var e=U(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function $(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&N(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(t){return A(t).getComputedStyle(t)}function q(t){return["table","td","th"].indexOf(S(t))>=0}function H(t){return((k(t)?t.ownerDocument:t.document)||window.document).documentElement}function W(t){return"html"===S(t)?t:t.assignedSlot||t.parentNode||(N(t)?t.host:null)||H(t)}function z(t){return O(t)&&"fixed"!==B(t).position?t.offsetParent:null}function K(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&O(t)){var r=B(t);if("fixed"===r.position)return null}var i=W(t);N(i)&&(i=i.host);while(O(i)&&["html","body"].indexOf(S(i))<0){var s=B(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function G(t){var e=A(t),n=z(t);while(n&&q(n)&&"static"===B(n).position)n=z(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===B(n).position)?e:n||K(t)||e}function Q(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function X(t,e,n){return M(t,j(e,n))}function Y(t,e,n){var r=X(t,e,n);return r>n?n:r}function Z(){return{top:0,right:0,bottom:0,left:0}}function J(t){return Object.assign({},Z(),t)}function tt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var et=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,J("number"!==typeof t?t:tt(t,c))};function nt(t){var e,n=t.state,a=t.name,c=t.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=P(n.placement),d=Q(h),f=[o,s].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var g=et(c.padding,n),m=V(u),v="y"===d?r:o,y="y"===d?i:s,_=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],b=l[d]-n.rects.reference[d],w=G(u),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,T=_/2-b/2,C=g[v],I=E-m[p]-g[y],x=E/2-m[p]/2+T,S=X(C,x,I),A=d;n.modifiersData[a]=(e={},e[A]=S,e.centerOffset=S-x,e)}}function rt(t){var e=t.state,n=t.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=e.elements.popper.querySelector(i),i))&&$(e.elements.popper,i)&&(e.elements.arrow=i)}var it={name:"arrow",enabled:!0,phase:"main",fn:nt,effect:rt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function st(t){return t.split("-")[1]}var ot={top:"auto",right:"auto",bottom:"auto",left:"auto"};function at(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:F(e*i)/i||0,y:F(n*i)/i||0}}function ct(t){var e,n=t.popper,a=t.popperRect,c=t.placement,u=t.variation,h=t.offsets,d=t.position,f=t.gpuAcceleration,p=t.adaptive,g=t.roundOffsets,m=t.isFixed,v=h.x,y=void 0===v?0:v,_=h.y,b=void 0===_?0:_,w="function"===typeof g?g({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var E=h.hasOwnProperty("x"),T=h.hasOwnProperty("y"),C=o,I=r,x=window;if(p){var S=G(n),k="clientHeight",O="clientWidth";if(S===A(n)&&(S=H(n),"static"!==B(S).position&&"absolute"===d&&(k="scrollHeight",O="scrollWidth")),c===r||(c===o||c===s)&&u===l){I=i;var N=m&&S===x&&x.visualViewport?x.visualViewport.height:S[k];b-=N-a.height,b*=f?1:-1}if(c===o||(c===r||c===i)&&u===l){C=s;var D=m&&S===x&&x.visualViewport?x.visualViewport.width:S[O];y-=D-a.width,y*=f?1:-1}}var R,L=Object.assign({position:d},p&&ot),P=!0===g?at({x:y,y:b}):{x:y,y:b};return y=P.x,b=P.y,f?Object.assign({},L,(R={},R[I]=T?"0":"",R[C]=E?"0":"",R.transform=(x.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},L,(e={},e[I]=T?b+"px":"",e[C]=E?y+"px":"",e.transform="",e))}function ut(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:P(e.placement),variation:st(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ct(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ct(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var lt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ut,data:{}},ht={passive:!0};function dt(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=A(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach((function(t){t.addEventListener("scroll",n.update,ht)})),a&&c.addEventListener("resize",n.update,ht),function(){s&&u.forEach((function(t){t.removeEventListener("scroll",n.update,ht)})),a&&c.removeEventListener("resize",n.update,ht)}}var ft={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dt,data:{}},pt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,(function(t){return pt[t]}))}var mt={start:"end",end:"start"};function vt(t){return t.replace(/start|end/g,(function(t){return mt[t]}))}function yt(t){var e=A(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function _t(t){return U(H(t)).left+yt(t).scrollLeft}function bt(t){var e=A(t),n=H(t),r=e.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+_t(t),y:a}}function wt(t){var e,n=H(t),r=yt(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+_t(t),c=-r.scrollTop;return"rtl"===B(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Et(t){var e=B(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Tt(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:O(t)&&Et(t)?t:Tt(W(t))}function Ct(t,e){var n;void 0===e&&(e=[]);var r=Tt(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),s=A(r),o=i?[s].concat(s.visualViewport||[],Et(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Ct(W(o)))}function It(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xt(t){var e=U(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function St(t,e){return e===d?It(bt(t)):k(e)?xt(e):It(wt(H(t)))}function At(t){var e=Ct(W(t)),n=["absolute","fixed"].indexOf(B(t).position)>=0,r=n&&O(t)?G(t):t;return k(r)?e.filter((function(t){return k(t)&&$(t,r)&&"body"!==S(t)})):[]}function kt(t,e,n){var r="clippingParents"===e?At(t):[].concat(e),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(e,n){var r=St(t,n);return e.top=M(r.top,e.top),e.right=j(r.right,e.right),e.bottom=j(r.bottom,e.bottom),e.left=M(r.left,e.left),e}),St(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ot(t){var e,n=t.reference,a=t.element,c=t.placement,h=c?P(c):null,d=c?st(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case r:e={x:f,y:n.y-a.height};break;case i:e={x:f,y:n.y+n.height};break;case s:e={x:n.x+n.width,y:p};break;case o:e={x:n.x-a.width,y:p};break;default:e={x:n.x,y:n.y}}var g=h?Q(h):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case u:e[g]=e[g]-(n[m]/2-a[m]/2);break;case l:e[g]=e[g]+(n[m]/2-a[m]/2);break;default:}}return e}function Nt(t,e){void 0===e&&(e={});var n=e,o=n.placement,a=void 0===o?t.placement:o,u=n.boundary,l=void 0===u?h:u,g=n.rootBoundary,m=void 0===g?d:g,v=n.elementContext,y=void 0===v?f:v,_=n.altBoundary,b=void 0!==_&&_,w=n.padding,E=void 0===w?0:w,T=J("number"!==typeof E?E:tt(E,c)),C=y===f?p:f,I=t.rects.popper,x=t.elements[b?C:y],S=kt(k(x)?x:x.contextElement||H(t.elements.popper),l,m),A=U(t.elements.reference),O=Ot({reference:A,element:I,strategy:"absolute",placement:a}),N=It(Object.assign({},I,O)),D=y===f?N:A,R={top:S.top-D.top+T.top,bottom:D.bottom-S.bottom+T.bottom,left:S.left-D.left+T.left,right:D.right-S.right+T.right},L=t.modifiersData.offset;if(y===f&&L){var P=L[a];Object.keys(R).forEach((function(t){var e=[s,i].indexOf(t)>=0?1:-1,n=[r,i].indexOf(t)>=0?"y":"x";R[t]+=P[n]*e}))}return R}function Dt(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?m:u,h=st(r),d=h?a?g:g.filter((function(t){return st(t)===h})):c,f=d.filter((function(t){return l.indexOf(t)>=0}));0===f.length&&(f=d);var p=f.reduce((function(e,n){return e[n]=Nt(t,{placement:n,boundary:i,rootBoundary:s,padding:o})[P(n)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}function Rt(t){if(P(t)===a)return[];var e=gt(t);return[vt(t),e,vt(e)]}function Lt(t){var e=t.state,n=t.options,c=t.name;if(!e.modifiersData[c]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,y=n.altBoundary,_=n.flipVariations,b=void 0===_||_,w=n.allowedAutoPlacements,E=e.options.placement,T=P(E),C=T===E,I=p||(C||!b?[gt(E)]:Rt(E)),x=[E].concat(I).reduce((function(t,n){return t.concat(P(n)===a?Dt(e,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),S=e.rects.reference,A=e.rects.popper,k=new Map,O=!0,N=x[0],D=0;D<x.length;D++){var R=x[D],L=P(R),M=st(R)===u,j=[r,i].indexOf(L)>=0,F=j?"width":"height",U=Nt(e,{placement:R,boundary:m,rootBoundary:v,altBoundary:y,padding:g}),V=j?M?s:o:M?i:r;S[F]>A[F]&&(V=gt(V));var $=gt(V),B=[];if(h&&B.push(U[L]<=0),f&&B.push(U[V]<=0,U[$]<=0),B.every((function(t){return t}))){N=R,O=!1;break}k.set(R,B)}if(O)for(var q=b?3:1,H=function(t){var e=x.find((function(e){var n=k.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return N=e,"break"},W=q;W>0;W--){var z=H(W);if("break"===z)break}e.placement!==N&&(e.modifiersData[c]._skip=!0,e.placement=N,e.reset=!0)}}var Pt={name:"flip",enabled:!0,phase:"main",fn:Lt,requiresIfExists:["offset"],data:{_skip:!1}};function Mt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function jt(t){return[r,s,i,o].some((function(e){return t[e]>=0}))}function Ft(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=Nt(e,{elementContext:"reference"}),a=Nt(e,{altBoundary:!0}),c=Mt(o,r),u=Mt(a,i,s),l=jt(c),h=jt(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Ut={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ft};function Vt(t,e,n){var i=P(t),a=[o,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*a,[o,s].indexOf(i)>=0?{x:l,y:u}:{x:u,y:l}}function $t(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=void 0===i?[0,0]:i,o=m.reduce((function(t,n){return t[n]=Vt(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}var Bt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$t};function qt(t){var e=t.state,n=t.name;e.modifiersData[n]=Ot({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Ht={name:"popperOffsets",enabled:!0,phase:"read",fn:qt,data:{}};function Wt(t){return"x"===t?"y":"x"}function zt(t){var e=t.state,n=t.options,a=t.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,y=void 0===v||v,_=n.tetherOffset,b=void 0===_?0:_,w=Nt(e,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),E=P(e.placement),T=st(e.placement),C=!T,I=Q(E),x=Wt(I),S=e.modifiersData.popperOffsets,A=e.rects.reference,k=e.rects.popper,O="function"===typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,N="number"===typeof O?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(S){if(l){var L,F="y"===I?r:o,U="y"===I?i:s,$="y"===I?"height":"width",B=S[I],q=B+w[F],H=B-w[U],W=y?-k[$]/2:0,z=T===u?A[$]:k[$],K=T===u?-k[$]:-A[$],J=e.elements.arrow,tt=y&&J?V(J):{width:0,height:0},et=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Z(),nt=et[F],rt=et[U],it=X(0,A[$],tt[$]),ot=C?A[$]/2-W-it-nt-N.mainAxis:z-it-nt-N.mainAxis,at=C?-A[$]/2+W+it+rt+N.mainAxis:K+it+rt+N.mainAxis,ct=e.elements.arrow&&G(e.elements.arrow),ut=ct?"y"===I?ct.clientTop||0:ct.clientLeft||0:0,lt=null!=(L=null==D?void 0:D[I])?L:0,ht=B+ot-lt-ut,dt=B+at-lt,ft=X(y?j(q,ht):q,B,y?M(H,dt):H);S[I]=ft,R[I]=ft-B}if(d){var pt,gt="x"===I?r:o,mt="x"===I?i:s,vt=S[x],yt="y"===x?"height":"width",_t=vt+w[gt],bt=vt-w[mt],wt=-1!==[r,o].indexOf(E),Et=null!=(pt=null==D?void 0:D[x])?pt:0,Tt=wt?_t:vt-A[yt]-k[yt]-Et+N.altAxis,Ct=wt?vt+A[yt]+k[yt]-Et-N.altAxis:bt,It=y&&wt?Y(Tt,vt,Ct):X(y?Tt:_t,vt,y?Ct:bt);S[x]=It,R[x]=It-vt}e.modifiersData[a]=R}}var Kt={name:"preventOverflow",enabled:!0,phase:"main",fn:zt,requiresIfExists:["offset"]};function Gt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qt(t){return t!==A(t)&&O(t)?Gt(t):yt(t)}function Xt(t){var e=t.getBoundingClientRect(),n=F(e.width)/t.offsetWidth||1,r=F(e.height)/t.offsetHeight||1;return 1!==n||1!==r}function Yt(t,e,n){void 0===n&&(n=!1);var r=O(e),i=O(e)&&Xt(e),s=H(e),o=U(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==S(e)||Et(s))&&(a=Qt(e)),O(e)?(c=U(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=_t(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Zt(t){var e=new Map,n=new Set,r=[];function i(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&i(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),r}function Jt(t){var e=Zt(t);return x.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function te(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function ee(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var ne={placement:"bottom",modifiers:[],strategy:"absolute"};function re(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function ie(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,s=void 0===i?ne:i;return function(t,e,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},ne,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:k(t)?Ct(t):t.contextElement?Ct(t.contextElement):[],popper:Ct(e)};var a=Jt(ee([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(t){return t.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var t=i.elements,e=t.reference,n=t.popper;if(re(e,n)){i.rects={reference:Yt(e,G(n),"fixed"===i.options.strategy),popper:V(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(t){return i.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:te((function(){return new Promise((function(t){c.forceUpdate(),t(i)}))})),destroy:function(){l(),a=!0}};if(!re(t,e))return c;function u(){i.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:i,name:e,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var se=ie(),oe=[ft,Ht,lt,L,Bt,Pt,Kt,it,Ut],ae=ie({defaultModifiers:oe}),ce=[ft,Ht,lt,L],ue=ie({defaultModifiers:ce})},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return T},EW:function(){return qt},Gc:function(){return wt},IG:function(){return kt},IJ:function(){return Mt},KR:function(){return Pt},Kh:function(){return bt},Pr:function(){return $t},R1:function(){return Ut},X2:function(){return _},bl:function(){return C},fE:function(){return xt},g8:function(){return Ct},hZ:function(){return S},i9:function(){return Lt},ju:function(){return St},u4:function(){return I},ux:function(){return At},yC:function(){return s}});var r=n(4232);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!u(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const v=Symbol(""),y=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=w;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,w=!0,p=1<<++f,f<=g?l(this):b(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,w=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let w=!0;const E=[];function T(){E.push(w),w=!1}function C(){const t=E.pop();w=void 0===t||t}function I(t,e,n){if(w&&m){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;x(r,i)}}function x(t,e){let n=!1;f<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function S(t,e,n,i,s,o){const c=d.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.cy)(t))c.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&u.push(c.get("length")):(u.push(c.get(v)),(0,r.jh)(t)&&u.push(c.get(y)));break;case"delete":(0,r.cy)(t)||(u.push(c.get(v)),(0,r.jh)(t)&&u.push(c.get(y)));break;case"set":(0,r.jh)(t)&&u.push(c.get(v));break}if(1===u.length)u[0]&&A(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);A(a(t))}}function A(t,e){const n=(0,r.cy)(t)?t:[...t];for(const r of n)r.computed&&k(r,e);for(const r of n)r.computed||k(r,e)}function k(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm)),D=j(),R=j(!1,!0),L=j(!0),P=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,i=this.length;e<i;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=At(this)[e].apply(this,t);return C(),n}})),t}function j(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?vt:mt:e?gt:pt).get(n))return n;const o=(0,r.cy)(n);if(!t&&o&&(0,r.$3)(P,i))return Reflect.get(P,i,s);const a=Reflect.get(n,i,s);return((0,r.Bm)(i)?N.has(i):O(i))?a:(t||I(n,"get",i),e?a:Lt(a)?o&&(0,r.yI)(i)?a:a.value:(0,r.Gv)(a)?t?Et(a):bt(a):a)}}const F=V(),U=V(!0);function V(t=!1){return function(e,n,i,s){let o=e[n];if(It(o)&&Lt(o)&&!Lt(i))return!1;if(!t&&!It(i)&&(xt(i)||(i=At(i),o=At(o)),!(0,r.cy)(e)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=(0,r.cy)(e)&&(0,r.yI)(n)?Number(n)<e.length:(0,r.$3)(e,n),c=Reflect.set(e,n,i,s);return e===At(s)&&(a?(0,r.$H)(i,o)&&S(e,"set",n,i,o):S(e,"add",n,i)),c}}function $(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&S(t,"delete",e,void 0,i),s}function B(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&N.has(e)||I(t,"has",e),n}function q(t){return I(t,"iterate",(0,r.cy)(t)?"length":v),Reflect.ownKeys(t)}const H={get:D,set:F,deleteProperty:$,has:B,ownKeys:q},W={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,r.X$)({},H,{get:R,set:U}),K=t=>t,G=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const i=At(t),s=At(e);n||(e!==s&&I(i,"get",e),I(i,"get",s));const{has:o}=G(i),a=r?K:n?Nt:Ot;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=At(n),i=At(t);return e||(t!==i&&I(r,"has",t),I(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Y(t,e=!1){return t=t["__v_raw"],!e&&I(At(t),"iterate",v),Reflect.get(t,"size",t)}function Z(t){t=At(t);const e=At(this),n=G(e),r=n.has.call(e,t);return r||(e.add(t),S(e,"add",t,t)),this}function J(t,e){e=At(e);const n=At(this),{has:i,get:s}=G(n);let o=i.call(n,t);o||(t=At(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.$H)(e,a)&&S(n,"set",t,e,a):S(n,"add",t,e),this}function tt(t){const e=At(this),{has:n,get:r}=G(e);let i=n.call(e,t);i||(t=At(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&S(e,"delete",t,void 0,s),o}function et(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&S(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=At(s),a=e?K:t?Nt:Ot;return!t&&I(o,"iterate",v),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=At(s),a=(0,r.jh)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?K:e?Nt:Ot;return!e&&I(o,"iterate",u?y:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function st(){const t={get(t){return Q(this,t)},get size(){return Y(this)},has:X,add:Z,set:J,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return Y(this)},has:X,add:Z,set:J,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=rt(i,!1,!1),n[i]=rt(i,!0,!1),e[i]=rt(i,!1,!0),r[i]=rt(i,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=st();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const ht={get:lt(!1,!1)},dt={get:lt(!1,!0)},ft={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,vt=new WeakMap;function yt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _t(t){return t["__v_skip"]||!Object.isExtensible(t)?0:yt((0,r.Zf)(t))}function bt(t){return It(t)?t:Tt(t,!1,H,ht,pt)}function wt(t){return Tt(t,!1,z,dt,gt)}function Et(t){return Tt(t,!0,W,ft,mt)}function Tt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=_t(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Ct(t){return It(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function xt(t){return!(!t||!t["__v_isShallow"])}function St(t){return Ct(t)||It(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function kt(t){return(0,r.yQ)(t,"__v_skip",!0),t}const Ot=t=>(0,r.Gv)(t)?bt(t):t,Nt=t=>(0,r.Gv)(t)?Et(t):t;function Dt(t){w&&m&&(t=At(t),x(t.dep||(t.dep=a())))}function Rt(t,e){t=At(t),t.dep&&A(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Pt(t){return jt(t,!1)}function Mt(t){return jt(t,!0)}function jt(t,e){return Lt(t)?t:new Ft(t,e)}class Ft{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:At(t),this._value=e?t:Ot(t)}get value(){return Dt(this),this._value}set value(t){t=this.__v_isShallow?t:At(t),(0,r.$H)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ot(t),Rt(this,t))}}function Ut(t){return Lt(t)?t.value:t}const Vt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function $t(t){return Ct(t)?t:new Proxy(t,Vt)}class Bt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(t,(()=>{this._dirty||(this._dirty=!0,Rt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return Dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let i,s;const o=(0,r.Tn)(t);o?(i=t,s=r.tE):(i=t.get,s=t.set);const a=new Bt(i,s,o||!s,n);return a}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return At},CE:function(){return We},Df:function(){return dt},EW:function(){return Dn},FK:function(){return Le},Fv:function(){return sn},Gt:function(){return Q},Gy:function(){return rt},K9:function(){return Ae},Lk:function(){return Ze},MZ:function(){return ht},OW:function(){return ct},Q3:function(){return on},WQ:function(){return X},Wv:function(){return ze},bF:function(){return Je},bo:function(){return Pt},dY:function(){return E},eW:function(){return rn},g2:function(){return Ft},h:function(){return Rn},k6:function(){return V},nI:function(){return mn},pI:function(){return Bt},pM:function(){return ft},pR:function(){return ot},qL:function(){return o},uX:function(){return Ve},wB:function(){return Z}});var r=n(144),i=n(4232);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=[];let v=null,y=0;const _=Promise.resolve();let b=null,w=null;function E(t){const e=b||_;return t?e.then(this?t.bind(this):t):e}function T(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=D(h[r]);i<t?e=r+1:n=r}return e}function C(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||t===w||(null==t.id?h.push(t):h.splice(T(t.id),0,t),I())}function I(){u||l||(l=!0,b=_.then(R))}function x(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function S(t,e,n,r){(0,i.cy)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),I()}function A(t){S(t,p,f,g)}function k(t){S(t,v,m,y)}function O(t,e=null){if(f.length){for(w=e,p=[...new Set(f)],f.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,w=null,O(t,e)}}function N(t){if(O(),m.length){const t=[...new Set(m)];if(m.length=0,v)return void v.push(...t);for(v=t,v.sort(((t,e)=>D(t)-D(e))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const D=t=>null==t.id?1/0:t.id;function R(t){l=!1,u=!0,O(t),h.sort(((t,e)=>D(t)-D(e)));i.tE;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,N(t),u=!1,b=null,(h.length||f.length||m.length)&&R(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.MZ;o&&(s=n.map((t=>t.trim()))),e&&(s=n.map(i.Ro))}let u;let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function P(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=P(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),r.set(t,a),a):(r.set(t,null),null)}function M(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}let j=null,F=null;function U(t){const e=j;return j=t,F=t&&t.type.__scopeId||null,e}function V(t,e=j,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&qe(-1);const i=U(e),s=t(...n);return U(i),r._d&&qe(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function $(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=t;let y,_;const b=U(t);try{if(4&n.shapeFlag){const t=s||r;y=an(d.call(t,t,f,o,g,p,m)),_=l}else{const t=e;0,y=an(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),_=e.props?l:B(l)}}catch(E){Fe.length=0,a(E,t,1),y=Je(Me)}let w=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(i.CP)&&(_=q(_,c)),w=nn(w,_))}return n.dirs&&(w=nn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,U(b),y}const B=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},q=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function H(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||W(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?W(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function W(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!M(n,s))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const K=t=>t.__isSuspense;function G(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):k(t)}function Q(t,e){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[t]=e}else 0}function X(t,e,n=!1){const r=gn||j;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r.proxy):e}else 0}const Y={};function Z(t,e,n){return J(t,e,n)}function J(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.MZ){const h=gn;let d,f,p=!1,g=!1;if((0,r.i9)(t)?(d=()=>t.value,p=(0,r.fE)(t)):(0,r.g8)(t)?(d=()=>t,a=!0):(0,i.cy)(t)?(g=!0,p=t.some((t=>(0,r.g8)(t)||(0,r.fE)(t))),d=()=>t.map((t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?nt(t):(0,i.Tn)(t)?s(t,h,2):void 0))):d=(0,i.Tn)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[m])}:i.tE,e&&a){const t=d;d=()=>nt(t())}let m=t=>{f=b.onStop=()=>{s(t,h,4)}};if(En)return m=i.tE,e?n&&o(e,h,3,[d(),g?[]:void 0,m]):d(),i.tE;let v=g?[]:Y;const y=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,i.$H)(t,v[e]))):(0,i.$H)(t,v)))&&(f&&f(),o(e,h,3,[t,v===Y?void 0:v,m]),v=t)}else b.run()};let _;y.allowRecurse=!!e,_="sync"===c?y:"post"===c?()=>Se(y,h&&h.suspense):()=>A(y);const b=new r.X2(d,_);return e?n?y():v=b.run():"post"===c?Se(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.TF)(h.scope.effects,b)}}function tt(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?et(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=gn;vn(this);const c=J(s,o.bind(r),n);return a?vn(a):yn(),c}function et(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function nt(t,e){if(!(0,i.Gv)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.i9)(t))nt(t.value,e);else if((0,i.cy)(t))for(let n=0;n<t.length;n++)nt(t[n],e);else if((0,i.vM)(t)||(0,i.jh)(t))t.forEach((t=>{nt(t,e)}));else if((0,i.Qd)(t))for(const n in t)nt(t[n],e);return t}function rt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt((()=>{t.isMounted=!0})),kt((()=>{t.isUnmounting=!0})),t}const it=[Function,Array],st={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(t,{slots:e}){const n=mn(),i=rt();let s;return()=>{const o=e.default&&dt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Me){0,a=e,t=!0;break}}const c=(0,r.ux)(t),{mode:u}=c;if(i.isLeaving)return ut(a);const l=lt(a);if(!l)return ut(a);const h=ct(l,c,i,n);ht(l,h);const d=n.subTree,f=d&&lt(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==Me&&(!Ge(l,f)||p)){const t=ct(f,c,i,n);if(ht(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ut(a);"in-out"===u&&l.type!==Me&&(t.delayLeave=(t,e,n)=>{const r=at(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ot=st;function at(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ct(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=e,w=String(t.key),E=at(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=v||u}e._leaveCb&&e._leaveCb(!0);const i=E[w];i&&Ge(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,i=d;if(!n.isMounted){if(!s)return;e=y||l,r=_||h,i=b||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),I.delayedLeave&&I.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?C(p,[e,o]):o()},clone(t){return ct(t,e,n,r)}};return I}function ut(t){if(gt(t))return t=nn(t),t.children=null,t}function lt(t){return gt(t)?t.children?t.children[0]:void 0:t}function ht(t,e){6&t.shapeFlag&&t.component?ht(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Le?(128&o.patchFlag&&i++,r=r.concat(dt(o.children,e,a))):(e||o.type!==Me)&&r.push(null!=a?nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ft(t){return(0,i.Tn)(t)?{setup:t,name:t.name}:t}const pt=t=>!!t.type.__asyncLoader;const gt=t=>t.type.__isKeepAlive;RegExp,RegExp;function mt(t,e){return(0,i.cy)(t)?t.some((t=>mt(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function vt(t,e){_t(t,"a",e)}function yt(t,e){_t(t,"da",e)}function _t(t,e,n=gn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Tt(e,r,n),n){let t=n.parent;while(t&&t.parent)gt(t.parent.vnode)&&bt(r,e,n,t),t=t.parent}}function bt(t,e,n,r){const s=Tt(e,t,r,!0);Ot((()=>{(0,i.TF)(r[e],s)}),n)}function wt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Et(t){return 128&t.shapeFlag?t.ssContent:t}function Tt(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)(),vn(n);const s=o(e,n,t,i);return yn(),(0,r.bl)(),s});return i?s.unshift(a):s.push(a),a}}const Ct=t=>(e,n=gn)=>(!En||"sp"===t)&&Tt(t,e,n),It=Ct("bm"),xt=Ct("m"),St=Ct("bu"),At=Ct("u"),kt=Ct("bum"),Ot=Ct("um"),Nt=Ct("sp"),Dt=Ct("rtg"),Rt=Ct("rtc");function Lt(t,e=gn){Tt("ec",t,e)}function Pt(t,e){const n=j;if(null===n)return t;const r=kn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.MZ]=e[o];(0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&nt(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Mt(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}const jt="components";function Ft(t,e){return Vt(jt,t,!0,e)||t}const Ut=Symbol();function Vt(t,e,n=!0,r=!1){const s=j||gn;if(s){const n=s.type;if(t===jt){const t=On(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=$t(s[t]||n[t],e)||$t(s.appContext[t],e);return!o&&r?n:o}}function $t(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function Bt(t,e,n,r){let s;const o=n&&n[r];if((0,i.cy)(t)||(0,i.Kg)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const qt=t=>t?_n(t)?kn(t)||t.proxy:qt(t.parent):null,Ht=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>Yt(t),$forceUpdate:t=>t.f||(t.f=()=>C(t.update)),$nextTick:t=>t.n||(t.n=E.bind(t.proxy)),$watch:t=>tt.bind(t)}),Wt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.MZ&&(0,i.$3)(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];zt&&(c[e]=0)}}const d=Ht[e];let f,p;return d?("$attrs"===e&&(0,r.u4)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.MZ&&(0,i.$3)(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||e!==i.MZ&&(0,i.$3)(e,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ht,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zt=!0;function Kt(t){const e=Yt(t),n=t.proxy,s=t.ctx;zt=!1,e.beforeCreate&&Qt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:C,renderTriggered:I,errorCaptured:x,serverPrefetch:S,expose:A,inheritAttrs:k,components:O,directives:N,filters:D}=e,R=null;if(h&&Gt(h,s,R,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(zt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Dn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Xt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function L(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Qt(d,t,"c"),L(It,f),L(xt,p),L(St,g),L(At,m),L(vt,v),L(yt,y),L(Lt,x),L(Rt,C),L(Dt,I),L(kt,b),L(Ot,E),L(Nt,S),(0,i.cy)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=k&&(t.inheritAttrs=k),O&&(t.components=O),N&&(t.directives=N)}function Gt(t,e,n=i.tE,s=!1){(0,i.cy)(t)&&(t=ne(t));for(const o in t){const n=t[o];let a;a=(0,i.Gv)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,r.i9)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Qt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Xt(t,e,n,r){const s=r.includes(".")?et(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&Z(s,n)}else if((0,i.Tn)(t))Z(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>Xt(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&Z(s,r,t)}else 0}function Yt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>Zt(c,t,o,!0))),Zt(c,e,o)):c=e,s.set(e,c),c}function Zt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Zt(t,s,n,!0),i&&i.forEach((e=>Zt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Jt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Jt={data:te,props:ie,emits:ie,methods:ie,computed:ie,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ie,directives:ie,watch:se,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return ie(ne(t),ne(e))}function ne(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function ie(t,e){return t?(0,i.X$)((0,i.X$)(Object.create(null),t),e):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function oe(t,e,n,s=!1){const o={},a={};(0,i.yQ)(a,Qe,1),t.propsDefaults=Object.create(null),ce(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ae(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ce(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ue(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=ue(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t,"set","$attrs")}function ce(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function ue(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.Tn)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(vn(s),r=i[n]=t.call(null,e),yn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function le(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=le(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);he(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(he(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:n;if(r){const t=pe(Boolean,r.type),n=pe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.$3)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function he(t){return"$"!==t[0]}function de(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function fe(t,e){return de(t)===de(e)}function pe(t,e){return(0,i.cy)(e)?e.findIndex((e=>fe(e,t))):(0,i.Tn)(e)&&fe(e,t)?0:-1}const ge=t=>"_"===t[0]||"$stable"===t,me=t=>(0,i.cy)(t)?t.map(an):[an(t)],ve=(t,e,n)=>{if(e._n)return e;const r=V(((...t)=>me(e(...t))),n);return r._c=!1,r},ye=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ge(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ve(s,n,r);else if(null!=n){0;const t=me(n);e[s]=()=>t}}},_e=(t,e)=>{const n=me(e);t.slots.default=()=>n},be=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.ux)(e),(0,i.yQ)(e,"_",n)):ye(e,t.slots={})}else t.slots={},e&&_e(t,e);(0,i.yQ)(t.slots,Qe,1)},we=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.X$)(s,e),n||1!==t||delete s._):(o=!e.$stable,ye(e,s)),a=e}else e&&(_e(t,e),a={default:1});if(o)for(const i in s)ge(i)||i in a||delete s[i]};function Ee(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Te=0;function Ce(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=Object.assign({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Ee(),o=new Set;let a=!1;const c=s.app={_uid:Te++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ln,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.Tn)(t.install)?(o.add(t),t.install(c,...e)):(0,i.Tn)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=Je(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,kn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function Ie(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>Ie(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(pt(o)&&!a)return;const c=4&o.shapeFlag?kn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,Se(r,n)):r()}else 0}}function xe(){}const Se=G;function Ae(t){return ke(t)}function ke(t,e){xe();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,cloneNode:m,insertStaticContent:v}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ge(t,e)&&(r=J(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Pe:_(t,e,n,r);break;case Me:b(t,e,n,r);break;case je:null==t&&w(e,n,r,o);break;case Le:P(t,e,n,r,i,s,o,a,c);break;default:1&h?I(t,e,n,r,i,s,o,a,c):6&h?M(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&Ie(l,t&&t.ref,s,e||t,!e)},_=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?S(e,n,r,i,s,o,a,c):D(t,e,i,s,o,a,c)},S=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:g,props:v,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=t;if(t.el&&void 0!==m&&-1===b)f=t.el=m(t.el);else{if(f=t.el=c(t.type,u,v&&v.is,v),8&y?d(f,t.children):16&y&&k(t.children,f,null,r,o,u&&"foreignObject"!==g,l,h),w&&Mt(t,null,r,"created"),v){for(const e in v)"value"===e||(0,i.SU)(e)||a(f,e,null,v[e],u,t.children,r,o,Z);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&hn(p,r,t)}A(f,t,t.scopeId,l,r)}w&&Mt(t,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;E&&_.beforeEnter(f),s(f,e,n),((p=v&&v.onVnodeMounted)||E||w)&&Se((()=>{p&&hn(p,r,t),E&&_.enter(f),w&&Mt(t,null,r,"mounted")}),o)},A=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},k=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cn(t[u]):an(t[u]);y(null,c,e,n,r,i,s,o,a)}},D=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;n&&Oe(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,e,t),f&&Mt(e,t,n,"beforeUpdate"),n&&Oe(n,!0);const v=s&&"foreignObject"!==e.type;if(h?R(t.dynamicChildren,h,u,n,r,v,o):c||B(t,e,u,null,n,r,v,o,!1),l>0){if(16&l)L(u,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,Z)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||L(u,e,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Se((()=>{m&&hn(m,n,e,t),f&&Mt(e,t,n,"updated")}),r)},R=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Le||!Ge(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},L=(t,e,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,Z)}if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,Z);"value"in r&&a(t,"value",n.value,r.value)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(d,n,r),k(e.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Ne(t,e,!0)):B(t,e,n,d,i,o,a,c,l)},M=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):j(e,n,r,i,s,o,c):F(t,e,c)},j=(t,e,n,r,i,s,o)=>{const a=t.component=pn(t,r,i);if(gt(t)&&(a.ctx.renderer=et),Tn(a),a.asyncDep){if(i&&i.registerDep(a,U),!t.el){const t=a.subTree=Je(Me);b(null,t,e,n)}}else U(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(H(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,x(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Oe(t,!1),n?(n.el=l.el,V(t,n,c)):n=l,r&&(0,i.DY)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&hn(e,u,n,l),Oe(t,!0);const d=$(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),J(p),t,o,a),n.el=d.el,null===h&&z(t,d.el),s&&Se(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Se((()=>hn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=pt(e);if(Oe(t,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&hn(r,d,e),Oe(t,!0),c&&rt){const n=()=>{t.subTree=$(t),rt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=$(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Se(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;Se((()=>hn(r,d,t)),o)}(256&e.shapeFlag||d&&pt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Se(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.X2(u,(()=>C(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Oe(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ae(t,e.props,i,n),we(t,e.children,n),(0,r.C4)(),O(void 0,t.update),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void W(u,h,n,r,i,s,o,a,c);if(256&f)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Z(u,i,s),h!==u&&d(n,h)):16&l?16&p?W(u,h,n,r,i,s,o,a,c):Z(u,i,s,!0):(8&l&&d(n,""),16&p&&k(h,n,r,i,s,o,a,c))},q=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?cn(e[f]):an(e[f]);y(t[f],r,n,null,s,o,a,c,u)}l>h?Z(t,s,o,!0,!1,d):k(e,n,r,s,o,a,c,u,d)},W=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?cn(e[l]):an(e[l]);if(!Ge(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?cn(e[f]):an(e[f]);if(!Ge(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)y(null,e[l]=u?cn(e[l]):an(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?cn(e[l]):an(e[l]);null!=t.key&&m.set(t.key,l)}let v,_=0;const b=f-g+1;let w=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(_>=b){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&Ge(r,e[v])){i=v;break}void 0===i?G(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:w=!0,y(r,e[i],n,null,s,o,a,c,u),_++)}const C=w?De(T):i.Oj;for(v=C.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):w&&(v<0||l!==C[v]?K(i,n,d,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Le){s(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===je)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Se((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Ie(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!pt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&hn(g,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&Mt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==Le||h>0&&64&h)?Z(u,e,n,!1,!0):(s===Le&&384&h||!i&&16&l)&&Z(c,e,n),r&&Q(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Se((()=>{g&&hn(g,e,t),f&&Mt(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Le)return void X(n,r);if(e===je)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Se(c,e),Se((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Z=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},J=t=>6&t.shapeFlag?J(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),N(),e._vnode=t},et={p:y,um:G,m:K,r:Q,mt:j,mc:k,pc:B,pbc:R,n:J,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ce(tt,nt)}}function Oe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ne(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=cn(s[i]),e.el=t.el),n||Ne(t,e))}}function De(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Re=t=>t.__isTeleport;const Le=Symbol(void 0),Pe=Symbol(void 0),Me=Symbol(void 0),je=Symbol(void 0),Fe=[];let Ue=null;function Ve(t=!1){Fe.push(Ue=t?null:[])}function $e(){Fe.pop(),Ue=Fe[Fe.length-1]||null}let Be=1;function qe(t){Be+=t}function He(t){return t.dynamicChildren=Be>0?Ue||i.Oj:null,$e(),Be>0&&Ue&&Ue.push(t),t}function We(t,e,n,r,i,s){return He(Ze(t,e,n,r,i,s,!0))}function ze(t,e,n,r,i){return He(Je(t,e,n,r,i,!0))}function Ke(t){return!!t&&!0===t.__v_isVNode}function Ge(t,e){return t.type===e.type&&t.key===e.key}const Qe="__vInternal",Xe=({key:t})=>null!=t?t:null,Ye=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:j,r:t,k:e,f:!!n}:t:null;function Ze(t,e=null,n=null,r=0,s=null,o=(t===Le?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xe(e),ref:e&&Ye(e),scopeId:F,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(un(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Be>0&&!a&&Ue&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ue.push(u),u}const Je=tn;function tn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Ut||(t=Me),Ke(t)){const r=nn(t,e,!0);return n&&un(r,n),Be>0&&!a&&Ue&&(6&r.shapeFlag?Ue[Ue.indexOf(t)]=r:Ue.push(r)),r.patchFlag|=-2,r}if(Nn(t)&&(t=t.__vccOpts),e){e=en(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:K(t)?128:Re(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return Ze(t,e,n,s,o,c,a,!0)}function en(t){return t?(0,r.ju)(t)||Qe in t?(0,i.X$)({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?ln(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Xe(c),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(Ye(e)):[s,Ye(e)]:Ye(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor};return u}function rn(t=" ",e=0){return Je(Pe,null,t,e)}function sn(t,e){const n=Je(je,null,t);return n.staticCount=e,n}function on(t="",e=!1){return e?(Ve(),ze(Me,null,t)):Je(Me,null,t)}function an(t){return null==t||"boolean"===typeof t?Je(Me):(0,i.cy)(t)?Je(Le,null,t.slice()):"object"===typeof t?cn(t):Je(Pe,null,String(t))}function cn(t){return null===t.el||t.memo?t:nn(t)}function un(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Qe in e?3===r&&j&&(1===j.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=j}}else(0,i.Tn)(e)?(e={default:e,_ctx:j},n=32):(e=String(e),64&r?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function hn(t,e,n,r=null){o(t,e,7,[n,r])}const dn=Ee();let fn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||dn,a={uid:fn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:le(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let gn=null;const mn=()=>gn||j,vn=t=>{gn=t,t.scope.on()},yn=()=>{gn&&gn.scope.off(),gn=null};function _n(t){return 4&t.vnode.shapeFlag}let bn,wn,En=!1;function Tn(t,e=!1){En=e;const{props:n,children:r}=t.vnode,i=_n(t);oe(t,n,i,e),be(t,r);const s=i?Cn(t,e):void 0;return En=!1,s}function Cn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.IG)(new Proxy(t.ctx,Wt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?An(t):null;vn(t),(0,r.C4)();const c=s(o,t,0,[t.props,n]);if((0,r.bl)(),yn(),(0,i.yL)(c)){if(c.then(yn,yn),e)return c.then((n=>{In(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else In(t,c,e)}else xn(t,e)}function In(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),xn(t,n)}function xn(t,e,n){const s=t.type;if(!t.render){if(!e&&bn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=bn(e,c)}}t.render=s.render||i.tE,wn&&wn(t)}vn(t),(0,r.C4)(),Kt(t),(0,r.bl)(),yn()}function Sn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.u4)(t,"get","$attrs"),e[n]}})}function An(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Sn(t))},slots:t.slots,emit:t.emit,expose:e}}function kn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ht?Ht[n](t):void 0}}))}function On(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Nn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Dn=(t,e)=>(0,r.EW)(t,e,En);function Rn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Ke(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ke(n)&&(n=[n]),Je(t,e,n))}Symbol("");const Ln="3.2.37"},5130:function(t,e,n){"use strict";n.d(e,{D$:function(){return st},Ef:function(){return ut},Jo:function(){return nt}});var r=n(4232),i=n(6768);n(144);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?o.createElementNS(s,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const i=t.style,s=(0,r.Kg)(n);if(n&&!s){for(const t in n)d(i,t,n[t]);if(e&&!(0,r.Kg)(e))for(const t in e)null==n[t]&&d(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.cy)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);h.test(n)?t.setProperty((0,r.Tg)(i),n.replace(h,""),"important"):t[i]=n}}const f=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let i=(0,r.PT)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.ZH)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function v(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const i=(0,r.J$)(e);null==n||i&&!(0,r.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function y(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[_,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let w=0;const E=Promise.resolve(),T=()=>{w=0},C=()=>w||(E.then(T),w=_());function I(t,e,n,r){t.addEventListener(e,n,r)}function x(t,e,n,r){t.removeEventListener(e,n,r)}function S(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=k(e);if(r){const o=s[e]=O(r,i);I(t,n,o,a)}else o&&(x(t,n,o,a),s[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function k(t){let e;if(A.test(t)){let n;e={};while(n=t.match(A))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.Tg)(t.slice(2)),e]}function O(t,e){const n=t=>{const r=t.timeStamp||_();(b||r>=n.attached-1)&&(0,i.qL)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function N(t,e){if((0,r.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,R=(t,e,n,i,s=!1,o,a,c,h)=>{"class"===e?u(t,i,s):"style"===e?l(t,n,i):(0,r.Mp)(e)?(0,r.CP)(e)||S(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,i,s))?y(t,e,i,o,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),v(t,e,i,s))};function L(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.Tn)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.Kg)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",M="animation",j=(t,{slots:e})=>(0,i.h)(i.pR,$(t),e);j.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(j.props=(0,r.X$)({},i.pR.props,F),(t,e=[])=>{(0,r.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),V=t=>!!t&&((0,r.cy)(t)?t.some((t=>t.length>1)):t.length>1);function $(t){const e={};for(const r in t)r in F||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=B(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:C=_,onAppearCancelled:I=b}=e,x=(t,e,n)=>{W(t,e?h:c),W(t,e?l:a),n&&n()},S=(t,e)=>{t._isLeaving=!1,W(t,d),W(t,p),W(t,f),e&&e()},A=t=>(e,n)=>{const r=t?C:_,s=()=>x(e,t,n);U(r,[e,s]),z((()=>{W(e,t?u:o),H(e,t?h:c),V(r)||G(e,i,m,s)}))};return(0,r.X$)(e,{onBeforeEnter(t){U(y,[t]),H(t,o),H(t,a)},onBeforeAppear(t){U(T,[t]),H(t,u),H(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>S(t,e);H(t,d),Z(),H(t,f),z((()=>{t._isLeaving&&(W(t,d),H(t,p),V(w)||G(t,i,v,n))})),U(w,[t,n])},onEnterCancelled(t){x(t,!1),U(b,[t])},onAppearCancelled(t){x(t,!0),U(I,[t])},onLeaveCancelled(t){S(t),U(E,[t])}})}function B(t){if(null==t)return null;if((0,r.Gv)(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){const e=(0,r.Ro)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function W(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let K=0;function G(t,e,n,r){const i=t._endId=++K,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function Q(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(P+"Delay"),s=r(P+"Duration"),o=X(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=X(a,c);let l=null,h=0,d=0;e===P?o>0&&(l=P,h=o,d=s.length):e===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?P:M:null,d=l?l===P?s.length:c.length:0);const f=l===P&&/\b(transform|all)(,|$)/.test(n[P+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function X(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Z(){return document.body.offsetHeight}new WeakMap,new WeakMap;const J=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.cy)(e)?t=>(0,r.DY)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=J(s);const o=i||s.props&&"number"===s.props.type;I(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.Ro)(i)),t._assign(i)})),n&&I(t,"change",(()=>{t.value=t.value.trim()})),e||(I(t,"compositionstart",tt),I(t,"compositionend",et),I(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=J(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.Ro)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=["ctrl","shift","alt","meta"],it={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},st=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=it[e[t]];if(r&&r(n,e))return}return t(n,...r)};const ot=(0,r.X$)({patchProp:R},c);let at;function ct(){return at||(at=(0,i.K9)(ot))}const ut=(...t)=>{const e=ct().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=lt(t);if(!i)return;const s=e._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lt(t){if((0,r.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{$3:function(){return k},$H:function(){return Z},BX:function(){return g},Bm:function(){return M},C4:function(){return f},CP:function(){return I},DY:function(){return J},Ft:function(){return s},Gv:function(){return j},J$:function(){return a},Kg:function(){return P},MZ:function(){return _},Mp:function(){return C},NO:function(){return E},Oj:function(){return b},PT:function(){return K},Qd:function(){return B},Ro:function(){return et},SU:function(){return H},TF:function(){return S},Tg:function(){return Q},Tn:function(){return L},Tr:function(){return u},We:function(){return rt},X$:function(){return x},Y2:function(){return c},ZH:function(){return X},Zf:function(){return $},cy:function(){return O},jh:function(){return N},pD:function(){return r},rU:function(){return Y},tE:function(){return w},u3:function(){return m},vM:function(){return D},v_:function(){return v},yI:function(){return q},yL:function(){return F},yQ:function(){return tt}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=P(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return P(t)||j(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(P(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(j(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=R(t),r=R(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=M(t),r=M(e),n||r)return t===e;if(n=O(t),r=O(e),n||r)return!(!n||!r)&&p(t,e);if(n=j(t),r=j(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const v=t=>P(t)?t:null==t?"":O(t)||j(t)&&(t.toString===U||!L(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):N(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!j(e)||O(e)||B(e)?e:String(e),_={},b=[],w=()=>{},E=()=>!1,T=/^on[^a-z]/,C=t=>T.test(t),I=t=>t.startsWith("onUpdate:"),x=Object.assign,S=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,k=(t,e)=>A.call(t,e),O=Array.isArray,N=t=>"[object Map]"===V(t),D=t=>"[object Set]"===V(t),R=t=>"[object Date]"===V(t),L=t=>"function"===typeof t,P=t=>"string"===typeof t,M=t=>"symbol"===typeof t,j=t=>null!==t&&"object"===typeof t,F=t=>j(t)&&L(t.then)&&L(t.catch),U=Object.prototype.toString,V=t=>U.call(t),$=t=>V(t).slice(8,-1),B=t=>"[object Object]"===V(t),q=t=>P(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},z=/-(\w)/g,K=W((t=>t.replace(z,((t,e)=>e?e.toUpperCase():"")))),G=/\B([A-Z])/g,Q=W((t=>t.replace(G,"-$1").toLowerCase())),X=W((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=W((t=>t?`on${X(t)}`:"")),Z=(t,e)=>!Object.is(t,e),J=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6213:function(t,e,n){
/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,r){t.exports=r(n(7982))}(0,(function(t){"use strict";function e(t){if(t&&t.__esModule)return t;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const n in t)if("default"!==n){const r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}return e.default=t,Object.freeze(e)}const n=e(t),r="transitionend",i=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},s=t=>{const e=i(t);return e&&document.querySelector(e)?e:null},o=t=>{const e=i(t);return e?document.querySelector(e):null},a=t=>{t.dispatchEvent(new Event(r))},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),u=t=>c(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,l=t=>{if(!c(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const e=t.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return e},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},f=()=>{},p=t=>{t.offsetHeight},g=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],v=()=>"rtl"===document.documentElement.dir,y=t=>{var e;e=()=>{const e=g();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t()})),m.push(e)):e()},_=t=>{"function"==typeof t&&t()},b=(t,e,n=!0)=>{if(!n)return void _(t);const i=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return r||i?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(r,o),_(t))};e.addEventListener(r,o),setTimeout((()=>{s||a(e)}),i)},w=(t,e,n,r)=>{const i=t.length;let s=t.indexOf(e);return-1===s?!n&&r?t[i-1]:t[0]:(s+=n?1:-1,r&&(s=(s+i)%i),t[Math.max(0,Math.min(s,i-1))])},E=/[^.]*(?=\..*)\.|.*/,T=/\..*/,C=/::\d+$/,I={};let x=1;const S={mouseenter:"mouseover",mouseleave:"mouseout"},A=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(t,e){return e&&`${e}::${x++}`||t.uidEvent||x++}function O(t){const e=k(t);return t.uidEvent=e,I[e]=I[e]||{},I[e]}function N(t,e,n=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===n))}function D(t,e,n){const r="string"==typeof e,i=r?n:e||n;let s=M(t);return A.has(s)||(s=t),[r,i,s]}function R(t,e,n,r,i){if("string"!=typeof e||!t)return;let[s,o,a]=D(e,n,r);if(e in S){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o=t(o)}const c=O(t),u=c[a]||(c[a]={}),l=N(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=k(o,e.replace(E,"")),d=s?function(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return F(i,{delegateTarget:o}),r.oneOff&&j.off(t,i.type,e,n),n.apply(o,[i])}}(t,n,o):function(t,e){return function n(r){return F(r,{delegateTarget:t}),n.oneOff&&j.off(t,r.type,e),e.apply(t,[r])}}(t,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,u[h]=d,t.addEventListener(a,d,s)}function L(t,e,n,r,i){const s=N(e[n],r,i);s&&(t.removeEventListener(n,s,Boolean(i)),delete e[n][s.uidEvent])}function P(t,e,n,r){const i=e[n]||{};for(const s of Object.keys(i))if(s.includes(r)){const r=i[s];L(t,e,n,r.callable,r.delegationSelector)}}function M(t){return t=t.replace(T,""),S[t]||t}const j={on(t,e,n,r){R(t,e,n,r,!1)},one(t,e,n,r){R(t,e,n,r,!0)},off(t,e,n,r){if("string"!=typeof e||!t)return;const[i,s,o]=D(e,n,r),a=o!==e,c=O(t),u=c[o]||{},l=e.startsWith(".");if(void 0===s){if(l)for(const n of Object.keys(c))P(t,c,n,e.slice(1));for(const n of Object.keys(u)){const r=n.replace(C,"");if(!a||e.includes(r)){const e=u[n];L(t,c,o,e.callable,e.delegationSelector)}}}else{if(!Object.keys(u).length)return;L(t,c,o,s,i?n:null)}},trigger(t,e,n){if("string"!=typeof e||!t)return null;const r=g();let i=null,s=!0,o=!0,a=!1;e!==M(e)&&r&&(i=r.Event(e,n),r(t).trigger(i),s=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());let c=new Event(e,{bubbles:s,cancelable:!0});return c=F(c,n),a&&c.preventDefault(),o&&t.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function F(t,e){for(const[n,r]of Object.entries(e||{}))try{t[n]=r}catch(e){Object.defineProperty(t,n,{configurable:!0,get:()=>r})}return t}const U=new Map,V={set(t,e,n){U.has(t)||U.set(t,new Map);const r=U.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(t,e)=>U.has(t)&&U.get(t).get(e)||null,remove(t,e){if(!U.has(t))return;const n=U.get(t);n.delete(e),0===n.size&&U.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function B(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const q={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${B(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${B(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=$(t.dataset[r])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${B(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=c(e)?q.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...c(e)?q.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const r of Object.keys(e)){const i=e[r],s=t[r],o=c(s)?"element":null==(n=s)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}var n}}class W extends H{constructor(t,e){super(),(t=u(t))&&(this._element=t,this._config=this._getConfig(e),V.set(this._element,this.constructor.DATA_KEY,this))}dispose(){V.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){b(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return V.get(u(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const z=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;j.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),h(this))return;const i=o(this)||this.closest(`.${r}`);t.getOrCreateInstance(i)[e]()}))};class K extends W{static get NAME(){return"alert"}close(){if(j.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}z(K,"close"),y(K);const G='[data-bs-toggle="button"]';class Q extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}j.on(document,"click.bs.button.data-api",G,(t=>{t.preventDefault();const e=t.target.closest(G);Q.getOrCreateInstance(e).toggle()})),y(Q);const X={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let r=t.parentNode.closest(e);for(;r;)n.push(r),r=r.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!h(t)&&l(t)))}},Y={endCallback:null,leftCallback:null,rightCallback:null},Z={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class J extends H{constructor(t,e){super(),this._element=t,t&&J.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Y}static get DefaultType(){return Z}static get NAME(){return"swipe"}dispose(){j.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&_(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),j.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(j.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),j.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),j.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const tt="next",et="prev",nt="left",rt="right",it="slid.bs.carousel",st="carousel",ot="active",at={ArrowLeft:rt,ArrowRight:nt},ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ut={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class lt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=X.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===st&&this.cycle()}static get Default(){return ct}static get DefaultType(){return ut}static get NAME(){return"carousel"}next(){this._slide(tt)}nextWhenVisible(){!document.hidden&&l(this._element)&&this.next()}prev(){this._slide(et)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,it,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,it,(()=>this.to(t)));const n=this._getItemIndex(this._getActive());if(n===t)return;const r=t>n?tt:et;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&j.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),j.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&J.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of X.find(".carousel-item img",this._element))j.on(e,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(nt)),rightCallback:()=>this._slide(this._directionToOrder(rt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new J(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=at[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=X.findOne(".active",this._indicatorsElement);e.classList.remove(ot),e.removeAttribute("aria-current");const n=X.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(ot),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),r=t===tt,i=e||w(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=e=>j.trigger(this._element,e,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:s});if(o("slide.bs.carousel").defaultPrevented)return;if(!n||!i)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const c=r?"carousel-item-start":"carousel-item-end",u=r?"carousel-item-next":"carousel-item-prev";i.classList.add(u),p(i),n.classList.add(c),i.classList.add(c),this._queueCallback((()=>{i.classList.remove(c,u),i.classList.add(ot),n.classList.remove(ot,u,c),this._isSliding=!1,o(it)}),n,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return X.findOne(".active.carousel-item",this._element)}_getItems(){return X.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return v()?t===nt?et:tt:t===nt?tt:et}_orderToDirection(t){return v()?t===et?nt:rt:t===et?rt:nt}static jQueryInterface(t){return this.each((function(){const e=lt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}j.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=o(this);if(!e||!e.classList.contains(st))return;t.preventDefault();const n=lt.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===q.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),j.on(window,"load.bs.carousel.data-api",(()=>{const t=X.find('[data-bs-ride="carousel"]');for(const e of t)lt.getOrCreateInstance(e)})),y(lt);const ht="show",dt="collapse",ft="collapsing",pt='[data-bs-toggle="collapse"]',gt={parent:null,toggle:!0},mt={parent:"(null|element)",toggle:"boolean"};class vt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=X.find(pt);for(const r of n){const t=s(r),e=X.find(t).filter((t=>t===this._element));null!==t&&e.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gt}static get DefaultType(){return mt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>vt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(j.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const r of t)r.hide();const e=this._getDimension();this._element.classList.remove(dt),this._element.classList.add(ft),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ft),this._element.classList.add(dt,ht),this._element.style[e]="",j.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,p(this._element),this._element.classList.add(ft),this._element.classList.remove(dt,ht);for(const e of this._triggerArray){const t=o(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ft),this._element.classList.add(dt),j.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(ht)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=u(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(pt);for(const e of t){const t=o(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=X.find(":scope .collapse .collapse",this._config.parent);return X.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle("collapsed",!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const n=vt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}j.on(document,"click.bs.collapse.data-api",pt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=s(this),n=X.find(e);for(const r of n)vt.getOrCreateInstance(r,{toggle:!1}).toggle()})),y(vt);const yt="dropdown",_t="ArrowUp",bt="ArrowDown",wt="click.bs.dropdown.data-api",Et="keydown.bs.dropdown.data-api",Tt="show",Ct='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',It=`${Ct}.show`,xt=".dropdown-menu",St=v()?"top-end":"top-start",At=v()?"top-start":"top-end",kt=v()?"bottom-end":"bottom-start",Ot=v()?"bottom-start":"bottom-end",Nt=v()?"left-start":"right-start",Dt=v()?"right-start":"left-start",Rt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Lt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Pt extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=X.findOne(xt,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Rt}static get DefaultType(){return Lt}static get NAME(){return yt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(h(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!j.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))j.on(t,"mouseover",f);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Tt),this._element.classList.add(Tt),j.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(h(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!j.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",f);this._popper&&this._popper.destroy(),this._menu.classList.remove(Tt),this._element.classList.remove(Tt),this._element.setAttribute("aria-expanded","false"),q.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!c(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:c(this._config.reference)?t=u(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=n.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Tt)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Nt;if(t.classList.contains("dropstart"))return Dt;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?At:St:e?Ot:kt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(q.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=X.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>l(t)));n.length&&w(n,e,t===bt,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Pt.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=X.find(It);for(const n of e){const e=Pt.getInstance(n);if(!e||!1===e._config.autoClose)continue;const r=t.composedPath(),i=r.includes(e._menu);if(r.includes(e._element)||"inside"===e._config.autoClose&&!i||"outside"===e._config.autoClose&&i)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const s={relatedTarget:e._element};"click"===t.type&&(s.clickEvent=t),e._completeHide(s)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n="Escape"===t.key,r=[_t,bt].includes(t.key);if(!r&&!n)return;if(e&&!n)return;t.preventDefault();const i=X.findOne(Ct,t.delegateTarget.parentNode),s=Pt.getOrCreateInstance(i);if(r)return t.stopPropagation(),s.show(),void s._selectMenuItem(t);s._isShown()&&(t.stopPropagation(),s.hide(),i.focus())}}j.on(document,Et,Ct,Pt.dataApiKeydownHandler),j.on(document,Et,xt,Pt.dataApiKeydownHandler),j.on(document,wt,Pt.clearMenus),j.on(document,"keyup.bs.dropdown.data-api",Pt.clearMenus),j.on(document,wt,Ct,(function(t){t.preventDefault(),Pt.getOrCreateInstance(this).toggle()})),y(Pt);const Mt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",jt=".sticky-top",Ft="padding-right",Ut="margin-right";class Vt{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ft,(e=>e+t)),this._setElementAttributes(Mt,Ft,(e=>e+t)),this._setElementAttributes(jt,Ut,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ft),this._resetElementAttributes(Mt,Ft),this._resetElementAttributes(jt,Ut)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const r=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+r)return;this._saveInitialAttribute(t,e);const i=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${n(Number.parseFloat(i))}px`)}))}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&q.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const n=q.getDataAttribute(t,e);null!==n?(q.removeDataAttribute(t,e),t.style.setProperty(e,n)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(c(t))e(t);else for(const n of X.find(t,this._element))e(n)}}const $t="show",Bt="mousedown.bs.backdrop",qt={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ht={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wt extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return qt}static get DefaultType(){return Ht}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void _(t);this._append();const e=this._getElement();this._config.isAnimated&&p(e),e.classList.add($t),this._emulateAnimation((()=>{_(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove($t),this._emulateAnimation((()=>{this.dispose(),_(t)}))):_(t)}dispose(){this._isAppended&&(j.off(this._element,Bt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=u(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),j.on(t,Bt,(()=>{_(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){b(t,this._getElement(),this._config.isAnimated)}}const zt=".bs.focustrap",Kt="backward",Gt={autofocus:!0,trapElement:null},Qt={autofocus:"boolean",trapElement:"element"};class Xt extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gt}static get DefaultType(){return Qt}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,zt),j.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),j.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,zt))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=X.focusableChildren(e);0===n.length?e.focus():this._lastTabNavDirection===Kt?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Kt:"forward")}}const Yt="hidden.bs.modal",Zt="show.bs.modal",Jt="modal-open",te="show",ee="modal-static",ne={backdrop:!0,focus:!0,keyboard:!0},re={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ie extends W{constructor(t,e){super(t,e),this._dialog=X.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Vt,this._addEventListeners()}static get Default(){return ne}static get DefaultType(){return re}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,Zt,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Jt),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(j.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(te),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])j.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Xt({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=X.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),p(this._element),this._element.classList.add(te),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),j.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),j.on(this._element,"mousedown.dismiss.bs.modal",(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Jt),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,Yt)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ee)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ee),this._queueCallback((()=>{this._element.classList.remove(ee),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const t=v()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!n&&t){const t=v()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=ie.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}j.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=o(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,Zt,(t=>{t.defaultPrevented||j.one(e,Yt,(()=>{l(this)&&this.focus()}))}));const n=X.findOne(".modal.show");n&&ie.getInstance(n).hide(),ie.getOrCreateInstance(e).toggle(this)})),z(ie),y(ie);const se="show",oe="showing",ae="hiding",ce=".offcanvas.show",ue="hidePrevented.bs.offcanvas",le="hidden.bs.offcanvas",he={backdrop:!0,keyboard:!0,scroll:!1},de={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fe extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return he}static get DefaultType(){return de}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Vt).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(oe),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(se),this._element.classList.remove(oe),j.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ae),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(se,ae),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Vt).reset(),j.trigger(this._element,le)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Wt({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():j.trigger(this._element,ue)}:null})}_initializeFocusTrap(){return new Xt({trapElement:this._element})}_addEventListeners(){j.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():j.trigger(this._element,ue))}))}static jQueryInterface(t){return this.each((function(){const e=fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}j.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=o(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this))return;j.one(e,le,(()=>{l(this)&&this.focus()}));const n=X.findOne(ce);n&&n!==e&&fe.getInstance(n).hide(),fe.getOrCreateInstance(e).toggle(this)})),j.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of X.find(ce))fe.getOrCreateInstance(t).show()})),j.on(window,"resize.bs.offcanvas",(()=>{for(const t of X.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&fe.getOrCreateInstance(t).hide()})),z(fe),y(fe);const pe=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ge=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,me=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,ve=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?!pe.has(n)||Boolean(ge.test(t.nodeValue)||me.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(n)))},ye={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},_e={allowList:ye,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},be={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},we={entry:"(string|element|function|null)",selector:"(string|element)"};class Ee extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return _e}static get DefaultType(){return be}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},we)}_setContent(t,e,n){const r=X.findOne(n,t);r&&((e=this._resolvePossibleFunction(e))?c(e)?this._putElementInTemplate(u(e),r):this._config.html?r.innerHTML=this._maybeSanitize(e):r.textContent=e:r.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,n){if(!t.length)return t;if(n&&"function"==typeof n)return n(t);const r=(new window.DOMParser).parseFromString(t,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const s of i){const t=s.nodeName.toLowerCase();if(!Object.keys(e).includes(t)){s.remove();continue}const n=[].concat(...s.attributes),r=[].concat(e["*"]||[],e[t]||[]);for(const e of n)ve(e,r)||s.removeAttribute(e.nodeName)}return r.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Te=new Set(["sanitize","allowList","sanitizeFn"]),Ce="fade",Ie="show",xe=".modal",Se="hide.bs.modal",Ae="hover",ke="focus",Oe={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},Ne={allowList:ye,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},De={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Re extends W{constructor(t,e){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return Ne}static get DefaultType(){return De}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(xe),Se,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.eventName("show")),e=(d(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),j.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(n),n.classList.add(Ie),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))j.on(i,"mouseover",f);this._queueCallback((()=>{const t=this._isHovered;this._isHovered=!1,j.trigger(this._element,this.constructor.eventName("shown")),t&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(j.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Ie),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))j.off(e,"mouseover",f);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ce,Ie),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(Ce),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ee({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ce)}_isShown(){return this.tip&&this.tip.classList.contains(Ie)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,r=Oe[e.toUpperCase()];return n.createPopper(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)j.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===Ae?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n=e===Ae?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");j.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?ke:Ae]=!0,e._enter()})),j.on(this._element,n,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?ke:Ae]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(xe),Se,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=q.getDataAttributes(this._element);for(const n of Object.keys(e))Te.has(n)&&delete e[n];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:u(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"","number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=Re.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}y(Re);const Le={...Re.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Pe={...Re.DefaultType,content:"(null|string|element|function)"};class Me extends Re{static get Default(){return Le}static get DefaultType(){return Pe}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Me.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}y(Me);const je="click.bs.scrollspy",Fe="active",Ue="[href]",Ve={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},$e={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class Be extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ve}static get DefaultType(){return $e}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=u(t.target)||document.body,t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,je),j.on(this._config.target,je,Ue,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}})))}_getNewObserver(){const t={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),n=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of t){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(s));continue}const t=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&t){if(n(s),!r)return}else i||t||n(s)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=X.find(Ue,this._config.target);for(const e of t){if(!e.hash||h(e))continue;const t=X.findOne(e.hash,this._element);l(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Fe),this._activateParents(t),j.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))X.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Fe);else for(const e of X.parents(t,".nav, .list-group"))for(const t of X.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(Fe)}_clearActiveClass(t){t.classList.remove(Fe);const e=X.find("[href].active",t);for(const n of e)n.classList.remove(Fe)}static jQueryInterface(t){return this.each((function(){const e=Be.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of X.find('[data-bs-spy="scroll"]'))Be.getOrCreateInstance(t)})),y(Be);const qe="ArrowLeft",He="ArrowRight",We="ArrowUp",ze="ArrowDown",Ke="active",Ge="fade",Qe="show",Xe='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ye=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Xe}`;class Ze extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?j.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;j.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Ke),this._activate(o(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),j.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Qe)}),t,t.classList.contains(Ge)))}_deactivate(t,e){t&&(t.classList.remove(Ke),t.blur(),this._deactivate(o(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),j.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Qe)}),t,t.classList.contains(Ge)))}_keydown(t){if(![qe,He,We,ze].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[He,ze].includes(t.key),n=w(this._getChildren().filter((t=>!h(t))),t.target,e,!0);n&&Ze.getOrCreateInstance(n).show()}_getChildren(){return X.find(Ye,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=o(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains("dropdown"))return;const r=(t,r)=>{const i=X.findOne(t,n);i&&i.classList.toggle(r,e)};r(".dropdown-toggle",Ke),r(".dropdown-menu",Qe),r(".dropdown-item",Ke),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(Ke)}_getInnerElement(t){return t.matches(Ye)?t:X.findOne(Ye,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ze.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(document,"click.bs.tab",Xe,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||Ze.getOrCreateInstance(this).show()})),j.on(window,"load.bs.tab",(()=>{for(const t of X.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Ze.getOrCreateInstance(t)})),y(Ze);const Je="hide",tn="show",en="showing",nn={animation:"boolean",autohide:"boolean",delay:"number"},rn={animation:!0,autohide:!0,delay:5e3};class sn extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rn}static get DefaultType(){return nn}static get NAME(){return"toast"}show(){j.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Je),p(this._element),this._element.classList.add(tn,en),this._queueCallback((()=>{this._element.classList.remove(en),j.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(j.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(en),this._queueCallback((()=>{this._element.classList.add(Je),this._element.classList.remove(en,tn),j.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(tn),super.dispose()}isShown(){return this._element.classList.contains(tn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),j.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=sn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return z(sn),y(sn),{Alert:K,Button:Q,Carousel:lt,Collapse:vt,Dropdown:Pt,Modal:ie,Offcanvas:fe,Popover:Me,ScrollSpy:Be,Tab:Ze,Toast:sn,Tooltip:Re}}))},2829:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},0:function(t,e,n){"use strict";n.d(e,{eJ:function(){return ce},xI:function(){return lr},hg:function(){return le},x9:function(){return ue},CI:function(){return he}});var r=n(4046),i=n(3405);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(1363),a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(t,...e){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(t){_(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===x()||"https:"===x()}function x(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof r.g)throw s;f(t,"network-request-failed")}}async function j(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=z(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(W(s.auth_time)),issuedAtTime:q(W(s.iat)),expirationTime:q(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function z(t){var e;const[n,i,s]=t.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(i);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function K(t){const e=z(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&Q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function J(t){const e=(0,r.Ku)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return J(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=e;v(_&&T,t,"internal-error");const C=rt.fromJSON(this.name,T);v("string"===typeof _,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(g,t.name),it(m,t.name),it(y,t.name);const I=new st({uid:_,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function dt(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.ZQ)()){return/crios\//i.test(t)}function pt(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function gt(t=(0,r.ZQ)()){return/android/i.test(t)}function mt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function vt(t=(0,r.ZQ)()){return/webos/i.test(t)}function yt(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _t(t=(0,r.ZQ)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.lT)()&&10===document.documentMode}function wt(t=(0,r.ZQ)()){return yt(t)||gt(t)||vt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.ZQ)());break;case"Worker":n=`${lt((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.beforeStateQueue=new Ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Z(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.Ku)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function xt(t){return(0,r.Ku)(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Dt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends At{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Rt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Rt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Ot(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="http://localhost";class Mt extends At{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Mt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Lt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Lt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Lt(t,e)}buildRequest(){const t={requestUri:Pt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function Ft(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Ut(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Vt={["USER_NOT_FOUND"]:"user-not-found"};async function $t(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends At{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ft(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ut(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return $t(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Bt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class Wt{constructor(t){var e,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new Wt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(){this.providerId=zt.PROVIDER_ID}static credential(t,e){return Rt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Wt.parseLink(e);return v(n,"argument-error"),Rt._fromEmailAndCode(t,n.code,n.tenantId)}}zt.PROVIDER_ID="password",zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Gt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch(e){return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Gt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Zt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return j(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.TWITTER_SIGN_IN_METHOD="twitter.com",Zt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=ee(n),o=new te({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ee(n);return new te({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends r.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ne(t,e,n,r)}}function re(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const r=await G(t,re(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=z(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),te._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r="signIn",i=await re(t,r,e),s=await te._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ae(t,e){return oe(xt(t),e)}async function ce(t,e,n){const r=xt(t),i=await Jt(r,{returnSecureToken:!0,email:e,password:n}),s=await te._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ue(t,e,n){return ae((0,r.Ku)(t),zt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n,i){return(0,r.Ku)(t).onAuthStateChanged(e,n,i)}function he(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const pe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(pe,"1"),this.storage.removeItem(pe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){const t=(0,r.ZQ)();return dt(t)||yt(t)}const ve=1e3,ye=10;class _e extends ge{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=me()&&Et(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ye):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ve)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_e.type="LOCAL";const be=_e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends ge{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}we.type="SESSION";const Ee=we;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ce(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Te(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.receivers=[];class xe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ie("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return window}function Ae(t){Se().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return"undefined"!==typeof Se()["WorkerGlobalScope"]&&"function"===typeof Se()["importScripts"]}async function Oe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ne(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function De(){return ke()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebaseLocalStorageDb",Le=1,Pe="firebaseLocalStorage",Me="fbase_key";class je{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Fe(t,e){return t.transaction([Pe],e?"readwrite":"readonly").objectStore(Pe)}function Ue(){const t=indexedDB.deleteDatabase(Re);return new je(t).toPromise()}function Ve(){const t=indexedDB.open(Re,Le);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Pe,{keyPath:Me})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Pe)?e(n):(n.close(),await Ue(),e(await Ve()))}))}))}async function $e(t,e,n){const r=Fe(t,!0).put({[Me]:e,value:n});return new je(r).toPromise()}async function Be(t,e){const n=Fe(t,!1).get(e),r=await new je(n).toPromise();return void 0===r?null:r.value}function qe(t,e){const n=Fe(t,!0).delete(e);return new je(n).toPromise()}const He=800,We=3;class ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ve()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>We)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ke()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ce._getInstance(De()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Oe(),!this.activeServiceWorker)return;this.sender=new xe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ne()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ve();return await $e(t,pe,"1"),await qe(t,pe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>$e(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Be(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>qe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Fe(t,!1).getAll();return new je(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ze.type="LOCAL";const Ke=ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function Qe(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)}))}function Ze(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ze("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function tn(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===Je,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await de(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Ge(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await jt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(t){this.providerId=en.PROVIDER_ID,this.auth=xt(t)}verifyPhoneNumber(t,e){return tn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return Bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return en.credentialFromTaggedObject(e)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Bt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class rn extends At{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Lt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Lt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Lt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sn(t){return oe(t.auth,new rn(t),t.bypassAuthState)}function on(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new rn(t),t.bypassAuthState)}async function an(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ie(n,new rn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new k(2e3,1e4);class ln extends cn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Ie();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,un.get())};t()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class fn extends cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=dn.get(this.auth._key());if(!t){try{const e=await pn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}dn.set(this.auth._key(),t)}return this.bypassAuthState||dn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(t,e){const n=vn(e),r=mn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function gn(t,e){dn.set(t._key(),e)}function mn(t){return w(t._redirectPersistence)}function vn(t){return ct(hn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e,n=!1){const r=xt(t),i=nn(r,e),s=new fn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=6e5;class bn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Tn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!En(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=_n&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(t))}saveEventToCache(t){this.cachedEventUids.add(wn(t)),this.lastProcessedEventTime=Date.now()}}function wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function En({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Tn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return En(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xn=/^https?/;async function Sn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cn(t);for(const r of e)try{if(An(r))return}catch(n){}f(t,"unauthorized-domain")}function An(t){const e=C(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xn.test(n))return!1;if(In.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new k(3e4,6e4);function On(){const t=Se().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Nn(t){return new Promise(((e,n)=>{var r,i,s;function o(){On(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(t,"network-request-failed"))},timeout:kn.get()})}if(null===(i=null===(r=Se().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Se().gapi)||void 0===s?void 0:s.load)){const e=Ze("iframefcb");return Se()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ye(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Dn=null,t}))}let Dn=null;function Rn(t){return Dn=Dn||Nn(t),Dn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new k(5e3,15e3),Pn="__/auth/iframe",Mn="emulator/auth/iframe",jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Un(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,Mn):`https://${t.config.authDomain}/${Pn}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=Fn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function Vn(t){const e=await Rn(t),n=Se().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Un(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Se().setTimeout((()=>{r(i)}),Ln.get());function o(){Se().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bn=500,qn=600,Hn="_blank",Wn="http://localhost";class zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Kn(t,e,n,i=Bn,s=qn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$n),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=ft(l)?Hn:n),ht(l)&&(e=e||Wn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(_t(l)&&"_self"!==c)return Gn(e||"",c),new zn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new zn(d)}function Gn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="__/auth/handler",Xn="emulator/auth/handler";function Yn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Gt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Zn(t)}?${(0,r.Am)(u).slice(1)}`}function Zn({config:t}){return t.emulator?O(t,Xn):`https://${t.authDomain}/${Qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="webStorageSupport";class tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ee,this._completeRedirectFn=yn,this._overrideRedirectResult=gn}async _openPopup(t,e,n,r){var i;_(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Yn(t,e,n,C(),r);return Kn(t,s,Ie())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ae(Yn(t,e,n,C(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Vn(t),n=new bn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Jn,{type:Jn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Jn];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const er=tr;class nr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new rr(t)}_finalizeEnroll(t,e,n){return fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Qe(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ir{constructor(){}static assertion(t){return rr._fromCredential(t)}}ir.FACTOR_ID="phone";var sr="@firebase/auth",or="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new It(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=xt(t.getProvider("auth").getImmediate());return(t=>new ar(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(sr,or,cr(t)),(0,i.KO)(sr,or,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:er,persistence:[Ke,be,Ee]})}ur("Browser")},5557:function(t,e,n){"use strict";n.d(e,{gS:function(){return Fh},rJ:function(){return xl},kd:function(){return jh},H9:function(){return Sl},FD:function(){return Sh},rf:function(){return xh},GG:function(){return Ph},aU:function(){return Nl},AB:function(){return wh},aQ:function(){return Uh},My:function(){return _h},P:function(){return gh},HM:function(){return Ch},EO:function(){return Th},mZ:function(){return Mh},_M:function(){return vh}});n(3266),n(1337),n(7036),n(4517),n(1794),n(1319),n(9078);var r,i=n(3405),s=n(852),o=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var C=0,I={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete I[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function A(t){t:{var e=zn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function k(t){return Array.prototype.concat.apply([],arguments)}function O(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var D,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var j=M.userAgent;if(j){D=j;break t}}D=""}function F(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function B(t){return B[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=d;var H,W=L(D,"Opera"),z=L(D,"Trident")||L(D,"MSIE"),K=L(D,"Edge"),G=K||z,Q=L(D,"Gecko")&&!(L(D.toLowerCase(),"webkit")&&!L(D,"Edge"))&&!(L(D,"Trident")||L(D,"MSIE"))&&!L(D,"Edge"),X=L(D.toLowerCase(),"webkit")&&!L(D,"Edge");function Y(){var t=h.document;return t?t.documentMode:void 0}t:{var Z="",J=function(){var t=D;return Q?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):W?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(Z=J?J[1]:""),z){var tt=Y();if(null!=tt&&tt>parseFloat(Z)){H=String(tt);break t}}H=Z}var et,nt={};function rt(){return q((function(){let t=0;const e=R(String(H)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&z){var it=Y();et=it||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Q){t:{try{B(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=x(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function _t(t,e,n,r,i){if(r&&r.once)return Et(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);return null}return n=kt(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=St(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(It(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=xt;return t}function Et(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Et(t,e[s],n,r,i);return null}return n=kt(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=kt(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mt(s,n,r,i),-1<n&&(ft(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=St(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,i)),(n=-1<t?e[t]:null)&&Ct(n))}function Ct(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(It(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(gt(n,t),0==n.h&&(n.src=null,e[vt]=null)):ft(t)}}}function It(t){return t in yt?yt[t]:yt[t]="on"+t}function xt(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ct(t),t=n.call(r,e)}return t}function St(t){return t=t[vt],t instanceof pt?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Ot(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),$(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Dt(o,r,!0,e)&&i}if(o=e.g=t,i=Dt(o,r,!0,e)&&i,i=Dt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Dt(o,r,!1,e)&&i}function Dt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ot,T),Ot.prototype[lt]=!0,Ot.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Ot.prototype.M=function(){if(Ot.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ft(n[r]);delete e.g[t],e.h--}}this.I=null},Ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Rt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,jt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){h.setTimeout((()=>{throw t}),0)}function Vt(t,e){Mt||$t(),Bt||(Mt(),Bt=!0),qt.add(t,e)}function $t(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(Ht)}}var Bt=!1,qt=new Pt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function Wt(t,e){Ot.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Gt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Gt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Wt,Ot),r=Wt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(zt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Wt.Z.M.call(this),zt(this),delete this.g};class Qt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){T.call(this),this.h=t,this.g={}}E(Xt,T);var Yt=[];function Zt(t,e,n,r){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var i=0;i<n.length;i++){var s=_t(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Jt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ct(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Rt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Jt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Ot}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();Nt(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();Nt(e,new he(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",E(ue,at),oe.STAT_EVENT="statevent",E(he,at),oe.Na="timingevent",E(fe,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function _e(){}ve.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ce(){}function Ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Xt(this),this.P=Se,t=G?125:void 0,this.W=new Wt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xe}function xe(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ce,ve),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},be=new Ce;var Se=45e3,Ae={},ke={};function Oe(t,e,n){t.K=1,t.v=en(Qe(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Pe(t),t.A=Qe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new xe,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Qt(b(t.Ia,t,t.g),t.O)),Zt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Re(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==ke){4==e&&(t.o=4,de(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ae){t.o=4,de(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),Ve(t,r)}De(t)&&r!=ke&&r!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,de(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Fe(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ke:(n=Number(e.substring(n,r)),isNaN(n)?Ae:(r+=1,r+n>e.length?ke:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function je(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||yr(t.l,t)}function Ue(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||In(n.i,t)))if(n.I=t.N,!t.J&&In(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),sr(n)}pr(n),de(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Cn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&vr(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){Sn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(je(a),Pe(a)),r.g=o}else fr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function $e(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)S(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=$e(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];We(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],We(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ie.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Zn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Zn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=d?3:2),je(this);var n=this.g.ba();this.N=n;e:if(De(this)){var r=Jn(this.g);t="";var i=r.length,s=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Fe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,de(12),Ue(this),Fe(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.U?(Re(this,l,o),G&&this.i&&3==l&&(Zt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Ve(this,o)),4==l&&Ue(this),this.i&&!this.I&&(4==l?yr(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Ue(this),Fe(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(je(this),Re(this,t,e),this.i&&4!=t&&Pe(this))}},r.cancel=function(){this.I=!0,Ue(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),de(17)),Ue(this),this.o=2,Fe(this)):Me(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return We(this.h,t)?this.h[t]:e},r.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Ye(this,t.i),Ze(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=sn(n[2]||""),Ye(this,n[3]||"",!0),Ze(this,n[4]),this.l=sn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Qe(t){return new Ge(t)}function Xe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?sn(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof fn?(t.h=e,_n(t.h,t.g)):(n||(e=on(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ge?Qe(t):new Ge(t,void 0)}function rn(t,e,n,r){var i=new Ge(null,void 0);return t&&Xe(i,t),e&&Ye(i,e),n&&Ze(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=yn(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function mn(t,e){return pn(t),e=yn(t,e),We(t.g.h,e)}function vn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),O(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _n(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),vn(this,n,t))}),t)),t.j=e}r=fn.prototype,r.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){S(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=k(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=k(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cn(t){return t.h?1:t.g?t.g.size:0}function In(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xn(t,e){t.g?t.g.add(e):t.h=e}function Sn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function An(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return O(t.i)}function kn(){}function On(){this.g=new kn}function Nn(t,e,n){const r=n||"";try{Be(t,(function(t,n){let i=t;p(t)&&(i=Rt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=w(Rn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(Rn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(Rn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(Rn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Rn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},kn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},kn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Ln,ve),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),E(Pn,Ot);var Mn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Pn.prototype,r.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Un(this),3==this.readyState&&jn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},r.Ta=function(t){this.g&&(this.response=t,Fn(this))},r.ha=function(){this.g&&Fn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=h.JSON.parse;function $n(t){Ot.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}E($n,Ot);var Bn="",qn=/^https?$/i,Hn=["POST","PUT"];function Wn(t){return z&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function zn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),Xn(t)}function Gn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Qn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Zn(t)||2!=t.ba()))if(t.v&&4==Zn(t))Kt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Zn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(ze)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Gn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Yn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Nt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new On,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Qe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ie(t,t.h,e,void 0),e.K=2,e.v=en(Qe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wr(t)}function sr(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function ur(t,e){return!(Cn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),_r(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Qe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ie(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=dr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xn(t.i,n),Oe(n,r,e)}function hr(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function dr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{Nn(a,t,"req"+n+"_")}catch(Yr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function fr(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),_r(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Ie(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Qe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Qe(e)),n.s=null,n.U=!0,Ne(n,t)}function vr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){vr(t),gr(t),t.g=null;var r=2}else{if(!In(t.i,e))return;n=e.D,Sn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Nt(r,new fe(r,n,e,i)),cr(t)}else fr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function _r(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xe(n,"https"),en(n)),Dn(n.toString(),r)}else de(2);t.G=0,t.j&&t.j.va(e),wr(t),or(t)}function wr(t){t.G=0,t.I=-1,t.j&&(0==An(t.i).length&&0==t.l.length||(t.i.i.length=0,O(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=nn(n);if(""!=r.i)e&&Ye(r,e+"."+r.i),Ze(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $n(new Ln({ib:!0})):new $n(t.qa),e.L=t.H,e}function Cr(){}function Ir(){if(z&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function xr(t,e){Ot.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}function Sr(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ar(){Te.call(this),this.status=1}function kr(t){this.g=t}r=$n.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const i=new qe(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=A(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=x(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Wn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Xn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),$n.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},r.cb=function(){Qn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ie(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=U(s),$(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=dr(this,i,e),n=Qe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),xn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Oe(i,n,null)):Oe(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),sr(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),de(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},r=Cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ir.prototype.g=function(t,e){return new xr(t,e)},E(xr,Ot),xr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(b(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),cr(t)},xr.prototype.close=function(){ir(this.g)},xr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Rt(t),ar(this.g,e)):ar(this.g,t)},xr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,xr.Z.M.call(this)},E(Sr,Ee),E(Ar,Te),E(kr,Cr),kr.prototype.xa=function(){Nt(this.g,"a")},kr.prototype.wa=function(t){Nt(this.g,new Sr(t))},kr.prototype.va=function(t){Nt(this.g,new Ar(t))},kr.prototype.ua=function(){Nt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,xr.prototype.send=xr.prototype.u,xr.prototype.open=xr.prototype.m,xr.prototype.close=xr.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",_e.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Ot.prototype.listen=Ot.prototype.N,$n.prototype.listenOnce=$n.prototype.O,$n.prototype.getLastError=$n.prototype.La,$n.prototype.getLastErrorCode=$n.prototype.Da,$n.prototype.getStatus=$n.prototype.ba,$n.prototype.getResponseJson=$n.prototype.Qa,$n.prototype.getResponseText=$n.prototype.ga,$n.prototype.send=$n.prototype.ea;var Or=u.createWebChannelTransport=function(){return new Ir},Nr=u.getStatEventTarget=function(){return ce()},Dr=u.ErrorCode=ge,Rr=u.EventType=me,Lr=u.Event=oe,Pr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Ln,jr=u.WebChannel=_e,Fr=u.XhrIo=$n;const Ur="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $r="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new o.Vy("@firebase/firestore");function qr(){return Br.logLevel}function Hr(t,...e){if(Br.logLevel<=o.$b.DEBUG){const n=e.map(Kr);Br.debug(`Firestore (${$r}): ${t}`,...n)}}function Wr(t,...e){if(Br.logLevel<=o.$b.ERROR){const n=e.map(Kr);Br.error(`Firestore (${$r}): ${t}`,...n)}}function zr(t,...e){if(Br.logLevel<=o.$b.WARN){const n=e.map(Kr);Br.warn(`Firestore (${$r}): ${t}`,...n)}}function Kr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t="Unexpected state"){const e=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+t;throw Wr(e),new Error(e)}function Qr(t,e){t||Gr()}function Xr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zr extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Qr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Qr(null===t||"string"==typeof t),new Vr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=Vr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Qr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ui(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Zr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Zr(Yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Zr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Zr(Yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ui(this.nanoseconds,t.nanoseconds):ui(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new hi(0,0))}static max(){return new di(new hi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gr(),void 0===n?n=t.length-e:n>t.length-e&&Gr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===fi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pi extends fi{construct(t,e,n){return new pi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pi(e)}static emptyPath(){return new pi([])}}const gi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mi extends fi{construct(t,e,n){return new mi(t,e,n)}static isValidIdentifier(t){return gi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Zr(Yr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Zr(Yr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Zr(Yr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mi(e)}static emptyPath(){return new mi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.path=t}static fromPath(t){return new vi(pi.fromString(t))}static fromName(t){return new vi(pi.fromString(t).popFirst(5))}static empty(){return new vi(pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vi(new pi(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}yi.UNKNOWN_ID=-1;function _i(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new hi(n+1,0):new hi(n,r));return new wi(i,vi.empty(),e)}function bi(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wi(di.min(),vi.empty(),-1)}static max(){return new wi(di.max(),vi.empty(),-1)}}function Ei(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=vi.comparator(t.documentKey,e.documentKey),0!==n?n:ui(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ci{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t){if(t.code!==Yr.FAILED_PRECONDITION||t.message!==Ti)throw t;Hr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new xi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof xi?e:xi.resolve(e)}catch(t){return xi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):xi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):xi.reject(e)}static resolve(t){return new xi(((e,n)=>{e(t)}))}static reject(t){return new xi(((e,n)=>{n(t)}))}static waitFor(t){return new xi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=xi.resolve(!1);for(const n of t)e=e.next((t=>t?xi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new xi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new xi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai.ot=-1;class Di{constructor(t,e){this.comparator=t,this.root=e||Li.EMPTY}insert(t,e){return new Di(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Li.BLACK,null,null))}remove(t){return new Di(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Li.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ri(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ri(this.root,t,this.comparator,!0)}}class Ri{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Li{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Li.RED,this.left=null!=r?r:Li.EMPTY,this.right=null!=i?i:Li.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Li(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Li.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Li.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Li.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gr();if(this.right.isRed())throw Gr();const t=this.left.check();if(t!==this.right.check())throw Gr();return t+(this.isRed()?0:1)}}Li.EMPTY=null,Li.RED=!0,Li.BLACK=!1,Li.EMPTY=new class{constructor(){this.size=0}get key(){throw Gr()}get value(){throw Gr()}get color(){throw Gr()}get left(){throw Gr()}get right(){throw Gr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Li(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(t){this.comparator=t,this.data=new Di(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(t){return new Mi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pi(this.comparator);return e.data=t,e}}class Mi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(t){this.fields=t,t.sort(mi.comparator)}static empty(){return new ji([])}unionWith(t){let e=new Pi(mi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ji(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return li(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Fi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Fi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ui(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fi.EMPTY_BYTE_STRING=new Fi("");const Ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(t){if(Qr(!!t),"string"==typeof t){let e=0;const n=Ui.exec(t);if(Qr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$i(t.seconds),nanos:$i(t.nanos)}}function $i(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Bi(t){return"string"==typeof t?Fi.fromBase64String(t):Fi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hi(t){const e=t.mapValue.fields.__previous_value__;return qi(e)?Hi(e):e}function Wi(t){const e=Vi(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ki{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ki&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){return null==t}function Qi(t){return 0===t&&1/t==-1/0}function Xi(t){return"number"==typeof t&&Number.isInteger(t)&&!Qi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:ds(t)?9007199254740991:10:Gr()}function Ji(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Vi(t.timestampValue),r=Vi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Bi(t.bytesValue).isEqual(Bi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $i(t.geoPointValue.latitude)===$i(e.geoPointValue.latitude)&&$i(t.geoPointValue.longitude)===$i(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $i(t.integerValue)===$i(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$i(t.doubleValue),r=$i(e.doubleValue);return n===r?Qi(n)===Qi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ki(n)!==ki(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ji(n[i],r[i])))return!1;return!0}(t,e);default:return Gr()}}function ts(t,e){return void 0!==(t.values||[]).find((t=>Ji(t,e)))}function es(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return ui(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ui(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$i(t.integerValue||t.doubleValue),r=$i(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ns(t.timestampValue,e.timestampValue);case 4:return ns(Wi(t),Wi(e));case 5:return ui(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Bi(t),r=Bi(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ui(n[i],r[i]);if(0!==t)return t}return ui(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ui($i(t.latitude),$i(e.latitude));return 0!==n?n:ui($i(t.longitude),$i(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=es(n[i],r[i]);if(t)return t}return ui(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Yi.mapValue&&e===Yi.mapValue)return 0;if(t===Yi.mapValue)return 1;if(e===Yi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ui(r[o],s[o]);if(0!==t)return t;const e=es(n[r[o]],i[s[o]]);if(0!==e)return e}return ui(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Gr()}}function ns(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ui(t,e);const n=Vi(t),r=Vi(e),i=ui(n.seconds,r.seconds);return 0!==i?i:ui(n.nanos,r.nanos)}function rs(t){return is(t)}function is(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Vi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,vi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=is(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${is(t.fields[i])}`;return n+"}"}(t.mapValue):Gr();var e,n}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function os(t){return!!t&&"integerValue"in t}function as(t){return!!t&&"arrayValue"in t}function cs(t){return!!t&&"nullValue"in t}function us(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ls(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=hs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ds(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(t){this.value=t}static empty(){return new fs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ls(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hs(e)}setAll(t){let e=mi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=hs(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ls(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ji(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ls(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Oi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new fs(hs(this.value))}}function ps(t){const e=[];return Oi(t.fields,((t,n)=>{const r=new mi([t]);if(ls(n)){const t=ps(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ji(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gs{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new gs(t,0,di.min(),di.min(),fs.empty(),0)}static newFoundDocument(t,e,n){return new gs(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new gs(t,2,e,di.min(),fs.empty(),0)}static newUnknownDocument(t,e){return new gs(t,3,e,di.min(),fs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=di.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function vs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ms(t,e,n,r,i,s,o)}function ys(t){const e=Xr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+rs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>rs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>rs(t))).join(",")),e.ut=t}return e.ut}function _s(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${rs(e.value)}`;var e})).join(", ")}]`),Gi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>rs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>rs(t))).join(",")),`Target(${e})`}function bs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Rs(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ji(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function ws(t){return vi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Es extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ts(t,e,n):"array-contains"===e?new Ss(t,n):"in"===e?new As(t,n):"not-in"===e?new ks(t,n):"array-contains-any"===e?new Os(t,n):new Es(t,e,n)}static ct(t,e,n){return"in"===e?new Cs(t,n):new Is(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(es(e,this.value)):null!==e&&Zi(this.value)===Zi(e)&&this.at(es(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ts extends Es{constructor(t,e,n){super(t,e,n),this.key=vi.fromName(n.referenceValue)}matches(t){const e=vi.comparator(t.key,this.key);return this.at(e)}}class Cs extends Es{constructor(t,e){super(t,"in",e),this.keys=xs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Is extends Es{constructor(t,e){super(t,"not-in",e),this.keys=xs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>vi.fromName(t.referenceValue)))}class Ss extends Es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return as(e)&&ts(e.arrayValue,this.value)}}class As extends Es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ts(this.value.arrayValue,e)}}class ks extends Es{constructor(t,e){super(t,"not-in",e)}matches(t){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ts(this.value.arrayValue,e)}}class Os extends Es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!as(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ts(this.value.arrayValue,t)))}}class Ns{constructor(t,e){this.position=t,this.inclusive=e}}class Ds{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ls(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?vi.comparator(vi.fromName(o.referenceValue),n.key):es(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ji(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function js(t,e,n,r,i,s,o,a){return new Ms(t,e,n,r,i,s,o,a)}function Fs(t){return new Ms(t)}function Us(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Vs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $s(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Bs(t){return null!==t.collectionGroup}function qs(t){const e=Xr(t);if(null===e.lt){e.lt=[];const t=$s(e),n=Vs(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Ds(t)),e.lt.push(new Ds(mi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ds(mi.keyField(),t))}}}return e.lt}function Hs(t){const e=Xr(t);if(!e.ft)if("F"===e.limitType)e.ft=vs(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of qs(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ds(i.field,e))}const n=e.endAt?new Ns(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ns(e.startAt.position,e.startAt.inclusive):null;e.ft=vs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Ws(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zs(t,e){return bs(Hs(t),Hs(e))&&t.limitType===e.limitType}function Ks(t){return`${ys(Hs(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${_s(Hs(t))}; limitType=${t.limitType})`}function Qs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):vi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ls(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,qs(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ls(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,qs(t),e))}(t,e)}function Xs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ys(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const t=Zs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Zs(t,e,n){const r=t.field.isKeyField()?vi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?es(r,i):Gr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qi(e)?"-0":e}}function to(t){return{integerValue:""+t}}function eo(t,e){return Xi(e)?to(e):Js(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._=void 0}}function ro(t,e,n){return t instanceof oo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ao?co(t,e):t instanceof uo?lo(t,e):function(t,e){const n=so(t,e),r=fo(n)+fo(t._t);return os(n)&&os(t._t)?to(r):Js(t.wt,r)}(t,e)}function io(t,e,n){return t instanceof ao?co(t,e):t instanceof uo?lo(t,e):n}function so(t,e){return t instanceof ho?os(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class oo extends no{}class ao extends no{constructor(t){super(),this.elements=t}}function co(t,e){const n=po(e);for(const r of t.elements)n.some((t=>Ji(t,r)))||n.push(r);return{arrayValue:{values:n}}}class uo extends no{constructor(t){super(),this.elements=t}}function lo(t,e){let n=po(e);for(const r of t.elements)n=n.filter((t=>!Ji(t,r)));return{arrayValue:{values:n}}}class ho extends no{constructor(t,e){super(),this.wt=t,this._t=e}}function fo(t){return $i(t.integerValue||t.doubleValue)}function po(t){return as(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ao&&e instanceof ao||t instanceof uo&&e instanceof uo?li(t.elements,e.elements,Ji):t instanceof ho&&e instanceof ho?Ji(t._t,e._t):t instanceof oo&&e instanceof oo}(t.transform,e.transform)}class mo{constructor(t,e){this.version=t,this.transformResults=e}}class vo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vo}static exists(t){return new vo(void 0,t)}static updateTime(t){return new vo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _o{}function bo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Oo(t.key,vo.none()):new Io(t.key,t.data,vo.none());{const n=t.data,r=fs.empty();let i=new Pi(mi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new xo(t.key,r,new ji(i.toArray()),vo.none())}}function wo(t,e,n){t instanceof Io?function(t,e,n){const r=t.value.clone(),i=Ao(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof xo?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ao(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(So(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Io?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=t.value.clone(),s=ko(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof xo?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=ko(t.fieldTransforms,r,e),s=e.data;return s.setAll(So(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function To(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=so(r.transform,t||null);null!=i&&(null===n&&(n=fs.empty()),n.set(r.field,i))}return n||null}function Co(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&li(t,e,((t,e)=>go(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends _o{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xo extends _o{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function So(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ao(t,e,n){const r=new Map;Qr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,io(o,a,n[i]))}return r}function ko(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ro(t,s,e))}return r}class Oo extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class No extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro,Lo;function Po(t){switch(t){default:return Gr();case Yr.CANCELLED:case Yr.UNKNOWN:case Yr.DEADLINE_EXCEEDED:case Yr.RESOURCE_EXHAUSTED:case Yr.INTERNAL:case Yr.UNAVAILABLE:case Yr.UNAUTHENTICATED:return!1;case Yr.INVALID_ARGUMENT:case Yr.NOT_FOUND:case Yr.ALREADY_EXISTS:case Yr.PERMISSION_DENIED:case Yr.FAILED_PRECONDITION:case Yr.ABORTED:case Yr.OUT_OF_RANGE:case Yr.UNIMPLEMENTED:case Yr.DATA_LOSS:return!0}}function Mo(t){if(void 0===t)return Wr("GRPC error has no .code"),Yr.UNKNOWN;switch(t){case Ro.OK:return Yr.OK;case Ro.CANCELLED:return Yr.CANCELLED;case Ro.UNKNOWN:return Yr.UNKNOWN;case Ro.DEADLINE_EXCEEDED:return Yr.DEADLINE_EXCEEDED;case Ro.RESOURCE_EXHAUSTED:return Yr.RESOURCE_EXHAUSTED;case Ro.INTERNAL:return Yr.INTERNAL;case Ro.UNAVAILABLE:return Yr.UNAVAILABLE;case Ro.UNAUTHENTICATED:return Yr.UNAUTHENTICATED;case Ro.INVALID_ARGUMENT:return Yr.INVALID_ARGUMENT;case Ro.NOT_FOUND:return Yr.NOT_FOUND;case Ro.ALREADY_EXISTS:return Yr.ALREADY_EXISTS;case Ro.PERMISSION_DENIED:return Yr.PERMISSION_DENIED;case Ro.FAILED_PRECONDITION:return Yr.FAILED_PRECONDITION;case Ro.ABORTED:return Yr.ABORTED;case Ro.OUT_OF_RANGE:return Yr.OUT_OF_RANGE;case Ro.UNIMPLEMENTED:return Yr.UNIMPLEMENTED;case Ro.DATA_LOSS:return Yr.DATA_LOSS;default:return Gr()}}(Lo=Ro||(Ro={}))[Lo.OK=0]="OK",Lo[Lo.CANCELLED=1]="CANCELLED",Lo[Lo.UNKNOWN=2]="UNKNOWN",Lo[Lo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lo[Lo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lo[Lo.NOT_FOUND=5]="NOT_FOUND",Lo[Lo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lo[Lo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lo[Lo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lo[Lo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lo[Lo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lo[Lo.ABORTED=10]="ABORTED",Lo[Lo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lo[Lo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lo[Lo.INTERNAL=13]="INTERNAL",Lo[Lo.UNAVAILABLE=14]="UNAVAILABLE",Lo[Lo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Oi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ni(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Di(vi.comparator);function Uo(){return Fo}const Vo=new Di(vi.comparator);function $o(...t){let e=Vo;for(const n of t)e=e.insert(n.key,n);return e}function Bo(t){let e=Vo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function qo(){return Wo()}function Ho(){return Wo()}function Wo(){return new jo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const zo=new Di(vi.comparator),Ko=new Pi(vi.comparator);function Go(...t){let e=Ko;for(const n of t)e=e.add(n);return e}const Qo=new Pi(ui);function Xo(){return Qo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Zo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Yo(di.min(),n,Xo(),Uo(),Go())}}class Zo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Zo(Fi.EMPTY_BYTE_STRING,e,Go(),Go(),Go())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class ta{constructor(t,e){this.targetId=t,this.It=e}}class ea{constructor(t,e,n=Fi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class na{constructor(){this.Tt=0,this.Et=sa(),this.At=Fi.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Go(),e=Go(),n=Go();return this.Et.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Gr()}})),new Zo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=sa()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class ra{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Uo(),this.Bt=ia(),this.Lt=new Pi(ui)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Gr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(ws(t))if(0===n){const n=new vi(t.path);this.Kt(e,n,gs.newNoDocument(n,di.min()))}else Qr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&ws(i.target)){const e=new vi(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,gs.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Go();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Yo(t,e,this.Lt,this.$t,n);return this.$t=Uo(),this.Bt=ia(),this.Lt=new Pi(ui),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new na,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Pi(ui),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Hr("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new na),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function ia(){return new Di(vi.comparator)}function sa(){return new Di(vi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),aa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ca{constructor(t,e){this.databaseId=t,this.dt=e}}function ua(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function la(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ha(t,e){return ua(t,e.toTimestamp())}function da(t){return Qr(!!t),di.fromTimestamp(function(t){const e=Vi(t);return new hi(e.seconds,e.nanos)}(t))}function fa(t,e){return function(t){return new pi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pa(t){const e=pi.fromString(t);return Qr(ja(e)),e}function ga(t,e){return fa(t.databaseId,e.path)}function ma(t,e){const n=pa(e);if(n.get(1)!==t.databaseId.projectId)throw new Zr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Zr(Yr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new vi(ba(n))}function va(t,e){return fa(t.databaseId,e)}function ya(t){const e=pa(t);return 4===e.length?pi.emptyPath():ba(e)}function _a(t){return new pi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ba(t){return Qr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function wa(t,e,n){return{name:ga(t,e),fields:n.value.mapValue.fields}}function Ea(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Gr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.dt?(Qr(void 0===e||"string"==typeof e),Fi.fromBase64String(e||"")):(Qr(void 0===e||e instanceof Uint8Array),Fi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Yr.UNKNOWN:Mo(t.code);return new Zr(e,t.message||"")}(o);n=new ea(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(t,r.document.name),s=da(r.document.updateTime),o=new fs({mapValue:{fields:r.document.fields}}),a=gs.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Jo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(t,r.document),s=r.readTime?da(r.readTime):di.min(),o=gs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(t,r.document),s=r.removedTargetIds||[];n=new Jo([],s,i,null)}else{if(!("filter"in e))return Gr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Do(r),s=t.targetId;n=new ta(s,i)}}return n}function Ta(t,e){let n;if(e instanceof Io)n={update:wa(t,e.key,e.value)};else if(e instanceof Oo)n={delete:ga(t,e.key)};else if(e instanceof xo)n={update:wa(t,e.key,e.data),updateMask:Ma(e.fieldMask)};else{if(!(e instanceof No))return Gr();n={verify:ga(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof oo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ho)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Gr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gr()}(t,e.precondition)),n}function Ca(t,e){return t&&t.length>0?(Qr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?da(t.updateTime):da(e);return n.isEqual(di.min())&&(n=da(e)),new mo(n,t.transformResults||[])}(t,e)))):[]}function Ia(t,e){return{documents:[va(t,e.path)]}}function xa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=va(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=va(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(us(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NAN"}};if(cs(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(us(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NAN"}};if(cs(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(t.field),op:Na(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Da(t.field),direction:Oa(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.dt||Gi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Sa(t){let e=ya(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ka(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ds(Ra(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ns(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ns(n,e)}(n.endAt)),js(e,i,o,s,a,"F",c,u)}function Aa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ka(t){return t?void 0!==t.unaryFilter?[Pa(t)]:void 0!==t.fieldFilter?[La(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ka(t))).reduce(((t,e)=>t.concat(e))):Gr():[]}function Oa(t){return oa[t]}function Na(t){return aa[t]}function Da(t){return{fieldPath:t.canonicalString()}}function Ra(t){return mi.fromServerFormat(t.fieldPath)}function La(t){return Es.create(Ra(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Pa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ra(t.unaryFilter.field);return Es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ra(t.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ra(t.unaryFilter.field);return Es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ra(t.unaryFilter.field);return Es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gr()}}function Ma(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ja(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ua=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Va=Ua;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&wo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ho();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=bo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(di.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Go())}isEqual(t){return this.batchId===t.batchId&&li(this.mutations,t.mutations,((t,e)=>Co(t,e)))&&li(this.baseMutations,t.baseMutations,((t,e)=>Co(t,e)))}}class Ba{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Qr(t.mutations.length===n.length);let r=zo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ba(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,n,r,i=di.min(),s=di.min(),o=Fi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ha(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.ne=t}}function za(t){const e=Sa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ws(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae($i(t.integerValue));else if("doubleValue"in t){const n=$i(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Qi(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Bi(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?ds(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Gr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),vi.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}Ka.ye=new Ka;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(){this.ze=new Qa}addToCollectionParentIndex(t,e){return this.ze.add(e),xi.resolve()}getCollectionParents(t,e){return xi.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return xi.resolve()}deleteFieldIndex(t,e){return xi.resolve()}getDocumentsMatchingTarget(t,e){return xi.resolve(null)}getIndexType(t,e){return xi.resolve(0)}getFieldIndexes(t,e){return xi.resolve([])}getNextCollectionGroupToUpdate(t){return xi.resolve(null)}getMinOffset(t,e){return xi.resolve(wi.min())}getMinOffsetFromCollectionGroup(t,e){return xi.resolve(wi.min())}updateCollectionGroup(t,e,n){return xi.resolve()}updateIndexEntries(t,e){return xi.resolve()}}class Qa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Pi(pi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Pi(pi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Xa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Xa(t,Xa.DEFAULT_COLLECTION_PERCENTILE,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xa.DEFAULT_COLLECTION_PERCENTILE=10,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xa.DEFAULT=new Xa(41943040,Xa.DEFAULT_COLLECTION_PERCENTILE,Xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xa.DISABLED=new Xa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ya(0)}static Rn(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(){this.changes=new jo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?xi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Eo(n.mutation,t,ji.empty(),hi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Go()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Go()){const r=qo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=$o();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=qo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Go())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Uo();const s=Wo(),o=Wo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof xo)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Eo(o.mutation,e,o.mutation.getFieldMask(),hi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ja(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Wo();let r=new Di(((t,e)=>t-e)),i=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ji.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Go()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ho();c.forEach((t=>{if(!i.has(t)){const r=bo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return xi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return vi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):xi.resolve(qo());let o=-1,a=i;return s.next((e=>xi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?xi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Go()))).next((t=>({batchId:o,changes:Bo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new vi(e)).next((t=>{let e=$o();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=$o();return this.indexManager.getCollectionParents(t,r).next((s=>xi.forEach(s,(s=>{const o=function(t,e){return new Ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,gs.newInvalidDocument(n)))}));let n=$o();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&Eo(s.mutation,i,ji.empty(),hi.now()),Qs(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):xi.resolve(gs.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return xi.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:da(n.createTime)}),xi.resolve()}getNamedQuery(t,e){return xi.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:za(t.bundledQuery),readTime:da(t.readTime)}}(e)),xi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.overlays=new Di(vi.comparator),this.Xn=new Map}getOverlay(t,e){return xi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=qo();return xi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),xi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),xi.resolve()}getOverlaysForCollection(t,e,n){const r=qo(),i=e.length+1,s=new vi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return xi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Di(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=qo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=qo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return xi.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let i=this.Xn.get(e);void 0===i&&(i=Go(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.Zn=new Pi(ic.ts),this.es=new Pi(ic.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ic(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new ic(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new vi(new pi([])),n=new ic(e,t),r=new ic(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new vi(new pi([])),n=new ic(e,t),r=new ic(e,t+1);let i=Go();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ic(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ic{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return vi.comparator(t.key,e.key)||ui(t.ls,e.ls)}static ns(t,e){return ui(t.ls,e.ls)||vi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Pi(ic.ts)}checkEmpty(t){return xi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $a(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new ic(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return xi.resolve(s)}lookupMutationBatch(t,e){return xi.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return xi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return xi.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return xi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ic(e,0),r=new ic(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),xi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pi(ui);return e.forEach((t=>{const e=new ic(t,0),r=new ic(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),xi.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;vi.isDocumentKey(i)||(i=i.child(""));const s=new ic(new vi(i),0);let o=new Pi(ui);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),xi.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Qr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return xi.forEach(e.mutations,(r=>{const i=new ic(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new ic(e,0),r=this.ds.firstAfterOrEqual(n);return xi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,xi.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.ps=t,this.docs=new Di(vi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return xi.resolve(n?n.document.mutableCopy():gs.newInvalidDocument(e))}getEntries(t,e){let n=Uo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():gs.newInvalidDocument(t))})),xi.resolve(n)}getAllFromCollection(t,e,n){let r=Uo();const i=new vi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ei(bi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return xi.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Gr()}Is(t,e){return xi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ac(this)}getSize(t){return xi.resolve(this.size)}}class ac extends Za{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),xi.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.persistence=t,this.Ts=new jo((t=>ys(t)),bs),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Es=0,this.As=new rc,this.targetCount=0,this.Rs=Ya.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),xi.resolve()}getLastRemoteSnapshotVersion(t){return xi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return xi.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),xi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),xi.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ya(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,xi.resolve()}updateTargetData(t,e){return this.vn(e),xi.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,xi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),xi.waitFor(i).next((()=>r))}getTargetCount(t){return xi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return xi.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),xi.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),xi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),xi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return xi.resolve(n)}containsKey(t,e){return xi.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ai(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new cc(this),this.indexManager=new Ga,this.remoteDocumentCache=function(t){return new oc(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Wa(e),this.Ds=new ec(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new sc(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new lc(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return xi.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class lc extends Ci{constructor(t){super(),this.currentSequenceNumber=t}}class hc{constructor(t){this.persistence=t,this.ks=new rc,this.Os=null}static Ms(t){return new hc(t)}get Fs(){if(this.Os)return this.Os;throw Gr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),xi.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),xi.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),xi.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xi.forEach(this.Fs,(n=>{const r=vi.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return xi.or([()=>xi.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Go(),r=Go();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return xi.resolve(null)}xi(t,e,n,r){return Us(e)||r.isEqual(di.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Oi(e,s,n,r)?this.Ni(t,e):(qr()<=o.$b.DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gs(e)),this.Mi(t,s,e,_i(r,-1)))}))}ki(t,e){let n=new Pi(Ys(t));return e.forEach(((e,r)=>{Qs(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return qr()<=o.$b.DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",Gs(e)),this.Di.getDocumentsMatchingQuery(t,e,wi.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Di(ui),this.Bi=new jo((t=>ys(t)),bs),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function gc(t,e,n,r){return new pc(t,e,n,r)}async function mc(t,e){const n=Xr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Go();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function vc(t,e){const n=Xr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=xi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Qr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Go();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function yc(t){const e=Xr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function _c(t,e){const n=Xr(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Fi.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Uo(),c=Go();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(bc(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(di.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return xi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}function bc(t,e,n){let r=Go(),i=Go();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Uo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(di.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function wc(t,e){const n=Xr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ec(t,e){const n=Xr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((i=>i?(r=i,xi.resolve(r)):n.Vs.allocateTargetId(t).next((i=>(r=new Ha(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Tc(t,e,n){const r=Xr(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Si(t))throw t;Hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Cc(t,e,n){const r=Xr(t);let i=di.min(),s=Go();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Xr(t),i=r.Bi.get(n);return void 0!==i?xi.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)}(r,t,Hs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:di.min(),n?s:Go()))).next((t=>(Ic(r,Xs(e),t),{documents:t,ji:s})))))}function Ic(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class xc{constructor(){this.activeTargetIds=Xo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sc{constructor(){this.Fr=new xc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new xc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);Hr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw zr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+$r,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Oc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((i,s)=>{const o=new Fr;o.listenOnce(Rr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const e=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Dr.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),s(new Zr(Yr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Yr).indexOf(e)>=0?e:Yr.UNKNOWN}(t.status);s(new Zr(e,t.message))}else s(new Zr(Yr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Zr(Yr.UNAVAILABLE,"Connection failed."));break;default:Gr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Or(),s=Nr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.uo(o.initMessageHeaders,e,n),(0,a.jZ)()||(0,a.lV)()||(0,a.b8)()||(0,a.lT)()||(0,a.n4)()||(0,a.sr)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const d=new Nc({jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(l||(Hr("Connection","Opening WebChannel transport."),u.open(),l=!0),Hr("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,jr.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),f(u,jr.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),d.eo())})),f(u,jr.EventType.ERROR,(t=>{h||(h=!0,zr("Connection","WebChannel transport errored:",t),d.eo(new Zr(Yr.UNAVAILABLE,"The operation could not be completed")))})),f(u,jr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Qr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ro[t];if(void 0!==e)return Mo(e)}(t),n=i.message;void 0===e&&(e=Yr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.eo(new Zr(e,n)),u.close()}else Hr("Connection","WebChannel received:",n),d.no(n)}})),f(s,Lr.STAT_EVENT,(t=>{t.stat===Pr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Pr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return new ca(t,!0)}class Pc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Yr.RESOURCE_EXHAUSTED?(Wr(e.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Yr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Zr(Yr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jc extends Mc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Ea(this.wt,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?da(e.readTime):di.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=_a(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=ws(r)?{documents:Ia(t,r)}:{query:xa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=la(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=ua(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Aa(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=_a(this.wt),e.removeTarget=t,this.Mo(e)}}class Fc extends Mc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Qr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ca(t.writeResults,t.commitTime),n=da(t.commitTime);return this.listener.Jo(n,e)}return Qr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=_a(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ta(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Zr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Zr(Yr.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Zr(Yr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Vc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Wr(e),this.su=!1):Hr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Xc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xr(t);e.lu.add(4),await qc(e),e._u.set("Unknown"),e.lu.delete(4),await Bc(e)}(this))}))})),this._u=new Vc(n,r)}}async function Bc(t){if(Xc(t))for(const e of t.fu)await e(!0)}async function qc(t){for(const e of t.fu)await e(!1)}function Hc(t,e){const n=Xr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Qc(n)?Gc(n):pu(n).Co()&&zc(n,e))}function Wc(t,e){const n=Xr(t),r=pu(n);n.hu.delete(e),r.Co()&&Kc(n,e),0===n.hu.size&&(r.Co()?r.ko():Xc(n)&&n._u.set("Unknown"))}function zc(t,e){t.wu.Nt(e.targetId),pu(t).Qo(e)}function Kc(t,e){t.wu.Nt(e),pu(t).jo(e)}function Gc(t){t.wu=new ra({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),pu(t).start(),t._u.iu()}function Qc(t){return Xc(t)&&!pu(t).Do()&&t.hu.size>0}function Xc(t){return 0===Xr(t).lu.size}function Yc(t){t.wu=void 0}async function Zc(t){t.hu.forEach(((e,n)=>{zc(t,e)}))}async function Jc(t,e){Yc(t),Qc(t)?(t._u.uu(e),Gc(t)):t._u.set("Unknown")}async function tu(t,e,n){if(t._u.set("Online"),e instanceof ea&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eu(t,n)}else if(e instanceof Jo?t.wu.Ut(e):e instanceof ta?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(di.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Fi.EMPTY_BYTE_STRING,n.snapshotVersion)),Kc(t,e);const r=new Ha(n.target,e,1,n.sequenceNumber);zc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hr("RemoteStore","Failed to raise snapshot:",e),await eu(t,e)}}async function eu(t,e,n){if(!Si(e))throw e;t.lu.add(1),await qc(t),t._u.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bc(t)}))}function nu(t,e){return e().catch((n=>eu(t,n,e)))}async function ru(t){const e=Xr(t),n=gu(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;iu(e);)try{const t=await wc(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,su(e,t)}catch(t){await eu(e,t)}ou(e)&&au(e)}function iu(t){return Xc(t)&&t.au.length<10}function su(t,e){t.au.push(e);const n=gu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ou(t){return Xc(t)&&!gu(t).Do()&&t.au.length>0}function au(t){gu(t).start()}async function cu(t){gu(t).Xo()}async function uu(t){const e=gu(t);for(const n of t.au)e.Ho(n.mutations)}async function lu(t,e,n){const r=t.au.shift(),i=Ba.from(r,e,n);await nu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ru(t)}async function hu(t,e){e&&gu(t).zo&&await async function(t,e){if(n=e.code,Po(n)&&n!==Yr.ABORTED){const n=t.au.shift();gu(t).No(),await nu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ru(t)}var n}(t,e),ou(t)&&au(t)}async function du(t,e){const n=Xr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Xc(n);n.lu.add(3),await qc(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bc(n)}async function fu(t,e){const n=Xr(t);e?(n.lu.delete(2),await Bc(n)):e||(n.lu.add(2),await qc(n),n._u.set("Unknown"))}function pu(t){return t.mu||(t.mu=function(t,e,n){const r=Xr(t);return r.tu(),new jc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Zc.bind(null,t),Jr:Jc.bind(null,t),Go:tu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Qc(t)?Gc(t):t._u.set("Unknown")):(await t.mu.stop(),Yc(t))}))),t.mu}function gu(t){return t.gu||(t.gu=function(t,e,n){const r=Xr(t);return r.tu(),new Fc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:cu.bind(null,t),Jr:hu.bind(null,t),Yo:uu.bind(null,t),Jo:lu.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await ru(t)):(await t.gu.stop(),t.au.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new mu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Zr(Yr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(t,e){if(Wr("AsyncQueue",`${e}: ${t}`),Si(t))return new Zr(Yr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||vi.comparator(e.key,n.key):(t,e)=>vi.comparator(t.key,e.key),this.keyedMap=$o(),this.sortedSet=new Di(this.comparator)}static emptySet(t){return new yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.yu=new Di(vi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Gr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new bu(t,e,yu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.Iu=void 0,this.listeners=[]}}class Eu{constructor(){this.queries=new jo((t=>Ks(t)),zs),this.onlineState="Unknown",this.Tu=new Set}}async function Tu(t,e){const n=Xr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wu),i)try{s.Iu=await n.onListen(r)}catch(t){const n=vu(t,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Su(n)}async function Cu(t,e){const n=Xr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Iu(t,e){const n=Xr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(r=!0);e.Iu=i}}r&&Su(n)}function xu(t,e,n){const r=Xr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Su(t){t.Tu.forEach((t=>{t.next()}))}class Au{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=bu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(t){this.key=t}}class Ou{constructor(t){this.key=t}}class Nu{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Go(),this.mutatedKeys=Go(),this.Lu=Ys(t),this.Uu=new yu(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new _u,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Qs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new bu(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new _u,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Go(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Ou(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new ku(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Go();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return bu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Du{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ru{constructor(t){this.key=t,this.Xu=!1}}class Lu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new jo((t=>Ks(t)),zs),this.ec=new Map,this.nc=new Set,this.sc=new Di(vi.comparator),this.ic=new Map,this.rc=new rc,this.oc={},this.uc=new Map,this.cc=Ya.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Pu(t,e){const n=tl(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await Ec(n.localStore,Hs(e));n.isPrimaryClient&&Hc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Mu(n,e,r,"current"===s)}return i}async function Mu(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ku(n);i.Oi&&(i=await Cc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Gu(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await Cc(t.localStore,e,!0),s=new Nu(e,i.ji),o=s.Ku(i.documents),a=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Gu(t,n,c.zu);const u=new Du(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function ju(t,e){const n=Xr(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((t=>!zs(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Wc(n.remoteStore,r.targetId),zu(n,r.targetId)})).catch(Ii)):(zu(n,r.targetId),await Tc(n.localStore,r.targetId,!0))}async function Fu(t,e,n){const r=el(t);try{const t=await function(t,e){const n=Xr(t),r=hi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Go());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Uo(),c=Go();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=To(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new xo(t.key,e,ps(e.value.mapValue),vo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Bo(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Di(ui)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Yu(r,t.changes),await ru(r.remoteStore)}catch(t){const e=vu(t,"Failed to persist write");n.reject(e)}}async function Uu(t,e){const n=Xr(t);try{const t=await _c(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Qr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Qr(r.Xu):t.removedDocuments.size>0&&(Qr(r.Xu),r.Xu=!1))})),await Yu(n,t,e)}catch(t){await Ii(t)}}function Vu(t,e,n){const r=Xr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Xr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)})),r&&Su(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $u(t,e,n){const r=Xr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new Di(vi.comparator);t=t.insert(s,gs.newNoDocument(s,di.min()));const n=Go().add(s),i=new Yo(di.min(),new Map,new Pi(ui),t,n);await Uu(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),Xu(r)}else await Tc(r.localStore,e,!1).then((()=>zu(r,e,n))).catch(Ii)}async function Bu(t,e){const n=Xr(t),r=e.batch.batchId;try{const t=await vc(n.localStore,e);Wu(n,r,null),Hu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(n,t)}catch(t){await Ii(t)}}async function qu(t,e,n){const r=Xr(t);try{const t=await function(t,e){const n=Xr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Qr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Wu(r,e,n),Hu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yu(r,t)}catch(n){await Ii(n)}}function Hu(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Wu(t,e,n){const r=Xr(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function zu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Ku(t,e)}))}function Ku(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Wc(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Xu(t))}function Gu(t,e,n){for(const r of n)r instanceof ku?(t.rc.addReference(r.key,e),Qu(t,r)):r instanceof Ou?(Hr("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Ku(t,r.key)):Gr()}function Qu(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Hr("SyncEngine","New document in limbo: "+n),t.nc.add(r),Xu(t))}function Xu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new vi(pi.fromString(e)),r=t.cc.next();t.ic.set(r,new Ru(n)),t.sc=t.sc.insert(n,r),Hc(t.remoteStore,new Ha(Hs(Fs(n.path)),r,2,Ai.ot))}}async function Yu(t,e,n){const r=Xr(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=dc.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=Xr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>xi.forEach(e,(e=>xi.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>xi.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Si(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,i)}}}(r.localStore,s))}async function Zu(t,e){const n=Xr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await mc(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Zr(Yr.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yu(n,t.Ki)}}function Ju(t,e){const n=Xr(t),r=n.ic.get(e);if(r&&r.Xu)return Go().add(r.key);{let t=Go();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function tl(t){const e=Xr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ju.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$u.bind(null,e),e.Zu.Go=Iu.bind(null,e.eventManager),e.Zu.lc=xu.bind(null,e.eventManager),e}function el(t){const e=Xr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qu.bind(null,e),e}class nl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Lc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return gc(this.persistence,new fc,t.initialUser,this.wt)}_c(t){return new uc(hc.Ms,this.wt)}dc(t){return new Sc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zu.bind(null,this.syncEngine),await fu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Eu}createDatastore(t){const e=Lc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Dc(r));var r;return function(t,e,n,r){return new Uc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Vu(this.syncEngine,t,0),s=kc.V()?new kc:new Ac,new $c(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Lu(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xr(t);Hr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await qc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Vr.UNAUTHENTICATED,this.clientId=ci.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Zr(Yr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ol(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await mc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function al(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cl(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>du(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>du(e.remoteStore,n))),t.onlineComponents=e}async function cl(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await ol(t,new nl)),t.offlineComponents}async function ul(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await al(t,new rl)),t.onlineComponents}function ll(t){return ul(t).then((t=>t.syncEngine))}async function hl(t){const e=await ul(t),n=e.eventManager;return n.onListen=Pu.bind(null,e.syncEngine),n.onUnlisten=ju.bind(null,e.syncEngine),n}function dl(t,e,n={}){const r=new Jr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new il({next:n=>{e.enqueueAndForget((()=>Cu(t,o))),n.fromCache&&"server"===r.source?i.reject(new Zr(Yr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Au(n,s,{includeMetadataChanges:!0,Du:!0});return Tu(t,o)}(await hl(t),t.asyncQueue,e,n,r))),r.promise}const fl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){if(!n)throw new Zr(Yr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gl(t,e,n,r){if(!0===e&&!0===r)throw new Zr(Yr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ml(t){if(!vi.isDocumentKey(t))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vl(t){if(vi.isDocumentKey(t))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gr()}function _l(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Zr(Yr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yl(t);throw new Zr(Yr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function bl(t,e){if(e<=0)throw new Zr(Yr.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Zr(Yr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Zr(Yr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wl({}),this._settingsFrozen=!1,t instanceof Ki?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Zr(Yr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(t.options.projectId)}(t))}get app(){if(!this._app)throw new Zr(Yr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Zr(Yr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Qr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Zr(Yr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=fl.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),fl.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Il(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tl(this.firestore,t,this._key)}}class Cl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cl(this.firestore,t,this._query)}}class Il extends Cl{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tl(this.firestore,null,new vi(t))}withConverter(t){return new Il(this.firestore,t,this._path)}}function xl(t,e,...n){if(t=(0,a.Ku)(t),pl("collection","path",e),t instanceof El){const r=pi.fromString(e,...n);return vl(r),new Il(t,null,r)}{if(!(t instanceof Tl||t instanceof Il))throw new Zr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return vl(r),new Il(t.firestore,null,r)}}function Sl(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=ci.I()),pl("doc","path",e),t instanceof El){const r=pi.fromString(e,...n);return ml(r),new Tl(t,null,new vi(r))}{if(!(t instanceof Tl||t instanceof Il))throw new Zr(Yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return ml(r),new Tl(t.firestore,t instanceof Il?t.converter:null,new vi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Al{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pc(this,"async_queue_retry"),this.Kc=()=>{const t=Rc();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Rc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Rc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Jr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(E){if(!Si(E))throw E;Hr("AsyncQueue","Operation failed with retryable error: "+E)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Wr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=mu.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Gr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function kl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Ol extends El{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Al,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rl(this),this._firestoreClient.terminate()}}function Nl(t=(0,i.Sx)()){return(0,i.j6)(t,"firestore").getImmediate()}function Dl(t){return t._firestoreClient||Rl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new zi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sl(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Zr(Yr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pl(Fi.fromBase64String(t))}catch(t){throw new Zr(Yr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Pl(Fi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Zr(Yr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Zr(Yr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ui(this._lat,t._lat)||ui(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=/^__.*__$/;class Ul{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new xo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Io(t,this.data,e,this.fieldTransforms)}}class Vl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new xo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $l(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gr()}}class Bl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Bl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return rh(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if($l(this.Zc)&&Fl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class ql{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Lc(t)}aa(t,e,n,r=!1){return new Bl({Zc:t,methodName:e,ca:n,path:mi.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Hl(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new ql(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wl(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Jl("Data must be an object, but it was:",o,r);const a=Yl(r,o);let c,u;if(s.merge)c=new ji(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=th(e,r,n);if(!o.contains(i))throw new Zr(Yr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ih(t,i)||t.push(i)}c=new ji(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ul(new fs(a),c,u)}class zl extends Ml{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zl}}function Kl(t,e,n,r){const i=t.aa(1,e,n);Jl("Data must be an object, but it was:",i,r);const s=[],o=fs.empty();Oi(r,((t,r)=>{const c=nh(e,t,n);r=(0,a.Ku)(r);const u=i.ia(c);if(r instanceof zl)s.push(c);else{const t=Xl(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new ji(s);return new Vl(o,c,i.fieldTransforms)}function Gl(t,e,n,r,i,s){const o=t.aa(1,e,n),c=[th(e,r,n)],u=[i];if(s.length%2!=0)throw new Zr(Yr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(th(e,s[a])),u.push(s[a+1]);const l=[],h=fs.empty();for(let f=c.length-1;f>=0;--f)if(!ih(l,c[f])){const t=c[f];let e=u[f];e=(0,a.Ku)(e);const n=o.ia(t);if(e instanceof zl)l.push(t);else{const r=Xl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ji(l);return new Vl(h,d,o.fieldTransforms)}function Ql(t,e,n,r=!1){return Xl(n,t.aa(r?4:3,e))}function Xl(t,e){if(Zl(t=(0,a.Ku)(t)))return Jl("Unsupported field value:",e,t),Yl(t,e);if(t instanceof Ml)return function(t,e){if(!$l(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Xl(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return eo(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:ua(e.wt,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ua(e.wt,n)}}if(t instanceof jl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Pl)return{bytesValue:la(e.wt,t._byteString)};if(t instanceof Tl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${yl(t)}`)}(t,e)}function Yl(t,e){const n={};return Ni(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(t,((t,r)=>{const i=Xl(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Zl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof jl||t instanceof Pl||t instanceof Tl||t instanceof Ml)}function Jl(t,e,n){if(!Zl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=yl(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function th(t,e,n){if((e=(0,a.Ku)(e))instanceof Ll)return e._internalPath;if("string"==typeof e)return nh(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const eh=new RegExp("[~\\*/\\[\\]]");function nh(t,e,n){if(e.search(eh)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ll(...e.split("."))._internalPath}catch(r){throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Zr(Yr.INVALID_ARGUMENT,a+t+c)}function ih(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new oh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ah("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class oh extends sh{data(){return super.data()}}function ah(t,e){return"string"==typeof e?nh(t,e):e instanceof Ll?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uh extends sh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lh extends uh{data(t={}){return super.data(t)}}class hh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ch(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lh(this._firestore,this._userDataWriter,n.key,n,new ch(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Zr(Yr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new lh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ch(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new lh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ch(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:dh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Zr(Yr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ph{}function gh(t,...e){for(const n of e)t=n._apply(t);return t}class mh extends ph{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=Hl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Oh(o,s);const e=[];for(const n of o)e.push(kh(r,t,n));a={arrayValue:{values:e}}}else a=kh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Oh(o,s),a=Ql(n,e,o,"in"===s||"not-in"===s);const c=Es.create(i,s,a);return function(t,e){if(e.ht()){const n=$s(t);if(null!==n&&!n.isEqual(e.field))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Vs(t);null!==r&&Nh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Zr(Yr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Zr(Yr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Cl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function vh(t,e,n){const r=e,i=ah("where",t);return new mh(i,r,n)}class yh extends ph{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Zr(Yr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Zr(Yr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ds(e,n);return function(t,e){if(null===Vs(t)){const n=$s(t);null!==n&&Nh(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new Cl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function _h(t,e="asc"){const n=e,r=ah("orderBy",t);return new yh(r,n)}class bh extends ph{constructor(t,e,n){super(),this.type=t,this.ma=e,this.ga=n}_apply(t){return new Cl(t.firestore,t.converter,Ws(t._query,this.ma,this.ga))}}function wh(t){return bl("limit",t),new bh("limit",t,"F")}class Eh extends ph{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=Ah(t,this.type,this.ya,this.pa);return new Cl(t.firestore,t.converter,function(t,e){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Th(...t){return new Eh("startAt",t,!0)}function Ch(...t){return new Eh("startAfter",t,!1)}class Ih extends ph{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=Ah(t,this.type,this.ya,this.pa);return new Cl(t.firestore,t.converter,function(t,e){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function xh(...t){return new Ih("endBefore",t,!1)}function Sh(...t){return new Ih("endAt",t,!0)}function Ah(t,e,n,r){if(n[0]=(0,a.Ku)(n[0]),n[0]instanceof sh)return function(t,e,n,r,i){if(!r)throw new Zr(Yr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of qs(t))if(o.field.isKeyField())s.push(ss(e,r.key));else{const t=r.data.field(o.field);if(qi(t))throw new Zr(Yr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Ns(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Hl(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new Zr(Yr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Bs(t)&&-1!==s.indexOf("/"))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(pi.fromString(s));if(!vi.isDocumentKey(n))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new vi(n);a.push(ss(e,i))}else{const t=Ql(n,r,s);a.push(t)}}return new Ns(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function kh(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new Zr(Yr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bs(e)&&-1!==n.indexOf("/"))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pi.fromString(n));if(!vi.isDocumentKey(r))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ss(t,new vi(r))}if(n instanceof Tl)return ss(t,n._key);throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yl(n)}.`)}function Oh(t,e){if(!Array.isArray(t)||0===t.length)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Zr(Yr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Nh(t,e,n){if(!n.isEqual(e))throw new Zr(Yr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{convertValue(t,e="none"){switch(Zi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $i(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Gr()}}convertObject(t,e){const n={};return Oi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new jl($i(t.latitude),$i(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wi(t));default:return null}}convertTimestamp(t){const e=Vi(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=pi.fromString(t);Qr(ja(n));const r=new Ki(n.get(1),n.get(3)),i=new vi(n.popFirst(5));return r.isEqual(e)||Wr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lh extends Dh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tl(this.firestore,null,e)}}function Ph(t){t=_l(t,Cl);const e=_l(t.firestore,Ol),n=Dl(e),r=new Lh(e);return fh(t._query),dl(n,t._query).then((n=>new hh(e,r,t,n)))}function Mh(t,e,n,...r){t=_l(t,Tl);const i=_l(t.firestore,Ol),s=Hl(i);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof Ll?Gl(s,"updateDoc",t._key,e,n,r):Kl(s,"updateDoc",t._key,e),Vh(i,[o.toMutation(t._key,vo.exists(!0))])}function jh(t){return Vh(_l(t.firestore,Ol),[new Oo(t._key,vo.none())])}function Fh(t,e){const n=_l(t.firestore,Ol),r=Sl(t),i=Rh(t.converter,e);return Vh(n,[Wl(Hl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,vo.exists(!1))]).then((()=>r))}function Uh(t,...e){var n,r,i;t=(0,a.Ku)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||kl(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(kl(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Tl)l=_l(t.firestore,Ol),h=Fs(t._key.path),u={next:n=>{e[o]&&e[o]($h(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=_l(t,Cl);l=_l(n.firestore,Ol),h=n._query;const r=new Lh(l);u={next:t=>{e[o]&&e[o](new hh(l,r,n,t))},error:e[o+1],complete:e[o+2]},fh(t._query)}return function(t,e,n,r){const i=new il(r),s=new Au(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Tu(await hl(t),s))),()=>{i.Tc(),t.asyncQueue.enqueueAndForget((async()=>Cu(await hl(t),s)))}}(Dl(l),h,c,u)}function Vh(t,e){return function(t,e){const n=new Jr;return t.asyncQueue.enqueueAndForget((async()=>Fu(await ll(t),e,n))),n.promise}(Dl(t),e)}function $h(t,e,n){const r=n.docs.get(e._key),i=new Lh(t);return new uh(t,i,e._key,r,new ch(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){$r=t}(i.MF),(0,i.om)(new s.uA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Ol(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KO)(Ur,"3.4.13",t),(0,i.KO)(Ur,"3.4.13","esm2017")}()},5539:function(t,e,n){"use strict";n.d(e,{qk:function(){return fe},c7:function(){return ge},KR:function(){return pe},bp:function(){return de}});n(9078),n(3266),n(1337),n(7036),n(4517),n(1794),n(1319);var r=n(3405),i=n(4046),s=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.g{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function f(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new l("canceled","User canceled the upload/download.")}function b(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function C(){return new l("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function I(){return new l("no-download-url","The given file does not have any download URLs.")}function x(t){return new l("invalid-argument",t)}function S(){return new l("app-deleted","The Firebase app was deleted.")}function A(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function k(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function O(t){throw new l("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw b(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function M(t){return"function"===typeof t}function j(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function U(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function $(t,e,n,r){if(r<e)throw x(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw x(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n,r,i,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new z(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new z(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new z(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());P(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=d();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?S():_();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new z(!1,null,!0)):this.backoffId_=R(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class z{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function G(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Q(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,r,i,s){const o=q(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Q(c,e),K(c,n),G(c,s),X(c,r),new W(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function tt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case nt.RAW:return new rt(st(e));case nt.BASE64:case nt.BASE64URL:return new rt(at(t,e));case nt.DATA_URL:return new rt(ut(e),lt(e))}throw d()}function st(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ot(t){let e;try{e=decodeURIComponent(t)}catch(n){throw k(nt.DATA_URL,"Malformed data URL.")}return st(e)}function at(t,e){switch(t){case nt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw k(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case nt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw k(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(i){throw k(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ct{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw k(nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ht(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new ct(t);return e.base64?at(nt.BASE64,e.rest):ot(e.rest)}function lt(t){const e=new ct(t);return e.contentType}function ht(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,r="";U(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(U(this.data_)){const n=this.data_,r=tt(n,t,e);return null===r?null:new dt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(V()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(J.apply(null,e))}{const e=t.map((t=>F(t)?it(nt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new dt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){let e;try{e=JSON.parse(t)}catch(n){return null}return j(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function mt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class yt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let _t=null;function bt(t){return!F(t)||t.length<2?t:mt(t)}function wt(){if(_t)return _t;const t=[];function e(t,e){return bt(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),_t=t,_t}function Et(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Et(r,t),r}function Ct(t,e,n){const r=ft(e);if(null===r)return null;const i=r;return Tt(t,i,n)}function It(t,e,n,r){const i=ft(e);if(null===i)return null;if(!F(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=B(a,n,r),u=q({alt:"media",token:e});return c+u}));return c[0]}function xt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){if(!t)throw d()}function kt(t,e){function n(n,r){const i=Ct(t,r,e);return At(null!==i),i}return n}function Ot(t,e){function n(n,r){const i=Ct(t,r,e);return At(null!==i),It(i,r,t.host,t._protocol)}return n}function Nt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Dt(t){const e=Nt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=f(t.path)),i.serverResponse=r.serverResponse,i}return n}function Rt(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new St(i,s,kt(t,n),o);return a.errorHandler=Dt(e),a}function Lt(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new St(i,s,Ot(t,n),o);return a.errorHandler=Dt(e),a}function Pt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Mt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Pt(null,e)),r}function jt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Mt(e,r,i),l=xt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=dt.getBlob(h,r,d);if(null===f)throw T();const p={name:u["fullPath"]},g=B(s,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new St(g,m,kt(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Nt(e),y}class Ft{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Ut(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){At(!1)}const r=e||["active"];return At(!!n&&-1!==r.indexOf(n)),n}function Vt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Mt(e,r,i),a={name:o["fullPath"]},c=B(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=xt(o,n),d=t.maxUploadRetryTime;function f(t){let e;Ut(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){At(!1)}return At(F(e)),e}const p=new St(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Nt(e),p}function $t(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=Ut(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){At(!1)}n||At(!1);const i=Number(n);return At(!isNaN(i)),new Ft(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new St(n,o,s,a);return c.headers=i,c.errorHandler=Nt(e),c}const Bt=262144;function qt(t,e,n,r,i,s,o,a){const c=new Ft(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw C();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,d);if(null===g)throw T();function m(t,n){const i=Ut(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?kt(e,s)(t,n):null,new Ft(o,a,"final"===i,u)}const v="POST",y=e.maxUploadRetryTime,_=new St(n,v,m,y);return _.headers=p,_.body=g.uploadData(),_.progressCallback=a||null,_.errorHandler=Nt(t),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wt(t){switch(t){case"running":case"pausing":case"canceling":return Ht.RUNNING;case"paused":return Ht.PAUSED;case"success":return Ht.SUCCESS;case"canceled":return Ht.CANCELED;case"error":return Ht.ERROR;default:return Ht.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n){const r=M(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt=null;class Qt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Xt extends Qt{initXhr(){this.xhr_.responseType="text"}}function Yt(){return Gt?Gt():new Xt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=wt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Vt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Yt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=$t(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Yt,e,n);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Bt*this._chunkMultiplier,e=new Ft(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=qt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,Yt,r,i);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Bt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Rt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Yt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=jt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Yt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=_(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Wt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new zt(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Wt(this._state)){case Ht.SUCCESS:Kt(this._resolve.bind(null,this.snapshot))();break;case Ht.CANCELED:case Ht.ERROR:const e=this._reject;Kt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Wt(this._state);switch(e){case Ht.RUNNING:case Ht.PAUSED:t.next&&Kt(t.next.bind(t,this.snapshot))();break;case Ht.SUCCESS:t.complete&&Kt(t.complete.bind(t))();break;case Ht.CANCELED:case Ht.ERROR:t.error&&Kt(t.error.bind(t,this._error))();break;default:t.error&&Kt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Jt(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mt(this._location.path)}get storage(){return this._service}get parent(){const t=pt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new Jt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function te(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Zt(t,new dt(e),n)}function ee(t){t._throwIfRoot("getDownloadURL");const e=Lt(t.storage,t._location,wt());return t.storage.makeRequestWithTokens(e,Yt).then((t=>{if(null===t)throw I();return t}))}function ne(t,e){const n=gt(t._location.path,e),r=new N(t._location.bucket,n);return new Jt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t){return/^[A-Za-z]+:\/\//.test(t)}function ie(t,e){return new Jt(t,e)}function se(t,e){if(t instanceof ce){const n=t;if(null==n._bucket)throw E();const r=new Jt(n,n._bucket);return null!=e?se(r,e):r}return void 0!==e?ne(t,e):t}function oe(t,e){if(e&&re(e)){if(t instanceof ce)return ie(t,e);throw x("To use ref(service, url), the first argument must be a Storage instance.")}return se(t,e)}function ae(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}class ce{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):ae(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=ae(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Jt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new D(S());{const i=Y(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const ue="@firebase/storage",le="0.9.9",he="storage";function de(t,e,n){return t=(0,i.Ku)(t),te(t,e,n)}function fe(t){return t=(0,i.Ku)(t),ee(t)}function pe(t,e){return t=(0,i.Ku)(t),oe(t,e)}function ge(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,he),s=n.getImmediate({identifier:e});return s}function me(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ce(n,i,s,e,r.MF)}function ve(){(0,r.om)(new s.uA(he,me,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(ue,le,""),(0,r.KO)(ue,le,"esm2017")}ve()},7034:function(t,e,n){var r;
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */(function(i){var s,o,a,c,u,l,h,d,f,p,g,m,v,y,_,b,w,E,T,C="sizzle"+1*new Date,I=i.document,x=0,S=0,A=dt(),k=dt(),O=dt(),N=dt(),D=function(t,e){return t===e&&(g=!0),0},R={}.hasOwnProperty,L=[],P=L.pop,M=L.push,j=L.push,F=L.slice,U=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},V="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",$="[\\x20\\t\\r\\n\\f]",B="(?:\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q="\\["+$+"*("+B+")(?:"+$+"*([*^$|!~]?=)"+$+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+$+"*\\]",H=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",W=new RegExp($+"+","g"),z=new RegExp("^"+$+"+|((?:^|[^\\\\])(?:\\\\.)*)"+$+"+$","g"),K=new RegExp("^"+$+"*,"+$+"*"),G=new RegExp("^"+$+"*([>+~]|"+$+")"+$+"*"),Q=new RegExp($+"|>"),X=new RegExp(H),Y=new RegExp("^"+B+"$"),Z={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+$+"*(even|odd|(([+-]|)(\\d*)n|)"+$+"*(?:([+-]|)"+$+"*(\\d+)|))"+$+"*\\)|)","i"),bool:new RegExp("^(?:"+V+")$","i"),needsContext:new RegExp("^"+$+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+$+"*((?:-\\d)?\\d*)"+$+"*\\)|)(?=[^-]|$)","i")},J=/HTML$/i,tt=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,nt=/^[^{]+\{\s*\[native \w/,rt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,it=/[+~]/,st=new RegExp("\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\([^\\r\\n\\f])","g"),ot=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},at=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ct=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},ut=function(){m()},lt=Ct((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{j.apply(L=F.call(I.childNodes),I.childNodes),L[I.childNodes.length].nodeType}catch(Dt){j={apply:L.length?function(t,e){M.apply(t,F.call(e))}:function(t,e){var n=t.length,r=0;while(t[n++]=e[r++]);t.length=n-1}}}function ht(t,e,n,r){var i,s,a,c,u,h,f,p=e&&e.ownerDocument,g=e?e.nodeType:9;if(n=n||[],"string"!==typeof t||!t||1!==g&&9!==g&&11!==g)return n;if(!r&&(m(e),e=e||v,_)){if(11!==g&&(u=rt.exec(t)))if(i=u[1]){if(9===g){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&T(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return j.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&o.getElementsByClassName&&e.getElementsByClassName)return j.apply(n,e.getElementsByClassName(i)),n}if(o.qsa&&!N[t+" "]&&(!b||!b.test(t))&&(1!==g||"object"!==e.nodeName.toLowerCase())){if(f=t,p=e,1===g&&(Q.test(t)||G.test(t))){p=it.test(t)&&wt(e.parentNode)||e,p===e&&o.scope||((c=e.getAttribute("id"))?c=c.replace(at,ct):e.setAttribute("id",c=C)),h=l(t),s=h.length;while(s--)h[s]=(c?"#"+c:":scope")+" "+Tt(h[s]);f=h.join(",")}try{return j.apply(n,p.querySelectorAll(f)),n}catch(y){N(t,!0)}finally{c===C&&e.removeAttribute("id")}}}return d(t.replace(z,"$1"),e,n,r)}function dt(){var t=[];function e(n,r){return t.push(n+" ")>a.cacheLength&&delete e[t.shift()],e[n+" "]=r}return e}function ft(t){return t[C]=!0,t}function pt(t){var e=v.createElement("fieldset");try{return!!t(e)}catch(Dt){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function gt(t,e){var n=t.split("|"),r=n.length;while(r--)a.attrHandle[n[r]]=e}function mt(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===e)return-1;return t?1:-1}function vt(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function yt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function _t(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&lt(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function bt(t){return ft((function(e){return e=+e,ft((function(n,r){var i,s=t([],n.length,e),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function wt(t){return t&&"undefined"!==typeof t.getElementsByTagName&&t}for(s in o=ht.support={},u=ht.isXML=function(t){var e=t&&t.namespaceURI,n=t&&(t.ownerDocument||t).documentElement;return!J.test(e||n&&n.nodeName||"HTML")},m=ht.setDocument=function(t){var e,n,r=t?t.ownerDocument||t:I;return r!=v&&9===r.nodeType&&r.documentElement?(v=r,y=v.documentElement,_=!u(v),I!=v&&(n=v.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ut,!1):n.attachEvent&&n.attachEvent("onunload",ut)),o.scope=pt((function(t){return y.appendChild(t).appendChild(v.createElement("div")),"undefined"!==typeof t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),o.attributes=pt((function(t){return t.className="i",!t.getAttribute("className")})),o.getElementsByTagName=pt((function(t){return t.appendChild(v.createComment("")),!t.getElementsByTagName("*").length})),o.getElementsByClassName=nt.test(v.getElementsByClassName),o.getById=pt((function(t){return y.appendChild(t).id=C,!v.getElementsByName||!v.getElementsByName(C).length})),o.getById?(a.filter["ID"]=function(t){var e=t.replace(st,ot);return function(t){return t.getAttribute("id")===e}},a.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&_){var n=e.getElementById(t);return n?[n]:[]}}):(a.filter["ID"]=function(t){var e=t.replace(st,ot);return function(t){var n="undefined"!==typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},a.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&_){var n,r,i,s=e.getElementById(t);if(s){if(n=s.getAttributeNode("id"),n&&n.value===t)return[s];i=e.getElementsByName(t),r=0;while(s=i[r++])if(n=s.getAttributeNode("id"),n&&n.value===t)return[s]}return[]}}),a.find["TAG"]=o.getElementsByTagName?function(t,e){return"undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t):o.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,s=e.getElementsByTagName(t);if("*"===t){while(n=s[i++])1===n.nodeType&&r.push(n);return r}return s},a.find["CLASS"]=o.getElementsByClassName&&function(t,e){if("undefined"!==typeof e.getElementsByClassName&&_)return e.getElementsByClassName(t)},w=[],b=[],(o.qsa=nt.test(v.querySelectorAll))&&(pt((function(t){var e;y.appendChild(t).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&b.push("[*^$]="+$+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||b.push("\\["+$+"*(?:value|"+V+")"),t.querySelectorAll("[id~="+C+"-]").length||b.push("~="),e=v.createElement("input"),e.setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||b.push("\\["+$+"*name"+$+"*="+$+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||b.push(":checked"),t.querySelectorAll("a#"+C+"+*").length||b.push(".#.+[+~]"),t.querySelectorAll("\\\f"),b.push("[\\r\\n\\f]")})),pt((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=v.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&b.push("name"+$+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&b.push(":enabled",":disabled"),y.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&b.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),b.push(",.*:")}))),(o.matchesSelector=nt.test(E=y.matches||y.webkitMatchesSelector||y.mozMatchesSelector||y.oMatchesSelector||y.msMatchesSelector))&&pt((function(t){o.disconnectedMatch=E.call(t,"*"),E.call(t,"[s!='']:x"),w.push("!=",H)})),b=b.length&&new RegExp(b.join("|")),w=w.length&&new RegExp(w.join("|")),e=nt.test(y.compareDocumentPosition),T=e||nt.test(y.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)while(e=e.parentNode)if(e===t)return!0;return!1},D=e?function(t,e){if(t===e)return g=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(n=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!o.sortDetached&&e.compareDocumentPosition(t)===n?t==v||t.ownerDocument==I&&T(I,t)?-1:e==v||e.ownerDocument==I&&T(I,e)?1:p?U(p,t)-U(p,e):0:4&n?-1:1)}:function(t,e){if(t===e)return g=!0,0;var n,r=0,i=t.parentNode,s=e.parentNode,o=[t],a=[e];if(!i||!s)return t==v?-1:e==v?1:i?-1:s?1:p?U(p,t)-U(p,e):0;if(i===s)return mt(t,e);n=t;while(n=n.parentNode)o.unshift(n);n=e;while(n=n.parentNode)a.unshift(n);while(o[r]===a[r])r++;return r?mt(o[r],a[r]):o[r]==I?-1:a[r]==I?1:0},v):v},ht.matches=function(t,e){return ht(t,null,null,e)},ht.matchesSelector=function(t,e){if(m(t),o.matchesSelector&&_&&!N[e+" "]&&(!w||!w.test(e))&&(!b||!b.test(e)))try{var n=E.call(t,e);if(n||o.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(Dt){N(e,!0)}return ht(e,v,null,[t]).length>0},ht.contains=function(t,e){return(t.ownerDocument||t)!=v&&m(t),T(t,e)},ht.attr=function(t,e){(t.ownerDocument||t)!=v&&m(t);var n=a.attrHandle[e.toLowerCase()],r=n&&R.call(a.attrHandle,e.toLowerCase())?n(t,e,!_):void 0;return void 0!==r?r:o.attributes||!_?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},ht.escape=function(t){return(t+"").replace(at,ct)},ht.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ht.uniqueSort=function(t){var e,n=[],r=0,i=0;if(g=!o.detectDuplicates,p=!o.sortStable&&t.slice(0),t.sort(D),g){while(e=t[i++])e===t[i]&&(r=n.push(i));while(r--)t.splice(n[r],1)}return p=null,t},c=ht.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"===typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=c(t)}else if(3===i||4===i)return t.nodeValue}else while(e=t[r++])n+=c(e);return n},a=ht.selectors={cacheLength:50,createPseudo:ft,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(st,ot),t[3]=(t[3]||t[4]||t[5]||"").replace(st,ot),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ht.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ht.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return Z["CHILD"].test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&X.test(n)&&(e=l(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(st,ot).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=A[t+" "];return e||(e=new RegExp("(^|"+$+")"+t+"("+$+"|$)"))&&A(t,(function(t){return e.test("string"===typeof t.className&&t.className||"undefined"!==typeof t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(r){var i=ht.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,c){var u,l,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!c&&!a,_=!1;if(m){if(s){while(g){d=e;while(d=d[g])if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===t&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){d=m,h=d[C]||(d[C]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[t]||[],f=u[0]===x&&u[1],_=f&&u[2],d=f&&m.childNodes[f];while(d=++f&&d&&d[g]||(_=f=0)||p.pop())if(1===d.nodeType&&++_&&d===e){l[t]=[x,f,_];break}}else if(y&&(d=e,h=d[C]||(d[C]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[t]||[],f=u[0]===x&&u[1],_=f),!1===_)while(d=++f&&d&&d[g]||(_=f=0)||p.pop())if((a?d.nodeName.toLowerCase()===v:1===d.nodeType)&&++_&&(y&&(h=d[C]||(d[C]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),l[t]=[x,_]),d===e))break;return _-=i,_===r||_%r===0&&_/r>=0}}},PSEUDO:function(t,e){var n,r=a.pseudos[t]||a.setFilters[t.toLowerCase()]||ht.error("unsupported pseudo: "+t);return r[C]?r(e):r.length>1?(n=[t,t,"",e],a.setFilters.hasOwnProperty(t.toLowerCase())?ft((function(t,n){var i,s=r(t,e),o=s.length;while(o--)i=U(t,s[o]),t[i]=!(n[i]=s[o])})):function(t){return r(t,0,n)}):r}},pseudos:{not:ft((function(t){var e=[],n=[],r=h(t.replace(z,"$1"));return r[C]?ft((function(t,e,n,i){var s,o=r(t,null,i,[]),a=t.length;while(a--)(s=o[a])&&(t[a]=!(e[a]=s))})):function(t,i,s){return e[0]=t,r(e,null,s,n),e[0]=null,!n.pop()}})),has:ft((function(t){return function(e){return ht(t,e).length>0}})),contains:ft((function(t){return t=t.replace(st,ot),function(e){return(e.textContent||c(e)).indexOf(t)>-1}})),lang:ft((function(t){return Y.test(t||"")||ht.error("unsupported lang: "+t),t=t.replace(st,ot).toLowerCase(),function(e){var n;do{if(n=_?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(t){var e=i.location&&i.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===y},focus:function(t){return t===v.activeElement&&(!v.hasFocus||v.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:_t(!1),disabled:_t(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!a.pseudos["empty"](t)},header:function(t){return et.test(t.nodeName)},input:function(t){return tt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:bt((function(){return[0]})),last:bt((function(t,e){return[e-1]})),eq:bt((function(t,e,n){return[n<0?n+e:n]})),even:bt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:bt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:bt((function(t,e,n){for(var r=n<0?n+e:n>e?e:n;--r>=0;)t.push(r);return t})),gt:bt((function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t}))}},a.pseudos["nth"]=a.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[s]=vt(s);for(s in{submit:!0,reset:!0})a.pseudos[s]=yt(s);function Et(){}function Tt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function Ct(t,e,n){var r=e.dir,i=e.next,s=i||r,o=n&&"parentNode"===s,a=S++;return e.first?function(e,n,i){while(e=e[r])if(1===e.nodeType||o)return t(e,n,i);return!1}:function(e,n,c){var u,l,h,d=[x,a];if(c){while(e=e[r])if((1===e.nodeType||o)&&t(e,n,c))return!0}else while(e=e[r])if(1===e.nodeType||o)if(h=e[C]||(e[C]={}),l=h[e.uniqueID]||(h[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((u=l[s])&&u[0]===x&&u[1]===a)return d[2]=u[2];if(l[s]=d,d[2]=t(e,n,c))return!0}return!1}}function It(t){return t.length>1?function(e,n,r){var i=t.length;while(i--)if(!t[i](e,n,r))return!1;return!0}:t[0]}function xt(t,e,n){for(var r=0,i=e.length;r<i;r++)ht(t,e[r],n);return n}function St(t,e,n,r,i){for(var s,o=[],a=0,c=t.length,u=null!=e;a<c;a++)(s=t[a])&&(n&&!n(s,r,i)||(o.push(s),u&&e.push(a)));return o}function At(t,e,n,r,i,s){return r&&!r[C]&&(r=At(r)),i&&!i[C]&&(i=At(i,s)),ft((function(s,o,a,c){var u,l,h,d=[],f=[],p=o.length,g=s||xt(e||"*",a.nodeType?[a]:a,[]),m=!t||!s&&e?g:St(g,d,t,a,c),v=n?i||(s?t:p||r)?[]:o:m;if(n&&n(m,v,a,c),r){u=St(v,f),r(u,[],a,c),l=u.length;while(l--)(h=u[l])&&(v[f[l]]=!(m[f[l]]=h))}if(s){if(i||t){if(i){u=[],l=v.length;while(l--)(h=v[l])&&u.push(m[l]=h);i(null,v=[],u,c)}l=v.length;while(l--)(h=v[l])&&(u=i?U(s,h):d[l])>-1&&(s[u]=!(o[u]=h))}}else v=St(v===o?v.splice(p,v.length):v),i?i(null,o,v,c):j.apply(o,v)}))}function kt(t){for(var e,n,r,i=t.length,s=a.relative[t[0].type],o=s||a.relative[" "],c=s?1:0,u=Ct((function(t){return t===e}),o,!0),l=Ct((function(t){return U(e,t)>-1}),o,!0),h=[function(t,n,r){var i=!s&&(r||n!==f)||((e=n).nodeType?u(t,n,r):l(t,n,r));return e=null,i}];c<i;c++)if(n=a.relative[t[c].type])h=[Ct(It(h),n)];else{if(n=a.filter[t[c].type].apply(null,t[c].matches),n[C]){for(r=++c;r<i;r++)if(a.relative[t[r].type])break;return At(c>1&&It(h),c>1&&Tt(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace(z,"$1"),n,c<r&&kt(t.slice(c,r)),r<i&&kt(t=t.slice(r)),r<i&&Tt(t))}h.push(n)}return It(h)}function Ot(t,e){var n=e.length>0,r=t.length>0,i=function(i,s,o,c,u){var l,h,d,p=0,g="0",y=i&&[],b=[],w=f,E=i||r&&a.find["TAG"]("*",u),T=x+=null==w?1:Math.random()||.1,C=E.length;for(u&&(f=s==v||s||u);g!==C&&null!=(l=E[g]);g++){if(r&&l){h=0,s||l.ownerDocument==v||(m(l),o=!_);while(d=t[h++])if(d(l,s||v,o)){c.push(l);break}u&&(x=T)}n&&((l=!d&&l)&&p--,i&&y.push(l))}if(p+=g,n&&g!==p){h=0;while(d=e[h++])d(y,b,s,o);if(i){if(p>0)while(g--)y[g]||b[g]||(b[g]=P.call(c));b=St(b)}j.apply(c,b),u&&!i&&b.length>0&&p+e.length>1&&ht.uniqueSort(c)}return u&&(x=T,f=w),y};return n?ft(i):i}Et.prototype=a.filters=a.pseudos,a.setFilters=new Et,l=ht.tokenize=function(t,e){var n,r,i,s,o,c,u,l=k[t+" "];if(l)return e?0:l.slice(0);o=t,c=[],u=a.preFilter;while(o){for(s in n&&!(r=K.exec(o))||(r&&(o=o.slice(r[0].length)||o),c.push(i=[])),n=!1,(r=G.exec(o))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),o=o.slice(n.length)),a.filter)!(r=Z[s].exec(o))||u[s]&&!(r=u[s](r))||(n=r.shift(),i.push({value:n,type:s,matches:r}),o=o.slice(n.length));if(!n)break}return e?o.length:o?ht.error(t):k(t,c).slice(0)},h=ht.compile=function(t,e){var n,r=[],i=[],s=O[t+" "];if(!s){e||(e=l(t)),n=e.length;while(n--)s=kt(e[n]),s[C]?r.push(s):i.push(s);s=O(t,Ot(i,r)),s.selector=t}return s},d=ht.select=function(t,e,n,r){var i,s,o,c,u,d="function"===typeof t&&t,f=!r&&l(t=d.selector||t);if(n=n||[],1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(o=s[0]).type&&9===e.nodeType&&_&&a.relative[s[1].type]){if(e=(a.find["ID"](o.matches[0].replace(st,ot),e)||[])[0],!e)return n;d&&(e=e.parentNode),t=t.slice(s.shift().value.length)}i=Z["needsContext"].test(t)?0:s.length;while(i--){if(o=s[i],a.relative[c=o.type])break;if((u=a.find[c])&&(r=u(o.matches[0].replace(st,ot),it.test(s[0].type)&&wt(e.parentNode)||e))){if(s.splice(i,1),t=r.length&&Tt(s),!t)return j.apply(n,r),n;break}}}return(d||h(t,f))(r,e,!_,n,!e||it.test(t)&&wt(e.parentNode)||e),n},o.sortStable=C.split("").sort(D).join("")===C,o.detectDuplicates=!!g,m(),o.sortDetached=pt((function(t){return 1&t.compareDocumentPosition(v.createElement("fieldset"))})),pt((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||gt("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),o.attributes&&pt((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||gt("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),pt((function(t){return null==t.getAttribute("disabled")}))||gt(V,(function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}));var Nt=i.Sizzle;ht.noConflict=function(){return i.Sizzle===ht&&(i.Sizzle=Nt),ht},r=function(){return ht}.call(e,n,e,t),void 0===r||(t.exports=r)})(window)},4271:function(t,e,n){var r,i;r=[n(2822),n(4954),n(719),n(1136),n(7035),n(9173),n(2658),n(9819),n(4373),n(6582),n(4234),n(6783)],i=function(t,e,n,r,i,s,o){"use strict";var a=/%20/g,c=/#.*$/,u=/([?&])_=[^&]*/,l=/^(.*?):[ \t]*([^\r\n]*)$/gm,h=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,d=/^(?:GET|HEAD)$/,f=/^\/\//,p={},g={},m="*/".concat("*"),v=e.createElement("a");function y(t){return function(e,i){"string"!==typeof e&&(i=e,e="*");var s,o=0,a=e.toLowerCase().match(r)||[];if(n(i))while(s=a[o++])"+"===s[0]?(s=s.slice(1)||"*",(t[s]=t[s]||[]).unshift(i)):(t[s]=t[s]||[]).push(i)}}function _(e,n,r,i){var s={},o=e===g;function a(c){var u;return s[c]=!0,t.each(e[c]||[],(function(t,e){var c=e(n,r,i);return"string"!==typeof c||o||s[c]?o?!(u=c):void 0:(n.dataTypes.unshift(c),a(c),!1)})),u}return a(n.dataTypes[0])||!s["*"]&&a("*")}function b(e,n){var r,i,s=t.ajaxSettings.flatOptions||{};for(r in n)void 0!==n[r]&&((s[r]?e:i||(i={}))[r]=n[r]);return i&&t.extend(!0,e,i),e}function w(t,e,n){var r,i,s,o,a=t.contents,c=t.dataTypes;while("*"===c[0])c.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)s=c[0];else{for(i in n){if(!c[0]||t.converters[i+" "+c[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==c[0]&&c.unshift(s),n[s]}function E(t,e,n,r){var i,s,o,a,c,u={},l=t.dataTypes.slice();if(l[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o];s=l.shift();while(s)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!c&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),c=s,s=l.shift(),s)if("*"===s)s=c;else if("*"!==c&&c!==s){if(o=u[c+" "+s]||u["* "+s],!o)for(i in u)if(a=i.split(" "),a[1]===s&&(o=u[c+" "+a[0]]||u["* "+a[0]],o)){!0===o?o=u[i]:!0!==u[i]&&(s=a[0],l.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+c+" to "+s}}}return{state:"success",data:e}}return v.href=i.href,t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:i.href,type:"GET",isLocal:h.test(i.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":m,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?b(b(e,t.ajaxSettings),n):b(t.ajaxSettings,e)},ajaxPrefilter:y(p),ajaxTransport:y(g),ajax:function(n,h){"object"===typeof n&&(h=n,n=void 0),h=h||{};var y,b,T,C,I,x,S,A,k,O,N=t.ajaxSetup({},h),D=N.context||N,R=N.context&&(D.nodeType||D.jquery)?t(D):t.event,L=t.Deferred(),P=t.Callbacks("once memory"),M=N.statusCode||{},j={},F={},U="canceled",V={readyState:0,getResponseHeader:function(t){var e;if(S){if(!C){C={};while(e=l.exec(T))C[e[1].toLowerCase()+" "]=(C[e[1].toLowerCase()+" "]||[]).concat(e[2])}e=C[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return S?T:null},setRequestHeader:function(t,e){return null==S&&(t=F[t.toLowerCase()]=F[t.toLowerCase()]||t,j[t]=e),this},overrideMimeType:function(t){return null==S&&(N.mimeType=t),this},statusCode:function(t){var e;if(t)if(S)V.always(t[V.status]);else for(e in t)M[e]=[M[e],t[e]];return this},abort:function(t){var e=t||U;return y&&y.abort(e),$(0,e),this}};if(L.promise(V),N.url=((n||N.url||i.href)+"").replace(f,i.protocol+"//"),N.type=h.method||h.type||N.method||N.type,N.dataTypes=(N.dataType||"*").toLowerCase().match(r)||[""],null==N.crossDomain){x=e.createElement("a");try{x.href=N.url,x.href=x.href,N.crossDomain=v.protocol+"//"+v.host!==x.protocol+"//"+x.host}catch(B){N.crossDomain=!0}}if(N.data&&N.processData&&"string"!==typeof N.data&&(N.data=t.param(N.data,N.traditional)),_(p,N,h,V),S)return V;for(k in A=t.event&&N.global,A&&0===t.active++&&t.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!d.test(N.type),b=N.url.replace(c,""),N.hasContent?N.data&&N.processData&&0===(N.contentType||"").indexOf("application/x-www-form-urlencoded")&&(N.data=N.data.replace(a,"+")):(O=N.url.slice(b.length),N.data&&(N.processData||"string"===typeof N.data)&&(b+=(o.test(b)?"&":"?")+N.data,delete N.data),!1===N.cache&&(b=b.replace(u,"$1"),O=(o.test(b)?"&":"?")+"_="+s.guid+++O),N.url=b+O),N.ifModified&&(t.lastModified[b]&&V.setRequestHeader("If-Modified-Since",t.lastModified[b]),t.etag[b]&&V.setRequestHeader("If-None-Match",t.etag[b])),(N.data&&N.hasContent&&!1!==N.contentType||h.contentType)&&V.setRequestHeader("Content-Type",N.contentType),V.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+("*"!==N.dataTypes[0]?", "+m+"; q=0.01":""):N.accepts["*"]),N.headers)V.setRequestHeader(k,N.headers[k]);if(N.beforeSend&&(!1===N.beforeSend.call(D,V,N)||S))return V.abort();if(U="abort",P.add(N.complete),V.done(N.success),V.fail(N.error),y=_(g,N,h,V),y){if(V.readyState=1,A&&R.trigger("ajaxSend",[V,N]),S)return V;N.async&&N.timeout>0&&(I=window.setTimeout((function(){V.abort("timeout")}),N.timeout));try{S=!1,y.send(j,$)}catch(B){if(S)throw B;$(-1,B)}}else $(-1,"No Transport");function $(e,n,r,i){var s,o,a,c,u,l=n;S||(S=!0,I&&window.clearTimeout(I),y=void 0,T=i||"",V.readyState=e>0?4:0,s=e>=200&&e<300||304===e,r&&(c=w(N,V,r)),!s&&t.inArray("script",N.dataTypes)>-1&&t.inArray("json",N.dataTypes)<0&&(N.converters["text script"]=function(){}),c=E(N,c,V,s),s?(N.ifModified&&(u=V.getResponseHeader("Last-Modified"),u&&(t.lastModified[b]=u),u=V.getResponseHeader("etag"),u&&(t.etag[b]=u)),204===e||"HEAD"===N.type?l="nocontent":304===e?l="notmodified":(l=c.state,o=c.data,a=c.error,s=!a)):(a=l,!e&&l||(l="error",e<0&&(e=0))),V.status=e,V.statusText=(n||l)+"",s?L.resolveWith(D,[o,l,V]):L.rejectWith(D,[V,l,a]),V.statusCode(M),M=void 0,A&&R.trigger(s?"ajaxSuccess":"ajaxError",[V,N,s?o:a]),P.fireWith(D,[V,l]),A&&(R.trigger("ajaxComplete",[V,N]),--t.active||t.event.trigger("ajaxStop")))}return V},getJSON:function(e,n,r){return t.get(e,n,r,"json")},getScript:function(e,n){return t.get(e,void 0,n,"script")}}),t.each(["get","post"],(function(e,r){t[r]=function(e,i,s,o){return n(i)&&(o=o||s,s=i,i=void 0),t.ajax(t.extend({url:e,type:r,dataType:o,data:i,success:s},t.isPlainObject(e)&&e))}})),t.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),t}.apply(e,r),void 0===i||(t.exports=i)},2786:function(t,e,n){var r,i;r=[n(2822),n(719),n(9173),n(2658),n(4271)],i=function(t,e,n,r){"use strict";var i=[],s=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=i.pop()||t.expando+"_"+n.guid++;return this[e]=!0,e}}),t.ajaxPrefilter("json jsonp",(function(n,o,a){var c,u,l,h=!1!==n.jsonp&&(s.test(n.url)?"url":"string"===typeof n.data&&0===(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&s.test(n.data)&&"data");if(h||"jsonp"===n.dataTypes[0])return c=n.jsonpCallback=e(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,h?n[h]=n[h].replace(s,"$1"+c):!1!==n.jsonp&&(n.url+=(r.test(n.url)?"&":"?")+n.jsonp+"="+c),n.converters["script json"]=function(){return l||t.error(c+" was not called"),l[0]},n.dataTypes[0]="json",u=window[c],window[c]=function(){l=arguments},a.always((function(){void 0===u?t(window).removeProp(c):window[c]=u,n[c]&&(n.jsonpCallback=o.jsonpCallback,i.push(c)),l&&e(u)&&u(l[0]),l=u=void 0})),"script"}))}.apply(e,r),void 0===i||(t.exports=i)},4578:function(t,e,n){var r,i;r=[n(2822),n(6277),n(719),n(1315),n(4271),n(5144),n(7644),n(8268)],i=function(t,e,n){"use strict";t.fn.load=function(r,i,s){var o,a,c,u=this,l=r.indexOf(" ");return l>-1&&(o=e(r.slice(l)),r=r.slice(0,l)),n(i)?(s=i,i=void 0):i&&"object"===typeof i&&(a="POST"),u.length>0&&t.ajax({url:r,type:a||"GET",dataType:"html",data:i}).done((function(e){c=arguments,u.html(o?t("<div>").append(t.parseHTML(e)).find(o):e)})).always(s&&function(t,e){u.each((function(){s.apply(this,c||[t.responseText,e,t])}))}),this}}.apply(e,r),void 0===i||(t.exports=i)},8205:function(t,e,n){var r,i;r=[n(2822),n(4954),n(4271)],i=function(t,e){"use strict";t.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return t.globalEval(e),e}}}),t.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),t.ajaxTransport("script",(function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(s,o){r=t("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(t){r.remove(),i=null,t&&o("error"===t.type?404:200,t.type)}),e.head.appendChild(r[0])},abort:function(){i&&i()}}}))}.apply(e,r),void 0===i||(t.exports=i)},7035:function(t,e,n){var r;r=function(){"use strict";return window.location}.call(e,n,e,t),void 0===r||(t.exports=r)},9173:function(t,e,n){var r;r=function(){"use strict";return{guid:Date.now()}}.call(e,n,e,t),void 0===r||(t.exports=r)},2658:function(t,e,n){var r;r=function(){"use strict";return/\?/}.call(e,n,e,t),void 0===r||(t.exports=r)},3470:function(t,e,n){var r,i;r=[n(2822),n(180),n(4271)],i=function(t,e){"use strict";t.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(t){}};var n={0:200,1223:204},r=t.ajaxSettings.xhr();e.cors=!!r&&"withCredentials"in r,e.ajax=r=!!r,t.ajaxTransport((function(t){var i,s;if(e.cors||r&&!t.crossDomain)return{send:function(e,r){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)a.setRequestHeader(o,e[o]);i=function(t){return function(){i&&(i=s=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!==typeof a.status?r(0,"error"):r(a.status,a.statusText):r(n[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!==typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=i(),s=a.onerror=a.ontimeout=i("error"),void 0!==a.onabort?a.onabort=s:a.onreadystatechange=function(){4===a.readyState&&window.setTimeout((function(){i&&s()}))},i=i("abort");try{a.send(t.hasContent&&t.data||null)}catch(c){if(i)throw c}},abort:function(){i&&i()}}}))}.apply(e,r),void 0===i||(t.exports=i)},8988:function(t,e,n){var r,i;r=[n(2822),n(7528),n(50),n(475),n(9428)],i=function(t){"use strict";return t}.apply(e,r),void 0===i||(t.exports=i)},7528:function(t,e,n){var r,i;r=[n(2822),n(9631),n(3362),n(5172),n(1136),n(8268)],i=function(t,e,n,r,i){"use strict";var s,o=t.expr.attrHandle;t.fn.extend({attr:function(n,r){return e(this,t.attr,n,r,arguments.length>1)},removeAttr:function(e){return this.each((function(){t.removeAttr(this,e)}))}}),t.extend({attr:function(e,n,r){var i,o,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return"undefined"===typeof e.getAttribute?t.prop(e,n,r):(1===a&&t.isXMLDoc(e)||(o=t.attrHooks[n.toLowerCase()]||(t.expr.match.bool.test(n)?s:void 0)),void 0!==r?null===r?void t.removeAttr(e,n):o&&"set"in o&&void 0!==(i=o.set(e,r,n))?i:(e.setAttribute(n,r+""),r):o&&"get"in o&&null!==(i=o.get(e,n))?i:(i=t.find.attr(e,n),null==i?void 0:i))},attrHooks:{type:{set:function(t,e){if(!r.radioValue&&"radio"===e&&n(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var n,r=0,s=e&&e.match(i);if(s&&1===t.nodeType)while(n=s[r++])t.removeAttribute(n)}}),s={set:function(e,n,r){return!1===n?t.removeAttr(e,r):e.setAttribute(r,r),r}},t.each(t.expr.match.bool.source.match(/\w+/g),(function(e,n){var r=o[n]||t.find.attr;o[n]=function(t,e,n){var i,s,a=e.toLowerCase();return n||(s=o[a],o[a]=i,i=null!=r(t,e,n)?a:null,o[a]=s),i}}))}.apply(e,r),void 0===i||(t.exports=i)},475:function(t,e,n){var r,i;r=[n(2822),n(6277),n(719),n(1136),n(711),n(9819)],i=function(t,e,n,r,i){"use strict";function s(t){return t.getAttribute&&t.getAttribute("class")||""}function o(t){return Array.isArray(t)?t:"string"===typeof t&&t.match(r)||[]}t.fn.extend({addClass:function(r){var i,a,c,u,l,h,d,f=0;if(n(r))return this.each((function(e){t(this).addClass(r.call(this,e,s(this)))}));if(i=o(r),i.length)while(a=this[f++])if(u=s(a),c=1===a.nodeType&&" "+e(u)+" ",c){h=0;while(l=i[h++])c.indexOf(" "+l+" ")<0&&(c+=l+" ");d=e(c),u!==d&&a.setAttribute("class",d)}return this},removeClass:function(r){var i,a,c,u,l,h,d,f=0;if(n(r))return this.each((function(e){t(this).removeClass(r.call(this,e,s(this)))}));if(!arguments.length)return this.attr("class","");if(i=o(r),i.length)while(a=this[f++])if(u=s(a),c=1===a.nodeType&&" "+e(u)+" ",c){h=0;while(l=i[h++])while(c.indexOf(" "+l+" ")>-1)c=c.replace(" "+l+" "," ");d=e(c),u!==d&&a.setAttribute("class",d)}return this},toggleClass:function(e,r){var a=typeof e,c="string"===a||Array.isArray(e);return"boolean"===typeof r&&c?r?this.addClass(e):this.removeClass(e):n(e)?this.each((function(n){t(this).toggleClass(e.call(this,n,s(this),r),r)})):this.each((function(){var n,r,u,l;if(c){r=0,u=t(this),l=o(e);while(n=l[r++])u.hasClass(n)?u.removeClass(n):u.addClass(n)}else void 0!==e&&"boolean"!==a||(n=s(this),n&&i.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===e?"":i.get(this,"__className__")||""))}))},hasClass:function(t){var n,r,i=0;n=" "+t+" ";while(r=this[i++])if(1===r.nodeType&&(" "+e(s(r))+" ").indexOf(n)>-1)return!0;return!1}})}.apply(e,r),void 0===i||(t.exports=i)},50:function(t,e,n){var r,i;r=[n(2822),n(9631),n(5172),n(8268)],i=function(t,e,n){"use strict";var r=/^(?:input|select|textarea|button)$/i,i=/^(?:a|area)$/i;t.fn.extend({prop:function(n,r){return e(this,t.prop,n,r,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[t.propFix[e]||e]}))}}),t.extend({prop:function(e,n,r){var i,s,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&t.isXMLDoc(e)||(n=t.propFix[n]||n,s=t.propHooks[n]),void 0!==r?s&&"set"in s&&void 0!==(i=s.set(e,r,n))?i:e[n]=r:s&&"get"in s&&null!==(i=s.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=t.find.attr(e,"tabindex");return n?parseInt(n,10):r.test(e.nodeName)||i.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),n.optSelected||(t.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){t.propFix[this.toLowerCase()]=this}))}.apply(e,r),void 0===i||(t.exports=i)},5172:function(t,e,n){var r,i;r=[n(4954),n(180)],i=function(t,e){"use strict";return function(){var n=t.createElement("input"),r=t.createElement("select"),i=r.appendChild(t.createElement("option"));n.type="checkbox",e.checkOn=""!==n.value,e.optSelected=i.selected,n=t.createElement("input"),n.value="t",n.type="radio",e.radioValue="t"===n.value}(),e}.apply(e,r),void 0===i||(t.exports=i)},9428:function(t,e,n){var r,i;r=[n(2822),n(6277),n(5172),n(3362),n(719),n(9819)],i=function(t,e,n,r,i){"use strict";var s=/\r/g;t.fn.extend({val:function(e){var n,r,o,a=this[0];return arguments.length?(o=i(e),this.each((function(r){var i;1===this.nodeType&&(i=o?e.call(this,r,t(this).val()):e,null==i?i="":"number"===typeof i?i+="":Array.isArray(i)&&(i=t.map(i,(function(t){return null==t?"":t+""}))),n=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&void 0!==n.set(this,i,"value")||(this.value=i))}))):a?(n=t.valHooks[a.type]||t.valHooks[a.nodeName.toLowerCase()],n&&"get"in n&&void 0!==(r=n.get(a,"value"))?r:(r=a.value,"string"===typeof r?r.replace(s,""):null==r?"":r)):void 0}}),t.extend({valHooks:{option:{get:function(n){var r=t.find.attr(n,"value");return null!=r?r:e(t.text(n))}},select:{get:function(e){var n,i,s,o=e.options,a=e.selectedIndex,c="select-one"===e.type,u=c?null:[],l=c?a+1:o.length;for(s=a<0?l:c?a:0;s<l;s++)if(i=o[s],(i.selected||s===a)&&!i.disabled&&(!i.parentNode.disabled||!r(i.parentNode,"optgroup"))){if(n=t(i).val(),c)return n;u.push(n)}return u},set:function(e,n){var r,i,s=e.options,o=t.makeArray(n),a=s.length;while(a--)i=s[a],(i.selected=t.inArray(t.valHooks.option.get(i),o)>-1)&&(r=!0);return r||(e.selectedIndex=-1),o}}}}),t.each(["radio","checkbox"],(function(){t.valHooks[this]={set:function(e,n){if(Array.isArray(n))return e.checked=t.inArray(t(e).val(),n)>-1}},n.checkOn||(t.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}))}.apply(e,r),void 0===i||(t.exports=i)},9197:function(t,e,n){var r,i;r=[n(2822),n(4320),n(719),n(1136)],i=function(t,e,n,r){"use strict";function i(e){var n={};return t.each(e.match(r)||[],(function(t,e){n[e]=!0})),n}return t.Callbacks=function(r){r="string"===typeof r?i(r):t.extend({},r);var s,o,a,c,u=[],l=[],h=-1,d=function(){for(c=c||r.once,a=s=!0;l.length;h=-1){o=l.shift();while(++h<u.length)!1===u[h].apply(o[0],o[1])&&r.stopOnFalse&&(h=u.length,o=!1)}r.memory||(o=!1),s=!1,c&&(u=o?[]:"")},f={add:function(){return u&&(o&&!s&&(h=u.length-1,l.push(o)),function i(s){t.each(s,(function(t,s){n(s)?r.unique&&f.has(s)||u.push(s):s&&s.length&&"string"!==e(s)&&i(s)}))}(arguments),o&&!s&&d()),this},remove:function(){return t.each(arguments,(function(e,n){var r;while((r=t.inArray(n,u,r))>-1)u.splice(r,1),r<=h&&h--})),this},has:function(e){return e?t.inArray(e,u)>-1:u.length>0},empty:function(){return u&&(u=[]),this},disable:function(){return c=l=[],u=o="",this},disabled:function(){return!u},lock:function(){return c=l=[],o||s||(u=o=""),this},locked:function(){return!!c},fireWith:function(t,e){return c||(e=e||[],e=[t,e.slice?e.slice():e],l.push(e),s||d()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!a}};return f},t}.apply(e,r),void 0===i||(t.exports=i)},2822:function(t,e,n){var r,i;r=[n(1056),n(4677),n(3837),n(756),n(5027),n(7230),n(2897),n(9315),n(5327),n(3767),n(8965),n(180),n(719),n(387),n(6659),n(4320)],i=function(t,e,n,r,i,s,o,a,c,u,l,h,d,f,p,g){"use strict";var m="3.6.0",v=function(t,e){return new v.fn.init(t,e)};function y(t){var e=!!t&&"length"in t&&t.length,n=g(t);return!d(t)&&!f(t)&&("array"===n||0===e||"number"===typeof e&&e>0&&e-1 in t)}return v.fn=v.prototype={jquery:m,constructor:v,length:0,toArray:function(){return n.call(this)},get:function(t){return null==t?n.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=v.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return v.each(this,t)},map:function(t){return this.pushStack(v.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(v.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(v.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:i,sort:t.sort,splice:t.splice},v.extend=v.fn.extend=function(){var t,e,n,r,i,s,o=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"===typeof o&&(u=o,o=arguments[a]||{},a++),"object"===typeof o||d(o)||(o={}),a===c&&(o=this,a--);a<c;a++)if(null!=(t=arguments[a]))for(e in t)r=t[e],"__proto__"!==e&&o!==r&&(u&&r&&(v.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[e],s=i&&!Array.isArray(n)?[]:i||v.isPlainObject(n)?n:{},i=!1,o[e]=v.extend(u,s,r)):void 0!==r&&(o[e]=r));return o},v.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var n,r;return!(!t||"[object Object]"!==a.call(t))&&(n=e(t),!n||(r=c.call(n,"constructor")&&n.constructor,"function"===typeof r&&u.call(r)===l))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){p(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,r=0;if(y(t)){for(n=t.length;r<n;r++)if(!1===e.call(t[r],r,t[r]))break}else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(y(Object(t))?v.merge(n,"string"===typeof t?[t]:t):i.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:s.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],s=0,o=t.length,a=!n;s<o;s++)r=!e(t[s],s),r!==a&&i.push(t[s]);return i},map:function(t,e,n){var i,s,o=0,a=[];if(y(t))for(i=t.length;o<i;o++)s=e(t[o],o,n),null!=s&&a.push(s);else for(o in t)s=e(t[o],o,n),null!=s&&a.push(s);return r(a)},guid:1,support:h}),"function"===typeof Symbol&&(v.fn[Symbol.iterator]=t[Symbol.iterator]),v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){o["[object "+e+"]"]=e.toLowerCase()})),v}.apply(e,r),void 0===i||(t.exports=i)},6659:function(t,e,n){var r,i;r=[n(4954)],i=function(t){"use strict";var e={type:!0,src:!0,nonce:!0,noModule:!0};function n(n,r,i){i=i||t;var s,o,a=i.createElement("script");if(a.text=n,r)for(s in e)o=r[s]||r.getAttribute&&r.getAttribute(s),o&&a.setAttribute(s,o);i.head.appendChild(a).parentNode.removeChild(a)}return n}.apply(e,r),void 0===i||(t.exports=i)},9631:function(t,e,n){var r,i;r=[n(2822),n(4320),n(719)],i=function(t,e,n){"use strict";var r=function(i,s,o,a,c,u,l){var h=0,d=i.length,f=null==o;if("object"===e(o))for(h in c=!0,o)r(i,s,h,o[h],!0,u,l);else if(void 0!==a&&(c=!0,n(a)||(l=!0),f&&(l?(s.call(i,a),s=null):(f=s,s=function(e,n,r){return f.call(t(e),r)})),s))for(;h<d;h++)s(i[h],o,l?a:a.call(i[h],h,s(i[h],o)));return c?i:f?s.call(i):d?s(i[0],o):u};return r}.apply(e,r),void 0===i||(t.exports=i)},9303:function(t,e){var n,r;n=[],r=function(){"use strict";var t=/^-ms-/,e=/-([a-z])/g;function n(t,e){return e.toUpperCase()}function r(r){return r.replace(t,"ms-").replace(e,n)}return r}.apply(e,n),void 0===r||(t.exports=r)},9819:function(t,e,n){var r,i;r=[n(2822),n(4954),n(719),n(4797),n(114)],i=function(t,e,n,r){"use strict";var i,s=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,o=t.fn.init=function(o,a,c){var u,l;if(!o)return this;if(c=c||i,"string"===typeof o){if(u="<"===o[0]&&">"===o[o.length-1]&&o.length>=3?[null,o,null]:s.exec(o),!u||!u[1]&&a)return!a||a.jquery?(a||c).find(o):this.constructor(a).find(o);if(u[1]){if(a=a instanceof t?a[0]:a,t.merge(this,t.parseHTML(u[1],a&&a.nodeType?a.ownerDocument||a:e,!0)),r.test(u[1])&&t.isPlainObject(a))for(u in a)n(this[u])?this[u](a[u]):this.attr(u,a[u]);return this}return l=e.getElementById(u[2]),l&&(this[0]=l,this.length=1),this}return o.nodeType?(this[0]=o,this.length=1,this):n(o)?void 0!==c.ready?c.ready(o):o(t):t.makeArray(o,this)};return o.prototype=t.fn,i=t(e),o}.apply(e,r),void 0===i||(t.exports=i)},6349:function(t,e,n){var r,i;r=[n(2822),n(2840),n(8268)],i=function(t,e){"use strict";var n=function(e){return t.contains(e.ownerDocument,e)},r={composed:!0};return e.getRootNode&&(n=function(e){return t.contains(e.ownerDocument,e)||e.getRootNode(r)===e.ownerDocument}),n}.apply(e,r),void 0===i||(t.exports=i)},3362:function(t,e,n){var r;r=function(){"use strict";function t(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}return t}.call(e,n,e,t),void 0===r||(t.exports=r)},1315:function(t,e,n){var r,i;r=[n(2822),n(4954),n(4797),n(1119),n(2942)],i=function(t,e,n,r,i){"use strict";return t.parseHTML=function(s,o,a){return"string"!==typeof s?[]:("boolean"===typeof o&&(a=o,o=!1),o||(i.createHTMLDocument?(o=e.implementation.createHTMLDocument(""),c=o.createElement("base"),c.href=e.location.href,o.head.appendChild(c)):o=e),u=n.exec(s),l=!a&&[],u?[o.createElement(u[1])]:(u=r([s],o,l),l&&l.length&&t(l).remove(),t.merge([],u.childNodes)));var c,u,l},t.parseHTML}.apply(e,r),void 0===i||(t.exports=i)},4373:function(t,e,n){var r,i;r=[n(2822)],i=function(t){"use strict";return t.parseXML=function(e){var n,r;if(!e||"string"!==typeof e)return null;try{n=(new window.DOMParser).parseFromString(e,"text/xml")}catch(i){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||t.error("Invalid XML: "+(r?t.map(r.childNodes,(function(t){return t.textContent})).join("\n"):e)),n},t.parseXML}.apply(e,r),void 0===i||(t.exports=i)},9846:function(t,e,n){var r,i;r=[n(2822),n(4954),n(2833),n(4234)],i=function(t,e){"use strict";var n=t.Deferred();function r(){e.removeEventListener("DOMContentLoaded",r),window.removeEventListener("load",r),t.ready()}t.fn.ready=function(e){return n.then(e).catch((function(e){t.readyException(e)})),this},t.extend({isReady:!1,readyWait:1,ready:function(r){(!0===r?--t.readyWait:t.isReady)||(t.isReady=!0,!0!==r&&--t.readyWait>0||n.resolveWith(e,[t]))}}),t.ready.then=n.then,"complete"===e.readyState||"loading"!==e.readyState&&!e.documentElement.doScroll?window.setTimeout(t.ready):(e.addEventListener("DOMContentLoaded",r),window.addEventListener("load",r))}.apply(e,r),void 0===i||(t.exports=i)},2833:function(t,e,n){var r,i;r=[n(2822)],i=function(t){"use strict";t.readyException=function(t){window.setTimeout((function(){throw t}))}}.apply(e,r),void 0===i||(t.exports=i)},6277:function(t,e,n){var r,i;r=[n(1136)],i=function(t){"use strict";function e(e){var n=e.match(t)||[];return n.join(" ")}return e}.apply(e,r),void 0===i||(t.exports=i)},2942:function(t,e,n){var r,i;r=[n(4954),n(180)],i=function(t,e){"use strict";return e.createHTMLDocument=function(){var e=t.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),e}.apply(e,r),void 0===i||(t.exports=i)},4320:function(t,e,n){var r,i;r=[n(2897),n(9315)],i=function(t,e){"use strict";function n(n){return null==n?n+"":"object"===typeof n||"function"===typeof n?t[e.call(n)]||"object":typeof n}return n}.apply(e,r),void 0===i||(t.exports=i)},4797:function(t,e,n){var r;r=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(e,n,e,t),void 0===r||(t.exports=r)},7258:function(t,e,n){var r,i;r=[n(2822),n(9631),n(9303),n(3362),n(7240),n(1922),n(2684),n(7889),n(6968),n(5892),n(7075),n(8528),n(434),n(3083),n(9819),n(9846),n(8268)],i=function(t,e,n,r,i,s,o,a,c,u,l,h,d,f){"use strict";var p=/^(none|table(?!-c[ea]).+)/,g=/^--/,m={position:"absolute",visibility:"hidden",display:"block"},v={letterSpacing:"0",fontWeight:"400"};function y(t,e,n){var r=i.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function _(e,n,r,i,s,a){var c="width"===n?1:0,u=0,l=0;if(r===(i?"border":"content"))return 0;for(;c<4;c+=2)"margin"===r&&(l+=t.css(e,r+o[c],!0,s)),i?("content"===r&&(l-=t.css(e,"padding"+o[c],!0,s)),"margin"!==r&&(l-=t.css(e,"border"+o[c]+"Width",!0,s))):(l+=t.css(e,"padding"+o[c],!0,s),"padding"!==r?l+=t.css(e,"border"+o[c]+"Width",!0,s):u+=t.css(e,"border"+o[c]+"Width",!0,s));return!i&&a>=0&&(l+=Math.max(0,Math.ceil(e["offset"+n[0].toUpperCase()+n.slice(1)]-a-l-u-.5))||0),l}function b(e,n,i){var o=a(e),c=!d.boxSizingReliable()||i,l=c&&"border-box"===t.css(e,"boxSizing",!1,o),h=l,f=u(e,n,o),p="offset"+n[0].toUpperCase()+n.slice(1);if(s.test(f)){if(!i)return f;f="auto"}return(!d.boxSizingReliable()&&l||!d.reliableTrDimensions()&&r(e,"tr")||"auto"===f||!parseFloat(f)&&"inline"===t.css(e,"display",!1,o))&&e.getClientRects().length&&(l="border-box"===t.css(e,"boxSizing",!1,o),h=p in e,h&&(f=e[p])),f=parseFloat(f)||0,f+_(e,n,i||(l?"border":"content"),h,o,f)+"px"}return t.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=u(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,r,s,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var a,c,u,h=n(r),p=g.test(r),m=e.style;if(p||(r=f(h)),u=t.cssHooks[r]||t.cssHooks[h],void 0===s)return u&&"get"in u&&void 0!==(a=u.get(e,!1,o))?a:m[r];c=typeof s,"string"===c&&(a=i.exec(s))&&a[1]&&(s=l(e,r,a),c="number"),null!=s&&s===s&&("number"!==c||p||(s+=a&&a[3]||(t.cssNumber[h]?"":"px")),d.clearCloneStyle||""!==s||0!==r.indexOf("background")||(m[r]="inherit"),u&&"set"in u&&void 0===(s=u.set(e,s,o))||(p?m.setProperty(r,s):m[r]=s))}},css:function(e,r,i,s){var o,a,c,l=n(r),h=g.test(r);return h||(r=f(l)),c=t.cssHooks[r]||t.cssHooks[l],c&&"get"in c&&(o=c.get(e,!0,i)),void 0===o&&(o=u(e,r,s)),"normal"===o&&r in v&&(o=v[r]),""===i||i?(a=parseFloat(o),!0===i||isFinite(a)?a||0:o):o}}),t.each(["height","width"],(function(e,n){t.cssHooks[n]={get:function(e,r,i){if(r)return!p.test(t.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?b(e,n,i):c(e,m,(function(){return b(e,n,i)}))},set:function(e,r,s){var o,c=a(e),u=!d.scrollboxSize()&&"absolute"===c.position,l=u||s,h=l&&"border-box"===t.css(e,"boxSizing",!1,c),f=s?_(e,n,s,h,c):0;return h&&u&&(f-=Math.ceil(e["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(c[n])-_(e,n,"border",!1,c)-.5)),f&&(o=i.exec(r))&&"px"!==(o[3]||"px")&&(e.style[n]=r,r=t.css(e,n)),y(e,r,f)}}})),t.cssHooks.marginLeft=h(d.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(u(t,"marginLeft"))||t.getBoundingClientRect().left-c(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),t.each({margin:"",padding:"",border:"Width"},(function(e,n){t.cssHooks[e+n]={expand:function(t){for(var r=0,i={},s="string"===typeof t?t.split(" "):[t];r<4;r++)i[e+o[r]+n]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(t.cssHooks[e+n].set=y)})),t.fn.extend({css:function(n,r){return e(this,(function(e,n,r){var i,s,o={},c=0;if(Array.isArray(n)){for(i=a(e),s=n.length;c<s;c++)o[n[c]]=t.css(e,n[c],!1,i);return o}return void 0!==r?t.style(e,n,r):t.css(e,n)}),n,r,arguments.length>1)}}),t}.apply(e,r),void 0===i||(t.exports=i)},8528:function(t,e,n){var r;r=function(){"use strict";function t(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}return t}.call(e,n,e,t),void 0===r||(t.exports=r)},7075:function(t,e,n){var r,i;r=[n(2822),n(7240)],i=function(t,e){"use strict";function n(n,r,i,s){var o,a,c=20,u=s?function(){return s.cur()}:function(){return t.css(n,r,"")},l=u(),h=i&&i[3]||(t.cssNumber[r]?"":"px"),d=n.nodeType&&(t.cssNumber[r]||"px"!==h&&+l)&&e.exec(t.css(n,r));if(d&&d[3]!==h){l/=2,h=h||d[3],d=+l||1;while(c--)t.style(n,r,d+h),(1-a)*(1-(a=u()/l||.5))<=0&&(c=0),d/=a;d*=2,t.style(n,r,d+h),i=i||[]}return i&&(d=+d||+l||0,o=i[1]?d+(i[1]+1)*i[2]:+i[2],s&&(s.unit=h,s.start=d,s.end=o)),o}return n}.apply(e,r),void 0===i||(t.exports=i)},5892:function(t,e,n){var r,i;r=[n(2822),n(6349),n(6587),n(1922),n(7889),n(434)],i=function(t,e,n,r,i,s){"use strict";function o(o,a,c){var u,l,h,d,f=o.style;return c=c||i(o),c&&(d=c.getPropertyValue(a)||c[a],""!==d||e(o)||(d=t.style(o,a)),!s.pixelBoxStyles()&&r.test(d)&&n.test(a)&&(u=f.width,l=f.minWidth,h=f.maxWidth,f.minWidth=f.maxWidth=f.width=d,d=c.width,f.width=u,f.minWidth=l,f.maxWidth=h)),void 0!==d?d+"":d}return o}.apply(e,r),void 0===i||(t.exports=i)},3083:function(t,e,n){var r,i;r=[n(4954),n(2822)],i=function(t,e){"use strict";var n=["Webkit","Moz","ms"],r=t.createElement("div").style,i={};function s(t){var e=t[0].toUpperCase()+t.slice(1),i=n.length;while(i--)if(t=n[i]+e,t in r)return t}function o(t){var n=e.cssProps[t]||i[t];return n||(t in r?t:i[t]=s(t)||t)}return o}.apply(e,r),void 0===i||(t.exports=i)},625:function(t,e,n){var r,i;r=[n(2822),n(8268)],i=function(t){"use strict";t.expr.pseudos.hidden=function(e){return!t.expr.pseudos.visible(e)},t.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}}.apply(e,r),void 0===i||(t.exports=i)},5212:function(t,e,n){var r,i;r=[n(2822),n(711),n(8796)],i=function(t,e,n){"use strict";var r={};function i(e){var n,i=e.ownerDocument,s=e.nodeName,o=r[s];return o||(n=i.body.appendChild(i.createElement(s)),o=t.css(n,"display"),n.parentNode.removeChild(n),"none"===o&&(o="block"),r[s]=o,o)}function s(t,r){for(var s,o,a=[],c=0,u=t.length;c<u;c++)o=t[c],o.style&&(s=o.style.display,r?("none"===s&&(a[c]=e.get(o,"display")||null,a[c]||(o.style.display="")),""===o.style.display&&n(o)&&(a[c]=i(o))):"none"!==s&&(a[c]="none",e.set(o,"display",s)));for(c=0;c<u;c++)null!=a[c]&&(t[c].style.display=a[c]);return t}return t.fn.extend({show:function(){return s(this,!0)},hide:function(){return s(this)},toggle:function(e){return"boolean"===typeof e?e?this.show():this.hide():this.each((function(){n(this)?t(this).show():t(this).hide()}))}}),s}.apply(e,r),void 0===i||(t.exports=i)},434:function(t,e,n){var r,i;r=[n(2822),n(4954),n(2840),n(180)],i=function(t,e,n,r){"use strict";return function(){function i(){if(f){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",f.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",n.appendChild(d).appendChild(f);var t=window.getComputedStyle(f);o="1%"!==t.top,h=12===s(t.marginLeft),f.style.right="60%",u=36===s(t.right),a=36===s(t.width),f.style.position="absolute",c=12===s(f.offsetWidth/3),n.removeChild(d),f=null}}function s(t){return Math.round(parseFloat(t))}var o,a,c,u,l,h,d=e.createElement("div"),f=e.createElement("div");f.style&&(f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",r.clearCloneStyle="content-box"===f.style.backgroundClip,t.extend(r,{boxSizingReliable:function(){return i(),a},pixelBoxStyles:function(){return i(),u},pixelPosition:function(){return i(),o},reliableMarginLeft:function(){return i(),h},scrollboxSize:function(){return i(),c},reliableTrDimensions:function(){var t,r,i,s;return null==l&&(t=e.createElement("table"),r=e.createElement("tr"),i=e.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",r.style.cssText="border:1px solid",r.style.height="1px",i.style.height="9px",i.style.display="block",n.appendChild(t).appendChild(r).appendChild(i),s=window.getComputedStyle(r),l=parseInt(s.height,10)+parseInt(s.borderTopWidth,10)+parseInt(s.borderBottomWidth,10)===r.offsetHeight,n.removeChild(t)),l}}))}(),r}.apply(e,r),void 0===i||(t.exports=i)},2684:function(t,e,n){var r;r=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(e,n,e,t),void 0===r||(t.exports=r)},7889:function(t,e,n){var r;r=function(){"use strict";return function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=window),e.getComputedStyle(t)}}.call(e,n,e,t),void 0===r||(t.exports=r)},8796:function(t,e,n){var r,i;r=[n(2822),n(6349)],i=function(t,e){"use strict";return function(n,r){return n=r||n,"none"===n.style.display||""===n.style.display&&e(n)&&"none"===t.css(n,"display")}}.apply(e,r),void 0===i||(t.exports=i)},6587:function(t,e,n){var r,i;r=[n(2684)],i=function(t){"use strict";return new RegExp(t.join("|"),"i")}.apply(e,r),void 0===i||(t.exports=i)},1922:function(t,e,n){var r,i;r=[n(5479)],i=function(t){"use strict";return new RegExp("^("+t+")(?!px)[a-z%]+$","i")}.apply(e,r),void 0===i||(t.exports=i)},6968:function(t,e,n){var r;r=function(){"use strict";return function(t,e,n){var r,i,s={};for(i in e)s[i]=t.style[i],t.style[i]=e[i];for(i in r=n.call(t),e)t.style[i]=s[i];return r}}.call(e,n,e,t),void 0===r||(t.exports=r)},8517:function(t,e,n){var r,i;r=[n(2822),n(9631),n(9303),n(711),n(6785)],i=function(t,e,n,r,i){"use strict";var s=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,o=/[A-Z]/g;function a(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:s.test(t)?JSON.parse(t):t)}function c(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(o,"-$&").toLowerCase(),n=t.getAttribute(r),"string"===typeof n){try{n=a(n)}catch(s){}i.set(t,e,n)}else n=void 0;return n}return t.extend({hasData:function(t){return i.hasData(t)||r.hasData(t)},data:function(t,e,n){return i.access(t,e,n)},removeData:function(t,e){i.remove(t,e)},_data:function(t,e,n){return r.access(t,e,n)},_removeData:function(t,e){r.remove(t,e)}}),t.fn.extend({data:function(t,s){var o,a,u,l=this[0],h=l&&l.attributes;if(void 0===t){if(this.length&&(u=i.get(l),1===l.nodeType&&!r.get(l,"hasDataAttrs"))){o=h.length;while(o--)h[o]&&(a=h[o].name,0===a.indexOf("data-")&&(a=n(a.slice(5)),c(l,a,u[a])));r.set(l,"hasDataAttrs",!0)}return u}return"object"===typeof t?this.each((function(){i.set(this,t)})):e(this,(function(e){var n;if(l&&void 0===e)return n=i.get(l,t),void 0!==n?n:(n=c(l,t),void 0!==n?n:void 0);this.each((function(){i.set(this,t,e)}))}),null,s,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){i.remove(this,t)}))}}),t}.apply(e,r),void 0===i||(t.exports=i)},7548:function(t,e,n){var r,i;r=[n(2822),n(9303),n(1136),n(7342)],i=function(t,e,n,r){"use strict";function i(){this.expando=t.expando+i.uid++}return i.uid=1,i.prototype={cache:function(t){var e=t[this.expando];return e||(e={},r(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,n,r){var i,s=this.cache(t);if("string"===typeof n)s[e(n)]=r;else for(i in n)s[e(i)]=n[i];return s},get:function(t,n){return void 0===n?this.cache(t):t[this.expando]&&t[this.expando][e(n)]},access:function(t,e,n){return void 0===e||e&&"string"===typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(r,i){var s,o=r[this.expando];if(void 0!==o){if(void 0!==i){Array.isArray(i)?i=i.map(e):(i=e(i),i=i in o?[i]:i.match(n)||[]),s=i.length;while(s--)delete o[i[s]]}(void 0===i||t.isEmptyObject(o))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(e){var n=e[this.expando];return void 0!==n&&!t.isEmptyObject(n)}},i}.apply(e,r),void 0===i||(t.exports=i)},7342:function(t,e,n){var r;r=function(){"use strict";return function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType}}.call(e,n,e,t),void 0===r||(t.exports=r)},711:function(t,e,n){var r,i;r=[n(7548)],i=function(t){"use strict";return new t}.apply(e,r),void 0===i||(t.exports=i)},6785:function(t,e,n){var r,i;r=[n(7548)],i=function(t){"use strict";return new t}.apply(e,r),void 0===i||(t.exports=i)},4234:function(t,e,n){var r,i;r=[n(2822),n(719),n(3837),n(9197)],i=function(t,e,n){"use strict";function r(t){return t}function i(t){throw t}function s(t,n,r,i){var s;try{t&&e(s=t.promise)?s.call(t).done(n).fail(r):t&&e(s=t.then)?s.call(t,n,r):n.apply(void 0,[t].slice(i))}catch(t){r.apply(void 0,[t])}}return t.extend({Deferred:function(n){var s=[["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],o="pending",a={state:function(){return o},always:function(){return c.done(arguments).fail(arguments),this},catch:function(t){return a.then(null,t)},pipe:function(){var n=arguments;return t.Deferred((function(r){t.each(s,(function(t,i){var s=e(n[i[4]])&&n[i[4]];c[i[1]]((function(){var t=s&&s.apply(this,arguments);t&&e(t.promise)?t.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[i[0]+"With"](this,s?[t]:arguments)}))})),n=null})).promise()},then:function(n,o,a){var c=0;function u(n,s,o,a){return function(){var l=this,h=arguments,d=function(){var t,d;if(!(n<c)){if(t=o.apply(l,h),t===s.promise())throw new TypeError("Thenable self-resolution");d=t&&("object"===typeof t||"function"===typeof t)&&t.then,e(d)?a?d.call(t,u(c,s,r,a),u(c,s,i,a)):(c++,d.call(t,u(c,s,r,a),u(c,s,i,a),u(c,s,r,s.notifyWith))):(o!==r&&(l=void 0,h=[t]),(a||s.resolveWith)(l,h))}},f=a?d:function(){try{d()}catch(e){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(e,f.stackTrace),n+1>=c&&(o!==i&&(l=void 0,h=[e]),s.rejectWith(l,h))}};n?f():(t.Deferred.getStackHook&&(f.stackTrace=t.Deferred.getStackHook()),window.setTimeout(f))}}return t.Deferred((function(t){s[0][3].add(u(0,t,e(a)?a:r,t.notifyWith)),s[1][3].add(u(0,t,e(n)?n:r)),s[2][3].add(u(0,t,e(o)?o:i))})).promise()},promise:function(e){return null!=e?t.extend(e,a):a}},c={};return t.each(s,(function(t,e){var n=e[2],r=e[5];a[e[1]]=n.add,r&&n.add((function(){o=r}),s[3-t][2].disable,s[3-t][3].disable,s[0][2].lock,s[0][3].lock),n.add(e[3].fire),c[e[0]]=function(){return c[e[0]+"With"](this===c?void 0:this,arguments),this},c[e[0]+"With"]=n.fireWith})),a.promise(c),n&&n.call(c,c),c},when:function(r){var i=arguments.length,o=i,a=Array(o),c=n.call(arguments),u=t.Deferred(),l=function(t){return function(e){a[t]=this,c[t]=arguments.length>1?n.call(arguments):e,--i||u.resolveWith(a,c)}};if(i<=1&&(s(r,u.done(l(o)).resolve,u.reject,!i),"pending"===u.state()||e(c[o]&&c[o].then)))return u.then();while(o--)s(c[o],l(o),u.reject);return u.promise()}}),t}.apply(e,r),void 0===i||(t.exports=i)},6515:function(t,e,n){var r,i;r=[n(2822),n(4234)],i=function(t){"use strict";var e=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(t,n){window.console&&window.console.warn&&t&&e.test(t.name)&&window.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)}}.apply(e,r),void 0===i||(t.exports=i)},496:function(t,e,n){var r,i;r=[n(2822),n(3362),n(9303),n(4320),n(719),n(387),n(3837),n(6849),n(4475)],i=function(t,e,n,r,i,s,o){"use strict";var a=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;t.proxy=function(e,n){var r,s,a;if("string"===typeof n&&(r=e[n],n=e,e=r),i(e))return s=o.call(arguments,2),a=function(){return e.apply(n||this,s.concat(o.call(arguments)))},a.guid=e.guid=e.guid||t.guid++,a},t.holdReady=function(e){e?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=e,t.isFunction=i,t.isWindow=s,t.camelCase=n,t.type=r,t.now=Date.now,t.isNumeric=function(e){var n=t.type(e);return("number"===n||"string"===n)&&!isNaN(e-parseFloat(e))},t.trim=function(t){return null==t?"":(t+"").replace(a,"")}}.apply(e,r),void 0===i||(t.exports=i)},6849:function(t,e,n){var r,i;r=[n(2822),n(4271),n(2505)],i=function(t){"use strict";t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,n){t.fn[n]=function(t){return this.on(n,t)}}))}.apply(e,r),void 0===i||(t.exports=i)},4475:function(t,e,n){var r,i;r=[n(2822),n(2505),n(6582)],i=function(t){"use strict";t.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,n){t.fn[n]=function(t,e){return arguments.length>0?this.on(n,null,t,e):this.trigger(n)}}))}.apply(e,r),void 0===i||(t.exports=i)},7264:function(t,e,n){var r,i;r=[n(2822),n(9631),n(387),n(7258)],i=function(t,e,n){"use strict";return t.each({Height:"height",Width:"width"},(function(r,i){t.each({padding:"inner"+r,content:i,"":"outer"+r},(function(s,o){t.fn[o]=function(a,c){var u=arguments.length&&(s||"boolean"!==typeof a),l=s||(!0===a||!0===c?"margin":"border");return e(this,(function(e,i,s){var a;return n(e)?0===o.indexOf("outer")?e["inner"+r]:e.document.documentElement["client"+r]:9===e.nodeType?(a=e.documentElement,Math.max(e.body["scroll"+r],a["scroll"+r],e.body["offset"+r],a["offset"+r],a["client"+r])):void 0===s?t.css(e,i,l):t.style(e,i,s,l)}),i,u?a:void 0,u)}}))})),t}.apply(e,r),void 0===i||(t.exports=i)},4331:function(t,e,n){var r,i;r=[n(2822),n(9303),n(4954),n(719),n(7240),n(1136),n(2684),n(8796),n(7075),n(711),n(5212),n(9819),n(8622),n(4234),n(5144),n(7644),n(7258),n(7335)],i=function(t,e,n,r,i,s,o,a,c,u,l){"use strict";var h,d,f=/^(?:toggle|show|hide)$/,p=/queueHooks$/;function g(){d&&(!1===n.hidden&&window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,t.fx.interval),t.fx.tick())}function m(){return window.setTimeout((function(){h=void 0})),h=Date.now()}function v(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)n=o[r],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function y(t,e,n){for(var r,i=(w.tweeners[e]||[]).concat(w.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,e,t))return r}function _(e,n,r){var i,s,o,c,h,d,p,g,m="width"in n||"height"in n,v=this,_={},b=e.style,w=e.nodeType&&a(e),E=u.get(e,"fxshow");for(i in r.queue||(c=t._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,h=c.empty.fire,c.empty.fire=function(){c.unqueued||h()}),c.unqueued++,v.always((function(){v.always((function(){c.unqueued--,t.queue(e,"fx").length||c.empty.fire()}))}))),n)if(s=n[i],f.test(s)){if(delete n[i],o=o||"toggle"===s,s===(w?"hide":"show")){if("show"!==s||!E||void 0===E[i])continue;w=!0}_[i]=E&&E[i]||t.style(e,i)}if(d=!t.isEmptyObject(n),d||!t.isEmptyObject(_))for(i in m&&1===e.nodeType&&(r.overflow=[b.overflow,b.overflowX,b.overflowY],p=E&&E.display,null==p&&(p=u.get(e,"display")),g=t.css(e,"display"),"none"===g&&(p?g=p:(l([e],!0),p=e.style.display||p,g=t.css(e,"display"),l([e]))),("inline"===g||"inline-block"===g&&null!=p)&&"none"===t.css(e,"float")&&(d||(v.done((function(){b.display=p})),null==p&&(g=b.display,p="none"===g?"":g)),b.display="inline-block")),r.overflow&&(b.overflow="hidden",v.always((function(){b.overflow=r.overflow[0],b.overflowX=r.overflow[1],b.overflowY=r.overflow[2]}))),d=!1,_)d||(E?"hidden"in E&&(w=E.hidden):E=u.access(e,"fxshow",{display:p}),o&&(E.hidden=!w),w&&l([e],!0),v.done((function(){for(i in w||l([e]),u.remove(e,"fxshow"),_)t.style(e,i,_[i])}))),d=y(w?E[i]:0,i,v),i in E||(E[i]=d.start,w&&(d.end=d.start,d.start=0))}function b(n,r){var i,s,o,a,c;for(i in n)if(s=e(i),o=r[s],a=n[i],Array.isArray(a)&&(o=a[1],a=n[i]=a[0]),i!==s&&(n[s]=a,delete n[i]),c=t.cssHooks[s],c&&"expand"in c)for(i in a=c.expand(a),delete n[s],a)i in n||(n[i]=a[i],r[i]=o);else r[s]=o}function w(e,n,i){var s,o,a=0,c=w.prefilters.length,u=t.Deferred().always((function(){delete l.elem})),l=function(){if(o)return!1;for(var t=h||m(),n=Math.max(0,d.startTime+d.duration-t),r=n/d.duration||0,i=1-r,s=0,a=d.tweens.length;s<a;s++)d.tweens[s].run(i);return u.notifyWith(e,[d,i,n]),i<1&&a?n:(a||u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d]),!1)},d=u.promise({elem:e,props:t.extend({},n),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},i),originalProperties:n,originalOptions:i,startTime:h||m(),duration:i.duration,tweens:[],createTween:function(n,r){var i=t.Tween(e,d.opts,n,r,d.opts.specialEasing[n]||d.opts.easing);return d.tweens.push(i),i},stop:function(t){var n=0,r=t?d.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)d.tweens[n].run(1);return t?(u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d,t])):u.rejectWith(e,[d,t]),this}}),f=d.props;for(b(f,d.opts.specialEasing);a<c;a++)if(s=w.prefilters[a].call(d,e,f,d.opts),s)return r(s.stop)&&(t._queueHooks(d.elem,d.opts.queue).stop=s.stop.bind(s)),s;return t.map(f,y,d),r(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),t.fx.timer(t.extend(l,{elem:e,anim:d,queue:d.opts.queue})),d}return t.Animation=t.extend(w,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return c(n.elem,t,i.exec(e),n),n}]},tweener:function(t,e){r(t)?(e=t,t=["*"]):t=t.match(s);for(var n,i=0,o=t.length;i<o;i++)n=t[i],w.tweeners[n]=w.tweeners[n]||[],w.tweeners[n].unshift(e)},prefilters:[_],prefilter:function(t,e){e?w.prefilters.unshift(t):w.prefilters.push(t)}}),t.speed=function(e,n,i){var s=e&&"object"===typeof e?t.extend({},e):{complete:i||!i&&n||r(e)&&e,duration:e,easing:i&&n||n&&!r(n)&&n};return t.fx.off?s.duration=0:"number"!==typeof s.duration&&(s.duration in t.fx.speeds?s.duration=t.fx.speeds[s.duration]:s.duration=t.fx.speeds._default),null!=s.queue&&!0!==s.queue||(s.queue="fx"),s.old=s.complete,s.complete=function(){r(s.old)&&s.old.call(this),s.queue&&t.dequeue(this,s.queue)},s},t.fn.extend({fadeTo:function(t,e,n,r){return this.filter(a).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(e,n,r,i){var s=t.isEmptyObject(e),o=t.speed(n,r,i),a=function(){var n=w(this,t.extend({},e),o);(s||u.get(this,"finish"))&&n.stop(!0)};return a.finish=a,s||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(t){var e=t.stop;delete t.stop,e(r)};return"string"!==typeof e&&(r=n,n=e,e=void 0),n&&this.queue(e||"fx",[]),this.each((function(){var n=!0,s=null!=e&&e+"queueHooks",o=t.timers,a=u.get(this);if(s)a[s]&&a[s].stop&&i(a[s]);else for(s in a)a[s]&&a[s].stop&&p.test(s)&&i(a[s]);for(s=o.length;s--;)o[s].elem!==this||null!=e&&o[s].queue!==e||(o[s].anim.stop(r),n=!1,o.splice(s,1));!n&&r||t.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var n,r=u.get(this),i=r[e+"queue"],s=r[e+"queueHooks"],o=t.timers,a=i?i.length:0;for(r.finish=!0,t.queue(this,e,[]),s&&s.stop&&s.stop.call(this,!0),n=o.length;n--;)o[n].elem===this&&o[n].queue===e&&(o[n].anim.stop(!0),o.splice(n,1));for(n=0;n<a;n++)i[n]&&i[n].finish&&i[n].finish.call(this);delete r.finish}))}}),t.each(["toggle","show","hide"],(function(e,n){var r=t.fn[n];t.fn[n]=function(t,e,i){return null==t||"boolean"===typeof t?r.apply(this,arguments):this.animate(v(n,!0),t,e,i)}})),t.each({slideDown:v("show"),slideUp:v("hide"),slideToggle:v("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,n){t.fn[e]=function(t,e,r){return this.animate(n,t,e,r)}})),t.timers=[],t.fx.tick=function(){var e,n=0,r=t.timers;for(h=Date.now();n<r.length;n++)e=r[n],e()||r[n]!==e||r.splice(n--,1);r.length||t.fx.stop(),h=void 0},t.fx.timer=function(e){t.timers.push(e),t.fx.start()},t.fx.interval=13,t.fx.start=function(){d||(d=!0,g())},t.fx.stop=function(){d=null},t.fx.speeds={slow:600,fast:200,_default:400},t}.apply(e,r),void 0===i||(t.exports=i)},7335:function(t,e,n){var r,i;r=[n(2822),n(3083),n(7258)],i=function(t,e){"use strict";function n(t,e,r,i,s){return new n.prototype.init(t,e,r,i,s)}t.Tween=n,n.prototype={constructor:n,init:function(e,n,r,i,s,o){this.elem=e,this.prop=r,this.easing=s||t.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=i,this.unit=o||(t.cssNumber[r]?"":"px")},cur:function(){var t=n.propHooks[this.prop];return t&&t.get?t.get(this):n.propHooks._default.get(this)},run:function(e){var r,i=n.propHooks[this.prop];return this.options.duration?this.pos=r=t.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=r=e,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):n.propHooks._default.set(this),this}},n.prototype.init.prototype=n.prototype,n.propHooks={_default:{get:function(e){var n;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(n=t.css(e.elem,e.prop,""),n&&"auto"!==n?n:0)},set:function(n){t.fx.step[n.prop]?t.fx.step[n.prop](n):1!==n.elem.nodeType||!t.cssHooks[n.prop]&&null==n.elem.style[e(n.prop)]?n.elem[n.prop]=n.now:t.style(n.elem,n.prop,n.now+n.unit)}}},n.propHooks.scrollTop=n.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},t.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},t.fx=n.prototype.init,t.fx.step={}}.apply(e,r),void 0===i||(t.exports=i)},7318:function(t,e,n){var r,i;r=[n(2822),n(8268),n(4331)],i=function(t){"use strict";t.expr.pseudos.animated=function(e){return t.grep(t.timers,(function(t){return e===t.elem})).length}}.apply(e,r),void 0===i||(t.exports=i)},2505:function(t,e,n){var r,i;r=[n(2822),n(4954),n(2840),n(719),n(1136),n(8645),n(3837),n(7342),n(711),n(3362),n(9819),n(8268)],i=function(t,e,n,r,i,s,o,a,c,u){"use strict";var l=/^([^.]*)(?:\.(.+)|)/;function h(){return!0}function d(){return!1}function f(t,e){return t===p()===("focus"===e)}function p(){try{return e.activeElement}catch(t){}}function g(e,n,r,i,s,o){var a,c;if("object"===typeof n){for(c in"string"!==typeof r&&(i=i||r,r=void 0),n)g(e,c,r,i,n[c],o);return e}if(null==i&&null==s?(s=r,i=r=void 0):null==s&&("string"===typeof r?(s=i,i=void 0):(s=i,i=r,r=void 0)),!1===s)s=d;else if(!s)return e;return 1===o&&(a=s,s=function(e){return t().off(e),a.apply(this,arguments)},s.guid=a.guid||(a.guid=t.guid++)),e.each((function(){t.event.add(this,n,s,i,r)}))}function m(e,n,r){r?(c.set(e,n,!1),t.event.add(e,n,{namespace:!1,handler:function(e){var i,s,a=c.get(this,n);if(1&e.isTrigger&&this[n]){if(a.length)(t.event.special[n]||{}).delegateType&&e.stopPropagation();else if(a=o.call(arguments),c.set(this,n,a),i=r(this,n),this[n](),s=c.get(this,n),a!==s||i?c.set(this,n,!1):s={},a!==s)return e.stopImmediatePropagation(),e.preventDefault(),s&&s.value}else a.length&&(c.set(this,n,{value:t.event.trigger(t.extend(a[0],t.Event.prototype),a.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===c.get(e,n)&&t.event.add(e,n,h)}return t.event={global:{},add:function(e,r,s,o,u){var h,d,f,p,g,m,v,y,_,b,w,E=c.get(e);if(a(e)){s.handler&&(h=s,s=h.handler,u=h.selector),u&&t.find.matchesSelector(n,u),s.guid||(s.guid=t.guid++),(p=E.events)||(p=E.events=Object.create(null)),(d=E.handle)||(d=E.handle=function(n){return"undefined"!==typeof t&&t.event.triggered!==n.type?t.event.dispatch.apply(e,arguments):void 0}),r=(r||"").match(i)||[""],g=r.length;while(g--)f=l.exec(r[g])||[],_=w=f[1],b=(f[2]||"").split(".").sort(),_&&(v=t.event.special[_]||{},_=(u?v.delegateType:v.bindType)||_,v=t.event.special[_]||{},m=t.extend({type:_,origType:w,data:o,handler:s,guid:s.guid,selector:u,needsContext:u&&t.expr.match.needsContext.test(u),namespace:b.join(".")},h),(y=p[_])||(y=p[_]=[],y.delegateCount=0,v.setup&&!1!==v.setup.call(e,o,b,d)||e.addEventListener&&e.addEventListener(_,d)),v.add&&(v.add.call(e,m),m.handler.guid||(m.handler.guid=s.guid)),u?y.splice(y.delegateCount++,0,m):y.push(m),t.event.global[_]=!0)}},remove:function(e,n,r,s,o){var a,u,h,d,f,p,g,m,v,y,_,b=c.hasData(e)&&c.get(e);if(b&&(d=b.events)){n=(n||"").match(i)||[""],f=n.length;while(f--)if(h=l.exec(n[f])||[],v=_=h[1],y=(h[2]||"").split(".").sort(),v){g=t.event.special[v]||{},v=(s?g.delegateType:g.bindType)||v,m=d[v]||[],h=h[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=m.length;while(a--)p=m[a],!o&&_!==p.origType||r&&r.guid!==p.guid||h&&!h.test(p.namespace)||s&&s!==p.selector&&("**"!==s||!p.selector)||(m.splice(a,1),p.selector&&m.delegateCount--,g.remove&&g.remove.call(e,p));u&&!m.length&&(g.teardown&&!1!==g.teardown.call(e,y,b.handle)||t.removeEvent(e,v,b.handle),delete d[v])}else for(v in d)t.event.remove(e,v+n[f],r,s,!0);t.isEmptyObject(d)&&c.remove(e,"handle events")}},dispatch:function(e){var n,r,i,s,o,a,u=new Array(arguments.length),l=t.event.fix(e),h=(c.get(this,"events")||Object.create(null))[l.type]||[],d=t.event.special[l.type]||{};for(u[0]=l,n=1;n<arguments.length;n++)u[n]=arguments[n];if(l.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,l)){a=t.event.handlers.call(this,l,h),n=0;while((s=a[n++])&&!l.isPropagationStopped()){l.currentTarget=s.elem,r=0;while((o=s.handlers[r++])&&!l.isImmediatePropagationStopped())l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,i=((t.event.special[o.origType]||{}).handle||o.handler).apply(s.elem,u),void 0!==i&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()))}return d.postDispatch&&d.postDispatch.call(this,l),l.result}},handlers:function(e,n){var r,i,s,o,a,c=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},r=0;r<u;r++)i=n[r],s=i.selector+" ",void 0===a[s]&&(a[s]=i.needsContext?t(s,this).index(l)>-1:t.find(s,this,null,[l]).length),a[s]&&o.push(i);o.length&&c.push({elem:l,handlers:o})}return l=this,u<n.length&&c.push({elem:l,handlers:n.slice(u)}),c},addProp:function(e,n){Object.defineProperty(t.Event.prototype,e,{enumerable:!0,configurable:!0,get:r(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[t.expando]?e:new t.Event(e)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return s.test(e.type)&&e.click&&u(e,"input")&&m(e,"click",h),!1},trigger:function(t){var e=this||t;return s.test(e.type)&&e.click&&u(e,"input")&&m(e,"click"),!0},_default:function(t){var e=t.target;return s.test(e.type)&&e.click&&u(e,"input")&&c.get(e,"click")||u(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},t.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},t.Event=function(e,n){if(!(this instanceof t.Event))return new t.Event(e,n);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?h:d,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,n&&t.extend(this,n),this.timeStamp=e&&e.timeStamp||Date.now(),this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=h,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=h,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=h,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},t.event.addProp),t.each({focus:"focusin",blur:"focusout"},(function(e,n){t.event.special[e]={setup:function(){return m(this,e,f),!1},trigger:function(){return m(this,e),!0},_default:function(){return!0},delegateType:n}})),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,n){t.event.special[e]={delegateType:n,bindType:n,handle:function(e){var r,i=this,s=e.relatedTarget,o=e.handleObj;return s&&(s===i||t.contains(i,s))||(e.type=o.origType,r=o.handler.apply(this,arguments),e.type=n),r}}})),t.fn.extend({on:function(t,e,n,r){return g(this,t,e,n,r)},one:function(t,e,n,r){return g(this,t,e,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,t(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===typeof e){for(s in e)this.off(s,n,e[s]);return this}return!1!==n&&"function"!==typeof n||(r=n,n=void 0),!1===r&&(r=d),this.each((function(){t.event.remove(this,e,r,n)}))}}),t}.apply(e,r),void 0===i||(t.exports=i)},6401:function(t,e,n){var r,i;r=[n(2822),n(711),n(6441),n(2505),n(6582)],i=function(t,e,n){"use strict";return n.focusin||t.each({focus:"focusin",blur:"focusout"},(function(n,r){var i=function(e){t.event.simulate(r,e.target,t.event.fix(e))};t.event.special[r]={setup:function(){var t=this.ownerDocument||this.document||this,s=e.access(t,r);s||t.addEventListener(n,i,!0),e.access(t,r,(s||0)+1)},teardown:function(){var t=this.ownerDocument||this.document||this,s=e.access(t,r)-1;s?e.access(t,r,s):(t.removeEventListener(n,i,!0),e.remove(t,r))}}})),t}.apply(e,r),void 0===i||(t.exports=i)},6441:function(t,e,n){var r,i;r=[n(180)],i=function(t){"use strict";return t.focusin="onfocusin"in window,t}.apply(e,r),void 0===i||(t.exports=i)},6582:function(t,e,n){var r,i;r=[n(2822),n(4954),n(711),n(7342),n(5327),n(719),n(387),n(2505)],i=function(t,e,n,r,i,s,o){"use strict";var a=/^(?:focusinfocus|focusoutblur)$/,c=function(t){t.stopPropagation()};return t.extend(t.event,{trigger:function(u,l,h,d){var f,p,g,m,v,y,_,b,w=[h||e],E=i.call(u,"type")?u.type:u,T=i.call(u,"namespace")?u.namespace.split("."):[];if(p=b=g=h=h||e,3!==h.nodeType&&8!==h.nodeType&&!a.test(E+t.event.triggered)&&(E.indexOf(".")>-1&&(T=E.split("."),E=T.shift(),T.sort()),v=E.indexOf(":")<0&&"on"+E,u=u[t.expando]?u:new t.Event(E,"object"===typeof u&&u),u.isTrigger=d?2:3,u.namespace=T.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+T.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=h),l=null==l?[u]:t.makeArray(l,[u]),_=t.event.special[E]||{},d||!_.trigger||!1!==_.trigger.apply(h,l))){if(!d&&!_.noBubble&&!o(h)){for(m=_.delegateType||E,a.test(m+E)||(p=p.parentNode);p;p=p.parentNode)w.push(p),g=p;g===(h.ownerDocument||e)&&w.push(g.defaultView||g.parentWindow||window)}f=0;while((p=w[f++])&&!u.isPropagationStopped())b=p,u.type=f>1?m:_.bindType||E,y=(n.get(p,"events")||Object.create(null))[u.type]&&n.get(p,"handle"),y&&y.apply(p,l),y=v&&p[v],y&&y.apply&&r(p)&&(u.result=y.apply(p,l),!1===u.result&&u.preventDefault());return u.type=E,d||u.isDefaultPrevented()||_._default&&!1!==_._default.apply(w.pop(),l)||!r(h)||v&&s(h[E])&&!o(h)&&(g=h[v],g&&(h[v]=null),t.event.triggered=E,u.isPropagationStopped()&&b.addEventListener(E,c),h[E](),u.isPropagationStopped()&&b.removeEventListener(E,c),t.event.triggered=void 0,g&&(h[v]=g)),u.result}},simulate:function(e,n,r){var i=t.extend(new t.Event,r,{type:e,isSimulated:!0});t.event.trigger(i,null,n)}}),t.fn.extend({trigger:function(e,n){return this.each((function(){t.event.trigger(e,n,this)}))},triggerHandler:function(e,n){var r=this[0];if(r)return t.event.trigger(e,n,r,!0)}}),t}.apply(e,r),void 0===i||(t.exports=i)},3807:function(t,e,n){var r,i;r=[n(2822)],i=function(n){"use strict";r=[],i=function(){return n}.apply(e,r),void 0===i||(t.exports=i)}.apply(e,r),void 0===i||(t.exports=i)},1342:function(t,e,n){var r,i;r=[n(2822)],i=function(t){"use strict";var e=window.jQuery,n=window.$;t.noConflict=function(r){return window.$===t&&(window.$=n),r&&window.jQuery===t&&(window.jQuery=e),t},"undefined"===typeof noGlobal&&(window.jQuery=window.$=t)}.apply(e,r),void 0===i||(t.exports=i)},2323:function(t,e,n){var r,i;r=[n(2822),n(8268),n(5144),n(9197),n(4234),n(6515),n(9846),n(8517),n(8622),n(7154),n(8988),n(2505),n(6401),n(7644),n(1247),n(4409),n(7258),n(625),n(6783),n(4271),n(3470),n(8205),n(2786),n(4578),n(4373),n(1315),n(4331),n(7318),n(2782),n(7264),n(496),n(3807),n(1342)],i=function(t){"use strict";return t}.apply(e,r),void 0===i||(t.exports=i)},7644:function(t,e,n){var r,i;r=[n(2822),n(6349),n(756),n(719),n(5027),n(8645),n(9631),n(7176),n(8968),n(9285),n(9532),n(9710),n(1119),n(6980),n(711),n(6785),n(7342),n(6659),n(3362),n(9819),n(5144),n(8268),n(2505)],i=function(t,e,n,r,i,s,o,a,c,u,l,h,d,f,p,g,m,v,y){"use strict";var _=/<script|<style|<link/i,b=/checked\s*(?:[^=]|=\s*.checked.)/i,w=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function E(e,n){return y(e,"table")&&y(11!==n.nodeType?n:n.firstChild,"tr")&&t(e).children("tbody")[0]||e}function T(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function C(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function I(e,n){var r,i,s,o,a,c,u;if(1===n.nodeType){if(p.hasData(e)&&(o=p.get(e),u=o.events,u))for(s in p.remove(n,"handle events"),u)for(r=0,i=u[s].length;r<i;r++)t.event.add(n,s,u[s][r]);g.hasData(e)&&(a=g.access(e),c=t.extend({},a),g.set(n,c))}}function x(t,e){var n=e.nodeName.toLowerCase();"input"===n&&s.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function S(e,i,s,o){i=n(i);var a,u,h,g,m,y,_=0,E=e.length,I=E-1,x=i[0],A=r(x);if(A||E>1&&"string"===typeof x&&!f.checkClone&&b.test(x))return e.each((function(t){var n=e.eq(t);A&&(i[0]=x.call(this,t,n.html())),S(n,i,s,o)}));if(E&&(a=d(i,e[0].ownerDocument,!1,e,o),u=a.firstChild,1===a.childNodes.length&&(a=u),u||o)){for(h=t.map(l(a,"script"),T),g=h.length;_<E;_++)m=a,_!==I&&(m=t.clone(m,!0,!0),g&&t.merge(h,l(m,"script"))),s.call(e[_],m,_);if(g)for(y=h[h.length-1].ownerDocument,t.map(h,C),_=0;_<g;_++)m=h[_],c.test(m.type||"")&&!p.access(m,"globalEval")&&t.contains(y,m)&&(m.src&&"module"!==(m.type||"").toLowerCase()?t._evalUrl&&!m.noModule&&t._evalUrl(m.src,{nonce:m.nonce||m.getAttribute("nonce")},y):v(m.textContent.replace(w,""),m,y))}return e}function A(n,r,i){for(var s,o=r?t.filter(r,n):n,a=0;null!=(s=o[a]);a++)i||1!==s.nodeType||t.cleanData(l(s)),s.parentNode&&(i&&e(s)&&h(l(s,"script")),s.parentNode.removeChild(s));return n}return t.extend({htmlPrefilter:function(t){return t},clone:function(n,r,i){var s,o,a,c,u=n.cloneNode(!0),d=e(n);if(!f.noCloneChecked&&(1===n.nodeType||11===n.nodeType)&&!t.isXMLDoc(n))for(c=l(u),a=l(n),s=0,o=a.length;s<o;s++)x(a[s],c[s]);if(r)if(i)for(a=a||l(n),c=c||l(u),s=0,o=a.length;s<o;s++)I(a[s],c[s]);else I(n,u);return c=l(u,"script"),c.length>0&&h(c,!d&&l(n,"script")),u},cleanData:function(e){for(var n,r,i,s=t.event.special,o=0;void 0!==(r=e[o]);o++)if(m(r)){if(n=r[p.expando]){if(n.events)for(i in n.events)s[i]?t.event.remove(r,i):t.removeEvent(r,i,n.handle);r[p.expando]=void 0}r[g.expando]&&(r[g.expando]=void 0)}}}),t.fn.extend({detach:function(t){return A(this,t,!0)},remove:function(t){return A(this,t)},text:function(e){return o(this,(function(e){return void 0===e?t.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return S(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=E(this,t);e.appendChild(t)}}))},prepend:function(){return S(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=E(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return S(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return S(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var e,n=0;null!=(e=this[n]);n++)1===e.nodeType&&(t.cleanData(l(e,!1)),e.textContent="");return this},clone:function(e,n){return e=null!=e&&e,n=null==n?e:n,this.map((function(){return t.clone(this,e,n)}))},html:function(e){return o(this,(function(e){var n=this[0]||{},r=0,i=this.length;if(void 0===e&&1===n.nodeType)return n.innerHTML;if("string"===typeof e&&!_.test(e)&&!u[(a.exec(e)||["",""])[1].toLowerCase()]){e=t.htmlPrefilter(e);try{for(;r<i;r++)n=this[r]||{},1===n.nodeType&&(t.cleanData(l(n,!1)),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return S(this,arguments,(function(n){var r=this.parentNode;t.inArray(this,e)<0&&(t.cleanData(l(this)),r&&r.replaceChild(n,this))}),e)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,n){t.fn[e]=function(e){for(var r,s=[],o=t(e),a=o.length-1,c=0;c<=a;c++)r=c===a?this:this.clone(!0),t(o[c])[n](r),i.apply(s,r.get());return this.pushStack(s)}})),t}.apply(e,r),void 0===i||(t.exports=i)},1247:function(t,e,n){var r,i;r=[n(4271)],i=function(t){"use strict";return t._evalUrl=function(e,n,r){return t.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){t.globalEval(e,n,r)}})},t._evalUrl}.apply(e,r),void 0===i||(t.exports=i)},1119:function(t,e,n){var r,i;r=[n(2822),n(4320),n(6349),n(7176),n(8968),n(9285),n(9532),n(9710)],i=function(t,e,n,r,i,s,o,a){"use strict";var c=/<|&#?\w+;/;function u(u,l,h,d,f){for(var p,g,m,v,y,_,b=l.createDocumentFragment(),w=[],E=0,T=u.length;E<T;E++)if(p=u[E],p||0===p)if("object"===e(p))t.merge(w,p.nodeType?[p]:p);else if(c.test(p)){g=g||b.appendChild(l.createElement("div")),m=(r.exec(p)||["",""])[1].toLowerCase(),v=s[m]||s._default,g.innerHTML=v[1]+t.htmlPrefilter(p)+v[2],_=v[0];while(_--)g=g.lastChild;t.merge(w,g.childNodes),g=b.firstChild,g.textContent=""}else w.push(l.createTextNode(p));b.textContent="",E=0;while(p=w[E++])if(d&&t.inArray(p,d)>-1)f&&f.push(p);else if(y=n(p),g=o(b.appendChild(p),"script"),y&&a(g),h){_=0;while(p=g[_++])i.test(p.type||"")&&h.push(p)}return b}return u}.apply(e,r),void 0===i||(t.exports=i)},9532:function(t,e,n){var r,i;r=[n(2822),n(3362)],i=function(t,e){"use strict";function n(n,r){var i;return i="undefined"!==typeof n.getElementsByTagName?n.getElementsByTagName(r||"*"):"undefined"!==typeof n.querySelectorAll?n.querySelectorAll(r||"*"):[],void 0===r||r&&e(n,r)?t.merge([n],i):i}return n}.apply(e,r),void 0===i||(t.exports=i)},9710:function(t,e,n){var r,i;r=[n(711)],i=function(t){"use strict";function e(e,n){for(var r=0,i=e.length;r<i;r++)t.set(e[r],"globalEval",!n||t.get(n[r],"globalEval"))}return e}.apply(e,r),void 0===i||(t.exports=i)},6980:function(t,e,n){var r,i;r=[n(4954),n(180)],i=function(t,e){"use strict";return function(){var n=t.createDocumentFragment(),r=n.appendChild(t.createElement("div")),i=t.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),r.appendChild(i),e.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,r.innerHTML="<textarea>x</textarea>",e.noCloneChecked=!!r.cloneNode(!0).lastChild.defaultValue,r.innerHTML="<option></option>",e.option=!!r.lastChild}(),e}.apply(e,r),void 0===i||(t.exports=i)},8968:function(t,e,n){var r;r=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(e,n,e,t),void 0===r||(t.exports=r)},7176:function(t,e,n){var r;r=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(e,n,e,t),void 0===r||(t.exports=r)},9285:function(t,e,n){var r,i;r=[n(6980)],i=function(t){"use strict";var e={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return e.tbody=e.tfoot=e.colgroup=e.caption=e.thead,e.th=e.td,t.option||(e.optgroup=e.option=[1,"<select multiple='multiple'>","</select>"]),e}.apply(e,r),void 0===i||(t.exports=i)},2782:function(t,e,n){var r,i;r=[n(2822),n(9631),n(2840),n(719),n(1922),n(5892),n(8528),n(434),n(387),n(9819),n(7258),n(8268)],i=function(t,e,n,r,i,s,o,a,c){"use strict";return t.offset={setOffset:function(e,n,i){var s,o,a,c,u,l,h,d=t.css(e,"position"),f=t(e),p={};"static"===d&&(e.style.position="relative"),u=f.offset(),a=t.css(e,"top"),l=t.css(e,"left"),h=("absolute"===d||"fixed"===d)&&(a+l).indexOf("auto")>-1,h?(s=f.position(),c=s.top,o=s.left):(c=parseFloat(a)||0,o=parseFloat(l)||0),r(n)&&(n=n.call(e,i,t.extend({},u))),null!=n.top&&(p.top=n.top-u.top+c),null!=n.left&&(p.left=n.left-u.left+o),"using"in n?n.using.call(e,p):f.css(p)}},t.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(n){t.offset.setOffset(this,e,n)}));var n,r,i=this[0];return i?i.getClientRects().length?(n=i.getBoundingClientRect(),r=i.ownerDocument.defaultView,{top:n.top+r.pageYOffset,left:n.left+r.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,n,r,i=this[0],s={top:0,left:0};if("fixed"===t.css(i,"position"))n=i.getBoundingClientRect();else{n=this.offset(),r=i.ownerDocument,e=i.offsetParent||r.documentElement;while(e&&(e===r.body||e===r.documentElement)&&"static"===t.css(e,"position"))e=e.parentNode;e&&e!==i&&1===e.nodeType&&(s=t(e).offset(),s.top+=t.css(e,"borderTopWidth",!0),s.left+=t.css(e,"borderLeftWidth",!0))}return{top:n.top-s.top-t.css(i,"marginTop",!0),left:n.left-s.left-t.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){var e=this.offsetParent;while(e&&"static"===t.css(e,"position"))e=e.offsetParent;return e||n}))}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(n,r){var i="pageYOffset"===r;t.fn[n]=function(t){return e(this,(function(t,e,n){var s;if(c(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===n)return s?s[r]:t[e];s?s.scrollTo(i?s.pageXOffset:n,i?n:s.pageYOffset):t[e]=n}),n,t,arguments.length)}})),t.each(["top","left"],(function(e,n){t.cssHooks[n]=o(a.pixelPosition,(function(e,r){if(r)return r=s(e,n),i.test(r)?t(e).position()[n]+"px":r}))})),t}.apply(e,r),void 0===i||(t.exports=i)},8622:function(t,e,n){var r,i;r=[n(2822),n(711),n(4234),n(9197)],i=function(t,e){"use strict";return t.extend({queue:function(n,r,i){var s;if(n)return r=(r||"fx")+"queue",s=e.get(n,r),i&&(!s||Array.isArray(i)?s=e.access(n,r,t.makeArray(i)):s.push(i)),s||[]},dequeue:function(e,n){n=n||"fx";var r=t.queue(e,n),i=r.length,s=r.shift(),o=t._queueHooks(e,n),a=function(){t.dequeue(e,n)};"inprogress"===s&&(s=r.shift(),i--),s&&("fx"===n&&r.unshift("inprogress"),delete o.stop,s.call(e,a,o)),!i&&o&&o.empty.fire()},_queueHooks:function(n,r){var i=r+"queueHooks";return e.get(n,i)||e.access(n,i,{empty:t.Callbacks("once memory").add((function(){e.remove(n,[r+"queue",i])}))})}}),t.fn.extend({queue:function(e,n){var r=2;return"string"!==typeof e&&(n=e,e="fx",r--),arguments.length<r?t.queue(this[0],e):void 0===n?this:this.each((function(){var r=t.queue(this,e,n);t._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&t.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){t.dequeue(this,e)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(n,r){var i,s=1,o=t.Deferred(),a=this,c=this.length,u=function(){--s||o.resolveWith(a,[a])};"string"!==typeof n&&(r=n,n=void 0),n=n||"fx";while(c--)i=e.get(a[c],n+"queueHooks"),i&&i.empty&&(s++,i.empty.add(u));return u(),o.promise(r)}}),t}.apply(e,r),void 0===i||(t.exports=i)},7154:function(t,e,n){var r,i;r=[n(2822),n(8622),n(4331)],i=function(t){"use strict";return t.fn.delay=function(e,n){return e=t.fx&&t.fx.speeds[e]||e,n=n||"fx",this.queue(n,(function(t,n){var r=window.setTimeout(t,e);n.stop=function(){window.clearTimeout(r)}}))},t.fn.delay}.apply(e,r),void 0===i||(t.exports=i)},6330:function(t,e,n){var r,i;r=[n(2822),n(7034)],i=function(t,e){"use strict";t.find=e,t.expr=e.selectors,t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=e.uniqueSort,t.text=e.getText,t.isXMLDoc=e.isXML,t.contains=e.contains,t.escapeSelector=e.escape}.apply(e,r),void 0===i||(t.exports=i)},8268:function(t,e,n){var r,i;r=[n(6330)],i=function(){}.apply(e,r),void 0===i||(t.exports=i)},6783:function(t,e,n){var r,i;r=[n(2822),n(4320),n(8645),n(719),n(9819),n(5144),n(50)],i=function(t,e,n,r){"use strict";var i=/\[\]$/,s=/\r?\n/g,o=/^(?:submit|button|image|reset|file)$/i,a=/^(?:input|select|textarea|keygen)/i;function c(n,r,s,o){var a;if(Array.isArray(r))t.each(r,(function(t,e){s||i.test(n)?o(n,e):c(n+"["+("object"===typeof e&&null!=e?t:"")+"]",e,s,o)}));else if(s||"object"!==e(r))o(n,r);else for(a in r)c(n+"["+a+"]",r[a],s,o)}return t.param=function(e,n){var i,s=[],o=function(t,e){var n=r(e)?e():e;s[s.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!t.isPlainObject(e))t.each(e,(function(){o(this.name,this.value)}));else for(i in e)c(i,e[i],n,o);return s.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=t.prop(this,"elements");return e?t.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!t(this).is(":disabled")&&a.test(this.nodeName)&&!o.test(e)&&(this.checked||!n.test(e))})).map((function(e,n){var r=t(this).val();return null==r?null:Array.isArray(r)?t.map(r,(function(t){return{name:n.name,value:t.replace(s,"\r\n")}})):{name:n.name,value:r.replace(s,"\r\n")}})).get()}}),t}.apply(e,r),void 0===i||(t.exports=i)},5144:function(t,e,n){var r,i;r=[n(2822),n(4677),n(7230),n(4438),n(1654),n(3623),n(3362),n(9819),n(114),n(8268)],i=function(t,e,n,r,i,s,o){"use strict";var a=/^(?:parents|prev(?:Until|All))/,c={children:!0,contents:!0,next:!0,prev:!0};function u(t,e){while((t=t[e])&&1!==t.nodeType);return t}return t.fn.extend({has:function(e){var n=t(e,this),r=n.length;return this.filter((function(){for(var e=0;e<r;e++)if(t.contains(this,n[e]))return!0}))},closest:function(e,n){var r,i=0,o=this.length,a=[],c="string"!==typeof e&&t(e);if(!s.test(e))for(;i<o;i++)for(r=this[i];r&&r!==n;r=r.parentNode)if(r.nodeType<11&&(c?c.index(r)>-1:1===r.nodeType&&t.find.matchesSelector(r,e))){a.push(r);break}return this.pushStack(a.length>1?t.uniqueSort(a):a)},index:function(e){return e?"string"===typeof e?n.call(t(e),this[0]):n.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(e,n))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return r(t,"parentNode")},parentsUntil:function(t,e,n){return r(t,"parentNode",n)},next:function(t){return u(t,"nextSibling")},prev:function(t){return u(t,"previousSibling")},nextAll:function(t){return r(t,"nextSibling")},prevAll:function(t){return r(t,"previousSibling")},nextUntil:function(t,e,n){return r(t,"nextSibling",n)},prevUntil:function(t,e,n){return r(t,"previousSibling",n)},siblings:function(t){return i((t.parentNode||{}).firstChild,t)},children:function(t){return i(t.firstChild)},contents:function(n){return null!=n.contentDocument&&e(n.contentDocument)?n.contentDocument:(o(n,"template")&&(n=n.content||n),t.merge([],n.childNodes))}},(function(e,n){t.fn[e]=function(r,i){var s=t.map(this,n,r);return"Until"!==e.slice(-5)&&(i=r),i&&"string"===typeof i&&(s=t.filter(i,s)),this.length>1&&(c[e]||t.uniqueSort(s),a.test(e)&&s.reverse()),this.pushStack(s)}})),t}.apply(e,r),void 0===i||(t.exports=i)},114:function(t,e,n){var r,i;r=[n(2822),n(7230),n(719),n(3623),n(8268)],i=function(t,e,n,r){"use strict";function i(r,i,s){return n(i)?t.grep(r,(function(t,e){return!!i.call(t,e,t)!==s})):i.nodeType?t.grep(r,(function(t){return t===i!==s})):"string"!==typeof i?t.grep(r,(function(t){return e.call(i,t)>-1!==s})):t.filter(i,r,s)}t.filter=function(e,n,r){var i=n[0];return r&&(e=":not("+e+")"),1===n.length&&1===i.nodeType?t.find.matchesSelector(i,e)?[i]:[]:t.find.matches(e,t.grep(n,(function(t){return 1===t.nodeType})))},t.fn.extend({find:function(e){var n,r,i=this.length,s=this;if("string"!==typeof e)return this.pushStack(t(e).filter((function(){for(n=0;n<i;n++)if(t.contains(s[n],this))return!0})));for(r=this.pushStack([]),n=0;n<i;n++)t.find(e,s[n],r);return i>1?t.uniqueSort(r):r},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(e){return!!i(this,"string"===typeof e&&r.test(e)?t(e):e||[],!1).length}})}.apply(e,r),void 0===i||(t.exports=i)},4438:function(t,e,n){var r,i;r=[n(2822)],i=function(t){"use strict";return function(e,n,r){var i=[],s=void 0!==r;while((e=e[n])&&9!==e.nodeType)if(1===e.nodeType){if(s&&t(e).is(r))break;i.push(e)}return i}}.apply(e,r),void 0===i||(t.exports=i)},3623:function(t,e,n){var r,i;r=[n(2822),n(8268)],i=function(t){"use strict";return t.expr.match.needsContext}.apply(e,r),void 0===i||(t.exports=i)},1654:function(t,e,n){var r;r=function(){"use strict";return function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}.call(e,n,e,t),void 0===r||(t.exports=r)},8965:function(t,e,n){var r,i;r=[n(3767)],i=function(t){"use strict";return t.call(Object)}.apply(e,r),void 0===i||(t.exports=i)},1056:function(t,e,n){var r;r=function(){"use strict";return[]}.call(e,n,e,t),void 0===r||(t.exports=r)},2897:function(t,e,n){var r;r=function(){"use strict";return{}}.call(e,n,e,t),void 0===r||(t.exports=r)},4954:function(t,e,n){var r;r=function(){"use strict";return window.document}.call(e,n,e,t),void 0===r||(t.exports=r)},2840:function(t,e,n){var r,i;r=[n(4954)],i=function(t){"use strict";return t.documentElement}.apply(e,r),void 0===i||(t.exports=i)},756:function(t,e,n){var r,i;r=[n(1056)],i=function(t){"use strict";return t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)}}.apply(e,r),void 0===i||(t.exports=i)},3767:function(t,e,n){var r,i;r=[n(5327)],i=function(t){"use strict";return t.toString}.apply(e,r),void 0===i||(t.exports=i)},4677:function(t,e,n){var r;r=function(){"use strict";return Object.getPrototypeOf}.call(e,n,e,t),void 0===r||(t.exports=r)},5327:function(t,e,n){var r,i;r=[n(2897)],i=function(t){"use strict";return t.hasOwnProperty}.apply(e,r),void 0===i||(t.exports=i)},7230:function(t,e,n){var r,i;r=[n(1056)],i=function(t){"use strict";return t.indexOf}.apply(e,r),void 0===i||(t.exports=i)},719:function(t,e,n){var r;r=function(){"use strict";return function(t){return"function"===typeof t&&"number"!==typeof t.nodeType&&"function"!==typeof t.item}}.call(e,n,e,t),void 0===r||(t.exports=r)},387:function(t,e,n){var r;r=function(){"use strict";return function(t){return null!=t&&t===t.window}}.call(e,n,e,t),void 0===r||(t.exports=r)},5479:function(t,e,n){var r;r=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(e,n,e,t),void 0===r||(t.exports=r)},5027:function(t,e,n){var r,i;r=[n(1056)],i=function(t){"use strict";return t.push}.apply(e,r),void 0===i||(t.exports=i)},8645:function(t,e,n){var r;r=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(e,n,e,t),void 0===r||(t.exports=r)},7240:function(t,e,n){var r,i;r=[n(5479)],i=function(t){"use strict";return new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i")}.apply(e,r),void 0===i||(t.exports=i)},1136:function(t,e,n){var r;r=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(e,n,e,t),void 0===r||(t.exports=r)},3837:function(t,e,n){var r,i;r=[n(1056)],i=function(t){"use strict";return t.slice}.apply(e,r),void 0===i||(t.exports=i)},180:function(t,e,n){var r;r=function(){"use strict";return{}}.call(e,n,e,t),void 0===r||(t.exports=r)},9315:function(t,e,n){var r,i;r=[n(2897)],i=function(t){"use strict";return t.toString}.apply(e,r),void 0===i||(t.exports=i)},4409:function(t,e,n){var r,i;r=[n(2822),n(719),n(9819),n(7644),n(5144)],i=function(t,e){"use strict";return t.fn.extend({wrapAll:function(n){var r;return this[0]&&(e(n)&&(n=n.call(this[0])),r=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&r.insertBefore(this[0]),r.map((function(){var t=this;while(t.firstElementChild)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(n){return e(n)?this.each((function(e){t(this).wrapInner(n.call(this,e))})):this.each((function(){var e=t(this),r=e.contents();r.length?r.wrapAll(n):e.append(n)}))},wrap:function(n){var r=e(n);return this.each((function(e){t(this).wrapAll(r?n.call(this,e):n)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){t(this).replaceWith(this.childNodes)})),this}}),t}.apply(e,r),void 0===i||(t.exports=i)},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},782:function(t,e,n){"use strict";n.d(e,{y$:function(){return tt}});var r=n(6768),i=n(144);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function v(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function y(t){return null!==t&&"object"===typeof t}function _(t){return t&&"function"===typeof t.then}function b(t,e){return function(){return t(e)}}function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={};v(s,(function(e,n){o[n]=b(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=(0,i.Kh)({data:e}),t.strict&&O(t),r&&n&&t._withCommit((function(){r.data=null}))}function C(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=I(t,o,n);r.forEachMutation((function(e,n){var r=o+n;S(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachChild((function(r,s){C(t,e,n.concat(s),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return x(t,e)}},state:{get:function(){return N(t.state,n)}}}),i}function x(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return _(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){(0,r.wB)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var R="vuex bindings",L="vuex:mutations",P="vuex:actions",M="vuex",j=0;function F(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[R]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:U}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];W(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[H(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;x(e,r),n.state=z(G(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=j++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:P,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var U=8702998,V=6710886,$=16777215,B={label:"namespaced",textColor:$,backgroundColor:V};function q(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function H(t,e){return{id:e||"root",label:q(e),tags:t.namespaced?[B]:[],children:Object.keys(t._children).map((function(n){return H(t._children[n],e+n+"/")}))}}function W(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[B]:[]}),Object.keys(e._children).forEach((function(i){W(t,e._children[i],n,r+i+"/")}))}function z(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=K(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?q(t):t,editable:!1,value:Q((function(){return s[t]}))}}))}return i}function K(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function G(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var X=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},Y={namespaced:{configurable:!0}};Y.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(t,e){this._children[t]=e},X.prototype.removeChild=function(t){delete this._children[t]},X.prototype.getChild=function(t){return this._children[t]},X.prototype.hasChild=function(t){return t in this._children},X.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},X.prototype.forEachChild=function(t){v(this._children,t)},X.prototype.forEachGetter=function(t){this._rawModule.getters&&v(this._rawModule.getters,t)},X.prototype.forEachAction=function(t){this._rawModule.actions&&v(this._rawModule.actions,t)},X.prototype.forEachMutation=function(t){this._rawModule.mutations&&v(this._rawModule.mutations,t)},Object.defineProperties(X.prototype,Y);var Z=function(t){this.register([],t,!1)};function J(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;J(t.concat(r),e.getChild(r),n.modules[r])}}Z.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Z.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Z.prototype.update=function(t){J([],this.root,t)},Z.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new X(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&v(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Z.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Z.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),T(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&F(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.wB)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=N(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=ot(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=ot(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function rt(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||y(t)}function st(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r}},3405:function(t,e,n){"use strict";n.d(e,{MF:function(){return gt},j6:function(){return ht},om:function(){return lt},Sx:function(){return vt},Wp:function(){return mt},KO:function(){return yt}});var r=n(852),i=n(1363),s=n(4046);n(9078);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],S=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return S.set(e,s),s}_((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",D="0.7.29",R=new i.Vy("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",W="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",J="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.9.1",st="[DEFAULT]",ot={[N]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[W]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[J]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ft=new s.FA("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw ft.create("bad-app-name",{appName:String(i)});const o=at.get(i);if(o){if((0,s.bD)(t,o.options)&&(0,s.bD)(n,o.config))return o;throw ft.create("duplicate-app",{appName:i})}const a=new r.h1(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function vt(t=st){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}lt(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",bt=1,wt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(_t,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){var e;try{const e=await Tt();return e.transaction(wt).objectStore(wt).get(xt(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function It(t,e){var n;try{const n=await Tt(),r=n.transaction(wt,"readwrite"),i=r.objectStore(wt);return await i.put(e,xt(t)),r.done}catch(r){throw ft.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1024,At=2592e6;class kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=St){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Rt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Rt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.uA("platform-logger",(t=>new k(t)),"PRIVATE")),lt(new r.uA("heartbeat",(t=>new kt(t)),"PRIVATE")),yt(N,D,t),yt(N,D,"esm2017"),yt("fire-js","")}Lt("")},852:function(t,e,n){"use strict";n.d(e,{h1:function(){return u},uA:function(){return i}});var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return u}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},1387:function(t,e,n){"use strict";n.d(e,{LA:function(){return U},aE:function(){return ee}});var r=n(6768),i=n(144);
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=w(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(e.matched[r],n.matched[i])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_(t[n],e[n]))return!1;return!0}function _(t,e){return l(t)?b(t,e):l(e)?b(e,t):t===e}function b(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function w(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const I=/^[^#]+#/;function x(t,e){return t.replace(I,"#")+e}function S(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function k(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=S(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const N=new Map;function D(t,e){N.set(t,e)}function R(t){const e=N.get(t);return N.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function j(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function F(t){const{history:e,location:n}=window,r={value:P(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,j(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const c=a({},j(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function U(t){t=C(t);const e=F(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:x.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return"string"===typeof t||t&&"object"===typeof t}function $(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function W(t,e){return a(new Error,{type:t,[q]:!0},e)}function z(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const K="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},G,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||K;if(l!==K){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(J(r))return 1;if(J(i))return-1}return i.length-r.length}function J(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function rt(t,e,n){const r=X(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=lt(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=rt(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ct(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f,l(f)}return p?()=>{o(p)}:u}function o(t){if($(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw W(1,{location:t});o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw W(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,vt=/\+/g,yt=/%5B/g,_t=/%5D/g,bt=/%5E/g,wt=/%60/g,Et=/%7B/g,Tt=/%7C/g,Ct=/%7D/g,It=/%20/g;function xt(t){return encodeURI(""+t).replace(Tt,"|").replace(yt,"[").replace(_t,"]")}function St(t){return xt(t).replace(Et,"{").replace(Ct,"}").replace(bt,"^")}function At(t){return xt(t).replace(vt,"%2B").replace(It,"+").replace(dt,"%23").replace(ft,"%26").replace(wt,"`").replace(Et,"{").replace(Ct,"}").replace(bt,"^")}function kt(t){return At(t).replace(gt,"%3D")}function Ot(t){return xt(t).replace(dt,"%23").replace(mt,"%3F")}function Nt(t){return null==t?"":Ot(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Rt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(vt," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=kt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&At(t))):[r&&At(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Pt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Mt=Symbol(""),jt=Symbol(""),Ft=Symbol(""),Ut=Symbol(""),Vt=Symbol("");function $t(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(W(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(W(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(Bt(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&Bt(u,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Wt(t){const e=(0,r.WQ)(Ft),n=(0,r.WQ)(Ut),s=(0,r.EW)((()=>e.resolve((0,i.R1)(t.to)))),o=(0,r.EW)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,t[e-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Gt(n)?e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const zt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wt,setup(t,{slots:e}){const n=(0,i.Kh)(Wt(t)),{options:s}=(0,r.WQ)(Ft),o=(0,r.EW)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Kt=zt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)(Vt),o=(0,r.EW)((()=>t.route||s.value)),c=(0,r.WQ)(jt,0),u=(0,r.EW)((()=>{let t=(0,i.R1)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(jt,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Mt,l),(0,r.Gt)(Vt,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&v(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return Jt(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Jt(n.default,{Component:g,route:i})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Zt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Rt,o=t.stringifyQuery||Lt,h=t.history;const d=$t(),g=$t(),v=$t(),y=(0,i.IJ)(B);let _=B;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),w=c.bind(null,Nt),T=c.bind(null,Dt);function C(t,n){let r,i;return $(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function x(){return e.getRoutes().map((t=>t.record))}function S(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=a({},r||y.value),"string"===typeof t){const i=f(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:w(t.params)}),r.params=w(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=b(T(s.params));const u=p(o,a({},t,{hash:St(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Lt?Pt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?f(n,t,y.value.path):a({},t)}function P(t,e){if(_!==t)return W(8,{from:e,to:t})}function M(t){return U(t)}function j(t){return M(a(L(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function U(t,e){const n=_=N(t),r=y.value,i=t.state,s=t.force,c=!0===t.replace,u=F(n);if(u)return U(a(L(u),{state:i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&m(o,r,n)&&(h=W(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((t=>z(t)?z(t,2)?t:et(t):J(t,l,r))).then((t=>{if(t){if(z(t,2))return U(a({replace:c},L(t.to),{state:i,force:s}),e||l)}else t=K(l,r,!0,c,i);return H(l,r,t),t}))}function V(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Bt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of d.list())n.push(Bt(r,t,e));return n.push(o),ne(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Bt(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Bt(i,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of g.list())n.push(Bt(r,t,e));return n.push(o),ne(n)})).catch((t=>z(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of v.list())r(t,e,n)}function K(t,e,n,r,i){const o=P(t,e);if(o)return o;const c=e===B,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),y.value=t,nt(t,e,n,c),et()}let G;function Q(){G||(G=h.listen(((t,e,n)=>{if(!at.listening)return;const r=N(t),i=F(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);_=r;const o=y.value;s&&D(O(o.fullPath,n.delta),A()),q(r,o).catch((t=>z(t,12)?t:z(t,2)?(U(t.to,r).then((t=>{z(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),J(t,r,o)))).then((t=>{t=t||K(r,o,!1),t&&(n.delta&&!z(t,8)?h.go(-n.delta,!1):n.type===E.pop&&z(t,20)&&h.go(-1,!1)),H(r,o,t)})).catch(u)})))}let X,Y=$t(),Z=$t();function J(t,e,n){et(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return X&&y.value!==B?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function et(t){return X||(X=!t,Q(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&R(O(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,c))).then((t=>t&&k(t))).catch((t=>J(t,e,n)))}const rt=t=>h.go(t);let st;const ot=new Set,at={currentRoute:y,listening:!0,addRoute:C,removeRoute:I,hasRoute:S,getRoutes:x,resolve:N,options:t,push:M,replace:j,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:g.add,afterEach:v.add,onError:Z.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(y)}),s&&!st&&y.value===B&&(st=!0,M(h.location).catch((t=>{0})));const n={};for(const i in B)n[i]=(0,r.EW)((()=>y.value[i]));t.provide(Ft,e),t.provide(Ut,(0,i.Kh)(n)),t.provide(Vt,y);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(_=B,G&&G(),G=null,y.value=B,st=!1,X=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>v(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>v(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.bcf111bd.js.map