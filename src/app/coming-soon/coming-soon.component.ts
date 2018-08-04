import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/security/database.service';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  emailInput: string;
  radioInput = 'volunteer';
  eventDate = new Date("Jan 18, 2019 14:00:00").getTime();
  countDownText = '';

  constructor(private databaseService: DatabaseService) {
    // set up count down interval
    let countDownInterval = setInterval(function(){
      let currentTime = new Date().getTime();
      let timeDifference = this.eventDate - currentTime;
      if (timeDifference <= 0) {
        clearInterval(countDownInterval);
        this.countDownText = 'Welcome to the Swamp!';
      }
      let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.countDownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }.bind(this), 1000);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const leftCloudScene = document.getElementById('leftCloudScene');
    const parallaxInstance = new Parallax(leftCloudScene);
    const rightCloudScene = document.getElementById('rightCloudScene');
    const parallaxInstance2 = new Parallax(rightCloudScene);
  }

  addEmail() {
    // TODO: make sure there is correct email format using regex
    if (this.emailInput == '' || !this.validateEmail(this.emailInput)) {
      return;
    }
    switch (this.radioInput) {
      case 'volunteer':
        this.databaseService.addVolunteerSubscriber(this.emailInput);
        break;
      case 'sponsor':
        this.databaseService.addSponsorSubscriber(this.emailInput);
        break;
      case 'hacker':
        this.databaseService.addHackerSubscriber(this.emailInput);
        break;
    }
  }

  validateEmail(email: string) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

}
