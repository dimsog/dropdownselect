var VanillaSelect2=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=document.querySelector(t),null===this.$el)throw new Error("".concat(t," not found!"));this._state={selected:null},this._render(),console.log(this.getSelectedOptions()),console.log(this.getValue())}var t,n,o;return t=e,(n=[{key:"getSelectedOptions",value:function(){return Array.from(this.$el.options).filter((function(e){return e.selected}))}},{key:"getValue",value:function(){var e=this.getSelectedOptions();return 1===e.length?e[0].value:e.map((function(e){return e.value}))}},{key:"_render",value:function(){this.$container=document.createElement("div"),this.$container.classList.add("va-select2"),this.$button=document.createElement("button"),this.$button.classList.add("va-select2__button"),this.$dropdownContainer=document.createElement("div"),this.$dropdownContainer.classList.add("va-select2__dropdown"),this.$dropdown=document.createElement("ul"),this.$dropdownContainer.append(this.$dropdown),this.$container.append(this.$button),this.$container.append(this.$dropdownContainer),this.$el.style.display="none",this.$el.after(this.$container),this.$container.prepend(this.$el)}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){}]).default;