import { Component, OnInit, OnDestroy } from '@angular/core';
import { VendorDetail } from '../vendor-detail/vendorDetail';
import { Subscription } from 'rxjs';
import { InvoiceDetailsService } from './invoice-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit, OnDestroy {
  id: string;
  vendorDetails: VendorDetail[];
  sub: Subscription;
  total: number;

  constructor(private invoiceDetailsService: InvoiceDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.sub = this.invoiceDetailsService
      .getInvoiceDetails(this.id)
      .subscribe(vendorDetails => (this.vendorDetails = vendorDetails));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
