import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularAnimationComponent } from './angular-animation/angular-animation.component';
import { CssAnimationComponent } from './css-animation/css-animation.component';
import { LottieComponent } from './lottie/lottie.component';
import { EarthComponent } from './earth/earth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularAnimationComponent,
    CssAnimationComponent,
    LottieComponent,
    EarthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
