import { Component } from '@angular/core';

@Component({
  selector: 'app-agi-grid',
  templateUrl: './agi-grid.component.html',
  styleUrls: ['./agi-grid.component.css']
})
export class AgiGridComponent  {

  constructor() {}
  private params: any;

    agInit(params: any): void {
        this.params = params;
    }

}
