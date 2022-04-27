import { ClassConstructor } from "vsn/dist/attributes/ClassConstructor";
export declare class FormAttribute extends ClassConstructor {
    protected defaultClassName: string;
    connect(): Promise<void>;
    handleEvent(event: Event): void;
}
