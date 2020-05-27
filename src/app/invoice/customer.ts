import * as firebase from 'firebase/app';

export interface Customer {
  id?: string;
  identifier?: string;
  status?: string;
  createdDateTime?: firebase.firestore.Timestamp;
}
