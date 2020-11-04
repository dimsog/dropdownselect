var DropdownSelect;DropdownSelect=(()=>{"use strict";var e={890:(e,t,n)=>{function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,{default:()=>s});var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),t instanceof HTMLElement?this.$el=t:this.$el=document.querySelector(t),null===this.$el)throw new Error("".concat(t," not found!"));this._state={options:[],on:n.on||{},selectedOption:null,isRendered:!1},this._render(),this.setValue(n.value||this.$el.value),this._bindCoreEvents(),this._update()}var t,n,o;return t=e,o=[{key:"fromElements",value:function(e){e instanceof NodeList==0&&(e=document.querySelectorAll(e));for(var t=0;t<e.length;t++)new this(e[t])}}],(n=[{key:"add",value:function(e){var t=Object.assign(e);return this._state.options.push(t),this._renderItem(t),this._update(),this}},{key:"addOptgroup",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.add({id:0,name:e,items:t})}},{key:"setValue",value:function(e){var t=this.getOptionByValue(e);return null!==t&&this._setValueByOption(t)}},{key:"getValue",value:function(){var e=this.getSelectedOption();return null===e?null:e.id}},{key:"getOptionByValue",value:function(e){var t,n=i(this.getOptions());try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id===e)return o}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"getOptions",value:function(){var e,t=[],n=i(this._state.options);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(void 0===o.items)t.push(o);else{var r,a=i(o.items);try{for(a.s();!(r=a.n()).done;){var s=r.value;t.push(s)}}catch(e){a.e(e)}finally{a.f()}}}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"getSelectedOption",value:function(){return this._state.selectedOption}},{key:"open",value:function(){this.$container.classList.add("dropdownselect--opened")}},{key:"close",value:function(){this.$container.classList.remove("dropdownselect--opened")}},{key:"isOpened",value:function(){return this.$container.classList.contains("dropdownselect--opened")}},{key:"toggle",value:function(){this.isOpened()?this.close():this.open()}},{key:"_setValueByOption",value:function(e){var t,n=i(this.getOptions());try{for(n.s();!(t=n.n()).done;)t.value.$node.classList.remove("active")}catch(e){n.e(e)}finally{n.f()}this._state.selectedOption=e,e.$node.classList.add("active"),this._haveEvent("change")&&this._state.on.change.call(this,e.id,e,this),this._update()}},{key:"_isReady",value:function(){return this._state.isRendered}},{key:"_update",value:function(){if(!1!==this._isReady()){var e=this.getSelectedOption();null!==e?(this.$input.value=e.id,this._setButtonText(e.name)):this._setButtonText("")}}},{key:"_render",value:function(){this.$container=document.createElement("div"),this.$container.classList.add("dropdownselect"),this.$button=document.createElement("button"),this.$button.classList.add("dropdownselect__button"),this.$arrow=document.createElement("div"),this.$arrow.classList.add("dropdownselect__arrow"),this.$buttonContainer=document.createElement("div"),this.$buttonContainer.classList.add("dropdownselect__button-container"),this.$buttonContainer.appendChild(this.$button),this.$buttonContainer.appendChild(this.$arrow),this.$dropdownContainer=document.createElement("div"),this.$dropdownContainer.classList.add("dropdownselect__dropdown"),this.$dropdown=document.createElement("ul"),this.$dropdownContainer.appendChild(this.$dropdown),this.$input=document.createElement("input"),this.$input.setAttribute("type","hidden"),null!==this.$el.getAttribute("name")&&this.$input.setAttribute("name",this.$el.getAttribute("name")),this.$container.appendChild(this.$input),this.$container.appendChild(this.$buttonContainer),this.$container.appendChild(this.$dropdownContainer),this.$el.parentElement.replaceChild(this.$container,this.$el);for(var e=0;e<this.$el.children.length;e++){var t=this.$el.children[e];t instanceof HTMLOptGroupElement?this.addOptgroup(t.label,this._$convertNodeListToOptionDataItems(t.children)):this.add(this._$convertNodeToOptionDataItem(t))}this._state.isRendered=!0}},{key:"_bindCoreEvents",value:function(){var e=this;this.$button.addEventListener("click",(function(t){t.preventDefault(),e.toggle()})),document.addEventListener("click",(function(t){if(!1===e.isOpened())return!1;!1===e.$container.contains(t.target)&&e.close()})),this.$container.addEventListener("keydown",(function(t){"Escape"===t.code&&e.close()}))}},{key:"_$convertNodeToOptionDataItem",value:function(e){return{id:e.value,name:e.innerHTML}}},{key:"_$convertNodeListToOptionDataItems",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(this._$convertNodeToOptionDataItem(e[n]));return t}},{key:"_setButtonText",value:function(e){this.$button.innerHTML=e}},{key:"_renderItem",value:function(e){void 0===e.items?this.$dropdown.append(this._renderOption(e)):this.$dropdown.append(this._renderOptionGroup(e))}},{key:"_renderOptionGroup",value:function(e){var t=document.createElement("li");t.classList.add("dropdownselect-optiongroup");var n=document.createElement("span");n.innerHTML=e.name;var o,r=document.createElement("ul"),a=i(e.items);try{for(a.s();!(o=a.n()).done;){var s=o.value;r.append(this._renderOption(s))}}catch(e){a.e(e)}finally{a.f()}return t.appendChild(n),t.appendChild(r),t}},{key:"_renderOption",value:function(e){var t=document.createElement("li");t.classList.add("dropdownselect-option");var n=document.createElement("span");return n.innerHTML=e.name,t.appendChild(n),e.$node=t,this._bindOptionEvents(e),t}},{key:"_haveEvent",value:function(e){return"function"==typeof this._state.on[e]}},{key:"_bindOptionEvents",value:function(e){var t=this;e.$node.addEventListener("click",(function(){t.close(),t._setValueByOption(e)}))}}])&&a(t.prototype,n),o&&a(t,o),e}()},780:()=>{}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(780),n(890)})().default;
//# sourceMappingURL=dropdownselect.js.map