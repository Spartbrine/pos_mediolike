import { BaseInterface } from "../../../core/interfaces/base-interface";
import { Branch } from "./branch.interface";
import { Customer } from "./customer.interface";

export interface Sale extends BaseInterface {
    date: string;
    total: number;
    status: SaleStatus;
    customer?: Customer;
    branch?: Branch;
}

export type SaleStatus = 'pending' | 'completed' | 'canceled';