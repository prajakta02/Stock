import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (window.localStorage.getItem('loggedIn') === 'true') {
        return true;
    } else {
      console.log(window.localStorage.getItem('loggedIn'));
      this.router.navigate(['home']);
    }
  }
}
