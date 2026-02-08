import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { Sale } from '../../interfaces/sale.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'sale-card',
  imports: [
    Card,
    CurrencyPipe,
    DatePipe
  ],
  providers: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './sale-card.html',
  styleUrl: './sale-card.css',
})
export class SaleCard {
  @Input() sale: Sale = {} as Sale;
}
