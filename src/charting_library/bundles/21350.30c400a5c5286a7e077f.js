"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[21350],{552279:(e,t,n)=>{n.d(t,{reloginOrGoPro:()=>v,runOrGoPro:()=>d,runOrGoProWithoutSync:()=>c});var r=n(526225),o=n(508846),i=n(632446),a=n(833813);function s(e,t,n){return t.value||(0,i.enabled)(e,n)}function l(e,t,n){switch(e){case a.ProductFeatures.SCREENER_INTERVALS:return function(e,t){const n=(0,i.getConfig)(a.ProductFeatures.SCREENER_INTERVALS,t);return!(!n||!n.interval)&&n.interval.includes(e.interval)}(t,n);case a.ProductFeatures.SCREENER_AUTO_REFRESH:return s(a.ProductFeatures.SCREENER_AUTO_REFRESH,t,n);case a.ProductFeatures.ALERTS_NO_EXPIRATION:return s(a.ProductFeatures.ALERTS_NO_EXPIRATION,t,n);default:return(0,i.enabled)(e,n)}}var u=n(963644);function c(e,t,n,r){l(t,r)?e():(0,o.createGoProDialog)(n)}async function d(e,t,n,o={}){const i=window.is_authenticated;window.is_authenticated&&window.user.is_pro&&await(0,r.syncUserData)("gopro"),i===window.is_authenticated?c(e,t,n,o):(0,u.showSignModal)({source:n.goproSource,feature:n.feature,signinSuccess:e})}async function v(e){const t=window.is_authenticated;window.is_authenticated&&window.user.is_pro&&await(0,r.syncUserData)("gopro"),t===window.is_authenticated?(0,o.createGoProDialog)(e):(0,u.showSignModal)({source:e.goproSource,feature:e.feature})}},526225:(e,t,n)=>{n.r(t),n.d(t,{syncUserData:()=>c,syncUserConversionData:()=>d});var r=n(272001),o=n(345848),i=n(890740),a=n(152198);const s=(0,r.getLogger)("User.Sync");function l(e){return`${e}_${window.user&&window.user.username||""}`}function u(e,t,n){n!==window.user.pro_plan&&(window.user.pro_plan=n,window.user.is_pro=Boolean(n),(0,o.trackEvent)("Sync User Data","Different Pro Plan",l(e))),t!==window.is_authenticated&&(window.is_authenticated=t,window.loginStateChange.fire(),(0,o.trackEvent)("Sync User Data","Different Auth",l(e)))}async function c(e){try{u(e,!0,(await(0,a.getProPlanDetailsForUser)()).pro_plan)}catch(t){!function(e,t){403===t.status&&["not_authenticated","login_required"].includes(t.type||"")?u(e,!1,void 0):s.logError(t.message)}(e,t)}}async function d(e){const t=await(0,i.fetch)("/gopro/"),n=await t.json();return u(e,n.is_authenticated,n.user.pro_plan),n}},869862:(e,t,n)=>{var r;n.d(t,{AlertEditorAbortReason:()=>r}),function(e){e.AlertIsInvalid="alert-is-invalid",e.AlertsMaintenance="alerts-maintenance",e.ChartModelNotFound="chart-model-not-found",e.IsAlreadyPresent="is-already-present",e.MainSeriesIsATR="main-series-is-atr",e.MainSeriesIsInReplay="main-series-is-in-replay",e.MainSeriesIsOffline="main-series-is-offline",e.SourceIsDangerous="source-is-dangerous",e.SymbolInfoTimeout="symbol-info-timeout",e.SymbolIsInvalid="symbol-is-invalid",e.SymbolCurrencyConverted="symbol-currency-converted",e.SymbolUnitConverted="symbol-unit-converted",e.SymbolCurrencyAndUnitConverted="symbol-currency-and-unit-converted",e.SymbolIsEconomics="symbol-is-economics",e.UnsupportedResolution="unsupported-resolution",e.ManualAbort="manual-abort",e.MisleadingPriceScale="misleading-price-scale"}(r||(r={}))},494508:(e,t,n)=>{
n.d(t,{getAlertDialogType:()=>v,shouldAbortAlertEditor:()=>A,showAbortExplainingDialog:()=>f,ensureSeriesIsNotOffline:()=>g});var r=n(777754),o=n(779923),i=n(869862),a=n(720444),s=n(583912),l=n(948070),u=n(424122),c=n(552279),d=n(304241);function v(e){return e.alert?e.type||"edit_alert":"create_alert"}function A(e){var t;if(d.alertsMaintenanceTracker.value())return i.AlertEditorAbortReason.AlertsMaintenance;if(!e.alert&&!e.dataSourceHub)return i.AlertEditorAbortReason.ChartModelNotFound;if(!l.alertEditorInvocationHandler.isAllowedToInvoke(e))return i.AlertEditorAbortReason.IsAlreadyPresent;const n=null===(t=e.dataSourceHub)||void 0===t?void 0:t.mainSeries();if(n&&b(n))return i.AlertEditorAbortReason.MainSeriesIsOffline;if(n&&function(e){return 4===e.status()}(n))return i.AlertEditorAbortReason.SymbolIsInvalid;if(n&&n.isConvertedToOtherCurrency()&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;if(n&&n.isConvertedToOtherCurrency())return i.AlertEditorAbortReason.SymbolCurrencyConverted;if(n&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolUnitConverted;const r=v(e);if("create_alert"===r&&n&&function(e){const t=e.stateForAlert().styleInputs;return"style"in t&&"ATR"===t.style}(n))return i.AlertEditorAbortReason.MainSeriesIsATR;if("create_alert"===r&&n&&function(e){return e.isInReplay()}(n))return i.AlertEditorAbortReason.MainSeriesIsInReplay;if("create_alert"===r&&n&&function(e){return(0,a.isEconomicSymbol)(e.symbolInfo())}(n))return i.AlertEditorAbortReason.SymbolIsEconomics;const o=n?n.interval():s.linking.interval.value();return"create_alert"!==r||(0,u.canPlaceAlertOnResolution)(o)?null:i.AlertEditorAbortReason.UnsupportedResolution}function b(e){return 0===e.status()}function f(e,t){if(S.has(e))return;S.add(e);const a=()=>S.delete(e),s=function(e){return new Map([[i.AlertEditorAbortReason.UnsupportedResolution,"alertsOnSeconds"]]).get(e)||null}(e);if(s)return void(0,c.reloginOrGoPro)({feature:s,actionAfterClose:a});const l=function(e,t){const o=r.t(null,void 0,n(900850)),a=r.t(null,void 0,n(488322)),s=r.t(null,void 0,n(468988));return new Map([[i.AlertEditorAbortReason.AlertsMaintenance,{title:r.t(null,void 0,n(243322)),text:r.t(null,void 0,n(98333)),buttonText:s}],[i.AlertEditorAbortReason.MainSeriesIsOffline,{title:o,text:("create_alert"===t?r.t(null,void 0,n(680644)):r.t(null,void 0,n(878717)))+". "+r.t(null,void 0,n(443167))+".",buttonText:s}],[i.AlertEditorAbortReason.SymbolIsInvalid,{title:o,text:"create_alert"===t?r.t(null,void 0,n(396472)):r.t(null,void 0,n(601230)),buttonText:s}],[i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted,{title:r.t(null,void 0,n(535871)),text:"create_alert"===t?r.t(null,void 0,n(39546)):r.t(null,void 0,n(588989)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolCurrencyConverted,{title:r.t(null,void 0,n(203470)),text:"create_alert"===t?r.t(null,void 0,n(499303)):r.t(null,void 0,n(8180)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolUnitConverted,{
title:r.t(null,void 0,n(806212)),text:"create_alert"===t?r.t(null,void 0,n(433335)):r.t(null,void 0,n(615119)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolIsEconomics,{title:r.t(null,void 0,n(282076)),text:r.t(null,void 0,n(914407)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.MainSeriesIsATR,{title:r.t(null,void 0,n(347599)),text:r.t(null,void 0,n(862688)),buttonText:s}],[i.AlertEditorAbortReason.MainSeriesIsInReplay,{title:r.t(null,void 0,n(198447)),text:r.t(null,void 0,n(881565)),buttonText:r.t(null,void 0,n(875139))}]]).get(e)||{title:o,text:a,buttonText:s}}(e,t);(0,o.showWarning)({...l,onClose:a})}const S=new Set;function g(e){return new Promise((t=>{if(!b(e))return void t();const n=()=>{b(e)||(e.onStatusChanged().unsubscribe(null,n),t())};e.onStatusChanged().subscribe(null,n)}))}},821350:(e,t,n)=>{n.d(t,{invokeAlertEditor:()=>d,invokeAlertEditorWithOnlineSeries:()=>A});var r=n(494508),o=n(240158),i=n(869862),a=n(492534),s=n(272001),l=n(948070),u=n(304241);const c=(0,s.getLogger)("Alerts.Price.InvokeAlertEditor");function d(e){u.alertsMaintenanceTracker.sync();const t=(0,r.shouldAbortAlertEditor)(e);if(null!==t)return t!==i.AlertEditorAbortReason.IsAlreadyPresent&&(0,r.showAbortExplainingDialog)(t,(0,r.getAlertDialogType)(e)),c.logWarn(`Aborted: ${t}`),void(e.onAborted&&e.onAborted(t));const{unlockInvocation:a,abortSignal:s}=l.alertEditorInvocationHandler.lockInvocation(e);Promise.all([Promise.all([n.e(68716),n.e(57901),n.e(72975),n.e(25977),n.e(68647),n.e(80455),n.e(46913),n.e(16665),n.e(47342),n.e(98850),n.e(80653),n.e(55318),n.e(88777),n.e(66100),n.e(34063),n.e(89397),n.e(60273)]).then(n.t.bind(n,256869,19)),(0,o.getPriceAlertsDispatcher)(),v(e,a,s)]).then((e=>{const[t,n,r]=e;new t.AlertEditor(n,r)}),a)}function v(e,t,n){return(e.series?(0,a.hasUserAccessToDataSource)(e.series):Promise.resolve(!0)).then((r=>{const o=e.onDestroy,i={...e,abortSignal:n,onDestroy:()=>{t(),o&&o()}};return r||(delete i.series,delete i.value),i}))}function A(e){e.dataSourceHub?(0,r.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then((()=>{d(e)})):d(e)}},948070:(e,t,n)=>{n.d(t,{ALERT_DIALOG_CREATE_INVOCATION_ID:()=>s,alertEditorInvocationHandler:()=>u});var r=n(650151),o=n(988411),i=n.n(o),a=n(494508);const s=-1;class l{constructor(){this._state=new(i())(!1)}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}value(){return this._state.value()}abort(){this._state.setValue(!0)}}const u=new class{constructor(){this._dialogInvocations=new(i())(new Map)}getDialogInvocations(){return this._dialogInvocations}isAllowedToInvoke(e){return e.silent||!this._dialogInvocations.value().has(c(e))}lockInvocation(e){if(e.silent)return{unlockInvocation:()=>{}};const t=c(e),n=new l,r=new Map(this._dialogInvocations.value());return r.set(t,n),this._dialogInvocations.setValue(r),{abortSignal:n,unlockInvocation:()=>{const e=new Map(this._dialogInvocations.value());e.delete(t),this._dialogInvocations.setValue(e)}}}};function c(e){return"create_alert"===(0,
a.getAlertDialogType)(e)?s:(0,r.ensureDefined)(e.alert).id}},190096:(e,t,n)=>{n.d(t,{canPlaceAlertOnResolution:()=>a});var r=n(568450),o=n(632446),i=n(833813);function a(e){return!r.Interval.isSeconds(e)||(0,o.enabled)(i.ProductFeatures.ALERTS_ON_SECONDS)}},492534:(e,t,n)=>{function r(e){return i().then((t=>t.hasUserAccessToDataSource(e)))}function o(e){return i().then((t=>t.filterAccessibleDataSources(e)))}n.d(t,{hasUserAccessToDataSource:()=>r,filterAccessibleDataSources:()=>o});const i=()=>Promise.all([n.e(68716),n.e(57901),n.e(46061),n.e(98144),n.e(80455),n.e(14282),n.e(16665),n.e(47342),n.e(99670),n.e(98850),n.e(80653),n.e(55318),n.e(88777),n.e(34063),n.e(62726),n.e(83441)]).then(n.bind(n,323897))},424122:(e,t,n)=>{n.d(t,{canPlaceAlertOnResolution:()=>o.canPlaceAlertOnResolution,isAlertResolutionEqual:()=>i});var r=n(568450),o=n(190096);function i(e,t){return e.get("crossInterval")||r.Interval.isEqual(e.get("resolution"),t)}},152198:(e,t,n)=>{n.d(t,{getMinimalProPlanForFeature:()=>c,getProPlanDetailsForUser:()=>d});var r=n(960254),o=n(632446),i=n(833813),a=n(919490),s=n(890740),l=n(897649);function u(e){return window.pro?e===r.ProPlans.Free?-1:window.pro.getProduct((0,a.getProductForTrial)(e)).upgrade_weight:0}function c(e){const t=function(e){return Object.values(r.ProPlans).filter((t=>{const n=(0,o.getConfig)(e,(0,a.getProductForTrial)(t));return n&&!((0,a.isTrialProduct)(t)&&n[i.ProductFeatures.DISABLE_ON_TRIAL])}))}(e).filter((e=>!(0,a.isTrialProduct)(e)));return function(e){return e.sort(((e,t)=>u(e)-u(t)))}(t)[0]||null}async function d(){const e=await(0,s.fetch)("/pro-plans/profile/"),t=await e.json();if(e.ok)return t;if(403===e.status){const n=t;throw new l.ApiError(n.detail,e.status,n.code)}throw new Error(`Unable to handle unexpected response: ${String(e.text())}`)}}}]);