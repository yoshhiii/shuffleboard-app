import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-icon',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamIconComponent {
  @Input() svgSize;
  @Input() svgColor;
}
