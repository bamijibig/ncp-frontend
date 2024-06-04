import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-pubconnection-comp-commision',
  templateUrl: './pubconnection-comp-commision.component.html',
  styleUrls: ['./pubconnection-comp-commision.component.css']
})
export class PubconnectionCompCommisionComponent implements OnInit {
  id:any;
  pubcomget:any;
  pubcomform!: FormGroup
  constructor(
    public dialogRef: MatDialogRef<PubconnectionCompCommisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.pubcomget=data.row;
    this.id=data.row?.id;
    this.pubcomform = new FormGroup({
      projsignedoff: new FormControl(false),
      inspbynemsa: new FormControl(false),
      nemsatestcert: new FormControl(''),
      letterofdonation: new FormControl(''),
      comprojcert: new FormControl(''),
      ct_is_completed_date: new FormControl(''),
 
    });
    if(data.action == 'view'){
      this.pubcomform.disable();
      this.pubcomform.patchValue({
        projsignedoff:this.pubcomget.projsignedoff,
        inspbynemsa:this.pubcomget.inspbynemsa,
        nemsatestcert:this.pubcomget.nemsatestcert,
        letterofdonation:this.pubcomget.letterofdonation,
        comprojcert:this.pubcomget.comprojcert,
        ct_is_completed_date:this.pubcomget.ct_is_completed_date
    

      })
    };
  }

  ngOnInit(): void {
  }
  submitConnections(){};
  
  Execute(){
    this.appservice.complete_pubcommissioning(this.id, this.pubcomform.getRawValue()).subscribe(()=>{
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
