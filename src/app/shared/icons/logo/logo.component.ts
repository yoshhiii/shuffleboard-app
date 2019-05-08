import { Component, Input } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() svgSize;
}
