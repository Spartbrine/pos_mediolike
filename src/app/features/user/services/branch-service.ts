import { Injectable } from '@angular/core';
import { ApiBaseService } from '../../../core/services/api-base-service';
import { HttpClient } from '@angular/common/http';
import { PaginatedResponse } from '../../../core/interfaces/paginated-response.interface';
import { Branch } from '../branch.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService extends ApiBaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getBranches(): Observable<Branch[]> {
    return this.get<PaginatedResponse<Branch>>('branches').pipe(
      map(response => {
        return response.data.data;
      })
    );
  }
}
