import { Component, OnInit } from '@angular/core';
import { Customer, customerConverter } from './customer';
import { RouterLinkActive } from '@angular/router';
import { environment } from '../environments/environment';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp(environment.firebase);

var db = firebase.firestore();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Haysty Pay';
  customer: Customer = {
    licensePlate: ''
  };

  customers: Customer[] = [];

  ngOnInit(){
    this.getCustomers();
  }

  getCustomers(){
    db.collection('customers')
      .withConverter(customerConverter)
      .orderBy("licensePlate")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.customers.push(doc.data())
        });
      });
  }

  getCustomersClick(){
    this.getCustomers();
  }

  addCustomerClick(){
    db.collection("customers")
      .add(this.customer)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    this.customer.licensePlate = '';
  }
}
