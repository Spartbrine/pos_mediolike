import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./../../home/home').then(m => m.Home),
    },
    {
        path: 'edit/:id',
    },
    {
        path: 'create',

    }

];