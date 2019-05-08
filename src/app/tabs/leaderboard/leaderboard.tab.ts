import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Observable } from 'rxjs';
import { TeamModel } from '../team/team.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-leaderboard-tab',
  templateUrl: 'leaderboard.tab.html',
  styleUrls: ['leaderboard.tab.scss']
})
export class LeaderboardTab implements OnInit {
teams: Observable<TeamModel[]>;
myBestTeam: TeamModel;
myRank: number;
  constructor(private db: FirebaseService) {}

  ngOnInit(): void {
    this.teams = this.db.getTeams();
    this.db.getMyTeam(1).pipe( switchMap( x => {
      if (x.length > 0) {
        this.myBestTeam = x[0];
      }
      return this.db.getTeams();
    })).subscribe(x => {
      this.myRank = x.findIndex(x => x.name === this.myBestTeam.name) + 1;
    });
  }

  expand(team: any) {
    
  }
}
