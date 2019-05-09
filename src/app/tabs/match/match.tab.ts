import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';

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
  constructor(private db: FirebaseService) {}

  ngOnInit(): void {
    this.teams = this.db.getTeams();
    this.matches = this.db.getMatches();
  }
}
