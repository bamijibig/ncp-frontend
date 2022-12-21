import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-evaluate',
  templateUrl: './connection-evaluate.component.html',
  styleUrls: ['./connection-evaluate.component.css']
})
export class ConnectionEvaluateComponent implements OnInit {
id: any;
  constructor( public dialogRef: MatDialogRef<ConnectionEvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
  
  }

  ngOnInit(): void {
  }

  Execute(){
    this.appservice.evaluate_connection( this.id).subscribe(()=>{
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
