import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()

export class HomeService {
    constructor(private http: Http) {

    }
    getData(word , language): Observable<any> {
        var url = "https://glosbe.com/gapi/translate?from=eng&dest=hi&format=json&phrase=you&pretty=true";
        console.log(word);
        console.log(language);
        return this.http.get(url).map(data => data.json());

    }

    // getCityCollection(cityId) : Observable<Collection[]> {
    //       var _url = this.url + 'collections?city_id=' + cityId;
    //       var options = new RequestOptions({
    //          headers: new Headers({
    //          'Accept': 'application/json',
    //           'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
    //          })
    //       });
    //       return this.http.get(_url, options)
    //        .map((resp: Response) => new CollectionAdapter(resp.json()))
    //        .catch(this.handleError);
     // };
}
