export default class {
    constructor($container, options) {
        this._$container = $container;
        this._options = $options;
    }

    render() {
        this._$container.innerHTML = '';
        option.$node = document.createElement('li');
        option.$node.innerHTML = option.name;
        this.$dropdown.appendChild(option.$node);
    }
}