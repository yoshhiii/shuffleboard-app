import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/models/user.model';

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
    private afAuth: AngularFireAuth,
    private userService: UserService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
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
    await this.user.reload();
    const user2: UserModel = {
      id: 1,
      name: this.model.name,
      email: this.model.email,
      authId: JSON.parse(localStorage.getItem('user')).uid
    };
    await this.userService.createUser(user2).subscribe(x => localStorage.setItem('userId', x.id.toString()));
    this.router.navigate(['/tabs/score']);
  }

  async updateUser() {
    await this.authService.updateuser(this.model.password, this.model.name);
    // await this.firebaseService.updateUser(this.model.name, JSON.parse(localStorage.getItem('user')).uid);
  }
}
