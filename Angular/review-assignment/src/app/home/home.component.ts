import { Component, OnInit } from '@angular/core';
import { FacebookService , LoginResponse , InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    initParams: InitParams = {
        appId: '145491112763537',
        xfbml: true,
        version: 'v2.8'
      };

  constructor(private fb: FacebookService) {
      this.fb.init(this.initParams);
    }

  ngOnInit() {
      
  }

}
