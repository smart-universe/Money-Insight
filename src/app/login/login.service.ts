import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpCallService} from '../utils/http-call.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpCallService) { }


  public authenticateUser(data:any){
    let url='localhost:8083/authenticate'
    return this.http.post(url,data)
  }

  public createUser(data:any){
    let url='http://localhost:8083/createUser'
    return this.http.post(url,data)
  }

  public checkUserName(data:any){
    let url='http://localhost:8083/checkUsername?UserName='
    url=url.concat(data)
    // let httpParams = new HttpParams()
    //                     .set('username', data)
                    
    return this.http.get(url)
  }
}
