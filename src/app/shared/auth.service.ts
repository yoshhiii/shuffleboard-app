import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router, private userService: UserService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.userService.getUserByUsername(email).subscribe(x => {
          localStorage.setItem('userId', x.id.toString());
        });
        this.router.navigate(['tabs/score']);
    } catch (e) {
        alert('Error!'  +  e.message);
    }
  }

  async createUser(email: string, password: string, name: string) {
    try {
        await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: name
          });
        });
        this.router.navigate(['/profile']);
    } catch (e) {
        alert('Error!'  +  e.message);
    }
  }

  async updateuser(password: string, name: string) {
    this.user.updatePassword(password).then(() => {
      this.user.updateProfile({
        displayName: name
      });
    });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}
