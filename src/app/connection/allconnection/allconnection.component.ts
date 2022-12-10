import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';
import { port } from 'src/app/port';
import { ConnectionFormComponent } from '../dialog/connection-form/connection-form.component';

@Component({
  selector: 'app-allconnection',
  templateUrl: './allconnection.component.html',
  styleUrls: ['./allconnection.component.css']
})
export class AllconnectionComponent implements OnInit {

 displayedColumns = ['id','contractor', 'company_name', 'connectiontype', 'capacity', 'est_load_of_premises', 'useofpremises','date_of_application','edit']
  dataSource= new MatTableDataSource<any>([])
  selection = new SelectionModel<any>(true, [])
  is_contractor = User.getUser().is_contractor
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
    this.api.getapi().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }


  addNew(){
    const dialogRef = this.dialog.open(ConnectionFormComponent, {
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
    const dialogRef = this.dialog.open(ConnectionFormComponent, {
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
