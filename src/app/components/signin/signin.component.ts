import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  @Input('is-loggedin')
  public isLoggedIn : boolean;

  public hide : boolean = true;
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignIn(email, password) {
    await this.firebaseService.signInWithEmailAndPassword(email, password);
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
