import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        // Authentication and Authorization code here
        // calling a user service - pass user/ pwd and make sure the user is correct
    return false; //false k có phép ng dùng truy cập vào trang, mình sẽ return 1 biến động để tùy trường hợp mà set nó có vào dc hay k
  }
  
}
