import { Injectable } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import {Subject} from 'rxJs/Subject';

@Injectable()
export class TimeOutService {

  startSub: Subject<any> = new Subject<any>();
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  constructor(private idle: Idle, private keepalive: Keepalive , private router: Router , private homeService : HomeService) {
  }

  setTimer() {

        this.idle.setIdle(2);
        this.idle.setTimeout(2);
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        this.idle.onIdleEnd.subscribe(() => {
          this.idleState = 'No longer idle.';
          console.log(this.idleState);
        });

        this.idle.onTimeout.subscribe(() => {
          
          console.log("timeout");
          this.idleState = 'Timed out!';
          this.timedOut = true;
          this.startSub.next("timeout");

        });

        this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        this.reset();
  }
  reset() {

    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
