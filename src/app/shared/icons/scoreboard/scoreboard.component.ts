import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard-icon',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardIconComponent {
  @Input() svgSize;
}
