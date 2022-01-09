import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpParams, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private http:HttpClient) { }

  createAuthorizationHeader(){
    let requestHeaders:HttpHeaders=new HttpHeaders();
    requestHeaders=requestHeaders.append('Authorization','Bearer '+ localStorage.getItem('auth_token'))
    return requestHeaders;

  }

  getUrlParams(urlParams?:HttpParams){
    if(urlParams== undefined||urlParams==null){
      urlParams=new HttpParams();
    }
    return urlParams
  }


  post(url:any,data:any,urlParams?:HttpParams){
    const allurlParams=this.getUrlParams(urlParams);
    const requestHeaders=this.createAuthorizationHeader();
    return this.http.post(url,data,{
      params:allurlParams,
      headers:requestHeaders
    }).pipe(map((res:Response)=>res));
  }

  get(url:any,urlParams?:HttpParams){
    const allurlParams=this.getUrlParams(urlParams);
    const requestHeaders=this.createAuthorizationHeader();
    return this.http.get(url,{
      params:allurlParams,
      headers:requestHeaders
    }).pipe(map((res:Response)=>res));
  }
}
