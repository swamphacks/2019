import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  acceptanceStatus: string = 'Not Accepted';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }


}
