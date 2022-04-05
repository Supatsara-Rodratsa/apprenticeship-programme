import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenticeshipScreenComponent } from './apprenticeship-screen/apprenticeship-screen.component';
import { SharedModule } from './shared/shared.module';
import { FirstSectionComponent } from './apprenticeship-screen/first-section/first-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipScreenComponent,
    FirstSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
