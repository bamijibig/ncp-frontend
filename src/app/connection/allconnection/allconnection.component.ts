// import { SelectionModel } from '@angular/cdk/collections';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
// import { AppserviceService } from 'src/app/appservice.service';
// import { User } from 'src/app/globalservice/global-service.service';
// import { port } from 'src/app/port';
// import { ConnectionFormComponent } from '../dialog/connection-form/connection-form.component';
// import { ConnectionReqPrecomComponent } from '../dialog/connection-req-precom/connection-req-precom.component';
// import { ConnectionCompCommisionComponent } from '../dialog/connection-comp-commision/connection-comp-commision.component';
// import { MatPaginator } from '@angular/material/paginator';

// @Component({
//   selector: 'app-allconnection',
//   templateUrl: './allconnection.component.html',
//   styleUrls: ['./allconnection.component.css']
// })
// export class AllconnectionComponent implements OnInit {

//  displayedColumns = ['id','region','hub', 'company_name','date_of_application','status','edit']
//  displayedColumnslist = ['id','region','hub', 'company_name', 'connectiontype','useofpremises','date_of_application','status','view']
   
//  displayedColumnsComm = ['id','region','hub', 'company_name', 'connectiontype','useofpremises','date_of_application','status','view','complete']

//  dataSource= new MatTableDataSource<any>([])
//   dataSourcePrecom= new MatTableDataSource<any>([])
//   dataSourcecom= new MatTableDataSource<any>([])
  
//   selection = new SelectionModel<any>(true, [])
//   is_contractor = User.getUser().is_contractor
//   portals:any;
//   title = 'eportal';
//   constructor(
//     private api: AppserviceService,
//     private dialog: MatDialog) { this.consumeapi();
//     }
//   ngOnInit(): void {
//     this.consumeapi();
//     this.getPrecommissioningList();
//     this.getcontractcom();
// }

//   consumeapi() {
//     this.api.getContractorConnections().subscribe(
//       (resp) => {
//         this.dataSource.data = resp;
//         console.log(resp);

//       },
//       (error) => { console.error(error); }
//     );
//   }

//   getPrecommissioningList() {
//     this.api.getPrecomList().subscribe(
//       (resp) => {
//         this.dataSourcePrecom.data = resp;
//         console.log(resp);

//       },
//       (error) => { console.error(error); }
//     );
//   }
//   getcontractcom() {
//     this.api.getconcommision().subscribe(
//       (resp) => {
//         this.dataSourcecom.data = resp;
//         console.log(resp);

//       },
//       (error) => { console.error(error); }
//     );
//   }

//   addNew(){
//     const dialogRef = this.dialog.open(ConnectionFormComponent, {
//       width: '100%',
//       height: '90%',
//       data: {
//         action: 'add'
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi();
//       this.getPrecommissioningList();
//     })
//   }
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
//     this.paginator = mp;
//     this.setDataSourceAttributes();
//     }

//     setDataSourceAttributes() {
    
//      this.dataSource.paginator = this.paginator;
//     //  this.dataSource.sort = this.sort;
//    }

//   view(rowedited: any){
//     const dialogRef = this.dialog.open(ConnectionFormComponent, {
//       width: '100%',
//       height: '90%',
//       data: {
//         action: 'view',
//         row: rowedited
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi();
//       this.getPrecommissioningList();
//     })
//   }

//   // edit(rowedited: any){
//   //   const dialogRef = this.dialog.open(ConnectionFormComponent, {
//   //     width: '100%',
//   //     height: '90%',
//   //     data: {
//   //       action: 'edit',
//   //       row: rowedited
//   //     }
//   //   });
//   //   dialogRef.afterClosed().subscribe((result)=>{
//   //     this.consumeapi();
//   //     this.getPrecommissioningList();
//   //   })
//   // }

//   request(row:any){
//     const dialogRef = this.dialog.open(ConnectionReqPrecomComponent, {
//       // width: '100%',
//       // height: '90%',
//       data: {
//         row: row
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi();
//       this.getPrecommissioningList();
//     })
  

//   }
//   complete(row:any){
//     const dialogRef = this.dialog.open(ConnectionCompCommisionComponent, {
//       // width: '100%',
//       // height: '90%',
//       data: {
//         row: row
//       }
//     });
//     dialogRef.afterClosed().subscribe((result)=>{
//       this.consumeapi();
//       this.getPrecommissioningList();
//     })
  

//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { ConnectionFormComponent } from '../dialog/connection-form/connection-form.component';
import { ConnectionReqPrecomComponent } from '../dialog/connection-req-precom/connection-req-precom.component';
import { ConnectionCompCommisionComponent } from '../dialog/connection-comp-commision/connection-comp-commision.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-allconnection',
  templateUrl: './allconnection.component.html',
  styleUrls: ['./allconnection.component.css']
})
export class AllconnectionComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'region', 'hub', 'company_name', 'date_of_application', 'status', 'edit'];
  displayedColumnslist = ['id', 'region', 'hub', 'company_name', 'connectiontype', 'useofpremises', 'date_of_application', 'status', 'view'];
  displayedColumnsComm = ['id', 'region', 'hub', 'company_name', 'connectiontype', 'useofpremises', 'date_of_application', 'status', 'view', 'complete'];

  dataSource = new MatTableDataSource<any>([]);
  dataSourcePrecom = new MatTableDataSource<any>([]);
  dataSourcecom = new MatTableDataSource<any>([]);

  selection = new SelectionModel<any>(true, []);
  is_contractor = User.getUser().is_contractor;
  portals: any;
  title = 'eportal';

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPrecom') paginatorPrecom!: MatPaginator;
  @ViewChild('paginatorCom') paginatorCom!: MatPaginator;

  constructor(
    private api: AppserviceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.consumeapi();
    this.getPrecommissioningList();
    this.getcontractcom();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourcePrecom.paginator = this.paginatorPrecom;
    this.dataSourcecom.paginator = this.paginatorCom;
  }

  consumeapi() {
    this.api.getContractorConnections().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);
      },
      (error) => { console.error(error); }
    );
  }

  getPrecommissioningList() {
    this.api.getPrecomList().subscribe(
      (resp) => {
        this.dataSourcePrecom.data = resp;
        console.log(resp);
      },
      (error) => { console.error(error); }
    );
  }

  getcontractcom() {
    this.api.getconcommision().subscribe(
      (resp) => {
        this.dataSourcecom.data = resp;
        console.log(resp);
      },
      (error) => { console.error(error); }
    );
  }

  addNew() {
    const dialogRef = this.dialog.open(ConnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: { action: 'add' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consumeapi();
      this.getPrecommissioningList();
    });
  }

  view(rowedited: any) {
    const dialogRef = this.dialog.open(ConnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: { action: 'view', row: rowedited }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consumeapi();
      this.getPrecommissioningList();
    });
  }

  request(row: any) {
    const dialogRef = this.dialog.open(ConnectionReqPrecomComponent, {
      data: { row: row }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consumeapi();
      this.getPrecommissioningList();
    });
  }

  complete(row: any) {
    const dialogRef = this.dialog.open(ConnectionCompCommisionComponent, {
      data: { row: row }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consumeapi();
      this.getPrecommissioningList();
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
