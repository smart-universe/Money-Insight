import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.css']
})
export class AlertMessagesComponent implements OnInit {
@Input() Message;
@Input() MessageType;
public messageCodes:any={
  "success":"Success",
  "error":"Error"
}
  constructor() { }

  ngOnInit() {
  }

}
