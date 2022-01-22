import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from "mydatepicker";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  myStartDate:any=null;
  myEndDate:any=null
  showCohort=true
  cohorts:any=[]
  name:any
  cohort:any=1;
  startDatePickerOptions: IMyDpOptions = {
    allowSelectionOnlyInCurrentMonth: false,
    dateFormat: 'dd/mm/yyyy',
    disableHeaderButtons: false,
    editableDateField: false,
    height: '32px',
    indicateInvalidDate: true,
    markCurrentDay: true,
    selectionTxtFontSize: '13px',
    showClearDateBtn: true,
    showSelectorArrow: false,
    showWeekNumbers: false,
    width: '120px',
  };

  expireyDatePickerOptions: IMyDpOptions = {
    allowSelectionOnlyInCurrentMonth: false,
    dateFormat: 'dd/mm/yyyy',
    disableHeaderButtons: false,
    editableDateField: false,
    height: '32px',
    indicateInvalidDate: true,
    markCurrentDay: true,
    selectionTxtFontSize: '13px',
    showClearDateBtn: true,
    showSelectorArrow: false,
    showWeekNumbers: false,
    width: '120px',
  };
  displayDateFormat:any;

  constructor() { 
    this.displayDateFormat='dd/mm/yyyy'
  }


  // setDefaultDateFormatOptions() {
  //   let dateFormatArgs1 = { 'dateFormat': this.displayDateFormat, 'isDateFomratConvert': true };
  //   let pastDate = new Date();
  //   pastDate.setDate(pastDate.getDate() - 15);
  //   this.myStartDate = this.dateFilterPipe.transform(pastDate.toISOString(), dateFormatArgs1);
  //   this.myEndDate = this.dateFilterPipe.transform(new Date().toISOString(), dateFormatArgs1);
  //   this.startDatePickerOptions = {
  //     dateFormat: this.displayDateFormat,
  //     alignSelectorRight: true,
  //     allowSelectionOnlyInCurrentMonth: false
  //   };
  //   this.expireyDatePickerOptions = {
  //     dateFormat: this.displayDateFormat,
  //     alignSelectorRight: true,
  //     allowSelectionOnlyInCurrentMonth: false
  //   };
  //   this.checkDateValidation();
  // }

  // checkDateValidation() {
  //   const dateFormatArgs = { 'dateFormat': this.displayDateFormat, 'disableDates': true };
  //   let optionsCopy = JSON.parse(JSON.stringify(this.expireyDatePickerOptions));
  //   let disableDate = this.startDate !== null ?
  //     this.dateFilterPipe.transform(this.startDate, dateFormatArgs) : null;
  //   if (disableDate !== null) {
  //     optionsCopy.disableUntil = disableDate;
  //   } else {
  //     optionsCopy.disableUntil = { year: 0, month: 0, day: 0 };
  //   }
  //   this.expireyDatePickerOptions = optionsCopy;

  //   let optionsCopy1 = JSON.parse(JSON.stringify(this.startDatePickerOptions));
  //   let disableDate1 = this.endDate !== null ?
  //     this.dateFilterPipe.transform(this.endDate, dateFormatArgs) : null;
  //   if (disableDate1 !== null) {
  //     optionsCopy1.disableSince = disableDate1;
  //   } else {
  //     optionsCopy1.disableSince = { year: 0, month: 0, day: 0 };
  //   }
  //   this.startDatePickerOptions = optionsCopy1;
  // }

  ngOnInit() {
    
  }

  addCohort(){
    this.cohort=this.cohort+1;

    this.cohorts.push({cohortName:null,number:this.cohort})
  }

  createTour(){
    debugger
    console.log(this.cohorts)
  }

}
