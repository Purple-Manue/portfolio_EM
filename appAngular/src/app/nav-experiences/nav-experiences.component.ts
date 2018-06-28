import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-experiences',
  templateUrl: './nav-experiences.component.html',
  styleUrls: ['./nav-experiences.component.css']
})
export class NavExperiencesComponent implements OnInit {
      navText = 'Mes expériences et mes formations';
  constructor() { }

  ngOnInit() {
  }

}
