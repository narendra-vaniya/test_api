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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolSchema = exports.Products = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Products = class Products extends mongoose_2.Document {
};
exports.Products = Products;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Products.prototype, "isFree", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                tier: String,
                description: String,
                price: { monthly: String, yearly: String },
                features: [String],
            },
        ],
    }),
    __metadata("design:type", Array)
], Products.prototype, "pricing", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Products.prototype, "about", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Products.prototype, "lastUpdate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Products.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { logo: String, webPages: [{ images: [String], date: Date }] },
    }),
    __metadata("design:type", Object)
], Products.prototype, "images", void 0);
exports.Products = Products = __decorate([
    (0, mongoose_1.Schema)({})
], Products);
exports.ToolSchema = mongoose_1.SchemaFactory.createForClass(Products);
//# sourceMappingURL=tools.entity.js.map