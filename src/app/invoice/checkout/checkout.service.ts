import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { VendorDetail } from '../vendor-detail/vendorDetail';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getTotal(customerId: string) {
    return this.db.collection<VendorDetail>('/customers/' + customerId + '/vendor-details')
      .valueChanges();
  }

  checkoutInvoice(customerId: string) {
    this.db.doc('/customers/' + customerId).update({status: 'paid'});
  }
}
