import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerPaidService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getCustomers() {
    return this.db.collection<Customer>('customers', ref =>
      ref.where('status', '==', 'paid')).valueChanges({ idField: 'id' });
  }
}
