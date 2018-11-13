import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from './map.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { MARKERS } from '../mock-marker';


Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
<<<<<<< Updated upstream
  styleUrls: ['map.component.css'],
  providers: [MapService]
})
export class MapComponent implements OnInit ,AfterViewInit{

  markers = MARKERS;
  selected: marker;
  instance: any;

  ThLat: number = 13.736717;
  ThLng: number = 100.523186;
  markerLat: number ;
  markerLng: number ;
  username:string= 'U000001';
  password:string= 'ess@2017';
  errorMessage: string;
  getDataJson: any;
  getAuthor:any;
  list:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private mapService: MapService) { 

  }
  

  @ViewChild('rightside') rightside: ElementRef
  
  
 
  

  ngOnInit() {
    M.AutoInit();
      // this.LoginService();
      // this.checkAuthenAndRedirect();
      // this.getDataJson();
      // this.errorMessage = '';
    console.log('test')
      this.mapService.login(this.username,this.password)
      .then((response)=>{
        this.getAuthor = response.data.access_token;
        console.log('this is get author',this.getAuthor);
       
      });
      // this.mapService.getData()
      // .then((response) => {
      //   this.list = response.JobQuotation;
      //   console.log('response is : ',this.list);
      // });
      
     
    
    
    
  }
  getToken(){
    this.getAuthor
  }
  checkAuthenAndRedirect() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
//   LoginService(){
//     this.mapService.login(this.username,this.password)
//     .then(resp => {
//       const user = resp.data;
//     }, error => {
//       this.errorMessage = 'Username or password incorrect.';
//     });
//     this.mapService.getJson()
//       .then(resp => {
//          this.getDataJson = resp.data;
        
//       }, error => {
//         console.log(error);
//       });
  
// }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
   
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }
  ngAfterViewInit() {
    M.Sidenav.init(this.rightside.nativeElement, { edge: "right" });
    this.instance = M.Sidenav.getInstance(this.rightside.nativeElement);
    M.AutoInit();
  }
  
    }

  export interface marker {
      lat: number;
  lng: number;
  label?: string;
  name?: string;
  city?: string;
  idfix?: string;
  status?: string;
  pump?: string;
  handfree?: string;
  handoff?: string;
  infofix?: string;
=======
  styleUrls: ['map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  markers = MARKERS;
  selected: marker;
  instance: any;
  ThLat: number = 13.736717;
  ThLng: number = 100.523186;
  markerLat: number;
  markerLng: number;
  username: string = 'U000001';
  password: string = 'ess@2017';
  errorMessage: string;
  getDataJson: any;
  getAuthor: any;
  list: any;

  constructor(private authService: AuthService, private router: Router, private mapService: MapService) { }

  @ViewChild('rightside') rightside: ElementRef

  ngOnInit() {
    this.LoginService();
    // this.checkAuthenAndRedirect();
    // this.getDataJson();
    // this.errorMessage = '';
    console.log('test')
    // this.mapService.login(this.username,this.password)
    // .then((response)=>{
    //   this.getAuthor = response.data.access_token;
    //   console.log('this is get author',this.getAuthor);
    // });
    // this.mapService.getData()
    // .then((response) => {
    //   this.list = response.JobQuotation;
    //   console.log('response is : ',this.list);
    // });
  }

  getToken() {
    this.getAuthor
  }

  checkAuthenAndRedirect() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
>>>>>>> Stashed changes
    }
  }

  LoginService() {
    this.mapService.login(this.username, this.password)
      .then(resp => {
        const user = resp.data;
        this.mapService.accessToken = user.access_token;
        this.mapService.headers.append('Authorization' , this.mapService.accessToken)
        this.mapService.requestOptions.headers = this.mapService.headers
        this.mapService.requestOptions.withCredentials = true;
        console.log(this.mapService.requestOptions.headers.get('Authorization'))
        console.log(this.mapService.requestOptions.withCredentials);
        // console.log(this.mapService.accessToken);
      }, error => {
        this.errorMessage = 'Username or password incorrect.';
      });
    this.mapService.getProduct(this.username)
      .then(resp => {
        this.getDataJson = resp.data;
      }, error => {
        console.log(error);
      });
  }

  clickedMarker(label: string, index: number) {
    this.instance.open();
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }

  ngAfterViewInit() {
    M.Sidenav.init(this.rightside.nativeElement, { edge: "right" });
    this.instance = M.Sidenav.getInstance(this.rightside.nativeElement);
    M.AutoInit();
  }

}

