import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = '';

  constructor(private authService: AuthService) {
    //this.value = authService.getCurrentUserID();
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
