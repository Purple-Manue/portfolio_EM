import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  titre = 'EN FORMATION DEVELOPPEMENT LOGICIELS';
  resume0 = 'Emmanuelle MEMBRIVE';
  resume1 = '36 ans';
  resume2 = "À la recherche d'un poste de développement logiciels/web.";
  resume3 = 'Depuis décembre 2017, je suis en formation développement web/logiciels, au centre de formation AFORMAC à Limoges.';
  resume4 = "Après avoir été Chef d'Entreprise d'une Pension canine et féline, durant une dizaine d'années, j'ai souhaité me reconvertir professionnellement et me diriger vers le marché de l'informatique;";
  resume5 = "Dans le but d'en apprendre d'avantage dans le domaine du développement logiciel, et afin d'y évoluer.";
  resume6 = 'Merci pour votre attention & bonne visite.';
    constructor() { }

    ngOnInit() {

    }
}
