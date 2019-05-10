import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUrl}/users/${userId.toString()}`);
  }

  getUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUrl}/users/username/${username}`);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/users`);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.apiUrl}/users`, user);
  }

  updateUser(user: UserModel) {
    return this.http.put<UserModel[]>(`${environment.apiUrl}/users`, user);
  }
}
