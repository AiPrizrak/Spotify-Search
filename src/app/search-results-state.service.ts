import { Injectable } from '@angular/core';
import { SearchResultModel } from './models/SearchResultModel';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsStateService {
  private _results: SearchResultModel[] = [];
  constructor() { }
  addToResults(dataArray: any[]){
    dataArray.map(({name,album,artists, preview_url}: any)=>{
      try{
        this._results.push(new SearchResultModel(name,
          preview_url,
          album.images[1].url,
          album.name, 
          artists.map(({name})=>name)));
      }
      catch(e){console.log(e)}
    })
  }
  clearResults(){
    this._results = [];
  }
  get results(){
    return this._results;
  }
}
