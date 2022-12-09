import ShoelaceElement from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
export default class SlFlex extends ShoelaceElement {
    static styles: CSSResultGroup;
    direction: string;
    gap: null;
    alignItems: string;
    justify: string;
    directionChanged(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-flex': SlFlex;
    }
}
