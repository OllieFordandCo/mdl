import { FormSubmitController } from '../../internal/form';
import ShoelaceElement from '../../internal/shoelace-element';
import '../button-group/button-group';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type SlRadioButton from '../radio-button/radio-button';
import type SlRadio from '../radio/radio';
import type { CSSResultGroup } from 'lit';
export default class SlRadioGroup extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    protected readonly formSubmitController: FormSubmitController;
    private readonly hasSlotController;
    defaultSlot: HTMLSlotElement;
    input: HTMLInputElement;
    private hasButtonGroup;
    private errorMessage;
    private customErrorMessage;
    defaultValue: string;
    invalid: boolean;
    label: string;
    helpText: string;
    value: string;
    name: string;
    required: boolean;
    handleValueChange(): void;
    connectedCallback(): void;
    firstUpdated(): void;
    checkValidity(): boolean;
    setCustomValidity(message?: string): void;
    get validity(): ValidityState;
    reportValidity(): boolean;
    getAllRadios(): (SlRadio | SlRadioButton)[];
    handleRadioClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleLabelClick(): void;
    handleSlotChange(): void;
    showNativeErrorMessage(): void;
    updateCheckedRadio(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-radio-group': SlRadioGroup;
    }
}
