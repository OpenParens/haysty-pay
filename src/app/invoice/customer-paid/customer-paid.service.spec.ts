import { TestBed } from '@angular/core/testing';

import { CustomerPaidService } from './customer-paid.service';

describe('CustomerPaidService', () => {
  let service: CustomerPaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
