import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultModel } from './models/SearchResultModel';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: SearchResultModel[], category: string): any {
    if(category.length == 0) return value;
    return value.sort((a,b)=>a[category]<b[category]?-1:1);
  }

}
