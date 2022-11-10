import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  masterdomain = environment.hosturl;

  constructor(
    private http: HttpClient) { }
  getapi(): Observable<any> {
    const url = this.masterdomain + 'list_contractors/';
    return this.http.get(url)
  }

  postapi( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'supplier/';
    const formData = new FormData();
    formData.append('company_name', formvalue.company_name);
    formData.append('connectiontype', formvalue.connectiontype);
    formData.append('capacity', formvalue.capacity);
    formData.append('voltage_ratio', formvalue.voltage_ratio);
    formData.append('route_length_km', formvalue.route_length_km);
    formData.append('est_load_of_premises', formvalue.est_load_of_premises);
    formData.append('useofpremises', formvalue.useofpremises);
    formData.append('add_house_no', formvalue.add_house_no);
    formData.append('add_town_or_city', formvalue.add_town_or_city);
    formData.append('add_lga', formvalue.add_lga);
    formData.append('add_state', formvalue.add_state);
    formData.append('name_of_lincensed_elect_contractor', formvalue.name_of_lincensed_elect_contractor);
    formData.append('con_address', formvalue.con_address);
    formData.append('licensed_no', formvalue.licensed_no);
    formData.append('tel_no', formvalue.tel_no);
    formData.append('email', formvalue.email);
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
    return this.http.post(url,formData)
  }
  editContractor(formvalue:any, id:any):Observable<any>{
    const url=this.masterdomain + 'supplier/'+ id +'/';
    const formData = new FormData();
    formData.append('company_name', formvalue.company_name);
    formData.append('connectiontype', formvalue.connectiontype);
    formData.append('capacity', formvalue.capacity);
    formData.append('voltage_ratio', formvalue.voltage_ratio);
    formData.append('route_length_km', formvalue.route_length_km);
    formData.append('est_load_of_premises', formvalue.est_load_of_premises);
    formData.append('useofpremises', formvalue.useofpremises);
    formData.append('add_house_no', formvalue.add_house_no);
    formData.append('add_town_or_city', formvalue.add_town_or_city);
    formData.append('add_lga', formvalue.add_lga);
    formData.append('add_state', formvalue.add_state);
    formData.append('name_of_lincensed_elect_contractor', formvalue.name_of_lincensed_elect_contractor);
    formData.append('con_address', formvalue.con_address);
    formData.append('licensed_no', formvalue.licensed_no);
    formData.append('tel_no', formvalue.tel_no);
    formData.append('email', formvalue.email);
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
    return this.http.put(url,formData)
  }
  deleteContractor(id:any):Observable<any>{
    const url=this.masterdomain + 'supplier/'+ id +'/';
    return this.http.delete(url)
  }

  // FORM FOR REGISTRATION


  // getregapi(): Observable<any> {
  //   const url = this.masterdomain + 'signup';
  //   return this.http.get(url)
  // }

  postregapi( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'signup';
    const formData = new FormData();
    formData.append('username', formvalue.username);
    formData.append('password', formvalue.password);
    formData.append('firstname', formvalue.firstname);
    formData.append('lastname', formvalue.lastname);
    formData.append('contractor_name', formvalue.contractor_name);
    formData.append('con_address', formvalue.con_address);
    formData.append('licensed_no', formvalue.licensed_no);
    formData.append('tel_no', formvalue.tel_no);
    formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    formData.append('reg_date', formvalue.reg_date);
    
    
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
    return this.http.post(url,formData)
  }
  // editregapi(formvalue:any, id:any):Observable<any>{
  //   const url=this.masterdomain + 'signup/'+ id +'/';
  //   const formData = new FormData();
  //   formData.append('username', formvalue.username);
  //   formData.append('password', formvalue.password);
  //   formData.append('firstname', formvalue.firstname);
  //   formData.append('lastname', formvalue.lastname);
  //   formData.append('contractor_name', formvalue.contractor_name);
  //   formData.append('con_address', formvalue.con_address);
  //   formData.append('licensed_no', formvalue.licensed_no);
  //   formData.append('tel_no', formvalue.tel_no);
  //   formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
  //   formData.append('reg_date', formvalue.reg_date);
    
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
  //   return this.http.put(url,formData)
  // }
  // deleteregapi(id:any):Observable<any>{
  //   const url=this.masterdomain + 'signup/'+ id +'/';
  //   return this.http.delete(url)
  // }

  // FORMS FOR LOGIN
  // getloginapi(): Observable<any> {
  //   const url = this.masterdomain + 'login/';
  //   return this.http.get(url)
  // }

  postloginapi( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'login';
    const formData = new FormData();
    formData.append('username', formvalue.username);
    formData.append('password', formvalue.password);
    
    
    
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
    return this.http.post(url,formData)
  }
  // editloginapi(formvalue:any, id:any):Observable<any>{
  //   const url=this.masterdomain + 'login/'+ id +'/';
  //   const formData = new FormData();
  //   formData.append('username', formvalue.username);
  //   formData.append('password', formvalue.password);
  //   formData.append('firstname', formvalue.firstname);
  //   formData.append('lastname', formvalue.lastname);
  //   formData.append('contractor_name', formvalue.contractor_name);
  //   formData.append('con_address', formvalue.con_address);
  //   formData.append('licensed_no', formvalue.licensed_no);
  //   formData.append('tel_no', formvalue.tel_no);
  //   formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
  //   formData.append('reg_date', formvalue.reg_date);
    
    // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('letter_of_donation_dss', formvalue.dssFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
  //   return this.http.put(url,formData)
  // }
  // deleteloginapi(id:any):Observable<any>{
  //   const url=this.masterdomain + 'login/'+ id +'/';
  //   return this.http.delete(url)
  // }


}


   