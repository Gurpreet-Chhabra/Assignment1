import { Component, OnInit , ViewChild} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  SUNSET_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_4.jpg';
  SEA_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_5.jpg';
  MOUNTAIN_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_6.jpg';
  ROAD_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_7.jpg';
  BRIDGE_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_8.jpg';
  BUILDING_IMG= 'https://bootstrap-themes.github.io/application/assets/img/instagram_9.jpg';
  CITY_IMG = 'https://bootstrap-themes.github.io/application/assets/img/instagram_10.jpg';
  modalImage: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  enlargeImage(imgUrl , content) {
      this.modalImage = imgUrl;
      this.modalService.open(content);
  }
}
