import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = '';

  constructor(private authService: AuthService) {
    //check for when the user logs in and get their id
    this.authService.getAuth().auth.onAuthStateChanged((user) => {
      if(user){
        //logged in
        this.value = user.uid;
      }
    });
  }

  ngOnInit() {
  }

}
