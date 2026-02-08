import { TestBed } from '@angular/core/testing';

import { SaleFormUtil } from './sale-form-util';

describe('SaleFormUtil', () => {
  let service: SaleFormUtil;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleFormUtil);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
