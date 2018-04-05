import { Component, OnInit} from '@angular/core';
import { HomeService } from '../home/home.service';
import { TimeOutService } from '../timeout/timeout.service';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalForageService } from '../localForage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginData: any;
  imgUrl: string;
  isLoggedIn: boolean = false;
  constructor(private homeService: HomeService , private http: Http , private lfsService: LocalForageService , private router: Router , private timeOutService: TimeOutService) {
      this.router.events
      .subscribe((event) => {
          this.lfsService.getItem({key: 'isLoggedIn'}).then(
              (value)=> {
                  if(value) {
                      this.isLoggedIn = true;
                      this.lfsService.getItem({key: 'loginData'}).then(
                      (value)=> {
                          if(value) {
                              this.imgUrl = value.picture.data.url;
                              this.isLoggedIn = true;
                          }
                          else {
                              this.loginData = this.homeService.getData().subscribe((data) => {
                              this.imgUrl = data.picture.data.url;
                              });
                          }
                      },
                      function(error) {
                      });
                  }
              },
              function(error) {
              });
      });
  }

  ngOnInit() {
    this.timeOutService.startSub.subscribe( data => {
      this.logout();
    });
  }

  logout() {
      this.isLoggedIn = false;
      this.lfsService.removeItem({key: 'isLoggedIn'});
      this.router.navigate(['home']);
  }

}
