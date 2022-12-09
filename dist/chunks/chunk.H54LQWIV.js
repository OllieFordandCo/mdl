import {
  flex_styles_default
} from "./chunk.EA2ZP2JM.js";
import {
  watch
} from "./chunk.HFHIZRKF.js";
import {
  ShoelaceElement,
  e,
  e2
} from "./chunk.H63YSOTP.js";
import {
  y
} from "./chunk.XS52R447.js";
import {
  __decorateClass
} from "./chunk.WN26B4OP.js";

// src/components/flex/flex.ts
var SlFlex = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.direction = "row";
    this.gap = null;
    this.alignItems = "flex-start";
    this.justify = "flex-start";
  }
  directionChanged() {
    this.emit("sl-layout-direction-changed");
  }
  render() {
    return y` <div part="base" class="flex-container"><slot></slot></div> `;
  }
};
SlFlex.styles = flex_styles_default;
__decorateClass([
  e2()
], SlFlex.prototype, "direction", 2);
__decorateClass([
  e2()
], SlFlex.prototype, "gap", 2);
__decorateClass([
  e2()
], SlFlex.prototype, "alignItems", 2);
__decorateClass([
  e2()
], SlFlex.prototype, "justify", 2);
__decorateClass([
  watch("row")
], SlFlex.prototype, "directionChanged", 1);
SlFlex = __decorateClass([
  e("sl-flex")
], SlFlex);

export {
  SlFlex
};
