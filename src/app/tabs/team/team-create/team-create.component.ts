import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserModel } from 'src/app/shared/models/user.model';
import { TeamModel } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss'],
})
export class TeamCreateComponent implements OnInit {
  users: UserModel[];
  name: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // this.firebaseService.getUsers().subscribe(data => {
    //   this.users = data;
    // });
  }

  async myDismiss() {
    // const team: TeamModel = {
    //   name: this.name,
    //   users: []
    // };

    // this.users.forEach(user => {
    //   if (user.isChecked) {
    //     team.users.push(user.id);
    //   }
    // });
    // console.log(team);
    // this.firebaseService.addTeam(team);

    await this.modalController.dismiss(null);
  }
}
