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
  preqform:any;
  constructor( public dialogRef: MatDialogRef<ConnectionReqPrecomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.preqform=data.row;
    this.id = data.row?.id;
    this.precomform = new FormGroup({
      security_receipt: new FormControl(''),
    })
    if(data.action == 'view'){
      this.precomform.disable();
    };
  }

  
  

  ngOnInit(): void {
  }

  submitConnections(){};
  
  Execute(){
    this.appservice.request_precommissioning(this.id, this.precomform.getRawValue()).subscribe(()=>{
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
