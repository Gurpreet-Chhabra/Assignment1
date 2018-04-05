import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent implements OnInit {

  timer: any;
  var: any = 1;
  constructor() {
    console.log(this.var);
    this.initiateTimer();
    console.log(this.var);
   }

  ngOnInit() {
  }
  initiateTimer() {
    if (this.timer) {
        // clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.var = 10;
    }, 5000);
  }

}
