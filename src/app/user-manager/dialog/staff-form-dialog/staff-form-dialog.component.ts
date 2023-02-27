import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-staff-form-dialog',
  templateUrl: './staff-form-dialog.component.html',
  styleUrls: ['./staff-form-dialog.component.css']
})
export class StaffFormDialogComponent implements OnInit {
  staffForm: FormGroup;
  action: any;
  staffRecord: any;
  allregions: any;
  hubs: any;
  constructor(
    private apiService: AppserviceService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
    this.getRegions();
    
    this.staffForm = new FormGroup({
      role: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirm_pass: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      jobtitle: new FormControl(''),
      stafftype: new FormControl(''),
      region: new FormControl(''),
      businesshub: new FormControl(''),
      phone_number: new FormControl(''),
 
    });
  
    if(this.action=='edit'){
      this.staffRecord = data.row.id
      this.staffForm.patchValue({
        role: data.row.role,
        email: data.row.email,
        first_name: data.row.first_name,
        last_name: data.row.last_name,
        jobtitle: data.row.job_title,
        phone_number: data.row.tel_no,
        stafftype: data.row.staff_type,
        region: data.row.region,
        businesshub: data.row.businesshub
   
      });
    };

   }

   getRegions() {
    this.apiService.getRegion().subscribe(
      (resp) => {
        this.allregions = resp;

      },
      (error) => { console.error(error); }
    );
  }

  getHubs(region_id: any) {
    this.apiService.getBhubFiltered(region_id.value).subscribe(
      (resp) => {
        this.hubs = resp;

      },
      (error) => { console.error(error); }
    );
  }


  ngOnInit(): void {
  }
  showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  StaffSignup(){
    if(this.action=='edit'){
      this.apiService.editStaffUser(this.staffRecord, this.staffForm.getRawValue()).subscribe((result)=>{
        console.log(result)
        this.showNotification(
          'snackbar-success',
          'User Record Updated Successfully...!!!',
          'bottom',
          'center'
        );
        this.dialogRef.close();
      })
    }
    else {
    this.apiService.addNewUser(this.staffForm.getRawValue()).subscribe((result)=>{
      console.log(result)
      this.showNotification(
        'snackbar-success',
        'User Created Successfully...!!!',
        'bottom',
        'center'
      );
      this.dialogRef.close();
    })
  }
  }
  onNoClick(){
    this.dialogRef.close();
  }
}


