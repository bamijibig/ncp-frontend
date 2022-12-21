import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-req-precom',
  templateUrl: './connection-req-precom.component.html',
  styleUrls: ['./connection-req-precom.component.css']
})
export class ConnectionReqPrecomComponent implements OnInit {

  id: any;
  constructor( public dialogRef: MatDialogRef<ConnectionReqPrecomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
  
  }

  ngOnInit(): void {
  }

  Execute(){
    this.appservice.request_precommissioning( this.id).subscribe(()=>{
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
