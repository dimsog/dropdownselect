# DropdownSelect

A simple and lightweight javascript select without dependencies

[Demo](https://vajs.ru/#dropdownselect)

# Install
```bash
npm i dropdownselect
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
@import '~dropdownselect/src/scss/dropdownselect';
```
```js
import DropdownSelect from 'dropdownselect';
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