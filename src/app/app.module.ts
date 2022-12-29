import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllconnectionComponent } from './connection/allconnection/allconnection.component';
import { ConnectionFormComponent } from './connection/dialog/connection-form/connection-form.component';
import { ConnectionDeleteComponent } from './connection/dialog/connection-delete/connection-delete.component';

import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { ContractorRegComponent } from './registration/contractor-reg/contractor-reg.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContractorDashboardComponent } from './dashboard/contractor-dashboard/contractor-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ContractorLayoutComponent } from './layout/contractor-layout/contractor-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { RegionComponent } from './region/region.component';
import { BusinessHubComponent } from './business-hub/business-hub.component';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { RegionFormDialogComponent } from './region/dialog/region-form-dialog/region-form-dialog.component';
import { RegionDeleteDialogComponent } from './region/dialog/region-delete-dialog/region-delete-dialog.component';
import { HubFormDialogComponent } from './business-hub/dialog/hub-form-dialog/hub-form-dialog.component';
import { HubDeleteDialogComponent } from './business-hub/dialog/hub-delete-dialog/hub-delete-dialog.component';
import { AllContractorFormDialogComponent } from './all-contractors/dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';
import { StaffFormDialogComponent } from './user-manager/dialog/staff-form-dialog/staff-form-dialog.component';
import { ActionDialogComponent } from './all-contractors/dialog/action-dialog/action-dialog.component';
import { StaffconnectionlistComponent } from './connection/staffconnectionlist/staffconnectionlist.component';
import { ConnectionActionComponent } from './connection/dialog/connection-action/connection-action.component';
import { ConnectionEvaluateComponent } from './connection/dialog/connection-evaluate/connection-evaluate.component';
import { ConnectionReqPrecomComponent } from './connection/dialog/connection-req-precom/connection-req-precom.component';
import { ConnectionPrecomTestComponent } from './connection/dialog/connection-precom-test/connection-precom-test.component';
import { ErrorInterceptor } from './error.interceptor';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AllconnectionComponent,
    ConnectionFormComponent,
    ConnectionDeleteComponent,
    ContractorRegComponent,
    ContractorDashboardComponent,
    AdminDashboardComponent,
    ContractorLayoutComponent,
    AdminLayoutComponent,
    UserManagerComponent,
    RegionComponent,
    BusinessHubComponent,
    AllContractorsComponent,
    RegionFormDialogComponent,
    RegionDeleteDialogComponent,
    HubFormDialogComponent,
    HubDeleteDialogComponent,
    AllContractorFormDialogComponent,
    StaffFormDialogComponent,
    ActionDialogComponent,
    StaffconnectionlistComponent,
    ConnectionActionComponent,
    ConnectionEvaluateComponent,
    ConnectionReqPrecomComponent,
    ConnectionPrecomTestComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMenuModule,
    NgxMatFileInputModule

   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
