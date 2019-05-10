import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from '../../../shared/user.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss'],
})
export class TeamCreateComponent implements OnInit {
  users: UserModel[];
  name: string;
  teammate: UserModel;
  currentUser: UserModel;
  teamFinal: TeamModel = {
    name: "",
    users: []
  };

  constructor(private modalController: ModalController,
    private userService: UserService,
    private teamService: TeamService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => {
      this.users = x;
      const userId = parseInt(localStorage.getItem('userId'));
      this.userService.getUser(userId).subscribe(x => {
        this.currentUser = x;
        this.users.splice(this.users.findIndex(x => x.id === userId), 1);
      });
    });
  }
  grabTeammate(event) {
    const teammateName = event.detail.value;
    this.teammate = this.users.find(x => x.name === teammateName);
  }


  createTeam() {
    if (this.teammate != undefined && this.name != undefined) {
      this.teamFinal.name = this.name;
      this.teamFinal.users.push(this.teammate);
      this.teamFinal.users.push(this.currentUser);
      this.teamService.createTeam(this.teamFinal).subscribe(x => x, (err) => console.log(err), () => { this.myDismiss() });
      // this.myDismiss();
    }
  }

  async myDismiss() {
    await this.modalController.dismiss(null);
  }
}
