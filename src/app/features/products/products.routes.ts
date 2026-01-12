import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./../../home/home').then(m => m.Home),
    },
    // {
    //     path: 'edit/:id',
    // },
    // {
    //     path: 'create',
    //     loadComponent: () => import('./containers/product-form-container/product-form-container').then(m => m.ProductFormContainer)
    // }

];