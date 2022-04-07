import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ToggleComponent
  ],
  entryComponents: [], 
  providers: [],
})
export class ToggleModule { }
