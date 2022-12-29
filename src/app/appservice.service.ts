import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { finalize, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './globalservice/global-service.service';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  masterdomain = environment.hosturl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
    ) { }

  getContractorConnections(): Observable<any> {
    const url = this.masterdomain + 'contractor_connections/';
    const reqtoken = this.getToken();
    const headers = { 'Authorization': 'Token ' + reqtoken};
    return this.http.get(url, {headers:headers})
  }

  getPrecomList(): Observable<any> {
    const url = this.masterdomain + 'connection/precommision/list/';
    const reqtoken = this.getToken();
    const headers = { 'Authorization': 'Token ' + reqtoken};
    return this.http.get(url, {headers:headers})
  }

  getAllStaffConnections(): Observable<any> {
    const url = this.masterdomain + 'staff_connections/';
    const reqtoken = this.getToken();
    const headers = { 'Authorization': 'Token ' + reqtoken};
    return this.http.get(url, {headers:headers})
  }

  getConnectionDetail(id:any): Observable<any> {
    const url = this.masterdomain + 'connections/' + id + "/";
    // const reqtoken = this.getToken();
    // const headers = { 'Authorization': 'Token ' + reqtoken};
    return this.http.get(url)
  }

  CreateConnection( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'connections/';
    const formData = new FormData();
    formData.append('contractor', User.getUser().id);
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
    formData.append('letter_of_donation_dss', formvalue.letter_of_donation_dss);
    formData.append('nemsa_test_cert', formvalue.nemsa_test_cert);
    formData.append('transformer_waranty', formvalue.transformer_waranty);
    formData.append('transformer_test_cert', formvalue.transformer_test_cert);
    formData.append('bh', formvalue.businesshub);


    formData.append('in_approval_workflow', 'True');
    formData.append('connection_status', 'Submitted and Awaiting TM Review/Approval');
    formData.append('declined', "False");
    formData.append('tm_is_connection_approved', 'False');

    return this.http.post(url,formData)
  }


  editConnections(formvalue:any, id:any):Observable<any>{
    const url=this.masterdomain + 'connections/'+ id +'/';
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
    // formData.append('letter_of_donation_dss', formvalue.letter_of_donation_dss);
    // formData.append('nemsa_test_cert', formvalue.nemsaFileSource);
    // formData.append('transformer_waranty', formvalue.warrantyFileSource);
    // formData.append('transformer_test_cert', formvalue.testFileSource);
    formData.append('bh', formvalue.businesshub);

    formData.append('in_approval_workflow', 'True');
    formData.append('connection_status', 'Submitted and Awaiting TM Review/Approval');
    formData.append('declined', "False");
    formData.append('tm_is_connection_approved', 'False');
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

  signUp( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'signup/';
    const formData = new FormData();
    formData.append('username', formvalue.username);
    formData.append('email', formvalue.username);
    formData.append('password1', formvalue.password);
    formData.append('password2', formvalue.password2);
    formData.append('password', formvalue.password);
    formData.append('is_contractor', 'True');

    formData.append('first_name', 'NA');
    formData.append('last_name', 'NA');
    formData.append('job_title', 'NA');
    formData.append('role', 'Contractor');
    formData.append('tel_no', '');
  
    return this.http.post(url,formData)
  }
  // editregapi(formvalue:any, id:any):Observable<any>{
  //   const url=this.masterdomain + 'signup/'+ id +'/';
  //   const formData = new FormData();
  //   formData.append('username', formvalue.username);
  // formData.append('firstname', formvalue.firstname);
  // formData.append('lastname', formvalue.lastname);
  // formData.append('contractor_name', formvalue.contractor_name);
  // formData.append('con_address', formvalue.con_address);
  // formData.append('licensed_no', formvalue.licensed_no);
  // formData.append('tel_no', formvalue.tel_no);
  // formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
  // formData.append('reg_date', formvalue.reg_date);
  //   formData.append('password', formvalue.password);
  //   formData.append('firstname', formvalue.firstname);
  //   formData.append('lastname', formvalue.lastname);
  //   formData.append('contractfgetor_name', formvalue.contractor_name);
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

  // loginService( formvalue:any
  // ): Observable<any> {
  //   const url = this.masterdomain + 'login';
  //   const formData = new FormData();
  //   formData.append('username', formvalue.username);
  //   formData.append('password', formvalue.password);
  
  //   return this.http.post(url,formData)
  // }

  loginService(
    username: string, 
    password: string): Observable<any> {
    const url = this.masterdomain + 'login/';
    return this.http.post<any>(url, {username, password}).pipe(
      tap((user: { data: any; }) => localStorage.setItem('master.user', JSON.stringify(user.data)))
    );
  }

  
  setToken(token: string) {
    if(this.getToken()){
      this.cookieService.delete('ATN')
    }
    this.cookieService.set('ATN', token);
  }

  isAuthenticated() {
    const token = this.getToken();
    return token === '' ? false : true;
  }

  getToken() {
    return this.cookieService.get('ATN');
  }

  deleteToken(){
    
    this.cookieService.delete('ATN','/');
    this.cookieService.deleteAll();
  }

  logOut(): Observable<any> {
    const url = this.masterdomain + 'logout/';
    const reqtoken = this.getToken();
    const headers = { 'Authorization': 'Token ' + reqtoken};
    return this.http.post(url, null, { headers }).pipe(
      finalize(() => 
      this.keysToRemoveOnLogout()
    ));
  }

  keysToRemoveOnLogout(){
    localStorage.removeItem('master.user');
    this.deleteToken();
  }
  
  // editregister(formvalue:any, id:any):Observable<any>{
  //   const url=this.masterdomain + 'contractors/'+ id +'/';
  //   const formData = new FormData();
  //   // formData.append('username', formvalue.username);
  //   formData.append('region', formvalue.region);
  //   formData.append('businesshub', formvalue.businesshub);
  //   formData.append('firstname', formvalue.firstname);
  //   formData.append('lastname', formvalue.lastname);
  //   formData.append('contractor_name', formvalue.contractor_name);
  //   formData.append('con_address', formvalue.con_address);
  //   formData.append('licensed_no', formvalue.licensed_no);
  //   formData.append('tel_no', formvalue.tel_no);
  //   formData.append('coren_or_nemsa_competency', formvalue.coren_or_nemsa_competency);
  //   formData.append('reg_date', formvalue.reg_date);
    
    
  //   return this.http.put(url,formData)
  //  }
  // deleteloginapi(id:any):Observable<any>{
  //   const url=this.masterdomain + 'login/'+ id +'/';
  //   return this.http.delete(url)
  // }

  getOtherUsers(): Observable<any> {
    const url = this.masterdomain + 'list/user/staff';
    return this.http.get(url)
  }

  getContractorUsers(): Observable<any> {
    const url = this.masterdomain + 'list/user/contractors';
    return this.http.get(url)
  }


  getContractorDetails(id: any): Observable<any> {
    const url = this.masterdomain + 'contractors/' + id + '/';
    return this.http.get(url)
  }

  postRegion(formvalue:any):Observable<any>{
    const url = this.masterdomain + 'rh/';
    const formData= new FormData
    formData.append('region', formvalue.region);
    formData.append('location', formvalue.location);
    formData.append('regionManager', formvalue.regionManager);
    formData.append('technicalManager', formvalue.technicalManager);
    // formData.append('email', formvalue.email);
    // formData.append('phoneNumber', formvalue.phoneNumber);
    return this.http.post(url, formData)
  }

  editRegion(formvalue:any,id:any):Observable<any>{
    const url = this.masterdomain + 'rh/' + id + '/';
    const formData= new FormData
    formData.append('region', formvalue.region);
    formData.append('location', formvalue.location);
    formData.append('regionManager', formvalue.regionManager);
    formData.append('technicalManager', formvalue.technicalManager);
    // formData.append('email', formvalue.email);
    // formData.append('phoneNumber', formvalue.phoneNumber);
    return this.http.put(url, formData)
  }
getRegion():Observable<any>{
  const url = this.masterdomain + 'rhlist/';
  return this.http.get(url)
}
deleteRegion(id:any):Observable<any>{
  const url = this.masterdomain + 'rh/' + id + '/';
  return this.http.delete(url)

}
postBhub(formvalue:any):Observable<any>{
  const url = this.masterdomain + 'bh/';
  const formData= new FormData
  formData.append('region', formvalue.region);
  formData.append('businesshub', formvalue.businesshub);
  formData.append('location', formvalue.location);
  formData.append('hubManager', formvalue.hubManager);
  formData.append('technicalManager', formvalue.technicalManager);
  // formData.append('email', formvalue.email);
  // formData.append('phoneNumber', formvalue.phoneNumber);
  return this.http.post(url, formData)
}

editBhub(formvalue:any,id:any):Observable<any>{
  const url = this.masterdomain + 'bh/' + id + '/';
  const formData= new FormData
  formData.append('region', formvalue.region);
  formData.append('businesshub', formvalue.businesshub);
  formData.append('location', formvalue.location);
  formData.append('hubManager', formvalue.hubManager);
  formData.append('technicalManager', formvalue.technicalManager);
  // formData.append('email', formvalue.email);
  // formData.append('phoneNumber', formvalue.phoneNumber);
  return this.http.put(url, formData)
}
getBhub():Observable<any>{
const url = this.masterdomain + 'bhlist/';
return this.http.get(url)
}

getBhubFiltered(region:any):Observable<any>{
  const url = this.masterdomain + 'bhlist/?region='+ region;
  return this.http.get(url)
  }
deleteBhub(id:any):Observable<any>{
const url = this.masterdomain + 'bh/' + id + '/';
return this.http.delete(url)

}

addNewUser( formvalue:any
  ): Observable<any> {
    const url = this.masterdomain + 'signup/';
    const formData = new FormData();
    formData.append('username', formvalue.email);
    formData.append('email', formvalue.email);
    formData.append('tel_no', formvalue.phone_number);
    formData.append('password1', formvalue.password);
    formData.append('password2', formvalue.confirm_pass);
    formData.append('password', formvalue.password);
    formData.append('first_name',formvalue.first_name);
    formData.append('last_name', formvalue.last_name);
    formData.append('job_title', formvalue.jobtitle);
    formData.append('role', formvalue.role);
    if(formvalue.role =='is_tm'){
      formData.append('is_tm', 'True');
    };
    if(formvalue.role =='is_te'){
      formData.append('is_te', 'True');
    };
    if(formvalue.role =='is_admin'){
      formData.append('is_admin', 'True');
    };
    if(formvalue.role =='is_npd'){
      formData.append('is_npd', 'True');
    };
    if(formvalue.role =='is_cto'){
      formData.append('is_cto', 'True');
    };
    if(formvalue.role =='is_md'){
      formData.append('is_md', 'True');
    };
    if(formvalue.role =='is_hm'){
      formData.append('is_hm', 'True');
    };
    if(formvalue.role =='is_hsch'){
      formData.append('is_hsch', 'True');
    };
   
    return this.http.post(url,formData)
  }

    editStaffUser(staffid:any, formvalue:any
      ): Observable<any> {
        const url = this.masterdomain + 'contractors/' + staffid + '/';
        const formData = new FormData();
        formData.append('username', formvalue.email);
        formData.append('email', formvalue.email);
        formData.append('tel_no', formvalue.phone_number);
       
        formData.append('first_name',formvalue.first_name);
        formData.append('last_name', formvalue.last_name);
        formData.append('job_title', formvalue.jobtitle);
        formData.append('role', formvalue.role);
        if(formvalue.role =='is_tm'){
          formData.append('is_tm', 'True');
          formData.append('is_te', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'False');
          formData.append('is_admin', 'False');
        };
        if(formvalue.role =='is_admin'){
          formData.append('is_admin', 'True');
          formData.append('is_te', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'False');
        };
        if(formvalue.role =='is_te'){
          formData.append('is_te', 'True');
          formData.append('is_npd', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'False');
          formData.append('is_admin', 'False');
        };
        if(formvalue.role =='is_npd'){
          formData.append('is_te', 'False');
          formData.append('is_npd', 'True');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'False');
          formData.append('is_admin', 'False');
        };
        if(formvalue.role =='is_cto'){
          formData.append('is_te', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_cto', 'True');
          formData.append('is_tm', 'False');
          formData.append('is_md', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'False');
          formData.append('is_admin', 'False');
        };
        
        if(formvalue.role =='is_md'){
          formData.append('is_te', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'True');
          formData.append('is_hm', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_admin', 'False');
        };
        if(formvalue.role =='is_hsch'){
          formData.append('is_te', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_hsch', 'True');
          formData.append('is_hm', 'False');
          formData.append('is_admin', 'False');
        };
        if(formvalue.role =='is_hm'){
          formData.append('is_te', 'False');
          formData.append('is_npd', 'False');
          formData.append('is_tm', 'False');
          formData.append('is_cto', 'False');
          formData.append('is_md', 'False');
          formData.append('is_hsch', 'False');
          formData.append('is_hm', 'True');
          formData.append('is_admin', 'False');
        };
       
        return this.http.patch(url,formData)
      }
  

  updateContractorRegistration( formvalue:any, id: any
    ): Observable<any> {
      const url = this.masterdomain + 'contractors/' + id + '/';
      const formData = new FormData();
      formData.append('contractor_name', formvalue.contractor_name);
      formData.append('con_address', formvalue.con_address);
      formData.append('licensed_no', formvalue.licensed_no);
      formData.append('tel_no', formvalue.tel_no);
      formData.append('email', formvalue.email);
      formData.append('in_approval_workflow', 'True');
      formData.append('registration_status', 'Submitted and Awaiting HSCH Approval');
      formData.append('declined', "False");
      formData.append('hsch_is_contractor_approved', 'False');
      if(formvalue.nemsa_test_cert){
      formData.append('coren_or_nemsa_competency', formvalue.nemsa_test_cert);
      
      }
      return this.http.patch(url,formData)
    }

    getMyApprovaList(): Observable<any> {
      const url = this.masterdomain + 'list/myapprovals';
      const reqtoken = this.getToken();
      const headers = { 'Authorization': 'Token ' + reqtoken};
      return this.http.get(url, {headers:headers})
    }
    
    getMyConnectionApprovaList(): Observable<any> {
      const url = this.masterdomain + 'list/connections/myapprovals';
      const reqtoken = this.getToken();
      const headers = { 'Authorization': 'Token ' + reqtoken};
      return this.http.get(url, {headers:headers})
    }
    
    
  action( action:any, id: any, declinedcomment: any
    ): Observable<any> {
      const url = this.masterdomain + 'approveordecline/' + id + '/';
      const formData = new FormData();
      if(action == 'Approve'){
        if(User.getUser().is_hsch == true){
 
          formData.append('hsch_is_contractor_approved', 'True');
          formData.append('cto_is_contractor_approved', 'False');
          formData.append('md_is_contractor_approved', 'False');
          formData.append('hsch_is_contractor_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('hsch_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('registration_status', 'Approved By HSCH. Awaiting CTO Approval');

        }

        if(User.getUser().is_cto == true){
       
          formData.append('cto_is_contractor_approved', 'True');
          formData.append('cto_is_contractor_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('cto_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('registration_status', 'Approved By CTO. Awaiting MD Approval');

        }

        if(User.getUser().is_md == true){
 
          formData.append('md_is_contractor_approved', 'True');
          formData.append('md_is_contractor_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('md_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('registration_status', 'Registration Approval Completed');
          formData.append('in_approval_workflow', 'False');
          formData.append('registration_approved', 'True');
          

        }
        
        
      }
      if(action == 'Decline'){
        formData.append('declined', 'True');
        formData.append('in_approval_workflow', 'False');
        formData.append('declined_comment', declinedcomment);
        formData.append('registration_status', 'Registration Declined.');
      }
      
      const reqtoken = this.getToken();
      const headers = { 'Authorization': 'Token ' + reqtoken};
      return this.http.patch(url,formData,{headers:headers})
    }

    showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
      this.snackBar.open(text, '', {
        duration: 2000,
        verticalPosition: placementFrom,
        horizontalPosition: placementAlign,
        panelClass: colorName,
      });
    }


    getApprovalStatusReg(id:any): Observable<any> {
      const url = this.masterdomain + 'approvalstatus/'+ id + '/';
      return this.http.get(url)
    }
    

    evaluate_connection(id: any, form: any
      ): Observable<any> {
        const url = this.masterdomain + 'connection/approveordecline/' + id + '/';
        const formData = new FormData();

        formData.append('eval_title', form.eval_title);
        formData.append('eval_applicant', form.eval_applicant);
        formData.append('eval_dt', form.eval_dt);
        formData.append('eval_voltage_level', form.eval_voltage_level);
        formData.append('eval_estimated_load', form.eval_estimated_load);
        formData.append('te_is_connection_approved', form.eval_site_visit_date);
        
        formData.append('eval_site_visit_date', form.eval_site_visit_date);
        formData.append('eval_new4upgrade', form.eval_new4upgrade);
        formData.append('eval_conworkdone', form.eval_conworkdone);
        formData.append('eval_dtsubname', form.eval_dtsubname);
        formData.append('eval_region', form.eval_region);
        formData.append('eval_bhub', form.eval_bhub);
        
        formData.append('eval_comentoncon', form.eval_comentoncon);
        formData.append('eval_fdrname', form.eval_fdrname);
        formData.append('eval_fdrcapacity', form.eval_fdrcapacity);
        formData.append('eval_fdrpload', form.eval_fdrpload);
        formData.append('eval_tilldate', form.eval_tilldate);
        formData.append('eval_cumloada', form.eval_cumloada);

        formData.append('eval_srcfeeder', form.eval_srcfeeder);
        formData.append('eval_ptrsf', form.eval_ptrsf);
        formData.append('eval_trsfrating', form.eval_trsfrating);
        formData.append('eval_trendpeak', form.eval_trendpeak);
        formData.append('eval_cumtilldate', form.eval_cumtilldate);
        formData.append('eval_cummwithload', form.eval_cummwithload);
        formData.append('eval_permload', form.eval_permload);
        formData.append('eval_maravail', form.eval_maravail);
        formData.append('eval_title2', form.eval_title2);
        formData.append('eval_fulspons', form.eval_fulspons);
        formData.append('eval_estpcost', form.eval_estpcost);
        formData.append('eval_specoment', form.eval_specoment);
        formData.append('eval_preamble', form.eval_preamble);
        formData.append('eval_findings', form.eval_findings);
        formData.append('eval_scopework', form.eval_scopework);
        formData.append('eval_recom', form.eval_recom);


        formData.append('eval_titlepro', form.eval_titlepro);
        formData.append('eval_usercom', form.eval_usercom);
        formData.append('eval_projmaincat', form.eval_projmaincat);
        formData.append('eval_dtrating', form.eval_dtrating);
        formData.append('eval_voltlevel', form.eval_voltlevel);
        formData.append('eval_subhead', form.eval_subhead);
        formData.append('eval_voltage_level', form.eval_voltage_level);
        formData.append('eval_datevisit', form.eval_datevisit);
        formData.append('eval_specloc', form.eval_specloc);
        formData.append('eval_majchaexidss', form.eval_majchaexidss);
        
        formData.append('eval_nameofsub', form.eval_nameofsub);
        formData.append('eval_rating', form.eval_rating);
        formData.append('eval_loading', form.eval_loading);
        formData.append('eval_loadpercent', form.eval_loadpercent);
        formData.append('eval_2yrsloadproj', form.eval_2yrsloadproj);
        formData.append('eval_2yrsloadprojpercent', form.eval_2yrsloadprojpercent);
        formData.append('eval_amtbillkwh', form.eval_amtbillkwh);
        formData.append('eval_amtbillnaira', form.eval_amtbillnaira);
        formData.append('eval_collection', form.eval_collection);
        formData.append('eval_collectioneff', form.eval_collectioneff);

           
        formData.append('eval_fdrname2', form.eval_fdrname2);
        formData.append('eval_fdravail', form.eval_fdravail);
        formData.append('eval_fdrcapacity2', form.eval_fdrcapacity2);
        formData.append('eval_fdrtrendpeak', form.eval_fdrtrendpeak);
        formData.append('eval_fdrdate', form.eval_fdrdate);
        formData.append('eval_cumload2', form.eval_cumload2);
        formData.append('eval_srcfeeder2', form.eval_srcfeeder2);
        formData.append('eval_projcost', form.eval_projcost);
        formData.append('eval_sanctioncost', form.eval_sanctioncost);
        formData.append('eval_capcontribproj', form.eval_capcontribproj);
        formData.append('eval_donor', form.eval_donor);
        formData.append('eval_ibedc', form.eval_ibedc);
        formData.append('eval_aprovmbgrant', form.eval_aprovmbgrant);
        formData.append('eval_recmetertyp', form.eval_recmetertyp);
        formData.append('eval_statmeter', form.eval_statmeter);
        formData.append('eval_specoment2', form.eval_specoment2);
        formData.append('eval_custreq', form.eval_custreq);
        formData.append('eval_condiag', form.eval_condiag);
        formData.append('eval_schdiag', form.eval_schdiag);
        formData.append('eval_sitevform', form.eval_sitevform);
        formData.append('eval_projplanby', form.eval_projplanby);










        formData.append('te_is_connection_approved', 'True');
        formData.append('te_is_connection_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
        formData.append('te_is_connection_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
        formData.append('connection_status', 'Evaluation Completed. Awaiting NP & D Approval');
        const reqtoken = this.getToken();
        const headers = { 'Authorization': 'Token ' + reqtoken};
        return this.http.patch(url,formData,{headers:headers})
      }
    

      request_precommissioning(id: any, form: any
        ): Observable<any> {
          const url = this.masterdomain + 'connections/' + id + '/';
          const formData = new FormData();
          formData.append('security_receipt', form.receipt);
          formData.append('ct_is_pre_requested', 'True');
          formData.append('ct_is_pre_requested_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('connection_status', 'Pre-commissiong Requested by Contractor. Awaiting Pre-commissioning Test');
          const reqtoken = this.getToken();
          const headers = { 'Authorization': 'Token ' + reqtoken};
          return this.http.patch(url,formData,{headers:headers})
        }
    
        submit_precom_test(id: any, form: any
          ): Observable<any> {
            const url = this.masterdomain + 'connection/approveordecline/' + id + '/';
            const formData = new FormData();
            formData.append('precom_project_title', form.precom_project_title);
            formData.append('precom_last_inspection_date', form.precom_last_inspection_date);
            formData.append('precom_project_objectives', form.precom_project_objectives);
            formData.append('precom_supplysrc', form.precom_supplysrc);
            formData.append('precom_fdrname3', form.precom_fdrname3);
            formData.append('precom_peakload', form.precom_peakload);
            formData.append('precom_dwndrpcon', form.precom_dwndrpcon);
            formData.append('precom_distofnss', form.precom_distofnss);
            formData.append('precom_nopoleht', form.precom_nopoleht);
            formData.append('precom_nopolelt', form.precom_nopolelt);
            formData.append('precom_podeptht', form.precom_podeptht);
            formData.append('precom_podepthlh', form.precom_podepthlh);
            formData.append('precom_sizeconduct', form.precom_sizeconduct);
            formData.append('precom_qtyused', form.precom_qtyused);
            formData.append('precom_wellallmetalprt', form.precom_wellallmetalprt);
            formData.append('precom_ssfencedibedc', form.precom_ssfencedibedc);
            formData.append('precom_wellgraveled', form.precom_wellgraveled);
            formData.append('precom_typfence', form.precom_typfence);
            formData.append('precom_nemsavail', form.precom_nemsavail);
            formData.append('precom_trsfcap', form.precom_trsfcap);
            formData.append('precom_voltratio', form.precom_voltratio);
            formData.append('precom_make', form.precom_make);
            formData.append('precom_sn', form.precom_sn);
            formData.append('precom_current', form.precom_current);
            formData.append('precom_vectorgrp', form.precom_vectorgrp);
            formData.append('precom_impedance', form.precom_impedance);
            formData.append('precom_yrsofman', form.precom_yrsofman);
            formData.append('precom_cooling', form.precom_cooling);
            formData.append('precom_cabletypsiz', form.precom_cabletypsiz);
            formData.append('precom_fdrpillarcurr', form.precom_fdrpillarcurr);
            formData.append('precom_icomcablesiz', form.precom_icomcablesiz);
            formData.append('precom_uprizercable', form.precom_uprizercable);
            formData.append('precom_nouprizercable', form.precom_nouprizercable);
            formData.append('precom_earthresv', form.precom_earthresv);
            formData.append('precom_pcm', form.precom_pcm);
            formData.append('precom_others', form.precom_others);


            formData.append('tept_is_connection_approved', 'True');
            formData.append('tept_is_connection_approved', 'True');
            formData.append('tept_is_connection_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
            formData.append('tept_is_connection_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
            formData.append('connection_status', 'Precommissioning Test Completed. Awaiting Head Metering Approval');
            const reqtoken = this.getToken();
            const headers = { 'Authorization': 'Token ' + reqtoken};
            return this.http.patch(url,formData,{headers:headers})
          }
        
  action_connection( action:any, id: any, declinedcomment: any
    ): Observable<any> {
      const url = this.masterdomain + 'connection/approveordecline/' + id + '/';
      const formData = new FormData();
      if(action == 'Approve'){
        if(User.getUser().is_tm == true){
 
          formData.append('tm_is_connection_approved', 'True');
          formData.append('npd_is_connection_approved', 'False');
          formData.append('te_is_connection_approved', 'False');
          formData.append('cto_is_connection_approved', 'False');
          formData.append('ct_is_pre_requested', 'False');
          formData.append('tept_is_connection_approved', 'False');
          formData.append('hm_is_connection_approved', 'False');
          formData.append('tm_is_connection_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('tm_is_connection_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('connection_status', 'Approved By TM. Awaiting TE Evaluation');

        }


        if(User.getUser().is_npd == true){
 
          formData.append('npd_is_connection_approved', 'True');
          formData.append('npd_is_connection_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('npd_is_connection_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('connection_status', 'Approved By NP & D. Awaiting Induction & CTO Approval');

        }

        if(User.getUser().is_cto == true){
       
          formData.append('cto_is_connection_approved', 'True');
          formData.append('cto_is_connection_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('cto_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('connection_status', 'Approved By CTO. Kindly request pre-commissioning');

        }

        if(User.getUser().is_hm == true){
 
          formData.append('hm_is_connection_approved', 'True');
          formData.append('hm_is_contractor_approved_date', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
          formData.append('hm_approved_by', User.getUser().first_name + " " + User.getUser().last_name);
          formData.append('connection_status', 'Connection Approval Completed');
          formData.append('in_approval_workflow', 'False');
          formData.append('connection_approved', 'True');
          

        }
        
        
      }
      if(action == 'Decline'){
        formData.append('declined', 'True');
        formData.append('in_approval_workflow', 'False');
        formData.append('declined_comment', declinedcomment);
        formData.append('connection_status', 'Connection Application Declined.');
      }
      
      const reqtoken = this.getToken();
      const headers = { 'Authorization': 'Token ' + reqtoken};
      return this.http.patch(url,formData,{headers:headers})
    }

    
  }