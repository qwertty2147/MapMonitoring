import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;
  constructor() {this.user = JSON.parse(localStorage.getItem('smart_pos_user')); }
  @Injectable()

  public currentUser() {
    const user = JSON.parse(localStorage.getItem('smart_pos_user'));
    return user;
  }

  public isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}

  

