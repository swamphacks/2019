import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  emailInput: string;
  radioInput = 'volunteer';

  constructor() { }

  ngOnInit() {
  }

  addEmail() {
    console.log(this.radioInput);
  }

}
