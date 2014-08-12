## Basic tabs

Take a regular `<ul>` of links and add `.romo-tabs`.

<div class="romo-pad">
  <ul class="romo-tabs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs">
  <li><a href="#">Home</a></li>
  <li><a href="#">Profile</a></li>
  <li><a href="#">Settings</a></li>
</ul>
```

### Active state

For any tab items, add `.romo-tabs-active` to show the item as active.

<div class="romo-pad">
  <ul class="romo-tabs">
    <li class="romo-tabs-active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs">
  <li class="romo-tabs-active">...</li>
  <li>...</li>
  <li>...</li>
</ul>
```

### Disabled state

For any tab items, add `.disabled` for **disabled link UI with no hover effects**.  Links remain clickable unless you remove the `href` attribute or implement custom JavaScript to prevent those clicks.

<div class="romo-pad">
  <ul class="romo-tabs">
    <li class="romo-tabs-active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li class="disabled"><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs">
  <li class="romo-tabs-active">...</li>
  <li>...</li>
  <li class="disabled">...</li>
</ul>
```

### Link alignment

To align tab items, use the `.romo-tabs-pull-left` or `.romo-tabs-pull-right` classes.

<div class="romo-pad">
  <ul class="romo-tabs romo-tabs-pull-left">
    <li class="romo-tabs-active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>

<div class="romo-pad">
  <ul class="romo-tabs romo-tabs-pull-right">
    <li class="romo-tabs-active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs romo-tabs-pull-left">...</ul>
<ul class="romo-tabs romo-tabs-pull-right">...</ul>
```

### Sizes

Use numbered style classes to size up/down tab items.

<div class="romo-pad">
  <ul class="romo-tabs romo-tabs1 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs1</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs2 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs2</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs3 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs3</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs-large romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-large</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs4 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs4</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">Default</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs5 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs5</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs-small romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs-small</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
  <ul class="romo-tabs romo-tabs6 romo-push0-bottom">
    <li class="romo-tabs-active"><a href="#">romo-tabs6</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs romo-tabs1 romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs2 romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs3 romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs-large romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs4 romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs5 romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs-small romo-push0-bottom">...</ul>
<ul class="romo-tabs romo-tabs6 romo-push0-bottom">...</ul>
```

## Stacked tabs

Tabs are horizontal by default.  Add `.romo-tabs-stacked` to make them appear vertically stacked.

<div class="romo-pad">
  <ul class="romo-tabs romo-tabs-stacked">
    <li><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs romo-tabs-stacked">
  <li><a href="#">Home</a></li>
  <li><a href="#">Profile</a></li>
  <li><a href="#">Settings</a></li>
</ul>
```

Use `.romo-tabs-active` and `.disabled` just as you would on normal tabs.

<div class="romo-pad">
  <ul class="romo-tabs romo-tabs-stacked">
    <li class="romo-tabs-active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li class="disabled"><a href="#">Settings</a></li>
  </ul>
</div>

```html
<ul class="romo-tabs romo-tabs-stacked">
  <li class="romo-tabs-active">...</li>
  <li>...</li>
  <li class="disabled">...</li>
</ul>
```