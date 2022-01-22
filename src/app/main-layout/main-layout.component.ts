import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

  clickLogin(){
    debugger
   
    this.router.navigate(['test2'], {relativeTo:this.route});

  }
  clickQuest(){
    this.router.navigate(['quest'], {relativeTo:this.route});
  }

  clickPlan(){
    this.router.navigate(['plan'], {relativeTo:this.route});
  }

}
