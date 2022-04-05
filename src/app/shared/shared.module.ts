import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationBarModule } from './components/navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
		NavigationBarModule
  ],
  exports: [
    NavigationBarComponent,
		NavigationBarModule
  ],
  entryComponents: [], 
  providers: [],
})
export class SharedModule {
	static forRoot(): any[] {
		return [SharedModule];
	}
}
