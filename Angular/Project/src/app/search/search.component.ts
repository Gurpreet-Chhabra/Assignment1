import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
// let linguee = require('linguee');
  word: string;
  language: string;
  constructor(private service: HomeService) {
      // console.log(translate.getTranslation("hello"));
      // translate.addLangs(['en','fr','cn','hi']);
      //  translate.setDefaultLang('en');
      //  let bLang = translate.getBrowserLang();
      // translate.use(bLang.match(/en|fr|cn|hi/) ? bLang :"en");
      // console.log(translate.getTranslation("hi"));
  }

  ngOnInit() {
      console.log(this.word);
      console.log(this.language);
  }
  getData() {
      this.service.getData(this.word , this.language).subscribe(data => {
          // console.log(data);
      });
      console.log("hello");

  }


}