export interface marker {
  lat: number;
  lng: number;
  label?: string;
  name?: string;
  city?: string;
  idfix?: string;
  status?: string;
  pump?: string;
  handfree?: string;
  handoff?: string;
  infofix?: string;
}

// interface Picture {
//   id: number;
//   picture: string;
//   problem_report_id: string;
// }

// export interface JobQuotation {
//   id: number;
//   quo_file: string;
//   sv_type?: any;
//   sv_note?: any;
//   quo_datetime: Date;
//   quo_datetime_default: string;
//   quo_price: string;
//   problem_report_id: string;
//   super_visor_id: string;
//   super_visor_name: string;
//   has_file: boolean;
//   host: string;
// }

// export interface OilStationRole {
//   id: number;
//   name: string;
//   station_brand_id: number;
//   created_at: Date;
//   updated_at: Date;
//   prefix: string;
//   notice?: any;
//   role_id: string;
// }

// export interface OilStation {
//   id: string;
//   name: string;
//   address: string;
//   zipcode: string;
//   phone_number1: string;
//   phone_number2: string;
//   fax: string;
//   email: string;
//   memo: string;
//   group_id: string;
//   created_at: Date;
//   updated_at: Date;
//   oilco_id: string;
//   sta_station_id: string;
//   district_id: string;
//   province_id: string;
//   gps: string;
//   type_en: string;
//   type_th: string;
//   ax_18: string;
//   area_code: string;
//   region: string;
//   area_manager_group_id: string;
//   comp_code: string;
//   comp_name: string;
//   station_brand_id: number;
//   oil_station_role_id: number;
//   warrenty_begin?: any;
//   warrenty_exp?: any;
//   user: string;
//   user_fullname: string;
//   user_id: string;
//   group: string;
//   area_manager: string;
//   area_manager_id: string;
//   area_manager_group: string;
//   area_manager_name: string;
//   super_user_name: string;
//   super_user_id: string;
//   province: string;
//   district: string;
//   full_address: string;
//   oil_station_role: OilStationRole;
// }

// export interface CloseJobDetail {
//   id: number;
//   order: number;
//   name: string;
//   problem: string;
//   resolve: string;
//   image?: any;
//   close_job_id: number;
//   created_at: Date;
//   updated_at: Date;
//   notice?: any;
// }

// export interface CloseJobSpare {
//   id: number;
//   order: number;
//   invent_item_id: string;
//   invent_item_type_id: string;
//   invent_store_id: string;
//   close_job_id: number;
//   qty: number;
//   price: number;
//   notice: string;
//   created_at: Date;
//   updated_at: Date;
//   total: number;
//   action_with: string;
// }

// export interface CloseJob {
//   id: number;
//   problem_report_id: string;
//   close_date_at: string;
//   close_time_at: string;
//   detail: string;
//   created_at: Date;
//   updated_at: Date;
//   sent: boolean;
//   closed_by: string;
//   equipment_resolve_id?: any;
//   close_job_details: CloseJobDetail[];
//   close_job_spares: CloseJobSpare[];
// }

