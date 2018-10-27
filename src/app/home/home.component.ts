import {tap} from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Parallax from 'parallax-js';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show: boolean = false;
  dashboardURL = 'http://dashboard2019.swamphacks.com/makeaccount.html';
  rightArrowUrl = "../../assets/mainpage/rightArrow.png";
  downArrowUrl = "../../assets/mainpage/downArrow.png";

  fridayArrowUrl = this.rightArrowUrl;
  saturdayArrowUrl = this.rightArrowUrl;
  sundayArrowUrl = this.rightArrowUrl;

  question1ArrowUrl = this.rightArrowUrl;
  question2ArrowUrl = this.rightArrowUrl;
  question3ArrowUrl = this.rightArrowUrl;
  question4ArrowUrl = this.rightArrowUrl;

  constructor(@Inject(DOCUMENT) private document: any) {


  }

  ngOnInit() {
    $( document ).ready(function() {
      // add animation to gator
      // $('#gatorTraveler').addClass('movementAnimation');
      setTimeout(function(){
        // remove animation after 5 seconds
        // $('#gatorTraveler').removeClass('movementAnimation');
      }, 5000);
  });
    document.addEventListener('scroll', this.showOrHideNavbar);
  }

  ngAfterContentInit() {
    const backTreesScene = document.getElementById('backTreesScene');
    const parallaxInstance2 = new Parallax(backTreesScene);
    const leftIslandScenes = document.getElementById('leftIslandScenes');
    const parallaxInstance3 = new Parallax(leftIslandScenes);
    const rightIslandScenes = document.getElementById('rightIslandScenes');
    const parallaxInstance4 = new Parallax(rightIslandScenes);
    const leftIslandFrontScenes = document.getElementById('leftIslandFrontScenes');
    const parallaxInstance9 = new Parallax(leftIslandFrontScenes);
    const rightIslandFrontScenes = document.getElementById('rightIslandFrontScenes');
    const parallaxInstance10 = new Parallax(rightIslandFrontScenes);
    const sunScene = document.getElementById('sunScene');
    const parallaxInstance5 = new Parallax(sunScene);
    const glareTopScenes = document.getElementById('glareTopScene');
    const parallaxInstance6 = new Parallax(glareTopScenes);
    // const glareBotScenes = document.getElementById('glareBotScene');
    // const parallaxInstance7 = new Parallax(glareBotScenes);
    const headerScene = document.getElementById('headerScene');
    const parallaxInstance8 = new Parallax(headerScene);
  }

  showOrHideNavbar() {
    if (window.pageYOffset >= 200) {
      // TODO: maybe add animation later
      // hide scroll bar
      // document.getElementById("navbar").style.display = 'none';
      $('#navbar').removeClass('navbarAnimationIn');
      $('#navbar').addClass('navbarAnimationOut');
    } else {
      // document.getElementById("navbar").style.display = 'block';
      $('#navbar').removeClass('navbarAnimationOut');
      $('#navbar').addClass('navbarAnimationIn');
    }
  }

  apply() {
    console.log('clicked');
    this.document.location.href = this.dashboardURL;
  }

  toggleCollapse(sectionId){
    this.show = !this.show;
    let section = $('#'+sectionId)[0];
    // console.log(section);
    if (section) {
      $('html, body').animate({
        scrollTop: section['offsetTop']
      }, 800);
    }
  }
  // if false then they are not hidden
  dateSectionStates = {'friday': true, 'saturday': true, 'sunday': true,
                        'question1': true, 'question2': true, 'question3': true, 'question4': true};

  toggleSection(section: string) {
    let sectionEle = $('#'+section+'Section');
    if(sectionEle) {
      if (this.dateSectionStates[section]) {
        // show
        sectionEle.removeClass('hide');
        this.dateSectionStates[section] = false;
        // show down arrow
        switch(section) {
          case 'friday':
            this.fridayArrowUrl = this.downArrowUrl;
            break;
          case 'saturday':
            this.saturdayArrowUrl = this.downArrowUrl;
            break;
          case 'sunday':
            this.sundayArrowUrl = this.downArrowUrl;
            break;
          case 'question1':
            this.question1ArrowUrl = this.downArrowUrl;
            break;
          case 'question2':
            this.question2ArrowUrl = this.downArrowUrl;
            break;
          case 'question3':
            this.question3ArrowUrl = this.downArrowUrl;
            break;
          case 'question4':
            this.question4ArrowUrl = this.downArrowUrl;
            break;
        }
        // adjust size
        $('#' + section + 'ArrowButton').addClass('downArrow');
      } else {
        //  hide
        sectionEle.addClass('hide');
        this.dateSectionStates[section] = true;
        // show right arrow
        switch(section) {
          case 'friday':
            this.fridayArrowUrl = this.rightArrowUrl;
            break;
          case 'saturday':
            this.saturdayArrowUrl = this.rightArrowUrl;
            break;
          case 'sunday':
            this.sundayArrowUrl = this.rightArrowUrl;
            break;
          case 'question1':
            this.question1ArrowUrl = this.rightArrowUrl;
            break;
          case 'question2':
            this.question2ArrowUrl = this.rightArrowUrl;
            break;
          case 'question3':
            this.question3ArrowUrl = this.rightArrowUrl;
            break;
          case 'question4':
            this.question4ArrowUrl = this.rightArrowUrl;
            break;
        }
        $('#' + section + 'ArrowButton').removeClass('downArrow');
      }
    }
  }


  // Social Media
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
}


