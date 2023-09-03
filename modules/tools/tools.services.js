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
exports.ToolsServices = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tools_entity_1 = require("./tools.entity");
let ToolsServices = class ToolsServices {
    constructor(toolModel) {
        this.toolModel = toolModel;
    }
    async getProducts(query, page, limit) {
        try {
            let q = this.toolModel.find(query);
            const skip = (page - 1) * limit;
            const products = await q
                .skip(skip)
                .limit(limit)
                .select({ name: 1, email: 1 })
                .lean();
            return products;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error while fetching products');
        }
    }
    async getProduct(id) {
        try {
            console.log('api call', id);
            const product = await this.toolModel.findById(id).exec();
            console.log('api call', product);
            return product;
        }
        catch (error) {
            console.log('api call', error);
            throw new common_1.InternalServerErrorException('Error while fetching product');
        }
    }
};
exports.ToolsServices = ToolsServices;
exports.ToolsServices = ToolsServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tools_entity_1.Products.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ToolsServices);
//# sourceMappingURL=tools.services.js.map