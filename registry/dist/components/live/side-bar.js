!function(r,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["live/side-bar"]=n():r["live/side-bar"]=n()}(self,(function(){return function(){var r,n,t={890:function(r,n,t){var e=t(645)((function(r){return r[1]}));e.push([r.id,'.side-bar-cntr {\n  transition: 0.24s ease-out !important;\n  overflow: visible !important;\n  transform: translateZ(0) translateX(100%) !important;\n}\n.side-bar-cntr:hover {\n  transform: translateZ(0) !important;\n}\n.side-bar-cntr::after {\n  right: calc(100% + 4px);\n  transform: translateY(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  border: 4px solid #aaa;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\nbody.dark .side-bar-cntr::after {\n  border: 4px solid #eee;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.side-bar-cntr::before {\n  right: calc(100% - 8px);\n  transform: translateY(-50%);\n  width: 32px;\n  height: 48px;\n  border-radius: 8px 0 0 8px;\n  background-color: #fff;\n  border: 1px solid #e9eaec;\n}\nbody.dark .side-bar-cntr::before {\n  background-color: #222;\n  border-color: transparent;\n}\n.side-bar-cntr::before, .side-bar-cntr::after {\n  content: "";\n  transition: 0.24s ease-out;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n}\n.side-bar-cntr:hover::after, .side-bar-cntr:hover::before {\n  opacity: 0;\n}',""]),r.exports=e},645:function(r){"use strict";
// eslint-disable-next-line func-names
r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t=r(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(r,t,e){"string"==typeof r&&(
// eslint-disable-next-line no-param-reassign
r=[[null,r,""]]);var o={};if(e)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},984:function(r,n,t){var e=t(890);e&&e.__esModule&&(e=e.default),r.exports="string"==typeof e?e:e.toString()}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,o),i.exports}n=Object.getPrototypeOf?function(r){return Object.getPrototypeOf(r)}:function(r){return r.__proto__},o.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var i=Object.create(null);o.r(i);var a={};r=r||[null,n({}),n([]),n(n)];for(var c=2&e&&t;"object"==typeof c&&!~r.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(r){a[r]=function(){return t[r]}}));return a.default=function(){return t},o.d(i,a),i},o.d=function(r,n){for(var t in n)o.o(n,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return n}});var r=coreApis.utils.urls;const n={name:"collapseLiveSideBar",entry:none,instantStyles:[{name:"collapseLiveSideBar",style:()=>Promise.resolve().then(o.t.bind(o,984,23))}],displayName:"自动收起直播侧栏",description:'自动收起直播间右边偏下的侧栏. (上面有个 "关注" 的面板)',tags:[componentsTags.live,componentsTags.style],urlInclude:r.liveUrls,commitHash:"02294d7761c841dec8f9223e16b6751edbc8c6f8"}}(),i=i.component}()}));