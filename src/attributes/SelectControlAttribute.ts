import {ArrayProperty, Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";

@Registry.attribute('vsn-select-control')
export class SelectControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        if (this.tag.isMultipleSelect) {
            this.ensureProperty(ArrayProperty);
        } else {
            this.ensureProperty();
        }

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
        if (this.tag.isMultipleSelect) {
            const values = this.formScope.get(this.key);
            for (const value of this.tag.value) {
                if (values.indexOf(value) === -1) {
                    values.push(value);
                } else {
                    values.remove(value);
                }
            }
        } else {
            this.formScope.set(this.key, this.tag.value);
        }
    }

    async checkSelected() {

    }
}
