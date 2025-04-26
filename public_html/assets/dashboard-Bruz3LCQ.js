import{j as je,u as Op,B as ho,L as Vp,d as Mp,C as Lp,e as Up}from"./ui-components-DhslgboJ.js";import{r as gn}from"./react-vendor-CF_6Cs3e.js";import"./page-components-DNoHpgvR.js";const xp=()=>{};var Gc={};/**
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
 */const Ll=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,l=s>>2,f=(s&3)<<4|c>>4;let p=(c&15)<<2|d>>6,y=d&63;u||(y=64,o||(p=64)),r.push(t[l],t[f],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ll(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||f==null)throw new Bp;const p=s<<2|c>>4;if(r.push(p),d!==64){const y=c<<4&240|d>>2;if(r.push(y),f!==64){const A=d<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jp=function(n){const e=Ll(n);return Ul.encodeByteArray(e,!0)},ts=function(n){return jp(n).replace(/\./g,"")},xl=function(n){try{return Ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $p=()=>qp().__FIREBASE_DEFAULTS__,Hp=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xl(n[1]);return e&&JSON.parse(e)},Rs=()=>{try{return xp()||$p()||Hp()||zp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fl=n=>{var e,t;return(t=(e=Rs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bl=n=>{const e=Fl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jl=()=>{var n;return(n=Rs())===null||n===void 0?void 0:n.config},ql=n=>{var e;return(e=Rs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Wp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $l(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ts(JSON.stringify(t)),ts(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Kp(){var n;const e=(n=Rs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yp(){const n=rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jp(){return!Kp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zl(){try{return typeof indexedDB=="object"}catch{return!1}}function Wl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Zp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const eg="FirebaseError";class Rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eg,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tg(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,c,r)}}function tg(n,e){return n.replace(ng,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ng=/\{\$([^}]+)}/g;function rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Kc(s)&&Kc(o)){if(!wn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kc(n){return n!==null&&typeof n=="object"}/**
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
 */function di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $r(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ig(n,e){const t=new sg(n,e);return t.subscribe.bind(t)}class sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");og(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fo),i.error===void 0&&(i.error=fo),i.complete===void 0&&(i.complete=fo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function og(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fo(){}/**
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
 */const ag=1e3,cg=2,ug=4*60*60*1e3,lg=.5;function Qc(n,e=ag,t=cg){const r=e*Math.pow(t,n),i=Math.round(lg*r*(Math.random()-.5)*2);return Math.min(ug,r+i)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class hg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fg(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dg(n){return n===Un?void 0:n}function fg(n){return n.instantiationMode==="EAGER"}/**
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
 */class pg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(oe||(oe={}));const gg={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},mg=oe.INFO,_g={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},yg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=_g[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ss{constructor(e){this.name=e,this._logLevel=mg,this._logHandler=yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const vg=(n,e)=>e.some(t=>n instanceof t);let Xc,Yc;function Eg(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wg(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,ko=new WeakMap,Kl=new WeakMap,po=new WeakMap,ia=new WeakMap;function Tg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(mn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gl.set(t,n)}).catch(()=>{}),ia.set(e,n),e}function Ig(n){if(ko.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ko.set(n,e)}let Do={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ag(n){Do=n(Do)}function bg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(go(this),e,...t);return Kl.set(r,e.sort?e.sort():[e]),mn(r)}:wg().includes(n)?function(...e){return n.apply(go(this),e),mn(Gl.get(this))}:function(...e){return mn(n.apply(go(this),e))}}function Rg(n){return typeof n=="function"?bg(n):(n instanceof IDBTransaction&&Ig(n),vg(n,Eg())?new Proxy(n,Do):n)}function mn(n){if(n instanceof IDBRequest)return Tg(n);if(po.has(n))return po.get(n);const e=Rg(n);return e!==n&&(po.set(n,e),ia.set(e,n)),e}const go=n=>ia.get(n);function Ql(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=mn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mn(o.result),u.oldVersion,u.newVersion,mn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Sg=["get","getKey","getAll","getAllKeys","count"],Pg=["put","add","delete","clear"],mo=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mo.get(e))return mo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Pg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sg.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return mo.set(e,s),s}Ag(n=>({...n,get:(e,t,r)=>Jc(e,t)||n.get(e,t,r),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
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
 */class Cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function kg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",Zc="0.11.4";/**
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
 */const Jt=new Ss("@firebase/app"),Dg="@firebase/app-compat",Ng="@firebase/analytics-compat",Og="@firebase/analytics",Vg="@firebase/app-check-compat",Mg="@firebase/app-check",Lg="@firebase/auth",Ug="@firebase/auth-compat",xg="@firebase/database",Fg="@firebase/data-connect",Bg="@firebase/database-compat",jg="@firebase/functions",qg="@firebase/functions-compat",$g="@firebase/installations",Hg="@firebase/installations-compat",zg="@firebase/messaging",Wg="@firebase/messaging-compat",Gg="@firebase/performance",Kg="@firebase/performance-compat",Qg="@firebase/remote-config",Xg="@firebase/remote-config-compat",Yg="@firebase/storage",Jg="@firebase/storage-compat",Zg="@firebase/firestore",em="@firebase/vertexai",tm="@firebase/firestore-compat",nm="firebase",rm="11.6.0";/**
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
 */const Oo="[DEFAULT]",im={[No]:"fire-core",[Dg]:"fire-core-compat",[Og]:"fire-analytics",[Ng]:"fire-analytics-compat",[Mg]:"fire-app-check",[Vg]:"fire-app-check-compat",[Lg]:"fire-auth",[Ug]:"fire-auth-compat",[xg]:"fire-rtdb",[Fg]:"fire-data-connect",[Bg]:"fire-rtdb-compat",[jg]:"fire-fn",[qg]:"fire-fn-compat",[$g]:"fire-iid",[Hg]:"fire-iid-compat",[zg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Gg]:"fire-perf",[Kg]:"fire-perf-compat",[Qg]:"fire-rc",[Xg]:"fire-rc-compat",[Yg]:"fire-gcs",[Jg]:"fire-gcs-compat",[Zg]:"fire-fst",[tm]:"fire-fst-compat",[em]:"fire-vertex","fire-js":"fire-js",[nm]:"fire-js-all"};/**
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
 */const ns=new Map,sm=new Map,Vo=new Map;function eu(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){const e=n.name;if(Vo.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,n);for(const t of ns.values())eu(t,n);for(const t of sm.values())eu(t,n);return!0}function Pn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _t(n){return n==null?!1:n.settings!==void 0}/**
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
 */const om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Qn("app","Firebase",om);/**
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
 */class am{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=rm;function Xl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(t||(t=jl()),!t)throw _n.create("no-options");const s=ns.get(i);if(s){if(wn(t,s.options)&&wn(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new pg(i);for(const u of Vo.values())o.addComponent(u);const c=new am(t,r,o);return ns.set(i,c),c}function Ps(n=Oo){const e=ns.get(n);if(!e&&n===Oo&&jl())return Xl();if(!e)throw _n.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let i=(r=im[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}Ot(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cm="firebase-heartbeat-database",um=1,ti="firebase-heartbeat-store";let _o=null;function Yl(){return _o||(_o=Ql(cm,um,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ti)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),_o}async function lm(n){try{const t=(await Yl()).transaction(ti),r=await t.objectStore(ti).get(Jl(n));return await t.done,r}catch(e){if(e instanceof Rt)Jt.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function tu(n,e){try{const r=(await Yl()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,Jl(n)),await r.done}catch(t){if(t instanceof Rt)Jt.warn(t.message);else{const r=_n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(r.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hm=1024,dm=30;class fm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>dm){const o=mm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nu(),{heartbeatsToSend:r,unsentEntries:i}=pm(this._heartbeatsCache.heartbeats),s=ts(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Jt.warn(t),""}}}function nu(){return new Date().toISOString().substring(0,10)}function pm(n,e=hm){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ru(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ru(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?Wl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ru(n){return ts(JSON.stringify({version:2,heartbeats:n})).length}function mm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _m(n){Ot(new bt("platform-logger",e=>new Cg(e),"PRIVATE")),Ot(new bt("heartbeat",e=>new fm(e),"PRIVATE")),ht(No,Zc,n),ht(No,Zc,"esm2017"),ht("fire-js","")}_m("");var ym="firebase",vm="11.6.0";/**
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
 */ht(ym,vm,"app");const Zl="@firebase/installations",sa="0.6.13";/**
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
 */const eh=1e4,th=`w:${sa}`,nh="FIS_v2",Em="https://firebaseinstallations.googleapis.com/v1",wm=60*60*1e3,Tm="installations",Im="Installations";/**
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
 */const Am={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new Qn(Tm,Im,Am);function rh(n){return n instanceof Rt&&n.code.includes("request-failed")}/**
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
 */function ih({projectId:n}){return`${Em}/projects/${n}/installations`}function sh(n){return{token:n.token,requestStatus:2,expiresIn:Rm(n.expiresIn),creationTime:Date.now()}}async function oh(n,e){const r=(await e.json()).error;return qn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ah({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bm(n,{refreshToken:e}){const t=ah(n);return t.append("Authorization",Sm(e)),t}async function ch(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Rm(n){return Number(n.replace("s","000"))}function Sm(n){return`${nh} ${n}`}/**
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
 */async function Pm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=ih(n),i=ah(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:t,authVersion:nh,appId:n.appId,sdkVersion:th},c={method:"POST",headers:i,body:JSON.stringify(o)},u=await ch(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:sh(d.authToken)}}else throw await oh("Create Installation",u)}/**
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
 */function uh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Cm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const km=/^[cdef][\w-]{21}$/,Mo="";function Dm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Nm(n);return km.test(t)?t:Mo}catch{return Mo}}function Nm(n){return Cm(n).substr(0,22)}/**
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
 */function Cs(n){return`${n.appName}!${n.appId}`}/**
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
 */const lh=new Map;function hh(n,e){const t=Cs(n);dh(t,e),Om(t,e)}function dh(n,e){const t=lh.get(n);if(t)for(const r of t)r(e)}function Om(n,e){const t=Vm();t&&t.postMessage({key:n,fid:e}),Mm()}let xn=null;function Vm(){return!xn&&"BroadcastChannel"in self&&(xn=new BroadcastChannel("[Firebase] FID Change"),xn.onmessage=n=>{dh(n.data.key,n.data.fid)}),xn}function Mm(){lh.size===0&&xn&&(xn.close(),xn=null)}/**
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
 */const Lm="firebase-installations-database",Um=1,$n="firebase-installations-store";let yo=null;function oa(){return yo||(yo=Ql(Lm,Um,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($n)}}})),yo}async function rs(n,e){const t=Cs(n),i=(await oa()).transaction($n,"readwrite"),s=i.objectStore($n),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&hh(n,e.fid),e}async function fh(n){const e=Cs(n),r=(await oa()).transaction($n,"readwrite");await r.objectStore($n).delete(e),await r.done}async function ks(n,e){const t=Cs(n),i=(await oa()).transaction($n,"readwrite"),s=i.objectStore($n),o=await s.get(t),c=e(o);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!o||o.fid!==c.fid)&&hh(n,c.fid),c}/**
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
 */async function aa(n){let e;const t=await ks(n.appConfig,r=>{const i=xm(r),s=Fm(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Mo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function xm(n){const e=n||{fid:Dm(),registrationStatus:0};return ph(e)}function Fm(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Bm(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jm(n)}:{installationEntry:e}}async function Bm(n,e){try{const t=await Pm(n,e);return rs(n.appConfig,t)}catch(t){throw rh(t)&&t.customData.serverCode===409?await fh(n.appConfig):await rs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jm(n){let e=await iu(n.appConfig);for(;e.registrationStatus===1;)await uh(100),e=await iu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await aa(n);return r||t}return e}function iu(n){return ks(n,e=>{if(!e)throw qn.create("installation-not-found");return ph(e)})}function ph(n){return qm(n)?{fid:n.fid,registrationStatus:0}:n}function qm(n){return n.registrationStatus===1&&n.registrationTime+eh<Date.now()}/**
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
 */async function $m({appConfig:n,heartbeatServiceProvider:e},t){const r=Hm(n,t),i=bm(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:th,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},u=await ch(()=>fetch(r,c));if(u.ok){const d=await u.json();return sh(d)}else throw await oh("Generate Auth Token",u)}function Hm(n,{fid:e}){return`${ih(n)}/${e}/authTokens:generate`}/**
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
 */async function ca(n,e=!1){let t;const r=await ks(n.appConfig,s=>{if(!gh(s))throw qn.create("not-registered");const o=s.authToken;if(!e&&Gm(o))return s;if(o.requestStatus===1)return t=zm(n,e),s;{if(!navigator.onLine)throw qn.create("app-offline");const c=Qm(s);return t=Wm(n,c),c}});return t?await t:r.authToken}async function zm(n,e){let t=await su(n.appConfig);for(;t.authToken.requestStatus===1;)await uh(100),t=await su(n.appConfig);const r=t.authToken;return r.requestStatus===0?ca(n,e):r}function su(n){return ks(n,e=>{if(!gh(e))throw qn.create("not-registered");const t=e.authToken;return Xm(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wm(n,e){try{const t=await $m(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await rs(n.appConfig,r),t}catch(t){if(rh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await fh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rs(n.appConfig,r)}throw t}}function gh(n){return n!==void 0&&n.registrationStatus===2}function Gm(n){return n.requestStatus===2&&!Km(n)}function Km(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+wm}function Qm(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Xm(n){return n.requestStatus===1&&n.requestTime+eh<Date.now()}/**
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
 */async function Ym(n){const e=n,{installationEntry:t,registrationPromise:r}=await aa(e);return r?r.catch(console.error):ca(e).catch(console.error),t.fid}/**
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
 */async function Jm(n,e=!1){const t=n;return await Zm(t),(await ca(t,e)).token}async function Zm(n){const{registrationPromise:e}=await aa(n);e&&await e}/**
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
 */function e_(n){if(!n||!n.options)throw vo("App Configuration");if(!n.name)throw vo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw vo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function vo(n){return qn.create("missing-app-config-values",{valueName:n})}/**
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
 */const mh="installations",t_="installations-internal",n_=n=>{const e=n.getProvider("app").getImmediate(),t=e_(e),r=Pn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},r_=n=>{const e=n.getProvider("app").getImmediate(),t=Pn(e,mh).getImmediate();return{getId:()=>Ym(t),getToken:i=>Jm(t,i)}};function i_(){Ot(new bt(mh,n_,"PUBLIC")),Ot(new bt(t_,r_,"PRIVATE"))}i_();ht(Zl,sa);ht(Zl,sa,"esm2017");/**
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
 */const is="analytics",s_="firebase_id",o_="origin",a_=60*1e3,c_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ua="https://www.googletagmanager.com/gtag/js";/**
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
 */const dt=new Ss("@firebase/analytics");/**
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
 */const u_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Qn("analytics","Analytics",u_);/**
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
 */function l_(n){if(!n.startsWith(ua)){const e=vt.create("invalid-gtag-resource",{gtagURL:n});return dt.warn(e.message),""}return n}function _h(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function h_(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function d_(n,e){const t=h_("firebase-js-sdk-policy",{createScriptURL:l_}),r=document.createElement("script"),i=`${ua}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function f_(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function p_(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await _h(t)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(c){dt.error(c)}n("config",i,s)}async function g_(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await _h(t);for(const u of o){const d=c.find(f=>f.measurementId===u),l=d&&e[d.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){dt.error(s)}}function m_(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[c,u]=o;await g_(n,e,t,c,u)}else if(s==="config"){const[c,u]=o;await p_(n,e,t,r,c,u)}else if(s==="consent"){const[c,u]=o;n("consent",c,u)}else if(s==="get"){const[c,u,d]=o;n("get",c,u,d)}else if(s==="set"){const[c]=o;n("set",c)}else n(s,...o)}catch(c){dt.error(c)}}return i}function __(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=m_(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function y_(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ua)&&t.src.includes(n))return t;return null}/**
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
 */const v_=30,E_=1e3;class w_{constructor(e={},t=E_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yh=new w_;function T_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function I_(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:T_(r)},s=c_.replace("{app-id}",t),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let c="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function A_(n,e=yh,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw vt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new S_;return setTimeout(async()=>{c.abort()},a_),vh({appId:r,apiKey:i,measurementId:s},o,c,e)}async function vh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=yh){var s;const{appId:o,measurementId:c}=n;try{await b_(r,e)}catch(u){if(c)return dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw u}try{const u=await I_(n);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!R_(d)){if(i.deleteThrottleMetadata(o),c)return dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:c};throw u}const l=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Qc(t,i.intervalMillis,v_):Qc(t,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return i.setThrottleMetadata(o,f),dt.debug(`Calling attemptFetch again in ${l} millis`),vh(n,f,r,i)}}function b_(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function R_(n){if(!(n instanceof Rt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class S_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P_(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}}/**
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
 */async function C_(){if(zl())try{await Wl()}catch(n){return dt.warn(vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return dt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function k_(n,e,t,r,i,s,o){var c;const u=A_(n);u.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&dt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>dt.error(y)),e.push(u);const d=C_().then(y=>{if(y)return r.getId()}),[l,f]=await Promise.all([u,d]);y_(s)||d_(s,l.measurementId),i("js",new Date);const p=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return p[o_]="firebase",p.update=!0,f!=null&&(p[s_]=f),i("config",l.measurementId,p),l.measurementId}/**
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
 */class D_{constructor(e){this.app=e}_delete(){return delete Kr[this.app.options.appId],Promise.resolve()}}let Kr={},ou=[];const au={};let Eo="dataLayer",N_="gtag",cu,Eh,uu=!1;function O_(){const n=[];if(Hl()&&n.push("This is a browser extension environment."),Zp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=vt.create("invalid-analytics-context",{errorInfo:e});dt.warn(t.message)}}function V_(n,e,t){O_();const r=n.options.appId;if(!r)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Kr[r]!=null)throw vt.create("already-exists",{id:r});if(!uu){f_(Eo);const{wrappedGtag:s,gtagCore:o}=__(Kr,ou,au,Eo,N_);Eh=s,cu=o,uu=!0}return Kr[r]=k_(n,ou,au,e,cu,Eo,t),new D_(n)}function M_(n=Ps()){n=xe(n);const e=Pn(n,is);return e.isInitialized()?e.getImmediate():L_(n)}function L_(n,e={}){const t=Pn(n,is);if(t.isInitialized()){const i=t.getImmediate();if(wn(e,t.getOptions()))return i;throw vt.create("already-initialized")}return t.initialize({options:e})}function U_(n,e,t,r){n=xe(n),P_(Eh,Kr[n.app.options.appId],e,t,r).catch(i=>dt.error(i))}const lu="@firebase/analytics",hu="0.10.12";function x_(){Ot(new bt(is,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return V_(r,i,t)},"PUBLIC")),Ot(new bt("analytics-internal",n,"PRIVATE")),ht(lu,hu),ht(lu,hu,"esm2017");function n(e){try{const t=e.getProvider(is).getImmediate();return{logEvent:(r,i,s)=>U_(t,r,i,s)}}catch(t){throw vt.create("interop-component-reg-failed",{reason:t})}}}x_();function la(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F_=wh,Th=new Qn("auth","Firebase",wh());/**
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
 */const ss=new Ss("@firebase/auth");function B_(n,...e){ss.logLevel<=oe.WARN&&ss.warn(`Auth (${Xn}): ${n}`,...e)}function Hi(n,...e){ss.logLevel<=oe.ERROR&&ss.error(`Auth (${Xn}): ${n}`,...e)}/**
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
 */function Vt(n,...e){throw ha(n,...e)}function jt(n,...e){return ha(n,...e)}function Ih(n,e,t){const r=Object.assign(Object.assign({},F_()),{[e]:t});return new Qn("auth","Firebase",r).create(e,{appName:n.name})}function Yt(n){return Ih(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ha(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Th.create(n,...e)}function ee(n,e,...t){if(!n)throw ha(e,...t)}function Qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hi(e),new Error(e)}function Zt(n,e){n||Qt(e)}/**
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
 */function Lo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function j_(){return du()==="http:"||du()==="https:"}function du(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j_()||Hl()||"connection"in navigator)?navigator.onLine:!0}function $_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||Xp()}get(){return q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function da(n,e){Zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ah{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const H_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const z_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],W_=new fi(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kn(n,e,t,r,i={}){return bh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=di(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},s);return Qp()||(d.referrerPolicy="no-referrer"),Ah.fetch()(await Rh(n,n.config.apiHost,t,c),d)})}async function bh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},H_),e);try{const i=new K_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Mi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Mi(n,"user-disabled",o);const l=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ih(n,l,d);Vt(n,l)}}catch(i){if(i instanceof Rt)throw i;Vt(n,"network-request-failed",{message:String(i)})}}async function pi(n,e,t,r,i={}){const s=await kn(n,e,t,r,i);return"mfaPendingCredential"in s&&Vt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Rh(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?da(n.config,i):`${n.config.apiScheme}://${i}`;return z_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function G_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),W_.get())})}}function Mi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=jt(n,e,r);return i.customData._tokenResponse=t,i}function fu(n){return n!==void 0&&n.enterprise!==void 0}class Q_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return G_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function X_(n,e){return kn(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
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
 */async function Y_(n,e){return kn(n,"POST","/v1/accounts:delete",e)}async function os(n,e){return kn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J_(n,e=!1){const t=xe(n),r=await t.getIdToken(e),i=fa(r);ee(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qr(wo(i.auth_time)),issuedAtTime:Qr(wo(i.iat)),expirationTime:Qr(wo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wo(n){return Number(n)*1e3}function fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=xl(t);return i?JSON.parse(i):(Hi("Failed to decode base64 JWT payload"),null)}catch(i){return Hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pu(n){const e=fa(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rt&&Z_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Z_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ey{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ni(n,os(t,{idToken:r}));ee(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sh(s.providerUserInfo):[],c=ny(n.providerData,o),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),l=u?d:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Uo(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,f)}async function ty(n){const e=xe(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ny(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sh(n){return n.map(e=>{var{providerId:t}=e,r=la(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ry(n,e){const t=await bh(n,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Rh(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ah.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iy(n,e){return kn(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=pu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ry(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new fr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function cn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ey(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J_(this,e)}reload(){return ty(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await ni(this,Y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,d,l;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,x=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:O,isAnonymous:j,providerData:k,stsTokenManager:b}=t;ee(M&&b,e,"internal-error");const g=fr.fromJSON(this.name,b);ee(typeof M=="string",e,"internal-error"),cn(f,e.name),cn(p,e.name),ee(typeof O=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),cn(y,e.name),cn(A,e.name),cn(P,e.name),cn(C,e.name),cn(D,e.name),cn(x,e.name);const m=new Dt({uid:M,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:j,photoURL:A,phoneNumber:y,tenantId:P,stsTokenManager:g,createdAt:D,lastLoginAt:x});return k&&Array.isArray(k)&&(m.providerData=k.map(E=>Object.assign({},E))),C&&(m._redirectEventId=C),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new fr;i.updateFromServerResponse(t);const s=new Dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await as(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new fr;c.updateFromIdToken(r);const u=new Dt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const gu=new Map;function Xt(n){Zt(n instanceof Function,"Expected a class definition");let e=gu.get(n);return e?(Zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gu.set(n,e),e)}/**
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
 */class Ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ph.type="NONE";const mu=Ph;/**
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
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await os(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pr(Xt(mu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Xt(mu);const o=zi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const l=await d._get(o);if(l){let f;if(typeof l=="string"){const p=await os(e,{idToken:l}).catch(()=>{});if(!p)break;f=await Dt._fromGetAccountInfoResponse(e,p,l)}else f=Dt._fromJSON(e,l);d!==s&&(c=f),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new pr(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new pr(s,e,r))}}/**
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
 */function _u(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Mh(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||Dh(e))&&!e.includes("edge/"))return"Chrome";if(Oh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ch(n=rt()){return/firefox\//i.test(n)}function kh(n=rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dh(n=rt()){return/crios\//i.test(n)}function Nh(n=rt()){return/iemobile/i.test(n)}function Oh(n=rt()){return/android/i.test(n)}function Vh(n=rt()){return/blackberry/i.test(n)}function Mh(n=rt()){return/webos/i.test(n)}function pa(n=rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sy(n=rt()){var e;return pa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oy(){return Yp()&&document.documentMode===10}function Lh(n=rt()){return pa(n)||Oh(n)||Mh(n)||Vh(n)||/windows phone/i.test(n)||Nh(n)}/**
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
 */function Uh(n,e=[]){let t;switch(n){case"Browser":t=_u(rt());break;case"Worker":t=`${_u(rt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${r}`}/**
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
 */class ay{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function cy(n,e={}){return kn(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const uy=6;class ly{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yu(this),this.idTokenSubscription=new yu(this),this.beforeStateQueue=new ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Th,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await os(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Yt(this));const t=e?xe(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cy(this),t=new ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&B_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Yn(n){return xe(n)}class yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ig(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dy(n){Ds=n}function xh(n){return Ds.loadJS(n)}function fy(){return Ds.recaptchaEnterpriseScript}function py(){return Ds.gapiScript}function gy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class my{constructor(){this.enterprise=new _y}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _y{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yy="recaptcha-enterprise",Fh="NO_RECAPTCHA";class vy{constructor(e){this.type=yy,this.auth=Yn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{X_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Q_(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;fu(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Fh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new my().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&fu(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fy();u.length!==0&&(u+=c),xh(u).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function vu(n,e,t,r=!1,i=!1){const s=new vy(n);let o;if(i)o=Fh;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function xo(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await vu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
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
 */function Ey(n,e){const t=Pn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(wn(s,e??{}))return i;Vt(i,"already-initialized")}return t.initialize({options:e})}function wy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ty(n,e,t){const r=Yn(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Bh(e),{host:o,port:c}=Iy(e),u=c===null?"":`:${c}`,d={url:`${s}//${o}${u}/`},l=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(wn(d,r.config.emulator)&&wn(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Ay()}function Bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Iy(n){const e=Bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Eu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Eu(o)}}}function Eu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ay(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,t){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function by(n,e){return kn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ry(n,e){return pi(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}/**
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
 */async function Sy(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function Py(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
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
 */class ri extends ga{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ri(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ri(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xo(e,t,"signInWithPassword",Ry);case"emailLink":return Sy(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xo(e,r,"signUpPassword",by);case"emailLink":return Py(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gr(n,e){return pi(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
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
 */const Cy="http://localhost";class Hn extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=la(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gr(e,t)}buildRequest(){const e={requestUri:Cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
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
 */function ky(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dy(n){const e=$r(Hr(n)).link,t=e?$r(Hr(e)).deep_link_id:null,r=$r(Hr(n)).deep_link_id;return(r?$r(Hr(r)).link:null)||r||t||e||n}class ma{constructor(e){var t,r,i,s,o,c;const u=$r(Hr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,l=(r=u.oobCode)!==null&&r!==void 0?r:null,f=ky((i=u.mode)!==null&&i!==void 0?i:null);ee(d&&l&&f,"argument-error"),this.apiKey=d,this.operation=f,this.code=l,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Dy(e);try{return new ma(t)}catch{return null}}}/**
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
 */class Ar{constructor(){this.providerId=Ar.PROVIDER_ID}static credential(e,t){return ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ma.parseLink(t);return ee(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}Ar.PROVIDER_ID="password";Ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gi extends jh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends gi{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class ln extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ln.credential(t,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class hn extends gi{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends gi{constructor(){super("twitter.com")}static credential(e,t){return Hn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function Ny(n,e){return pi(n,"POST","/v1/accounts:signUp",Cn(n,e))}/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Dt._fromIdTokenResponse(e,r,i),o=wu(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=wu(r);return new zn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function wu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class cs extends Rt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new cs(e,t,r,i)}}function qh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,s,e,r):s})}async function Oy(n,e,t=!1){const r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zn._forOperation(n,"link",r)}/**
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
 */async function Vy(n,e,t=!1){const{auth:r}=n;if(_t(r.app))return Promise.reject(Yt(r));const i="reauthenticate";try{const s=await ni(n,qh(r,i,e,n),t);ee(s.idToken,r,"internal-error");const o=fa(s.idToken);ee(o,r,"internal-error");const{sub:c}=o;return ee(n.uid===c,r,"user-mismatch"),zn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function $h(n,e,t=!1){if(_t(n.app))return Promise.reject(Yt(n));const r="signIn",i=await qh(n,r,e),s=await zn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function My(n,e){return $h(Yn(n),e)}/**
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
 */async function Hh(n){const e=Yn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ly(n,e,t){if(_t(n.app))return Promise.reject(Yt(n));const r=Yn(n),o=await xo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ny).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hh(n),u}),c=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Uy(n,e,t){return _t(n.app)?Promise.reject(Yt(n)):My(xe(n),Ar.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hh(n),r})}function xy(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function Fy(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function By(n,e,t,r){return xe(n).onAuthStateChanged(e,t,r)}const us="__sak";/**
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
 */class zh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jy=1e3,qy=10;class Wh extends zh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qy):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wh.type="LOCAL";const $y=Wh;/**
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
 */class Gh extends zh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gh.type="SESSION";const Kh=Gh;/**
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
 */function Hy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,s)),u=await Hy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ns.receivers=[];/**
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
 */function _a(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const d=_a("",20);i.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(l),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function Wy(n){qt().location.href=n}/**
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
 */function Qh(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function Gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ky(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qy(){return Qh()?self:null}/**
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
 */const Xh="firebaseLocalStorageDb",Xy=1,ls="firebaseLocalStorage",Yh="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Os(n,e){return n.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function Yy(){const n=indexedDB.deleteDatabase(Xh);return new mi(n).toPromise()}function Fo(){const n=indexedDB.open(Xh,Xy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ls,{keyPath:Yh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await Yy(),e(await Fo()))})})}async function Tu(n,e,t){const r=Os(n,!0).put({[Yh]:e,value:t});return new mi(r).toPromise()}async function Jy(n,e){const t=Os(n,!1).get(e),r=await new mi(t).toPromise();return r===void 0?null:r.value}function Iu(n,e){const t=Os(n,!0).delete(e);return new mi(t).toPromise()}const Zy=800,ev=3;class Jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ns._getInstance(Qy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gy(),!this.activeServiceWorker)return;this.sender=new zy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ky()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await Tu(e,us,"1"),await Iu(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Iu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Os(i,!1).getAll();return new mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jh.type="LOCAL";const tv=Jh;new fi(3e4,6e4);/**
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
 */function nv(n,e){return e?Xt(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ya extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rv(n){return $h(n.auth,new ya(n),n.bypassAuthState)}function iv(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),Vy(t,new ya(n),n.bypassAuthState)}async function sv(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),Oy(t,new ya(n),n.bypassAuthState)}/**
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
 */class Zh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rv;case"linkViaPopup":case"linkViaRedirect":return sv;case"reauthViaPopup":case"reauthViaRedirect":return iv;default:Vt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ov=new fi(2e3,1e4);class hr extends Zh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=_a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ov.get())};e()}}hr.currentPopupAction=null;/**
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
 */const av="pendingRedirect",Wi=new Map;class cv extends Zh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const r=await uv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uv(n,e){const t=dv(e),r=hv(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function lv(n,e){Wi.set(n._key(),e)}function hv(n){return Xt(n._redirectPersistence)}function dv(n){return zi(av,n.config.apiKey,n.name)}async function fv(n,e,t=!1){if(_t(n.app))return Promise.reject(Yt(n));const r=Yn(n),i=nv(r,e),o=await new cv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pv=10*60*1e3;class gv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ed(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Au(e))}saveEventToCache(e){this.cachedEventUids.add(Au(e)),this.lastProcessedEventTime=Date.now()}}function Au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ed({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ed(n);default:return!1}}/**
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
 */async function _v(n,e={}){return kn(n,"GET","/v1/projects",e)}/**
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
 */const yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vv=/^https?/;async function Ev(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _v(n);for(const t of e)try{if(wv(t))return}catch{}Vt(n,"unauthorized-domain")}function wv(n){const e=Lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!vv.test(t))return!1;if(yv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Tv=new fi(3e4,6e4);function bu(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iv(n){return new Promise((e,t)=>{var r,i,s;function o(){bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bu(),t(jt(n,"network-request-failed"))},timeout:Tv.get()})}if(!((i=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qt().gapi)===null||s===void 0)&&s.load)o();else{const c=gy("iframefcb");return qt()[c]=()=>{gapi.load?o():t(jt(n,"network-request-failed"))},xh(`${py()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function Av(n){return Gi=Gi||Iv(n),Gi}/**
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
 */const bv=new fi(5e3,15e3),Rv="__/auth/iframe",Sv="emulator/auth/iframe",Pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kv(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?da(e,Sv):`https://${n.config.authDomain}/${Rv}`,r={apiKey:e.apiKey,appName:n.name,v:Xn},i=Cv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${di(r).slice(1)}`}async function Dv(n){const e=await Av(n),t=qt().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:kv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jt(n,"network-request-failed"),c=qt().setTimeout(()=>{s(o)},bv.get());function u(){qt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ov=500,Vv=600,Mv="_blank",Lv="http://localhost";class Ru{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uv(n,e,t,r=Ov,i=Vv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Nv),{width:r.toString(),height:i.toString(),top:s,left:o}),d=rt().toLowerCase();t&&(c=Dh(d)?Mv:t),Ch(d)&&(e=e||Lv,u.scrollbars="yes");const l=Object.entries(u).reduce((p,[y,A])=>`${p}${y}=${A},`,"");if(sy(d)&&c!=="_self")return xv(e||"",c),new Ru(null);const f=window.open(e||"",c,l);ee(f,n,"popup-blocked");try{f.focus()}catch{}return new Ru(f)}function xv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Fv="__/auth/handler",Bv="emulator/auth/handler",jv=encodeURIComponent("fac");async function Su(n,e,t,r,i,s){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xn,eventId:i};if(e instanceof jh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",rg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(e instanceof gi){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const u=await n._getAppCheckToken(),d=u?`#${jv}=${encodeURIComponent(u)}`:"";return`${qv(n)}?${di(c).slice(1)}${d}`}function qv({config:n}){return n.emulator?da(n,Bv):`https://${n.authDomain}/${Fv}`}/**
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
 */const To="webStorageSupport";class $v{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kh,this._completeRedirectFn=fv,this._overrideRedirectResult=lv}async _openPopup(e,t,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Su(e,t,r,Lo(),i);return Uv(e,o,_a())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Su(e,t,r,Lo(),i);return Wy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Dv(e),r=new gv(e);return t.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(To,{type:To},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[To];o!==void 0&&t(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ev(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lh()||kh()||pa()}}const Hv=$v;var Pu="@firebase/auth",Cu="1.10.0";/**
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
 */class zv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gv(n){Ot(new bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uh(n)},d=new hy(r,i,s,u);return wy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new bt("auth-internal",e=>{const t=Yn(e.getProvider("auth").getImmediate());return(r=>new zv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Pu,Cu,Wv(n)),ht(Pu,Cu,"esm2017")}/**
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
 */const Kv=5*60,Qv=ql("authIdTokenMaxAge")||Kv;let ku=null;const Xv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qv)return;const i=t==null?void 0:t.token;ku!==i&&(ku=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yv(n=Ps()){const e=Pn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ey(n,{popupRedirectResolver:Hv,persistence:[tv,$y,Kh]}),r=ql("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Xv(s.toString());Fy(t,o,()=>o(t.currentUser)),xy(t,c=>o(c))}}const i=Fl("auth");return i&&Ty(t,`http://${i}`),t}function Jv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=jt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Jv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gv("Browser");var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,td;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function m(){}m.prototype=g.prototype,b.D=g.prototype,b.prototype=new m,b.prototype.constructor=b,b.C=function(E,w,T){for(var v=Array(arguments.length-2),N=2;N<arguments.length;N++)v[N-2]=arguments[N];return g.prototype[w].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,m){m||(m=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(m++)|g.charCodeAt(m++)<<8|g.charCodeAt(m++)<<16|g.charCodeAt(m++)<<24;else for(w=0;16>w;++w)E[w]=g[m++]|g[m++]<<8|g[m++]<<16|g[m++]<<24;g=b.g[0],m=b.g[1],w=b.g[2];var T=b.g[3],v=g+(T^m&(w^T))+E[0]+3614090360&4294967295;g=m+(v<<7&4294967295|v>>>25),v=T+(w^g&(m^w))+E[1]+3905402710&4294967295,T=g+(v<<12&4294967295|v>>>20),v=w+(m^T&(g^m))+E[2]+606105819&4294967295,w=T+(v<<17&4294967295|v>>>15),v=m+(g^w&(T^g))+E[3]+3250441966&4294967295,m=w+(v<<22&4294967295|v>>>10),v=g+(T^m&(w^T))+E[4]+4118548399&4294967295,g=m+(v<<7&4294967295|v>>>25),v=T+(w^g&(m^w))+E[5]+1200080426&4294967295,T=g+(v<<12&4294967295|v>>>20),v=w+(m^T&(g^m))+E[6]+2821735955&4294967295,w=T+(v<<17&4294967295|v>>>15),v=m+(g^w&(T^g))+E[7]+4249261313&4294967295,m=w+(v<<22&4294967295|v>>>10),v=g+(T^m&(w^T))+E[8]+1770035416&4294967295,g=m+(v<<7&4294967295|v>>>25),v=T+(w^g&(m^w))+E[9]+2336552879&4294967295,T=g+(v<<12&4294967295|v>>>20),v=w+(m^T&(g^m))+E[10]+4294925233&4294967295,w=T+(v<<17&4294967295|v>>>15),v=m+(g^w&(T^g))+E[11]+2304563134&4294967295,m=w+(v<<22&4294967295|v>>>10),v=g+(T^m&(w^T))+E[12]+1804603682&4294967295,g=m+(v<<7&4294967295|v>>>25),v=T+(w^g&(m^w))+E[13]+4254626195&4294967295,T=g+(v<<12&4294967295|v>>>20),v=w+(m^T&(g^m))+E[14]+2792965006&4294967295,w=T+(v<<17&4294967295|v>>>15),v=m+(g^w&(T^g))+E[15]+1236535329&4294967295,m=w+(v<<22&4294967295|v>>>10),v=g+(w^T&(m^w))+E[1]+4129170786&4294967295,g=m+(v<<5&4294967295|v>>>27),v=T+(m^w&(g^m))+E[6]+3225465664&4294967295,T=g+(v<<9&4294967295|v>>>23),v=w+(g^m&(T^g))+E[11]+643717713&4294967295,w=T+(v<<14&4294967295|v>>>18),v=m+(T^g&(w^T))+E[0]+3921069994&4294967295,m=w+(v<<20&4294967295|v>>>12),v=g+(w^T&(m^w))+E[5]+3593408605&4294967295,g=m+(v<<5&4294967295|v>>>27),v=T+(m^w&(g^m))+E[10]+38016083&4294967295,T=g+(v<<9&4294967295|v>>>23),v=w+(g^m&(T^g))+E[15]+3634488961&4294967295,w=T+(v<<14&4294967295|v>>>18),v=m+(T^g&(w^T))+E[4]+3889429448&4294967295,m=w+(v<<20&4294967295|v>>>12),v=g+(w^T&(m^w))+E[9]+568446438&4294967295,g=m+(v<<5&4294967295|v>>>27),v=T+(m^w&(g^m))+E[14]+3275163606&4294967295,T=g+(v<<9&4294967295|v>>>23),v=w+(g^m&(T^g))+E[3]+4107603335&4294967295,w=T+(v<<14&4294967295|v>>>18),v=m+(T^g&(w^T))+E[8]+1163531501&4294967295,m=w+(v<<20&4294967295|v>>>12),v=g+(w^T&(m^w))+E[13]+2850285829&4294967295,g=m+(v<<5&4294967295|v>>>27),v=T+(m^w&(g^m))+E[2]+4243563512&4294967295,T=g+(v<<9&4294967295|v>>>23),v=w+(g^m&(T^g))+E[7]+1735328473&4294967295,w=T+(v<<14&4294967295|v>>>18),v=m+(T^g&(w^T))+E[12]+2368359562&4294967295,m=w+(v<<20&4294967295|v>>>12),v=g+(m^w^T)+E[5]+4294588738&4294967295,g=m+(v<<4&4294967295|v>>>28),v=T+(g^m^w)+E[8]+2272392833&4294967295,T=g+(v<<11&4294967295|v>>>21),v=w+(T^g^m)+E[11]+1839030562&4294967295,w=T+(v<<16&4294967295|v>>>16),v=m+(w^T^g)+E[14]+4259657740&4294967295,m=w+(v<<23&4294967295|v>>>9),v=g+(m^w^T)+E[1]+2763975236&4294967295,g=m+(v<<4&4294967295|v>>>28),v=T+(g^m^w)+E[4]+1272893353&4294967295,T=g+(v<<11&4294967295|v>>>21),v=w+(T^g^m)+E[7]+4139469664&4294967295,w=T+(v<<16&4294967295|v>>>16),v=m+(w^T^g)+E[10]+3200236656&4294967295,m=w+(v<<23&4294967295|v>>>9),v=g+(m^w^T)+E[13]+681279174&4294967295,g=m+(v<<4&4294967295|v>>>28),v=T+(g^m^w)+E[0]+3936430074&4294967295,T=g+(v<<11&4294967295|v>>>21),v=w+(T^g^m)+E[3]+3572445317&4294967295,w=T+(v<<16&4294967295|v>>>16),v=m+(w^T^g)+E[6]+76029189&4294967295,m=w+(v<<23&4294967295|v>>>9),v=g+(m^w^T)+E[9]+3654602809&4294967295,g=m+(v<<4&4294967295|v>>>28),v=T+(g^m^w)+E[12]+3873151461&4294967295,T=g+(v<<11&4294967295|v>>>21),v=w+(T^g^m)+E[15]+530742520&4294967295,w=T+(v<<16&4294967295|v>>>16),v=m+(w^T^g)+E[2]+3299628645&4294967295,m=w+(v<<23&4294967295|v>>>9),v=g+(w^(m|~T))+E[0]+4096336452&4294967295,g=m+(v<<6&4294967295|v>>>26),v=T+(m^(g|~w))+E[7]+1126891415&4294967295,T=g+(v<<10&4294967295|v>>>22),v=w+(g^(T|~m))+E[14]+2878612391&4294967295,w=T+(v<<15&4294967295|v>>>17),v=m+(T^(w|~g))+E[5]+4237533241&4294967295,m=w+(v<<21&4294967295|v>>>11),v=g+(w^(m|~T))+E[12]+1700485571&4294967295,g=m+(v<<6&4294967295|v>>>26),v=T+(m^(g|~w))+E[3]+2399980690&4294967295,T=g+(v<<10&4294967295|v>>>22),v=w+(g^(T|~m))+E[10]+4293915773&4294967295,w=T+(v<<15&4294967295|v>>>17),v=m+(T^(w|~g))+E[1]+2240044497&4294967295,m=w+(v<<21&4294967295|v>>>11),v=g+(w^(m|~T))+E[8]+1873313359&4294967295,g=m+(v<<6&4294967295|v>>>26),v=T+(m^(g|~w))+E[15]+4264355552&4294967295,T=g+(v<<10&4294967295|v>>>22),v=w+(g^(T|~m))+E[6]+2734768916&4294967295,w=T+(v<<15&4294967295|v>>>17),v=m+(T^(w|~g))+E[13]+1309151649&4294967295,m=w+(v<<21&4294967295|v>>>11),v=g+(w^(m|~T))+E[4]+4149444226&4294967295,g=m+(v<<6&4294967295|v>>>26),v=T+(m^(g|~w))+E[11]+3174756917&4294967295,T=g+(v<<10&4294967295|v>>>22),v=w+(g^(T|~m))+E[2]+718787259&4294967295,w=T+(v<<15&4294967295|v>>>17),v=m+(T^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var m=g-this.blockSize,E=this.B,w=this.h,T=0;T<g;){if(w==0)for(;T<=m;)i(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(E[w++]=b.charCodeAt(T++),w==this.blockSize){i(this,E),w=0;break}}else for(;T<g;)if(E[w++]=b[T++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var m=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=m&255,m/=256;for(this.u(b),b=Array(16),g=m=0;4>g;++g)for(var E=0;32>E;E+=8)b[m++]=this.g[g]>>>E&255;return b};function s(b,g){var m=c;return Object.prototype.hasOwnProperty.call(m,b)?m[b]:m[b]=g(b)}function o(b,g){this.h=g;for(var m=[],E=!0,w=b.length-1;0<=w;w--){var T=b[w]|0;E&&T==g||(m[w]=T,E=!1)}this.g=m}var c={};function u(b){return-128<=b&&128>b?s(b,function(g){return new o([g|0],0>g?-1:0)}):new o([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return C(d(-b));for(var g=[],m=1,E=0;b>=m;E++)g[E]=b/m|0,m*=4294967296;return new o(g,0)}function l(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return C(l(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(g,8)),E=f,w=0;w<b.length;w+=8){var T=Math.min(8,b.length-w),v=parseInt(b.substring(w,w+T),g);8>T?(T=d(Math.pow(g,T)),E=E.j(T).add(d(v))):(E=E.j(m),E=E.add(d(v)))}return E}var f=u(0),p=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(P(this))return-C(this).m();for(var b=0,g=1,m=0;m<this.g.length;m++){var E=this.i(m);b+=(0<=E?E:4294967296+E)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+C(this).toString(b);for(var g=d(Math.pow(b,6)),m=this,E="";;){var w=O(m,g).g;m=D(m,w.j(g));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(b);if(m=w,A(m))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=D(this,b),P(b)?-1:A(b)?0:1};function C(b){for(var g=b.g.length,m=[],E=0;E<g;E++)m[E]=~b.g[E];return new o(m,~b.h).add(p)}n.abs=function(){return P(this)?C(this):this},n.add=function(b){for(var g=Math.max(this.g.length,b.g.length),m=[],E=0,w=0;w<=g;w++){var T=E+(this.i(w)&65535)+(b.i(w)&65535),v=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=v>>>16,T&=65535,v&=65535,m[w]=v<<16|T}return new o(m,m[m.length-1]&-2147483648?-1:0)};function D(b,g){return b.add(C(g))}n.j=function(b){if(A(this)||A(b))return f;if(P(this))return P(b)?C(this).j(C(b)):C(C(this).j(b));if(P(b))return C(this.j(C(b)));if(0>this.l(y)&&0>b.l(y))return d(this.m()*b.m());for(var g=this.g.length+b.g.length,m=[],E=0;E<2*g;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<b.g.length;w++){var T=this.i(E)>>>16,v=this.i(E)&65535,N=b.i(w)>>>16,L=b.i(w)&65535;m[2*E+2*w]+=v*L,x(m,2*E+2*w),m[2*E+2*w+1]+=T*L,x(m,2*E+2*w+1),m[2*E+2*w+1]+=v*N,x(m,2*E+2*w+1),m[2*E+2*w+2]+=T*N,x(m,2*E+2*w+2)}for(E=0;E<g;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=g;E<2*g;E++)m[E]=0;return new o(m,0)};function x(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function M(b,g){this.g=b,this.h=g}function O(b,g){if(A(g))throw Error("division by zero");if(A(b))return new M(f,f);if(P(b))return g=O(C(b),g),new M(C(g.g),C(g.h));if(P(g))return g=O(b,C(g)),new M(C(g.g),g.h);if(30<b.g.length){if(P(b)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var m=p,E=g;0>=E.l(b);)m=j(m),E=j(E);var w=k(m,1),T=k(E,1);for(E=k(E,2),m=k(m,2);!A(E);){var v=T.add(E);0>=v.l(b)&&(w=w.add(m),T=v),E=k(E,1),m=k(m,1)}return g=D(b,w.j(g)),new M(w,g)}for(w=f;0<=b.l(g);){for(m=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=d(m),v=T.j(g);P(v)||0<v.l(b);)m-=E,T=d(m),v=T.j(g);A(T)&&(T=p),w=w.add(T),b=D(b,v)}return new M(w,b)}n.A=function(b){return O(this,b).h},n.and=function(b){for(var g=Math.max(this.g.length,b.g.length),m=[],E=0;E<g;E++)m[E]=this.i(E)&b.i(E);return new o(m,this.h&b.h)},n.or=function(b){for(var g=Math.max(this.g.length,b.g.length),m=[],E=0;E<g;E++)m[E]=this.i(E)|b.i(E);return new o(m,this.h|b.h)},n.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),m=[],E=0;E<g;E++)m[E]=this.i(E)^b.i(E);return new o(m,this.h^b.h)};function j(b){for(var g=b.g.length+1,m=[],E=0;E<g;E++)m[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(m,b.h)}function k(b,g){var m=g>>5;g%=32;for(var E=b.g.length-m,w=[],T=0;T<E;T++)w[T]=0<g?b.i(T+m)>>>g|b.i(T+m+1)<<32-g:b.i(T+m);return new o(w,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,td=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=l,yn=o}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nd,zr,rd,Ki,Bo,id,sd,od;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,_){return a==Array.prototype||a==Object.prototype||(a[h]=_.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var h=0;h<a.length;++h){var _=a[h];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var _=r;a=a.split(".");for(var I=0;I<a.length-1;I++){var V=a[I];if(!(V in _))break e;_=_[V]}a=a[a.length-1],I=_[a],h=h(I),h!=I&&h!=null&&e(_,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var _=0,I=!1,V={next:function(){if(!I&&_<a.length){var F=_++;return{value:h(F,a[F]),done:!1}}return I=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,_){return a.call.apply(a.bind,arguments)}function f(a,h,_){if(!a)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,I),a.apply(h,V)}}return function(){return a.apply(h,arguments)}}function p(a,h,_){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?l:f,p.apply(null,arguments)}function y(a,h){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),a.apply(this,I)}}function A(a,h){function _(){}_.prototype=h.prototype,a.aa=h.prototype,a.prototype=new _,a.prototype.constructor=a,a.Qb=function(I,V,F){for(var K=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)K[_e-2]=arguments[_e];return h.prototype[V].apply(I,K)}}function P(a){const h=a.length;if(0<h){const _=Array(h);for(let I=0;I<h;I++)_[I]=a[I];return _}return[]}function C(a,h){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(u(I)){const V=a.length||0,F=I.length||0;a.length=V+F;for(let K=0;K<F;K++)a[V+K]=I[K]}else a.push(I)}}class D{constructor(h,_){this.i=h,this.j=_,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function k(a,h,_){for(const I in a)h.call(_,a[I],I,a)}function b(a,h){for(const _ in a)h.call(void 0,a[_],_,a)}function g(a){const h={};for(const _ in a)h[_]=a[_];return h}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let _,I;for(let V=1;V<arguments.length;V++){I=arguments[V];for(_ in I)a[_]=I[_];for(let F=0;F<m.length;F++)_=m[F],Object.prototype.hasOwnProperty.call(I,_)&&(a[_]=I[_])}}function w(a){var h=1;a=a.split(":");const _=[];for(;0<h&&a.length;)_.push(a.shift()),h--;return a.length&&_.push(a.join(":")),_}function T(a){c.setTimeout(()=>{throw a},0)}function v(){var a=U;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,_){const I=L.get();I.set(h,_),this.h?this.h.next=I:this.g=I,this.h=I}}var L=new D(()=>new S,a=>a.reset());class S{constructor(){this.next=this.g=this.h=null}set(h,_){this.h=h,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let R,q=!1,U=new N,z=()=>{const a=c.Promise.resolve(void 0);R=()=>{a.then(J)}};var J=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(_){T(_)}var h=L;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}q=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var W=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const _=()=>{};c.addEventListener("test",_,h),c.removeEventListener("test",_,h)}catch{}return a}();function B(a,h){if(Q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var _=this.type=a.type,I=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(j){e:{try{O(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else _=="mouseover"?h=a.fromElement:_=="mouseout"&&(h=a.toElement);this.relatedTarget=h,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ne[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&B.aa.h.call(this)}}A(B,Q);var ne={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),pe=0;function ue(a,h,_,I,V){this.listener=a,this.proxy=null,this.src=h,this.type=_,this.capture=!!I,this.ha=V,this.key=++pe,this.da=this.fa=!1}function he(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,_,I,V){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var K=St(a,h,I,V);return-1<K?(h=a[K],_||(h.fa=!1)):(h=new ue(h,this.src,F,!!I,V),h.fa=_,a.push(h)),h};function be(a,h){var _=h.type;if(_ in a.g){var I=a.g[_],V=Array.prototype.indexOf.call(I,h,void 0),F;(F=0<=V)&&Array.prototype.splice.call(I,V,1),F&&(he(h),a.g[_].length==0&&(delete a.g[_],a.h--))}}function St(a,h,_,I){for(var V=0;V<a.length;++V){var F=a[V];if(!F.da&&F.listener==h&&F.capture==!!_&&F.ha==I)return V}return-1}var at="closure_lm_"+(1e6*Math.random()|0),ve={};function Fe(a,h,_,I,V){if(Array.isArray(h)){for(var F=0;F<h.length;F++)Fe(a,h[F],_,I,V);return null}return _=Xe(_),a&&a[fe]?a.K(h,_,d(I)?!!I.capture:!1,V):Ee(a,h,_,!1,I,V)}function Ee(a,h,_,I,V,F){if(!h)throw Error("Invalid event type");var K=d(V)?!!V.capture:!!V,_e=Ae(a);if(_e||(a[at]=_e=new ye(a)),_=_e.add(h,_,I,K,F),_.proxy)return _;if(I=me(),_.proxy=I,I.src=a,I.listener=_,a.addEventListener)W||(V=K),V===void 0&&(V=!1),a.addEventListener(h.toString(),I,V);else if(a.attachEvent)a.attachEvent(Re(h.toString()),I);else if(a.addListener&&a.removeListener)a.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function me(){function a(_){return h.call(a.src,a.listener,_)}const h=it;return a}function Oe(a,h,_,I,V){if(Array.isArray(h))for(var F=0;F<h.length;F++)Oe(a,h[F],_,I,V);else I=d(I)?!!I.capture:!!I,_=Xe(_),a&&a[fe]?(a=a.i,h=String(h).toString(),h in a.g&&(F=a.g[h],_=St(F,_,I,V),-1<_&&(he(F[_]),Array.prototype.splice.call(F,_,1),F.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ae(a))&&(h=a.g[h.toString()],a=-1,h&&(a=St(h,_,I,V)),(_=-1<a?h[a]:null)&&Be(_))}function Be(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fe])be(h.i,a);else{var _=a.type,I=a.proxy;h.removeEventListener?h.removeEventListener(_,I,a.capture):h.detachEvent?h.detachEvent(Re(_),I):h.addListener&&h.removeListener&&h.removeListener(I),(_=Ae(h))?(be(_,a),_.h==0&&(_.src=null,h[at]=null)):he(a)}}}function Re(a){return a in ve?ve[a]:ve[a]="on"+a}function it(a,h){if(a.da)a=!0;else{h=new B(h,this);var _=a.listener,I=a.ha||a.src;a.fa&&Be(a),a=_.call(I,h)}return a}function Ae(a){return a=a[at],a instanceof ye?a:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xe(a){return typeof a=="function"?a:(a[ge]||(a[ge]=function(h){return a.handleEvent(h)}),a[ge])}function we(){G.call(this),this.i=new ye(this),this.M=this,this.F=null}A(we,G),we.prototype[fe]=!0,we.prototype.removeEventListener=function(a,h,_,I){Oe(this,a,h,_,I)};function Ve(a,h){var _,I=a.F;if(I)for(_=[];I;I=I.F)_.push(I);if(a=a.M,I=h.type||h,typeof h=="string")h=new Q(h,a);else if(h instanceof Q)h.target=h.target||a;else{var V=h;h=new Q(I,a),E(h,V)}if(V=!0,_)for(var F=_.length-1;0<=F;F--){var K=h.g=_[F];V=De(K,I,!0,h)&&V}if(K=h.g=a,V=De(K,I,!0,h)&&V,V=De(K,I,!1,h)&&V,_)for(F=0;F<_.length;F++)K=h.g=_[F],V=De(K,I,!1,h)&&V}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var _=a.g[h],I=0;I<_.length;I++)he(_[I]);delete a.g[h],a.h--}}this.F=null},we.prototype.K=function(a,h,_,I){return this.i.add(String(a),h,!1,_,I)},we.prototype.L=function(a,h,_,I){return this.i.add(String(a),h,!0,_,I)};function De(a,h,_,I){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,F=0;F<h.length;++F){var K=h[F];if(K&&!K.da&&K.capture==_){var _e=K.listener,We=K.ha||K.src;K.fa&&be(a.i,K),V=_e.call(We,I)!==!1&&V}}return V&&!I.defaultPrevented}function Lt(a,h,_){if(typeof a=="function")_&&(a=p(a,_));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function $e(a){a.g=Lt(()=>{a.g=null,a.i&&(a.i=!1,$e(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ft extends G{constructor(h,_){super(),this.m=h,this.l=_,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(a){G.call(this),this.h=a,this.g={}}A(He,G);var Et=[];function pt(a){k(a.g,function(h,_){this.g.hasOwnProperty(_)&&Be(h)},a),a.g={}}He.prototype.N=function(){He.aa.N.call(this),pt(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pt=c.JSON.stringify,kr=c.JSON.parse,Js=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Dn(){}Dn.prototype.h=null;function Dr(a){return a.h||(a.h=a.i())}function nn(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wt(){Q.call(this,"d")}A(wt,Q);function Tt(){Q.call(this,"c")}A(Tt,Q);var ct={},rn=null;function On(){return rn=rn||new we}ct.La="serverreachability";function Ut(a){Q.call(this,ct.La,a)}A(Ut,Q);function gt(a){const h=On();Ve(h,new Ut(h))}ct.STAT_EVENT="statevent";function oc(a,h){Q.call(this,ct.STAT_EVENT,a),this.stat=h}A(oc,Q);function st(a){const h=On();Ve(h,new oc(h,a))}ct.Ma="timingevent";function ac(a,h){Q.call(this,ct.Ma,a),this.size=h}A(ac,Q);function Nr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Or(){this.g=!0}Or.prototype.xa=function(){this.g=!1};function lp(a,h,_,I,V,F){a.info(function(){if(a.g)if(F)for(var K="",_e=F.split("&"),We=0;We<_e.length;We++){var le=_e[We].split("=");if(1<le.length){var Ye=le[0];le=le[1];var Je=Ye.split("_");K=2<=Je.length&&Je[1]=="type"?K+(Ye+"="+le+"&"):K+(Ye+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+I+") [attempt "+V+"]: "+h+`
`+_+`
`+K})}function hp(a,h,_,I,V,F,K){a.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+V+"]: "+h+`
`+_+`
`+F+" "+K})}function rr(a,h,_,I){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+fp(a,_)+(I?" "+I:"")})}function dp(a,h){a.info(function(){return"TIMEOUT: "+h})}Or.prototype.info=function(){};function fp(a,h){if(!a.g)return h;if(!h)return null;try{var _=JSON.parse(h);if(_){for(a=0;a<_.length;a++)if(Array.isArray(_[a])){var I=_[a];if(!(2>I.length)){var V=I[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<V.length;K++)V[K]=""}}}}return Pt(_)}catch{return h}}var wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zs;function Ti(){}A(Ti,Dn),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Zs=new Ti;function sn(a,h,_,I){this.j=a,this.i=h,this.l=_,this.R=I||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var lc={},eo={};function to(a,h,_){a.L=1,a.v=Ri(Gt(h)),a.m=_,a.P=!0,hc(a,null)}function hc(a,h){a.F=Date.now(),Ii(a),a.A=Gt(a.v);var _=a.A,I=a.R;Array.isArray(I)||(I=[String(I)]),bc(_.i,"t",I),a.C=0,_=a.j.J,a.h=new uc,a.g=$c(a.j,_?h:null,!a.m),0<a.O&&(a.M=new ft(p(a.Y,a,a.g),a.O)),h=a.U,_=a.g,I=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(Et[0]=V.toString()),V=Et);for(var F=0;F<V.length;F++){var K=Fe(_,V[F],I||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),gt(),lp(a.i,a.u,a.A,a.l,a.R,a.m)}sn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Kt(a)==3?h.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=Kt(this.g);var h=this.g.Ba();const or=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Je!=4||h==7||(h==8||0>=or?gt(3):gt(2)),no(this);var _=this.g.Z();this.X=_;t:if(dc(this)){var I=Nc(this.g);a="";var V=I.length,F=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Vr(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,a+=this.h.i.decode(I[h],{stream:!(F&&h==V-1)});I.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=_==200,hp(this.i,this.u,this.A,this.l,this.R,Je,_),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,We=this.g;if((_e=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(_e)){var le=_e;break t}}le=null}if(_=le)rr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ro(this,_);else{this.o=!1,this.s=3,st(12),Vn(this),Vr(this);break e}}if(this.P){_=!0;let Ct;for(;!this.J&&this.C<K.length;)if(Ct=pp(this,K),Ct==eo){Je==4&&(this.s=4,st(14),_=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==lc){this.s=4,st(15),rr(this.i,this.l,K,"[Invalid Chunk]"),_=!1;break}else rr(this.i,this.l,Ct,null),ro(this,Ct);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||K.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)rr(this.i,this.l,K,"[Invalid Chunked Response]"),Vn(this),Vr(this);else if(0<K.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),uo(Ye),Ye.M=!0,st(11))}}else rr(this.i,this.l,K,null),ro(this,K);Je==4&&Vn(this),this.o&&!this.J&&(Je==4?Fc(this.j,this):(this.o=!1,Ii(this)))}else Dp(this.g),_==400&&0<K.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Vn(this),Vr(this)}}}catch{}finally{}};function dc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function pp(a,h){var _=a.C,I=h.indexOf(`
`,_);return I==-1?eo:(_=Number(h.substring(_,I)),isNaN(_)?lc:(I+=1,I+_>h.length?eo:(h=h.slice(I,I+_),a.C=I+_,h)))}sn.prototype.cancel=function(){this.J=!0,Vn(this)};function Ii(a){a.S=Date.now()+a.I,fc(a,a.I)}function fc(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Nr(p(a.ba,a),h)}function no(a){a.B&&(c.clearTimeout(a.B),a.B=null)}sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(dp(this.i,this.A),this.L!=2&&(gt(),st(17)),Vn(this),this.s=2,Vr(this)):fc(this,this.S-a)};function Vr(a){a.j.G==0||a.J||Fc(a.j,a)}function Vn(a){no(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ro(a,h){try{var _=a.j;if(_.G!=0&&(_.g==a||io(_.h,a))){if(!a.K&&io(_.h,a)&&_.G==3){try{var I=_.Da.g.parse(h)}catch{I=null}if(Array.isArray(I)&&I.length==3){var V=I;if(V[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<a.F)Ni(_),ki(_);else break e;co(_),st(18)}}else _.za=V[1],0<_.za-_.T&&37500>V[2]&&_.F&&_.v==0&&!_.C&&(_.C=Nr(p(_.Za,_),6e3));if(1>=mc(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ln(_,11)}else if((a.K||_.g==a)&&Ni(_),!x(h))for(V=_.Da.g.parse(h),h=0;h<V.length;h++){let le=V[h];if(_.T=le[0],le=le[1],_.G==2)if(le[0]=="c"){_.K=le[1],_.ia=le[2];const Ye=le[3];Ye!=null&&(_.la=Ye,_.j.info("VER="+_.la));const Je=le[4];Je!=null&&(_.Aa=Je,_.j.info("SVER="+_.Aa));const or=le[5];or!=null&&typeof or=="number"&&0<or&&(I=1.5*or,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const Ct=a.g;if(Ct){const Vi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var F=I.h;F.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(so(F,F.h),F.h=null))}if(I.D){const lo=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;lo&&(I.ya=lo,Te(I.I,I.D,lo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-a.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var K=a;if(I.qa=qc(I,I.J?I.ia:null,I.W),K.K){_c(I.h,K);var _e=K,We=I.L;We&&(_e.I=We),_e.B&&(no(_e),Ii(_e)),I.g=K}else Uc(I);0<_.i.length&&Di(_)}else le[0]!="stop"&&le[0]!="close"||Ln(_,7);else _.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Ln(_,7):ao(_):le[0]!="noop"&&_.l&&_.l.ta(le),_.v=0)}}gt(4)}catch{}}var gp=class{constructor(a,h){this.g=a,this.map=h}};function pc(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mc(a){return a.h?1:a.g?a.g.size:0}function io(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function so(a,h){a.g?a.g.add(h):a.h=h}function _c(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}pc.prototype.cancel=function(){if(this.i=yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const _ of a.g.values())h=h.concat(_.D);return h}return P(a.i)}function mp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],_=a.length,I=0;I<_;I++)h.push(a[I]);return h}h=[],_=0;for(I in a)h[_++]=a[I];return h}function _p(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var _=0;_<a;_++)h.push(_);return h}h=[],_=0;for(const I in a)h[_++]=I;return h}}}function vc(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var _=_p(a),I=mp(a),V=I.length,F=0;F<V;F++)h.call(void 0,I[F],_&&_[F],a)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yp(a,h){if(a){a=a.split("&");for(var _=0;_<a.length;_++){var I=a[_].indexOf("="),V=null;if(0<=I){var F=a[_].substring(0,I);V=a[_].substring(I+1)}else F=a[_];h(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Mn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mn){this.h=a.h,Ai(this,a.j),this.o=a.o,this.g=a.g,bi(this,a.s),this.l=a.l;var h=a.i,_=new Ur;_.i=h.i,h.g&&(_.g=new Map(h.g),_.h=h.h),wc(this,_),this.m=a.m}else a&&(h=String(a).match(Ec))?(this.h=!1,Ai(this,h[1]||"",!0),this.o=Mr(h[2]||""),this.g=Mr(h[3]||"",!0),bi(this,h[4]),this.l=Mr(h[5]||"",!0),wc(this,h[6]||"",!0),this.m=Mr(h[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}Mn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Lr(h,Tc,!0),":");var _=this.g;return(_||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Lr(h,Tc,!0),"@"),a.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&a.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&a.push("/"),a.push(Lr(_,_.charAt(0)=="/"?wp:Ep,!0))),(_=this.i.toString())&&a.push("?",_),(_=this.m)&&a.push("#",Lr(_,Ip)),a.join("")};function Gt(a){return new Mn(a)}function Ai(a,h,_){a.j=_?Mr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function wc(a,h,_){h instanceof Ur?(a.i=h,Ap(a.i,a.h)):(_||(h=Lr(h,Tp)),a.i=new Ur(h,a.h))}function Te(a,h,_){a.i.set(h,_)}function Ri(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Mr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Lr(a,h,_){return typeof a=="string"?(a=encodeURI(a).replace(h,vp),_&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tc=/[#\/\?@]/g,Ep=/[#\?:]/g,wp=/[#\?]/g,Tp=/[#\?@]/g,Ip=/#/g;function Ur(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function on(a){a.g||(a.g=new Map,a.h=0,a.i&&yp(a.i,function(h,_){a.add(decodeURIComponent(h.replace(/\+/g," ")),_)}))}n=Ur.prototype,n.add=function(a,h){on(this),this.i=null,a=ir(this,a);var _=this.g.get(a);return _||this.g.set(a,_=[]),_.push(h),this.h+=1,this};function Ic(a,h){on(a),h=ir(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ac(a,h){return on(a),h=ir(a,h),a.g.has(h)}n.forEach=function(a,h){on(this),this.g.forEach(function(_,I){_.forEach(function(V){a.call(h,V,I,this)},this)},this)},n.na=function(){on(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),_=[];for(let I=0;I<h.length;I++){const V=a[I];for(let F=0;F<V.length;F++)_.push(h[I])}return _},n.V=function(a){on(this);let h=[];if(typeof a=="string")Ac(this,a)&&(h=h.concat(this.g.get(ir(this,a))));else{a=Array.from(this.g.values());for(let _=0;_<a.length;_++)h=h.concat(a[_])}return h},n.set=function(a,h){return on(this),this.i=null,a=ir(this,a),Ac(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function bc(a,h,_){Ic(a,h),0<_.length&&(a.i=null,a.g.set(ir(a,h),P(_)),a.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var _=0;_<h.length;_++){var I=h[_];const F=encodeURIComponent(String(I)),K=this.V(I);for(I=0;I<K.length;I++){var V=F;K[I]!==""&&(V+="="+encodeURIComponent(String(K[I]))),a.push(V)}}return this.i=a.join("&")};function ir(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ap(a,h){h&&!a.j&&(on(a),a.i=null,a.g.forEach(function(_,I){var V=I.toLowerCase();I!=V&&(Ic(this,I),bc(this,V,_))},a)),a.j=h}function bp(a,h){const _=new Or;if(c.Image){const I=new Image;I.onload=y(an,_,"TestLoadImage: loaded",!0,h,I),I.onerror=y(an,_,"TestLoadImage: error",!1,h,I),I.onabort=y(an,_,"TestLoadImage: abort",!1,h,I),I.ontimeout=y(an,_,"TestLoadImage: timeout",!1,h,I),c.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=a}else h(!1)}function Rp(a,h){const _=new Or,I=new AbortController,V=setTimeout(()=>{I.abort(),an(_,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:I.signal}).then(F=>{clearTimeout(V),F.ok?an(_,"TestPingServer: ok",!0,h):an(_,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),an(_,"TestPingServer: error",!1,h)})}function an(a,h,_,I,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),I(_)}catch{}}function Sp(){this.g=new Js}function Pp(a,h,_){const I=_||"";try{vc(a,function(V,F){let K=V;d(V)&&(K=Pt(V)),h.push(I+F+"="+encodeURIComponent(K))})}catch(V){throw h.push(I+"type="+encodeURIComponent("_badmap")),V}}function Si(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Si,Dn),Si.prototype.g=function(){return new Pi(this.l,this.j)},Si.prototype.i=function(a){return function(){return a}}({});function Pi(a,h){we.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Pi,we),n=Pi.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Fr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xr(this):Fr(this),this.readyState==3&&Rc(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,xr(this))},n.Qa=function(a){this.g&&(this.response=a,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var _=h.next();!_.done;)_=_.value,a.push(_[0]+": "+_[1]),_=h.next();return a.join(`\r
`)};function Fr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sc(a){let h="";return k(a,function(_,I){h+=I,h+=":",h+=_,h+=`\r
`}),h}function oo(a,h,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=Sc(_),typeof a=="string"?_!=null&&encodeURIComponent(String(_)):Te(a,h,_))}function Pe(a){we.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pe,we);var Cp=/^https?$/i,kp=["POST","PUT"];n=Pe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zs.g(),this.v=this.o?Dr(this.o):Dr(Zs),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(F){Pc(this,F);return}if(a=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var V in I)_.set(V,I[V]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const F of I.keys())_.set(F,I.get(F));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(F=>F.toLowerCase()=="content-type"),V=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(kp,h,void 0))||I||V||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of _)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dc(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Pc(this,F)}};function Pc(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Cc(a),Ci(a)}function Cc(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ve(this,"complete"),Ve(this,"abort"),Ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?kc(this):this.bb())},n.bb=function(){kc(this)};function kc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Kt(a)!=4||a.Z()!=2)){if(a.u&&Kt(a)==4)Lt(a.Ea,0,a);else if(Ve(a,"readystatechange"),Kt(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var _;if(!(_=h)){var I;if(I=K===0){var V=String(a.D).match(Ec)[1]||null;!V&&c.self&&c.self.location&&(V=c.self.location.protocol.slice(0,-1)),I=!Cp.test(V?V.toLowerCase():"")}_=I}if(_)Ve(a,"complete"),Ve(a,"success");else{a.m=6;try{var F=2<Kt(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Cc(a)}}finally{Ci(a)}}}}function Ci(a,h){if(a.g){Dc(a);const _=a.g,I=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ve(a,"ready");try{_.onreadystatechange=I}catch{}}}function Dc(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Kt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),kr(h)}};function Nc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Dp(a){const h={};a=(a.g&&2<=Kt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<a.length;I++){if(x(a[I]))continue;var _=w(a[I]);const V=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const F=h[V]||[];h[V]=F,F.push(_)}b(h,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(a,h,_){return _&&_.internalChannelParams&&_.internalChannelParams[a]||h}function Oc(a){this.Aa=0,this.i=[],this.j=new Or,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Br("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Br("baseRetryDelayMs",5e3,a),this.cb=Br("retryDelaySeedMs",1e4,a),this.Wa=Br("forwardChannelMaxRetries",2,a),this.wa=Br("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pc(a&&a.concurrentRequestLimit),this.Da=new Sp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oc.prototype,n.la=8,n.G=1,n.connect=function(a,h,_,I){st(0),this.W=a,this.H=h||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=qc(this,null,this.W),Di(this)};function ao(a){if(Vc(a),a.G==3){var h=a.U++,_=Gt(a.I);if(Te(_,"SID",a.K),Te(_,"RID",h),Te(_,"TYPE","terminate"),jr(a,_),h=new sn(a,a.j,h),h.L=2,h.v=Ri(Gt(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!_&&c.Image&&(new Image().src=h.v,_=!0),_||(h.g=$c(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ii(h)}jc(a)}function ki(a){a.g&&(uo(a),a.g.cancel(),a.g=null)}function Vc(a){ki(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ni(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Di(a){if(!gc(a.h)&&!a.s){a.s=!0;var h=a.Ga;R||z(),q||(R(),q=!0),U.add(h,a),a.B=0}}function Np(a,h){return mc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Nr(p(a.Ga,a,h),Bc(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new sn(this,this.j,a);let F=this.o;if(this.S&&(F?(F=g(F),E(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var h=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(h+=I,4096<h){h=_;break e}if(h===4096||_===this.i.length-1){h=_+1;break e}}h=1e3}else h=1e3;h=Lc(this,V,h),_=Gt(this.I),Te(_,"RID",a),Te(_,"CVER",22),this.D&&Te(_,"X-HTTP-Session-Id",this.D),jr(this,_),F&&(this.O?h="headers="+encodeURIComponent(String(Sc(F)))+"&"+h:this.m&&oo(_,this.m,F)),so(this.h,V),this.Ua&&Te(_,"TYPE","init"),this.P?(Te(_,"$req",h),Te(_,"SID","null"),V.T=!0,to(V,_,null)):to(V,_,h),this.G=2}}else this.G==3&&(a?Mc(this,a):this.i.length==0||gc(this.h)||Mc(this))};function Mc(a,h){var _;h?_=h.l:_=a.U++;const I=Gt(a.I);Te(I,"SID",a.K),Te(I,"RID",_),Te(I,"AID",a.T),jr(a,I),a.m&&a.o&&oo(I,a.m,a.o),_=new sn(a,a.j,_,a.B+1),a.m===null&&(_.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Lc(a,_,1e3),_.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),so(a.h,_),to(_,I,h)}function jr(a,h){a.H&&k(a.H,function(_,I){Te(h,I,_)}),a.l&&vc({},function(_,I){Te(h,I,_)})}function Lc(a,h,_){_=Math.min(a.i.length,_);var I=a.l?p(a.l.Na,a.l,a):null;e:{var V=a.i;let F=-1;for(;;){const K=["count="+_];F==-1?0<_?(F=V[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let _e=!0;for(let We=0;We<_;We++){let le=V[We].g;const Ye=V[We].map;if(le-=F,0>le)F=Math.max(0,V[We].g-100),_e=!1;else try{Pp(Ye,K,"req"+le+"_")}catch{I&&I(Ye)}}if(_e){I=K.join("&");break e}}}return a=a.i.splice(0,_),h.D=a,I}function Uc(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;R||z(),q||(R(),q=!0),U.add(h,a),a.v=0}}function co(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Nr(p(a.Fa,a),Bc(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Nr(p(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),ki(this),xc(this))};function uo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function xc(a){a.g=new sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Gt(a.qa);Te(h,"RID","rpc"),Te(h,"SID",a.K),Te(h,"AID",a.T),Te(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(h,"TO",a.ja),Te(h,"TYPE","xmlhttp"),jr(a,h),a.m&&a.o&&oo(h,a.m,a.o),a.L&&(a.g.I=a.L);var _=a.g;a=a.ia,_.L=1,_.v=Ri(Gt(h)),_.m=null,_.P=!0,hc(_,a)}n.Za=function(){this.C!=null&&(this.C=null,ki(this),co(this),st(19))};function Ni(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fc(a,h){var _=null;if(a.g==h){Ni(a),uo(a),a.g=null;var I=2}else if(io(a.h,h))_=h.D,_c(a.h,h),I=1;else return;if(a.G!=0){if(h.o)if(I==1){_=h.m?h.m.length:0,h=Date.now()-h.F;var V=a.B;I=On(),Ve(I,new ac(I,_)),Di(a)}else Uc(a);else if(V=h.s,V==3||V==0&&0<h.X||!(I==1&&Np(a,h)||I==2&&co(a)))switch(_&&0<_.length&&(h=a.h,h.i=h.i.concat(_)),V){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Bc(a,h){let _=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(_*=2),_*h}function Ln(a,h){if(a.j.info("Error code "+h),h==2){var _=p(a.fb,a),I=a.Xa;const V=!I;I=new Mn(I||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ai(I,"https"),Ri(I),V?bp(I.toString(),_):Rp(I.toString(),_)}else st(2);a.G=0,a.l&&a.l.sa(h),jc(a),Vc(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function jc(a){if(a.G=0,a.ka=[],a.l){const h=yc(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function qc(a,h,_){var I=_ instanceof Mn?Gt(_):new Mn(_);if(I.g!="")h&&(I.g=h+"."+I.g),bi(I,I.s);else{var V=c.location;I=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var F=new Mn(null);I&&Ai(F,I),h&&(F.g=h),V&&bi(F,V),_&&(F.l=_),I=F}return _=a.D,h=a.ya,_&&h&&Te(I,_,h),Te(I,"VER",a.la),jr(a,I),I}function $c(a,h,_){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new Si({eb:_})):new Pe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hc(){}n=Hc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Oi(){}Oi.prototype.g=function(a,h){return new mt(a,h)};function mt(a,h){we.call(this),this.g=new Oc(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new sr(this)}A(mt,we),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){ao(this.g)},mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var _={};_.__data__=a,a=_}else this.u&&(_={},_.__data__=Pt(a),a=_);h.i.push(new gp(h.Ya++,a)),h.G==3&&Di(h)},mt.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,mt.aa.N.call(this)};function zc(a){wt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const _ in h){a=_;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(zc,wt);function Wc(){Tt.call(this),this.status=1}A(Wc,Tt);function sr(a){this.g=a}A(sr,Hc),sr.prototype.ua=function(){Ve(this.g,"a")},sr.prototype.ta=function(a){Ve(this.g,new zc(a))},sr.prototype.sa=function(a){Ve(this.g,new Wc)},sr.prototype.ra=function(){Ve(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,od=function(){return new Oi},sd=function(){return On()},id=ct,Bo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,Ki=wi,cc.COMPLETE="complete",rd=cc,nn.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",we.prototype.listen=we.prototype.K,zr=nn,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,nd=Pe}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const Nu="@firebase/firestore",Ou="4.7.10";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let br="11.5.0";/**
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
 */const Wn=new Ss("@firebase/firestore");function ar(){return Wn.logLevel}function X(n,...e){if(Wn.logLevel<=oe.DEBUG){const t=e.map(va);Wn.debug(`Firestore (${br}): ${n}`,...t)}}function en(n,...e){if(Wn.logLevel<=oe.ERROR){const t=e.map(va);Wn.error(`Firestore (${br}): ${n}`,...t)}}function _r(n,...e){if(Wn.logLevel<=oe.WARN){const t=e.map(va);Wn.warn(`Firestore (${br}): ${n}`,...t)}}function va(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+n;throw en(e),new Error(e)}function de(n,e){n||te()}function ie(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class eE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tE{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new ad(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new tt(e)}}class nE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new nE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,_t(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){de(this.o===void 0);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Vu(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new Vu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function cd(){return new TextEncoder}/**
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
 */class ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function jo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return se(r,i);{const s=cd(),o=oE(s.encode(Mu(n,t)),s.encode(Mu(e,t)));return o!==0?o:se(r,i)}}t+=r>65535?2:1}return se(n.length,e.length)}function Mu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function oE(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return se(n[t],e[t]);return se(n.length,e.length)}function yr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Lu=-62135596800,Uu=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Uu);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Lu)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uu}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Lu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ue(0,0))}static max(){return new re(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xu="__name__";class xt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(),r===void 0?r=e.length-t:r>e.length-t&&te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=xt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return se(e.length,t.length)}static compareSegments(e,t){const r=xt.isNumericId(e),i=xt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?xt.extractNumericId(e).compare(xt.extractNumericId(t)):jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yn.fromString(e.substring(4,e.length-2))}}class Ie extends xt{construct(e,t,r){return new Ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ie(t)}static emptyPath(){return new Ie([])}}const aE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends xt{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return aE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xu}static keyField(){return new Ke([xu])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new Y(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new Y(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ie.fromString(e))}static fromName(e){return new Z(Ie.fromString(e).popFirst(5))}static empty(){return new Z(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ie(e.slice()))}}/**
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
 */const ii=-1;function cE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new Tn(i,Z.empty(),e)}function uE(n){return new Tn(n.readTime,n.key,ii)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(re.min(),Z.empty(),ii)}static max(){return new Tn(re.max(),Z.empty(),ii)}}function lE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const hE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rr(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==hE)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(i=>i?$.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new $((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(l=>{o[d]=l,++c,c===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new $((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function fE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vs.ae=-1;/**
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
 */const Ea=-1;function Ms(n){return n==null}function hs(n){return n===0&&1/n==-1/0}function pE(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ld="";function gE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fu(e)),e=mE(n.get(t),e);return Fu(e)}function mE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case ld:t+="";break;default:t+=s}}return t}function Fu(n){return n+ld+""}/**
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
 */function Bu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ge(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ju(this.data.getIterator())}getIteratorFrom(e){return new ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new qe(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dd("Invalid base64 string: "+s):s}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(n){if(de(!!n),typeof n=="string"){let e=0;const t=_E.exec(n);if(de(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function An(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
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
 */const fd="server_timestamp",pd="__type__",gd="__previous_value__",md="__local_write_time__";function wa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pd])===null||t===void 0?void 0:t.stringValue)===fd}function Ls(n){const e=n.mapValue.fields[gd];return wa(e)?Ls(e):e}function si(n){const e=In(n.mapValue.fields[md].timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class yE{constructor(e,t,r,i,s,o,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const ds="(default)";class oi{constructor(e,t){this.projectId=e,this.database=t||ds}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database===ds}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _d="__type__",vE="__max__",xi={mapValue:{}},yd="__vector__",fs="value";function bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wa(n)?4:wE(n)?9007199254740991:EE(n)?10:11:te()}function Wt(n,e){if(n===e)return!0;const t=bn(n);if(t!==bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return si(n).isEqual(si(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=In(i.timestampValue),c=In(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return An(i.bytesValue).isEqual(An(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),c=Ne(s.doubleValue);return o===c?hs(o)===hs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return yr(n.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Bu(o)!==Bu(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Wt(o[u],c[u])))return!1;return!0}(n,e);default:return te()}}function ai(n,e){return(n.values||[]).find(t=>Wt(t,e))!==void 0}function vr(n,e){if(n===e)return 0;const t=bn(n),r=bn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return qu(n.timestampValue,e.timestampValue);case 4:return qu(si(n),si(e));case 5:return jo(n.stringValue,e.stringValue);case 6:return function(s,o){const c=An(s),u=An(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const l=se(c[d],u[d]);if(l!==0)return l}return se(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=se(Ne(s.latitude),Ne(o.latitude));return c!==0?c:se(Ne(s.longitude),Ne(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return $u(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,d,l;const f=s.fields||{},p=o.fields||{},y=(c=f[fs])===null||c===void 0?void 0:c.arrayValue,A=(u=p[fs])===null||u===void 0?void 0:u.arrayValue,P=se(((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0,((l=A==null?void 0:A.values)===null||l===void 0?void 0:l.length)||0);return P!==0?P:$u(y,A)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===xi.mapValue&&o===xi.mapValue)return 0;if(s===xi.mapValue)return 1;if(o===xi.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=o.fields||{},l=Object.keys(d);u.sort(),l.sort();for(let f=0;f<u.length&&f<l.length;++f){const p=jo(u[f],l[f]);if(p!==0)return p;const y=vr(c[u[f]],d[l[f]]);if(y!==0)return y}return se(u.length,l.length)}(n.mapValue,e.mapValue);default:throw te()}}function qu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=In(n),r=In(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function $u(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=vr(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function Er(n){return qo(n)}function qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=In(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return An(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=qo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qo(t.fields[o])}`;return i+"}"}(n.mapValue):te()}function Qi(n){switch(bn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ls(n);return e?16+Qi(e):16;case 5:return 2*n.stringValue.length;case 6:return An(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Qi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Jn(r.fields,(s,o)=>{i+=s.length+Qi(o)}),i}(n.mapValue);default:throw te()}}function Hu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $o(n){return!!n&&"integerValue"in n}function Ta(n){return!!n&&"arrayValue"in n}function zu(n){return!!n&&"nullValue"in n}function Wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xi(n){return!!n&&"mapValue"in n}function EE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_d])===null||t===void 0?void 0:t.stringValue)===yd}function Xr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vE}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Xr(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Xi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Xi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Jn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Xr(this.value))}}function vd(n){const e=[];return Jn(n.fields,(t,r)=>{const i=new Ke([t]);if(Xi(r)){const s=vd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
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
 */class nt{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new nt(e,0,re.min(),re.min(),re.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new nt(e,1,t,re.min(),r,i,0)}static newNoDocument(e,t){return new nt(e,2,t,re.min(),re.min(),It.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,re.min(),re.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(e,t){this.position=e,this.inclusive=t}}function Gu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),t.key):r=vr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ku(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Wt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function TE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ed{}class Le extends Ed{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AE(e,t,r):t==="array-contains"?new SE(e,r):t==="in"?new PE(e,r):t==="not-in"?new CE(e,r):t==="array-contains-any"?new kE(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bE(e,r):new RE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vr(t,this.value)):t!==null&&bn(this.value)===bn(t)&&this.matchesComparison(vr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ed{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Mt(e,t)}matches(e){return wd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function wd(n){return n.op==="and"}function Td(n){return IE(n)&&wd(n)}function IE(n){for(const e of n.filters)if(e instanceof Mt)return!1;return!0}function Ho(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+Er(n.value);if(Td(n))return n.filters.map(e=>Ho(e)).join(",");{const e=n.filters.map(t=>Ho(t)).join(",");return`${n.op}(${e})`}}function Id(n,e){return n instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(n,e):n instanceof Mt?function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&Id(o,i.filters[c]),!0):!1}(n,e):void te()}function Ad(n){return n instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${Er(t.value)}`}(n):n instanceof Mt?function(t){return t.op.toString()+" {"+t.getFilters().map(Ad).join(" ,")+"}"}(n):"Filter"}class AE extends Le{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class bE extends Le{constructor(e,t){super(e,"in",t),this.keys=bd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class RE extends Le{constructor(e,t){super(e,"not-in",t),this.keys=bd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class SE extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ta(t)&&ai(t.arrayValue,this.value)}}class PE extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ai(this.value.arrayValue,t)}}class CE extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ai(this.value.arrayValue,t)}}class kE extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}/**
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
 */class DE{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.le=null}}function Qu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new DE(n,e,t,r,i,s,o)}function Ia(n){const e=ie(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ho(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Er(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Er(r)).join(",")),e.le=t}return e.le}function Aa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!TE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Id(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ku(n.startAt,e.startAt)&&Ku(n.endAt,e.endAt)}function zo(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Pr{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function NE(n,e,t,r,i,s,o,c){return new Pr(n,e,t,r,i,s,o,c)}function Rd(n){return new Pr(n)}function Xu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sd(n){return n.collectionGroup!==null}function Yr(n){const e=ie(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new qe(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new ci(s,r))}),t.has(Ke.keyField().canonicalString())||e.he.push(new ci(Ke.keyField(),r))}return e.he}function $t(n){const e=ie(n);return e.Pe||(e.Pe=OE(e,Yr(n))),e.Pe}function OE(n,e){if(n.limitType==="F")return Qu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ci(i.field,s)});const t=n.endAt?new ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ps(n.startAt.position,n.startAt.inclusive):null;return Qu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wo(n,e){const t=n.filters.concat([e]);return new Pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Go(n,e,t){return new Pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Us(n,e){return Aa($t(n),$t(e))&&n.limitType===e.limitType}function Pd(n){return`${Ia($t(n))}|lt:${n.limitType}`}function cr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ad(i)).join(", ")}]`),Ms(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Er(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Er(i)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function xs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Yr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const d=Gu(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,Yr(r),i)||r.endAt&&!function(o,c,u){const d=Gu(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,Yr(r),i))}(n,e)}function VE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cd(n){return(e,t)=>{let r=!1;for(const i of Yr(n)){const s=ME(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ME(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),d=c.data.field(s);return u!==null&&d!==null?vr(u,d):te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hd(this.inner)}size(){return this.innerSize}}/**
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
 */const LE=new Se(Z.comparator);function tn(){return LE}const kd=new Se(Z.comparator);function Wr(...n){let e=kd;for(const t of n)e=e.insert(t.key,t);return e}function Dd(n){let e=kd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Fn(){return Jr()}function Nd(){return Jr()}function Jr(){return new Zn(n=>n.toString(),(n,e)=>n.isEqual(e))}const UE=new Se(Z.comparator),xE=new qe(Z.comparator);function ae(...n){let e=xE;for(const t of n)e=e.add(t);return e}const FE=new qe(se);function BE(){return FE}/**
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
 */function ba(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(e)?"-0":e}}function Od(n){return{integerValue:""+n}}function jE(n,e){return pE(e)?Od(e):ba(n,e)}/**
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
 */class Fs{constructor(){this._=void 0}}function qE(n,e,t){return n instanceof gs?function(i,s){const o={fields:{[pd]:{stringValue:fd},[md]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wa(s)&&(s=Ls(s)),s&&(o.fields[gd]=s),{mapValue:o}}(t,e):n instanceof ui?Md(n,e):n instanceof li?Ld(n,e):function(i,s){const o=Vd(i,s),c=Yu(o)+Yu(i.Ie);return $o(o)&&$o(i.Ie)?Od(c):ba(i.serializer,c)}(n,e)}function $E(n,e,t){return n instanceof ui?Md(n,e):n instanceof li?Ld(n,e):t}function Vd(n,e){return n instanceof ms?function(r){return $o(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gs extends Fs{}class ui extends Fs{constructor(e){super(),this.elements=e}}function Md(n,e){const t=Ud(e);for(const r of n.elements)t.some(i=>Wt(i,r))||t.push(r);return{arrayValue:{values:t}}}class li extends Fs{constructor(e){super(),this.elements=e}}function Ld(n,e){let t=Ud(e);for(const r of n.elements)t=t.filter(i=>!Wt(i,r));return{arrayValue:{values:t}}}class ms extends Fs{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Yu(n){return Ne(n.integerValue||n.doubleValue)}function Ud(n){return Ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function HE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ui&&i instanceof ui||r instanceof li&&i instanceof li?yr(r.elements,i.elements,Wt):r instanceof ms&&i instanceof ms?Wt(r.Ie,i.Ie):r instanceof gs&&i instanceof gs}(n.transform,e.transform)}class zE{constructor(e,t){this.version=e,this.transformResults=t}}class Ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bs{}function xd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ra(n.key,Ht.none()):new _i(n.key,n.data,Ht.none());{const t=n.data,r=It.empty();let i=new qe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new er(n.key,r,new Nt(i.toArray()),Ht.none())}}function WE(n,e,t){n instanceof _i?function(i,s,o){const c=i.value.clone(),u=Zu(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof er?function(i,s,o){if(!Yi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Zu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Fd(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zr(n,e,t,r){return n instanceof _i?function(s,o,c,u){if(!Yi(s.precondition,o))return c;const d=s.value.clone(),l=el(s.fieldTransforms,u,o);return d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof er?function(s,o,c,u){if(!Yi(s.precondition,o))return c;const d=el(s.fieldTransforms,u,o),l=o.data;return l.setAll(Fd(s)),l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,c){return Yi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function GE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Vd(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function Ju(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yr(r,i,(s,o)=>HE(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _i extends Bs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class er extends Bs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zu(n,e,t){const r=new Map;de(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,$E(o,c,t[i]))}return r}function el(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,qE(s,o,e))}return r}class Ra extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KE extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nd();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=xd(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&yr(this.mutations,e.mutations,(t,r)=>Ju(t,r))&&yr(this.baseMutations,e.baseMutations,(t,r)=>Ju(t,r))}}class Sa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){de(e.mutations.length===r.length);let i=function(){return UE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sa(e,t,r,i)}}/**
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
 */class XE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class YE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Me,ce;function JE(n){switch(n){case H.OK:return te();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return te()}}function Bd(n){if(n===void 0)return en("GRPC error has no .code"),H.UNKNOWN;switch(n){case Me.OK:return H.OK;case Me.CANCELLED:return H.CANCELLED;case Me.UNKNOWN:return H.UNKNOWN;case Me.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Me.INTERNAL:return H.INTERNAL;case Me.UNAVAILABLE:return H.UNAVAILABLE;case Me.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Me.NOT_FOUND:return H.NOT_FOUND;case Me.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Me.ABORTED:return H.ABORTED;case Me.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Me.DATA_LOSS:return H.DATA_LOSS;default:return te()}}(ce=Me||(Me={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZE=new yn([4294967295,4294967295],0);function tl(n){const e=cd().encode(n),t=new td;return t.update(e),new Uint8Array(t.digest())}function nl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new yn([t,r],0),new yn([i,s],0)]}class Pa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gr(`Invalid padding: ${t}`);if(r<0)throw new Gr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=yn.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(yn.fromNumber(r)));return i.compare(ZE)===1&&(i=new yn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=tl(e),[r,i]=nl(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pa(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const t=tl(e),[r,i]=nl(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class js{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new js(re.min(),i,new Se(se),tn(),ae())}}class yi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yi(r,t,ae(),ae(),ae())}}/**
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
 */class Ji{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class jd{constructor(e,t){this.targetId=e,this.ge=t}}class qd{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class rl{constructor(){this.pe=0,this.ye=il(),this.we=Qe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ae(),t=ae(),r=ae();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:te()}}),new yi(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=il()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,de(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ew{constructor(e){this.ke=e,this.qe=new Map,this.Qe=tn(),this.$e=Fi(),this.Ue=Fi(),this.Ke=new Se(se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(zo(s))if(r===0){const o=new Z(s.path);this.ze(t,o,nt.newNoDocument(o,re.min()))}else de(r===1);else{const o=this.et(t);if(o!==r){const c=this.tt(e),u=c?this.nt(c,e,o):1;if(u!==0){this.Ye(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=An(r).toUint8Array()}catch(u){if(u instanceof dd)return _r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Pa(o,i,s)}catch(u){return _r(u instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,o)=>{const c=this.Xe(o);if(c){if(s.current&&zo(c.target)){const u=new Z(c.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,nt.newNoDocument(u,e))}s.ve&&(t.set(o,s.Fe()),s.Me())}});let r=ae();this.Ue.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.Xe(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new js(e,t,this.Ke,this.Qe,r);return this.Qe=tn(),this.$e=Fi(),this.Ue=Fi(),this.Ke=new Se(se),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new rl,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new qe(se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new qe(se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new rl),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Fi(){return new Se(Z.comparator)}function il(){return new Se(Z.comparator)}const tw={asc:"ASCENDING",desc:"DESCENDING"},nw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rw={and:"AND",or:"OR"};class iw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ko(n,e){return n.useProto3Json||Ms(e)?e:{value:e}}function _s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $d(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sw(n,e){return _s(n,e.toTimestamp())}function zt(n){return de(!!n),re.fromTimestamp(function(t){const r=In(t);return new Ue(r.seconds,r.nanos)}(n))}function Ca(n,e){return Qo(n,e).canonicalString()}function Qo(n,e){const t=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hd(n){const e=Ie.fromString(n);return de(Qd(e)),e}function Xo(n,e){return Ca(n.databaseId,e.path)}function Io(n,e){const t=Hd(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Wd(t))}function zd(n,e){return Ca(n.databaseId,e)}function ow(n){const e=Hd(n);return e.length===4?Ie.emptyPath():Wd(e)}function Yo(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wd(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sl(n,e,t){return{name:Xo(n,e),fields:t.value.mapValue.fields}}function aw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,l){return d.useProto3Json?(de(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(de(l===void 0||l instanceof Buffer||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const l=d.code===void 0?H.UNKNOWN:Bd(d.code);return new Y(l,d.message||"")}(o);t=new qd(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Io(n,r.document.name),s=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):re.min(),c=new It({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,c),d=r.targetIds||[],l=r.removedTargetIds||[];t=new Ji(d,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Io(n,r.document),s=r.readTime?zt(r.readTime):re.min(),o=nt.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Ji([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Io(n,r.document),s=r.removedTargetIds||[];t=new Ji([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YE(i,s),c=r.targetId;t=new jd(c,o)}}return t}function cw(n,e){let t;if(e instanceof _i)t={update:sl(n,e.key,e.value)};else if(e instanceof Ra)t={delete:Xo(n,e.key)};else if(e instanceof er)t={update:sl(n,e.key,e.data),updateMask:_w(e.fieldMask)};else{if(!(e instanceof KE))return te();t={verify:Xo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ms)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(n,e.precondition)),t}function uw(n,e){return n&&n.length>0?(de(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?zt(i.updateTime):zt(s);return o.isEqual(re.min())&&(o=zt(s)),new zE(o,i.transformResults||[])}(t,e))):[]}function lw(n,e){return{documents:[zd(n,e.path)]}}function hw(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zd(n,i);const s=function(d){if(d.length!==0)return Kd(Mt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(l=>function(p){return{field:ur(p.field),direction:pw(p.dir)}}(l))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ko(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:i}}function dw(n){let e=ow(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(f){const p=Gd(f);return p instanceof Mt&&Td(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(p=>function(A){return new ci(lr(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let c=null;t.limit&&(c=function(f){let p;return p=typeof f=="object"?f.value:f,Ms(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(f){const p=!!f.before,y=f.values||[];return new ps(y,p)}(t.startAt));let d=null;return t.endAt&&(d=function(f){const p=!f.before,y=f.values||[];return new ps(y,p)}(t.endAt)),NE(e,i,o,s,c,"F",u,d)}function fw(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=lr(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=lr(t.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=lr(t.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=lr(t.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(n):n.fieldFilter!==void 0?function(t){return Le.create(lr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Mt.create(t.compositeFilter.filters.map(r=>Gd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(t.compositeFilter.op))}(n):te()}function pw(n){return tw[n]}function gw(n){return nw[n]}function mw(n){return rw[n]}function ur(n){return{fieldPath:n.canonicalString()}}function lr(n){return Ke.fromServerFormat(n.fieldPath)}function Kd(n){return n instanceof Le?function(t){if(t.op==="=="){if(Wu(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NAN"}};if(zu(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wu(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NAN"}};if(zu(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(t.field),op:gw(t.op),value:t.value}}}(n):n instanceof Mt?function(t){const r=t.getFilters().map(i=>Kd(i));return r.length===1?r[0]:{compositeFilter:{op:mw(t.op),filters:r}}}(n):te()}function _w(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class pn{constructor(e,t,r,i,s=re.min(),o=re.min(),c=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yw{constructor(e){this.Tt=e}}function vw(n){const e=dw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Go(e,e.limit,"L"):e}/**
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
 */class Ew{constructor(){this.Tn=new ww}addToCollectionParentIndex(e,t){return this.Tn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Tn.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class ww{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new qe(Ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Ie.comparator)).toArray()}}/**
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
 */const ol={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xd=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Xd,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
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
 */class wr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new wr(0)}static Kn(){return new wr(-1)}}/**
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
 */const al="LruGarbageCollector",Tw=1048576;function cl([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class Iw{constructor(e){this.Hn=e,this.buffer=new qe(cl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Aw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(al,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sr(t)?X(al,"Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.er(3e5)})}}class bw{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Vs.ae);const r=new Iw(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ol)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ol):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,o,c,u,d;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),ar()<=oe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(d-u)+`ms
Total Duration: ${d-l}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function Rw(n,e){return new bw(n,e)}/**
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
 */class Sw{constructor(){this.changes=new Zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Pw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Cw{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zr(r.mutation,i,Nt.empty(),Ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ae()){const i=Fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Wr();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ae()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=tn();const o=Jr(),c=function(){return Jr()}();return t.forEach((u,d)=>{const l=r.get(d.key);i.has(d.key)&&(l===void 0||l.mutation instanceof er)?s=s.insert(d.key,d):l!==void 0?(o.set(d.key,l.mutation.getFieldMask()),Zr(l.mutation,d,l.mutation.getFieldMask(),Ue.now())):o.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,l)=>o.set(d,l)),t.forEach((d,l)=>{var f;return c.set(d,new Pw(l,(f=o.get(d))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Jr();let i=new Se((o,c)=>o-c),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let l=r.get(u)||Nt.empty();l=c.applyToLocalView(d,l),r.set(u,l);const f=(i.get(c.batchId)||ae()).add(u);i=i.insert(c.batchId,f)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,l=u.value,f=Nd();l.forEach(p=>{if(!s.has(p)){const y=xd(t.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):$.resolve(Fn());let c=ii,u=s;return o.next(d=>$.forEach(d,(l,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(l)?$.resolve():this.remoteDocumentCache.getEntry(e,l).next(p=>{u=u.insert(l,p)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ae())).next(l=>({batchId:c,changes:Dd(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let i=Wr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Wr();return this.indexManager.getCollectionParents(e,s).next(c=>$.forEach(c,u=>{const d=function(f,p){return new Pr(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(l=>{l.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,d)=>{const l=d.getKey();o.get(l)===null&&(o=o.insert(l,nt.newInvalidDocument(l)))});let c=Wr();return o.forEach((u,d)=>{const l=s.get(u);l!==void 0&&Zr(l.mutation,d,Nt.empty(),Ue.now()),xs(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class kw{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return $.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:zt(i.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:vw(i.bundledQuery),readTime:zt(i.readTime)}}(t)),$.resolve()}}/**
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
 */class Dw{constructor(){this.overlays=new Se(Z.comparator),this.Rr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Fn();return $.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const i=Fn(),s=t.length+1,o=new Z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Se((d,l)=>d-l);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let l=s.get(d.largestBatchId);l===null&&(l=Fn(),s=s.insert(d.largestBatchId,l)),l.set(d.getKey(),d)}}const c=Fn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,l)=>c.set(d,l)),!(c.size()>=i)););return $.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XE(t,r));let s=this.Rr.get(t);s===void 0&&(s=ae(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Nw{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class ka{constructor(){this.Vr=new qe(ze.mr),this.gr=new qe(ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ze(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new Z(new Ie([])),r=new ze(t,e),i=new ze(t,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Z(new Ie([])),r=new ze(t,e),i=new ze(t,e+1);let s=ae();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ze(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Z.comparator(e.key,t.key)||se(e.Cr,t.Cr)}static pr(e,t){return se(e.Cr,t.Cr)||Z.comparator(e.key,t.key)}}/**
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
 */class Ow{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new qe(ze.mr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QE(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Mr=this.Mr.add(new ze(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Ea:this.Fr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),i=new ze(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const c=this.Or(o.Cr);s.push(c)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(se);return t.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],c=>{r=r.add(c.Cr)})}),$.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new ze(new Z(s),0);let c=new qe(se);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Cr)),!0)},o),$.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return $.forEach(t.mutations,i=>{const s=new ze(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ze(t,0),i=this.Mr.firstAfterOrEqual(r);return $.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Vw{constructor(e){this.kr=e,this.docs=function(){return new Se(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let r=tn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=tn();const o=t.path,c=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:l}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||lE(uE(l),r)<=0||(i.has(l.key)||xs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,t,r,i){te()}qr(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mw(this)}getSize(e){return $.resolve(this.size)}}class Mw extends Sw{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class Lw{constructor(e){this.persistence=e,this.Qr=new Zn(t=>Ia(t),Aa),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ka,this.targetCount=0,this.Kr=wr.Un()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),$.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.zn(t),$.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.Ur.containsKey(t))}}/**
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
 */class Yd{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Vs(0),this.zr=!1,this.zr=!0,this.jr=new Nw,this.referenceDelegate=e(this),this.Hr=new Lw(this),this.indexManager=new Ew,this.remoteDocumentCache=function(i){return new Vw(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new yw(t),this.Yr=new kw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Dw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new Ow(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const i=new Uw(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return $.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Uw extends dE{constructor(e){super(),this.currentSequenceNumber=e}}class Da{constructor(e){this.persistence=e,this.ti=new ka,this.ni=null}static ri(e){return new Da(e)}get ii(){if(this.ni)return this.ni;throw te()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),$.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ii,r=>{const i=Z.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return $.or([()=>$.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ys{constructor(e,t){this.persistence=e,this.oi=new Zn(r=>gE(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Rw(this,t)}static ri(e,t){return new ys(e,t)}Zr(){}Xr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return $.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?$.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,t).next(c=>{c||(r++,s.removeEntry(o,re.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),$.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qi(e.data.value)),t}ar(e,t,r){return $.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Na{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=ae(),i=ae();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Na(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class xw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Fw{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Jp()?8:fE(rt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new xw;return this._s(e,t,o).next(c=>{if(s.result=c,this.Xi)return this.us(e,t,o,c.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(ar()<=oe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),$.resolve()):(ar()<=oe.DEBUG&&X("QueryEngine","Query:",cr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(ar()<=oe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):$.resolve())}rs(e,t){if(Xu(t))return $.resolve(null);let r=$t(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Go(t,null,"F"),r=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,o,u.readTime)?this.rs(e,Go(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,i){return Xu(t)||i.isEqual(re.min())?$.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(t,s);return this.ls(t,o,r,i)?$.resolve(null):(ar()<=oe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cr(t)),this.hs(e,o,t,cE(i,ii)).next(c=>c))})}cs(e,t){let r=new qe(Cd(e));return t.forEach((i,s)=>{xs(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return ar()<=oe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",cr(t)),this.ns.getDocumentsMatchingQuery(e,t,Tn.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Oa="LocalStore",Bw=3e8;class jw{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Se(se),this.Is=new Zn(s=>Ia(s),Aa),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function qw(n,e,t,r){return new jw(n,e,t,r)}async function Jd(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=ae();for(const d of i){o.push(d.batchId);for(const l of d.mutations)u=u.add(l.key)}for(const d of s){c.push(d.batchId);for(const l of d.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:o,addedBatchIds:c}))})})}function $w(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,l){const f=d.batch,p=f.keys();let y=$.resolve();return p.forEach(A=>{y=y.next(()=>l.getEntry(u,A)).next(P=>{const C=d.docVersions.get(A);de(C!==null),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),l.addEntry(P)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ae();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Zd(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Hw(n,e){const t=ie(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const c=[];e.targetChanges.forEach((l,f)=>{const p=i.get(f);if(!p)return;c.push(t.Hr.removeMatchingKeys(s,l.removedDocuments,f).next(()=>t.Hr.addMatchingKeys(s,l.addedDocuments,f)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Qe.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):l.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(l.resumeToken,r)),i=i.insert(f,y),function(P,C,D){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Bw?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,y,l)&&c.push(t.Hr.updateTargetData(s,y))});let u=tn(),d=ae();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),c.push(zw(s,o,e.documentUpdates).next(l=>{u=l.Vs,d=l.fs})),!r.isEqual(re.min())){const l=t.Hr.getLastRemoteSnapshotVersion(s).next(f=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(l)}return $.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.Ts=i,s))}function zw(n,e,t){let r=ae(),i=ae();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=tn();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):X(Oa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function Ww(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gw(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):t.Hr.allocateTargetId(r).next(o=>(i=new pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Jo(n,e,t){const r=ie(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sr(o))throw o;X(Oa,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function ul(n,e,t){const r=ie(n);let i=re.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,l){const f=ie(u),p=f.Is.get(l);return p!==void 0?$.resolve(f.Ts.get(p)):f.Hr.getTargetData(d,l)}(r,o,$t(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,t?i:re.min(),t?s:ae())).next(c=>(Kw(r,VE(e),c),{documents:c,gs:s})))}function Kw(n,e,t){let r=n.Es.get(e)||re.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class ll{constructor(){this.activeTargetIds=BE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qw{constructor(){this.ho=new ll,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ll,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xw{To(e){}shutdown(){}}/**
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
 */const hl="ConnectivityMonitor";class dl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(hl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(hl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Bi=null;function Zo(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
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
 */const Ao="RestConnection",Yw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jw{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===ds?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const o=Zo(),c=this.bo(e,t.toUriEncodedString());X(Ao,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,c,u,r).then(d=>(X(Ao,`Received RPC '${e}' ${o}: `,d),d),d=>{throw _r(Ao,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,s,o){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+br}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=Yw[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Zw{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Ze="WebChannelConnection";class eT extends Jw{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=Zo();return new Promise((o,c)=>{const u=new nd;u.setWithCredentials(!0),u.listenOnce(rd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ki.NO_ERROR:const l=u.getResponseJson();X(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Ki.TIMEOUT:X(Ze,`RPC '${e}' ${s} timed out`),c(new Y(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ki.HTTP_ERROR:const f=u.getStatus();if(X(Ze,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const A=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(D)>=0?D:H.UNKNOWN}(y.status);c(new Y(A,y.message))}else c(new Y(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(H.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{X(Ze,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);X(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=Zo(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=od(),c=sd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const l=s.join("");X(Ze,`Creating RPC '${e}' stream ${i}: ${l}`,u);const f=o.createWebChannel(l,u);let p=!1,y=!1;const A=new Zw({Fo:C=>{y?X(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(X(Ze,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),X(Ze,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Mo:()=>f.close()}),P=(C,D,x)=>{C.listen(D,M=>{try{x(M)}catch(O){setTimeout(()=>{throw O},0)}})};return P(f,zr.EventType.OPEN,()=>{y||(X(Ze,`RPC '${e}' stream ${i} transport opened.`),A.Qo())}),P(f,zr.EventType.CLOSE,()=>{y||(y=!0,X(Ze,`RPC '${e}' stream ${i} transport closed`),A.Uo())}),P(f,zr.EventType.ERROR,C=>{y||(y=!0,_r(Ze,`RPC '${e}' stream ${i} transport errored:`,C),A.Uo(new Y(H.UNAVAILABLE,"The operation could not be completed")))}),P(f,zr.EventType.MESSAGE,C=>{var D;if(!y){const x=C.data[0];de(!!x);const M=x,O=(M==null?void 0:M.error)||((D=M[0])===null||D===void 0?void 0:D.error);if(O){X(Ze,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let k=function(m){const E=Me[m];if(E!==void 0)return Bd(E)}(j),b=O.message;k===void 0&&(k=H.INTERNAL,b="Unknown error status: "+j+" with message "+O.message),y=!0,A.Uo(new Y(k,b)),f.close()}else X(Ze,`RPC '${e}' stream ${i} received:`,x),A.Ko(x)}}),P(c,id.STAT_EVENT,C=>{C.stat===Bo.PROXY?X(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Bo.NOPROXY&&X(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.$o()},0),A}}function bo(){return typeof document<"u"?document:null}/**
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
 */function qs(n){return new iw(n,!0)}/**
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
 */class ef{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const fl="PersistentStream";class tf{constructor(e,t,r,i,s,o,c,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ef(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(en(t.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new Y(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(fl,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(X(fl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tT extends tf{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=aw(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?zt(o.readTime):re.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Yo(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=zo(u)?{documents:lw(s,u)}:{query:hw(s,u).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=$d(s,o.resumeToken);const d=Ko(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(re.min())>0){c.readTime=_s(s,o.snapshotVersion.toTimestamp());const d=Ko(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=fw(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Yo(this.serializer),t.removeTarget=e,this.I_(t)}}class nT extends tf{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uw(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Yo(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>cw(this.serializer,r))};this.I_(t)}}/**
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
 */class rT{}class iT extends rT{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Qo(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(H.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Qo(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class sT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(en(t),this.N_=!1):X("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Gn="RemoteStore";class oT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{tr(this)&&(X(Gn,"Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.W_.add(4),await vi(d),d.j_.set("Unknown"),d.W_.delete(4),await $s(d)}(this))})}),this.j_=new sT(r,i)}}async function $s(n){if(tr(n))for(const e of n.G_)await e(!0)}async function vi(n){for(const e of n.G_)await e(!1)}function nf(n,e){const t=ie(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Ua(t)?La(t):Cr(t).c_()&&Ma(t,e))}function Va(n,e){const t=ie(n),r=Cr(t);t.K_.delete(e),r.c_()&&rf(t,e),t.K_.size===0&&(r.c_()?r.P_():tr(t)&&t.j_.set("Unknown"))}function Ma(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(n).y_(e)}function rf(n,e){n.H_.Ne(e),Cr(n).w_(e)}function La(n){n.H_=new ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Cr(n).start(),n.j_.B_()}function Ua(n){return tr(n)&&!Cr(n).u_()&&n.K_.size>0}function tr(n){return ie(n).W_.size===0}function sf(n){n.H_=void 0}async function aT(n){n.j_.set("Online")}async function cT(n){n.K_.forEach((e,t)=>{Ma(n,e)})}async function uT(n,e){sf(n),Ua(n)?(n.j_.q_(e),La(n)):n.j_.set("Unknown")}async function lT(n,e,t){if(n.j_.set("Online"),e instanceof qd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.K_.delete(c),i.H_.removeTarget(c))}(n,e)}catch(r){X(Gn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vs(n,r)}else if(e instanceof Ji?n.H_.We(e):e instanceof jd?n.H_.Ze(e):n.H_.je(e),!t.isEqual(re.min()))try{const r=await Zd(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.H_.ot(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.K_.get(d);l&&s.K_.set(d,l.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const l=s.K_.get(u);if(!l)return;s.K_.set(u,l.withResumeToken(Qe.EMPTY_BYTE_STRING,l.snapshotVersion)),rf(s,u);const f=new pn(l.target,u,d,l.sequenceNumber);Ma(s,f)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){X(Gn,"Failed to raise snapshot:",r),await vs(n,r)}}async function vs(n,e,t){if(!Sr(e))throw e;n.W_.add(1),await vi(n),n.j_.set("Offline"),t||(t=()=>Zd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X(Gn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await $s(n)})}function of(n,e){return e().catch(t=>vs(n,t,e))}async function Hs(n){const e=ie(n),t=Rn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ea;for(;hT(e);)try{const i=await Ww(e.localStore,r);if(i===null){e.U_.length===0&&t.P_();break}r=i.batchId,dT(e,i)}catch(i){await vs(e,i)}af(e)&&cf(e)}function hT(n){return tr(n)&&n.U_.length<10}function dT(n,e){n.U_.push(e);const t=Rn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function af(n){return tr(n)&&!Rn(n).u_()&&n.U_.length>0}function cf(n){Rn(n).start()}async function fT(n){Rn(n).C_()}async function pT(n){const e=Rn(n);for(const t of n.U_)e.b_(t.mutations)}async function gT(n,e,t){const r=n.U_.shift(),i=Sa.from(r,e,t);await of(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Hs(n)}async function mT(n,e){e&&Rn(n).S_&&await async function(r,i){if(function(o){return JE(o)&&o!==H.ABORTED}(i.code)){const s=r.U_.shift();Rn(r).h_(),await of(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hs(r)}}(n,e),af(n)&&cf(n)}async function pl(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),X(Gn,"RemoteStore received new credentials");const r=tr(t);t.W_.add(3),await vi(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await $s(t)}async function _T(n,e){const t=ie(n);e?(t.W_.delete(2),await $s(t)):e||(t.W_.add(2),await vi(t),t.j_.set("Unknown"))}function Cr(n){return n.J_||(n.J_=function(t,r,i){const s=ie(t);return s.M_(),new tT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:aT.bind(null,n),No:cT.bind(null,n),Lo:uT.bind(null,n),p_:lT.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ua(n)?La(n):n.j_.set("Unknown")):(await n.J_.stop(),sf(n))})),n.J_}function Rn(n){return n.Y_||(n.Y_=function(t,r,i){const s=ie(t);return s.M_(),new nT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:fT.bind(null,n),Lo:mT.bind(null,n),D_:pT.bind(null,n),v_:gT.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Hs(n)):(await n.Y_.stop(),n.U_.length>0&&(X(Gn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class xa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new xa(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(n,e){if(en("AsyncQueue",`${e}: ${n}`),Sr(n))return new Y(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class mr{static emptySet(e){return new mr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Wr(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class gl{constructor(){this.Z_=new Se(Z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):te():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Tr{constructor(e,t,r,i,s,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Tr(e,t,mr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yT{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class vT{constructor(){this.queries=ml(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=ie(t),s=i.queries;i.queries=ml(),s.forEach((o,c)=>{for(const u of c.ta)u.onError(r)})})(this,new Y(H.ABORTED,"Firestore shutting down"))}}function ml(){return new Zn(n=>Pd(n),Us)}async function ET(n,e){const t=ie(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new yT,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Fa(o,`Initialization of query '${cr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&Ba(t)}async function wT(n,e){const t=ie(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function TT(n,e){const t=ie(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.ta)c.oa(i)&&(r=!0);o.ea=i}}r&&Ba(t)}function IT(n,e,t){const r=ie(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function Ba(n){n.ia.forEach(e=>{e.next()})}var ea,_l;(_l=ea||(ea={}))._a="default",_l.Cache="cache";class AT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Tr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ea.Cache}}/**
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
 */class uf{constructor(e){this.key=e}}class lf{constructor(e){this.key=e}}class bT{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ae(),this.mutatedKeys=ae(),this.ya=Cd(e),this.wa=new mr(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new gl,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,f)=>{const p=i.get(l),y=xs(this.query,f)?f:null,A=!!p&&this.mutatedKeys.has(p.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;p&&y?p.data.isEqual(y.data)?A!==P&&(r.track({type:3,doc:y}),C=!0):this.va(p,y)||(r.track({type:2,doc:y}),C=!0,(u&&this.ya(y,u)>0||d&&this.ya(y,d)<0)&&(c=!0)):!p&&y?(r.track({type:0,doc:y}),C=!0):p&&!y&&(r.track({type:1,doc:p}),C=!0,(u||d)&&(c=!0)),C&&(y?(o=o.add(y),s=P?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{wa:o,Da:r,ls:c,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((l,f)=>function(y,A){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return P(y)-P(A)}(l.type,f.type)||this.ya(l.doc,f.doc)),this.Ca(r),i=i!=null&&i;const c=t&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,d=u!==this.ga;return this.ga=u,o.length!==0||d?{snapshot:new Tr(this.query,e.wa,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new gl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ae(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new lf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new uf(r))}),t}Oa(e){this.fa=e.gs,this.pa=ae();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Tr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ja="SyncEngine";class RT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ST{constructor(e){this.key=e,this.Ba=!1}}class PT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Zn(c=>Pd(c),Us),this.qa=new Map,this.Qa=new Set,this.$a=new Se(Z.comparator),this.Ua=new Map,this.Ka=new ka,this.Wa={},this.Ga=new Map,this.za=wr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function CT(n,e,t=!0){const r=mf(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await hf(r,e,t,!0),i}async function kT(n,e){const t=mf(n);await hf(t,e,!0,!1)}async function hf(n,e,t,r){const i=await Gw(n.localStore,$t(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await DT(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&nf(n.remoteStore,i),c}async function DT(n,e,t,r,i){n.Ha=(f,p,y)=>async function(P,C,D,x){let M=C.view.ba(D);M.ls&&(M=await ul(P.localStore,C.query,!1).then(({documents:b})=>C.view.ba(b,M)));const O=x&&x.targetChanges.get(C.targetId),j=x&&x.targetMismatches.get(C.targetId)!=null,k=C.view.applyChanges(M,P.isPrimaryClient,O,j);return vl(P,C.targetId,k.Ma),k.snapshot}(n,f,p,y);const s=await ul(n.localStore,e,!0),o=new bT(e,s.gs),c=o.ba(s.documents),u=yi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,u);vl(n,t,d.Ma);const l=new RT(e,t,o);return n.ka.set(e,l),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function NT(n,e,t){const r=ie(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Us(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Va(r.remoteStore,i.targetId),ta(r,i.targetId)}).catch(Rr)):(ta(r,i.targetId),await Jo(r.localStore,i.targetId,!0))}async function OT(n,e){const t=ie(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Va(t.remoteStore,r.targetId))}async function VT(n,e,t){const r=jT(n);try{const i=await function(o,c){const u=ie(o),d=Ue.now(),l=c.reduce((y,A)=>y.add(A.key),ae());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=tn(),P=ae();return u.ds.getEntries(y,l).next(C=>{A=C,A.forEach((D,x)=>{x.isValidDocument()||(P=P.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,A)).next(C=>{f=C;const D=[];for(const x of c){const M=GE(x,f.get(x.key).overlayedDocument);M!=null&&D.push(new er(x.key,M,vd(M.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(y,d,D,c)}).next(C=>{p=C;const D=C.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,C.batchId,D)})}).then(()=>({batchId:p.batchId,changes:Dd(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let d=o.Wa[o.currentUser.toKey()];d||(d=new Se(se)),d=d.insert(c,u),o.Wa[o.currentUser.toKey()]=d}(r,i.batchId,t),await Ei(r,i.changes),await Hs(r.remoteStore)}catch(i){const s=Fa(i,"Failed to persist write");t.reject(s)}}async function df(n,e){const t=ie(n);try{const r=await Hw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ua.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?de(o.Ba):i.removedDocuments.size>0&&(de(o.Ba),o.Ba=!1))}),await Ei(t,r,e)}catch(r){await Rr(r)}}function yl(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,o)=>{const c=o.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=ie(o);u.onlineState=c;let d=!1;u.queries.forEach((l,f)=>{for(const p of f.ta)p.sa(c)&&(d=!0)}),d&&Ba(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MT(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ua.get(e),s=i&&i.key;if(s){let o=new Se(Z.comparator);o=o.insert(s,nt.newNoDocument(s,re.min()));const c=ae().add(s),u=new js(re.min(),new Map,new Se(se),o,c);await df(r,u),r.$a=r.$a.remove(s),r.Ua.delete(e),qa(r)}else await Jo(r.localStore,e,!1).then(()=>ta(r,e,t)).catch(Rr)}async function LT(n,e){const t=ie(n),r=e.batch.batchId;try{const i=await $w(t.localStore,e);pf(t,r,null),ff(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ei(t,i)}catch(i){await Rr(i)}}async function UT(n,e,t){const r=ie(n);try{const i=await function(o,c){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let l;return u.mutationQueue.lookupMutationBatch(d,c).next(f=>(de(f!==null),l=f.keys(),u.mutationQueue.removeMutationBatch(d,f))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,l,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,l)).next(()=>u.localDocuments.getDocuments(d,l))})}(r.localStore,e);pf(r,e,t),ff(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ei(r,i)}catch(i){await Rr(i)}}function ff(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function pf(n,e,t){const r=ie(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||gf(n,r)})}function gf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Va(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),qa(n))}function vl(n,e,t){for(const r of t)r instanceof uf?(n.Ka.addReference(r.key,e),xT(n,r)):r instanceof lf?(X(ja,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||gf(n,r.key)):te()}function xT(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(X(ja,"New document in limbo: "+t),n.Qa.add(r),qa(n))}function qa(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Z(Ie.fromString(e)),r=n.za.next();n.Ua.set(r,new ST(t)),n.$a=n.$a.insert(t,r),nf(n.remoteStore,new pn($t(Rd(t.path)),r,"TargetPurposeLimboResolution",Vs.ae))}}async function Ei(n,e,t){const r=ie(n),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{o.push(r.Ha(u,e,t).then(d=>{var l;if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){i.push(d);const f=Na.Yi(u.targetId,d);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,d){const l=ie(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(d,p=>$.forEach(p.Hi,y=>l.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>$.forEach(p.Ji,y=>l.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!Sr(f))throw f;X(Oa,"Failed to update sequence numbers: "+f)}for(const f of d){const p=f.targetId;if(!f.fromCache){const y=l.Ts.get(p),A=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(A);l.Ts=l.Ts.insert(p,P)}}}(r.localStore,s))}async function FT(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){X(ja,"User change. New user:",e.toKey());const r=await Jd(t.localStore,e);t.currentUser=e,function(s,o){s.Ga.forEach(c=>{c.forEach(u=>{u.reject(new Y(H.CANCELLED,o))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ei(t,r.Rs)}}function BT(n,e){const t=ie(n),r=t.Ua.get(e);if(r&&r.Ba)return ae().add(r.key);{let i=ae();const s=t.qa.get(e);if(!s)return i;for(const o of s){const c=t.ka.get(o);i=i.unionWith(c.view.Sa)}return i}}function mf(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=df.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MT.bind(null,e),e.La.p_=TT.bind(null,e.eventManager),e.La.Ja=IT.bind(null,e.eventManager),e}function jT(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UT.bind(null,e),e}class Es{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qs(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return qw(this.persistence,new Fw,e.initialUser,this.serializer)}Xa(e){return new Yd(Da.ri,this.serializer)}Za(e){return new Qw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Es.provider={build:()=>new Es};class qT extends Es{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){de(this.persistence.referenceDelegate instanceof ys);const r=this.persistence.referenceDelegate.garbageCollector;return new Aw(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Yd(r=>ys.ri(r,t),this.serializer)}}class na{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FT.bind(null,this.syncEngine),await _T(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vT}()}createDatastore(e){const t=qs(e.databaseInfo.databaseId),r=function(s){return new eT(s)}(e.databaseInfo);return function(s,o,c,u){return new iT(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new oT(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>yl(this.syncEngine,t,0),function(){return dl.D()?new dl:new Xw}())}createSyncEngine(e,t){return function(i,s,o,c,u,d,l){const f=new PT(i,s,o,c,u,d);return l&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ie(i);X(Gn,"RemoteStore shutting down."),s.W_.add(5),await vi(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}na.provider={build:()=>new na};/**
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
 *//**
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
 */class $T{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Sn="FirestoreClient";class HT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=ud.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(Sn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Sn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ro(n,e){n.asyncQueue.verifyOperationInProgress(),X(Sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function El(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zT(n);X(Sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>pl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>pl(e.remoteStore,i)),n._onlineComponents=e}async function zT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X(Sn,"Using user provided OfflineComponentProvider");try{await Ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;_r("Error using user provided cache. Falling back to memory cache: "+t),await Ro(n,new Es)}}else X(Sn,"Using default OfflineComponentProvider"),await Ro(n,new qT(void 0));return n._offlineComponents}async function _f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X(Sn,"Using user provided OnlineComponentProvider"),await El(n,n._uninitializedComponentsProvider._online)):(X(Sn,"Using default OnlineComponentProvider"),await El(n,new na))),n._onlineComponents}function WT(n){return _f(n).then(e=>e.syncEngine)}async function GT(n){const e=await _f(n),t=e.eventManager;return t.onListen=CT.bind(null,e.syncEngine),t.onUnlisten=NT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OT.bind(null,e.syncEngine),t}function KT(n,e,t={}){const r=new vn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,d){const l=new $T({next:p=>{l.su(),o.enqueueAndForget(()=>wT(s,f)),p.fromCache&&u.source==="server"?d.reject(new Y(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(p)},error:p=>d.reject(p)}),f=new AT(c,l,{includeMetadataChanges:!0,Ta:!0});return ET(s,f)}(await GT(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const wl=new Map;/**
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
 */function vf(n,e,t){if(!t)throw new Y(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function QT(n,e,t,r){if(e===!0&&r===!0)throw new Y(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tl(n){if(!Z.isDocumentKey(n))throw new Y(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Il(n){if(Z.isDocumentKey(n))throw new Y(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te()}function hi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zs(n);throw new Y(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Ef="firestore.googleapis.com",Al=!0;class bl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ef,this.ssl=Al}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Al;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Tw)throw new Y(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ws{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zv;switch(r.type){case"firstParty":return new rE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wl.get(t);r&&(X("ComponentProvider","Removing Datastore"),wl.delete(t),r.terminate())}(this),Promise.resolve()}}function XT(n,e,t,r={}){var i;const s=(n=hi(n,Ws))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s.host!==Ef&&s.host!==c&&_r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:c,ssl:!1,emulatorOptions:r});if(!wn(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,l;if(typeof r.mockUserToken=="string")d=r.mockUserToken,l=tt.MOCK_USER;else{d=$l(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Y(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(f)}n._authCredentials=new eE(new ad(d,l))}}/**
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
 */class nr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class At{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class En extends nr{constructor(e,t,r){super(e,t,Rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Z(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function wf(n,e,...t){if(n=xe(n),vf("collection","path",e),n instanceof Ws){const r=Ie.fromString(e,...t);return Il(r),new En(n,null,r)}{if(!(n instanceof At||n instanceof En))throw new Y(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return Il(r),new En(n.firestore,null,r)}}function Tf(n,e,...t){if(n=xe(n),arguments.length===1&&(e=ud.newId()),vf("doc","path",e),n instanceof Ws){const r=Ie.fromString(e,...t);return Tl(r),new At(n,null,new Z(r))}{if(!(n instanceof At||n instanceof En))throw new Y(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return Tl(r),new At(n.firestore,n instanceof En?n.converter:null,new Z(r))}}/**
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
 */const Rl="AsyncQueue";class Sl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ef(this,"async_queue_retry"),this.Su=()=>{const r=bo();r&&X(Rl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=bo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=bo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new vn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Sr(e))throw e;X(Rl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw en("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=xa.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&te()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Gs extends Ws{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Sl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sl(e),this._firestoreClient=void 0,await e}}}function YT(n,e){const t=typeof n=="object"?n:Ps(),r=typeof n=="string"?n:ds,i=Pn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Bl("firestore");s&&XT(i,...s)}return i}function If(n){if(n._terminated)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JT(n),n._firestoreClient}function JT(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,d,l){return new yE(c,u,d,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yf(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new HT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ir(Qe.fromBase64String(e))}catch(t){throw new Y(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ir(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $a{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Af{constructor(e){this._methodName=e}}/**
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
 */class Ha{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class za{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const ZT=/^__.*__$/;class eI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,t,this.fieldTransforms):new _i(e,this.data,t,this.fieldTransforms)}}function bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Wa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ws(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(bf(this.Lu)&&ZT.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class tI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qs(e)}ju(e,t,r,i=!1){return new Wa({Lu:e,methodName:t,zu:r,path:Ke.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rf(n){const e=n._freezeSettings(),t=qs(n._databaseId);return new tI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function nI(n,e,t,r,i,s={}){const o=n.ju(s.merge||s.mergeFields?2:0,e,t,i);Cf("Data must be an object, but it was:",o,r);const c=Sf(r,o);let u,d;if(s.merge)u=new Nt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const f of s.mergeFields){const p=iI(e,f,t);if(!o.contains(p))throw new Y(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);oI(l,p)||l.push(p)}u=new Nt(l),d=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,d=o.fieldTransforms;return new eI(new It(c),u,d)}function rI(n,e,t,r=!1){return Ga(t,n.ju(r?4:3,e))}function Ga(n,e){if(Pf(n=xe(n)))return Cf("Unsupported field value:",e,n),Sf(n,e);if(n instanceof Af)return function(r,i){if(!bf(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=Ga(c,i.Ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:_s(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(i.serializer,s)}}if(r instanceof Ha)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ir)return{bytesValue:$d(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ca(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof za)return function(o,c){return{mapValue:{fields:{[_d]:{stringValue:yd},[fs]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return ba(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${zs(r)}`)}(n,e)}function Sf(n,e){const t={};return hd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(n,(r,i)=>{const s=Ga(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Pf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof Ha||n instanceof Ir||n instanceof At||n instanceof Af||n instanceof za)}function Cf(n,e,t){if(!Pf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=zs(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function iI(n,e,t){if((e=xe(e))instanceof $a)return e._internalPath;if(typeof e=="string")return kf(n,e);throw ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const sI=new RegExp("[~\\*/\\[\\]]");function kf(n,e,t){if(e.search(sI)>=0)throw ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $a(...e.split("."))._internalPath}catch{throw ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ws(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(H.INVALID_ARGUMENT,c+n+u)}function oI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Df{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aI extends Df{data(){return super.data()}}function Ks(n,e){return typeof e=="string"?kf(n,e):e instanceof $a?e._internalPath:e._delegate._internalPath}/**
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
 */function cI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ka{}class Nf extends Ka{}function uI(n,e,...t){let r=[];e instanceof Ka&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Qa).length,c=s.filter(u=>u instanceof Qs).length;if(o>1||o>0&&c>0)throw new Y(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Qs extends Nf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qs(e,t,r)}_apply(e){const t=this._parse(e);return Of(e._query,t),new nr(e.firestore,e.converter,Wo(e._query,t))}_parse(e){const t=Rf(e.firestore);return function(s,o,c,u,d,l,f){let p;if(d.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new Y(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Cl(f,l);const A=[];for(const P of f)A.push(Pl(u,s,P));p={arrayValue:{values:A}}}else p=Pl(u,s,f)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Cl(f,l),p=rI(c,o,f,l==="in"||l==="not-in");return Le.create(d,l,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function X0(n,e,t){const r=e,i=Ks("where",n);return Qs._create(i,r,t)}class Qa extends Ka{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)Of(o,u),o=Wo(o,u)}(e._query,t),new nr(e.firestore,e.converter,Wo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xa extends Nf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xa(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new Y(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ci(s,o)}(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Pr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function lI(n,e="asc"){const t=e,r=Ks("orderBy",n);return Xa._create(r,t)}function Pl(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new Y(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sd(e)&&t.indexOf("/")!==-1)throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ie.fromString(t));if(!Z.isDocumentKey(r))throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hu(n,new Z(r))}if(t instanceof At)return Hu(n,t._key);throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zs(t)}.`)}function Cl(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Of(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class hI{convertValue(e,t="none"){switch(bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[fs].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new za(s)}convertGeoPoint(e){return new Ha(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ls(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const t=In(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ie.fromString(e);de(Qd(r));const i=new oi(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(t)||en(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function dI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fI extends Df{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ks("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends fI{data(e={}){return super.data(e)}}class pI{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ji(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ji(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,l=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),l=o.indexOf(c.doc.key)),{type:gI(c.type),doc:u,oldIndex:d,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class mI extends hI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function _I(n){n=hi(n,nr);const e=hi(n.firestore,Gs),t=If(e),r=new mI(e);return cI(n._query),KT(t,n._query).then(i=>new pI(e,r,n,i))}function yI(n){return Vf(hi(n.firestore,Gs),[new Ra(n._key,Ht.none())])}function vI(n,e){const t=hi(n.firestore,Gs),r=Tf(n),i=dI(n.converter,e);return Vf(t,[nI(Rf(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Vf(n,e){return function(r,i){const s=new vn;return r.asyncQueue.enqueueAndForget(async()=>VT(await WT(r),i,s)),s.promise}(If(n),e)}(function(e,t=!0){(function(i){br=i})(Xn),Ot(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Gs(new tE(r.getProvider("auth-internal")),new iE(o,r.getProvider("app-check-internal")),function(d,l){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(d.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),ht(Nu,Ou,e),ht(Nu,Ou,"esm2017")})();/**
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
 */const Mf="firebasestorage.googleapis.com",Lf="storageBucket",EI=2*60*1e3,wI=10*60*1e3;/**
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
 */class ke extends Rt{constructor(e,t,r=0){super(So(e),`Firebase Storage: ${t} (${So(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return So(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function So(n){return"storage/"+n}function Ya(){const n="An unknown error occurred, please check the error payload for server response.";return new ke(Ce.UNKNOWN,n)}function TI(n){return new ke(Ce.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function II(n){return new ke(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Ce.UNAUTHENTICATED,n)}function bI(){return new ke(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RI(n){return new ke(Ce.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function SI(){return new ke(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PI(){return new ke(Ce.CANCELED,"User canceled the upload/download.")}function CI(n){return new ke(Ce.INVALID_URL,"Invalid URL '"+n+"'.")}function kI(n){return new ke(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function DI(){return new ke(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lf+"' property when initializing the app?")}function NI(){return new ke(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OI(){return new ke(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VI(n){return new ke(Ce.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ra(n){return new ke(Ce.INVALID_ARGUMENT,n)}function Uf(){return new ke(Ce.APP_DELETED,"The Firebase app was deleted.")}function MI(n){return new ke(Ce.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(n,e){return new ke(Ce.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function qr(n){throw new ke(Ce.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class yt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=yt.makeFromUrl(e,t)}catch{return new yt(e,"")}if(r.path==="")return r;throw kI(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${l}/b/${i}/o${p}`,"i"),A={bucket:1,path:3},P=t===Mf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",D=new RegExp(`^https?://${P}/${i}/${C}`,"i"),M=[{regex:c,indices:u,postModify:s},{regex:y,indices:A,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<M.length;O++){const j=M[O],k=j.regex.exec(e);if(k){const b=k[j.indices.bucket];let g=k[j.indices.path];g||(g=""),r=new yt(b,g),j.postModify(r);break}}if(r==null)throw CI(e);return r}}class LI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function UI(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let d=!1;function l(...C){d||(d=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,n(y,u())},C)}function p(){s&&clearTimeout(s)}function y(C,...D){if(d){p();return}if(C){p(),l.call(null,C,...D);return}if(u()||o){p(),l.call(null,C,...D);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,f(M)}let A=!1;function P(C){A||(A=!0,p(),!d&&(i!==null?(C||(c=2),clearTimeout(i),f(0)):C||(c=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},t),P}function xI(n){n(!1)}/**
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
 */function FI(n){return n!==void 0}function BI(n){return typeof n=="object"&&!Array.isArray(n)}function Ja(n){return typeof n=="string"||n instanceof String}function kl(n){return Za()&&n instanceof Blob}function Za(){return typeof Blob<"u"}function Dl(n,e,t,r){if(r<e)throw ra(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ra(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function ec(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function xf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(jn||(jn={}));/**
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
 */function jI(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class qI{constructor(e,t,r,i,s,o,c,u,d,l,f,p=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=l,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,A)=>{this.resolve_=y,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===jn.NO_ERROR,u=s.getStatus();if(!c||jI(u,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===jn.ABORT;r(!1,new qi(!1,null,l));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new qi(d,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());FI(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=Ya();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Uf():PI();o(u)}else{const u=SI();o(u)}};this.canceled_?t(!1,new qi(!1,null,!0)):this.backoffId_=UI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function $I(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function WI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function GI(n,e,t,r,i,s,o=!0){const c=xf(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return zI(d,e),$I(d,t),HI(d,s),WI(d,r),new qI(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function KI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function QI(...n){const e=KI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Za())return new Blob(n);throw new ke(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function YI(n){if(typeof atob>"u")throw VI("base-64");return atob(n)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Po{constructor(e,t){this.data=e,this.contentType=t||null}}function JI(n,e){switch(n){case Bt.RAW:return new Po(Ff(e));case Bt.BASE64:case Bt.BASE64URL:return new Po(Bf(n,e));case Bt.DATA_URL:return new Po(e0(e),t0(e))}throw Ya()}function Ff(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ZI(n){let e;try{e=decodeURIComponent(n)}catch{throw ei(Bt.DATA_URL,"Malformed data URL.")}return Ff(e)}function Bf(n,e){switch(n){case Bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ei(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ei(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=YI(e)}catch(i){throw i.message.includes("polyfill")?i:ei(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class jf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ei(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=n0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function e0(n){const e=new jf(n);return e.base64?Bf(Bt.BASE64,e.rest):ZI(e.rest)}function t0(n){return new jf(n).contentType}function n0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class fn{constructor(e,t){let r=0,i="";kl(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(kl(this.data_)){const r=this.data_,i=XI(r,e,t);return i===null?null:new fn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new fn(r,!0)}}static getBlob(...e){if(Za()){const t=e.map(r=>r instanceof fn?r.data_:r);return new fn(QI.apply(null,t))}else{const t=e.map(o=>Ja(o)?JI(Bt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new fn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function qf(n){let e;try{e=JSON.parse(n)}catch{return null}return BI(e)?e:null}/**
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
 */function r0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function i0(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function $f(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function s0(n,e){return e}class ot{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||s0}}let $i=null;function o0(n){return!Ja(n)||n.length<2?n:$f(n)}function Hf(){if($i)return $i;const n=[];n.push(new ot("bucket")),n.push(new ot("generation")),n.push(new ot("metageneration")),n.push(new ot("name","fullPath",!0));function e(s,o){return o0(o)}const t=new ot("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new ot("size");return i.xform=r,n.push(i),n.push(new ot("timeCreated")),n.push(new ot("updated")),n.push(new ot("md5Hash",null,!0)),n.push(new ot("cacheControl",null,!0)),n.push(new ot("contentDisposition",null,!0)),n.push(new ot("contentEncoding",null,!0)),n.push(new ot("contentLanguage",null,!0)),n.push(new ot("contentType",null,!0)),n.push(new ot("metadata","customMetadata",!0)),$i=n,$i}function a0(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function c0(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return a0(r,n),r}function zf(n,e,t){const r=qf(e);return r===null?null:c0(n,r,t)}function u0(n,e,t,r){const i=qf(e);if(i===null||!Ja(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const l=n.bucket,f=n.fullPath,p="/b/"+o(l)+"/o/"+o(f),y=ec(p,t,r),A=xf({alt:"media",token:d});return y+A})[0]}function l0(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Wf{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gf(n){if(!n)throw Ya()}function h0(n,e){function t(r,i){const s=zf(n,i,e);return Gf(s!==null),s}return t}function d0(n,e){function t(r,i){const s=zf(n,i,e);return Gf(s!==null),u0(s,i,n.host,n._protocol)}return t}function Kf(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=bI():i=AI():t.getStatus()===402?i=II(n.bucket):t.getStatus()===403?i=RI(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function f0(n){const e=Kf(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=TI(n.path)),s.serverResponse=i.serverResponse,s}return t}function p0(n,e,t){const r=e.fullServerUrl(),i=ec(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new Wf(i,s,d0(n,t),o);return c.errorHandler=f0(e),c}function g0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function m0(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=g0(null,e)),r}function _0(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let O=0;O<2;O++)M=M+Math.random().toString().slice(2);return M}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=m0(e,r,i),l=l0(d,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,p=`\r
--`+u+"--",y=fn.getBlob(f,r,p);if(y===null)throw NI();const A={name:d.fullPath},P=ec(s,n.host,n._protocol),C="POST",D=n.maxUploadRetryTime,x=new Wf(P,C,h0(n,t),D);return x.urlParams=A,x.headers=o,x.body=y.uploadData(),x.errorHandler=Kf(e),x}class y0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw qr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class v0 extends y0{initXhr(){this.xhr_.responseType="text"}}function Qf(){return new v0}/**
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
 */class Kn{constructor(e,t){this._service=e,t instanceof yt?this._location=t:this._location=yt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Kn(e,t)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $f(this._location.path)}get storage(){return this._service}get parent(){const e=r0(this._location.path);if(e===null)return null;const t=new yt(this._location.bucket,e);return new Kn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw MI(e)}}function E0(n,e,t){n._throwIfRoot("uploadBytes");const r=_0(n.storage,n._location,Hf(),new fn(e,!0),t);return n.storage.makeRequestWithTokens(r,Qf).then(i=>({metadata:i,ref:n}))}function w0(n){n._throwIfRoot("getDownloadURL");const e=p0(n.storage,n._location,Hf());return n.storage.makeRequestWithTokens(e,Qf).then(t=>{if(t===null)throw OI();return t})}function T0(n,e){const t=i0(n._location.path,e),r=new yt(n._location.bucket,t);return new Kn(n.storage,r)}/**
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
 */function I0(n){return/^[A-Za-z]+:\/\//.test(n)}function A0(n,e){return new Kn(n,e)}function Xf(n,e){if(n instanceof tc){const t=n;if(t._bucket==null)throw DI();const r=new Kn(t,t._bucket);return Xf(r,e)}else return T0(n,e)}function b0(n,e){if(I0(e)){if(n instanceof tc)return A0(n,e);throw ra("To use ref(service, url), the first argument must be a Storage instance.")}else return Xf(n,e)}function Nl(n,e){const t=e==null?void 0:e[Lf];return t==null?null:yt.makeFromBucketSpec(t,n)}function R0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:$l(i,n.app.options.projectId))}class tc{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Mf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EI,this._maxUploadRetryTime=wI,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=Nl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=Nl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new LI(Uf());{const o=GI(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Ol="@firebase/storage",Vl="0.13.7";/**
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
 */const Yf="storage";function S0(n,e,t){return n=xe(n),E0(n,e,t)}function P0(n){return n=xe(n),w0(n)}function C0(n,e){return n=xe(n),b0(n,e)}function k0(n=Ps(),e){n=xe(n);const r=Pn(n,Yf).getImmediate({identifier:e}),i=Bl("storage");return i&&D0(r,...i),r}function D0(n,e,t,r={}){R0(n,e,t,r)}function N0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new tc(t,r,i,e,Xn)}function O0(){Ot(new bt(Yf,N0,"PUBLIC").setMultipleInstances(!0)),ht(Ol,Vl,""),ht(Ol,Vl,"esm2017")}O0();const V0={apiKey:"AIzaSyCD-IVIQT0GwdoSwK2fk-caRsCfnwkOM2U",authDomain:"mecwebcraft.firebaseapp.com",projectId:"mecwebcraft",storageBucket:"mecwebcraft.firebasestorage.app",messagingSenderId:"185818732139",appId:"1:185818732139:web:95ec3d2f444dc88f45c32e",measurementId:"G-ZFXTE2SXGV"},Xs=Xl(V0);M_(Xs);const nc=Yv(Xs),rc=YT(Xs),M0=k0(Xs),Y0=async(n,e)=>Ly(nc,n,e),J0=async(n,e)=>Uy(nc,n,e),L0=n=>By(nc,n),Z0=async()=>{const n=wf(rc,"projects"),e=uI(n,lI("createdAt","desc"));return(await _I(e)).docs.map(r=>{var i;return{id:r.id,...r.data(),createdAt:(i=r.data().createdAt)==null?void 0:i.toDate()}})},eA=async n=>(await vI(wf(rc,"projects"),{...n,createdAt:Ue.now()})).id,tA=async n=>{await yI(Tf(rc,"projects",n))},U0=async(n,e)=>{const t=C0(M0,e);return await S0(t,n),P0(t)},Jf=gn.createContext({user:null,loading:!0}),nA=()=>gn.useContext(Jf);function rA({children:n}){const[e,t]=gn.useState(null),[r,i]=gn.useState(!0);return gn.useEffect(()=>{const s=L0(o=>{t(o),i(!1)});return()=>s()},[]),je.jsx(Jf.Provider,{value:{user:e,loading:r},children:n})}function x0(n,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in n)){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(n)}function Zf(n,e){return new Promise(function(t,r){let i;return F0(n).then(function(s){try{return i=s,t(new Blob([e.slice(0,2),i,e.slice(2)],{type:"image/jpeg"}))}catch(o){return r(o)}},r)})}const F0=n=>new Promise((e,t)=>{const r=new FileReader;r.addEventListener("load",({target:{result:i}})=>{const s=new DataView(i);let o=0;if(s.getUint16(o)!==65496)return t("not a valid JPEG");for(o+=2;;){const c=s.getUint16(o);if(c===65498)break;const u=s.getUint16(o+2);if(c===65505&&s.getUint32(o+4)===1165519206){const d=o+10;let l;switch(s.getUint16(d)){case 18761:l=!0;break;case 19789:l=!1;break;default:return t("TIFF header contains invalid endian")}if(s.getUint16(d+2,l)!==42)return t("TIFF header contains invalid version");const f=s.getUint32(d+4,l),p=d+f+2+12*s.getUint16(d+f,l);for(let y=d+f+2;y<p;y+=12)if(s.getUint16(y,l)==274){if(s.getUint16(y+2,l)!==3)return t("Orientation data type is invalid");if(s.getUint32(y+4,l)!==1)return t("Orientation data count is invalid");s.setUint16(y+8,1,l);break}return e(i.slice(o,o+2+u))}o+=2+u}return e(new Blob)}),r.readAsArrayBuffer(n)});var Ts={},B0={get exports(){return Ts},set exports(n){Ts=n}};(function(n){var e,t,r={};B0.exports=r,r.parse=function(i,s){for(var o=r.bin.readUshort,c=r.bin.readUint,u=0,d={},l=new Uint8Array(i),f=l.length-4;c(l,f)!=101010256;)f--;u=f,u+=4;var p=o(l,u+=4);o(l,u+=2);var y=c(l,u+=2),A=c(l,u+=4);u+=4,u=A;for(var P=0;P<p;P++){c(l,u),u+=4,u+=4,u+=4,c(l,u+=4),y=c(l,u+=4);var C=c(l,u+=4),D=o(l,u+=4),x=o(l,u+2),M=o(l,u+4);u+=6;var O=c(l,u+=8);u+=4,u+=D+x+M,r._readLocal(l,O,d,y,C,s)}return d},r._readLocal=function(i,s,o,c,u,d){var l=r.bin.readUshort,f=r.bin.readUint;f(i,s),l(i,s+=4),l(i,s+=2);var p=l(i,s+=2);f(i,s+=2),f(i,s+=4),s+=4;var y=l(i,s+=8),A=l(i,s+=2);s+=2;var P=r.bin.readUTF8(i,s,y);if(s+=y,s+=A,d)o[P]={size:u,csize:c};else{var C=new Uint8Array(i.buffer,s);if(p==0)o[P]=new Uint8Array(C.buffer.slice(s,s+c));else{if(p!=8)throw"unknown compression method: "+p;var D=new Uint8Array(u);r.inflateRaw(C,D),o[P]=D}}},r.inflateRaw=function(i,s){return r.F.inflate(i,s)},r.inflate=function(i,s){return i[0],i[1],r.inflateRaw(new Uint8Array(i.buffer,i.byteOffset+2,i.length-6),s)},r.deflate=function(i,s){s==null&&(s={level:6});var o=0,c=new Uint8Array(50+Math.floor(1.1*i.length));c[o]=120,c[o+1]=156,o+=2,o=r.F.deflateRaw(i,c,o,s.level);var u=r.adler(i,0,i.length);return c[o+0]=u>>>24&255,c[o+1]=u>>>16&255,c[o+2]=u>>>8&255,c[o+3]=u>>>0&255,new Uint8Array(c.buffer,0,o+4)},r.deflateRaw=function(i,s){s==null&&(s={level:6});var o=new Uint8Array(50+Math.floor(1.1*i.length)),c=r.F.deflateRaw(i,o,c,s.level);return new Uint8Array(o.buffer,0,c)},r.encode=function(i,s){s==null&&(s=!1);var o=0,c=r.bin.writeUint,u=r.bin.writeUshort,d={};for(var l in i){var f=!r._noNeed(l)&&!s,p=i[l],y=r.crc.crc(p,0,p.length);d[l]={cpr:f,usize:p.length,crc:y,file:f?r.deflateRaw(p):p}}for(var l in d)o+=d[l].file.length+30+46+2*r.bin.sizeUTF8(l);o+=22;var A=new Uint8Array(o),P=0,C=[];for(var l in d){var D=d[l];C.push(P),P=r._writeHeader(A,P,l,D,0)}var x=0,M=P;for(var l in d)D=d[l],C.push(P),P=r._writeHeader(A,P,l,D,1,C[x++]);var O=P-M;return c(A,P,101010256),P+=4,u(A,P+=4,x),u(A,P+=2,x),c(A,P+=2,O),c(A,P+=4,M),P+=4,P+=2,A.buffer},r._noNeed=function(i){var s=i.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(s)!=-1},r._writeHeader=function(i,s,o,c,u,d){var l=r.bin.writeUint,f=r.bin.writeUshort,p=c.file;return l(i,s,u==0?67324752:33639248),s+=4,u==1&&(s+=2),f(i,s,20),f(i,s+=2,0),f(i,s+=2,c.cpr?8:0),l(i,s+=2,0),l(i,s+=4,c.crc),l(i,s+=4,p.length),l(i,s+=4,c.usize),f(i,s+=4,r.bin.sizeUTF8(o)),f(i,s+=2,0),s+=2,u==1&&(s+=2,s+=2,l(i,s+=6,d),s+=4),s+=r.bin.writeUTF8(i,s,o),u==0&&(i.set(p,s),s+=p.length),s},r.crc={table:function(){for(var i=new Uint32Array(256),s=0;s<256;s++){for(var o=s,c=0;c<8;c++)1&o?o=3988292384^o>>>1:o>>>=1;i[s]=o}return i}(),update:function(i,s,o,c){for(var u=0;u<c;u++)i=r.crc.table[255&(i^s[o+u])]^i>>>8;return i},crc:function(i,s,o){return 4294967295^r.crc.update(4294967295,i,s,o)}},r.adler=function(i,s,o){for(var c=1,u=0,d=s,l=s+o;d<l;){for(var f=Math.min(d+5552,l);d<f;)u+=c+=i[d++];c%=65521,u%=65521}return u<<16|c},r.bin={readUshort:function(i,s){return i[s]|i[s+1]<<8},writeUshort:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255},readUint:function(i,s){return 16777216*i[s+3]+(i[s+2]<<16|i[s+1]<<8|i[s])},writeUint:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255,i[s+2]=o>>16&255,i[s+3]=o>>24&255},readASCII:function(i,s,o){for(var c="",u=0;u<o;u++)c+=String.fromCharCode(i[s+u]);return c},writeASCII:function(i,s,o){for(var c=0;c<o.length;c++)i[s+c]=o.charCodeAt(c)},pad:function(i){return i.length<2?"0"+i:i},readUTF8:function(i,s,o){for(var c,u="",d=0;d<o;d++)u+="%"+r.bin.pad(i[s+d].toString(16));try{c=decodeURIComponent(u)}catch{return r.bin.readASCII(i,s,o)}return c},writeUTF8:function(i,s,o){for(var c=o.length,u=0,d=0;d<c;d++){var l=o.charCodeAt(d);if(!(4294967168&l))i[s+u]=l,u++;else if(!(4294965248&l))i[s+u]=192|l>>6,i[s+u+1]=128|l>>0&63,u+=2;else if(!(4294901760&l))i[s+u]=224|l>>12,i[s+u+1]=128|l>>6&63,i[s+u+2]=128|l>>0&63,u+=3;else{if(4292870144&l)throw"e";i[s+u]=240|l>>18,i[s+u+1]=128|l>>12&63,i[s+u+2]=128|l>>6&63,i[s+u+3]=128|l>>0&63,u+=4}}return u},sizeUTF8:function(i){for(var s=i.length,o=0,c=0;c<s;c++){var u=i.charCodeAt(c);if(!(4294967168&u))o++;else if(!(4294965248&u))o+=2;else if(!(4294901760&u))o+=3;else{if(4292870144&u)throw"e";o+=4}}return o}},r.F={},r.F.deflateRaw=function(i,s,o,c){var u=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][c],d=r.F.U,l=r.F._goodIndex;r.F._hash;var f=r.F._putsE,p=0,y=o<<3,A=0,P=i.length;if(c==0){for(;p<P;)f(s,y,p+(w=Math.min(65535,P-p))==P?1:0),y=r.F._copyExact(i,p,w,s,y+8),p+=w;return y>>>3}var C=d.lits,D=d.strt,x=d.prev,M=0,O=0,j=0,k=0,b=0,g=0;for(P>2&&(D[g=r.F._hash(i,0)]=0),p=0;p<P;p++){if(b=g,p+1<P-2){g=r.F._hash(i,p+1);var m=p+1&32767;x[m]=D[g],D[g]=m}if(A<=p){(M>14e3||O>26697)&&P-p>100&&(A<p&&(C[M]=p-A,M+=2,A=p),y=r.F._writeBlock(p==P-1||A==P?1:0,C,M,k,i,j,p-j,s,y),M=O=k=0,j=p);var E=0;p<P-2&&(E=r.F._bestMatch(i,p,x,b,Math.min(u[2],P-p),u[3]));var w=E>>>16,T=65535&E;if(E!=0){T=65535&E;var v=l(w=E>>>16,d.of0);d.lhst[257+v]++;var N=l(T,d.df0);d.dhst[N]++,k+=d.exb[v]+d.dxb[N],C[M]=w<<23|p-A,C[M+1]=T<<16|v<<8|N,M+=2,A=p+w}else d.lhst[i[p]]++;O++}}for(j==p&&i.length!=0||(A<p&&(C[M]=p-A,M+=2,A=p),y=r.F._writeBlock(1,C,M,k,i,j,p-j,s,y),M=0,O=0,M=O=k=0,j=p);7&y;)y++;return y>>>3},r.F._bestMatch=function(i,s,o,c,u,d){var l=32767&s,f=o[l],p=l-f+32768&32767;if(f==l||c!=r.F._hash(i,s-p))return 0;for(var y=0,A=0,P=Math.min(32767,s);p<=P&&--d!=0&&f!=l;){if(y==0||i[s+y]==i[s+y-p]){var C=r.F._howLong(i,s,p);if(C>y){if(A=p,(y=C)>=u)break;p+2<C&&(C=p+2);for(var D=0,x=0;x<C-2;x++){var M=s-p+x+32768&32767,O=M-o[M]+32768&32767;O>D&&(D=O,f=M)}}}p+=(l=f)-(f=o[l])+32768&32767}return y<<16|A},r.F._howLong=function(i,s,o){if(i[s]!=i[s-o]||i[s+1]!=i[s+1-o]||i[s+2]!=i[s+2-o])return 0;var c=s,u=Math.min(i.length,s+258);for(s+=3;s<u&&i[s]==i[s-o];)s++;return s-c},r.F._hash=function(i,s){return(i[s]<<8|i[s+1])+(i[s+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(i,s,o,c,u,d,l,f,p){var y,A,P,C,D,x,M,O,j,k=r.F.U,b=r.F._putsF,g=r.F._putsE;k.lhst[256]++,A=(y=r.F.getTrees())[0],P=y[1],C=y[2],D=y[3],x=y[4],M=y[5],O=y[6],j=y[7];var m=32+(p+3&7?8-(p+3&7):0)+(l<<3),E=c+r.F.contSize(k.fltree,k.lhst)+r.F.contSize(k.fdtree,k.dhst),w=c+r.F.contSize(k.ltree,k.lhst)+r.F.contSize(k.dtree,k.dhst);w+=14+3*M+r.F.contSize(k.itree,k.ihst)+(2*k.ihst[16]+3*k.ihst[17]+7*k.ihst[18]);for(var T=0;T<286;T++)k.lhst[T]=0;for(T=0;T<30;T++)k.dhst[T]=0;for(T=0;T<19;T++)k.ihst[T]=0;var v=m<E&&m<w?0:E<w?1:2;if(b(f,p,i),b(f,p+1,v),p+=3,v==0){for(;7&p;)p++;p=r.F._copyExact(u,d,l,f,p)}else{var N,L;if(v==1&&(N=k.fltree,L=k.fdtree),v==2){r.F.makeCodes(k.ltree,A),r.F.revCodes(k.ltree,A),r.F.makeCodes(k.dtree,P),r.F.revCodes(k.dtree,P),r.F.makeCodes(k.itree,C),r.F.revCodes(k.itree,C),N=k.ltree,L=k.dtree,g(f,p,D-257),g(f,p+=5,x-1),g(f,p+=5,M-4),p+=4;for(var S=0;S<M;S++)g(f,p+3*S,k.itree[1+(k.ordr[S]<<1)]);p+=3*M,p=r.F._codeTiny(O,k.itree,f,p),p=r.F._codeTiny(j,k.itree,f,p)}for(var R=d,q=0;q<o;q+=2){for(var U=s[q],z=U>>>23,J=R+(8388607&U);R<J;)p=r.F._writeLit(u[R++],N,f,p);if(z!=0){var G=s[q+1],Q=G>>16,W=G>>8&255,B=255&G;g(f,p=r.F._writeLit(257+W,N,f,p),z-k.of0[W]),p+=k.exb[W],b(f,p=r.F._writeLit(B,L,f,p),Q-k.df0[B]),p+=k.dxb[B],R+=z}}p=r.F._writeLit(256,N,f,p)}return p},r.F._copyExact=function(i,s,o,c,u){var d=u>>>3;return c[d]=o,c[d+1]=o>>>8,c[d+2]=255-c[d],c[d+3]=255-c[d+1],d+=4,c.set(new Uint8Array(i.buffer,s,o),d),u+(o+4<<3)},r.F.getTrees=function(){for(var i=r.F.U,s=r.F._hufTree(i.lhst,i.ltree,15),o=r.F._hufTree(i.dhst,i.dtree,15),c=[],u=r.F._lenCodes(i.ltree,c),d=[],l=r.F._lenCodes(i.dtree,d),f=0;f<c.length;f+=2)i.ihst[c[f]]++;for(f=0;f<d.length;f+=2)i.ihst[d[f]]++;for(var p=r.F._hufTree(i.ihst,i.itree,7),y=19;y>4&&i.itree[1+(i.ordr[y-1]<<1)]==0;)y--;return[s,o,p,u,l,y,c,d]},r.F.getSecond=function(i){for(var s=[],o=0;o<i.length;o+=2)s.push(i[o+1]);return s},r.F.nonZero=function(i){for(var s="",o=0;o<i.length;o+=2)i[o+1]!=0&&(s+=(o>>1)+",");return s},r.F.contSize=function(i,s){for(var o=0,c=0;c<s.length;c++)o+=s[c]*i[1+(c<<1)];return o},r.F._codeTiny=function(i,s,o,c){for(var u=0;u<i.length;u+=2){var d=i[u],l=i[u+1];c=r.F._writeLit(d,s,o,c);var f=d==16?2:d==17?3:7;d>15&&(r.F._putsE(o,c,l,f),c+=f)}return c},r.F._lenCodes=function(i,s){for(var o=i.length;o!=2&&i[o-1]==0;)o-=2;for(var c=0;c<o;c+=2){var u=i[c+1],d=c+3<o?i[c+3]:-1,l=c+5<o?i[c+5]:-1,f=c==0?-1:i[c-1];if(u==0&&d==u&&l==u){for(var p=c+5;p+2<o&&i[p+2]==u;)p+=2;(y=Math.min(p+1-c>>>1,138))<11?s.push(17,y-3):s.push(18,y-11),c+=2*y-2}else if(u==f&&d==u&&l==u){for(p=c+5;p+2<o&&i[p+2]==u;)p+=2;var y=Math.min(p+1-c>>>1,6);s.push(16,y-3),c+=2*y-2}else s.push(u,0)}return o>>>1},r.F._hufTree=function(i,s,o){var c=[],u=i.length,d=s.length,l=0;for(l=0;l<d;l+=2)s[l]=0,s[l+1]=0;for(l=0;l<u;l++)i[l]!=0&&c.push({lit:l,f:i[l]});var f=c.length,p=c.slice(0);if(f==0)return 0;if(f==1){var y=c[0].lit;return p=y==0?1:0,s[1+(y<<1)]=1,s[1+(p<<1)]=1,1}c.sort(function(O,j){return O.f-j.f});var A=c[0],P=c[1],C=0,D=1,x=2;for(c[0]={lit:-1,f:A.f+P.f,l:A,r:P,d:0};D!=f-1;)A=C!=D&&(x==f||c[C].f<c[x].f)?c[C++]:c[x++],P=C!=D&&(x==f||c[C].f<c[x].f)?c[C++]:c[x++],c[D++]={lit:-1,f:A.f+P.f,l:A,r:P};var M=r.F.setDepth(c[D-1],0);for(M>o&&(r.F.restrictDepth(p,o,M),M=o),l=0;l<f;l++)s[1+(p[l].lit<<1)]=p[l].d;return M},r.F.setDepth=function(i,s){return i.lit!=-1?(i.d=s,s):Math.max(r.F.setDepth(i.l,s+1),r.F.setDepth(i.r,s+1))},r.F.restrictDepth=function(i,s,o){var c=0,u=1<<o-s,d=0;for(i.sort(function(f,p){return p.d==f.d?f.f-p.f:p.d-f.d}),c=0;c<i.length&&i[c].d>s;c++){var l=i[c].d;i[c].d=s,d+=u-(1<<o-l)}for(d>>>=o-s;d>0;)(l=i[c].d)<s?(i[c].d++,d-=1<<s-l-1):c++;for(;c>=0;c--)i[c].d==s&&d<0&&(i[c].d--,d++);d!=0&&console.log("debt left")},r.F._goodIndex=function(i,s){var o=0;return s[16|o]<=i&&(o|=16),s[8|o]<=i&&(o|=8),s[4|o]<=i&&(o|=4),s[2|o]<=i&&(o|=2),s[1|o]<=i&&(o|=1),o},r.F._writeLit=function(i,s,o,c){return r.F._putsF(o,c,s[i<<1]),c+s[1+(i<<1)]},r.F.inflate=function(i,s){var o=Uint8Array;if(i[0]==3&&i[1]==0)return s||new o(0);var c=r.F,u=c._bitsF,d=c._bitsE,l=c._decodeTiny,f=c.makeCodes,p=c.codes2map,y=c._get17,A=c.U,P=s==null;P&&(s=new o(i.length>>>2<<3));for(var C,D,x=0,M=0,O=0,j=0,k=0,b=0,g=0,m=0,E=0;x==0;)if(x=u(i,E,1),M=u(i,E+1,2),E+=3,M!=0){if(P&&(s=r.F._check(s,m+(1<<17))),M==1&&(C=A.flmap,D=A.fdmap,b=511,g=31),M==2){O=d(i,E,5)+257,j=d(i,E+5,5)+1,k=d(i,E+10,4)+4,E+=14;for(var w=0;w<38;w+=2)A.itree[w]=0,A.itree[w+1]=0;var T=1;for(w=0;w<k;w++){var v=d(i,E+3*w,3);A.itree[1+(A.ordr[w]<<1)]=v,v>T&&(T=v)}E+=3*k,f(A.itree,T),p(A.itree,T,A.imap),C=A.lmap,D=A.dmap,E=l(A.imap,(1<<T)-1,O+j,i,E,A.ttree);var N=c._copyOut(A.ttree,0,O,A.ltree);b=(1<<N)-1;var L=c._copyOut(A.ttree,O,j,A.dtree);g=(1<<L)-1,f(A.ltree,N),p(A.ltree,N,C),f(A.dtree,L),p(A.dtree,L,D)}for(;;){var S=C[y(i,E)&b];E+=15&S;var R=S>>>4;if(!(R>>>8))s[m++]=R;else{if(R==256)break;var q=m+R-254;if(R>264){var U=A.ldef[R-257];q=m+(U>>>3)+d(i,E,7&U),E+=7&U}var z=D[y(i,E)&g];E+=15&z;var J=z>>>4,G=A.ddef[J],Q=(G>>>4)+u(i,E,15&G);for(E+=15&G,P&&(s=r.F._check(s,m+(1<<17)));m<q;)s[m]=s[m++-Q],s[m]=s[m++-Q],s[m]=s[m++-Q],s[m]=s[m++-Q];m=q}}}else{7&E&&(E+=8-(7&E));var W=4+(E>>>3),B=i[W-4]|i[W-3]<<8;P&&(s=r.F._check(s,m+B)),s.set(new o(i.buffer,i.byteOffset+W,B),m),E=W+B<<3,m+=B}return s.length==m?s:s.slice(0,m)},r.F._check=function(i,s){var o=i.length;if(s<=o)return i;var c=new Uint8Array(Math.max(o<<1,s));return c.set(i,0),c},r.F._decodeTiny=function(i,s,o,c,u,d){for(var l=r.F._bitsE,f=r.F._get17,p=0;p<o;){var y=i[f(c,u)&s];u+=15&y;var A=y>>>4;if(A<=15)d[p]=A,p++;else{var P=0,C=0;A==16?(C=3+l(c,u,2),u+=2,P=d[p-1]):A==17?(C=3+l(c,u,3),u+=3):A==18&&(C=11+l(c,u,7),u+=7);for(var D=p+C;p<D;)d[p]=P,p++}}return u},r.F._copyOut=function(i,s,o,c){for(var u=0,d=0,l=c.length>>>1;d<o;){var f=i[d+s];c[d<<1]=0,c[1+(d<<1)]=f,f>u&&(u=f),d++}for(;d<l;)c[d<<1]=0,c[1+(d<<1)]=0,d++;return u},r.F.makeCodes=function(i,s){for(var o,c,u,d,l=r.F.U,f=i.length,p=l.bl_count,y=0;y<=s;y++)p[y]=0;for(y=1;y<f;y+=2)p[i[y]]++;var A=l.next_code;for(o=0,p[0]=0,c=1;c<=s;c++)o=o+p[c-1]<<1,A[c]=o;for(u=0;u<f;u+=2)(d=i[u+1])!=0&&(i[u]=A[d],A[d]++)},r.F.codes2map=function(i,s,o){for(var c=i.length,u=r.F.U.rev15,d=0;d<c;d+=2)if(i[d+1]!=0)for(var l=d>>1,f=i[d+1],p=l<<4|f,y=s-f,A=i[d]<<y,P=A+(1<<y);A!=P;)o[u[A]>>>15-s]=p,A++},r.F.revCodes=function(i,s){for(var o=r.F.U.rev15,c=15-s,u=0;u<i.length;u+=2){var d=i[u]<<s-i[u+1];i[u]=o[d]>>>c}},r.F._putsE=function(i,s,o){o<<=7&s;var c=s>>>3;i[c]|=o,i[c+1]|=o>>>8},r.F._putsF=function(i,s,o){o<<=7&s;var c=s>>>3;i[c]|=o,i[c+1]|=o>>>8,i[c+2]|=o>>>16},r.F._bitsE=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8)>>>(7&s)&(1<<o)-1},r.F._bitsF=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)&(1<<o)-1},r.F._get17=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)},r.F._get25=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16|i[3+(s>>>3)]<<24)>>>(7&s)},r.F.U=(e=Uint16Array,t=Uint32Array,{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new t(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new t(286),dhst:new t(30),ihst:new t(19),lits:new t(15e3),strt:new e(65536),prev:new e(32768)}),function(){for(var i=r.F.U,s=0;s<32768;s++){var o=s;o=(4278255360&(o=(4042322160&(o=(3435973836&(o=(2863311530&o)>>>1|(1431655765&o)<<1))>>>2|(858993459&o)<<2))>>>4|(252645135&o)<<4))>>>8|(16711935&o)<<8,i.rev15[s]=(o>>>16|o<<16)>>>17}function c(u,d,l){for(;d--!=0;)u.push(0,l)}for(s=0;s<32;s++)i.ldef[s]=i.of0[s]<<3|i.exb[s],i.ddef[s]=i.df0[s]<<4|i.dxb[s];c(i.fltree,144,8),c(i.fltree,112,9),c(i.fltree,24,7),c(i.fltree,8,8),r.F.makeCodes(i.fltree,9),r.F.codes2map(i.fltree,9,i.flmap),r.F.revCodes(i.fltree,9),c(i.fdtree,32,5),r.F.makeCodes(i.fdtree,5),r.F.codes2map(i.fdtree,5,i.fdmap),r.F.revCodes(i.fdtree,5),c(i.itree,19,0),c(i.ltree,286,0),c(i.dtree,30,0),c(i.ttree,320,0)}()})();var j0=x0({__proto__:null,default:Ts},[Ts]);const kt=function(){var n={nextZero(l,f){for(;l[f]!=0;)f++;return f},readUshort:(l,f)=>l[f]<<8|l[f+1],writeUshort(l,f,p){l[f]=p>>8&255,l[f+1]=255&p},readUint:(l,f)=>16777216*l[f]+(l[f+1]<<16|l[f+2]<<8|l[f+3]),writeUint(l,f,p){l[f]=p>>24&255,l[f+1]=p>>16&255,l[f+2]=p>>8&255,l[f+3]=255&p},readASCII(l,f,p){let y="";for(let A=0;A<p;A++)y+=String.fromCharCode(l[f+A]);return y},writeASCII(l,f,p){for(let y=0;y<p.length;y++)l[f+y]=p.charCodeAt(y)},readBytes(l,f,p){const y=[];for(let A=0;A<p;A++)y.push(l[f+A]);return y},pad:l=>l.length<2?`0${l}`:l,readUTF8(l,f,p){let y,A="";for(let P=0;P<p;P++)A+=`%${n.pad(l[f+P].toString(16))}`;try{y=decodeURIComponent(A)}catch{return n.readASCII(l,f,p)}return y}};function e(l,f,p,y){const A=f*p,P=s(y),C=Math.ceil(f*P/8),D=new Uint8Array(4*A),x=new Uint32Array(D.buffer),{ctype:M}=y,{depth:O}=y,j=n.readUshort;if(M==6){const U=A<<2;if(O==8)for(var k=0;k<U;k+=4)D[k]=l[k],D[k+1]=l[k+1],D[k+2]=l[k+2],D[k+3]=l[k+3];if(O==16)for(k=0;k<U;k++)D[k]=l[k<<1]}else if(M==2){const U=y.tabs.tRNS;if(U==null){if(O==8)for(k=0;k<A;k++){var b=3*k;x[k]=255<<24|l[b+2]<<16|l[b+1]<<8|l[b]}if(O==16)for(k=0;k<A;k++)b=6*k,x[k]=255<<24|l[b+4]<<16|l[b+2]<<8|l[b]}else{var g=U[0];const z=U[1],J=U[2];if(O==8)for(k=0;k<A;k++){var m=k<<2;b=3*k,x[k]=255<<24|l[b+2]<<16|l[b+1]<<8|l[b],l[b]==g&&l[b+1]==z&&l[b+2]==J&&(D[m+3]=0)}if(O==16)for(k=0;k<A;k++)m=k<<2,b=6*k,x[k]=255<<24|l[b+4]<<16|l[b+2]<<8|l[b],j(l,b)==g&&j(l,b+2)==z&&j(l,b+4)==J&&(D[m+3]=0)}}else if(M==3){const U=y.tabs.PLTE,z=y.tabs.tRNS,J=z?z.length:0;if(O==1)for(var E=0;E<p;E++){var w=E*C,T=E*f;for(k=0;k<f;k++){m=T+k<<2;var v=3*(N=l[w+(k>>3)]>>7-((7&k)<<0)&1);D[m]=U[v],D[m+1]=U[v+1],D[m+2]=U[v+2],D[m+3]=N<J?z[N]:255}}if(O==2)for(E=0;E<p;E++)for(w=E*C,T=E*f,k=0;k<f;k++)m=T+k<<2,v=3*(N=l[w+(k>>2)]>>6-((3&k)<<1)&3),D[m]=U[v],D[m+1]=U[v+1],D[m+2]=U[v+2],D[m+3]=N<J?z[N]:255;if(O==4)for(E=0;E<p;E++)for(w=E*C,T=E*f,k=0;k<f;k++)m=T+k<<2,v=3*(N=l[w+(k>>1)]>>4-((1&k)<<2)&15),D[m]=U[v],D[m+1]=U[v+1],D[m+2]=U[v+2],D[m+3]=N<J?z[N]:255;if(O==8)for(k=0;k<A;k++){var N;m=k<<2,v=3*(N=l[k]),D[m]=U[v],D[m+1]=U[v+1],D[m+2]=U[v+2],D[m+3]=N<J?z[N]:255}}else if(M==4){if(O==8)for(k=0;k<A;k++){m=k<<2;var L=l[S=k<<1];D[m]=L,D[m+1]=L,D[m+2]=L,D[m+3]=l[S+1]}if(O==16)for(k=0;k<A;k++){var S;m=k<<2,L=l[S=k<<2],D[m]=L,D[m+1]=L,D[m+2]=L,D[m+3]=l[S+2]}}else if(M==0)for(g=y.tabs.tRNS?y.tabs.tRNS:-1,E=0;E<p;E++){const U=E*C,z=E*f;if(O==1)for(var R=0;R<f;R++){var q=(L=255*(l[U+(R>>>3)]>>>7-(7&R)&1))==255*g?0:255;x[z+R]=q<<24|L<<16|L<<8|L}else if(O==2)for(R=0;R<f;R++)q=(L=85*(l[U+(R>>>2)]>>>6-((3&R)<<1)&3))==85*g?0:255,x[z+R]=q<<24|L<<16|L<<8|L;else if(O==4)for(R=0;R<f;R++)q=(L=17*(l[U+(R>>>1)]>>>4-((1&R)<<2)&15))==17*g?0:255,x[z+R]=q<<24|L<<16|L<<8|L;else if(O==8)for(R=0;R<f;R++)q=(L=l[U+R])==g?0:255,x[z+R]=q<<24|L<<16|L<<8|L;else if(O==16)for(R=0;R<f;R++)L=l[U+(R<<1)],q=j(l,U+(R<<1))==g?0:255,x[z+R]=q<<24|L<<16|L<<8|L}return D}function t(l,f,p,y){const A=s(l),P=Math.ceil(p*A/8),C=new Uint8Array((P+1+l.interlace)*y);return f=l.tabs.CgBI?i(f,C):r(f,C),l.interlace==0?f=o(f,l,0,p,y):l.interlace==1&&(f=function(x,M){const O=M.width,j=M.height,k=s(M),b=k>>3,g=Math.ceil(O*k/8),m=new Uint8Array(j*g);let E=0;const w=[0,0,4,0,2,0,1],T=[0,4,0,2,0,1,0],v=[8,8,8,4,4,2,2],N=[8,8,4,4,2,2,1];let L=0;for(;L<7;){const R=v[L],q=N[L];let U=0,z=0,J=w[L];for(;J<j;)J+=R,z++;let G=T[L];for(;G<O;)G+=q,U++;const Q=Math.ceil(U*k/8);o(x,M,E,U,z);let W=0,B=w[L];for(;B<j;){let ne=T[L],fe=E+W*Q<<3;for(;ne<O;){var S;if(k==1&&(S=(S=x[fe>>3])>>7-(7&fe)&1,m[B*g+(ne>>3)]|=S<<7-((7&ne)<<0)),k==2&&(S=(S=x[fe>>3])>>6-(7&fe)&3,m[B*g+(ne>>2)]|=S<<6-((3&ne)<<1)),k==4&&(S=(S=x[fe>>3])>>4-(7&fe)&15,m[B*g+(ne>>1)]|=S<<4-((1&ne)<<2)),k>=8){const pe=B*g+ne*b;for(let ue=0;ue<b;ue++)m[pe+ue]=x[(fe>>3)+ue]}fe+=k,ne+=q}W++,B+=R}U*z!=0&&(E+=z*(1+Q)),L+=1}return m}(f,l)),f}function r(l,f){return i(new Uint8Array(l.buffer,2,l.length-6),f)}var i=function(){const l={H:{}};return l.H.N=function(f,p){const y=Uint8Array;let A,P,C=0,D=0,x=0,M=0,O=0,j=0,k=0,b=0,g=0;if(f[0]==3&&f[1]==0)return p||new y(0);const m=l.H,E=m.b,w=m.e,T=m.R,v=m.n,N=m.A,L=m.Z,S=m.m,R=p==null;for(R&&(p=new y(f.length>>>2<<5));C==0;)if(C=E(f,g,1),D=E(f,g+1,2),g+=3,D!=0){if(R&&(p=l.H.W(p,b+(1<<17))),D==1&&(A=S.J,P=S.h,j=511,k=31),D==2){x=w(f,g,5)+257,M=w(f,g+5,5)+1,O=w(f,g+10,4)+4,g+=14;let U=1;for(var q=0;q<38;q+=2)S.Q[q]=0,S.Q[q+1]=0;for(q=0;q<O;q++){const G=w(f,g+3*q,3);S.Q[1+(S.X[q]<<1)]=G,G>U&&(U=G)}g+=3*O,v(S.Q,U),N(S.Q,U,S.u),A=S.w,P=S.d,g=T(S.u,(1<<U)-1,x+M,f,g,S.v);const z=m.V(S.v,0,x,S.C);j=(1<<z)-1;const J=m.V(S.v,x,M,S.D);k=(1<<J)-1,v(S.C,z),N(S.C,z,A),v(S.D,J),N(S.D,J,P)}for(;;){const U=A[L(f,g)&j];g+=15&U;const z=U>>>4;if(!(z>>>8))p[b++]=z;else{if(z==256)break;{let J=b+z-254;if(z>264){const ne=S.q[z-257];J=b+(ne>>>3)+w(f,g,7&ne),g+=7&ne}const G=P[L(f,g)&k];g+=15&G;const Q=G>>>4,W=S.c[Q],B=(W>>>4)+E(f,g,15&W);for(g+=15&W;b<J;)p[b]=p[b++-B],p[b]=p[b++-B],p[b]=p[b++-B],p[b]=p[b++-B];b=J}}}}else{7&g&&(g+=8-(7&g));const U=4+(g>>>3),z=f[U-4]|f[U-3]<<8;R&&(p=l.H.W(p,b+z)),p.set(new y(f.buffer,f.byteOffset+U,z),b),g=U+z<<3,b+=z}return p.length==b?p:p.slice(0,b)},l.H.W=function(f,p){const y=f.length;if(p<=y)return f;const A=new Uint8Array(y<<1);return A.set(f,0),A},l.H.R=function(f,p,y,A,P,C){const D=l.H.e,x=l.H.Z;let M=0;for(;M<y;){const O=f[x(A,P)&p];P+=15&O;const j=O>>>4;if(j<=15)C[M]=j,M++;else{let k=0,b=0;j==16?(b=3+D(A,P,2),P+=2,k=C[M-1]):j==17?(b=3+D(A,P,3),P+=3):j==18&&(b=11+D(A,P,7),P+=7);const g=M+b;for(;M<g;)C[M]=k,M++}}return P},l.H.V=function(f,p,y,A){let P=0,C=0;const D=A.length>>>1;for(;C<y;){const x=f[C+p];A[C<<1]=0,A[1+(C<<1)]=x,x>P&&(P=x),C++}for(;C<D;)A[C<<1]=0,A[1+(C<<1)]=0,C++;return P},l.H.n=function(f,p){const y=l.H.m,A=f.length;let P,C,D,x;const M=y.j;for(var O=0;O<=p;O++)M[O]=0;for(O=1;O<A;O+=2)M[f[O]]++;const j=y.K;for(P=0,M[0]=0,C=1;C<=p;C++)P=P+M[C-1]<<1,j[C]=P;for(D=0;D<A;D+=2)x=f[D+1],x!=0&&(f[D]=j[x],j[x]++)},l.H.A=function(f,p,y){const A=f.length,P=l.H.m.r;for(let C=0;C<A;C+=2)if(f[C+1]!=0){const D=C>>1,x=f[C+1],M=D<<4|x,O=p-x;let j=f[C]<<O;const k=j+(1<<O);for(;j!=k;)y[P[j]>>>15-p]=M,j++}},l.H.l=function(f,p){const y=l.H.m.r,A=15-p;for(let P=0;P<f.length;P+=2){const C=f[P]<<p-f[P+1];f[P]=y[C]>>>A}},l.H.M=function(f,p,y){y<<=7&p;const A=p>>>3;f[A]|=y,f[A+1]|=y>>>8},l.H.I=function(f,p,y){y<<=7&p;const A=p>>>3;f[A]|=y,f[A+1]|=y>>>8,f[A+2]|=y>>>16},l.H.e=function(f,p,y){return(f[p>>>3]|f[1+(p>>>3)]<<8)>>>(7&p)&(1<<y)-1},l.H.b=function(f,p,y){return(f[p>>>3]|f[1+(p>>>3)]<<8|f[2+(p>>>3)]<<16)>>>(7&p)&(1<<y)-1},l.H.Z=function(f,p){return(f[p>>>3]|f[1+(p>>>3)]<<8|f[2+(p>>>3)]<<16)>>>(7&p)},l.H.i=function(f,p){return(f[p>>>3]|f[1+(p>>>3)]<<8|f[2+(p>>>3)]<<16|f[3+(p>>>3)]<<24)>>>(7&p)},l.H.m=function(){const f=Uint16Array,p=Uint32Array;return{K:new f(16),j:new f(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new f(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new p(32),J:new f(512),_:[],h:new f(32),$:[],w:new f(32768),C:[],v:[],d:new f(32768),D:[],u:new f(512),Q:[],r:new f(32768),s:new p(286),Y:new p(30),a:new p(19),t:new p(15e3),k:new f(65536),g:new f(32768)}}(),function(){const f=l.H.m;for(var p=0;p<32768;p++){let A=p;A=(2863311530&A)>>>1|(1431655765&A)<<1,A=(3435973836&A)>>>2|(858993459&A)<<2,A=(4042322160&A)>>>4|(252645135&A)<<4,A=(4278255360&A)>>>8|(16711935&A)<<8,f.r[p]=(A>>>16|A<<16)>>>17}function y(A,P,C){for(;P--!=0;)A.push(0,C)}for(p=0;p<32;p++)f.q[p]=f.S[p]<<3|f.T[p],f.c[p]=f.p[p]<<4|f.z[p];y(f._,144,8),y(f._,112,9),y(f._,24,7),y(f._,8,8),l.H.n(f._,9),l.H.A(f._,9,f.J),l.H.l(f._,9),y(f.$,32,5),l.H.n(f.$,5),l.H.A(f.$,5,f.h),l.H.l(f.$,5),y(f.Q,19,0),y(f.C,286,0),y(f.D,30,0),y(f.v,320,0)}(),l.H.N}();function s(l){return[1,null,3,1,2,null,4][l.ctype]*l.depth}function o(l,f,p,y,A){let P=s(f);const C=Math.ceil(y*P/8);let D,x;P=Math.ceil(P/8);let M=l[p],O=0;if(M>1&&(l[p]=[0,0,1][M-2]),M==3)for(O=P;O<C;O++)l[O+1]=l[O+1]+(l[O+1-P]>>>1)&255;for(let j=0;j<A;j++)if(D=p+j*C,x=D+j+1,M=l[x-1],O=0,M==0)for(;O<C;O++)l[D+O]=l[x+O];else if(M==1){for(;O<P;O++)l[D+O]=l[x+O];for(;O<C;O++)l[D+O]=l[x+O]+l[D+O-P]}else if(M==2)for(;O<C;O++)l[D+O]=l[x+O]+l[D+O-C];else if(M==3){for(;O<P;O++)l[D+O]=l[x+O]+(l[D+O-C]>>>1);for(;O<C;O++)l[D+O]=l[x+O]+(l[D+O-C]+l[D+O-P]>>>1)}else{for(;O<P;O++)l[D+O]=l[x+O]+c(0,l[D+O-C],0);for(;O<C;O++)l[D+O]=l[x+O]+c(l[D+O-P],l[D+O-C],l[D+O-P-C])}return l}function c(l,f,p){const y=l+f-p,A=y-l,P=y-f,C=y-p;return A*A<=P*P&&A*A<=C*C?l:P*P<=C*C?f:p}function u(l,f,p){p.width=n.readUint(l,f),f+=4,p.height=n.readUint(l,f),f+=4,p.depth=l[f],f++,p.ctype=l[f],f++,p.compress=l[f],f++,p.filter=l[f],f++,p.interlace=l[f],f++}function d(l,f,p,y,A,P,C,D,x){const M=Math.min(f,A),O=Math.min(p,P);let j=0,k=0;for(let L=0;L<O;L++)for(let S=0;S<M;S++)if(C>=0&&D>=0?(j=L*f+S<<2,k=(D+L)*A+C+S<<2):(j=(-D+L)*f-C+S<<2,k=L*A+S<<2),x==0)y[k]=l[j],y[k+1]=l[j+1],y[k+2]=l[j+2],y[k+3]=l[j+3];else if(x==1){var b=l[j+3]*.00392156862745098,g=l[j]*b,m=l[j+1]*b,E=l[j+2]*b,w=y[k+3]*(1/255),T=y[k]*w,v=y[k+1]*w,N=y[k+2]*w;const R=1-b,q=b+w*R,U=q==0?0:1/q;y[k+3]=255*q,y[k+0]=(g+T*R)*U,y[k+1]=(m+v*R)*U,y[k+2]=(E+N*R)*U}else if(x==2)b=l[j+3],g=l[j],m=l[j+1],E=l[j+2],w=y[k+3],T=y[k],v=y[k+1],N=y[k+2],b==w&&g==T&&m==v&&E==N?(y[k]=0,y[k+1]=0,y[k+2]=0,y[k+3]=0):(y[k]=g,y[k+1]=m,y[k+2]=E,y[k+3]=b);else if(x==3){if(b=l[j+3],g=l[j],m=l[j+1],E=l[j+2],w=y[k+3],T=y[k],v=y[k+1],N=y[k+2],b==w&&g==T&&m==v&&E==N)continue;if(b<220&&w>20)return!1}return!0}return{decode:function(f){const p=new Uint8Array(f);let y=8;const A=n,P=A.readUshort,C=A.readUint,D={tabs:{},frames:[]},x=new Uint8Array(p.length);let M,O=0,j=0;const k=[137,80,78,71,13,10,26,10];for(var b=0;b<8;b++)if(p[b]!=k[b])throw"The input is not a PNG file!";for(;y<p.length;){const L=A.readUint(p,y);y+=4;const S=A.readASCII(p,y,4);if(y+=4,S=="IHDR")u(p,y,D);else if(S=="iCCP"){for(var g=y;p[g]!=0;)g++;A.readASCII(p,y,g-y),p[g+1];const R=p.slice(g+2,y+L);let q=null;try{q=r(R)}catch{q=i(R)}D.tabs[S]=q}else if(S=="CgBI")D.tabs[S]=p.slice(y,y+4);else if(S=="IDAT"){for(b=0;b<L;b++)x[O+b]=p[y+b];O+=L}else if(S=="acTL")D.tabs[S]={num_frames:C(p,y),num_plays:C(p,y+4)},M=new Uint8Array(p.length);else if(S=="fcTL"){j!=0&&((N=D.frames[D.frames.length-1]).data=t(D,M.slice(0,j),N.rect.width,N.rect.height),j=0);const R={x:C(p,y+12),y:C(p,y+16),width:C(p,y+4),height:C(p,y+8)};let q=P(p,y+22);q=P(p,y+20)/(q==0?100:q);const U={rect:R,delay:Math.round(1e3*q),dispose:p[y+24],blend:p[y+25]};D.frames.push(U)}else if(S=="fdAT"){for(b=0;b<L-4;b++)M[j+b]=p[y+b+4];j+=L-4}else if(S=="pHYs")D.tabs[S]=[A.readUint(p,y),A.readUint(p,y+4),p[y+8]];else if(S=="cHRM")for(D.tabs[S]=[],b=0;b<8;b++)D.tabs[S].push(A.readUint(p,y+4*b));else if(S=="tEXt"||S=="zTXt"){D.tabs[S]==null&&(D.tabs[S]={});var m=A.nextZero(p,y),E=A.readASCII(p,y,m-y),w=y+L-m-1;if(S=="tEXt")v=A.readASCII(p,m+1,w);else{var T=r(p.slice(m+2,m+2+w));v=A.readUTF8(T,0,T.length)}D.tabs[S][E]=v}else if(S=="iTXt"){D.tabs[S]==null&&(D.tabs[S]={}),m=0,g=y,m=A.nextZero(p,g),E=A.readASCII(p,g,m-g);const R=p[g=m+1];var v;p[g+1],g+=2,m=A.nextZero(p,g),A.readASCII(p,g,m-g),g=m+1,m=A.nextZero(p,g),A.readUTF8(p,g,m-g),w=L-((g=m+1)-y),R==0?v=A.readUTF8(p,g,w):(T=r(p.slice(g,g+w)),v=A.readUTF8(T,0,T.length)),D.tabs[S][E]=v}else if(S=="PLTE")D.tabs[S]=A.readBytes(p,y,L);else if(S=="hIST"){const R=D.tabs.PLTE.length/3;for(D.tabs[S]=[],b=0;b<R;b++)D.tabs[S].push(P(p,y+2*b))}else if(S=="tRNS")D.ctype==3?D.tabs[S]=A.readBytes(p,y,L):D.ctype==0?D.tabs[S]=P(p,y):D.ctype==2&&(D.tabs[S]=[P(p,y),P(p,y+2),P(p,y+4)]);else if(S=="gAMA")D.tabs[S]=A.readUint(p,y)/1e5;else if(S=="sRGB")D.tabs[S]=p[y];else if(S=="bKGD")D.ctype==0||D.ctype==4?D.tabs[S]=[P(p,y)]:D.ctype==2||D.ctype==6?D.tabs[S]=[P(p,y),P(p,y+2),P(p,y+4)]:D.ctype==3&&(D.tabs[S]=p[y]);else if(S=="IEND")break;y+=L,A.readUint(p,y),y+=4}var N;return j!=0&&((N=D.frames[D.frames.length-1]).data=t(D,M.slice(0,j),N.rect.width,N.rect.height)),D.data=t(D,x,D.width,D.height),delete D.compress,delete D.interlace,delete D.filter,D},toRGBA8:function(f){const p=f.width,y=f.height;if(f.tabs.acTL==null)return[e(f.data,p,y,f).buffer];const A=[];f.frames[0].data==null&&(f.frames[0].data=f.data);const P=p*y*4,C=new Uint8Array(P),D=new Uint8Array(P),x=new Uint8Array(P);for(let O=0;O<f.frames.length;O++){const j=f.frames[O],k=j.rect.x,b=j.rect.y,g=j.rect.width,m=j.rect.height,E=e(j.data,g,m,f);if(O!=0)for(var M=0;M<P;M++)x[M]=C[M];if(j.blend==0?d(E,g,m,C,p,y,k,b,0):j.blend==1&&d(E,g,m,C,p,y,k,b,1),A.push(C.buffer.slice(0)),j.dispose!=0){if(j.dispose==1)d(D,g,m,C,p,y,k,b,0);else if(j.dispose==2)for(M=0;M<P;M++)C[M]=x[M]}}return A},_paeth:c,_copyTile:d,_bin:n}}();(function(){const{_copyTile:n}=kt,{_bin:e}=kt,t=kt._paeth;var r={table:function(){const g=new Uint32Array(256);for(let m=0;m<256;m++){let E=m;for(let w=0;w<8;w++)1&E?E=3988292384^E>>>1:E>>>=1;g[m]=E}return g}(),update(g,m,E,w){for(let T=0;T<w;T++)g=r.table[255&(g^m[E+T])]^g>>>8;return g},crc:(g,m,E)=>4294967295^r.update(4294967295,g,m,E)};function i(g,m,E,w){m[E]+=g[0]*w>>4,m[E+1]+=g[1]*w>>4,m[E+2]+=g[2]*w>>4,m[E+3]+=g[3]*w>>4}function s(g){return Math.max(0,Math.min(255,g))}function o(g,m){const E=g[0]-m[0],w=g[1]-m[1],T=g[2]-m[2],v=g[3]-m[3];return E*E+w*w+T*T+v*v}function c(g,m,E,w,T,v,N){N==null&&(N=1);const L=w.length,S=[];for(var R=0;R<L;R++){const B=w[R];S.push([B>>>0&255,B>>>8&255,B>>>16&255,B>>>24&255])}for(R=0;R<L;R++){let B=4294967295;for(var q=0,U=0;U<L;U++){var z=o(S[R],S[U]);U!=R&&z<B&&(B=z,q=U)}}const J=new Uint32Array(T.buffer),G=new Int16Array(m*E*4),Q=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(R=0;R<Q.length;R++)Q[R]=255*((Q[R]+.5)/16-.5);for(let B=0;B<E;B++)for(let ne=0;ne<m;ne++){var W;R=4*(B*m+ne),N!=2?W=[s(g[R]+G[R]),s(g[R+1]+G[R+1]),s(g[R+2]+G[R+2]),s(g[R+3]+G[R+3])]:(z=Q[4*(3&B)+(3&ne)],W=[s(g[R]+z),s(g[R+1]+z),s(g[R+2]+z),s(g[R+3]+z)]),q=0;let fe=16777215;for(U=0;U<L;U++){const he=o(W,S[U]);he<fe&&(fe=he,q=U)}const pe=S[q],ue=[W[0]-pe[0],W[1]-pe[1],W[2]-pe[2],W[3]-pe[3]];N==1&&(ne!=m-1&&i(ue,G,R+4,7),B!=E-1&&(ne!=0&&i(ue,G,R+4*m-4,3),i(ue,G,R+4*m,5),ne!=m-1&&i(ue,G,R+4*m+4,1))),v[R>>2]=q,J[R>>2]=w[q]}}function u(g,m,E,w,T){T==null&&(T={});const{crc:v}=r,N=e.writeUint,L=e.writeUshort,S=e.writeASCII;let R=8;const q=g.frames.length>1;let U,z=!1,J=33+(q?20:0);if(T.sRGB!=null&&(J+=13),T.pHYs!=null&&(J+=21),T.iCCP!=null&&(U=pako.deflate(T.iCCP),J+=21+U.length+4),g.ctype==3){for(var G=g.plte.length,Q=0;Q<G;Q++)g.plte[Q]>>>24!=255&&(z=!0);J+=8+3*G+4+(z?8+1*G+4:0)}for(var W=0;W<g.frames.length;W++)q&&(J+=38),J+=(pe=g.frames[W]).cimg.length+12,W!=0&&(J+=4);J+=12;const B=new Uint8Array(J),ne=[137,80,78,71,13,10,26,10];for(Q=0;Q<8;Q++)B[Q]=ne[Q];if(N(B,R,13),R+=4,S(B,R,"IHDR"),R+=4,N(B,R,m),R+=4,N(B,R,E),R+=4,B[R]=g.depth,R++,B[R]=g.ctype,R++,B[R]=0,R++,B[R]=0,R++,B[R]=0,R++,N(B,R,v(B,R-17,17)),R+=4,T.sRGB!=null&&(N(B,R,1),R+=4,S(B,R,"sRGB"),R+=4,B[R]=T.sRGB,R++,N(B,R,v(B,R-5,5)),R+=4),T.iCCP!=null){const ue=13+U.length;N(B,R,ue),R+=4,S(B,R,"iCCP"),R+=4,S(B,R,"ICC profile"),R+=11,R+=2,B.set(U,R),R+=U.length,N(B,R,v(B,R-(ue+4),ue+4)),R+=4}if(T.pHYs!=null&&(N(B,R,9),R+=4,S(B,R,"pHYs"),R+=4,N(B,R,T.pHYs[0]),R+=4,N(B,R,T.pHYs[1]),R+=4,B[R]=T.pHYs[2],R++,N(B,R,v(B,R-13,13)),R+=4),q&&(N(B,R,8),R+=4,S(B,R,"acTL"),R+=4,N(B,R,g.frames.length),R+=4,N(B,R,T.loop!=null?T.loop:0),R+=4,N(B,R,v(B,R-12,12)),R+=4),g.ctype==3){for(N(B,R,3*(G=g.plte.length)),R+=4,S(B,R,"PLTE"),R+=4,Q=0;Q<G;Q++){const ue=3*Q,he=g.plte[Q],ye=255&he,be=he>>>8&255,St=he>>>16&255;B[R+ue+0]=ye,B[R+ue+1]=be,B[R+ue+2]=St}if(R+=3*G,N(B,R,v(B,R-3*G-4,3*G+4)),R+=4,z){for(N(B,R,G),R+=4,S(B,R,"tRNS"),R+=4,Q=0;Q<G;Q++)B[R+Q]=g.plte[Q]>>>24&255;R+=G,N(B,R,v(B,R-G-4,G+4)),R+=4}}let fe=0;for(W=0;W<g.frames.length;W++){var pe=g.frames[W];q&&(N(B,R,26),R+=4,S(B,R,"fcTL"),R+=4,N(B,R,fe++),R+=4,N(B,R,pe.rect.width),R+=4,N(B,R,pe.rect.height),R+=4,N(B,R,pe.rect.x),R+=4,N(B,R,pe.rect.y),R+=4,L(B,R,w[W]),R+=2,L(B,R,1e3),R+=2,B[R]=pe.dispose,R++,B[R]=pe.blend,R++,N(B,R,v(B,R-30,30)),R+=4);const ue=pe.cimg;N(B,R,(G=ue.length)+(W==0?0:4)),R+=4;const he=R;S(B,R,W==0?"IDAT":"fdAT"),R+=4,W!=0&&(N(B,R,fe++),R+=4),B.set(ue,R),R+=G,N(B,R,v(B,he,R-he)),R+=4}return N(B,R,0),R+=4,S(B,R,"IEND"),R+=4,N(B,R,v(B,R-4,4)),R+=4,B.buffer}function d(g,m,E){for(let w=0;w<g.frames.length;w++){const T=g.frames[w];T.rect.width;const v=T.rect.height,N=new Uint8Array(v*T.bpl+v);T.cimg=y(T.img,v,T.bpp,T.bpl,N,m,E)}}function l(g,m,E,w,T){const v=T[0],N=T[1],L=T[2],S=T[3],R=T[4],q=T[5];let U=6,z=8,J=255;for(var G=0;G<g.length;G++){const Fe=new Uint8Array(g[G]);for(var Q=Fe.length,W=0;W<Q;W+=4)J&=Fe[W+3]}const B=J!=255,ne=function(Ee,me,Oe,Be,Re,it){const Ae=[];for(var ge=0;ge<Ee.length;ge++){const $e=new Uint8Array(Ee[ge]),ft=new Uint32Array($e.buffer);var Xe;let He=0,Et=0,pt=me,Pt=Oe,kr=Be?1:0;if(ge!=0){const Js=it||Be||ge==1||Ae[ge-2].dispose!=0?1:2;let Dn=0,Dr=1e9;for(let nn=0;nn<Js;nn++){var we=new Uint8Array(Ee[ge-1-nn]);const Nn=new Uint32Array(Ee[ge-1-nn]);let wt=me,Tt=Oe,ct=-1,rn=-1;for(let Ut=0;Ut<Oe;Ut++)for(let gt=0;gt<me;gt++)ft[De=Ut*me+gt]!=Nn[De]&&(gt<wt&&(wt=gt),gt>ct&&(ct=gt),Ut<Tt&&(Tt=Ut),Ut>rn&&(rn=Ut));ct==-1&&(wt=Tt=ct=rn=0),Re&&((1&wt)==1&&wt--,(1&Tt)==1&&Tt--);const On=(ct-wt+1)*(rn-Tt+1);On<Dr&&(Dr=On,Dn=nn,He=wt,Et=Tt,pt=ct-wt+1,Pt=rn-Tt+1)}we=new Uint8Array(Ee[ge-1-Dn]),Dn==1&&(Ae[ge-1].dispose=2),Xe=new Uint8Array(pt*Pt*4),n(we,me,Oe,Xe,pt,Pt,-He,-Et,0),kr=n($e,me,Oe,Xe,pt,Pt,-He,-Et,3)?1:0,kr==1?p($e,me,Oe,Xe,{x:He,y:Et,width:pt,height:Pt}):n($e,me,Oe,Xe,pt,Pt,-He,-Et,0)}else Xe=$e.slice(0);Ae.push({rect:{x:He,y:Et,width:pt,height:Pt},img:Xe,blend:kr,dispose:0})}if(Be)for(ge=0;ge<Ae.length;ge++){if((Lt=Ae[ge]).blend==1)continue;const $e=Lt.rect,ft=Ae[ge-1].rect,He=Math.min($e.x,ft.x),Et=Math.min($e.y,ft.y),pt={x:He,y:Et,width:Math.max($e.x+$e.width,ft.x+ft.width)-He,height:Math.max($e.y+$e.height,ft.y+ft.height)-Et};Ae[ge-1].dispose=1,ge-1!=0&&f(Ee,me,Oe,Ae,ge-1,pt,Re),f(Ee,me,Oe,Ae,ge,pt,Re)}let Ve=0;if(Ee.length!=1)for(var De=0;De<Ae.length;De++){var Lt;Ve+=(Lt=Ae[De]).rect.width*Lt.rect.height}return Ae}(g,m,E,v,N,L),fe={},pe=[],ue=[];if(w!=0){const Fe=[];for(W=0;W<ne.length;W++)Fe.push(ne[W].img.buffer);const Ee=function(Re){let it=0;for(var Ae=0;Ae<Re.length;Ae++)it+=Re[Ae].byteLength;const ge=new Uint8Array(it);let Xe=0;for(Ae=0;Ae<Re.length;Ae++){const we=new Uint8Array(Re[Ae]),Ve=we.length;for(let De=0;De<Ve;De+=4){let Lt=we[De],$e=we[De+1],ft=we[De+2];const He=we[De+3];He==0&&(Lt=$e=ft=0),ge[Xe+De]=Lt,ge[Xe+De+1]=$e,ge[Xe+De+2]=ft,ge[Xe+De+3]=He}Xe+=Ve}return ge.buffer}(Fe),me=P(Ee,w);for(W=0;W<me.plte.length;W++)pe.push(me.plte[W].est.rgba);let Oe=0;for(W=0;W<ne.length;W++){const Be=(ye=ne[W]).img.length;var he=new Uint8Array(me.inds.buffer,Oe>>2,Be>>2);ue.push(he);const Re=new Uint8Array(me.abuf,Oe,Be);q&&c(ye.img,ye.rect.width,ye.rect.height,pe,Re,he),ye.img.set(Re),Oe+=Be}}else for(G=0;G<ne.length;G++){var ye=ne[G];const Fe=new Uint32Array(ye.img.buffer);var be=ye.rect.width;for(Q=Fe.length,he=new Uint8Array(Q),ue.push(he),W=0;W<Q;W++){const Ee=Fe[W];if(W!=0&&Ee==Fe[W-1])he[W]=he[W-1];else if(W>be&&Ee==Fe[W-be])he[W]=he[W-be];else{let me=fe[Ee];if(me==null&&(fe[Ee]=me=pe.length,pe.push(Ee),pe.length>=300))break;he[W]=me}}}const St=pe.length;for(St<=256&&R==0&&(z=St<=2?1:St<=4?2:St<=16?4:8,z=Math.max(z,S)),G=0;G<ne.length;G++){(ye=ne[G]).rect.x,ye.rect.y,be=ye.rect.width;const Fe=ye.rect.height;let Ee=ye.img;new Uint32Array(Ee.buffer);let me=4*be,Oe=4;if(St<=256&&R==0){me=Math.ceil(z*be/8);var at=new Uint8Array(me*Fe);const Be=ue[G];for(let Re=0;Re<Fe;Re++){W=Re*me;const it=Re*be;if(z==8)for(var ve=0;ve<be;ve++)at[W+ve]=Be[it+ve];else if(z==4)for(ve=0;ve<be;ve++)at[W+(ve>>1)]|=Be[it+ve]<<4-4*(1&ve);else if(z==2)for(ve=0;ve<be;ve++)at[W+(ve>>2)]|=Be[it+ve]<<6-2*(3&ve);else if(z==1)for(ve=0;ve<be;ve++)at[W+(ve>>3)]|=Be[it+ve]<<7-1*(7&ve)}Ee=at,U=3,Oe=1}else if(B==0&&ne.length==1){at=new Uint8Array(be*Fe*3);const Be=be*Fe;for(W=0;W<Be;W++){const Re=3*W,it=4*W;at[Re]=Ee[it],at[Re+1]=Ee[it+1],at[Re+2]=Ee[it+2]}Ee=at,U=2,Oe=3,me=3*be}ye.img=Ee,ye.bpl=me,ye.bpp=Oe}return{ctype:U,depth:z,plte:pe,frames:ne}}function f(g,m,E,w,T,v,N){const L=Uint8Array,S=Uint32Array,R=new L(g[T-1]),q=new S(g[T-1]),U=T+1<g.length?new L(g[T+1]):null,z=new L(g[T]),J=new S(z.buffer);let G=m,Q=E,W=-1,B=-1;for(let fe=0;fe<v.height;fe++)for(let pe=0;pe<v.width;pe++){const ue=v.x+pe,he=v.y+fe,ye=he*m+ue,be=J[ye];be==0||w[T-1].dispose==0&&q[ye]==be&&(U==null||U[4*ye+3]!=0)||(ue<G&&(G=ue),ue>W&&(W=ue),he<Q&&(Q=he),he>B&&(B=he))}W==-1&&(G=Q=W=B=0),N&&((1&G)==1&&G--,(1&Q)==1&&Q--),v={x:G,y:Q,width:W-G+1,height:B-Q+1};const ne=w[T];ne.rect=v,ne.blend=1,ne.img=new Uint8Array(v.width*v.height*4),w[T-1].dispose==0?(n(R,m,E,ne.img,v.width,v.height,-v.x,-v.y,0),p(z,m,E,ne.img,v)):n(z,m,E,ne.img,v.width,v.height,-v.x,-v.y,0)}function p(g,m,E,w,T){n(g,m,E,w,T.width,T.height,-T.x,-T.y,2)}function y(g,m,E,w,T,v,N){const L=[];let S,R=[0,1,2,3,4];v!=-1?R=[v]:(m*w>5e5||E==1)&&(R=[0]),N&&(S={level:0});const q=j0;for(var U=0;U<R.length;U++){for(let G=0;G<m;G++)A(T,g,G,w,E,R[U]);L.push(q.deflate(T,S))}let z,J=1e9;for(U=0;U<L.length;U++)L[U].length<J&&(z=U,J=L[U].length);return L[z]}function A(g,m,E,w,T,v){const N=E*w;let L=N+E;if(g[L]=v,L++,v==0)if(w<500)for(var S=0;S<w;S++)g[L+S]=m[N+S];else g.set(new Uint8Array(m.buffer,N,w),L);else if(v==1){for(S=0;S<T;S++)g[L+S]=m[N+S];for(S=T;S<w;S++)g[L+S]=m[N+S]-m[N+S-T]+256&255}else if(E==0){for(S=0;S<T;S++)g[L+S]=m[N+S];if(v==2)for(S=T;S<w;S++)g[L+S]=m[N+S];if(v==3)for(S=T;S<w;S++)g[L+S]=m[N+S]-(m[N+S-T]>>1)+256&255;if(v==4)for(S=T;S<w;S++)g[L+S]=m[N+S]-t(m[N+S-T],0,0)+256&255}else{if(v==2)for(S=0;S<w;S++)g[L+S]=m[N+S]+256-m[N+S-w]&255;if(v==3){for(S=0;S<T;S++)g[L+S]=m[N+S]+256-(m[N+S-w]>>1)&255;for(S=T;S<w;S++)g[L+S]=m[N+S]+256-(m[N+S-w]+m[N+S-T]>>1)&255}if(v==4){for(S=0;S<T;S++)g[L+S]=m[N+S]+256-t(0,m[N+S-w],0)&255;for(S=T;S<w;S++)g[L+S]=m[N+S]+256-t(m[N+S-T],m[N+S-w],m[N+S-T-w])&255}}}function P(g,m){const E=new Uint8Array(g),w=E.slice(0),T=new Uint32Array(w.buffer),v=C(w,m),N=v[0],L=v[1],S=E.length,R=new Uint8Array(S>>2);let q;if(E.length<2e7)for(var U=0;U<S;U+=4)q=D(N,z=E[U]*(1/255),J=E[U+1]*(1/255),G=E[U+2]*(1/255),Q=E[U+3]*(1/255)),R[U>>2]=q.ind,T[U>>2]=q.est.rgba;else for(U=0;U<S;U+=4){var z=E[U]*.00392156862745098,J=E[U+1]*(1/255),G=E[U+2]*(1/255),Q=E[U+3]*(1/255);for(q=N;q.left;)q=x(q.est,z,J,G,Q)<=0?q.left:q.right;R[U>>2]=q.ind,T[U>>2]=q.est.rgba}return{abuf:w.buffer,inds:R,plte:L}}function C(g,m,E){E==null&&(E=1e-4);const w=new Uint32Array(g.buffer),T={i0:0,i1:g.length,bst:null,est:null,tdst:0,left:null,right:null};T.bst=j(g,T.i0,T.i1),T.est=k(T.bst);const v=[T];for(;v.length<m;){let L=0,S=0;for(var N=0;N<v.length;N++)v[N].est.L>L&&(L=v[N].est.L,S=N);if(L<E)break;const R=v[S],q=M(g,w,R.i0,R.i1,R.est.e,R.est.eMq255);if(R.i0>=q||R.i1<=q){R.est.L=0;continue}const U={i0:R.i0,i1:q,bst:null,est:null,tdst:0,left:null,right:null};U.bst=j(g,U.i0,U.i1),U.est=k(U.bst);const z={i0:q,i1:R.i1,bst:null,est:null,tdst:0,left:null,right:null};for(z.bst={R:[],m:[],N:R.bst.N-U.bst.N},N=0;N<16;N++)z.bst.R[N]=R.bst.R[N]-U.bst.R[N];for(N=0;N<4;N++)z.bst.m[N]=R.bst.m[N]-U.bst.m[N];z.est=k(z.bst),R.left=U,R.right=z,v[S]=U,v.push(z)}for(v.sort((L,S)=>S.bst.N-L.bst.N),N=0;N<v.length;N++)v[N].ind=N;return[T,v]}function D(g,m,E,w,T){if(g.left==null)return g.tdst=function(U,z,J,G,Q){const W=z-U[0],B=J-U[1],ne=G-U[2],fe=Q-U[3];return W*W+B*B+ne*ne+fe*fe}(g.est.q,m,E,w,T),g;const v=x(g.est,m,E,w,T);let N=g.left,L=g.right;v>0&&(N=g.right,L=g.left);const S=D(N,m,E,w,T);if(S.tdst<=v*v)return S;const R=D(L,m,E,w,T);return R.tdst<S.tdst?R:S}function x(g,m,E,w,T){const{e:v}=g;return v[0]*m+v[1]*E+v[2]*w+v[3]*T-g.eMq}function M(g,m,E,w,T,v){for(w-=4;E<w;){for(;O(g,E,T)<=v;)E+=4;for(;O(g,w,T)>v;)w-=4;if(E>=w)break;const N=m[E>>2];m[E>>2]=m[w>>2],m[w>>2]=N,E+=4,w-=4}for(;O(g,E,T)>v;)E-=4;return E+4}function O(g,m,E){return g[m]*E[0]+g[m+1]*E[1]+g[m+2]*E[2]+g[m+3]*E[3]}function j(g,m,E){const w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],T=[0,0,0,0],v=E-m>>2;for(let N=m;N<E;N+=4){const L=g[N]*.00392156862745098,S=g[N+1]*(1/255),R=g[N+2]*(1/255),q=g[N+3]*(1/255);T[0]+=L,T[1]+=S,T[2]+=R,T[3]+=q,w[0]+=L*L,w[1]+=L*S,w[2]+=L*R,w[3]+=L*q,w[5]+=S*S,w[6]+=S*R,w[7]+=S*q,w[10]+=R*R,w[11]+=R*q,w[15]+=q*q}return w[4]=w[1],w[8]=w[2],w[9]=w[6],w[12]=w[3],w[13]=w[7],w[14]=w[11],{R:w,m:T,N:v}}function k(g){const{R:m}=g,{m:E}=g,{N:w}=g,T=E[0],v=E[1],N=E[2],L=E[3],S=w==0?0:1/w,R=[m[0]-T*T*S,m[1]-T*v*S,m[2]-T*N*S,m[3]-T*L*S,m[4]-v*T*S,m[5]-v*v*S,m[6]-v*N*S,m[7]-v*L*S,m[8]-N*T*S,m[9]-N*v*S,m[10]-N*N*S,m[11]-N*L*S,m[12]-L*T*S,m[13]-L*v*S,m[14]-L*N*S,m[15]-L*L*S],q=R,U=b;let z=[Math.random(),Math.random(),Math.random(),Math.random()],J=0,G=0;if(w!=0)for(let W=0;W<16&&(z=U.multVec(q,z),G=Math.sqrt(U.dot(z,z)),z=U.sml(1/G,z),!(W!=0&&Math.abs(G-J)<1e-9));W++)J=G;const Q=[T*S,v*S,N*S,L*S];return{Cov:R,q:Q,e:z,L:J,eMq255:U.dot(U.sml(255,Q),z),eMq:U.dot(z,Q),rgba:(Math.round(255*Q[3])<<24|Math.round(255*Q[2])<<16|Math.round(255*Q[1])<<8|Math.round(255*Q[0])<<0)>>>0}}var b={multVec:(g,m)=>[g[0]*m[0]+g[1]*m[1]+g[2]*m[2]+g[3]*m[3],g[4]*m[0]+g[5]*m[1]+g[6]*m[2]+g[7]*m[3],g[8]*m[0]+g[9]*m[1]+g[10]*m[2]+g[11]*m[3],g[12]*m[0]+g[13]*m[1]+g[14]*m[2]+g[15]*m[3]],dot:(g,m)=>g[0]*m[0]+g[1]*m[1]+g[2]*m[2]+g[3]*m[3],sml:(g,m)=>[g*m[0],g*m[1],g*m[2],g*m[3]]};kt.encode=function(m,E,w,T,v,N,L){T==null&&(T=0),L==null&&(L=!1);const S=l(m,E,w,T,[!1,!1,!1,0,L,!1]);return d(S,-1),u(S,E,w,v,N)},kt.encodeLL=function(m,E,w,T,v,N,L,S){const R={ctype:0+(T==1?0:2)+(v==0?0:4),depth:N,frames:[]},q=(T+v)*N,U=q*E;for(let z=0;z<m.length;z++)R.frames.push({rect:{x:0,y:0,width:E,height:w},img:new Uint8Array(m[z]),blend:0,dispose:1,bpp:Math.ceil(q/8),bpl:Math.ceil(U/8)});return d(R,0,!0),u(R,E,w,L,S)},kt.encode.compress=l,kt.encode.dither=c,kt.quantize=P,kt.quantize.getKDtree=C,kt.quantize.getNearest=D})();const ep={toArrayBuffer(n,e){const t=n.width,r=n.height,i=t<<2,s=n.getContext("2d").getImageData(0,0,t,r),o=new Uint32Array(s.data.buffer),c=(32*t+31)/32<<2,u=c*r,d=122+u,l=new ArrayBuffer(d),f=new DataView(l),p=1<<20;let y,A,P,C,D=p,x=0,M=0,O=0;function j(g){f.setUint16(M,g,!0),M+=2}function k(g){f.setUint32(M,g,!0),M+=4}function b(g){M+=g}j(19778),k(d),b(4),k(122),k(108),k(t),k(-r>>>0),j(1),j(32),k(3),k(u),k(2835),k(2835),b(8),k(16711680),k(65280),k(255),k(4278190080),k(1466527264),function g(){for(;x<r&&D>0;){for(C=122+x*c,y=0;y<i;)D--,A=o[O++],P=A>>>24,f.setUint32(C+y,A<<8|P),y+=4;x++}O<o.length?(D=p,setTimeout(g,ep._dly)):e(l)}()},toBlob(n,e){this.toArrayBuffer(n,t=>{e(new Blob([t],{type:"image/bmp"}))})},_dly:9};var lt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},q0={[lt.CHROME]:16384,[lt.FIREFOX]:11180,[lt.DESKTOP_SAFARI]:16384,[lt.IE]:8192,[lt.IOS]:4096,[lt.ETC]:8192};const ic=typeof window<"u",tp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Is=ic&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),$0=(ic||tp)&&(Is&&Is.getOriginalSymbol(window,"File")||typeof File<"u"&&File),np=(ic||tp)&&(Is&&Is.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function sc(n,e,t=Date.now()){return new Promise(r=>{const i=n.split(","),s=i[0].match(/:(.*?);/)[1],o=globalThis.atob(i[1]);let c=o.length;const u=new Uint8Array(c);for(;c--;)u[c]=o.charCodeAt(c);const d=new Blob([u],{type:s});d.name=e,d.lastModified=t,r(d)})}function rp(n){return new Promise((e,t)=>{const r=new np;r.onload=()=>e(r.result),r.onerror=i=>t(i),r.readAsDataURL(n)})}function ip(n){return new Promise((e,t)=>{const r=new Image;r.onload=()=>e(r),r.onerror=i=>t(i),r.src=n})}function Bn(){if(Bn.cachedResult!==void 0)return Bn.cachedResult;let n=lt.ETC;const{userAgent:e}=navigator;return/Chrom(e|ium)/i.test(e)?n=lt.CHROME:/iP(ad|od|hone)/i.test(e)&&/WebKit/i.test(e)?n=lt.IOS:/Safari/i.test(e)?n=lt.DESKTOP_SAFARI:/Firefox/i.test(e)?n=lt.FIREFOX:(/MSIE/i.test(e)||document.documentMode)&&(n=lt.IE),Bn.cachedResult=n,Bn.cachedResult}function sp(n,e){const t=Bn(),r=q0[t];let i=n,s=e,o=i*s;const c=i>s?s/i:i/s;for(;o>r*r;){const u=(r+i)/2,d=(r+s)/2;u<d?(s=d,i=d*c):(s=u*c,i=u),o=i*s}return{width:i,height:s}}function Ys(n,e){let t,r;try{if(t=new OffscreenCanvas(n,e),r=t.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{t=document.createElement("canvas"),r=t.getContext("2d")}return t.width=n,t.height=e,[t,r]}function op(n,e){const{width:t,height:r}=sp(n.width,n.height),[i,s]=Ys(t,r);return e&&/jpe?g/.test(e)&&(s.fillStyle="white",s.fillRect(0,0,i.width,i.height)),s.drawImage(n,0,0,i.width,i.height),i}function es(){return es.cachedResult!==void 0||(es.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),es.cachedResult}function As(n,e={}){return new Promise(function(t,r){let i,s;var o=function(){try{return s=op(i,e.fileType||n.type),t([i,s])}catch(u){return r(u)}},c=function(u){try{var d=function(l){try{throw l}catch(f){return r(f)}};try{let l;return rp(n).then(function(f){try{return l=f,ip(l).then(function(p){try{return i=p,function(){try{return o()}catch(y){return r(y)}}()}catch(y){return d(y)}},d)}catch(p){return d(p)}},d)}catch(l){d(l)}}catch(l){return r(l)}};try{if(es()||[lt.DESKTOP_SAFARI,lt.MOBILE_SAFARI].includes(Bn()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(n).then(function(u){try{return i=u,o()}catch{return c()}},c)}catch{c()}})}function bs(n,e,t,r,i=1){return new Promise(function(s,o){let c;if(e==="image/png"){let d,l,f;return d=n.getContext("2d"),{data:l}=d.getImageData(0,0,n.width,n.height),f=kt.encode([l.buffer],n.width,n.height,4096*i),c=new Blob([f],{type:e}),c.name=t,c.lastModified=r,u.call(this)}{let d=function(){return u.call(this)};if(e==="image/bmp")return new Promise(l=>ep.toBlob(n,l)).then((function(l){try{return c=l,c.name=t,c.lastModified=r,d.call(this)}catch(f){return o(f)}}).bind(this),o);{let l=function(){return d.call(this)};if(typeof OffscreenCanvas=="function"&&n instanceof OffscreenCanvas)return n.convertToBlob({type:e,quality:i}).then((function(f){try{return c=f,c.name=t,c.lastModified=r,l.call(this)}catch(p){return o(p)}}).bind(this),o);{let f;return f=n.toDataURL(e,i),sc(f,t,r).then((function(p){try{return c=p,l.call(this)}catch(y){return o(y)}}).bind(this),o)}}}function u(){return s(c)}})}function Ft(n){n.width=0,n.height=0}function dr(){return new Promise(function(n,e){let t,r,i,s;return dr.cachedResult!==void 0?n(dr.cachedResult):sc("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(o){try{return t=o,As(t).then(function(c){try{return r=c[1],bs(r,t.type,t.name,t.lastModified).then(function(u){try{return i=u,Ft(r),As(i).then(function(d){try{return s=d[0],dr.cachedResult=s.width===1&&s.height===2,n(dr.cachedResult)}catch(l){return e(l)}},e)}catch(d){return e(d)}},e)}catch(u){return e(u)}},e)}catch(c){return e(c)}},e)})}function ap(n){return new Promise((e,t)=>{const r=new np;r.onload=i=>{const s=new DataView(i.target.result);if(s.getUint16(0,!1)!=65496)return e(-2);const o=s.byteLength;let c=2;for(;c<o;){if(s.getUint16(c+2,!1)<=8)return e(-1);const u=s.getUint16(c,!1);if(c+=2,u==65505){if(s.getUint32(c+=2,!1)!=1165519206)return e(-1);const d=s.getUint16(c+=6,!1)==18761;c+=s.getUint32(c+4,d);const l=s.getUint16(c,d);c+=2;for(let f=0;f<l;f++)if(s.getUint16(c+12*f,d)==274)return e(s.getUint16(c+12*f+8,d))}else{if((65280&u)!=65280)break;c+=s.getUint16(c,!1)}}return e(-1)},r.onerror=i=>t(i),r.readAsArrayBuffer(n)})}function cp(n,e){const{width:t}=n,{height:r}=n,{maxWidthOrHeight:i}=e;let s,o=n;return isFinite(i)&&(t>i||r>i)&&([o,s]=Ys(t,r),t>r?(o.width=i,o.height=r/t*i):(o.width=t/r*i,o.height=i),s.drawImage(n,0,0,o.width,o.height),Ft(n)),o}function up(n,e){const{width:t}=n,{height:r}=n,[i,s]=Ys(t,r);switch(e>4&&e<9?(i.width=r,i.height=t):(i.width=t,i.height=r),e){case 2:s.transform(-1,0,0,1,t,0);break;case 3:s.transform(-1,0,0,-1,t,r);break;case 4:s.transform(1,0,0,-1,0,r);break;case 5:s.transform(0,1,1,0,0,0);break;case 6:s.transform(0,1,-1,0,r,0);break;case 7:s.transform(0,-1,-1,0,r,t);break;case 8:s.transform(0,-1,1,0,0,t)}return s.drawImage(n,0,0,t,r),Ft(n),i}function Ml(n,e,t=0){return new Promise(function(r,i){let s,o,c,u,d,l,f,p,y,A,P,C,D,x,M,O,j,k,b,g;function m(w=5){if(e.signal&&e.signal.aborted)throw e.signal.reason;s+=w,e.onProgress(Math.min(s,100))}function E(w){if(e.signal&&e.signal.aborted)throw e.signal.reason;s=Math.min(Math.max(w,s),100),e.onProgress(s)}return s=t,o=e.maxIteration||10,c=1024*e.maxSizeMB*1024,m(),As(n,e).then((function(w){try{return[,u]=w,m(),d=cp(u,e),m(),new Promise(function(T,v){var N;if(!(N=e.exifOrientation))return ap(n).then((function(S){try{return N=S,L.call(this)}catch(R){return v(R)}}).bind(this),v);function L(){return T(N)}return L.call(this)}).then((function(T){try{return l=T,m(),dr().then((function(v){try{return f=v?d:up(d,l),m(),p=e.initialQuality||1,y=e.fileType||n.type,bs(f,y,n.name,n.lastModified,p).then((function(N){try{{let S=function(){if(o--&&(M>c||M>D)){let q,U;return q=g?.95*b.width:b.width,U=g?.95*b.height:b.height,[j,k]=Ys(q,U),k.drawImage(b,0,0,q,U),p*=y==="image/png"?.85:.95,bs(j,y,n.name,n.lastModified,p).then(function(z){try{return O=z,Ft(b),b=j,M=O.size,E(Math.min(99,Math.floor((x-M)/(x-c)*100))),S}catch(J){return i(J)}},i)}return[1]},R=function(){return Ft(b),Ft(j),Ft(d),Ft(f),Ft(u),E(100),r(O)};if(A=N,m(),P=A.size>c,C=A.size>n.size,!P&&!C)return E(100),r(A);var L;return D=n.size,x=A.size,M=x,b=f,g=!e.alwaysKeepResolution&&P,(L=(function(q){for(;q;){if(q.then)return void q.then(L,i);try{if(q.pop){if(q.length)return q.pop()?R.call(this):q;q=S}else q=q.call(this)}catch(U){return i(U)}}}).bind(this))(S)}}catch(S){return i(S)}}).bind(this),i)}catch(N){return i(N)}}).bind(this),i)}catch(v){return i(v)}}).bind(this),i)}catch(T){return i(T)}}).bind(this),i)})}const H0=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let Co;function z0(n,e){return new Promise((t,r)=>{Co||(Co=function(o){const c=[];return c.push(o),URL.createObjectURL(new Blob(c))}(H0));const i=new Worker(Co);i.addEventListener("message",function(o){if(e.signal&&e.signal.aborted)i.terminate();else if(o.data.progress===void 0){if(o.data.error)return r(new Error(o.data.error)),void i.terminate();t(o.data.file),i.terminate()}else e.onProgress(o.data.progress)}),i.addEventListener("error",r),e.signal&&e.signal.addEventListener("abort",()=>{r(e.signal.reason),i.terminate()}),i.postMessage({file:n,imageCompressionLibUrl:e.libURL,options:{...e,onProgress:void 0,signal:void 0}})})}function et(n,e){return new Promise(function(t,r){let i,s,o,c,u,d;if(i={...e},o=0,{onProgress:c}=i,i.maxSizeMB=i.maxSizeMB||Number.POSITIVE_INFINITY,u=typeof i.useWebWorker!="boolean"||i.useWebWorker,delete i.useWebWorker,i.onProgress=y=>{o=y,typeof c=="function"&&c(o)},!(n instanceof Blob||n instanceof $0))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(n.type))return r(new Error("The file given is not an image"));if(d=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!u||typeof Worker!="function"||d)return Ml(n,i).then((function(y){try{return s=y,p.call(this)}catch(A){return r(A)}}).bind(this),r);var l=(function(){try{return p.call(this)}catch(y){return r(y)}}).bind(this),f=function(y){try{return Ml(n,i).then(function(A){try{return s=A,l()}catch(P){return r(P)}},r)}catch(A){return r(A)}};try{return i.libURL=i.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",z0(n,i).then(function(y){try{return s=y,l()}catch{return f()}},f)}catch{f()}function p(){try{s.name=n.name,s.lastModified=n.lastModified}catch{}try{i.preserveExif&&n.type==="image/jpeg"&&(!i.fileType||i.fileType&&i.fileType===n.type)&&(s=Zf(n,s))}catch{}return t(s)}})}et.getDataUrlFromFile=rp,et.getFilefromDataUrl=sc,et.loadImage=ip,et.drawImageInCanvas=op,et.drawFileInCanvas=As,et.canvasToFile=bs,et.getExifOrientation=ap,et.handleMaxWidthOrHeight=cp,et.followExifOrientation=up,et.cleanupCanvasMemory=Ft,et.isAutoOrientationInBrowser=dr,et.approximateBelowMaximumCanvasSizeOfBrowser=sp,et.copyExifWithoutOrientation=Zf,et.getBrowserName=Bn,et.version="2.0.2";const iA=({onImageUploaded:n,currentImages:e=[],onImagesChange:t})=>{const[r,i]=gn.useState(!1),[s,o]=gn.useState(0),c=gn.useRef(null),{toast:u}=Op(),d=async p=>{var A;const y=(A=p.target.files)==null?void 0:A[0];if(y){if(!y.type.startsWith("image/")){u({variant:"destructive",title:"Error",description:"Please upload an image file"});return}if(y.size>5*1024*1024){u({variant:"destructive",title:"Error",description:"Image size should be less than 5MB"});return}i(!0);try{const P=await et(y,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0}),C=await U0(P,"project-images");n(C);const D=[...e,C];t==null||t(D),o(D.length-1),u({title:"Success",description:"Image uploaded successfully"})}catch(P){u({variant:"destructive",title:"Error",description:P.message||"Failed to upload image"})}finally{i(!1)}}},l=()=>{o(p=>p>0?p-1:e.length-1)},f=()=>{o(p=>p<e.length-1?p+1:0)};return je.jsxs("div",{className:"space-y-4",children:[je.jsxs("div",{className:"flex items-center gap-4",children:[je.jsx(ho,{type:"button",variant:"outline",onClick:()=>{var p;return(p=c.current)==null?void 0:p.click()},disabled:r,children:r?je.jsxs(je.Fragment,{children:[je.jsx(Vp,{className:"mr-2 h-4 w-4 animate-spin"}),"Uploading..."]}):je.jsxs(je.Fragment,{children:[je.jsx(Mp,{className:"mr-2 h-4 w-4"}),"Upload Image"]})}),je.jsx("input",{type:"file",ref:c,onChange:d,accept:"image/*",className:"hidden"})]}),e.length>0&&je.jsxs("div",{className:"relative w-full max-w-md",children:[je.jsxs("div",{className:"flex items-center justify-center",children:[je.jsx(ho,{variant:"ghost",size:"icon",onClick:l,className:"absolute left-0 z-10",disabled:e.length<=1,children:je.jsx(Lp,{className:"h-4 w-4"})}),je.jsx("img",{src:e[s],alt:`Project image ${s+1}`,className:"w-full h-48 object-cover rounded-lg"}),je.jsx(ho,{variant:"ghost",size:"icon",onClick:f,className:"absolute right-0 z-10",disabled:e.length<=1,children:je.jsx(Up,{className:"h-4 w-4"})})]}),e.length>1&&je.jsxs("div",{className:"text-center mt-2",children:[s+1," / ",e.length]})]})]})};export{rA as A,iA as I,eA as a,YT as b,wf as c,_I as d,Z0 as e,tA as f,Yv as g,J0 as l,lI as o,uI as q,Y0 as r,nA as u,X0 as w};
//# sourceMappingURL=dashboard-Bruz3LCQ.js.map
