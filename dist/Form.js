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
exports.Form = void 0;
var vsn_1 = require("vsn");
var vsn_2 = require("vsn");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errors = new vsn_2.MessageList();
        return _this;
    }
    Form.prototype.validate = function () {
        this.errors.clear();
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            var prop = this.getProperty(key);
            if (prop instanceof vsn_1.Property)
                this.errors.add(key, prop.validate());
        }
        return this.errors.isEmpty;
    };
    Form.prototype.init = function (scope, tag, element) {
        _super.prototype.init.call(this, scope, tag, element);
    };
    __decorate([
        vsn_1.property()
    ], Form.prototype, "errors", void 0);
    Form = __decorate([
        vsn_1.Registry.class('Form')
    ], Form);
    return Form;
}(vsn_1.Controller));
exports.Form = Form;
//# sourceMappingURL=Form.js.map