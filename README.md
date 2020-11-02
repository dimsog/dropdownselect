# DropdownSelect

A simple and lightweight javascript select without dependencies

[Demo](https://vajs.ru/)

# Install
```bash
npm i @dimsog/dropdownselect
```

# Usage
### HTML
```html
<select id="select">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3" selected>Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
</select>
```

### SCSS and JavaScript
```scss
@import '~@dimsog/dropdownselect/src/scss/dropdownselect';
```
```js
import DropdownSelect from '@dimsog/dropdownselect';
new DropdownSelect("#select");
```

### Or
```html
<link href="/dist/dropdownselect.css" rel="stylesheet">
<script src="/dist/dropdownselect.js"></script>

<script>
    new DropdownSelect("#select");
</script>
```

### Multiple instances
```html
<select class="select"></select>
<select class="select"></select>
<select class="select"></select>
<select class="select"></select>
```

```js
DropdownSelect.fromElements('.select');
// or
DropdownSelect.fromElements(document.querySelectorAll('.select'));
```

### Full demo
```js
const select = new DropdownSelect('#selector', {
    on: {
        change(value, option, instance) {
            // use "instance" or "this" for access to current instance
            alert('Selected value: ' + value)
        }
    }
});
```