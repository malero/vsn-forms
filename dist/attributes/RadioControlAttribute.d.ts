import { FormControlAttributeAbstract } from "./BaseFormControlAttribute";
export declare class RadioControlAttribute extends FormControlAttributeAbstract {
    extract(): Promise<void>;
    connect(): Promise<void>;
    evaluate(): Promise<void>;
    handleEvent(e: any): Promise<void>;
    checkSelected(): Promise<void>;
}
