import { Component, OnInit } from '@angular/core';
import { TimeOutService } from '../timeout/timeout.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service: TimeOutService) {
    this.service.setTimer();
      // console.log(this.service);
   }

  ngOnInit() {
  }

}
