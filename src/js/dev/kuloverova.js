import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';
window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';

//noUiSlider
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ut){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function ct(t){t.parentElement.removeChild(t)}function pt(t){return null!=t}function ft(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function dt(t,e,r){0<r&&(gt(t,e),setTimeout(function(){vt(t,e)},r))}function ht(t){return Math.max(Math.min(t,100),0)}function mt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function gt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function vt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function bt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ut.PipsMode=void 0,(z=ut.PipsMode||(ut.PipsMode={})).Range="range",z.Steps="steps",z.Positions="positions",z.Count="count",z.Values="values",ut.PipsType=void 0,(z=ut.PipsType||(ut.PipsType={}))[z.None=-1]="None",z[z.NoValue=0]="NoValue",z[z.LargeValue=1]="LargeValue",z[z.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([mt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},St={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=mt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function xt(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function y(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function w(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function P(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function C(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function N(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("invert-connects"),u=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");w(t,t.start[1]-t.start[0])}if(l&&2!==t.handles)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:u,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a,invertConnects:l}}function V(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=mt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function A(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function k(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function M(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function U(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function D(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function yt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:xt},direction:{r:!0,t:C},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:y},margin:{r:!1,t:w},limit:{r:!1,t:E},padding:{r:!1,t:P},behaviour:{r:!0,t:N},ariaFormat:{r:!1,t:k},format:{r:!1,t:M},tooltips:{r:!1,t:V},keyboardSupport:{r:!0,t:U},documentElement:{r:!1,t:D},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L},handleAttributes:{r:!1,t:A}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(pt(e[t])||void 0!==i[t])n[t].t(r,(pt(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function T(t,f,o){var i,n,l,u,s,a,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=!1,y=t.ownerDocument,w=f.documentElement||y.documentElement,E=y.body,r="rtl"===y.dir||1===f.ort?0:100;function P(t,e){var r=y.createElement("div");return e&&gt(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||A(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=st(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return et(e,S.toStepping(u),!0,!0),$("slide",e),$("update",e),$("change",e),$("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?gt(n,f.cssClasses.handleLower):e===f.handles-1&&gt(n,f.cssClasses.handleUpper),t.handle=n,t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function A(t){return l[t].hasAttribute("disabled")}function k(){a&&(W("update"+St.tooltips),a.forEach(function(t){t&&ct(t)}),a=null)}function M(){k(),a=l.map(e),I("update"+St.tooltips,function(t,e,r){a&&f.tooltips&&!1!==a[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),a[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ut.PipsMode.Range||t.mode===ut.PipsMode.Steps)return S.xVal;if(t.mode!==ut.PipsMode.Count)return t.mode===ut.PipsMode.Positions?U(t.values,t.stepped):t.mode===ut.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ut.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ut.PipsType.LargeValue:p?ut.PipsType.SmallValue:ut.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=y.createElement("div"),n=((t={})[ut.PipsType.None]="",t[ut.PipsType.NoValue]=f.cssClasses.valueNormal,t[ut.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ut.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ut.PipsType.None]="",t[ut.PipsType.NoValue]=f.cssClasses.markerNormal,t[ut.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ut.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return gt(a,f.cssClasses.pips),gt(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ut.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ut.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){s&&(ct(s),s=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return s=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||bt(y),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ht(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=bt(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);K(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(vt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){w.removeEventListener(t[0],t[1])}),0===v&&(vt(d,f.cssClasses.drag),tt(),t.cursor&&(E.style.cursor="",E.removeEventListener("selectstart",ft))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){et(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){$("update",t)})),e.handleNumbers.forEach(function(t){$("change",t),$("set",t),$("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(A)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,gt(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,w,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,w,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",w,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(E.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&gt(d,f.cssClasses.drag),E.addEventListener("selectstart",ft,!1)),e.handleNumbers.forEach(function(t){$("start",t)}))}function q(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;A(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||dt(d,f.cssClasses.tap,f.animationDuration),et(r,e,!0,!0),tt(),$("slide",r,!0),$("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):($("change",r,!0),$("set",r,!0)))}function X(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(lt,e)})})}function Y(a){a.fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),a.tap&&z(c.start,i,q,{}),a.hover&&z(c.move,i,X,{hover:!0}),a.drag&&u.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==u.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],gt(e,f.cssClasses.draggable),a.fixed&&(i.push(r.children[0]),i.push(n.children[0])),a.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))})}function I(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){$("update",e)})}function W(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==St.aria&&e!==St.tooltips||i===r)&&delete b[t]})}function $(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(lt,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),lt)})})}function G(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ht(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function J(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function K(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=G(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=et(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){$("update",t),$("slide",t)}),null!=i&&$("drag",s))}function Q(t,e){return f.dir?100-t-e:t}function Z(t,e){m[t]=e,h[t]=S.fromStepping(e);e="translate("+J(Q(e,0)-r+"%","0")+")";if(l[t].style[f.transformRule]=e,f.events.invertConnects&&1<m.length){e=m.every(function(t,e,r){return 0===e||t>=r[e-1]});if(x!==!e)return x=!x,xt(f,f.connect.map(function(t){return!t})),void at()}rt(t),rt(t+1),x&&(rt(t-1),rt(t+2))}function tt(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function et(t,e,r,n,i,o){return!1!==(e=i?e:G(m,t,e,r,n,!1,o))&&(Z(t,e),!0)}function rt(t){var e,r,n;u[t]&&(e=m.slice(),x&&e.sort(function(t,e){return t-e}),n=100,r="translate("+J(Q(r=(r=0)!==t?e[t-1]:r,n=(n=t!==u.length-1?e[t]:n)-r)+"%","0")+")",n="scale("+J(n/100,"1")+")",u[t].style[f.transformRule]=r+" "+n)}function nt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function it(t,e,r){var n=mt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&dt(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){et(t,nt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){et(t,m[t],!0,!0,r)});tt(),g.forEach(function(t){$("update",t),null!==n[t]&&e&&$("set",t)})}function ot(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function st(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}function at(){for(;n.firstChild;)n.removeChild(n.firstChild);for(var t=0;t<=f.handles;t++)u[t]=N(n,f.connect[t]),rt(t);Y({drag:f.events.drag,fixed:!0})}gt(t=d,f.cssClasses.target),0===f.dir?gt(t,f.cssClasses.ltr):gt(t,f.cssClasses.rtl),0===f.ort?gt(t,f.cssClasses.horizontal):gt(t,f.cssClasses.vertical),gt(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){n=P(e,f.cssClasses.connects),l=[],(u=[]).push(N(n,t[0]));for(var r=0;r<f.handles;r++)l.push(C(e,r)),g[r]=r,u.push(N(n,t[r+1]))}(f.connect,i),Y(f.events),it(f.start),f.pips&&T(f.pips),f.tooltips&&M(),W("update"+St.aria),I("update"+St.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=G(m,t,0,!0,!0,!0),n=G(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var lt={destroy:function(){for(W(St.aria),W(St.tooltips),Object.keys(f.cssClasses).forEach(function(t){vt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(st)},on:I,off:W,get:ot,set:it,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);et(t,nt(e,t),!0,!0,n),$("update",t),r&&$("set",t)},reset:function(t){it(f.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){K(t,e,m,r)},options:o,updateOptions:function(e,t){var r=ot(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=yt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?M:k)(),m=[],it(pt(e.start)?e.start:r,t),e.connect&&at()},target:d,removePips:L,removeTooltips:k,getPositions:function(){return m.slice()},getTooltips:function(){return a},getOrigins:function(){return l},pips:T};return lt}function j(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=T(t,yt(e),e);return t.noUiSlider=e}var z={__spectrum:u,cssClasses:p,create:j};ut.create=j,ut.cssClasses=p,ut.default=z,Object.defineProperty(ut,"__esModule",{value:!0})});
//wNumb.min.js
!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function w(e){return e.split("").reverse().join("")}function h(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function x(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,c,a,p){var d,l,h,g=p,v="",m="";return o&&(p=o(p)),!!x(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(p=function(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?e[1]-t:-t))).toFixed(t)}(p,e)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(v=n+l[1])):h=p,t&&(h=w((h=w(h).match(/.{1,3}/g)).join(w(t)))),d&&u&&(m+=u),r&&(m+=r),d&&s&&(m+=s),m+=h,m+=v,i&&(m+=i),c&&(m=c(m,g)),m)}function r(e,t,n,r,i,o,f,u,s,c,a,p){var d,l="";return a&&(p=a(p)),!(!p||"string"!=typeof p)&&(u&&h(p,u)&&(p=p.replace(u,""),d=!0),r&&h(p,r)&&(p=p.replace(r,"")),s&&h(p,s)&&(p=p.replace(s,""),d=!0),i&&function(e,t){return e.slice(-1*t.length)===t}(p,i)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(l+="-"),""!==(l=(l+=p).replace(/[^0-9\.\-.]/g,""))&&(l=Number(l),f&&(l=f(l)),!!x(l)&&l))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    programsSwiper();
  } catch {}
  try {
    wowAnim();
  } catch {}
  try {
    footerDropdown();
  } catch {}
  try {
    confidenceSwiper();
  } catch {}
  try {
    mainBannerAnim();
  } catch {}
  try {
    identifyProblemAnimBg();
  } catch {}
  try {
    catalogPsyhologist();
  } catch {}
  try {
    expertsSwiper();
  } catch {}
  try {
    openModalHelp();
  } catch {}
  try {
    testPage();
  } catch {}
  try {
    servicesTabsSwiper();
  } catch {}
  try {
    coachingWho ()
  } catch {}
  try {
    if (window.innerWidth > 768) {
      helpWithAnim();
    } else {
      helpWithAnimMob();
    }
  } catch {}
});

function mainBannerAnim() {
  const section = document.querySelector('.main-banner'),
    title = document.querySelector('.main-banner__title span'),
    bg = document.querySelector('.main-banner__img-bg'),
    photo = document.querySelector('.main-banner__img-photo'),
    btnBox = document.querySelector('.main-banner__btn-box'),
    category = document.querySelector('.main-banner__category'),
    goal = document.querySelector('.main-banner__goal-box'),
    grade = document.querySelector('.main-banner__grade-box');

  const tl = gsap.timeline();

  tl.from(bg, {
    duration: 1,
    ease: 'power2.inOut',
    y: '+=100%'
    // keyframes: {
    //   '0%': { scale: '0', opacity: 0 },
    //   [centerAnim]: { scale: '1.05', opacity: 1 },
    //   '100%': { scale: '1' }
    // }
  })
    .from(title, {
      duration: 1,
      ease: 'power2.inOut',
      y: '+=100%',
      delay: 0.5
    })
    .from(
      photo,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=100%',
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      btnBox,
      {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      category,
      {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      goal,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=150%',
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      grade,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=150%',
        delay: 0.5
      },
      '-=1.5'
    );
}

function wowAnim() {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 150,
    mobile: true,
    live: true
  });
  wow.init();
}

function helpWithAnim() {
  const section = document.querySelector('.help-with'),
    items = document.querySelectorAll('.help-with__item'),
    title = document.querySelectorAll('.help-with__title'),
    duration = 0.5;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'middle 500px',
      end: 'bottom bottom'
    }
  });

  tl.from(title, {
    duration: 0.8,
    ease: 'power2.inOut',
    y: '-=200%',
    delay: '1'
  })
    .fromTo(
      items[9],
      {
        opacity: 0,
        y: '-500%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '-10deg' }
    )
    .fromTo(
      items[8],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '13deg' },
      `-=${duration}`
    )
    .fromTo(
      items[7],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '-8deg' },
      `-=${duration}`
    )
    .fromTo(
      items[6],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '65%', rotate: '-9deg' }
    )
    .fromTo(
      items[5],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '70%', rotate: '-12deg' },
      `-=${duration}`
    )
    .fromTo(
      items[4],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '40%', rotate: '-9deg' },
      `-=${duration}`
    )
    .fromTo(
      items[3],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '60%', rotate: '8deg' },
      `-=${duration}`
    )
    .fromTo(
      items[2],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '15%', y: '110%', rotate: '12deg' }
    )
    .fromTo(
      items[1],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '140%', rotate: '-11deg' },
      `-=${duration}`
    )
    .fromTo(
      items[0],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '120%', rotate: '5deg' },
      `-=${duration}`
    )
    .to(items, {
      y: '0',
      rotate: '0deg',
      x: '0'
    });
}

function helpWithAnimMob() {
  const section = document.querySelector('.help-with'),
    items = document.querySelectorAll('.help-with__item'),
    title = document.querySelectorAll('.help-with__title'),
    duration = 0.8;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'middle 500px',
      end: 'bottom bottom'
    }
  });

  tl.from(title, {
    duration: duration,
    ease: 'power2.inOut',
    y: '-=200%',
    delay: '1'
  })
    .fromTo(
      items[6],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0%', rotate: '5deg' }
    )
    .fromTo(
      items[5],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '35%', rotate: '-6deg' },
      `-=0.7`
    )
    .fromTo(
      items[4],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '85%', x: '25%', rotate: '-13deg' },

      `-=0.6`
    )
    .fromTo(
      items[3],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '110%', x: '-10%', rotate: '-7deg' },
      `-=0.6`
    )
    .fromTo(
      items[2],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '10%', y: '120%', rotate: '8deg' },
      `-=0.6`
    )
    .fromTo(
      items[1],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '25%', y: '165%', rotate: '-8deg' },
      `-=0.6`
    )
    .fromTo(
      items[0],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '205%', rotate: '-8deg' },
      `-=0.6`
    )
    .to(items, {
      y: '0',
      rotate: '0deg',
      x: '0'
    });
}

