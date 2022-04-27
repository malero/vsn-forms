import { Controller, Scope, Tag } from "vsn";
import { MessageList } from "vsn/dist/MessageList";
export declare class Form extends Controller {
    errors: MessageList;
    validate(): boolean;
    get data(): {};
    getData(): {};
    init(scope: Scope, tag: Tag, element: HTMLElement): void;
}
