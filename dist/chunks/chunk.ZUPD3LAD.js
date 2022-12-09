import {
  progress_ring_styles_default
} from "./chunk.6L6VFHRD.js";
import {
  LocalizeController
} from "./chunk.XMQCXZ3F.js";
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

// src/components/progress-ring/progress-ring.ts
var SlProgressRing = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return y`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
SlProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  i(".progress-ring__indicator")
], SlProgressRing.prototype, "indicator", 2);
__decorateClass([
  t()
], SlProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  e2({ type: Number, reflect: true })
], SlProgressRing.prototype, "value", 2);
__decorateClass([
  e2()
], SlProgressRing.prototype, "label", 2);
SlProgressRing = __decorateClass([
  e("sl-progress-ring")
], SlProgressRing);

export {
  SlProgressRing
};
