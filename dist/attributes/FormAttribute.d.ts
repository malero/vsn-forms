import { ControllerAttribute } from "vsn";
export declare class FormAttribute extends ControllerAttribute {
    protected defaultClassName: string;
    connect(): Promise<void>;
    handleEvent(event: Event): Promise<void>;
}
