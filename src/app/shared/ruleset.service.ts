import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RulesetModel } from './models/ruleset.model';

@Injectable({
  providedIn: 'root'
})
export class RulesetService {

  constructor(private http: HttpClient) { }

  getRuleset(rulesetId: number): Observable<RulesetModel> {
    return this.http.get<RulesetModel>(`${environment.apiUrl}/rulesets/${rulesetId}`);
  }

  getRulesets(): Observable<RulesetModel[]> {
    return this.http.get<RulesetModel[]>(`${environment.apiUrl}/rulesets`);
  }

}
