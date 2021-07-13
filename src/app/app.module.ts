import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

// Services
import { FirebaseService } from './services/firebase.service';
import { UserloginComponent } from './components/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDa_nnCz6-JTbMgfNsaS1VQI2lQVHl73U8",
      authDomain: "ng-firebase-manager.firebaseapp.com",
      projectId: "ng-firebase-manager",
      storageBucket: "ng-firebase-manager.appspot.com",
      messagingSenderId: "350337745511",
      appId: "1:350337745511:web:e04be466d8bf9554680ac2"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
