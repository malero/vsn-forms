import {ArrayProperty, Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";


@Registry.attribute('vsn-checkbox-control')
export class CheckboxControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        if (!this.formScope.has(this.key)) {
            const prop = this.formScope['data'].createProperty(this.key, ArrayProperty);
            prop.value.setLength(0);
        }

        await super.extract();

        if (this.tag.checked)
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
                values.push(this.value);
            } else {
                values.remove(this.value);
            }
        }
    }

    async checkSelected() {
        const scopeValue = this.formScope.get(this.key);
        this.tag.checked = scopeValue.indexOf(this.value) >= 0;
    }
}
