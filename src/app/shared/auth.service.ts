import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FcmService } from './fcm.service';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    private fcm: FcmService,
    private platform: Platform,
    private toast: ToastController) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  private async presentToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 5000
    });
    toast.present();
  }

  async login(email: string, password: string) {
    try {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['tabs/score']);
        this.fcm.onNotifications().subscribe(msg => {
          if (this.platform.is('ios')) {
            this.presentToast(msg.aps.alert);
          } else {
            this.presentToast(msg.body);
          }
        });
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
