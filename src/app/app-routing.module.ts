import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularAnimationComponent } from './angular-animation/angular-animation.component';
import { CssAnimationComponent } from './css-animation/css-animation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path:'home', component: HomeComponent, data: {renYi: 'home'}},
  { path:'angular', component: AngularAnimationComponent, data: {renYi: 'angular'}},
  { path:'css', component: CssAnimationComponent, data: {renYi: 'css'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
