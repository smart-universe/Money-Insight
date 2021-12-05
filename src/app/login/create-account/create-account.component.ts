import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute)  { }

  ngOnInit(): void {
  }
  clickLogin(){
    debugger
   
    this.router.navigate(['test1'], {relativeTo:this.route});
// this.loginservice.authenticateUser(obj).subscribe(
//   (response)=>{
// console.log(response)
//   }
// )
  }
}
