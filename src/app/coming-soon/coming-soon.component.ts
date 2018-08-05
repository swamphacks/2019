import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/security/database.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  animations: [
    trigger('islandAnimation', [
      state('stillBellStillSwing', style({})),
      state('stillBellAwaySwing', style({})),
      state('stillBellCrossSwing', style({})),

      state('leftBellStillSwing', style({})),
      state('leftBellAwaySwing', style({})),
      state('leftBellCrossSwing', style({})),

      state('rightBellStillSwing', style({})),
      state('rightBellAwaySwing', style({})),
      state('rightBellCrossSwing', style({})),
      transition('* <=> *', animate('1000ms')),
      // transition('still => left', animate('1000ms ease-out')),
      // transition('left => still', animate('1000ms ease-in')),
      // transition('still => right', animate('1000ms ease-out')),
      // transition('right => still', animate('1000ms ease-in')),
    ])
  ]
})
export class ComingSoonComponent implements OnInit {
  emailInput: string;
  interestType = 'hacker';
  currentState = 'stillBellStillSwing';
  // eventDate = new Date("Jan 18, 2019 14:00:00").getTime();
  leftBellAwaySwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(leftBellAwaySwings).png';
  leftBellStillSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(leftBellsStillSwings).png';
  leftBellCrossSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(leftBellCrossSwings).png';
  rightBellAwaySwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(rightBellAwaySwings).png';
  rightBellCrossSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(rightBellCrossSwings).png';
  rightBellStillSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(rightBellStillSwings).png';
  stillBellAwaySwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(stillBellAwaySwings).png';
  stillBellCrossSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(stillBellCrossSwings).png';
  stillBellStillSwingsPath = './../assets/comingSoonImgs/Bell&Swings/Island(stillBellsStillSwings).png';

  resourcePaths = {'leftBellStillSwing': this.leftBellStillSwingsPath, 'stillBellStillSwing': this.stillBellStillSwingsPath,
    'rightBellStillSwing': this.rightBellStillSwingsPath, 'stillBellAwaySwing': this.stillBellAwaySwingsPath,
    'stillBellCrossSwing': this.stillBellCrossSwingsPath, 'leftBellAwaySwing': this.leftBellAwaySwingsPath,
    'leftBellCrossSwing': this.leftBellCrossSwingsPath, 'rightBellAwaySwing': this.rightBellAwaySwingsPath,
    'rightBellCrossSwing': this.rightBellCrossSwingsPath};

  islandPath = this.stillBellStillSwingsPath;

  currentBellState = 0;
  bellSequence = ['leftBellStillSwing', 'stillBellStillSwing', 'rightBellStillSwing', 'stillBellStillSwing',
    'leftBellAwaySwing', 'leftBellStillSwing', 'stillBellAwaySwing', 'stillBellStillSwing', 'rightBellStillSwing',
    'rightBellStillSwing', 'stillBellStillSwing', 'leftBellStillSwing', 'stillBellStillSwing', 'rightBellStillSwing',
    'stillBellStillSwing', 'stillBellAwaySwing', 'stillBellStillSwing', 'stillBellCrossSwing', 'stillBellStillSwing'];

  constructor(private databaseService: DatabaseService) {
    // set up count down interval
    // let countDownInterval = setInterval(function(){
    //   let currentTime = new Date().getTime();
    //   let timeDifference = this.eventDate - currentTime;
    //   if (timeDifference <= 0) {
    //     clearInterval(countDownInterval);
    //     this.countDownText = 'Welcome to the Swamp!';
    //   }
    //   let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    //   let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    //   let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    //
    //   this.countDownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // }.bind(this), 1000);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const leftCloudScene = document.getElementById('leftCloudScene');
    const parallaxInstance = new Parallax(leftCloudScene);
    const rightCloudScene = document.getElementById('rightCloudScene');
    const parallaxInstance2 = new Parallax(rightCloudScene);
  }

  animationEnded(event) {
    this.currentState = this.bellSequence[this.currentBellState];
    this.currentBellState += 1;
    if (this.currentBellState >= this.bellSequence.length) {
      this.currentBellState = 0;
    }
    this.islandPath = this.resourcePaths[this.currentState];
  }

  addEmail() {
    if (this.emailInput == '' || !this.validateEmail(this.emailInput)) {
      return;
    }
    switch (this.interestType) {
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
