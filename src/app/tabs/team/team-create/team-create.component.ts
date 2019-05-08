import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss'],
})
export class TeamCreateComponent implements OnInit {

  users: any[];

  constructor(private modalController: ModalController,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  async myDismiss() {
    await this.modalController.dismiss(null);
  }
}
