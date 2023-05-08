import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, Route, CanLoad, CanDeactivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  userName: any

  canLoad(): boolean {
    this.userName = localStorage.getItem('userImg')
    if (this.userName == '' || this.userName == null || this.userName == "undefined") {
      this.router.navigate(['user']);
      return false;
    }

    return true;
  }
  canActivate(): boolean {
    this.userName = localStorage.getItem('userImg')
    if (this.userName == '' || this.userName == null || this.userName == "undefined") {
      this.router.navigate(['user']);
      return false;
    }

    return true;
  }



  constructor(private router: Router) { }
}
