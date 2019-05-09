import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TeamModel } from './models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(userId?: string): Observable<TeamModel[]> {
    let params = new HttpParams();
    if (userId) { params = new HttpParams().set('userId', userId); }
    console.log(params);
    return this.http.get<TeamModel[]>(`${environment.apiUrl}/teams`, { params });
  }

  getTeam(teamId: number): Observable<TeamModel> {
    return this.http.get<TeamModel>(`${environment.apiUrl}/teams/${teamId}`);
  }

  createTeam(team: TeamModel) {
    return this.http.post(`${environment.apiUrl}/teams`, team);
  }
}
