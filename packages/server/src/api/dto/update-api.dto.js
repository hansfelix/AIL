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
exports.__esModule = true;
exports.UpdateApiDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_api_dto_1 = require("./create-api.dto");
var UpdateApiDto = (function (_super) {
    __extends(UpdateApiDto, _super);
    function UpdateApiDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateApiDto;
}((0, mapped_types_1.PartialType)(create_api_dto_1.CreateApiDto)));
exports.UpdateApiDto = UpdateApiDto;
