import { Component, Input } from '@angular/core';
import { ScoresModel } from '../models/scores.model';

@Component({
  selector: 'app-scorebox',
  templateUrl: './scorebox.component.html',
  styleUrls: ['./scorebox.component.scss'],
})
export class ScoreboxComponent {
  @Input() scores: ScoresModel;
}
