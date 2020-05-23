import * as firebase from 'firebase/app';

export interface Subtotal {
  amount: number;
  createdAt: firebase.firestore.Timestamp;
}
