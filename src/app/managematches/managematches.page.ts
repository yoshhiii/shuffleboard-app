import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managematches',
  templateUrl: './managematches.page.html',
  styleUrls: ['./managematches.page.scss'],
})
export class ManagematchesPage implements OnInit {

  teams;
  constructor() { }

  ngOnInit(): void {
    // this.teams = this.db.getTeams();
  }

}
