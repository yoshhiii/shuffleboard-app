import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
  model = new Profile();
  user: User;
  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.model.email = user.email;
        this.model.name = user.displayName;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  ngOnInit() {
  }

  async createUser() {
    await this.authService.createUser(this.model.email, this.model.password, this.model.name);
    // await this.firebaseService.addUser(this.model, JSON.parse(localStorage.getItem('user')).uid);
    this.router.navigate(['/tabs/score']);
  }

  async updateUser() {
    await this.authService.updateuser(this.model.password, this.model.name);
    // await this.firebaseService.updateUser(this.model.name, JSON.parse(localStorage.getItem('user')).uid);
  }
}
