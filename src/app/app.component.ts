import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Haysty Pay';
  user: User = {
    Uid: '',
    Email: '',
    Vendor: ''
  };

  constructor(public auth: AngularFireAuth) {}

  ngOnInit(){
  }
}
