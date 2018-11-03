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

  fridayArrowUrl = this.downArrowUrl;
  saturdayArrowUrl = this.downArrowUrl;
  sundayArrowUrl = this.downArrowUrl;

  question1ArrowUrl = this.downArrowUrl;
  question2ArrowUrl = this.downArrowUrl;
  question3ArrowUrl = this.downArrowUrl;
  question4ArrowUrl = this.downArrowUrl;
  question5ArrowUrl = this.downArrowUrl;
  question6ArrowUrl = this.downArrowUrl;
  question7ArrowUrl = this.downArrowUrl;
  question8ArrowUrl = this.downArrowUrl;
  question9ArrowUrl = this.downArrowUrl;
  question10ArrowUrl = this.downArrowUrl;
  question11ArrowUrl = this.downArrowUrl;
  question12ArrowUrl = this.downArrowUrl;
  question13ArrowUrl = this.downArrowUrl;
  question14ArrowUrl = this.downArrowUrl;

  foregroundDesktopUrl = "../../assets/mainpage/foreground.png";
  foregroundMobileUrl = "../../assets/mainpage/mobile/mobile-foreground.png";

  foregroundSrc = this.foregroundDesktopUrl;

  backTreesDesktopUrl = "../../assets/mainpage/islandParts/back.png";
  backTreesMobileUrl = "../../assets/mainpage/mobile/mobile-back.png";

  backTreesSrc = this.backTreesDesktopUrl;

  isMobile = false;

  parallaxInstance1: Parallax;
  parallaxInstance2: Parallax;
  parallaxInstance3: Parallax;
  parallaxInstance4: Parallax;
  parallaxInstance5: Parallax;
  parallaxInstance6: Parallax;
  parallaxInstance7: Parallax;
  parallaxInstance8: Parallax;

  prevWidth: any;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.prevWidth = window.innerWidth;
    this.checkIfMobile();
  }

  ngOnInit() {
    $( document ).ready(function() {
      // add animation to gator
      // $('#gatorTraveler').addClass('movementAnimation');
      // Show the loader
      // $("#animationWindow").removeClass("hide");
      // $("#animationWindow").addClass("showflex");
      setTimeout(function(){
        	// Hide the loader
					$("#animationWindow").removeClass("showflex");
          // $("#animationWindow").addClass("hide");
          $("#animationWindow").addClass("fadeOutAnimation");
        // remove animation after 5 seconds
        // $('#gatorTraveler').removeClass('movementAnimation');
      }, 3000);

      setTimeout(function() {$("#animationWindow").addClass("hide");},3500);
  });
    document.addEventListener('scroll', this.showOrHideNavbar.bind(this));
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  checkIfMobile() {
    if (window.screen.width <= 450 || window.innerWidth <= 400 || window.screen.height <= 450) {
      this.isMobile = true;
      this.backTreesSrc = this.backTreesMobileUrl;
      this.foregroundSrc = this.foregroundMobileUrl;
      // remove fix size class
      $('#backTree').removeClass('backTrees');
      $('#foregroundId').removeClass('foreground');
      // give 100% width
      $('#backTree').addClass('mobileBackTrees');
      $('#foregroundId').addClass('mobileForeground');
      if (window.innerWidth >= window.innerHeight) {
        // landscape
      }
    } else {
      const width = window.innerWidth;
      if (this.prevWidth > width) {
        // site shrunk: make foreground fixed size
        $('#foregroundId').addClass('fixedForeground');
        $('#backTree').addClass('fixedBackTrees');
      } else {
        // site expanded: make foreground max width
        $('#foregroundId').removeClass('fixedForeground');
      }
      this.prevWidth = width;
      this.isMobile = false;
      this.backTreesSrc = this.backTreesDesktopUrl;
      this.foregroundSrc = this.foregroundDesktopUrl;
      // add fix size class
      $('#backTree').addClass('backTrees');
      $('#foregroundId').addClass('foreground');
      // remove 100% width
      $('#backTree').removeClass('mobileBackTrees');
    }
  }

  ngAfterContentInit() {
    const backTreesScene = document.getElementById('backTreesScene');
    this.parallaxInstance1 = new Parallax(backTreesScene);
    const leftIslandScenes = document.getElementById('leftIslandScenes');
    this.parallaxInstance2 = new Parallax(leftIslandScenes);
    const rightIslandScenes = document.getElementById('rightIslandScenes');
    this.parallaxInstance3 = new Parallax(rightIslandScenes);
    const leftIslandFrontScenes = document.getElementById('leftIslandFrontScenes');
    this.parallaxInstance4 = new Parallax(leftIslandFrontScenes);
    const rightIslandFrontScenes = document.getElementById('rightIslandFrontScenes');
    this.parallaxInstance5 = new Parallax(rightIslandFrontScenes);
    const sunScene = document.getElementById('sunScene');
    this.parallaxInstance6 = new Parallax(sunScene);
    const glareTopScenes = document.getElementById('glareTopScene');
    this.parallaxInstance7 = new Parallax(glareTopScenes);
    // const glareBotScenes = document.getElementById('glareBotScene');
    // const parallaxInstance7 = new Parallax(glareBotScenes);
    const headerScene = document.getElementById('headerScene');
    this.parallaxInstance8 = new Parallax(headerScene);
  }

  enableParallax() {
    this.parallaxInstance1.enable();
    this.parallaxInstance2.enable();
    this.parallaxInstance3.enable();
    this.parallaxInstance4.enable();
    this.parallaxInstance5.enable();
    this.parallaxInstance6.enable();
    this.parallaxInstance7.enable();
    this.parallaxInstance8.enable();
  }

  disableParallax() {
    this.parallaxInstance1.disable();
    this.parallaxInstance2.disable();
    this.parallaxInstance3.disable();
    this.parallaxInstance4.disable();
    this.parallaxInstance5.disable();
    this.parallaxInstance6.disable();
    this.parallaxInstance7.disable();
    this.parallaxInstance8.disable();
  }

  showOrHideNavbar() {
    if (window.pageYOffset >= 200) {
      // TODO: maybe add animation later
      // hide scroll bar
      // document.getElementById("navbar").style.display = 'none';
      $('#navbar').removeClass('navbarAnimationIn');
      $('#navbar').addClass('navbarAnimationOut');
      this.disableParallax();
    } else {
      // document.getElementById("navbar").style.display = 'block';
      $('#navbar').removeClass('navbarAnimationOut');
      $('#navbar').addClass('navbarAnimationIn');
      this.enableParallax();
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
        scrollTop: section['offsetTop'] + 200
      }, 800);
    }
  }
  // if false then they are not hidden
  sectionStates = {'friday': false, 'saturday': false, 'sunday': false,
                        'question1': false, 'question2': false, 'question3': false, 'question4': false,
                        'question5': false, 'question6': false, 'question7': false, 'question8': false,
                        'question9': false, 'question10': false, 'question11': false, 'question12': false,
                        'question13': false, 'question14': false};

  toggleSection(section: string) {
    let sectionEle = $('#'+section+'Section');
    if(sectionEle) {
      if (this.sectionStates[section]) {
        // show
        sectionEle.removeClass('hide');
        this.sectionStates[section] = false;
        // show down arrow
        this.updateArrow(section, this.downArrowUrl);
        // adjust size
        $('#' + section + 'ArrowButton').addClass('downArrow');
        $('#' + section + 'ArrowButton').removeClass('rightArrow');
      } else {
        //  hide
        sectionEle.addClass('hide');
        this.sectionStates[section] = true;
        // show right arrow
        this.updateArrow(section, this.rightArrowUrl);
        $('#' + section + 'ArrowButton').addClass('rightArrow');
        $('#' + section + 'ArrowButton').removeClass('downArrow');
      }
    }
  }

  updateArrow(section, arrowUrl) {
    switch(section) {
      case 'friday':
        this.fridayArrowUrl = arrowUrl;
        break;
      case 'saturday':
        this.saturdayArrowUrl = arrowUrl;
        break;
      case 'sunday':
        this.sundayArrowUrl = arrowUrl;
        break;
      case 'question1':
        this.question1ArrowUrl = arrowUrl;
        break;
      case 'question2':
        this.question2ArrowUrl = arrowUrl;
        break;
      case 'question3':
        this.question3ArrowUrl = arrowUrl;
        break;
      case 'question4':
        this.question4ArrowUrl = arrowUrl;
        break;
      case 'question5':
        this.question5ArrowUrl = arrowUrl;
        break;
      case 'question6':
        this.question6ArrowUrl = arrowUrl;
        break;
      case 'question7':
        this.question7ArrowUrl = arrowUrl;
        break;
      case 'question8':
        this.question8ArrowUrl = arrowUrl;
        break;
      case 'question9':
        this.question9ArrowUrl = arrowUrl;
        break;
      case 'question10':
        this.question10ArrowUrl = arrowUrl;
        break;
      case 'question11':
        this.question11ArrowUrl = arrowUrl;
        break;
      case 'question12':
        this.question12ArrowUrl = arrowUrl;
        break;
      case 'question13':
        this.question13ArrowUrl = arrowUrl;
        break;
      case 'question14':
        this.question14ArrowUrl = arrowUrl;
        break;
    }
  }


  // Social Media
  facebookPath = "../../assets/mainpage/icons/facebook.png";
  facebookHoveredPath = "../../assets/comingSoonImgs/social-media/facebookHover.png";
  instagramPath = "../../assets/mainpage/icons/instagram.png";
  instagramHoveredPath = "../../assets/comingSoonImgs/social-media/instagramHover.png";
  twitterPath = "../../assets/mainpage/icons/twitter.png";
  twitterHoveredPath = "../../assets/comingSoonImgs/social-media/twitterHover.png";
  snapchatPath = "../../assets/mainpage/icons/snapchat.png";
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


