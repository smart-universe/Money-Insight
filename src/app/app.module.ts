import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { QuestComponent } from './quest/quest.component';
import { PlanComponent } from './plan/plan.component';
import { AlertMessagesComponent } from './utils/alert-messages/alert-messages.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    Test1Component,
    Test2Component,
    GlobalLayoutComponent,
    MainLayoutComponent,
    QuestComponent,
    PlanComponent,
    AlertMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
