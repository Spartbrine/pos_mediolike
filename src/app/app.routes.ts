import { Routes } from '@angular/router';
import { authGuardGuard } from './core/guards/auth-guard-guard';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/auth/containers/login-container/login-container').then(m => m.LoginContainer)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/containers/register-container/register-container').then(m => m.RegisterContainer)
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuardGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/containers/dashboard-container/dashboard-container.component').then(m => m.DashboardContainerComponent)
            },
            {
                path: 'users',
                loadComponent: () => import('./features/user/containers/user-list-container/user-list-container.component').then(m => m.UserListContainerComponent)
            },
            {
                path: 'users/create',
                loadComponent: () => import('./features/user/containers/user-create-container/user-create-container.component').then(m => m.UserCreateContainerComponent)
            }
        ]
    }
];
