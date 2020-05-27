import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaidComponent } from './customer-paid.component';

describe('CustomerPaidComponent', () => {
  let component: CustomerPaidComponent;
  let fixture: ComponentFixture<CustomerPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
