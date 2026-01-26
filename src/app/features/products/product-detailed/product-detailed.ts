import { Component, effect, inject } from '@angular/core';
import { Product } from '../product.interface';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProductSharedService } from '../services/product-shared-service';
import { ButtonModule } from 'primeng/button';
import { ProductApiService } from '../services/product-api-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detailed',
  imports: [
    CardModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './product-detailed.html',
  styleUrl: './product-detailed.css',
})
export class ProductDetailed {
  product: Product = {} as Product;
  isEditing: boolean = false;
  private productSharedService = inject(ProductSharedService);
  private productApiService = inject(ProductApiService);
  private messageService = inject(MessageService);
  private router = inject(Router);


  constructor() {
    effect(() => {
      this.isEditing = this.productSharedService.isEditingSignal();
      this.product = this.productSharedService.product$();
    });
  }

  header: string = this.isEditing ? 'Editando producto' + this.product.name : 'Creando producto';

  saveProduct() {
    if (this.isEditing) {
      this.productApiService.putProduct(this.product.id!, this.product).subscribe({
        next: (updatedProduct) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `Producto ${updatedProduct.name} actualizado correctamente.`
          });
          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `No se pudo actualizar el producto. ${err.message}`
          });
        }
      });
      return;
    }

    this.messageService.add({
      severity: 'warn',
      summary: 'Atención',
      detail: 'No tienes permiso para editar productos.'
    });

  }
}