import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import { MyGridApplicationService } from './ag-grid.service';
// import "ag-grid-enterprise";
@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;
    private gridApi;
    private gridColumnApi;
    private groupDefaultExpanded;
    constructor(private service: MyGridApplicationService) {
        this.gridOptions = <GridOptions>{};

        this.gridOptions.columnDefs = [
          {
            headerName: "Athlete",
            field: "athlete",
            width: 150
          },
          {
            headerName: "Age",
            field: "age",
            width: 90
          },
          {
            headerName: "Country",
            field: "country",
            width: 120,
            rowGroupIndex: 0
          },
          {
            headerName: "Group",
            valueGetter: "data.country.charAt(0)",
            width: 120
          },
          {
            headerName: "Year",
            field: "year",
            width: 90
          },
          {
            headerName: "Date",
            field: "date",
            width: 110
          },
          {
            headerName: "Sport",
            field: "sport",
            width: 110
          },
          {
            headerName: "Gold",
            field: "gold",
            width: 100
          },
          {
            headerName: "Silver",
            field: "silver",
            width: 100
          },
          {
            headerName: "Bronze",
            field: "bronze",
            width: 100
          },
          {
            headerName: "Total",
            field: "total",
            width: 100
          }
        ];
       this.groupDefaultExpanded = 1;
    }

    onQuickFilterChanged(filter: string) {
      // console.log(this.gridApi);
    this.gridApi.setQuickFilter(filter);
  }
  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.service.getWinner().subscribe(data => {
      console.log(data);
        params.api.setRowData(data.slice(0,100));
      });
  }

  onRowDragMove($event) {
    console.log($event.overNode.data);
    console.log($event.overIndex);
  }

  onedit($event) {
    console.log($event);
  }
}
