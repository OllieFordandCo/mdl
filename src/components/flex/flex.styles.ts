import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */

  :host {
    display: flex;
  }

  :host .flex-container {
    display: flex;
    flex: 1;
    gap: var(--gap, 0);
    padding: var(--inner-padding, 0);
    flex-direction: var(--flex-direction, row);
  }

  :host([direction='column']) .flex-container {
    flex-direction: column;
    flex: 1;
  }

  :host([row-gap]) .flex-container {
    row-gap: var(--row-gap, 1rem);
  }

  :host([gap]) .flex-container {
    gap: var(--gap, 1rem);
  }

  :host([column-gap]) .flex-container {
    column-gap: var(--column-gap, 1rem);
  }

  :host([grow]) {
    --max-width: 100%;
    --width: 100%;
  }

  :host([layout-contained]) {
    max-width: 100%;
    width: var(--layout-width, 980px);
    margin: 0 auto;
  }

  :host([layout-contained]) .flex-container {
    max-width: 100%;
    width: var(--layout-width, 980px);
    margin-left: auto;
    margin-right: auto;
  }

  :host([layout-contained='wide']) {
    width: var(--layout-width-wide, 1200px);
  }

  :host([justify='center']) .flex-container {
    justify-content: center;
  }

  :host([justify='space-between']) .flex-container {
    justify-content: space-between;
  }

  :host([justify='space-around']) .flex-container {
    justify-content: space-around;
  }

  :host([align-items='space-evenly']) .flex-container {
    justify-content: space-evenly;
  }

  :host([align-items='center']) .flex-container {
    align-items: center;
  }

  :host([align-items='start']) .flex-container {
    align-items: flex-start;
  }

  :host([align-items='end']) .flex-container {
    align-items: flex-end;
  }

  :host([align-items='baseline']) .flex-container {
    align-items: baseline;
  }

  /* If the selector was .flex-gap > *, it wouldn't override when components have a margin 0 specified by a single
   * class selector, specificity is equal. Both are one class. Neither > nor * contribute to specificity.
   * We need to make it more specific, so we raise it by 1 class.
   */
  :host([gap]) .flex-container > * {
    /* apply half of the gap to each side of every item */
    margin: calc(var(--row-gap, 0) / 2) calc(var(--column-gap, 0) / 2);
  }
`;
