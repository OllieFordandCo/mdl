import {
  progress_bar_styles_default
} from "./chunk.KXMVV4ZM.js";
import {
  i
} from "./chunk.ZVTFHNAE.js";
import {
  LocalizeController
} from "./chunk.XMQCXZ3F.js";
import {
  l
} from "./chunk.Z74LDZ2V.js";
import {
  o
} from "./chunk.3TBY3BXC.js";
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

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: `${this.value}%` })}>
          ${!this.indeterminate ? y` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e2({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e2()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = __decorateClass([
  e("sl-progress-bar")
], SlProgressBar);

export {
  SlProgressBar
};
