import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  video: any;

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = '';
  acceptanceStatus: string = 'Not Accepted';

  constructor(private authService: AuthService) {
    //this.value = authService.getCurrentUserID();
    //check for when the user logs in and get their id
    this.authService.getAuth().auth.onAuthStateChanged((user) => {
      if(user){
        //logged in
        this.value = user.uid;
      }
    });
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }


  start() {
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }

    initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

}
