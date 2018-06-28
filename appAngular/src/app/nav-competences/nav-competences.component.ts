import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-competences',
  templateUrl: './nav-competences.component.html',
  styleUrls: ['./nav-competences.component.css']
})
export class NavCompetencesComponent implements OnInit {
    navText = 'Mes compétences';
  constructor() { }

  ngOnInit() {
  }

}
