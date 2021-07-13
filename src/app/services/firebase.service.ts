import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private isLoggedIn: boolean = false;
  private message: string = "";

  constructor(public angularFireAuth: AngularFireAuth) { }

  // SignIn with email and password
  async signInWithEmailAndPassword(email : string, password : string) {
    try {
      console.log(`EMAIL: ${email} || PASSWORD: ${password}`)
      let user = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
      console.log(`USER: ${user.user}`);
      if (user.user) {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user.user));
        console.log(user.user.displayName)
      }
    } catch (e) {
      this.isLoggedIn = false;
      this.message = `Unexpected error occured when trying to log you in. Please try later\n${e}`
      console.log(this.message)
    }
  }

  // SignIn with email and password
  async signUpAsNewUser(email : string, password : string, firstName? : string, lastName? : string, phoneNo? : number) {
    try {
      console.log(`EMAIL: ${email} || PASSWORD: ${password} || FIRST NAME: ${firstName} || LAST NAME: ${lastName} || PHONENO: ${phoneNo} `)
      let user = await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      console.log(`USER: ${user.user}`);
      // user.user.phoneNumber = phoneNo.toString()
      user.user.updateProfile({
        displayName : `${firstName} ${lastName}`
      })
      if (user.user) {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user.user));
        console.log(user.user.displayName)
      }
    } catch (e) {
      this.isLoggedIn = false;
      this.message = `Unexpected error occured when trying to log you in. Please try later\n${e}`
      console.log(this.message)
    }
  }

  // Logout
  async logout() {
    try {
      await this.angularFireAuth.signOut();
      localStorage.removeItem('user');
    } catch (e) {
      this.isLoggedIn = true;
      this.message = `Unexpected error occured when trying to log you out. Please try later`
      console.log(this.message)
    }
  }
}
