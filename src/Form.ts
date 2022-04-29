import {Registry, Controller, property, Property} from "vsn";
import {MessageList} from "vsn";

@Registry.class('Form')
export class Form extends Controller {
    @property()
    errors: MessageList = new MessageList();

    async clean() {
        return this.getData('formData');
    }

    async validate() {
        this.errors.clear();
        for (const key of this.getKeys('formData')) {
            const prop = this.getProperty(key);
            if (prop instanceof Property)
                this.errors.add(key, prop.validate());
        }

        return this.errors.isEmpty;
    }

    async submit(event: Event) {
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

        if (this.errors.length) {
            await this.this.formValid(formData);
        } else {
            await this.formInvalid(this.errors);
        }
    }

    async formValid(formData: any) {}

    async formInvalid(errors: MessageList) {}
}
