
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-pubconnection-action',
  templateUrl: './pubconnection-action.component.html',
  styleUrls: ['./pubconnection-action.component.css']
})
export class pubconnectionActionComponent implements OnInit {
  action: any;
  id: any;
  declineForm: FormGroup;
  constructor( public dialogRef: MatDialogRef<pubconnectionActionComponent>,
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
    this.appservice.pubaction_connection(this.action, this.id, this.declineForm.getRawValue()).subscribe(()=>{
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

