import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private http:HttpClient) { }

  getUrlParams(urlParams?:HttpParams){
    if(urlParams== undefined||urlParams==null){
      urlParams=new HttpParams();
    }
    return urlParams
  }


  post(url:any,data:any,urlParams?:HttpParams){
    const allurlParams=this.getUrlParams(urlParams);
    return this.http.post(url,data,{
      params:allurlParams
    }).pipe(map((res:Response)=>res));
  }
}
