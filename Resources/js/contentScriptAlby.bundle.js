(()=>{var t={93150:function(t,e){var n,r,o;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t],n=function(t){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const e="The message port closed before a response was received.",n=t=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class r extends WeakMap{constructor(t,e=void 0){super(e),this.createItem=t}get(t){return this.has(t)||this.set(t,this.createItem(t)),super.get(t)}}const o=t=>t&&"object"==typeof t&&"function"==typeof t.then,i=(e,n)=>(...r)=>{t.runtime.lastError?e.reject(new Error(t.runtime.lastError.message)):n.singleCallbackArg||r.length<=1&&!1!==n.singleCallbackArg?e.resolve(r[0]):e.resolve(r)},a=t=>1==t?"argument":"arguments",c=(t,e)=>function(n,...r){if(r.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${a(e.minArgs)} for ${t}(), got ${r.length}`);if(r.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${a(e.maxArgs)} for ${t}(), got ${r.length}`);return new Promise(((o,a)=>{if(e.fallbackToNoCallback)try{n[t](...r,i({resolve:o,reject:a},e))}catch(i){console.warn(`${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),n[t](...r),e.fallbackToNoCallback=!1,e.noCallback=!0,o()}else e.noCallback?(n[t](...r),o()):n[t](...r,i({resolve:o,reject:a},e))}))},s=(t,e,n)=>new Proxy(e,{apply:(e,r,o)=>n.call(r,t,...o)});let u=Function.call.bind(Object.prototype.hasOwnProperty);const m=(t,e={},n={})=>{let r=Object.create(null),o={has:(e,n)=>n in t||n in r,get(o,i,a){if(i in r)return r[i];if(!(i in t))return;let g=t[i];if("function"==typeof g)if("function"==typeof e[i])g=s(t,t[i],e[i]);else if(u(n,i)){let e=c(i,n[i]);g=s(t,t[i],e)}else g=g.bind(t);else if("object"==typeof g&&null!==g&&(u(e,i)||u(n,i)))g=m(g,e[i],n[i]);else{if(!u(n,"*"))return Object.defineProperty(r,i,{configurable:!0,enumerable:!0,get:()=>t[i],set(e){t[i]=e}}),g;g=m(g,e[i],n["*"])}return r[i]=g,g},set:(e,n,o,i)=>(n in r?r[n]=o:t[n]=o,!0),defineProperty:(t,e,n)=>Reflect.defineProperty(r,e,n),deleteProperty:(t,e)=>Reflect.deleteProperty(r,e)},i=Object.create(t);return new Proxy(i,o)},g=t=>({addListener(e,n,...r){e.addListener(t.get(n),...r)},hasListener:(e,n)=>e.hasListener(t.get(n)),removeListener(e,n){e.removeListener(t.get(n))}}),l=new r((t=>"function"!=typeof t?t:function(e){const n=m(e,{},{getContent:{minArgs:0,maxArgs:0}});t(n)})),A=new r((t=>"function"!=typeof t?t:function(e,n,r){let i,a,c=!1,s=new Promise((t=>{i=function(e){c=!0,t(e)}}));try{a=t(e,n,i)}catch(t){a=Promise.reject(t)}const u=!0!==a&&o(a);if(!0!==a&&!u&&!c)return!1;const m=t=>{t.then((t=>{r(t)}),(t=>{let e;e=t&&(t instanceof Error||"string"==typeof t.message)?t.message:"An unexpected error occurred",r({__mozWebExtensionPolyfillReject__:!0,message:e})})).catch((t=>{console.error("Failed to send onMessage rejected reply",t)}))};return m(u?a:s),!0})),p=({reject:n,resolve:r},o)=>{t.runtime.lastError?t.runtime.lastError.message===e?r():n(new Error(t.runtime.lastError.message)):o&&o.__mozWebExtensionPolyfillReject__?n(new Error(o.message)):r(o)},f=(t,e,n,...r)=>{if(r.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${a(e.minArgs)} for ${t}(), got ${r.length}`);if(r.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${a(e.maxArgs)} for ${t}(), got ${r.length}`);return new Promise(((t,e)=>{const o=p.bind(null,{resolve:t,reject:e});r.push(o),n.sendMessage(...r)}))},b={devtools:{network:{onRequestFinished:g(l)}},runtime:{onMessage:g(A),onMessageExternal:g(A),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},d={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":d},services:{"*":d},websites:{"*":d}},m(t,b,n)};t.exports=n(chrome)}else t.exports=globalThis.browser},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(93150),e=n.n(t);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i={title:{rules:[['meta[property="og:title"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:title"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:title"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:title"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:title"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:title"][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-title"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-title"][content]',function(t){return t.getAttribute("content")}],['meta[property="sailthru.title"][content]',function(t){return t.getAttribute("content")}],['meta[name="sailthru.title"][content]',function(t){return t.getAttribute("content")}],["title",function(t){return t.textContent}]]},description:{rules:[['meta[property="alby:description"][content]',function(t){return t.getAttribute("content")}],['meta[name="alby:description"][content]',function(t){return t.getAttribute("content")}],['meta[property="og:description"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:description"][content]',function(t){return t.getAttribute("content")}],['meta[property="description" i][content]',function(t){return t.getAttribute("content")}],['meta[name="description" i][content]',function(t){return t.getAttribute("content")}],['meta[property="sailthru.description"][content]',function(t){return t.getAttribute("content")}],['meta[name="sailthru.description"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:description"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:description"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:description"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:description"][content]',function(t){return t.getAttribute("content")}],['meta[property="summary" i][content]',function(t){return t.getAttribute("content")}],['meta[name="summary" i][content]',function(t){return t.getAttribute("content")}]]},type:{rules:[['meta[property="og:type"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:type"][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-type"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-type"][content]',function(t){return t.getAttribute("content")}],['meta[property="medium"][content]',function(t){return t.getAttribute("content")}],['meta[name="medium"][content]',function(t){return t.getAttribute("content")}]]},url:{rules:[['meta[property="og:url"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:url"][content]',function(t){return t.getAttribute("content")}],['meta[property="al:web:url"][content]',function(t){return t.getAttribute("content")}],['meta[name="al:web:url"][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-link"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-link"][content]',function(t){return t.getAttribute("content")}],["a.amp-canurl",function(t){return t.getAttribute("href")}],['link[rel="canonical"][href]',function(t){return t.getAttribute("href")}]],defaultValue:function(t){return t.url},processor:function(t,e){return a(e.url,t)}},provider:{rules:[['meta[property="alby:name"][content]',function(t){return t.getAttribute("content")}],['meta[name="alby:name"][content]',function(t){return t.getAttribute("content")}],['meta[property="og:site_name"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:site_name"][content]',function(t){return t.getAttribute("content")}],['meta[property="publisher" i][content]',function(t){return t.getAttribute("content")}],['meta[name="publisher" i][content]',function(t){return t.getAttribute("content")}],['meta[property="application-name" i][content]',function(t){return t.getAttribute("content")}],['meta[name="application-name" i][content]',function(t){return t.getAttribute("content")}],['meta[property="al:android:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[name="al:android:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[property="al:iphone:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[name="al:iphone:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[property="al:ipad:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[name="al:ipad:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[property="al:ios:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[name="al:ios:app_name"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:app:name:iphone"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:app:name:iphone"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:app:name:ipad"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:app:name:ipad"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:app:name:googleplay"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:app:name:googleplay"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:app:name:iphone"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:app:name:iphone"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:app:name:ipad"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:app:name:ipad"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:app:name:googleplay"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:app:name:googleplay"][content]',function(t){return t.getAttribute("content")}]],defaultValue:function(t){return new URL(t.url).hostname.replace(/www[a-zA-Z0-9]*\./,"").replace(".co.",".").split(".").slice(0,-1).join(" ")}},keywords:{rules:[['meta[property="keywords" i][content]',function(t){return t.getAttribute("content")}],['meta[name="keywords" i][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-tags"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-tags"][content]',function(t){return t.getAttribute("content")}],['meta[property="sailthru.tags"][content]',function(t){return t.getAttribute("content")}],['meta[name="sailthru.tags"][content]',function(t){return t.getAttribute("content")}],['meta[property="article:tag" i][content]',function(t){return t.getAttribute("content")}],['meta[name="article:tag" i][content]',function(t){return t.getAttribute("content")}],['meta[property="book:tag" i][content]',function(t){return t.getAttribute("content")}],['meta[name="book:tag" i][content]',function(t){return t.getAttribute("content")}],['meta[property="topic" i][content]',function(t){return t.getAttribute("content")}],['meta[name="topic" i][content]',function(t){return t.getAttribute("content")}]],processor:function(t){return t.split(",").map((function(t){return t.trim()}))}},author:{rules:[['meta[property="author" i][content]',function(t){return t.getAttribute("content")}],['meta[name="author" i][content]',function(t){return t.getAttribute("content")}],['meta[property="article:author"][content]',function(t){return t.getAttribute("content")}],['meta[name="article:author"][content]',function(t){return t.getAttribute("content")}],['meta[property="book:author"][content]',function(t){return t.getAttribute("content")}],['meta[name="book:author"][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-author"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-author"][content]',function(t){return t.getAttribute("content")}],['meta[property="sailthru.author"][content]',function(t){return t.getAttribute("content")}],['meta[name="sailthru.author"][content]',function(t){return t.getAttribute("content")}],['a[class*="author" i]',function(t){return t.textContent}],['[rel="author"]',function(t){return t.textContent}],['meta[property="twitter:creator"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:creator"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:creator"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:creator"][content]',function(t){return t.getAttribute("content")}],['meta[property="profile:username"][content]',function(t){return t.getAttribute("content")}],['meta[name="profile:username"][content]',function(t){return t.getAttribute("content")}]]},copyright:{rules:[['meta[property="copyright" i][content]',function(t){return t.getAttribute("content")}],['meta[name="copyright" i][content]',function(t){return t.getAttribute("content")}]]},email:{rules:[['meta[property="email" i][content]',function(t){return t.getAttribute("content")}],['meta[name="email" i][content]',function(t){return t.getAttribute("content")}],['meta[property="reply-to" i][content]',function(t){return t.getAttribute("content")}],['meta[name="reply-to" i][content]',function(t){return t.getAttribute("content")}]]},twitter:{rules:[['meta[property="twitter:site"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:site"][content]',function(t){return t.getAttribute("content")}]]},reddit:{rules:[['meta[property="reddit:site"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:site"][content]',function(t){return t.getAttribute("content")}]]},facebook:{rules:[['meta[property="fb:pages"][content]',function(t){return t.getAttribute("content")}],['meta[name="fb:pages"][content]',function(t){return t.getAttribute("content")}]]},image:{rules:[['meta[property="alby:image"][content]',function(t){return t.getAttribute("content")}],['meta[name="alby:image"][content]',function(t){return t.getAttribute("content")}],['meta[property="og:image:secure_url"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:image:secure_url"][content]',function(t){return t.getAttribute("content")}],['meta[property="og:image:url"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:image:url"][content]',function(t){return t.getAttribute("content")}],['meta[property="og:image"][content]',function(t){return t.getAttribute("content")}],['meta[name="og:image"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:image"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:image"][content]',function(t){return t.getAttribute("content")}],['meta[property="twitter:image:src"][content]',function(t){return t.getAttribute("content")}],['meta[name="twitter:image:src"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:image"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:image"][content]',function(t){return t.getAttribute("content")}],['meta[property="reddit:image:src"][content]',function(t){return t.getAttribute("content")}],['meta[name="reddit:image:src"][content]',function(t){return t.getAttribute("content")}],['meta[property="thumbnail"][content]',function(t){return t.getAttribute("content")}],['meta[name="thumbnail"][content]',function(t){return t.getAttribute("content")}],['meta[property="parsely-image-url"][content]',function(t){return t.getAttribute("content")}],['meta[name="parsely-image-url"][content]',function(t){return t.getAttribute("content")}],['meta[property="sailthru.image.full"][content]',function(t){return t.getAttribute("content")}],['meta[name="sailthru.image.full"][content]',function(t){return t.getAttribute("content")}]],processor:function(t,e){return!0===e.options.forceImageHttps?c(a(e.url,t)):a(e.url,t)}},icon:{rules:[['meta[property="alby:image"][content]',function(t){return t.getAttribute("content")}],['meta[name="alby:image"][content]',function(t){return t.getAttribute("content")}],['link[rel="apple-touch-icon"][href]',function(t){return t.getAttribute("href")}],['link[rel="apple-touch-icon-precomposed"][href]',function(t){return t.getAttribute("href")}],['link[rel="fluid-icon"][href]',function(t){return t.getAttribute("href")}],['link[rel="shortcut icon"][href]',function(t){return t.getAttribute("href")}],['link[rel="Shortcut Icon"][href]',function(t){return t.getAttribute("href")}],['link[rel="mask-icon"][href]',function(t){return t.getAttribute("href")}],['link[rel="icon" i][href]',function(t){return t.getAttribute("href")}]],processor:function(t,e){return!0===e.options.forceImageHttps?c(a(e.url,t)):a(e.url,t)}},monetization:{rules:[['meta[name="lightning"]',function(t){return t.getAttribute("content")}],['meta[property="lightning"]',function(t){return t.getAttribute("content")}]],processor:function(t){return t.toLowerCase()}}};function a(t,e){return new URL(e,t).href}function c(t){return t.replace(/^http:/,"https:")}var s=function(){var t={};return Object.keys(i).forEach((function(e){var n=i[e];t[e]=function(t,e,n){for(var r,i=0,a=0;a<t.rules.length;a++){var c=o(t.rules[a],2),s=c[0],u=c[1],m=Array.from(e.querySelectorAll(s));if(m.length){var g=!0,l=!1,A=void 0;try{for(var p,f=m[Symbol.iterator]();!(g=(p=f.next()).done);g=!0){var b=p.value,d=t.rules.length-a;if(t.scorer){var y=t.scorer(b,d);y&&(d=y)}d>i&&(i=d,r=u(b))}}catch(t){l=!0,A=t}finally{try{g||null==f.return||f.return()}finally{if(l)throw A}}}}return r?(t.processor&&(r=t.processor(r,n)),r):(!r||r.length<1)&&t.defaultValue?t.defaultValue(n):void 0}(n,document,{options:{},url:document.location.toString()})||void 0})),t};function u(){if(!window||!document)throw new Error("Must be called in browser context");var t=s();return{location:window.location.toString(),domain:window.location.origin,host:window.location.host,pathname:window.location.pathname,name:t.provider||t.title||"",description:t.description||"",icon:t.icon||t.image||"",metaData:t,external:!0}}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const g={request:function(t,n,r){return e().runtime.sendMessage(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}({application:"LBE",prompt:!0,action:t,args:n,origin:{internal:!0}},r)).then((function(t){if(t.error)throw new Error(t.error);return t.data}))},reply:function(t){return e().runtime.sendMessage({application:"LBE",response:!0,data:t,origin:{internal:!0}})},error:function(t){return e().runtime.sendMessage({application:"LBE",response:!0,error:t,origin:{internal:!0}})}};function l(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}}function p(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function f(){return b.apply(this,arguments)}function b(){return(b=A((function(){var t,e,n,r;return p(this,(function(o){switch(o.label){case 0:return[4,d()];case 1:return t=o.sent(),e=!(window&&window.document&&window.document.doctype)||"html"===window.document.doctype.name,n=function(){var t=window.location.pathname,e=!0,n=!1,r=void 0;try{for(var o,i=[/\.xml$/,/\.pdf$/][Symbol.iterator]();!(e=(o=i.next()).done);e=!0)if(o.value.test(t))return!1}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}return!0}(),r=function(){if(!document||!document.documentElement)return!1;var t=document.documentElement.nodeName;return!t||"html"===t.toLowerCase()}(),[2,t&&e&&n&&r]}}))}))).apply(this,arguments)}function d(){return y.apply(this,arguments)}function y(){return(y=A((function(){var t,e;return p(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=window.location.host,[4,g.request("getBlocklist",{host:t})];case 1:return[2,!n.sent().blocked];case 2:return e=n.sent(),r=e,(null!=(o=Error)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](r):r instanceof o)&&console.error(e),[2,!1];case 3:return[2]}var r,o}))}))).apply(this,arguments)}function h(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function x(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var w=["alby/enable","alby/addAccount","alby/isEnabled"],v=["alby/enable","alby/isEnabled"],k=!1,E=!1;function C(){var t;return t=function(){return x(this,(function(t){switch(t.label){case 0:return[4,f()];case 1:return t.sent()?(window.addEventListener("message",(function(t){if(t.source===window&&"LBE"===t.data.application&&"alby"===t.data.scope&&t.data&&!t.data.response){if(E)return void P(t,{error:"window.alby call cancelled (rejecting further window.alby calls until the next reload)"});if(!(k?w:v).includes(t.data.action))return void console.error("Function not available.");var n={action:"public/".concat(t.data.action),args:t.data.args,application:"LBE",public:!0,prompt:!0,origin:u()},r=function(e){var n,r;"alby/enable"===t.data.action&&(k=null===(n=e.data)||void 0===n?void 0:n.enabled,e.error&&(console.error(e.error),console.info("Enable was rejected ignoring further alby calls"),E=!0)),"alby/isEnabled"===t.data.action&&(k=null===(r=e.data)||void 0===r?void 0:r.isEnabled),P(t,e)};return e().runtime.sendMessage(n).then(r).catch(r)}})),[2]):[2]}}))},C=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))},C.apply(this,arguments)}function P(t,e){window.postMessage({id:t.data.id,application:"LBE",response:!0,data:e,scope:"alby"},window.location.origin)}!function(){C.apply(this,arguments)}()})()})();