
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../core/services/user-service';
import { User } from '../../user.interface';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-user-list-container',
    standalone: true,
    imports: [CommonModule, TableModule, ButtonModule, CardModule, RouterLink],
    templateUrl: './user-list-container.component.html',
    styleUrl: './user-list-container.component.css'
})
export class UserListContainerComponent {
    private userService = inject(UserService);
    private router = inject(Router);

    users = signal<User[]>([]);
    isLoading = signal(true);

    constructor() {
        this.loadUsers();
    }

    loadUsers() {
        this.isLoading.set(true);
        this.userService.getUsers().subscribe({
            next: (data) => {
                if (Array.isArray(data)) {
                    this.users.set(data);
                } else {
                    if ((data as any).data && Array.isArray((data as any).data)) {
                        this.users.set((data as any).data);
                    }
                }
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Error loading users', err);
                this.isLoading.set(false);
            }
        });
    }

    createUser() {
        this.router.navigate(['/users/create']);
    }
}
