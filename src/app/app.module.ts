import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { AnchoringComponent } from './workDetails/anchoring/anchoring.component';
import { ActingComponent } from './workDetails/acting/acting.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WorkDetailsComponent,
    AnchoringComponent,
    ActingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
