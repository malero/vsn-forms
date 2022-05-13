import {Attribute, Property, Registry, Scope} from "vsn";
import {IPropertyConfig} from "vsn/dist/Scope/properties/Property";

export abstract class FormControlAttributeAbstract extends Attribute {
    public static readonly canDefer: boolean = false;
    protected key?: string;
    protected formScope?: Scope;

    public async setup() {
        this.key = this.getAttributeBinding(this.tag.getRawAttributeValue('name'));
        const parent = this.tag.findAncestorByAttribute('vsn-form');
        if (!parent) {
            throw new Error('FormControlAttribute must be used inside a form with a vsn-form attribute.');
        }
        this.formScope = parent.scope;

        await super.setup();
    }

    get valueType(): string {
        try {
            return this.formScope.getType(this.key);
        } catch (e) {
            return 'any';
        }
    }

    public async connect() {
        this.tag.addEventHandler('change', this.getAttributeModifiers(), this.handleEvent.bind(this));
        await super.connect();
    }

    public async extract(): Promise<void> {
        const valueType = this.getAttributeValue();
        if (valueType)
            this.formScope.setType(this.key, valueType);
        if (this.tag.hasRawAttribute('required'))
            this.formProperty.addValidator('required');
        return super.extract();
    }

    async handleEvent(e) {
        this.formScope.set(this.key, this.tag.value);
    }

    cast(value: any) {
        const castValue = Registry.instance.types.getSynchronous(this.valueType);
        return castValue ? castValue(value) : value;
    }

    get value() {
        return this.cast(this.tag.value);
    }

    ensureProperty(propertyType: any = Property, config: IPropertyConfig = {}) {
        if (!this.formScope.data.hasProperty(this.key)) {
            if (!config.labels) config.labels = [];
            if (config.labels.indexOf('formData') < 0) config.labels.push('formData');
            this.formScope.data.createProperty(this.key, propertyType, config);
        } else {
            this.formProperty.addLabel('formData');
        }
    }

    get formProperty() {
        return this.formScope.data.getProperty(this.key);
    }
}
