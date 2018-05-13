import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/security/auth.service";
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  userState: Observable<firebase.User>;

  constructor(private authService:AuthService, private router: Router) {
    this.userState = authService.getAuth().authState;
    //if the user is logged in then send them to qr page
    this.authService.getAuth().auth.onAuthStateChanged((user) => {
      if(user){
        //logged in
        router.navigate(['qrpage']);
      }else{
        //logged out
        router.navigate(['/']);
      }
    });
  }

  ngOnInit(){

  }

    logout() {
        this.authService.logout();
    }


}
