import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsParticlesComponent } from './ts-particles/ts-particles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    TsParticlesComponent,
    SidebarComponent,
    BioComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
