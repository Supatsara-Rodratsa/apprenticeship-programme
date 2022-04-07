import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenticeshipScreenComponent } from './apprenticeship-screen/apprenticeship-screen.component';
import { SharedModule } from './shared/shared.module';
import { FirstSectionComponent } from './apprenticeship-screen/first-section/first-section.component';
import { SecondSectionComponent } from './apprenticeship-screen/second-section/second-section.component';
import { SlidingSectionComponent } from './apprenticeship-screen/sliding-section/sliding-section.component';
import { ToggleSectionComponent } from './apprenticeship-screen/toggle-section/toggle-section.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipScreenComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    SlidingSectionComponent,
    ToggleSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    SlickCarouselModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
