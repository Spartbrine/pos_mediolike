import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductApiService } from '../../products/services/product-api-service';
import { PaginatedResponse } from '../../../core/interfaces/paginated-response.interface';
import { Product } from '../../products/product.interface';

@Injectable({
  providedIn: 'root',
})
export class SaleFormUtil {
  getTotalByProduct(quantity: number, price: number): number {
    return quantity * price;
  }

  getTotalBySale(saleDetails: { quantity: number; price: number }[]): number {
    return saleDetails.reduce((total, detail) => total + this.getTotalByProduct(detail.quantity, detail.price), 0);
  }

  private signalProductAnswer = signal({} as PaginatedResponse<Product>);
  private productApiService = inject(ProductApiService);

  products$ = computed(() => this.signalProductAnswer());

  getProducts() {
    this.productApiService.getProducts().subscribe(response => {
      this.signalProductAnswer.set(response);
    });
  }


}
