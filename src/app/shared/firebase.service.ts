import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Team } from './models/team.model';

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

  getUsers(): Observable<Array<User>> {
    return this.db.collection('users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { id, ...data };
        });
      }
    ));
  }


  addTeam(team: Team) {
    return this.db.collection('teams').add({
      name: team.name,
      users: team.users
    });
  }
}
