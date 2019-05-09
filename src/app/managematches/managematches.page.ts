import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-managematches',
  templateUrl: './managematches.page.html',
  styleUrls: ['./managematches.page.scss'],
})
export class ManagematchesPage implements OnInit {

  teams;
  constructor(private db: FirebaseService) { }

  ngOnInit(): void {
    this.teams = this.db.getTeams();
  }

}
