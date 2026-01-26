import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailed } from './product-detailed';

describe('ProductDetailed', () => {
  let component: ProductDetailed;
  let fixture: ComponentFixture<ProductDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
