import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
    
  public isLoggedIn : boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null) 
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
  }

}
