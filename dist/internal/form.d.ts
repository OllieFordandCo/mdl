import './formdata-event-polyfill';
import type SlButton from '../components/button/button';
import type { ShoelaceFormControl } from '../internal/shoelace-element';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
export interface FormSubmitControllerOptions {
    form: (input: ShoelaceFormControl) => HTMLFormElement | null;
    name: (input: ShoelaceFormControl) => string;
    value: (input: ShoelaceFormControl) => unknown | unknown[];
    defaultValue: (input: ShoelaceFormControl) => unknown | unknown[];
    disabled: (input: ShoelaceFormControl) => boolean;
    reportValidity: (input: ShoelaceFormControl) => boolean;
    setValue: (input: ShoelaceFormControl, value: unknown) => void;
}
export declare class FormSubmitController implements ReactiveController {
    host: ShoelaceFormControl & ReactiveControllerHost;
    form?: HTMLFormElement | null;
    options: FormSubmitControllerOptions;
    constructor(host: ReactiveControllerHost & ShoelaceFormControl, options?: Partial<FormSubmitControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    handleFormData(event: FormDataEvent): void;
    handleFormSubmit(event: Event): void;
    handleFormReset(): void;
    handleUserInput(): Promise<void>;
    reportFormValidity(): boolean;
    setUserInteracted(el: ShoelaceFormControl, hasInteracted: boolean): void;
    doAction(type: 'submit' | 'reset', invoker?: HTMLInputElement | SlButton): void;
    reset(invoker?: HTMLInputElement | SlButton): void;
    submit(invoker?: HTMLInputElement | SlButton): void;
}
