import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-req-precom',
  templateUrl: './connection-req-precom.component.html',
  styleUrls: ['./connection-req-precom.component.css']
})
export class ConnectionReqPrecomComponent implements OnInit {

  id: any;
  precomform: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionReqPrecomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
    this.precomform = new FormGroup({
      receipt: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  submitConnections(){};
  
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
