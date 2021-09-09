import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../requester.service';
import { SearchResultsStateService } from '../search-results-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  search_query = '';
  constructor(
    private _req: RequesterService,
    private _search_state: SearchResultsStateService
  ) { }

  ngOnInit() {
  }
  onClickSearch(){
    this._search_state.clearResults();
    console.log(this.search_query)
    this._req.getSearchResults(this.search_query).subscribe((res:any)=>this._search_state.addToResults(res.tracks.items));
  }
}
