import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-pubconnection-evaluate',
  templateUrl: './pubconnection-evaluate.component.html',
  styleUrls: ['./pubconnection-evaluate.component.css']
})
export class PubconnectionEvaluateComponent implements OnInit {
  id: any;
  evalconnection:any;
 pubeval_form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PubconnectionEvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.evalconnection=data.row;
    this.id = data.row?.id;
    this.pubeval_form= new FormGroup({
      eval_titlepro: new FormControl(data.row?.eval_titlepro),
      eval_usercom: new FormControl(data.row?.eval_usercom),
      eval_projmaincat: new FormControl(data.row?.eval_projmaincat),
      eval_dtrating: new FormControl(data.row?.eval_dtrating),
      eval_voltlevel: new FormControl(data.row?.eval_voltlevel),
      eval_subhead: new FormControl(data.row?.eval_subhead),
      eval_title: new FormControl(data.row?.eval_title),
      eval_extload: new FormControl(data.row?.eval_extload),
      eval_majchaexidss: new FormControl(data.row?.eval_majchaexidss),
      eval_nameofsub: new FormControl(data.row?.eval_nameofsub),
      eval_rating: new FormControl(data.row?.eval_rating),
      
      eval_region: new FormControl(data.row?.eval_region),
      eval_bhub: new FormControl(data.row?.eval_bhub),
      eval_loading: new FormControl(data.row?.eval_loading),
      eval_loadpercent: new FormControl(data.row?.eval_loadpercent),
      eval_1yrloadpercentload: new FormControl(data.row?.eval_1yrloadpercentload),
      eval_quarterlyload: new FormControl(data.row?.eval_quarterlyload),
      eval_amtbillkwh: new FormControl(data.row?.eval_amtbillkwh),
      eval_amtbillnaira: new FormControl(data.row?.eval_amtbillnaira),
      eval_collection: new FormControl(data.row?.eval_collection),
      eval_collectioneff: new FormControl(data.row?.eval_collectioneff),
      eval_custpop: new FormControl(data.row?.eval_custpop),
      eval_nameofextss: new FormControl(data.row?.eval_nameofextss),
      eval_extrating: new FormControl(data.row?.eval_extrating),
      eval_proposedloading: new FormControl(data.row?.eval_proposedloading),
      eval_extloadpercent: new FormControl(data.row?.eval_extloadpercent), 
      eval_3monthloadproj: new FormControl(data.row?.eval_3monthloadproj),
      eval_extprojbilling: new FormControl(data.row?.eval_extprojbilling),
      eval_projbillingkwh: new FormControl(data.row?.eval_projbillingkwh),
      eval_projcollection: new FormControl(data.row?.eval_projcollection),
      eval_projcollectioneff: new FormControl(data.row?.eval_projcollectioneff),
      eval_extcustpop: new FormControl(data.row?.eval_extcustpop),
      eval_fdrname: new FormControl(data.row?.eval_fdrname),
      eval_fdrcapacity: new FormControl(data.row?.eval_fdrcapacity),
      eval_fdrtrendpeak: new FormControl(data.row?.eval_fdrtrendpeak),
      eval_fdrsupload: new FormControl(data.row?.eval_fdrsupload),
      eval_cumload: new FormControl(data.row?.eval_cumload),
      eval_srcfeeder: new FormControl(data.row?.eval_srcfeeder),
      eval_projcost: new FormControl(data.row?.eval_projcost),  
      eval_donor: new FormControl(data.row?.eval_donor),
      eval_ibedc: new FormControl(data.row?.eval_ibedc),
      nocustomers: new FormControl(data.row?.nocustomers),
      expected_billcom: new FormControl(data.row?.expected_billcom),
      expected_gaincom: new FormControl(data.row?.expected_gaincom),
      eval_recmetertyp: new FormControl(data.row?.eval_recmetertyp),
      eval_statmeter: new FormControl(data.row?.eval_statmeter),
      title: new FormControl(data.row?.title),
      preamble: new FormControl(data.row?.preamble),
      findings: new FormControl(data.row?.findings),
      scopeofwork: new FormControl(data.row?.scopeofwork),
      recommendation: new FormControl(data.row?.recommendation),
      eval_custreq: new FormControl(data.row?.eval_custreq),
      eval_blockdiag: new FormControl(data.row?.eval_blockdiag),
      eval_schdiag: new FormControl(data.row?.eval_schdiag),
      eval_sitevform: new FormControl(data.row?.eval_sitevform),
      eval_projplanby: new FormControl(data.row?.eval_projplanby),
     
      
    })
    if(data.action == 'view'){
      this.pubeval_form.disable();
    };
  }

  ngOnInit(): void {
  }
  Execute(){
    this.appservice.pubevaluate_connection( this.id, this.pubeval_form.getRawValue()).subscribe(()=>{
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
