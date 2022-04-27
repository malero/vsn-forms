import {Registry, Attribute, Tag} from "vsn";
import {RadioControlAttribute} from "./RadioControlAttribute";
import {CheckboxControlAttribute} from "./CheckboxControlAttribute";
import {TextControlAttribute} from "./TextFormControl";

@Registry.attribute('vsn-form-control')
export abstract class FormControlAttribute extends Attribute {
    public static create(tag: Tag, attr: string, cls: any) {
        const tagName = tag.element.tagName.toLowerCase();
        const type = tag.element.getAttribute('type').toLowerCase();
        if (tagName === 'input') {
            if (type === 'radio')
                return new RadioControlAttribute(tag, attr);
            if (type === 'checkbox')
                return new CheckboxControlAttribute(tag, attr);
        }

        return new TextControlAttribute(tag, attr);
    }
}
