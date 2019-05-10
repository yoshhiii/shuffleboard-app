import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from './logo/logo.component';
import { ScoreboardIconComponent } from './scoreboard/scoreboard.component';
import { LeaderboardIconComponent } from './leaderboard/leaderboard.component';
import { PuckIconComponent } from './puck/puck.component';
import { TeamIconComponent } from './team/team.component';

@NgModule({
  declarations: [
    LogoIconComponent,
    ScoreboardIconComponent,
    LeaderboardIconComponent,
    PuckIconComponent,
    TeamIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoIconComponent,
    ScoreboardIconComponent,
    LeaderboardIconComponent,
    PuckIconComponent,
    TeamIconComponent
  ]
})
export class IconsModule { }
