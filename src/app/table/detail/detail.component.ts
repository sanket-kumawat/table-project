import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() detail: string[] = []; // Receiving detail data from data-table component

  constructor() { }

  ngOnInit(): void {
  }

}
