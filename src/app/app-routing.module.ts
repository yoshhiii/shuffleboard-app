import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SigninPage } from './signin/signin.page';
import { ManagematchesPage } from './managematches/managematches.page';

const routes: Routes = [
  { path: '', component: SigninPage },
  { path: '', loadChildren: './tabs/tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'manage_matches', component: ManagematchesPage }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
