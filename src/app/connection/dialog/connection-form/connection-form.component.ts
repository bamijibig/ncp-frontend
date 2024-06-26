
import { Component, Inject, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { User } from 'src/app/globalservice/global-service.service';
import { AppserviceService } from '../../../appservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {
 action: any;
  portform: FormGroup;
  connection: any;
  corenexpired = false;
  is_contractor: Boolean = User.getUser().is_contractor;
  constructor(
    public dialogRef: MatDialogRef<ConnectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private cdRef:ChangeDetectorRef,
    private portadd: AppserviceService
    ) {
      this.action = data.action;
      this.getApprovalStatus();
      this.getRegion();
      // this.checkCorenDate();
      
    this.portform = new FormGroup({
      // contractor:new FormControl(null),
      company_name: new FormControl(''),
      connectiontype: new FormControl(''),
      other_connection: new FormControl(''),
      capacity: new FormControl(''),
      voltage_ratio: new FormControl(null),
      route_length_km: new FormControl(null),
      est_load_of_premises: new FormControl(null),
      useofpremises: new FormControl(null),
      add_house_no: new FormControl(null),
      public_connection: new FormControl(null),
      add_town_or_city: new FormControl(null),
      add_lga: new FormControl(null),
      add_state: new FormControl(null),    
      letter_of_donation_dss: new FormControl(null),
      nemsa_test_cert: new FormControl(null),
      transformer_waranty: new FormControl(null),
      transformer_test_cert: new FormControl(null),

      // dssFileSource: new FormControl(null),
      // nemsaFileSource: new FormControl(null),
      // warrantyFileSource: new FormControl(null),
      // testFileSource: new FormControl(null),

      contractor_name: new FormControl({value: "", disabled: true}, Validators.required),
      con_address: new FormControl({value: "", disabled: true}, Validators.required),
      licensed_no: new FormControl({value: "", disabled: true}, Validators.required),
      tel_no: new FormControl({value: "", disabled: true}, Validators.required),
      email: new FormControl({value: "", disabled: true}, Validators.required),
      businesshub: new FormControl(''),
      region : new FormControl(''),
   
    })

    
    if(this.action == 'add'){
      
      this.portform.patchValue({
      contractor_name: User.getUser().contractor_name,
      con_address: User.getUser().con_address,
      licensed_no: User.getUser().licensed_no,
      tel_no: User.getUser().tel_no, 
      email: User.getUser().email, 
    })
  }

    if(this.action == 'edit'){
      this.connection = data.row;
      this.getHubwithRegion(data.row.bh?.region.id);
      
      this.portform.patchValue({
      company_name:this.connection.company_name,
      connectiontype: this.connection.connectiontype,
      other_connection: this.connection.other_connection,
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
      transformer_test_cert: this.connection.transformer_test_cert,
      businesshub: this.connection.bh?.id,
      region: this.connection.bh?.region.id,
      
      contractor_name: this.connection.contractor?.contractor_name,
      con_address:this.connection.contractor?.con_address,
      licensed_no: this.connection.contractor?.licensed_no,
      tel_no: this.connection.contractor?.tel_no ,
      email: this.connection.contractor?.email
    })
  }


  if(this.action == 'view' || this.action == 'approve'){
    this.connection = data.row;
    this.portform.disable();
    this.getHubwithRegion(data.row.bh?.region.id);
    
    this.portform.patchValue({
    company_name:this.connection.company_name,
    connectiontype: this.connection.connectiontype,
    other_connection:this.connection.other_connection,
    capacity: this.connection.capacity,
    voltage_ratio: this.connection.voltage_ratio,
    route_length_km: this.connection.route_length_km,
    est_load_of_premises: this.connection.est_load_of_premises,
    useofpremises: this.connection.useofpremises,
    add_house_no: this.connection.add_house_no,
    add_town_or_city: this.connection.add_town_or_city,
    add_lga:this.connection.add_lga,
    add_state: this.connection.add_state, 
    public_connection: this.connection.public_connection,   
    letter_of_donation_dss: this.connection.letter_of_donation_dss,
    nemsa_test_cert: this.connection.nemsa_test_cert,
    transformer_waranty:this.connection.transformer_waranty,
    // transformer_test_cert: this.connection.transformer_test_cert,
    businesshub: this.connection.bh?.id,
    region: this.connection.bh?.region.id,
    contractor_name: this.connection.contractor?.contractor_name,
    con_address:this.connection.contractor?.con_address,
    licensed_no: this.connection.contractor?.licensed_no,
    tel_no: this.connection.contractor?.tel_no ,
    email: this.connection.contractor?.email
    
    
  })
}
console.log(this.connection)
    }
  

// getConnectionData(id: any){
//   this.portadd.getConnectionDetail(id).subscribe((result)=>{
//     this.
//   })
// }

  submitConnections() {
    if(this.action == 'edit'){
       // Edit code below
       this.portadd.editConnections(
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
      this.portadd.CreateConnection(
        this.portform.getRawValue()
        ).subscribe(
          (result) => {
            console.log(result)
            this.portadd.upConnections(result.id).subscribe((resp)=>{
              console.log(resp);
            })
           
          }
    
        )
    
    }
    
  }
 


  ngOnInit(): void {
    this.checkCorenDate();
  }


  confirmAdd(){

  }
  status: Boolean = true;
  in_approval: Boolean = true;
getApprovalStatus(){
  this.portadd.getApprovalStatusReg(User.getUser().id).subscribe((result)=>{
    this.status = result.registration_approved;
    this.in_approval = result.in_approval_workflow;
    this.is_contractor = result.is_contractor;
    console.log(this.status, this.in_approval, this.is_contractor);
  })
}


checkCorenDate() {
  // Simulate fetching the user and corenissued date from backend
  const corenissued = User.getUser().corenissued;  // Example date, replace with actual fetch logic

  // Parse the date string to a Date object
  const corenIssuedDate = new Date(corenissued);
  // Add one year to the issue date
  // const issuedPlusAYear = new Date(corenIssuedDate.setFullYear(corenIssuedDate.getFullYear() + 1));

  // Check if the current date is after the issuedPlusAYear date
  const today = new Date();
  if (corenIssuedDate <= new Date()) {
    this.corenexpired = true;
  } else {
    this.corenexpired = false;
  }

  this.cdRef.detectChanges();
}


checkCorenDate2() {
  // Simulate fetching the user and corenissued date from backend
  const corenissued = User.getUser().corenissued;  // Example date, replace with actual fetch logic

  // Parse the date string to a Date object
  const corenIssuedDate = new Date(corenissued);
  // Add one year to the issue date
  // const issuedPlusAYear = new Date(corenIssuedDate.setFullYear(corenIssuedDate.getFullYear() + 1));

  // Check if the current date is after the issuedPlusAYear date
  const today = new Date();
  return corenIssuedDate <= new Date()
}

regions: any = [];
hub: any = [];
getRegion() {
  this.portadd.getRegion().subscribe(
    (resp: any) => {
      this.regions = resp;

    },
    (error: any) => { console.error(error); }
  );
}

getHub(event: any) {
  this.portadd.getBhubFiltered(event.value).subscribe(
    (resp: any) => {
      this.hub = resp;
     
    },
    (error: any) => { console.error(error); }
  );
}

getHubwithRegion(region: any) {
  this.portadd.getBhubFiltered(region).subscribe(
    (resp: any) => {
      this.hub = resp;
      this.portform.patchValue({
        // region: this.connection.bh?.region.id,
        businesshub: this.connection.bh?.id,
        
      })

    },
    (error: any) => { console.error(error); }
  );
}



approve(){}


decline(){}

}


