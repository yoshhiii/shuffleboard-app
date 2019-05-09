import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-managematches',
  templateUrl: './managematches.page.html',
  styleUrls: ['./managematches.page.scss'],
})
export class ManagematchesPage implements OnInit {

  teams;
  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    // this.teams = this.db.getTeams();
  }
  async myDismiss() {

    await this.modalController.dismiss(null);
  }

}
