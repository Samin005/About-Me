import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsParticlesComponent } from './ts-particles/ts-particles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MajorProjectsComponent } from './major-projects/major-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TsParticlesComponent,
    SidebarComponent,
    BioComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    MajorProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
