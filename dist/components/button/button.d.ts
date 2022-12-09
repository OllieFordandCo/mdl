import ShoelaceElement from '../../internal/shoelace-element';
import '../icon/icon';
import '../spinner/spinner';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
export default class SlButton extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    button: HTMLButtonElement | HTMLLinkElement;
    private readonly formSubmitController;
    private readonly hasSlotController;
    private readonly localize;
    private hasFocus;
    invalid: boolean;
    title: string;
    variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    caret: boolean;
    disabled: boolean;
    loading: boolean;
    outline: boolean;
    pill: boolean;
    circle: boolean;
    type: 'button' | 'submit' | 'reset';
    name: string;
    value: string;
    href: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    download?: string;
    form: string;
    formAction: string;
    formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formMethod: 'post' | 'get';
    formNoValidate: boolean;
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string;
    firstUpdated(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleBlur(): void;
    handleFocus(): void;
    handleClick(event: MouseEvent): void;
    handleDisabledChange(): void;
    private isButton;
    private isLink;
    render(): import("lit-html").TemplateResult<1 | 2>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-button': SlButton;
    }
}
