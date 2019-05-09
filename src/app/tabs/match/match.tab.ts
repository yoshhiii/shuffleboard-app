import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    // this.teams = this.db.getTeams();
    // this.matches = this.db.getMatches();
  }
}
