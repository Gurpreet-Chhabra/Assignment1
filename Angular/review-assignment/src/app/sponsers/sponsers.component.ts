import { Component, OnInit } from '@angular/core';
import { AVATAR_FAT, AVATAR_MDO, YELLOW_BUILDING_IMG} from '../constants/constants';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss']
})
export class SponsersComponent implements OnInit {

  AVATAR_FAT = AVATAR_FAT;
  AVATAR_MDO = AVATAR_MDO;
  YELLOW_BUILDING_IMG = YELLOW_BUILDING_IMG;

  constructor() { }

  ngOnInit() {
  }

}
