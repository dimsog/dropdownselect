"use strict";

import './../scss/vanilla-selectx.scss';

export default class {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        if (this.$el === null) {
            throw new Error(`${selector} not found!`);
        }
        this._state = {
            data: {
                $groups: [],
                /**
                 * {
                 *      $option: HTMLElement (<option>)
                 *      $element: HTMLElement (<li>)
                 * }
                 */
                $options: []
            }
        };

        this._bindEvents();
        this._render();
    }

    getSelectedOptions() {
        return Array.from(this.$el.options)
            .filter(option => option.selected)
    }

    getOptions() {
        return this.$el.options;
    }

    getValue() {
        let selectedOptions = this.getSelectedOptions();
        if (selectedOptions.length === 1) {
            return selectedOptions[0].value;
        }
        return selectedOptions
            .map(option => option.value);
    }

    getValueText() {
        let selectedOptions = this.getSelectedOptions();
        if (selectedOptions.length === 1) {
            return selectedOptions[0].innerHTML;
        }
        return selectedOptions
            .map(option => option.innerHTML);
    }


    _render() {
        // init container
        this.$container = document.createElement('div');
        this.$container.classList.add('va-selectx');

        // init button
        this.$button = document.createElement('button');
        this.$button.classList.add('va-selectx__button');


        // init dropdown
        this.$dropdownContainer = document.createElement('div');
        this.$dropdownContainer.classList.add('va-selectx__dropdown');
        this.$dropdown = document.createElement('ul');
        this.$dropdownContainer.append(this.$dropdown);

        this.$container.append(this.$button);
        this.$container.append(this.$dropdownContainer);

        this.$el.style.display = 'none';
        this.$el.after(this.$container);
        this.$container.prepend(this.$el);
        this._renderButtonText();
        this._repaint();
    }

    _renderButtonText() {
        let text = this.getValueText();
        if (Array.isArray(text) === false) {
            text = [text];
        }
        this.$button.innerHTML = text.join(', ');
    }

    _bindEvents() {
        let observer = new MutationObserver((data) => {
            for (let event of data) {
                if (event.type === "childList") {
                    this._repaint();
                }
            }
        });

        observer.observe(this.$el, {
            childList: true,
            characterData: true,
            attributes: true,
            subtree: true
        });
    }

    _hasHtmlOptionElement($option) {
        for (let $node of this._state.data.$options) {
            if ($node.$option === $option) {
                return true;
            }
        }
        return false;
    }

    _getHtmlOptionElement($option) {
        for (let $node of this._state.data.$options) {
            if ($node.$option === $option) {
                return $node.$element;
            }
        }
        return null;
    }

    _createHtmlOptionElement($option) {
        let $node = document.createElement('li');
        $node.classList.add('va-selectx__dropdown-option');
        $node.innerHTML = $option.innerHTML;
        $node.addEventListener('click', () => {
            this.$el.selectedIndex = $option.index;
        });
        return $node;
    }

    _assignHtmlOptionElement($option, $htmlElement) {
        this._state.data.$options.push({
            $option: $option,
            $element: $htmlElement
        })
    }

    _hasHtmlOptionGroupElement($group) {
        for (let $node of this._state.data.$groups) {
            if ($node.$group === $group) {
                return true;
            }
        }
        return false;
    }

    _getHtmlOptionGroupElement($group) {
        for (let $item of this._state.data.$groups) {
            if ($item.$group === $group) {
                return $item.$element;
            }
        }
        return null;
    }

    _createHtmlOptionGroupElement($group) {
        let $node = document.createElement('li');
        $node.classList.add('va-selectx__dropdown-group');
        $node.innerHTML = $group.getAttribute('label');
        return $node;
    }

    _assignHtmlOptionGroupElement($group, $htmlElement) {
        this._state.data.$groups.push({
            $group: $group,
            $element: $htmlElement
        })
    }

    _makeNodeElements() {
        for (let $option of this.$el.options) {
            if (this._hasHtmlOptionElement($option) === false) {
                this._assignHtmlOptionElement($option, this._createHtmlOptionElement($option));
            }
        }
        for (let $group of this.$el.children) {
            if ($group instanceof HTMLOptGroupElement && this._hasHtmlOptionGroupElement($group) === false) {
                let $htmlGroup = this._createHtmlOptionGroupElement($group);
                for (let $dataOption of this._state.data.$options) {
                    if ($dataOption.$option.parentElement === $group) {
                        this._assignHtmlGroupAndHtmlOption($htmlGroup, $dataOption.$element);
                    }
                }
                this._assignHtmlOptionGroupElement($group, $htmlGroup);
            }
        }
    }

    _assignHtmlGroupAndHtmlOption($htmlGroup, $htmlOption) {
        let $container = $htmlGroup.querySelector('ul');
        if ($container === null) {
            $container = document.createElement('ul');
            $htmlGroup.appendChild($container);
        }
        $container.appendChild($htmlOption);
    }

    _repaint() {
        this.$dropdown.innerHTML = '';
        this._makeNodeElements();

        for (let $child of this.$el.children) {
            $child instanceof HTMLOptGroupElement ?
                this.$dropdown.appendChild(this._getHtmlOptionGroupElement($child)) :
                this.$dropdown.appendChild(this._getHtmlOptionElement($child));
        }
    }
}