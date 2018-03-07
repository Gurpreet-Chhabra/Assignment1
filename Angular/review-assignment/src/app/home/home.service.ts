import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class HomeService {
    loginData: Object;
    constructor(private http: Http) {

    }

    setLoginData(data) {
        this.loginData = data;
        console.log(this.loginData);
    }

    getLoginData() {
        return this.loginData;
    }

    getData() : Observable<any>{
        return this.http.get('../assets/json/profile.json').map(data => data.json());
    }
}
