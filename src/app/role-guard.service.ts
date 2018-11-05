import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public auth: AuthService,
    public router: Router) { }@Injectable()
 
 
  
    canActivate(route: ActivatedRouteSnapshot): boolean {
      const user = this.auth.currentUser();
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }
}
