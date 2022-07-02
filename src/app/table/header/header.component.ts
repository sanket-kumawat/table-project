import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableService } from "../table.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchControl = new FormControl();

  constructor(private tableService: TableService) {}

  ngOnInit(): void { }

  // Called when use type somthing in search box
  // used to call userInput function of table service and 
  // input value is passed as param
  onInput() {
    this.tableService.userInput(this.searchControl.value);
  }
}
