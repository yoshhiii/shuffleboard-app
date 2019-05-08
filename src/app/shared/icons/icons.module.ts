import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from './logo/logo.component';
import { ScoreboardIconComponent } from './scoreboard/scoreboard.component';
import { LeaderboardIconComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    LogoIconComponent,
    ScoreboardIconComponent,
    LeaderboardIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoIconComponent,
    ScoreboardIconComponent,
    LeaderboardIconComponent
  ]
})
export class IconsModule { }
