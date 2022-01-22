import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  public data:any=[];
  num:any=0;

  constructor() { }

  ngOnInit(): void {
  }

  clickAdd(){
this.num=this.num+1;
this.data.push({itemName:null,Amount:null,Number:this.num})
  }

}
