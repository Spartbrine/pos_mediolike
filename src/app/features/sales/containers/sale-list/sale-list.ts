import { Component, inject } from '@angular/core';
import { SaleApiService } from '../../services/sale-api-service';
import { Sale } from '../../interfaces/sale.interface';
import { SaleCard } from '../../components/sale-card/sale-card';
import { TabsModule } from 'primeng/tabs';
import { Button, ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { SaleCreate } from '../sale-create/sale-create';

@Component({
  selector: 'app-sale-list',
  imports: [
    TabsModule,
    SaleCard,
    ButtonModule,
    SaleCreate
  ],
  templateUrl: './sale-list.html',
  styleUrl: './sale-list.css',
})
export class SaleList {
  private saleApiService = inject(SaleApiService);
  sales: Sale[] = [];
  tabValue: number = 0;
  title: string = "Ventas";

  ngOnInit() {
    this.saleApiService.getSales().subscribe({
      next: (response) => {
        this.sales = response.data.data;
      },
      error: (error) => {
        console.error('Error fetching sales:', error);
      }
    });
  }

  changeTab(index: number) {
    if (index === 0)
      this.title = "Ventas";

    if (index === 1)
      this.title = "Crear Venta";

    if (index === 2)
      this.title = "Editando Venta";

    this.tabValue = index;
  }

}
