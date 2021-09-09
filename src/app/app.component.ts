import { Component } from '@angular/core';
import { RequesterService } from './requester.service';
import { SearchResultsStateService } from './search-results-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'music-search';
  filter_string = '';
  sortBy = 'track_name';
  constructor(private req: RequesterService,
    private _searchRS: SearchResultsStateService
    ){}
  ngOnInit(): void {
    // this.req.getToken()
  }
  onChangeSortBy(new_category: string){
    this.sortBy = new_category;
    console.log(new_category)
  }
  get searchResults(){
    return this._searchRS.results;
  }
}
