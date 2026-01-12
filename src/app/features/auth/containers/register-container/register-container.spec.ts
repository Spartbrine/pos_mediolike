import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContainer } from './register-container';

describe('RegisterContainer', () => {
  let component: RegisterContainer;
  let fixture: ComponentFixture<RegisterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
