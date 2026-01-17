import { BaseInterface } from "../../core/interfaces/base-interface";

export interface User extends BaseInterface {
    name: string;
    email: string;
    branch_id?: number;
    email_verified_at?: string;
    branch?: {
        id: number;
        name: string;
        location: string;
        is_active: number;
    };
    roles?: {
        id: number;
        name: string;
        guard_name: string;
    }[];
}