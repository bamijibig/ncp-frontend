import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent implements OnInit {
  action: any;
  userid: any;
  declineForm: FormGroup;
  constructor( public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.action = data.action;
    this.userid = data.userid;
    this.declineForm = new FormGroup({
      comment: new FormControl(''),
      memo: new FormControl(''),
    });
  
  }

  
  ngOnInit(): void {
  }

  Execute(){
    this.appservice.action(this.action, this.userid, this.declineForm.getRawValue()).subscribe(()=>{
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
