import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { VendorDetail } from './vendorDetail';
import { Customer } from '../customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VendorDetailService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  customer: AngularFirestoreDocument<Customer>;

  getAmount(customerId: string) {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection<VendorDetail>('/customers/' + customerId + '/vendor-details', ref =>
            ref.where('vendorId', '==', user.uid))
            .valueChanges();
        }
      })
    );
  }

  // addAmount(amount: string, customerId: string) {
  //   let vendorDetail: Observable<VendorDetail>;

  //   this.auth.authState.pipe(
  //     switchMap(user => {
  //       if (user) {
  //         vendorDetail = this.db.doc<VendorDetail>('/customers/' + customerId + '/vendor-details/' + user.uid).valueChanges();
  //       }
  //     })
  //   );
  // }
}
