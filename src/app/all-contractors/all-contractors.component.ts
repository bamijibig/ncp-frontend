
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs/internal/operators/filter';
import { AppserviceService } from 'src/app/appservice.service';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { ActionDialogComponent } from './dialog/action-dialog/action-dialog.component';
import { AllContractorFormDialogComponent } from './dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';
import * as XLSX from 'xlsx';
import { ContractorRegComponent } from '../registration/contractor-reg/contractor-reg.component';
import { ContractorRegDialogComponent } from './dialog/contractor-reg-dialog/contractor-reg-dialog.component';
// import { CdkVirtualForOf } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-all-contractors',
  templateUrl: './all-contractors.component.html',
  styleUrls: ['./all-contractors.component.css']
})
export class AllContractorsComponent implements OnInit {

  // @ViewChild(CdkVirtualForOf)
  // cdkVirtualForOf!: CdkVirtualForOf<any>;
 displayedColumns = ['id','name','license','email','status','approve','decline']
 displayedColumnsList = ['id','name','license','nemsa','coren','status','view','trail']
 displayedcolumnunsubmit = ['id','name', 'email','status']
  dataSourceUnsubmit =new MatTableDataSource<any>([])
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  downloadcont=[]
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
    this.consumeunsubmitapi();
     
}

  consumeapi() {
    this.api.getContractorUsers().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }
  consumeunsubmitapi(){
    this.api.getContractorunsubmitUsers().subscribe(
      (resp) =>{
        this.dataSourceUnsubmit.data=resp;
      }
    )
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
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      // width: '100%',
      // height: '90%',
      data: {
        action: action,
        userid: userid
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi();
      this.getMyApprovals();
    })
  }

  trail(row: any){
    const dialogRef = this.dialog.open(AuditTrailComponent, {
      width: '100%',
      // height: '90%',
      data: {
        row: row
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
  applyFilterNot(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUnsubmit.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUnsubmit.paginator) {
      this.dataSourceUnsubmit.paginator.firstPage();
    }
  }
  applyFilterApp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceApproval.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceApproval.paginator) {
      this.dataSourceApproval.paginator.firstPage();
    }
  }
  downloadExcel(){
    /* generate worksheet */
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.downloadcont);
  
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      /* save to file */
      XLSX.writeFile(wb, 'Contractor.xlsx');
  }

  view(rowedited: any){
    const dialogRef = this.dialog.open(ContractorRegDialogComponent, {
      width: '100%',
      // height: '90%',
      data:  {
        action: 'view',
        row: rowedited
      }
    });
  
  }
//   addNew(){
//     const dialogRef = this.dialog.open(AllContractorFormDialogComponent, {
//       width: '100%',
//       height: '90%',
//       data: {
//         action: 'add'
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi()
//     })
//   }

//   edit(rowedited: any){
//     const dialogRef = this.dialog.open(AllContractorFormDialogComponent, {
//       width: '100%',
//       height: '90%',
//       data: {
//         action: 'edit',
//         row: rowedited
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi()
//     })
//   }
}
