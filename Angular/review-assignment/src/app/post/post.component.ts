import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { LocalForageService } from '../localForage.service';
import {Observable} from 'rxjs/Rx';
import { HomeService } from '../home/home.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  AVATAR_FAT = 'https://bootstrap-themes.github.io/application/assets/img/avatar-fat.jpg';
  AVATAR_MDO = 'https://bootstrap-themes.github.io/application/assets/img/avatar-mdo.png';
  SEA_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_3.jpg';
  newPost =  [];
  imgUrl: string;
  loginData: object;
  constructor(config: NgbPopoverConfig ,private lfsService: LocalForageService, private homeService: HomeService, private http: Http) {
      config.placement = 'right';
      config.triggers = 'hover';
   }

  ngOnInit() {
      this.getNewPost();
      this.lfsService.getItem({key: 'loginData'}).then(
          (value)=> {
              if(value) {
                  this.imgUrl = value.picture.data.url;
              }
              else {
                  this.loginData = this.getData().subscribe((data) => {
                      this.imgUrl = data.picture.data.url;
                  });
              }
          },function(error) {
          }
      );
  }

  getData(): Observable<any> {
        return this.http.get("../assets/json/profile.json").map(data => data.json())
  }

  getNewPost() {
      this.lfsService.getItem({key: 'post'}).then((value) => {
              if(value != null)
              this.getPostTime(value);
      });
  }

  getPostTime(value) {
      this.newPost = value.map((val) => {
          let timeInMilliSec = Date.now() - val.time;
          let seconds = Math.floor(timeInMilliSec / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          let hh,mm,ss;
          if(hours!=0) {
              hh = hours % 24 + " hrs ";
          }
          else {
              hh = '';
          }
          if(minutes != 0) {
              mm = minutes % 60 + " min ";
          }
          else {
               if(seconds == 0) {
                   ss = "just a min ";
               }
               else {
                   ss = seconds + ' sec';
               }
              mm = ss;
          }
          val.time = hh + mm + " ago ";
          return val;
      });
  }
}
