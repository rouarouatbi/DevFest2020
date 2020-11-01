import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private _url = environment.api_url ;
  constructor(private _http: HttpClient) { }

  askHelp(data){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json')
    return this._http.post(this._url + '/help',data , {
      headers: headers
    });
  }
  
  getBlooods(){
    return this._http.get(this._url+ '/help');
  }

  
  getHospitalNeed(){
    return this._http.get(this._url+ '/blood');
  }
}
