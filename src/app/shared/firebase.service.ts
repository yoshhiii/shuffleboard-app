import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  addUser(user: Profile): Promise<string> {
    return this.db.collection('users').add({
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then((docRef) => {
      return docRef.id;
    });
  }

  getUsers() {
    return this.db.collection('users').valueChanges();
  }
}
