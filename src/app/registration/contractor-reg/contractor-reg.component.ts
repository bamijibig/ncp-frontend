
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/globalservice/global-service.service';
import { AppserviceService } from '../../appservice.service';

@Component({
  selector: 'app-contractor-reg',
  templateUrl: './contractor-reg.component.html',
  styleUrls: ['./contractor-reg.component.css']
})
export class ContractorRegComponent implements OnInit {
 action: any;
  portform: FormGroup;
  connection: any;
  constructor(
 
    private portadd: AppserviceService,
    private snackBar: MatSnackBar,
    ) {
    //  this.getRegion();
     
    this.portform = new FormGroup({
      // username: new FormControl(''),
      // password: new FormControl(''),
      // firstname: new FormControl(''),
      // lastname: new FormControl(''),
      contractor_name: new FormControl(''),
      con_address: new FormControl(''),
      licensed_no: new FormControl(''),
      tel_no: new FormControl(null),
      email: new FormControl(null),
      nemsa_test_cert: new FormControl(null),    
      // businesshub: new FormControl(null),   
      // region : new FormControl(null),   
     
      nemsaFileSource: new FormControl(null),      
    })
    this.portform.disable()
    if(this.action == 'edit'){
      // this.connection = data.row;
      this.portform.patchValue({
      // contractor:this.connection.contractor,

      // username: this.connection.username,
      // password: this.connection.password,
      // firstname: this.connection.firstname,
      // lastname: this.connection.lastname,
      contractor_name:this.connection.contractor_name,
      con_address: this.connection.con_address,
      licensed_no: this.connection.licensed_no,
      tel_no: this.connection.tel_no,
      email: this.connection.email,
      // reg_date: this.connection.reg_date,
      nemsa_test_cert: this.connection.nemsa_test_cert,
     

    })
  }

  this.getContractorDetails();
    }
  
    showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
      this.snackBar.open(text, '', {
        duration: 2000,
        verticalPosition: placementFrom,
        horizontalPosition: placementAlign,
        panelClass: colorName,
      });
    }


  submitReg() {
 
       this.portadd.updateContractorRegistration(
        this.portform.getRawValue(),
        User.getUser().id
        ).subscribe(
          (result) => {
            console.log(result)
           
            this.showNotification(
              'snackbar-success',
              'Registration Submitted for Approval Successfully...!!!',
              'bottom',
              'center'
            );
            this.getContractorDetails();
          }
    
        )
    
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


   


  ngOnInit(): void {
    
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
        

      },
      (error: any) => { console.error(error); }
    );
  }
  in_approval_workflow: Boolean = true;
  status: any;
  declined_comment: any;
  declined: Boolean = false;

getContractorDetails(){
    this.portadd.getContractorDetails(User.getUser().id).subscribe((result)=>{
      console.log(result);
      // this.getHubwithRegion(result.region);
      this.in_approval_workflow = result.in_approval_workflow;
      this.status = result.registration_status;
      this.declined_comment = result.declined_comment;
      this.declined = result.declined;
      if(result.in_approval_workflow == false){
        this.portform.enable()
      }
      else {
        this.portform.disable()
      };
      this.portform.patchValue({

        // username: result.username,
        contractor_name:result.contractor_name,
        con_address: result.con_address,
        licensed_no: result.licensed_no,
        tel_no: result.tel_no,
        email: result.email,
        // region: result.businesshub,
        // businesshub:  result.businesshub,
      })
    })
 
}

}


