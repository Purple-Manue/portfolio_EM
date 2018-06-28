import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-profil',
  templateUrl: './nav-profil.component.html',
  styleUrls: ['./nav-profil.component.css']
})
export class NavProfilComponent implements OnInit {
    navText = 'Quelques mots à mon sujet';

  constructor() { }

  ngOnInit() {
  }

}
