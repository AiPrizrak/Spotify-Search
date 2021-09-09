import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultModel } from '../models/SearchResultModel';

@Pipe({
  name: 'filterByTxtAllProps'
})
export class FilterByTxtAllPropsPipe implements PipeTransform {

  transform(value: SearchResultModel[], filter_string: string): any {
    if(filter_string.length == 0)
      return value;
    return value.filter(({track_name, artists, album})=>
      track_name.includes(filter_string)||album.includes(filter_string)
      ||artists.includes(filter_string)
    )
  }

}
