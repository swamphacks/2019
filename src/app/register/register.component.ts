import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/security/auth.service";
import {DatabaseService} from "../shared/security/database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  form:FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private dbService: DatabaseService,
              private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required],
          confirm: ['',Validators.required]
      });

  }

    isPasswordMatch() {
        const val = this.form.value;
        return val && val.password && val.password == val.confirm;
    }

    signUp() {
        const val = this.form.value;

        this.authService.signUp(val.email, val.password)
            .then(
                (user) => {
                    this.dbService.addUser(user.uid);//Save user information in database to retrieve later
                    this.router.navigateByUrl('/meals');
                },
                err => alert(err)
            );
    }


}
