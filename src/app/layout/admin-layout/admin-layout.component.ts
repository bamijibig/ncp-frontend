import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  is_admin = User.getUser().is_admin;
  is_superuser = User.getUser().is_superuser;
  loggedinuser = User.getUser().first_name + " " + User.getUser().last_name
  userrole = User.getUser().role
  job_title = User.getUser().job_title
  constructor(
    public _router: Router,
    private appService:AppserviceService
  ) { }

  ngOnInit(): void {
  
  }
  logout(){
    this.appService.logOut().subscribe(()=>{
      this._router.navigateByUrl('/')
    });
    this._router.navigateByUrl('/');
  }
}
