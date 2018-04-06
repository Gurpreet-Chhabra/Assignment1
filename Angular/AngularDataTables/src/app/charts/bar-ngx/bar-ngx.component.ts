import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../data';
@Component({
  selector: 'app-bar-ngx',
  templateUrl: './bar-ngx.component.html',
  styleUrls: ['./bar-ngx.component.css']
})
export class BarNgxComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
  }


}
