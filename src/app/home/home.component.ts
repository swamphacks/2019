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
    const sunScene = document.getElementById('sunScene');
    const parallaxInstance5 = new Parallax(sunScene);
    const glareTopScenes = document.getElementById('glareTopScene');
    const parallaxInstance6 = new Parallax(glareTopScenes);
    const glareBotScenes = document.getElementById('glareBotScene');
    const parallaxInstance7 = new Parallax(glareBotScenes);
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
}


