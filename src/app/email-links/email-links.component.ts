import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-email-links',
  templateUrl: './email-links.component.html',
  styleUrls: ['./email-links.component.css']
})
export class EmailLinksComponent implements OnInit {

  emailInput: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  resendEmail(){
    let currentUser = this.authService.getAuth().auth.currentUser;
    if(currentUser){
      if(!currentUser.emailVerified){
        this.authService.verifyEmail(currentUser).then(() => {
          console.log('successfully send email');
        })
        .catch((error) => console.log('verify email error:', error));
      }else{
        alert('Email already verified');
      }
    }else{
      console.log('no user logged in');
    }
  }

}
