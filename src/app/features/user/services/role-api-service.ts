import { Injectable } from '@angular/core';
import { ApiBaseService } from '../../../core/services/api-base-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoleApiService extends ApiBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getRoles() {

  }

}
