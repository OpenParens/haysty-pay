import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../../user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  user: User = {
    Uid: '',
    Email: '',
    Vendor: ''
  };
  displayName = '';
  username = '';
  password = '';

  constructor(public auth: AngularFireAuth, private db: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  async login() {
    this.auth.signInWithEmailAndPassword(this.username, this.password);
    let user = await this.auth.currentUser;
    user.updateProfile({displayName: this.displayName});
    this.displayName = '';
    this.username = '';
    this.password = '';
  }

  async addUsername() {
    let user = await this.auth.currentUser;
    user.updateProfile({displayName: this.displayName});
    this.displayName = '';
  }

  logout() {
    this.auth.signOut();
  }

  async signup() {
    await this.auth.createUserWithEmailAndPassword(this.username, this.password);
    let currentUser = await this.auth.currentUser;

    console.log(currentUser.uid);
    console.log(currentUser.email);
    this.user.Uid = currentUser.uid;
    this.user.Email = currentUser.email;
    this.user.Vendor = this.displayName;

    this.db.collection('users')
      .add(this.user)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });

    this.username = '';
    this.password = '';
  }
}
