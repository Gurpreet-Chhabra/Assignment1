import { Component, OnInit , ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from './calendar.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarsComponent implements OnInit {

  calendarOptions: Options;
 displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.calendarService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
      console.log(this.calendarOptions) ;
    });
  }
  clickButton(model: any) {
    console.log(model);
    this.displayEvent = model;
  }
  eventClick(model: any) {
    console.log("model");
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    console.log(model);
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  addEvent(model: any) {
    // console.log(this.displayEvent);
    console.log(model.date._d);
    this.calendarOptions.events.push(  {id: 10, title: "New event", start: "2018-3-03"});
    // this.calendarService.addEvent().subscribe( data => {
    //
    // });
    console.log(this.calendarOptions);
    }
}
