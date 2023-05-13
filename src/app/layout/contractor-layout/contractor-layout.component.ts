import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from 'src/app/globalservice/global-service.service';

@Component({
  selector: 'app-contractor-layout',
  templateUrl: './contractor-layout.component.html',
  styleUrls: ['./contractor-layout.component.css']
})
export class ContractorLayoutComponent implements OnInit {
  loggedinuser = User.getUser().contractor_name
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
