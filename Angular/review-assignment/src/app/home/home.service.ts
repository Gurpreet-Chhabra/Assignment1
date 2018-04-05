import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalForageService } from '../localForage.service';
import { Router } from '@angular/router';


@Injectable()
export class HomeService {
    loginData: Object;
    constructor(private http: Http , private lfsService: LocalForageService , private router: Router) {

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

    getPostFromDb() : Observable<any> {
        return this.http.get('https://stark-stream-81386.herokuapp.com/getPost').map(data => data.json());
    }

    insertPostInDb(post , image) {
      console.log("Inside service");
        let headers = new Headers({
            'Content-Type': 'application/json'
         });
        let options = new RequestOptions({ headers: headers });
        var user = {
          comment: post,
          image: image,
          time: Date.now()
        };

        // var _url = "http://localhost:3000/insertPost";
        var _url = "https://stark-stream-81386.herokuapp.com/insertPost";
        return this.http.post(_url, user, options);
    }

    deletePost(id) {
      var _url = "https://stark-stream-81386.herokuapp.com/deletePost/"+ id;
      return this.http.get(_url).map(data => data.json());
    }

    logout() {
      console.log("Reached here to delete data from local storage");
      this.lfsService.removeItem({key: 'isLoggedIn'});
      this.router.navigate(['home']);
    }

}
