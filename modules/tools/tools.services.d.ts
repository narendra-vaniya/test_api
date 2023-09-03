import { Model } from 'mongoose';
import { Products, ProductDocument } from './tools.entity';
export declare class ToolsServices {
    private readonly toolModel;
    constructor(toolModel: Model<ProductDocument>);
    getProducts(query: any, page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products | null>;
}
