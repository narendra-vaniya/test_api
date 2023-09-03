/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type ProductDocument = Products & Document;
export declare class Products extends Document {
    isFree: boolean;
    pricing: {
        tier: string;
        description: string;
        price: {
            monthly: string;
            yearly: string;
        };
        features: string[];
    }[];
    name: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    lastUpdate: Date;
    tags: string[];
    images: {
        logo: string;
        webPages: {
            images: string[];
            date: Date;
        }[];
    };
}
export declare const ToolSchema: import("mongoose").Schema<Products, import("mongoose").Model<Products, any, any, any, Document<unknown, any, Products> & Products & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Products, Document<unknown, {}, Products> & Products & {
    _id: import("mongoose").Types.ObjectId;
}>;
