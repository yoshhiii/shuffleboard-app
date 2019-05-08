import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoIconComponent {
  @Input() svgSize;
}
