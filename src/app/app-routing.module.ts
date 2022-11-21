import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAnimationComponent } from './angular-animation/angular-animation.component';
import { CssAnimationComponent } from './css-animation/css-animation.component';
import { EarthComponent } from './earth/earth.component';
import { HomeComponent } from './home/home.component';
import { LottieComponent } from './lottie/lottie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path:'home', component: HomeComponent, data: {renYi: 'home'}},
  { path:'angular', component: AngularAnimationComponent, data: {renYi: 'angular'}},
  { path:'css', component: CssAnimationComponent, data: {renYi: 'css'}},
  { path:'lottie', component: LottieComponent, data: {renYi: 'lottie'}},
  { path:'earth', component: EarthComponent, data: {renYi: 'earth'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
