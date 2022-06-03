!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/manual-input"]=t():e["video/download/manual-input"]=t()}(self,(function(){return function(){var e={24:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".manual-input.download-video-config-section .be-text-area {\n  min-height: 200px;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function h(e,t){var n,i,o;if(t.singleton){var r=m++;n=v||(v=l(t)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=l(t),i=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},163:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"manual-input download-video-config-section"},[n("TextArea",{attrs:{placeholder:"输入 av 号或 BV 号, 空格或换行分隔"},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}}),e._v(" "),n("div",{staticClass:"manual-input-stats download-video-config-description"},[e._v("\n    已输入 "+e._s(e.ids.length)+" 个视频\n  ")]),e._v(" "),n("div",{staticClass:"manual-input-description download-video-config-description"},[e._v("\n    手动输入可以自行输入要下载的视频编号, 但下面清晰度的选择依然是以当前视频为准的, 所以建议在高清的视频页面里操作.\n    批量命名格式至少需要包含 title 和 ep 变量.\n  ")]),e._v(" "),n("div",{staticClass:"manual-input-description download-video-config-description"},[e._v("\n    一次最多 36 个视频, 请勿短时间进行大量下载, 以免遭到 b 站封禁.\n  ")])],1)};i._withStripped=!0;var o=coreApis.ui,r=Vue.extend({components:{TextArea:o.TextArea},data:()=>({inputText:""}),computed:{ids(){const e=this.inputText,t=/(BV.+)|av(\d+)/i;return e.split(/\n| /).map((e=>{const t=e.trim();return/^\d+$/.test(t)?`av${t}`:t})).filter((e=>t.test(e))).map((e=>{const n=e.match(t);return n[1]??n[2]})).slice(0,36)}}}),a=n(379),s=n.n(a),c=n(24),l=n.n(c),u={insert:"head",singleton:!1};s()(l(),u),l().locals;var d=function(e,t,n,i,o,r,a,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(r,i,[],!1,null,null,null);d.options.__file="registry/lib/plugins/video/download/manual-input/ManualInput.vue";var f=d.exports}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";n.d(i,{plugin:function(){return c}});var e=coreApis.ajax,t=coreApis.settings,o=coreApis.utils.formatters,r=coreApis.utils.log,a=coreApis.utils.title,s=coreApis.utils.urls;const c={name:"downloadVideo.inputs.manual",displayName:"下载视频 - 手动输入",description:"为下载视频增加手动输入支持.",setup:i=>{let{addData:c}=i;c("downloadVideo.inputs",(i=>{i.push({name:"videoManual",displayName:"手动输入",match:s.videoUrls,batch:!0,getInputs:async n=>{const i=(0,r.useScopedConsole)("手动输入"),s=await Promise.allSettled(n.ids.map((t=>/av(\d+)/i.test(t)?(t=>{const n=`https://api.bilibili.com/x/web-interface/view?aid=${t}`;return(0,e.bilibiliApi)((0,e.getJsonWithCredentials)(n),`获取视频信息失败, aid = ${t}`)})(t):/BV(.+)/i.test(t)?(t=>{const n=`https://api.bilibili.com/x/web-interface/view?bvid=${t}`;return(0,e.bilibiliApi)((0,e.getJsonWithCredentials)(n),`获取视频信息失败, bvid = ${t}`)})(t):(i.error(`无效输入: ${t}`),null))));return s.filter((e=>"rejected"===e.status)).forEach((e=>{i.error(e.reason)})),s.filter((e=>"fulfilled"===e.status)).flatMap((e=>{const{aid:n,cid:i,bvid:r,title:s,pages:c}=e.value;if(c.length>1)return c.map(((e,i)=>({aid:n.toString(),cid:e.cid.toString(),bvid:r,allowQualityDrop:!0,title:(0,a.formatTitle)((0,t.getGeneralSettings)().batchFilenameFormat,!1,e.part?{title:s,n:(0,o.formatNumber)(i+1,c.length),ep:e.part}:{title:s})})));return{aid:n.toString(),cid:i.toString(),bvid:r,allowQualityDrop:!0,title:(0,a.formatTitle)((0,t.getGeneralSettings)().batchFilenameFormat,!1,{title:s})}}))},component:()=>Promise.resolve().then(n.bind(n,163)).then((e=>e.default))})}))},commitHash:"407754c3253f8d7fbbdac8cfd5499e1df6156c10",coreVersion:"2.2.0"}}(),i=i.plugin}()}));