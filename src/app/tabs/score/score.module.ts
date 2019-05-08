import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreTab } from './score.tab';
import { ScoreboxComponent } from './scorebox/scorebox.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ScoreTab }])
  ],
  declarations: [ScoreTab, ScoreboxComponent]
})
export class Tab1PageModule { }
