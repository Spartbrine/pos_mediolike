import { Component, inject } from '@angular/core';
import { Product } from '../../product.interface';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductFacadeService } from '../../services/product-facade-service';

@Component({
  selector: 'app-product-list-container',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list-container.html',
  styleUrl: './product-list-container.css',
})
export class ProductListContainer {
  private productFacadeService = inject(ProductFacadeService);
  products: Product[] = [];

  ngOnInit() {
    this.products = this.productFacadeService.getProductPaginated();
  }


}
