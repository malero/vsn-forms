import { Attribute, Tag } from "vsn";
import { TextControlAttribute } from "./TextFormControl";
import { RadioControlAttribute } from "./RadioControlAttribute";
import { CheckboxControlAttribute } from "./CheckboxControlAttribute";
import { SelectControlAttribute } from "./SelectControlAttribute";
export declare abstract class FormControlAttribute extends Attribute {
    static create(tag: Tag, attr: string, cls: any): TextControlAttribute | RadioControlAttribute | CheckboxControlAttribute | SelectControlAttribute;
}
