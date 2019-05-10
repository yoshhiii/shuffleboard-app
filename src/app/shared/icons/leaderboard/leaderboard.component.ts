import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leaderboard-icon',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardIconComponent {
  @Input() svgSize;
  @Input() svgColor;
}
