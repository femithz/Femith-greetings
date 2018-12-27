import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminService {

  constructor(private _http: HttpClient) { }
  send(body: any) {
    return this._http.post('http://127.0.0.1:3000/message', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
