
import {tap} from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  apply() {
    this.document.location.href = 'http://dashboard2019.swamphacks.com/makeaccount.html';
  }
}
