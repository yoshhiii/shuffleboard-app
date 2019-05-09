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
  myBestTeam: {team: {team: TeamModel, ranking: TeamRecordModel}, rank: number};
  myRank: number;
  userId = Number.parseInt(localStorage.getItem('userId'));
  constructor(private leaderboardService: LeaderboardService, private teamsService: TeamService) {}

  ngOnInit(): void {
    forkJoin([this.teamsService.getTeams(), this.leaderboardService.getTeamRecordByRuleset(1)]).pipe( map(([teams, rankings]) => {
      if (teams.length > 0) {
        return teams.map(team => {
          const ranking = rankings.find(x => x.teamId === team.id);
          return{team, ranking};
        }).sort((a, b) => {
          return b.ranking.elo - a.ranking.elo;
        });
      }
    })).subscribe(x => {
      this.teamRankings = x;
      const teamRank = this.teamRankings.find(x => x.team.users.find(u => u.id === this.userId) !== undefined);
      this.myBestTeam = {
      team: teamRank,
      rank: this.teamRankings.indexOf(teamRank) + 1
      };
    });
  }

  checkMyTeams(i: number) {
    return (this.teamRankings[i].team.users.find(x => x.id === this.userId) === undefined);
  }

  expand(team: any) {
    team['expanded'] = !team['expanded'];
  }
}
