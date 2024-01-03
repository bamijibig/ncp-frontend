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
import * as XLSX from 'xlsx';
import * as html2pdf from 'html2pdf.js';

// import { ActionDialogComponent } from './dialog/action-dialog/action-dialog.component';
// import { AllContractorFormDialogComponent } from './dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';

@Component({
  selector: 'app-staffconnectionlist',
  templateUrl: './staffconnectionlist.component.html',
  styleUrls: ['./staffconnectionlist.component.css']
})
export class StaffconnectionlistComponent implements OnInit {

//  displayedColumns = ['name', 'address', 'email', 'phone', 'license','status','action']
 
 displayedColumns = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'capacity', 'useofpremises','date_of_application', 'status', 'view','eval','test']
  
 displayedColumnsList = ['contractor_name','region','hub', 'company_name', 'connectiontype', 'date_of_application','status', 'view','approve', 'decline']
  dataSource= new MatTableDataSource<any>([])
  dataSourceApproval= new MatTableDataSource<any>([])
  downloadcon_data=[]
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
      this.downloadcon_data = resp;

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
    // width: '100%',
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
    // width: '100%',
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
    // height: '90%',
    data: {
      row: rowedited
    }
  });
  dialogRef.afterClosed().subscribe((result)=>{
    this.consumeapi();
    this.getMyApprovals();
  })
}



viewEvaluate(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionEvaluateComponent, {
    width: '100%',
    // height: '90%',
    data: {
      action: 'view',
      row: rowedited
    }
  });

}

viewTest(rowedited: any){
  const dialogRef = this.dialog.open(ConnectionPrecomTestComponent, {
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
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.downloadcon_data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'PointloadDss.xlsx');
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}




// ...

downloadPDF() {
  /* generate HTML content */
  const htmlContent = this.generateHtmlContent();

  /* convert HTML to PDF */
  const pdfOptions = {
    margin: 10,
    filename: 'public/Dss.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Use from() method and then() to handle the Promise
  html2pdf().from(htmlContent).set(pdfOptions).outputPdf().then((pdfBlob: Blob) => {
    // Create a Blob and use it to open the PDF in a new window
    const blob = new Blob([pdfBlob], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Open the PDF in a new window
    window.open(url, '_blank');
  });
}





generateHtmlContent() {
  // Generate the entire HTML content including the form structure
  return `
    <div class="page-wrapper">
      <!-- Your existing HTML structure here -->
      <!-- ... -->

      <!-- Additional form structure -->
      <mat-form-field>
        <mat-label>SEARCH</mat-label>
        <input matInput (keyup)="applyFilter($event)" placeholder="Search" #input>
      </mat-form-field>

      <div class="container-fluid">
        <mat-tab-group>
          <mat-tab label="All Connections">
            <!-- Your existing form content here -->
            <div class="row">
          <div class="col-lg-12">
            <div class="col-12 text-left">
              <button mat-raised-button color='primary'  (click)="downloadExcel()" >download Excel</button>
          </div>
          <div class="example-container mat-elevation-z8 table table-responsive">
            <mat-table #table [dataSource]="dataSource">
          
              <!--- Note that these columns can be defined in any order.
            The actual rendered columns are set as a property on the row definition" -->
              <!-- id Column -->
              <ng-container matColumnDef="contractor_name">
                <mat-header-cell *matHeaderCellDef>Contractor Name </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.contractor?.contractor_name}} </mat-cell>
              </ng-container>
              <ng-container matColumnDef="region">
                <mat-header-cell *matHeaderCellDef>Region </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.bh?.region?.region}} </mat-cell>
              </ng-container>
              <ng-container matColumnDef="hub">
                <mat-header-cell *matHeaderCellDef>Business Hub</mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.bh?.businesshub}} </mat-cell>
              </ng-container>
          
              <!--businesstype Column -->
              <ng-container matColumnDef="businesstype">
                <mat-header-cell *matHeaderCellDef> Business Type </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.businesstype}} </mat-cell>
              </ng-container>
          
          
              <!-- value_contract column -->
              <ng-container matColumnDef="company_name">
                <mat-header-cell *matHeaderCellDef> Company Name </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.company_name}} </mat-cell>
              </ng-container>
          
              <!-- company_category Column -->
              <ng-container matColumnDef="connectiontype">
                <mat-header-cell *matHeaderCellDef> Connection Type </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.connectiontype}} </mat-cell>
              </ng-container>
              <ng-container matColumnDef="capacity">
                <mat-header-cell *matHeaderCellDef> Capacity </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.capacity}} </mat-cell>
              </ng-container>
        
              <ng-container matColumnDef="est_load_of_premises">
                <mat-header-cell *matHeaderCellDef>Estimated load </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.est_load_of_premises}} </mat-cell>
              </ng-container>
              <ng-container matColumnDef="useofpremises">
                <mat-header-cell *matHeaderCellDef> Use of Premise </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.useofpremises}} </mat-cell>
              </ng-container>
             
              <ng-container matColumnDef="date_of_application">
                <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.date_of_application | date: "mediumDate"}} </mat-cell>
              </ng-container>
              <ng-container matColumnDef="status">
                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.connection_status}}  </mat-cell>
              </ng-container> 
              <ng-container matColumnDef="view">
                <mat-header-cell *matHeaderCellDef> </mat-header-cell>
                <mat-cell *matCellDef="let element">
                  <button mat-raised-button color="secondary" (click)="view(element)">View</button> </mat-cell>
              </ng-container>
              <ng-container matColumnDef="eval">
                <mat-header-cell *matHeaderCellDef> </mat-header-cell>
                <mat-cell *matCellDef="let element">
                  <button mat-raised-button color="secondary" (click)="viewEvaluate(element)">Eval</button> </mat-cell>
              </ng-container>
              <ng-container matColumnDef="test">
                <mat-header-cell *matHeaderCellDef> </mat-header-cell>
                <mat-cell *matCellDef="let element">
                  <button mat-raised-button color="secondary" (click)="viewTest(element)">Test</button> </mat-cell>
              </ng-container>
          
              <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
              <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
            </mat-table>
            <mat-paginator #paginator
                           [pageSize]="10"
                           [pageSizeOptions]="[5, 10, 20]"
                           [showFirstLastButtons]="true">
            </mat-paginator>
          </div>
          </div>
  
      </div>
    </div>
          </mat-tab>

          <mat-tab label="My Approvals">
            <!-- Your existing form content here -->
            <!-- ... -->
          </mat-tab>
        </mat-tab-group>
      </div>
    </div>
  `;
}



}
