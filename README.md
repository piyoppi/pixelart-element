# @piyoppi/pixelart-element

The custom element by displaying pixelart beautifully

Sample page is here -> https://piyoppi.github.io/pixelart-element/

## Install

```
npm install --save @piyoppi/pixelart-element
```

## Usage

### Import using a script tag

You can use a built file `dist/pixelart-element.bundle.js` in the package.

The `pixelart-img` element is also available on https://cdn.jsdelivr.net/npm/@piyoppi/pixelart-element/

You need to put a script tag after `pixelart-img` tag.

For example,
```html
<pixelart-img scale="2" src="path/to/pixelart.png"></pixelart-img>

<script src="https://cdn.jsdelivr.net/npm/@piyoppi/pixelart-element@0.0.5/dist/pixelart-element.bundle.js"></script>
```

### Import as a module
You can also import an element as a module.

```
// Import <pixelart-img> element
import { PixelartElement } from '@piyoppi/pixelart-element';

// Register custom element manually
customElements.define('pixelart-img', PixelartElement);
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
