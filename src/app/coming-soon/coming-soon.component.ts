import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/security/database.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  animations: [
    // trigger('islandAnimation', [
    //   state('stillBellStillSwing', style({})),
    //   state('stillBellAwaySwing', style({})),
    //   state('stillBellCrossSwing', style({})),
    //
    //   state('leftBellStillSwing', style({})),
    //   state('leftBellAwaySwing', style({})),
    //   state('leftBellCrossSwing', style({})),
    //
    //   state('rightBellStillSwing', style({})),
    //   state('rightBellAwaySwing', style({})),
    //   state('rightBellCrossSwing', style({})),
    //   transition('* <=> *', animate('1000ms')),
    //   // transition('still => left', animate('1000ms ease-out')),
    //   // transition('left => still', animate('1000ms ease-in')),
    //   // transition('still => right', animate('1000ms ease-out')),
    //   // transition('right => still', animate('1000ms ease-in')),
    // ])
  ]
})
export class ComingSoonComponent implements OnInit {
  emailInput: string;
  interestType = 'hacker';

  facebookPath = "../../assets/comingSoonImgs/social-media/facebook.png";
  facebookHoveredPath = "../../assets/comingSoonImgs/social-media/hoverFacebook.png";
  instagramPath = "../../assets/comingSoonImgs/social-media/instagram.png";
  instagramHoveredPath = "../../assets/comingSoonImgs/social-media/hoverInsta.png";
  snapchatPath = "../../assets/comingSoonImgs/social-media/snapchat.png";
  snapchatHoveredPath = "../../assets/comingSoonImgs/social-media/hoverSnap.png";

  facebookSrc = this.facebookPath;
  instagramSrc = this.instagramPath;
  snapchatSrc = this.snapchatPath;

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

  facebookHovered(event) {
    this.facebookSrc = this.facebookHoveredPath;
  }
  facebookHoverOut(event) {
    this.facebookSrc = this.facebookPath;
  }

  instagramHovered(event) {
    this.instagramSrc = this.instagramHoveredPath;
  }
  instagramHoverOut(event) {
    this.instagramSrc = this.instagramPath;
  }

  snapchatHovered(event) {
    this.snapchatSrc = this.snapchatHoveredPath;
  }
  snapchatHoverOut(event) {
    this.snapchatSrc = this.snapchatPath;
  }
}
