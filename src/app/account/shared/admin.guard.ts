import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const token = window.localStorage.getItem('token');

      if(token != null || token != undefined) {
        let jwt = token.split(".")[1]
        let objetoToken = JSON.parse(atob(jwt))

        if(objetoToken.role == "ROLE_ADMIN"){
          return true;
        }

      }
      this.router.navigate(['login'])
      return false;
  }

}
