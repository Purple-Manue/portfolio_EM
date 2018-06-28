import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
    sousTitre = 'N\'HÉSITEZ PAS !';
    adresse = '33 Place de l\'Église 87310 Saint-Auvent';
    phone = '+ 33 07 62 09 81 74';
    footerText='Emmanuelle MEMBRIVE';

  constructor() { }

  ngOnInit() {
  }

}
