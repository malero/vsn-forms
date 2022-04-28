import {Registry} from "vsn";
import {FormControlAttributeAbstract} from "./BaseFormControlAttribute";


@Registry.attribute('vsn-text-control')
export class TextControlAttribute extends FormControlAttributeAbstract {
    public async extract() {
        this.ensureProperty();
        this.formScope.set(this.key, this.tag.value);
        await super.extract();
    }
}
