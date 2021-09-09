import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token = 'BQCzNnBFtwbymJBr37gOvXHRtuCetl-PG1TtsGKa-U6n7QSdHdYdbdAXoVDsiHw1TSNXE3vg4iq4M2YRZe1XMHs2tXpJvpoqy8clPSjz3f-LrrUyQjGG7CiZ43jsT1EHAdUi6Sd5x9wdGPdH4p_PIurlrOmt0vE'

  constructor() { }

getInstance(){
  return new AuthService();  
}

  get token(){
    return this._token;
  }

  set token(new_value: string){
    this._token = new_value;
  }
}
