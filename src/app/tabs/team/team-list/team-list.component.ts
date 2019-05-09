import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamCreateComponent } from '../team-create/team-create.component';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  async openModal() {
    const modal = await this.modalController.create({
      component: TeamCreateComponent,
    });

    return await modal.present();
  }

}
