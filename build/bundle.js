!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@wordpress/editor")},function(e,t){e.exports=require("@wordpress/blocks")},function(e,t){e.exports=require("@wordpress/i18n")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(2),i=r(1),c=r(3);Object(u.registerBlockType)("gutenberg-mobile/hello-world",{title:Object(c.__)("Hello World","gutenberg-mobile"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes.content;return o.a.createElement(i.RichText,{tagName:"p",className:e.className,onChange:function(t){throw e.setAttributes({content:t}),new Error("Crashed!")},value:t})},save:function(e){return o.a.createElement(i.RichText.Content,{tagName:"p",value:e.attributes.content})}})}]);
//# sourceMappingURL=bundle.js.map