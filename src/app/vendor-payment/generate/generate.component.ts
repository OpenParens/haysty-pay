import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenerateService } from './generate.service';
import { Subscription, Observable, zip, of } from 'rxjs';
import { VendorTotal } from '../vendorTotal';
import { VendorDetail } from 'src/app/invoice/vendor-detail/vendorDetail';
import { mergeMap, groupBy, map, reduce, take } from 'rxjs/operators';
import { Customer } from 'src/app/invoice/customer';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})

export class GenerateComponent implements OnInit, OnDestroy {
  vendorDetails: VendorDetail[] = [];
  sub: Subscription;
  vendorTotals: VendorTotal[] = [];

  customers: Customer[] = [];

  constructor(public generateService: GenerateService) { }

  ngOnInit(): void {
    this.sub = this.generateService.getPaidVendorDetails().subscribe( details =>
      (this.vendorDetails = details));
  }

  // ngOnInit(): void {
  //   this.sub = this.generateService.getVendorTotals().subscribe(vendorTotals =>
  //       (this.vendorTotals.push({
  //         vendorName: vendorTotals[0],
  //         total: vendorTotals[1]
  //       })));
  // }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
