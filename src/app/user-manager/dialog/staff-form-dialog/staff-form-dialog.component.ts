import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-form-dialog',
  templateUrl: './staff-form-dialog.component.html',
  styleUrls: ['./staff-form-dialog.component.css']
})
export class StaffFormDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-staff-form-dialog',
//   templateUrl: './staff-form-dialog.component.html',
//   styleUrls: ['./staff-form-dialog.component.css']
// })
// export class StaffFormDialogComponent implements OnInit {

//   action: any;
//   portform: FormGroup;
//   connection: any;
//   constructor(
 
//     // private portadd: AppserviceService
//     ) {
     
     
//       this.portform = new FormGroup({
//       firstname: new FormControl(''),
//       middlename: new FormControl(''),
//       lastname: new FormControl(''),
//       tel_no: new FormControl(null),
//       email: new FormControl(null),
//       staffID: new FormControl(''),
//       password: new FormControl(''),
//       confirmpassword: new FormControl(''),   
//       employmentType: new FormControl(''), 
//       division: new FormControl(null),
//       accounttype: new FormControl(null),    
//       permission: new FormControl(null),
//        status: new FormControl(null), 
//     })
//     if(this.action == 'edit'){
//       // this.connection = data.row;
//       this.portform.patchValue({
//       // contractor:this.connection.contractor,

//       username: this.connection.username,
//       password: this.connection.password,
//       confirmpassword: this.connection.confirmpassword,
//       firstname: this.connection.firstname,
//       lastname: this.connection.lastname,
//       staffID:this.connection.staffID,
//       status: this.connection.status,
//       tel_no: this.connection.tel_no,
//       email: this.connection.email,
//       division: this.connection.division,
//       accounttype: this.connection.accounttype,
//       employmentType: this.connection.employmentType,
//       middlename: this.connection.middlename,


//     })
//   }
//     }
  

  // submitReg() {
  //   if(this.action == 'edit'){
  //      // Edit code below
  //      this.portadd.editContractor(
  //       this.portform.getRawValue(),
  //       this.connection.id
  //       ).subscribe(
  //         (result) => {
  //           console.log(result)
           
  //         }
    
  //       )
    
  //   }
  //   else {
  //     //Add new connections code below
  //     this.portadd.signUp(
  //       this.portform.getRawValue()
  //       ).subscribe(
  //         (result) => {
  //           console.log(result)
           
  //         }
    
  //       )
    
  //   }
    
  // }


  


  // editSupplier(){
    
  // }
   


//   ngOnInit(): void {
    
//   }


//   confirmAdd(){

//   }


// }
