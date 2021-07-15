import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
    
  public isLoggedIn : boolean;

  @Output('is-loggedin')
  public isUserLoggedIn : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null) 
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
  }

  userSignedIn() {
    this.isLoggedIn = true;
    this.isUserLoggedIn.emit()
  }

}
