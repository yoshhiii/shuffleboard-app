import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IconsModule } from '../shared/icons/icons.module';
import { ManagematchesPage } from './managematches.page';


const routes: Routes = [
  {
    path: 'manage_matches',
    component: ManagematchesPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagematchesPage]
})
export class ManagematchesPageModule {}
