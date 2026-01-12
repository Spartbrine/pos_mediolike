import { Routes } from '@angular/router';
import { authGuardGuard } from './core/guards/auth-guard-guard';

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
        loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES),
        canActivate: [authGuardGuard]
    }
];
