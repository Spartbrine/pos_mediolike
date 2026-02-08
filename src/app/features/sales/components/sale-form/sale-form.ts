import { Component, effect, inject, Input } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { Branch } from '../../interfaces/branch.interface';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SaleFormUtil } from '../../services/sale-form-util';
import { ProductApiService } from '../../../products/services/product-api-service';
import { Product } from '../../../products/product.interface';
import { SaleDetail } from '../../interfaces/sale-detail.interface';
import { CardModule } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SaleApiService } from '../../services/sale-api-service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'sale-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CurrencyPipe,
    ButtonModule,
    FloatLabelModule,
    InputTextModule
  ],
  templateUrl: './sale-form.html',
  styleUrl: './sale-form.css',
})
export class SaleForm {
  @Input() customers: Customer[] = [];
  @Input() branches: Branch[] = [];

  private SaleFormUtilService = inject(SaleFormUtil);
  private saleApiService = inject(SaleApiService);
  paidAmount: number = 0;

  products: Product[] = [];
  details: SaleDetail[] = [];

  constructor() {
    this.SaleFormUtilService.getProducts()
    effect(() => {
      this.products = this.SaleFormUtilService.products$().data.data;
    });
  }


  addSaleDetail(product: Product) {
    const existingDetail = this.details.find(detail => detail.product?.id === product.id);
    if (existingDetail) {
      existingDetail.quantity += 1;
    } else {
      this.details.push({
        product: product,
        product_id: product.id as number,
        quantity: 1,
        price: product.price
      });
    }
  }

  removeSaleDetail(detail: SaleDetail) {
    this.details = this.details.filter(d => d !== detail);
  }

  removeOneFromDetail(detail: SaleDetail) {
    if (detail.quantity > 1) {
      detail.quantity -= 1;
      this.details.find(d => d === detail)!.quantity = detail.quantity;
    } else {
      this.removeSaleDetail(detail);
    }
  }

  addOneToDetail(detail: SaleDetail) {
    detail.quantity += 1;
    this.details.find(d => d === detail)!.quantity = detail.quantity;
  }

  checkout() {
    console.log('Detalles de la venta:', this.details);
    const sale = {
      customer_id: this.customers[0].id as number,
      branch_id: this.branches[0].id as number,
      status: 'pending' as const,
      date: new Date().toISOString(),
      total: this.getTotalBySale(),
      payments: [
        {
          amount: this.paidAmount,
          payment_method_id: 1
        }
      ],
      details: this.details.map(detail => ({
        product_id: detail.product_id,
        quantity: detail.quantity,
        price: detail.price
      }))
    };

    console.log('Venta a enviar:', sale);
    // this.saleApiService.postSale(sale).subscribe(response => {
    //   console.log('Venta realizada:', response);
    // });

  }

  getTotalByProduct(quantity: number, price: number): number {
    return this.SaleFormUtilService.getTotalByProduct(quantity, price);
  }

  getTotalBySale(): number {
    return this.SaleFormUtilService.getTotalBySale(this.details.map(detail => ({ quantity: detail.quantity, price: detail.price })));
  }

}