// export interface Datum {
//   id: string;
//   status: string;
//   sender_name: string;
//   reporter_name: string;
//   reporter_id: string;
//   address: string;
//   phone_number: string;
//   report_at: Date;
//   report_at_default: string;
//   detail: string;
//   pictures: Picture[];
//   attachment?: any;
//   equipment: string;
//   equipment_id: string;
//   equipment_type: string;
//   equipment_type_id: string;
//   equipment_type_icon: string;
//   equipment_problem: string;
//   equipment_problem_code: string;
//   equipment_problem_id: string;
//   equipment_install: string;
//   equipment_install_id: string;
//   receiver: string;
//   receive_date: string;
//   receive_time: string;
//   receive_date_default: string;
//   receive_detail?: any;
//   approver: string;
//   approver_id: string;
//   approval_datetime?: Date;
//   approval_detail: string;
//   cancel_user_name: string;
//   cancel_user_id: string;
//   cancel_detail: string;
//   cancel_datetime: Date;
//   cancel_datetime_default: string;
//   job_no: string;
//   job_case: string;
//   job_tag?: any;
//   job_team?: any;
//   job_start_date: string;
//   job_start_full_date: string;
//   job_start_time: string;
//   job_close_date: string;
//   job_close_full_date: string;
//   job_close_time: string;
//   job_close_solving: string;
//   job_close_qrcodeid: string;
//   job_close_by: string;
//   job_close_by_name: string;
//   job_payment?: any;
//   job_payment_date?: any;
//   job_payment_full_date?: any;
//   job_payment_time?: any;
//   job_price: number;
//   job_memo: string;
//   job_process_type?: any;
//   quo_visible: string;
//   job_appmnt_date: string;
//   job_appmnt_full_date: string;
//   job_appmnt_time: string;
//   job_appmnt_description: string;
//   tag: string;
//   symptom: string;
//   rt_unit?: number;
//   dt_unit?: number;
//   updated_at: string;
//   job_type_id: string;
//   job_type_value?: any;
//   response_date: string;
//   response_time: string;
//   finish_date: string;
//   finish_time: string;
//   job_quotation: JobQuotation;
//   installed_location: string;
//   is_read: boolean;
//   station_name: string;
//   station_code: string;
//   station_pvn: string;
//   sv_username: string;
//   sv_fname: string;
//   sv_lname: string;
//   am_see_name: string;
//   am_see_remark: string;
//   am_see_datetime?: Date;
//   am_is_acknowledge?: boolean;
//   work_job_id: string;
//   latitude: string;
//   longitude: string;
//   oil_station: OilStation;
//   close_job: CloseJob;
//   is_warrentied?: any;
// }

// export interface RootObject {
//   code: number;
//   error_message?: any;
//   metadata?: any;
//   data: Datum[];
// }

