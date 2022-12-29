
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { User } from 'src/app/globalservice/global-service.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {
 action: any;
  connection: any;
  constructor(
    public dialogRef: MatDialogRef<AuditTrailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.action = data.action;
      this.connection = data.row;
    
    }
  
    ngOnInit(): void {
    
    }


}


