import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.firebaseService.logout()
  }
}