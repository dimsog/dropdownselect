export default class DropdownElementRenderer {
    render(option) {
        if (option.items === undefined || option.items.length === 0) {

        } else {

        }
        const $node = document.createElement('li');
        const $optionNode = document.createElement('span');
        $optionNode.innerHTML = option.name;
        $node.appendChild($optionNode);
        if (option.items !== undefined) {
            for (const subOption of option.items) {

            }
        }
        this.$dropdown.appendChild(option.$node);
    }

    _$renderOptGroup(name) {

    }
}