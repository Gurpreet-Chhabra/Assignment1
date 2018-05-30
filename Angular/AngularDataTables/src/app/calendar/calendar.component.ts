import { Component, OnInit , ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from './calendar.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarsComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  startDate: any;
  endDate: any;
  title: string;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private calendarService: CalendarService , private modalService: NgbModal,private configs: NgbDatepickerConfig) {
  }

  ngOnInit() {
      this.calendarService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        selectable: true,
        eventLimit: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };

    });
  }
  clickButton(model: any) {
    console.log(this.calendarOptions.events);
    this.calendarService.getEvents().subscribe(data => {
    this.calendarOptions = {
      editable: true,
      selectable: true,
      eventLimit: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data
    };

  });
    // this.displayEvent = model;
    this.ucCalendar.fullCalendar('rerenderEvents');
    console.log(this.displayEvent);
  }
  eventClick(model: any) {

    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay,
        editable: true
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }


  updateEvent(model: any) {
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

  openEventDialog(content) {
    this.modalService.open(content);
  }
  addEvent() {

    let start = moment(new Date(this.startDate.year + "-" + this.startDate.month + "-" + this.startDate.day)).format('YYYY-MM-DD');
    let end = moment(new Date(this.endDate.year + "-" + this.endDate.month + "-" + this.endDate.day)).add(1 , "days").format('YYYY-MM-DD');
     this.calendarService.data.push({ title: this.title,start: start,  end: end });
     console.log(this.calendarOptions.events);
     this.ucCalendar.fullCalendar('renderEvent', { id: 3, title: this.title,start: start,  end: end });
     this.ucCalendar.fullCalendar('rerenderEvents');
     this.startDate = this.endDate = this.title = "";
     // this.calendarService.addEvents({ title: this.title,start: start,  end: end });

    }
}
