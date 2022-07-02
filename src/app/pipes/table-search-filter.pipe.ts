import { Pipe, PipeTransform } from '@angular/core';
import { TableData } from '../models/table-data.model';

@Pipe({
  name: 'tableSearchFilter',
})
export class TableSearchFilterPipe implements PipeTransform {

  // Returns a TableData object array containing objects whose name property
  // include value entered by user
  transform(list: TableData[], value: string): TableData[] {
    return value ? list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())) : list;
  }
}
