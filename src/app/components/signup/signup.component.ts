import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public hide : boolean = true;

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignUp(email : string, password : string, firstName? : string, lastName? : string, phoneNo? : number) {
    await this.firebaseService.signUpAsNewUser(email, password, firstName, lastName, phoneNo);
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
