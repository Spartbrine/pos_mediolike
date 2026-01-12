import { MenuItem } from 'primeng/api';

export const MenuItems: MenuItem[] = [
    {
        label: 'Inicio',
        icon: 'pi pi-home'
    },
    {
        label: 'Productos',
        icon: 'pi pi-table',
        items: [
            {
                label: 'Lista de Productos',
                icon: 'pi pi-list',
                routerLink: '/products'
            },
            {
                label: 'Entradas de productos',
                icon: 'pi pi-plus',
                routerLink: '/products/stocks'
            }

        ]
    },
    {
        label: 'Ventas',
        icon: 'pi pi-shopping-cart',
        routerLink: '/sales'
    }
];