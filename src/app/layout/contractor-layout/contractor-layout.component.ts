import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-contractor-layout',
  templateUrl: './contractor-layout.component.html',
  styleUrls: ['./contractor-layout.component.css']
})
export class ContractorLayoutComponent implements OnInit {

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
