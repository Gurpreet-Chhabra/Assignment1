import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss']
})
export class SponsersComponent implements OnInit {
  AVATAR_FAT = 'https://bootstrap-themes.github.io/application/assets/img/avatar-fat.jpg';
  AVATAR_MDO = 'https://bootstrap-themes.github.io/application/assets/img/avatar-mdo.png';
  YELLOW_BUILDING_IMG = "https://bootstrap-themes.github.io/application/assets/img/instagram_2.jpg";
  constructor() { }

  ngOnInit() {
  }

}
