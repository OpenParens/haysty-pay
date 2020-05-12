import { Component, OnInit } from '@angular/core';
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
export class VendorDetailComponent implements OnInit {
  id: string;
  vendorDetail: VendorDetail[];
  sub: Subscription;
  amount: number;
  authy: any;

  constructor(public vendorDetailService: VendorDetailService, private route: ActivatedRoute, private auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.sub = this.vendorDetailService
                  .getAmount(this.id)
                  .subscribe(vendorDetails => (this.vendorDetail = vendorDetails));
  }

  // orderDetailsByTimestamp(a: VendorDetail, b, ){

  }
}
