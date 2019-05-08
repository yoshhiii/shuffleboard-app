import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TeamModel } from '../tabs/team/team.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  addUser(user: Profile) {
    this.db.collection('users').add({
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  }

  getTeams(): Observable<TeamModel[]> {
    return (this.db.collection('teams', ref => ref.orderBy('elo', 'desc')).valueChanges() as Observable<TeamModel[]>);
  }

  getMyTeam(userId: number): Observable<TeamModel[]> {
    const ref = this.db.collection<TeamModel>('teams', (ref) => ref.where('users', 'array-contains', userId));
    return ref.valueChanges().pipe(map(x => x.sort((a, b) => a.elo > b.elo ? a.elo : b.elo)));
  }
}
