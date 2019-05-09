import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamCreateComponent } from '../team-create/team-create.component';
import { TeamService } from '../../../shared/team.service';
import { TeamModel } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  teams: TeamModel[];
  userId = localStorage.getItem('userId');

  constructor(
    public modalController: ModalController,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getTeams(this.userId).subscribe(x => this.teams = x);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TeamCreateComponent,
    });

    return await modal.present();
  }

}
