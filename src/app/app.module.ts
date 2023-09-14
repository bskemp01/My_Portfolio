import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './view/components/home/home.component';
import { LoadingComponent } from './view/loading/loading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ToolBarComponent } from './view/tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SinglePageComponent } from './view/single-page/single-page.component';
import { AboutMeComponent } from './view/components/about-me/about-me.component';
import { ExperienceComponent } from './view/components/experience/experience.component';
import { EducationComponent } from './view/components/education/education.component';
import { ProjectsComponent } from './view/components/projects/projects.component';
import { FooterComponent } from './view/footer/footer.component';
import { StepperComponent } from './view/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SkillsComponent } from './view/components/skills/skills.component'

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HomeComponent,
    LoadingComponent,
    ProjectsComponent,
    SinglePageComponent,
    StepperComponent,
    ToolBarComponent,
    SkillsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
