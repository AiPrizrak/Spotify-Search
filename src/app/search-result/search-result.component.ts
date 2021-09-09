import { Component, Input, OnInit } from '@angular/core';
import { SearchResultModel } from '../models/SearchResultModel';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  @Input() data: SearchResultModel;
  constructor() { }

  ngOnInit() {
    
  }

}
