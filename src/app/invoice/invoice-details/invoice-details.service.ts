import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { VendorDetail } from '../vendor-detail/vendorDetail';

@Injectable({
  providedIn: 'root'
})

export class InvoiceDetailsService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getInvoiceDetails(customerId: string) {
    return this.db.collection<VendorDetail>('/customers/' + customerId + '/vendor-details')
      .valueChanges({ idfield: 'vendorId'});
  }
}
