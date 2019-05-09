import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TeamRecordModel } from '../shared/models/team-record.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getTeamRecords(): Observable<TeamRecordModel[]> {
    return this.http.get<TeamRecordModel[]>(`${environment.apiUrl}/team-records`);
  }

  getTeamRecordByRuleset(rulesetId: number): Observable<TeamRecordModel[]> {
    const params = new HttpParams().set('rulesetId', rulesetId.toString());
    return this.http.get<TeamRecordModel[]>(`${environment.apiUrl}/team-records`, {params});
  }

  getTeamRecord(teamId: number, rulesetId: number): Observable<TeamRecordModel> {
    const params = new HttpParams().set('rulesetId', rulesetId.toString());
    return this.http.get<TeamRecordModel>(`${environment.apiUrl}/team-records/${teamId}`, {params});
  }

  /* updateTeamRecord(teamId: number, rulesetId: number) {
    const params = new HttpParams().set('ruleset', rulesetId.toString());
    return this.http.put(`${environment.apiUrl}/team-records/${teamId}`, {params})
  } */
}
