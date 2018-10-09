
import {tap} from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) {


  }

  ngOnInit() {

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
  }

  apply() {
    this.document.location.href = 'http://dashboard2019.swamphacks.com/makeaccount.html';
  }
}
