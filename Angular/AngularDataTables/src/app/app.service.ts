import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

class  detail {
  athlete: string;
  age: number;
  constructor(obj) {

    this.athlete = obj.athlete,
    this.age = obj.age

    console.log(this.athlete);
  }
}

class test {
  age: number;
  constructor(obj) {

    this.age = obj.age
  }
}
@Injectable()
export class AppService {

  constructor(private http: Http) {
   }


//Resp.json() is of type any so gets casted in any type we assign
   getData() : Observable<number> {
     var _url = "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json";
     return this.http.get(_url).map(result => <number>result.json().slice(0,10).map(obj => new test(obj)));
   }

}
