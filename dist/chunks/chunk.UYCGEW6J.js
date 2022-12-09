import {
  skeleton_styles_default
} from "./chunk.CVZSPGOE.js";
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

// src/components/skeleton/skeleton.ts
var SlSkeleton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = skeleton_styles_default;
__decorateClass([
  e2()
], SlSkeleton.prototype, "effect", 2);
SlSkeleton = __decorateClass([
  e("sl-skeleton")
], SlSkeleton);

export {
  SlSkeleton
};
