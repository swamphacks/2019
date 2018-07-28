import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';
import { DatabaseService } from '../shared/security/database.service';
import {FirebaseListObservable} from "angularfire2/database";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = '';
  events: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, private databaseService: DatabaseService) {
    //check for when the user logs in and get their id
    this.authService.getAuth().auth.onAuthStateChanged((user) => {
      if(user){
        //logged in
        this.value = user.uid;
        this.events = databaseService.getUserEvents(user.uid);
      }
    });
  }

  ngOnInit() {
  }

}
