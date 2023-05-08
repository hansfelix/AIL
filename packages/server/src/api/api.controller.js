"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ApiController = void 0;
var common_1 = require("@nestjs/common");
var api_service_1 = require("./api.service");
var ApiController = (function () {
    function ApiController(apiService) {
        this.apiService = apiService;
    }
    ApiController.prototype.create = function (createApiDto) {
        return this.apiService.create(createApiDto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ApiController.prototype, "create");
    ApiController = __decorate([
        (0, common_1.Controller)('api'),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], ApiController);
    return ApiController;
}());
exports.ApiController = ApiController;
