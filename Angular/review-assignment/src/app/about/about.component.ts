import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { LocalForageService } from '../localForage.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loginData: any;
  firstName: string;
  lastName: string;
  imgUrl: string;
  gender: string;
  data: any;
  age: number;

  constructor(private homeService: HomeService, private lfsService: LocalForageService) {

  }

  ngOnInit() {
      this.lfsService.getItem({key: 'loginData'}).then(
          (loginData) => {
              if(loginData) {
                  this.firstName = loginData.first_name;
                  this.lastName = loginData.last_name;
                  this.gender = loginData.gender;
                  this.imgUrl = loginData.picture.data.url;
                  this.age = loginData.age_range.min;
              }
              else {
                  this.loginData = this.homeService.getData().subscribe((data) => {
                  this.firstName = data.first_name;
                  this.lastName = data.last_name;
                  this.gender = data.gender;
                  this.imgUrl = data.picture.data.url;
                  this.age = data.age_range.min;
                  });
              }
          },
          (error) => {
              console.log(error);
          }
      );
  }
}
