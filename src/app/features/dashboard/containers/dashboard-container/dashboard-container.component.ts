
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-dashboard-container',
    standalone: true,
    imports: [
        CommonModule,
        CardModule
    ],
    templateUrl: './dashboard-container.component.html',
    styleUrl: './dashboard-container.component.css'
})
export class DashboardContainerComponent {
    stats = [
        { title: 'Ventas Totales', value: '$12,500', icon: 'pi pi-shopping-cart', color: 'blue' },
        { title: 'Pedidos Totales', value: '150', icon: 'pi pi-shopping-bag', color: 'green' },
        { title: 'Productos Totales', value: '45', icon: 'pi pi-box', color: 'orange' },
        { title: 'Clientes Totales', value: '30', icon: 'pi pi-users', color: 'purple' }
    ];
}
