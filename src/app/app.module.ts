import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenticeshipScreenComponent } from './apprenticeship-screen/apprenticeship-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
