import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatchModel } from './models/match.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResultsModel } from './models/results.model';

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

  createMatch(match: MatchModel): Observable<MatchModel>  {
    console.log('l');
    return this.http.post<MatchModel>(`${environment.apiUrl}/match`, match);
  }

  completeMatch(matchId: number, result: ResultsModel) {
    return this.http.put(`${environment.apiUrl}/match/${matchId.toString()}`, result);
  }
}
