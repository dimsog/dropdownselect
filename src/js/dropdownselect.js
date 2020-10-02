"use strict";

export default class {
    constructor(selector, options = {}) {
        if (selector instanceof HTMLElement) {
            this.$el = selector;
        } else {
            this.$el = document.querySelector(selector);
        }
        if (this.$el === null) {
            throw new Error(`${selector} not found!`);
        }
        this._state = {
            data: [],
            isRendered: false
        };
        if (options.value === undefined) {
            options.value = this.$el.value;
        }

        this._render();

        for (let i = 0; i < this.$el.children; i++) {
            const $node = this.$el.children[i];
            if ($node instanceof HTMLOptGroupElement) {
                this.addOptgroup($node.innerHTML, this._convertNodeListToOptionDataItems($node.children));
            } else {
                this.add(this._convertNodeToOptionDataItem($node));
            }
        }

        // get options from select
        for (let i = 0; i < this.$el.options.length; i++) {
            const $option = this.$el.options[i];
            this.add({
                value: $option.value,
                name: $option.innerHTML
            });
        }

        this.setValue(options.value);
        this._bindCoreEvents();
        this._update();
    }

    static fromElements(elements) {
        if (elements instanceof NodeList === false) {
            elements = document.querySelectorAll(elements);
        }
        for (let i = 0; i < elements.length; i++) {
            new this(elements[i])
        }
    }

    /**
     * select.add({
     *     value: 1,
     *     name: 'Text'
     * });
     * @param option
     */
    add(option) {
        option = Object.assign(option);
        if (typeof option.optgroup === "undefined") {
            this._state.data.push(option);
        }
        option.type = 'option';
        this._state.data.push(option);

        option.$node = document.createElement('li');
        option.$node.innerHTML = option.name;
        this.$dropdown.appendChild(option.$node);

        this._bindOptionEvents(option);
        this._update();
        return this;
    }

    addToOptgroup(label, option) {

    }

    addOptgroup(label, options = []) {
        this._state.data.push({
            type: 'optgroup',
            label: label,
            children: options
        })
    }

    setValue(value) {
        let option = this.getOptionByValue(value);
        if (option === null) {
            return false;
        }
        for (let option of this.getOptions()) {
            if (option.selected === true) {
                option.selected = false;
                option.$node.removeAttribute('class');
            }
        }
        option.selected = true;
        option.$node.classList.add('active');
        this._update();
    }

    getValue() {
        let option = this.getSelectedOption();
        if (option === null) {
            return null;
        }
        return option.value;
    }

    getOptionByValue(value) {
        for (let option of this.getOptions()) {
            if (option.value === value) {
                return option;
            }
        }
        return null;
    }

    getOptions() {
        return this._state.data;
    }

    getSelectedOption() {
        let options = this.getOptions();
        if (options.length === 0) {
            return null;
        }
        for (let option of this.getOptions()) {
            if (option.selected) {
                return option;
            }
        }
        return options[0];
    }

    open() {
        this.$container.classList.add('dropdownselect--opened');
    }

    close() {
        this.$container.classList.remove('dropdownselect--opened');
    }

    isOpened() {
        return this.$container.classList.contains('dropdownselect--opened');
    }

    toggle() {
        if (this.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    }

    _isReady() {
        return this._state.isRendered;
    }

    _$addOptions(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const $node = nodeList[i];
            if ($node instanceof HTMLOptGroupElement) {

            } else {

            }
        }
    }

    _update() {
        if (this._isReady() === false) {
            return;
        }
        let selectedOption = this.getSelectedOption();
        if (selectedOption !== null) {
            this.$input.value = selectedOption.value;
            this._setButtonText(selectedOption.name);
        } else {
            this._setButtonText('');
        }
    }

    _render() {
        // init container
        this.$container = document.createElement('div');
        this.$container.classList.add('dropdownselect');

        // init button
        this.$button = document.createElement('button');
        this.$button.classList.add('dropdownselect__button');

        this.$arrow = document.createElement('div');
        this.$arrow.classList.add('dropdownselect__arrow');

        this.$buttonContainer = document.createElement('div');
        this.$buttonContainer.classList.add('dropdownselect__button-container');
        this.$buttonContainer.appendChild(this.$button);
        this.$buttonContainer.appendChild(this.$arrow);


        // init dropdown
        this.$dropdownContainer = document.createElement('div');
        this.$dropdownContainer.classList.add('dropdownselect__dropdown');
        this.$dropdown = document.createElement('ul');
        this.$dropdownContainer.appendChild(this.$dropdown);

        // init hidden select
        this.$input = document.createElement('input');
        this.$input.setAttribute('type', 'hidden');
        if (this.$el.getAttribute('name') !== null) {
            this.$input.setAttribute('name', this.$el.getAttribute('name'));
        }
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$buttonContainer);
        this.$container.appendChild(this.$dropdownContainer);

        this.$el.parentElement.replaceChild(this.$container, this.$el);
        this._state.isRendered = true;
    }

    _bindCoreEvents() {
        this.$button.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggle();
        });
        document.addEventListener('click', (e) => {
            if (this.isOpened() === false) {
                return false;
            }
            if (this.$container.contains(e.target) === false) {
                this.close();
            }
        });
        this.$container.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                this.close();
            }
        })
    }

    _convertNodeToOptionDataItem($node) {
        return {
            value: $node.value,
            name: $node.innerHTML
        };
    }

    _convertNodeListToOptionDataItems($nodeList) {
        const result = [];
        for (let i = 0; i < $nodeList.length; i++) {
            result.push(this._convertNodeToOptionDataItem($nodeList[i]));
        }
        return result;
    }

    _bindOptionEvents(option) {
        option.$node.addEventListener('click', (e) => {
            this.close();
            this.setValue(option.value);
        })
    }

    _setButtonText(text) {
        this.$button.innerHTML = text;
    }
}