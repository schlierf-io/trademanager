(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[62403,78775],{286625:e=>{e.exports={"tv-spinner__container-rotate":"tv-spinner__container-rotate-OAzoNsnS"}},410864:(e,t,n)=>{"use strict";var r;n.d(t,{ToastIntent:()=>r}),function(e){e.Default="default",e.Success="success",e.Warning="warning",e.Danger="danger"}(r||(r={}))},223124:(e,t,n)=>{"use strict";n.d(t,{makeCancelable:()=>i,isCancelled:()=>o});class r{}function i(e){let t=!1;return{promise:new Promise(((n,i)=>{e.then((e=>t?i(new r):n(e))),e.catch((e=>i(t?new r:e)))})),cancel(){t=!0}}}function o(e){return e instanceof r}},500521:(e,t,n)=>{"use strict";e.exports.pushChartPage=async function(e){const{default:t}=await Promise.all([n.e(36037),n.e(36956),n.e(85783),n.e(4100),n.e(50251),n.e(43082),n.e(53444),n.e(25977),n.e(65460),n.e(81561),n.e(34629)]).then(n.t.bind(n,55244,23)),r=new t.ChartPage(e);TradingView.historyManager.push(r)}},607436:(e,t,n)=>{"use strict";n.d(t,{DEFAULT_SIZE:()=>r,spinnerSizeMap:()=>i});const r="large",i={mini:"xsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"}},941285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{renderSpinnerTemplate:()=>o,Spinner:()=>a});n(286625);var r=n(878134),i=n(607436);function o(e=""){return`<div class="tv-spinner ${e}" role="progressbar"></div>`}const s=(0,r.parseHtmlElement)(o());class a{constructor(e){this._shown=!1,this._el=s.cloneNode(!0),this.setSize(i.spinnerSizeMap[e||i.DEFAULT_SIZE])}spin(e){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=e,void 0!==e&&e.appendChild(this._el)),this._shown=!0,this}stop(e){return e&&void 0!==this._container&&this._container.removeChild(this._el),this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this}setStyle(e){return Object.keys(e).forEach((t=>{const n=e[t];void 0!==n&&this._el.style.setProperty(t,n)})),this}style(){return this._el.style}setSize(e){const t=void 0!==e?`tv-spinner--size_${e}`:"";return this._el.className=`tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`,this}getEl(){return this._el}destroy(){this.stop(),delete this._el,delete this._container}}},963239:(e,t,n)=>{"use strict";n.r(t),n.d(t,{copyToClipboard:()=>i,writeImpl:()=>o,writePromiseUsingApi:()=>a});var r=n(793993);function i(e){return o(e,null)}function o(e,t){const n=e.files&&e.files.length>0;if(!n&&t&&t.eventPhase>0)return s(t,e),Promise.resolve();if(!n){let t=!1;const n=n=>{n.stopImmediatePropagation(),s(n,e),t=!0};try{document.addEventListener("copy",n,!0),document.execCommand("copy")}finally{document.removeEventListener("copy",n,!0)}if(t)return Promise.resolve()}return async function(e){const t=(0,r.getClipboard)();if(!t||!t.write||!window.ClipboardItem)throw new DOMException("ClipboardApi is not supported","NotSupportedError");const n={};for(const t of e.files||[])n[t.type]=t;e.text&&(n["text/plain"]=e.text);e.html&&(n["text/html"]=e.html);return t.write([new window.ClipboardItem(n)])}(e)}function s(e,t){e.preventDefault();const n=e.clipboardData;t.text&&n.setData("text/plain",t.text),
t.html&&n.setData("text/html",t.html)}async function a(e,t){const n=(0,r.getClipboard)();if("text/plain"===t&&!n.write){const t=await e;return n.writeText(await t.text())}if(!n||!n.write||!window.ClipboardItem)throw new DOMException("ClipboardApi is not supported","NotSupportedError");let i=null;try{i=new window.ClipboardItem({[t]:e})}catch(n){i=new window.ClipboardItem({[t]:await e})}if(i)return n.write([i]);throw new Error("ClipboardApi is not supported")}},359663:(e,t,n)=>{"use strict";n.d(t,{FeatureToggleWatchedValue:()=>s});var r=n(125226),i=n(988411),o=n.n(i);class s extends(o()){constructor(e,t){super(function(e,t){return(0,r.isFeatureEnabled)(e)}(e)),(0,r.onFeaturesStateChanged)().subscribe(this,(t=>{e===t&&this.setValue((0,r.isFeatureEnabled)(e))}))}destroy(){(0,r.onFeaturesStateChanged)().unsubscribeAll(this)}}},793993:(e,t,n)=>{"use strict";function r(){var e;return null!==(e=navigator.androidClipboard)&&void 0!==e?e:navigator.clipboard}n.d(t,{getClipboard:()=>r})},470316:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Modifiers:()=>r.Modifiers,hashFromEvent:()=>r.hashFromEvent,hashShiftPlusEnter:()=>r.hashShiftPlusEnter,humanReadableHash:()=>r.humanReadableHash,humanReadableModifiers:()=>r.humanReadableModifiers,isMacKeyboard:()=>r.isMacKeyboard,modifiersFromEvent:()=>r.modifiersFromEvent});var r=n(591800)},207678:(e,t,n)=>{"use strict";n.d(t,{breakpoints:()=>r,mobileFirstBreakpoints:()=>i,mobileFirstLegacyBreakpoints:()=>o});const r={desktop:1/0,desktopHd:1919,phone:767,"phone-vertical":479,tablet:1019},i={base:0,"media-mf-phone-vertical":320,"media-mf-phone-landscape":568,"media-mf-tablet-vertical":768,"media-mf-tablet-landscape":1024,"media-mf-laptop":1280,"media-mf-desktop-medium":1440,"media-mf-desktop-large":1920,"media-mf-desktop-extra-large":2560},o={"media-mf-legacy-phone-vertical":330,"media-mf-legacy-phone":480,"media-mf-legacy-notebook":1020,"media-mf-legacy-desktop-medium":1480,"media-mf-legacy-desktop":1531}},76107:(e,t,n)=>{"use strict";n.d(t,{getScrollbarWidth:()=>r,matchMediaMinMax:()=>i,getContentWidth:()=>o,setStyle:()=>s,getCSSProperty:()=>a,getCSSPropertyNumericValue:()=>l});const r=(()=>{let e;return()=>{var t;if(void 0===e){const n=document.createElement("div"),r=n.style;r.visibility="hidden",r.width="100px",r.msOverflowStyle="scrollbar",document.body.appendChild(n);const i=n.offsetWidth;n.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",n.appendChild(o);const s=o.offsetWidth;null===(t=n.parentNode)||void 0===t||t.removeChild(n),e=i-s}return e}})();function i(e,t){return t===1/0?window.matchMedia(`(min-width: ${e}px)`):window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)}function o(e){return l(e,"width")-l(e,"padding-left")-l(e,"padding-right")}function s(e,t,n){null!==e&&e.style.setProperty(t,n)}function a(e,t){return getComputedStyle(e,null).getPropertyValue(t)}function l(e,t){return parseInt(a(e,t))}},850775:(e,t,n)=>{"use strict";n.d(t,{mediaState:()=>u});var r=n(685459),i=n.n(r),o=n(10571),s=n(207678),a=n(76107);class l extends(i()){
constructor(){super(),this.width=0,this.height=0,this.device=null,this.breakpoints=s.breakpoints,this._checkDevice(),window.addEventListener("resize",this._checkDevice),Object.entries(s.breakpoints).sort((([e,t],[n,r])=>t-r)).forEach((([e,t],n,r)=>{let i;if(0!==n){const[,e]=r[n-1];i=e+1}else i=0;const o=(0,a.matchMediaMinMax)(i,t);o.matches&&this._setNewDevice(e),o.addListener((t=>{t.matches&&(this._checkDevice(),this._setNewDevice(e))}))})),(0,o.whenDocumentReady)(this._checkDevice.bind(this)),this.isPhoneSizeDevice.bind(this)}isPhoneSizeDevice(){return"phone"===this.device||"phone-vertical"===this.device}_checkDevice(){this.width=window.innerWidth,this.height=window.innerHeight}_setNewDevice(e){const t=this.device;this.device=e,this.trigger("changeDevice",[e,t])}}const u=new l},526225:(e,t,n)=>{"use strict";n.d(t,{syncUserData:()=>c,syncUserConversionData:()=>d});var r=n(272001),i=n(345848),o=n(890740),s=n(152198);const a=(0,r.getLogger)("User.Sync");function l(e){return`${e}_${window.user&&window.user.username||""}`}function u(e,t,n){n!==window.user.pro_plan&&(window.user.pro_plan=n,window.user.is_pro=Boolean(n),(0,i.trackEvent)("Sync User Data","Different Pro Plan",l(e))),t!==window.is_authenticated&&(window.is_authenticated=t,window.loginStateChange.fire(),(0,i.trackEvent)("Sync User Data","Different Auth",l(e)))}async function c(e){try{u(e,!0,(await(0,s.getProPlanDetailsForUser)()).pro_plan)}catch(t){!function(e,t){403===t.status&&["not_authenticated","login_required"].includes(t.type||"")?u(e,!1,void 0):a.logError(t.message)}(e,t)}}async function d(e){const t=await(0,o.fetch)("/gopro/"),n=await t.json();return u(e,n.is_authenticated,n.user.pro_plan),n}},86746:(e,t,n)=>{"use strict";n.r(t),n.d(t,{StdTheme:()=>a.StdTheme,getStdThemeNames:()=>u,getStdChartTheme:()=>c,translateThemeName:()=>d,isStdTheme:()=>h,getThemeNameIfStdTheme:()=>p});var r=n(777754),i=n(724377),o=n(979706),s=n(746518),a=n(61499);function l(){return{[a.StdTheme.Light]:JSON.parse(JSON.stringify(o)),[a.StdTheme.Dark]:JSON.parse(JSON.stringify(s))}}function u(){return[a.StdTheme.Light,a.StdTheme.Dark]}function c(e){return l()[e]}function d(e){return{[a.StdTheme.Light]:r.t(null,{context:"colorThemeName"},n(669841)),[a.StdTheme.Dark]:r.t(null,{context:"colorThemeName"},n(14642))}[e]||e}function h(e){const t=l();return u().some((n=>f(t[n],e)))}function p(e){const t=l(),n=u();for(const r of n)if(f(t[r],e))return r;return null}function f(e,t){let n=e.content===t.content;return function(e={},t){try{v(e,[],t)}catch(e){return}}(e.content,((e,r)=>{const o=function(e,t={}){let n=t;for(let t=0;t<e.length;t++){if(!n||"object"!=typeof n)return;n=n[e[t]]}if("string"==typeof n||"number"==typeof n)return n;return}(e,t.content);return n=function(e,t){if(e===t)return!0;if("string"!=typeof e||"string"!=typeof t)return!1;try{return function(e,t){return Math.hypot(e[3]*e[0]-t[3]*t[0],e[3]*e[1]-t[3]*t[1],e[3]*e[2]-t[3]*t[2],255*e[3]-255*t[3])<48}((0,i.parseRgba)(e),(0,i.parseRgba)(t))}catch(e){}return!1}(r,o),!n})),n}function v(e,t,n){
for(const r in e)if(e.hasOwnProperty(r)){const i=t.concat(r);if("object"==typeof e[r])v(e[r],i,n);else if(n(i,e[r]))throw new Error("exit")}}},869862:(e,t,n)=>{"use strict";var r;n.d(t,{AlertEditorAbortReason:()=>r}),function(e){e.AlertIsInvalid="alert-is-invalid",e.AlertsMaintenance="alerts-maintenance",e.ChartModelNotFound="chart-model-not-found",e.IsAlreadyPresent="is-already-present",e.MainSeriesIsATR="main-series-is-atr",e.MainSeriesIsInReplay="main-series-is-in-replay",e.MainSeriesIsOffline="main-series-is-offline",e.SourceIsDangerous="source-is-dangerous",e.SymbolInfoTimeout="symbol-info-timeout",e.SymbolIsInvalid="symbol-is-invalid",e.SymbolCurrencyConverted="symbol-currency-converted",e.SymbolUnitConverted="symbol-unit-converted",e.SymbolCurrencyAndUnitConverted="symbol-currency-and-unit-converted",e.SymbolIsEconomics="symbol-is-economics",e.UnsupportedResolution="unsupported-resolution",e.ManualAbort="manual-abort",e.MisleadingPriceScale="misleading-price-scale"}(r||(r={}))},494508:(e,t,n)=>{"use strict";n.d(t,{getAlertDialogType:()=>h,shouldAbortAlertEditor:()=>p,showAbortExplainingDialog:()=>v,ensureSeriesIsNotOffline:()=>b});var r=n(777754),i=n(779923),o=n(869862),s=n(720444),a=n(583912),l=n(948070),u=n(424122),c=n(31214),d=n(304241);function h(e){return e.alert?e.type||"edit_alert":"create_alert"}function p(e){var t;if(d.alertsMaintenanceTracker.value())return o.AlertEditorAbortReason.AlertsMaintenance;if(!e.alert&&!e.dataSourceHub)return o.AlertEditorAbortReason.ChartModelNotFound;if(!l.alertEditorInvocationHandler.isAllowedToInvoke(e))return o.AlertEditorAbortReason.IsAlreadyPresent;const n=null===(t=e.dataSourceHub)||void 0===t?void 0:t.mainSeries();if(n&&f(n))return o.AlertEditorAbortReason.MainSeriesIsOffline;if(n&&function(e){return 4===e.status()}(n))return o.AlertEditorAbortReason.SymbolIsInvalid;if(n&&n.isConvertedToOtherCurrency()&&n.isConvertedToOtherUnit())return o.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;if(n&&n.isConvertedToOtherCurrency())return o.AlertEditorAbortReason.SymbolCurrencyConverted;if(n&&n.isConvertedToOtherUnit())return o.AlertEditorAbortReason.SymbolUnitConverted;const r=h(e);if("create_alert"===r&&n&&function(e){const t=e.stateForAlert().styleInputs;return"style"in t&&"ATR"===t.style}(n))return o.AlertEditorAbortReason.MainSeriesIsATR;if("create_alert"===r&&n&&function(e){return e.isInReplay()}(n))return o.AlertEditorAbortReason.MainSeriesIsInReplay;if("create_alert"===r&&n&&function(e){return(0,s.isEconomicSymbol)(e.symbolInfo())}(n))return o.AlertEditorAbortReason.SymbolIsEconomics;const i=n?n.interval():a.linking.interval.value();return"create_alert"!==r||(0,u.canPlaceAlertOnResolution)(i)?null:o.AlertEditorAbortReason.UnsupportedResolution}function f(e){return 0===e.status()}function v(e,t){if(m.has(e))return;m.add(e);const s=()=>m.delete(e),a=function(e){return new Map([[o.AlertEditorAbortReason.UnsupportedResolution,"alertsOnSeconds"]]).get(e)||null}(e);if(a)return void(0,c.reloginOrGoPro)({feature:a,actionAfterClose:s});const l=function(e,t){
const i=r.t(null,void 0,n(900850)),s=r.t(null,void 0,n(488322)),a=r.t(null,void 0,n(468988));return new Map([[o.AlertEditorAbortReason.AlertsMaintenance,{title:r.t(null,void 0,n(243322)),text:r.t(null,void 0,n(98333)),buttonText:a}],[o.AlertEditorAbortReason.MainSeriesIsOffline,{title:i,text:("create_alert"===t?r.t(null,void 0,n(680644)):r.t(null,void 0,n(878717)))+". "+r.t(null,void 0,n(443167))+".",buttonText:a}],[o.AlertEditorAbortReason.SymbolIsInvalid,{title:i,text:"create_alert"===t?r.t(null,void 0,n(396472)):r.t(null,void 0,n(601230)),buttonText:a}],[o.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted,{title:r.t(null,void 0,n(535871)),text:"create_alert"===t?r.t(null,void 0,n(39546)):r.t(null,void 0,n(588989)),buttonText:r.t(null,void 0,n(875139))}],[o.AlertEditorAbortReason.SymbolCurrencyConverted,{title:r.t(null,void 0,n(203470)),text:"create_alert"===t?r.t(null,void 0,n(499303)):r.t(null,void 0,n(8180)),buttonText:r.t(null,void 0,n(875139))}],[o.AlertEditorAbortReason.SymbolUnitConverted,{title:r.t(null,void 0,n(806212)),text:"create_alert"===t?r.t(null,void 0,n(433335)):r.t(null,void 0,n(615119)),buttonText:r.t(null,void 0,n(875139))}],[o.AlertEditorAbortReason.SymbolIsEconomics,{title:r.t(null,void 0,n(282076)),text:r.t(null,void 0,n(914407)),buttonText:r.t(null,void 0,n(875139))}],[o.AlertEditorAbortReason.MainSeriesIsATR,{title:r.t(null,void 0,n(347599)),text:r.t(null,void 0,n(862688)),buttonText:a}],[o.AlertEditorAbortReason.MainSeriesIsInReplay,{title:r.t(null,void 0,n(198447)),text:r.t(null,void 0,n(881565)),buttonText:r.t(null,void 0,n(875139))}]]).get(e)||{title:i,text:s,buttonText:a}}(e,t);(0,i.showWarning)({...l,onClose:s})}const m=new Set;function b(e){return new Promise((t=>{if(!f(e))return void t();const n=()=>{f(e)||(e.onStatusChanged().unsubscribe(null,n),t())};e.onStatusChanged().subscribe(null,n)}))}},821350:(e,t,n)=>{"use strict";n.d(t,{invokeAlertEditor:()=>d,invokeAlertEditorWithOnlineSeries:()=>p});var r=n(494508),i=n(240158),o=n(869862),s=n(492534),a=n(272001),l=n(948070),u=n(304241);const c=(0,a.getLogger)("Alerts.Price.InvokeAlertEditor");function d(e){u.alertsMaintenanceTracker.sync();const t=(0,r.shouldAbortAlertEditor)(e);if(null!==t)return t!==o.AlertEditorAbortReason.IsAlreadyPresent&&(0,r.showAbortExplainingDialog)(t,(0,r.getAlertDialogType)(e)),c.logWarn(`Aborted: ${t}`),void(e.onAborted&&e.onAborted(t));const{unlockInvocation:s,abortSignal:a}=l.alertEditorInvocationHandler.lockInvocation(e);Promise.all([Promise.all([n.e(68716),n.e(57901),n.e(72975),n.e(25977),n.e(722),n.e(68647),n.e(37989),n.e(16665),n.e(58724),n.e(77025),n.e(80653),n.e(44112),n.e(4912),n.e(84566),n.e(56137),n.e(71690),n.e(76243),n.e(69747),n.e(86772),n.e(58189),n.e(60273)]).then(n.t.bind(n,256869,19)),(0,i.getPriceAlertsDispatcher)(),h(e,s,a)]).then((e=>{const[t,n,r]=e;new t.AlertEditor(n,r)}),s)}function h(e,t,n){return(e.series?(0,s.hasUserAccessToDataSource)(e.series):Promise.resolve(!0)).then((r=>{const i=e.onDestroy,o={...e,abortSignal:n,onDestroy:()=>{t(),i&&i()}};return r||(delete o.series,
delete o.value),o}))}function p(e){e.dataSourceHub?(0,r.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then((()=>{d(e)})):d(e)}},597922:(e,t,n)=>{"use strict";n.d(t,{createLayout:()=>a,layoutInitialSizingState:()=>u});var r=n(203308),i=n(822914),o=n(650151);function s(e,t,n){const r=new Set;if("number"==typeof e)return r.add(e),{indices:r,smallestIndex:e,sizer:e=>e,splitters:()=>[],resizeApplier:(e,t,n,r,i)=>i,syncSublayoutsBySplitter:(e,t)=>t};const a=e[0],l=e.slice(1).map((e=>s(e,t)));let u=1/0;for(const e of l)for(const t of Array.from(e.indices))t<u&&(u=t),r.add(t);const c=(e,t,n,r,i,o,s,a)=>{const l="h"===s?e.width:e.height;let u,c,d;if(a){const e=t*n+r*l;u=Math.round(e),c=t===o-1?l-u-1:Math.round(e+i*l)-u}else{const e=(l-(o-1)*n)/o,r=t*(e+n);u=Math.round(r),c=Math.round(r+e)-u}return d="h"===s?{top:e.top,left:e.left+u,height:e.height,width:c}:{top:e.top+u,left:e.left,height:c,width:e.width},d},d=(e,t,n,r,i,o,s)=>{if("number"==typeof n)return[];const a=n[0],l=n.slice(1);return l.reduce(((n,u,h)=>{var p;const f=null==s?void 0:s[h],v=null!==(p=null==f?void 0:f.percent)&&void 0!==p?p:1/l.length,m=c(e,h,t,n.sumOfCoeffsBefore,v,l.length,a,s),b=n.sumOfCoeffsBefore+v;if(h<l.length-1){const e=`${o}-${r}-${h}-${a}`;let t;t="v"===a?{left:m.left,top:m.top+m.height-6+1,width:m.width,height:12}:{left:m.left+m.width-6+1,top:m.top,width:12,height:m.height};const s={level:r,orientation:a,indexes:[...i,h],metrics:t,className:e};n.splitters.push(s)}return Array.isArray(u)?{splitters:n.splitters.concat(d(m,t,u,r+1,[...i,h],o,null==f?void 0:f.substate)),sumOfCoeffsBefore:b}:{splitters:n.splitters,sumOfCoeffsBefore:b}}),{splitters:[],sumOfCoeffsBefore:0}).splitters};function h(e,t,n,r,i,s,l,u){if("number"==typeof r)return s;const d=r.slice(1),p=[0];for(let e=0;e<d.length;e++)p.push(p[p.length-1]+s[e].percent);if(l<i.level)return d.map(((r,f)=>{var v;const m=null==s?void 0:s[f];if("number"==typeof r)return m;if(!u&&f!==i.indexes[l])return m;const b=null!==(v=null==m?void 0:m.percent)&&void 0!==v?v:1/d.length,g=c(e,f,t,p[f],b,d.length,a,s);return{percent:m.percent,substate:h(g,t,n,r,i,(0,o.ensureDefined)(m.substate),l+1,u)}}));{const t=r[0];if(t!==i.orientation||s.length<2)return s;const o=Math.min(i.indexes[l],s.length-2),a="v"===t?e.height:e.width,u=n/a,c=s[o].percent+s[o+1].percent;return s[o].percent+=u,s[o].percent=Math.min(c-.05,Math.max(.05,s[o].percent)),s[o+1].percent-=u,s[o+1].percent=Math.min(c-.05,Math.max(.05,s[o+1].percent)),s}}function p(e,t){if(1===e.length)return t;{const n=(0,o.ensureDefined)(t[e[0]].substate);return p(e.slice(1),n)}}function f(e,t,n,r,s){if("number"==typeof e)return n;const a=e.slice(1);if(s<t.level)return a.map(((e,i)=>{const a=null==n?void 0:n[i];return"number"==typeof e?a:{percent:a.percent,substate:f(e,t,(0,o.ensureDefined)(a.substate),r,s+1)}}));{const e=t.indexes[s];if(r.length<n.length){const e=(0,i.default)(r),t=e[e.length-1].percent,o=n.length-e.length,s=t/(o+1);e[e.length-1].percent=s;for(let t=0;t<o;t++)e.push({percent:s});r=e}else if(r.length>n.length){const t=(0,i.default)(r)
;if(e>=n.length-1){const e=r.length-n.length;for(let n=0;n<e;n++)t[e].percent+=t[n].percent;t.splice(0,e)}else{for(let e=n.length;e<r.length;e++)t[n.length-1].percent+=t[e].percent;t.splice(n.length)}r=t}return n.forEach(((e,t)=>e.percent=r[t].percent)),n}}return{indices:r,smallestIndex:u,sizer:(e,t,n,r,i)=>{let o,s,u,d=0,h=0,p=0;for(let e=0;e<l.length;e++){const r=l[e];r.smallestIndex>=n||(r.indices.has(t)&&(o=r,u=null==i?void 0:i[e].substate,i&&(p=i[e].percent),s=d),d++,i&&0===p&&(h+=i[e].percent))}const f=c(e,s,r,h,p,d,a,i);return o.sizer(f,t,n,r,u)},splitters:(t,n,r)=>d(t,n,e,0,[],"",r),resizeApplier:(t,n,r,i,o,s)=>h(t,n,r,e,i,o,0,s),syncSublayoutsBySplitter:function(t,n){const r=p(t.indexes,n);return f(e,t,n,r,0)}}}function a(e,t,n){const r=s(e,t);return{title:n,count:r.indices.size,sizer:r.sizer,splitters:r.splitters,resizeApplier:r.resizeApplier,syncSublayoutsBySplitter:r.syncSublayoutsBySplitter,expression:e,layoutType:t}}function l(e){return e.map((t=>{if((0,r.default)(t))return{percent:1/e.length};{const n=t.slice(1);return{percent:1/e.length,substate:l(n)}}}))}function u(e){return l(e.slice(1))}},598104:(e,t,n)=>{"use strict";n.r(t),n.d(t,{layouts:()=>a,isSingleLayout:()=>l,isMultipleLayout:()=>u,isSupportedLayout:()=>c,tryGuessingTheMostSuitableLayout:()=>d});var r=n(110123),i=n(597922);const o={s:{title:"1 chart",count:1,layoutType:"s",sizer:(e,t)=>{if(0!==t)throw new RangeError("invalid index");return e},splitters:()=>[],resizeApplier:(e,t,n,r,i)=>i,syncSublayoutsBySplitter:(e,t)=>t,expression:["h",0]}};let s;s={"2h":(0,i.createLayout)(r["2h"],"2h","2-up horizontal"),"2v":(0,i.createLayout)(r["2v"],"2v","2-up vertical"),"2-1":(0,i.createLayout)(r["2-1"],"2-1","2 at top and 1 at bottom"),"1-2":(0,i.createLayout)(r["1-2"],"1-2","1 at top and 2 at bottom"),"3s":(0,i.createLayout)(r["3s"],"3s","3-up stacked"),"3r":(0,i.createLayout)(r["3r"],"3r","3-up stacked left"),"3h":(0,i.createLayout)(r["3h"],"3h","3-up horizontal"),"3v":(0,i.createLayout)(r["3v"],"3v","3-up vertical"),4:(0,i.createLayout)(r[4],"4","4-up"),"4h":(0,i.createLayout)(r["4h"],"4h","4-up horizontal"),"4v":(0,i.createLayout)(r["4v"],"4v","4-up vertical"),"4s":(0,i.createLayout)(r["4s"],"4s","4-up stacked"),"5h":(0,i.createLayout)(r["5h"],"5h","5-up horizontal"),"6h":(0,i.createLayout)(r["6h"],"6h","6-up horizontal"),"7h":(0,i.createLayout)(r["7h"],"7h","7-up horizontal"),"8h":(0,i.createLayout)(r["8h"],"8h","8-up horizontal"),"2-2":(0,i.createLayout)(r["2-2"],"2-2","2 at top and 2 at bottom"),"2-3":(0,i.createLayout)(r["2-3"],"2-3","2 at top and 3 at bottom"),"1-3":(0,i.createLayout)(r["1-3"],"1-3","1 at top and 3 at bottom"),"1-4":(0,i.createLayout)(r["1-4"],"1-4","1 at top and 4 at bottom"),"5s":(0,i.createLayout)(r["5s"],"5s","5-up stacked"),6:(0,i.createLayout)(r[6],"6","6-up"),"6c":(0,i.createLayout)(r["6c"],"6c","6-up in two columns"),8:(0,i.createLayout)(r[8],"8","8-up"),"8c":(0,i.createLayout)(r["8c"],"8c","8-up in two columns")};const a={...o,...s};function l(e){return"s"===e}function u(e){return!l(e)}function c(e){
return l(e)||s.hasOwnProperty(e)}function d(e){const t=/(\d)-(\d)/.exec(e);let n=1;for(n=3===(null==t?void 0:t.length)?parseInt(t[1])+parseInt(t[2]):parseInt(e);n>1;){const e=Object.keys(s).find((e=>s[e].count===n));if(e)return e;n--}return"s"}},547e3:(e,t,n)=>{"use strict";n.d(t,{canShowSpreadActions:()=>i,globalKeypressMatches:()=>o});n(87476),n(991826),n(583912);var r=n(516986);new RegExp("^"+r.types.QUANDL,"i");function i(){let e=!1;return e="cme"!==window.TradingView.widgetCustomer&&"bovespa"!==window.TradingView.widgetCustomer,e}function o(e){if(e.ctrlKey)return!1;if(e.metaKey)return!1;if(!e.charCode)return!1;if(!e.which||e.which<=32)return!1;const t=e.target;if(t&&(/^(input|textarea)$/i.test(t.tagName)||"listbox"===t.getAttribute("role")))return!1;{const e=n.c[839694];if(e&&e.exports.isOpenedModals())return!1}return!0}},522227:(e,t,n)=>{"use strict";function r(){return Promise.all([n.e(83578),n.e(189),n.e(17391),n.e(54845),n.e(88230),n.e(86256),n.e(91901),n.e(59333),n.e(63980),n.e(18619),n.e(7624),n.e(12275),n.e(33335),n.e(96972),n.e(71140),n.e(83772),n.e(1428),n.e(1011),n.e(54819),n.e(75398),n.e(6092),n.e(52701),n.e(78707),n.e(63737),n.e(59302),n.e(54063),n.e(68825),n.e(47507),n.e(95248),n.e(45639),n.e(82098),n.e(15856),n.e(89619),n.e(288),n.e(50500),n.e(27563),n.e(37845),n.e(20894),n.e(77502),n.e(40429),n.e(52196),n.e(21834),n.e(50690),n.e(30979),n.e(26300),n.e(29594),n.e(47693),n.e(52024),n.e(73959),n.e(17236),n.e(50186),n.e(44810),n.e(34335),n.e(21754)]).then(n.bind(n,837490))}n.d(t,{loadNewSymbolSearch:()=>r})},948070:(e,t,n)=>{"use strict";n.d(t,{alertEditorInvocationHandler:()=>l});var r=n(650151),i=n(988411),o=n.n(i),s=n(494508);class a{constructor(){this._state=new(o())(!1)}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}value(){return this._state.value()}abort(){this._state.setValue(!0)}}const l=new class{constructor(){this._dialogInvocations=new(o())(new Map)}getDialogInvocations(){return this._dialogInvocations}isAllowedToInvoke(e){return e.silent||!this._dialogInvocations.value().has(u(e))}lockInvocation(e){if(e.silent)return{unlockInvocation:()=>{}};const t=u(e),n=new a,r=new Map(this._dialogInvocations.value());return r.set(t,n),this._dialogInvocations.setValue(r),{abortSignal:n,unlockInvocation:()=>{const e=new Map(this._dialogInvocations.value());e.delete(t),this._dialogInvocations.setValue(e)}}}};function u(e){return"create_alert"===(0,s.getAlertDialogType)(e)?-1:(0,r.ensureDefined)(e.alert).id}},304241:(e,t,n)=>{"use strict";n.d(t,{alertsMaintenanceTracker:()=>a});var r=n(988411),i=n.n(r),o=n(125226),s=n(359663);const a=new class{constructor(){this._state=new(i())((0,o.isFeatureEnabled)("alerts-maintenance")),this._maintenanceFeatureState=new s.FeatureToggleWatchedValue("alerts-maintenance",this._state.value()),this._autoreloadWidgetsFeatureState=new s.FeatureToggleWatchedValue("alerts-maintenance-autoreload-widgets",!1),this._unsetMaintenanceTimeoutId=null,this._maintenanceFeatureState.subscribe((e=>{
!e&&this._autoreloadWidgetsFeatureState.value()&&(this._unsetMaintenanceTimeoutId=setTimeout((()=>this.sync()),function(){const e=3e4,t=18e5;return Math.floor(Math.random()*(t-e)+e)}()))})),this._autoreloadWidgetsFeatureState.subscribe((e=>{e||this._clearMaintenanceUnsetTimeout()}))}value(){return this._state.value()}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}sync(){this._clearMaintenanceUnsetTimeout(),this._state.setValue((0,o.isFeatureEnabled)("alerts-maintenance"))}_clearMaintenanceUnsetTimeout(){this._unsetMaintenanceTimeoutId&&(clearTimeout(this._unsetMaintenanceTimeoutId),this._unsetMaintenanceTimeoutId=null)}}},190096:(e,t,n)=>{"use strict";n.d(t,{canPlaceAlertOnResolution:()=>s});var r=n(568450),i=n(778016),o=n(833813);function s(e){return!r.Interval.isSeconds(e)||(0,i.enabled)(o.ProductFeatures.ALERTS_ON_SECONDS)}},492534:(e,t,n)=>{"use strict";function r(e){return o().then((t=>t.hasUserAccessToDataSource(e)))}function i(e){return o().then((t=>t.filterAccessibleDataSources(e)))}n.d(t,{hasUserAccessToDataSource:()=>r,filterAccessibleDataSources:()=>i});const o=()=>Promise.all([n.e(68716),n.e(57901),n.e(46061),n.e(98144),n.e(722),n.e(37989),n.e(16665),n.e(58724),n.e(77025),n.e(80653),n.e(44112),n.e(84566),n.e(56137),n.e(76243),n.e(98709),n.e(86772),n.e(83441)]).then(n.bind(n,323897))},424122:(e,t,n)=>{"use strict";n.d(t,{canPlaceAlertOnResolution:()=>i.canPlaceAlertOnResolution,isAlertResolutionEqual:()=>o});var r=n(568450),i=n(190096);function o(e,t){return e.get("crossInterval")||r.Interval.isEqual(e.get("resolution"),t)}},233388:(e,t,n)=>{"use strict";n.d(t,{pushBackListener:()=>l,disable:()=>u,enable:()=>c});var r=n(777491);const i=[];let o=null;function s(e){for(let t=0;t<i.length;t++)if(i[t].name===e)return t;return-1}function a(e){if(!o)for(let t=i.length-1;t>=0&&!0!==i[t].func(e);t--);}function l(e,t){const n={name:e,func:t},r=s(n.name);r>-1&&i.splice(r,1),i.unshift(n)}function u(){return o?null:(o=(0,r.randomHashN)(4),o)}function c(e){if(e!==o)throw Error("Lock id is outdated");o=null}window.addEventListener("keypress",a,!1)},628763:(e,t,n)=>{"use strict";n.d(t,{Worker:()=>r});class r extends Worker{constructor(e,t){super(function(e){const t=new URL(e),r=new Blob(["self.WEBPACK_PUBLIC_PATH=",JSON.stringify(new URL(n.p,location.href).href),";\n","self.locale=",JSON.stringify(n.g.locale),";\n",window.language?`self.language=${JSON.stringify(window.language)};\n`:"","importScripts(",JSON.stringify(t.href),");"],{type:"application/javascript"});return URL.createObjectURL(r)}(e),t)}}},201457:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.111 18.5H10.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8.389z"/><path d="M18.5 20v1.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H8"/></g></svg>'},110123:e=>{"use strict"
;e.exports=JSON.parse('{"4":["v",["h",0,2],["h",1,3]],"6":["v",["h",0,2,4],["h",1,3,5]],"8":["v",["h",0,2,4,6],["h",1,3,5,7]],"2h":["h",0,1],"2v":["v",0,1],"2-1":["v",["h",0,2],1],"3s":["h",0,["v",1,2]],"3h":["h",0,1,2],"3v":["v",0,1,2],"1-2":["v",0,["h",1,2]],"3r":["h",["v",0,1],2],"4h":["h",0,1,2,3],"4v":["v",0,1,2,3],"4s":["h",0,["v",1,2,3]],"5h":["h",0,1,2,3,4],"6h":["h",0,1,2,3,4,5],"7h":["h",0,1,2,3,4,5,6],"8h":["h",0,1,2,3,4,5,6,7],"1-3":["v",0,["h",1,2,3]],"2-2":["v",["h",0,1],["v",2,3]],"2-3":["v",["h",0,1],["h",2,3,4]],"1-4":["v",0,["h",1,2,3,4]],"5s":["h",0,["v",1,2,3,4]],"6c":["v",["h",0,1],["h",2,3],["h",4,5]],"8c":["v",["h",0,1],["h",2,3],["h",4,5],["h",6,7]],"s":0}')}}]);