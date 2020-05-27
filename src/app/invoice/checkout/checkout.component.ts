import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CheckoutService } from './checkout.service';
import { Subtotal } from '../vendor-detail/subtotal';
import { VendorDetail } from '../vendor-detail/vendorDetail';
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit, OnDestroy {
  id: string;
  sub: Subscription;
  vendorDetails$: Observable<VendorDetail[]>;
  subtotals: Subtotal[];
  paymentAmount: string;
  total: number;

  constructor(public checkoutService: CheckoutService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.vendorDetails$ = this.checkoutService.getTotal(this.id);

    // move the total logic to a field on the invoice calculated in a cloud function
    this.sub = this.vendorDetails$.subscribe(vendorDetails =>
      (this.total = vendorDetails.map(d => d.amount).reduce((acc, val) => acc + val)));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkoutInvoice() {
    if (+this.paymentAmount === this.total) {
      this.checkoutService.checkoutInvoice(this.id);

      this.router.navigate(['/invoice/customers']);
    }
    else {
      alert('Payment amount is not equal to total');
    }
  }
}
