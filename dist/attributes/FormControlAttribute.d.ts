import { Attribute, Tag } from "vsn";
import { RadioControlAttribute } from "./RadioControlAttribute";
import { CheckboxControlAttribute } from "./CheckboxControlAttribute";
import { TextControlAttribute } from "./TextFormControl";
export declare abstract class FormControlAttribute extends Attribute {
    static create(tag: Tag, attr: string, cls: any): RadioControlAttribute | CheckboxControlAttribute | TextControlAttribute;
}
