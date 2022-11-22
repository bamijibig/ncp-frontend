import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-region-form-dialog',
  templateUrl: './region-form-dialog.component.html',
  styleUrls: ['./region-form-dialog.component.css']
})
export class RegionFormDialogComponent implements OnInit {
  action: any;
  portform: FormGroup;
  connection: any;

  constructor(
    public dialogRef: MatDialogRef<RegionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    private appservice: AppserviceService) {
      this.action = data.action;


      this.portform= new FormGroup(
        {
          region: new FormControl(null),
          location:new FormControl(null),
          regionManager:new FormControl(null),
          email:new FormControl(null),
          phoneNumber:new FormControl(null),
        }
      )
      if(this.action == 'edit'){
        this.connection = data.row;
        this.portform.patchValue({
          region: this.connection.region,
          location:this.connection.location,
          regionManager:this.connection.regionManager,
          email:this.connection.email,
          phoneNumber:this.connection.phoneNumber,


        })
     }
    }
    submitRegion(){
      if (this.action=='edit'){
        this.appservice.editRegion(
          this.portform.getRawValue,
          this.connection.id
        ).subscribe(
          (result)=>{
            console.log(result)
          }
        )

        
      }
      else{
        this.appservice.postRegion(
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
