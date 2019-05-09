import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManagematchesPage } from 'src/app/managematches/managematches.page';

@Component({
  selector: 'app-match-tab',
  templateUrl: 'match.tab.html',
  styleUrls: ['match.tab.scss']
})
export class MatchTab implements OnInit {

  teams;
  matches;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    // this.teams = this.db.getTeams();
    // this.matches = this.db.getMatches();
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ManagematchesPage,
    });
    return await modal.present();
  }

}
