import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-precom-test',
  templateUrl: './connection-precom-test.component.html',
  styleUrls: ['./connection-precom-test.component.css']
})
export class ConnectionPrecomTestComponent implements OnInit {

  id: any;
  precom_form: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionPrecomTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
    this.precom_form = new FormGroup({
      precom_project_title: new FormControl(data.row?.precom_project_title),
      precom_last_inspection_date: new FormControl(data.row?.precom_last_inspection_date),
      precom_project_objectives: new FormControl(data.row?.precom_project_objectives),

    })
  }

  ngOnInit(): void {
  }

  Execute(){
    this.appservice.submit_precom_test( this.id, this.precom_form.getRawValue()).subscribe(()=>{
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
