import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-retour',
  templateUrl: './retour.component.html',
  styleUrls: ['./retour.component.css']
})
export class RetourComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( document ).ready(function() {
        if (window.matchMedia("(max-width: 641px)").matches) {
            $('#retour').click(function(){
                $('#moitBas').show(1);
                $('#displayComponent').css('height', '50vh');
            });
        } else {
          return false;
        }

    });
  }

  }
