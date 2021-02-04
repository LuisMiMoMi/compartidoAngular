import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {

  constructor(private sign: SignService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.sign.isSigned())
      return true;
    else {
      this.router.navigate(["/login"]);
    }
  }
  
}
