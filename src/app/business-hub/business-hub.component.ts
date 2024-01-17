
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { HubFormDialogComponent } from './dialog/hub-form-dialog/hub-form-dialog.component';

@Component({
  selector: 'app-business-hub',
  templateUrl: './business-hub.component.html',
  styleUrls: ['./business-hub.component.css']
})
export class BusinessHubComponent implements OnInit {

 displayedColumns = ['name', 'region', 'manager', 'tmanager', 'email', 'phone','edit']
  dataSource= new MatTableDataSource<any>([])
  selection = new SelectionModel<any>(true, [])

  portals:any;
  title = 'eportal';
  constructor(
    private api: AppserviceService,
    private dialog: MatDialog) { this.consumeapi();
    }
  ngOnInit(): void {
    this.consumeapi();
}
  consumeapi() {
    this.api.getBhub().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }


  addNew(){
    const dialogRef = this.dialog.open(HubFormDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'add'
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi()
    })
  }

  edit(rowedited: any){
    const dialogRef = this.dialog.open(HubFormDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        action: 'edit',
        row: rowedited
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.consumeapi()
    })
  }
}
