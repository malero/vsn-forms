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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    Form.prototype.clean = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getData('formData')];
            });
        });
    };
    Form.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, key, prop;
            return __generator(this, function (_b) {
                this.errors.reset();
                for (_i = 0, _a = this.getKeys('formData'); _i < _a.length; _i++) {
                    key = _a[_i];
                    prop = this.getProperty(key);
                    if (prop instanceof vsn_1.Property)
                        this.errors.add(key, prop.validate());
                }
                return [2 /*return*/, this.errors.isEmpty];
            });
        });
    };
    Form.prototype.submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, e_1, _a, _b, _i, key, _c, _d, e_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (event)
                            event.preventDefault();
                        return [4 /*yield*/, this.validate()];
                    case 1:
                        if (!_e.sent()) return [3 /*break*/, 11];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.clean()];
                    case 3:
                        formData = _e.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _e.sent();
                        this.errors.add('__all__', e_1.toString());
                        return [3 /*break*/, 5];
                    case 5:
                        _a = [];
                        for (_b in formData)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 6;
                    case 6:
                        if (!(_i < _a.length)) return [3 /*break*/, 11];
                        key = _a[_i];
                        if (!this["clean_" + key]) return [3 /*break*/, 10];
                        _e.label = 7;
                    case 7:
                        _e.trys.push([7, 9, , 10]);
                        _c = formData;
                        _d = key;
                        return [4 /*yield*/, this["clean_" + key](formData[key])];
                    case 8:
                        _c[_d] = _e.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_2 = _e.sent();
                        this.errors.add(key, e_2.toString());
                        return [3 /*break*/, 10];
                    case 10:
                        _i++;
                        return [3 /*break*/, 6];
                    case 11:
                        if (!this.errors.length) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.this.formValid(formData)];
                    case 12:
                        _e.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, this.formInvalid(this.errors)];
                    case 14:
                        _e.sent();
                        _e.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    Form.prototype.formValid = function (formData) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Form.prototype.formInvalid = function (errors) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
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