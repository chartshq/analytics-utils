!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("posthog-js")):"function"==typeof define&&define.amd?define("AnalyticsUtils",[],t):"object"==typeof exports?exports.AnalyticsUtils=t(require("posthog-js")):e.AnalyticsUtils=t(e[void 0])}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){var t=e.enabled;return{name:"Debugger",config:{enabled:void 0===t||t},initialize:function(e){e.config.enabled&&console.log("Analytics Debugger: initialize")},page:function(e){var t=e.config.enabled,n=e.payload.properties;t&&console.log("Analytics Debugger: page: ",n)},track:function(e){var t=e.config.enabled,n=e.payload,r=n.event,o=n.properties;t&&console.log("Analytics Debugger: track: ",r,o)},identify:function(e){var t=e.config.enabled,n=e.payload,r=n.userId,o=n.traits;t&&console.log("Analytics Debugger: identify: ",r,o)},reset:function(e){e.config.enabled&&console.log("Analytics Debugger: reset")},loaded:function(){return!0}}}n.r(t),n.d(t,"analyticsPluginDebugger",(function(){return r})),n.d(t,"analyticsPluginPostHog",(function(){return f})),n.d(t,"extendAnalytics",(function(){return b}));var o=n(0),i=n.n(o);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.token,n=e.apiHost,r=!1;return{name:"PostHog",config:{token:t,apiHost:n},initialize:function(e){var t=e.config;i.a.init(t.token,{api_host:t.apiHost}),r=!0},page:function(){i.a.capture("$pageview")},track:function(e){var t=e.payload,n=t.event,r=t.properties;i.a.capture(n,a({},r))},identify:function(e){var t=e.payload,n=t.userId,r=t.traits;i.a.identify(n),i.a.people.set(a({},r))},reset:function(){i.a.reset()},loaded:function(){return r}}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=e.track.bind(e),r=e.page.bind(e);return e.track=function(e,r){if("function"==typeof(r=r||{}))try{r=r()}catch(t){var o=e;e="Track_Error",r={"Event Name":o,"Error Message":t&&t.message?t.message:String(t)}}n(e,s(s({},r),t||{}))},e.page=function(e){if("function"==typeof e)try{e=e()}catch(t){console.error(t),e=""}e?r({path:e}):r()},e}}])}));