# simplevalidation
A super simple Form Validation with CSS and just a bit of JavaScript.

## Basics
Most of the validation is done natively using HTML5 form attributes like `required` and `pattern`.

CSS is based on pseudo classes `:focus`, `:valid` and `:invalid`.

JS is only used to allow invalid styling to persist when the field lose focus and to add a matching field check.

```html
<input class="f_input" id="password" type="password">
<input class="f_input" id="passwordcheck" type="password" data-validation-matches="password" data-validation-matches-message="Passwords should match">
```

## Usage
```html
<script src="js/simplevalidation.js"></script>
<script>
    var form = document.getElementById('myform');
    SimpleValidation(form);
</script>
```
That's it. See demo.html and demo.css.

The CSS uses a `.invalid` class on input elements. Feel free to edit the script if you need another class name.

I don't need configuration for now but might add it later.
