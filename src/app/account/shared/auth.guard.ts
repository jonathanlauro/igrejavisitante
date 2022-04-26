import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){ }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const token = window.localStorage.getItem('token');

    if(token != null || token != undefined) {
      let jwt = token.split(".")[1]
      let objetoToken = JSON.parse(atob(jwt))

      if(objetoToken.role == "ROLE_ADMIN" || objetoToken.role == "ROLE_USER"){
        return true;
      }

    }
    this.router.navigate(['login'])
    return false;

  }

}
