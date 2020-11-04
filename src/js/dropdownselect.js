"use strict";

export default class {
    constructor(selector, config = {}) {
        if (selector instanceof HTMLElement) {
            this.$el = selector;
        } else {
            this.$el = document.querySelector(selector);
        }
        if (this.$el === null) {
            throw new Error(`${selector} not found!`);
        }
        this._state = {
            /**
             * Structure:
             * [
             *      {
             *          id: Number,
             *          name: String
             *      },
             *      {
             *          id: Number,
             *          name: String,
             *          items: [{
             *              id: Number,
             *              name: String
             *          }]
             *      }
             *
             * ]
             */
            options: [],
            on: config.on || {},
            selectedOption: null,
            isRendered: false
        };

        this._render();
        if (config.options !== undefined) {
            for (const option of config.options) {
                this.add(option);
            }
        }
        this.setValue(config.value || this.$el.value, true);
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
     *     id: 1,
     *     name: 'Text'
     * });
     * @param option
     */
    add(option) {
        const _option = Object.assign(option);
        this._state.options.push(_option);
        this._renderItem(_option);

        this._update();
        return this;
    }

    addOptgroup(name, options = []) {
        this.add({
            id: 0,
            name: name,
            items: options
        });
    }

    setValue(value, silent = false) {
        const option = this.getOptionByValue(value);
        if (option === null) {
            return false;
        }
        return this._setValueByOption(option, silent);
    }

    getValue() {
        let option = this.getSelectedOption();
        if (option === null) {
            return null;
        }
        return option.id;
    }

    getOptionByValue(value) {
        for (let option of this.getOptions()) {
            if (option.id === value) {
                return option;
            }
        }
        return null;
    }

    getOptions() {
        const options = [];
        for (const option of this._state.options) {
            if (option.items === undefined) {
                options.push(option);
            } else {
                for (const subOption of option.items) {
                    options.push(subOption)
                }
            }
        }
        return options;
    }

    getSelectedOption() {
        return this._state.selectedOption;
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

    _setValueByOption(option, silent = false) {
        for (let _option of this.getOptions()) {
            _option.$node.classList.remove('active');
        }
        this._state.selectedOption = option;
        option.$node.classList.add('active');

        if (silent === false && this._haveEvent('change')) {
            this._state.on.change.call(this, option.id, option, this);
        }
        this._update();
    }

    _isReady() {
        return this._state.isRendered;
    }

    _update() {
        if (this._isReady() === false) {
            return;
        }
        let selectedOption = this.getSelectedOption();
        if (selectedOption !== null) {
            this.$input.value = selectedOption.id;
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

        for (let i = 0; i < this.$el.children.length; i++) {
            const $node = this.$el.children[i];
            if ($node instanceof HTMLOptGroupElement) {
                this.addOptgroup($node.label, this._$convertNodeListToOptionDataItems($node.children));
            } else {
                this.add(this._$convertNodeToOptionDataItem($node));
            }
        }

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

    _$convertNodeToOptionDataItem($node) {
        return {
            id: $node.value,
            name: $node.innerHTML
        };
    }

    _$convertNodeListToOptionDataItems($nodeList) {
        const result = [];
        for (let i = 0; i < $nodeList.length; i++) {
            result.push(this._$convertNodeToOptionDataItem($nodeList[i]));
        }
        return result;
    }

    _setButtonText(text) {
        this.$button.innerHTML = text;
    }

    _renderItem(option) {
        if (option.items === undefined) {
            this.$dropdown.append(this._renderOption(option));
        } else {
            this.$dropdown.append(this._renderOptionGroup(option));
        }
    }

    _renderOptionGroup(optionGroup) {
        const $node = document.createElement('li');
        $node.classList.add('dropdownselect-optiongroup');
        const $groupName = document.createElement('span');
        $groupName.innerHTML = optionGroup.name;
        const $container = document.createElement('ul');
        for (const item of optionGroup.items) {
            $container.append(this._renderOption(item));
        }
        $node.appendChild($groupName);
        $node.appendChild($container);
        return $node;
    }

    _renderOption(option) {
        const $node = document.createElement('li');
        $node.classList.add('dropdownselect-option')
        const $optionNode = document.createElement('span');
        $optionNode.innerHTML = option.name;
        $node.appendChild($optionNode);
        option.$node = $node;
        this._bindOptionEvents(option);
        return $node;
    }

    _haveEvent(event) {
        return typeof this._state.on[event] === 'function';
    }

    _bindOptionEvents(option) {
        option.$node.addEventListener('click', () => {
            this.close();
            this._setValueByOption(option);
        });
    }
}