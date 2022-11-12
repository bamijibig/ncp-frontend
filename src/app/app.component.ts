import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppserviceService } from './appservice.service';
import { port } from './port';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    public _router: Router,
    private appService:AppserviceService
    ) { 
    this.loginForm= new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  })
  }
  
  submit(){}

  ngOnInit(): void {
  }

  
  login(){
    this.appService.loginService(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
    ).subscribe(
      (res)=>{
        this.appService.setToken(res['token']);
        this._router.navigateByUrl('/dashboard');
      }
    )
    }
  
    logout(){
      this.appService.logOut().subscribe(()=>{
        this._router.navigateByUrl('/')
      });
    }

  register(){
    this._router.navigateByUrl('/dashboard')
  }

  // logout(){
  //   this._router.navigateByUrl('/')
  // }
}
