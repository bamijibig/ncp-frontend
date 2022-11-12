import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-connection-login',
  templateUrl: './connection-login.component.html',
  styleUrls: ['./connection-login.component.css']
})
export class ConnectionLoginComponent implements OnInit {
  portform:FormGroup;

  constructor(private postadd:AppserviceService) { 
    this.portform= new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  })
 

  }
  submitlog(){
    // this.postadd.loginService(
    //   this.portform.getRawValue()
    // ).subscribe(
    //   ()=>{}
    // )
  }
  
    confirmAdd(){}
 

  ngOnInit(): void {
  }

}