function footerDropdown() {
  const titles = document.querySelectorAll('.footer-content__nav-list-title-box');

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      $(title).parent().find('.footer-content__nav-list-wrapper').slideToggle();
      $(title).toggleClass('isActive');
    });
  });
}

function identifyProblemAnimBg() {
  const section = document.querySelector('.identify-problem');
  const bg = document.querySelector('.identify-problem__content-bg');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'middle 500px',
      end: 'bottom bottom'
    }
  });
  tl.from(bg, {
    duration: 1.3,
    ease: 'power2.inOut',
    rotate: '-45deg'
  });
}

function programsSwiper() {
  const swiper = new Swiper('.programs__swiper', {
    slidesPerView: 1.1,
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        // spaceBetween: 0,
        spaceBetween: rem(3.2),
        grid: {
          rows: 3,
          fill: 'column'
        }
      }
    }
  });
}

function confidenceSwiper() {
  const swiperRibbon = new Swiper('.confidence__swiper', {
    speed: 3000,
    slidesPerView: 'auto',
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true // отключаем возможность отлючить анимацию при касании
    },
    breakpoints: {
      769: {
        speed: 4000,
        slidesPerView: 'auto',
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false // отключаем возможность отлючить анимацию при касании
        }
      }
    }
  });
}

// функция определения максимального. минимального и текущего обозначения ренджа возраста
function minMaxRange(item) {
  let currentArr;
  let currentStart;
  let currentMinStart;
  let currentMinArr;
  let currentMaxStart;
  let currentMaxArr;

  if (item.dataset.current) {
    currentArr = item.dataset.current.split(',');
    currentStart = [+currentArr[0], +currentArr[1]];
  } else {
    currentStart = [25, 65];
  }
  if (item.dataset.min) {
    currentMinArr = item.dataset.min;
    currentMinStart = [+currentMinArr];
    console.log(currentMinArr);
  } else {
    currentMinStart = [25];
  }
  if (item.dataset.max) {
    currentMaxArr = item.dataset.max;
    currentMaxStart = [+currentMaxArr];
    console.log(currentMaxArr);
  } else {
    currentMinStart = [65];
  }

  return {
    currentStart,
    currentMinStart,
    currentMaxStart
  };
}

