import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-puck-icon',
  templateUrl: './puck.component.html',
  styleUrls: ['./puck.component.scss'],
})
export class PuckIconComponent {
  @Input() svgSize;
  @Input() svgColor;
}
