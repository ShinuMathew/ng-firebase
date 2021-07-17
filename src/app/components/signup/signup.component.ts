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
  public loading : boolean = false;
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    this.loading = false;
  }

  async onSignUp(email : string, password : string, firstName? : string, lastName? : string, phoneNo? : number) {
    this.loading = true;
    await this.firebaseService.signUpAsNewUser(email, password, firstName, lastName, phoneNo);
    this.isLoggedIn.emit();
    this.loading = false;
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
