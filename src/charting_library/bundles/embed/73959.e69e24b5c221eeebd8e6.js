(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[73959],{645469:e=>{e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","small-height-breakpoint":"screen and (max-height: 360px)","tablet-small-breakpoint":"screen and (max-width: 430px)"}},559986:(e,t,s)=>{"use strict";s.d(t,{LIST_START:()=>o,getTargetIndex:()=>n});const o=Symbol();function n(e,t,s){const n=void 0===s?void 0!==t?e.indexOf(t):void 0:s===o?0:e.indexOf(s)+1;return-1!==n?n:void 0}},199669:(e,t,s)=>{"use strict";function o(e){const{id:t,event:s,channel:o,filter:n}=e;return e=>(o.on(s,(s=>{const{action:o,emitter:r}=JSON.parse(s);r!==t&&n(o)&&e.dispatch({...o,payload:{...o.payload,silent:!0}})})),e=>r=>{const i=e(r);return n(r)&&(r.payload.silent||o.emit(s,JSON.stringify({action:r,emitter:t}))),i})}s.d(t,{createCrossTabSyncMiddleware:()=>o})},797035:(e,t,s)=>{"use strict";s.d(t,{ListColor:()=>o,LIST_COLORS:()=>m,isListColor:()=>d,markMany:()=>_,setup:()=>S,reset:()=>f,remove:()=>v,rename:()=>C,changeDescription:()=>L,renameSeparator:()=>w,shiftCommand:()=>N,share:()=>k,reducer:()=>O,createCrossTabSyncMiddleware:()=>M,getSymbolColor:()=>x,getListByColor:()=>D,getSymbolsByColor:()=>T,getCommands:()=>P,getTimestamp:()=>E});var o,n=s(826300),r=s(438253),i=s(650151),l=s(199669),a=s(50991),c=s(340958),h=s(173777),u=s(559986);!function(e){e.Red="red",e.Blue="blue",e.Green="green",e.Orange="orange",e.Purple="purple",e.Cyan="cyan",e.Pink="pink"}(o||(o={}));const m=[o.Red,o.Blue,o.Green,o.Orange,o.Purple,o.Cyan,o.Pink];function d(e){return new Set(m).has(e)}const y={lists:{colors:[],byColor:{},bySymbol:{}},commands:[],timestamp:null};function p(e,t){const{lists:s}=e,o=s.byColor[t];o&&0===o.symbols.length&&(s.colors=s.colors.filter((e=>e!==t)))}function b(e){return(0,h.isSeparatorItem)(e)}const g=(0,n.createSlice)({name:"marked-lists",initialState:y,reducers:{setup:(e,t)=>{const{lists:s,timestamp:o}=t.payload,n={lists:{colors:[],byColor:{},bySymbol:{}},commands:[],timestamp:null};n.timestamp=o;for(const e of function(e,t){return[...e].sort(((e,s)=>t.indexOf(e.color)-t.indexOf(s.color)))}(s,m)){const t=e.symbols.filter((t=>void 0===n.lists.bySymbol[t]&&(b(t)||(n.lists.bySymbol[t]=e.color),!0)));n.lists.byColor[e.color]={color:e.color,name:e.name,description:e.description,shared:e.shared,symbols:t},t.length>0&&n.lists.colors.push(e.color)}return n},remove:(e,t)=>{const{color:s,symbols:o,silent:n}=t.payload,{lists:l,commands:a}=e,h=l.byColor[s];if(void 0===h||0===h.symbols.length)return;const u=new Set(o),m=h.symbols.filter((e=>!u.has(e)));if(!(0,c.equalArrays)(m,h.symbols)){h.symbols=m;for(const e of u)delete l.bySymbol[e];n||a.push({type:"remove",color:s,symbols:[...u],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}),p(e,s)}},markMany:(e,t)=>{const{color:s,before:o,silent:n}=t.payload,{lists:l,commands:a}=e,{unique:h,exclusions:m}=function(e,t){var s;const{color:o,symbols:n,separators:r}=t.payload,{lists:l}=e,a={},c=new Set,h=e=>b(e)?((0,i.assert)(null!==o),o):l.bySymbol[e];for(let e=0;e<n.length;++e){const t=n[e]
;if(c.has(t)||b(t)&&!r)continue;c.add(t);const o=h(t);void 0!==o&&(a[o]=null!==(s=a[o])&&void 0!==s?s:new Set).add(t)}return{exclusions:a,unique:c}}(e,t);if(0===h.size)return;const d=function(e,t,s,o){const{color:n,before:r}=t.payload,{lists:i}=e;let l;if(null!==n&&void 0!==r&&s.has(r)){const e=i.byColor[n];if(void 0!==e){l=o;for(let t=e.symbols.indexOf(r);t>=0;--t)if(!s.has(e.symbols[t])){l=e.symbols[t];break}}}return l}(e,t,h,u.LIST_START);if(null!==s&&void 0!==m[s]&&1===Object.keys(m).length){const t=l.byColor[s];(0,i.assert)(void 0!==t);const y=t.symbols.filter((e=>!h.has(e))),g=(0,u.getTargetIndex)(y,o,d);if(void 0===g?y.push(...h):y.splice(g,0,...h),(0,c.equalArrays)(y,t.symbols))return;{const o=m[s];(0,i.assert)(void 0!==o),t.symbols=y;for(const e of o)delete l.bySymbol[e];for(const e of h)b(e)||(l.bySymbol[e]=s);return p(e,s),void(n||a.push({type:"replace",color:s,symbols:[...t.symbols],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))}}for(const t in m){if(!m.hasOwnProperty(t))continue;const s=m[t];(0,i.assert)(void 0!==s);const o=l.byColor[t];(0,i.assert)(void 0!==o),o.symbols=o.symbols.filter((e=>!s.has(e)||(delete l.bySymbol[e],!1))),p(e,t)}if(null===s)return void(n||a.push({type:"reset",symbols:[...h],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}));const y=l.byColor[s];if(l.colors.includes(s)){(0,i.assert)(void 0!==y);const t=(0,u.getTargetIndex)(y.symbols,o,d);void 0===t?(y.symbols.push(...h),n||(void 0===m[s]?a.push({type:"append",color:s,symbols:[...h],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}):a.push({type:"replace",color:s,symbols:[...y.symbols],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))):(y.symbols.splice(t,0,...h),n||a.push({type:"replace",color:s,symbols:[...y.symbols],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))}else void 0===y?l.byColor[s]={color:s,symbols:[...h],name:null,description:null,shared:!1}:y.symbols=[...h],l.colors.push(s),n||a.push({type:"append",color:s,symbols:[...h],prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists});for(const e of h)b(e)||(l.bySymbol[e]=s)},renameSeparator:(e,t)=>{const{color:s,separator:o,name:n,silent:l}=t.payload;if(o===n||!b(o)||!b(n))return;const a=e.lists.byColor[s];(0,i.assert)(void 0!==a);const c=a.symbols.indexOf(o);-1!==c&&-1===a.symbols.indexOf(n)&&(a.symbols.splice(c,1,n),l||e.commands.push({type:"replace",color:s,symbols:a.symbols,prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))},rename:(e,t)=>{const{name:s,color:o,silent:n}=t.payload,l=e.lists.byColor[o];(0,i.assert)(void 0!==l),l.name!==s&&(l.name=s,n||e.commands.push({type:"rename",color:o,name:s,prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))},changeDescription:(e,t)=>{const{color:s,description:o,silent:n}=t.payload,l=e.lists.byColor[s];(0,i.assert)(void 0!==l),l.description!==o&&(l.description=o,n||e.commands.push({type:"change-description",color:s,description:o,prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))},reset:(e,t)=>{const{silent:s}=t.payload,{lists:o}=e;for(const e of m){const t=o.byColor[e]
;void 0!==t&&(t.symbols=[])}o.colors=[],o.bySymbol={},s||e.commands.push({type:"reset-all",prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists})},share:(e,t)=>{const{lists:s,commands:o}=e,{shared:n,color:l,silent:a}=t.payload,c=s.byColor[l];void 0!==c&&c.shared!==n&&(c.shared=n,a||o.push({type:"share",color:l,shared:n,prevLists:(0,i.ensureDefined)((0,r.original)(e)).lists}))},shiftCommand:(e,t)=>{const{count:s}=t.payload;e.commands.splice(0,s)}}}),{markMany:_,setup:S,reset:f,remove:v,rename:C,changeDescription:L,renameSeparator:w,shiftCommand:N,share:k}=g.actions,{reducer:O}=g;function M(e,t,s=g){return(0,l.createCrossTabSyncMiddleware)({id:e,channel:t,event:"marked-list-cross-tab-sync",filter:e=>function(e,t){return t.actions.markMany.match(e)||t.actions.rename.match(e)||t.actions.changeDescription.match(e)||t.actions.remove.match(e)||t.actions.setup.match(e)||t.actions.renameSeparator.match(e)||t.actions.reset.match(e)||t.actions.share.match(e)}(e,s)})}function x(e,t){var s;return null!==(s=e.lists.bySymbol[a.qualified.cast(t)])&&void 0!==s?s:null}function D(e,t){var s;return null!==(s=e.lists.byColor[t])&&void 0!==s?s:null}function T(e,t){var s,o;return null!==(o=null===(s=D(e,t))||void 0===s?void 0:s.symbols)&&void 0!==o?o:null}function P(e){return e.commands}function E(e){return e.timestamp}},50991:(e,t,s)=>{"use strict";s.d(t,{qualified:()=>o});const o={cast:e=>e,castMany:e=>e.map(o.cast)}},340958:(e,t,s)=>{"use strict";function o(e,t){if(e.length!==t.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==t[s])return!1;return!0}s.d(t,{equalArrays:()=>o})},963754:(e,t,s)=>{"use strict";s.d(t,{ColorContext:()=>o,ColorManager:()=>l});var o,n=s(797035),r=s(948549),i=s(916611);!function(e){e[e.SymbolMarker=0]="SymbolMarker",e[e.ScreenerFilter=1]="ScreenerFilter"}(o||(o={}));class l{constructor(e){this._context=e.context}getColor(){switch(this._context){case o.SymbolMarker:return this._getAvailableColor(r.SymbolMarkerSettings.getDefaultColor());case o.ScreenerFilter:return this._getAvailableColor(r.SymbolsFilterSettings.getDefaultColor())}}setColor(e){switch(this._context){case o.SymbolMarker:r.SymbolMarkerSettings.setDefaultColor(this._getAvailableColor(e));break;case o.ScreenerFilter:r.SymbolsFilterSettings.setDefaultColor(this._getAvailableColor(e))}}_getAvailableColor(e){return(0,i.checkColorPermissions)(e)?e:(this.setColor(n.ListColor.Red),n.ListColor.Red)}}},916611:(e,t,s)=>{"use strict";s.d(t,{MarkedSymbolsListModel:()=>I,checkColorPermissions:()=>R,getMarkedListsState:()=>A,symbolsLimit:()=>k});var o=s(650151),n=s(797035),r=s(50991),i=s(173777);class l{constructor(e){this._executing=null,this._destroyed=!1,this._handleChange=()=>{if(this._destroyed)return;const e=this._getCommands();if(e.length>0){if(null!==this._executing)return;const[t,...s]=e;switch(t.type){case"append":this._executing=this._api.appendSymbols(t.color,t.symbols);break;case"remove":this._executing=this._api.removeSymbols(t.color,t.symbols);break;case"replace":this._executing=this._api.replaceSymbols(t.color,t.symbols);break;case"reset":
this._executing=this._api.resetSymbols(t.symbols);break;case"rename":this._executing=this._api.renameList(t.color,t.name);break;case"change-description":this._executing=this._api.changeDescription(t.color,t.description);break;case"reset-all":this._executing=this._api.resetAll();break;case"share":this._executing=this._api.shareList(t.color,t.shared)}this._executing.then((()=>{if(this._executing=null,this._destroyed)return;const[e]=this._getCommands();e===t?this._store.dispatch((0,n.shiftCommand)({count:1})):(this._onWarn(`Command: ${JSON.stringify(t)} was sent to the server but is not found in the state`),s.length>0&&this._onWarn(`Commands: ${JSON.stringify(s)} was dropped from state without syncing with server`)),this._handleChange()}),(e=>{if(this._destroyed)return;this._executing=null;const{colors:s,byColor:r}=t.prevLists,i=s.map((e=>(0,o.ensureDefined)(r[e])));this._store.dispatch((0,n.setup)({lists:i,timestamp:(0,o.ensureNotNull)((0,n.getTimestamp)(this._selector(this._store.getState())))})),this._onError(t,e)}))}};const{root:t,selector:s,onError:r,onWarn:i,api:l}=e;this._store=t,this._selector=s,this._subscription=this._store.subscribe(this._handleChange),this._onError=r,this._onWarn=i,this._api=l,this._handleChange()}destroy(){this._subscription(),this._destroyed=!0}_getCommands(){const e=this._selector(this._store.getState());return(0,n.getCommands)(e)}}var a=s(777754),c=s(272001),h=s(890740),u=s(658583);var m=s(591152);const d=(0,c.getLogger)("MarkedSymbols.Api");class y{getLists(){return(0,h.fetch)("/api/v1/symbols_list/colored/").then(u.handleJSON)}removeSymbols(e,t){return 0===t.length?Promise.resolve():(d.logNormal(`Sending request to remove symbols from ${e}-list: ${t}`),function(e,t){return(0,h.fetch)(`/api/v1/symbols_list/colored/${e}/remove/`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e,t))}appendSymbols(e,t){return 0===t.length?Promise.resolve():(d.logNormal(`Sending request to append symbols to ${e}-list: ${t}`),function(e,t){return(0,h.fetch)(`/api/v1/symbols_list/colored/${e}/append/`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e,t))}replaceSymbols(e,t){return 0===t.length?Promise.resolve():(d.logNormal(`Sending request to replace symbols in ${e}-list: ${t}`),function(e,t){return(0,h.fetch)(`/api/v1/symbols_list/colored/${e}/replace/?unsafe=true`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e,t))}resetSymbols(e){return 0===e.length?Promise.resolve():(d.logNormal(`Sending request to reset symbols: ${e}`),function(e){return(0,h.fetch)("/api/v1/symbols_list/colored/bulk_remove/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e))}resetAll(){return d.logNormal("Sending request to reset ALL symbols"),(0,h.fetch)("/api/v1/symbols_list/colored/",{method:"DELETE"}).then(u.handleJSON)}renameList(e,t){return d.logNormal(`Sending request to rename ${e}-list: ${t}`),
function(e,t){return(0,h.fetch)(`/api/v1/symbols_list/colored/${e}/rename/`,{method:"POST",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e,t)}shareList(e,t){return d.logNormal(`Sending request to share ${e}-list: ${t}`),(0,m.shareMarkedList)(e,t).then((()=>{}))}changeDescription(e,t){return d.logNormal(`Sending request to change description ${e}-list: ${t}`),function(e,t){return(0,h.fetch)(`/api/v1/symbols_list/colored/${e}/update_meta/`,{method:"POST",body:JSON.stringify({description:t}),headers:{"Content-Type":"application/json"}}).then(u.handleJSON)}(e,t).then((()=>{}))}}var p=s(441346),b=s(176975),g=s(526225),_=(s(659863),s(888778)),S=s(494966),f=s(947809),v=s(778016),C=s(833813),L=s(508846),w=s(963644),N=s(872462);let k=500;const O=6e5,M=3e4,x=3e4;const D=(0,c.getLogger)("MarkedSymbols.Model"),T="marked-symbols";let P,E=null;function A(e){return e.markedLists}const $="ROUTINE_CANCELLED";class I{constructor(e){var t,l;this._promise=(0,_.initSymbolListService)(),this._service=null,this._executor=null,this._subscription=null,this._state=null,this._sync=null,this._disconnectTimestamp=null,this._destroyed=!1,this._connectionStatus=null,this._recover=!1,this._onPushStreamChange=e=>{window.user&&window.user.session_hash!==e?p.pushStreamMultiplexer.ownPushStream()?(D.logNormal("Cross browser sync"),this.syncSymbols()):D.logDebug("Sync skipped: on secondary tab"):D.logDebug("Sync skipped: session hash")},this._onPushStreamStatus=e=>{const t=Date.now();if(this._connectionStatus=e,e===b.ConnectionStatus.Open&&E===b.ConnectionStatus.Closed){E=e;const s=null===this._disconnectTimestamp?0:t-this._disconnectTimestamp;if(this._disconnectTimestamp=null,!window.is_authenticated)return void D.logDebug("Sync skipped: is not authenticated");if(!p.pushStreamMultiplexer.ownPushStream())return void D.logDebug("Sync skipped: on secondary tab");if(s<O)return void D.logDebug("Sync skipped: short disconnection");P=setTimeout((()=>{const e=null!==this._state?(0,n.getTimestamp)(this._state):null;null===e||e<t?(D.logNormal("Reconnect sync"),this.syncSymbols()):D.logNormal("Reconnect sync handled by another tab")}),Math.random()*x+M)}else e===b.ConnectionStatus.Closed&&(this._disconnectTimestamp=Date.now(),E=e,clearTimeout(P))},this._handleChange=()=>{var e,t;if(this._destroyed)return;const{store:s}=(0,o.ensureNotNull)(this._service),n=(0,o.ensureNotNull)(A(s.getState()));if(this._state!==n)try{null===(t=(e=this._opts).onChange)||void 0===t||t.call(e,n,(0,o.ensureNotNull)(this._state))}finally{this._state=n}},this._handleExecutorError=(e,t)=>{this._connectionStatus===b.ConnectionStatus.Open?this._destroyed||(D.logError(`Failed to execute ${e.type}`),this._recover=!0,this.syncSymbols()):(0,N.showSimpleDialog)({title:a.t(null,void 0,s(33115)),text:t.message},N.warningModule)},this._opts=e,this._api=e.api||new y,this._session=e.quoteSession||(0,f.getQuoteSessionInstance)("simple"),this._restrictedMarkSymbols=function(e){const{limit:t,colors:s,onLimit:o,onRestrictedColor:l,selector:a}=e
;return e=>(c,h)=>{var u,m;const d=h(),y=a(d),{color:p,symbols:b,separators:g}=e;if(null!==p){if(!s().includes(p))return void l();const e=null!==(m=null===(u=y.lists.byColor[p])||void 0===u?void 0:u.symbols)&&void 0!==m?m:[],n=new Set(e),a=r.qualified.castMany([]);for(const e of new Set(b))!g&&(0,i.isSeparatorItem)(e)||n.has(e)||a.push(e);if(a.length+n.size>t())return void o()}c((0,n.markMany)(e))}}({selector:e=>(0,o.ensureNotNull)(A(e)),limit:null!==(t=e.limit)&&void 0!==t?t:()=>k,onLimit:()=>{var e,t;D.logNormal("LimitReached"),null===(t=(e=this._opts).onLimit)||void 0===t||t.call(e)},colors:null!==(l=e.colors)&&void 0!==l?l:()=>n.LIST_COLORS.filter(J),onRestrictedColor:()=>{var e,t;null===(t=(e=this._opts).onRestrictedColor)||void 0===t||t.call(e)}}),this._promise.then((e=>{if(this._destroyed)return;this._service=e;const{store:t}=e;this._state=(0,o.ensureNotNull)(A(t.getState())),this._subscription=t.subscribe(this._handleChange)})),this.connect()}destroy(){this._destroyed=!0,this._sync=null,this._subscription&&this._subscription(),this._executor&&this._executor.destroy(),this.closeConnection()}getSymbolsByColor(e){var t;if(null===this._service)return[];const{store:s}=this._service,o=A(s.getState());return null===o?[]:null!==(t=(0,n.getSymbolsByColor)(o,e))&&void 0!==t?t:[]}getLists(){return n.LIST_COLORS.reduce(((e,t)=>(e.set(t,new Set(this.getSymbolsByColor(t))),e)),new Map)}setSymbolsColor(e,t){if(D.logNormal(`Set symbols color ${t}`),null===this._service)return;const s=this._restrictedMarkSymbols({symbols:e,color:t,separators:!1});this._service.store.dispatch(s)}markMany(e){if(D.logNormal(`Mark many symbols: ${e.color}`),null===this._service)return;const t=this._restrictedMarkSymbols(e);this._service.store.dispatch(t)}getSymbolColor(e){if(null===this._service)return null;const{store:t}=this._service,s=A(t.getState());return null===s?null:(0,n.getSymbolColor)(s,e)}clearAllSymbolsColor(){D.logNormal("Clear all symbols color"),null!==this._service&&this._service.store.dispatch((0,n.reset)({}))}syncSymbols(){if(null===this._sync){const e=this._sync=this._synchronize({assert:()=>{if(this._sync!==e)throw new Error($)},cancel:()=>{this._sync=null}}).then((()=>{this._sync=null}),(e=>{throw this._sync=null,e}))}return this._sync}anonymize(){null!==this._service&&this._service.store.dispatch((0,n.setup)({timestamp:Date.now(),lists:[]}))}connect(){this._subscribeOnPushStream()}closeConnection(){this._unsubscribeOnPushStream()}_resolve(e){const t=new Set;for(const s of e)if(void 0!==s.symbols)for(const e of s.symbols){(0,S.safeShortName)(e)===e&&t.add(e)}const s=Array.from(t).map((e=>this._session.snapshot(e).then((t=>t.pro_name||e),(()=>e)).then((t=>[e,t]))));return Promise.all(s).then((t=>{const s=new Map(t);return e.map((e=>{var t;const o=null!==(t=e.symbols)&&void 0!==t?t:[];return{id:e.id,name:e.name,description:e.description,color:e.color,shared:e.shared,symbols:o.map((e=>{var t;return null!==(t=s.get(e))&&void 0!==t?t:e}))}}))}))}async _synchronize(e){let t,s;null!==this._executor&&(this._executor.destroy(),
this._executor=null,D.logNormal("Executor was destroyed."));try{this._recover&&await(0,g.syncUserData)("marked-symbols");const[o]=await Promise.all([this._api.getLists(),this._promise]);t=await this._resolve(o),s=Date.now(),e.assert()}catch(e){if(e instanceof Error){if(D.logError(`Sync symbols error: ${e.message}`),e.message===$)return;if("ApiError:not_authenticated"===e.name)return this._recover||await(0,g.syncUserData)("marked-symbols"),void(0,w.showSignModal)({feature:"flaggedSymbols"})}throw e}this._recover=!1;const{store:r}=(0,o.ensureNotNull)(this._service);this._createExecutor();const i=null!==this._state?(0,n.getTimestamp)(this._state):null;if(null!==i&&i>=s)return;const l=(0,n.setup)({lists:t.map((e=>{var t,s;return{name:null!==(t=e.name)&&void 0!==t?t:null,description:null!==(s=e.description)&&void 0!==s?s:null,color:e.color,symbols:e.symbols,shared:e.shared}})),timestamp:s});r.dispatch(l)}_createExecutor(){const{store:e}=(0,o.ensureNotNull)(this._service);this._executor=new l({root:e,selector:e=>(0,o.ensureNotNull)(A(e)),api:this._api,onError:this._handleExecutorError,onWarn:e=>{D.logWarn(e)}}),D.logNormal("Executor was created")}_subscribeOnPushStream(){p.pushStreamMultiplexer.on(T,this._onPushStreamChange),p.pushStreamMultiplexer.onPrivateStatus(this._onPushStreamStatus)}_unsubscribeOnPushStream(){p.pushStreamMultiplexer.off(T,this._onPushStreamChange),p.pushStreamMultiplexer.offStatus(this._onPushStreamStatus),clearTimeout(P),E=null}}function J(e){return n.ListColor.Red===e||(0,v.enabled)(C.ProductFeatures.MULTIFLAGGED_SYMBOLS_LISTS)}function R(e){return!!J(e)||((0,L.createGoProDialog)({feature:"flaggedSymbols"}),!1)}},586584:(e,t,s)=>{"use strict";s.d(t,{getMarkedSymbolsListServiceInstance:()=>m});var o=s(797035),n=s(777754),r=s(916611),i=s(218333),l=s(963754);class a{constructor(e){this._symbolChangeHandlers=new Map,this._listChangeHandlers=[],this._initHandlers=[],this._sync=null,this._inited=!1,this._handleChange=(e,t)=>{if(e.lists!==t.lists){this._listChangeHandlers.forEach((s=>{try{s(e,t)}catch(e){}}));for(const[s,n]of Array.from(this._symbolChangeHandlers.entries())){const r=(0,o.getSymbolColor)(e,s),i=(0,o.getSymbolColor)(t,s);r!==i&&n.forEach((e=>{try{e(r,i)}catch(e){}}))}}},this._onLoginStateChange=()=>{let e;this._model.closeConnection(),window.is_authenticated?(this._model.connect(),e=this._syncSymbols()):(this._model.anonymize(),this._inited=!1,e=Promise.resolve()),e.then(this._fireInit)},this._fireInit=()=>{this._initHandlers.forEach((e=>e()))},this._runWithSync=e=>{this._sync?this._sync.then(e):e()},this._model=new r.MarkedSymbolsListModel({api:e?e.api:void 0,quoteSession:e?e.quoteSession:void 0,onChange:this._handleChange,limit:null==e?void 0:e.limit,onLimit:h,colors:null==e?void 0:e.colors}),this._subscribeLoginStateChange(),this._syncSymbols().then(this._fireInit)}getSymbolsByColor(e){return this._model.getSymbolsByColor(e)}setSymbolsColor(e,t){0!==e.length&&this._runWithSync((()=>{this._model.setSymbolsColor(e,t)}))}getSymbolColor(e){return this._model.getSymbolColor(e)}markMany(e){
this._runWithSync((()=>{this._model.markMany(e)}))}clearAllSymbolsColor(){this._runWithSync((()=>{this._model.clearAllSymbolsColor()}))}adjustSymbolsColors(e){const t=new l.ColorManager({context:l.ColorContext.SymbolMarker}),s=!e.map((e=>this.getSymbolColor(e))).includes(null);this.setSymbolsColor(e,s?null:t.getColor())}onSymbolChange(e,t){const s=this._symbolChangeHandlers.get(e);s?s.push(t):this._symbolChangeHandlers.set(e,[t])}offSymbolChange(e,t){const s=this._symbolChangeHandlers.get(e);if(s){const o=s.filter((e=>e!==t));o.length>0?this._symbolChangeHandlers.set(e,o):this._symbolChangeHandlers.delete(e)}}onListChange(e){this._listChangeHandlers.push(e)}offListChange(e){this._listChangeHandlers=this._listChangeHandlers.filter((t=>t!==e))}onInit(e){this._initHandlers.push(e)}offInit(e){this._initHandlers=this._initHandlers.filter((t=>t!==e))}destroy(){this._model.closeConnection(),this._unsubscribeLoginStateChange()}isInited(){return this._inited}_subscribeLoginStateChange(){window.loginStateChange&&window.loginStateChange.subscribe(this,this._onLoginStateChange)}_unsubscribeLoginStateChange(){window.loginStateChange&&window.loginStateChange.unsubscribe(this,this._onLoginStateChange)}_syncSymbols(){if(window.is_authenticated){this._sync=this._model.syncSymbols();const e=()=>{this._sync=null,this._inited=!0};return this._sync.then(e).catch(e)}return Promise.resolve()}}let c=null;function h(){c||(c=(0,i.createNoticeDialog)({title:n.t(null,void 0,s(57467)),content:n.t(null,void 0,s(372896)).format({limit:String(r.symbolsLimit)})}),c.then((e=>{e.on("afterClose",(()=>{c=null})),e.open()})))}let u=null;function m(){return null===u&&(u=new a),u}},948549:(e,t,s)=>{"use strict";s.d(t,{SymbolMarkerSettings:()=>o,SymbolsFilterSettings:()=>n});var o,n,r=s(797035),i=s(62802);!function(e){const t="default_symbol_marker_color";e.getDefaultColor=function(){return i.getValue(t,r.ListColor.Red)},e.setDefaultColor=function(e){i.setValue(t,e,{forceFlush:!0})}}(o||(o={})),function(e){const t="default_symbols_filter_color",s="marked_symbols_filter";e.getDefaultColor=function(){return i.getValue(t,r.ListColor.Red)},e.setDefaultColor=function(e){i.setValue(t,e,{forceFlush:!0})},e.setIsActive=function(e){i.setValue(s,e,{forceFlush:!0})},e.getIsActive=function(){return i.getBool(s,!1)}}(n||(n={}))},591152:(e,t,s)=>{"use strict";if(s.d(t,{shareMarkedList:()=>l,shareCustomList:()=>a,getOwnSharedList:()=>c}),/^(50278|99362)$/.test(s.j))var o=s(797035);var n=s(890740),r=s(658583),i=s(822714);function l(e,t){return(0,n.fetch)(`/api/v1/symbols_list/colored/${e}/share/`,{method:"POST",body:JSON.stringify({shared:t}),headers:{"Content-Type":"application/json"}}).then(r.handleJSON).then(i.convertToMarkedSymbolList)}function a(e,t){return(0,n.fetch)(`/api/v1/symbols_list/custom/${e}/share/`,{method:"POST",body:JSON.stringify({shared:t}),headers:{"Content-Type":"application/json"}}).then(r.handleJSON).then(i.convertToCustomSymbolList)}function c(e){return(0,o.isListColor)(e)?(0,n.fetch)(`/api/v1/symbols_list/colored/${e}`,{method:"GET"
}).then(r.handleJSON):(0,n.fetch)(`/api/v1/symbols_list/custom/${e}`,{method:"GET"}).then(r.handleJSON)}},642709:(e,t,s)=>{"use strict";s.d(t,{DialogBreakpoints:()=>n});var o=s(645469);const n={SmallHeight:o["small-height-breakpoint"],TabletSmall:o["tablet-small-breakpoint"],TabletNormal:o["tablet-normal-breakpoint"]}},332450:(e,t,s)=>{"use strict";s.d(t,{CLOSE_POPUPS_AND_DIALOGS_COMMAND:()=>o,breakpointList:()=>n});const o="CLOSE_POPUPS_AND_DIALOGS_COMMAND",n=/^(21248|32026|50278|53705|61730|99362)$/.test(s.j)?[1920,1440,1280,1024,768,480,0]:null},872462:(e,t,s)=>{"use strict";s.r(t),s.d(t,{confirmModule:()=>l,renameModule:()=>a,warningModule:()=>c,showSimpleDialog:()=>h});var o=s(655072),n=s(741408),r=s(246093),i=s(264006);const l=o.Confirm,a=n.Rename,c=r.Warning,h=i.showSimpleDialogInstance},322654:(e,t,s)=>{"use strict";s.d(t,{DialogsOpenerManager:()=>o,dialogsOpenerManager:()=>n});class o{constructor(){this._storage=new Map}setAsOpened(e,t){this._storage.set(e,t)}setAsClosed(e){this._storage.delete(e)}isOpened(e){return this._storage.has(e)}getDialogPayload(e){return this._storage.get(e)}}const n=new o},494966:(e,t,s)=>{"use strict";s.d(t,{safeShortName:()=>n});var o=s(696828);function n(e){try{return(0,o.shortName)(e)}catch(t){return e}}},150881:(e,t,s)=>{"use strict";s.d(t,{TouchScrollContainer:()=>l});var o=s(50959),n=s(259142),r=s(650151),i=s(638456);const l=(0,o.forwardRef)(((e,t)=>{const{children:s,...r}=e,l=(0,o.useRef)(null);return(0,o.useImperativeHandle)(t,(()=>l.current)),(0,o.useLayoutEffect)((()=>{if(i.CheckMobile.iOS())return null!==l.current&&(0,n.disableBodyScroll)(l.current,{allowTouchMove:a(l)}),()=>{null!==l.current&&(0,n.enableBodyScroll)(l.current)}}),[]),o.createElement("div",{ref:l,...r},s)}));function a(e){return t=>{const s=(0,r.ensureNotNull)(e.current),o=document.activeElement;return!s.contains(t)||null!==o&&s.contains(o)&&o.contains(t)}}}}]);