import {ArrayProperty, Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";


@Registry.attribute('vsn-checkbox-control')
export class CheckboxControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        this.ensureProperty(ArrayProperty);

        await super.extract();
        await this.handleEvent(null);
    }

    public async connect() {
        this.formScope.on(`change:${this.key}`, this.checkSelected, this);
        await this.checkSelected();
        await super.connect();
    }

    public async evaluate() {
        await this.checkSelected();
        await super.evaluate();
    }

    async handleEvent(e) {
        const values = this.formScope.get(this.key);
        if (values && this.tag.value !== undefined) {
            if (this.tag.checked) {
                console.log('checked', this.tag.value);
                values.push(this.value);
            } else {
                console.log('unchecked', this.tag.value);
                values.remove(this.value);
            }
        }
        console.log(values);
    }

    async checkSelected() {
        const scopeValue = this.formScope.get(this.key);
        console.log('checkSelected', scopeValue, this.value);
        this.tag.checked = scopeValue.indexOf(this.value) >= 0;
    }
}
