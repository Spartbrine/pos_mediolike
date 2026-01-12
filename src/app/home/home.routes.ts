import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('../home/home').then(m => m.Home),
        children: [
            {
                path: 'profile',
                loadComponent: () => import('./../features/user/containers/profile-container/profile-container').then(m => m.ProfileContainer)
            },
            {
                path: 'products',
                loadChildren: () => import('../features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
            }
        ]
    }
]