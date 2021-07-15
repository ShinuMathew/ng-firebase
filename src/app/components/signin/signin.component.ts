import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  @Output('is-loggedin')
  public isLoggedIn : EventEmitter<boolean> = new EventEmitter();
  
  public hide : boolean = true;
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignIn(email, password) {
    await this.firebaseService.signInWithEmailAndPassword(email, password);
    this.isLoggedIn.emit();
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
