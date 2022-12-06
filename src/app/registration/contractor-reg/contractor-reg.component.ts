
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
 
    private portadd: AppserviceService
    ) {
     
     
    this.portform = new FormGroup({
      // contractor:new FormControl(null),
      username: new FormControl(''),
      // password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      contractor_name: new FormControl(''),
      con_address: new FormControl(''),
      licensed_no: new FormControl(''),
      tel_no: new FormControl(null),
      email: new FormControl(null),
      reg_date: new FormControl(null),
      nemsa_test_cert: new FormControl(null),    
     
     
      nemsaFileSource: new FormControl(null),
      
      
    })
    if(this.action == 'edit'){
      // this.connection = data.row;
      this.portform.patchValue({
      // contractor:this.connection.contractor,

      // username: this.connection.username,
      // password: this.connection.password,
      firstname: this.connection.firstname,
      lastname: this.connection.lastname,
      contractor_name:this.connection.contractor_name,
      con_address: this.connection.con_address,
      licensed_no: this.connection.licensed_no,
      tel_no: this.connection.tel_no,
      email: this.connection.email,
      reg_date: this.connection.reg_date,
      nemsa_test_cert: this.connection.nemsa_test_cert,
     

    })
  }
    }
  

  submitReg() {
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
      this.portadd.signUp(
        this.portform.getRawValue()
        ).subscribe(
          (result) => {
            console.log(result)
           
          }
    
        )
    
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


  editSupplier(){
    
  }
   


  ngOnInit(): void {
    
  }


  confirmAdd(){

  }



}


