# @piyoppi/pixelart-element

The custom element by displaying pixelart beautifully

Sample page is here -> https://garakuta-toolbox.com/pixelart-element/

## Install

```
npm install --save @piyoppi/pixelart-element
```

## Usage

You can use a built file `dist/pixelart-element.bundle.js` in the package.

pixelart-element is also available on https://cdn.jsdelivr.net/npm/@piyoppi/pixelart-element/

You need to put a script tag after `pixelart-img` tag.

For example,
```html
<pixelart-img scale="2" src="path/to/pixelart.png"></pixelart-img>

<script src="https://cdn.jsdelivr.net/npm/@piyoppi/pixelart-element@0.0.5/dist/pixelart-element.bundle.js"></script>
```

### Display a pixelart.

```html
<pixelart-img src="path/to/pixelart.png"></pixelart-img>
```

### Scaling

```html
<!-- Set scale -->
<pixelart-img scale="2" src="path/to/pixelart.png"></pixelart-img>

<!-- Set width and height -->
<pixelart-img width="600" height="600" src="path/to/pixelart.png"></pixelart-img>
```
