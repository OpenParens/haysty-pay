import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { VendorTotal } from '../vendorTotal';
import { VendorDetail } from 'src/app/invoice/vendor-detail/vendorDetail';
import { Customer } from 'src/app/invoice/customer';
import { map, switchMap, mergeMap, groupBy, reduce, tap, mergeAll } from 'rxjs/operators';
import { CustomerPaidComponent } from 'src/app/invoice/customer-paid/customer-paid.component';
import { zip, of, merge, Observable } from 'rxjs';
import { Subtotal } from 'src/app/invoice/vendor-detail/subtotal';
import { leftJoin } from './left-join';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  getPaidVendorDetails() {
    const customers$ = this.db.collection('customers', ref =>
      ref.where('status', '==', 'paid')).valueChanges({idField: 'id'});

    const vendorDetails$ = customers$.pipe(
      tap(x => console.log('tap: ' + Object.keys(x[0]))),
      leftJoin(this.db, 'uid', 'vendor-details'),
      tap(x => console.log('tap after: ' + Object.keys(x[0]))),
      tap(x => console.log('tap after: ' + x)),
      tap(x => console.log('tap after: ' + Object.keys(x[0]['vendor-details'][0]))),
      tap(x => console.log('tap after: ' + x[1]['vendor-details'])),
      tap(x => console.log('tap after: ' + x[2]['vendor-details']))
    );

    return vendorDetails$ as Observable<VendorDetail[]>;
  }

  // getVendorTotals() {
  //   return this.db.collection<Customer>('customers', ref =>
  //     ref.where('status', '==', 'paid')
  //     )
  //     .valueChanges({idField: 'id'})
  //     .pipe(
  //       mergeMap(item => item),
  //       map(customer => customer.id),
  //       tap(custId => (console.log(custId))),
  //       switchMap(id => {
  //         return this.db.collection<VendorDetail>('/customers/' + id + '/vendor-details', ref =>
  //           ref.orderBy('vendor'))
  //           .valueChanges()
  //             .pipe(
  //               tap(x => {console.log('tap 1'); console.log(x)}),
  //               mergeMap(item => item),
  //               tap(x => {console.log('tap 2'); console.log(x)}),
  //               map(({vendor, amount}) => { return {vendor, amount}}),
  //               tap(x => {console.log('tap 2'); console.log(x)}),
  //               groupBy(item => item.vendor),
  //               tap(x => {console.log('tap 3'); console.log(x)}),
  //               mergeMap(group =>
  //                 zip(
  //                   of(group.key),
  //                   group.pipe(
  //                     map(({amount}) => amount),
  //                     reduce((acc, val) => acc + val)
  //                   )
  //                 )
  //               ),
  //               tap(x => {console.log('tap 4'); console.log(x)})
  //             )
  //         }
  //       )
  //     );
  // }
}
