import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from "angularfire2";
import Parallax from 'parallax-js'

import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./shared/security/auth.service";
import {DatabaseService} from "./shared/security/database.service";
import {HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ProfileComponent } from './profile/profile.component';
import { MealsComponent } from './meals/meals.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailLinksComponent } from './email-links/email-links.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { RainComponent } from './coming-soon/rain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    SafeUrlPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MealsComponent,
    ForgotPasswordComponent,
    EmailLinksComponent,
    ComingSoonComponent,
    RainComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      FormsModule,
      RouterModule.forRoot(routerConfig),
      NgbModule.forRoot(),
      ReactiveFormsModule,
      NgxQRCodeModule,
      HttpModule
  ],
  providers: [AuthService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
