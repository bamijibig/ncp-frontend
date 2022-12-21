import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { ConnectionActionComponent } from '../dialog/connection-action/connection-action.component';
import { ConnectionEvaluateComponent } from '../dialog/connection-evaluate/connection-evaluate.component';
import { ConnectionFormComponent } from '../dialog/connection-form/connection-form.component';
import { ConnectionPrecomTestComponent } from '../dialog/connection-precom-test/connection-precom-test.component';
// import { ActionDialogComponent } from './dialog/action-dialog/action-dialog.component';
// import { AllContractorFormDialogComponent } from './dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';

@Component({
  selector: 'app-staffconnectionlist',
  templateUrl: './staffconnectionlist.component.html',
  styleUrls: ['./staffconnectionlist.component.css']
})
export class StaffconnectionlistComponent implements OnInit {

//  displayedColumns = ['name', 'address', 'email', 'phone', 'license','status','action']
 
 displayedColumns = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'useofpremises','date_of_application', 'status', 'view']
  
 displayedColumnsList = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'date_of_application','status', 'view','approve', 'decline']
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  selection = new SelectionModel<any>(true, [])
  user: any = User.getUser()
  portals:any;
  title = 'eportal';
  constructor(
    private api: AppserviceService,
    private dialog: MatDialog) { this.consumeapi();
    }
  ngOnInit(): void {
    this.consumeapi();
    this.getMyApprovals();
}
consumeapi() {
  this.api.getAllStaffConnections().subscribe(
    (resp) => {
      this.dataSource.data = resp;
      console.log(resp);

    },
    (error) => { console.error(error); }
  );
}

getMyApprovals() {
  this.api.getMyConnectionApprovaList().subscribe(
    (resp) => {
      this.dataSourceApproval.data = resp;
      console.log(resp);

    },
    (error) => { console.error(error); }
  );
}


view(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionFormComponent, {
    width: '100%',
    height: '90%',
    data: {
      action: 'view',
      row: rowedited
    }
  });
  // dialogRef.afterClosed().subscribe((result)=>{
  //   this.consumeapi()
  // })
}


approve(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionActionComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'Approve',
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi();
    this.getMyApprovals();
  })
}

decline(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionActionComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'Decline',
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi();
    this.getMyApprovals();
  })
}

evaluate(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionEvaluateComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'evaluate',
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi();
    this.getMyApprovals();
  })
}

submitprecom(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionPrecomTestComponent, {
    width: '100%',
    height: '90%',
    data: {
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi();
    this.getMyApprovals();
  })
}


}
