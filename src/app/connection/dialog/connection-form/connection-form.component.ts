
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { User } from 'src/app/globalservice/global-service.service';
import { AppserviceService } from '../../../appservice.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {
 action: any;
  portform: FormGroup;
  connection: any;
  constructor(
    public dialogRef: MatDialogRef<ConnectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private portadd: AppserviceService
    ) {
      this.action = data.action;
      this.getApprovalStatus();
    this.portform = new FormGroup({
      // contractor:new FormControl(null),
      company_name: new FormControl(''),
      connectiontype: new FormControl(''),
      capacity: new FormControl(''),
      voltage_ratio: new FormControl(null),
      route_length_km: new FormControl(null),
      est_load_of_premises: new FormControl(null),
      useofpremises: new FormControl(null),
      add_house_no: new FormControl(null),
      add_town_or_city: new FormControl(null),
      add_lga: new FormControl(null),
      add_state: new FormControl(null),    
      letter_of_donation_dss: new FormControl(null),
      nemsa_test_cert: new FormControl(null),
      transformer_waranty: new FormControl(null),
      transformer_test_cert: new FormControl(null),

      dssFileSource: new FormControl(null),
      nemsaFileSource: new FormControl(null),
      warrantyFileSource: new FormControl(null),
      testFileSource: new FormControl(null)
      
    })
    if(this.action == 'edit'){
      this.connection = data.row;
      this.portform.patchValue({
      // contractor:this.connection.contractor,
      company_name:this.connection.company_name,
      connectiontype: this.connection.connectiontype,
      capacity: this.connection.capacity,
      voltage_ratio: this.connection.voltage_ratio,
      route_length_km: this.connection.route_length_km,
      est_load_of_premises: this.connection.est_load_of_premises,
      useofpremises: this.connection.useofpremises,
      add_house_no: this.connection.add_house_no,
      add_town_or_city: this.connection.add_town_or_city,
      add_lga:this.connection.add_lga,
      add_state: this.connection.add_state,    
      letter_of_donation_dss: this.connection.letter_of_donation_dss,
      nemsa_test_cert: this.connection.nemsa_test_cert,
      transformer_waranty:this.connection.transformer_waranty,
      transformer_test_cert: this.connection.transformer_test_cert

    })
  }
    }
  

  submitSupplier() {
    if(this.action == 'edit'){
       // Edit code below
       this.portadd.editContractor(
        this.portform.getRawValue(),
        this.connection.id
        ).subscribe(
          (result) => {
            console.log(result)
           
          }
    
        )
    
    }
    else {
      //Add new connections code below
      this.portadd.postapi(
        this.portform.getRawValue()
        ).subscribe(
          (result) => {
            console.log(result)
           
          }
    
        )
    
    }
    
  }
  DssImageProcessing(event:any) {
    const reader = new FileReader();
   
    if (event.target.files[0].size > 25000000) {
       this.portform.patchValue({
        dssFileSource: null
      });
      alert('File is too large. Maximum size should be 2.5MB');
      
    } 
    else{
          if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
              // this.imagepreview = reader.result as string;
              this.portform.patchValue({
                dssFileSource: reader.result
              });
            };
          }
  }
  }

  NemsaImageProcessing(event:any) {
    const reader = new FileReader();
   
    if (event.target.files[0].size > 25000000) {
       this.portform.patchValue({
        nemsaFileSource: null
      });
      alert('File is too large. Maximum size should be 2.5MB');
      
    } 
    else{
          if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
              // this.imagepreview = reader.result as string;
              this.portform.patchValue({
                nemsaFileSource: reader.result
              });
            };
          }
  }
  }


  WarrantyImageProcessing(event:any) {
    const reader = new FileReader();
   
    if (event.target.files[0].size > 25000000) {
       this.portform.patchValue({
        warrantyFileSource: null
      });
      alert('File is too large. Maximum size should be 2.5MB');
      
    } 
    else{
          if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
              // this.imagepreview = reader.result as string;
              this.portform.patchValue({
                warrantyFileSource: reader.result
              });
            };
          }
  }
  }


  TestImageProcessing(event:any) {
    const reader = new FileReader();
   
    if (event.target.files[0].size > 25000000) {
       this.portform.patchValue({
        testFileSource: null
      });
      alert('File is too large. Maximum size should be 2.5MB');
      
    } 
    else{
          if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
              // this.imagepreview = reader.result as string;
              this.portform.patchValue({
                testFileSource: reader.result
              });
            };
          }
  }
  }

  // editSupplier(){
    
  // }
   


  ngOnInit(): void {
    
  }


  confirmAdd(){

  }
  status: Boolean = true;
getApprovalStatus(){
  this.portadd.getApprovalStatusReg(User.getUser().id).subscribe((result)=>{
    this.status = result.registration_approved;
  })
}

}


