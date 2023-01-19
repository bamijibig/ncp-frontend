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
eval_form: FormGroup;
  constructor( public dialogRef: MatDialogRef<ConnectionEvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.id = data.row?.id;
   

    this.eval_form = new FormGroup({
      eval_title: new FormControl(data.row?.eval_title),
      eval_applicant: new FormControl(data.row?.eval_applicant),
      eval_dt: new FormControl(data.row?.eval_dt),
      eval_voltage_level: new FormControl(data.row?.eval_voltage_level),
      eval_estimated_load: new FormControl(data.row?.eval_estimated_load),
      eval_site_visit_date: new FormControl(data.row?.eval_site_visit_date),
      eval_new4upgrade: new FormControl(data.row?.eval_new4upgrade),
      eval_conworkdone: new FormControl(data.row?.eval_conworkdone),
      eval_dtsubname: new FormControl(data.row?.eval_dtsubname),
      eval_region: new FormControl(data.row?.eval_region),
      eval_bhub: new FormControl(data.row?.eval_bhub),
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
      eval_otherdoc: new FormControl(data.row?.eval_otherdoc),
      // eval_titlepro: new FormControl(data.row?.eval_titlepro),
      // eval_usercom: new FormControl(data.row?.eval_usercom),
      // eval_projmaincat: new FormControl(data.row?.eval_projmaincat),
      // eval_dtrating: new FormControl(data.row?.eval_dtrating),
      // eval_voltlevel: new FormControl(data.row?.eval_voltlevel),
      // eval_subhead: new FormControl(data.row?.eval_subhead),
      // eval_datevisit: new FormControl(data.row?.eval_datevisit),
      // eval_specloc: new FormControl(data.row?.eval_specloc),
      // eval_majchaexidss: new FormControl(data.row?.eval_majchaexidss),
      // eval_nameofsub: new FormControl(data.row?.eval_nameofsub),
      // eval_rating: new FormControl(data.row?.eval_rating),
      // eval_loading: new FormControl(data.row?.eval_loading),
      // eval_loadpercent: new FormControl(data.row?.eval_loadpercent),
      // eval_2yrsloadproj: new FormControl(data.row?.eval_2yrsloadproj),
      // eval_2yrsloadprojpercent: new FormControl(data.row?.eval_2yrsloadprojpercent),
      // eval_amtbillkwh: new FormControl(data.row?.eval_amtbillkwh),
      // eval_amtbillnaira: new FormControl(data.row?.eval_amtbillnaira),
      // eval_collection: new FormControl(data.row?.eval_collection),
      // eval_collectioneff: new FormControl(data.row?.eval_collectioneff),
      // eval_fdrname2: new FormControl(data.row?.eval_fdrname2),
      // eval_fdravail: new FormControl(data.row?.eval_fdravail),
      // eval_fdrcapacity2: new FormControl(data.row?.eval_fdrcapacity2),
      // eval_fdrtrendpeak: new FormControl(data.row?.eval_fdrtrendpeak),
      // eval_fdrdate: new FormControl(data.row?.eval_fdrdate),
      // eval_cumload2: new FormControl(data.row?.eval_cumload2),
      // eval_srcfeeder2: new FormControl(data.row?.eval_srcfeeder2),
      // eval_projcost: new FormControl(data.row?.eval_projcost),
      // eval_sanctioncost: new FormControl(data.row?.eval_sanctioncost),
      // eval_capcontribproj: new FormControl(data.row?.eval_capcontribproj),
      // eval_donor: new FormControl(data.row?.eval_donor),
      // eval_ibedc: new FormControl(data.row?.eval_ibedc),
      // eval_aprovmbgrant: new FormControl(data.row?.eval_aprovmbgrant),
      // eval_recmetertyp: new FormControl(data.row?.eval_recmetertyp),
      // eval_statmeter: new FormControl(data.row?.eval_statmeter),
      // eval_specoment2: new FormControl(data.row?.eval_specoment2),
      // eval_custreq: new FormControl(data.row?.eval_custreq),
      // eval_condiag: new FormControl(data.row?.eval_condiag),
      // eval_schdiag: new FormControl(data.row?.eval_schdiag),
      // eval_sitevform: new FormControl(data.row?.eval_sitevform),
      // eval_projplanby: new FormControl(data.row?.eval_projplanby),
      

    })
    if(data.action == 'view'){
      this.eval_form.disable();
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
