import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { LeaderboardService } from 'src/app/shared/leaderboard.service';
import { TeamService } from 'src/app/shared/team.service';
import { TeamRecordModel } from 'src/app/shared/models/team-record.model';
import { TeamModel } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-leaderboard-tab',
  templateUrl: 'leaderboard.tab.html',
  styleUrls: ['leaderboard.tab.scss']
})
export class LeaderboardTab implements OnInit {
teamRankings: {team: TeamModel, ranking: TeamRecordModel}[];
myBestTeam: TeamModel;
myRank: number;
  constructor(private leaderboardService: LeaderboardService, private teamsService: TeamService) {}

  ngOnInit(): void {
    forkJoin([this.teamsService.getTeams(), this.leaderboardService.getTeamRecordByRuleset(1)]).pipe( map(([teams, rankings]) => {
      return teams.map(team => {
        const ranking = rankings.find(x => x.teamId === team.id);
        return{team, ranking};
      }).sort((a, b) => {
        return a.ranking.elo >= b.ranking.elo ? 1 : 0;
      });
    })).subscribe(x => this.teamRankings = x);
  }

  expand(team: any) {
    team['expanded'] = !team['expanded'];
  }

  getMyBestTeam(userId: number): {team:{team: TeamModel, ranking: TeamRecordModel}, rank: number} {
      const teamRank = this.teamRankings.find(x => x.team.users.find(u => u.id === userId) !== undefined);
      return {
      team: teamRank,
      rank: this.teamRankings.indexOf(teamRank) + 1
    };
  }
}
