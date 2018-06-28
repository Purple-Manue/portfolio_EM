import { Component , OnInit } from '@angular/core';
import * as $ from "jquery";

import { ApiService } from "./api.service";
import { MyNewInterface } from "./my-new-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
    
  ngOnInit(): void{

      $( document ).ready(function() {
          if (window.matchMedia("(max-width: 641px)").matches) {
              $('#moitBas').click(function(){
                  $('#moitBas').hide(1000);
                  $('#displayComponent').css('height', '100vh');
              });
          } else {
              return false;
          }
      });
  }
}
