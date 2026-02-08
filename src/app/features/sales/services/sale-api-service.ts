import { Injectable } from '@angular/core';
import { ApiBaseService } from '../../../core/services/api-base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../../core/interfaces/paginated-response.interface';
import { Sale } from '../interfaces/sale.interface';
import { Customer } from '../interfaces/customer.interface';
import { Branch } from '../interfaces/branch.interface';

@Injectable({
  providedIn: 'root',
})
export class SaleApiService extends ApiBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getSales(): Observable<PaginatedResponse<Sale>> {
    return this.get<PaginatedResponse<Sale>>('sales')
  }

  getCustomer(): Observable<PaginatedResponse<Customer>> {
    return this.get<PaginatedResponse<Customer>>('customers');
  }

  getBranches(): Observable<PaginatedResponse<Branch>> {
    return this.get<PaginatedResponse<Branch>>('branches');
  }

  postSale(sale: Sale): Observable<Sale> {
    return this.post<Sale>('sales', sale);
  }
}
