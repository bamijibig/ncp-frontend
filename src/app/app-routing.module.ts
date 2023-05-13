import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { BusinessHubComponent } from './business-hub/business-hub.component';
import { AllconnectionComponent } from './connection/allconnection/allconnection.component';
import { StaffconnectionlistComponent } from './connection/staffconnectionlist/staffconnectionlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { ContractorRegComponent } from './registration/contractor-reg/contractor-reg.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [

  {
    
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    
    path: 'reset-password',
    component: PasswordResetComponent
  },
  {
    
    path: 'settings',
    component: SettingsComponent
  },
  
  {
    
    path: 'allconnection',
    component: AllconnectionComponent
  },
  {
    
    path: 'allconnection/staff',
    component: StaffconnectionlistComponent
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
