  import { Component, OnInit } from '@angular/core';

  import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';
  import {LoginService} from '../login.service'


  @Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css']
  })
  export class CreateAccountComponent implements OnInit {
    loading = false;
    submitted = false;
    firstName:any;
    LastName:any;
    emailId:any;
    password:any;
    username:any
    country:any
    Message:any
    MessageType:any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
    constructor(private router:Router,private route: ActivatedRoute,private loginservice:LoginService)  { }

    ngOnInit() {
      // this.Message="User Created Successfully"
      // this.MessageType="Error"
    }
    clickLogin(){
      
    
      this.router.navigate(['test1'], {relativeTo:this.route});
  // this.loginservice.authenticateUser(obj).subscribe(
  //   (response)=>{
  // console.log(response)
  //   }
  // )
    }

    clickRegister(){
      
      

      this.loginservice.checkUserName(this.username).subscribe(
        (data)=>{
      var res:any=data;
      if(res.exists){
      this.Message="UserName already exists"
      this.MessageType="Error"
        }else{
          let obj:any={
            "username":this.username,
            "password":this.password,
            "emailId":this.emailId,
            "firstName":this.firstName,
            "lastName":this.LastName,
            "country":this.country
          }
          this.loginservice.createUser(obj).subscribe(
            (response)=>{
          console.log(response)
          this.Message="User Created Successfully"
          this.MessageType="Success"
            }
          )
          
        }
      
        }
      
      )
      
    }
    onSubmit(data){
      console.log(data)
      if(data.invalid==true){
        for (let i in data.controls) {
          data.controls[i].markAsTouched()
      }
      }else{
        this.clickRegister();
      }
      
    }
      
      }
