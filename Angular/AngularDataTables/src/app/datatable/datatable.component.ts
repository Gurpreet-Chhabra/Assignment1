import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  birthdate:number;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private http: Http) { }


  ngOnInit() {
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    // get data by ajax call
    // this.dtOptions = {
    //   ajax: 'assets/data.json',
    //   columns: [{
    //     title: 'ID',
    //     data: 'id'
    //   }, {
    //     title: 'First name',
    //     data: 'firstName'
    //   }, {
    //     title: 'Last name',
    //     data: 'lastName'
    //   }]
    // };


    //get data by http hit
    this.http.get('assets/data.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        console.log(this.persons);
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body.data);
    return body.data || {};
  }
}
