import {Registry, Attribute, Tag} from "vsn";
import {SingleChoiceControlAttribute} from "./SingleChoiceControlAttribute";
import {MultipleChoiceControlAttribute} from "./MultipleChoiceControlAttribute";
import {TextControlAttribute} from "./TextFormControl";

@Registry.attribute('vsn-form-control')
export abstract class FormControlAttribute extends Attribute {
    public static create(tag: Tag, attr: string, cls: any) {
        const tagName = tag.element.tagName.toLowerCase();
        const type = tag.element.getAttribute('type')?.toLowerCase();
        if (tagName === 'input') {
            if (type === 'radio')
                return new SingleChoiceControlAttribute(tag, attr);
            if (type === 'checkbox')
                return new MultipleChoiceControlAttribute(tag, attr);
        } else if (tagName === 'select') {
            if (tag.getRawAttributeValue('multiple') !== null)
                return new MultipleChoiceControlAttribute(tag, attr);
            else
                return new SingleChoiceControlAttribute(tag, attr);
        }

        return new TextControlAttribute(tag, attr);
    }
}
