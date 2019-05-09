import { Component, OnInit } from '@angular/core';
import { ScoresModel } from './models/scores.model';
import { ScoreboxComponent } from './scorebox/scorebox.component';

@Component({
  selector: 'app-score-tab',
  templateUrl: 'score.tab.html',
  styleUrls: ['score.tab.scss']
})
export class ScoreTab implements OnInit {
  constructor() { }
  scores: ScoresModel[];

  ngOnInit() {
    this.scores = [
      {
        scores: [
          { score: 0, team: 'test 1' },
          { score: 0, team: 'test 2' }
        ],
        final: false,
        schedule: new Date()
      },
      {
        scores: [
          { score: 4, team: 'test 3', winner: true },
          { score: 0, team: 'test 4' }
        ],
        final: true,
        schedule: new Date()
      },
      {
        scores: [
          { score: 15, team: 'ricky biscuits' },
          { score: 21, team: 'cheese shiners', winner: true }
        ],
        final: true,
        schedule: new Date()
      }
    ];
  }
}
