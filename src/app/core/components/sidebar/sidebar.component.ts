import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth-service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, ButtonModule, MenuModule, DockModule, TooltipModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    user = this.authService.currentUser;
    sidebarVisible = true;

    items: MenuItem[] = [
        {
            label: 'Inicio',
            items: [
                { label: 'Inicio', icon: 'pi pi-home', routerLink: '/dashboard' }
            ]
        },
        {
            label: 'Gestión',
            items: [
                { label: 'Ventas', icon: 'pi pi-shopping-cart', routerLink: '/sales' },
                { label: 'Productos', icon: 'pi pi-box', routerLink: '/products' },
                { label: 'Empleados', icon: 'pi pi-users', routerLink: '/users' }
            ]
        },
        {
            label: 'Cuenta',
            items: [
                {
                    label: 'Cerrar Sesión',
                    icon: 'pi pi-sign-out',
                    command: () => this.logout()
                }
            ]
        }
    ];

    dockItems: MenuItem[] = [
        { label: 'Tablero', icon: 'pi pi-home', command: () => this.router.navigate(['/dashboard']) },
        { label: 'Ventas', icon: 'pi pi-shopping-cart', command: () => this.router.navigate(['/sales']) },
        { label: 'Productos', icon: 'pi pi-box', command: () => this.router.navigate(['/products']) },
        { label: 'Empleados', icon: 'pi pi-users', command: () => this.router.navigate(['/users']) },
        { label: 'Salir', icon: 'pi pi-sign-out', command: () => this.logout() }
    ];

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
