import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('is-loggedout')
  public isLoggedOut : EventEmitter<Object> = new EventEmitter();

  public user : string = "";

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user')).user.displayName;
    }
  }

  async logout() {
    await this.firebaseService.logout()
    this.isLoggedOut.emit();
  }

}
