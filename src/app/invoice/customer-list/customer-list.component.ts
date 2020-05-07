import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Subscription } from 'rxjs';
import { CustomerListService } from './customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  customers: Customer[];
  sub: Subscription;
  customer: Customer = {
    identifier: ''
  };

  constructor(public customerListService: CustomerListService) { }

  ngOnInit(): void {
    this.sub = this.customerListService
                  .getCustomers()
                  .subscribe(customers => (this.customers = customers));
  }

  addCustomerClick(){
    this.customerListService.createCustomer(this.customer.identifier);

    this.customer.identifier = '';
  }
}
