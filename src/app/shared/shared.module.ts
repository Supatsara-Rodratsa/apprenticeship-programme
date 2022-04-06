import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationBarModule } from './components/navigation-bar/navigation-bar.module';
import { ButtonComponent } from './components/button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
		NavigationBarModule,
    HttpClientModule
  ],
  exports: [
    NavigationBarComponent,
		NavigationBarModule,
		ButtonComponent,
    CardComponent
  ],
  entryComponents: [], 
  providers: [HttpClient, ApiService],
})
export class SharedModule {
	static forRoot(): any[] {
		return [SharedModule];
	}
}
