import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { PubconnectionFormComponent } from '../dialog/pubconnection-form/pubconnection-form.component';
import { pubconnectionActionComponent } from '../dialog/pubconnection-action/pubconnection-action.component';
import { PubconnectionEvaluateComponent } from '../dialog/pubconnection-evaluate/pubconnection-evaluate.component';
import { PubconnectionPrecomTestComponent } from '../dialog/pubconnection-precom-test/pubconnection-precom-test.component';

@Component({
  selector: 'app-staffpubconnectlist',
  templateUrl: './staffpubconnectlist.component.html',
  styleUrls: ['./staffpubconnectlist.component.css']
})
export class StaffpubconnectlistComponent implements OnInit {
  displayedColumns = [ 'region','hub','community_name', 'chairman_comm_number', 'chairman_comm_name', 'date_of_application','status', 'view','eval','test']
  // ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'useofpremises','date_of_application', 'status', 'view','eval','test']
  
 displayedColumnsList = [ 'region','hub','community_name', 'chairman_comm_number', 'chairman_comm_name', 'date_of_application','status', 'view','approve', 'decline']
//  ['contractor_name','region','hub', 'company_name', 'connectiontype', 'date_of_application','status', 'view','approve', 'decline']
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  // selection = new SelectionModel<any>(true, [])
  user: any = User.getUser()
  portals:any;
  title = 'eportal';
  constructor(
    private api: AppserviceService,
    private dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.consumepubapi();
    this.getMyApprovalspub();
  }
  consumepubapi() {
    this.api.getAllStaffpubConnections().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);
  
      },
      (error) => { console.error(error); }
    );
  }
  getMyApprovalspub() {
    this.api.getMyConnectionApprovaListpub().subscribe(
      (resp) => {
        this.dataSourceApproval.data = resp;
        console.log(resp);
  
      },
      (error) => { console.error(error); }
    );
  }
  view(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
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
    const dialogRef = this.dialog.open(pubconnectionActionComponent, {
      // width: '100%',
      // height: '90%',
      data: {
        action: 'Approve',
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumepubapi();
      this.getMyApprovalspub();
    })
  }
  decline(rowedited: any){
    const dialogRef = this.dialog.open(pubconnectionActionComponent, {
      // width: '100%',
      // height: '90%',
      data: {
        action: 'Decline',
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumepubapi();
      this.getMyApprovalspub();
    })
  }
  evaluate(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionEvaluateComponent, {
      width: '100%',
      // height: '90%',
      data: {
        action: 'evaluate',
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumepubapi();
      this.getMyApprovalspub();
    })
  }
  submitprecom(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionPrecomTestComponent, {
      width: '100%',
      // height: '90%',
      data: {
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumepubapi();
      this.getMyApprovalspub();
    })
  }
  viewEvaluate(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionEvaluateComponent, {
      width: '100%',
      // height: '90%',
      data: {
        action: 'view',
        row: rowedited
      }
    });
  
  }
  viewTest(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionPrecomTestComponent, {
      width: '100%',
      // height: '90%',
      data: {
        action: 'view',
        row: rowedited
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
