import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connection-delete',
  templateUrl: './connection-delete.component.html',
  styleUrls: ['./connection-delete.component.css']
})
export class ConnectionDeleteComponent implements OnInit {
  masterdomain= environment.hosturl

  constructor(private appservice:AppserviceService) { 

   }
   deleteConnection(id:any){

    const url = this.masterdomain + 'supplier/' + id + '/';
    return('connection is deleted')
    
   }

  ngOnInit(): void {
  }

}
