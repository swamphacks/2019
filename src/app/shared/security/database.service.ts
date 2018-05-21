import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afDatabase: AngularFireDatabase) { }

  addUser(userid: string){
    let user = {'acceptance': false};
    this.afDatabase.list('/Users/').update(userid, user);
    //add a meals section for later to keep track of which meals they have gotten
    let meals = {'breakfast': false};
    this.afDatabase.list('/MealProgress/').update(userid, meals);
  }
}
