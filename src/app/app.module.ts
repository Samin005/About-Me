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
import { AwardsComponent } from './awards/awards.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PublicationsComponent } from './publications/publications.component';
import { ReferencesComponent } from './references/references.component';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TsParticlesComponent,
    SidebarComponent,
    BioComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    MajorProjectsComponent,
    AwardsComponent,
    CertificationsComponent,
    PublicationsComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot(environment.google_analytics_id),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
