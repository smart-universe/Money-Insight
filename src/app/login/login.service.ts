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
}
