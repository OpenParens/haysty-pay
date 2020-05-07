import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';


const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'vendor-detail', component: VendorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
