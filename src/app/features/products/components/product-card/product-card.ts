import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Product } from '../../product.interface';

@Component({
  selector: 'product-card',
  imports: [
    CardModule
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product = {} as Product;
}
