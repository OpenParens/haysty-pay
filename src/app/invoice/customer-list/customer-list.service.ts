import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../customer';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class CustomerListService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getCustomers() {
    return this.db.collection<Customer>('customers', ref =>
    ref.where('status', '==', 'unpaid')).valueChanges({ idField: 'id' });
  }

  async createCustomer(licensePlate: string) {
    const user = await this.auth.currentUser;

    let refId = await this.db.collection('customers').add({
      identifier: licensePlate,
      status: 'unpaid',
      uid: user.uid,
      createdDateTime: firebase.firestore.FieldValue.serverTimestamp()
    });

    // hack to initialize sub collection
    refId.collection('/vendor-details/').add({amount: 0});
  }
}
