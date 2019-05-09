import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatchModel } from './models/match.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<MatchModel[]> {
    return this.http.get<MatchModel[]>(`${environment.apiUrl}/match`);
  }

  getMatch(matchId: number): Observable<MatchModel> {
    return this.http.get<MatchModel>(`${environment.apiUrl}/match/${matchId.toString()}`);
  }

  getMatchesByTeam(teamId: number): Observable<MatchModel[]> {
    const params = new HttpParams().set('teamId', teamId.toString());
    return this.http.get<MatchModel[]>(`${environment.apiUrl}/match`, {params});
  }


}
