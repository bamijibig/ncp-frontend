import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-hub-form-dialog',
  templateUrl: './hub-form-dialog.component.html',
  styleUrls: ['./hub-form-dialog.component.css']
})
export class HubFormDialogComponent implements OnInit {
  action:any;
  portform:FormGroup;
  connection:any;

  constructor(
    public dialogRef: MatDialogRef<HubFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private hubservice:AppserviceService
  ) { 
    this.action = data.action;


      this.portform= new FormGroup(
        {
          region: new FormControl(null),
          businesshub: new FormControl(null),
          location: new FormControl(null),
          hubManager: new FormControl(null),
          email:new FormControl(null),
          phoneNumber:new FormControl(null),
        }
      )
      if(this.action == 'edit'){
        this.connection = data.row;
        this.portform.patchValue({
          region: this.connection.region,
          businesshub: this.connection.businesshub,
          location:this.connection.location,
          hubManager:this.connection.hubManager,
          email:this.connection.email,
          phoneNumber:this.connection.phoneNumber,


        })
     }
    }
    submithub(){
      if (this.action=='edit'){
        this.hubservice.editBhub(
          this.portform.getRawValue,
          this.connection.id
        ).subscribe(
          (result)=>{
            console.log(result)
          }
        )

        
      }
      else{
        this.hubservice.postBhub(
          this.portform.getRawValue
        ).subscribe(
          (result)=>{
            console.log(result)
            
          }
        )
      }
    }

    confirmAdd(){

    }


  

  ngOnInit(): void {
  }

}

