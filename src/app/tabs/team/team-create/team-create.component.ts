import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { User } from 'src/app/shared/models/user.model';
import { stringify } from '@angular/compiler/src/util';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss'],
})
export class TeamCreateComponent implements OnInit {
  users: User[];
  name: string;

  constructor(private modalController: ModalController,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  async myDismiss() {
    const team: Team = {
      name: this.name,
      users: []
    };

    this.users.forEach(user => {
      if (user.isChecked) {
        team.users.push(user.id);
      }
    });
    console.log(team);
    this.firebaseService.addTeam(team);

    await this.modalController.dismiss(null);
  }
}
