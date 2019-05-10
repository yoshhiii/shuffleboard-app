import { Component, OnInit } from '@angular/core';
import { ScoresModel } from './models/scores.model';
import { ScoreboxComponent } from './scorebox/scorebox.component';
import { MatchService } from 'src/app/shared/match.service';

@Component({
  selector: 'app-score-tab',
  templateUrl: 'score.tab.html',
  styleUrls: ['score.tab.scss']
})
export class ScoreTab implements OnInit {
  constructor(private matchService: MatchService) { }
  scores: ScoresModel[] = [];

  ionViewWillEnter() {
    this.matchService.getMatches().subscribe(x => {
      this.scores = [];
      x.map(m => {
        const score = new ScoresModel();
        score.scores = [{
          team: m.challengerName,
          score: m.challengerScore,
          winner: m.challengerScore > m.oppositionScore
        }, {
          team: m.oppositionName,
          score: m.oppositionScore,
          winner: m.oppositionScore > m.challengerScore
        }];
        score.final = m.challengerScore !== null && m.oppositionScore !== null;
        score.schedule = m.matchDate,
        this.scores.push(score);
      });
    });
  }
}
