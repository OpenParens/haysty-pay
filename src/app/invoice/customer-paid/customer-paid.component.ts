import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../customer';
import { Subscription } from 'rxjs';
import { CustomerPaidService } from './customer-paid.service';

@Component({
  selector: 'app-customer-paid',
  templateUrl: './customer-paid.component.html',
  styleUrls: ['./customer-paid.component.scss']
})
export class CustomerPaidComponent implements OnInit, OnDestroy {
  customers: Customer[];
  sub: Subscription;

  constructor(public customerPaidService: CustomerPaidService) { }

  ngOnInit(): void {
    this.sub = this.customerPaidService
      .getCustomers()
      .subscribe(customers => (this.customers = customers));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
