import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { PubconnectionFormComponent } from '../dialog/pubconnection-form/pubconnection-form.component';
import { pubconnectionActionComponent } from '../dialog/pubconnection-action/pubconnection-action.component';
import { PubconnectionEvaluateComponent } from '../dialog/pubconnection-evaluate/pubconnection-evaluate.component';
import { PubconnectionPrecomTestComponent } from '../dialog/pubconnection-precom-test/pubconnection-precom-test.component';
import * as XLSX from 'xlsx';
import { PubconnectionReqPrecomComponent } from '../dialog/pubconnection-req-precom/pubconnection-req-precom.component';
import { PubconnectionCompCommisionComponent } from '../dialog/pubconnection-comp-commision/pubconnection-comp-commision.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-staffpubconnectlist',
  templateUrl: './staffpubconnectlist.component.html',
  styleUrls: ['./staffpubconnectlist.component.css']
})
export class StaffpubconnectlistComponent implements OnInit,AfterViewInit {
  displayedColumns = [ 'id','region','hub','community_name','status', 'view','eval','test','preqcom','commission']
  // ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'useofpremises','date_of_application', 'status', 'view','eval','test']
  
 displayedColumnsList = [ 'id','region','hub','community_name', 'chairman_comm_number', 'status', 'view','approve', 'decline']
//  ['contractor_name','region','hub', 'company_name', 'connectiontype', 'date_of_application','status', 'view','approve', 'decline']
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  download_data=[]
  // selection = new SelectionModel<any>(true, [])
  user: any = User.getUser()
  portals:any;
  title = 'eportal';
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorApproval') paginatorApproval!: MatPaginator;
  // @ViewChild('paginatorCom') paginatorCom!: MatPaginator;

  constructor(
    private api: AppserviceService,
    private dialog: MatDialog
  ) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceApproval.paginator = this.paginatorApproval;
    // this.dataSourcecom.paginator = this.paginatorCom;
  }
  
  ngOnInit(): void {
    this.consumepubapi();
    this.getMyApprovalspub();
  }
  consumepubapi() {
    this.api.getAllStaffpubConnections().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        this.download_data=resp;
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
  hasData(element: any): boolean {
    // Customize this logic based on your form structure and data presence check
    return (
      element &&
      element.name_sponsor !== null // Add other relevant checks for form fields
      // Add additional conditions as needed for other form fields
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
  hasDataeval(element: any): boolean {
    // Customize this logic based on your form structure and data presence check
    return (
      element &&
      element.eval_usercom !== null // Add other relevant checks for form fields
      // Add additional conditions as needed for other form fields
    );
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
  hasDataprecom(element: any): boolean {
    // Customize this logic based on your form structure and data presence check
    return (
      element &&
      element.precom_peakload !== null && element.precom_dwndrpcon !== null // Add other relevant checks for form fields
      // Add additional conditions as needed for other form fields
    );
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
  // for pre request form
viewPreq(rowedited: any){
  const dialogRef = this.dialog.open(PubconnectionReqPrecomComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'view',
      row: rowedited
    }
  });
}

// for commission
viewCommission(rowedited: any){
  const dialogRef = this.dialog.open(PubconnectionCompCommisionComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'view',
      row: rowedited
    }
  });
}
  downloadExcel(){
    /* generate worksheet */
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.download_data);
  
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      /* save to file */
      XLSX.writeFile(wb, 'publicDss.xlsx');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterApp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceApproval.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSourceApproval.paginator) {
      this.dataSourceApproval.paginator.firstPage();
    }
  }


}
