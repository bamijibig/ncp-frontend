
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppserviceService } from 'src/app/appservice.service';
import { AllContractorFormDialogComponent } from './dialog/all-contractor-form-dialog/all-contractor-form-dialog.component';


@Component({
  selector: 'app-all-contractors',
  templateUrl: './all-contractors.component.html',
  styleUrls: ['./all-contractors.component.css']
})
export class AllContractorsComponent implements OnInit {

 displayedColumns = ['name', 'address', 'email', 'phone', 'license','action']
 displayedColumnsList = ['name', 'address', 'email', 'phone', 'license','status']
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
    this.api.getContractorUsers().subscribe(
      (resp) => {
        this.dataSource.data = resp;
        console.log(resp);

      },
      (error) => { console.error(error); }
    );
  }


  addNew(){
    const dialogRef = this.dialog.open(AllContractorFormDialogComponent, {
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
    const dialogRef = this.dialog.open(AllContractorFormDialogComponent, {
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
