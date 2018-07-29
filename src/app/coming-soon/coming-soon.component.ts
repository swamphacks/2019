import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/security/database.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  emailInput: string;
  radioInput = 'volunteer';

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  addEmail() {
    // TODO: make sure there is correct email format using regex
    if (this.emailInput == '' || !this.validateEmail(this.emailInput)) {
      return;
    }
    switch (this.radioInput) {
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

}
