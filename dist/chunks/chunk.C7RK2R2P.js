import {
  component_styles_default
} from "./chunk.Y2LT7CPS.js";
import {
  i
} from "./chunk.XS52R447.js";

// src/components/tab-panel/tab-panel.styles.ts
var tab_panel_styles_default = i`
  ${component_styles_default}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`;

export {
  tab_panel_styles_default
};
