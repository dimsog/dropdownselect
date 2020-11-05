var DropdownSelect;DropdownSelect=(()=>{"use strict";var t={890:(t,e,n)=>{function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,{default:()=>s});var s=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,t),e instanceof HTMLElement?this.$el=e:this.$el=document.querySelector(e),null===this.$el)throw new Error("".concat(e," not found!"));if(this._state={options:[],totalOptions:0,on:n.on||{},selectedOption:null,isRendered:!1},this._render(),void 0!==n.options){var o,a=i(n.options);try{for(a.s();!(o=a.n()).done;){var s=o.value;this.add(s)}}catch(t){a.e(t)}finally{a.f()}}this.setValue(n.value||this.$el.value,!0),this._bindCoreEvents(),this._update()}var e,n,o;return e=t,o=[{key:"fromElements",value:function(t){t instanceof NodeList==0&&(t=document.querySelectorAll(t));for(var e=0;e<t.length;e++)new this(t[e])}}],(n=[{key:"add",value:function(t){var e=Object.assign(t);return this._normalizeOption(e),this._state.options.push(e),this._renderItem(e),this._update(),this._state.totalOptions++,this}},{key:"addOptgroup",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.add({id:0,name:t,items:e})}},{key:"setValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getOptionByValue(t);return null!==n&&this._setValueByOption(n,e)}},{key:"getValue",value:function(){var t=this.getSelectedOption();return null===t?null:t.id}},{key:"getOptionByValue",value:function(t){var e,n=i(this.getOptions());try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id===t)return o}}catch(t){n.e(t)}finally{n.f()}return null}},{key:"getOptions",value:function(){var t,e=[],n=i(this._state.options);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(void 0===o.items)e.push(o);else{var r,a=i(o.items);try{for(a.s();!(r=a.n()).done;){var s=r.value;e.push(s)}}catch(t){a.e(t)}finally{a.f()}}}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"getSelectedOption",value:function(){return this._state.selectedOption}},{key:"open",value:function(){this.$container.classList.add("dropdownselect--opened")}},{key:"close",value:function(){this.$container.classList.remove("dropdownselect--opened")}},{key:"isOpened",value:function(){return this.$container.classList.contains("dropdownselect--opened")}},{key:"toggle",value:function(){this.isOpened()?this.close():this.open()}},{key:"length",value:function(){return this._state.totalOptions}},{key:"_setValueByOption",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=i(this.getOptions());try{for(o.s();!(e=o.n()).done;){var r=e.value;r.$node.classList.remove("active")}}catch(t){o.e(t)}finally{o.f()}this._state.selectedOption=t,t.$node.classList.add("active"),!1===n&&this._haveEvent("change")&&this._state.on.change.call(this,t.id,t,this),this._update()}},{key:"_isReady",value:function(){return this._state.isRendered}},{key:"_update",value:function(){if(!1!==this._isReady()){var t=this.getSelectedOption();null!==t?(this.$input.value=t.id,this._setButtonText(t.name)):this._setButtonText("")}}},{key:"_render",value:function(){this.$container=document.createElement("div"),this.$container.classList.add("dropdownselect"),this.$button=document.createElement("button"),this.$button.classList.add("dropdownselect__button"),this.$arrow=document.createElement("div"),this.$arrow.classList.add("dropdownselect__arrow"),this.$buttonContainer=document.createElement("div"),this.$buttonContainer.classList.add("dropdownselect__button-container"),this.$buttonContainer.appendChild(this.$button),this.$buttonContainer.appendChild(this.$arrow),this.$dropdownContainer=document.createElement("div"),this.$dropdownContainer.classList.add("dropdownselect__dropdown"),this.$dropdown=document.createElement("ul"),this.$dropdownContainer.appendChild(this.$dropdown),this.$input=document.createElement("input"),this.$input.setAttribute("type","hidden"),null!==this.$el.getAttribute("name")&&this.$input.setAttribute("name",this.$el.getAttribute("name")),this.$container.appendChild(this.$input),this.$container.appendChild(this.$buttonContainer),this.$container.appendChild(this.$dropdownContainer),this.$el.parentElement.replaceChild(this.$container,this.$el);for(var t=0;t<this.$el.children.length;t++){var e=this.$el.children[t];e instanceof HTMLOptGroupElement?this.addOptgroup(e.label,this._$convertNodeListToOptionDataItems(e.children)):this.add(this._$convertNodeToOptionDataItem(e))}this._state.isRendered=!0}},{key:"_bindCoreEvents",value:function(){var t=this;this.$button.addEventListener("click",(function(e){e.preventDefault(),t.toggle()})),document.addEventListener("click",(function(e){if(!1===t.isOpened())return!1;!1===t.$container.contains(e.target)&&t.close()})),this.$container.addEventListener("keydown",(function(e){"Escape"===e.code&&t.close()}))}},{key:"_$convertNodeToOptionDataItem",value:function(t){return{id:t.value,name:t.innerHTML}}},{key:"_$convertNodeListToOptionDataItems",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(this._$convertNodeToOptionDataItem(t[n]));return e}},{key:"_setButtonText",value:function(t){this.$button.innerHTML=t}},{key:"_renderItem",value:function(t){void 0===t.items?this.$dropdown.append(this._renderOption(t)):this.$dropdown.append(this._renderOptionGroup(t))}},{key:"_renderOptionGroup",value:function(t){var e=document.createElement("li");e.classList.add("dropdownselect-optiongroup");var n=document.createElement("span");n.innerHTML=t.name;var o,r=document.createElement("ul"),a=i(t.items);try{for(a.s();!(o=a.n()).done;){var s=o.value;r.append(this._renderOption(s))}}catch(t){a.e(t)}finally{a.f()}return e.appendChild(n),e.appendChild(r),e}},{key:"_renderOption",value:function(t){var e=document.createElement("li");e.classList.add("dropdownselect-option");var n=document.createElement("span");return n.innerHTML=t.name,e.appendChild(n),t.$node=e,this._bindOptionEvents(t),e}},{key:"_haveEvent",value:function(t){return"function"==typeof this._state.on[t]}},{key:"_bindOptionEvents",value:function(t){var e=this;t.$node.addEventListener("click",(function(){e.close(),e._setValueByOption(t)}))}},{key:"_normalizeValue",value:function(t){return t+""}},{key:"_normalizeOption",value:function(t){t.id=this._normalizeValue(t.id)}}])&&a(e.prototype,n),o&&a(e,o),t}()},780:()=>{}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(780),n(890)})().default;
//# sourceMappingURL=dropdownselect.js.map