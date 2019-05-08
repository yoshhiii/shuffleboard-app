import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamTab } from './team.tab';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamCreateComponent } from './team-create/team-create.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TeamTab }])
  ],
  declarations: [
    TeamTab,
    TeamListComponent,
    TeamEditComponent,
    TeamCreateComponent
  ],
  entryComponents: [
    TeamCreateComponent
  ]
})
export class Tab4PageModule {}
