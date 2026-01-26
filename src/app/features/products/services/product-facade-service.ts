import { inject, Injectable } from '@angular/core';
import { ProductApiService } from './product-api-service';
import { PaginatedResponse } from '../../../core/interfaces/paginated-response.interface';
import { Product } from '../product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductFacadeService {
    private productApiService = inject(ProductApiService);
    apiResponse: PaginatedResponse<any> = {} as PaginatedResponse<any>;

    getProductPaginated(): Product[] {
        this.productApiService.getProducts().subscribe({
            next: (response) => {
                this.apiResponse = response;
            }, error: (error) => {
                console.error('Error fetching products:', error);
            }
        });
        return this.apiResponse.data ? this.apiResponse.data.data : [];
    }
}
