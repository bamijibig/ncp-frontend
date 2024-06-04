import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-connection-evaluate',
  templateUrl: './connection-evaluate.component.html',
  styleUrls: ['./connection-evaluate.component.css']
})
export class ConnectionEvaluateComponent implements OnInit {
id: any;
evalconnection:any;
eval_form: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionEvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.evalconnection=data.row;
    this.id = data.row?.id;
   

    this.eval_form = new FormGroup({
      eval_title: new FormControl(data.row?.eval_title),
      eval_applicant: new FormControl(data.row?.eval_applicant),
      eval_dt: new FormControl(data.row?.eval_dt),
      eval_voltage_level: new FormControl(data.row?.eval_voltage_level),
      eval_estimated_load: new FormControl(data.row?.eval_estimated_load),
      eval_site_visit_date: new FormControl(data.row?.eval_site_visit_date),
      // eval_new4upgrade: new FormControl(data.row?.eval_new4upgrade),
      eval_conworkdone: new FormControl(data.row?.eval_conworkdone),
      eval_dtsubname: new FormControl(data.row?.eval_dtsubname),
      // eval_region: new FormControl(data.row?.eval_region),
      // eval_bhub: new FormControl(data.row?.eval_bhub),
      eval_comentoncon: new FormControl(data.row?.eval_comentoncon),
      eval_fdrname: new FormControl(data.row?.eval_fdrname),
      eval_fdrcapacity: new FormControl(data.row?.eval_fdrcapacity),
      eval_fdrpload: new FormControl(data.row?.eval_fdrpload),
      eval_tilldate: new FormControl(data.row?.eval_tilldate),
      eval_cumloada: new FormControl(data.row?.eval_cumloada),
      eval_srcfeeder: new FormControl(data.row?.eval_srcfeeder),
      eval_ptrsf: new FormControl(data.row?.eval_ptrsf),
      eval_trsfrating: new FormControl(data.row?.eval_trsfrating),
      eval_trendpeak: new FormControl(data.row?.eval_trendpeak),
      eval_cumtilldate: new FormControl(data.row?.eval_cumtilldate),
      eval_permload: new FormControl(data.row?.eval_permload),
      eval_maravail: new FormControl(data.row?.eval_maravail),
      eval_fulspons: new FormControl(data.row?.eval_fulspons),
      eval_estpcost: new FormControl(data.row?.eval_estpcost),
      eval_specoment: new FormControl(data.row?.eval_specoment),
      eval_preamble: new FormControl(data.row?.eval_preamble),
      eval_findings: new FormControl(data.row?.eval_findings),
      eval_scopework: new FormControl(data.row?.eval_scopework),
      eval_recom: new FormControl(data.row?.eval_recom),
      eval_pcm: new FormControl(data.row?.eval_pcm),
      eval_sglinediagram: new FormControl(data.row?.eval_sglinediagram),
      eval_otherdoc: new FormControl(data.row?.eval_otherdoc),
      
      

    })
    if(data.action == 'view'){
      this.eval_form.disable();
      this.eval_form.patchValue({
        eval_site_visit_date:data.row?.eval_datevisit,

      })
    };
  }

  ngOnInit(): void {
  
  }

  Execute(){
    this.appservice.evaluate_connection( this.id, this.eval_form.getRawValue()).subscribe(()=>{
      this.appservice.showNotification(
        'snackbar-success',
        'Successfull',
        'bottom',
        'center'
      );
      this.dialogRef.close();
    })
  }

}
