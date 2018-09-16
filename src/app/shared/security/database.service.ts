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

  checkDuplicate(email: string) {
    let duplicate = new Promise(function(resolve, reject) {
      this.afDatabase.list('/listserv/').subscribe(((emails) => {
        for (let index in emails) {
          if (emails[index]['email'] === email) {
            resolve(true);
          }
        }
        resolve(false);
      }));
    }.bind(this));
    return duplicate;
  }

  addInterestedUserEmail(email: string) {
    let successful = new Promise(function(resolve, reject) {
      this.checkDuplicate(email).then((isDuplicate) => {
        if (isDuplicate) {
           resolve(false);
        } else {
          this.afDatabase.list('/listserv/').push({'email': email});
        }
        resolve(true);
      });
    }.bind(this));
    return successful;
  }

  getUserEvents(userid: string) {
    return this.afDatabase.list('/users/'+userid+'/events/');
  }

  getServerTime() {
    return firebase.database().ref('/.info/serverTimeOffset').once('value');
  }
}
