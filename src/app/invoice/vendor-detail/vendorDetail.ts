import * as firebase from 'firebase/app';

export interface VendorDetail {
  vendorId?: string;
  vendor?: string;
  amount?: number;
  timestamp?: firebase.firestore.Timestamp;
}
