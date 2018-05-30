import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Injectable()
export class CalendarService {
  data: any = [];
  d: any = [];
  eventAdd: Subject<any> = new Subject();
  constructor() {
    this.data = [{
        id: 1,
        title: 'All Day Event',
        start: '2018-04-09'
        }];

        this.d  = [{
            id: 2,
            title: 'Test',
            start: '2018-04-09'
            }];
      }

      public getEvents(): Observable<any> {
          this.eventAdd.next(this.data);
          return Observable.of(this.data);
      }

      public getd(): Observable<any> {
          this.eventAdd.next(this.d);
          return Observable.of(this.d);
      }

      // public addEvents(e) {
      //
      //   this.eventAdd.next(e);
      // }


}
