import { Component, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Product } from '../../product.interface';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ProductSharedService } from '../../services/product-shared-service';
import { throws } from 'assert';

@Component({
  selector: 'product-card',
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product = {} as Product;
  productSharedService = inject(ProductSharedService);

  router = inject(Router);

  viewProduct() {
    this.productSharedService.isEditingSignal.set(false);
    this.productSharedService.setProduct(this.product);
    this.router.navigate(['products/', this.product.id]);
  }

  editProduct() {
    this.productSharedService.isEditingSignal.set(true);
    this.productSharedService.setProduct(this.product);
    this.router.navigate(['products/', this.product.id]);
  }

  deleteProduct() {
    console.log('Deleting product:', this.product);
  }

}
