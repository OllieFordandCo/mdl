import {
  l as l2
} from "./chunk.7PR3K2M6.js";
import {
  defaultValue
} from "./chunk.YMMXS3BI.js";
import {
  FormSubmitController
} from "./chunk.NLE6UQAQ.js";
import {
  checkbox_styles_default
} from "./chunk.XYZCAGUO.js";
import {
  l
} from "./chunk.Z74LDZ2V.js";
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
  i,
  t
} from "./chunk.H63YSOTP.js";
import {
  y
} from "./chunk.XS52R447.js";
import {
  __decorateClass
} from "./chunk.WN26B4OP.js";

// src/components/checkbox/checkbox.ts
var SlCheckbox = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasFocus = false;
    this.invalid = false;
    this.title = "";
    this.name = "";
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
    this.defaultChecked = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  checkValidity() {
    return this.input.checkValidity();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("sl-change");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return y`
      <label
        part="base"
        class=${o({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${l(this.value)}
          .indeterminate=${l2(this.indeterminate)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked ? y` <sl-icon part="checked-icon" library="system" name="check"></sl-icon> ` : ""}
          ${!this.checked && this.indeterminate ? y` <sl-icon part="indeterminate-icon" library="system" name="indeterminate"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="checkbox__label"></slot>
      </label>
    `;
  }
};
SlCheckbox.styles = checkbox_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorateClass([
  t()
], SlCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  t()
], SlCheckbox.prototype, "invalid", 2);
__decorateClass([
  e2()
], SlCheckbox.prototype, "title", 2);
__decorateClass([
  e2()
], SlCheckbox.prototype, "name", 2);
__decorateClass([
  e2()
], SlCheckbox.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], SlCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);
SlCheckbox = __decorateClass([
  e("sl-checkbox")
], SlCheckbox);

export {
  SlCheckbox
};
