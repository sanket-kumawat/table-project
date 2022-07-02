import { EventEmitter, Injectable, Output } from '@angular/core';
import { TableData } from '../models/table-data.model';
import { TableSearchFilterPipe } from '../pipes/table-search-filter.pipe';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  @Output() filteredList = new EventEmitter<TableData[]>();

  dummyDataArray: string[] = [
    'Plexzap',
    'Finjob',
    'Xx-holding',
    'Scottech',
    'Funholding',
    'Sonron',
    'Singletechno',
    'Rangreen',
    'J-Texon',
    'Rundofase',
    'Doncon',
  ];

  data: TableData[] = [
    new TableData('', 'Competitive Intelligence', []),
    new TableData('', 'My Vendors', []),
    new TableData('', 'My Customers', []),
    new TableData('Jul 23', 'Test_30_results', [
      'Bundl Technologies Private Limited (Swiggy)',
      'Hector Beverages Private Limited',
      'Puma Sports India Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Infosys Limited',
      'Think & Learn Private Limited',
      'Delhivery Private Limited',
      'Wow Momo Foods Private Limited',
      'Rebel Foods Private Limited (Faasos)',
      'Lenfigkart Technologies Private Limited',
      'ID Fresh Foods (India) Private Limited',
      'Bharathiasha Technologies Private Limited (PrivateCircle)',
      'Gala Precision Engineering Private Limited',
      'Balaji Wafers Private Limited',
      'Sangeetha Mobiles Private Limited',
      'Vodafone Idea Limited',
      'Vakrange Ltd.'
    ]),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
    new TableData('6 April', 'test3', this.dummyDataArray),
  ];

  filteredData: TableData[] = this.data.slice();

  constructor() {}

  // Triggered when user type something in search box and
  // filters data based on input value and name property in TableData object
  // then emit filtered data which is shown in data-table component
  userInput(value: string) {
    const tableSearchFilter = new TableSearchFilterPipe();
    this.filteredData = tableSearchFilter.transform(this.data, value);
    this.filteredList.emit(this.filteredData);
  }
}
