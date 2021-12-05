import { Component, OnInit } from '@angular/core';

import {LoginService} from './login.service'
import {AppRoutingModule} from '../app-routing.module'
import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any
  Password:any;
  flag=false;
  constructor(private loginservice:LoginService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {

  }

  clickLogin(){
    debugger
    let obj:any={
      "userName" :this.userName,
      "password":this.Password
    }
    this.router.navigate(['mainlayout'], {relativeTo:this.route});
// this.loginservice.authenticateUser(obj).subscribe(
//   (response)=>{
// console.log(response)
//   }
// )
  }

  clickCreateAccount(){
    this.flag=true
    this.router.navigate(['CreateAccountComponent']);
  }

}
