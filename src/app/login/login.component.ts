import { Component, OnInit } from '@angular/core';

import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any
  Password:any;
  constructor(private loginservice:LoginService) { }

  ngOnInit() {

  }

  clickLogin(){
    debugger
    let obj:any={
      "userName" :this.userName,
      "password":this.Password
    }
this.loginservice.authenticateUser(obj).subscribe(
  (response)=>{
console.log(response)
  }
)
  }

}
