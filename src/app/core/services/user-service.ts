import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base-service';
import { User } from '../../features/user/user.interface';
import { Observable, map } from 'rxjs';
import { PaginatedResponse } from '../interfaces/paginated-response.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService extends ApiBaseService {

    getUsers(): Observable<User[]> {
        return this.get<PaginatedResponse<User>>('users').pipe(
            map(response => {
                console.log('API Response:', response);
                return response.data.data;
            })
        );
    }

    createUser(user: any): Observable<User> {
        return this.post<User>('users', user);
    }

    getUser(id: number): Observable<User> {
        return this.get<User>(`users/${id}`);
    }

    updateUser(id: number, user: any): Observable<User> {
        return this.put<User>(`users/${id}`, user);
    }

    deleteUser(id: number): Observable<any> {
        return this.delete(`users/${id}`);
    }
}
