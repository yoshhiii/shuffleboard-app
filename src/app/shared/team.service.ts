import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TeamModel } from './models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(`${environment.apiUrl}/teams`);
  }

  getTeam(teamId: number): Observable<TeamModel> {
    return this.http.get<TeamModel>(`${environment.apiUrl}/teams/${teamId}`);
  }

  createTeam(team: TeamModel) {
    return this.http.post(`${environment.apiUrl}/teams`, team);
  }
}
