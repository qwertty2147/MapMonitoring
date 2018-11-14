import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  headers = new Headers();
  requestOptions = new RequestOptions();
  accessToken: string;

  constructor(
    private authService: AuthService,
    private http: Http
    // private mapcomponent :MapComponent
  ) {
    // //this.accessToken = this.authService.currentUser().api_token;
    // this.headers.append('Authorization', `${this.accessToken}`);
    // this.requestOptions = new RequestOptions({ headers: this.headers, params: {}});
    // this.accessToken = this.mapcomponent.getAuthor;
    // this.accessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InUwMDAwMDEiLCJyb2xlIjoiVXNlciJ9.Of8LYd6olf4MHEMx3192W1UKMe53oJSRB6I_Y8kVSes';
  }

  // getData(){
  //   return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/U000001/problem_reports`,this.accessToken)
  //   .toPromise()
  //   .then((res)=>res.json() as any);
  // }

  login(username, password) {
    return this.http.post(`${environment.baseUrl}/api/v2/sign_in/users`, { username, password })
      .toPromise()
      .then((response) => response.json() as any)
  }

  getJson() {
    return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/`, this.requestOptions)
      .toPromise()
      .then(response => response.json() as any);
  }

  getProduct(id: string) {
    return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/${id}/problem_reports`, this.requestOptions)
      .toPromise()
      .then(response => response.json() as any);
  }

}