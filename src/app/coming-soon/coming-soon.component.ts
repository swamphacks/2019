import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService } from '../shared/security/database.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import * as Parallax from 'parallax-js';
import {MatSnackBar} from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
})

export class ComingSoonComponent implements OnInit {
  emailInput: string;
  EMAIL_SAVED_MSG = 'Email has been added!';
  INCORRECT_EMAIL_MSG = 'Incorrect email format';
  isMobile = false;

  mailChimpEndpoint = 'https://swamphacks.us10.list-manage.com/subscribe/post-json?u=44a52d9dbedc78feec6c91b97&amp;id=3596e8ca10&';

  islandClass = 'island';
  inputClass = 'input-field';
  titleClass = 'title';
  titleMobileClass = 'titleMobile';
  leftCloud1Id = 'leftCloud1';
  leftCloud2Id = 'leftCloud2';
  rightCloud1Id = 'rightCloud1';
  rightCloud2Id = 'rightCloud2';

  facebookPath = "../../assets/comingSoonImgs/social-media/facebook.png";
  facebookHoveredPath = "../../assets/comingSoonImgs/social-media/facebookHover.png";
  instagramPath = "../../assets/comingSoonImgs/social-media/instagram.png";
  instagramHoveredPath = "../../assets/comingSoonImgs/social-media/instagramHover.png";
  twitterPath = "../../assets/comingSoonImgs/social-media/twitter.png";
  twitterHoveredPath = "../../assets/comingSoonImgs/social-media/twitterHover.png";
  snapchatPath = "../../assets/comingSoonImgs/social-media/snapchat.png";
  snapchatHoveredPath = "../../assets/comingSoonImgs/social-media/snapchatHover.png";

  facebookSrc = this.facebookPath;
  instagramSrc = this.instagramPath;
  twitterSrc = this.twitterPath;
  snapchatSrc = this.snapchatPath;

  desktopIslandPath = '../../assets/comingSoonImgs/Island2019.png';
  mobileIslandPath = '../../assets/comingSoonImgs/island(mobile).png';

  islandPath = this.desktopIslandPath;

  constructor(private databaseService: DatabaseService, private snackbar: MatSnackBar, private http: HttpClient) {
    this.checkIfMobile();
  }

  ngOnInit() {
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    const leftCloudScene = document.getElementById('leftCloudScene');
    const parallaxInstance = new Parallax(leftCloudScene);
    const rightCloudScene = document.getElementById('rightCloudScene');
    const parallaxInstance2 = new Parallax(rightCloudScene);
    const islandScene = document.getElementById('islandScene');
    const parallaxInstance3 = new Parallax(islandScene);
    const mainTextScene = document.getElementById('mainTextScene');
    const parallaxInstance4 = new Parallax(mainTextScene);
  }

  checkIfMobile() {
    // console.log(window);
    if (window.screen.width <= 450 || window.innerWidth <= 400 || window.screen.height <= 450) {
      this.isMobile = true;
      this.islandClass = 'islandMobile';
      this.inputClass = 'input-fieldMobile';
      this.titleClass = 'disappear';
      this.titleMobileClass = 'titleMobile';
      this.leftCloud1Id = 'disappear';
      this.leftCloud2Id = 'disappear';
      this.rightCloud1Id = 'disappear';
      this.rightCloud2Id = 'rightCloud2Mobile';
      if (window.innerWidth >= window.innerHeight) {
        this.titleMobileClass = 'titleMobileLandscape';
        this.islandClass = 'islandMobileLandscape';
        this.rightCloud2Id = 'disappear';
      }
      // this.islandPath = this.mobileIslandPath;
    } else {
      this.isMobile = false;
      this.islandClass = 'island';
      this.inputClass = 'input-field';
      this.titleClass = 'title';
      this.titleMobileClass = 'disappear';
      this.leftCloud1Id = 'leftCloud1';
      this.leftCloud2Id = 'leftCloud2';
      this.rightCloud1Id = 'rightCloud1';
      this.rightCloud2Id = 'rightCloud2';
      // this.islandPath = this.desktopIslandPath;
    }
  }

  addEmail() {
    if (this.emailInput == '') {
      return;
    }

    if (!this.validateEmail(this.emailInput)) {
      // Notify user of what went wrong
      this.snackbar.open(this.INCORRECT_EMAIL_MSG, 'OK', {
        duration: 5000,
        panelClass: ['snackbarColor']
      });

      return;
    }
    //save user email
    this.databaseService.addInterestedUserEmail(this.emailInput).then(function(successful) {
      if (successful) {
        // Show Success message
        this.snackbar.open(this.EMAIL_SAVED_MSG, 'OK', {
          duration: 5000,
          panelClass: ['snackbarColor']
        });
      } else {
        this.snackbar.open('Email already exists', 'OK', {
          duration: 5000,
          panelClass: ['snackbarColor']
        });
      }
    }.bind(this));
    //send email
    this.sendNotificationEmail(this.emailInput);
  }

  sendNotificationEmail(email: string) {
    const params = new HttpParams()
      .set('EMAIL', email)
      .set('b_44a52d9dbedc78feec6c91b97_3596e8ca10', ''); // hidden input name
    const mailChimpUrl = this.mailChimpEndpoint + params.toString();

    // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
      if (response.result && response.result !== 'error') {
      }
      else { 
        //error
      }
    }, error => {
      console.error(error);
      // this.error = 'Sorry, an error occurred.';
    });
  }

  validateEmail(email: string) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    // alert("You have entered an invalid email address!");
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

  twitterHovered(event) {
    this.twitterSrc = this.twitterHoveredPath;
  }
  twitterHoverOut(event) {
    this.twitterSrc = this.twitterPath;
  }

  snapchatHovered(event) {
    this.snapchatSrc = this.snapchatHoveredPath;
  }
  snapchatHoverOut(event) {
    this.snapchatSrc = this.snapchatPath;
  }

  startCountDown() {
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
}
