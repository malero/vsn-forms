import {Registry, Controller, Scope, Tag, property, Property} from "vsn";
import {MessageList} from "vsn/dist/MessageList";

@Registry.class('Form')
export class Form extends Controller {
    @property()
    errors: MessageList = new MessageList();

    validate() {
        this.errors.clear();
        for (const key of this.keys) {
            const prop = this.getProperty(key);
            if (prop instanceof Property)
                this.errors.add(key, prop.validate());
        }

        return this.errors.isEmpty;
    }

    get data() {
        const data = {};
        for (const key of this.keys) {
            const prop = this.getProperty(key);
            if (prop instanceof Property)
                data[key] = prop.value;
        }
        return data;
    }

    getData() {
        return this.data;
    }

    init(scope: Scope, tag: Tag, element: HTMLElement) {
        super.init(scope, tag, element);
    }
}
