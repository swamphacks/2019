import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  emailInput: string = '';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  forgotPassword(){
    this.authService.resetPassword(this.emailInput);
  }

}
