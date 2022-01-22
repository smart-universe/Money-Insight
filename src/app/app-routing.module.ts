import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './login/create-account/create-account.component'
import { LoginComponent } from './login/login.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { QuestComponent } from './quest/quest.component';
import { PlanComponent } from './plan/plan.component'


const routes: Routes = [
 
  {path:'',component:LoginComponent}, 
  { path: 'LoginComponent', component: LoginComponent,outlet:'login' },
  { 
    path: 'CreateAccountComponent', 
    component: CreateAccountComponent,
    children: [
      { path: 'test1', component: Test1Component},
      
    ]
},
  
  { path: 'mainlayout', 
  component: MainLayoutComponent,
children:[
  {path:'test2' ,component: Test2Component},
  {path:'quest' ,component: QuestComponent},
  {path:'plan', component:PlanComponent}
]
},


  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
