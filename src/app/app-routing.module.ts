import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprenticeshipScreenComponent } from './apprenticeship-screen/apprenticeship-screen.component';

const routes: Routes = [
  { 
    path: '',
    component: ApprenticeshipScreenComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
