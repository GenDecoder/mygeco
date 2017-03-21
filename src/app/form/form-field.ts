export class FormField<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;    
    controlType: string;
    constructor(config: {
        value?: T,
        key?: string,
        label?: string,        
        required?: boolean,
        controlType?: string
    } = {}) {
        this.value = config.value;
        this.key = config.key || '';
        this.label = config.label || '';
        this.required = !!config.required;
        this.controlType = config.controlType || '';
    }
}
