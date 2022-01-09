import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public data:any=[1,2,3]
  public showQuest=false;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoQuest(){
    this.showQuest=true;
  }

}
