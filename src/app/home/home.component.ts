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

  dashboardURL = 'https://dashboard.swamphacks.com/makeaccount.html';
  rightArrowUrl = "../../assets/mainpage/rightArrow.png";
  downArrowUrl = "../../assets/mainpage/downArrow.png";

  timeCapsuleClosedUrl = "../../assets/mainpage/capsules/sealed_in_2018.png";
  timeCapsuleGlowUrl = "../../assets/mainpage/capsules/sealed_in_2018_glow.png";
  timeCapsuleOpenUrl = "../../assets/mainpage/capsules/sealed_in_2018_open.png";

  timeCapsuleSrc = this.timeCapsuleClosedUrl;
  timeCapsuleOpened = false;

  timeCapsule2Src = this.timeCapsuleClosedUrl;
  timeCapsule2Opened = false;

  fridayArrowUrl = this.downArrowUrl;
  saturdayArrowUrl = this.downArrowUrl;
  sundayArrowUrl = this.downArrowUrl;

  question1ArrowUrl = this.rightArrowUrl;
  question2ArrowUrl = this.rightArrowUrl;
  question3ArrowUrl = this.rightArrowUrl;
  question4ArrowUrl = this.rightArrowUrl;
  question5ArrowUrl = this.rightArrowUrl;
  question6ArrowUrl = this.rightArrowUrl;
  question7ArrowUrl = this.rightArrowUrl;
  question8ArrowUrl = this.rightArrowUrl;
  question9ArrowUrl = this.rightArrowUrl;
  question10ArrowUrl = this.rightArrowUrl;
  question11ArrowUrl = this.rightArrowUrl;
  question12ArrowUrl = this.rightArrowUrl;
  question13ArrowUrl = this.rightArrowUrl;
  question14ArrowUrl = this.rightArrowUrl;
  question15ArrowUrl = this.rightArrowUrl;

  mobileBackgroundUrl = "../../assets/mainpage/mobile/phoneBackgroundPNG.png";
  mobileBackgroundLandscapeUrl = "../../assets/mainpage/mobile/landscape.jpg";;
  mobileBackgroundSrc = this.mobileBackgroundUrl;

  foregroundMobileUrl = "../../assets/mainpage/mobile/mobile-foreground.png";
  backTreesMobileUrl = "../../assets/mainpage/mobile/mobile-back.png";

  // day time urls
  dayBackgroundUrl = "../../assets/mainpage/background.png";
  dayWaterUrl = "../../assets/mainpage/islandParts/water.png";
  dayLeftIslandUrl = "../../assets/mainpage/islandParts/leftTwo.png";
  dayRightIslandUrl = "../../assets/mainpage/islandParts/rightTwo.png";
  dayLeftIslandFrontUrl = "../../assets/mainpage/islandParts/leftThree.png";
  dayRightIslandFrontUrl = "../../assets/mainpage/islandParts/rightThree.png";
  daySunUrl = "../../assets/mainpage/islandParts/Sun.png";
  dayGlareUrl = "../../assets/mainpage/islandParts/glares.png";
  dayForegroundDesktopUrl = "../../assets/mainpage/Foreground.png";
  dayBackTreesDesktopUrl = "../../assets/mainpage/islandParts/back.png";
  // noon time urls

  // night time urls

  // site image sources
  backgroundSrc = this.dayBackgroundUrl;
  waterSrc = this.dayWaterUrl;
  leftIslandSrc = this.dayLeftIslandUrl;
  rightIslandSrc = this.dayRightIslandUrl;
  leftIslandFrontSrc = this.dayLeftIslandFrontUrl;
  rightIslandFrontSrc = this.dayRightIslandFrontUrl;
  sunSrc = this.daySunUrl;
  glareSrc = this.dayGlareUrl;
  foregroundSrc = this.dayForegroundDesktopUrl;
  backTreesSrc = this.dayBackTreesDesktopUrl;

  isMobile = false;
  inSafari = false;

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
      var sBrowser, sUsrAg = navigator.userAgent;
      if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        this.inSafari = true;
      }
      // Show the loader
      $("#animationWindow").removeClass("hide");
      $("#animationWindow").addClass("showflex");
      setTimeout(function(){
        	// Hide the loader
					$("#animationWindow").removeClass("showflex");
          // $("#animationWindow").addClass("hide");
          $("#animationWindow").addClass("fadeOutAnimation");
      }, 3000);

      setTimeout(function() {$("#animationWindow").addClass("hide");},3500);
  }.bind(this));
    document.addEventListener('scroll', this.showOrHideNavbar.bind(this));
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  checkIfMobile() {
    if (window.screen.width <= 450 || window.innerWidth <= 650 || window.screen.height <= 450) {
      this.isMobile = true;
      this.mobileBackgroundSrc = this.mobileBackgroundUrl;
      this.backTreesSrc = this.backTreesMobileUrl;
      this.foregroundSrc = this.foregroundMobileUrl;
      // remove fix size class
      $('#backTree').removeClass('backTrees');
      $('#foregroundId').removeClass('foreground');
      // give 100% width
      $('#backTree').addClass('mobileBackTrees');
      $('#foregroundId').addClass('mobileForeground');
      // remove landscape classes
      $('#headerScene').removeClass('headerContainerLandscape');
      $('.scheduleTitle').removeClass('scheduleTitleLandscape');
      $('#applyBtn').removeClass('applyButtonLandscape');
      $('.aboutTitle').removeClass('aboutTitleLandscape');
      $('.linkCol').removeClass('linkColLandscape');
      $('.footerLinks').removeClass('footerLinksLandscape');
      $('.banner').removeClass('bannerLandscape');
      $('#realTruckLogo').removeClass('realTruckLogoLandscape');
      $('.cohostContainer').removeClass('cohostContainerLandscape');
      $('.lakeGator').removeClass('lakeGatorLandscape');
      if (window.innerWidth >= window.innerHeight) {
        // landscape
        this.mobileBackgroundSrc = this.mobileBackgroundLandscapeUrl;
        $('#headerScene').addClass('headerContainerLandscape');
        $('.scheduleTitle').addClass('scheduleTitleLandscape');
        $('#applyBtn').addClass('applyButtonLandscape');
        $('.aboutTitle').addClass('aboutTitleLandscape');
        $('.linkCol').addClass('linkColLandscape');
        $('.footerLinks').addClass('footerLinksLandscape');
        $('.banner').addClass('bannerLandscape');
        $('#realTruckLogo').addClass('realTruckLogoLandscape');
        $('.cohostContainer').addClass('cohostContainerLandscape');
        $('.lakeGator').addClass('lakeGatorLandscape');
      }
    } else {
      const width = window.innerWidth;
      if (this.prevWidth > width) {
        // site shrunk: make foreground fixed size
        if (!this.inSafari) {
          $('#foregroundId').addClass('fixedForeground');
        }
        $('#backTree').addClass('fixedBackTrees');
      } else {
        // site expanded: make foreground max width
        $('#foregroundId').removeClass('fixedForeground');
        $('.scheduleTitle').removeClass('scheduleTitleLandscape');
      }
      this.prevWidth = width;
      this.isMobile = false;
      this.backTreesSrc = this.dayBackTreesDesktopUrl;
      this.foregroundSrc = this.dayForegroundDesktopUrl;
      // add fix size class
      $('#backTree').addClass('backTrees');
      $('#foregroundId').addClass('foreground');
      // remove 100% width
      $('#backTree').removeClass('mobileBackTrees');
      // remove landscape classes
      $('#headerScene').removeClass('headerContainerLandscape');
      $('.scheduleTitle').removeClass('scheduleTitleLandscape');
      $('#applyBtn').removeClass('applyButtonLandscape');
      $('.aboutTitle').removeClass('aboutTitleLandscape');
      $('.linkCol').removeClass('linkColLandscape');
      $('.footerLinks').removeClass('footerLinksLandscape');
      $('.banner').removeClass('bannerLandscape');
      $('#realTruckLogo').removeClass('realTruckLogoLandscape');
      $('.cohostContainer').removeClass('cohostContainerLandscape');
      $('.lakeGator').removeClass('lakeGatorLandscape');
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
    // const gatorScene = document.getElementById('gatorScene');
    // this.parallaxInstance8 = new Parallax(gatorScene);
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
    const aboutOffset = $('#about')[0]['offsetTop'];
    if (window.pageYOffset >= aboutOffset) {
      // show floating button
      $('#floatBtn').addClass('floatingBtnAnimation');
    } else {
      // hide floating button
      $('#floatBtn').removeClass('floatingBtnAnimation');
    }

    if (window.pageYOffset >= 200) {
      // hide scroll bar
      $('#navbar').removeClass('navbarAnimationIn');
      $('#navbar').addClass('navbarAnimationOut');
      this.disableParallax();
    } else {
      $('#navbar').removeClass('navbarAnimationOut');
      $('#navbar').addClass('navbarAnimationIn');
      this.enableParallax();
    }
  }

  apply() {
    this.document.location.href = this.dashboardURL;
  }

  toggleCollapse(sectionId){
    this.show = !this.show;
    let section = $('#'+sectionId)[0];
    if (this.show && this.isMobile) {
      // change background
      $('#navbar').addClass('nav-mobileBackground');
    } else {
      $('#navbar').removeClass('nav-mobileBackground');
    }
    // console.log(section);
    if (section) {
      let offSet = 200;
      if (this.isMobile) {
        offSet = 80;
      }
      $('html, body').animate({
        scrollTop: section['offsetTop'] + offSet
      }, 800);
    }
  }
  // if false then they are not hidden
  sectionStates = {
                    'question1': true, 'question2': true, 'question3': true, 'question4': true,
                    'question5': true, 'question6': true, 'question7': true, 'question8': true,
                    'question9': true, 'question10': true, 'question11': true, 'question12': true,
                    'question13': true, 'question14': true, 'question15': true
                  };

  toggleSection(section: string) {
    let sectionEle = $('#'+section+'Section');
    if(sectionEle) {
      if (this.sectionStates[section]) {
        // show
        sectionEle.slideDown();
        this.sectionStates[section] = false;
        // show down arrow
        this.updateArrow(section, this.downArrowUrl);
        // adjust size
        $('#' + section + 'ArrowButton').addClass('downArrow');
        $('#' + section + 'ArrowButton').removeClass('rightArrow');
      } else {
        // hide
        sectionEle.slideUp();
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
      case 'question15':
        this.question15ArrowUrl = arrowUrl;
        break;
    }
  }

  scrollTop() {
    $('html, body').animate({
      scrollTop: $('#navbar')[0]['offsetTop']
    }, 800);
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

  // Capsule Hover
  capsuleHovered(e) {
    if (!this.timeCapsuleOpened) {
      this.timeCapsuleSrc = this.timeCapsuleGlowUrl;
    }
  }

  capsuleHoverOut(e) {
    if (!this.timeCapsuleOpened) {
      this.timeCapsuleSrc = this.timeCapsuleClosedUrl;
    }
  }

  capsuleClicked() {
    this.timeCapsuleSrc = this.timeCapsuleOpenUrl;
    this.timeCapsuleOpened = true;
    $('#capsule').addClass('timeCapsuleAnimation');
    // $('#capsuleMessage').removeClass("hide");
    setTimeout(function() {
      $('#capsuleMessageContainer').addClass('capsuleMessageAnimation');
    }, 1000);
  }
  capsule2Hovered(e) {
    if (!this.timeCapsule2Opened) {
      this.timeCapsule2Src = this.timeCapsuleGlowUrl;
    }
  }

  capsule2HoverOut(e) {
    if (!this.timeCapsule2Opened) {
      this.timeCapsule2Src = this.timeCapsuleClosedUrl;
    }
  }

  capsule2Clicked() {
    this.timeCapsule2Src = this.timeCapsuleOpenUrl;
    this.timeCapsule2Opened = true;
    $('#capsule2').addClass('timeCapsule2Animation');
    // $('#capsuleMessage').removeClass("hide");
    setTimeout(function() {
      $('#capsuleMessage2Container').addClass('capsuleMessageAnimation');
    }, 1000);
  }
}


