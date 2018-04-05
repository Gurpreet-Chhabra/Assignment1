import { Component, ElementRef} from '@angular/core';
// import {EventTargetInterruptSource, Idle} from '@ng-idle/core';import {ProgressBarModalComponent} from './progressbar-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  constructor(private idle: Idle, private keepalive: Keepalive , private router: Router , private homeService : HomeService) {

    console.log(idle);
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      console.log("timeout");
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.homeService.logout();
      // this.router.navigate(['/login']);
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');

    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
    // sets the ping interval to 15 seconds
    // keepalive.interval(10);
    // keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.reset();
  }

  reset() {

    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}
