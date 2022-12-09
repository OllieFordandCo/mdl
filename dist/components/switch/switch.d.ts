import ShoelaceElement from '../../internal/shoelace-element';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
export default class SlSwitch extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    input: HTMLInputElement;
    private readonly formSubmitController;
    private hasFocus;
    invalid: boolean;
    title: string;
    name: string;
    value: string;
    disabled: boolean;
    required: boolean;
    checked: boolean;
    defaultChecked: boolean;
    firstUpdated(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleBlur(): void;
    handleCheckedChange(): void;
    handleClick(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-switch': SlSwitch;
    }
}
