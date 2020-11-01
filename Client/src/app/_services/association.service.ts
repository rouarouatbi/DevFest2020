import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private _url = environment.api_url ;
  constructor(private _http: HttpClient) { }
  addBlood(data){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json')
    return this._http.post(this._url + '/api/blood',data , {
      headers: headers
    });
  }
  addBlood2(data){
    return this._http.post(this._url + '/api/blood',data );
  }
  getBlooods(){
    return this._http.get(this._url+ '/blood');
  }

  addHospitalNeed(data){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json')
    return this._http.post(this._url + '/api/need',data , {
      headers: headers
    });
  }
  getHospitalNeed(){
    return this._http.get(this._url+ '/blood');
  }
}
