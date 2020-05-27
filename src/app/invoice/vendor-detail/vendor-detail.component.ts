import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VendorDetail } from './vendorDetail';
import { VendorDetailService } from './vendor-detail.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class VendorDetailComponent implements OnInit, OnDestroy {
  id: string;
  vendorDetail: VendorDetail;
  sub: Subscription;
  sub2: Subscription;
  amount: string;
  total: number;

  constructor(public vendorDetailService: VendorDetailService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.sub = this.vendorDetailService
      .getAmount(this.id)
      .subscribe(vendorDetail => (this.vendorDetail = vendorDetail));

    this.sub2 = this.vendorDetailService
      .getTotal(this.id)
      .subscribe(subTotals => (this.total = subTotals.map(s => s.amount).reduce((acc, val) => acc + val)));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  addDetail(){
    this.vendorDetailService.addAmount(+this.amount, this.id);

    this.amount = '';
  }
}
