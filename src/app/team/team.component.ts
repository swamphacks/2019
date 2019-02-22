import {tap} from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import * as Parallax from 'parallax-js';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  show: boolean = false;
  isMobile = false;

  constructor() {
    this.checkIfMobile();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }

  ngOnInit() {

  }

  checkIfMobile() {
    if (window.screen.width <= 450 || window.innerWidth <= 650 || window.screen.height <= 450) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  toggleCollapse(){
    this.show = !this.show;
    if (this.show && this.isMobile) {
      // change background
      $('#navbar').addClass('nav-mobileBackground');
    } else {
      $('#navbar').removeClass('nav-mobileBackground');
    }
  }
}


