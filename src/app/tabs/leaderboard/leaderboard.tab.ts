import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { LeaderboardService } from 'src/app/shared/leaderboard.service';
import { TeamService } from 'src/app/shared/team.service';
import { TeamRecordModel } from 'src/app/shared/models/team-record.model';
import { TeamModel } from 'src/app/shared/models/team.model';
import { RulesetService } from 'src/app/shared/ruleset.service';
import { RulesetModel } from 'src/app/shared/models/ruleset.model';

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
  rulesets: RulesetModel[];
  ruleset: number;
  constructor(
    private leaderboardService: LeaderboardService,
    private teamsService: TeamService,
    private rulesetService: RulesetService,
    private det: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ruleset = 1;
    this.rulesetService.getRulesets().subscribe(x => {
      this.rulesets = x;
      this.det.detectChanges();
    });
    this.getLeaderboards(1);
  }

  checkMyTeams(i: number) {
    return (this.teamRankings[i].team.users.find(x => x.id === this.userId) === undefined);
  }

  expand(team: any) {
    team['expanded'] = !team['expanded'];
  }

  changeRuleset(val: any) {
    this.getLeaderboards(val.detail.value);
  }

  getLeaderboards(val: number) {
    forkJoin([
      this.teamsService.getTeams(),
      this.leaderboardService.getTeamRecordByRuleset(val)
    ]).pipe( map(([teams, rankings]) => {
      if (teams.length > 0) {
        return rankings.map(ranking => {
          const team = teams.find(x => x.id === ranking.teamId);
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
}
