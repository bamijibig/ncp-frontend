import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { BusinessHubComponent } from './business-hub/business-hub.component';
import { AllconnectionComponent } from './connection/allconnection/allconnection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { ContractorRegComponent } from './registration/contractor-reg/contractor-reg.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

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
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'hub',
    component: BusinessHubComponent
  },

  {
    path: 'all-contractors',
    component: AllContractorsComponent
  },
  {
    path: 'manage-staff',
    component: UserManagerComponent
  },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
