import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerPaidComponent } from './customer-paid/customer-paid.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';


@NgModule({
  declarations: [CustomerListComponent, VendorDetailComponent, CheckoutComponent, CustomerPaidComponent, InvoiceDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule,
    SharedModule
  ]
})

export class InvoiceModule { }