// export interface Data {
//   access_token: string;
// }

    interface Picture {
      id: number;
      picture: string;
      problem_report_id: string;
  }

  export interface JobQuotation {
      id: number;
      quo_file: string;
      sv_type?: any;
      sv_note?: any;
      quo_datetime: Date;
      quo_datetime_default: string;
      quo_price: string;
      problem_report_id: string;
      super_visor_id: string;
      super_visor_name: string;
      has_file: boolean;
      host: string;
  }

  export interface OilStationRole {
      id: number;
      name: string;
      station_brand_id: number;
      created_at: Date;
      updated_at: Date;
      prefix: string;
      notice?: any;
      role_id: string;
  }

  export interface OilStation {
      id: string;
      name: string;
      address: string;
      zipcode: string;
      phone_number1: string;
      phone_number2: string;
      fax: string;
      email: string;
      memo: string;
      group_id: string;
      created_at: Date;
      updated_at: Date;
      oilco_id: string;
      sta_station_id: string;
      district_id: string;
      province_id: string;
      gps: string;
      type_en: string;
      type_th: string;
      ax_18: string;
      area_code: string;
      region: string;
      area_manager_group_id: string;
      comp_code: string;
      comp_name: string;
      station_brand_id: number;
      oil_station_role_id: number;
      warrenty_begin?: any;
      warrenty_exp?: any;
      user: string;
      user_fullname: string;
      user_id: string;
      group: string;
      area_manager: string;
      area_manager_id: string;
      area_manager_group: string;
      area_manager_name: string;
      super_user_name: string;
      super_user_id: string;
      province: string;
      district: string;
      full_address: string;
      oil_station_role: OilStationRole;
  }

  export interface CloseJobDetail {
      id: number;
      order: number;
      name: string;
      problem: string;
      resolve: string;
      image?: any;
      close_job_id: number;
      created_at: Date;
      updated_at: Date;
      notice?: any;
  }

  export interface CloseJobSpare {
      id: number;
      order: number;
      invent_item_id: string;
      invent_item_type_id: string;
      invent_store_id: string;
      close_job_id: number;
      qty: number;
      price: number;
      notice: string;
      created_at: Date;
      updated_at: Date;
      total: number;
      action_with: string;
  }

  export interface CloseJob {
      id: number;
      problem_report_id: string;
      close_date_at: string;
      close_time_at: string;
      detail: string;
      created_at: Date;
      updated_at: Date;
      sent: boolean;
      closed_by: string;
      equipment_resolve_id?: any;
      close_job_details: CloseJobDetail[];
      close_job_spares: CloseJobSpare[];
  }

  export interface Datum {
      id: string;
      status: string;
      sender_name: string;
      reporter_name: string;
      reporter_id: string;
      address: string;
      phone_number: string;
      report_at: Date;
      report_at_default: string;
      detail: string;
      pictures: Picture[];
      attachment?: any;
      equipment: string;
      equipment_id: string;
      equipment_type: string;
      equipment_type_id: string;
      equipment_type_icon: string;
      equipment_problem: string;
      equipment_problem_code: string;
      equipment_problem_id: string;
      equipment_install: string;
      equipment_install_id: string;
      receiver: string;
      receive_date: string;
      receive_time: string;
      receive_date_default: string;
      receive_detail?: any;
      approver: string;
      approver_id: string;
      approval_datetime?: Date;
      approval_detail: string;
      cancel_user_name: string;
      cancel_user_id: string;
      cancel_detail: string;
      cancel_datetime: Date;
      cancel_datetime_default: string;
      job_no: string;
      job_case: string;
      job_tag?: any;
      job_team?: any;
      job_start_date: string;
      job_start_full_date: string;
      job_start_time: string;
      job_close_date: string;
      job_close_full_date: string;
      job_close_time: string;
      job_close_solving: string;
      job_close_qrcodeid: string;
      job_close_by: string;
      job_close_by_name: string;
      job_payment?: any;
      job_payment_date?: any;
      job_payment_full_date?: any;
      job_payment_time?: any;
      job_price: number;
      job_memo: string;
      job_process_type?: any;
      quo_visible: string;
      job_appmnt_date: string;
      job_appmnt_full_date: string;
      job_appmnt_time: string;
      job_appmnt_description: string;
      tag: string;
      symptom: string;
      rt_unit?: number;
      dt_unit?: number;
      updated_at: string;
      job_type_id: string;
      job_type_value?: any;
      response_date: string;
      response_time: string;
      finish_date: string;
      finish_time: string;
      job_quotation: JobQuotation;
      installed_location: string;
      is_read: boolean;
      station_name: string;
      station_code: string;
      station_pvn: string;
      sv_username: string;
      sv_fname: string;
      sv_lname: string;
      am_see_name: string;
      am_see_remark: string;
      am_see_datetime?: Date;
      am_is_acknowledge?: boolean;
      work_job_id: string;
      latitude: string;
      longitude: string;
      oil_station: OilStation;
      close_job: CloseJob;
      is_warrentied?: any;
  }

  export interface RootObject {
      code: number;
      error_message?: any;
      metadata?: any;
      data: Datum[];
  }

  export interface Data {
    access_token: string;
}

