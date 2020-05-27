import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { VendorDetail } from './vendorDetail';
import * as firebase from 'firebase/app';
import { Subtotal } from './subtotal';
import { Customer } from '../customer';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VendorDetailService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getAmount(customerId: string) {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<VendorDetail>('/customers/' + customerId + '/vendor-details/' + user.uid)
            .valueChanges();
        }
        else {
          return new Observable<VendorDetail>();
        }
      })
    );
  }

  getCustomer(customerId: string) {
    return this.db.doc<Customer>('/customers/' + customerId).valueChanges();
  }

  getTotal(customerId: string) {
    return this.db.collection<Subtotal>('/customers/' + customerId + '/vendor-details')
      .valueChanges();
  }

  async addAmount(amount: number, customerId: string) {
    const user = await this.auth.currentUser;

    this.db.doc('/customers/' + customerId + '/vendor-details/' + user.uid).set({
      vendor: user.displayName,
      amount: amount,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}
