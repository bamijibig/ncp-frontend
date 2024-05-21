import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { PubconnectionFormComponent } from '../dialog/pubconnection-form/pubconnection-form.component';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { PubconnectionReqPrecomComponent } from '../dialog/pubconnection-req-precom/pubconnection-req-precom.component';
import { PubconnectionCompCommisionComponent } from '../dialog/pubconnection-comp-commision/pubconnection-comp-commision.component';

@Component({
  selector: 'app-allpubconnection',
  templateUrl: './allpubconnection.component.html',
  styleUrls: ['./allpubconnection.component.css']
})
export class AllpubconnectionComponent implements OnInit {
  displayedColumns = [ 'id','community_name','community_name', 'chairman_comm_number', 'date_of_application','status','edit']
  displayedColumnslist = ['id', 'region','hub','name_sponsor','community_name', 'chairman_comm_number','status','edit']
  displayedColumncom = ['region','hub','community_name', 'chairman_comm_number','view','complete']

  // ,'title','dt_capacity','voltage_level','date_of_visit','no_of_customers','estimated_load','estimated_cost','no_of_spans','relieftype','feeder_name','feeder_capacity','fdr_peakload','load_tilldate','source_fdr','powertrans','trans_rating','expected_billing','expected_gain','letter_of_donation_dss','nemsa_test_cert','intro_letter_client','date_of_application']
    
  dataSource= new MatTableDataSource<any>([])
  dataSourcePrecom= new MatTableDataSource<any>([])

  dataSourcecom = new MatTableDataSource<any>([]);
  //  selection = new SelectionModel<any>(true, [])
   is_contractor = User.getUser().is_contractor
   portals:any;
   title = 'eportal';
   
  constructor(
    private api: AppserviceService,
    private dialog: MatDialog
    ) { 
      
      
      
    }

  ngOnInit(): void {
    this.consumepubapi();
    this.getPrecommissioningpubList();
    this.getpubcontractcom();
  }
  consumepubapi() {
    this.api.getContractorpubConnections().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }
  getPrecommissioningpubList() {
    this.api.getpubPrecomList().subscribe(
      (resp) => {
        this.dataSourcePrecom.data = resp;
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getpubcontractcom() {
    this.api.getpubconcommision().subscribe(
      (resp) => {
        this.dataSourcecom.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }

  addNew() {
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'add',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
    });
  }

  view(rowedited: any) {
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'view',
        row: rowedited,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
    });
  }

  edit(rowedited: any) {
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'edit',
        row: rowedited,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
      
    
    });
  }

  request(row: any) {
    const dialogRef = this.dialog.open(PubconnectionReqPrecomComponent, {
      data: {
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
    });
  }
 
  complete(row:any){
    const dialogRef = this.dialog.open(PubconnectionCompCommisionComponent, {
      // width: '100%',
      // height: '90%',
      data: {
        row: row
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumepubapi();
      this.getPrecommissioningpubList();
    })
  

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
