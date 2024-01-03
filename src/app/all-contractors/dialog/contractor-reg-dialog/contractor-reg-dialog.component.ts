import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';


@Component({
  selector: 'app-contractor-reg-dialog',
  templateUrl: './contractor-reg-dialog.component.html',
  styleUrls: ['./contractor-reg-dialog.component.css']
})
export class ContractorRegDialogComponent implements OnInit {
 action: any;
  portform: FormGroup;
  connection: any;
  mydata: any;
  constructor(
    public dialogRef: MatDialogRef<ContractorRegDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private portadd: AppserviceService,
    private snackBar: MatSnackBar,
    ) {
    //  this.getRegion();
     this.mydata = data.row;
    this.portform = new FormGroup({
      
      contractor_name: new FormControl({value: '', disabled: true}),
      con_address: new FormControl({value: '', disabled: true}),
      licensed_no: new FormControl({value: '', disabled: true}),
      tel_no: new FormControl({value: '', disabled: true}),
      email: new FormControl({value: '', disabled: true}),
      nemsa_test_cert: new FormControl({value: '', disabled: true}),    
      // businesshub: new FormControl(null),   
      // region : new FormControl(null),   
     
      nemsaFileSource: new FormControl({value: '', disabled: true}), 
      coren: new FormControl({value: '', disabled: true}), 
      corenFileSource: new FormControl({value: '', disabled: true})    
    })
   

    
    this.portform.patchValue({

      // username: result.username,
      contractor_name:data.row.contractor_name,
      con_address: data.row.con_address,
      licensed_no: data.row.licensed_no,
      tel_no: data.row.tel_no,
      email: data.row.email,
      // I ADDED THIS 
      coren:data.row.coren 
      // region: result.businesshub,
      // businesshub:  result.businesshub,
    })
    
    }
  
    submitReg(){}

  ngOnInit(): void {
    
  }

      

}


