import { BaseInterface } from "../../core/interfaces/base-interface";

export interface Branch extends BaseInterface {
    name: string;
    location: string;
    is_active: number;
}