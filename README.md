# vanilla-selectx

A simple and lightweight javascript select without dependencies

[Demo](https://vajs.ru/examples/vanilla-selectx/index.html)

# Install
```bash
npm i vanilla-selectx
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

### SCSS
```scss
@import '~vanilla-selectx/src/scss/vanilla-selectx';
```

### JavaScript
```js
import VanillaSelectx from 'vanilla-selectx';
new VanillaSelectx("#select");
```