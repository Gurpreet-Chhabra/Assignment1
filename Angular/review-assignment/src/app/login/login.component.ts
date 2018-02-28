import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { FacebookService , LoginResponse , InitParams } from 'ngx-facebook';
import { LocalForageService } from '../localForage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 email: string;
 password: string;
  constructor(private fb: FacebookService , private router: Router , private homeService: HomeService , private lfsService: LocalForageService) {

  }
  ngOnInit() {
      this.lfsService.getItem({key: 'isLoggedIn'}).then(
          (value)=> {
              if(value) {
                this.router.navigate(['profile']);
              }
          },
          function(error) {
          }
      );
  }

  fbLogin() {
      this.fb.login()
        .then((response: LoginResponse) => {
            this.fb.api('/me','get',{fields:'age_range,first_name,picture,friends,last_name,gender,email,religion'}).then((data)=> {
                this.lfsService.setItem({key: 'loginData' , value: data});
                this.lfsService.setItem({key: 'isLoggedIn' , value: true}).then(()=> {
                    this.router.navigate(['profile']);
                });
            },
        (error) => {
            console.log(error);
        });
        }).catch((error: any) => console.error("error"));
  }

  login() {
      this.lfsService.setItem({key: 'isLoggedIn' , value: true}).then(()=> {
          this.router.navigate(['profile']);
      });
  }
}
