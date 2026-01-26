import { Component, inject } from '@angular/core';
import { Product } from '../../product.interface';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductApiService } from '../../services/product-api-service';

@Component({
  selector: 'app-product-list-container',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list-container.html',
  styleUrl: './product-list-container.css',
})
export class ProductListContainer {
  private productApiService = inject(ProductApiService);
  products: Product[] = [];

  ngOnInit() {
    this.productApiService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data.data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

}
