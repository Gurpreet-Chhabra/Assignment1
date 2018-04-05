import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class CalendarService {
  data: any = [];
  constructor() {

  }
  public getEvents(): Observable<any> {
          const dateObj = new Date();
          const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
          this.data = [{
              id: 1,
              title: 'All Day Event',
              start: yearMonth + '-01'
          },
          {
              id: 11,
              title: 'All Day Event',
              start: yearMonth + '-01'
            },
          {
              id: 2,
              title: 'Long Event',
              start: yearMonth + '-07',
              end: yearMonth + '-10'
          },
          {
              id: 3,
              title: 'Repeating Event',
              start: yearMonth + '-09T16:00:00'
          },
          {
              id: 4,
              title: 'Repeating Event',
              start: yearMonth + '-16T16:00:00'
          },
          {
              id: 5,
              title: 'Conference',
              start: yearMonth + '-11',
              end: yearMonth + '-13'
          },
          {
              id: 6,
              title: 'Meeting',
              start: yearMonth + '-12T10:30:00',
              end: yearMonth + '-12T12:30:00'
          },
          {
              id: 7,
              title: 'Lunch',
              start: yearMonth + '-12T12:00:00'
          },
          {
              id: 8,
              title: 'Meeting',
              start: yearMonth + '-12T14:30:00'
          },
          {
              id: 9,
              title: 'Happy Hour',
              start: yearMonth + '-12T17:30:00'
          }

        ];
          return Observable.of(this.data);
      }

      public addEvent(): Observable<any> {
        this.data.push(
          {id: 10, title: "New event", start: "2018-3-03"}
        );
        return Observable.of(this.data);
      }
}
