import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-comp-commision',
  templateUrl: './connection-comp-commision.component.html',
  styleUrls: ['./connection-comp-commision.component.css']
})
export class ConnectionCompCommisionComponent implements OnInit {
  id: any;
  comformget:any;
  comform!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ConnectionCompCommisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.comformget=data.row;
    this.id = data.row?.id;
    
    this.comform = new FormGroup({
      projsignedoff: new FormControl(false),
      inspbynemsa: new FormControl(false),
      nemsatestcert: new FormControl(''),
      letterofdonation: new FormControl(''),
      comprojcert: new FormControl(''),
      ct_is_completed_date: new FormControl(''),
 
    });
    if(data.action == 'view'){
      this.comform.disable();
      this.comform.patchValue({
        projsignedoff:this.comformget.projsignedoff,
        inspbynemsa:this.comformget.inspbynemsa,
        nemsatestcert:this.comformget.nemsatestcert,
        letterofdonation:this.comformget.letterofdonation,
        comprojcert:this.comformget.comprojcert,
        ct_is_completed_date:this.comformget.ct_is_completed_date
    

      })
    };
  }

  ngOnInit(): void {
  }
  submitConnections(){};
  
  Execute(){
    this.appservice.complete_commissioning(this.id, this.comform.getRawValue()).subscribe(()=>{
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
 