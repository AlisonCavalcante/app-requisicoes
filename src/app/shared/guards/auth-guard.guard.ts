import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): boolean{
    if(this.authService.loggedIn.value){
      console.log(this.authService.loggedIn)
      return true
    }
    return false
  }
}
