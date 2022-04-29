import {Registry} from "vsn";
import {ClassConstructor} from "vsn/dist/attributes/ClassConstructor";
import {Form} from "../Form";

@Registry.attribute('vsn-form')
export class FormAttribute extends ClassConstructor {
    protected defaultClassName: string = 'Form';

    public async connect() {
        await super.connect();

        this.tag.addEventHandler('submit', [], this.handleEvent.bind(this));
    };

    async handleEvent(event: Event) {
        if (event)
            event.preventDefault();
        if (this.tag.controller instanceof Form)
            await this.tag.controller.submit(event);
    };
}
