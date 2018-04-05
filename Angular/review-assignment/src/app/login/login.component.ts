import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { FacebookService , LoginResponse , InitParams } from 'ngx-facebook';
import { LocalForageService } from '../localForage.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

// import { TwitterService } from 'ng2-twitter';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 email: string;
 password: string;
 showEmailErrorMsg:boolean = false;
 showPassErrorMsg:boolean = false;
 result: string;
  constructor(private fb: FacebookService , private router: Router , private homeService: HomeService , private lfsService: LocalForageService , private socialAuthService: AuthService ) {

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

  // googleLogin() {
    // console.log(this.socialAuthService);
    // this.socialAuthService.signIn("google").then(
    //   (userData) => {
    //     console.log("google  sign in data : " , userData);
    //   }
    // );
  // }
  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
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
    }).catch((error: any) => console.error('error'));
  }

  login({value, valid }) {
      this.showEmailErrorMsg = false;
      this.showPassErrorMsg = false;
      if(!valid ) {
          if(!value.emailVal) {
            this.showEmailErrorMsg = true;
             return;
        }
        else {
            if(!value.passwordVal) {
                this.showPassErrorMsg = true;
            }
        }
      }
      this.lfsService.setItem({key: 'isLoggedIn' , value: true}).then(()=> {
        
          this.router.navigate(['profile']);
      });
  }



  getHomeTimeline() {
    // console.log(this.twitter);
  //   this.twitter.get(
  //     'https://api.twitter.com/1.1/statuses/home_timeline.json',
  //     {
  //       count: 5
  //     },
  //     {
  //       consumerKey: '	pWKVuBNKpC2U3b66tRkRuXPxy',
  //       consumerSecret: 'o5kbG66N9hDAYt0DZE6FPHEf400yhy4LI3jS6tYJW5v0WKak7n'
  //     },
  //     {
  //       token: '981390665480392704-Yf1guMaEK87SmB0PPeOAK6IzYIJHQQA',
  //       tokenSecret: '	HHATL8ZqeQbbYZRkOjHLGTVT5jmxBu4OlGJBSrSv7NqrD'
  //     }
  // ).subscribe((res)=>{
  //     this.result = res.json().map(tweet => tweet.text);
  // });
  }
}