function catalogPsyhologist() {
  // ===========================================================
  // ===========================================================
  //                             TABS
  // ===========================================================
  // ===========================================================

  // клики по табам, типу консультации и возрасту пациента
  function clickTabsBtn(selector) {
    $('.catalog').on('click', selector, function () {
      var group = $(this).data('radio');
      $(selector).removeClass('isActive');
      $(selector + '[data-radio="' + group + '"]').addClass('isActive');
    });
  }

  clickTabsBtn('.catalog__tab');
  clickTabsBtn('.catalog__type');
  clickTabsBtn('.catalog__age');

  // ===========================================================
  // ===========================================================
  //                             SORT
  // ===========================================================
  // ===========================================================

  $('.catalog').on('click', '.catalog__sort-selector-top', function () {
    if (!$(this).hasClass('isActive')) {
      $('.catalog__sort-selector-bottom').slideUp();
      $('.catalog__sort-selector-top').removeClass('isActive');
      $(this).closest('.catalog__sort-selector').find('.catalog__sort-selector-bottom').slideDown();
      $(this).addClass('isActive');
    } else {
      $(this).closest('.catalog__sort-selector').find('.catalog__sort-selector-bottom').slideUp();
      $(this).removeClass('isActive');
    }
  });

  $('.catalog').on('change', '.catalog__sort-selector-item-radio', function () {
    var group = $(this).data('sort');
    var isChecked = $(this).is(':checked');
    $('.catalog__sort-selector-item-label input[type="radio"][data-sort="' + group + '"]').prop(
      'checked',
      isChecked
    );
    $('.catalog__sort-selector-top').find('span').text($(this).next().text().trim());
    $(this).closest('.catalog__sort-selector').find('.catalog__sort-selector-top').removeClass('isActive');
    $(this).closest('.catalog__sort-selector').find('.catalog__sort-selector-bottom').slideToggle();
  });

  // ===========================================================
  // ===========================================================
  //                             FILTERS
  // ===========================================================
  // ===========================================================

  // удаление анимации асайду в моб версии
  if (window.innerWidth < 768) {
    $('.catalog__aside').removeClass('wow');
    $('.catalog__aside').removeClass('animate__fadeInLeft');
  }

  // переменные контейнеры

  const containerCost = $('.catalog__cost-list-box');
  const containerImportant = $('.catalog__important-list-box');
  const containerHelp = $('.catalog__help-list-box');
  const containerAllFilters = $('.catalog__filters-list-box');

  const btnsUnImpoerantAge = document.querySelectorAll('.important__age-btn');
  const handlesSlider = document.querySelectorAll('.important__age-range');

  const burgerFilter = document.querySelector('.catalog__filter-show-btn');
  const closeFilter = document.querySelector('.catalog__aside-mob-header-close-btn');
  const filterInner = document.querySelector('.catalog__aside');

  const genderPopup = document.querySelectorAll('.popup .important__gender');
  const genderCatalog = document.querySelectorAll('.catalog .important__gender');

  // функция склонения слова

  function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  // функция показа/скрытия кнопки еще и изменение номера внутри нее
  function showMoreItem(container, num) {
    if (container.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').length > num) {
      container.addClass('isMoreItems');
      container.find('.catalog__modal-item--show-more span').text(`${
        container.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').length - num
      } 
      ${getNoun(
        container.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').length - num,
        'тема',
        'темы',
        'тем'
      )}`);
    } else {
      container.removeClass('isMoreItems');
    }
  }

  // функция клика по кнопке еще
  function clickShowMoreItem(container) {
    const btn = container.find('.catalog__modal-item--show-more');
    btn.on('click', function () {
      container.removeClass('isMoreItems');
    });
  }

  // функция клика по всем чекбоксам
  function checkFilter() {
    var group = $(this).data('checkbox');
    var isChecked = $(this).is(':checked');
    $('[data-checkbox="' + group + '"]').prop('checked', isChecked);
    const val = $(this).next().text().trim();

    const newElem = $(
      `<div class="catalog__modal-item">
      <p class="catalog__modal-item-text txt16">${val}</p>
      <div class="catalog__modal-item-remove-btn-box">
        <div class="catalog__modal-item-remove-svg-box">
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div> 
    `
    );

    if ($(this).prop('checked')) {
      if ($(this).closest('.cost__form').length) {
        containerCost.prepend(newElem);
      }
      if ($(this).closest('.help-need__form').length) {
        containerHelp.prepend(newElem);
      }
      if ($(this).closest('.important__form').length) {
        containerImportant.prepend(newElem);
      }
      containerAllFilters.prepend(newElem.clone());
    } else {
      containerCost.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').each(function () {
        if ($(this).text().trim() === val.trim()) {
          $(this).remove();
        }
      });

      containerHelp.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').each(function () {
        if ($(this).text().trim() === val.trim()) {
          $(this).remove();
        }
      });
      containerImportant.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').each(function () {
        if ($(this).text().trim() === val.trim()) {
          $(this).remove();
        }
      });

      containerAllFilters.find('.catalog__modal-item:not(.catalog__modal-item--show-more)').each(function () {
        if ($(this).text().trim() === val.trim()) {
          $(this).remove();
        }
      });
    }

    showMoreItem(containerCost, 4);
    showMoreItem(containerHelp, 4);
    showMoreItem(containerImportant, 4);
    showMoreItem(containerAllFilters, 6);

    updateClearButton(containerCost);
    updateClearButton(containerImportant);
    updateClearButton(containerHelp);
    // updateClearButton(containerImportant);
  }

  // функция клика по кнопку удалить у инпутов
  function removeFilter() {
    const value = $(this)
      .closest('.catalog__modal-item:not(.catalog__modal-item--show-more)')
      .find('.catalog__modal-item-text')
      .text();

    $('.filter-checkbox').each(function () {
      if ($(this).next().text().trim() === value) {
        $(this).prop('checked', false);
        $(containerCost)
          .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
          .each(function () {
            if ($(this).text().trim() === value.trim()) {
              $(this).remove();
            }
          });

        $(containerHelp)
          .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
          .each(function () {
            if ($(this).text().trim() === value.trim()) {
              $(this).remove();
            }
          });
        $(containerImportant)
          .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
          .each(function () {
            if ($(this).text().trim() === value.trim()) {
              $(this).remove();
            }
          });

        $(containerAllFilters)
          .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
          .each(function () {
            if ($(this).text().trim() === value.trim()) {
              $(this).remove();
            }
          });
      }
    });

    if ($(this).parent().hasClass('catalog__modal-item--gender')) {
      $('.catalog__modal-item--gender').remove();
      const genderPopup = document.querySelectorAll('.popup .important__gender');
      const genderCatalog = document.querySelectorAll('.catalog .important__gender');
      genderPopup.forEach((item) => item.classList.remove('isActive'));
      genderCatalog.forEach((item) => item.classList.remove('isActive'));
      genderPopup[0].classList.add('isActive');
      genderCatalog[0].classList.add('isActive');
    }
    if ($(this).parent().hasClass('catalog__modal-item--age')) {
      $(this).parent().remove();

      $('.catalog__modal-item--age').remove();
      handlesSlider.forEach((item) => {
        // item.noUiSlider.set([25, 65]);
        item.noUiSlider.set([...minMaxRange(item).currentMinStart, ...minMaxRange(item).currentMaxStart]);
      });
    }

    if ($(this).parent().hasClass('catalog__modal-item--town')) {
      $(this).parent().remove();
      let selectorTopText = $('[data-dropdown="town"]').find('.important__dropdown-selector-top-input');

      $('.catalog__modal-item--town').remove();

      const checkboxes = $('[data-dropdown="town"]').find('.dropdown-checkbox');
      $(checkboxes).each(function () {
        $(this).prop('checked', false);
      });

      selectorTopText.removeClass('isActive');
      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);
      selectorTopText.val('');
    }

    if ($(this).parent().hasClass('catalog__modal-item--metro')) {
      $(this).parent().remove();
      let selectorTopText = $('[data-dropdown="metro"]').find('.important__dropdown-selector-top-input');

      $('.catalog__modal-item--metro').remove();

      const checkboxes = $('[data-dropdown="metro"]').find('.dropdown-checkbox');
      $(checkboxes).each(function () {
        $(this).prop('checked', false);
      });

      selectorTopText.removeClass('isActive');
      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);
      selectorTopText.val('');
    }

    if ($(this).parent().hasClass('catalog__modal-item--education')) {
      $(this).parent().remove();
      let selectorTopText = $('[data-dropdown="education"]').find('.important__dropdown-selector-top-input');

      $('.catalog__modal-item--education').remove();

      const checkboxes = $('[data-dropdown="education"]').find('.dropdown-checkbox');
      $(checkboxes).each(function () {
        $(this).prop('checked', false);
      });

      selectorTopText.removeClass('isActive');
      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);
      selectorTopText.val('');
    }

    if ($(this).parent().hasClass('catalog__modal-item--methods')) {
      $(this).parent().remove();
      let selectorTopText = $('[data-dropdown="methods"]').find('.important__dropdown-selector-top-input');

      $('.catalog__modal-item--methods').remove();

      const checkboxes = $('[data-dropdown="methods"]').find('.dropdown-checkbox');
      $(checkboxes).each(function () {
        $(this).prop('checked', false);
      });

      selectorTopText.removeClass('isActive');
      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);
      selectorTopText.val('');
      console.log(selectorTopText);
    }

    showMoreItem(containerCost, 4);
    showMoreItem(containerHelp, 4);
    showMoreItem(containerImportant, 4);
    showMoreItem(containerAllFilters, 6);

    updateClearButton(containerCost);
    updateClearButton(containerHelp);

    if (!containerImportant.find('.catalog__modal-item:not(.catalog__modal-item--show-more').length) {
      containerImportant.css('display', 'none');
      containerImportant.find('.catalog__modal-clear').remove('isVisible');
    }

    // updateClearButton(containerImportant);
  }

  // видимость кнопки "очистить" и скрытия / открытия списков с итемами, логика лолько для чекбоксов
  function updateClearButton(container) {
    const clearButton = $(container).find('.catalog__modal-clear');
    if ($(container).closest('.catalog__cost-wrapper').length) {
      const checkboxes = $('.cost__form').find('.filter-checkbox');
      const hasChecked = checkboxes.is(':checked');

      if (hasChecked) {
        clearButton.addClass('isVisible');
        container.css('display', 'flex');
      } else {
        clearButton.removeClass('isVisible');
        container.css('display', 'none');
      }
    }

    if ($(container).closest('.catalog__help-wrapper').length) {
      const checkboxes = $('.help-need__form').find('.filter-checkbox');
      const hasChecked = checkboxes.is(':checked');

      if (hasChecked) {
        clearButton.addClass('isVisible');
        container.css('display', 'flex');
      } else {
        clearButton.removeClass('isVisible');
        container.css('display', 'none');
      }
    }

    if ($(container).closest('.catalog__important-wrapper').length) {
      const checkboxes = $('.important__form').find('.filter-checkbox');
      const hasChecked = checkboxes.is(':checked');

      if (hasChecked) {
        clearButton.addClass('isVisible');
        container.css('display', 'flex');
      } else {
        clearButton.removeClass('isVisible');
        container.css('display', 'none');
      }
    }
  }

  // клик по кнопке "очистить" для всех по идее
  function clickClearBtn(container) {
    $(container).on('click', '.catalog__modal-clear', function () {
      if ($(container).closest('.catalog__cost-wrapper').length) {
        const checkboxes = $('.cost__form').find('.filter-checkbox');
        checkboxes.prop('checked', false);
        $(container).find('.catalog__modal-item:not(.catalog__modal-item--show-more)').remove();
        $(this).removeClass('isVisible');
        container.css('display', 'none');

        checkboxes.each(function () {
          const checkboxValue = $(this).next().text().trim();
          containerAllFilters
            .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
            .each(function () {
              if ($(this).text().trim() === checkboxValue) {
                $(this).remove();
              }
            });
        });
      }

      if ($(container).closest('.catalog__help-wrapper').length) {
        const checkboxes = $('.help-need__form').find('.filter-checkbox');
        checkboxes.prop('checked', false);
        $(container).find('.catalog__modal-item:not(.catalog__modal-item--show-more)').remove();
        $(this).removeClass('isVisible');
        container.css('display', 'none');

        checkboxes.each(function () {
          const checkboxValue = $(this).next().text().trim();
          containerAllFilters
            .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
            .each(function () {
              if ($(this).text().trim() === checkboxValue) {
                $(this).remove();
              }
            });
        });
      }

      if ($(container).closest('.catalog__important-wrapper').length) {
        const checkboxes = $('.important__form').find('.filter-checkbox');
        checkboxes.prop('checked', false);
        $(container).find('.catalog__modal-item:not(.catalog__modal-item--show-more)').remove();
        $(this).removeClass('isVisible');
        container.css('display', 'none');
        checkboxes.each(function () {
          const checkboxValue = $(this).next().text().trim();
          containerAllFilters
            .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
            .each(function () {
              if ($(this).text().trim() === checkboxValue) {
                $(this).remove();
              }
            });
        });

        $('.catalog__modal-item--gender').remove();
        genderPopup.forEach((item) => item.classList.remove('isActive'));
        genderCatalog.forEach((item) => item.classList.remove('isActive'));
        genderPopup[0].classList.add('isActive');
        genderCatalog[0].classList.add('isActive');
        $('.catalog__modal-item--age').remove();
        handlesSlider.forEach((item) => {
          // item.noUiSlider.set([25, 65]);

          item.noUiSlider.set([...minMaxRange(item).currentMinStart, ...minMaxRange(item).currentMaxStart]);
        });

        const checkboxesDropdown = $('.important__form').find('.dropdown-checkbox');
        checkboxesDropdown.prop('checked', false);
        $('.important__dropdown-selector-top-text').removeClass('isActive');
        $('[data-dropdown="town"]').find('.important__dropdown-selector-top-text').text('Город');
        $('[data-dropdown="metro"]').find('.important__dropdown-selector-top-text').text('Метро');
        $('[data-dropdown="education"]').find('.important__dropdown-selector-top-text').text('Не важно');
        $('[data-dropdown="methods"]').find('.important__dropdown-selector-top-text').text('Не важно');
        checkboxesDropdown.each(function () {
          const checkboxValue = $(this).next().text().trim();
          containerAllFilters
            .find('.catalog__modal-item:not(.catalog__modal-item--show-more)')
            .each(function () {
              if ($(this).text().trim() === checkboxValue) {
                $(this).remove();
              }
            });
        });
      }

      showMoreItem(containerCost, 4);
      showMoreItem(containerHelp, 4);
      showMoreItem(containerImportant, 4);
      showMoreItem(containerAllFilters, 6);
    });
  }

  //функция клика по кнопкам пола
  function clickGenderBtn(selector, container) {
    $(container).on('click', selector, function () {
      var group = $(this).data('radio');
      $(selector).removeClass('isActive');
      $(selector + '[data-radio="' + group + '"]').addClass('isActive');
      let val = $(this).text().trim();

      const newElem = $(
        `<div class="catalog__modal-item catalog__modal-item--gender">
        <p class="catalog__modal-item-text txt16">${val}</p>
        <div class="catalog__modal-item-remove-btn-box">
          <div class="catalog__modal-item-remove-svg-box">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div> 
      `
      );

      if (group != 'whatever') {
        const allInputs = containerAllFilters.find('.catalog__modal-item--gender');
        const importantInputs = containerImportant.find('.catalog__modal-item--gender');
        if (allInputs.length) {
          if (allInputs.text().trim() !== val.trim()) {
            allInputs.remove();
            containerAllFilters.prepend(newElem.clone());
            showMoreItem(containerAllFilters, 6);
          }
        } else {
          containerAllFilters.prepend(newElem.clone());
          showMoreItem(containerAllFilters, 6);
        }

        if (importantInputs.length) {
          if (importantInputs.text().trim() !== val.trim()) {
            importantInputs.remove();
            containerImportant.prepend(newElem);
            showMoreItem(containerImportant, 4);
          }
        } else {
          containerImportant.prepend(newElem.clone());
          showMoreItem(containerImportant, 4);
        }
        containerImportant.css('display', 'flex');
        containerImportant.find('.catalog__modal-clear').addClass('isVisible');
      } else {
        const allInputs = containerAllFilters.find('.catalog__modal-item--gender');
        if (allInputs.length) {
          allInputs.remove();
          showMoreItem(containerAllFilters, 6);
        }
        const importantInputs = containerImportant.find('.catalog__modal-item--gender');
        if (importantInputs.length) {
          importantInputs.remove();
          showMoreItem(containerImportant, 4);
        }
        if (!containerImportant.find('.catalog__modal-item:not(.catalog__modal-item--show-more').length) {
          containerImportant.css('display', 'none');
          containerImportant.find('.catalog__modal-clear').remove('isVisible');
        }
      }
    });
  }

  // клик по тайтлам "открытие мобильных дропдаунов"
  function clickTitleDropdown(triger, selector) {
    const trigerElement = document.querySelector(triger);

    trigerElement.addEventListener('click', () => {
      trigerElement.classList.toggle('isActive');
      $(selector).slideToggle();
    });
  }

  // функция открытия внутренних дропдаунов в моб версии
  function clickInputsTitleDropdown() {
    $(this).parent().find('.help-need__inputs-list-wrapper').slideToggle();
    $(this).toggleClass('isActive');
  }

  // клик по дропдаунам, открытие выпадаек с чекбоксами как в модалке с чем нужна помощь
  function clickDropdownHelp() {
    $('.important__dropdown-selector-top')
      .not(this)
      .each(function () {
        $(this)
          .closest('.important__dropdown-selector')
          .find('.important__dropdown-selector-bottom')
          .slideUp();
        $(this).removeClass('isActive');
      });

    // Открыть/закрыть выпадающее меню для текущего элемента

    if ($(this).hasClass('isActive')) {
      $(this).closest('.important__dropdown-selector').find('.important__dropdown-selector-bottom').slideUp();
      $(this).removeClass('isActive');
    } else {
      $(this)
        .closest('.important__dropdown-selector')
        .find('.important__dropdown-selector-bottom')
        .slideDown();
      $(this).addClass('isActive');
    }
  }

  // функция клика по выпадашкам в модалке с чем нужна помощь
  function checkCheckboxDropdown() {
    const dataDropdown = $(this).closest('.important__dropdown-selector').data('dropdown');
    const checkboxes = $(`[data-dropdown="${dataDropdown}"]`).find('.dropdown-checkbox');
    const val = $(this).next().text().trim();

    let group = $(this).data('checkbox');
    let isChecked = $(this).is(':checked');
    let selectorTopText = $('[data-checkbox="' + group + '"]')
      .closest('.important__dropdown-selector ')
      .find('.important__dropdown-selector-top-input');
    let selectorTop = $('[data-checkbox="' + group + '"]')
      .closest('.important__dropdown-selector')
      .find('.important__dropdown-selector-top');
    let selectorBottom = $('[data-checkbox="' + group + '"]')
      .closest('.important__dropdown-selector')
      .find('.important__dropdown-selector-bottom');

    const allInputs = containerAllFilters.find(`.catalog__modal-item--${dataDropdown}`);
    const importantInputs = containerImportant.find(`.catalog__modal-item--${dataDropdown}`);

    const newElem = $(
      `<div class="catalog__modal-item">
        <p class="catalog__modal-item-text txt16">${val}</p>
        <div class="catalog__modal-item-remove-btn-box">
          <div class="catalog__modal-item-remove-svg-box">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div> 
      `
    );

    $(checkboxes).each(function () {
      $(this).prop('checked', false);
    });

    if (isChecked) {
      $('[data-checkbox="' + group + '"]').prop('checked', isChecked);
      selectorTopText.val(`${val}`);
      selectorTopText.addClass('isActive');
      newElem.addClass(`catalog__modal-item--${dataDropdown}`);

      if (allInputs.length) {
        if (allInputs.val().trim() !== val.trim()) {
          allInputs.remove();
          containerAllFilters.prepend(newElem.clone());
          showMoreItem(containerAllFilters, 6);
        }
      } else {
        containerAllFilters.prepend(newElem.clone());
        showMoreItem(containerAllFilters, 6);
      }
      if (importantInputs.length) {
        if (importantInputs.text().trim() !== val.trim()) {
          importantInputs.remove();
          containerImportant.prepend(newElem);
          showMoreItem(containerImportant, 4);
        }
      } else {
        containerImportant.prepend(newElem.clone());
        showMoreItem(containerImportant, 4);
      }
      containerImportant.css('display', 'flex');
      containerImportant.find('.catalog__modal-clear').addClass('isVisible');
    } else {
      selectorTopText.removeClass('isActive');
      allInputs.remove();
      importantInputs.remove();
      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);
      selectorTopText.val('');
    }

    selectorTop.removeClass('isActive');
    selectorBottom.slideUp();
  }

  // рендж возраста
  handlesSlider.forEach((item) => {
    noUiSlider.create(item, {
      // start:  currentStart ,
      start: minMaxRange(item).currentStart,
      step: 1,
      connect: true,
      range: {
        min: minMaxRange(item).currentMinStart,
        max: minMaxRange(item).currentMaxStart
      },
      tooltips: true,
      format: wNumb({
        decimals: 0
      })
    });

    function changeRange(val, arr) {
      const newElem = $(
        `<div class="catalog__modal-item catalog__modal-item--age">
        <p class="catalog__modal-item-text txt16">${val}</p>
        <div class="catalog__modal-item-remove-btn-box">
          <div class="catalog__modal-item-remove-svg-box">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div> 
      `
      );

      if (arr[0] != minMaxRange(item).currentMinStart || arr[1] != minMaxRange(item).currentMaxStart) {
        const allInputs = containerAllFilters.find('.catalog__modal-item--age');
        const importantInputs = containerImportant.find('.catalog__modal-item--age');
        if (allInputs.length) {
          if (allInputs.text().trim() !== val.trim()) {
            allInputs.remove();
            containerAllFilters.prepend(newElem.clone());
            showMoreItem(containerAllFilters, 6);
          }
        } else {
          containerAllFilters.prepend(newElem.clone());
          showMoreItem(containerAllFilters, 6);
        }
        if (importantInputs.length) {
          if (importantInputs.text().trim() !== val.trim()) {
            importantInputs.remove();
            containerImportant.prepend(newElem);
            showMoreItem(containerImportant, 4);
          }
        } else {
          containerImportant.prepend(newElem.clone());
          showMoreItem(containerImportant, 4);
        }
        containerImportant.css('display', 'flex');
        containerImportant.find('.catalog__modal-clear').addClass('isVisible');
      } else {
        const allInputs = containerAllFilters.find('.catalog__modal-item--age');
        if (allInputs.length) {
          allInputs.remove();
          showMoreItem(containerAllFilters, 6);
        }
        const importantInputs = containerImportant.find('.catalog__modal-item--age');
        if (importantInputs.length) {
          importantInputs.remove();
          showMoreItem(containerImportant, 4);
        }
      }
      if (!containerImportant.find('.catalog__modal-item:not(.catalog__modal-item--show-more').length) {
        containerImportant.css('display', 'none');
        containerImportant.find('.catalog__modal-clear').remove('isVisible');
      }
    }

    item.noUiSlider.on('change', () => {
      const arr = item.noUiSlider.get();
      const val = `${arr[0]}-${arr[1]} лет`;
      handlesSlider.forEach((item) => {
        item.noUiSlider.set(arr);
      });

      changeRange(val, arr);
    });

    item.noUiSlider.on('update', () => {
      const arr = item.noUiSlider.get();
      const val = `${arr[0]}-${arr[1]} лет`;
      changeRange(val, arr);
    });
  });

  // клик по кнопке "неважно" в возрасте
  btnsUnImpoerantAge.forEach((item) => {
    item.addEventListener('click', function () {
      handlesSlider.forEach((item) => {
        // item.noUiSlider.set([25, 65]);
        item.noUiSlider.set([...minMaxRange(item).currentMinStart, ...minMaxRange(item).currentMaxStart]);
      });
      const allInputs = containerAllFilters.find('.catalog__modal-item--age');
      const importantInputs = containerImportant.find('.catalog__modal-item--age');

      allInputs.remove();
      importantInputs.remove();

      showMoreItem(containerAllFilters, 6);
      showMoreItem(containerImportant, 4);

      if (!containerImportant.find('.catalog__modal-item:not(.catalog__modal-item--show-more').length) {
        containerImportant.css('display', 'none');
        containerImportant.find('.catalog__modal-clear').remove('isVisible');
      }
    });
  });

  //вывод  всех выбранных чекбоксов при прогрузке страницы если они есть
  $('.catalog')
    .find('.filter-checkbox')
    .each(function () {
      var group = $(this).data('checkbox');
      var isChecked = $(this).is(':checked');
      $('[data-checkbox="' + group + '"]').prop('checked', isChecked);
      const val = $(this).next().text().trim();
      if ($(this).is(':checked')) {
        const newElem = $(
          `<div class="catalog__modal-item">
    <p class="catalog__modal-item-text txt16">${val}</p>
    <div class="catalog__modal-item-remove-btn-box">
      <div class="catalog__modal-item-remove-svg-box">
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div> 
  `
        );
        if ($(this).closest('.cost__form').length) {
          containerCost.prepend(newElem);
          showMoreItem(containerCost, 4);
        }
        if ($(this).closest('.help-need__form').length) {
          containerHelp.prepend(newElem);
          showMoreItem(containerHelp, 4);
        }
        if ($(this).closest('.important__form').length) {
          newElem.find('.catalog__modal-item').addClass('123');
          containerImportant.prepend(newElem);
          showMoreItem(containerImportant, 4);
        }
        containerAllFilters.prepend(newElem.clone());
        showMoreItem(containerAllFilters, 6);
      }
    });

  //вывод пола при прогрузке страницы еслии он выбран
  $('.catalog')
    .find('.important__gender')
    .each(function () {
      if ($(this).hasClass('isActive') && $(this).data('radio') != 'whatever') {
        let val = $(this).text().trim();
        const newElem = $(
          `<div class="catalog__modal-item catalog__modal-item--gender">
      <p class="catalog__modal-item-text txt16">${val}</p>
      <div class="catalog__modal-item-remove-btn-box">
        <div class="catalog__modal-item-remove-svg-box">
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div> 
    `
        );
        containerAllFilters.prepend(newElem.clone());
        showMoreItem(containerAllFilters, 6);
        containerImportant.prepend(newElem);
        showMoreItem(containerImportant, 4);
      }
    });

  //вывод чекбоксов в выпадашках при прогрузке страницы из модалки что важно в психологе
  $('.catalog')
    .find('.dropdown-checkbox')
    .each(function () {
      const dataDropdown = $(this).closest('.important__dropdown-selector').data('dropdown');
      const checkboxes = $(`[data-dropdown="${dataDropdown}"]`).find('.dropdown-checkbox');

      let group = $(this).data('checkbox');
      let isChecked = $(this).is(':checked');
      let selectorTopText = $('[data-checkbox="' + group + '"]')
        .closest('.important__dropdown-selector')
        .find('.important__dropdown-selector-top-input');
      let selectorTop = $('[data-checkbox="' + group + '"]')
        .closest('.important__dropdown-selector')
        .find('.important__dropdown-selector-top');
      let selectorBottom = $('[data-checkbox="' + group + '"]')
        .closest('.important__dropdown-selector')
        .find('.important__dropdown-selector-bottom');

      const val = $(this).next().text().trim();

      const newElem = $(
        `<div class="catalog__modal-item">
    <p class="catalog__modal-item-text txt16">${val}</p>
    <div class="catalog__modal-item-remove-btn-box">
      <div class="catalog__modal-item-remove-svg-box">
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5L4 3.5M4 3.5L7 0.5M4 3.5L1 6.5M4 3.5L7 6.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div> 
  `
      );

      if (isChecked) {
        selectorTopText.val(`${val}`);
        selectorTopText.addClass('isActive');
        newElem.addClass(`catalog__modal-item--${dataDropdown}`);

        containerAllFilters.prepend(newElem.clone());
        showMoreItem(containerAllFilters, 6);

        containerImportant.prepend(newElem);
        showMoreItem(containerImportant, 4);

        containerImportant.css('display', 'flex');
        containerImportant.find('.catalog__modal-clear').addClass('isVisible');
      }
    });

  // клик по кнопке "сброс"
  $('.catalog__filter-clear').on('click', function () {
    const checkboxes = $('.filter-checkbox');
    checkboxes.prop('checked', false);
    $('.catalog__modal-item:not(.catalog__modal-item--show-more)').remove();
    $('.catalog__modal-clear').removeClass('isVisible');

    const types = document.querySelectorAll('.catalog__type');
    const ages = document.querySelectorAll('.catalog__age');
    types.forEach((item) => item.classList.remove('isActive'));
    ages.forEach((item) => item.classList.remove('isActive'));
    types[0].classList.add('isActive');
    ages[0].classList.add('isActive');

    containerCost.css('display', 'none');
    containerHelp.css('display', 'none');
    containerImportant.css('display', 'none');

    genderPopup.forEach((item) => item.classList.remove('isActive'));
    genderCatalog.forEach((item) => item.classList.remove('isActive'));
    genderPopup[0].classList.add('isActive');
    genderCatalog[0].classList.add('isActive');

    const checkboxesDropdown = $('.important__form').find('.dropdown-checkbox');
    checkboxesDropdown.prop('checked', false);
    $('.important__dropdown-selector-top-text').removeClass('isActive');
    $('[data-dropdown="town"]').find('.important__dropdown-selector-top-text').text('Город');
    $('[data-dropdown="metro"]').find('.important__dropdown-selector-top-text').text('Метро');
    $('[data-dropdown="education"]').find('.important__dropdown-selector-top-text').text('Не важно');
    $('[data-dropdown="methods"]').find('.important__dropdown-selector-top-text').text('Не важно');

    showMoreItem(containerCost, 4);
    showMoreItem(containerHelp, 4);
    showMoreItem(containerAllFilters, 6);

    handlesSlider.forEach((item) => {
      // item.noUiSlider.set([25, 65]);
      item.noUiSlider.set([...minMaxRange(item).currentMinStart, ...minMaxRange(item).currentMaxStart]);
    });
  });

  // скрываем при прогрузке страницы все блоки со списками итемов
  $(containerCost).css('display', 'none');
  $(containerImportant).css('display', 'none');
  $(containerHelp).css('display', 'none');

  // сесли есть кнопки "еще" при прогрузке страницы вешаем на них стразу логику
  clickShowMoreItem(containerCost);
  clickShowMoreItem(containerHelp);
  clickShowMoreItem(containerImportant);
  clickShowMoreItem(containerAllFilters);

  // отслежиывем клики по чекбоксам на странице
  $('.popup').on('change', '.filter-checkbox', checkFilter);
  $('.catalog').on('change', '.filter-checkbox', checkFilter);

  $('.popup').on('click', '.important__dropdown-selector-top', clickDropdownHelp);
  $('.catalog').on('click', '.important__dropdown-selector-top', clickDropdownHelp);

  $('.popup').on('keyup', '.important__dropdown-selector-top-input', function () {
    var value = $(this).val().toLowerCase();
    // Фильтрация элементов выпадающего списка по введенному значению
    $(this)
      .closest('.important__dropdown-selector')
      .find('.important__dropdown-selector-item-label')
      .filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
  });
  $('.catalog').on('keyup', '.important__dropdown-selector-top-input', function () {
    var value = $(this).val().toLowerCase();
    // Фильтрация элементов выпадающего списка по введенному значению
    $(this)
      .closest('.important__dropdown-selector')
      .find('.important__dropdown-selector-item-label')
      .filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
  });

  $('.popup').on('input', '.important__dropdown-selector-top-input', function () {
    if ($(this).val() == '') {
      const checkboxes = $(this).closest('.important__dropdown-selector').find('.dropdown-checkbox');
      checkboxes.prop('checked', false);
      $(this).removeClass('isActive');
    }
  });
  $('.catalog').on('input', '.important__dropdown-selector-top-input', function () {
    if ($(this).val() == '') {
      const checkboxes = $(this).closest('.important__dropdown-selector').find('.dropdown-checkbox');
      checkboxes.prop('checked', false);
      $(this).removeClass('isActive');
    }
  });

  $('.popup').on('click', '.dropdown-checkbox', checkCheckboxDropdown);
  $('.catalog').on('click', '.dropdown-checkbox', checkCheckboxDropdown);

  // отслежиывем клики по кнопкам удаления в итемах
  $(containerCost).on('click', '.catalog__modal-item-remove-btn-box', removeFilter);
  $(containerHelp).on('click', '.catalog__modal-item-remove-btn-box', removeFilter);
  $(containerImportant).on('click', '.catalog__modal-item-remove-btn-box', removeFilter);
  $(containerAllFilters).on('click', '.catalog__modal-item-remove-btn-box', removeFilter);

  // видимость списков и кнопки "очистить" при прогрузке страницы
  updateClearButton(containerCost);
  updateClearButton(containerHelp);
  updateClearButton(containerImportant);

  // обработчик события клика по кнопке "очистить" при прогрузке страницы
  clickClearBtn(containerCost);
  clickClearBtn(containerHelp);
  clickClearBtn(containerImportant);

  // обработчик события клика по кнопкам выбора пола при прогрузке страницы
  clickGenderBtn('.important__gender', '.popup');
  clickGenderBtn('.important__gender', '.catalog');

  // обработчик события клика по тайтлам "открытие мобильных дропдаунов"
  clickTitleDropdown('.catalog__cost-mob-wrapper .catalog__cost-title-box', '.catalog__cost-form-wrapper');
  clickTitleDropdown('.catalog__help-mob-wrapper .catalog__help-title-box', '.catalog__help-form-wrapper');
  clickTitleDropdown(
    '.catalog__important-mob-wrapper .catalog__important-title-box',
    '.catalog__important-form-wrapper'
  );

  // обработчик события открытия внутренних дропдаунов в моб версии
  $('.popup').on('click', '.help-need__inputs-title-box', clickInputsTitleDropdown);
  $('.catalog').on('click', '.help-need__inputs-title-box', clickInputsTitleDropdown);

  // открытие бургер меню фильтров в моб версии
  burgerFilter.addEventListener('click', () => {
    filterInner.classList.add('isActive');
    document.body.style.overflow = 'hidden';
  });

  closeFilter.addEventListener('click', () => {
    filterInner.classList.remove('isActive');
    document.body.style.overflow = '';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      filterInner.classList.remove('isActive');
      document.body.style.overflow = '';
    }
  });

  // ===========================================================
  // ===========================================================
  //                        BOTTOM BTN
  // ===========================================================
  // ===========================================================

  function priceBottomMeny() {
    const header = document.querySelector('.catalog__filter-show-btn');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;

    const fromTop = 0;
    const fromBottom = 1000;

    if (scrollPosition >= fromTop) {
      header.classList.add('isActive');
    } else {
      header.classList.remove('isActive');
    }

    if (windowHeight + scrollPosition >= docHeight - fromBottom) {
      header.classList.remove('isActive');
    }
  }
  priceBottomMeny();
  window.addEventListener('scroll', priceBottomMeny);
  window.addEventListener('resize', priceBottomMeny);
}

