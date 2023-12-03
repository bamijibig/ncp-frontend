import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { PubconnectionFormComponent } from '../dialog/pubconnection-form/pubconnection-form.component';


@Component({
  selector: 'app-allpubconnection',
  templateUrl: './allpubconnection.component.html',
  styleUrls: ['./allpubconnection.component.css']
})
export class AllpubconnectionComponent implements OnInit {
  displayedColumns = ['status','edit']
  displayedColumnslist = ['status','view','edit']
    
  dataSource= new MatTableDataSource<any>([])
   dataSourcePrecom= new MatTableDataSource<any>([])
   selection = new SelectionModel<any>(true, [])
   is_contractor = User.getUser().is_contractor
   portals:any;
   title = 'eportal';
   
  constructor(
    private api: AppserviceService,
    private dialog: MatDialog
    ) { 
      
      
      
    }

  ngOnInit(): void {
    this.consumeapi();
    this.getPrecommissioningList();
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
  addNew(){
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'add'
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi();
      this.getPrecommissioningList();
    })
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
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi();
      this.getPrecommissioningList();
    })
  }
  edit(rowedited: any){
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'edit',
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi();
      this.getPrecommissioningList();
    })
  }
  request(row:any){
    const dialogRef = this.dialog.open(PubconnectionFormComponent, {
      // width: '100%',
      // height: '90%',
      data: {
        row: row
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi();
      this.getPrecommissioningList();
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
