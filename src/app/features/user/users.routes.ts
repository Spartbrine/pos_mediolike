import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/user-list-container/user-list-container.component').then(m => m.UserListContainerComponent),
    },
    {
        path: 'create',
        loadComponent: () => import('./containers/user-create-container/user-create-container.component').then(m => m.UserCreateContainerComponent)
    }
];