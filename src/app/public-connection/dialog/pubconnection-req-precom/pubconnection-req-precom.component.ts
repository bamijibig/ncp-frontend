import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-pubconnection-req-precom',
  templateUrl: './pubconnection-req-precom.component.html',
  styleUrls: ['./pubconnection-req-precom.component.css']
})
export class PubconnectionReqPrecomComponent implements OnInit {
  id: any;
  pubprecomform: FormGroup;
  pubpreqform:any;
  constructor(
    public dialogRef: MatDialogRef<PubconnectionReqPrecomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.pubpreqform=data.row;
    this.id = data.row?.id;
    this.pubprecomform = new FormGroup({
      security_receipt: new FormControl(''),
  })
  if(data.action == 'view'){
    this.pubprecomform.disable();
  };
}


  ngOnInit(): void {
  }
  pubsubmitConnections(){};
  Execute(){
    this.appservice.pubrequest_precommissioning(this.id, this.pubprecomform.getRawValue()).subscribe(()=>{
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
