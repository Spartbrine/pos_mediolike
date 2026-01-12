import { User } from "../../features/user/user.interface";

export interface AuthResponse {
    user: User;
    token: string;
}