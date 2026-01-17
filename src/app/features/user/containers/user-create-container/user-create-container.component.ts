
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../core/services/user-service';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-user-create-container',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CardModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ToastModule,
        RouterLink
    ],
    providers: [MessageService],
    templateUrl: './user-create-container.component.html',
    styleUrl: './user-create-container.component.css'
})
export class UserCreateContainerComponent {
    private fb = inject(FormBuilder);
    private userService = inject(UserService);
    private router = inject(Router);
    private messageService = inject(MessageService);

    userForm: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password_confirmation: ['', [Validators.required]]
    });

    isLoading = signal(false);

    onSubmit() {
        if (this.userForm.invalid) {
            this.userForm.markAllAsTouched();
            return;
        }

        if (this.userForm.value.password !== this.userForm.value.password_confirmation) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden' });
            return;
        }

        this.isLoading.set(true);
        this.userService.createUser(this.userForm.value).subscribe({
            next: () => {
                this.isLoading.set(false);
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario creado' });
                setTimeout(() => this.router.navigate(['/users']), 1000);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear usuario' });
                console.error('Create user error', err);
            }
        });
    }

    cancel() {
        this.router.navigate(['/users']);
    }
}
