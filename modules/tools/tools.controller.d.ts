import { ToolsServices } from './tools.services';
export declare class ToolsController {
    private readonly toolsServices;
    constructor(toolsServices: ToolsServices);
    getProducts(query: any, page?: number, limit?: number): Promise<{
        success: boolean;
        data: import("./tools.entity").Products[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    getProduct(id: string): Promise<{
        success: boolean;
        data: import("./tools.entity").Products;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
}
