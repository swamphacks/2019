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
    let user = {'acceptance': false, 'events': ''};
    this.afDatabase.list('/users/').update(userid, user);
  }

  addVolunteerSubscriber(email: string) {
    this.afDatabase.list('/subscribedVolunteers/').push({'email': email});
  }

  addSponsorSubscriber(email: string) {
    this.afDatabase.list('/subscribedSponsor/').push({'email': email});
  }

  addHackerSubscriber(email: string) {
    this.afDatabase.list('/subscribedHacker/').push({'email': email});
  }

  getUserEvents(userid: string) {
    return this.afDatabase.list('/users/'+userid+'/events/');
  }
}
