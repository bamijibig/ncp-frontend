import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { ConnectionFormComponent } from '../dialog/connection-form/connection-form.component';
// import { ActionDialogComponent } from './dialog/action-dialog/action-dialog.component';
// import { AllContractorFormDialogComponent } from './dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';

@Component({
  selector: 'app-staffconnectionlist',
  templateUrl: './staffconnectionlist.component.html',
  styleUrls: ['./staffconnectionlist.component.css']
})
export class StaffconnectionlistComponent implements OnInit {

//  displayedColumns = ['name', 'address', 'email', 'phone', 'license','status','action']
 
 displayedColumns = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'est_load_of_premises', 'useofpremises','date_of_application', 'view']
  
 displayedColumnsList = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'date_of_application','status', 'view','approve']
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  selection = new SelectionModel<any>(true, [])

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


view(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionFormComponent, {
    width: '100%',
    height: '90%',
    data: {
      action: 'view',
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi()
  })
}

  getMyApprovals() {
    this.api.getMyApprovaList().subscribe(
      (resp) => {
        this.dataSourceApproval.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }


  action(action:any, userid: any){
    // const dialogRef = this.dialog.open(ActionDialogComponent, {
    //   // width: '100%',
    //   // height: '90%',
    //   data: {
    //     action: action,
    //     userid: userid
    //   }
    // });
    // dialogRef.afterClosed().subscribe((result)=>{
    //   this.consumeapi();
    //   this.getMyApprovals();
    // })
  }

}
