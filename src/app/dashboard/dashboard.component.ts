import { Component, OnInit } from '@angular/core';
import { User } from '../globalservice/global-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  is_contractor: Boolean = false;
  is_admin: Boolean = false;
  is_tm: Boolean = false;
  is_te: Boolean = false;
  is_npd: Boolean = false;
  is_cto: Boolean = false;
  is_md: Boolean = false;
  is_hsch: Boolean = false;
  is_hse: Boolean = false;
  is_hbo: Boolean = false;
  is_hm: Boolean = false;
  is_superuser: Boolean = false;
  
  constructor() { 
    this.is_contractor = User.getUser().is_contractor;
    this.is_admin = User.getUser().is_admin;
    this.is_tm = User.getUser().is_tm;
    this.is_te = User.getUser().is_te;
    this.is_npd = User.getUser().is_npd;
    this.is_cto = User.getUser().is_cto;
    this.is_md = User.getUser().is_md;
    this.is_hse = User.getUser().is_hse;
    this.is_hbo = User.getUser().is_hbo;
    this.is_hm = User.getUser().is_hm;
    this.is_hsch = User.getUser().is_hsch;
    this.is_superuser = User.getUser().is_superuser;
  }

  ngOnInit(): void {
  }

}
