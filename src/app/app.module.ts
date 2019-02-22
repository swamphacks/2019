import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { firebaseConfig } from "environments/firebase.config";
import { AngularFireModule } from "angularfire2";
import Parallax from 'parallax-js';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/security/auth.service";
import {DatabaseService} from "./shared/security/database.service";
import {HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { RainComponent } from './coming-soon/rain-component/rain.component';

import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    TopMenuComponent,
    SafeUrlPipe,
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
      HttpModule,
      HttpClientModule,
      HttpClientJsonpModule,
      MatSnackBarModule,
  ],
  providers: [AuthService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
