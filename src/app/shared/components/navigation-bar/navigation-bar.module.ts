import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar.component';
import { MatToolbarModule  } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavigationBarComponent
  ],
  entryComponents: [], 
  providers: [],
})
export class NavigationBarModule { }
