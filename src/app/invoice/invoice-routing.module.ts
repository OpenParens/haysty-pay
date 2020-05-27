import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerPaidComponent } from './customer-paid/customer-paid.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';


const routes: Routes = [
  { path: 'customers/vendor-detail/:id', component: VendorDetailComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'customer-paid/invoice-detail/:id', component: InvoiceDetailsComponent },
  { path: 'customer-paid', component: CustomerPaidComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
