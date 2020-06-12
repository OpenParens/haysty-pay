import { AngularFirestore } from '@angular/fire/firestore';

import { combineLatest, pipe, of, defer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { VendorDetail } from 'src/app/invoice/vendor-detail/vendorDetail';

export const leftJoin = (
  afs: AngularFirestore,
  field,
  collection,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collectionData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;
          // Save the parent data state
          collectionData = data as any[];

          console.log(collectionData.length);
          console.log(field);
          console.log('collection: ' + collection);

          const reads$ = [];
          for (const doc of collectionData) {
            console.log(doc);
            // Push doc read to Array
            // if (doc[field]) {
              // Perform query on join key, with optional limit
              // const q = ref => ref.where(field, '==', doc[field]).limit(limit);

              reads$.push(afs.collection<VendorDetail>('customers/' + doc['id'] + '/vendor-details', ref =>
                ref.orderBy('vendor')).valueChanges({idField: 'vendorId'}));
            // } else {
            //   reads$.push(of([]));
            // }
          }

          // return reads$;
          return combineLatest(reads$);
        }),
        map(joins => {
          return collectionData.map((v, i) => {
            totalJoins += joins[i].length;
            return { ...v, [collection]: joins[i] || null };
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};