function expertsSwiper() {
  const expertsSwiper = new Swiper('.experts__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    autoHeight: true,
    speed: 800,

    breakpoints: {
      786: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: rem(3.2),
        autoHeight: false
      }
    },

    navigation: {
      prevEl: '.experts__swiper-left-btn',
      nextEl: '.experts__swiper-right-btn'
    }
  });
}

function openModalHelp() {
  if (document.querySelector('.catalog-psychologists')) {
    setTimeout(() => {
      modules.popup.open('#popup__help');
    }, 1500);
  }
}

function servicesTabsSwiper() {
  const servicesTabsSwiper = new Swiper('.services__tabs-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 8
  });
}

function testPage() {
  function clickTabsBtn(selector) {
    $('.test').on('click', selector, function () {
      $(selector).removeClass('isActive');
      $(this).addClass('isActive');
    });
  }

  clickTabsBtn('.fieldset-important__gender');
  clickTabsBtn('.fieldset-important__type');

  const handlesSlider = document.querySelector('.fieldset-important__age-range');
  const btnsUnImpoerantAge = document.querySelector('.fieldset-important__age-btn');

  noUiSlider.create(handlesSlider, {
    start: minMaxRange(handlesSlider).currentStart,
    step: 1,
    connect: true,
    range: {
      min: minMaxRange(handlesSlider).currentMinStart,
      max: minMaxRange(handlesSlider).currentMaxStart
    },
    tooltips: true,
    format: wNumb({
      decimals: 0
    })
  });

  btnsUnImpoerantAge.addEventListener('click', function () {
    handlesSlider.noUiSlider.set([
      ...minMaxRange(handlesSlider).currentMinStart,
      ...minMaxRange(handlesSlider).currentMaxStart
    ]);
  });

  function clickDropdownHelp() {
    $('.fieldset-important__dropdown-selector-top')
      .not(this)
      .each(function () {
        $(this)
          .closest('.fieldset-important__dropdown-selector')
          .find('.fieldset-important__dropdown-selector-bottom')
          .slideUp();
        $(this).removeClass('isActive');
      });

    // Открыть/закрыть выпадающее меню для текущего элемента

    if ($(this).hasClass('isActive')) {
      $(this)
        .closest('.fieldset-important__dropdown-selector')
        .find('.fieldset-important__dropdown-selector-bottom')
        .slideUp();
      $(this).removeClass('isActive');
    } else {
      $(this)
        .closest('.fieldset-important__dropdown-selector')
        .find('.fieldset-important__dropdown-selector-bottom')
        .slideDown();
      $(this).addClass('isActive');
    }
  }
  // функция клика по выпадашкам в модалке с чем нужна помощь
  function checkCheckboxDropdown() {
    const dataDropdown = $(this).closest('.fieldset-important__dropdown-selector').data('dropdown');
    const checkboxes = $(`[data-dropdown="${dataDropdown}"]`).find(
      '.fieldset-important__dropdown-selector-item-checkbox'
    );
    const val = $(this).next().text().trim();

    let isChecked = $(this).is(':checked');
    let selectorTopText = $(this)
      .closest('.fieldset-important__dropdown-selector ')
      .find('.fieldset-important__dropdown-selector-top-input');
    let selectorTop = $(this)
      .closest('.fieldset-important__dropdown-selector')
      .find('.fieldset-important__dropdown-selector-top');
    let selectorBottom = $(this)
      .closest('.fieldset-important__dropdown-selector')
      .find('.fieldset-important__dropdown-selector-bottom');

    $(checkboxes).each(function () {
      $(this).prop('checked', false);
    });

    if (isChecked) {
      $(this).prop('checked', isChecked);
      selectorTopText.val(`${val}`);
      selectorTopText.addClass('isActive');
    } else {
      selectorTopText.removeClass('isActive');
      selectorTopText.val('');
    }

    selectorTop.removeClass('isActive');
    selectorBottom.slideUp();
  }

  $('.test').on('click', '.fieldset-important__dropdown-selector-top', clickDropdownHelp);
  $('.test').on('click', '.fieldset-important__dropdown-selector-item-checkbox', checkCheckboxDropdown);

  $('.test').on('keyup', '.fieldset-important__dropdown-selector-top-input', function () {
    var value = $(this).val().toLowerCase();
    $(this)
      .closest('.fieldset-important__dropdown-selector')
      .find('.fieldset-important__dropdown-selector-item-label')
      .filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
  });
  $('.test').on('input', '.fieldset-important__dropdown-selector-top-input', function () {
    if ($(this).val() == '') {
      const checkboxes = $(this)
        .closest('.fieldset-important__dropdown-selector')
        .find('.fieldset-important__dropdown-selector-item-checkbox');
      checkboxes.prop('checked', false);
      $(this).removeClass('isActive');
    }
  });

  $('.test')
    .find('.fieldset-important__dropdown-selector-item-checkbox')
    .each(function () {
      const dataDropdown = $(this).closest('.fieldset-important__dropdown-selector').data('dropdown');
      const checkboxes = $(`[data-dropdown="${dataDropdown}"]`).find(
        '.fieldset-important__dropdown-selector-item-checkbox'
      );
      const val = $(this).next().text().trim();

      let isChecked = $(this).is(':checked');
      let selectorTopText = $(this)
        .closest('.fieldset-important__dropdown-selector ')
        .find('.fieldset-important__dropdown-selector-top-input');
      let selectorTop = $(this)
        .closest('.fieldset-important__dropdown-selector')
        .find('.fieldset-important__dropdown-selector-top');
      let selectorBottom = $(this)
        .closest('.fieldset-important__dropdown-selector')
        .find('.fieldset-important__dropdown-selector-bottom');

      if (isChecked) {
        selectorTopText.val(`${val}`);
        selectorTopText.addClass('isActive');
      }
    });

  const nextBtn = document.querySelectorAll('.test__fieldset-btn-next');
  const nextPrev = document.querySelectorAll('.test__fieldset-btn-prev');
  const fieldsets = document.querySelectorAll('.test__fieldset');
  const points = document.querySelectorAll('.test__point');

  nextBtn.forEach((item) => {
    item.addEventListener('click', () => {
      let testNum = item.closest('.test__fieldset').dataset.test;


      if (+testNum !== fieldsets.length-1) {
        fieldsets.forEach((item) => {
          item.classList.remove('isActive');
        });
        points.forEach((item) => {
          item.classList.remove('isActive');
        });
        fieldsets[+testNum + 1].classList.add('isActive');
        points[+testNum + 1].classList.add('isActive');
      }
    });
  });
  nextPrev.forEach((item) => {
    item.addEventListener('click', () => {
      let testNum = item.closest('.test__fieldset').dataset.test;
        fieldsets.forEach((item) => {
          item.classList.remove('isActive');
        });     
        points.forEach((item) => {
          item.classList.remove('isActive');
        });
        fieldsets[+testNum - 1].classList.add('isActive');      
        points[+testNum - 1].classList.add('isActive');
    });
  });
}

function coachingWho () {
  $('.coaching-who').on('click','.coaching-who__content-show', function () {
    $('.coaching-who__content-text-box--hide').slideDown()
    $('.coaching-who__content-show').hide(300)
  })
  $('.coaching-who').on('click','.coaching-who__content-hide', function () {
    $('.coaching-who__content-text-box--hide').slideUp()
    $('.coaching-who__content-show').show(300)
  })
}
