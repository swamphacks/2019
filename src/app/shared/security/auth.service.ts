import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {AngularFireAuth } from "angularfire2/auth";
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router:Router) {

  }

    getAuth(){
      return this.afAuth;
    }

    login(email, password){
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }


    signUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(['/home']);
    }

}
