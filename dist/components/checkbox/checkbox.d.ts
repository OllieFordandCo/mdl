import ShoelaceElement from '../../internal/shoelace-element';
import '../icon/icon';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
export default class SlCheckbox extends ShoelaceElement implements ShoelaceFormControl {
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
    indeterminate: boolean;
    defaultChecked: boolean;
    firstUpdated(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleClick(): void;
    handleBlur(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleStateChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-checkbox': SlCheckbox;
    }
}
