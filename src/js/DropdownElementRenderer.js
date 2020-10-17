export default class DropdownElementRenderer {
    render(option) {
        if (option.items === undefined || option.items.length === 0) {
            return this._$renderOption(option);
        } else {
            return this._$renderOptionGroup(option);
        }
    }

    _$renderOptionGroup(option) {
        const $node = document.createElement('li');
        $node.classList.add('dropdownselect--optiongroup');
        const $groupName = document.createElement('span');
        $groupName.innerHTML = option.name;
        const $container = document.createElement('ul');
        for (const item of option.items) {
            $container.append(this._$renderOption(item));
        }
        $node.appendChild($groupName);
        $node.appendChild($container);
        return $node;
    }

    _$renderOption(option) {
        const $node = document.createElement('li');
        const $optionNode = document.createElement('span');
        $optionNode.innerHTML = option.name;
        $node.appendChild($optionNode);
        return $node;
    }
}