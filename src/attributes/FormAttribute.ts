import {ControllerAttribute, Registry} from "vsn";
import {Form} from "../Form";

@Registry.attribute('vsn-form')
export class FormAttribute extends ControllerAttribute {
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
