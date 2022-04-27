import {Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";


@Registry.attribute('vsn-text-control')
export class TextControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        if (!this.formScope.has(this.key))
            this.formScope.set(this.key, this.tag.value);
        await super.extract();
    }
}
