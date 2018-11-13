import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { Headers, Http, RequestOptions, HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';
import { MapComponent } from './map.component'
=======
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export class MapService {
  headers = new Headers();
  requestOptions = new RequestOptions();
  accessToken: string;

  constructor(
    private authService: AuthService,
<<<<<<< Updated upstream
    private http: Http,
    private mapcomponent :MapComponent
=======
    private http: Http
    // private mapcomponent :MapComponent
>>>>>>> Stashed changes
  ) {
    // //this.accessToken = this.authService.currentUser().api_token;
    // this.headers.append('Authorization', `${this.accessToken}`);
    // this.requestOptions = new RequestOptions({ headers: this.headers, params: {}});
<<<<<<< Updated upstream
    this.accessToken = this.mapcomponent.getAuthor;
    // this.accessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InUwMDAwMDEiLCJyb2xlIjoiVXNlciJ9.Of8LYd6olf4MHEMx3192W1UKMe53oJSRB6I_Y8kVSes';

=======
    // this.accessToken = this.mapcomponent.getAuthor;
    // this.accessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InUwMDAwMDEiLCJyb2xlIjoiVXNlciJ9.Of8LYd6olf4MHEMx3192W1UKMe53oJSRB6I_Y8kVSes';
>>>>>>> Stashed changes
  }

  // getData(){
  //   return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/U000001/problem_reports`,this.accessToken)
  //   .toPromise()
  //   .then((res)=>res.json() as any);
  // }

<<<<<<< Updated upstream
  login(username,password) {
    return this.http.post(`${environment.baseUrl}/api/v2/sign_in/users`,{username,password})
                .toPromise()
                .then((response) => response.json() as any)
  }


// getJson() {
//   return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/`, this.requestOptions)
//           .toPromise()
//           .then(response => response.json() as any);
//   }
//   getProduct(id: number) {
//     return this.http.get(`${environment.baseUrl}/api/v2/station_brands/1/users/${id}`, this.requestOptions)
//             .toPromise()
//             .then(response => response.json() as any);
//   }
=======
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

>>>>>>> Stashed changes
}