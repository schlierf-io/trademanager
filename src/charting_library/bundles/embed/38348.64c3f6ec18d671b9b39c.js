(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[38348],{24654:t=>{"use strict";t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var a=t.charCodeAt(n);if(a>=55296&&a<=56319&&r>n+1){var o=t.charCodeAt(n+1);o>=56320&&o<=57343&&(a=1024*(a-55296)+o-56320+65536,n+=1)}a<128?e.push(a):a<2048?(e.push(a>>6|192),e.push(63&a|128)):a<55296||a>=57344&&a<65536?(e.push(a>>12|224),e.push(a>>6&63|128),e.push(63&a|128)):a>=65536&&a<=1114111?(e.push(a>>18|240),e.push(a>>12&63|128),e.push(a>>6&63|128),e.push(63&a|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},9995:(t,e,r)=>{var n=r(939340);t.exports=function(t){return t=n(t^=t>>>16,2246822507),t=n(t^=t>>>13,3266489909),(t^=t>>>16)>>>0}},939340:t=>{"use strict";t.exports=Math.imul||function(t,e){var r=65535&t,n=65535&e;return r*n+((t>>>16&65535)*n+r*(e>>>16&65535)<<16>>>0)|0}},618606:(t,e,r)=>{"use strict";r.d(e,{default:()=>d});const n=function(){this.__data__=[],this.size=0};var a=r(872575);const o=function(t,e){for(var r=t.length;r--;)if((0,a.default)(t[r][0],e))return r;return-1};var u=Array.prototype.splice;const c=function(t){var e=this.__data__,r=o(e,t);return!(r<0)&&(r==e.length-1?e.pop():u.call(e,r,1),--this.size,!0)};const s=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]};const f=function(t){return o(this.__data__,t)>-1};const i=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=c,l.prototype.get=s,l.prototype.has=f,l.prototype.set=i;const d=l},667027:(t,e,r)=>{"use strict";r.d(e,{default:()=>o});var n=r(270830),a=r(178160);const o=(0,n.default)(a.default,"Map")},601141:(t,e,r)=>{"use strict";r.d(e,{default:()=>O});const n=(0,r(270830).default)(Object,"create");const a=function(){this.__data__=n?n(null):{},this.size=0};const o=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var u=Object.prototype.hasOwnProperty;const c=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return u.call(e,t)?e[t]:void 0};var s=Object.prototype.hasOwnProperty;const f=function(t){var e=this.__data__;return n?void 0!==e[t]:s.call(e,t)};const i=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this};function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=a,l.prototype.delete=o,l.prototype.get=c,l.prototype.has=f,l.prototype.set=i;const d=l;var p=r(618606),v=r(667027);const b=function(){this.size=0,this.__data__={hash:new d,map:new(v.default||p.default),string:new d}};const y=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const h=function(t,e){var r=t.__data__;return y(e)?r["string"==typeof e?"string":"hash"]:r.map};const j=function(t){var e=h(this,t).delete(t);return this.size-=e?1:0,e}
;const _=function(t){return h(this,t).get(t)};const g=function(t){return h(this,t).has(t)};const w=function(t,e){var r=h(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function A(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}A.prototype.clear=b,A.prototype.delete=j,A.prototype.get=_,A.prototype.has=g,A.prototype.set=w;const O=A},396335:(t,e,r)=>{"use strict";r.d(e,{default:()=>d});var n=r(618606);const a=function(){this.__data__=new n.default,this.size=0};const o=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const u=function(t){return this.__data__.get(t)};const c=function(t){return this.__data__.has(t)};var s=r(667027),f=r(601141);const i=function(t,e){var r=this.__data__;if(r instanceof n.default){var a=r.__data__;if(!s.default||a.length<199)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new f.default(a)}return r.set(t,e),this.size=r.size,this};function l(t){var e=this.__data__=new n.default(t);this.size=e.size}l.prototype.clear=a,l.prototype.delete=o,l.prototype.get=u,l.prototype.has=c,l.prototype.set=i;const d=l},735246:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=r(178160).default.Uint8Array},488164:(t,e,r)=>{"use strict";r.d(e,{default:()=>i});var n=r(280292),a=r(553822),o=r(854814),u=r(925247),c=r(817104),s=r(54744),f=Object.prototype.hasOwnProperty;const i=function(t,e){var r=(0,o.default)(t),i=!r&&(0,a.default)(t),l=!r&&!i&&(0,u.default)(t),d=!r&&!i&&!l&&(0,s.default)(t),p=r||i||l||d,v=p?(0,n.default)(t.length,String):[],b=v.length;for(var y in t)!e&&!f.call(t,y)||p&&("length"==y||l&&("offset"==y||"parent"==y)||d&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||(0,c.default)(y,b))||v.push(y);return v}},920883:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}},866934:(t,e,r)=>{"use strict";r.d(e,{default:()=>u});var n=r(624402),a=r(872575),o=Object.prototype.hasOwnProperty;const u=function(t,e,r){var u=t[e];o.call(t,e)&&(0,a.default)(u,r)&&(void 0!==r||e in t)||(0,n.default)(t,e,r)}},624402:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=r(776780);const a=function(t,e,r){"__proto__"==e&&n.default?(0,n.default)(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},144315:(t,e,r)=>{"use strict";r.d(e,{default:()=>K});var n=r(396335);const a=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var o=r(866934),u=r(175969),c=r(933358);const s=function(t,e){return t&&(0,u.default)(e,(0,c.default)(e),t)};var f=r(364162);const i=function(t,e){return t&&(0,u.default)(e,(0,f.default)(e),t)};var l=r(157508),d=r(458555),p=r(112644);const v=function(t,e){return(0,u.default)(t,(0,p.default)(t),e)};var b=r(749605);const y=function(t,e){return(0,u.default)(t,(0,b.default)(t),e)};var h=r(885747),j=r(847651),_=r(317873),g=Object.prototype.hasOwnProperty;const w=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&g.call(t,"index")&&(r.index=t.index,
r.input=t.input),r};var A=r(544702);const O=function(t,e){var r=e?(0,A.default)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var x=/\w*$/;const m=function(t){var e=new t.constructor(t.source,x.exec(t));return e.lastIndex=t.lastIndex,e};var z=r(503060),U=z.default?z.default.prototype:void 0,P=U?U.valueOf:void 0;const S=function(t){return P?Object(P.call(t)):{}};var I=r(839895);const F=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return(0,A.default)(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return O(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,I.default)(t,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return m(t);case"[object Symbol]":return S(t)}};var k=r(852222),E=r(854814),B=r(925247),M=r(383527);const T=function(t){return(0,M.default)(t)&&"[object Map]"==(0,_.default)(t)};var C=r(395256),D=r(159283),$=D.default&&D.default.isMap;const L=$?(0,C.default)($):T;var R=r(598279);const V=function(t){return(0,M.default)(t)&&"[object Set]"==(0,_.default)(t)};var W=D.default&&D.default.isSet;const N=W?(0,C.default)(W):V;var q="[object Arguments]",G="[object Function]",H="[object Object]",J={};J[q]=J["[object Array]"]=J["[object ArrayBuffer]"]=J["[object DataView]"]=J["[object Boolean]"]=J["[object Date]"]=J["[object Float32Array]"]=J["[object Float64Array]"]=J["[object Int8Array]"]=J["[object Int16Array]"]=J["[object Int32Array]"]=J["[object Map]"]=J["[object Number]"]=J[H]=J["[object RegExp]"]=J["[object Set]"]=J["[object String]"]=J["[object Symbol]"]=J["[object Uint8Array]"]=J["[object Uint8ClampedArray]"]=J["[object Uint16Array]"]=J["[object Uint32Array]"]=!0,J["[object Error]"]=J[G]=J["[object WeakMap]"]=!1;const K=function t(e,r,u,f,p,b){var g,A=1&r,O=2&r,x=4&r;if(u&&(g=p?u(e,f,p,b):u(e)),void 0!==g)return g;if(!(0,R.default)(e))return e;var m=(0,E.default)(e);if(m){if(g=w(e),!A)return(0,d.default)(e,g)}else{var z=(0,_.default)(e),U=z==G||"[object GeneratorFunction]"==z;if((0,B.default)(e))return(0,l.default)(e,A);if(z==H||z==q||U&&!p){if(g=O||U?{}:(0,k.default)(e),!A)return O?y(e,i(g,e)):v(e,s(g,e))}else{if(!J[z])return p?e:{};g=F(e,z,A)}}b||(b=new n.default);var P=b.get(e);if(P)return P;b.set(e,g),N(e)?e.forEach((function(n){g.add(t(n,r,u,n,e,b))})):L(e)&&e.forEach((function(n,a){g.set(a,t(n,r,u,a,e,b))}));var S=x?O?j.default:h.default:O?keysIn:c.default,I=m?void 0:S(e);return a(I||e,(function(n,a){I&&(n=e[a=n]),(0,o.default)(g,a,t(n,r,u,a,e,b))})),g}},44631:(t,e,r)=>{"use strict";r.d(e,{default:()=>o});var n=r(920883),a=r(854814);const o=function(t,e,r){var o=e(t);return(0,a.default)(t)?o:(0,n.default)(o,r(t))}},7492:(t,e,r)=>{"use strict";r.d(e,{default:()=>u});var n=r(443744);const a=(0,
r(22828).default)(Object.keys,Object);var o=Object.prototype.hasOwnProperty;const u=function(t){if(!(0,n.default)(t))return a(t);var e=[];for(var r in Object(t))o.call(t,r)&&"constructor"!=r&&e.push(r);return e}},280292:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},395256:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t){return function(e){return t(e)}}},544702:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=r(735246);const a=function(t){var e=new t.constructor(t.byteLength);return new n.default(e).set(new n.default(t)),e}},157508:(t,e,r)=>{"use strict";r.d(e,{default:()=>s});var n=r(178160);t=r.hmd(t);var a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&t&&!t.nodeType&&t,u=o&&o.exports===a?n.default.Buffer:void 0,c=u?u.allocUnsafe:void 0;const s=function(t,e){if(e)return t.slice();var r=t.length,n=c?c(r):new t.constructor(r);return t.copy(n),n}},839895:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=r(544702);const a=function(t,e){var r=e?(0,n.default)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},458555:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},175969:(t,e,r)=>{"use strict";r.d(e,{default:()=>o});var n=r(866934),a=r(624402);const o=function(t,e,r,o){var u=!r;r||(r={});for(var c=-1,s=e.length;++c<s;){var f=e[c],i=o?o(r[f],t[f],f,r,t):void 0;void 0===i&&(i=t[f]),u?(0,a.default)(r,f,i):(0,n.default)(r,f,i)}return r}},776780:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=r(270830);const a=function(){try{var t=(0,n.default)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}()},885747:(t,e,r)=>{"use strict";r.d(e,{default:()=>u});var n=r(44631),a=r(112644),o=r(933358);const u=function(t){return(0,n.default)(t,o.default,a.default)}},847651:(t,e,r)=>{"use strict";r.d(e,{default:()=>u});var n=r(44631),a=r(749605),o=r(364162);const u=function(t){return(0,n.default)(t,o.default,a.default)}},270830:(t,e,r)=>{"use strict";r.d(e,{default:()=>j});var n=r(162942);const a=r(178160).default["__core-js_shared__"];var o,u=(o=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";const c=function(t){return!!u&&u in t};var s=r(598279),f=r(359990),i=/^\[object .+?Constructor\]$/,l=Function.prototype,d=Object.prototype,p=l.toString,v=d.hasOwnProperty,b=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const y=function(t){return!(!(0,s.default)(t)||c(t))&&((0,n.default)(t)?b:i).test((0,f.default)(t))};const h=function(t,e){return null==t?void 0:t[e]};const j=function(t,e){var r=h(t,e);return y(r)?r:void 0}},156838:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=(0,r(22828).default)(Object.getPrototypeOf,Object)},112644:(t,e,r)=>{"use strict";r.d(e,{default:()=>c});const n=function(t,e){for(var r=-1,n=null==t?0:t.length,a=0,o=[];++r<n;){var u=t[r];e(u,r,t)&&(o[a++]=u)}return o}
;var a=r(335987),o=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols;const c=u?function(t){return null==t?[]:(t=Object(t),n(u(t),(function(e){return o.call(t,e)})))}:a.default},749605:(t,e,r)=>{"use strict";r.d(e,{default:()=>c});var n=r(920883),a=r(156838),o=r(112644),u=r(335987);const c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)(0,n.default)(e,(0,o.default)(t)),t=(0,a.default)(t);return e}:u.default},317873:(t,e,r)=>{"use strict";r.d(e,{default:()=>O});var n=r(270830),a=r(178160);const o=(0,n.default)(a.default,"DataView");var u=r(667027);const c=(0,n.default)(a.default,"Promise");const s=(0,n.default)(a.default,"Set");const f=(0,n.default)(a.default,"WeakMap");var i=r(128177),l=r(359990),d="[object Map]",p="[object Promise]",v="[object Set]",b="[object WeakMap]",y="[object DataView]",h=(0,l.default)(o),j=(0,l.default)(u.default),_=(0,l.default)(c),g=(0,l.default)(s),w=(0,l.default)(f),A=i.default;(o&&A(new o(new ArrayBuffer(1)))!=y||u.default&&A(new u.default)!=d||c&&A(c.resolve())!=p||s&&A(new s)!=v||f&&A(new f)!=b)&&(A=function(t){var e=(0,i.default)(t),r="[object Object]"==e?t.constructor:void 0,n=r?(0,l.default)(r):"";if(n)switch(n){case h:return y;case j:return d;case _:return p;case g:return v;case w:return b}return e});const O=A},852222:(t,e,r)=>{"use strict";r.d(e,{default:()=>s});var n=r(598279),a=Object.create;const o=function(){function t(){}return function(e){if(!(0,n.default)(e))return{};if(a)return a(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var u=r(156838),c=r(443744);const s=function(t){return"function"!=typeof t.constructor||(0,c.default)(t)?{}:o((0,u.default)(t))}},817104:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=/^(?:0|[1-9]\d*)$/;const a=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},443744:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=Object.prototype;const a=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},159283:(t,e,r)=>{"use strict";r.d(e,{default:()=>c});var n=r(489956);t=r.hmd(t);var a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&t&&!t.nodeType&&t,u=o&&o.exports===a&&n.default.process;const c=function(){try{var t=o&&o.require&&o.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}()},22828:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t,e){return function(r){return t(e(r))}}},359990:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=Function.prototype.toString;const a=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},822914:(t,e,r)=>{"use strict";r.d(e,{default:()=>a});var n=r(144315);const a=function(t){return(0,n.default)(t,5)}},872575:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t,e){return t===e||t!=t&&e!=e}},553822:(t,e,r)=>{"use strict";r.d(e,{default:()=>f});var n=r(128177),a=r(383527);const o=function(t){return(0,a.default)(t)&&"[object Arguments]"==(0,n.default)(t)}
;var u=Object.prototype,c=u.hasOwnProperty,s=u.propertyIsEnumerable;const f=o(function(){return arguments}())?o:function(t){return(0,a.default)(t)&&c.call(t,"callee")&&!s.call(t,"callee")}},854814:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=Array.isArray},29419:(t,e,r)=>{"use strict";r.d(e,{default:()=>o});var n=r(162942),a=r(667702);const o=function(t){return null!=t&&(0,a.default)(t.length)&&!(0,n.default)(t)}},925247:(t,e,r)=>{"use strict";r.d(e,{default:()=>s});var n=r(178160);const a=function(){return!1};t=r.hmd(t);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=o&&t&&!t.nodeType&&t,c=u&&u.exports===o?n.default.Buffer:void 0;const s=(c?c.isBuffer:void 0)||a},162942:(t,e,r)=>{"use strict";r.d(e,{default:()=>o});var n=r(128177),a=r(598279);const o=function(t){if(!(0,a.default)(t))return!1;var e=(0,n.default)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},667702:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},54744:(t,e,r)=>{"use strict";r.d(e,{default:()=>l});var n=r(128177),a=r(667702),o=r(383527),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1;const c=function(t){return(0,o.default)(t)&&(0,a.default)(t.length)&&!!u[(0,n.default)(t)]};var s=r(395256),f=r(159283),i=f.default&&f.default.isTypedArray;const l=i?(0,s.default)(i):c},933358:(t,e,r)=>{"use strict";r.d(e,{default:()=>u});var n=r(488164),a=r(7492),o=r(29419);const u=function(t){return(0,o.default)(t)?(0,n.default)(t):(0,a.default)(t)}},364162:(t,e,r)=>{"use strict";r.d(e,{default:()=>i});var n=r(488164),a=r(598279),o=r(443744);const u=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var c=Object.prototype.hasOwnProperty;const s=function(t){if(!(0,a.default)(t))return u(t);var e=(0,o.default)(t),r=[];for(var n in t)("constructor"!=n||!e&&c.call(t,n))&&r.push(n);return r};var f=r(29419);const i=function(t){return(0,f.default)(t)?(0,n.default)(t,!0):s(t)}},335987:(t,e,r)=>{"use strict";r.d(e,{default:()=>n});const n=function(){return[]}},855385:(t,e,r)=>{var n=r(939340),a=r(9995),o=r(24654),u=new Uint32Array([3432918353,461845907]);function c(t,e){return t<<e|t>>>32-e}t.exports=function(t,e){if(e=e?0|e:0,"string"==typeof t&&(t=o(t)),!(t instanceof ArrayBuffer))throw new TypeError("Expected key to be ArrayBuffer or string");var r=new Uint32Array([e]);return function(t,e){
for(var r=t.byteLength/4|0,a=new Uint32Array(t,0,r),o=0;o<r;o++)a[o]=n(a[o],u[0]),a[o]=c(a[o],15),a[o]=n(a[o],u[1]),e[0]=e[0]^a[o],e[0]=c(e[0],13),e[0]=n(e[0],5)+3864292196}(t,r),function(t,e){var r=t.byteLength/4|0,a=t.byteLength%4,o=0,s=new Uint8Array(t,4*r,a);switch(a){case 3:o^=s[2]<<16;case 2:o^=s[1]<<8;case 1:o^=s[0]<<0,o=c(o=n(o,u[0]),15),o=n(o,u[1]),e[0]=e[0]^o}}(t,r),function(t,e){e[0]=e[0]^t.byteLength,e[0]=a(e[0])}(t,r),r.buffer}}}]);