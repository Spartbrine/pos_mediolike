import { Injectable } from '@angular/core';
import { ApiBaseService } from '../../../core/services/api-base-service';
import { HttpClient } from '@angular/common/http';
import { PaginatedResponse } from '../../../core/interfaces/paginated-response.interface';
import { Product } from '../product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService extends ApiBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<PaginatedResponse<Product>> {
    return this.get<PaginatedResponse<Product>>('products');
  }
}
