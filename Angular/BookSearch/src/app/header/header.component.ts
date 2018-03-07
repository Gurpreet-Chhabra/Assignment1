import { Component, OnInit } from '@angular/core';
import {LocalforageService} from '../localforage.service';
import { Router , NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean = false;

    constructor(private lfs: LocalforageService , private router: Router) {
        this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.lfs.getItem({key: 'isLoggedIn'}).then(
                    (value)=> {
                       if(value) {
                           console.log(value);
                           this.isLoggedIn = value;
                       }
                    });
             }
        });
   }

  ngOnInit() {

  }
  logout() {
      this.isLoggedIn = false;
      this.lfs.setItem({key: 'isLoggedIn' , value: false});
  }
}
