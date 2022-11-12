import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
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
  constructor(public _router: Router,) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigateByUrl('/dashboard')
  }

  register(){
    this._router.navigateByUrl('/dashboard')
  }

  logout(){
    this._router.navigateByUrl('/')
  }
}
