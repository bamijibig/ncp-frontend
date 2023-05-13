import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppserviceService } from './appservice.service';
import { User } from './globalservice/global-service.service';
import { port } from './port';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  resetForm: FormGroup;
  is_contractor: Boolean = false;
  is_admin: Boolean = false;
  is_tm: Boolean = false;
  is_te: Boolean = false;
  is_npd: Boolean = false;
  is_cto: Boolean = false;
  is_hm: Boolean = false;
  is_md: Boolean = false;
  is_hsch: Boolean = false;
  is_superuser: Boolean = false;

  resetpassword: Boolean = false;
  errorreset: Boolean = false;
  errorresetemail: Boolean = false;
  loginerror: Boolean = false;

  constructor(
    public _router: Router,
    private appService:AppserviceService
    ) { 
    this.loginForm= new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl(''),
      group: new FormControl('CONTRACTOR')
  })

  this.resetForm= new FormGroup({
    email: new FormControl('', Validators.required),
    resetpassword1: new FormControl('', Validators.required),
    resetpassword2: new FormControl('', Validators.required),
    reset_token: new FormControl('', Validators.required),
})

 
  console.log(User.getUser())
  this.is_contractor = User.getUser()?.is_contractor;
  this.is_admin = User.getUser()?.is_admin;
  this.is_tm = User.getUser()?.is_tm;
  this.is_te = User.getUser()?.is_te;
  this.is_hm = User.getUser()?.is_hm;
  this.is_npd = User.getUser()?.is_npd;
  this.is_cto = User.getUser()?.is_cto;
  this.is_md = User.getUser()?.is_md;
  this.is_hsch = User.getUser()?.is_hsch;
  this.is_superuser = User.getUser()?.is_superuser;

  }
  resetPass(){
    this.resetpassword = true;
  }

  clearReset(){
    this.resetpassword = false;
  }
  submit(){}
  submitted = false;

  resetsubmit(){
    this.appService.resetPassword(this.resetForm.get('email')?.value).subscribe(()=>{
      this.submitted = true;
    },
    (error)=>{
      console.error(error);
      this.errorresetemail = true;
    });
  }

  finalreset(){
    const resettoken = this.resetForm.get("reset_token")?.value;
    const password = this.resetForm.get("resetpassword1")?.value;
    this.appService.resetPasswordConfirm(resettoken, password).subscribe(()=>{
      this.clearReset();
      this.submitted = false;
    },
    (error)=>{
      console.error(error);
      this.errorreset = true;
    });
  }


  ngOnInit(): void {
  }

  
  login(){
    this.appService.loginService(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
    ).subscribe(
      (res)=>{
        this.appService.setToken(res['token']);
        if(res.data.is_contractor){
          this._router.navigateByUrl('/contractor_reg')
          .then(() => {
            window.location.reload();
          });
        
        }
        else {
        this._router.navigateByUrl('/all-contractors')
          .then(() => {
            window.location.reload();
          });
        }
      },
      ()=>{
        this.loginerror = true
      }
    )
    }
  
    logout(){
      this.appService.logOut().subscribe(()=>{
        this._router.navigateByUrl('/')
      },
      (error)=>{
        this._router.navigateByUrl('/')
      });
    }

  register(){
    this.appService.signUp(this.loginForm.getRawValue()).subscribe(()=>{
      this.login();
    })
  }


  
}
