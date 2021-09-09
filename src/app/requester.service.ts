import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {
  base_api_url = 'https://accounts.spotify.com/api/';
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  //should be on back end, so app is unusable without additional backend or user identification
  // getToken(){
  //   const body = 'grant_type=client_credentials';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization':`Basic ${environment.id}:${environment.secret}`
  //   })
  //   return this.http.post<string>(`${this.base_api_url}token`, body,{headers})
  //     .subscribe((new_token: string)=> {this.auth = new AuthService(); this.auth.token = new_token});
  // }

  //used documenation sandbox generated token for development
  getSearchResults(search_query){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':`Bearer ${this.auth.token}`
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${search_query}&type=track`,{headers})
  }
}
