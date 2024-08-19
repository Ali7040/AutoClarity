import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessModelComponent } from './payment-success-model.component';

describe('PaymentSuccessModelComponent', () => {
  let component: PaymentSuccessModelComponent;
  let fixture: ComponentFixture<PaymentSuccessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSuccessModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSuccessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
