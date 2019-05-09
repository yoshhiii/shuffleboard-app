import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Team } from './models/team.model';
import { TeamModel } from '../tabs/team/team.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  addUser(user: Profile, authId: string): Promise<string> {
    return this.db.collection('users').add({
      name: user.name,
      email: user.email,
      id: authId
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

  getUser(authId: string): Observable<Profile[]> {
    return this.db.collection('users', (ref) => ref.where('authId', '==', authId)).valueChanges() as Observable<Profile[]>;
  }

  updateUser(name: string, id: string) {
    
  }


  getTeams(): Observable<TeamModel[]> {
    return (this.db.collection('teams', ref => ref.orderBy('elo', 'desc')).valueChanges() as Observable<TeamModel[]>);
  }

  getMyTeam(userId: number): Observable<TeamModel[]> {
    const ref = this.db.collection<TeamModel>('teams', (ref) => ref.where('users', 'array-contains', userId));
    return ref.valueChanges().pipe(map(x => x.sort((a, b) => a.elo > b.elo ? a.elo : b.elo)));
  }

  getMatches() {
    return (this.db.collection('matches', ref => ref.orderBy('date', 'asc')).valueChanges());
  }
}
