import {DOM, Property, property, Registry, SimplePromise} from "vsn";
import {Form} from "../src/Form";


@Registry.controller('TestFormController')
class TestFormController extends Form {
    @property(Property, {
        type: 'integer'
    })
    test: number = 1;
}


describe('FormControlAttribute', () => {
    it("should work with a radio input", async () => {
        document.body.innerHTML = `
            <form id="test-form" vsn-form:form="TestFormController">
                <label>
                    <input id="radio-1" type="radio" name="test" value="1" vsn-form-control>
                    Testing 1
                </label>
                <label>
                    <input id="radio-2" type="radio" name="test" value="2" vsn-form-control>
                    Testing 2
                </label>
                
                
                <label>
                    <input id="auto-radio-1" type="radio" name="auto-radio" value="1" vsn-form-control checked>
                    Testing 1
                </label>
                <label>
                    <input id="auto-radio-2" type="radio" name="auto-radio" value="2" vsn-form-control>
                    Testing 2
                </label>
                
                <label>
                    <input id="checkbox-1" type="checkbox" name="test-checkbox" value="1" vsn-form-control="integer" checked>
                    Testing 1
                </label>
                <label>
                    <input id="checkbox-2" type="checkbox" name="test-checkbox" value="2" vsn-form-control>
                    Testing 2
                </label>
                
                <input vsn-form-control type="text" name="test-input" value="notTest" />
            </form>
        `;
        const dom = new DOM(document);
        const deferred = SimplePromise.defer();
        dom.once('built', async () => {
            const form = await dom.eval('form');
            const formData = form.getData();
            console.log(formData);
            expect(formData?.test).toBe(1);
            expect(formData['test-input']).toBe('notTest');
            expect((await dom.eval('#radio-1')).checked).toBe(true);
            expect((await dom.eval('#radio-2')).checked).toBe(false);

            expect(formData['auto-radio']).toBe('1');
            expect((await dom.eval('#auto-radio-1')).checked).toBe(true);
            expect((await dom.eval('#auto-radio-2')).checked).toBe(false);

            expect((await dom.eval('#checkbox-1')).checked).toBe(true);
            expect(formData['test-checkbox'].length).toBe(1);
            expect(formData['test-checkbox'][0]).toBe(1);

            deferred.resolve();
        });

        await deferred.promise;
    });

    it("should work with select", async () => {
        document.body.innerHTML = `
            <form id="select-form" vsn-form:form>
                <select id="select-1" vsn-set:form.test="1|integer" name="test" vsn-form-control>
                    <option value="1">Testing 1</option>
                    <option value="2">Testing 2</option>
                </select>
            </form>
        `;
        const dom = new DOM(document);
        const deferred = SimplePromise.defer();
        dom.once('built', async () => {
            const form = await dom.eval('form');
            const formData = form.getData();
            console.log(formData);
            expect(formData?.test).toBe(1);

            deferred.resolve();
        });

        await deferred.promise;
    });
});
