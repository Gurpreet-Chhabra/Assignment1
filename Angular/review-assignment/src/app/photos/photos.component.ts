import { Component, OnInit , ViewChild} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {SEA_IMG, SUNSET_IMG, MOUNTAIN_IMG, ROAD_IMG, BRIDGE_IMG, BUILDING_IMG, CITY_IMG } from '../constants/constants';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
 SUNSET_IMG = SUNSET_IMG;
 CITY_IMG = CITY_IMG;
 BUILDING_IMG = BUILDING_IMG;
 ROAD_IMG = ROAD_IMG;
 BRIDGE_IMG = BRIDGE_IMG;
 MOUNTAIN_IMG = MOUNTAIN_IMG;
 SEA_IMG = SEA_IMG;
 modalImage: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  enlargeImage(imgUrl , content) {
      this.modalImage = imgUrl;
      this.modalService.open(content);
  }
}
