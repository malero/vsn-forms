import { Controller, Scope, Tag } from "vsn";
import { MessageList } from "vsn";
export declare class Form extends Controller {
    errors: MessageList;
    validate(): boolean;
    init(scope: Scope, tag: Tag, element: HTMLElement): void;
}
