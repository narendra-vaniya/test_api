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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsController = void 0;
const common_1 = require("@nestjs/common");
const tools_services_1 = require("./tools.services");
let ToolsController = class ToolsController {
    constructor(toolsServices) {
        this.toolsServices = toolsServices;
    }
    async getProducts(query, page = 1, limit = 10) {
        try {
            const products = await this.toolsServices.getProducts(query, page, limit);
            console.log('api call', products);
            return { success: true, data: products };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async getProduct(id) {
        try {
            const product = await this.toolsServices.getProduct(id);
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            return { success: true, data: product };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
};
exports.ToolsController = ToolsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], ToolsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ToolsController.prototype, "getProduct", null);
exports.ToolsController = ToolsController = __decorate([
    (0, common_1.Controller)('tools'),
    __metadata("design:paramtypes", [tools_services_1.ToolsServices])
], ToolsController);
//# sourceMappingURL=tools.controller.js.map