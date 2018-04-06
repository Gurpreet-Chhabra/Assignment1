import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-ng2-charts',
  templateUrl: './pie-ng2-charts.component.html',
  styleUrls: ['./pie-ng2-charts.component.css']
})
export class PieNg2ChartsComponent implements OnInit {

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
