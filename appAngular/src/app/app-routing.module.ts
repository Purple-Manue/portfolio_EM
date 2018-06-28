import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from "./introduction/introduction.component";
import { ProfilComponent } from "./profil/profil.component";
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from "./footer/footer.component";


const routes: Routes = [
    { path: '', component: IntroductionComponent},
    { path: 'introduction', component: IntroductionComponent},
    { path: 'profil', component: ProfilComponent },
    { path: 'competences', component: CompetencesComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ enableTracing: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
