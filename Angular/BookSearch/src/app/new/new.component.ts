import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: '<h1>{{title}}</h1>',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
     title = 'Test Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}
