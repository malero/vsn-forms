import { Attribute, Scope } from "vsn";
export declare abstract class FormControlAttributeAbstract extends Attribute {
    static readonly canDefer: boolean;
    protected key?: string;
    protected formScope?: Scope;
    setup(): Promise<void>;
    get valueType(): string;
    connect(): Promise<void>;
    extract(): Promise<void>;
    handleEvent(e: any): Promise<void>;
    cast(value: any): any;
    get value(): any;
}
