import * as firebase from 'firebase/app';

export interface VendorDetail {
  vendorId?: string;
  amount?: string;
  timestamp?: firebase.firestore.Timestamp;
}
