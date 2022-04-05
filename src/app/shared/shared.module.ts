import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationBarModule } from './components/navigation-bar/navigation-bar.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
		NavigationBarModule
  ],
  exports: [
    NavigationBarComponent,
		NavigationBarModule,
		ButtonComponent
  ],
  entryComponents: [], 
  providers: [],
})
export class SharedModule {
	static forRoot(): any[] {
		return [SharedModule];
	}
}
