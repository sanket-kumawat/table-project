import { Component, Input, OnInit } from '@angular/core';
import { TableData } from "../../models/table-data.model";
import { TableService } from "../table.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {

  listData: TableData[] = this.tableService.data;
  details: string[] = [];
  activeIndex: number | undefined;

  constructor(public tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.filteredList.subscribe((value) => {
      this.listData = value;
      this.goToDetails([], -1); // clears details side section and remove active row 
    })
  }

  // Assigning value to details variable for passing it to detail component 
  // and index value to activeIndex variable to manage active row class
  goToDetails(itemData: string[], index: number) {
    this.activeIndex = index;
    this.details = itemData;
  }
}
