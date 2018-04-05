import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http} from '@angular/http';

@Injectable()
export class MyGridApplicationService {

  constructor(private http: Http) {

  }
  getWinner(): Observable<any> {
    var _url = "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json";
    return this.http.get(_url).map(data => data.json());
  }
}
