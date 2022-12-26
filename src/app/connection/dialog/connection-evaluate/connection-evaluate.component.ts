import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-evaluate',
  templateUrl: './connection-evaluate.component.html',
  styleUrls: ['./connection-evaluate.component.css']
})
export class ConnectionEvaluateComponent implements OnInit {
id: any;
eval_form: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionEvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
    this.eval_form = new FormGroup({
      eval_title: new FormControl(data.row?.eval_title),
      eval_applicant: new FormControl(data.row?.eval_applicant),
      eval_dt: new FormControl(data.row?.eval_dt),
      eval_voltage_level: new FormControl(data.row?.eval_voltage_level),
      eval_estimated_load: new FormControl(data.row?.eval_estimated_load),
      eval_site_visit_date: new FormControl(data.row?.eval_site_visit_date)

    })

  }

  ngOnInit(): void {
  
  }

  Execute(){
    this.appservice.evaluate_connection( this.id, this.eval_form.getRawValue()).subscribe(()=>{
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
