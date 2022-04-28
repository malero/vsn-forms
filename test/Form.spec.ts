import {DOM, SimplePromise} from "vsn";

describe('Form', () => {
    it("errors should not be included in formData", async () => {
        document.body.innerHTML = `
            <form id="form-data-test" vsn-form:form>
                <input type="text" vsn-form-control name="text-1" value="text-1" />
                <input type="text" vsn-form-control name="text-2" value="text-2" />
            </form>
        `;
        const dom = new DOM(document);
        const deferred = SimplePromise.defer();
        dom.once('built', async () => {
            const form = await dom.eval('form');
            const formData = form.getData('formData');
            expect(formData).toEqual({
                'text-1': 'text-1',
                'text-2': 'text-2'
            });
            deferred.resolve();
        });

        await deferred.promise;
    });
});
