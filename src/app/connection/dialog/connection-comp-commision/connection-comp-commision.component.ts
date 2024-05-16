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
  comform!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ConnectionCompCommisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.comform = new FormGroup({
      projsignedoff: new FormControl(false),
      inspbynemsa: new FormControl(false),
      compdate: new FormControl(''),
      nemsatestcert: new FormControl(''),
      letterofdonation: new FormControl(''),
      comprojcert: new FormControl(''),
      ct_is_completed_date: new FormControl(''),
 
    });
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
 