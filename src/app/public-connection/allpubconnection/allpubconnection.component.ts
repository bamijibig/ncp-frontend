import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { PubconnectionFormComponent } from '../dialog/pubconnection-form/pubconnection-form.component';
import { PubconnectionReqPrecomComponent } from '../dialog/pubconnection-req-precom/pubconnection-req-precom.component';
import { PubconnectionCompCommisionComponent } from '../dialog/pubconnection-comp-commision/pubconnection-comp-commision.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-allpubconnection',
  templateUrl: './allpubconnection.component.html',
  styleUrls: ['./allpubconnection.component.css']
})
export class AllpubconnectionComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'community_name', 'chairman_comm_number', 'date_of_application', 'status'];
  displayedColumnslist = ['id', 'region', 'hub', 'name_sponsor', 'community_name', 'chairman_comm_number', 'status'];
  displayedColumncom = ['region', 'hub', 'community_name', 'chairman_comm_number', 'view', 'complete'];

  dataSource = new MatTableDataSource<any>([]);
  dataSourcePrecom = new MatTableDataSource<any>([]);
  dataSourcecom = new MatTableDataSource<any>([]);

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
    this.consumepubapi();
    this.getPrecommissioningpubList();
    this.getpubcontractcom();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourcePrecom.paginator = this.paginatorPrecom;
    this.dataSourcecom.paginator = this.paginatorCom;
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
      (error) => { console.error(error); }
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
    dialogRef.afterClosed().subscribe(() => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
    });
  }

  view(rowedited: any) {
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: { action: 'view', row: rowedited }
    });
    dialogRef.afterClosed().subscribe(() => {
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
    dialogRef.afterClosed().subscribe(() => {
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
    dialogRef.afterClosed().subscribe(() => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
    });
  }

  complete(row: any) {
    const dialogRef = this.dialog.open(PubconnectionCompCommisionComponent, {
      data: {
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consumepubapi();
      this.getPrecommissioningpubList();
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
