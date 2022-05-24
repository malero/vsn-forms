import {Registry, Controller, property, Property} from "vsn";
import {MessageList} from "vsn";

@Registry.controller('Form')
export class Form extends Controller {
    @property()
    errors: MessageList = new MessageList();

    @property()
    hasErrors: boolean = false;

    @property()
    processing: boolean = false;

    async clean() {
        return this.getData('formData');
    }

    async validate() {
        this.errors.reset();
        this.hasErrors = false;
        for (const key of this.getKeys('formData')) {
            const prop = this.getProperty(key);
            if (prop instanceof Property)
                this.errors.add(key, prop.validate());
        }
        this.hasErrors = this.errors.isEmpty;
        return this.hasErrors;
    }

    async submit(event: Event) {
        this.processing = true;
        if (event)
            event.preventDefault();

        let formData;

        if (await this.validate()) {
            try {
                formData = await this.clean();
            } catch (e) {
                this.errors.add('__all__', e.toString());
            }

            for (const key in formData) {
                if (this[`clean_${key}`]) {
                    try {
                        formData[key] = await this[`clean_${key}`](formData[key]);
                    } catch (e) {
                        this.errors.add(key, e.toString());
                    }
                }
            }

        }

        if (this.errors.length === 0) {
            await this.formValid(formData);
        } else {
            await this.formInvalid(this.errors);
        }
        this.processing = false;
    }

    async formValid(formData: any) {}
    async formInvalid(errors: MessageList) {}
}
