import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductSharedService {
  private productSignal = signal<Product>({} as Product);
  product$ = computed(() => this.productSignal());

  isEditingSignal = signal<boolean>(false);

  setProduct(product: Product) {
    this.productSignal.set(product);
  }

}
