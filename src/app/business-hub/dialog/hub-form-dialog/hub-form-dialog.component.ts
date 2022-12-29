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
  regions: any;
  stafflist: any;
  constructor(
    public dialogRef: MatDialogRef<HubFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private hubservice:AppserviceService
  ) { 
    this.action = data.action;
    this.getRegion();
    this.getStaff();
    
      this.portform= new FormGroup(
        {
          region: new FormControl(null),
          businesshub: new FormControl(null),
          location: new FormControl(null),
          hubManager: new FormControl(null),
          email:new FormControl(null),
          phoneNumber:new FormControl(null),
          technicalManager:new FormControl(''),
        }
      )
      if(this.action == 'edit'){
        this.connection = data.row;
        this.portform.patchValue({
          region: this.connection.region.id,
          businesshub: this.connection.businesshub,
          location:this.connection.location,
          hubManager:this.connection.hubManager?.id,
          email:this.connection.hubManager?.email,
          phoneNumber:this.connection.hubManager?.tel_no,
          technicalManager: this.connection.technicalManager?.id
        })
        this.portform.get('email')?.disable()
        this.portform.get('phoneNumber')?.disable()
     }
    }

    
    submithub(){
      if (this.action=='edit'){
        this.hubservice.editBhub(
          this.portform.getRawValue(),
          this.connection.id
        ).subscribe(
          (result)=>{
            console.log(result)
          }
        )

        
      }
      else{
        this.hubservice.postBhub(
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

    getRegion() {
      this.hubservice.getRegion().subscribe(
        (resp: any) => {
          this.regions = resp;
  
        },
        (error: any) => { console.error(error); }
      );
    }
  

  ngOnInit(): void {
  }

  getStaff() {
    this.hubservice.getOtherUsers().subscribe(
      (resp: any) => {
        this.stafflist = resp;
        this.portform.patchValue({
            
          hubManager:this.connection.hubManager?.id,
          technicalManager: this.connection.technicalManager?.id
          })

      },
      (error:any) => { console.error(error); }
    );
  }



}

