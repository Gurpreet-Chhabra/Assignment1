import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras ,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { LocalforageService } from '../localforage.service';
import { LocalforageconfigService } from '../localforageconfig.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    isLoggedIn = false;
    validDetail: boolean = true;
  constructor(private router: Router , private lfconfig: LocalforageconfigService ,
      private lfs: LocalforageService) {
          this.lfs.getItem({key: 'isLoggedIn'}).then(
              (value) => {
                 if(value) {

                     // router.navigate(['book']);
                 }
              });
      }

  ngOnInit() {

  }

  login() {
      if((this.email == 'admin') && (this.password == 'admin')) {
          this.lfs.setItem({key: 'isLoggedIn' , value: true}).then(()=> {
              this.router.navigate(['book']);
          });
      }
      else {
          this.validDetail = false;
          this.lfs.setItem({key: 'isLoggedIn' , value: false});
      }

  }

}
