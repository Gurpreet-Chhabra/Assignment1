import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarNgxComponent } from './bar-ngx/bar-ngx.component';
import { BarNg2ChartsComponent } from './bar-ng2-charts/bar-ng2-charts.component';
import { CurvelineNg2ChartsComponent } from './curveline-ng2-charts/curveline-ng2-charts.component';
import { PieNg2ChartsComponent } from './pie-ng2-charts/pie-ng2-charts.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
     NgxChartsModule,
     ChartsModule
  ],
  declarations: [
     BarNgxComponent,
     BarNg2ChartsComponent,
     CurvelineNg2ChartsComponent,
     PieNg2ChartsComponent
  ],
  exports: [ BarNgxComponent,BarNg2ChartsComponent,CurvelineNg2ChartsComponent,PieNg2ChartsComponent]
})
export class ChartModule { }
