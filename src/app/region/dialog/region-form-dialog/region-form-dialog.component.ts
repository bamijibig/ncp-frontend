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
  stafflist: any;
  constructor(
    public dialogRef: MatDialogRef<RegionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    private appservice: AppserviceService) {
      this.action = data.action;
      this.getStaff();

      this.portform= new FormGroup(
        {
          region: new FormControl(''),
          location:new FormControl(''),
          regionManager:new FormControl(''),
          email:new FormControl(''),
          phoneNumber:new FormControl(''),
          technicalManager:new FormControl(''),
        }
      )
      if(this.action == 'edit'){
        this.connection = data.row;
        this.portform.patchValue({
          region: this.connection.region,
          location:this.connection.location,
          regionManager: this.connection.regionManager?.id,
          email:this.connection.regionManager?.email,
          phoneNumber:this.connection.regionManager?.tel_no,
          technicalManager: this.connection.technicalManager?.id


        })
        this.portform.get('email')?.disable()
        this.portform.get('phoneNumber')?.disable()
     }
    }

    getStaff() {
      this.appservice.getOtherUsers().subscribe(
        (resp) => {
          this.stafflist = resp;
          this.portform.patchValue({
            
          regionManager: this.connection.regionManager?.id,
            technicalManager: this.connection.technicalManager?.id
  
          })
  
        },
        (error) => { console.error(error); }
      );
    }
  

    submitRegion(){
      if (this.action=='edit'){
        this.appservice.editRegion(
          this.portform.getRawValue(),
          this.connection.id
        ).subscribe(
          (result)=>{
            console.log(result)
          }
        )

        
      }
      else{
        this.appservice.postRegion(
          this.portform.getRawValue()
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
