import {
  menu_label_styles_default
} from "./chunk.NIDCF6PQ.js";
import {
  ShoelaceElement,
  e
} from "./chunk.H63YSOTP.js";
import {
  y
} from "./chunk.XS52R447.js";
import {
  __decorateClass
} from "./chunk.WN26B4OP.js";

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return y` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  e("sl-menu-label")
], SlMenuLabel);

export {
  SlMenuLabel
};
