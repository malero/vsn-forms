"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormControlAttribute = void 0;
var vsn_1 = require("vsn");
var SingleChoiceControlAttribute_1 = require("./SingleChoiceControlAttribute");
var MultipleChoiceControlAttribute_1 = require("./MultipleChoiceControlAttribute");
var TextFormControl_1 = require("./TextFormControl");
var FormControlAttribute = /** @class */ (function (_super) {
    __extends(FormControlAttribute, _super);
    function FormControlAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormControlAttribute.create = function (tag, attr, cls) {
        var _a;
        var tagName = tag.element.tagName.toLowerCase();
        var type = (_a = tag.element.getAttribute('type')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (tagName === 'input') {
            if (type === 'radio')
                return new SingleChoiceControlAttribute_1.SingleChoiceControlAttribute(tag, attr);
            if (type === 'checkbox')
                return new MultipleChoiceControlAttribute_1.MultipleChoiceControlAttribute(tag, attr);
        }
        else if (tagName === 'select') {
            if (tag.getRawAttributeValue('multiple') !== null)
                return new MultipleChoiceControlAttribute_1.MultipleChoiceControlAttribute(tag, attr);
            else
                return new SingleChoiceControlAttribute_1.SingleChoiceControlAttribute(tag, attr);
        }
        return new TextFormControl_1.TextControlAttribute(tag, attr);
    };
    FormControlAttribute = __decorate([
        vsn_1.Registry.attribute('vsn-form-control')
    ], FormControlAttribute);
    return FormControlAttribute;
}(vsn_1.Attribute));
exports.FormControlAttribute = FormControlAttribute;
//# sourceMappingURL=FormControlAttribute.js.map