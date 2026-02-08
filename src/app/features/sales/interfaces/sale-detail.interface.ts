import { BaseInterface } from "../../../core/interfaces/base-interface";
import { Product } from "../../products/product.interface";

export interface SaleDetail extends BaseInterface {
    product_id: number;
    quantity: number;
    price: number;
    product?: Product;
}