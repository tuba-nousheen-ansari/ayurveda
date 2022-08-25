import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Query } from '../model/query';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private _http:HttpClient) {

   }
public querySend(query1:Query){
  let api='https://the-great-ayurveda-api.herokuapp.com/api/query/sendquery'
  return this._http.post<any>(api,query1)
}
  }
