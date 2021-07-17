import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('is-loggedout')
  public isLoggedOut: EventEmitter<Object> = new EventEmitter();

  public user: string = "";
  public loading: boolean;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.loading = false;
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')).user.displayName;
    }
  }

  async logout() {
    this.loading = true;
    setTimeout(async () => {
      await this.firebaseService.logout()
      this.isLoggedOut.emit();
      this.loading = false;
    }, 2000)

  }

}
