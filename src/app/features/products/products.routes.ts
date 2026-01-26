import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/product-list-container/product-list-container').then(m => m.ProductListContainer)
    },
    {
        path: ':id',
        loadComponent: () => import('./product-detailed/product-detailed').then(m => m.ProductDetailed)
    }
    // {
    //     path: 'create',
    //     loadComponent: () => import('./containers/product-form-container/product-form-container').then(m => m.ProductFormContainer)
    // }

];