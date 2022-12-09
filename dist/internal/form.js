import './formdata-event-polyfill';
const formCollections = new WeakMap();
const userInteractedControls = new WeakMap();
const reportValidityOverloads = new WeakMap();
export class FormSubmitController {
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = Object.assign({ form: input => input.closest('form'), name: input => input.name, value: input => input.value, defaultValue: input => input.defaultValue, disabled: input => { var _a; return (_a = input.disabled) !== null && _a !== void 0 ? _a : false; }, reportValidity: input => (typeof input.reportValidity === 'function' ? input.reportValidity() : true), setValue: (input, value) => (input.value = value) }, options);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormReset = this.handleFormReset.bind(this);
        this.reportFormValidity = this.reportFormValidity.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    hostConnected() {
        this.form = this.options.form(this.host);
        if (this.form) {
            if (formCollections.has(this.form)) {
                formCollections.get(this.form).add(this.host);
            }
            else {
                formCollections.set(this.form, new Set([this.host]));
            }
            this.form.addEventListener('formdata', this.handleFormData);
            this.form.addEventListener('submit', this.handleFormSubmit);
            this.form.addEventListener('reset', this.handleFormReset);
            if (!reportValidityOverloads.has(this.form)) {
                reportValidityOverloads.set(this.form, this.form.reportValidity);
                this.form.reportValidity = () => this.reportFormValidity();
            }
        }
        this.host.addEventListener('sl-input', this.handleUserInput);
    }
    hostDisconnected() {
        var _a;
        if (this.form) {
            (_a = formCollections.get(this.form)) === null || _a === void 0 ? void 0 : _a.delete(this.host);
            this.form.removeEventListener('formdata', this.handleFormData);
            this.form.removeEventListener('submit', this.handleFormSubmit);
            this.form.removeEventListener('reset', this.handleFormReset);
            if (reportValidityOverloads.has(this.form)) {
                this.form.reportValidity = reportValidityOverloads.get(this.form);
                reportValidityOverloads.delete(this.form);
            }
            this.form = undefined;
        }
        this.host.removeEventListener('sl-input', this.handleUserInput);
    }
    hostUpdated() {
        var _a;
        const host = this.host;
        const hasInteracted = Boolean(userInteractedControls.get(host));
        const invalid = Boolean(host.invalid);
        const required = Boolean(host.required);
        if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.noValidate) {
            host.removeAttribute('data-required');
            host.removeAttribute('data-optional');
            host.removeAttribute('data-invalid');
            host.removeAttribute('data-valid');
            host.removeAttribute('data-user-invalid');
            host.removeAttribute('data-user-valid');
        }
        else {
            host.toggleAttribute('data-required', required);
            host.toggleAttribute('data-optional', !required);
            host.toggleAttribute('data-invalid', invalid);
            host.toggleAttribute('data-valid', !invalid);
            host.toggleAttribute('data-user-invalid', invalid && hasInteracted);
            host.toggleAttribute('data-user-valid', !invalid && hasInteracted);
        }
    }
    handleFormData(event) {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
            if (Array.isArray(value)) {
                value.forEach(val => {
                    event.formData.append(name, val.toString());
                });
            }
            else {
                event.formData.append(name, value.toString());
            }
        }
    }
    handleFormSubmit(event) {
        var _a;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
            (_a = formCollections.get(this.form)) === null || _a === void 0 ? void 0 : _a.forEach(control => {
                this.setUserInteracted(control, true);
            });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    handleFormReset() {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
    }
    async handleUserInput() {
        await this.host.updateComplete;
        this.setUserInteracted(this.host, true);
    }
    reportFormValidity() {
        if (this.form && !this.form.noValidate) {
            const elements = this.form.querySelectorAll('*');
            for (const element of elements) {
                if (typeof element.reportValidity === 'function') {
                    if (!element.reportValidity()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    setUserInteracted(el, hasInteracted) {
        userInteractedControls.set(el, hasInteracted);
        el.requestUpdate();
    }
    doAction(type, invoker) {
        if (this.form) {
            const button = document.createElement('button');
            button.type = type;
            button.style.position = 'absolute';
            button.style.width = '0';
            button.style.height = '0';
            button.style.clipPath = 'inset(50%)';
            button.style.overflow = 'hidden';
            button.style.whiteSpace = 'nowrap';
            if (invoker) {
                ['formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget'].forEach(attr => {
                    if (invoker.hasAttribute(attr)) {
                        button.setAttribute(attr, invoker.getAttribute(attr));
                    }
                });
            }
            this.form.append(button);
            button.click();
            button.remove();
        }
    }
    reset(invoker) {
        this.doAction('reset', invoker);
    }
    submit(invoker) {
        this.doAction('submit', invoker);
    }
}
