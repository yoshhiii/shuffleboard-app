import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SigninPage } from './signin/signin.page';

const routes: Routes = [
  { path: 'signin', component: SigninPage, loadChildren: './tabs/tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
