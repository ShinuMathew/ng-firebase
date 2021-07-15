import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  @Output('is-loggedin')
  public isLoggedIn: EventEmitter<boolean> = new EventEmitter();
  public hide : boolean = true;

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignUp(email : string, password : string, firstName? : string, lastName? : string, phoneNo? : number) {
    await this.firebaseService.signUpAsNewUser(email, password, firstName, lastName, phoneNo);
    this.isLoggedIn.emit();
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
