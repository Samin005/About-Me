import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BioComponent} from './bio/bio.component';

const routes: Routes = [
  {path: '', component: BioComponent},
  {path: 'skills', component: BioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
