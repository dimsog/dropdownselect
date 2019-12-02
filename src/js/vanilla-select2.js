"use strict";

import './../scss/vanilla-select2.scss';

export default class {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        if (this.$el === null) {
            throw new Error(`${selector} not found!`);
        }

        this._render();
    }

    _render() {
        // init container
        this.$container = document.createElement('div');
        this.$container.classList.add('va-select2');

        // init button
        this.$button = document.createElement('button');
        this.$button.classList.add('va-select2__button');


        // init dropdown
        this.$dropdownContainer = document.createElement('div');
        this.$dropdownContainer.classList.add('va-select2__dropdown');
        this.$dropdown = document.createElement('ul');
        this.$dropdownContainer.append(this.$dropdown);

        this.$container.append(this.$button);
        this.$container.append(this.$dropdownContainer);

        this.$el.style.display = 'none';
        this.$el.after(this.$container);
        this.$container.prepend(this.$el);
    }
}