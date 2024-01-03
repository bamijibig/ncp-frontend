import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-pubconnection-precom-test',
  templateUrl: './pubconnection-precom-test.component.html',
  styleUrls: ['./pubconnection-precom-test.component.css']
})
export class PubconnectionPrecomTestComponent implements OnInit {
  id: any;
  precomconnection:any;
  pubprecom_form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PubconnectionPrecomTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private appservice:AppserviceService
  ) { 
    this.precomconnection=data.row;
    this.id = data.row?.id;
    this.pubprecom_form = new FormGroup({
      precom_project_title: new FormControl(data.row?.precom_project_title),
      precom_last_inspection_date: new FormControl(data.row?.precom_last_inspection_date),
      precom_project_objectives: new FormControl(data.row?.precom_project_objectives),
      precom_supplysrc: new FormControl(data.row?.precom_supplysrc),
      precom_fdrname3: new FormControl(data.row?.precom_fdrname3),
      precom_peakload: new FormControl(data.row?.precom_peakload),
      precom_dwndrpcon: new FormControl(data.row?.precom_dwndrpcon),
      precom_distofnss: new FormControl(data.row?.precom_distofnss),
      precom_nopoleht: new FormControl(data.row?.precom_nopoleht),
      precom_nopolelt: new FormControl(data.row?.precom_nopolelt),
      precom_podeptht: new FormControl(data.row?.precom_podeptht),
      precom_podepthlh: new FormControl(data.row?.precom_podepthlh),
      precom_sizeconduct: new FormControl(data.row?.precom_sizeconduct),
      precom_qtyused: new FormControl(data.row?.precom_qtyused),
      precom_wellallmetalprt: new FormControl(data.row?.precom_wellallmetalprt),
      precom_ssfencedibedc: new FormControl(data.row?.precom_ssfencedibedc),
      precom_wellgraveled: new FormControl(data.row?.precom_wellgraveled),
      precom_typfence: new FormControl(data.row?.precom_typfence),
      precom_nemsavail: new FormControl(data.row?.precom_nemsavail),


      precom_trsfcap: new FormControl(data.row?.precom_trsfcap),
      precom_voltratio: new FormControl(data.row?.precom_voltratio),
      precom_make: new FormControl(data.row?.precom_make),
      precom_sn: new FormControl(data.row?.precom_sn),
      precom_current: new FormControl(data.row?.precom_current),
      precom_vectorgrp: new FormControl(data.row?.precom_vectorgrp),
      precom_impedance: new FormControl(data.row?.precom_impedance),
      precom_yrsofman: new FormControl(data.row?.precom_yrsofman),
      precom_cooling: new FormControl(data.row?.precom_cooling),
      precom_cabletypsiz: new FormControl(data.row?.precom_cabletypsiz),
      precom_fdrpillarcurr: new FormControl(data.row?.precom_fdrpillarcurr),
      precom_icomcablesiz: new FormControl(data.row?.precom_icomcablesiz),
      precom_uprizercable: new FormControl(data.row?.precom_uprizercable),
      precom_nouprizercable: new FormControl(data.row?.precom_nouprizercable),
      precom_earthresv: new FormControl(data.row?.precom_earthresv),
      precom_pcm: new FormControl(data.row?.precom_pcm),
      precom_others: new FormControl(data.row?.precom_others),
         
    })
    if(data.action == 'view'){
      this.pubprecom_form.disable();
    };
}
ngOnInit(): void {
}
Execute(){
  this.appservice.submit_pubprecom_test( this.id, this.pubprecom_form.getRawValue()).subscribe(()=>{
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
