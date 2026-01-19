import { BaseInterface } from "../../core/interfaces/base-interface";

export interface Role extends BaseInterface {
    name: string;
    guard_name: string;
}