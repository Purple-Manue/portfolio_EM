import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavProfilComponent } from './nav-profil/nav-profil.component';
import { NavCompetencesComponent } from './nav-competences/nav-competences.component';
import { NavExperiencesComponent } from './nav-experiences/nav-experiences.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { ProfilComponent } from './profil/profil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';
import { RetourComponent } from './retour/retour.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavProfilComponent,
    NavCompetencesComponent,
    NavExperiencesComponent,
    NavFooterComponent,
    ProfilComponent,
    CompetencesComponent,
    ExperiencesComponent,
    FooterComponent,
    RetourComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
