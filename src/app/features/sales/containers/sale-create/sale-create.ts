import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SaleApiService } from '../../services/sale-api-service';
import { Customer } from '../../interfaces/customer.interface';
import { Branch } from '../../interfaces/branch.interface';
import { SaleForm } from '../../components/sale-form/sale-form';

@Component({
  selector: 'sale-create',
  imports: [
    ButtonModule,
    SaleForm
  ],
  templateUrl: './sale-create.html',
  styleUrl: './sale-create.css',
})
export class SaleCreate {
  @Output() onChangeTab = new EventEmitter<number>();

  saleApiService = inject(SaleApiService);
  customers: Customer[] = [];
  branches: Branch[] = [];

  ngOnInit() {
    this.getCustomers();
    this.getBranches();
  }

  getCustomers() {
    this.saleApiService.getCustomer().subscribe(response => {
      this.customers = response.data.data;
    });
  }

  getBranches() {
    this.saleApiService.getBranches().subscribe(response => {
      this.branches = response.data.data;
    });
  }

  changeTab(index: number) {
    this.onChangeTab.emit(index);
  }

}
