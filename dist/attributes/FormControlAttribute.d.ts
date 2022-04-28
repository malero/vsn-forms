import { Attribute, Tag } from "vsn";
import { SingleChoiceControlAttribute } from "./SingleChoiceControlAttribute";
import { MultipleChoiceControlAttribute } from "./MultipleChoiceControlAttribute";
import { TextControlAttribute } from "./TextFormControl";
export declare abstract class FormControlAttribute extends Attribute {
    static create(tag: Tag, attr: string, cls: any): SingleChoiceControlAttribute | MultipleChoiceControlAttribute | TextControlAttribute;
}
