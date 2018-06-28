import { Component , OnInit } from '@angular/core';
import { ApiService } from "../api.service"
import { MyNewInterface } from "../my-new-interface";
import { error } from 'util';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers:[ApiService]
})
export class ExperiencesComponent implements OnInit {
    // title = 'app';

    _postsArray: MyNewInterface[];

    constructor(private apiSerivce: ApiService){}

    getPosts(): void {
      this.apiSerivce.getPosts().
      subscribe(
         resultArray => this._postsArray =
         resultArray,
         error => console.log("Error :: " + error ))
    }
    ngOnInit(): void{
      this.getPosts();

    }

}
