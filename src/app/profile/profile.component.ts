import { Component } from '@angular/core';
import { Profile } from './profile';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
  constructor(private firebaseService: FirebaseService) {}
  model = new Profile();

  submitForm() {
    this.firebaseService.addUser(this.model);
  }
}
