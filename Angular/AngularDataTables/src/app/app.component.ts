import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: AppService) {

  }
  getData() {
    this.service.getData().subscribe(data => {
      console.log(data);
    });
  }
}
