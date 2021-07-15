import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn : boolean = false;
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }

  onLogout() {
    console.log("On Logout called")
    this.isLoggedIn = false;
  }

  onLogin() {
    console.log("On Login called")
    this.isLoggedIn = true;
  }

}
