import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamCreateComponent } from '../team-create/team-create.component';
import { TeamService } from '../../../shared/team.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { LeaderboardService } from 'src/app/shared/leaderboard.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  teams: TeamModel[];
  teams2;
  userId = localStorage.getItem('userId');

  constructor(
    public modalController: ModalController,
    private teamService: TeamService,
    private leaderboardService: LeaderboardService
  ) { }

  ngOnInit() {
    const teamsObs = this.teamService.getTeams(this.userId);
    const rankingsObs = this.leaderboardService.getTeamRecordByRuleset(1);

    forkJoin([teamsObs, rankingsObs])
      .pipe(map(([t, r]) => {
        return t.map(e => {
          return { teamData: e, rankingData: r.filter(rank => rank.teamId === e.id) };
        });
      })).subscribe(x => { this.teams2 = x; console.log(this.teams2); });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TeamCreateComponent,
    });
    modal.onDidDismiss()
      .then(data => this.getTeams());

    return await modal.present();
  }

  getTeams() {
    return this.teamService.getTeams(this.userId).subscribe(x => this.teams = x);
  }

}
