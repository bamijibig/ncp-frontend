
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-action',
  templateUrl: './connection-action.component.html',
  styleUrls: ['./connection-action.component.css']
})
export class ConnectionActionComponent implements OnInit {
  action: any;
  id: any;
  declineForm: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.action = data.action;
    this.id = data.row?.id;
    this.declineForm = new FormGroup({
      comment: new FormControl(''),
      memo: new FormControl(''),
    });
  
  }

  
  ngOnInit(): void {
  }

  Execute(){
    this.appservice.action_connection(this.action, this.id, this.declineForm.getRawValue()).subscribe(()=>{
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
