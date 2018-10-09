import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/security/auth.service";
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  // userState: Observable<firebase.User>;
  show: boolean = false;

  constructor(private authService:AuthService, private router: Router) {
    // this.userState = authService.getAuth().authState;
    // //if the user is logged in then send them to qr page
    // this.authService.getAuth().auth.onAuthStateChanged((user) => {
    //   if(user && user.emailVerified){
    //     //logged in
    //     router.navigate(['/meals']);
    //   }else if(!user){
    //     //logged out
    //     router.navigate(['/home']);
    //   }
    // });
  }

  ngOnInit(){

  }

    // logout() {
    //     this.authService.logout();
    //     this.toggleCollapse();
    // }
// TODO: move top bar to home page
    toggleCollapse(sectionId){
      this.show = !this.show;
      let el = document.getElementById(sectionId);
      el.scrollIntoView;
      // this.myElement.nativeElement.ownerDocument.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
    }


}
