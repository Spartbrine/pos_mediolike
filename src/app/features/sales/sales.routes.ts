import { Routes } from "@angular/router";

export const SALES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/sale-list/sale-list').then(m => m.SaleList)
    },
];