import {Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";


@Registry.attribute('vsn-radio-control')
export class RadioControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        this.ensureProperty();
        if (this.tag.checked)
            await this.handleEvent(null);
        await super.extract();
        await this.evaluate();
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
        this.formScope.set(this.key, this.value);
    }

    async checkSelected() {
        const scopeValue = this.formScope.get(this.key);
        this.tag.checked = scopeValue === this.value;
    }
}
