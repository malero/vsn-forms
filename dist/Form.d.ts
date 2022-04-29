import { Controller } from "vsn";
import { MessageList } from "vsn";
export declare class Form extends Controller {
    errors: MessageList;
    clean(): Promise<import("vsn/dist/Scope/ScopeDataAbstract").IScopeData>;
    validate(): Promise<boolean>;
    submit(event: Event): Promise<void>;
    formValid(formData: any): Promise<void>;
    formInvalid(errors: MessageList): Promise<void>;
}
