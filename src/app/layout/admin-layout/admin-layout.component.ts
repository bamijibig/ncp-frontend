import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

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
  }
}
