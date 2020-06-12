import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorPaymentRoutingModule } from './vendor-payment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GenerateComponent } from './generate/generate.component';

@NgModule({
  declarations: [GenerateComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorPaymentRoutingModule,
    SharedModule
  ]
})

export class VendorPaymentModule { }
