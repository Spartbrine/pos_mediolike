import { BaseInterface } from "../../core/interfaces/base-interface";
import { Branch } from "./branch.interface";
import { Role } from "./role.interface";

export interface User extends BaseInterface {
    name: string;
    email: string;
    branch_id?: number;
    email_verified_at?: string;
    branch?: Branch;
    role: number;
    roles?: Role[];
}