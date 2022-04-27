import {Registry} from "vsn";
import {ClassConstructor} from "vsn/dist/attributes/ClassConstructor";

@Registry.attribute('vsn-form')
export class FormAttribute extends ClassConstructor {
    protected defaultClassName: string = 'Form';

    public async connect() {
        await super.connect();

        this.tag.addEventHandler('submit', [], this.handleEvent.bind(this));
    };

    public handleEvent(event: Event) {
        if (event)
            event.preventDefault();
    };
}
