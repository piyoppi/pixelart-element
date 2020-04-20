import { LitElement, html, css } from 'lit-element';

export class PixelartElement extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.img = new Image();
  }

  static get properties() {
    return {
      src: { type: String },
      width: { type: Number },
      height: { type: Number },
      scale: { type: Number }
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    switch( name ) {
      case 'src':
        this.loadImage(newval);
        break;
      case 'width':
        this.width = newval;
        this.renderPixelart();
        break;
      case 'height':
        this.height = newval;
        this.renderPixelart();
        break;
      case 'scale':
        this.scale = newval;
        this.renderPixelart();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  loadImage(val) {
    this.img.src = val;
    this.img.onload = () => this.renderPixelart();
  }

  renderPixelart() {
    const canvas = this.shadowRoot.getElementById('pixelart');
    if( !canvas ) return;

    canvas.width = this.width || this.img.width * this.scale;
    canvas.height = this.height || this.img.height * this.scale;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
  }

  static get styles() {
    return css`
    `;
  }

  render(){
    return html`
      <canvas id="pixelart"></canvas>
    `;
  }
}
