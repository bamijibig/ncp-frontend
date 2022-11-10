import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionLoginComponent } from './connection-login/connection-login.component';
import { AllconnectionComponent } from './connection/allconnection/allconnection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractorRegComponent } from './registration/contractor-reg/contractor-reg.component';

const routes: Routes = [

  {
    
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    
    path: 'allconnection',
    component: AllconnectionComponent
  },
  {
    
    path: 'contractor_reg',
    component: ContractorRegComponent
  },
  {
    
    path: 'login',
    component: ConnectionLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
