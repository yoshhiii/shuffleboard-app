import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { FirebaseService } from '../shared/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
  model = new Profile();
  currentUser = localStorage.getItem('currentUser');
  constructor(
    private firebaseService: FirebaseService,
    private router: Router) {}

  ngOnInit() {
  }

  async submitForm() {
    const id = await this.firebaseService.addUser(this.model);
    localStorage.setItem('currentUser', id);
    this.router.navigate(['/tabs/score']);
  }
}
