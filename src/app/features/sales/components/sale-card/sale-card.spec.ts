import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCard } from './sale-card';

describe('SaleCard', () => {
  let component: SaleCard;
  let fixture: ComponentFixture<SaleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
