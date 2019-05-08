import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    LogoComponent,
    ScoreboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ScoreboardComponent
  ]
})
export class IconsModule { }
