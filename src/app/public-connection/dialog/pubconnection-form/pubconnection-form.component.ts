import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';

@Component({
  selector: 'app-pubconnection-form',
  templateUrl: './pubconnection-form.component.html',
  styleUrls: ['./pubconnection-form.component.css']
})
export class PubconnectionFormComponent implements OnInit {
  action: any;
  portform: FormGroup;
  connection: any;
  status: Boolean = true;
  in_approval: Boolean = true;
  is_contractor: Boolean = User.getUser().is_contractor;
  constructor(
    public dialogRef: MatDialogRef<PubconnectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private portadd: AppserviceService
  ) {
    this.action = data.action;
      this.getApprovalStatus();
      this.getRegion(); 
    this.portform= new FormGroup({
      name_sponsor: new FormControl(''),
      community_name: new FormControl(''),
      title: new FormControl(''),
      chairman_comm_name: new FormControl(''),
      chairman_comm_number: new FormControl(''),
      dt_capacity: new FormControl(''),
      voltage_level: new FormControl(''),
      
      date_of_visit: new FormControl(''),
      no_of_customers: new FormControl(''),
      estimated_load: new FormControl(''),
      estimated_cost: new FormControl(''),
      no_of_spans: new FormControl(''),
      relieftype: new FormControl(''),
      feeder_name: new FormControl(''),
      feeder_capacity: new FormControl(''),
      fdr_peakload: new FormControl(''),
      load_tilldate: new FormControl(''),
      source_fdr: new FormControl(null),
      powertrans: new FormControl(null),
      trans_rating: new FormControl(''),
      expected_billing: new FormControl(''),
      expected_gain: new FormControl(''),
      letter_of_donation_dss: new FormControl(''),
      nemsa_test_cert: new FormControl(null),
      coren_cert: new FormControl(null),
      intro_letter_client: new FormControl(null),
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
    name_sponsor:this.connection.name_sponsor,
    community_name: this.connection.community_name,
    title: this.connection.title,
    chairman_comm_name: this.connection.chairman_comm_name,
    chairman_comm_number: this.connection.chairman_comm_number,
    dt_capacity: this.connection.dt_capacity,
    voltage_level: this.connection.voltage_level,
    date_of_visit: this.connection.date_of_visit,
    no_of_customers: this.connection.no_of_customers,
    estimated_load: this.connection.estimated_load,
    estimated_cost:this.connection.estimated_cost,
    
    no_of_spans: this.connection.no_of_spans,    
    relieftype: this.connection.relieftype,
    feeder_name: this.connection.feeder_name,
    feeder_capacity:this.connection.feeder_capacity,
    fdr_peakload: this.connection.fdr_peakload,

    
    load_tilldate: this.connection.load_tilldate,    
    source_fdr: this.connection.source_fdr,
    powertrans: this.connection.powertrans,
    trans_rating:this.connection.trans_rating,
    expected_billing: this.connection.expected_billing,
    expected_gain: this.connection.expected_gain,    
    letter_of_donation_dss: this.connection.letter_of_donation_dss,
    nemsa_test_cert: this.connection.nemsa_test_cert,
    coren_cert:this.connection.coren_cert,
    intro_letter_client: this.connection.intro_letter_client,
    businesshub: this.connection.bh?.id,
    region: this.connection.bh?.region.id,
    public_connection: this.connection.public_connection,
    contractor_name: this.connection.contractor?.contractor_name,
    con_address:this.connection.contractor?.con_address,
    licensed_no: this.connection.contractor?.licensed_no,
    tel_no: this.connection.contractor?.tel_no ,
    email: this.connection.contractor?.email
  })
}
if(this.action == 'add'){
      
  this.portform.patchValue({
  contractor_name: User.getUser().contractor_name,
  con_address: User.getUser().con_address,
  licensed_no: User.getUser().licensed_no,
  tel_no: User.getUser().tel_no, 
  email: User.getUser().email, 
})
}
if(this.action == 'view' || this.action == 'approve'){
  this.connection = data.row;
  this.portform.disable();
  this.getHubwithRegion(data.row.bh?.region.id);
  this.portform.patchValue({
  name_sponsor:this.connection.name_sponsor,
  community_name: this.connection.community_name,
  title: this.connection.title,
  chairman_comm_name: this.connection.chairman_comm_name,
  chairman_comm_number: this.connection.chairman_comm_number,
  dt_capacity: this.connection.dt_capacity,
  voltage_level: this.connection.voltage_level,
  date_of_visit: this.connection.date_of_visit,
  no_of_customers: this.connection.no_of_customers,
  estimated_load: this.connection.estimated_load,
  estimated_cost:this.connection.estimated_cost,
  no_of_spans: this.connection.no_of_spans,    
  relieftype: this.connection.relieftype,
  feeder_name: this.connection.feeder_name,
  feeder_capacity:this.connection.feeder_capacity,
  fdr_peakload: this.connection.fdr_peakload,
  load_tilldate: this.connection.load_tilldate,    
  source_fdr: this.connection.source_fdr,
  powertrans: this.connection.powertrans,
  trans_rating:this.connection.trans_rating,
  expected_billing: this.connection.expected_billing,
  expected_gain: this.connection.expected_gain,    
  letter_of_donation_dss: this.connection.letter_of_donation_dss,
  nemsa_test_cert: this.connection.nemsa_test_cert,
  coren_cert:this.connection.coren_cert,
  intro_letter_client: this.connection.intro_letter_client,
  businesshub: this.connection.bh?.id,
  region: this.connection.bh?.region.id,
  public_connection: this.connection.public_connection,
  contractor_name: this.connection.contractor?.contractor_name,
  con_address:this.connection.contractor?.con_address,
  licensed_no: this.connection.contractor?.licensed_no,
  tel_no: this.connection.contractor?.tel_no ,
  email: this.connection.contractor?.email
})
  }
  }
  submitConnections() {
    if(this.action == 'edit'){
       // Edit code below
       this.portadd.editConnectionspub(
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
      this.portadd.CreatepubConnection(
        this.portform.getRawValue()
        ).subscribe(
          (result) => {
            console.log(result)
            this.portadd.upConnectionspub(result.id).subscribe((resp)=>{
              console.log(resp);
            })
           
          }
    
        )
    
    }
    
  }
  ngOnInit(): void {
  }

  confirmAdd(){

  }

getApprovalStatus(){
  this.portadd.getApprovalStatusRegpub(User.getUser().id).subscribe((result)=>{
    this.status = result.registration_approved;
    this.in_approval = result.in_approval_workflow;
    this.is_contractor = result.is_contractor;
    console.log(this.status, this.in_approval, this.is_contractor);
  })
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
