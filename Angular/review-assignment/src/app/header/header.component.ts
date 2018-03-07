import { Component, OnInit} from '@angular/core';
import { HomeService } from '../home/home.service';
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
  constructor(private homeService: HomeService , private http: Http , private lfsService: LocalForageService , private router: Router) {
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
  }

  logout() {
      this.lfsService.removeItem({key: 'isLoggedIn'});
      this.isLoggedIn = false;
      this.router.navigate(['home']);
  }

}
