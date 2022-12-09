import {
  radio_styles_default
} from "./chunk.VGNGX4GI.js";
import {
  o
} from "./chunk.3TBY3BXC.js";
import {
  watch
} from "./chunk.HFHIZRKF.js";
import {
  ShoelaceElement,
  e,
  e2,
  t
} from "./chunk.H63YSOTP.js";
import {
  y
} from "./chunk.XS52R447.js";
import {
  __decorateClass
} from "./chunk.WN26B4OP.js";

// src/components/radio/radio.ts
var SlRadio = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.hasFocus = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
    this.addEventListeners();
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  addEventListeners() {
    this.addEventListener("blur", () => this.handleBlur());
    this.addEventListener("click", () => this.handleClick());
    this.addEventListener("focus", () => this.handleFocus());
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return y`
      <span
        part="base"
        class=${o({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? y` <sl-icon part="checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
SlRadio.styles = radio_styles_default;
__decorateClass([
  t()
], SlRadio.prototype, "checked", 2);
__decorateClass([
  t()
], SlRadio.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], SlRadio.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlRadio.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadio.prototype, "handleDisabledChange", 1);
SlRadio = __decorateClass([
  e("sl-radio")
], SlRadio);

export {
  SlRadio
};
