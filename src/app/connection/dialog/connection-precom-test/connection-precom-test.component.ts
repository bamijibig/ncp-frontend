import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-precom-test',
  templateUrl: './connection-precom-test.component.html',
  styleUrls: ['./connection-precom-test.component.css']
})
export class ConnectionPrecomTestComponent implements OnInit {

  id: any;
  constructor( public dialogRef: MatDialogRef<ConnectionPrecomTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
  
  }

  ngOnInit(): void {
  }

  Execute(){
    this.appservice.submit_precom_test( this.id).subscribe(()=>{
      this.appservice.showNotification(
        'snackbar-success',
        'Successfull',
        'bottom',
        'center'
      );
      this.dialogRef.close();
    })
  }
}
